import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';


import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [PageTitleComponent,LucideAngularModule],
  templateUrl: './contact-us.component.html',
  styles: ``,
  providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class ContactUsComponent {

}
