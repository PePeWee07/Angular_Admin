import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { SimplebarAngularModule } from 'simplebar-angular';
import { MDModalModule } from '../../../Component/modals';
import { mailbox } from '../../../data';
import { MnDropdownComponent } from '../../../Component/dropdown';
@Component({
  selector: 'app-email',
  standalone: true,
  imports: [PageTitleComponent, LucideAngularModule, SimplebarAngularModule, MDModalModule, MnDropdownComponent],
  templateUrl: './email.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export default class EmailComponents {

  mailbox: any
  emaillist: boolean = true;
  checkedCount: number = 0;

  ngOnInit(): void {
    this.mailbox = mailbox
  }

  emailList(show: boolean) {
    this.emaillist = show
  }


}
