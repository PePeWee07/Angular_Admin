import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { PaymentsData } from '../../../../data';
import { CommonModule } from '@angular/common';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { FlatpickrModule } from '../../../../Component/flatpickr/flatpickr.module';
import { NGXPagination } from '../../../../Component/pagination';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, NgxDatatableModule, LucideAngularModule, NGXPagination, FlatpickrModule],
  templateUrl: './payments.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class PaymentsComponent {

  paymentList: any;
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;
  allpaymentList: any

  ngOnInit(): void {

    // Fetch Data
    this.paymentList = PaymentsData
    this.allpaymentList = PaymentsData
    this.totalItems = this.allpaymentList.length;
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
    this.paymentList = this.allpaymentList.slice(this.startIndex, this.endIndex);
  }
  columns = [
    { name: 'Payment ID', prop: 'paymentId' },
    { name: 'Membership Plan', prop: 'membershipPlan' },
    { name: 'Date', prop: 'date' },
    { name: 'Payment Type', prop: 'paymentType' },
    { name: 'Username', prop: 'username' },
    { name: 'Amount', prop: 'amount' },
    { name: 'Status', prop: 'status' }
  ]
}
