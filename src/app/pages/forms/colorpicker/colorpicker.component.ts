import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { ColorPickerModule } from 'ngx-color-picker';

@Component({
  selector: 'app-colorpicker',
  standalone: true,
  imports: [PageTitleComponent, ColorPickerModule],
  templateUrl: './colorpicker.component.html',
  styles: ``
})
export class colorPickrComponent {
  componentcolor: any = '#405189';
  Nano: any = '#3577f1';
  dropper: any = '#f7b84b';
  event: any = '#eb5435'
}
