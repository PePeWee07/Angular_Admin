import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { FlatpickrModule } from '../../../../Component/flatpickr/flatpickr.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
@Component({
  selector: 'app-create-payslip',
  standalone: true,
  imports: [PageTitleComponent, LucideAngularModule, FlatpickrModule, NgSelectModule, FormsModule],
  templateUrl: './create-payslip.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class CreatePayslipComponent {


  selectedAccount: any = 'Select Employee';

  Default = [
    { name: 'Select Employee' },
    { name: 'Holly Kavanaugh' },
    { name: 'Juliette Fecteau' },
    { name: 'Nancy Reynolds' },
    { name: 'Patricia Garcia' },
    { name: 'Thomas Hatfield' },
    { name: 'Willie Torres' },

  ];

}
