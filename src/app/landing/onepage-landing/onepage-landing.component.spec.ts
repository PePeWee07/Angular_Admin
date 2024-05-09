import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepageLandingComponent } from './onepage-landing.component';

describe('OnepageLandingComponent', () => {
  let component: OnepageLandingComponent;
  let fixture: ComponentFixture<OnepageLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnepageLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnepageLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
