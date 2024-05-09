import { Component, inject } from '@angular/core';
import { fetchExpenseData } from '../../../../store/HR/hr-action';
import { Store } from '@ngrx/store';
import { selectDataLoading, selectExpenses } from '../../../../store/HR/hr-selector';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { FlatpickrModule } from '../../../../Component/flatpickr/flatpickr.module';
import { MDModalModule } from '../../../../Component/modals';
import { CutomDropdownComponent } from '../../../../Component/customdropdown';
import { NGXPagination } from '../../../../Component/pagination';
import { MnDropdownComponent } from '../../../../Component/dropdown';


@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [PageTitleComponent, NgxDatatableModule, LucideAngularModule, NGXPagination, FlatpickrModule, MDModalModule,MnDropdownComponent],
  templateUrl: './expenses.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class ExpensesComponent {
  expenseList: any;

  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;
  allexpenseList: any

  private store = inject(Store)

  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchExpenseData());
      this.store.select(selectDataLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectExpenses).subscribe(data => {
        this.expenseList = data
        this.allexpenseList = data
        this.totalItems = this.expenseList.length;
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
    this.expenseList = this.allexpenseList.slice(this.startIndex, this.endIndex);
  }
  columns = [
    { name: 'Purchase Date', prop: 'purchaseDate' },
    { name: 'Item', prop: 'item' },
    { name: 'Purchased By', prop: 'purchasedBy' },
    { name: 'Paid By', prop: 'paidBy' },
    { name: 'Amount', prop: 'amount' },
    { name: 'Action', prop: 'actions' }
  ]
}