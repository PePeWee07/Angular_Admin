import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiMonthStackComponent } from './multi-month-stack.component';

describe('MultiMonthStackComponent', () => {
  let component: MultiMonthStackComponent;
  let fixture: ComponentFixture<MultiMonthStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiMonthStackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiMonthStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
