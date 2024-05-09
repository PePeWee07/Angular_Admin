import { Component, Input } from '@angular/core';
import { TabContextService } from './tab-context.service';

@Component({
  selector: 'mn-tab-pane',
  template: `
    <div [ngClass]="{'block': active, 'hidden': !active}">
      <ng-content></ng-content>
    </div>
  `,
})
export class TabPaneComponent {
  @Input() tabSetName!: string; // Add a new input for tab set name
  @Input() eventKey!: string;
  active: boolean = false;

  constructor(private tabContextService: TabContextService) { }

  ngOnInit() {
    this.tabContextService
      .setActiveTab$(this.tabSetName, this.eventKey) // Pass tabSetName
      .subscribe((activeTab) => {
        this.active = this.eventKey === activeTab;
      });
  }
}
