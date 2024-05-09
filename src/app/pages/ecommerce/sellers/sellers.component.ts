import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { MDModalModule } from '../../../Component/modals';
import { MnDropdownComponent } from '../../../Component/dropdown';
import { Store } from '@ngrx/store';
import { fetchsellerData } from '../../../store/Ecommerce/ecommerce-action';
import { selectDataLoading, selectSeller } from '../../../store/Ecommerce/ecommerce-selector';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { NGXPagination } from '../../../Component/pagination';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { cloneDeep } from 'lodash';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};
@Component({
  selector: 'app-sellers',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, MDModalModule, MnDropdownComponent, LucideAngularModule, NGXPagination, DropzoneModule],
  templateUrl: './sellers.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) },
  {
    provide: DROPZONE_CONFIG,
    useValue: DEFAULT_DROPZONE_CONFIG
  }],

})
export class SellersComponent {
  sellers: any;
  allsellers: any;
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalItems: number = 9;
  startIndex: number = 0;
  endIndex: any;
  allproducts: any
  uploadedFiles: any[] = [];
  private store = inject(Store)

  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchsellerData());
      this.store.select(selectDataLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectSeller).subscribe(data => {
        this.sellers = cloneDeep(data)
        this.allsellers = data
        this.totalItems = this.sellers.length;
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
    this.sellers = this.allsellers.slice(this.startIndex, this.endIndex);
  }

  public dropzoneConfig: DropzoneConfigInterface = {
    clickable: true,
    addRemoveLinks: true,
    previewsContainer: false
  };

  public dropzonesConfig: DropzoneConfigInterface = {
    clickable: true,
    addRemoveLinks: true,
    previewsContainer: false
  };


  // File Upload
  imageURL: any;
  onUploadSuccess(event: any) {
    setTimeout(() => {
      this.uploadedFiles.push(event[0]);
    }, 0);
  }

  onUploadsBorderSuccess(event: any) {
    setTimeout(() => {
      this.uploadedFiles.push(event[0]);
    }, 0);
  }

  // File Remove
  removeFile(event: any) {
    this.uploadedFiles.splice(this.uploadedFiles.indexOf(event), 1);
  }
  // Add to Favourite
  addFav(id: any) {
    this.sellers[id].isFav = true
  }
}
