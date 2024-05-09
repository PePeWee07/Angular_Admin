import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBasicComponent } from './login-basic.component';

describe('LoginBasicComponent', () => {
  let component: LoginBasicComponent;
  let fixture: ComponentFixture<LoginBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
