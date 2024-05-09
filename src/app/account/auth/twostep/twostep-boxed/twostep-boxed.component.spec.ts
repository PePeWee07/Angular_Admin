import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwostepBoxedComponent } from './twostep-boxed.component';

describe('TwostepBoxedComponent', () => {
  let component: TwostepBoxedComponent;
  let fixture: ComponentFixture<TwostepBoxedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwostepBoxedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwostepBoxedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
