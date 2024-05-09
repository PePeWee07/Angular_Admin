import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';
import { DataTableColumnHeaderDirective } from './column-header.directive';
import { DataTableColumnCellDirective } from './column-cell.directive';
import { DataTableColumnCellTreeToggle } from './tree.directive';
import { DataTableColumnGhostCellDirective } from './column-ghost-cell.directive';
import * as i0 from "@angular/core";
import * as i1 from "../../services/column-changes.service";
export class DataTableColumnDirective {
    get cellTemplate() {
        return this._cellTemplateInput || this._cellTemplateQuery;
    }
    get headerTemplate() {
        return this._headerTemplateInput || this._headerTemplateQuery;
    }
    get treeToggleTemplate() {
        return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
    }
    get ghostCellTemplate() {
        return this._ghostCellTemplateInput || this._ghostCellTemplateQuery;
    }
    constructor(columnChangesService) {
        this.columnChangesService = columnChangesService;
        this.isFirstChange = true;
    }
    ngOnChanges() {
        if (this.isFirstChange) {
            this.isFirstChange = false;
        }
        else {
            this.columnChangesService.onInputChange();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DataTableColumnDirective, deps: [{ token: i1.ColumnChangesService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.6", type: DataTableColumnDirective, selector: "ngx-datatable-column", inputs: { name: "name", prop: "prop", frozenLeft: "frozenLeft", frozenRight: "frozenRight", flexGrow: "flexGrow", resizeable: "resizeable", comparator: "comparator", pipe: "pipe", sortable: "sortable", draggable: "draggable", canAutoResize: "canAutoResize", minWidth: "minWidth", width: "width", maxWidth: "maxWidth", checkboxable: "checkboxable", headerCheckboxable: "headerCheckboxable", headerClass: "headerClass", cellClass: "cellClass", isTreeColumn: "isTreeColumn", treeLevelIndent: "treeLevelIndent", summaryFunc: "summaryFunc", summaryTemplate: "summaryTemplate", _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"], _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"], _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"], _ghostCellTemplateInput: ["ghostCellTemplate", "_ghostCellTemplateInput"] }, queries: [{ propertyName: "_cellTemplateQuery", first: true, predicate: DataTableColumnCellDirective, descendants: true, read: TemplateRef, static: true }, { propertyName: "_headerTemplateQuery", first: true, predicate: DataTableColumnHeaderDirective, descendants: true, read: TemplateRef, static: true }, { propertyName: "_treeToggleTemplateQuery", first: true, predicate: DataTableColumnCellTreeToggle, descendants: true, read: TemplateRef, static: true }, { propertyName: "_ghostCellTemplateQuery", first: true, predicate: DataTableColumnGhostCellDirective, descendants: true, read: TemplateRef, static: true }], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DataTableColumnDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ngx-datatable-column' }]
        }], ctorParameters: () => [{ type: i1.ColumnChangesService }], propDecorators: { name: [{
                type: Input
            }], prop: [{
                type: Input
            }], frozenLeft: [{
                type: Input
            }], frozenRight: [{
                type: Input
            }], flexGrow: [{
                type: Input
            }], resizeable: [{
                type: Input
            }], comparator: [{
                type: Input
            }], pipe: [{
                type: Input
            }], sortable: [{
                type: Input
            }], draggable: [{
                type: Input
            }], canAutoResize: [{
                type: Input
            }], minWidth: [{
                type: Input
            }], width: [{
                type: Input
            }], maxWidth: [{
                type: Input
            }], checkboxable: [{
                type: Input
            }], headerCheckboxable: [{
                type: Input
            }], headerClass: [{
                type: Input
            }], cellClass: [{
                type: Input
            }], isTreeColumn: [{
                type: Input
            }], treeLevelIndent: [{
                type: Input
            }], summaryFunc: [{
                type: Input
            }], summaryTemplate: [{
                type: Input
            }], _cellTemplateInput: [{
                type: Input,
                args: ['cellTemplate']
            }], _cellTemplateQuery: [{
                type: ContentChild,
                args: [DataTableColumnCellDirective, { read: TemplateRef, static: true }]
            }], _headerTemplateInput: [{
                type: Input,
                args: ['headerTemplate']
            }], _headerTemplateQuery: [{
                type: ContentChild,
                args: [DataTableColumnHeaderDirective, { read: TemplateRef, static: true }]
            }], _treeToggleTemplateInput: [{
                type: Input,
                args: ['treeToggleTemplate']
            }], _treeToggleTemplateQuery: [{
                type: ContentChild,
                args: [DataTableColumnCellTreeToggle, { read: TemplateRef, static: true }]
            }], _ghostCellTemplateInput: [{
                type: Input,
                args: ['ghostCellTemplate']
            }], _ghostCellTemplateQuery: [{
                type: ContentChild,
                args: [DataTableColumnGhostCellDirective, { read: TemplateRef, static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2NvbHVtbnMvY29sdW1uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBR2xGLE1BQU0sT0FBTyx3QkFBd0I7SUE4Qm5DLElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUM1RCxDQUFDO0lBUUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNoRSxDQUFDO0lBUUQsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsd0JBQXdCLElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3hFLENBQUM7SUFRRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDdEUsQ0FBQztJQUlELFlBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBRnRELGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBRW9DLENBQUM7SUFFbEUsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs4R0ExRVUsd0JBQXdCO2tHQUF4Qix3QkFBd0IsaThCQTJCckIsNEJBQTRCLDJCQUFVLFdBQVcsa0ZBVWpELDhCQUE4QiwyQkFBVSxXQUFXLHNGQVVuRCw2QkFBNkIsMkJBQVUsV0FBVyxxRkFVbEQsaUNBQWlDLDJCQUFVLFdBQVc7OzJGQXpEekQsd0JBQXdCO2tCQURwQyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFO3lGQUVwQyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFHSixrQkFBa0I7c0JBRG5CLEtBQUs7dUJBQUMsY0FBYztnQkFJbkIsa0JBQWtCO3NCQURuQixZQUFZO3VCQUFDLDRCQUE0QixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQVE3RSxvQkFBb0I7c0JBRHJCLEtBQUs7dUJBQUMsZ0JBQWdCO2dCQUlyQixvQkFBb0I7c0JBRHJCLFlBQVk7dUJBQUMsOEJBQThCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBUS9FLHdCQUF3QjtzQkFEekIsS0FBSzt1QkFBQyxvQkFBb0I7Z0JBSXpCLHdCQUF3QjtzQkFEekIsWUFBWTt1QkFBQyw2QkFBNkIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFROUUsdUJBQXVCO3NCQUR4QixLQUFLO3VCQUFDLG1CQUFtQjtnQkFJeEIsdUJBQXVCO3NCQUR4QixZQUFZO3VCQUFDLGlDQUFpQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5IZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbi1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkNlbGxEaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbi1jZWxsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5DZWxsVHJlZVRvZ2dsZSB9IGZyb20gJy4vdHJlZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29sdW1uQ2hhbmdlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb2x1bW4tY2hhbmdlcy5zZXJ2aWNlJztcbmltcG9ydCB7IFRhYmxlQ29sdW1uUHJvcCB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlLWNvbHVtbi50eXBlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkdob3N0Q2VsbERpcmVjdGl2ZSB9IGZyb20gJy4vY29sdW1uLWdob3N0LWNlbGwuZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbmd4LWRhdGF0YWJsZS1jb2x1bW4nIH0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBwcm9wOiBUYWJsZUNvbHVtblByb3A7XG4gIEBJbnB1dCgpIGZyb3plbkxlZnQ6IGFueTtcbiAgQElucHV0KCkgZnJvemVuUmlnaHQ6IGFueTtcbiAgQElucHV0KCkgZmxleEdyb3c6IG51bWJlcjtcbiAgQElucHV0KCkgcmVzaXplYWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgY29tcGFyYXRvcjogYW55O1xuICBASW5wdXQoKSBwaXBlOiBhbnk7XG4gIEBJbnB1dCgpIHNvcnRhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBkcmFnZ2FibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNhbkF1dG9SZXNpemU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1pbldpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heFdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGNoZWNrYm94YWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgaGVhZGVyQ2hlY2tib3hhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBoZWFkZXJDbGFzczogc3RyaW5nIHwgKChkYXRhOiBhbnkpID0+IHN0cmluZyB8IGFueSk7XG4gIEBJbnB1dCgpIGNlbGxDbGFzczogc3RyaW5nIHwgKChkYXRhOiBhbnkpID0+IHN0cmluZyB8IGFueSk7XG4gIEBJbnB1dCgpIGlzVHJlZUNvbHVtbjogYm9vbGVhbjtcbiAgQElucHV0KCkgdHJlZUxldmVsSW5kZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIHN1bW1hcnlGdW5jOiAoY2VsbHM6IGFueVtdKSA9PiBhbnk7XG4gIEBJbnB1dCgpIHN1bW1hcnlUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoJ2NlbGxUZW1wbGF0ZScpXG4gICAgX2NlbGxUZW1wbGF0ZUlucHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBDb250ZW50Q2hpbGQoRGF0YVRhYmxlQ29sdW1uQ2VsbERpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgX2NlbGxUZW1wbGF0ZVF1ZXJ5OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGdldCBjZWxsVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2NlbGxUZW1wbGF0ZUlucHV0IHx8IHRoaXMuX2NlbGxUZW1wbGF0ZVF1ZXJ5O1xuICB9XG5cbiAgQElucHV0KCdoZWFkZXJUZW1wbGF0ZScpXG4gICAgX2hlYWRlclRlbXBsYXRlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZChEYXRhVGFibGVDb2x1bW5IZWFkZXJEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIF9oZWFkZXJUZW1wbGF0ZVF1ZXJ5OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGdldCBoZWFkZXJUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVyVGVtcGxhdGVJbnB1dCB8fCB0aGlzLl9oZWFkZXJUZW1wbGF0ZVF1ZXJ5O1xuICB9XG5cbiAgQElucHV0KCd0cmVlVG9nZ2xlVGVtcGxhdGUnKVxuICAgIF90cmVlVG9nZ2xlVGVtcGxhdGVJbnB1dDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAQ29udGVudENoaWxkKERhdGFUYWJsZUNvbHVtbkNlbGxUcmVlVG9nZ2xlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBfdHJlZVRvZ2dsZVRlbXBsYXRlUXVlcnk6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgZ2V0IHRyZWVUb2dnbGVUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fdHJlZVRvZ2dsZVRlbXBsYXRlSW5wdXQgfHwgdGhpcy5fdHJlZVRvZ2dsZVRlbXBsYXRlUXVlcnk7XG4gIH1cblxuICBASW5wdXQoJ2dob3N0Q2VsbFRlbXBsYXRlJylcbiAgICBfZ2hvc3RDZWxsVGVtcGxhdGVJbnB1dDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAQ29udGVudENoaWxkKERhdGFUYWJsZUNvbHVtbkdob3N0Q2VsbERpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgX2dob3N0Q2VsbFRlbXBsYXRlUXVlcnk6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgZ2V0IGdob3N0Q2VsbFRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9naG9zdENlbGxUZW1wbGF0ZUlucHV0IHx8IHRoaXMuX2dob3N0Q2VsbFRlbXBsYXRlUXVlcnk7XG4gIH1cblxuICBwcml2YXRlIGlzRmlyc3RDaGFuZ2UgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uQ2hhbmdlc1NlcnZpY2U6IENvbHVtbkNoYW5nZXNTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmlzRmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuaXNGaXJzdENoYW5nZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbHVtbkNoYW5nZXNTZXJ2aWNlLm9uSW5wdXRDaGFuZ2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==