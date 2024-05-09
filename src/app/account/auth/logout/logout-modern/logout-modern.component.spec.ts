import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutModernComponent } from './logout-modern.component';

describe('LogoutModernComponent', () => {
  let component: LogoutModernComponent;
  let fixture: ComponentFixture<LogoutModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutModernComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoutModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
