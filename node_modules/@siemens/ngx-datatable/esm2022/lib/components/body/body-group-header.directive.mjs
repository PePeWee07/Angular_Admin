import { ContentChild, Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { DatatableGroupHeaderTemplateDirective } from './body-group-header-template.directive';
import * as i0 from "@angular/core";
export class DatatableGroupHeaderDirective {
    constructor() {
        /**
         * Row height is required when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Track toggling of group visibility
         */
        this.toggle = new EventEmitter();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of a group
     */
    toggleExpandGroup(group) {
        this.toggle.emit({
            type: 'group',
            value: group
        });
    }
    /**
     * Expand all groups
     */
    expandAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * Collapse all groups
     */
    collapseAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DatatableGroupHeaderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.6", type: DatatableGroupHeaderDirective, selector: "ngx-datatable-group-header", inputs: { rowHeight: "rowHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" }, queries: [{ propertyName: "_templateQuery", first: true, predicate: DatatableGroupHeaderTemplateDirective, descendants: true, read: TemplateRef, static: true }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DatatableGroupHeaderDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ngx-datatable-group-header' }]
        }], propDecorators: { rowHeight: [{
                type: Input
            }], _templateInput: [{
                type: Input,
                args: ['template']
            }], _templateQuery: [{
                type: ContentChild,
                args: [DatatableGroupHeaderTemplateDirective, { read: TemplateRef, static: true }]
            }], toggle: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1ncm91cC1oZWFkZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGF0YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvYm9keS9ib2R5LWdyb3VwLWhlYWRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztBQUcvRixNQUFNLE9BQU8sNkJBQTZCO0lBRDFDO1FBRUU7O1dBRUc7UUFDTSxjQUFTLEdBQXVELENBQUMsQ0FBQztRQVkzRTs7V0FFRztRQUNPLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQStCMUQ7SUF0Q0MsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDcEQsQ0FBQztJQU9EOztPQUVHO0lBQ0gsaUJBQWlCLENBQUMsS0FBVTtRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0FqRFUsNkJBQTZCO2tHQUE3Qiw2QkFBNkIsaU9BUzFCLHFDQUFxQywyQkFBVSxXQUFXOzsyRkFUN0QsNkJBQTZCO2tCQUR6QyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFOzhCQUsxQyxTQUFTO3NCQUFqQixLQUFLO2dCQUdKLGNBQWM7c0JBRGYsS0FBSzt1QkFBQyxVQUFVO2dCQUlmLGNBQWM7c0JBRGYsWUFBWTt1QkFBQyxxQ0FBcUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFVOUUsTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGF0YWJsZUdyb3VwSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2JvZHktZ3JvdXAtaGVhZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ25neC1kYXRhdGFibGUtZ3JvdXAtaGVhZGVyJyB9KVxuZXhwb3J0IGNsYXNzIERhdGF0YWJsZUdyb3VwSGVhZGVyRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIFJvdyBoZWlnaHQgaXMgcmVxdWlyZWQgd2hlbiB2aXJ0dWFsIHNjcm9sbCBpcyBlbmFibGVkLlxuICAgKi9cbiAgQElucHV0KCkgcm93SGVpZ2h0OiBudW1iZXIgfCAoKGdyb3VwPzogYW55LCBpbmRleD86IG51bWJlcikgPT4gbnVtYmVyKSA9IDA7XG5cbiAgQElucHV0KCd0ZW1wbGF0ZScpXG4gICAgX3RlbXBsYXRlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZChEYXRhdGFibGVHcm91cEhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBfdGVtcGxhdGVRdWVyeTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlSW5wdXQgfHwgdGhpcy5fdGVtcGxhdGVRdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFjayB0b2dnbGluZyBvZiBncm91cCB2aXNpYmlsaXR5XG4gICAqL1xuICBAT3V0cHV0KCkgdG9nZ2xlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBleHBhbnNpb24gb2YgYSBncm91cFxuICAgKi9cbiAgdG9nZ2xlRXhwYW5kR3JvdXAoZ3JvdXA6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlLmVtaXQoe1xuICAgICAgdHlwZTogJ2dyb3VwJyxcbiAgICAgIHZhbHVlOiBncm91cFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cGFuZCBhbGwgZ3JvdXBzXG4gICAqL1xuICBleHBhbmRBbGxHcm91cHMoKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGUuZW1pdCh7XG4gICAgICB0eXBlOiAnYWxsJyxcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29sbGFwc2UgYWxsIGdyb3Vwc1xuICAgKi9cbiAgY29sbGFwc2VBbGxHcm91cHMoKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGUuZW1pdCh7XG4gICAgICB0eXBlOiAnYWxsJyxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pO1xuICB9XG59XG4iXX0=