import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { getChartColorsArray } from '../../../shared/commonFunction';

@Component({
  selector: 'app-radar',
  standalone: true,
  imports: [CommonModule,PageTitleComponent,NgApexchartsModule],
  templateUrl: './radar.component.html',
  styles: ``
})
export class RadarComponent {



  basicRadarChart: any;
  multipleSeriesChart: any;
  polygonFillChart: any;

  constructor() { }

  ngOnInit(): void {
 

    // Chart Color Data Get Function
    this._basicRadarChart('["bg-custom-300", "bg-custom-300"]');
    this._multipleSeriesChart('["bg-custom-500", "bg-green-500", "bg-yellow-500"]');
    this._polygonFillChart('["bg-red-500", "bg-slate-200", "bg-white"]');

  }


  /**
  * Basic Radar Chart
  */
  private _basicRadarChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.basicRadarChart = {
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }],
    chart: {
        height: 350,
        type: 'radar',
    },
    colors: colors,
    xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June']
    }
    };
  }

  /**
  * Radar Chart - Multiple series
  */
  private _multipleSeriesChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.multipleSeriesChart = {
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
    }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
    }],
    chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
        }
    },
    stroke: {
        width: 2
    },
    colors:colors,
    fill: {
        opacity: 0.1
    },
    markers: {
        size: 0
    },
    xaxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016']
    }
    };
  }

  /**
  * Radar Chart - Polygon Fill
  */
  private _polygonFillChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.polygonFillChart = {
      series: [{
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33],
    }],
    chart: {
        height: 350,
        type: 'radar',
    },
    dataLabels: {
        enabled: true
    },
    plotOptions: {
        radar: {
            size: 140,
            polygons: {
                strokeColors: '#e9e9e9',
                fill: {
                    colors: ['#f8f8f8', '#fff']
                }
            }
        }
    },
    // colors: getChartColorsArray("basicRadar"),
    markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#FF4560',
        strokeWidth: 2,
    },
    tooltip: {
        y: {
            formatter: function (val:any) {
                return val
            }
        }
    },
    xaxis: {
        categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: function (val:any, i:any) {
                if (i % 2 === 0) {
                    return val
                } else {
                    return ''
                }
            }
        }
    }
    };
  }

}
