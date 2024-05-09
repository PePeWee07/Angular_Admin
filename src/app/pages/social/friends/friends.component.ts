import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { Store } from '@ngrx/store';
import { fetchFriendsData } from '../../../store/Social/social-action';
import { selectFriends, selectSocialLoading } from '../../../store/Social/social-selector';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { cloneDeep } from 'lodash';
import { MnDropdownComponent } from '../../../Component/dropdown';
import { NGXPagination } from '../../../Component/pagination';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [PageTitleComponent, NgxDatatableModule, LucideAngularModule, NGXPagination, RouterLink, CommonModule, MnDropdownComponent],
  templateUrl: './friends.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class FriendsComponent {
  friendList: any;
  showfollow: boolean = false
  currentPage: number = 1;
  itemsPerPage: number = 7;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;
  allfriendList: any
  private store = inject(Store)

  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchFriendsData());
      this.store.select(selectSocialLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectFriends).subscribe(data => {

        this.friendList = cloneDeep(data)
        this.allfriendList = data
        this.totalItems = this.friendList.length;
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
    this.friendList = this.allfriendList.slice(this.startIndex, this.endIndex);
  }

  columns = [
    { name: 'Friend Name', prop: 'name' },
    { name: 'Username', prop: 'username' },
    { name: 'Joining Date', prop: 'joiningDate' },
    { name: 'Status', prop: 'isFollow' }

  ]
  // Add to Favourite
  toggleFollow(row: any) {
    row.isFollow = !row.isFollow;
  }
}
