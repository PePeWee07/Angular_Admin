import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { LightboxComponent } from './lightbox.component';
import { LightboxConfig } from './lightbox-config.service';
import { LightboxEvent, LIGHTBOX_EVENT } from './lightbox-event.service';
import { LightboxOverlayComponent } from './lightbox-overlay.component';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "./lightbox-config.service";
import * as i2 from "./lightbox-event.service";
export class Lightbox {
    constructor(_componentFactoryResolver, _injector, _applicationRef, _lightboxConfig, _lightboxEvent, _documentRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
        this._applicationRef = _applicationRef;
        this._lightboxConfig = _lightboxConfig;
        this._lightboxEvent = _lightboxEvent;
        this._documentRef = _documentRef;
    }
    open(album, curIndex = 0, options = {}) {
        const overlayComponentRef = this._createComponent(LightboxOverlayComponent);
        const componentRef = this._createComponent(LightboxComponent);
        const newOptions = {};
        // broadcast open event
        this._lightboxEvent.broadcastLightboxEvent({ id: LIGHTBOX_EVENT.OPEN });
        Object.assign(newOptions, this._lightboxConfig, options);
        // attach input to lightbox
        componentRef.instance.album = album;
        componentRef.instance.currentImageIndex = curIndex;
        componentRef.instance.options = newOptions;
        componentRef.instance.cmpRef = componentRef;
        // attach input to overlay
        overlayComponentRef.instance.options = newOptions;
        overlayComponentRef.instance.cmpRef = overlayComponentRef;
        // FIXME: not sure why last event is broadcasted (which is CLOSED) and make
        // lightbox can not be opened the second time.
        // Need to timeout so that the OPEN event is set before component is initialized
        setTimeout(() => {
            this._applicationRef.attachView(overlayComponentRef.hostView);
            this._applicationRef.attachView(componentRef.hostView);
            overlayComponentRef.onDestroy(() => {
                this._applicationRef.detachView(overlayComponentRef.hostView);
            });
            componentRef.onDestroy(() => {
                this._applicationRef.detachView(componentRef.hostView);
            });
            const containerElement = newOptions.containerElementResolver(this._documentRef);
            containerElement.appendChild(overlayComponentRef.location.nativeElement);
            containerElement.appendChild(componentRef.location.nativeElement);
        });
    }
    close() {
        if (this._lightboxEvent) {
            this._lightboxEvent.broadcastLightboxEvent({ id: LIGHTBOX_EVENT.CLOSE });
        }
    }
    _createComponent(ComponentClass) {
        const factory = this._componentFactoryResolver.resolveComponentFactory(ComponentClass);
        const component = factory.create(this._injector);
        return component;
    }
}
Lightbox.ɵfac = function Lightbox_Factory(t) { return new (t || Lightbox)(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i1.LightboxConfig), i0.ɵɵinject(i2.LightboxEvent), i0.ɵɵinject(DOCUMENT)); };
Lightbox.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: Lightbox, factory: Lightbox.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Lightbox, [{
        type: Injectable
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.Injector }, { type: i0.ApplicationRef }, { type: i1.LightboxConfig }, { type: i2.LightboxEvent }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=lightbox.service.js.map