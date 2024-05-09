import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { ProductReviewsData } from '../../../../data';
import { MnDropdownComponent } from '../../../../Component/dropdown';
import { MDModalModule } from '../../../../Component/modals';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, LucideAngularModule, RouterModule,MnDropdownComponent,MDModalModule],
  templateUrl: './overview.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class OverviewComponent {

  reviewsList: any;

  ngOnInit(): void{
    this.reviewsList = ProductReviewsData
  }

}
