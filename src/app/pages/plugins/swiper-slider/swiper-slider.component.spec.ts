import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperSliderComponent } from './swiper-slider.component';

describe('SwiperSliderComponent', () => {
  let component: SwiperSliderComponent;
  let fixture: ComponentFixture<SwiperSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwiperSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
