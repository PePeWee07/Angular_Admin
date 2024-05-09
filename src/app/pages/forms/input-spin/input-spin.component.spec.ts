import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSpinComponent } from './input-spin.component';

describe('InputSpinComponent', () => {
  let component: InputSpinComponent;
  let fixture: ComponentFixture<InputSpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSpinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
