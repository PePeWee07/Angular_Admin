import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
  selector: 'app-login-basic',
  standalone: true,
  imports: [RouterModule,LucideAngularModule],
  templateUrl: './login-basic.component.html',
  styles: ``,
  providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class LoginBasicComponent {

}
