import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { LanguageService } from '../../core/services/language.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { CustomizerComponent } from '../customizer/customizer.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent,RouterModule,CustomizerComponent,FooterComponent],
  template: `
   <div class="text-base bg-body-bg text-body font-public dark:text-zink-100 dark:bg-zink-800 group-data-[skin=bordered]:bg-body-bordered group-data-[skin=bordered]:dark:bg-zink-700">
    <div class="group-data-[sidebar-size=sm]:min-h-sm group-data-[sidebar-size=sm]:relative">
      <app-sidebar></app-sidebar>
      <app-topbar></app-topbar>
      <div class="relative min-h-screen group-data-[sidebar-size=sm]:min-h-sm">
        <div class="group-data-[sidebar-size=lg]:ltr:md:ml-vertical-menu group-data-[sidebar-size=lg]:rtl:md:mr-vertical-menu group-data-[sidebar-size=md]:ltr:ml-vertical-menu-md group-data-[sidebar-size=md]:rtl:mr-vertical-menu-md group-data-[sidebar-size=sm]:ltr:ml-vertical-menu-sm group-data-[sidebar-size=sm]:rtl:mr-vertical-menu-sm pt-[calc(theme('spacing.header')_*_1)] pb-[calc(theme('spacing.header')_*_0.8)] px-4 group-data-[navbar=bordered]:pt-[calc(theme('spacing.header')_*_1.3)] group-data-[navbar=hidden]:pt-0 group-data-[layout=horizontal]:mx-auto group-data-[layout=horizontal]:max-w-screen-2xl group-data-[layout=horizontal]:px-0 group-data-[layout=horizontal]:group-data-[sidebar-size=lg]:ltr:md:ml-auto group-data-[layout=horizontal]:group-data-[sidebar-size=lg]:rtl:md:mr-auto group-data-[layout=horizontal]:md:pt-[calc(theme('spacing.header')_*_1.6)] group-data-[layout=horizontal]:px-3 group-data-[layout=horizontal]:group-data-[navbar=hidden]:pt-[calc(theme('spacing.header')_*_0.9)]">
          <div class="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
            <router-outlet></router-outlet>
          </div>
        </div>
        <app-footer></app-footer>
       </div>
      </div>
    </div>
  <app-customizer></app-customizer>
  `,
  styleUrl: './layout.component.scss',
  providers:[LanguageService]
})
export class LayoutComponent {
  private store = inject(Store)

  layoutType!: string;

  constructor() {
  }

  ngOnInit() {
    this.store.select('layout').subscribe((data:any) => {
      this.layoutType = data.LAYOUT;
      document.documentElement.setAttribute('data-layout', data.LAYOUT);
      document.documentElement.setAttribute('data-sidebar', data.SIDEBAR_COLOR);
      data.LAYOUT == "vertical" ? document.documentElement.setAttribute('data-sidebar-size', data.SIDEBAR_SIZE) : '';
      document.documentElement.setAttribute('data-mode', data.LAYOUT_MODE);
      document.documentElement.setAttribute('data-topbar', data.TOPBAR_COLOR);
      document.documentElement.setAttribute('data-skin', data.LAYOUT_SKIN)
      document.documentElement.setAttribute('data-navbar', data.LAYOUT_NAVIGATION);
      document.documentElement.setAttribute('data-content', data.LAYOUT_WIDTH);
      document.documentElement.setAttribute('dir', data.LAYOUT_DIRECTION);
    })
  }
}
