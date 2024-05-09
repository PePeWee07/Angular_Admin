import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailCoverComponent } from './verify-email-cover.component';

describe('VerifyEmailCoverComponent', () => {
  let component: VerifyEmailCoverComponent;
  let fixture: ComponentFixture<VerifyEmailCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyEmailCoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerifyEmailCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
