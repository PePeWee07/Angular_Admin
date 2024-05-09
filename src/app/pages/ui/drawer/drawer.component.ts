import { Component } from '@angular/core';
import { DrawerModule } from '../../../Component/drawer';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [DrawerModule,PageTitleComponent,LucideAngularModule],
  templateUrl: './drawer.component.html',
  providers: [{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class DrawerComponent {

}
