import { Component, OnInit } from '@angular/core';
// Carousel
import { SlickCarouselModule } from 'ngx-slick-carousel';

//Animation
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollSpyModule } from '../../Component/scrollspy';

@Component({
  selector: 'app-product-landing',
  standalone: true,
  imports: [SlickCarouselModule,CommonModule,LucideAngularModule,ScrollToModule,ScrollSpyModule],
  templateUrl: './product-landing.component.html',
  styles: ``,
  providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)},ScrollToService],
  animations: [
    trigger('slideRightToLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateX(100%)' })),
      ]),
    ]),
    trigger('slideLeftToRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateX(-100%)' })),
      ]),
    ]),
    trigger('zoomIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('500ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
    trigger('zoomInDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px) scale(0.5)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0) scale(1)' })),
      ]),
    ]),
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('zoomOutUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(1.2) translateY(50px)' }),
        animate('500ms', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'scale(0.8) translateY(-50px)' })),
      ]),
    ]),
  ],
})
export class ProductLandingComponent implements OnInit {

  show: boolean = false;
  firstshow:boolean = false;
  productshow:boolean = false;
  features:boolean = false;
  about:boolean = false;
  sliderfade:boolean = false;
  currentSection = 'home';

  ngOnInit(): void {
    document.documentElement.classList.add('overflow-x-hidden')

    // Animation of Exclusive Collections 2024
    setTimeout(() => {
      this.firstshow = true;
    }, 400);

  //Animation of Update & Newsletter and Unique Fashion
    setTimeout(() => {
      this.show = true;
    }, 2700);

    //Animation of Our Latest Product
    setTimeout(() => {
      this.productshow = true;
    }, 1000);

    //Animation of features
    setTimeout(() => {
      this.features = true;
    }, 1500);

     //Animation of about
     setTimeout(() => {
      this.about = true;
    }, 2200);

      //Animation of about
      setTimeout(() => {
        this.sliderfade = true;
      }, 3000);
  }


  ngOnDestroy(){
    document.documentElement.classList.remove('overflow-x-hidden')
  }



  windoscroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar?.classList.add('is-sticky');
      document.getElementById('back-to-top')!.style.opacity = '1'
    }
    else {
      navbar?.classList.remove('is-sticky');
      document.getElementById('back-to-top')!.style.opacity = '0'
    }
  }


  year = (new Date().getFullYear())

  topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Carousel config
  slideConfig = {
    slidesToShow:3,
    slidesToScroll:1,
    dots:true,
    arrow:false,
    isFinite:true,
    autoplay:true,
    loop:true,
    autoplaySpeed:1500
  }

  onSectionChange(section: any) {
    this.currentSection = section
  }


}
