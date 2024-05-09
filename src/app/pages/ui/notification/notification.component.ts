import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './notification.component.html',
  styles: ``,
})
export class NotificationComponent {
  constructor(public toastService: ToastrService) { }
  /**
 * Standard message
 */
  showStandard() {
    this.toastService.info('Welcome Back! This is a Toast Notification', '', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      closeButton: true
    });
  }

  showSuccess() {
    this.toastService.success('Your application was successfully sent', '', { positionClass: 'toast-top-left' });
  }

  showWarning() {
    this.toastService.warning('Warning ! Something went wrong try again', '', { positionClass: 'toast-top-left' });
  }

  showError() {
    this.toastService.error('Error ! An error occurred.', '', { positionClass: 'toast-top-left' });
  }

  positionToast(position: any) {
    this.toastService.info('Welcome Back ! This is a Toast Notification', '', {
      timeOut: 3000,
      positionClass: position,
      closeButton: true
    });
  }

  durationToast(position: any) {
    this.toastService.info('Toast Duration 5s', '', {
      timeOut: 5000,
      positionClass: position,
      closeButton: false
    });
  }

}
