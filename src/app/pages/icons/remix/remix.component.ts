import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

@Component({
  selector: 'app-remix',
  standalone: true,
  imports: [CommonModule,PageTitleComponent],
  templateUrl: './remix.component.html',
  styles: ``
})
export class RemixComponent {

}
