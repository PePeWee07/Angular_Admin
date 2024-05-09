import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucideComponent } from './lucide.component';

describe('LucideComponent', () => {
  let component: LucideComponent;
  let fixture: ComponentFixture<LucideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LucideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LucideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
