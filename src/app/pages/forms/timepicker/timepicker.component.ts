import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { FlatpickrModule } from '../../../Component/flatpickr/flatpickr.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timepicker',
  standalone: true,
  imports: [PageTitleComponent, FlatpickrModule, CommonModule, FormsModule],
  templateUrl: './timepicker.component.html',
  styles: ``
})
export class TimepickerComponent {

}
