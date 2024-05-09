import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { Store } from '@ngrx/store';
import { fetchNotesData } from '../../../store/Note/notes-action';
import { selectNoteLoading, selectNotes } from '../../../store/Note/notes-selector';
import { MnDropdownComponent } from '../../../Component/dropdown';
import { CommonModule } from '@angular/common';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { MDModalModule } from '../../../Component/modals';
import { NGXPagination } from '../../../Component/pagination';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, MnDropdownComponent, LucideAngularModule, NGXPagination, MDModalModule],
  templateUrl: './notes.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class NotesComponent {
  noteList: any;
  allnoteList: any;
  showFullDescription = false;
  currentPage: number = 1;
  itemsPerPage: number = 7;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;

  private store = inject(Store)
  selectedCategory: any = 'all';


  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchNotesData());
      this.store.select(selectNoteLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectNotes).subscribe(data => {
        this.noteList = cloneDeep(data)
        this.allnoteList = data
        this.totalItems = this.noteList.length;
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
    this.noteList = this.allnoteList.slice(this.startIndex, this.endIndex);
  }

  categoryFilter(category: any) {
    this.selectedCategory = category;
    this.noteList = this.allnoteList.filter((item: any) => {
      if (category == 'all') {
        return this.allnoteList
      } else {
        return item.category == category
      }

    })
  }

  // read more function
  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }

  // Add to Favourite
  addFav(id: any) {
    this.noteList[id].isActive = true
  }

}
