import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { Store } from '@ngrx/store';
import { fetchEmployeeSalaryData } from '../../../../store/HR/hr-action';
import { selectDataLoading, selectEmployeeSalary } from '../../../../store/HR/hr-selector';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { FlatpickrModule } from '../../../../Component/flatpickr/flatpickr.module';
import { RouterModule } from '@angular/router';
import { MnDropdownComponent } from '../../../../Component/dropdown';
import { NGXPagination } from '../../../../Component/pagination';


@Component({
  selector: 'app-employee-salary',
  standalone: true,
  imports: [PageTitleComponent, NgxDatatableModule, LucideAngularModule, NGXPagination, FlatpickrModule, RouterModule, MnDropdownComponent,RouterModule],
  templateUrl: './employee-salary.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class EmployeeSalaryComponent {
  salaryList: any;
  allsalaryList: any
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;
  private store = inject(Store)

  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchEmployeeSalaryData());
      this.store.select(selectDataLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectEmployeeSalary).subscribe(data => {
        this.salaryList = data
        this.allsalaryList = data
        this.totalItems = this.salaryList.length;
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
    this.salaryList = this.allsalaryList.slice(this.startIndex, this.endIndex);
  }

  columns = [
    { name: 'Employee ID', prop: 'employeeId' },
    { name: 'Joining Date', prop: 'joiningDate' },
    { name: 'Name', prop: 'name' },
    { name: 'Designation Number', prop: 'designation' },
    { name: 'Email Id', prop: 'emailId' },
    { name: 'Phone Number', prop: 'phoneNumber' },
    { name: 'Salary', prop: 'salary' },
    { name: 'Bonus', prop: 'bonus' },
    { name: 'Action', prop: 'actions' }
  ]
}