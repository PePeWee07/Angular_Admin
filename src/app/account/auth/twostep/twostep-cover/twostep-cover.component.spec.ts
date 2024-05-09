import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwostepCoverComponent } from './twostep-cover.component';

describe('TwostepCoverComponent', () => {
  let component: TwostepCoverComponent;
  let fixture: ComponentFixture<TwostepCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwostepCoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwostepCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
