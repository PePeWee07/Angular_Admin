import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { MnDropdownComponent } from '../../../Component/dropdown';
import { RouterModule } from '@angular/router';
import { MDModalModule } from '../../../Component/modals';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [PageTitleComponent, SimplebarAngularModule, LucideAngularModule, MnDropdownComponent, RouterModule, MDModalModule],
  templateUrl: './list-view.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class ListViewComponent {

}
