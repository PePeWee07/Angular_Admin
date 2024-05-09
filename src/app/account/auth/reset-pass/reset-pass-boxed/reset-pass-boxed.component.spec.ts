import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassBoxedComponent } from './reset-pass-boxed.component';

describe('ResetPassBoxedComponent', () => {
  let component: ResetPassBoxedComponent;
  let fixture: ComponentFixture<ResetPassBoxedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPassBoxedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetPassBoxedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
