import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-checkbox-radio',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './checkbox-radio.component.html',
  styles: ``
})
export class CheckboxRadioComponent {
  isChecked = true
}
