import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask'

@Component({
  selector: 'app-input-mask',
  standalone: true,
  imports: [PageTitleComponent, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './input-mask.component.html',
  styles: ``
})
export class InputMaskComponent {


}
