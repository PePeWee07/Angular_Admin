import { Component } from '@angular/core';
// pagetitle
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { Lightbox, LightboxModule } from 'ngx-lightbox';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [PageTitleComponent, LightboxModule],
  templateUrl: './lightbox.component.html',
  styles: ``
})
export class LightboxComponent {

  // Make _albums public
  images: Array<{ src: string; thumb: string }> = [];
  gallery: Array<{ src: string; caption: string; thumb: string }> = [];
  video: any;

  constructor(private _lightbox: Lightbox) {
    /**
    * Single Image Lightbox
    */
    for (let i = 1; i <= 4; i++) {
      const src = '../../../assets/images/small/img-' + i + '.jpg';
      const thumb = '../../../assets/images/small/img-' + i + '.jpg';
      const album = {
        src: src,
        thumb: thumb
      };
      this.images.push(album);
    }

    /**
     * Images with Description
  //    */
    for (let i = 10; i >= 7; i--) {
      const src = 'assets/images/small/img-' + i + '.jpg';
      const caption = 'Description Bottom';
      const thumb = 'assets/images/small/img-' + i + '.jpg';
      const album = {
        src,
        caption,
        thumb
      };
      this.gallery.push(album);
    }

    // Video
    for (let i = 10; i >= 7; i--) {
      const src = 'assets/images/small/img-' + i + '.jpg';
      const caption = 'Description Bottom';
      const thumb = 'assets/images/small/img-' + i + '.jpg';
 
      this.video = [{src:'https://i.ytimg.com/vi/qYgogv4R8zg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcI9Cw0yBtGv_ashbS-ogqh1OGpQ'},
        { src: 'https://i.ytimg.com/vi/waoOK5s9ypc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkSGeAQ17_LFepTKdEByyVTZkeVw' },
        {src:'https://i.ytimg.com/vi/waoOK5s9ypc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkSGeAQ17_LFepTKdEByyVTZkeVw'},
      {src:'https://i.ytimg.com/vi/TrftauE2Vyk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCm6UjEfDC3R5dJik1gEW__HEnaAA'}];
    }

  }


  ngOnInit(): void {

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag)
  }
  /**
   * Open ZoomGallery lightbox
   */
  openZoomGallery(index: number): void {
    // open lightbox
    this._lightbox.open(this.gallery, index, {
      wrapAround: true, showImageNumberLabel: true
    });

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

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.images, index, {
      showImageNumberLabel: true,
      disableLoader: true, navigator: true
    });

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

  openVideoGallery(index: number): void {
    this._lightbox.open(this.video, index, { });
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