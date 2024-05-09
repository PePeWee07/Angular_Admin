import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CustomDrawerComponent } from './drawer.component';
import { DrawerTriggerDirective } from './drawer-trigger.directive';
import { DrawerDismissDirective } from './drawer-dismiss.directive';
import { DrawerService } from './drawer.service';

@NgModule({
    imports: [CommonModule],
    declarations: [
        CustomDrawerComponent,
        DrawerTriggerDirective,
        DrawerDismissDirective
    ],
    providers: [DrawerService],
    exports: [CustomDrawerComponent,DrawerTriggerDirective,DrawerDismissDirective]
})
export class DrawerModule {
    static forRoot(): ModuleWithProviders<DrawerModule> {
        return { ngModule: DrawerModule, providers: [] };
    }
}