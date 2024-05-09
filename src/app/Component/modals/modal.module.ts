import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MDModalsComponent } from './modals.component';
import { ModalService } from './modal.service';
import { ModalTriggerDirective } from './modal-trigger.directive';
import { ModalDismissDirective } from './modal-dismiss.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [
        MDModalsComponent,
        ModalTriggerDirective,
        ModalDismissDirective
    ],
    providers: [ModalService],
    exports: [MDModalsComponent, ModalTriggerDirective, ModalDismissDirective]
})
export class MDModalModule {
    static forRoot(): ModuleWithProviders<MDModalModule> {
        return { ngModule: MDModalModule, providers: [] };
    }
}