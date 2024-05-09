import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { getChartColorsArray } from '../../../shared/commonFunction';
import { CountUpModule } from 'ngx-countup';
import { ProductOrdersData } from '../../../data/dashboard';
import { CommonModule } from '@angular/common';
import { MnDropdownComponent } from '../../../Component/dropdown';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { NGXPagination } from '../../../Component/pagination';
import { FlatpickrModule } from '../../../Component/flatpickr/flatpickr.module';

@Component({
    selector: 'app-index',
    standalone: true,
    imports: [PageTitleComponent, NgApexchartsModule, CountUpModule, CommonModule, MnDropdownComponent, LucideAngularModule,NGXPagination , RouterModule,FlatpickrModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './index.component.html',
    providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class IndexComponent {

    orderStatisticsChart: any;
    salesRevenueOverview: any;
    trafficResourcesChart: any;
    salesThisMonthChart: any;
    audienceChart: any;
    orders: any;
    allorders: any
    currentPage: number = 1;
    itemsPerPage: number = 11;
    totalItems: number = 0;
    startIndex: number = 0;
    endIndex: any;
    allproducts: any

    constructor() {
    }

    ngOnInit(): void {
        this._orderStatisticsChart('["bg-purple-500", "bg-sky-500"]');
        this._salesRevenueOverview('["bg-custom-500", "bg-custom-400", "bg-custom-300"]');
        this._trafficResourcesChart('["bg-sky-500", "bg-purple-500", "bg-green-500", "bg-yellow-500"]');
        this._salesThisMonthChart('["bg-sky-100", "bg-orange-100", "bg-sky-500", "bg-orange-500"]');
        this._audienceChart('["bg-sky-500", "bg-orange-400", "bg-green-500", "bg-yellow-500"]');

        // Fetch Data
        this.orders = ProductOrdersData;
        this.allorders = ProductOrdersData;
        this.totalItems = this.orders.length;
    }

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
        this.orders = this.allorders.slice(this.startIndex, this.endIndex);
    }

    /**
* Order Statastic Chart
*/
    private _orderStatisticsChart(colors: any) {
        colors = getChartColorsArray(colors);
        this.orderStatisticsChart = {
            series: [{
                name: 'Pending',
                data: [17, 16, 19, 22, 24, 29, 25, 20, 25, 31, 28, 35,]
            }, {
                name: 'New Orders',
                data: [30, 24, 32, 27, 16, 22, 32, 21, 24, 20, 38, 28]
            }],
            chart: {
                type: 'line',
                height: 310,
                toolbar: {
                    show: false,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: colors,
            dataLabels: {
                enabled: false
            },
            grid: {
                show: true,
                padding: {
                    top: -20,
                    right: 0,
                }
            },
            markers: {
                hover: {
                    sizeOffset: 4
                }
            }
        };
    }

    // Sale Revenue Overview Chart
    private _salesRevenueOverview(colors: any) {
        colors = getChartColorsArray(colors);
        this.salesRevenueOverview = {
            series: [{
                name: 'Total Sales',
                data: [44, 55, 41, 67, 22, 43, 21, 49, 20, 41, 67, 22,]
            }, {
                name: 'Total Profit',
                data: [11, 17, 15, 15, 21, 14, 15, 13, 5, 15, 15, 21,]
            }],
            chart: {
                type: 'bar',
                height: 300,
                stacked: true,
                stackType: '100%',
                toolbar: {
                    show: false,
                },
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            },
            tooltip: {
                y: {
                    formatter: function (val: any) {
                        return "$" + val + "k"
                    }
                }
            },
            grid: {
                show: true,
                padding: {
                    top: -20,
                    right: -10,
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '50%',
                },
            },
            colors: colors,
            fill: {
                opacity: 1
            },
            legend: {
                position: 'bottom',
            },
        }
    }

    // Traffic Resource Chart
    private _trafficResourcesChart(colors: any) {
        colors = getChartColorsArray(colors);
        this.trafficResourcesChart = {
            series: [44, 34, 22],
            chart: {
                height: 222,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w: any) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return 875
                            }
                        }
                    }
                }
            },
            grid: {
                show: true,
                padding: {
                    top: -8,
                    bottom: -15,
                    left: 0,
                    right: 0,
                }
            },
            colors: colors,
            labels: ['Direct', 'Referrals', 'Search Engine'],
        }
    }

    // Sales Month Chart
    private _salesThisMonthChart(colors: any) {
        colors = getChartColorsArray(colors);
        this.salesThisMonthChart = {
            series: [
                {
                    type: 'rangeArea',
                    name: 'Profit Range',

                    data: [
                        {
                            x: 'Mar',
                            y: [900, 2900]
                        },
                        {
                            x: 'Apr',
                            y: [1400, 2700]
                        },
                        {
                            x: 'May',
                            y: [2600, 3900]
                        },
                        {
                            x: 'Jun',
                            y: [500, 1700]
                        },
                        {
                            x: 'Jul',
                            y: [1900, 2300]
                        },
                        {
                            x: 'Aug',
                            y: [1000, 1500]
                        }
                    ]
                },

                {
                    type: 'rangeArea',
                    name: 'Expense Range',
                    data: [
                        {
                            x: 'Mar',
                            y: [3900, 4900]
                        },
                        {
                            x: 'Apr',
                            y: [3400, 3900]
                        },
                        {
                            x: 'May',
                            y: [5100, 5900]
                        },
                        {
                            x: 'Jun',
                            y: [5400, 6700]
                        },
                        {
                            x: 'Jul',
                            y: [4300, 4600]
                        },
                        {
                            x: 'Aug',
                            y: [2100, 2900]
                        }
                    ]
                },

                {
                    type: 'line',
                    name: 'Profit Median',
                    data: [
                        {
                            x: 'Mar',
                            y: 1900
                        },
                        {
                            x: 'Apr',
                            y: 2200
                        },
                        {
                            x: 'May',
                            y: 3000
                        },
                        {
                            x: 'Jun',
                            y: 1000
                        },
                        {
                            x: 'Jul',
                            y: 2100
                        },
                        {
                            x: 'Aug',
                            y: 1200
                        },
                        {
                            x: 'Sep',
                            y: 2250
                        },
                        {
                            x: 'Oct',
                            y: 2900
                        }
                    ]
                },
                {
                    type: 'line',
                    name: 'Expense Median',
                    data: [
                        {
                            x: 'Mar',
                            y: 4300
                        },
                        {
                            x: 'Apr',
                            y: 3700
                        },
                        {
                            x: 'May',
                            y: 5500
                        },
                        {
                            x: 'Jun',
                            y: 5900
                        },
                        {
                            x: 'Jul',
                            y: 4500
                        },
                        {
                            x: 'Aug',
                            y: 3500
                        },
                        {
                            x: 'Sep',
                            y: 2000
                        },
                        {
                            x: 'Oct',
                            y: 1800
                        }
                    ]
                }
            ],
            chart: {
                height: 285,
                type: 'rangeArea',
                animations: {
                    speed: 500
                },
                toolbar: {
                    show: false,
                },
            },
            colors: colors,
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: [0.24, 0.24, 1, 1]
            },
            forecastDataPoints: {
                count: 2
            },
            yaxis: {
                show: false,
            },
            stroke: {
                curve: 'straight',
                width: [0, 0, 2, 2]
            },
            grid: {
                show: true,
                padding: {
                    top: -8,
                    left: 10,
                    right: 0,
                }
            },
            legend: {
                show: true,
                customLegendItems: ['Team B', 'Team A'],
                inverseOrder: true
            },
            markers: {
                hover: {
                    sizeOffset: 5
                }
            }
        }
    }

    // AudienceChart Chart
    private _audienceChart(colors: any) {
        colors = getChartColorsArray(colors);
        this.audienceChart = {
            series: [{
                name: 'Male',
                data: [44, 55, 41, 67, 22, 43, 26]
            }, {
                name: 'Female',
                data: [13, 23, 20, 8, 13, 27, 41]
            }],
            chart: {
                type: 'bar',
                height: 390,
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 6,
                    columnWidth: '44%',
                    dataLabels: {
                        total: {
                            enabled: true,
                            style: {
                                fontSize: '13px',
                                fontWeight: 600
                            }
                        }
                    }
                },
            },
            xaxis: {
                type: 'datetime',
                categories: ['01/01/2023 GMT', '01/02/2023 GMT', '01/03/2023 GMT', '01/04/2023 GMT',
                    '01/05/2023 GMT', '01/06/2023 GMT', '01/07/2023 GMT'
                ],
            },
            colors: colors,
            legend: {
                position: 'top',
                horizontalAlign: 'right',
            },
            fill: {
                opacity: 1
            }
        }
    }

}
