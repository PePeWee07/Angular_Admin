import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpickerComponent } from './colorpicker.component';

describe('ColorpickerComponent', () => {
  let component: ColorpickerComponent;
  let fixture: ComponentFixture<ColorpickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorpickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
