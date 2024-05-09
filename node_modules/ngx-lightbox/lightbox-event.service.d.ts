import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface IEvent {
    id: number;
    data?: any;
}
export interface IAlbum {
    src: string;
    caption?: string;
    thumb: string;
    downloadUrl?: string;
}
export declare const LIGHTBOX_EVENT: {
    CHANGE_PAGE: number;
    CLOSE: number;
    OPEN: number;
    ZOOM_IN: number;
    ZOOM_OUT: number;
    ROTATE_LEFT: number;
    ROTATE_RIGHT: number;
};
export declare class LightboxEvent {
    private _lightboxEventSource;
    lightboxEvent$: Observable<Object>;
    constructor();
    broadcastLightboxEvent(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LightboxEvent, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LightboxEvent>;
}
export declare class LightboxWindowRef {
    get nativeWindow(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<LightboxWindowRef, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LightboxWindowRef>;
}
