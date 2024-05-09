import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DatatableFooterDirective {
    footerHeight: number;
    totalMessage: string;
    selectedMessage: string | boolean;
    pagerLeftArrowIcon: string;
    pagerRightArrowIcon: string;
    pagerPreviousIcon: string;
    pagerNextIcon: string;
    _templateInput: TemplateRef<any>;
    _templateQuery: TemplateRef<any>;
    get template(): TemplateRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatatableFooterDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DatatableFooterDirective, "ngx-datatable-footer", never, { "footerHeight": { "alias": "footerHeight"; "required": false; }; "totalMessage": { "alias": "totalMessage"; "required": false; }; "selectedMessage": { "alias": "selectedMessage"; "required": false; }; "pagerLeftArrowIcon": { "alias": "pagerLeftArrowIcon"; "required": false; }; "pagerRightArrowIcon": { "alias": "pagerRightArrowIcon"; "required": false; }; "pagerPreviousIcon": { "alias": "pagerPreviousIcon"; "required": false; }; "pagerNextIcon": { "alias": "pagerNextIcon"; "required": false; }; "_templateInput": { "alias": "template"; "required": false; }; }, {}, ["_templateQuery"], never, false, never>;
}
