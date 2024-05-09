import { EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DatatableGroupHeaderDirective {
    /**
     * Row height is required when virtual scroll is enabled.
     */
    rowHeight: number | ((group?: any, index?: number) => number);
    _templateInput: TemplateRef<any>;
    _templateQuery: TemplateRef<any>;
    get template(): TemplateRef<any>;
    /**
     * Track toggling of group visibility
     */
    toggle: EventEmitter<any>;
    /**
     * Toggle the expansion of a group
     */
    toggleExpandGroup(group: any): void;
    /**
     * Expand all groups
     */
    expandAllGroups(): void;
    /**
     * Collapse all groups
     */
    collapseAllGroups(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatatableGroupHeaderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DatatableGroupHeaderDirective, "ngx-datatable-group-header", never, { "rowHeight": { "alias": "rowHeight"; "required": false; }; "_templateInput": { "alias": "template"; "required": false; }; }, { "toggle": "toggle"; }, ["_templateQuery"], never, false, never>;
}
