import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePassCoverComponent } from './create-pass-cover.component';

describe('CreatePassCoverComponent', () => {
  let component: CreatePassCoverComponent;
  let fixture: ComponentFixture<CreatePassCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePassCoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePassCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
