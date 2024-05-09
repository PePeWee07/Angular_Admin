import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceMainComponent } from './attendance-main.component';

describe('AttendanceMainComponent', () => {
  let component: AttendanceMainComponent;
  let fixture: ComponentFixture<AttendanceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttendanceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
