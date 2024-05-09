import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DataTablePagerComponent {
    pagerLeftArrowIcon: string;
    pagerRightArrowIcon: string;
    pagerPreviousIcon: string;
    pagerNextIcon: string;
    set size(val: number);
    get size(): number;
    set count(val: number);
    get count(): number;
    set page(val: number);
    get page(): number;
    get totalPages(): number;
    change: EventEmitter<any>;
    _count: number;
    _page: number;
    _size: number;
    pages: any;
    canPrevious(): boolean;
    canNext(): boolean;
    prevPage(): void;
    nextPage(): void;
    selectPage(page: number): void;
    calcPages(page?: number): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<DataTablePagerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataTablePagerComponent, "datatable-pager", never, { "pagerLeftArrowIcon": { "alias": "pagerLeftArrowIcon"; "required": false; }; "pagerRightArrowIcon": { "alias": "pagerRightArrowIcon"; "required": false; }; "pagerPreviousIcon": { "alias": "pagerPreviousIcon"; "required": false; }; "pagerNextIcon": { "alias": "pagerNextIcon"; "required": false; }; "size": { "alias": "size"; "required": false; }; "count": { "alias": "count"; "required": false; }; "page": { "alias": "page"; "required": false; }; }, { "change": "change"; }, never, never, false, never>;
}
