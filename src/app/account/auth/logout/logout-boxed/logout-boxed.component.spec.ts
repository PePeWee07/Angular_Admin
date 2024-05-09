import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutBoxedComponent } from './logout-boxed.component';

describe('LogoutBoxedComponent', () => {
  let component: LogoutBoxedComponent;
  let fixture: ComponentFixture<LogoutBoxedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutBoxedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoutBoxedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
