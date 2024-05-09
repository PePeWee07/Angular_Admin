import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { FormsModule } from '@angular/forms';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
@Component({
  selector: 'app-input-spin',
  standalone: true,
  imports: [PageTitleComponent, FormsModule, LucideAngularModule],
  templateUrl: './input-spin.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class InputSpinComponent {

  // Default Increment
  quantity!: number;
  defaultincrese(id: any, qid: any) {
    this.quantity = parseInt((document.getElementById('quantity' + qid) as HTMLInputElement).value)

    if (id == '0' && this.quantity > 0) {
      this.quantity--
    }
    if (id == '1') {
      this.quantity++;
    }
    (document.getElementById('quantity' + qid) as HTMLInputElement).value = this.quantity.toString();
  }

}

