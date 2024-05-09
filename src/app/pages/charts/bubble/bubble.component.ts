import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { getChartColorsArray } from '../../../shared/commonFunction';

@Component({
  selector: 'app-bubble',
  standalone: true,
  imports: [CommonModule,PageTitleComponent,NgApexchartsModule],
  templateUrl: './bubble.component.html',
  styles: ``
})
export class BubbleComponent {

  
  simpleBubbleChart: any;
  BubbleChart: any;

  constructor() { }

  ngOnInit(): void {

    // Chart Color Data Get Function
    this._simpleBubbleChart('["bg-custom-500", "bg-green-500", "bg-orange-500", "bg-yellow-500"]');
    this._BubbleChart('["bg-sky-500", "bg-yellow-500", "bg-red-500", "bg-purple-500"]');

  }

  /**
 * Series data
 */
  private generateData(baseval: number, count: number, yrange: { max: number; min: number; }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  /**
 * Simple Bubble Chart
 */
  private _simpleBubbleChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.simpleBubbleChart = {
      series: [
        {
          name: "Bubble1",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: "Bubble2",
          data: this.generateData(new Date("12 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: "Bubble3",
          data: this.generateData(new Date("13 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: "Bubble4",
          data: this.generateData(new Date("14 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
      ],
      chart: {
        height: 350,
        type: "bubble",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 0.8,
      },
      xaxis: {
        tickAmount: 12,
        type: "category",
      },
      yaxis: {
        max: 70,
      },
      colors: colors,
    }
  }

  /**
 * 3D Bubble Chart
 */
  private _BubbleChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.BubbleChart = {
      series: [
        {
          name: "Product1",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: "Product2",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: "Product3",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: "Product4",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
      ],
      chart: {
        height: 350,
        type: "bubble"
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      xaxis: {
        tickAmount: 12,
        type: "datetime",
        labels: {
          rotate: 0,
        },
      },
      yaxis: {
        max: 70,
      },
      theme: {
        palette: "palette2",
      },
      colors: colors,
    };
  }

}
