import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, HostListener, NgModule, Renderer2, inject } from '@angular/core';
import { File, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { MENU } from './menu';
import { SimplebarAngularModule } from 'simplebar-angular';
import { MenuItem } from './menu.model';
import { MnDropdownComponent } from '../../Component/dropdown';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';
import { CutomDropdownComponent } from '../../Component/customdropdown';
import { Store } from '@ngrx/store';
import { getLayout, getSidebarsize } from '../../store/layout/layout-selector';
import { CommonModule } from '@angular/common';
import { changesidebarsize } from '../../store/layout/layout-action';


@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, SimplebarAngularModule, CutomDropdownComponent, TranslateModule, RouterModule, LucideAngularModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }, LanguageService]
})

export class SidebarComponent {
    menuItems: any;
    isMoreMenu: boolean = false;
    navData: any;
    navbarMenuItems: any = [];
    layout: any;
    size: any;

    private store = inject(Store)

    constructor(
        public translate: TranslateService) {
        translate.setDefaultLang('sp');
    }


    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        if (document.documentElement.getAttribute('data-layout') == 'horizontal') {
            if (document.documentElement.clientWidth >= 1025) {
                setTimeout(() => {
                    this.updateMenu();
                }, 500);
            }
        }
    }

    ngOnInit(): void {

        // Get Layout
        this.store.select(getLayout).subscribe((data) => {
            this.layout = data;
            if (this.layout == 'horizontal') {
                setTimeout(() => {
                    this.updateMenu();
                }, 1500);
            } else {
                this.menuItems = MENU;
            }
        })

        // Get size
        this.store.select(getSidebarsize).subscribe((data) => {
            this.size = data
        })

        // Initialize the navData and menuItems
        this.navData = MENU;
        this.menuItems = this.navData;
    }


    /***
 * Activate droup down set
 */
    ngAfterViewInit() {
        if (this.layout == 'horizontal') {
            setTimeout(() => {
                this.updateMenu();
            }, 1500);
        } else {
            this.menuItems = MENU;
        }
    }


    // Display Menu 
    updateMenu() {
        const isMoreMenu = false;
        const navbarHeader = document.querySelector(".navbar-header");
        const navbarNav = document.getElementById("navbar-nav") as any;

        // count width of horizontal menu      
        const fullWidthOfMenu = navbarHeader!.clientWidth - 150;

        const menuWidth = fullWidthOfMenu || 0;
        let totalItemsWidth = 0;
        let visibleItems: any = [];
        let hiddenItems: any = [];

        const moreMenuItem = {
            id: 'more',
            label: 'more',
            icon: 'network',
            subItems: null,
            link: 'sidebarMore',
            stateVariables: isMoreMenu,
            click: (e: any) => {
                e.preventDefault();
                this.isMoreMenu = !this.isMoreMenu;
            },
        };

        for (let i = 0; i < this.navData.length; i++) {
            const itemWidth = navbarNav?.children[i]?.offsetWidth;
            totalItemsWidth += itemWidth;

            if (totalItemsWidth <= menuWidth - 50 || window.innerWidth < 768) {
                visibleItems.push(this.navData[i]);
            } else {
                if (!this.navData[i].isTitle) {
                    hiddenItems.push(this.navData[i]);
                }
            }
            if (i + 1 === this.navData.length) {
                moreMenuItem.subItems = hiddenItems;
            }
        }

        const updatedMenuItems = hiddenItems.length > 0 ? [...visibleItems, moreMenuItem] : visibleItems;
        this.menuItems = updatedMenuItems;
    }


    hasItems(item: MenuItem) {
        return item.subItems !== undefined ? item.subItems.length > 0 : false;
    }

    // Hide Sidebar
    hideSidebar() {
        let sidebarOverlay = document.getElementById("sidebar-overlay") as any;
        sidebarOverlay.classList.add("hidden");
        document.documentElement.querySelector('.app-menu')?.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
    }

}
