import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { createPopper, Instance as PopperInstance } from '@popperjs/core';

@Component({
  selector: '[mndropdown]',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div (click)="toggleDropdown($event)" style="width: 100%;">
    <ng-content select="[mndropdownToggle]"></ng-content>
  </div>
  @if(expand){
      <ng-content select="[mndropdownMenu]"></ng-content>
  }
  `
})
export class MnDropdownComponent {
  expand!: boolean;
  @Input() placement: any = '';
  private dropdownElement: HTMLElement | null = null;

  popperInstance!: PopperInstance;

  constructor(private el: ElementRef) {
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.expand = false;
    }
  }

  getDropdownStyle(dropdownElement: any) {
    const dropbutton = this.el.nativeElement.querySelector('.dropdown-toggle ');
    createPopper(dropbutton, dropdownElement, {
      placement: this.placement,
    });
    return {};
  }

  toggleDropdown(event: Event) {
    this.expand = !this.expand;
    const button = (event.target as HTMLElement).closest('a');
    if (button) {
      button.classList.toggle('show', this.expand);
    }
    setTimeout(() => {
      this.dropdownElement = this.el.nativeElement.querySelector('.dropdown-menu');
      if (this.dropdownElement) {
        this.getDropdownStyle(this.dropdownElement)
      }
    }, 0);
  }

}