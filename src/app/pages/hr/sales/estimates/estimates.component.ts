import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchEstimateData } from '../../../../store/HR/hr-action';
import { selectDataLoading, selectEstimates } from '../../../../store/HR/hr-selector';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { CommonModule } from '@angular/common';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FlatpickrModule } from '../../../../Component/flatpickr/flatpickr.module';
import { MDModalModule } from '../../../../Component/modals';
import { MnDropdownComponent } from '../../../../Component/dropdown';
import { NGXPagination } from '../../../../Component/pagination';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-estimates',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, NgxDatatableModule, LucideAngularModule, NgApexchartsModule, NGXPagination, FlatpickrModule, MDModalModule, MnDropdownComponent, NgSelectModule],
  templateUrl: './estimates.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class EstimatesComponent {
  estimateList: any;

  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;
  allestimateList: any;

  private store = inject(Store)

  Default = [
    {name:'Accepted'},
    {name:'Declined'},
    {name:'Expired'},
  ]
  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchEstimateData());
      this.store.select(selectDataLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectEstimates).subscribe(data => {
        this.estimateList = data
        this.allestimateList = data
        this.totalItems = this.estimateList.length;
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
    this.estimateList = this.allestimateList.slice(this.startIndex, this.endIndex);
  }
  columns = [
    { name: 'Estimate Number', prop: 'estimateNumber' },
    { name: 'Client Name', prop: 'clientName' },
    { name: 'Estimate By', prop: 'estimateBy' },
    { name: 'Estimate Date', prop: 'estimateDate' },
    { name: 'Expiry Date', prop: 'expiryDate' },
    { name: 'Amount', prop: 'amount' },
    { name: 'Status', prop: 'status' },
    { name: 'Action', prop: 'actions' }
  ]
}
