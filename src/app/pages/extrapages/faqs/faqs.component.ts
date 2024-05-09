import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import * as Prism from 'prismjs';

import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { CollapsibleDirective } from '../../../Component/collapse';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [PageTitleComponent, LucideAngularModule, CollapsibleDirective],
  templateUrl: './faqs.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class FaqsComponent {


  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
