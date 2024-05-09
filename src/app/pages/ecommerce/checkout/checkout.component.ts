import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, LucideAngularModule, RouterModule],
  templateUrl: './checkout.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class CheckoutComponent {

}
