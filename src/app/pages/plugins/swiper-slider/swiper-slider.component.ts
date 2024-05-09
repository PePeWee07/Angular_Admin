import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
  selector: 'app-swiper-slider',
  standalone: true,
  imports: [PageTitleComponent, SlickCarouselModule,LucideAngularModule],
  templateUrl: './swiper-slider.component.html',
  styles: ``,
  providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class SwiperSliderComponent {

  slideConfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };

  Navigation = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  Pagination = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    arrows: false
  };


  verticalConfig = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    vertical: true // Enable vertical sliding
  }

  sliderConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  progressValue: number = 0;


  onSlide(event: any) {
    const calc = (event.currentSlide + 1) / event.slick.slideCount * 100;
    this.progressValue = calc;
  }
}
