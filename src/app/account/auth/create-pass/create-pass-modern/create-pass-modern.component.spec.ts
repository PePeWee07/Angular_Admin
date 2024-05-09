import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePassModernComponent } from './create-pass-modern.component';

describe('CreatePassModernComponent', () => {
  let component: CreatePassModernComponent;
  let fixture: ComponentFixture<CreatePassModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePassModernComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePassModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
