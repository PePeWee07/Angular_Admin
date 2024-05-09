import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { FlatpickrModule } from '../../../Component/flatpickr/flatpickr.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new',
  standalone: true,
  imports: [PageTitleComponent, LucideAngularModule, FlatpickrModule,NgSelectModule,FormsModule],
  templateUrl: './add-new.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class AddNewComponent {

  Default = [
    { name: 'Paid' },
    { name: 'Unpaid' },
    { name: 'Cancel' },
    { name: 'Refund' },
  ];

  Method = [
    { name: 'Credit Card' },
    { name: 'Paypal' },
    { name: 'Paypal' },
    { name: 'American Express' },
  ]

}
