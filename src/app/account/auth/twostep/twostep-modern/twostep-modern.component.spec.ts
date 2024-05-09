import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwostepModernComponent } from './twostep-modern.component';

describe('TwostepModernComponent', () => {
  let component: TwostepModernComponent;
  let fixture: ComponentFixture<TwostepModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwostepModernComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwostepModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
