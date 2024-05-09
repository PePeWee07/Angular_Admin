import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBoxedComponent } from './register-boxed.component';

describe('RegisterBoxedComponent', () => {
  let component: RegisterBoxedComponent;
  let fixture: ComponentFixture<RegisterBoxedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterBoxedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterBoxedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
