import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { FlatpickrModule } from '../../../../Component/flatpickr/flatpickr.module';

@Component({
  selector: 'app-create-leave',
  standalone: true,
  imports: [PageTitleComponent,FlatpickrModule],
  templateUrl: './create-leave.component.html',
  styles: ``
})
export class CreateLeaveComponent {

}
