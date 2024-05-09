import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { AuthenticationService } from '../../../../core/services/auth.service';
import { environment } from '../../../../../environments/environment';
import { AuthfakeauthenticationService } from '../../../../core/services/authfake.service';

@Component({
  selector: 'app-logout-basic',
  standalone: true,
  imports: [RouterModule,LucideAngularModule],
  templateUrl: './logout-basic.component.html',
  styles: ``,
  providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class LogoutBasicComponent {

  constructor( private authService: AuthenticationService,public router:Router, private authFackservice: AuthfakeauthenticationService){}
   /**
   * Logout the user
   */
   logout() {
    if (environment.defaultauth === 'firebase') {
      this.authService.logout();
    } else {
      this.authFackservice.logout();
    }
    this.router.navigate(['/account-login']);
  }
}
