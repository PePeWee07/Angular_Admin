import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { fetchproductGridData } from '../../../../store/Ecommerce/ecommerce-action';
import { Store } from '@ngrx/store';
import { selectDataLoading, selectProductGrid } from '../../../../store/Ecommerce/ecommerce-selector';
import { MDModalModule } from '../../../../Component/modals';
import { CollapsibleDirective } from '../../../../Component/collapse';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { MnDropdownComponent } from '../../../../Component/dropdown';
import { RouterModule } from '@angular/router';
import { cloneDeep } from 'lodash';
import { NGXPagination } from '../../../../Component/pagination';
@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, MDModalModule, CollapsibleDirective, LucideAngularModule, MnDropdownComponent, RouterModule, NGXPagination],
  templateUrl: './grid.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class GridComponent {
  columns: any
  optionsWithFeatures: any
  products: any
  allproducts: any
  currentPage: number = 1;
  itemsPerPage: number = 11;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;
  // page = new Page();
  private store = inject(Store)
  viewType: any = 'gridView';

  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchproductGridData());
      this.store.select(selectDataLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectProductGrid).subscribe(data => {
        this.products = cloneDeep(data)
        this.allproducts = data
        this.totalItems = this.products.length;
      });

    }, 500)
  }


  // Pagination
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updatePagedOrders();
  }

  getEndIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalItems)
  }

  updatePagedOrders(): void {
    this.startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.endIndex = this.startIndex + this.itemsPerPage;
    this.products = this.allproducts.slice(this.startIndex, this.endIndex);
  }

  // Add to Favourite
  addFav(id: any) {
    this.products[id].isFav = true
  }

  changeView(type: any) {
    this.viewType = type;
  }
}
