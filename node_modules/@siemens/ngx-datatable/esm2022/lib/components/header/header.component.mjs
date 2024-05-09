import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { columnGroupWidths, columnsByPin, columnsByPinArr } from '../../utils/column';
import { SortType } from '../../types/sort.type';
import { translateXY } from '../../utils/translate';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../directives/draggable.directive";
import * as i3 from "../../directives/resizeable.directive";
import * as i4 from "../../directives/orderable.directive";
import * as i5 from "../../directives/long-press.directive";
import * as i6 from "./header-cell.component";
export class DataTableHeaderComponent {
    set innerWidth(val) {
        this._innerWidth = val;
        setTimeout(() => {
            if (this._columns) {
                const colByPin = columnsByPin(this._columns);
                this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
                this.setStylesByGroup();
            }
        });
    }
    get innerWidth() {
        return this._innerWidth;
    }
    set headerHeight(val) {
        if (val !== 'auto') {
            this._headerHeight = `${val}px`;
        }
        else {
            this._headerHeight = val;
        }
    }
    get headerHeight() {
        return this._headerHeight;
    }
    set columns(val) {
        this._columns = val;
        const colsByPin = columnsByPin(val);
        this._columnsByPin = columnsByPinArr(val);
        setTimeout(() => {
            this._columnGroupWidths = columnGroupWidths(colsByPin, val);
            this.setStylesByGroup();
        });
    }
    get columns() {
        return this._columns;
    }
    set offsetX(val) {
        this._offsetX = val;
        this.setStylesByGroup();
    }
    get offsetX() {
        return this._offsetX;
    }
    constructor(cd) {
        this.cd = cd;
        this.sort = new EventEmitter();
        this.reorder = new EventEmitter();
        this.resize = new EventEmitter();
        this.resizing = new EventEmitter();
        this.select = new EventEmitter();
        this.columnContextmenu = new EventEmitter(false);
        this._columnGroupWidths = {
            total: 100
        };
        this._styleByGroup = {
            left: {},
            center: {},
            right: {}
        };
        this.destroyed = false;
    }
    ngOnDestroy() {
        this.destroyed = true;
    }
    onLongPressStart({ event, model }) {
        model.dragging = true;
        this.dragEventTarget = event;
    }
    onLongPressEnd({ event, model }) {
        this.dragEventTarget = event;
        // delay resetting so sort can be
        // prevented if we were dragging
        setTimeout(() => {
            // datatable component creates copies from columns on reorder
            // set dragging to false on new objects
            const column = this._columns.find(c => c.$$id === model.$$id);
            if (column) {
                column.dragging = false;
            }
        }, 5);
    }
    get headerWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        return '100%';
    }
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    onColumnResized(width, column) {
        this.resize.emit(this.makeResizeEvent(width, column));
    }
    onColumnResizing(width, column) {
        this.resizing.emit(this.makeResizeEvent(width, column));
    }
    makeResizeEvent(width, column) {
        if (width <= column.minWidth) {
            width = column.minWidth;
        }
        else if (width >= column.maxWidth) {
            width = column.maxWidth;
        }
        return {
            column,
            prevValue: column.width,
            newValue: width
        };
    }
    onColumnReordered({ prevIndex, newIndex, model }) {
        const column = this.getColumn(newIndex);
        column.isTarget = false;
        column.targetMarkerContext = undefined;
        this.reorder.emit({
            column: model,
            prevValue: prevIndex,
            newValue: newIndex
        });
    }
    onTargetChanged({ prevIndex, newIndex, initialIndex }) {
        if (prevIndex || prevIndex === 0) {
            const oldColumn = this.getColumn(prevIndex);
            oldColumn.isTarget = false;
            oldColumn.targetMarkerContext = undefined;
        }
        if (newIndex || newIndex === 0) {
            const newColumn = this.getColumn(newIndex);
            newColumn.isTarget = true;
            if (initialIndex !== newIndex) {
                newColumn.targetMarkerContext = {
                    class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
                };
            }
        }
    }
    getColumn(index) {
        const leftColumnCount = this._columnsByPin[0].columns.length;
        if (index < leftColumnCount) {
            return this._columnsByPin[0].columns[index];
        }
        const centerColumnCount = this._columnsByPin[1].columns.length;
        if (index < leftColumnCount + centerColumnCount) {
            return this._columnsByPin[1].columns[index - leftColumnCount];
        }
        return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
    }
    onSort({ column, prevValue, newValue }) {
        // if we are dragging don't sort!
        if (column.dragging) {
            return;
        }
        const sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
            sorts,
            column,
            prevValue,
            newValue
        });
    }
    calcNewSorts(column, prevValue, newValue) {
        let idx = 0;
        if (!this.sorts) {
            this.sorts = [];
        }
        const sorts = this.sorts.map((s, i) => {
            s = { ...s };
            if (s.prop === column.prop) {
                idx = i;
            }
            return s;
        });
        if (newValue === undefined) {
            sorts.splice(idx, 1);
        }
        else if (prevValue) {
            sorts[idx].dir = newValue;
        }
        else {
            if (this.sortType === SortType.single) {
                sorts.splice(0, this.sorts.length);
            }
            sorts.push({ dir: newValue, prop: column.prop });
        }
        return sorts;
    }
    setStylesByGroup() {
        this._styleByGroup.left = this.calcStylesByGroup('left');
        this._styleByGroup.center = this.calcStylesByGroup('center');
        this._styleByGroup.right = this.calcStylesByGroup('right');
        if (!this.destroyed) {
            this.cd.detectChanges();
        }
    }
    calcStylesByGroup(group) {
        const widths = this._columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'center') {
            translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            const totalDiff = widths.total - this.innerWidth;
            const offset = totalDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DataTableHeaderComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.6", type: DataTableHeaderComponent, selector: "datatable-header", inputs: { sortAscendingIcon: "sortAscendingIcon", sortDescendingIcon: "sortDescendingIcon", sortUnsetIcon: "sortUnsetIcon", scrollbarH: "scrollbarH", dealsWithGroup: "dealsWithGroup", targetMarkerTemplate: "targetMarkerTemplate", innerWidth: "innerWidth", sorts: "sorts", sortType: "sortType", allRowsSelected: "allRowsSelected", selectionType: "selectionType", reorderable: "reorderable", headerHeight: "headerHeight", columns: "columns", offsetX: "offsetX" }, outputs: { sort: "sort", reorder: "reorder", resize: "resize", resizing: "resizing", select: "select", columnContextmenu: "columnContextmenu" }, host: { properties: { "style.height": "this.headerHeight", "style.width": "this.headerWidth" }, classAttribute: "datatable-header" }, ngImport: i0, template: `
    <div
      role="row"
      orderable
      (reorder)="onColumnReordered($event)"
      (targetChanged)="onTargetChanged($event)"
      [style.width.px]="_columnGroupWidths.total"
      class="datatable-header-inner"
    >
      <div
        *ngFor="let colGroup of _columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="_styleByGroup[colGroup.type]"
      >
        <datatable-header-cell
          role="columnheader"
          *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn"
          resizeable
          [resizeEnabled]="column.resizeable"
          (resize)="onColumnResized($event, column)"
          (resizing)="onColumnResizing($event, column)"
          long-press
          [pressModel]="column"
          [pressEnabled]="reorderable && column.draggable"
          (longPressStart)="onLongPressStart($event)"
          (longPressEnd)="onLongPressEnd($event)"
          draggable
          [dragX]="reorderable && column.draggable && column.dragging"
          [dragY]="false"
          [dragModel]="column"
          [dragEventTarget]="dragEventTarget"
          [headerHeight]="headerHeight"
          [isTarget]="column.isTarget"
          [targetMarkerTemplate]="targetMarkerTemplate"
          [targetMarkerContext]="column.targetMarkerContext"
          [column]="column"
          [sortType]="sortType"
          [sorts]="sorts"
          [selectionType]="selectionType"
          [sortAscendingIcon]="sortAscendingIcon"
          [sortDescendingIcon]="sortDescendingIcon"
          [sortUnsetIcon]="sortUnsetIcon"
          [allRowsSelected]="allRowsSelected"
          (sort)="onSort($event)"
          (select)="select.emit($event)"
          (columnContextmenu)="columnContextmenu.emit($event)"
        >
        </datatable-header-cell>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.DraggableDirective, selector: "[draggable]", inputs: ["dragEventTarget", "dragModel", "dragX", "dragY"], outputs: ["dragStart", "dragging", "dragEnd"] }, { kind: "directive", type: i3.ResizeableDirective, selector: "[resizeable]", inputs: ["resizeEnabled", "minWidth", "maxWidth"], outputs: ["resize", "resizing"] }, { kind: "directive", type: i4.OrderableDirective, selector: "[orderable]", outputs: ["reorder", "targetChanged"] }, { kind: "directive", type: i5.LongPressDirective, selector: "[long-press]", inputs: ["pressEnabled", "pressModel", "duration"], outputs: ["longPressStart", "longPressing", "longPressEnd"] }, { kind: "component", type: i6.DataTableHeaderCellComponent, selector: "datatable-header-cell", inputs: ["sortType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "allRowsSelected", "selectionType", "column", "headerHeight", "sorts"], outputs: ["sort", "select", "columnContextmenu"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DataTableHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'datatable-header',
                    template: `
    <div
      role="row"
      orderable
      (reorder)="onColumnReordered($event)"
      (targetChanged)="onTargetChanged($event)"
      [style.width.px]="_columnGroupWidths.total"
      class="datatable-header-inner"
    >
      <div
        *ngFor="let colGroup of _columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="_styleByGroup[colGroup.type]"
      >
        <datatable-header-cell
          role="columnheader"
          *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn"
          resizeable
          [resizeEnabled]="column.resizeable"
          (resize)="onColumnResized($event, column)"
          (resizing)="onColumnResizing($event, column)"
          long-press
          [pressModel]="column"
          [pressEnabled]="reorderable && column.draggable"
          (longPressStart)="onLongPressStart($event)"
          (longPressEnd)="onLongPressEnd($event)"
          draggable
          [dragX]="reorderable && column.draggable && column.dragging"
          [dragY]="false"
          [dragModel]="column"
          [dragEventTarget]="dragEventTarget"
          [headerHeight]="headerHeight"
          [isTarget]="column.isTarget"
          [targetMarkerTemplate]="targetMarkerTemplate"
          [targetMarkerContext]="column.targetMarkerContext"
          [column]="column"
          [sortType]="sortType"
          [sorts]="sorts"
          [selectionType]="selectionType"
          [sortAscendingIcon]="sortAscendingIcon"
          [sortDescendingIcon]="sortDescendingIcon"
          [sortUnsetIcon]="sortUnsetIcon"
          [allRowsSelected]="allRowsSelected"
          (sort)="onSort($event)"
          (select)="select.emit($event)"
          (columnContextmenu)="columnContextmenu.emit($event)"
        >
        </datatable-header-cell>
      </div>
    </div>
  `,
                    host: {
                        class: 'datatable-header'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { sortAscendingIcon: [{
                type: Input
            }], sortDescendingIcon: [{
                type: Input
            }], sortUnsetIcon: [{
                type: Input
            }], scrollbarH: [{
                type: Input
            }], dealsWithGroup: [{
                type: Input
            }], targetMarkerTemplate: [{
                type: Input
            }], innerWidth: [{
                type: Input
            }], sorts: [{
                type: Input
            }], sortType: [{
                type: Input
            }], allRowsSelected: [{
                type: Input
            }], selectionType: [{
                type: Input
            }], reorderable: [{
                type: Input
            }], headerHeight: [{
                type: HostBinding,
                args: ['style.height']
            }, {
                type: Input
            }], columns: [{
                type: Input
            }], offsetX: [{
                type: Input
            }], sort: [{
                type: Output
            }], reorder: [{
                type: Output
            }], resize: [{
                type: Output
            }], resizing: [{
                type: Output
            }], select: [{
                type: Output
            }], columnContextmenu: [{
                type: Output
            }], headerWidth: [{
                type: HostBinding,
                args: ['style.width']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUVMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUdqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7O0FBNERwRCxNQUFNLE9BQU8sd0JBQXdCO0lBVW5DLElBQWEsVUFBVSxDQUFDLEdBQVc7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdkIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFVRCxJQUVJLFlBQVksQ0FBQyxHQUFRO1FBQ3ZCLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtZQUNsQixJQUFJ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QUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBTUYsWUFBWTtzQkFGZixXQUFXO3VCQUFDLGNBQWM7O3NCQUMxQixLQUFLO2dCQWFPLE9BQU87c0JBQW5CLEtBQUs7Z0JBZ0JGLE9BQU87c0JBRFYsS0FBSztnQkFTSSxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csT0FBTztzQkFBaEIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csaUJBQWlCO3NCQUExQixNQUFNO2dCQTZDSCxXQUFXO3NCQURkLFdBQVc7dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2x1bW5Hcm91cFdpZHRocywgY29sdW1uc0J5UGluLCBjb2x1bW5zQnlQaW5BcnIgfSBmcm9tICcuLi8uLi91dGlscy9jb2x1bW4nO1xuaW1wb3J0IHsgU29ydFR5cGUgfSBmcm9tICcuLi8uLi90eXBlcy9zb3J0LnR5cGUnO1xuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3NlbGVjdGlvbi50eXBlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4uL2NvbHVtbnMvY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyB0cmFuc2xhdGVYWSB9IGZyb20gJy4uLy4uL3V0aWxzL3RyYW5zbGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGF0YWJsZS1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIHJvbGU9XCJyb3dcIlxuICAgICAgb3JkZXJhYmxlXG4gICAgICAocmVvcmRlcik9XCJvbkNvbHVtblJlb3JkZXJlZCgkZXZlbnQpXCJcbiAgICAgICh0YXJnZXRDaGFuZ2VkKT1cIm9uVGFyZ2V0Q2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgIFtzdHlsZS53aWR0aC5weF09XCJfY29sdW1uR3JvdXBXaWR0aHMudG90YWxcIlxuICAgICAgY2xhc3M9XCJkYXRhdGFibGUtaGVhZGVyLWlubmVyXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0Zvcj1cImxldCBjb2xHcm91cCBvZiBfY29sdW1uc0J5UGluOyB0cmFja0J5OiB0cmFja0J5R3JvdXBzXCJcbiAgICAgICAgW2NsYXNzXT1cIidkYXRhdGFibGUtcm93LScgKyBjb2xHcm91cC50eXBlXCJcbiAgICAgICAgW25nU3R5bGVdPVwiX3N0eWxlQnlHcm91cFtjb2xHcm91cC50eXBlXVwiXG4gICAgICA+XG4gICAgICAgIDxkYXRhdGFibGUtaGVhZGVyLWNlbGxcbiAgICAgICAgICByb2xlPVwiY29sdW1uaGVhZGVyXCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbEdyb3VwLmNvbHVtbnM7IHRyYWNrQnk6IGNvbHVtblRyYWNraW5nRm5cIlxuICAgICAgICAgIHJlc2l6ZWFibGVcbiAgICAgICAgICBbcmVzaXplRW5hYmxlZF09XCJjb2x1bW4ucmVzaXplYWJsZVwiXG4gICAgICAgICAgKHJlc2l6ZSk9XCJvbkNvbHVtblJlc2l6ZWQoJGV2ZW50LCBjb2x1bW4pXCJcbiAgICAgICAgICAocmVzaXppbmcpPVwib25Db2x1bW5SZXNpemluZygkZXZlbnQsIGNvbHVtbilcIlxuICAgICAgICAgIGxvbmctcHJlc3NcbiAgICAgICAgICBbcHJlc3NNb2RlbF09XCJjb2x1bW5cIlxuICAgICAgICAgIFtwcmVzc0VuYWJsZWRdPVwicmVvcmRlcmFibGUgJiYgY29sdW1uLmRyYWdnYWJsZVwiXG4gICAgICAgICAgKGxvbmdQcmVzc1N0YXJ0KT1cIm9uTG9uZ1ByZXNzU3RhcnQoJGV2ZW50KVwiXG4gICAgICAgICAgKGxvbmdQcmVzc0VuZCk9XCJvbkxvbmdQcmVzc0VuZCgkZXZlbnQpXCJcbiAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICBbZHJhZ1hdPVwicmVvcmRlcmFibGUgJiYgY29sdW1uLmRyYWdnYWJsZSAmJiBjb2x1bW4uZHJhZ2dpbmdcIlxuICAgICAgICAgIFtkcmFnWV09XCJmYWxzZVwiXG4gICAgICAgICAgW2RyYWdNb2RlbF09XCJjb2x1bW5cIlxuICAgICAgICAgIFtkcmFnRXZlbnRUYXJnZXRdPVwiZHJhZ0V2ZW50VGFyZ2V0XCJcbiAgICAgICAgICBbaGVhZGVySGVpZ2h0XT1cImhlYWRlckhlaWdodFwiXG4gICAgICAgICAgW2lzVGFyZ2V0XT1cImNvbHVtbi5pc1RhcmdldFwiXG4gICAgICAgICAgW3RhcmdldE1hcmtlclRlbXBsYXRlXT1cInRhcmdldE1hcmtlclRlbXBsYXRlXCJcbiAgICAgICAgICBbdGFyZ2V0TWFya2VyQ29udGV4dF09XCJjb2x1bW4udGFyZ2V0TWFya2VyQ29udGV4dFwiXG4gICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgIFtzb3J0VHlwZV09XCJzb3J0VHlwZVwiXG4gICAgICAgICAgW3NvcnRzXT1cInNvcnRzXCJcbiAgICAgICAgICBbc2VsZWN0aW9uVHlwZV09XCJzZWxlY3Rpb25UeXBlXCJcbiAgICAgICAgICBbc29ydEFzY2VuZGluZ0ljb25dPVwic29ydEFzY2VuZGluZ0ljb25cIlxuICAgICAgICAgIFtzb3J0RGVzY2VuZGluZ0ljb25dPVwic29ydERlc2NlbmRpbmdJY29uXCJcbiAgICAgICAgICBbc29ydFVuc2V0SWNvbl09XCJzb3J0VW5zZXRJY29uXCJcbiAgICAgICAgICBbYWxsUm93c1NlbGVjdGVkXT1cImFsbFJvd3NTZWxlY3RlZFwiXG4gICAgICAgICAgKHNvcnQpPVwib25Tb3J0KCRldmVudClcIlxuICAgICAgICAgIChzZWxlY3QpPVwic2VsZWN0LmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgKGNvbHVtbkNvbnRleHRtZW51KT1cImNvbHVtbkNvbnRleHRtZW51LmVtaXQoJGV2ZW50KVwiXG4gICAgICAgID5cbiAgICAgICAgPC9kYXRhdGFibGUtaGVhZGVyLWNlbGw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZGF0YXRhYmxlLWhlYWRlcidcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KCkgc29ydEFzY2VuZGluZ0ljb246IGFueTtcbiAgQElucHV0KCkgc29ydERlc2NlbmRpbmdJY29uOiBhbnk7XG4gIEBJbnB1dCgpIHNvcnRVbnNldEljb246IGFueTtcbiAgQElucHV0KCkgc2Nyb2xsYmFySDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGVhbHNXaXRoR3JvdXA6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRhcmdldE1hcmtlclRlbXBsYXRlOiBhbnk7XG5cbiAgdGFyZ2V0TWFya2VyQ29udGV4dDogYW55O1xuXG4gIEBJbnB1dCgpIHNldCBpbm5lcldpZHRoKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5faW5uZXJXaWR0aCA9IHZhbDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb2x1bW5zKSB7XG4gICAgICAgIGNvbnN0IGNvbEJ5UGluID0gY29sdW1uc0J5UGluKHRoaXMuX2NvbHVtbnMpO1xuICAgICAgICB0aGlzLl9jb2x1bW5Hcm91cFdpZHRocyA9IGNvbHVtbkdyb3VwV2lkdGhzKGNvbEJ5UGluLCB0aGlzLl9jb2x1bW5zKTtcbiAgICAgICAgdGhpcy5zZXRTdHlsZXNCeUdyb3VwKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXQgaW5uZXJXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pbm5lcldpZHRoO1xuICB9XG5cbiAgQElucHV0KCkgc29ydHM6IGFueVtdO1xuICBASW5wdXQoKSBzb3J0VHlwZTogU29ydFR5cGU7XG4gIEBJbnB1dCgpIGFsbFJvd3NTZWxlY3RlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uVHlwZTtcbiAgQElucHV0KCkgcmVvcmRlcmFibGU6IGJvb2xlYW47XG5cbiAgZHJhZ0V2ZW50VGFyZ2V0OiBhbnk7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKVxuICBASW5wdXQoKVxuICBzZXQgaGVhZGVySGVpZ2h0KHZhbDogYW55KSB7XG4gICAgaWYgKHZhbCAhPT0gJ2F1dG8nKSB7XG4gICAgICB0aGlzLl9oZWFkZXJIZWlnaHQgPSBgJHt2YWx9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oZWFkZXJIZWlnaHQgPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhlYWRlckhlaWdodCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJIZWlnaHQ7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgY29sdW1ucyh2YWw6IGFueVtdKSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IHZhbDtcblxuICAgIGNvbnN0IGNvbHNCeVBpbiA9IGNvbHVtbnNCeVBpbih2YWwpO1xuICAgIHRoaXMuX2NvbHVtbnNCeVBpbiA9IGNvbHVtbnNCeVBpbkFycih2YWwpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fY29sdW1uR3JvdXBXaWR0aHMgPSBjb2x1bW5Hcm91cFdpZHRocyhjb2xzQnlQaW4sIHZhbCk7XG4gICAgICB0aGlzLnNldFN0eWxlc0J5R3JvdXAoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBjb2x1bW5zKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBvZmZzZXRYKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2Zmc2V0WCA9IHZhbDtcbiAgICB0aGlzLnNldFN0eWxlc0J5R3JvdXAoKTtcbiAgfVxuICBnZXQgb2Zmc2V0WCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0WDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlb3JkZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVzaXplOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlc2l6aW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjb2x1bW5Db250ZXh0bWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogTW91c2VFdmVudDsgY29sdW1uOiBhbnkgfT4oZmFsc2UpO1xuXG4gIF9jb2x1bW5zQnlQaW46IGFueTtcbiAgX2NvbHVtbkdyb3VwV2lkdGhzOiBhbnkgPSB7XG4gICAgdG90YWw6IDEwMFxuICB9O1xuICBfaW5uZXJXaWR0aDogbnVtYmVyO1xuICBfb2Zmc2V0WDogbnVtYmVyO1xuICBfY29sdW1uczogYW55W107XG4gIF9oZWFkZXJIZWlnaHQ6IHN0cmluZztcbiAgX3N0eWxlQnlHcm91cDogeyBbcHJvcDogc3RyaW5nXTogdW5rbm93biB9ID0ge1xuICAgIGxlZnQ6IHt9LFxuICAgIGNlbnRlcjoge30sXG4gICAgcmlnaHQ6IHt9XG4gIH07XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICBvbkxvbmdQcmVzc1N0YXJ0KHsgZXZlbnQsIG1vZGVsIH06IHsgZXZlbnQ6IGFueTsgbW9kZWw6IGFueSB9KSB7XG4gICAgbW9kZWwuZHJhZ2dpbmcgPSB0cnVlO1xuICAgIHRoaXMuZHJhZ0V2ZW50VGFyZ2V0ID0gZXZlbnQ7XG4gIH1cblxuICBvbkxvbmdQcmVzc0VuZCh7IGV2ZW50LCBtb2RlbCB9OiB7IGV2ZW50OiBhbnk7IG1vZGVsOiBhbnkgfSkge1xuICAgIHRoaXMuZHJhZ0V2ZW50VGFyZ2V0ID0gZXZlbnQ7XG5cbiAgICAvLyBkZWxheSByZXNldHRpbmcgc28gc29ydCBjYW4gYmVcbiAgICAvLyBwcmV2ZW50ZWQgaWYgd2Ugd2VyZSBkcmFnZ2luZ1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gZGF0YXRhYmxlIGNvbXBvbmVudCBjcmVhdGVzIGNvcGllcyBmcm9tIGNvbHVtbnMgb24gcmVvcmRlclxuICAgICAgLy8gc2V0IGRyYWdnaW5nIHRvIGZhbHNlIG9uIG5ldyBvYmplY3RzXG4gICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLl9jb2x1bW5zLmZpbmQoYyA9PiBjLiQkaWQgPT09IG1vZGVsLiQkaWQpO1xuICAgICAgaWYgKGNvbHVtbikge1xuICAgICAgICBjb2x1bW4uZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCA1KTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxuICBnZXQgaGVhZGVyV2lkdGgoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zY3JvbGxiYXJIKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbm5lcldpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICByZXR1cm4gJzEwMCUnO1xuICB9XG5cbiAgdHJhY2tCeUdyb3VwcyhpbmRleDogbnVtYmVyLCBjb2xHcm91cDogYW55KTogYW55IHtcbiAgICByZXR1cm4gY29sR3JvdXAudHlwZTtcbiAgfVxuXG4gIGNvbHVtblRyYWNraW5nRm4oaW5kZXg6IG51bWJlciwgY29sdW1uOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBjb2x1bW4uJCRpZDtcbiAgfVxuXG4gIG9uQ29sdW1uUmVzaXplZCh3aWR0aDogbnVtYmVyLCBjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSk6IHZvaWQge1xuICAgIHRoaXMucmVzaXplLmVtaXQodGhpcy5tYWtlUmVzaXplRXZlbnQod2lkdGgsIGNvbHVtbikpO1xuICB9XG5cbiAgb25Db2x1bW5SZXNpemluZyh3aWR0aDogbnVtYmVyLCBjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSk6IHZvaWQge1xuICAgIHRoaXMucmVzaXppbmcuZW1pdCh0aGlzLm1ha2VSZXNpemVFdmVudCh3aWR0aCwgY29sdW1uKSk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VSZXNpemVFdmVudCh3aWR0aDogbnVtYmVyLCBjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSkge1xuICAgIGlmICh3aWR0aCA8PSBjb2x1bW4ubWluV2lkdGgpIHtcbiAgICAgIHdpZHRoID0gY29sdW1uLm1pbldpZHRoO1xuICAgIH0gZWxzZSBpZiAod2lkdGggPj0gY29sdW1uLm1heFdpZHRoKSB7XG4gICAgICB3aWR0aCA9IGNvbHVtbi5tYXhXaWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbHVtbixcbiAgICAgIHByZXZWYWx1ZTogY29sdW1uLndpZHRoLFxuICAgICAgbmV3VmFsdWU6IHdpZHRoXG4gICAgfTtcbiAgfVxuXG4gIG9uQ29sdW1uUmVvcmRlcmVkKHsgcHJldkluZGV4LCBuZXdJbmRleCwgbW9kZWwgfTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgY29sdW1uID0gdGhpcy5nZXRDb2x1bW4obmV3SW5kZXgpO1xuICAgIGNvbHVtbi5pc1RhcmdldCA9IGZhbHNlO1xuICAgIGNvbHVtbi50YXJnZXRNYXJrZXJDb250ZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVvcmRlci5lbWl0KHtcbiAgICAgIGNvbHVtbjogbW9kZWwsXG4gICAgICBwcmV2VmFsdWU6IHByZXZJbmRleCxcbiAgICAgIG5ld1ZhbHVlOiBuZXdJbmRleFxuICAgIH0pO1xuICB9XG5cbiAgb25UYXJnZXRDaGFuZ2VkKHsgcHJldkluZGV4LCBuZXdJbmRleCwgaW5pdGlhbEluZGV4IH06IGFueSk6IHZvaWQge1xuICAgIGlmIChwcmV2SW5kZXggfHwgcHJldkluZGV4ID09PSAwKSB7XG4gICAgICBjb25zdCBvbGRDb2x1bW4gPSB0aGlzLmdldENvbHVtbihwcmV2SW5kZXgpO1xuICAgICAgb2xkQ29sdW1uLmlzVGFyZ2V0ID0gZmFsc2U7XG4gICAgICBvbGRDb2x1bW4udGFyZ2V0TWFya2VyQ29udGV4dCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKG5ld0luZGV4IHx8IG5ld0luZGV4ID09PSAwKSB7XG4gICAgICBjb25zdCBuZXdDb2x1bW4gPSB0aGlzLmdldENvbHVtbihuZXdJbmRleCk7XG4gICAgICBuZXdDb2x1bW4uaXNUYXJnZXQgPSB0cnVlO1xuXG4gICAgICBpZiAoaW5pdGlhbEluZGV4ICE9PSBuZXdJbmRleCkge1xuICAgICAgICBuZXdDb2x1bW4udGFyZ2V0TWFya2VyQ29udGV4dCA9IHtcbiAgICAgICAgICBjbGFzczogJ3RhcmdldE1hcmtlciAnLmNvbmNhdChpbml0aWFsSW5kZXggPiBuZXdJbmRleCA/ICdkcmFnRnJvbVJpZ2h0JyA6ICdkcmFnRnJvbUxlZnQnKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENvbHVtbihpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICBjb25zdCBsZWZ0Q29sdW1uQ291bnQgPSB0aGlzLl9jb2x1bW5zQnlQaW5bMF0uY29sdW1ucy5sZW5ndGg7XG4gICAgaWYgKGluZGV4IDwgbGVmdENvbHVtbkNvdW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29sdW1uc0J5UGluWzBdLmNvbHVtbnNbaW5kZXhdO1xuICAgIH1cblxuICAgIGNvbnN0IGNlbnRlckNvbHVtbkNvdW50ID0gdGhpcy5fY29sdW1uc0J5UGluWzFdLmNvbHVtbnMubGVuZ3RoO1xuICAgIGlmIChpbmRleCA8IGxlZnRDb2x1bW5Db3VudCArIGNlbnRlckNvbHVtbkNvdW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29sdW1uc0J5UGluWzFdLmNvbHVtbnNbaW5kZXggLSBsZWZ0Q29sdW1uQ291bnRdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zQnlQaW5bMl0uY29sdW1uc1tpbmRleCAtIGxlZnRDb2x1bW5Db3VudCAtIGNlbnRlckNvbHVtbkNvdW50XTtcbiAgfVxuXG4gIG9uU29ydCh7IGNvbHVtbiwgcHJldlZhbHVlLCBuZXdWYWx1ZSB9OiBhbnkpOiB2b2lkIHtcbiAgICAvLyBpZiB3ZSBhcmUgZHJhZ2dpbmcgZG9uJ3Qgc29ydCFcbiAgICBpZiAoY29sdW1uLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc29ydHMgPSB0aGlzLmNhbGNOZXdTb3J0cyhjb2x1bW4sIHByZXZWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIHRoaXMuc29ydC5lbWl0KHtcbiAgICAgIHNvcnRzLFxuICAgICAgY29sdW1uLFxuICAgICAgcHJldlZhbHVlLFxuICAgICAgbmV3VmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGNOZXdTb3J0cyhjb2x1bW46IGFueSwgcHJldlZhbHVlOiBudW1iZXIsIG5ld1ZhbHVlOiBudW1iZXIpOiBhbnlbXSB7XG4gICAgbGV0IGlkeCA9IDA7XG5cbiAgICBpZiAoIXRoaXMuc29ydHMpIHtcbiAgICAgIHRoaXMuc29ydHMgPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBzb3J0cyA9IHRoaXMuc29ydHMubWFwKChzLCBpKSA9PiB7XG4gICAgICBzID0geyAuLi5zIH07XG4gICAgICBpZiAocy5wcm9wID09PSBjb2x1bW4ucHJvcCkge1xuICAgICAgICBpZHggPSBpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHM7XG4gICAgfSk7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc29ydHMuc3BsaWNlKGlkeCwgMSk7XG4gICAgfSBlbHNlIGlmIChwcmV2VmFsdWUpIHtcbiAgICAgIHNvcnRzW2lkeF0uZGlyID0gbmV3VmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNvcnRUeXBlID09PSBTb3J0VHlwZS5zaW5nbGUpIHtcbiAgICAgICAgc29ydHMuc3BsaWNlKDAsIHRoaXMuc29ydHMubGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgc29ydHMucHVzaCh7IGRpcjogbmV3VmFsdWUsIHByb3A6IGNvbHVtbi5wcm9wIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzb3J0cztcbiAgfVxuXG4gIHNldFN0eWxlc0J5R3JvdXAoKSB7XG4gICAgdGhpcy5fc3R5bGVCeUdyb3VwLmxlZnQgPSB0aGlzLmNhbGNTdHlsZXNCeUdyb3VwKCdsZWZ0Jyk7XG4gICAgdGhpcy5fc3R5bGVCeUdyb3VwLmNlbnRlciA9IHRoaXMuY2FsY1N0eWxlc0J5R3JvdXAoJ2NlbnRlcicpO1xuICAgIHRoaXMuX3N0eWxlQnlHcm91cC5yaWdodCA9IHRoaXMuY2FsY1N0eWxlc0J5R3JvdXAoJ3JpZ2h0Jyk7XG4gICAgaWYgKCF0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgY2FsY1N0eWxlc0J5R3JvdXAoZ3JvdXA6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3Qgd2lkdGhzID0gdGhpcy5fY29sdW1uR3JvdXBXaWR0aHM7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IHRoaXMub2Zmc2V0WDtcblxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIHdpZHRoOiBgJHt3aWR0aHNbZ3JvdXBdfXB4YFxuICAgIH07XG5cbiAgICBpZiAoZ3JvdXAgPT09ICdjZW50ZXInKSB7XG4gICAgICB0cmFuc2xhdGVYWShzdHlsZXMsIG9mZnNldFggKiAtMSwgMCk7XG4gICAgfSBlbHNlIGlmIChncm91cCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgY29uc3QgdG90YWxEaWZmID0gd2lkdGhzLnRvdGFsIC0gdGhpcy5pbm5lcldpZHRoO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gdG90YWxEaWZmICogLTE7XG4gICAgICB0cmFuc2xhdGVYWShzdHlsZXMsIG9mZnNldCwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxufVxuIl19