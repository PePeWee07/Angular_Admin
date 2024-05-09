import { Component, Input } from '@angular/core';
import { TabContextService } from './tab-context.service';

@Component({
  selector: 'app-nav-item',
  template: `
    <li (click)="handleClick()" [class]="class" [ngClass]="{'active': eventKey === activeTab}">
        <ng-content></ng-content>
    </li>
  `,
})
export class NavItemComponent {
  @Input() tabSetName!: string; // Add a new input for tab set name
  @Input() eventKey!: string;
  @Input() class!: string;
  activeTab: string = '';

  constructor(private tabContextService: TabContextService) { }

  ngOnInit() {
    this.tabContextService
      .setActiveTab$(this.tabSetName, this.eventKey) // Pass tabSetName
      .subscribe((activeTab) => {
        this.activeTab = activeTab;
      });
  }

  handleClick() {
    this.tabContextService.changeTab(this.tabSetName, this.eventKey); // Pass tabSetName
  }

}
