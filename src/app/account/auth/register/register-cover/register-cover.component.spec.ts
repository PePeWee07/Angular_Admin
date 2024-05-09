import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCoverComponent } from './register-cover.component';

describe('RegisterCoverComponent', () => {
  let component: RegisterCoverComponent;
  let fixture: ComponentFixture<RegisterCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterCoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
