import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { Store } from '@ngrx/store';
import { fetchholidayListData } from '../../../store/HR/hr-action';
import { selectDataLoading, selectHolidayData } from '../../../store/HR/hr-selector';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { FlatpickrModule } from '../../../Component/flatpickr/flatpickr.module';
import { MDModalModule } from '../../../Component/modals';
import { NGXPagination } from '../../../Component/pagination';


@Component({
  selector: 'app-holidays',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, NgxDatatableModule, LucideAngularModule, NGXPagination, MDModalModule, FlatpickrModule],
  templateUrl: './holidays.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class HolidaysComponent {
  holidays: any;
  allholidays: any

  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;
  private store = inject(Store)

  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchholidayListData());
      this.store.select(selectDataLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectHolidayData).subscribe(data => {
        this.holidays = data
        this.allholidays = data
        this.totalItems = this.holidays.length;
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
    this.holidays = this.allholidays.slice(this.startIndex, this.endIndex);
  }

  columns = [
    { name: '#', prop: 'id' },
    { name: 'Day', prop: 'day' },
    { name: 'Date', prop: 'date' },
    { name: 'Holiday Name', prop: 'holidayName' },
    { name: 'Type', prop: 'type' },
    { name: 'Action', prop: 'action' }
  ]
}
