import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchUserListData } from '../../../store/User/user-action';
import { selectUserList, selectUserLoading } from '../../../store/User/user-selector';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { MDModalModule } from '../../../Component/modals';
import { MnDropdownComponent } from '../../../Component/dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { NGXPagination } from '../../../Component/pagination';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [PageTitleComponent, NgxDatatableModule, LucideAngularModule, NGXPagination, MDModalModule, MnDropdownComponent, NgSelectModule, CommonModule, RouterLink],
  templateUrl: './users-list.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class UsersListComponent {
  userList: any;

  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;
  alluserList: any

  private store = inject(Store)

  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchUserListData());
      this.store.select(selectUserLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectUserList).subscribe(data => {
        this.userList = data
        this.alluserList = data
        this.totalItems = this.userList.length;
      });

    }, 500)
  }


  StatusFiels = [
    { name: 'Select Status' },
    { name: 'Verified' },
    { name: 'Waiting' },
    { name: 'Rejected' },
    { name: 'Hidden' },
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
    this.userList = this.alluserList.slice(this.startIndex, this.endIndex);
  }
  columns = [
    { name: 'ID', prop: 'id' },
    { name: 'User ID', prop: 'userId' },
    { name: 'Name', prop: 'name' },
    { name: 'Location', prop: 'location' },
    { name: 'Email', prop: 'email' },
    { name: 'Phone Number', prop: 'phoneNumber' },
    { name: 'Joining Date', prop: 'joiningDate' },
    { name: 'Status', prop: 'status' },
    { name: 'Action', prop: 'actions' }
  ]
}
