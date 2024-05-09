import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { FlatpickrModule } from '../../../../Component/flatpickr/flatpickr.module';

@Component({
  selector: 'app-create-leave-employee',
  standalone: true,
  imports: [CommonModule,PageTitleComponent,FlatpickrModule],
  templateUrl: './create-leave-employee.component.html',
  styles: ``
})
export class CreateLeaveEmployeeComponent {

}
