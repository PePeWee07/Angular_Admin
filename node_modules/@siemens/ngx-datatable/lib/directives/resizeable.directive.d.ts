import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ResizeableDirective implements OnDestroy, AfterViewInit {
    private renderer;
    resizeEnabled: boolean;
    minWidth: number;
    maxWidth: number;
    resize: EventEmitter<any>;
    resizing: EventEmitter<any>;
    element: HTMLElement;
    subscription: Subscription;
    private resizeHandle;
    constructor(element: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onMouseup(): void;
    onMousedown(event: MouseEvent): void;
    move(event: MouseEvent, initialWidth: number, mouseDownScreenX: number): void;
    private _destroySubscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResizeableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ResizeableDirective, "[resizeable]", never, { "resizeEnabled": { "alias": "resizeEnabled"; "required": false; }; "minWidth": { "alias": "minWidth"; "required": false; }; "maxWidth": { "alias": "maxWidth"; "required": false; }; }, { "resize": "resize"; "resizing": "resizing"; }, never, never, false, never>;
}
