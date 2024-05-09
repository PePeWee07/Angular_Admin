import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePassBoxedComponent } from './create-pass-boxed.component';

describe('CreatePassBoxedComponent', () => {
  let component: CreatePassBoxedComponent;
  let fixture: ComponentFixture<CreatePassBoxedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePassBoxedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePassBoxedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
