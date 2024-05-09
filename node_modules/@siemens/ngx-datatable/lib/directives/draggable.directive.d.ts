import { ElementRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
export declare class DraggableDirective implements OnDestroy, OnChanges {
    dragEventTarget: any;
    dragModel: any;
    dragX: boolean;
    dragY: boolean;
    dragStart: EventEmitter<any>;
    dragging: EventEmitter<any>;
    dragEnd: EventEmitter<any>;
    element: HTMLElement;
    isDragging: boolean;
    subscription: Subscription;
    constructor(element: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onMouseup(event: MouseEvent): void;
    onMousedown(event: MouseEvent): void;
    move(event: MouseEvent, mouseDownPos: {
        x: number;
        y: number;
    }): void;
    private _destroySubscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<DraggableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DraggableDirective, "[draggable]", never, { "dragEventTarget": { "alias": "dragEventTarget"; "required": false; }; "dragModel": { "alias": "dragModel"; "required": false; }; "dragX": { "alias": "dragX"; "required": false; }; "dragY": { "alias": "dragY"; "required": false; }; }, { "dragStart": "dragStart"; "dragging": "dragging"; "dragEnd": "dragEnd"; }, never, never, false, never>;
}
