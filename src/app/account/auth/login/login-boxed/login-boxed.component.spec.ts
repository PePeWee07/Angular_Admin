import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBoxedComponent } from './login-boxed.component';

describe('LoginBoxedComponent', () => {
  let component: LoginBoxedComponent;
  let fixture: ComponentFixture<LoginBoxedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginBoxedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginBoxedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
