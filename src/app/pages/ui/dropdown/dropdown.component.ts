import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { MnDropdownComponent } from '../../../Component/dropdown';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [PageTitleComponent, MnDropdownComponent, LucideAngularModule],
  templateUrl: './dropdown.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class DropdownComponent {

}
