import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { getChartColorsArray } from '../commonFunction';

@Component({
  selector: 'app-widget-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
   <ng-container>
      <apx-chart
      [series]="series"
      [colors]="chartOptions.colors"
      [chart] = "chartOptions.chart"
      [stroke]="chartOptions.stroke"
      [dataLabels]="chartOptions.dataLabels"
      ></apx-chart>
    </ng-container>
  `,
  styles: ``
})
export class WidgetChartComponent {
  @Input() series!: any[];
  @Input() colors!: string;

  chartOptions: any;

  ngOnInit() {
    this.chartOptions = {
      chart: {
        id: 'area-datetime',
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        },
        zoom: {
          autoScaleYaxis: true
        }
      },
      colors: getChartColorsArray(this.colors),
      stroke: {
        width: 2,
        curve: 'smooth',
      },
      dataLabels: {
        enabled: false
      },
    };
  }



}
