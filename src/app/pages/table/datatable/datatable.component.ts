import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { dataTable } from '../../../data';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { NGXPagination } from '../../../Component/pagination';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [PageTitleComponent, NgxDatatableModule,NGXPagination],
  templateUrl: './datatable.component.html',
  styles: ``
})
export class DatatableComponent {

  datatable: any
  currentPage: number = 1;
  itemsPerPage: number = 17;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;

  ngOnInit(): void {
    this.datatable = dataTable;
    this.totalItems = dataTable.length;
  }

    columns = [
      { name: 'Name', prop: 'name' },
      { name: 'Position', prop: 'position' },
      { name: 'Office', prop: 'office' },
      { name: 'Age', prop: 'age' },
      { name: 'Start Date', prop: 'startDate' },
      { name: 'Salary', prop: 'salary' }
    ]

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
    this.datatable = dataTable.slice(this.startIndex, this.endIndex);
  }
}
