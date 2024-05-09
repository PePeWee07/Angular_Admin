import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [PageTitleComponent,LucideAngularModule],
  templateUrl: './avatar.component.html',
 providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class AvatarComponent {

}
