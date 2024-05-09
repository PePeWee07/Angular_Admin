import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [PageTitleComponent, TooltipModule],
  templateUrl: './tooltip.component.html',
  styles: ``
})
export class TooltipComponent {

}
