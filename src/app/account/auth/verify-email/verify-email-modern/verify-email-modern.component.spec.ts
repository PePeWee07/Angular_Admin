import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailModernComponent } from './verify-email-modern.component';

describe('VerifyEmailModernComponent', () => {
  let component: VerifyEmailModernComponent;
  let fixture: ComponentFixture<VerifyEmailModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyEmailModernComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerifyEmailModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
