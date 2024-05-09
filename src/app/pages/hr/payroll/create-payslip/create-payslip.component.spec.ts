import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePayslipComponent } from './create-payslip.component';

describe('CreatePayslipComponent', () => {
  let component: CreatePayslipComponent;
  let fixture: ComponentFixture<CreatePayslipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePayslipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePayslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
