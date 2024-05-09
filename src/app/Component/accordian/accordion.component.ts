import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { AccordianGroupComponent } from './accordian-group.component';

@Component({
  selector: 'md-accordion',
  template: `<ng-content></ng-content>`,
})

export class AccordianComponent {

  @Input() closeOthers = true;

  @ContentChildren(AccordianGroupComponent) accordionGroups!: QueryList<AccordianGroupComponent>;

  constructor() { }

  ngAfterContentInit() {

    // Set the expanded by default
    this.accordionGroups.forEach(group => { 
      if (group.isOpen == true) {
        group.expanded = true;
        group.addActiveClass();
      }
    })

    // set to open accordion at a time one
    if (this.closeOthers == true) {
      this.accordionGroups.forEach(group => {
        group.toggle.subscribe(() => {
          // Close all groups except the one that emitted the toggle event
          this.closeAllGroupsExcept(group);
          this.addActiveClassToExpandedGroup(group);
        });
      });
    }
}
  
closeAllGroupsExcept(selectedGroup: AccordianGroupComponent) {
  this.accordionGroups.forEach(group => {
    if (group !== selectedGroup) {
      group.expanded = false;
      group.removeActiveClass();
    }
  });
}

addActiveClassToExpandedGroup(group: AccordianGroupComponent) {
  this.accordionGroups.forEach(g => {
    if (g === group) {
      if (g.expanded) {
        g.addActiveClass();
      }
    }
  });
}

}