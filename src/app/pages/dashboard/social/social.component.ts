import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { MessageData, PopularEventsData, UpcomingBirthdayData, activeFriendsData, storyData } from '../../../data';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { MnDropdownComponent } from '../../../Component/dropdown';
import { MDModalModule } from '../../../Component/modals';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { FlatpickrModule } from '../../../Component/flatpickr/flatpickr.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};
@Component({
  selector: 'app-social',
  standalone: true,

  imports: [CommonModule, SimplebarAngularModule, LucideAngularModule, RouterModule, MnDropdownComponent, MDModalModule, DropzoneModule, LightboxModule, FlatpickrModule, NgSelectModule, FormsModule],

  templateUrl: './social.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) },
  {
    provide: DROPZONE_CONFIG,
    useValue: DEFAULT_DROPZONE_CONFIG
  }],

})
export class SocialComponent {
  storiesData: any;
  activeFriends: any;
  messageData: any;
  eventData: any;
  birthdayData: any;
  uploadedFiles: any[] = [];
  uploadedFile: any[] = [];
  images: any = [];

  constructor(private _lightbox: Lightbox) { }

  ngOnInit(): void {
    this.storiesData = storyData;
    this.activeFriends = activeFriendsData;
    this.messageData = MessageData;
    this.eventData = PopularEventsData;
    this.birthdayData = UpcomingBirthdayData;
    for (let i = 1; i <= this.storiesData.length; i++) {
      const src = 'https://cdn.dribbble.com/userupload/3012253/file/original-dd6cf163ea8f5617304d9d41f6ff38e7.png?resize=448/506';
      const thumb = 'https://cdn.dribbble.com/userupload/3012253/file/original-dd6cf163ea8f5617304d9d41f6ff38e7.png?resize=448/506';
      const album = {
        src: src,
        thumb: thumb,
        Animation: false,
      };
      this.images.push(album);
    }
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
      this.uploadedFile.push(event[0]);
    }, 0);
  }

  // File Remove
  removeFile(event: any) {
    this.uploadedFiles.splice(this.uploadedFiles.indexOf(event), 1);
  }

  // Open story Image
  openImage(index: any) {
    this._lightbox.open(this.images, index, {});

    setTimeout(() => {
      const lightboxImage = document.getElementById('image');
      const nav = document.querySelector('.lb-nav');
      let prev = document.querySelector('.lb-prev');
      let next = document.querySelector('.lb-next');
      if (lightboxImage && nav) {
        lightboxImage.removeAttribute('hidden');
        nav.removeAttribute('hidden');
        prev?.removeAttribute('hidden');
        next?.removeAttribute('hidden');
      }
    }, 100);
  }
}
