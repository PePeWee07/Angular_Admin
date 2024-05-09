import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterModernComponent } from './register-modern.component';

describe('RegisterModernComponent', () => {
  let component: RegisterModernComponent;
  let fixture: ComponentFixture<RegisterModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterModernComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
