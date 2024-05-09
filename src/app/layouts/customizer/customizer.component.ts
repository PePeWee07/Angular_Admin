import { Component, inject } from '@angular/core';
import { DrawerModule } from '../../Component/drawer';
import { Store } from '@ngrx/store';
import { changeDirection, changeMode, changeSkin, changelayout, changenavigation, changesidebarcolor, changesidebarsize, changetopbarcolor, changewidthLayout } from '../../store/layout/layout-action';
import { getLayout, getLayoutSkin, getLayoutWidth, getLayoutdirection, getLayoutmode, getNavigation, getSidebarcolor, getSidebarsize, getTopbarcolor } from '../../store/layout/layout-selector';
import { CommonModule } from '@angular/common';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
  selector: 'app-customizer',
  standalone: true,
  imports: [DrawerModule, CommonModule,LucideAngularModule],
  templateUrl: './customizer.component.html',
  styles: ``,
  providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class CustomizerComponent {

  theme: string | undefined;
  mode: string | undefined;
  dir: string | undefined;
  skin: string | undefined;
  width: string | undefined;
  size: string | undefined;
  navbar: string | undefined;
  color: string | undefined;
  topbar: string | undefined;

  attribute: any;

  private store = inject(Store)

  ngOnInit(): void {

    this.store.select('layout').subscribe((data) => {
      this.theme = data.LAYOUT;
      this.skin = data.LAYOUT_SKIN;
      this.mode = data.LAYOUT_MODE;
      this.dir = data.LAYOUT_DIRECTION;
      this.width = data.LAYOUT_WIDTH;
      this.size = data.SIDEBAR_SIZE;
      this.navbar = data.LAYOUT_NAVIGATION;
      this.color = data.SIDEBAR_COLOR;
      this.topbar = data.TOPBAR_COLOR;
    })

    this.attribute = '';
  }

  // Theme Change
  changeTheme(layout: string) {
    this.theme = layout;
    this.store.dispatch(changelayout({ layout }));
    this.store.select(getLayout).subscribe((layout) => {
      document.documentElement.setAttribute('data-layout', layout)
    })

    if (layout == 'horizontal') {
      this.store.dispatch(changesidebarsize({ size:'lg' }));
      this.store.select(getSidebarsize).subscribe((size) => {
        document.documentElement.setAttribute('data-sidebar-size', size)
      })
    }
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }

  // Semi Layout Change
  changeSemiLayout(event: any) {
    if (event.target.checked == true) {
      this.store.dispatch(changetopbarcolor({ topbar: 'dark' }));
      this.store.dispatch(changesidebarcolor({ sidebar: 'dark' }));
      this.store.select(getTopbarcolor).subscribe((topbar) => {
        document.documentElement.setAttribute('data-topbar', topbar)
        document.documentElement.setAttribute('data-sidebar', topbar)
      })
    } else {
      this.store.dispatch(changetopbarcolor({ topbar: 'light' }));
      this.store.dispatch(changesidebarcolor({ sidebar: 'light' }));
      this.store.select(getTopbarcolor).subscribe((topbar) => {
        document.documentElement.setAttribute('data-topbar', topbar)
        document.documentElement.setAttribute('data-sidebar', topbar)
      })
    }
  }

  // skin Change
  changeSkinLayout(skin: string) {
    this.skin = skin;
    this.store.dispatch(changeSkin({ skin }));
    this.store.select(getLayoutSkin).subscribe((skin) => {
      document.documentElement.setAttribute('data-skin', skin)
    })
  }

  // Mode Change
  changeLayoutMode(mode: string) {
    this.mode = mode;
    const topbar = mode;
    const sidebar = mode;
    this.store.dispatch(changeMode({ mode }));
    this.store.dispatch(changetopbarcolor({ topbar: mode }));
    this.store.dispatch(changesidebarcolor({ sidebar:mode }));
    this.store.select(getLayoutmode).subscribe((mode) => {
      document.documentElement.setAttribute('data-mode', mode)
      document.documentElement.setAttribute('data-topbar', mode)
      document.documentElement.setAttribute('data-sidebar', mode)
    })
  }

  // Direction Change
  changeLayoutDirection(dir:string) {
    this.dir = dir;
    this.store.dispatch(changeDirection({ dir }));
    this.store.select(getLayoutdirection).subscribe((dir) => {
      document.documentElement.setAttribute('dir', dir)
    })
  }

  // Layout Width Change
  changeWidth(width: string) {
    this.width = width;
    this.store.dispatch(changewidthLayout({ width }));
    this.store.select(getLayoutWidth).subscribe((width) => {
      document.documentElement.setAttribute('data-content', width)
    })

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }

  // sidebar size Change
  changeSize(size: string) {
    this.size = size;
    this.store.dispatch(changesidebarsize({ size }));
    this.store.select(getSidebarsize).subscribe((size) => {
      document.documentElement.setAttribute('data-sidebar-size', size)
    })
  }

  // Navigation Change
  changenavbar(navigation: string) {
    this.navbar = navigation;
    this.store.dispatch(changenavigation({ navigation }));
    this.store.select(getNavigation).subscribe((navigation) => {
      document.documentElement.setAttribute('data-navbar', navigation)
    })
  }

  // sidebar color Change
  changecolor(sidebar: string) {
    this.color = sidebar;
    this.store.dispatch(changesidebarcolor({ sidebar }));
    this.store.select(getSidebarcolor).subscribe((sidebar) => {
      document.documentElement.setAttribute('data-sidebar', sidebar)
    })
  }

  // topbar color Change
  changetopbar(topbar: string) {
    this.topbar = topbar;
    this.store.dispatch(changetopbarcolor({ topbar }));
    this.store.select(getTopbarcolor).subscribe((topbar) => {
      document.documentElement.setAttribute('data-topbar', topbar)
    })
  }
}
