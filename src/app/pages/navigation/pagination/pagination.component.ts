import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [PageTitleComponent, LucideAngularModule, NgxPaginationModule],
  templateUrl: './pagination.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]

})
export class PaginationComponent {
  public p: number = 1;



  public serverPageChange(event: any): void {
  }

  public setCurrentPage(page: number): void {
    this.p = page;
  }

  public customPageChange(event: any): void {
  }

  public previous(): void {
    if (this.p > 1) {
      this.p--;
    }
  }

  public next(): void {
    // Assuming a total number of pages, update this based on your actual scenario
    const totalPages = 10;
    if (this.p < totalPages) {
      this.p++;
    }
  }

}
