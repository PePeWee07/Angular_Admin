import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { CountUpModule } from 'ngx-countup';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [PageTitleComponent, CountUpModule,LucideAngularModule],
  templateUrl: './countdown.component.html',
  providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class CountdownComponent {

}
