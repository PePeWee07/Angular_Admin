import { EventEmitter } from '@angular/core';
import { DatatableFooterDirective } from './footer.directive';
import * as i0 from "@angular/core";
export declare class DataTableFooterComponent {
    footerHeight: number;
    rowCount: number;
    pageSize: number;
    offset: number;
    pagerLeftArrowIcon: string;
    pagerRightArrowIcon: string;
    pagerPreviousIcon: string;
    pagerNextIcon: string;
    totalMessage: string;
    footerTemplate: DatatableFooterDirective;
    selectedCount: number;
    selectedMessage: string | boolean;
    page: EventEmitter<any>;
    get isVisible(): boolean;
    get curPage(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataTableFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataTableFooterComponent, "datatable-footer", never, { "footerHeight": { "alias": "footerHeight"; "required": false; }; "rowCount": { "alias": "rowCount"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "offset": { "alias": "offset"; "required": false; }; "pagerLeftArrowIcon": { "alias": "pagerLeftArrowIcon"; "required": false; }; "pagerRightArrowIcon": { "alias": "pagerRightArrowIcon"; "required": false; }; "pagerPreviousIcon": { "alias": "pagerPreviousIcon"; "required": false; }; "pagerNextIcon": { "alias": "pagerNextIcon"; "required": false; }; "totalMessage": { "alias": "totalMessage"; "required": false; }; "footerTemplate": { "alias": "footerTemplate"; "required": false; }; "selectedCount": { "alias": "selectedCount"; "required": false; }; "selectedMessage": { "alias": "selectedMessage"; "required": false; }; }, { "page": "page"; }, never, never, false, never>;
}
