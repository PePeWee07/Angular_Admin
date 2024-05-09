import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class LightboxConfig {
    constructor() {
        this.fadeDuration = 0.7;
        this.resizeDuration = 0.5;
        this.fitImageInViewPort = true;
        this.positionFromTop = 20;
        this.showImageNumberLabel = false;
        this.alwaysShowNavOnTouchDevices = false;
        this.wrapAround = false;
        this.disableKeyboardNav = false;
        this.disableScrolling = false;
        this.centerVertically = false;
        this.enableTransition = true;
        this.albumLabel = 'Image %1 of %2';
        this.showZoom = false;
        this.showRotate = false;
        this.containerElementResolver = (documentRef) => documentRef.querySelector('body');
    }
}
LightboxConfig.ɵfac = function LightboxConfig_Factory(t) { return new (t || LightboxConfig)(); };
LightboxConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LightboxConfig, factory: LightboxConfig.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxConfig, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=lightbox-config.service.js.map