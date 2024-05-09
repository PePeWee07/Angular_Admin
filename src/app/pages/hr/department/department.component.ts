import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { Store } from '@ngrx/store';
import { fetchDepartmentData } from '../../../store/HR/hr-action';
import { selectDataLoading, selectDepartment } from '../../../store/HR/hr-selector';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { MDModalModule } from '../../../Component/modals';
import { NGXPagination } from '../../../Component/pagination';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [PageTitleComponent, NgxDatatableModule, LucideAngularModule, NGXPagination, MDModalModule],
  templateUrl: './department.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class DepartmentComponent {
  departmentList: any;


  alldepartmentList: any;
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;

  private store = inject(Store)

  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchDepartmentData());
      this.store.select(selectDataLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectDepartment).subscribe(data => {
        this.departmentList = data
        this.alldepartmentList = data
        this.totalItems = this.departmentList.length;
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
    this.departmentList = this.alldepartmentList.slice(this.startIndex, this.endIndex);
  }

  columns = [
    { name: '#', prop: 'id' },
    { name: 'Department Name', prop: 'departmentName' },
    { name: 'Head of Dep.', prop: 'HOD' },
    { name: 'Phone Number', prop: 'phone' },
    { name: 'Email', prop: 'email' },
    { name: 'Employee', prop: 'employee' },
    { name: 'Action', prop: 'actions' }
  ]
}
