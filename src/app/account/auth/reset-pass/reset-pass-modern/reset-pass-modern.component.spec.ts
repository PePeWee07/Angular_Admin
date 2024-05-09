import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassModernComponent } from './reset-pass-modern.component';

describe('ResetPassModernComponent', () => {
  let component: ResetPassModernComponent;
  let fixture: ComponentFixture<ResetPassModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPassModernComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetPassModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
