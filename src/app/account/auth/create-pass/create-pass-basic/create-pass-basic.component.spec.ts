import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePassBasicComponent } from './create-pass-basic.component';

describe('CreatePassBasicComponent', () => {
  let component: CreatePassBasicComponent;
  let fixture: ComponentFixture<CreatePassBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePassBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePassBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
