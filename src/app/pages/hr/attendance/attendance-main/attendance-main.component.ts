import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { MainAttendanceData } from '../../../../data';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

import { FlatpickrModule } from '../../../../Component/flatpickr/flatpickr.module';
import { CountUpModule } from 'ngx-countup';
import { MDModalModule } from '../../../../Component/modals';
import { NGXPagination } from '../../../../Component/pagination';

@Component({
  selector: 'app-attendance-main',
  standalone: true,
  imports: [PageTitleComponent, NgxDatatableModule, LucideAngularModule, CountUpModule, MDModalModule, FlatpickrModule, NGXPagination],

  templateUrl: './attendance-main.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class AttendanceMainComponent {
  attendanceList: any;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;
  allattendanceList: any

  ngOnInit(): void {
    this.attendanceList = MainAttendanceData;
    this.allattendanceList = MainAttendanceData;
    this.totalItems = this.attendanceList.length;
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
    this.attendanceList = this.allattendanceList.slice(this.startIndex, this.endIndex);
  }

  columns = [
    { name: 'Employee Name', prop: 'employeeName' },
    { name: '01', prop: 'Day1' },
    { name: '02', prop: 'Day2' },
    { name: '03', prop: 'Day3' },
    { name: '04', prop: 'Day4' },
    { name: '05', prop: 'Day5' },
    { name: '06', prop: 'Day6' },
    { name: '07', prop: 'Day7' },
    { name: '08', prop: 'Day8' },
    { name: '09', prop: 'Day9' },
    { name: '10', prop: 'Day10' },
    { name: '11', prop: 'Day11' },
    { name: '12', prop: 'Day12' },
    { name: '13', prop: 'Day13' },
    { name: '14', prop: 'Day14' },
    { name: '15', prop: 'Day15' },
    { name: '16', prop: 'Day16' },
    { name: '17', prop: 'Day17' },
    { name: '18', prop: 'Day18' },
    { name: '19', prop: 'Day19' },
    { name: '20', prop: 'Day20' },
    { name: '21', prop: 'Day21' },
    { name: '22', prop: 'Day22' },
    { name: '23', prop: 'Day23' },
    { name: '24', prop: 'Day24' },
    { name: '25', prop: 'Day25' },
    { name: '26', prop: 'Day26' },
    { name: '27', prop: 'Day27' },
    { name: '28', prop: 'Day28' },
    { name: '29', prop: 'Day29' },
    { name: '30', prop: 'Day30' }
  ]
}
