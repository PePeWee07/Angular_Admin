import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplebarComponent } from './simplebar.component';

describe('SimplebarComponent', () => {
  let component: SimplebarComponent;
  let fixture: ComponentFixture<SimplebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimplebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
