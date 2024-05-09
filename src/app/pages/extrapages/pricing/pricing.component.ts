import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [PageTitleComponent,LucideAngularModule],
  templateUrl: './pricing.component.html',
  styles: ``,
  providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class PricingComponent {

}
