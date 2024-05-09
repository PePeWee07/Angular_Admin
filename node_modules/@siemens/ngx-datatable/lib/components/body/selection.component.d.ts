import { EventEmitter } from '@angular/core';
import { SelectionType } from '../../types/selection.type';
import * as i0 from "@angular/core";
export interface Model {
    type: string;
    event: MouseEvent | KeyboardEvent;
    row: any;
    rowElement: any;
    cellElement: any;
    cellIndex: number;
}
export declare class DataTableSelectionComponent {
    rows: any[];
    selected: any[];
    selectEnabled: boolean;
    selectionType: SelectionType;
    rowIdentity: any;
    selectCheck: any;
    disableCheck: any;
    activate: EventEmitter<any>;
    select: EventEmitter<any>;
    prevIndex: number;
    selectRow(event: KeyboardEvent | MouseEvent, index: number, row: any): void;
    onActivate(model: Model, index: number): void;
    onKeyboardFocus(model: Model): void;
    focusRow(rowElement: any, keyCode: number): void;
    getPrevNextRow(rowElement: any, keyCode: number): any;
    focusCell(cellElement: any, rowElement: any, keyCode: number, cellIndex: number): void;
    getRowSelected(row: any): boolean;
    getRowSelectedIdx(row: any, selected: any[]): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataTableSelectionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataTableSelectionComponent, "datatable-selection", never, { "rows": { "alias": "rows"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "selectEnabled": { "alias": "selectEnabled"; "required": false; }; "selectionType": { "alias": "selectionType"; "required": false; }; "rowIdentity": { "alias": "rowIdentity"; "required": false; }; "selectCheck": { "alias": "selectCheck"; "required": false; }; "disableCheck": { "alias": "disableCheck"; "required": false; }; }, { "activate": "activate"; "select": "select"; }, never, ["*"], false, never>;
}
