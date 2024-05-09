import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModernComponent } from './login-modern.component';

describe('LoginModernComponent', () => {
  let component: LoginModernComponent;
  let fixture: ComponentFixture<LoginModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginModernComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
