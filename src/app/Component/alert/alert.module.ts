import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MDAlertComponent } from './alert.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@NgModule({
  imports: [CommonModule, LucideAngularModule],
  declarations: [MDAlertComponent],
  exports: [MDAlertComponent],
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class MDAlertModule {
  static forRoot(): ModuleWithProviders<MDAlertModule> {
    return { ngModule: MDAlertModule, providers: [] };
  }
}