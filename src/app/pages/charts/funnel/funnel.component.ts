import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { getChartColorsArray } from '../../../shared/commonFunction';

@Component({
  selector: 'app-funnel',
  standalone: true,
  imports: [CommonModule,PageTitleComponent,NgApexchartsModule],
  templateUrl: './funnel.component.html',
  styles: ``
})
export class FunnelComponent {

  funnelbasicChart: any;
  pyramidChart: any;

  constructor() { }

  ngOnInit(): void {

    // Chart Color Data Get Function
    this._funnelbasicChart('["bg-custom-500"]');
    this._pyramidChart('["bg-custom-500", "bg-custom-400", "bg-custom-300", "bg-custom-200", "bg-purple-200", "bg-purple-300", "bg-purple-400", "bg-purple-500"]');

  }

  /**
 * Basic Chart
 */
  private _funnelbasicChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.funnelbasicChart = {
      series: [
        {
            name: "Funnel Series",
            data: [1380, 1100, 990, 880, 740, 548, 330, 200],
        },
      ],
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
            borderRadius: 0,
            horizontal: true,
            barHeight: '80%',
            isFunnel: true,
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val:any, opt:any) {
            return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
        },
        dropShadow: {
            enabled: true,
        },
      },
      fill: {
        opacity: 0.8,
      },
      xaxis: {
        categories: [
          'Sourced',
          'Screened',
          'Assessed',
          'HR Interview',
          'Technical',
          'Verify',
          'Offered',
          'Hired',
      ],
      },
      legend: {
        show: false,
      },
      colors: colors,
    }
  }

  /**
 * Pyramid
 */
  private _pyramidChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.pyramidChart = {
      series: [
        {
          name: "",
          data: [200, 330, 548, 740, 880, 990, 1100, 1380],
      },
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
            borderRadius: 0,
            horizontal: true,
            distributed: true,
            barHeight: '80%',
            isFunnel: true,
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val:any, opt:any) {
            return opt.w.globals.labels[opt.dataPointIndex]
        },
        dropShadow: {
            enabled: true,
        },
      },
      xaxis: {
        categories: ['Sweets', 'Processed Foods', 'Healthy Fats', 'Meat', 'Beans & Legumes', 'Dairy', 'Fruits & Vegetables', 'Grains'],
      },
      legend: {
        show: false,
    },
      colors: colors,
    };
  }

}
