import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export const LIGHTBOX_EVENT = {
    CHANGE_PAGE: 1,
    CLOSE: 2,
    OPEN: 3,
    ZOOM_IN: 4,
    ZOOM_OUT: 5,
    ROTATE_LEFT: 6,
    ROTATE_RIGHT: 7
};
export class LightboxEvent {
    constructor() {
        this._lightboxEventSource = new Subject();
        this.lightboxEvent$ = this._lightboxEventSource.asObservable();
    }
    broadcastLightboxEvent(event) {
        this._lightboxEventSource.next(event);
    }
}
LightboxEvent.ɵfac = function LightboxEvent_Factory(t) { return new (t || LightboxEvent)(); };
LightboxEvent.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LightboxEvent, factory: LightboxEvent.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxEvent, [{
        type: Injectable
    }], function () { return []; }, null); })();
function getWindow() {
    return window;
}
export class LightboxWindowRef {
    get nativeWindow() {
        return getWindow();
    }
}
LightboxWindowRef.ɵfac = function LightboxWindowRef_Factory(t) { return new (t || LightboxWindowRef)(); };
LightboxWindowRef.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LightboxWindowRef, factory: LightboxWindowRef.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxWindowRef, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=lightbox-event.service.js.map