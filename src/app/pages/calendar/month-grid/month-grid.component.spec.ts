import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthGridComponent } from './month-grid.component';

describe('MonthGridComponent', () => {
  let component: MonthGridComponent;
  let fixture: ComponentFixture<MonthGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
