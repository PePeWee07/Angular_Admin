import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-overview',
  standalone: true,
  imports: [PageTitleComponent, LucideAngularModule, RouterModule],
  templateUrl: './order-overview.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class OrderOverviewComponent {

}
