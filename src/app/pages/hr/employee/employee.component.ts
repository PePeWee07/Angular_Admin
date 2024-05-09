import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { Store } from '@ngrx/store';
import { fetchemployeeListData } from '../../../store/HR/hr-action';
import { selectDataLoading, selectEmployeeData } from '../../../store/HR/hr-selector';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { MDModalModule } from '../../../Component/modals';
import { FlatpickrModule } from '../../../Component/flatpickr/flatpickr.module';
import { NGXPagination } from '../../../Component/pagination';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, NgxDatatableModule, LucideAngularModule, NGXPagination, MDModalModule, FlatpickrModule, RouterLink],
  templateUrl: './employee.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class EmployeeComponent {
  employes: any;
  allemployee: any;

  currentPage: number = 1;
  itemsPerPage: number = 7;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;

  private store = inject(Store)

  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchemployeeListData());
      this.store.select(selectDataLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectEmployeeData).subscribe(data => {
        this.employes = data
        this.allemployee = data
        this.totalItems = this.employes.length;
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
    this.employes = this.allemployee.slice(this.startIndex, this.endIndex);
  }

  columns = [
    { name: 'Employee ID', prop: 'employeeId' },
    { name: 'Name', prop: 'name' },
    { name: 'Designation', prop: 'designation' },
    { name: 'Email Id', prop: 'email' },
    { name: 'Phone Number', prop: 'phone' },
    { name: 'Location', prop: 'location' },
    { name: 'Experience', prop: 'experience' },
    { name: 'Joining Date', prop: 'joinDate' },
    { name: 'Action', prop: 'action' }
  ]
}
