import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { SortDirection } from '../../types/sort-direction.type';
import { Keys } from '../../utils/keys';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./ghost-loader/ghost-loader.component";
export class DataTableBodyCellComponent {
    set disable$(val) {
        this._disable$ = val;
        this.cellContext.disable$ = val;
    }
    ;
    get disable$() {
        return this._disable$;
    }
    set group(group) {
        this._group = group;
        this.cellContext.group = group;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get group() {
        return this._group;
    }
    set rowHeight(val) {
        this._rowHeight = val;
        this.cellContext.rowHeight = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get rowHeight() {
        return this._rowHeight;
    }
    set isSelected(val) {
        this._isSelected = val;
        this.cellContext.isSelected = val;
        this.cd.markForCheck();
    }
    get isSelected() {
        return this._isSelected;
    }
    set expanded(val) {
        this._expanded = val;
        this.cellContext.expanded = val;
        this.cd.markForCheck();
    }
    get expanded() {
        return this._expanded;
    }
    set rowIndex(val) {
        this._rowIndex = val;
        this.cellContext.rowIndex = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get rowIndex() {
        return this._rowIndex;
    }
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get column() {
        return this._column;
    }
    set row(row) {
        this._row = row;
        this.cellContext.row = row;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get row() {
        return this._row;
    }
    set sorts(val) {
        this._sorts = val;
        this.calcSortDir = this.calcSortDir(val);
    }
    get sorts() {
        return this._sorts;
    }
    set treeStatus(status) {
        if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
            this._treeStatus = 'collapsed';
        }
        else {
            this._treeStatus = status;
        }
        this.cellContext.treeStatus = this._treeStatus;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get treeStatus() {
        return this._treeStatus;
    }
    get columnCssClasses() {
        let cls = 'datatable-body-cell';
        if (this.column.cellClass) {
            if (typeof this.column.cellClass === 'string') {
                cls += ' ' + this.column.cellClass;
            }
            else if (typeof this.column.cellClass === 'function') {
                const res = this.column.cellClass({
                    row: this.row,
                    group: this.group,
                    column: this.column,
                    value: this.value,
                    rowHeight: this.rowHeight
                });
                if (typeof res === 'string') {
                    cls += ' ' + res;
                }
                else if (typeof res === 'object') {
                    const keys = Object.keys(res);
                    for (const k of keys) {
                        if (res[k] === true) {
                            cls += ` ${k}`;
                        }
                    }
                }
            }
        }
        if (!this.sortDir) {
            cls += ' sort-active';
        }
        if (this.isFocused && !this.disable$?.value) {
            cls += ' active';
        }
        if (this.sortDir === SortDirection.asc) {
            cls += ' sort-asc';
        }
        if (this.sortDir === SortDirection.desc) {
            cls += ' sort-desc';
        }
        if (this.disable$?.value) {
            cls += ' row-disabled';
        }
        return cls;
    }
    get width() {
        return this.column.width;
    }
    get minWidth() {
        return this.column.minWidth;
    }
    get maxWidth() {
        return this.column.maxWidth;
    }
    get height() {
        const height = this.rowHeight;
        if (isNaN(height)) {
            return height;
        }
        return height + 'px';
    }
    constructor(element, cd) {
        this.cd = cd;
        this.ghostLoadingIndicator = false;
        this.activate = new EventEmitter();
        this.treeAction = new EventEmitter();
        this.isFocused = false;
        this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
        this.activateFn = this.activate.emit.bind(this.activate);
        this.cellContext = {
            onCheckboxChangeFn: this.onCheckboxChangeFn,
            activateFn: this.activateFn,
            row: this.row,
            group: this.group,
            value: this.value,
            column: this.column,
            rowHeight: this.rowHeight,
            isSelected: this.isSelected,
            rowIndex: this.rowIndex,
            treeStatus: this.treeStatus,
            disable$: this.disable$,
            onTreeAction: this.onTreeAction.bind(this)
        };
        this._element = element.nativeElement;
    }
    ngDoCheck() {
        this.checkValueUpdates();
    }
    ngOnDestroy() {
        if (this.cellTemplate) {
            this.cellTemplate.clear();
        }
        if (this.ghostLoaderTemplate) {
            this.ghostLoaderTemplate.clear();
        }
    }
    checkValueUpdates() {
        let value = '';
        if (!this.row || !this.column) {
            value = '';
        }
        else {
            const val = this.column.$$valueGetter(this.row, this.column.prop);
            const userPipe = this.column.pipe;
            if (userPipe) {
                value = userPipe.transform(val);
            }
            else if (value !== undefined) {
                value = val;
            }
        }
        if (this.value !== value) {
            this.value = value;
            this.cellContext.value = value;
            this.cellContext.disable$ = this.disable$;
            this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
            this.cd.markForCheck();
        }
    }
    onFocus() {
        this.isFocused = true;
    }
    onBlur() {
        this.isFocused = false;
    }
    onClick(event) {
        this.activate.emit({
            type: 'click',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    onDblClick(event) {
        this.activate.emit({
            type: 'dblclick',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        const isTargetCell = event.target === this._element;
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetCell) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element
            });
        }
    }
    onCheckboxChange(event) {
        this.activate.emit({
            type: 'checkbox',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element,
            treeStatus: 'collapsed'
        });
    }
    calcSortDir(sorts) {
        if (!sorts) {
            return;
        }
        const sort = sorts.find((s) => s.prop === this.column.prop);
        if (sort) {
            return sort.dir;
        }
    }
    stripHtml(html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
    onTreeAction() {
        this.treeAction.emit(this.row);
    }
    calcLeftMargin(column, row) {
        const levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
        return column.isTreeColumn ? row.level * levelIndent : 0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DataTableBodyCellComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.6", type: DataTableBodyCellComponent, selector: "datatable-body-cell", inputs: { displayCheck: "displayCheck", disable$: "disable$", group: "group", rowHeight: "rowHeight", isSelected: "isSelected", expanded: "expanded", rowIndex: "rowIndex", column: "column", row: "row", sorts: "sorts", treeStatus: "treeStatus", ghostLoadingIndicator: "ghostLoadingIndicator" }, outputs: { activate: "activate", treeAction: "treeAction" }, host: { listeners: { "focus": "onFocus()", "blur": "onBlur()", "click": "onClick($event)", "dblclick": "onDblClick($event)", "keydown": "onKeyDown($event)" }, properties: { "class": "this.columnCssClasses", "style.width.px": "this.width", "style.minWidth.px": "this.minWidth", "style.maxWidth.px": "this.maxWidth", "style.height": "this.height" } }, viewQueries: [{ propertyName: "cellTemplate", first: true, predicate: ["cellTemplate"], descendants: true, read: ViewContainerRef, static: true }, { propertyName: "ghostLoaderTemplate", first: true, predicate: ["ghostLoaderTemplate"], descendants: true, read: ViewContainerRef, static: true }], ngImport: i0, template: `
  <ng-container *ngIf="row else ghostLoaderTemplate;">
    <div class="datatable-body-cell-label" [style.margin-left.px]="calcLeftMargin(column, row)">
      <label
        *ngIf="column.checkboxable && (!displayCheck || displayCheck(row, column, value))"
        class="datatable-checkbox"
      >
        <input type="checkbox" [disabled]="disable$ | async" [checked]="isSelected" (click)="onCheckboxChange($event)" />
      </label>
      <ng-container *ngIf="column.isTreeColumn">
        <button
          *ngIf="!column.treeToggleTemplate"
          class="datatable-tree-button"
          [disabled]="treeStatus === 'disabled'"
          (click)="onTreeAction()"
          [attr.aria-label]="treeStatus"
        >
          <span>
            <i *ngIf="treeStatus === 'loading'" class="icon datatable-icon-collapse"></i>
            <i *ngIf="treeStatus === 'collapsed'" class="icon datatable-icon-up"></i>
            <i *ngIf="treeStatus === 'expanded' || treeStatus === 'disabled'" class="icon datatable-icon-down"></i>
          </span>
        </button>
        <ng-template
          *ngIf="column.treeToggleTemplate"
          [ngTemplateOutlet]="column.treeToggleTemplate"
          [ngTemplateOutletContext]="{ cellContext: cellContext }"
        >
        </ng-template>
      </ng-container>

      <span *ngIf="!column.cellTemplate" [title]="sanitizedValue" [innerHTML]="value"> </span>
      <ng-template
        #cellTemplate
        *ngIf="column.cellTemplate"
        [ngTemplateOutlet]="column.cellTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
    </div>
  </ng-container>
  <ng-template #ghostLoaderTemplate>
    <ghost-loader *ngIf="ghostLoadingIndicator" [columns]="[column]" [pageSize]="1"></ghost-loader>
  </ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.DataTableGhostLoaderComponent, selector: "ghost-loader", inputs: ["columns", "pageSize", "rowHeight", "ghostBodyHeight"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DataTableBodyCellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'datatable-body-cell',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
  <ng-container *ngIf="row else ghostLoaderTemplate;">
    <div class="datatable-body-cell-label" [style.margin-left.px]="calcLeftMargin(column, row)">
      <label
        *ngIf="column.checkboxable && (!displayCheck || displayCheck(row, column, value))"
        class="datatable-checkbox"
      >
        <input type="checkbox" [disabled]="disable$ | async" [checked]="isSelected" (click)="onCheckboxChange($event)" />
      </label>
      <ng-container *ngIf="column.isTreeColumn">
        <button
          *ngIf="!column.treeToggleTemplate"
          class="datatable-tree-button"
          [disabled]="treeStatus === 'disabled'"
          (click)="onTreeAction()"
          [attr.aria-label]="treeStatus"
        >
          <span>
            <i *ngIf="treeStatus === 'loading'" class="icon datatable-icon-collapse"></i>
            <i *ngIf="treeStatus === 'collapsed'" class="icon datatable-icon-up"></i>
            <i *ngIf="treeStatus === 'expanded' || treeStatus === 'disabled'" class="icon datatable-icon-down"></i>
          </span>
        </button>
        <ng-template
          *ngIf="column.treeToggleTemplate"
          [ngTemplateOutlet]="column.treeToggleTemplate"
          [ngTemplateOutletContext]="{ cellContext: cellContext }"
        >
        </ng-template>
      </ng-container>

      <span *ngIf="!column.cellTemplate" [title]="sanitizedValue" [innerHTML]="value"> </span>
      <ng-template
        #cellTemplate
        *ngIf="column.cellTemplate"
        [ngTemplateOutlet]="column.cellTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
    </div>
  </ng-container>
  <ng-template #ghostLoaderTemplate>
    <ghost-loader *ngIf="ghostLoadingIndicator" [columns]="[column]" [pageSize]="1"></ghost-loader>
  </ng-template>
  `
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }], propDecorators: { displayCheck: [{
                type: Input
            }], disable$: [{
                type: Input
            }], group: [{
                type: Input
            }], rowHeight: [{
                type: Input
            }], isSelected: [{
                type: Input
            }], expanded: [{
                type: Input
            }], rowIndex: [{
                type: Input
            }], column: [{
                type: Input
            }], row: [{
                type: Input
            }], sorts: [{
                type: Input
            }], treeStatus: [{
                type: Input
            }], ghostLoadingIndicator: [{
                type: Input
            }], activate: [{
                type: Output
            }], treeAction: [{
                type: Output
            }], cellTemplate: [{
                type: ViewChild,
                args: ['cellTemplate', { read: ViewContainerRef, static: true }]
            }], ghostLoaderTemplate: [{
                type: ViewChild,
                args: ['ghostLoaderTemplate', { read: ViewContainerRef, static: true }]
            }], columnCssClasses: [{
                type: HostBinding,
                args: ['class']
            }], width: [{
                type: HostBinding,
                args: ['style.width.px']
            }], minWidth: [{
                type: HostBinding,
                args: ['style.minWidth.px']
            }], maxWidth: [{
                type: HostBinding,
                args: ['style.maxWidth.px']
            }], height: [{
                type: HostBinding,
                args: ['style.height']
            }], onFocus: [{
                type: HostListener,
                args: ['focus']
            }], onBlur: [{
                type: HostListener,
                args: ['blur']
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], onDblClick: [{
                type: HostListener,
                args: ['dblclick', ['$event']]
            }], onKeyDown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2JvZHkvYm9keS1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFHVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQXFEeEMsTUFBTSxPQUFPLDBCQUEwQjtJQUlyQyxJQUFhLFFBQVEsQ0FBQyxHQUFRO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUNsQyxDQUFDO0lBQUEsQ0FBQztJQUNGLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBYSxLQUFLLENBQUMsS0FBVTtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFhLFNBQVMsQ0FBQyxHQUFXO1FBQ2hDLElBQUksQ0FBQyxV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QVM7c0JBRFIsWUFBWTt1QkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRG9DaGVjayxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFBpcGVUcmFuc2Zvcm0sXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFibGVDb2x1bW4gfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZS1jb2x1bW4udHlwZSc7XG5pbXBvcnQgeyBTb3J0RGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMvc29ydC1kaXJlY3Rpb24udHlwZSc7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5cyc7XG5cbmV4cG9ydCB0eXBlIFRyZWVTdGF0dXMgPSAnY29sbGFwc2VkJyB8ICdleHBhbmRlZCcgfCAnbG9hZGluZycgfCAnZGlzYWJsZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhdGFibGUtYm9keS1jZWxsJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJyb3cgZWxzZSBnaG9zdExvYWRlclRlbXBsYXRlO1wiPlxuICAgIDxkaXYgY2xhc3M9XCJkYXRhdGFibGUtYm9keS1jZWxsLWxhYmVsXCIgW3N0eWxlLm1hcmdpbi1sZWZ0LnB4XT1cImNhbGNMZWZ0TWFyZ2luKGNvbHVtbiwgcm93KVwiPlxuICAgICAgPGxhYmVsXG4gICAgICAgICpuZ0lmPVwiY29sdW1uLmNoZWNrYm94YWJsZSAmJiAoIWRpc3BsYXlDaGVjayB8fCBkaXNwbGF5Q2hlY2socm93LCBjb2x1bW4sIHZhbHVlKSlcIlxuICAgICAgICBjbGFzcz1cImRhdGF0YWJsZS1jaGVja2JveFwiXG4gICAgICA+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZSQgfCBhc3luY1wiIFtjaGVja2VkXT1cImlzU2VsZWN0ZWRcIiAoY2xpY2spPVwib25DaGVja2JveENoYW5nZSgkZXZlbnQpXCIgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmlzVHJlZUNvbHVtblwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgKm5nSWY9XCIhY29sdW1uLnRyZWVUb2dnbGVUZW1wbGF0ZVwiXG4gICAgICAgICAgY2xhc3M9XCJkYXRhdGFibGUtdHJlZS1idXR0b25cIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJ0cmVlU3RhdHVzID09PSAnZGlzYWJsZWQnXCJcbiAgICAgICAgICAoY2xpY2spPVwib25UcmVlQWN0aW9uKClcIlxuICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwidHJlZVN0YXR1c1wiXG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwidHJlZVN0YXR1cyA9PT0gJ2xvYWRpbmcnXCIgY2xhc3M9XCJpY29uIGRhdGF0YWJsZS1pY29uLWNvbGxhcHNlXCI+PC9pPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJ0cmVlU3RhdHVzID09PSAnY29sbGFwc2VkJ1wiIGNsYXNzPVwiaWNvbiBkYXRhdGFibGUtaWNvbi11cFwiPjwvaT5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwidHJlZVN0YXR1cyA9PT0gJ2V4cGFuZGVkJyB8fCB0cmVlU3RhdHVzID09PSAnZGlzYWJsZWQnXCIgY2xhc3M9XCJpY29uIGRhdGF0YWJsZS1pY29uLWRvd25cIj48L2k+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgICAgKm5nSWY9XCJjb2x1bW4udHJlZVRvZ2dsZVRlbXBsYXRlXCJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4udHJlZVRvZ2dsZVRlbXBsYXRlXCJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBjZWxsQ29udGV4dDogY2VsbENvbnRleHQgfVwiXG4gICAgICAgID5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uY2VsbFRlbXBsYXRlXCIgW3RpdGxlXT1cInNhbml0aXplZFZhbHVlXCIgW2lubmVySFRNTF09XCJ2YWx1ZVwiPiA8L3NwYW4+XG4gICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgI2NlbGxUZW1wbGF0ZVxuICAgICAgICAqbmdJZj1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4uY2VsbFRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cImNlbGxDb250ZXh0XCJcbiAgICAgID5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctdGVtcGxhdGUgI2dob3N0TG9hZGVyVGVtcGxhdGU+XG4gICAgPGdob3N0LWxvYWRlciAqbmdJZj1cImdob3N0TG9hZGluZ0luZGljYXRvclwiIFtjb2x1bW5zXT1cIltjb2x1bW5dXCIgW3BhZ2VTaXplXT1cIjFcIj48L2dob3N0LWxvYWRlcj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVCb2R5Q2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2ssIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGRpc3BsYXlDaGVjazogKHJvdzogYW55LCBjb2x1bW4/OiBUYWJsZUNvbHVtbiwgdmFsdWU/OiBhbnkpID0+IGJvb2xlYW47XG5cbiAgX2Rpc2FibGUkO1xuICBASW5wdXQoKSBzZXQgZGlzYWJsZSQodmFsOiBhbnkpIHtcbiAgICB0aGlzLl9kaXNhYmxlJCA9IHZhbDtcbiAgICB0aGlzLmNlbGxDb250ZXh0LmRpc2FibGUkID0gdmFsO1xuICB9O1xuICBnZXQgZGlzYWJsZSQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGUkO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGdyb3VwKGdyb3VwOiBhbnkpIHtcbiAgICB0aGlzLl9ncm91cCA9IGdyb3VwO1xuICAgIHRoaXMuY2VsbENvbnRleHQuZ3JvdXAgPSBncm91cDtcbiAgICB0aGlzLmNoZWNrVmFsdWVVcGRhdGVzKCk7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCBncm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JvdXA7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgcm93SGVpZ2h0KHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcm93SGVpZ2h0ID0gdmFsO1xuICAgIHRoaXMuY2VsbENvbnRleHQucm93SGVpZ2h0ID0gdmFsO1xuICAgIHRoaXMuY2hlY2tWYWx1ZVVwZGF0ZXMoKTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IHJvd0hlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm93SGVpZ2h0O1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGlzU2VsZWN0ZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNTZWxlY3RlZCA9IHZhbDtcbiAgICB0aGlzLmNlbGxDb250ZXh0LmlzU2VsZWN0ZWQgPSB2YWw7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdGVkO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGV4cGFuZGVkKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2V4cGFuZGVkID0gdmFsO1xuICAgIHRoaXMuY2VsbENvbnRleHQuZXhwYW5kZWQgPSB2YWw7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCBleHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kZWQ7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgcm93SW5kZXgodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9yb3dJbmRleCA9IHZhbDtcbiAgICB0aGlzLmNlbGxDb250ZXh0LnJvd0luZGV4ID0gdmFsO1xuICAgIHRoaXMuY2hlY2tWYWx1ZVVwZGF0ZXMoKTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IHJvd0luZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvd0luZGV4O1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGNvbHVtbihjb2x1bW46IFRhYmxlQ29sdW1uKSB7XG4gICAgdGhpcy5fY29sdW1uID0gY29sdW1uO1xuICAgIHRoaXMuY2VsbENvbnRleHQuY29sdW1uID0gY29sdW1uO1xuICAgIHRoaXMuY2hlY2tWYWx1ZVVwZGF0ZXMoKTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IGNvbHVtbigpOiBUYWJsZUNvbHVtbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbjtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCByb3cocm93OiBhbnkpIHtcbiAgICB0aGlzLl9yb3cgPSByb3c7XG4gICAgdGhpcy5jZWxsQ29udGV4dC5yb3cgPSByb3c7XG4gICAgdGhpcy5jaGVja1ZhbHVlVXBkYXRlcygpO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgcm93KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdztcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBzb3J0cyh2YWw6IGFueVtdKSB7XG4gICAgdGhpcy5fc29ydHMgPSB2YWw7XG4gICAgdGhpcy5jYWxjU29ydERpciA9IHRoaXMuY2FsY1NvcnREaXIodmFsKTtcbiAgfVxuXG4gIGdldCBzb3J0cygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRzO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHRyZWVTdGF0dXMoc3RhdHVzOiBUcmVlU3RhdHVzKSB7XG4gICAgaWYgKHN0YXR1cyAhPT0gJ2NvbGxhcHNlZCcgJiYgc3RhdHVzICE9PSAnZXhwYW5kZWQnICYmIHN0YXR1cyAhPT0gJ2xvYWRpbmcnICYmIHN0YXR1cyAhPT0gJ2Rpc2FibGVkJykge1xuICAgICAgdGhpcy5fdHJlZVN0YXR1cyA9ICdjb2xsYXBzZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90cmVlU3RhdHVzID0gc3RhdHVzO1xuICAgIH1cbiAgICB0aGlzLmNlbGxDb250ZXh0LnRyZWVTdGF0dXMgPSB0aGlzLl90cmVlU3RhdHVzO1xuICAgIHRoaXMuY2hlY2tWYWx1ZVVwZGF0ZXMoKTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IHRyZWVTdGF0dXMoKTogVHJlZVN0YXR1cyB7XG4gICAgcmV0dXJuIHRoaXMuX3RyZWVTdGF0dXM7XG4gIH1cblxuICBASW5wdXQoKSBnaG9zdExvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSB0cmVlQWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCdjZWxsVGVtcGxhdGUnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIGNlbGxUZW1wbGF0ZTogVmlld0NvbnRhaW5lclJlZjtcblxuICBAVmlld0NoaWxkKCdnaG9zdExvYWRlclRlbXBsYXRlJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBnaG9zdExvYWRlclRlbXBsYXRlOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgY29sdW1uQ3NzQ2xhc3NlcygpOiBhbnkge1xuICAgIGxldCBjbHMgPSAnZGF0YXRhYmxlLWJvZHktY2VsbCc7XG4gICAgaWYgKHRoaXMuY29sdW1uLmNlbGxDbGFzcykge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbi5jZWxsQ2xhc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNscyArPSAnICcgKyB0aGlzLmNvbHVtbi5jZWxsQ2xhc3M7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbi5jZWxsQ2xhc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgcmVzID0gdGhpcy5jb2x1bW4uY2VsbENsYXNzKHtcbiAgICAgICAgICByb3c6IHRoaXMucm93LFxuICAgICAgICAgIGdyb3VwOiB0aGlzLmdyb3VwLFxuICAgICAgICAgIGNvbHVtbjogdGhpcy5jb2x1bW4sXG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgcm93SGVpZ2h0OiB0aGlzLnJvd0hlaWdodFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjbHMgKz0gJyAnICsgcmVzO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlcyk7XG4gICAgICAgICAgZm9yIChjb25zdCBrIG9mIGtleXMpIHtcbiAgICAgICAgICAgIGlmIChyZXNba10gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY2xzICs9IGAgJHtrfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5zb3J0RGlyKSB7XG4gICAgICBjbHMgKz0gJyBzb3J0LWFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzRm9jdXNlZCAmJiAhdGhpcy5kaXNhYmxlJD8udmFsdWUpIHtcbiAgICAgIGNscyArPSAnIGFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLnNvcnREaXIgPT09IFNvcnREaXJlY3Rpb24uYXNjKSB7XG4gICAgICBjbHMgKz0gJyBzb3J0LWFzYyc7XG4gICAgfVxuICAgIGlmICh0aGlzLnNvcnREaXIgPT09IFNvcnREaXJlY3Rpb24uZGVzYykge1xuICAgICAgY2xzICs9ICcgc29ydC1kZXNjJztcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZSQ/LnZhbHVlKSB7XG4gICAgICBjbHMgKz0gJyByb3ctZGlzYWJsZWQnO1xuICAgIH1cblxuICAgIHJldHVybiBjbHM7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLnB4JylcbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uLndpZHRoO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5taW5XaWR0aC5weCcpXG4gIGdldCBtaW5XaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbi5taW5XaWR0aDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWF4V2lkdGgucHgnKVxuICBnZXQgbWF4V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW4ubWF4V2lkdGg7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpXG4gIGdldCBoZWlnaHQoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnJvd0hlaWdodDtcbiAgICBpZiAoaXNOYU4oaGVpZ2h0KSkge1xuICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIGhlaWdodCArICdweCc7XG4gIH1cblxuICBzYW5pdGl6ZWRWYWx1ZTogYW55O1xuICB2YWx1ZTogYW55O1xuICBzb3J0RGlyOiBTb3J0RGlyZWN0aW9uO1xuICBpc0ZvY3VzZWQgPSBmYWxzZTtcbiAgb25DaGVja2JveENoYW5nZUZuID0gdGhpcy5vbkNoZWNrYm94Q2hhbmdlLmJpbmQodGhpcyk7XG4gIGFjdGl2YXRlRm4gPSB0aGlzLmFjdGl2YXRlLmVtaXQuYmluZCh0aGlzLmFjdGl2YXRlKTtcblxuICBjZWxsQ29udGV4dDogYW55O1xuXG4gIHByaXZhdGUgX2lzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3NvcnRzOiBhbnlbXTtcbiAgcHJpdmF0ZSBfY29sdW1uOiBUYWJsZUNvbHVtbjtcbiAgcHJpdmF0ZSBfcm93OiBhbnk7XG4gIHByaXZhdGUgX2dyb3VwOiBhbnk7XG4gIHByaXZhdGUgX3Jvd0hlaWdodDogbnVtYmVyO1xuICBwcml2YXRlIF9yb3dJbmRleDogbnVtYmVyO1xuICBwcml2YXRlIF9leHBhbmRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZWxlbWVudDogYW55O1xuICBwcml2YXRlIF90cmVlU3RhdHVzOiBUcmVlU3RhdHVzO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5jZWxsQ29udGV4dCA9IHtcbiAgICAgIG9uQ2hlY2tib3hDaGFuZ2VGbjogdGhpcy5vbkNoZWNrYm94Q2hhbmdlRm4sXG4gICAgICBhY3RpdmF0ZUZuOiB0aGlzLmFjdGl2YXRlRm4sXG4gICAgICByb3c6IHRoaXMucm93LFxuICAgICAgZ3JvdXA6IHRoaXMuZ3JvdXAsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGNvbHVtbjogdGhpcy5jb2x1bW4sXG4gICAgICByb3dIZWlnaHQ6IHRoaXMucm93SGVpZ2h0LFxuICAgICAgaXNTZWxlY3RlZDogdGhpcy5pc1NlbGVjdGVkLFxuICAgICAgcm93SW5kZXg6IHRoaXMucm93SW5kZXgsXG4gICAgICB0cmVlU3RhdHVzOiB0aGlzLnRyZWVTdGF0dXMsXG4gICAgICBkaXNhYmxlJDogdGhpcy5kaXNhYmxlJCxcbiAgICAgIG9uVHJlZUFjdGlvbjogdGhpcy5vblRyZWVBY3Rpb24uYmluZCh0aGlzKVxuICAgIH07XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tWYWx1ZVVwZGF0ZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNlbGxUZW1wbGF0ZSkge1xuICAgICAgdGhpcy5jZWxsVGVtcGxhdGUuY2xlYXIoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2hvc3RMb2FkZXJUZW1wbGF0ZSkge1xuICAgICAgdGhpcy5naG9zdExvYWRlclRlbXBsYXRlLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tWYWx1ZVVwZGF0ZXMoKTogdm9pZCB7XG4gICAgbGV0IHZhbHVlID0gJyc7XG5cbiAgICBpZiAoIXRoaXMucm93IHx8ICF0aGlzLmNvbHVtbikge1xuICAgICAgdmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsID0gdGhpcy5jb2x1bW4uJCR2YWx1ZUdldHRlcih0aGlzLnJvdywgdGhpcy5jb2x1bW4ucHJvcCk7XG4gICAgICBjb25zdCB1c2VyUGlwZTogUGlwZVRyYW5zZm9ybSA9IHRoaXMuY29sdW1uLnBpcGU7XG5cbiAgICAgIGlmICh1c2VyUGlwZSkge1xuICAgICAgICB2YWx1ZSA9IHVzZXJQaXBlLnRyYW5zZm9ybSh2YWwpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5jZWxsQ29udGV4dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5jZWxsQ29udGV4dC5kaXNhYmxlJCA9IHRoaXMuZGlzYWJsZSQ7XG4gICAgICB0aGlzLnNhbml0aXplZFZhbHVlID0gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCA/IHRoaXMuc3RyaXBIdG1sKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpXG4gIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHtcbiAgICAgIHR5cGU6ICdjbGljaycsXG4gICAgICBldmVudCxcbiAgICAgIHJvdzogdGhpcy5yb3csXG4gICAgICBncm91cDogdGhpcy5ncm91cCxcbiAgICAgIHJvd0hlaWdodDogdGhpcy5yb3dIZWlnaHQsXG4gICAgICBjb2x1bW46IHRoaXMuY29sdW1uLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBjZWxsRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgIH0pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbJyRldmVudCddKVxuICBvbkRibENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHtcbiAgICAgIHR5cGU6ICdkYmxjbGljaycsXG4gICAgICBldmVudCxcbiAgICAgIHJvdzogdGhpcy5yb3csXG4gICAgICBncm91cDogdGhpcy5ncm91cCxcbiAgICAgIHJvd0hlaWdodDogdGhpcy5yb3dIZWlnaHQsXG4gICAgICBjb2x1bW46IHRoaXMuY29sdW1uLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBjZWxsRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgIH0pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIGNvbnN0IGlzVGFyZ2V0Q2VsbCA9IGV2ZW50LnRhcmdldCA9PT0gdGhpcy5fZWxlbWVudDtcblxuICAgIGNvbnN0IGlzQWN0aW9uID1cbiAgICAgIGtleUNvZGUgPT09IEtleXMucmV0dXJuIHx8XG4gICAgICBrZXlDb2RlID09PSBLZXlzLmRvd24gfHxcbiAgICAgIGtleUNvZGUgPT09IEtleXMudXAgfHxcbiAgICAgIGtleUNvZGUgPT09IEtleXMubGVmdCB8fFxuICAgICAga2V5Q29kZSA9PT0gS2V5cy5yaWdodDtcblxuICAgIGlmIChpc0FjdGlvbiAmJiBpc1RhcmdldENlbGwpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHtcbiAgICAgICAgdHlwZTogJ2tleWRvd24nLFxuICAgICAgICBldmVudCxcbiAgICAgICAgcm93OiB0aGlzLnJvdyxcbiAgICAgICAgZ3JvdXA6IHRoaXMuZ3JvdXAsXG4gICAgICAgIHJvd0hlaWdodDogdGhpcy5yb3dIZWlnaHQsXG4gICAgICAgIGNvbHVtbjogdGhpcy5jb2x1bW4sXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBjZWxsRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25DaGVja2JveENoYW5nZShldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHtcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICBldmVudCxcbiAgICAgIHJvdzogdGhpcy5yb3csXG4gICAgICBncm91cDogdGhpcy5ncm91cCxcbiAgICAgIHJvd0hlaWdodDogdGhpcy5yb3dIZWlnaHQsXG4gICAgICBjb2x1bW46IHRoaXMuY29sdW1uLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBjZWxsRWxlbWVudDogdGhpcy5fZWxlbWVudCxcbiAgICAgIHRyZWVTdGF0dXM6ICdjb2xsYXBzZWQnXG4gICAgfSk7XG4gIH1cblxuICBjYWxjU29ydERpcihzb3J0czogYW55W10pOiBhbnkge1xuICAgIGlmICghc29ydHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzb3J0ID0gc29ydHMuZmluZCgoczogYW55KSA9PiBzLnByb3AgPT09IHRoaXMuY29sdW1uLnByb3ApO1xuXG4gICAgaWYgKHNvcnQpIHtcbiAgICAgIHJldHVybiBzb3J0LmRpcjtcbiAgICB9XG4gIH1cblxuICBzdHJpcEh0bWwoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIWh0bWwucmVwbGFjZSkge1xuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIHJldHVybiBodG1sLnJlcGxhY2UoLzxcXC8/W14+XSsoPnwkKS9nLCAnJyk7XG4gIH1cblxuICBvblRyZWVBY3Rpb24oKSB7XG4gICAgdGhpcy50cmVlQWN0aW9uLmVtaXQodGhpcy5yb3cpO1xuICB9XG5cbiAgY2FsY0xlZnRNYXJnaW4oY29sdW1uOiBhbnksIHJvdzogYW55KSB7XG4gICAgY29uc3QgbGV2ZWxJbmRlbnQgPSBjb2x1bW4udHJlZUxldmVsSW5kZW50ICE9IG51bGwgPyBjb2x1bW4udHJlZUxldmVsSW5kZW50IDogNTA7XG4gICAgcmV0dXJuIGNvbHVtbi5pc1RyZWVDb2x1bW4gPyByb3cubGV2ZWwgKiBsZXZlbEluZGVudCA6IDA7XG4gIH1cbn1cbiJdfQ==