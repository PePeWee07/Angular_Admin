import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { MDAlertModule } from '../../../Component/alert';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [PageTitleComponent, MDAlertModule, LucideAngularModule],
  templateUrl: './alert.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]

})
export class AlertComponent {
  onCloseAlert() {
  }
}
