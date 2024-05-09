import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { CountUpModule } from 'ngx-countup';
import { Store } from '@ngrx/store';
import { fetchattendanceData } from '../../../../store/HR/hr-action';
import { selectAttendence, selectDataLoading } from '../../../../store/HR/hr-selector';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { CommonModule } from '@angular/common';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { FlatpickrModule } from '../../../../Component/flatpickr/flatpickr.module';
import { NGXPagination } from '../../../../Component/pagination';

@Component({
  selector: 'app-attendance-hr',
  standalone: true,
  imports: [PageTitleComponent, CountUpModule, NgxDatatableModule, LucideAngularModule, NGXPagination, FlatpickrModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './attendance-hr.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class AttendanceHrComponent {
  attendance: any;

  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;
  allattendance: any;

  private store = inject(Store)

  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchattendanceData());
      this.store.select(selectDataLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectAttendence).subscribe(data => {
        this.attendance = data
        this.allattendance = data
        this.totalItems = this.attendance.length;
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
    this.attendance = this.allattendance.slice(this.startIndex, this.endIndex);
  }
  columns = [
    { name: 'Date', prop: 'date' },
    { name: 'Check In', prop: 'checkIn' },
    { name: 'Check Out', prop: 'checkOut' },
    { name: 'Meal Break', prop: 'mealBreak' },
    { name: 'Work Hours', prop: 'workHours' },
    { name: 'Overtime', prop: 'overtime' },
    { name: 'Action', prop: 'actions' }
  ]
}
