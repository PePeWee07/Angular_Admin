import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { CutomDropdownComponent } from '../../../../Component/customdropdown';


@Component({
  selector: 'app-login-modern',
  standalone: true,
  imports: [RouterModule, LucideAngularModule, CutomDropdownComponent],
  templateUrl: './login-modern.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class LoginModernComponent {

  year = (new Date().getFullYear())

}
