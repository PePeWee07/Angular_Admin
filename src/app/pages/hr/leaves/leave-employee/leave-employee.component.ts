import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { CountUpModule } from 'ngx-countup';
import { Store } from '@ngrx/store';
import { fetchemployeeLeaveData } from '../../../../store/HR/hr-action';
import { selectDataLoading, selectEmployeeLeave } from '../../../../store/HR/hr-selector';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { NGXPagination } from '../../../../Component/pagination';

@Component({
  selector: 'app-leave-employee',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, CountUpModule, NgxDatatableModule, LucideAngularModule, NGXPagination, RouterModule],
  templateUrl: './leave-employee.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class LeaveEmployeeComponent {
  leaves: any;

  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;
  allleaves: any
  private store = inject(Store)

  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchemployeeLeaveData());
      this.store.select(selectDataLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectEmployeeLeave).subscribe(data => {
        this.leaves = data
        this.allleaves = data
        this.totalItems = this.leaves.length;
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
    this.leaves = this.allleaves.slice(this.startIndex, this.endIndex);
  }

  columns = [
    { name: '#', prop: 'id' },
    { name: 'Leave Type', prop: 'leaveType' },
    { name: 'Reason', prop: 'reason' },
    { name: 'No Of Days', prop: 'noOfDays' },
    { name: 'From', prop: 'from' },
    { name: 'to', prop: 'to' },
    { name: 'Approved By', prop: 'approvedBy' },
    { name: 'Status', prop: 'status' },
    { name: 'Action', prop: 'actions' }
  ]
}
