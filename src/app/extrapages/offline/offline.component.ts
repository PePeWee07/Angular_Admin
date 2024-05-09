import { Component } from '@angular/core';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
  selector: 'app-offline',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './offline.component.html',
  styles: ``,
  providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class OfflineComponent {

}
