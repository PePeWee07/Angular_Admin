import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassCoverComponent } from './reset-pass-cover.component';

describe('ResetPassCoverComponent', () => {
  let component: ResetPassCoverComponent;
  let fixture: ComponentFixture<ResetPassCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPassCoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetPassCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
