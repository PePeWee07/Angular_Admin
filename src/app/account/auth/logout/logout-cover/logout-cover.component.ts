import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
  selector: 'app-logout-cover',
  standalone: true,
  imports: [RouterModule,LucideAngularModule],
  templateUrl: './logout-cover.component.html',
  styles: ``,
  providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class LogoutCoverComponent {

}
