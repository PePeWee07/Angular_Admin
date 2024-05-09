import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget2ChartComponent } from './widget2-chart.component';

describe('Widget2ChartComponent', () => {
  let component: Widget2ChartComponent;
  let fixture: ComponentFixture<Widget2ChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Widget2ChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Widget2ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
