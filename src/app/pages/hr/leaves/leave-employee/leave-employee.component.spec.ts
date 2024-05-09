import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveEmployeeComponent } from './leave-employee.component';

describe('LeaveEmployeeComponent', () => {
  let component: LeaveEmployeeComponent;
  let fixture: ComponentFixture<LeaveEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
