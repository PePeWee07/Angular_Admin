import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Row Disable Directive
 * Use this to disable/enable all children elements
 * Usage:
 *  To disable
 * 		<div [disabled]="true" disable-row >
 * 		</div>
 *  To enable
 *  	<div [disabled]="false" disable-row >
 * 		</div>
 */
export declare class DisableRowDirective {
    private element;
    private _disabled;
    set disabled(val: boolean);
    get disabled(): boolean;
    constructor(element: ElementRef);
    disableAllElements(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DisableRowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DisableRowDirective, "[disable-row]", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
