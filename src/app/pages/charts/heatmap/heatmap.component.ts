import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { getChartColorsArray } from '../../../shared/commonFunction';

@Component({
  selector: 'app-heatmap',
  standalone: true,
  imports: [CommonModule,PageTitleComponent,NgApexchartsModule],
  templateUrl: './heatmap.component.html',
  styles: ``
})
export class HeatmapComponent {

   basicHeatmapChart: any;
   multipleSeriesChart: any;
   colorRangeChart: any;
   rangeWithoutShadesChart: any;
 
   constructor() { }
 
   ngOnInit(): void {
 
     // Chart Color Data Get Function
     this._basicHeatmapChart('["bg-custom-500"]');
     this._multipleSeriesChart('["bg-custom-500", "bg-purple-500", "bg-orange-500", "bg-yellow-500", "bg-green-500"]');
     this._colorRangeChart('["bg-custom-500", "bg-purple-500", "bg-orange-500", "bg-yellow-500"]');
     this._rangeWithoutShadesChart('["bg-sky-500", "bg-green-500"]');
   }
 
   /**
   * Series Data
   */
   private generateData(count: number, yrange: { max: number; min: number; }) {
     var i = 0;
     var series = [];
     while (i < count) {
       var x = "w" + (i + 1).toString();
       var y =
         Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
 
       series.push({
         x: x,
         y: y
       });
       i++;
     }
     return series;
   }
 
   /**
   * Basic Heatmap Chart
   */
   private _basicHeatmapChart(colors: any) {
     colors = getChartColorsArray(colors);
     this.basicHeatmapChart = {
       series: [
         {
           name: "Metric1",
           data: this.generateData(18, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "Metric2",
           data: this.generateData(18, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "Metric3",
           data: this.generateData(18, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "Metric4",
           data: this.generateData(18, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "Metric5",
           data: this.generateData(18, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "Metric6",
           data: this.generateData(18, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "Metric7",
           data: this.generateData(18, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "Metric8",
           data: this.generateData(18, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "Metric9",
           data: this.generateData(18, {
             min: 0,
             max: 90,
           }),
         },
       ],
       chart: {
        height: 350,
        type: 'heatmap',
        },
        dataLabels: {
            enabled: false
        },
       colors: [colors[0]],
     
     };
   }
 
   /**
   * Heatmap - Multiple Series
   */
   private _multipleSeriesChart(colors: any) {
     colors = getChartColorsArray(colors);
     this.multipleSeriesChart = {
       series: [
         {
           name: "W1",
           data: this.generateData(8, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "W2",
           data: this.generateData(8, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "W3",
           data: this.generateData(8, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "W4",
           data: this.generateData(8, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "W5",
           data: this.generateData(8, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "W6",
           data: this.generateData(8, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "W7",
           data: this.generateData(8, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "W8",
           data: this.generateData(8, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "W9",
           data: this.generateData(8, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "W10",
           data: this.generateData(8, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "W11",
           data: this.generateData(8, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "W12",
           data: this.generateData(8, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "W13",
           data: this.generateData(8, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "W14",
           data: this.generateData(8, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "W15",
           data: this.generateData(8, {
             min: 0,
             max: 90,
           }),
         },
       ],
       chart: {
         height: 350,
         type: "heatmap",

       },
       dataLabels: {
         enabled: false,
       },
       colors: colors,
       xaxis: {
        type: 'category',
        categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30'],
       },

       grid: {
         padding: {
           right: 20,
         },
       },
       stroke: {
         colors: [colors[8]]
       }
     };
   }
 
   /**
   * Heatmap Color Range
   */
   private _colorRangeChart(colors: any) {
     colors = getChartColorsArray(colors);
     this.colorRangeChart = {
       series: [{
         name: 'Jan',
         data: this.generateData(20, {
           min: -30,
           max: 55
         })
       },
       {
         name: 'Feb',
         data: this.generateData(20, {
           min: -30,
           max: 55
         })
       },
       {
         name: 'Mar',
         data: this.generateData(20, {
           min: -30,
           max: 55
         })
       },
       {
         name: 'Apr',
         data: this.generateData(20, {
           min: -30,
           max: 55
         })
       },
       {
         name: 'May',
         data: this.generateData(20, {
           min: -30,
           max: 55
         })
       },
       {
         name: 'Jun',
         data: this.generateData(20, {
           min: -30,
           max: 55
         })
       },
       {
         name: 'Jul',
         data: this.generateData(20, {
           min: -30,
           max: 55
         })
       },
       {
         name: 'Aug',
         data: this.generateData(20, {
           min: -30,
           max: 55
         })
       },
       {
         name: 'Sep',
         data: this.generateData(20, {
           min: -30,
           max: 55
         })
       }
       ],
       chart: {
         height: 350,
         type: "heatmap",
       },
       plotOptions: {
         heatmap: {
           shadeIntensity: 0.5,
           radius: 0,
           useFillColorAsStroke: true,
           colors: colors,
         },
       },
       dataLabels: {
         enabled: false,
       },
       stroke: {
         width: 1,
       },
       title: {
         text: "HeatMap Chart with Color Range",

       }
     };
   }
 
   /**
   * Heatmap - Range Without Shades
   */
   private _rangeWithoutShadesChart(colors: any) {
     colors = getChartColorsArray(colors);
     this.rangeWithoutShadesChart = {
       series: [
         {
           name: "Metric1",
           data: this.generateData(20, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "Metric2",
           data: this.generateData(20, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "Metric3",
           data: this.generateData(20, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "Metric4",
           data: this.generateData(20, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "Metric5",
           data: this.generateData(20, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "Metric6",
           data: this.generateData(20, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "Metric7",
           data: this.generateData(20, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "Metric8",
           data: this.generateData(20, {
             min: 0,
             max: 90,
           }),
         },
         {
           name: "Metric8",
           data: this.generateData(20, {
             min: 0,
             max: 90,
           }),
         },
       ],
       chart: {
         height: 350,
         type: "heatmap",
       },
       stroke: {
         width: 0,
       },
       plotOptions: {
         heatmap: {
           radius: 30,
           enableShades: false,
           colorScale: {
             ranges: [
               {
                 from: 0,
                 to: 50,
                 color: colors[0],
               },
               {
                 from: 51,
                 to: 100,
                 color: colors[1],
               },
             ],
           },
         },
       },
       dataLabels: {
         enabled: true,
         style: {
           colors: ["#fff"],
         },
       },
       xaxis: {
         type: "category",
       },
     };
   }

}
