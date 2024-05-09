import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlstickComponent } from './candlstick.component';

describe('CandlstickComponent', () => {
  let component: CandlstickComponent;
  let fixture: ComponentFixture<CandlstickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandlstickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandlstickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
