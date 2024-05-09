import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NavModule } from '../../../Component/tab/tab.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

import { FlatpickrModule } from '../../../Component/flatpickr/flatpickr.module';
@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [PageTitleComponent,NavModule,LucideAngularModule,NgSelectModule,FlatpickrModule,FormsModule],
  templateUrl: './account-settings.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class AccountSettingsComponent {
  selectedAccount: any = 'This is a placeholder';
  selectedOption = '0066'
  Default = [
    { name: 'Choice 1' },
    { name: 'Choice 2' },
    { name: 'Choice 3' },
  ];

  /**
 * Option groups Select2
 */
  selectedGroup = 'Choose a city';
  Groups = [
    { name: 'Montreal', country: 'CA', child: { state: 'Active' } },
    { name: 'Toronto', country: 'CA', child: { state: 'Active' } },
    { name: 'Vancouver', country: 'CA', child: { state: 'Active' } },
    { name: 'Lyon', country: 'FR', child: { state: 'Active' } },
    { name: 'Marseille', country: 'FR', child: { state: 'Active' } },
    { name: 'Paris', country: 'FR', child: { state: 'Active' } },
    { name: 'Barcelona', country: 'SP', child: { state: 'Active' } },
    { name: 'Madrid', country: 'SP', child: { state: 'Active' } },
    { name: 'Liverpool', country: 'UK', child: { state: 'Active' } },
    { name: 'London', country: 'UK', child: { state: 'Active' } },
    { name: 'Manchester', country: 'UK', child: { state: 'Active' } },
    { name: 'Michigan', country: 'US', child: { state: 'Active' } },
    { name: 'New York', country: 'US', child: { state: 'Active' } },
    { name: 'Washington', country: 'US', child: { state: 'Inactive' } }
  ];

  Options = [
    { code: '00012' },
    { code: '00014' },
    { code: '00014' },
    { code: '88800' },
    { code: '00100' },
    { code: '00001' },
  ]

}
