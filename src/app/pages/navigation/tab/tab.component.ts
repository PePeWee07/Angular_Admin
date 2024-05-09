import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { NavModule } from '../../../Component/tab/tab.module';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [PageTitleComponent, LucideAngularModule, NavModule],
  templateUrl: './tab.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]

})
export class TabComponent {

}
