import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { getChartColorsArray } from '../../../shared/commonFunction';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [CommonModule,PageTitleComponent,NgApexchartsModule],
  templateUrl: './pie.component.html',
  styles: ``
})
export class PieComponent {

  simplePieChart: any;
  simpleDonutChart: any;
  updatingDonutChart: any;
  monochromePieChart: any;
  gradientDonutChart: any;
  patternedDonutChart: any;
  semiDonutChart: any;
  pieWithImageChart: any;

  constructor() { }

  ngOnInit(): void {


    // Chart Color Data Get Function
    this._simplePieChart('["bg-custom-500", "bg-orange-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"]');
    this._simpleDonutChart('["bg-custom-500", "bg-orange-500", "bg-green-500", "bg-sky-500", "bg-yellow-500"]');
    this._updatingDonutChart('["bg-custom-400", "bg-orange-400", "bg-green-400", "bg-yellow-400"]');
    this._monochromePieChart('["bg-custom-500"]');
    this._gradientDonutChart('["bg-custom-500", "bg-orange-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"]');
    this._semiDonutChart('["bg-custom-500", "bg-orange-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"]');
    this._patternedDonutChart('["bg-custom-500", "bg-orange-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"]');
    this._pieWithImageChart('["bg-custom-500", "bg-orange-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"]');
  }

  /**
  * Simple Pie Chart
  */
  private _simplePieChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.simplePieChart = {
      series: [44, 55, 13, 43, 22],
      chart: {
          height: 350,
          type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      colors: colors,
      legend: {
          position: 'bottom'
      }
    };
  }

  /**
  * Simple Donut Chart
  */
  private _simpleDonutChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.simpleDonutChart = {
      series: [44, 55, 41, 17, 15],
      chart: {
          height: 350,
          type: 'donut',
      },
      colors: colors,
      legend: {
          position: 'bottom'
      },
    };
  }

  // Updating Donut Charts
  private _updatingDonutChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.updatingDonutChart = {
      series: [44, 55, 13, 33],
      chart: {
          width: 380,
          type: 'donut',
      },
      dataLabels: {
          enabled: false
      },
      responsive: [{
          breakpoint: 480,
          options: {
              chart: {
                  width: 200
              },
              legend: {
                  show: false
              }
          }
      }],
      colors: colors,
      legend: {
          position: 'right',
          offsetY: 0,
          height: 230,
      }
    };
  }

  /**
  * Monochrome Pie Chart
  */
  private _monochromePieChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.monochromePieChart = {
      series: [25, 15, 44, 55, 41, 17],
      chart: {
          height: 300,
          width: '100%',
          type: 'pie',
      },
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      plotOptions: {
          pie: {
              dataLabels: {
                  offset: -5
              }
          }
      },
      dataLabels: {
          formatter(val:any, opts:any) {
              const name = opts.w.globals.labels[opts.seriesIndex]
              return [name, val.toFixed(1) + '%']
          }
      },
      theme: {
          monochrome: {
              enabled: true,
              color: colors[0],
              shadeTo: 'light',
              shadeIntensity: 0.6
          }
      },
      legend: {
          show: false
      }
    };
  }

  /**
  * Gradient Donut Chart
  */
  private _gradientDonutChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.gradientDonutChart = {
      series: [44, 55, 41, 17, 15],
      chart: {
          height: 280,
          type: 'donut',
      },
      plotOptions: {
          pie: {
              startAngle: -90,
              endAngle: 270
          }
      },
      dataLabels: {
          enabled: false
      },
      fill: {
          type: 'gradient',
      },
      colors: colors,
      legend: {
          formatter: function (val:any, opts:any) {
              return val + " - " + opts.w.globals.series[opts.seriesIndex]
          },
          position: 'bottom'
      },
 
    };
  }


  /**
  * 
  Semi Donut
  */
  private _semiDonutChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.semiDonutChart = {
      series: [44, 55, 41, 17, 15],
      chart: {
          height: 280,
          type: 'donut'
      },
      plotOptions: {
          pie: {
              startAngle: -90,
              endAngle: 90,
              offsetY: 5
          }
      },
      grid: {
          padding: {
              bottom: -80
          }
      },
      colors: colors,
      legend: {
          position: 'bottom'
      }
 
    };
  }


  /**
  * Patterned Donut Chart
  */
  private _patternedDonutChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.patternedDonutChart = {
      series: [44, 55, 41, 17, 15],
    chart: {
        height: 350,
        type: 'donut',
        dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
        }
    },
    stroke: {
        width: 0,
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    total: {
                        showAlways: true,
                        show: true
                    }
                }
            }
        }
    },
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    dataLabels: {
        dropShadow: {
            blur: 3,
            opacity: 0.8
        }
    },
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            enabled: true,
            style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
        },
    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    colors: colors,
    theme: {
        palette: 'palette2'
    },
    legend: {
        position: 'bottom'
    }
    };
  }

  /**
  * Pie Chart with Image Fill
  */
  private _pieWithImageChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.pieWithImageChart = {
      series: [44, 33, 54, 45],
    chart: {
        height: 350,
        type: 'pie',
    },
    colors: colors,
    fill: {
        type: 'image',
        opacity: 0.85,
        image: {
            src: ['../../assets/images/small/img-1.jpg', '../../assets/images/small/img-2.jpg', '../../assets/images/small/img-6.jpg', '../../assets/images/small/img-4.jpg'],
            width: 25,
            imagedHeight: 25
        },
    },
    stroke: {
        width: 4
    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ['#111']
        },
        background: {
            enabled: true,
            foreColor: '#fff',
            borderWidth: 0
        }
    },
    legend: {
        position: 'bottom'
    }
    };
  }

}
