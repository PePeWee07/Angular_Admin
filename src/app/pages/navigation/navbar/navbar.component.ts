import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [PageTitleComponent, CommonModule,LucideAngularModule],
  templateUrl: './navbar.component.html',
  styles: ``,
  providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class NavbarComponent {
  currentTab = 'home';
  isNavbarVisible = false

  // Change Tab Content
  changeTab(tab: string) {
    this.currentTab = tab;
  }

  // isNavbarVisible
  shownav() {
    this.isNavbarVisible = !this.isNavbarVisible
  }
}
