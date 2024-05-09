import { ContentChild, Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { DatatableRowDetailTemplateDirective } from './row-detail-template.directive';
import * as i0 from "@angular/core";
export class DatatableRowDetailDirective {
    constructor() {
        /**
         * The detail row height is required especially
         * when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Row detail row visbility was toggled.
         */
        this.toggle = new EventEmitter();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of the row
     */
    toggleExpandRow(row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    }
    /**
     * API method to expand all the rows.
     */
    expandAllRows() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * API method to collapse all the rows.
     */
    collapseAllRows() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DatatableRowDetailDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.6", type: DatatableRowDetailDirective, selector: "ngx-datatable-row-detail", inputs: { rowHeight: "rowHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" }, queries: [{ propertyName: "_templateQuery", first: true, predicate: DatatableRowDetailTemplateDirective, descendants: true, read: TemplateRef, static: true }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DatatableRowDetailDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ngx-datatable-row-detail' }]
        }], propDecorators: { rowHeight: [{
                type: Input
            }], _templateInput: [{
                type: Input,
                args: ['template']
            }], _templateQuery: [{
                type: ContentChild,
                args: [DatatableRowDetailTemplateDirective, { read: TemplateRef, static: true }]
            }], toggle: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWRldGFpbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0YXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy9yb3ctZGV0YWlsL3Jvdy1kZXRhaWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFHdEYsTUFBTSxPQUFPLDJCQUEyQjtJQUR4QztRQUVFOzs7V0FHRztRQUNNLGNBQVMsR0FBcUQsQ0FBQyxDQUFDO1FBWXpFOztXQUVHO1FBQ08sV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0tBK0IxRDtJQXRDQyxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUNwRCxDQUFDO0lBT0Q7O09BRUc7SUFDSCxlQUFlLENBQUMsR0FBUTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLEdBQUc7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxhQUFhO1FBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBbERVLDJCQUEyQjtrR0FBM0IsMkJBQTJCLCtOQVV4QixtQ0FBbUMsMkJBQVUsV0FBVzs7MkZBVjNELDJCQUEyQjtrQkFEdkMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBRTs4QkFNeEMsU0FBUztzQkFBakIsS0FBSztnQkFHSixjQUFjO3NCQURmLEtBQUs7dUJBQUMsVUFBVTtnQkFJZixjQUFjO3NCQURmLFlBQVk7dUJBQUMsbUNBQW1DLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBVTVFLE1BQU07c0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhdGFibGVSb3dEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vcm93LWRldGFpbC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICduZ3gtZGF0YXRhYmxlLXJvdy1kZXRhaWwnIH0pXG5leHBvcnQgY2xhc3MgRGF0YXRhYmxlUm93RGV0YWlsRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIFRoZSBkZXRhaWwgcm93IGhlaWdodCBpcyByZXF1aXJlZCBlc3BlY2lhbGx5XG4gICAqIHdoZW4gdmlydHVhbCBzY3JvbGwgaXMgZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIHJvd0hlaWdodDogbnVtYmVyIHwgKChyb3c/OiBhbnksIGluZGV4PzogbnVtYmVyKSA9PiBudW1iZXIpID0gMDtcblxuICBASW5wdXQoJ3RlbXBsYXRlJylcbiAgICBfdGVtcGxhdGVJbnB1dDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAQ29udGVudENoaWxkKERhdGF0YWJsZVJvd0RldGFpbFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBfdGVtcGxhdGVRdWVyeTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlSW5wdXQgfHwgdGhpcy5fdGVtcGxhdGVRdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSb3cgZGV0YWlsIHJvdyB2aXNiaWxpdHkgd2FzIHRvZ2dsZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgdG9nZ2xlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBleHBhbnNpb24gb2YgdGhlIHJvd1xuICAgKi9cbiAgdG9nZ2xlRXhwYW5kUm93KHJvdzogYW55KTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGUuZW1pdCh7XG4gICAgICB0eXBlOiAncm93JyxcbiAgICAgIHZhbHVlOiByb3dcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBUEkgbWV0aG9kIHRvIGV4cGFuZCBhbGwgdGhlIHJvd3MuXG4gICAqL1xuICBleHBhbmRBbGxSb3dzKCk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlLmVtaXQoe1xuICAgICAgdHlwZTogJ2FsbCcsXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFQSSBtZXRob2QgdG8gY29sbGFwc2UgYWxsIHRoZSByb3dzLlxuICAgKi9cbiAgY29sbGFwc2VBbGxSb3dzKCk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlLmVtaXQoe1xuICAgICAgdHlwZTogJ2FsbCcsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTtcbiAgfVxufVxuIl19