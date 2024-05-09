import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AccordianGroupComponent } from './accordian-group.component';
import { AccordianComponent } from './accordion.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AccordianComponent, AccordianGroupComponent],
  exports: [AccordianComponent,AccordianGroupComponent]
})
export class AccordionModule {
  static forRoot(): ModuleWithProviders<AccordionModule> {
    return { ngModule: AccordionModule, providers: [] };
  }
}