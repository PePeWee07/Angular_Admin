import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { getChartColorsArray } from '../../../shared/commonFunction';

@Component({
  selector: 'app-polar',
  standalone: true,
  imports: [CommonModule,PageTitleComponent,NgApexchartsModule],
  templateUrl: './polar.component.html',
  styles: ``
})
export class PolarComponent {

   basicPolarChart: any;
   monochromeChart: any;
 
   constructor() { }
 
   ngOnInit(): void {
 
 
     // Chart Color Data Get Function
     this._basicPolarChart('["bg-custom-300", "bg-orange-300", "bg-green-300", "bg-yellow-300", "bg-purple-300", "bg-slate-300", "bg-red-300", "bg-emerald-200","bg-pink-200"]');
     this._monochromeChart('["bg-custom-500"]');
 
   }
 
   /**
 * Basic-Polar Area Chart
 */
   private _basicPolarChart(colors: any) {
     colors = getChartColorsArray(colors);
     this.basicPolarChart = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chart: {
          height: 350,
          type: 'polarArea',
      },
      stroke: {
          colors: ['#fff']
      },
      colors: colors,
      fill: {
          opacity: 0.8
      },
      legend: {
          position: 'bottom'
      }
     };
 

   }
 
   /**
  * Polar-Area Monochrome
  */
   private _monochromeChart(colors: any) {
     colors = getChartColorsArray(colors);
     this.monochromeChart = {
      series: [42, 47, 52, 58, 65],
      chart: {
          height: 350,
          type: 'polarArea'
      },
      labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
      fill: {
          opacity: 1
      },
      stroke: {
          width: 1,
          colors: undefined
      },
      yaxis: {
          show: false
      },
      legend: {
          position: 'bottom'
      },
      plotOptions: {
          polarArea: {
              rings: {
                  strokeWidth: 0
              },
              spokes: {
                  strokeWidth: 0
              },
          }
      },
      theme: {
          monochrome: {
              enabled: true,
              color: colors[0],
              shadeTo: 'light',
              shadeIntensity: 0.6
          }
      }
     };
 

   }


}
