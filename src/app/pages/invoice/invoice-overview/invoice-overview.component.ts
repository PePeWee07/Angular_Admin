import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { MnDropdownComponent } from '../../../Component/dropdown';

@Component({
  selector: 'app-invoice-overview',
  standalone: true,
  imports: [PageTitleComponent,LucideAngularModule,MnDropdownComponent],
  templateUrl: './invoice-overview.component.html',
  styles: ``,
  providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class InvoiceOverviewComponent {

}
