import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CountUpModule } from 'ngx-countup';
import { getChartColorsArray } from '../../../shared/commonFunction';
import { EmployeePerformanceData, RecentPayrollData, UpcomingInterviewData, UpcomingScheduledData } from '../../../data/dashboard';

// Full Calendar
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { SimplebarAngularModule } from 'simplebar-angular';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { FlatpickrModule } from '../../../Component/flatpickr/flatpickr.module';
import { NGXPagination } from '../../../Component/pagination';
import { MnDropdownComponent } from '../../../Component/dropdown';


@Component({
  selector: 'app-hr',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, NgApexchartsModule, CountUpModule, FullCalendarModule, SimplebarAngularModule, MnDropdownComponent, LucideAngularModule, NGXPagination, FlatpickrModule],
  templateUrl: './hr.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class HrComponent {
  totalEmployee: any;
  totalApplication: any;
  applicationReceivedChart: any;
  hiredCandidates: any;
  rejectedCandidates: any;
  totalProjectChart: any;
  allemployeeData: any;
  employeeData: any;
  scheduleData: any;
  interviewData: any;
  payrollData: any;

  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;

  ngOnInit(): void {
    this._totalEmployee('["bg-custom-500"]')
    this._totalApplication('["bg-purple-500"]')
    this._applicationReceivedChart('["bg-custom-500", "bg-green-500"]')
    this._hiredCandidates('["bg-green-500"]')
    this._rejectedCandidates('["bg-red-500"]')
    this._totalProjectChart('["bg-custom-500", "bg-yellow-500", "bg-green-400", "bg-red-400"]')

    // Fetch Data
    this.employeeData = EmployeePerformanceData;
    this.allemployeeData = EmployeePerformanceData;
    this.totalItems = this.employeeData.length;
    this.scheduleData = UpcomingScheduledData;
    this.interviewData = UpcomingInterviewData;
    this.payrollData = RecentPayrollData;
  }

  /***
* Calender Set
*/
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    headerToolbar: {
      right: '>',
      center: 'title',
      left: '<'
    },
    initialView: 'dayGridMonth',
    themeSystem: "bootstrap",
    weekends: true,
    droppable: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    direction: 'ltr',
    locale: 'en',
  };



  // Pagination
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updatePagedOrders();
  }

  getEndIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalItems)
  }

  updatePagedOrders(): void {
    this.startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.endIndex = this.startIndex + this.itemsPerPage;
    this.employeeData = this.allemployeeData.slice(this.startIndex, this.endIndex);
  }

  // Total Employee charts
  private _totalEmployee(colors: any) {
    colors = getChartColorsArray(colors);
    this.totalEmployee = {
      series: [10],
      chart: {
        height: 110,
        type: 'radialBar',
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '50%',
          },
          track: {
            margin: 2,
          },
          dataLabels: {
            show: false
          }
        }
      },
      grid: {
        padding: {
          top: -15,
          bottom: -15
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Total Employee'],
      colors: colors
    }
  }

  // Total Employee charts
  private _totalApplication(colors: any) {
    colors = getChartColorsArray(colors);
    this.totalApplication = {
      series: [60],
      chart: {
        height: 110,
        type: 'radialBar',
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '50%',
          },
          track: {
            margin: 2,
          },
          dataLabels: {
            show: false
          }
        }
      },
      grid: {
        padding: {
          top: -15,
          bottom: -15
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Total Employee'],
      colors: colors
    }
  }

  // Total Employee charts
  private _applicationReceivedChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.applicationReceivedChart = {
      series: [{
        name: 'Total Application',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      }, {
        name: 'Hired Candidates',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }],
      chart: {
        height: 310,
        type: 'line',
        stacked: false,
        margin: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [2, 2],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },

      fill: {
        opacity: [0.03, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      colors: colors,
      markers: {
        size: 0
      },
      grid: {
        padding: {
          top: -15,
          right: 0,
        }
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y: any) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;

          }
        }
      }
    }
  }

  // Total Employee charts
  private _hiredCandidates(colors: any) {
    colors = getChartColorsArray(colors);
    this.hiredCandidates = {
      series: [25],
      chart: {
        height: 110,
        type: 'radialBar',
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '50%',
          },
          track: {
            margin: 2,
          },
          dataLabels: {
            show: false
          }
        }
      },
      grid: {
        padding: {
          top: -15,
          bottom: -15
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Total Employee'],
      colors: colors
    }
  }

  // Total Employee charts
  private _rejectedCandidates(colors: any) {
    colors = getChartColorsArray(colors);
    this.rejectedCandidates = {
      series: [75],
      chart: {
        height: 110,
        type: 'radialBar',
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '50%',
          },
          track: {
            margin: 2,
          },
          dataLabels: {
            show: false
          }
        }
      },
      grid: {
        padding: {
          top: -15,
          bottom: -15
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Total Employee'],
      colors: colors
    }
  }

  // Total Projects charts
  private _totalProjectChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.totalProjectChart = {
      series: [{
        name: 'New',
        data: [44, 55, 41, 67, 22, 43, 14, 55, 41,]
      }, {
        name: 'Pending',
        data: [13, 23, 20, 8, 13, 27, 8, 20, 8,]
      }, {
        name: 'Completed',
        data: [11, 17, 15, 15, 21, 14, 24, 11, 17,]
      }, {
        name: 'Rejected',
        data: [21, 7, 25, 13, 22, 8, 13, 7, 25,]
      }],
      chart: {
        type: 'bar',
        height: 335,
        stacked: true,
        zoom: {
          enabled: true
        },
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 2,
          columnWidth: '25%',
        },
      },
      grid: {
        padding: {
          top: -15,
          bottom: 5,
          right: 0,
        }
      },
      xaxis: {
        categories: ['01', '02', '03', '04',
          '05', '06', '07', '08', '09'
        ],
      },
      dataLabels: {
        enabled: false
      },
      colors: colors,
      legend: {
        position: 'bottom',
      },
      fill: {
        opacity: 1
      }
    }
  }


}
