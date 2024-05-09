import { Component, HostListener, ViewChild, inject } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { Store } from '@ngrx/store';
import { fetchproductListData } from '../../../../store/Ecommerce/ecommerce-action';
import { selectData, selectDataLoading } from '../../../../store/Ecommerce/ecommerce-selector';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { MDModalModule } from '../../../../Component/modals';
import { CommonModule } from '@angular/common';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { MnDropdownComponent } from '../../../../Component/dropdown';
import { RouterModule } from '@angular/router';
import { FlatpickrModule } from '../../../../Component/flatpickr/flatpickr.module';
import { NGXPagination } from '../../../../Component/pagination';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [PageTitleComponent, NgxDatatableModule, MDModalModule, CommonModule, LucideAngularModule, MnDropdownComponent, RouterModule, FlatpickrModule, NGXPagination],
  templateUrl: './list.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class ListComponent {

  products: any
  allproducts: any
  currentPage: number = 1;
  itemsPerPage: number = 7;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;

  private store = inject(Store)

  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchproductListData());
      this.store.select(selectDataLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectData).subscribe(data => {
        this.products = data
        this.allproducts = data
        this.totalItems = data.length
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

  columns = [
    { name: 'Product Code', prop: 'productCode', resizable: true  },
    { name: 'Product Name', prop: 'productName', resizable: true  },
    { name: 'Category', prop: 'category', resizable: true  },
    { name: 'Price', prop: 'price', resizable: true  },
    { name: 'Stock', prop: 'stock', resizable: true  },
    { name: 'Revenue', prop: 'revenue', resizable: true  },
    { name: 'Status', prop: 'status', resizable: true  },
    { name: 'Actions', prop: 'actions' , resizable: true }
  ];


}
