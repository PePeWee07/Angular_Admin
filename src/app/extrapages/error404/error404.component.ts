import { Component } from '@angular/core';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './error404.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class Error404Component {

}
