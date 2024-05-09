import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, Renderer2, SimpleChanges, ViewEncapsulation, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getSidebarsize } from '../../store/layout/layout-selector';
import { createPopper } from '@popperjs/core';
@Component({
  selector: '[mndropdown]',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div (click)="toggleDropdown($event)" style="width: 100%;">
    <ng-content select="[mndropdownToggle]"></ng-content>
  </div>
  <div [ngClass]="{'hidden': !expand && size != 'sm'}">
    <ng-content select="[mndropdownMenu]"></ng-content>
  </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class CutomDropdownComponent {
  expand: any;
  @Input() placement: string = '';
  size: any;
  dropdownStates = new Map<HTMLElement, boolean>();

  constructor(private router: Router,
    private cdr: ChangeDetectorRef,
    private el: ElementRef,) {
  }

  private store = inject(Store);

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.initActiveMenu();
      }
    });

    // Get size
    this.store.select(getSidebarsize).subscribe((data) => {
      this.size = data;
      this.cdr.detectChanges();
    })

    setTimeout(() => {
      this.initActiveMenu();
    }, 0);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (document.documentElement.getAttribute('data-layout') == 'horizontal') {
      if (!this.el.nativeElement.contains(event.target)) {
        this.expand = false;
      }
    }
  }

  toggleDropdown(event: Event) {
    if (document.documentElement.getAttribute('data-layout') == 'horizontal') {
      this.expand = !this.expand;
      if (this.expand) {
        this.el.nativeElement.querySelector('[mndropdownToggle]').classList.add("active", "show")
      } else {
        this.el.nativeElement.querySelector('[mndropdownToggle]').classList.remove("active", "show")
      }
      setTimeout(() => {
        const dropdownMenu = this.el.nativeElement.querySelector('[mndropdownMenu]');
        const dropbutton = this.el.nativeElement.querySelector('.dropdown-button ');
        createPopper(dropbutton, dropdownMenu, {
          placement: dropdownMenu.classList.contains('sub-menu') ? 'left-start' : 'bottom-end',
        });
      }, 0);
    } else {
      event.stopPropagation();
      const dropdownMenu = this.el.nativeElement.querySelector('[mndropdownMenu]');
      if (dropdownMenu) {
        this.activateParentDropdown(dropdownMenu);
      } else {
        this.initActiveMenu();
      }
    }



  }

  initActiveMenu() {
    const pathName = window.location.pathname;
    const ul = document.getElementById("navbar-nav");
    if (ul) {
      const items = Array.from(ul.querySelectorAll("a"));
      let activeItems = items.filter((x: any) => x.classList.contains("active"));
      this.removeActivation(activeItems);
      let matchingMenuItem = items.find((x: any) => {
        return x.pathname === pathName;
      });

      if (matchingMenuItem) {
        this.activateParentDropdown(matchingMenuItem);
      }
    }
  }
  removeActivation(items: any) {
    items.forEach((item: any) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        item.classList.remove("show");
        const parentEle = item?.closest(".dropdown-content")?.parentElement;
        if (parentEle) {
          parentEle.classList.add("hidden");
        }
      }
    });
  }
  // remove active items of two-column-menu
  activateParentDropdown(item: any) {

    item.classList.add("active", "show");
    item.classList?.remove("hidden");
    let parentCollapseDiv = item?.closest(".dropdown-content")?.parentElement;

    if (document.documentElement.getAttribute("data-layout") == "vertical") {
      parentCollapseDiv?.classList.remove('hidden')
    }
    const parentDropButton = parentCollapseDiv?.parentElement.parentElement.children[0].querySelector('.dropdown-button')
    parentDropButton?.classList.add("active", "show");

    const mainParentContent = parentCollapseDiv?.parentElement.closest(".dropdown-content")?.parentElement
    if (mainParentContent) {
      if (document.documentElement.getAttribute("data-layout") == "vertical") {
        mainParentContent?.classList.remove('hidden')
      }
      const mainButton = mainParentContent.parentElement.children[0].querySelector('.dropdown-button')
      mainButton?.classList.add("active", "show")
    }
  }

}