import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceHrComponent } from './attendance-hr.component';

describe('AttendanceHrComponent', () => {
  let component: AttendanceHrComponent;
  let fixture: ComponentFixture<AttendanceHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceHrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttendanceHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
