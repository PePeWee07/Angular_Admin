import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NavItemComponent } from './nav-item.component';
import { NavComponent } from './nav.component';
import { TabPaneComponent } from './tab-pane.component';
import { TabContextService } from './tab-context.service';


@NgModule({
    imports: [CommonModule],
    declarations: [
        NavItemComponent,
        NavComponent,
        TabPaneComponent
    ],
    providers:[TabContextService],   
    exports: [
        NavItemComponent,
        NavComponent,
        TabPaneComponent
    ]
})
export class NavModule {
    static forRoot(): ModuleWithProviders<NavModule> {
        return { ngModule: NavModule, providers: [] };
    }
}