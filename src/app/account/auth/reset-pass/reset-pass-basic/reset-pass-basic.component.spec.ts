import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassBasicComponent } from './reset-pass-basic.component';

describe('ResetPassBasicComponent', () => {
  let component: ResetPassBasicComponent;
  let fixture: ComponentFixture<ResetPassBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPassBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetPassBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
