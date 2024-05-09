import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { fetchorderData } from '../../../store/Ecommerce/ecommerce-action';
import { selectDataLoading, selectOrder } from '../../../store/Ecommerce/ecommerce-selector';
import { CountUpModule } from 'ngx-countup';
import { NgApexchartsModule } from 'ng-apexcharts';
import { getChartColorsArray } from '../../../shared/commonFunction';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { MDModalModule } from '../../../Component/modals';
import { MnDropdownComponent } from '../../../Component/dropdown';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { FlatpickrModule } from '../../../Component/flatpickr/flatpickr.module';
import { NGXPagination } from '../../../Component/pagination';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, CountUpModule, NgApexchartsModule, NgxDatatableModule, MDModalModule, MnDropdownComponent, LucideAngularModule, NGXPagination, FlatpickrModule, RouterModule],
  templateUrl: './orders.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class OrdersComponent {

  orders: any;
  allorders: any;
  ordersOverviewChart: any;
  selectedStatus: any = 'all';

  currentPage: number = 1;
  itemsPerPage: number = 7;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;

  private store = inject(Store)

  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchorderData());
      this.store.select(selectDataLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectOrder).subscribe(data => {
        this.orders = data
        this.allorders = data
        this.totalItems = data.length
      });

    }, 500)

    this._ordersOverviewChart('["bg-custom-500"]')
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

  columns = [
    { name: 'Id', prop: 'id' },
    { name: 'Order Id', prop: 'orderId' },
    { name: 'Order Date', prop: 'orderDate' },
    { name: 'Delivery Date', prop: 'deliveryDate' },
    { name: 'Customer Name', prop: 'customerName' },
    { name: 'Payment Method', prop: 'paymentMethod' },
    { name: 'Amount', prop: 'amount' },
    { name: 'Delivery Status', prop: 'deliveryStatus' },
    { name: 'Actions', prop: 'actions' }
  ];

  private _ordersOverviewChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.ordersOverviewChart = {
      series: [{
        name: 'Orders',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 3.4, 5.5, 8.8]
      }],
      chart: {
        height: 238,
        type: 'bar',
        toolbar: {
          show: false,
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "%";
        },
        style: {
          fontSize: '12px',
        }
      },
      grid: {
        padding: {
          bottom: -10,
        }
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: any) {
            return val + "%";
          }
        }

      },
      colors: colors
    }
  }

  // Status Filter
  statusFilter(status: any) {
    this.selectedStatus = status;
    this.orders = this.allorders.filter((item: any) => {
      if (status == 'all') {
        return this.allorders
      } else {
        return item.deliveryStatus == status
      }

    })
  }
}
