import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollHintComponent } from './scroll-hint.component';

describe('ScrollHintComponent', () => {
  let component: ScrollHintComponent;
  let fixture: ComponentFixture<ScrollHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollHintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
