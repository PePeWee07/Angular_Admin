import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector } from '@angular/core';
import { LightboxConfig } from './lightbox-config.service';
import { LightboxEvent, IAlbum } from './lightbox-event.service';
import * as i0 from "@angular/core";
export declare class Lightbox {
    private _componentFactoryResolver;
    private _injector;
    private _applicationRef;
    private _lightboxConfig;
    private _lightboxEvent;
    private _documentRef;
    constructor(_componentFactoryResolver: ComponentFactoryResolver, _injector: Injector, _applicationRef: ApplicationRef, _lightboxConfig: LightboxConfig, _lightboxEvent: LightboxEvent, _documentRef: any);
    open(album: Array<IAlbum>, curIndex?: number, options?: {}): void;
    close(): void;
    _createComponent(ComponentClass: any): ComponentRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<Lightbox, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Lightbox>;
}
