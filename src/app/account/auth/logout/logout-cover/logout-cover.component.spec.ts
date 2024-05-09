import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutCoverComponent } from './logout-cover.component';

describe('LogoutCoverComponent', () => {
  let component: LogoutCoverComponent;
  let fixture: ComponentFixture<LogoutCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutCoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoutCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
