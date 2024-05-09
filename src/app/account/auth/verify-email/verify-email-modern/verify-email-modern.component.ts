import { Component } from '@angular/core';
import { CutomDropdownComponent } from '../../../../Component/customdropdown';

@Component({
  selector: 'app-verify-email-modern',
  standalone: true,
  imports: [CutomDropdownComponent],
  templateUrl: './verify-email-modern.component.html',
  styles: ``
})
export class VerifyEmailModernComponent {


  year = (new Date().getFullYear())
}
