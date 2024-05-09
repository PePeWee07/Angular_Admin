import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { FlatpickrModule } from '../../../../Component/flatpickr/flatpickr.module';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

@Component({
  selector: 'app-create',
  standalone: true,

  imports: [CommonModule, PageTitleComponent, DropzoneModule, NgSelectModule, FormsModule, LucideAngularModule, FlatpickrModule],

  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
    { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }
  ],
  templateUrl: './create.component.html',
  styles: ``
})
export class CreateComponent {

  selectedCar: any = [
    { id: 1, name: 'Fashion' },
    { id: 2, name: 'Clothes' },
    { id: 3, name: 'Headphones' }];

  uploadedFiles: any[] = [];

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


  // File Remove
  removeFile(event: any) {
    this.uploadedFiles.splice(this.uploadedFiles.indexOf(event), 1);
  }
}

