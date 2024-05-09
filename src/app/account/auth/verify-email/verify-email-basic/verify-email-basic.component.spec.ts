import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailBasicComponent } from './verify-email-basic.component';

describe('VerifyEmailBasicComponent', () => {
  let component: VerifyEmailBasicComponent;
  let fixture: ComponentFixture<VerifyEmailBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyEmailBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerifyEmailBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
