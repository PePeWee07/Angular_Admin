import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { AccordionModule } from '../../../Component/accordian';
import { CollapsibleDirective } from '../../../Component/collapse';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [PageTitleComponent,AccordionModule,CollapsibleDirective,LucideAngularModule],
  templateUrl: './collapse.component.html',
  providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class CollapseComponent {

}
