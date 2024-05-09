import { Component } from '@angular/core';
import { DocumentsData, FollowersData, ProjectsData } from '../../../data';
import { NavModule } from '../../../Component/tab/tab.module';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { NgApexchartsModule } from 'ng-apexcharts';
import { getChartColorsArray } from '../../../shared/commonFunction';
import { CutomDropdownComponent } from '../../../Component/customdropdown';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NavModule, LucideAngularModule, NgApexchartsModule, CutomDropdownComponent],
  templateUrl: './account.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class AccountComponent {

  documentdata: any;
  projectsdata: any;
  followersData: any;

  recentStatisticsChart: any;

  ngOnInit(): void {

    // Chart Color Data Get Function
    this._recentStatisticsChart('["bg-custom-500", "bg-purple-500"]');


    this.documentdata = DocumentsData,
      this.projectsdata = ProjectsData,
      this.followersData = FollowersData

  }


  /**
 * Recent Statistics Chart
 */
  private _recentStatisticsChart(colors: any) {
    colors = getChartColorsArray(colors);
    this.recentStatisticsChart = {
      series: [{
        name: 'Following',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 87, 72]
      }, {
        name: 'Followers',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 105, 91]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '45%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      colors: colors,
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      fill: {
        opacity: 1
      },
    }

  }
}
