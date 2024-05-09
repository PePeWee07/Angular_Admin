import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { ScrollerComponent } from './scroller.component';
import { columnGroupWidths, columnsByPin } from '../../utils/column';
import { RowHeightCache } from '../../utils/row-height-cache';
import { translateXY } from '../../utils/translate';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../directives/draggable.directive";
import * as i3 from "./scroller.component";
import * as i4 from "./progress-bar.component";
import * as i5 from "./body-row.component";
import * as i6 from "./body-row-wrapper.component";
import * as i7 from "./selection.component";
import * as i8 from "./summary/summary-row.component";
import * as i9 from "./ghost-loader/ghost-loader.component";
export class DataTableBodyComponent {
    set ghostLoadingIndicator(val) {
        this._ghostLoadingIndicator = val;
        if (!val) {
            // remove placeholder rows once ghostloading is set to false
            this.temp = this.temp.filter(item => !!item);
        }
    }
    ;
    get ghostLoadingIndicator() {
        return this._ghostLoadingIndicator;
    }
    set pageSize(val) {
        if (val !== this._pageSize) {
            this._pageSize = val;
            this.recalcLayout();
            // Emits the page event if page size has been changed
            this._offsetEvent = -1;
            this.updatePage('up');
            this.updatePage('down');
        }
    }
    get pageSize() {
        return this._pageSize;
    }
    set rows(val) {
        if (val !== this._rows) {
            this._rows = val;
            this.recalcLayout();
        }
    }
    get rows() {
        return this._rows;
    }
    set columns(val) {
        if (val !== this._columns) {
            this._columns = val;
            const colsByPin = columnsByPin(val);
            this.columnGroupWidths = columnGroupWidths(colsByPin, val);
        }
    }
    get columns() {
        return this._columns;
    }
    set offset(val) {
        if (val !== this._offset) {
            this._offset = val;
            if (!this.scrollbarV || (this.scrollbarV && !this.virtualization)) {
                if (!isNaN(this._offset) && this.ghostLoadingIndicator) {
                    this.rows = [];
                }
                this.recalcLayout();
            }
        }
    }
    get offset() {
        return this._offset;
    }
    set rowCount(val) {
        if (val !== this._rowCount) {
            this._rowCount = val;
            this.recalcLayout();
        }
    }
    get rowCount() {
        return this._rowCount;
    }
    get bodyWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        else {
            return '100%';
        }
    }
    set bodyHeight(val) {
        if (this.scrollbarV) {
            this._bodyHeight = val + 'px';
        }
        else {
            this._bodyHeight = 'auto';
        }
        this.recalcLayout();
    }
    get bodyHeight() {
        return this._bodyHeight;
    }
    /**
     * Returns if selection is enabled.
     */
    get selectEnabled() {
        return !!this.selectionType;
    }
    /**
     * Property that would calculate the height of scroll bar
     * based on the row heights cache for virtual scroll and virtualization. Other scenarios
     * calculate scroll height automatically (as height will be undefined).
     */
    get scrollHeight() {
        if (this.scrollbarV && this.virtualization && this.rowCount) {
            return this.rowHeightsCache.query(this.rowCount - 1);
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
    /**
     * Creates an instance of DataTableBodyComponent.
     */
    constructor(cd) {
        this.cd = cd;
        this.selected = [];
        this.scroll = new EventEmitter();
        this.page = new EventEmitter();
        this.activate = new EventEmitter();
        this.select = new EventEmitter();
        this.detailToggle = new EventEmitter();
        this.rowContextmenu = new EventEmitter(false);
        this.treeAction = new EventEmitter();
        this.rowHeightsCache = new RowHeightCache();
        this.temp = [];
        this.offsetY = 0;
        this.indexes = {};
        this.rowIndexes = new WeakMap();
        this.rowExpansions = [];
        this._offsetEvent = -1;
        /**
         * Get the height of the detail row.
         */
        this.getDetailRowHeight = (row, index) => {
            if (!this.rowDetail) {
                return 0;
            }
            const rowHeight = this.rowDetail.rowHeight;
            return typeof rowHeight === 'function' ? rowHeight(row, index) : rowHeight;
        };
        // declare fn here so we can get access to the `this` property
        this.rowTrackingFn = (index, row) => {
            const idx = this.getRowIndex(row);
            if (this.trackByProp) {
                return row[this.trackByProp];
            }
            else {
                return idx;
            }
        };
    }
    /**
     * Called after the constructor, initializing input properties
     */
    ngOnInit() {
        if (this.rowDetail) {
            this.listener = this.rowDetail.toggle.subscribe(({ type, value }) => {
                if (type === 'row') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            });
        }
        if (this.groupHeader) {
            this.listener = this.groupHeader.toggle.subscribe(({ type, value }) => {
                if (type === 'group') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            });
        }
    }
    /**
     * Called once, before the instance is destroyed.
     */
    ngOnDestroy() {
        if (this.rowDetail || this.groupHeader) {
            this.listener.unsubscribe();
        }
    }
    /**
     * Updates the Y offset given a new offset.
     */
    updateOffsetY(offset) {
        // scroller is missing on empty table
        if (!this.scroller) {
            return;
        }
        if (this.scrollbarV && this.virtualization && offset) {
            // First get the row Index that we need to move to.
            const rowIndex = this.pageSize * offset;
            offset = this.rowHeightsCache.query(rowIndex - 1);
        }
        else if (this.scrollbarV && !this.virtualization) {
            offset = 0;
        }
        this.scroller.setOffset(offset || 0);
    }
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     */
    onBodyScroll(event) {
        const scrollYPos = event.scrollYPos;
        const scrollXPos = event.scrollXPos;
        // if scroll change, trigger update
        // this is mainly used for header cell positions
        if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
            this.scroll.emit({
                offsetY: scrollYPos,
                offsetX: scrollXPos
            });
        }
        this.offsetY = scrollYPos;
        this.offsetX = scrollXPos;
        this.updateIndexes();
        this.updatePage(event.direction);
        this.updateRows();
        this.cd.detectChanges();
    }
    /**
     * Updates the page given a direction.
     */
    updatePage(direction) {
        let offset = this.indexes.first / this.pageSize;
        const scrollInBetween = !Number.isInteger(offset);
        if (direction === 'up') {
            offset = Math.ceil(offset);
        }
        else if (direction === 'down') {
            offset = Math.floor(offset);
        }
        if (direction !== undefined && !isNaN(offset) && offset !== this._offsetEvent) {
            this._offsetEvent = offset;
            // if scroll was done by mouse drag make sure previous row and next row data is also fetched if its not fetched
            if (scrollInBetween && this.scrollbarV && this.virtualization && this.externalPaging) {
                const upRow = this.rows[this.indexes.first - 1];
                if (!upRow && direction === 'up') {
                    this.page.emit({ offset: offset - 1 });
                }
                const downRow = this.rows[this.indexes.first + this.pageSize];
                if (!downRow && direction === 'down') {
                    this.page.emit({ offset: offset + 1 });
                }
            }
            this.page.emit({ offset });
        }
    }
    /**
     * Updates the rows in the view port
     */
    updateRows() {
        const { first, last } = this.indexes;
        let rowIndex = first;
        let idx = 0;
        const temp = [];
        // if grouprowsby has been specified treat row paging
        // parameters as group paging parameters ie if limit 10 has been
        // specified treat it as 10 groups rather than 10 rows
        if (this.groupedRows) {
            let maxRowsPerGroup = 3;
            // if there is only one group set the maximum number of
            // rows per group the same as the total number of rows
            if (this.groupedRows.length === 1) {
                maxRowsPerGroup = this.groupedRows[0].value.length;
            }
            while (rowIndex < last && rowIndex < this.groupedRows.length) {
                // Add the groups into this page
                const group = this.groupedRows[rowIndex];
                this.rowIndexes.set(group, rowIndex);
                if (group.value) {
                    // add indexes for each group item
                    group.value.forEach((g, i) => {
                        const _idx = `${rowIndex}-${i}`;
                        this.rowIndexes.set(g, _idx);
                    });
                }
                temp[idx] = group;
                idx++;
                // Group index in this context
                rowIndex++;
            }
        }
        else {
            while (rowIndex < last && rowIndex < this.rowCount) {
                const row = this.rows[rowIndex];
                if (row) {
                    // add indexes for each row
                    this.rowIndexes.set(row, rowIndex);
                    temp[idx] = row;
                }
                else if (this.ghostLoadingIndicator && this.virtualization) {
                    temp[idx] = undefined;
                }
                idx++;
                rowIndex++;
            }
        }
        this.temp = temp;
    }
    /**
     * Get the row height
     */
    getRowHeight(row) {
        // if its a function return it
        if (typeof this.rowHeight === 'function') {
            return this.rowHeight(row);
        }
        return this.rowHeight;
    }
    /**
     * @param group the group with all rows
     */
    getGroupHeight(group) {
        let rowHeight = 0;
        if (group.value) {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let index = 0; index < group.value.length; index++) {
                rowHeight += this.getRowAndDetailHeight(group.value[index]);
            }
        }
        return rowHeight;
    }
    /**
     * Calculate row height based on the expanded state of the row.
     */
    getRowAndDetailHeight(row) {
        let rowHeight = this.getRowHeight(row);
        const expanded = this.getRowExpanded(row);
        // Adding detail row height if its expanded.
        if (expanded) {
            rowHeight += this.getDetailRowHeight(row);
        }
        return rowHeight;
    }
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * @param rows the row that needs to be placed in the 2D space.
     * @param index for ghost cells in order to get correct position of ghost row
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    getRowsStyles(rows, index = 0) {
        const styles = {};
        // only add styles for the group if there is a group
        if (this.groupedRows) {
            styles.width = this.columnGroupWidths.total;
        }
        if (this.scrollbarV && this.virtualization) {
            let idx = 0;
            if (this.groupedRows) {
                // Get the latest row rowindex in a group
                const row = rows[rows.length - 1];
                idx = row ? this.getRowIndex(row) : 0;
            }
            else {
                if (rows) {
                    idx = this.getRowIndex(rows);
                }
                else {
                    // When ghost cells are enabled use index to get the position of them
                    idx = index;
                }
            }
            // const pos = idx * rowHeight;
            // The position of this row would be the sum of all row heights
            // until the previous row position.
            const pos = this.rowHeightsCache.query(idx - 1);
            translateXY(styles, 0, pos);
        }
        return styles;
    }
    /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    getBottomSummaryRowStyles() {
        if (!this.scrollbarV || !this.rows || !this.rows.length) {
            return null;
        }
        const styles = { position: 'absolute' };
        const pos = this.rowHeightsCache.query(this.rows.length - 1);
        translateXY(styles, 0, pos);
        return styles;
    }
    /**
     * Hides the loading indicator
     */
    hideIndicator() {
        setTimeout(() => (this.loadingIndicator = false), 500);
    }
    /**
     * Updates the index of the rows in the viewport
     */
    updateIndexes() {
        let first = 0;
        let last = 0;
        if (this.scrollbarV) {
            if (this.virtualization) {
                // Calculation of the first and last indexes will be based on where the
                // scrollY position would be at.  The last index would be the one
                // that shows up inside the view port the last.
                const height = parseInt(this.bodyHeight, 10);
                first = this.rowHeightsCache.getRowIndex(this.offsetY);
                last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
            }
            else {
                // If virtual rows are not needed
                // We render all in one go
                first = 0;
                last = this.rowCount;
            }
        }
        else {
            // The server is handling paging and will pass an array that begins with the
            // element at a specified offset.  first should always be 0 with external paging.
            if (!this.externalPaging) {
                first = Math.max(this.offset * this.pageSize, 0);
            }
            last = Math.min(first + this.pageSize, this.rowCount);
        }
        this.indexes = { first, last };
    }
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     */
    refreshRowHeightCache() {
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization)) {
            return;
        }
        // clear the previous row height cache if already present.
        // this is useful during sorts, filters where the state of the
        // rows array is changed.
        this.rowHeightsCache.clearCache();
        // Initialize the tree only if there are rows inside the tree.
        if (this.rows && this.rows.length) {
            const rowExpansions = new Set();
            for (const row of this.rows) {
                if (this.getRowExpanded(row)) {
                    rowExpansions.add(row);
                }
            }
            this.rowHeightsCache.initCache({
                rows: this.rows,
                rowHeight: this.rowHeight,
                detailRowHeight: this.getDetailRowHeight,
                externalVirtual: this.scrollbarV && this.externalPaging,
                rowCount: this.rowCount,
                rowIndexes: this.rowIndexes,
                rowExpansions
            });
        }
    }
    /**
     * Gets the index for the view port
     */
    getAdjustedViewPortIndex() {
        // Capture the row index of the first row that is visible on the viewport.
        // If the scroll bar is just below the row which is highlighted then make that as the
        // first index.
        const viewPortFirstRowIndex = this.indexes.first;
        if (this.scrollbarV && this.virtualization) {
            const offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
            return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
        }
        return viewPortFirstRowIndex;
    }
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     */
    toggleRowExpansion(row) {
        // Capture the row index of the first row that is visible on the viewport.
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        const rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
        const expanded = rowExpandedIdx > -1;
        // If the detailRowHeight is auto --> only in case of non-virtualized scroll
        if (this.scrollbarV && this.virtualization) {
            const detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1);
            // const idx = this.rowIndexes.get(row) || 0;
            const idx = this.getRowIndex(row);
            this.rowHeightsCache.update(idx, detailRowHeight);
        }
        // Update the toggled row and update thive nevere heights in the cache.
        if (expanded) {
            this.rowExpansions.splice(rowExpandedIdx, 1);
        }
        else {
            this.rowExpansions.push(row);
        }
        this.detailToggle.emit({
            rows: [row],
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Expand/Collapse all the rows no matter what their state is.
     */
    toggleAllRows(expanded) {
        // clear prev expansions
        this.rowExpansions = [];
        // Capture the row index of the first row that is visible on the viewport.
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        if (expanded) {
            for (const row of this.rows) {
                this.rowExpansions.push(row);
            }
        }
        if (this.scrollbarV) {
            // Refresh the full row heights cache since every row was affected.
            this.recalcLayout();
        }
        // Emit all rows that have been expanded.
        this.detailToggle.emit({
            rows: this.rows,
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Recalculates the table
     */
    recalcLayout() {
        this.refreshRowHeightCache();
        this.updateIndexes();
        this.updateRows();
    }
    /**
     * Tracks the column
     */
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    /**
     * Gets the row pinning group styles
     */
    stylesByGroup(group) {
        const widths = this.columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            const bodyWidth = this.innerWidth;
            const totalDiff = widths.total - bodyWidth;
            const offsetDiff = totalDiff - offsetX;
            const offset = offsetDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     */
    getRowExpanded(row) {
        if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
            for (const group of this.groupedRows) {
                this.rowExpansions.push(group);
            }
        }
        return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
    }
    getRowExpandedIdx(row, expanded) {
        if (!expanded || !expanded.length) {
            return -1;
        }
        const rowId = this.rowIdentity(row);
        return expanded.findIndex(r => {
            const id = this.rowIdentity(r);
            return id === rowId;
        });
    }
    /**
     * Gets the row index given a row
     */
    getRowIndex(row) {
        return this.rowIndexes.get(row) || 0;
    }
    onTreeAction(row) {
        this.treeAction.emit({ row });
    }
    dragOver(event, dropRow) {
        event.preventDefault();
        this.rowDragEvents.emit({
            event,
            srcElement: this._draggedRowElement,
            eventType: 'dragover',
            dragRow: this._draggedRow,
            dropRow
        });
    }
    drag(event, dragRow, rowComponent) {
        this._draggedRow = dragRow;
        this._draggedRowElement = rowComponent._element;
        this.rowDragEvents.emit({
            event,
            srcElement: this._draggedRowElement,
            eventType: 'dragstart',
            dragRow
        });
    }
    drop(event, dropRow, rowComponent) {
        event.preventDefault();
        this.rowDragEvents.emit({
            event,
            srcElement: this._draggedRowElement,
            targetElement: rowComponent._element,
            eventType: 'drop',
            dragRow: this._draggedRow,
            dropRow
        });
    }
    dragEnter(event, dropRow, rowComponent) {
        event.preventDefault();
        this.rowDragEvents.emit({
            event,
            srcElement: this._draggedRowElement,
            targetElement: rowComponent._element,
            eventType: 'dragenter',
            dragRow: this._draggedRow,
            dropRow
        });
    }
    dragLeave(event, dropRow, rowComponent) {
        event.preventDefault();
        this.rowDragEvents.emit({
            event,
            srcElement: this._draggedRowElement,
            targetElement: rowComponent._element,
            eventType: 'dragleave',
            dragRow: this._draggedRow,
            dropRow
        });
    }
    dragEnd(event, dragRow) {
        event.preventDefault();
        this.rowDragEvents.emit({
            event,
            srcElement: this._draggedRowElement,
            eventType: 'dragend',
            dragRow
        });
        this._draggedRow = undefined;
        this._draggedRowElement = undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DataTableBodyComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.6", type: DataTableBodyComponent, selector: "datatable-body", inputs: { scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", loadingIndicator: "loadingIndicator", ghostLoadingIndicator: "ghostLoadingIndicator", externalPaging: "externalPaging", rowHeight: "rowHeight", offsetX: "offsetX", emptyMessage: "emptyMessage", selectionType: "selectionType", selected: "selected", rowIdentity: "rowIdentity", rowDetail: "rowDetail", groupHeader: "groupHeader", selectCheck: "selectCheck", displayCheck: "displayCheck", trackByProp: "trackByProp", rowClass: "rowClass", groupedRows: "groupedRows", groupExpansionDefault: "groupExpansionDefault", innerWidth: "innerWidth", groupRowsBy: "groupRowsBy", virtualization: "virtualization", summaryRow: "summaryRow", summaryPosition: "summaryPosition", summaryHeight: "summaryHeight", rowDraggable: "rowDraggable", rowDragEvents: "rowDragEvents", disableRowCheck: "disableRowCheck", pageSize: "pageSize", rows: "rows", columns: "columns", offset: "offset", rowCount: "rowCount", bodyHeight: "bodyHeight" }, outputs: { scroll: "scroll", page: "page", activate: "activate", select: "select", detailToggle: "detailToggle", rowContextmenu: "rowContextmenu", treeAction: "treeAction" }, host: { properties: { "style.width": "this.bodyWidth", "style.height": "this.bodyHeight" }, classAttribute: "datatable-body" }, viewQueries: [{ propertyName: "scroller", first: true, predicate: ScrollerComponent, descendants: true }], ngImport: i0, template: `
    <ng-container *ngIf="loadingIndicator">
      <div class="custom-loading-indicator-wrapper">
        <div class="custom-loading-content" #customIndicator>
          <ng-content select="[loading-indicator]"></ng-content>
        </div>
      </div>
      <datatable-progress *ngIf="!customIndicator?.hasChildNodes()"></datatable-progress>
    </ng-container>
    <ghost-loader
      *ngIf="ghostLoadingIndicator && (!rowCount || !virtualization || !scrollbarV)"
      class="ghost-overlay"
      [columns]="columns"
      [pageSize]="pageSize"
      [rowHeight]="rowHeight"
      [ghostBodyHeight]="bodyHeight"
    >
    </ghost-loader>
    <datatable-selection
      #selector
      [selected]="selected"
      [rows]="rows"
      [selectCheck]="selectCheck"
      [disableCheck]="disableRowCheck"
      [selectEnabled]="selectEnabled"
      [selectionType]="selectionType"
      [rowIdentity]="rowIdentity"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
    >
      <datatable-scroller
        *ngIf="rows?.length"
        [scrollbarV]="scrollbarV"
        [scrollbarH]="scrollbarH"
        [scrollHeight]="scrollHeight"
        [scrollWidth]="columnGroupWidths?.total"
        (scroll)="onBodyScroll($event)"
      >
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'top'"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
        <datatable-row-wrapper
          #rowWrapper
          [groupedRows]="groupedRows"
          *ngFor="let group of temp; let i = index; trackBy: rowTrackingFn"
          [innerWidth]="innerWidth"
          [ngStyle]="getRowsStyles(group, indexes.first + i )"
          [rowDetail]="rowDetail"
          [groupHeader]="groupHeader"
          [offsetX]="offsetX"
          [detailRowHeight]="getDetailRowHeight(group && group[i], i)"
          [row]="group"
          [disableCheck]="disableRowCheck"
          [expanded]="getRowExpanded(group)"
          [rowIndex]="getRowIndex(group && group[i])"
          (rowContextmenu)="rowContextmenu.emit($event)"
        >
          <datatable-body-row
            role="row"
            *ngIf="!groupedRows; else groupedRowsTemplate"
            tabindex="-1"
            #rowElement
            [disable$]="rowWrapper.disable$"
            [isSelected]="selector.getRowSelected(group)"
            [innerWidth]="innerWidth"
            [offsetX]="offsetX"
            [columns]="columns"
            [rowHeight]="getRowHeight(group)"
            [row]="group"
            [rowIndex]="getRowIndex(group)"
            [expanded]="getRowExpanded(group)"
            [rowClass]="rowClass"
            [displayCheck]="displayCheck"
            [treeStatus]="group && group.treeStatus"
            [ghostLoadingIndicator]="ghostLoadingIndicator"
            [draggable]="rowDraggable"
            (treeAction)="onTreeAction(group)"
            (activate)="selector.onActivate($event, indexes.first + i)"
            (drop)="drop($event, group, rowElement)"
            (dragover)="dragOver($event, group)"
            (dragenter)="dragEnter($event, group, rowElement)"
            (dragleave)="dragLeave($event, group, rowElement)"
            (dragstart)="drag($event, group, rowElement)"
            (dragend)="dragEnd($event, group)"
          >
          </datatable-body-row>
          <ng-template #groupedRowsTemplate>
            <datatable-body-row
              role="row"
              [disable$]="rowWrapper.disable$"
              *ngFor="let row of group.value; let i = index; trackBy: rowTrackingFn"
              tabindex="-1"
              #rowElement
              [isSelected]="selector.getRowSelected(row)"
              [innerWidth]="innerWidth"
              [offsetX]="offsetX"
              [columns]="columns"
              [rowHeight]="getRowHeight(row)"
              [row]="row"
              [group]="group.value"
              [rowIndex]="getRowIndex(row)"
              [expanded]="getRowExpanded(row)"
              [rowClass]="rowClass"
              [ghostLoadingIndicator]="ghostLoadingIndicator"
              [draggable]="rowDraggable"
              (activate)="selector.onActivate($event, i)"
              (drop)="drop($event, row, rowElement)"
              (dragover)="dragOver($event, row)"
              (dragenter)="dragEnter($event, row, rowElement)"
              (dragleave)="dragLeave($event, row, rowElement)"
              (dragstart)="drag($event, row, rowElement)"
              (dragend)="dragEnd($event, row)"
            >
            </datatable-body-row>
          </ng-template>
        </datatable-row-wrapper>
        <datatable-summary-row
          role="row"
          *ngIf="summaryRow && summaryPosition === 'bottom'"
          [ngStyle]="getBottomSummaryRowStyles()"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
      </datatable-scroller>
      <ng-container *ngIf="!rows?.length && !loadingIndicator && !ghostLoadingIndicator">
      <div
        class="empty-row"
        *ngIf="!customEmptyContent?.children.length"
        [innerHTML]="emptyMessage"
      ></div>
      <div #customEmptyContent>
        <ng-content select="[empty-content]"></ng-content>
      </div>
      </ng-container>
    </datatable-selection>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.DraggableDirective, selector: "[draggable]", inputs: ["dragEventTarget", "dragModel", "dragX", "dragY"], outputs: ["dragStart", "dragging", "dragEnd"] }, { kind: "component", type: i3.ScrollerComponent, selector: "datatable-scroller", inputs: ["scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth"], outputs: ["scroll"] }, { kind: "component", type: i4.ProgressBarComponent, selector: "datatable-progress" }, { kind: "component", type: i5.DataTableBodyRowComponent, selector: "datatable-body-row", inputs: ["columns", "innerWidth", "expanded", "rowClass", "row", "group", "isSelected", "rowIndex", "displayCheck", "treeStatus", "ghostLoadingIndicator", "disable$", "offsetX", "rowHeight"], outputs: ["activate", "treeAction"] }, { kind: "component", type: i6.DataTableRowWrapperComponent, selector: "datatable-row-wrapper", inputs: ["innerWidth", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "groupedRows", "disableCheck", "rowIndex", "expanded"], outputs: ["rowContextmenu"] }, { kind: "component", type: i7.DataTableSelectionComponent, selector: "datatable-selection", inputs: ["rows", "selected", "selectEnabled", "selectionType", "rowIdentity", "selectCheck", "disableCheck"], outputs: ["activate", "select"] }, { kind: "component", type: i8.DataTableSummaryRowComponent, selector: "datatable-summary-row", inputs: ["rows", "columns", "rowHeight", "offsetX", "innerWidth"] }, { kind: "component", type: i9.DataTableGhostLoaderComponent, selector: "ghost-loader", inputs: ["columns", "pageSize", "rowHeight", "ghostBodyHeight"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DataTableBodyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'datatable-body',
                    template: `
    <ng-container *ngIf="loadingIndicator">
      <div class="custom-loading-indicator-wrapper">
        <div class="custom-loading-content" #customIndicator>
          <ng-content select="[loading-indicator]"></ng-content>
        </div>
      </div>
      <datatable-progress *ngIf="!customIndicator?.hasChildNodes()"></datatable-progress>
    </ng-container>
    <ghost-loader
      *ngIf="ghostLoadingIndicator && (!rowCount || !virtualization || !scrollbarV)"
      class="ghost-overlay"
      [columns]="columns"
      [pageSize]="pageSize"
      [rowHeight]="rowHeight"
      [ghostBodyHeight]="bodyHeight"
    >
    </ghost-loader>
    <datatable-selection
      #selector
      [selected]="selected"
      [rows]="rows"
      [selectCheck]="selectCheck"
      [disableCheck]="disableRowCheck"
      [selectEnabled]="selectEnabled"
      [selectionType]="selectionType"
      [rowIdentity]="rowIdentity"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
    >
      <datatable-scroller
        *ngIf="rows?.length"
        [scrollbarV]="scrollbarV"
        [scrollbarH]="scrollbarH"
        [scrollHeight]="scrollHeight"
        [scrollWidth]="columnGroupWidths?.total"
        (scroll)="onBodyScroll($event)"
      >
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'top'"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
        <datatable-row-wrapper
          #rowWrapper
          [groupedRows]="groupedRows"
          *ngFor="let group of temp; let i = index; trackBy: rowTrackingFn"
          [innerWidth]="innerWidth"
          [ngStyle]="getRowsStyles(group, indexes.first + i )"
          [rowDetail]="rowDetail"
          [groupHeader]="groupHeader"
          [offsetX]="offsetX"
          [detailRowHeight]="getDetailRowHeight(group && group[i], i)"
          [row]="group"
          [disableCheck]="disableRowCheck"
          [expanded]="getRowExpanded(group)"
          [rowIndex]="getRowIndex(group && group[i])"
          (rowContextmenu)="rowContextmenu.emit($event)"
        >
          <datatable-body-row
            role="row"
            *ngIf="!groupedRows; else groupedRowsTemplate"
            tabindex="-1"
            #rowElement
            [disable$]="rowWrapper.disable$"
            [isSelected]="selector.getRowSelected(group)"
            [innerWidth]="innerWidth"
            [offsetX]="offsetX"
            [columns]="columns"
            [rowHeight]="getRowHeight(group)"
            [row]="group"
            [rowIndex]="getRowIndex(group)"
            [expanded]="getRowExpanded(group)"
            [rowClass]="rowClass"
            [displayCheck]="displayCheck"
            [treeStatus]="group && group.treeStatus"
            [ghostLoadingIndicator]="ghostLoadingIndicator"
            [draggable]="rowDraggable"
            (treeAction)="onTreeAction(group)"
            (activate)="selector.onActivate($event, indexes.first + i)"
            (drop)="drop($event, group, rowElement)"
            (dragover)="dragOver($event, group)"
            (dragenter)="dragEnter($event, group, rowElement)"
            (dragleave)="dragLeave($event, group, rowElement)"
            (dragstart)="drag($event, group, rowElement)"
            (dragend)="dragEnd($event, group)"
          >
          </datatable-body-row>
          <ng-template #groupedRowsTemplate>
            <datatable-body-row
              role="row"
              [disable$]="rowWrapper.disable$"
              *ngFor="let row of group.value; let i = index; trackBy: rowTrackingFn"
              tabindex="-1"
              #rowElement
              [isSelected]="selector.getRowSelected(row)"
              [innerWidth]="innerWidth"
              [offsetX]="offsetX"
              [columns]="columns"
              [rowHeight]="getRowHeight(row)"
              [row]="row"
              [group]="group.value"
              [rowIndex]="getRowIndex(row)"
              [expanded]="getRowExpanded(row)"
              [rowClass]="rowClass"
              [ghostLoadingIndicator]="ghostLoadingIndicator"
              [draggable]="rowDraggable"
              (activate)="selector.onActivate($event, i)"
              (drop)="drop($event, row, rowElement)"
              (dragover)="dragOver($event, row)"
              (dragenter)="dragEnter($event, row, rowElement)"
              (dragleave)="dragLeave($event, row, rowElement)"
              (dragstart)="drag($event, row, rowElement)"
              (dragend)="dragEnd($event, row)"
            >
            </datatable-body-row>
          </ng-template>
        </datatable-row-wrapper>
        <datatable-summary-row
          role="row"
          *ngIf="summaryRow && summaryPosition === 'bottom'"
          [ngStyle]="getBottomSummaryRowStyles()"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
      </datatable-scroller>
      <ng-container *ngIf="!rows?.length && !loadingIndicator && !ghostLoadingIndicator">
      <div
        class="empty-row"
        *ngIf="!customEmptyContent?.children.length"
        [innerHTML]="emptyMessage"
      ></div>
      <div #customEmptyContent>
        <ng-content select="[empty-content]"></ng-content>
      </div>
      </ng-container>
    </datatable-selection>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'datatable-body'
                    }
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { scrollbarV: [{
                type: Input
            }], scrollbarH: [{
                type: Input
            }], loadingIndicator: [{
                type: Input
            }], ghostLoadingIndicator: [{
                type: Input
            }], externalPaging: [{
                type: Input
            }], rowHeight: [{
                type: Input
            }], offsetX: [{
                type: Input
            }], emptyMessage: [{
                type: Input
            }], selectionType: [{
                type: Input
            }], selected: [{
                type: Input
            }], rowIdentity: [{
                type: Input
            }], rowDetail: [{
                type: Input
            }], groupHeader: [{
                type: Input
            }], selectCheck: [{
                type: Input
            }], displayCheck: [{
                type: Input
            }], trackByProp: [{
                type: Input
            }], rowClass: [{
                type: Input
            }], groupedRows: [{
                type: Input
            }], groupExpansionDefault: [{
                type: Input
            }], innerWidth: [{
                type: Input
            }], groupRowsBy: [{
                type: Input
            }], virtualization: [{
                type: Input
            }], summaryRow: [{
                type: Input
            }], summaryPosition: [{
                type: Input
            }], summaryHeight: [{
                type: Input
            }], rowDraggable: [{
                type: Input
            }], rowDragEvents: [{
                type: Input
            }], disableRowCheck: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], rows: [{
                type: Input
            }], columns: [{
                type: Input
            }], offset: [{
                type: Input
            }], rowCount: [{
                type: Input
            }], bodyWidth: [{
                type: HostBinding,
                args: ['style.width']
            }], bodyHeight: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['style.height']
            }], scroll: [{
                type: Output
            }], page: [{
                type: Output
            }], activate: [{
                type: Output
            }], select: [{
                type: Output
            }], detailToggle: [{
                type: Output
            }], rowContextmenu: [{
                type: Output
            }], treeAction: [{
                type: Output
            }], scroller: [{
                type: ViewChild,
                args: [ScrollerComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0YXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy9ib2R5L2JvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7O0FBNEpwRCxNQUFNLE9BQU8sc0JBQXNCO0lBS2pDLElBQWEscUJBQXFCLENBQUMsR0FBWTtRQUM3QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUiw0REFBNEQ7WUFDNUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7SUFBQSxDQUFDO0lBQ0YsSUFBSSxxQkFBcUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQztJQTBCRCxJQUFhLFFBQVEsQ0FBQyxHQUFXO1FBQy9CLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIs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Z2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Nyb2xsZXJDb21wb25lbnQgfSBmcm9tICcuL3Njcm9sbGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2VsZWN0aW9uLnR5cGUnO1xuaW1wb3J0IHsgY29sdW1uR3JvdXBXaWR0aHMsIGNvbHVtbnNCeVBpbiB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbHVtbic7XG5pbXBvcnQgeyBSb3dIZWlnaHRDYWNoZSB9IGZyb20gJy4uLy4uL3V0aWxzL3Jvdy1oZWlnaHQtY2FjaGUnO1xuaW1wb3J0IHsgdHJhbnNsYXRlWFkgfSBmcm9tICcuLi8uLi91dGlscy90cmFuc2xhdGUnO1xuaW1wb3J0IHsgRHJhZ0V2ZW50RGF0YSB9IGZyb20gJy4uLy4uL3R5cGVzL2RyYWctZXZlbnRzLnR5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhdGFibGUtYm9keScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRpbmdJbmRpY2F0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tbG9hZGluZy1pbmRpY2F0b3Itd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWxvYWRpbmctY29udGVudFwiICNjdXN0b21JbmRpY2F0b3I+XG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2xvYWRpbmctaW5kaWNhdG9yXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkYXRhdGFibGUtcHJvZ3Jlc3MgKm5nSWY9XCIhY3VzdG9tSW5kaWNhdG9yPy5oYXNDaGlsZE5vZGVzKClcIj48L2RhdGF0YWJsZS1wcm9ncmVzcz5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8Z2hvc3QtbG9hZGVyXG4gICAgICAqbmdJZj1cImdob3N0TG9hZGluZ0luZGljYXRvciAmJiAoIXJvd0NvdW50IHx8ICF2aXJ0dWFsaXphdGlvbiB8fCAhc2Nyb2xsYmFyVilcIlxuICAgICAgY2xhc3M9XCJnaG9zdC1vdmVybGF5XCJcbiAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgW3BhZ2VTaXplXT1cInBhZ2VTaXplXCJcbiAgICAgIFtyb3dIZWlnaHRdPVwicm93SGVpZ2h0XCJcbiAgICAgIFtnaG9zdEJvZHlIZWlnaHRdPVwiYm9keUhlaWdodFwiXG4gICAgPlxuICAgIDwvZ2hvc3QtbG9hZGVyPlxuICAgIDxkYXRhdGFibGUtc2VsZWN0aW9uXG4gICAgICAjc2VsZWN0b3JcbiAgICAgIFtzZWxlY3RlZF09XCJzZWxlY3RlZFwiXG4gICAgICBbcm93c109XCJyb3dzXCJcbiAgICAgIFtzZWxlY3RDaGVja109XCJzZWxlY3RDaGVja1wiXG4gICAgICBbZGlzYWJsZUNoZWNrXT1cImRpc2FibGVSb3dDaGVja1wiXG4gICAgICBbc2VsZWN0RW5hYmxlZF09XCJzZWxlY3RFbmFibGVkXCJcbiAgICAgIFtzZWxlY3Rpb25UeXBlXT1cInNlbGVjdGlvblR5cGVcIlxuICAgICAgW3Jvd0lkZW50aXR5XT1cInJvd0lkZW50aXR5XCJcbiAgICAgIChzZWxlY3QpPVwic2VsZWN0LmVtaXQoJGV2ZW50KVwiXG4gICAgICAoYWN0aXZhdGUpPVwiYWN0aXZhdGUuZW1pdCgkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8ZGF0YXRhYmxlLXNjcm9sbGVyXG4gICAgICAgICpuZ0lmPVwicm93cz8ubGVuZ3RoXCJcbiAgICAgICAgW3Njcm9sbGJhclZdPVwic2Nyb2xsYmFyVlwiXG4gICAgICAgIFtzY3JvbGxiYXJIXT1cInNjcm9sbGJhckhcIlxuICAgICAgICBbc2Nyb2xsSGVpZ2h0XT1cInNjcm9sbEhlaWdodFwiXG4gICAgICAgIFtzY3JvbGxXaWR0aF09XCJjb2x1bW5Hcm91cFdpZHRocz8udG90YWxcIlxuICAgICAgICAoc2Nyb2xsKT1cIm9uQm9keVNjcm9sbCgkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgICAgPGRhdGF0YWJsZS1zdW1tYXJ5LXJvd1xuICAgICAgICAgICpuZ0lmPVwic3VtbWFyeVJvdyAmJiBzdW1tYXJ5UG9zaXRpb24gPT09ICd0b3AnXCJcbiAgICAgICAgICBbcm93SGVpZ2h0XT1cInN1bW1hcnlIZWlnaHRcIlxuICAgICAgICAgIFtvZmZzZXRYXT1cIm9mZnNldFhcIlxuICAgICAgICAgIFtpbm5lcldpZHRoXT1cImlubmVyV2lkdGhcIlxuICAgICAgICAgIFtyb3dzXT1cInJvd3NcIlxuICAgICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgICA+XG4gICAgICAgIDwvZGF0YXRhYmxlLXN1bW1hcnktcm93PlxuICAgICAgICA8ZGF0YXRhYmxlLXJvdy13cmFwcGVyXG4gICAgICAgICAgI3Jvd1dyYXBwZXJcbiAgICAgICAgICBbZ3JvdXBlZFJvd3NdPVwiZ3JvdXBlZFJvd3NcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBncm91cCBvZiB0ZW1wOyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiByb3dUcmFja2luZ0ZuXCJcbiAgICAgICAgICBbaW5uZXJXaWR0aF09XCJpbm5lcldpZHRoXCJcbiAgICAgICAgICBbbmdTdHlsZV09XCJnZXRSb3dzU3R5bGVzKGdyb3VwLCBpbmRleGVzLmZpcnN0ICsgaSApXCJcbiAgICAgICAgICBbcm93RGV0YWlsXT1cInJvd0RldGFpbFwiXG4gICAgICAgICAgW2dyb3VwSGVhZGVyXT1cImdyb3VwSGVhZGVyXCJcbiAgICAgICAgICBbb2Zmc2V0WF09XCJvZmZzZXRYXCJcbiAgICAgICAgICBbZGV0YWlsUm93SGVpZ2h0XT1cImdldERldGFpbFJvd0hlaWdodChncm91cCAmJiBncm91cFtpXSwgaSlcIlxuICAgICAgICAgIFtyb3ddPVwiZ3JvdXBcIlxuICAgICAgICAgIFtkaXNhYmxlQ2hlY2tdPVwiZGlzYWJsZVJvd0NoZWNrXCJcbiAgICAgICAgICBbZXhwYW5kZWRdPVwiZ2V0Um93RXhwYW5kZWQoZ3JvdXApXCJcbiAgICAgICAgICBbcm93SW5kZXhdPVwiZ2V0Um93SW5kZXgoZ3JvdXAgJiYgZ3JvdXBbaV0pXCJcbiAgICAgICAgICAocm93Q29udGV4dG1lbnUpPVwicm93Q29udGV4dG1lbnUuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkYXRhdGFibGUtYm9keS1yb3dcbiAgICAgICAgICAgIHJvbGU9XCJyb3dcIlxuICAgICAgICAgICAgKm5nSWY9XCIhZ3JvdXBlZFJvd3M7IGVsc2UgZ3JvdXBlZFJvd3NUZW1wbGF0ZVwiXG4gICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICNyb3dFbGVtZW50XG4gICAgICAgICAgICBbZGlzYWJsZSRdPVwicm93V3JhcHBlci5kaXNhYmxlJFwiXG4gICAgICAgICAgICBbaXNTZWxlY3RlZF09XCJzZWxlY3Rvci5nZXRSb3dTZWxlY3RlZChncm91cClcIlxuICAgICAgICAgICAgW2lubmVyV2lkdGhdPVwiaW5uZXJXaWR0aFwiXG4gICAgICAgICAgICBbb2Zmc2V0WF09XCJvZmZzZXRYXCJcbiAgICAgICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgICAgICAgW3Jvd0hlaWdodF09XCJnZXRSb3dIZWlnaHQoZ3JvdXApXCJcbiAgICAgICAgICAgIFtyb3ddPVwiZ3JvdXBcIlxuICAgICAgICAgICAgW3Jvd0luZGV4XT1cImdldFJvd0luZGV4KGdyb3VwKVwiXG4gICAgICAgICAgICBbZXhwYW5kZWRdPVwiZ2V0Um93RXhwYW5kZWQoZ3JvdXApXCJcbiAgICAgICAgICAgIFtyb3dDbGFzc109XCJyb3dDbGFzc1wiXG4gICAgICAgICAgICBbZGlzcGxheUNoZWNrXT1cImRpc3BsYXlDaGVja1wiXG4gICAgICAgICAgICBbdHJlZVN0YXR1c109XCJncm91cCAmJiBncm91cC50cmVlU3RhdHVzXCJcbiAgICAgICAgICAgIFtnaG9zdExvYWRpbmdJbmRpY2F0b3JdPVwiZ2hvc3RMb2FkaW5nSW5kaWNhdG9yXCJcbiAgICAgICAgICAgIFtkcmFnZ2FibGVdPVwicm93RHJhZ2dhYmxlXCJcbiAgICAgICAgICAgICh0cmVlQWN0aW9uKT1cIm9uVHJlZUFjdGlvbihncm91cClcIlxuICAgICAgICAgICAgKGFjdGl2YXRlKT1cInNlbGVjdG9yLm9uQWN0aXZhdGUoJGV2ZW50LCBpbmRleGVzLmZpcnN0ICsgaSlcIlxuICAgICAgICAgICAgKGRyb3ApPVwiZHJvcCgkZXZlbnQsIGdyb3VwLCByb3dFbGVtZW50KVwiXG4gICAgICAgICAgICAoZHJhZ292ZXIpPVwiZHJhZ092ZXIoJGV2ZW50LCBncm91cClcIlxuICAgICAgICAgICAgKGRyYWdlbnRlcik9XCJkcmFnRW50ZXIoJGV2ZW50LCBncm91cCwgcm93RWxlbWVudClcIlxuICAgICAgICAgICAgKGRyYWdsZWF2ZSk9XCJkcmFnTGVhdmUoJGV2ZW50LCBncm91cCwgcm93RWxlbWVudClcIlxuICAgICAgICAgICAgKGRyYWdzdGFydCk9XCJkcmFnKCRldmVudCwgZ3JvdXAsIHJvd0VsZW1lbnQpXCJcbiAgICAgICAgICAgIChkcmFnZW5kKT1cImRyYWdFbmQoJGV2ZW50LCBncm91cClcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L2RhdGF0YWJsZS1ib2R5LXJvdz5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI2dyb3VwZWRSb3dzVGVtcGxhdGU+XG4gICAgICAgICAgICA8ZGF0YXRhYmxlLWJvZHktcm93XG4gICAgICAgICAgICAgIHJvbGU9XCJyb3dcIlxuICAgICAgICAgICAgICBbZGlzYWJsZSRdPVwicm93V3JhcHBlci5kaXNhYmxlJFwiXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCByb3cgb2YgZ3JvdXAudmFsdWU7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHJvd1RyYWNraW5nRm5cIlxuICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgI3Jvd0VsZW1lbnRcbiAgICAgICAgICAgICAgW2lzU2VsZWN0ZWRdPVwic2VsZWN0b3IuZ2V0Um93U2VsZWN0ZWQocm93KVwiXG4gICAgICAgICAgICAgIFtpbm5lcldpZHRoXT1cImlubmVyV2lkdGhcIlxuICAgICAgICAgICAgICBbb2Zmc2V0WF09XCJvZmZzZXRYXCJcbiAgICAgICAgICAgICAgW2NvbHVtbnNdPVwiY29sdW1uc1wiXG4gICAgICAgICAgICAgIFtyb3dIZWlnaHRdPVwiZ2V0Um93SGVpZ2h0KHJvdylcIlxuICAgICAgICAgICAgICBbcm93XT1cInJvd1wiXG4gICAgICAgICAgICAgIFtncm91cF09XCJncm91cC52YWx1ZVwiXG4gICAgICAgICAgICAgIFtyb3dJbmRleF09XCJnZXRSb3dJbmRleChyb3cpXCJcbiAgICAgICAgICAgICAgW2V4cGFuZGVkXT1cImdldFJvd0V4cGFuZGVkKHJvdylcIlxuICAgICAgICAgICAgICBbcm93Q2xhc3NdPVwicm93Q2xhc3NcIlxuICAgICAgICAgICAgICBbZ2hvc3RMb2FkaW5nSW5kaWNhdG9yXT1cImdob3N0TG9hZGluZ0luZGljYXRvclwiXG4gICAgICAgICAgICAgIFtkcmFnZ2FibGVdPVwicm93RHJhZ2dhYmxlXCJcbiAgICAgICAgICAgICAgKGFjdGl2YXRlKT1cInNlbGVjdG9yLm9uQWN0aXZhdGUoJGV2ZW50LCBpKVwiXG4gICAgICAgICAgICAgIChkcm9wKT1cImRyb3AoJGV2ZW50LCByb3csIHJvd0VsZW1lbnQpXCJcbiAgICAgICAgICAgICAgKGRyYWdvdmVyKT1cImRyYWdPdmVyKCRldmVudCwgcm93KVwiXG4gICAgICAgICAgICAgIChkcmFnZW50ZXIpPVwiZHJhZ0VudGVyKCRldmVudCwgcm93LCByb3dFbGVtZW50KVwiXG4gICAgICAgICAgICAgIChkcmFnbGVhdmUpPVwiZHJhZ0xlYXZlKCRldmVudCwgcm93LCByb3dFbGVtZW50KVwiXG4gICAgICAgICAgICAgIChkcmFnc3RhcnQpPVwiZHJhZygkZXZlbnQsIHJvdywgcm93RWxlbWVudClcIlxuICAgICAgICAgICAgICAoZHJhZ2VuZCk9XCJkcmFnRW5kKCRldmVudCwgcm93KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2RhdGF0YWJsZS1ib2R5LXJvdz5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2RhdGF0YWJsZS1yb3ctd3JhcHBlcj5cbiAgICAgICAgPGRhdGF0YWJsZS1zdW1tYXJ5LXJvd1xuICAgICAgICAgIHJvbGU9XCJyb3dcIlxuICAgICAgICAgICpuZ0lmPVwic3VtbWFyeVJvdyAmJiBzdW1tYXJ5UG9zaXRpb24gPT09ICdib3R0b20nXCJcbiAgICAgICAgICBbbmdTdHlsZV09XCJnZXRCb3R0b21TdW1tYXJ5Um93U3R5bGVzKClcIlxuICAgICAgICAgIFtyb3dIZWlnaHRdPVwic3VtbWFyeUhlaWdodFwiXG4gICAgICAgICAgW29mZnNldFhdPVwib2Zmc2V0WFwiXG4gICAgICAgICAgW2lubmVyV2lkdGhdPVwiaW5uZXJXaWR0aFwiXG4gICAgICAgICAgW3Jvd3NdPVwicm93c1wiXG4gICAgICAgICAgW2NvbHVtbnNdPVwiY29sdW1uc1wiXG4gICAgICAgID5cbiAgICAgICAgPC9kYXRhdGFibGUtc3VtbWFyeS1yb3c+XG4gICAgICA8L2RhdGF0YWJsZS1zY3JvbGxlcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcm93cz8ubGVuZ3RoICYmICFsb2FkaW5nSW5kaWNhdG9yICYmICFnaG9zdExvYWRpbmdJbmRpY2F0b3JcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJlbXB0eS1yb3dcIlxuICAgICAgICAqbmdJZj1cIiFjdXN0b21FbXB0eUNvbnRlbnQ/LmNoaWxkcmVuLmxlbmd0aFwiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiZW1wdHlNZXNzYWdlXCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXYgI2N1c3RvbUVtcHR5Q29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2VtcHR5LWNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2RhdGF0YWJsZS1zZWxlY3Rpb24+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdkYXRhdGFibGUtYm9keSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVCb2R5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBzY3JvbGxiYXJWOiBib29sZWFuO1xuICBASW5wdXQoKSBzY3JvbGxiYXJIOiBib29sZWFuO1xuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBib29sZWFuO1xuICBwcml2YXRlIF9naG9zdExvYWRpbmdJbmRpY2F0b3I6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNldCBnaG9zdExvYWRpbmdJbmRpY2F0b3IodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZ2hvc3RMb2FkaW5nSW5kaWNhdG9yID0gdmFsO1xuICAgIGlmICghdmFsKSB7XG4gICAgICAvLyByZW1vdmUgcGxhY2Vob2xkZXIgcm93cyBvbmNlIGdob3N0bG9hZGluZyBpcyBzZXQgdG8gZmFsc2VcbiAgICAgIHRoaXMudGVtcCA9IHRoaXMudGVtcC5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgZ2V0IGdob3N0TG9hZGluZ0luZGljYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2hvc3RMb2FkaW5nSW5kaWNhdG9yO1xuICB9XG4gIEBJbnB1dCgpIGV4dGVybmFsUGFnaW5nOiBib29sZWFuO1xuICBASW5wdXQoKSByb3dIZWlnaHQ6IG51bWJlciB8ICdhdXRvJyB8ICgocm93PzogYW55KSA9PiBudW1iZXIpO1xuICBASW5wdXQoKSBvZmZzZXRYOiBudW1iZXI7XG4gIEBJbnB1dCgpIGVtcHR5TWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlO1xuICBASW5wdXQoKSBzZWxlY3RlZDogYW55W10gPSBbXTtcbiAgQElucHV0KCkgcm93SWRlbnRpdHk6IGFueTtcbiAgQElucHV0KCkgcm93RGV0YWlsOiBhbnk7XG4gIEBJbnB1dCgpIGdyb3VwSGVhZGVyOiBhbnk7XG4gIEBJbnB1dCgpIHNlbGVjdENoZWNrOiBhbnk7XG4gIEBJbnB1dCgpIGRpc3BsYXlDaGVjazogYW55O1xuICBASW5wdXQoKSB0cmFja0J5UHJvcDogc3RyaW5nO1xuICBASW5wdXQoKSByb3dDbGFzczogYW55O1xuICBASW5wdXQoKSBncm91cGVkUm93czogYW55O1xuICBASW5wdXQoKSBncm91cEV4cGFuc2lvbkRlZmF1bHQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlubmVyV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgZ3JvdXBSb3dzQnk6IHN0cmluZztcbiAgQElucHV0KCkgdmlydHVhbGl6YXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN1bW1hcnlSb3c6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN1bW1hcnlQb3NpdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBzdW1tYXJ5SGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIHJvd0RyYWdnYWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgcm93RHJhZ0V2ZW50czogRXZlbnRFbWl0dGVyPERyYWdFdmVudERhdGE+O1xuICBASW5wdXQoKSBkaXNhYmxlUm93Q2hlY2s6IChyb3c6IGFueSkgPT4gYm9vbGVhbjtcblxuICBASW5wdXQoKSBzZXQgcGFnZVNpemUodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLl9wYWdlU2l6ZSkge1xuICAgICAgdGhpcy5fcGFnZVNpemUgPSB2YWw7XG4gICAgICB0aGlzLnJlY2FsY0xheW91dCgpO1xuXG4gICAgICAvLyBFbWl0cyB0aGUgcGFnZSBldmVudCBpZiBwYWdlIHNpemUgaGFzIGJlZW4gY2hhbmdlZFxuICAgICAgdGhpcy5fb2Zmc2V0RXZlbnQgPSAtMTtcbiAgICAgIHRoaXMudXBkYXRlUGFnZSgndXAnKTtcbiAgICAgIHRoaXMudXBkYXRlUGFnZSgnZG93bicpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBwYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCByb3dzKHZhbDogYW55W10pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLl9yb3dzKSB7XG4gICAgICB0aGlzLl9yb3dzID0gdmFsO1xuICAgICAgdGhpcy5yZWNhbGNMYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcm93cygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvd3M7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgY29sdW1ucyh2YWw6IGFueVtdKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fY29sdW1ucykge1xuICAgICAgdGhpcy5fY29sdW1ucyA9IHZhbDtcbiAgICAgIGNvbnN0IGNvbHNCeVBpbiA9IGNvbHVtbnNCeVBpbih2YWwpO1xuICAgICAgdGhpcy5jb2x1bW5Hcm91cFdpZHRocyA9IGNvbHVtbkdyb3VwV2lkdGhzKGNvbHNCeVBpbiwgdmFsKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY29sdW1ucygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgb2Zmc2V0KHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fb2Zmc2V0KSB7XG4gICAgICB0aGlzLl9vZmZzZXQgPSB2YWw7XG4gICAgICBpZiAoIXRoaXMuc2Nyb2xsYmFyViB8fCAodGhpcy5zY3JvbGxiYXJWICYmICF0aGlzLnZpcnR1YWxpemF0aW9uKSkge1xuICAgICAgICBpZiAoIWlzTmFOKHRoaXMuX29mZnNldCkgJiYgdGhpcy5naG9zdExvYWRpbmdJbmRpY2F0b3IpIHtcbiAgICAgICAgICB0aGlzLnJvd3MgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlY2FsY0xheW91dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBvZmZzZXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0O1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHJvd0NvdW50KHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fcm93Q291bnQpIHtcbiAgICAgIHRoaXMuX3Jvd0NvdW50ID0gdmFsO1xuICAgICAgdGhpcy5yZWNhbGNMYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcm93Q291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcm93Q291bnQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJylcbiAgZ2V0IGJvZHlXaWR0aCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnNjcm9sbGJhckgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlubmVyV2lkdGggKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJzEwMCUnO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JylcbiAgc2V0IGJvZHlIZWlnaHQodmFsKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyVikge1xuICAgICAgdGhpcy5fYm9keUhlaWdodCA9IHZhbCArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2JvZHlIZWlnaHQgPSAnYXV0byc7XG4gICAgfVxuXG4gICAgdGhpcy5yZWNhbGNMYXlvdXQoKTtcbiAgfVxuXG4gIGdldCBib2R5SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9ib2R5SGVpZ2h0O1xuICB9XG5cbiAgQE91dHB1dCgpIHNjcm9sbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwYWdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkZXRhaWxUb2dnbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcm93Q29udGV4dG1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IE1vdXNlRXZlbnQ7IHJvdzogYW55IH0+KGZhbHNlKTtcbiAgQE91dHB1dCgpIHRyZWVBY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoU2Nyb2xsZXJDb21wb25lbnQpIHNjcm9sbGVyOiBTY3JvbGxlckNvbXBvbmVudDtcblxuICAvKipcbiAgICogUmV0dXJucyBpZiBzZWxlY3Rpb24gaXMgZW5hYmxlZC5cbiAgICovXG4gIGdldCBzZWxlY3RFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuc2VsZWN0aW9uVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0aGF0IHdvdWxkIGNhbGN1bGF0ZSB0aGUgaGVpZ2h0IG9mIHNjcm9sbCBiYXJcbiAgICogYmFzZWQgb24gdGhlIHJvdyBoZWlnaHRzIGNhY2hlIGZvciB2aXJ0dWFsIHNjcm9sbCBhbmQgdmlydHVhbGl6YXRpb24uIE90aGVyIHNjZW5hcmlvc1xuICAgKiBjYWxjdWxhdGUgc2Nyb2xsIGhlaWdodCBhdXRvbWF0aWNhbGx5IChhcyBoZWlnaHQgd2lsbCBiZSB1bmRlZmluZWQpLlxuICAgKi9cbiAgZ2V0IHNjcm9sbEhlaWdodCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnNjcm9sbGJhclYgJiYgdGhpcy52aXJ0dWFsaXphdGlvbiAmJiB0aGlzLnJvd0NvdW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5yb3dIZWlnaHRzQ2FjaGUucXVlcnkodGhpcy5yb3dDb3VudCAtIDEpO1xuICAgIH1cbiAgICAvLyBhdm9pZCBUUzcwMzA6IE5vdCBhbGwgY29kZSBwYXRocyByZXR1cm4gYSB2YWx1ZS5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcm93SGVpZ2h0c0NhY2hlOiBSb3dIZWlnaHRDYWNoZSA9IG5ldyBSb3dIZWlnaHRDYWNoZSgpO1xuICB0ZW1wOiBhbnlbXSA9IFtdO1xuICBvZmZzZXRZID0gMDtcbiAgaW5kZXhlczogYW55ID0ge307XG4gIGNvbHVtbkdyb3VwV2lkdGhzOiBhbnk7XG4gIGNvbHVtbkdyb3VwV2lkdGhzV2l0aG91dEdyb3VwOiBhbnk7XG4gIHJvd1RyYWNraW5nRm46IGFueTtcbiAgbGlzdGVuZXI6IGFueTtcbiAgcm93SW5kZXhlczogYW55ID0gbmV3IFdlYWtNYXA8YW55LCBzdHJpbmc+KCk7XG4gIHJvd0V4cGFuc2lvbnM6IGFueVtdID0gW107XG5cbiAgX3Jvd3M6IGFueVtdO1xuICBfYm9keUhlaWdodDogYW55O1xuICBfY29sdW1uczogYW55W107XG4gIF9yb3dDb3VudDogbnVtYmVyO1xuICBfb2Zmc2V0OiBudW1iZXI7XG4gIF9wYWdlU2l6ZTogbnVtYmVyO1xuICBfb2Zmc2V0RXZlbnQgPSAtMTtcblxuICBwcml2YXRlIF9kcmFnZ2VkUm93OiBhbnk7XG4gIHByaXZhdGUgX2RyYWdnZWRSb3dFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBEYXRhVGFibGVCb2R5Q29tcG9uZW50LlxuICAgKi9cbiAgY29uc3RydWN0b3IocHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIC8vIGRlY2xhcmUgZm4gaGVyZSBzbyB3ZSBjYW4gZ2V0IGFjY2VzcyB0byB0aGUgYHRoaXNgIHByb3BlcnR5XG4gICAgdGhpcy5yb3dUcmFja2luZ0ZuID0gKGluZGV4OiBudW1iZXIsIHJvdzogYW55KTogYW55ID0+IHtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuZ2V0Um93SW5kZXgocm93KTtcbiAgICAgIGlmICh0aGlzLnRyYWNrQnlQcm9wKSB7XG4gICAgICAgIHJldHVybiByb3dbdGhpcy50cmFja0J5UHJvcF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGFmdGVyIHRoZSBjb25zdHJ1Y3RvciwgaW5pdGlhbGl6aW5nIGlucHV0IHByb3BlcnRpZXNcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvd0RldGFpbCkge1xuICAgICAgdGhpcy5saXN0ZW5lciA9IHRoaXMucm93RGV0YWlsLnRvZ2dsZS5zdWJzY3JpYmUoKHsgdHlwZSwgdmFsdWUgfTogeyB0eXBlOiBzdHJpbmc7IHZhbHVlOiBhbnkgfSkgPT4ge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3JvdycpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVJvd0V4cGFuc2lvbih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdhbGwnKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVBbGxSb3dzKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlZnJlc2ggcm93cyBhZnRlciB0b2dnbGVcbiAgICAgICAgLy8gRml4ZXMgIzg4M1xuICAgICAgICB0aGlzLnVwZGF0ZUluZGV4ZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVSb3dzKCk7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ncm91cEhlYWRlcikge1xuICAgICAgdGhpcy5saXN0ZW5lciA9IHRoaXMuZ3JvdXBIZWFkZXIudG9nZ2xlLnN1YnNjcmliZSgoeyB0eXBlLCB2YWx1ZSB9OiB7IHR5cGU6IHN0cmluZzsgdmFsdWU6IGFueSB9KSA9PiB7XG4gICAgICAgIGlmICh0eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVSb3dFeHBhbnNpb24odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnYWxsJykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQWxsUm93cyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWZyZXNoIHJvd3MgYWZ0ZXIgdG9nZ2xlXG4gICAgICAgIC8vIEZpeGVzICM4ODNcbiAgICAgICAgdGhpcy51cGRhdGVJbmRleGVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUm93cygpO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbmNlLCBiZWZvcmUgdGhlIGluc3RhbmNlIGlzIGRlc3Ryb3llZC5cbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvd0RldGFpbCB8fCB0aGlzLmdyb3VwSGVhZGVyKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIFkgb2Zmc2V0IGdpdmVuIGEgbmV3IG9mZnNldC5cbiAgICovXG4gIHVwZGF0ZU9mZnNldFkob2Zmc2V0PzogbnVtYmVyKTogdm9pZCB7XG4gICAgLy8gc2Nyb2xsZXIgaXMgbWlzc2luZyBvbiBlbXB0eSB0YWJsZVxuICAgIGlmICghdGhpcy5zY3JvbGxlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjcm9sbGJhclYgJiYgdGhpcy52aXJ0dWFsaXphdGlvbiAmJiBvZmZzZXQpIHtcbiAgICAgIC8vIEZpcnN0IGdldCB0aGUgcm93IEluZGV4IHRoYXQgd2UgbmVlZCB0byBtb3ZlIHRvLlxuICAgICAgY29uc3Qgcm93SW5kZXggPSB0aGlzLnBhZ2VTaXplICogb2Zmc2V0O1xuICAgICAgb2Zmc2V0ID0gdGhpcy5yb3dIZWlnaHRzQ2FjaGUucXVlcnkocm93SW5kZXggLSAxKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsYmFyViAmJiAhdGhpcy52aXJ0dWFsaXphdGlvbikge1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbGVyLnNldE9mZnNldChvZmZzZXQgfHwgMCk7XG4gIH1cblxuICAvKipcbiAgICogQm9keSB3YXMgc2Nyb2xsZWQsIHRoaXMgaXMgbWFpbmx5IHVzZWZ1bCBmb3JcbiAgICogd2hlbiBhIHVzZXIgaXMgc2VydmVyLXNpZGUgcGFnaW5hdGlvbiB2aWEgdmlydHVhbCBzY3JvbGwuXG4gICAqL1xuICBvbkJvZHlTY3JvbGwoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHNjcm9sbFlQb3M6IG51bWJlciA9IGV2ZW50LnNjcm9sbFlQb3M7XG4gICAgY29uc3Qgc2Nyb2xsWFBvczogbnVtYmVyID0gZXZlbnQuc2Nyb2xsWFBvcztcblxuICAgIC8vIGlmIHNjcm9sbCBjaGFuZ2UsIHRyaWdnZXIgdXBkYXRlXG4gICAgLy8gdGhpcyBpcyBtYWlubHkgdXNlZCBmb3IgaGVhZGVyIGNlbGwgcG9zaXRpb25zXG4gICAgaWYgKHRoaXMub2Zmc2V0WSAhPT0gc2Nyb2xsWVBvcyB8fCB0aGlzLm9mZnNldFggIT09IHNjcm9sbFhQb3MpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmVtaXQoe1xuICAgICAgICBvZmZzZXRZOiBzY3JvbGxZUG9zLFxuICAgICAgICBvZmZzZXRYOiBzY3JvbGxYUG9zXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLm9mZnNldFkgPSBzY3JvbGxZUG9zO1xuICAgIHRoaXMub2Zmc2V0WCA9IHNjcm9sbFhQb3M7XG5cbiAgICB0aGlzLnVwZGF0ZUluZGV4ZXMoKTtcbiAgICB0aGlzLnVwZGF0ZVBhZ2UoZXZlbnQuZGlyZWN0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZVJvd3MoKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBwYWdlIGdpdmVuIGEgZGlyZWN0aW9uLlxuICAgKi9cbiAgdXBkYXRlUGFnZShkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBvZmZzZXQgPSB0aGlzLmluZGV4ZXMuZmlyc3QgLyB0aGlzLnBhZ2VTaXplO1xuICAgIGNvbnN0IHNjcm9sbEluQmV0d2VlbiA9ICFOdW1iZXIuaXNJbnRlZ2VyKG9mZnNldCk7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgb2Zmc2V0ID0gTWF0aC5jZWlsKG9mZnNldCk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgb2Zmc2V0ID0gTWF0aC5mbG9vcihvZmZzZXQpO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gIT09IHVuZGVmaW5lZCAmJiAhaXNOYU4ob2Zmc2V0KSAmJiBvZmZzZXQgIT09IHRoaXMuX29mZnNldEV2ZW50KSB7XG4gICAgICB0aGlzLl9vZmZzZXRFdmVudCA9IG9mZnNldDtcbiAgICAgIC8vIGlmIHNjcm9sbCB3YXMgZG9uZSBieSBtb3VzZSBkcmFnIG1ha2Ugc3VyZSBwcmV2aW91cyByb3cgYW5kIG5leHQgcm93IGRhdGEgaXMgYWxzbyBmZXRjaGVkIGlmIGl0cyBub3QgZmV0Y2hlZFxuICAgICAgaWYgKHNjcm9sbEluQmV0d2VlbiAmJiB0aGlzLnNjcm9sbGJhclYgJiYgdGhpcy52aXJ0dWFsaXphdGlvbiAmJiB0aGlzLmV4dGVybmFsUGFnaW5nKSB7XG4gICAgICAgIGNvbnN0IHVwUm93ID0gdGhpcy5yb3dzW3RoaXMuaW5kZXhlcy5maXJzdCAtIDFdO1xuICAgICAgICBpZiAoIXVwUm93ICYmIGRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgICAgIHRoaXMucGFnZS5lbWl0KHsgb2Zmc2V0OiBvZmZzZXQgLSAxIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZG93blJvdyA9IHRoaXMucm93c1t0aGlzLmluZGV4ZXMuZmlyc3QgKyB0aGlzLnBhZ2VTaXplXTtcbiAgICAgICAgaWYgKCFkb3duUm93ICYmIGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICAgICAgdGhpcy5wYWdlLmVtaXQoeyBvZmZzZXQ6IG9mZnNldCArIDEgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucGFnZS5lbWl0KHsgb2Zmc2V0IH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSByb3dzIGluIHRoZSB2aWV3IHBvcnRcbiAgICovXG4gIHVwZGF0ZVJvd3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gdGhpcy5pbmRleGVzO1xuICAgIGxldCByb3dJbmRleCA9IGZpcnN0O1xuICAgIGxldCBpZHggPSAwO1xuICAgIGNvbnN0IHRlbXA6IGFueVtdID0gW107XG5cbiAgICAvLyBpZiBncm91cHJvd3NieSBoYXMgYmVlbiBzcGVjaWZpZWQgdHJlYXQgcm93IHBhZ2luZ1xuICAgIC8vIHBhcmFtZXRlcnMgYXMgZ3JvdXAgcGFnaW5nIHBhcmFtZXRlcnMgaWUgaWYgbGltaXQgMTAgaGFzIGJlZW5cbiAgICAvLyBzcGVjaWZpZWQgdHJlYXQgaXQgYXMgMTAgZ3JvdXBzIHJhdGhlciB0aGFuIDEwIHJvd3NcbiAgICBpZiAodGhpcy5ncm91cGVkUm93cykge1xuICAgICAgbGV0IG1heFJvd3NQZXJHcm91cCA9IDM7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSBncm91cCBzZXQgdGhlIG1heGltdW0gbnVtYmVyIG9mXG4gICAgICAvLyByb3dzIHBlciBncm91cCB0aGUgc2FtZSBhcyB0aGUgdG90YWwgbnVtYmVyIG9mIHJvd3NcbiAgICAgIGlmICh0aGlzLmdyb3VwZWRSb3dzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBtYXhSb3dzUGVyR3JvdXAgPSB0aGlzLmdyb3VwZWRSb3dzWzBdLnZhbHVlLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHJvd0luZGV4IDwgbGFzdCAmJiByb3dJbmRleCA8IHRoaXMuZ3JvdXBlZFJvd3MubGVuZ3RoKSB7XG4gICAgICAgIC8vIEFkZCB0aGUgZ3JvdXBzIGludG8gdGhpcyBwYWdlXG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5ncm91cGVkUm93c1tyb3dJbmRleF07XG4gICAgICAgIHRoaXMucm93SW5kZXhlcy5zZXQoZ3JvdXAsIHJvd0luZGV4KTtcblxuICAgICAgICBpZiAoZ3JvdXAudmFsdWUpIHtcbiAgICAgICAgICAvLyBhZGQgaW5kZXhlcyBmb3IgZWFjaCBncm91cCBpdGVtXG4gICAgICAgICAgZ3JvdXAudmFsdWUuZm9yRWFjaCgoZzogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IF9pZHggPSBgJHtyb3dJbmRleH0tJHtpfWA7XG4gICAgICAgICAgICB0aGlzLnJvd0luZGV4ZXMuc2V0KGcsIF9pZHgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBbaWR4XSA9IGdyb3VwO1xuICAgICAgICBpZHgrKztcblxuICAgICAgICAvLyBHcm91cCBpbmRleCBpbiB0aGlzIGNvbnRleHRcbiAgICAgICAgcm93SW5kZXgrKztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHJvd0luZGV4IDwgbGFzdCAmJiByb3dJbmRleCA8IHRoaXMucm93Q291bnQpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5yb3dzW3Jvd0luZGV4XTtcblxuICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgLy8gYWRkIGluZGV4ZXMgZm9yIGVhY2ggcm93XG4gICAgICAgICAgdGhpcy5yb3dJbmRleGVzLnNldChyb3csIHJvd0luZGV4KTtcbiAgICAgICAgICB0ZW1wW2lkeF0gPSByb3c7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5naG9zdExvYWRpbmdJbmRpY2F0b3IgJiYgdGhpcy52aXJ0dWFsaXphdGlvbikge1xuICAgICAgICAgIHRlbXBbaWR4XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlkeCsrO1xuICAgICAgICByb3dJbmRleCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGVtcCA9IHRlbXA7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSByb3cgaGVpZ2h0XG4gICAqL1xuICBnZXRSb3dIZWlnaHQocm93OiBhbnkpOiBudW1iZXIge1xuICAgIC8vIGlmIGl0cyBhIGZ1bmN0aW9uIHJldHVybiBpdFxuICAgIGlmICh0eXBlb2YgdGhpcy5yb3dIZWlnaHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvd0hlaWdodChyb3cpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJvd0hlaWdodCBhcyBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGdyb3VwIHRoZSBncm91cCB3aXRoIGFsbCByb3dzXG4gICAqL1xuICBnZXRHcm91cEhlaWdodChncm91cDogYW55KTogbnVtYmVyIHtcbiAgICBsZXQgcm93SGVpZ2h0ID0gMDtcblxuICAgIGlmIChncm91cC52YWx1ZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItZm9yLW9mXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZ3JvdXAudmFsdWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHJvd0hlaWdodCArPSB0aGlzLmdldFJvd0FuZERldGFpbEhlaWdodChncm91cC52YWx1ZVtpbmRleF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByb3dIZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHJvdyBoZWlnaHQgYmFzZWQgb24gdGhlIGV4cGFuZGVkIHN0YXRlIG9mIHRoZSByb3cuXG4gICAqL1xuICBnZXRSb3dBbmREZXRhaWxIZWlnaHQocm93OiBhbnkpOiBudW1iZXIge1xuICAgIGxldCByb3dIZWlnaHQgPSB0aGlzLmdldFJvd0hlaWdodChyb3cpO1xuICAgIGNvbnN0IGV4cGFuZGVkID0gdGhpcy5nZXRSb3dFeHBhbmRlZChyb3cpO1xuXG4gICAgLy8gQWRkaW5nIGRldGFpbCByb3cgaGVpZ2h0IGlmIGl0cyBleHBhbmRlZC5cbiAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIHJvd0hlaWdodCArPSB0aGlzLmdldERldGFpbFJvd0hlaWdodChyb3cpO1xuICAgIH1cblxuICAgIHJldHVybiByb3dIZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBoZWlnaHQgb2YgdGhlIGRldGFpbCByb3cuXG4gICAqL1xuICBnZXREZXRhaWxSb3dIZWlnaHQgPSAocm93PzogYW55LCBpbmRleD86IGFueSk6IG51bWJlciA9PiB7XG4gICAgaWYgKCF0aGlzLnJvd0RldGFpbCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IHJvd0hlaWdodCA9IHRoaXMucm93RGV0YWlsLnJvd0hlaWdodDtcbiAgICByZXR1cm4gdHlwZW9mIHJvd0hlaWdodCA9PT0gJ2Z1bmN0aW9uJyA/IHJvd0hlaWdodChyb3csIGluZGV4KSA6IChyb3dIZWlnaHQgYXMgbnVtYmVyKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgc3R5bGVzIGZvciB0aGUgcm93IHNvIHRoYXQgdGhlIHJvd3MgY2FuIGJlIG1vdmVkIGluIDJEIHNwYWNlXG4gICAqIGR1cmluZyB2aXJ0dWFsIHNjcm9sbCBpbnNpZGUgdGhlIERPTS4gICBJbiB0aGUgYmVsb3cgY2FzZSB0aGUgWSBwb3NpdGlvbiBpc1xuICAgKiBtYW5pcHVsYXRlZC4gICBBcyBhbiBleGFtcGxlLCBpZiB0aGUgaGVpZ2h0IG9mIHJvdyAwIGlzIDMwIHB4IGFuZCByb3cgMSBpc1xuICAgKiAxMDAgcHggdGhlbiBmb2xsb3dpbmcgc3R5bGVzIGFyZSBnZW5lcmF0ZWQ6XG4gICAqXG4gICAqIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7ICAgIC0+ICByb3cwXG4gICAqIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAzMHB4LCAwcHgpOyAgIC0+ICByb3cxXG4gICAqIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAxMzBweCwgMHB4KTsgIC0+ICByb3cyXG4gICAqXG4gICAqIFJvdyBoZWlnaHRzIGhhdmUgdG8gYmUgY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgcm93IGhlaWdodHMgY2FjaGUgYXMgd2Ugd29udFxuICAgKiBiZSBhYmxlIHRvIGRldGVybWluZSB3aGljaCByb3cgaXMgb2Ygd2hhdCBoZWlnaHQgYmVmb3JlIGhhbmQuICBJbiB0aGUgYWJvdmVcbiAgICogY2FzZSB0aGUgcG9zaXRpb25ZIG9mIHRoZSB0cmFuc2xhdGUzZCBmb3Igcm93MiB3b3VsZCBiZSB0aGUgc3VtIG9mIGFsbCB0aGVcbiAgICogaGVpZ2h0cyBvZiB0aGUgcm93cyBiZWZvcmUgaXQgKGkuZS4gcm93MCBhbmQgcm93MSkuXG4gICAqXG4gICAqIEBwYXJhbSByb3dzIHRoZSByb3cgdGhhdCBuZWVkcyB0byBiZSBwbGFjZWQgaW4gdGhlIDJEIHNwYWNlLlxuICAgKiBAcGFyYW0gaW5kZXggZm9yIGdob3N0IGNlbGxzIGluIG9yZGVyIHRvIGdldCBjb3JyZWN0IHBvc2l0aW9uIG9mIGdob3N0IHJvd1xuICAgKiBAcmV0dXJucyB0aGUgQ1NTMyBzdHlsZSB0byBiZSBhcHBsaWVkXG4gICAqXG4gICAqIEBtZW1iZXJPZiBEYXRhVGFibGVCb2R5Q29tcG9uZW50XG4gICAqL1xuICBnZXRSb3dzU3R5bGVzKHJvd3M6IGFueSwgaW5kZXggPSAwKTogYW55IHtcbiAgICBjb25zdCBzdHlsZXM6IGFueSA9IHt9O1xuXG4gICAgLy8gb25seSBhZGQgc3R5bGVzIGZvciB0aGUgZ3JvdXAgaWYgdGhlcmUgaXMgYSBncm91cFxuICAgIGlmICh0aGlzLmdyb3VwZWRSb3dzKSB7XG4gICAgICBzdHlsZXMud2lkdGggPSB0aGlzLmNvbHVtbkdyb3VwV2lkdGhzLnRvdGFsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjcm9sbGJhclYgJiYgdGhpcy52aXJ0dWFsaXphdGlvbikge1xuICAgICAgbGV0IGlkeCA9IDA7XG5cbiAgICAgIGlmICh0aGlzLmdyb3VwZWRSb3dzKSB7XG4gICAgICAgIC8vIEdldCB0aGUgbGF0ZXN0IHJvdyByb3dpbmRleCBpbiBhIGdyb3VwXG4gICAgICAgIGNvbnN0IHJvdyA9IHJvd3Nbcm93cy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWR4ID0gcm93ID8gdGhpcy5nZXRSb3dJbmRleChyb3cpIDogMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyb3dzKSB7XG4gICAgICAgICAgaWR4ID0gdGhpcy5nZXRSb3dJbmRleChyb3dzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBXaGVuIGdob3N0IGNlbGxzIGFyZSBlbmFibGVkIHVzZSBpbmRleCB0byBnZXQgdGhlIHBvc2l0aW9uIG9mIHRoZW1cbiAgICAgICAgICBpZHggPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjb25zdCBwb3MgPSBpZHggKiByb3dIZWlnaHQ7XG4gICAgICAvLyBUaGUgcG9zaXRpb24gb2YgdGhpcyByb3cgd291bGQgYmUgdGhlIHN1bSBvZiBhbGwgcm93IGhlaWdodHNcbiAgICAgIC8vIHVudGlsIHRoZSBwcmV2aW91cyByb3cgcG9zaXRpb24uXG4gICAgICBjb25zdCBwb3MgPSB0aGlzLnJvd0hlaWdodHNDYWNoZS5xdWVyeShpZHggLSAxKTtcblxuICAgICAgdHJhbnNsYXRlWFkoc3R5bGVzLCAwLCBwb3MpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGJvdHRvbSBzdW1tYXJ5IHJvdyBvZmZzZXQgZm9yIHNjcm9sbGJhciBtb2RlLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBjYWNoZSBhbmQgb2Zmc2V0IGNhbGN1bGF0aW9uXG4gICAqIHNlZSBkZXNjcmlwdGlvbiBmb3IgYGdldFJvd3NTdHlsZXNgIG1ldGhvZFxuICAgKlxuICAgKiBAcmV0dXJucyB0aGUgQ1NTMyBzdHlsZSB0byBiZSBhcHBsaWVkXG4gICAqXG4gICAqIEBtZW1iZXJPZiBEYXRhVGFibGVCb2R5Q29tcG9uZW50XG4gICAqL1xuICBnZXRCb3R0b21TdW1tYXJ5Um93U3R5bGVzKCk6IGFueSB7XG4gICAgaWYgKCF0aGlzLnNjcm9sbGJhclYgfHwgIXRoaXMucm93cyB8fCAhdGhpcy5yb3dzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGVzID0geyBwb3NpdGlvbjogJ2Fic29sdXRlJyB9O1xuICAgIGNvbnN0IHBvcyA9IHRoaXMucm93SGVpZ2h0c0NhY2hlLnF1ZXJ5KHRoaXMucm93cy5sZW5ndGggLSAxKTtcblxuICAgIHRyYW5zbGF0ZVhZKHN0eWxlcywgMCwgcG9zKTtcblxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgdGhlIGxvYWRpbmcgaW5kaWNhdG9yXG4gICAqL1xuICBoaWRlSW5kaWNhdG9yKCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlKSwgNTAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBpbmRleCBvZiB0aGUgcm93cyBpbiB0aGUgdmlld3BvcnRcbiAgICovXG4gIHVwZGF0ZUluZGV4ZXMoKTogdm9pZCB7XG4gICAgbGV0IGZpcnN0ID0gMDtcbiAgICBsZXQgbGFzdCA9IDA7XG5cbiAgICBpZiAodGhpcy5zY3JvbGxiYXJWKSB7XG4gICAgICBpZiAodGhpcy52aXJ0dWFsaXphdGlvbikge1xuICAgICAgICAvLyBDYWxjdWxhdGlvbiBvZiB0aGUgZmlyc3QgYW5kIGxhc3QgaW5kZXhlcyB3aWxsIGJlIGJhc2VkIG9uIHdoZXJlIHRoZVxuICAgICAgICAvLyBzY3JvbGxZIHBvc2l0aW9uIHdvdWxkIGJlIGF0LiAgVGhlIGxhc3QgaW5kZXggd291bGQgYmUgdGhlIG9uZVxuICAgICAgICAvLyB0aGF0IHNob3dzIHVwIGluc2lkZSB0aGUgdmlldyBwb3J0IHRoZSBsYXN0LlxuICAgICAgICBjb25zdCBoZWlnaHQgPSBwYXJzZUludCh0aGlzLmJvZHlIZWlnaHQsIDEwKTtcbiAgICAgICAgZmlyc3QgPSB0aGlzLnJvd0hlaWdodHNDYWNoZS5nZXRSb3dJbmRleCh0aGlzLm9mZnNldFkpO1xuICAgICAgICBsYXN0ID0gdGhpcy5yb3dIZWlnaHRzQ2FjaGUuZ2V0Um93SW5kZXgoaGVpZ2h0ICsgdGhpcy5vZmZzZXRZKSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB2aXJ0dWFsIHJvd3MgYXJlIG5vdCBuZWVkZWRcbiAgICAgICAgLy8gV2UgcmVuZGVyIGFsbCBpbiBvbmUgZ29cbiAgICAgICAgZmlyc3QgPSAwO1xuICAgICAgICBsYXN0ID0gdGhpcy5yb3dDb3VudDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIHNlcnZlciBpcyBoYW5kbGluZyBwYWdpbmcgYW5kIHdpbGwgcGFzcyBhbiBhcnJheSB0aGF0IGJlZ2lucyB3aXRoIHRoZVxuICAgICAgLy8gZWxlbWVudCBhdCBhIHNwZWNpZmllZCBvZmZzZXQuICBmaXJzdCBzaG91bGQgYWx3YXlzIGJlIDAgd2l0aCBleHRlcm5hbCBwYWdpbmcuXG4gICAgICBpZiAoIXRoaXMuZXh0ZXJuYWxQYWdpbmcpIHtcbiAgICAgICAgZmlyc3QgPSBNYXRoLm1heCh0aGlzLm9mZnNldCAqIHRoaXMucGFnZVNpemUsIDApO1xuICAgICAgfVxuICAgICAgbGFzdCA9IE1hdGgubWluKGZpcnN0ICsgdGhpcy5wYWdlU2l6ZSwgdGhpcy5yb3dDb3VudCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbmRleGVzID0geyBmaXJzdCwgbGFzdCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyB0aGUgZnVsbCBSb3cgSGVpZ2h0IGNhY2hlLiAgU2hvdWxkIGJlIHVzZWRcbiAgICogd2hlbiB0aGUgZW50aXJlIHJvdyBhcnJheSBzdGF0ZSBoYXMgY2hhbmdlZC5cbiAgICovXG4gIHJlZnJlc2hSb3dIZWlnaHRDYWNoZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsYmFyViB8fCAodGhpcy5zY3JvbGxiYXJWICYmICF0aGlzLnZpcnR1YWxpemF0aW9uKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNsZWFyIHRoZSBwcmV2aW91cyByb3cgaGVpZ2h0IGNhY2hlIGlmIGFscmVhZHkgcHJlc2VudC5cbiAgICAvLyB0aGlzIGlzIHVzZWZ1bCBkdXJpbmcgc29ydHMsIGZpbHRlcnMgd2hlcmUgdGhlIHN0YXRlIG9mIHRoZVxuICAgIC8vIHJvd3MgYXJyYXkgaXMgY2hhbmdlZC5cbiAgICB0aGlzLnJvd0hlaWdodHNDYWNoZS5jbGVhckNhY2hlKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSB0cmVlIG9ubHkgaWYgdGhlcmUgYXJlIHJvd3MgaW5zaWRlIHRoZSB0cmVlLlxuICAgIGlmICh0aGlzLnJvd3MgJiYgdGhpcy5yb3dzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgcm93RXhwYW5zaW9ucyA9IG5ldyBTZXQoKTtcbiAgICAgIGZvciAoY29uc3Qgcm93IG9mIHRoaXMucm93cykge1xuICAgICAgICBpZiAodGhpcy5nZXRSb3dFeHBhbmRlZChyb3cpKSB7XG4gICAgICAgICAgcm93RXhwYW5zaW9ucy5hZGQocm93KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnJvd0hlaWdodHNDYWNoZS5pbml0Q2FjaGUoe1xuICAgICAgICByb3dzOiB0aGlzLnJvd3MsXG4gICAgICAgIHJvd0hlaWdodDogdGhpcy5yb3dIZWlnaHQsXG4gICAgICAgIGRldGFpbFJvd0hlaWdodDogdGhpcy5nZXREZXRhaWxSb3dIZWlnaHQsXG4gICAgICAgIGV4dGVybmFsVmlydHVhbDogdGhpcy5zY3JvbGxiYXJWICYmIHRoaXMuZXh0ZXJuYWxQYWdpbmcsXG4gICAgICAgIHJvd0NvdW50OiB0aGlzLnJvd0NvdW50LFxuICAgICAgICByb3dJbmRleGVzOiB0aGlzLnJvd0luZGV4ZXMsXG4gICAgICAgIHJvd0V4cGFuc2lvbnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBpbmRleCBmb3IgdGhlIHZpZXcgcG9ydFxuICAgKi9cbiAgZ2V0QWRqdXN0ZWRWaWV3UG9ydEluZGV4KCk6IG51bWJlciB7XG4gICAgLy8gQ2FwdHVyZSB0aGUgcm93IGluZGV4IG9mIHRoZSBmaXJzdCByb3cgdGhhdCBpcyB2aXNpYmxlIG9uIHRoZSB2aWV3cG9ydC5cbiAgICAvLyBJZiB0aGUgc2Nyb2xsIGJhciBpcyBqdXN0IGJlbG93IHRoZSByb3cgd2hpY2ggaXMgaGlnaGxpZ2h0ZWQgdGhlbiBtYWtlIHRoYXQgYXMgdGhlXG4gICAgLy8gZmlyc3QgaW5kZXguXG4gICAgY29uc3Qgdmlld1BvcnRGaXJzdFJvd0luZGV4ID0gdGhpcy5pbmRleGVzLmZpcnN0O1xuXG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyViAmJiB0aGlzLnZpcnR1YWxpemF0aW9uKSB7XG4gICAgICBjb25zdCBvZmZzZXRTY3JvbGwgPSB0aGlzLnJvd0hlaWdodHNDYWNoZS5xdWVyeSh2aWV3UG9ydEZpcnN0Um93SW5kZXggLSAxKTtcbiAgICAgIHJldHVybiBvZmZzZXRTY3JvbGwgPD0gdGhpcy5vZmZzZXRZID8gdmlld1BvcnRGaXJzdFJvd0luZGV4IC0gMSA6IHZpZXdQb3J0Rmlyc3RSb3dJbmRleDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlld1BvcnRGaXJzdFJvd0luZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgRXhwYW5zaW9uIG9mIHRoZSByb3cgaS5lLiBpZiB0aGUgcm93IGlzIGV4cGFuZGVkIHRoZW4gaXQgd2lsbFxuICAgKiBjb2xsYXBzZSBhbmQgdmljZSB2ZXJzYS4gICBOb3RlIHRoYXQgdGhlIGV4cGFuZGVkIHN0YXR1cyBpcyBzdG9yZWQgYXNcbiAgICogYSBwYXJ0IG9mIHRoZSByb3cgb2JqZWN0IGl0c2VsZiBhcyB3ZSBoYXZlIHRvIHByZXNlcnZlIHRoZSBleHBhbmRlZCByb3dcbiAgICogc3RhdHVzIGluIGNhc2Ugb2Ygc29ydGluZyBhbmQgZmlsdGVyaW5nIG9mIHRoZSByb3cgc2V0LlxuICAgKi9cbiAgdG9nZ2xlUm93RXhwYW5zaW9uKHJvdzogYW55KTogdm9pZCB7XG4gICAgLy8gQ2FwdHVyZSB0aGUgcm93IGluZGV4IG9mIHRoZSBmaXJzdCByb3cgdGhhdCBpcyB2aXNpYmxlIG9uIHRoZSB2aWV3cG9ydC5cbiAgICBjb25zdCB2aWV3UG9ydEZpcnN0Um93SW5kZXggPSB0aGlzLmdldEFkanVzdGVkVmlld1BvcnRJbmRleCgpO1xuICAgIGNvbnN0IHJvd0V4cGFuZGVkSWR4ID0gdGhpcy5nZXRSb3dFeHBhbmRlZElkeChyb3csIHRoaXMucm93RXhwYW5zaW9ucyk7XG4gICAgY29uc3QgZXhwYW5kZWQgPSByb3dFeHBhbmRlZElkeCA+IC0xO1xuXG4gICAgLy8gSWYgdGhlIGRldGFpbFJvd0hlaWdodCBpcyBhdXRvIC0tPiBvbmx5IGluIGNhc2Ugb2Ygbm9uLXZpcnR1YWxpemVkIHNjcm9sbFxuICAgIGlmICh0aGlzLnNjcm9sbGJhclYgJiYgdGhpcy52aXJ0dWFsaXphdGlvbikge1xuICAgICAgY29uc3QgZGV0YWlsUm93SGVpZ2h0ID0gdGhpcy5nZXREZXRhaWxSb3dIZWlnaHQocm93KSAqIChleHBhbmRlZCA/IC0xIDogMSk7XG4gICAgICAvLyBjb25zdCBpZHggPSB0aGlzLnJvd0luZGV4ZXMuZ2V0KHJvdykgfHwgMDtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuZ2V0Um93SW5kZXgocm93KTtcbiAgICAgIHRoaXMucm93SGVpZ2h0c0NhY2hlLnVwZGF0ZShpZHgsIGRldGFpbFJvd0hlaWdodCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSB0b2dnbGVkIHJvdyBhbmQgdXBkYXRlIHRoaXZlIG5ldmVyZSBoZWlnaHRzIGluIHRoZSBjYWNoZS5cbiAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIHRoaXMucm93RXhwYW5zaW9ucy5zcGxpY2Uocm93RXhwYW5kZWRJZHgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvd0V4cGFuc2lvbnMucHVzaChyb3cpO1xuICAgIH1cblxuICAgIHRoaXMuZGV0YWlsVG9nZ2xlLmVtaXQoe1xuICAgICAgcm93czogW3Jvd10sXG4gICAgICBjdXJyZW50SW5kZXg6IHZpZXdQb3J0Rmlyc3RSb3dJbmRleFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cGFuZC9Db2xsYXBzZSBhbGwgdGhlIHJvd3Mgbm8gbWF0dGVyIHdoYXQgdGhlaXIgc3RhdGUgaXMuXG4gICAqL1xuICB0b2dnbGVBbGxSb3dzKGV4cGFuZGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgLy8gY2xlYXIgcHJldiBleHBhbnNpb25zXG4gICAgdGhpcy5yb3dFeHBhbnNpb25zID0gW107XG5cbiAgICAvLyBDYXB0dXJlIHRoZSByb3cgaW5kZXggb2YgdGhlIGZpcnN0IHJvdyB0aGF0IGlzIHZpc2libGUgb24gdGhlIHZpZXdwb3J0LlxuICAgIGNvbnN0IHZpZXdQb3J0Rmlyc3RSb3dJbmRleCA9IHRoaXMuZ2V0QWRqdXN0ZWRWaWV3UG9ydEluZGV4KCk7XG5cbiAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIGZvciAoY29uc3Qgcm93IG9mIHRoaXMucm93cykge1xuICAgICAgICB0aGlzLnJvd0V4cGFuc2lvbnMucHVzaChyb3cpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNjcm9sbGJhclYpIHtcbiAgICAgIC8vIFJlZnJlc2ggdGhlIGZ1bGwgcm93IGhlaWdodHMgY2FjaGUgc2luY2UgZXZlcnkgcm93IHdhcyBhZmZlY3RlZC5cbiAgICAgIHRoaXMucmVjYWxjTGF5b3V0KCk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBhbGwgcm93cyB0aGF0IGhhdmUgYmVlbiBleHBhbmRlZC5cbiAgICB0aGlzLmRldGFpbFRvZ2dsZS5lbWl0KHtcbiAgICAgIHJvd3M6IHRoaXMucm93cyxcbiAgICAgIGN1cnJlbnRJbmRleDogdmlld1BvcnRGaXJzdFJvd0luZGV4XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVjYWxjdWxhdGVzIHRoZSB0YWJsZVxuICAgKi9cbiAgcmVjYWxjTGF5b3V0KCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaFJvd0hlaWdodENhY2hlKCk7XG4gICAgdGhpcy51cGRhdGVJbmRleGVzKCk7XG4gICAgdGhpcy51cGRhdGVSb3dzKCk7XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIHRoZSBjb2x1bW5cbiAgICovXG4gIGNvbHVtblRyYWNraW5nRm4oaW5kZXg6IG51bWJlciwgY29sdW1uOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBjb2x1bW4uJCRpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSByb3cgcGlubmluZyBncm91cCBzdHlsZXNcbiAgICovXG4gIHN0eWxlc0J5R3JvdXAoZ3JvdXA6IHN0cmluZykge1xuICAgIGNvbnN0IHdpZHRocyA9IHRoaXMuY29sdW1uR3JvdXBXaWR0aHM7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IHRoaXMub2Zmc2V0WDtcblxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIHdpZHRoOiBgJHt3aWR0aHNbZ3JvdXBdfXB4YFxuICAgIH07XG5cbiAgICBpZiAoZ3JvdXAgPT09ICdsZWZ0Jykge1xuICAgICAgdHJhbnNsYXRlWFkoc3R5bGVzLCBvZmZzZXRYLCAwKTtcbiAgICB9IGVsc2UgaWYgKGdyb3VwID09PSAncmlnaHQnKSB7XG4gICAgICBjb25zdCBib2R5V2lkdGggPSB0aGlzLmlubmVyV2lkdGg7XG4gICAgICBjb25zdCB0b3RhbERpZmYgPSB3aWR0aHMudG90YWwgLSBib2R5V2lkdGg7XG4gICAgICBjb25zdCBvZmZzZXREaWZmID0gdG90YWxEaWZmIC0gb2Zmc2V0WDtcbiAgICAgIGNvbnN0IG9mZnNldCA9IG9mZnNldERpZmYgKiAtMTtcbiAgICAgIHRyYW5zbGF0ZVhZKHN0eWxlcywgb2Zmc2V0LCAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgdGhlIHJvdyB3YXMgZXhwYW5kZWQgYW5kIHNldCBkZWZhdWx0IHJvdyBleHBhbnNpb24gd2hlbiByb3cgZXhwYW5zaW9uIGlzIGVtcHR5XG4gICAqL1xuICBnZXRSb3dFeHBhbmRlZChyb3c6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnJvd0V4cGFuc2lvbnMubGVuZ3RoID09PSAwICYmIHRoaXMuZ3JvdXBFeHBhbnNpb25EZWZhdWx0KSB7XG4gICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIHRoaXMuZ3JvdXBlZFJvd3MpIHtcbiAgICAgICAgdGhpcy5yb3dFeHBhbnNpb25zLnB1c2goZ3JvdXApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldFJvd0V4cGFuZGVkSWR4KHJvdywgdGhpcy5yb3dFeHBhbnNpb25zKSA+IC0xO1xuICB9XG5cbiAgZ2V0Um93RXhwYW5kZWRJZHgocm93OiBhbnksIGV4cGFuZGVkOiBhbnlbXSk6IG51bWJlciB7XG4gICAgaWYgKCFleHBhbmRlZCB8fCAhZXhwYW5kZWQubGVuZ3RoKSB7cmV0dXJuIC0xO31cblxuICAgIGNvbnN0IHJvd0lkID0gdGhpcy5yb3dJZGVudGl0eShyb3cpO1xuICAgIHJldHVybiBleHBhbmRlZC5maW5kSW5kZXgociA9PiB7XG4gICAgICBjb25zdCBpZCA9IHRoaXMucm93SWRlbnRpdHkocik7XG4gICAgICByZXR1cm4gaWQgPT09IHJvd0lkO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHJvdyBpbmRleCBnaXZlbiBhIHJvd1xuICAgKi9cbiAgZ2V0Um93SW5kZXgocm93OiBhbnkpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnJvd0luZGV4ZXMuZ2V0KHJvdykgfHwgMDtcbiAgfVxuXG4gIG9uVHJlZUFjdGlvbihyb3c6IGFueSkge1xuICAgIHRoaXMudHJlZUFjdGlvbi5lbWl0KHsgcm93IH0pO1xuICB9XG5cbiAgZHJhZ092ZXIoZXZlbnQ6IERyYWdFdmVudCwgZHJvcFJvdykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5yb3dEcmFnRXZlbnRzLmVtaXQoe1xuICAgICAgZXZlbnQsXG4gICAgICBzcmNFbGVtZW50OiB0aGlzLl9kcmFnZ2VkUm93RWxlbWVudCxcbiAgICAgIGV2ZW50VHlwZTogJ2RyYWdvdmVyJyxcbiAgICAgIGRyYWdSb3c6IHRoaXMuX2RyYWdnZWRSb3csXG4gICAgICBkcm9wUm93XG4gICAgfSk7XG4gIH1cblxuICBkcmFnKGV2ZW50OiBEcmFnRXZlbnQsIGRyYWdSb3csIHJvd0NvbXBvbmVudCkge1xuICAgIHRoaXMuX2RyYWdnZWRSb3cgPSBkcmFnUm93O1xuICAgIHRoaXMuX2RyYWdnZWRSb3dFbGVtZW50ID0gcm93Q29tcG9uZW50Ll9lbGVtZW50O1xuICAgIHRoaXMucm93RHJhZ0V2ZW50cy5lbWl0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgc3JjRWxlbWVudDogdGhpcy5fZHJhZ2dlZFJvd0VsZW1lbnQsXG4gICAgICBldmVudFR5cGU6ICdkcmFnc3RhcnQnLFxuICAgICAgZHJhZ1Jvd1xuICAgIH0pO1xuICB9XG5cbiAgZHJvcChldmVudDogRHJhZ0V2ZW50LCBkcm9wUm93LCByb3dDb21wb25lbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucm93RHJhZ0V2ZW50cy5lbWl0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgc3JjRWxlbWVudDogdGhpcy5fZHJhZ2dlZFJvd0VsZW1lbnQsXG4gICAgICB0YXJnZXRFbGVtZW50OiByb3dDb21wb25lbnQuX2VsZW1lbnQsXG4gICAgICBldmVudFR5cGU6ICdkcm9wJyxcbiAgICAgIGRyYWdSb3c6IHRoaXMuX2RyYWdnZWRSb3csXG4gICAgICBkcm9wUm93XG4gICAgfSk7XG4gIH1cblxuICBkcmFnRW50ZXIoZXZlbnQ6IERyYWdFdmVudCwgZHJvcFJvdywgcm93Q29tcG9uZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnJvd0RyYWdFdmVudHMuZW1pdCh7XG4gICAgICBldmVudCxcbiAgICAgIHNyY0VsZW1lbnQ6IHRoaXMuX2RyYWdnZWRSb3dFbGVtZW50LFxuICAgICAgdGFyZ2V0RWxlbWVudDogcm93Q29tcG9uZW50Ll9lbGVtZW50LFxuICAgICAgZXZlbnRUeXBlOiAnZHJhZ2VudGVyJyxcbiAgICAgIGRyYWdSb3c6IHRoaXMuX2RyYWdnZWRSb3csXG4gICAgICBkcm9wUm93XG4gICAgfSk7XG4gIH1cblxuICBkcmFnTGVhdmUoZXZlbnQ6IERyYWdFdmVudCwgZHJvcFJvdywgcm93Q29tcG9uZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnJvd0RyYWdFdmVudHMuZW1pdCh7XG4gICAgICBldmVudCxcbiAgICAgIHNyY0VsZW1lbnQ6IHRoaXMuX2RyYWdnZWRSb3dFbGVtZW50LFxuICAgICAgdGFyZ2V0RWxlbWVudDogcm93Q29tcG9uZW50Ll9lbGVtZW50LFxuICAgICAgZXZlbnRUeXBlOiAnZHJhZ2xlYXZlJyxcbiAgICAgIGRyYWdSb3c6IHRoaXMuX2RyYWdnZWRSb3csXG4gICAgICBkcm9wUm93XG4gICAgfSk7XG4gIH1cblxuICBkcmFnRW5kKGV2ZW50OiBEcmFnRXZlbnQsIGRyYWdSb3cpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucm93RHJhZ0V2ZW50cy5lbWl0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgc3JjRWxlbWVudDogdGhpcy5fZHJhZ2dlZFJvd0VsZW1lbnQsXG4gICAgICBldmVudFR5cGU6ICdkcmFnZW5kJyxcbiAgICAgIGRyYWdSb3dcbiAgICB9KTtcbiAgICB0aGlzLl9kcmFnZ2VkUm93ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2RyYWdnZWRSb3dFbGVtZW50ID0gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=