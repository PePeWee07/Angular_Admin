import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { SimplebarAngularModule } from 'simplebar-angular'

@Component({
  selector: 'app-simplebar',
  standalone: true,
  imports: [PageTitleComponent, SimplebarAngularModule],
  templateUrl: './simplebar.component.html',
  styles: ``
})
export class SimplebarComponent {

}
