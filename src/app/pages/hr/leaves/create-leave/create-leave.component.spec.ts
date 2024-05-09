import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeaveComponent } from './create-leave.component';

describe('CreateLeaveComponent', () => {
  let component: CreateLeaveComponent;
  let fixture: ComponentFixture<CreateLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLeaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
