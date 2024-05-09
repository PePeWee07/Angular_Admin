// nav.component.ts
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TabContextService } from './tab-context.service';

@Component({
  selector: 'app-nav',
  template: `
    <ng-container>
      <ul [class]="className">
        <ng-content></ng-content>
      </ul>
    </ng-container>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent {
  @Input() className: string = '';
  @Input() defaultActiveKey = 'home';
  @Input() tabSetName!: string;

  constructor(private tabContextService: TabContextService) { }

  ngOnInit() {
    this.tabContextService.initializeActiveTab(this.tabSetName, this.defaultActiveKey);
  }
}
