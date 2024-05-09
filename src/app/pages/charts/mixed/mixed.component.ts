import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { getChartColorsArray } from '../../../shared/commonFunction';

@Component({
  selector: 'app-mixed',
  standalone: true,
  imports: [CommonModule,PageTitleComponent,NgApexchartsModule],
  templateUrl: './mixed.component.html',
  styles: ``
})
export class MixedComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  lineChart: any;
  multipleYAxisChart: any;
  lineAreaChart: any;
  lineColumnAreaChart: any;
  linesctterChart:any;

  constructor() { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Apexcharts' },
      { label: 'Mixed Charts', active: true }
    ];

    // Chart Color Data Get Function
    this._lineChart('["bg-custom-500", "bg-orange-500"]');
    this._multipleYAxisChart('["bg-custom-500", "bg-green-500", "bg-yellow-500"]');
    this._lineAreaChart('["bg-custom-200", "bg-green-500"]');
    this._lineColumnAreaChart('["bg-sky-500", "bg-orange-500","bg-purple-500"]');
    this._linesctterChart('["bg-custom-500", "bg-yellow-500"]');
  }

  /**
 * Line & Column Charts
 */
  private _lineChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.lineChart = {
      series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    chart: {
        height: 350,
        type: 'line',
    },
    stroke: {
        width: [0, 4]
    },
    colors: colors,
    dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    xaxis: {
        type: 'datetime'
    },
    yaxis: [{
        title: {
            text: 'Website Blog',
        },

    }, {
        opposite: true,
        title: {
            text: 'Social Media'
        }
    }]
    };
  }

  /**
  * Multiple Y-Axis Charts
  */
  private _multipleYAxisChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.multipleYAxisChart = {
      series: [{
        name: 'Income',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    }, {
        name: 'Cashflow',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
    }, {
        name: 'Revenue',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
    }],
    chart: {
        height: 350,
        type: 'line',
        stacked: false
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [1, 1, 4]
    },
    xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    colors: colors,
    yaxis: [
        {
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: colors[0]
            },
            title: {
                text: "Income (thousand crores)",
            },
            tooltip: {
                enabled: true
            }
        },
        {
            seriesName: 'Income',
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: colors[1]
            },
            title: {
                text: "Operating Cashflow (thousand crores)",
            },
        },
        {
            seriesName: 'Revenue',
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: colors[2]
            },
            title: {
                text: "Revenue (thousand crores)",
            }
        },
    ],
    tooltip: {
        fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
        },
    },
    legend: {
        horizontalAlign: 'left',
        offsetX: 40
    }
    };
  }

  /**
  * Line & Area Charts
  */
  private _lineAreaChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.lineAreaChart = {
      series: [{
        name: 'TEAM A',
        type: 'area',
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
    }, {
        name: 'TEAM B',
        type: 'line',
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
    }],
    chart: {
        height: 350,
        type: 'line',
    },
    stroke: {
        curve: 'smooth'
    },
    colors: colors,
    labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
    markers: {
        size: 0
    },
    yaxis: [
        {
            title: {
                text: 'Series A',
            },
        },
        {
            opposite: true,
            title: {
                text: 'Series B',
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y:any) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;
            }
        }
    }
    };
  }

  /**
  * Line, Column & Area Charts
  */
  private _lineColumnAreaChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.lineColumnAreaChart = {
      series: [{
        name: 'TEAM A',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: 'TEAM B',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'TEAM C',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    chart: {
        height: 350,
        type: 'line',
        stacked: false,
    },
    stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            columnWidth: '50%'
        }
    },

    fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
        }
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
        '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
    ],
    colors:colors,
    markers: {
        size: 0
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        title: {
            text: 'Points',
        },
        min: 0
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y:any) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;

            }
        }
    }
    };
  }

   /**
  *Line Scatter
  */
   private _linesctterChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.linesctterChart = {
      series: [{
        name: 'Points',
        type: 'scatter',

        //2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3
        data: [{
            x: 1,
            y: 2.14
        }, {
            x: 1.2,
            y: 2.19
        }, {
            x: 1.8,
            y: 2.43
        }, {
            x: 2.3,
            y: 3.8
        }, {
            x: 2.6,
            y: 4.14
        }, {
            x: 2.9,
            y: 5.4
        }, {
            x: 3.2,
            y: 5.8
        }, {
            x: 3.8,
            y: 6.04
        }, {
            x: 4.55,
            y: 6.77
        }, {
            x: 4.9,
            y: 8.1
        }, {
            x: 5.1,
            y: 9.4
        }, {
            x: 7.1,
            y: 7.14
        }, {
            x: 9.18,
            y: 8.4
        }]
    }, {
        name: 'Line',
        type: 'line',
        data: [{
            x: 1,
            y: 2
        }, {
            x: 2,
            y: 3
        }, {
            x: 3,
            y: 4
        }, {
            x: 4,
            y: 5
        }, {
            x: 5,
            y: 6
        }, {
            x: 6,
            y: 7
        }, {
            x: 7,
            y: 8
        }, {
            x: 8,
            y: 9
        }, {
            x: 9,
            y: 10
        }, {
            x: 10,
            y: 11
        }]
    }],
    chart: {
        height: 350,
        type: 'line',
    },
    fill: {
        type: 'solid',
    },
    markers: {
        size: [6, 0]
    },
    colors: colors,
    tooltip: {
        shared: false,
        intersect: true,
    },
    legend: {
        show: false
    },
    xaxis: {
        type: 'numeric',
        min: 0,
        max: 12,
        tickAmount: 12
    }
  }
   };
}
