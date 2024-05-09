import { FileSaverModule } from 'ngx-filesaver';
import { NgModule } from '@angular/core';
import { LightboxConfig } from './lightbox-config.service';
import { LightboxEvent, LightboxWindowRef } from './lightbox-event.service';
import { LightboxOverlayComponent } from './lightbox-overlay.component';
import { LightboxComponent } from './lightbox.component';
import { Lightbox } from './lightbox.service';
import * as i0 from "@angular/core";
export class LightboxModule {
}
LightboxModule.ɵfac = function LightboxModule_Factory(t) { return new (t || LightboxModule)(); };
LightboxModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LightboxModule });
LightboxModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        Lightbox,
        LightboxConfig,
        LightboxEvent,
        LightboxWindowRef
    ], imports: [FileSaverModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxModule, [{
        type: NgModule,
        args: [{
                declarations: [LightboxOverlayComponent, LightboxComponent],
                providers: [
                    Lightbox,
                    LightboxConfig,
                    LightboxEvent,
                    LightboxWindowRef
                ],
                entryComponents: [LightboxOverlayComponent, LightboxComponent],
                imports: [FileSaverModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LightboxModule, { declarations: [LightboxOverlayComponent, LightboxComponent], imports: [FileSaverModule] }); })();
//# sourceMappingURL=lightbox.module.js.map