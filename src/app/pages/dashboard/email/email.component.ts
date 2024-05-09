import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { EmployeePerformanceData, widgetsData, widgetsData2 } from '../../../data/dashboard';
import { CountUpModule } from 'ngx-countup';
import { NgApexchartsModule } from 'ng-apexcharts';
import { getChartColorsArray } from '../../../shared/commonFunction';
import { WidgetChartComponent } from '../../../shared/widget-chart/widget-chart.component';
import { Widget2ChartComponent } from '../../../shared/widget2-chart/widget2-chart.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { MnDropdownComponent } from '../../../Component/dropdown';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, CountUpModule, NgApexchartsModule, WidgetChartComponent, Widget2ChartComponent, RouterModule, LucideAngularModule, MnDropdownComponent],
  templateUrl: './email.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class EmailComponent {

  widgets1Data: any;
  widgets2Data: any;
  emailDataChart: any;
  emailMarketingChart: any;
  emailData: any;


  ngOnInit() {

    this._emailDataChart('["bg-custom-500", "bg-purple-500"]')
    this._emailMarketingChart('["bg-sky-500", "bg-green-500", "bg-red-500"]')

    // Fetch Data
    this.widgets1Data = widgetsData;
    this.widgets2Data = widgetsData2;
    this.emailData = EmployeePerformanceData;
  }

  // Email Data Chart
  private _emailDataChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.emailDataChart = {
      series: [
        {
          name: "Open Rate",
          data: [28, 29, 31, 36, 32, 32, 33, 40, 37]
        },
        {
          name: "Click Rate",
          data: [26, 41, 40, 51, 49, 62, 69, 52, 58]
        }
      ],
      chart: {
        height: 350,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        },
      },
      colors: colors,
      stroke: {
        curve: 'smooth',
        width: 3
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      },
      markers: {
        size: 5,
        hover: {
          sizeOffset: 1
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    }
  }

  // Email Marketing Chart
  private _emailMarketingChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.emailMarketingChart = {
      series: [44, 55, 67],
      chart: {
        height: 410,
        type: 'radialBar',
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w: any) {
                return 249
              }
            }
          },
          track: {
            margin: 14,
          }
        }
      },
      colors: colors,
      labels: ['Sent', 'Opened', 'Not Opened'],
    }
  }

}
