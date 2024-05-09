import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { MDModalModule } from '../../../Component/modals';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [PageTitleComponent, LucideAngularModule,
    MDModalModule],
  templateUrl: './modal.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]

})
export class ModalComponent {

}
