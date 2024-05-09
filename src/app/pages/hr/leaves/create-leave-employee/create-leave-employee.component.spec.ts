import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeaveEmployeeComponent } from './create-leave-employee.component';

describe('CreateLeaveEmployeeComponent', () => {
  let component: CreateLeaveEmployeeComponent;
  let fixture: ComponentFixture<CreateLeaveEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLeaveEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateLeaveEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
