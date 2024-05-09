import { columnsByPin, columnsTotalWidth } from './column';
/**
 * Calculates the Total Flex Grow
 */
export function getTotalFlexGrow(columns) {
    let totalFlexGrow = 0;
    for (const c of columns) {
        totalFlexGrow += c.flexGrow || 0;
    }
    return totalFlexGrow;
}
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 */
export function adjustColumnWidths(allColumns, expectedWidth) {
    const columnsWidth = columnsTotalWidth(allColumns);
    const totalFlexGrow = getTotalFlexGrow(allColumns);
    const colsByGroup = columnsByPin(allColumns);
    if (columnsWidth !== expectedWidth) {
        scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
    }
}
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 */
function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
    // calculate total width and flexgrow points for coulumns that can be resized
    for (const attr in colsByGroup) {
        if (colsByGroup.hasOwnProperty(attr)) {
            for (const column of colsByGroup[attr]) {
                if (column.$$oldWidth) {
                    // when manually resized, switch off auto-resize
                    column.canAutoResize = false;
                }
                if (!column.canAutoResize) {
                    maxWidth -= column.width;
                    totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
                }
                else {
                    column.width = 0;
                }
            }
        }
    }
    const hasMinWidth = {};
    let remainingWidth = maxWidth;
    // resize columns until no width is left to be distributed
    do {
        const widthPerFlexPoint = remainingWidth / totalFlexGrow;
        remainingWidth = 0;
        for (const attr in colsByGroup) {
            if (colsByGroup.hasOwnProperty(attr)) {
                for (const column of colsByGroup[attr]) {
                    // if the column can be resize and it hasn't reached its minimum width yet
                    if (column.canAutoResize && !hasMinWidth[column.prop]) {
                        const newWidth = column.width + column.flexGrow * widthPerFlexPoint;
                        if (column.minWidth !== undefined && newWidth < column.minWidth) {
                            remainingWidth += newWidth - column.minWidth;
                            column.width = column.minWidth;
                            hasMinWidth[column.prop] = true;
                        }
                        else {
                            column.width = newWidth;
                        }
                    }
                }
            }
        }
    } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 */
export function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth = 300) {
    const columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter(c => c.canAutoResize !== false);
    for (const column of columnsToResize) {
        if (!column.$$oldWidth) {
            column.$$oldWidth = column.width;
        }
    }
    let additionWidthPerColumn = 0;
    let exceedsWindow = false;
    let contentWidth = getContentWidth(allColumns, defaultColWidth);
    let remainingWidth = expectedWidth - contentWidth;
    const columnsProcessed = [];
    const remainingWidthLimit = 1; // when to stop
    // This loop takes care of the
    do {
        additionWidthPerColumn = remainingWidth / columnsToResize.length;
        exceedsWindow = contentWidth >= expectedWidth;
        for (const column of columnsToResize) {
            if (exceedsWindow && allowBleed) {
                column.width = column.$$oldWidth || column.width || defaultColWidth;
            }
            else {
                const newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
                if (column.minWidth && newSize < column.minWidth) {
                    column.width = column.minWidth;
                    columnsProcessed.push(column);
                }
                else if (column.maxWidth && newSize > column.maxWidth) {
                    column.width = column.maxWidth;
                    columnsProcessed.push(column);
                }
                else {
                    column.width = newSize;
                }
            }
            column.width = Math.max(0, column.width);
        }
        contentWidth = getContentWidth(allColumns);
        remainingWidth = expectedWidth - contentWidth;
        removeProcessedColumns(columnsToResize, columnsProcessed);
    } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
    // reset so we don't have stale values
    for (const column of columnsToResize) {
        column.$$oldWidth = 0;
    }
}
/**
 * Remove the processed columns from the current active columns.
 */
function removeProcessedColumns(columnsToResize, columnsProcessed) {
    for (const column of columnsProcessed) {
        const index = columnsToResize.indexOf(column);
        columnsToResize.splice(index, 1);
    }
}
/**
 * Gets the width of the columns
 */
function getContentWidth(allColumns, defaultColWidth = 300) {
    let contentWidth = 0;
    for (const column of allColumns) {
        contentWidth += column.width || defaultColWidth;
    }
    return contentWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2xpYi91dGlscy9tYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFM0Q7O0dBRUc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsT0FBYztJQUM3QyxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFFdEIsS0FBSyxNQUFNLENBQUMsSUFBSSxPQUFPLEVBQUU7UUFDdkIsYUFBYSxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO0tBQ2xDO0lBRUQsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxVQUFlLEVBQUUsYUFBa0I7SUFDcEUsTUFBTSxZQUFZLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkQsTUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkQsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRTdDLElBQUksWUFBWSxLQUFLLGFBQWEsRUFBRTtRQUNsQyxZQUFZLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztLQUN6RDtBQUNILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsWUFBWSxDQUFDLFdBQWdCLEVBQUUsUUFBYSxFQUFFLGFBQWtCO0lBQ3ZFLDZFQUE2RTtJQUM3RSxLQUFLLE1BQU0sSUFBSSxJQUFJLFdBQVcsRUFBRTtRQUM5QixJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUM7WUFDbkMsS0FBSyxNQUFNLE1BQU0sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RDLElBQUks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QUFFO0lBRS9FLHNDQUFzQztJQUN0QyxLQUFLLE1BQU0sTUFBTSxJQUFJLGVBQWUsRUFBRTtRQUNwQyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztLQUN2QjtBQUNILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsc0JBQXNCLENBQUMsZUFBc0IsRUFBRSxnQkFBdUI7SUFDN0UsS0FBSyxNQUFNLE1BQU0sSUFBSSxnQkFBZ0IsRUFBRTtRQUNyQyxNQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2xDO0FBQ0gsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxlQUFlLENBQUMsVUFBZSxFQUFFLGtCQUEwQixHQUFHO0lBQ3JFLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztJQUVyQixLQUFLLE1BQU0sTUFBTSxJQUFJLFVBQVUsRUFBRTtRQUMvQixZQUFZLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxlQUFlLENBQUM7S0FDakQ7SUFFRCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sdW1uc0J5UGluLCBjb2x1bW5zVG90YWxXaWR0aCB9IGZyb20gJy4vY29sdW1uJztcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBUb3RhbCBGbGV4IEdyb3dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRvdGFsRmxleEdyb3coY29sdW1uczogYW55W10pIHtcbiAgbGV0IHRvdGFsRmxleEdyb3cgPSAwO1xuXG4gIGZvciAoY29uc3QgYyBvZiBjb2x1bW5zKSB7XG4gICAgdG90YWxGbGV4R3JvdyArPSBjLmZsZXhHcm93IHx8IDA7XG4gIH1cblxuICByZXR1cm4gdG90YWxGbGV4R3Jvdztcbn1cblxuLyoqXG4gKiBBZGp1c3RzIHRoZSBjb2x1bW4gd2lkdGhzLlxuICogSW5zcGlyZWQgYnk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9maXhlZC1kYXRhLXRhYmxlL2Jsb2IvbWFzdGVyL3NyYy9GaXhlZERhdGFUYWJsZVdpZHRoSGVscGVyLmpzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RDb2x1bW5XaWR0aHMoYWxsQ29sdW1uczogYW55LCBleHBlY3RlZFdpZHRoOiBhbnkpIHtcbiAgY29uc3QgY29sdW1uc1dpZHRoID0gY29sdW1uc1RvdGFsV2lkdGgoYWxsQ29sdW1ucyk7XG4gIGNvbnN0IHRvdGFsRmxleEdyb3cgPSBnZXRUb3RhbEZsZXhHcm93KGFsbENvbHVtbnMpO1xuICBjb25zdCBjb2xzQnlHcm91cCA9IGNvbHVtbnNCeVBpbihhbGxDb2x1bW5zKTtcblxuICBpZiAoY29sdW1uc1dpZHRoICE9PSBleHBlY3RlZFdpZHRoKSB7XG4gICAgc2NhbGVDb2x1bW5zKGNvbHNCeUdyb3VwLCBleHBlY3RlZFdpZHRoLCB0b3RhbEZsZXhHcm93KTtcbiAgfVxufVxuXG4vKipcbiAqIFJlc2l6ZXMgY29sdW1ucyBiYXNlZCBvbiB0aGUgZmxleEdyb3cgcHJvcGVydHksIHdoaWxlIHJlc3BlY3RpbmcgbWFudWFsbHkgc2V0IHdpZHRoc1xuICovXG5mdW5jdGlvbiBzY2FsZUNvbHVtbnMoY29sc0J5R3JvdXA6IGFueSwgbWF4V2lkdGg6IGFueSwgdG90YWxGbGV4R3JvdzogYW55KSB7XG4gIC8vIGNhbGN1bGF0ZSB0b3RhbCB3aWR0aCBhbmQgZmxleGdyb3cgcG9pbnRzIGZvciBjb3VsdW1ucyB0aGF0IGNhbiBiZSByZXNpemVkXG4gIGZvciAoY29uc3QgYXR0ciBpbiBjb2xzQnlHcm91cCkge1xuICAgIGlmIChjb2xzQnlHcm91cC5oYXNPd25Qcm9wZXJ0eShhdHRyKSl7XG4gICAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2xzQnlHcm91cFthdHRyXSkge1xuICAgICAgICBpZiAoY29sdW1uLiQkb2xkV2lkdGgpIHtcbiAgICAgICAgICAvLyB3aGVuIG1hbnVhbGx5IHJlc2l6ZWQsIHN3aXRjaCBvZmYgYXV0by1yZXNpemVcbiAgICAgICAgICBjb2x1bW4uY2FuQXV0b1Jlc2l6ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY29sdW1uLmNhbkF1dG9SZXNpemUpIHtcbiAgICAgICAgICBtYXhXaWR0aCAtPSBjb2x1bW4ud2lkdGg7XG4gICAgICAgICAgdG90YWxGbGV4R3JvdyAtPSBjb2x1bW4uZmxleEdyb3cgPyBjb2x1bW4uZmxleEdyb3cgOiAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbHVtbi53aWR0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBoYXNNaW5XaWR0aCA9IHt9O1xuICBsZXQgcmVtYWluaW5nV2lkdGggPSBtYXhXaWR0aDtcblxuICAvLyByZXNpemUgY29sdW1ucyB1bnRpbCBubyB3aWR0aCBpcyBsZWZ0IHRvIGJlIGRpc3RyaWJ1dGVkXG4gIGRvIHtcbiAgICBjb25zdCB3aWR0aFBlckZsZXhQb2ludCA9IHJlbWFpbmluZ1dpZHRoIC8gdG90YWxGbGV4R3JvdztcbiAgICByZW1haW5pbmdXaWR0aCA9IDA7XG5cbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gY29sc0J5R3JvdXApIHtcbiAgICAgIGlmIChjb2xzQnlHcm91cC5oYXNPd25Qcm9wZXJ0eShhdHRyKSl7XG4gICAgICAgIGZvciAoY29uc3QgY29sdW1uIG9mIGNvbHNCeUdyb3VwW2F0dHJdKSB7XG4gICAgICAgIC8vIGlmIHRoZSBjb2x1bW4gY2FuIGJlIHJlc2l6ZSBhbmQgaXQgaGFzbid0IHJlYWNoZWQgaXRzIG1pbmltdW0gd2lkdGggeWV0XG4gICAgICAgICAgaWYgKGNvbHVtbi5jYW5BdXRvUmVzaXplICYmICFoYXNNaW5XaWR0aFtjb2x1bW4ucHJvcF0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1dpZHRoID0gY29sdW1uLndpZHRoICsgY29sdW1uLmZsZXhHcm93ICogd2lkdGhQZXJGbGV4UG9pbnQ7XG4gICAgICAgICAgICBpZiAoY29sdW1uLm1pbldpZHRoICE9PSB1bmRlZmluZWQgJiYgbmV3V2lkdGggPCBjb2x1bW4ubWluV2lkdGgpIHtcbiAgICAgICAgICAgICAgcmVtYWluaW5nV2lkdGggKz0gbmV3V2lkdGggLSBjb2x1bW4ubWluV2lkdGg7XG4gICAgICAgICAgICAgIGNvbHVtbi53aWR0aCA9IGNvbHVtbi5taW5XaWR0aDtcbiAgICAgICAgICAgICAgaGFzTWluV2lkdGhbY29sdW1uLnByb3BdID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbHVtbi53aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSB3aGlsZSAocmVtYWluaW5nV2lkdGggIT09IDApO1xufVxuXG4vKipcbiAqIEZvcmNlcyB0aGUgd2lkdGggb2YgdGhlIGNvbHVtbnMgdG9cbiAqIGRpc3RyaWJ1dGUgZXF1YWxseSBidXQgb3ZlcmZsb3dpbmcgd2hlbiBuZWNlc3NhcnlcbiAqXG4gKiBSdWxlczpcbiAqXG4gKiAgLSBJZiBjb21iaW5lZCB3aXRocyBhcmUgbGVzcyB0aGFuIHRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgZ3JpZCxcbiAqICAgIHByb3BvcnRpb24gdGhlIHdpZHRocyBnaXZlbiB0aGUgbWluIC8gbWF4IC8gbm9ybWFsIHdpZHRocyB0byBmaWxsIHRoZSB3aWR0aC5cbiAqXG4gKiAgLSBJZiB0aGUgY29tYmluZWQgd2lkdGhzLCBleGNlZWQgdGhlIHRvdGFsIHdpZHRoIG9mIHRoZSBncmlkLFxuICogICAgdXNlIHRoZSBzdGFuZGFyZCB3aWR0aHMuXG4gKlxuICogIC0gSWYgYSBjb2x1bW4gaXMgcmVzaXplZCwgaXQgc2hvdWxkIGFsd2F5cyB1c2UgdGhhdCB3aWR0aFxuICpcbiAqICAtIFRoZSBwcm9wb3J0aW9uYWwgd2lkdGhzIHNob3VsZCBuZXZlciBmYWxsIGJlbG93IG1pbiBzaXplIGlmIHNwZWNpZmllZC5cbiAqXG4gKiAgLSBJZiB0aGUgZ3JpZCBzdGFydHMgb2ZmIHNtYWxsIGJ1dCB0aGVuIGJlY29tZXMgZ3JlYXRlciB0aGFuIHRoZSBzaXplICggKyAvIC0gKVxuICogICAgdGhlIHdpZHRoIHNob3VsZCB1c2UgdGhlIG9yaWdpbmFsIHdpZHRoOyBub3QgdGhlIG5ld2x5IHByb3BvcnRpb25lZCB3aWR0aHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JjZUZpbGxDb2x1bW5XaWR0aHMoXG4gIGFsbENvbHVtbnM6IGFueVtdLFxuICBleHBlY3RlZFdpZHRoOiBudW1iZXIsXG4gIHN0YXJ0SWR4OiBudW1iZXIsXG4gIGFsbG93QmxlZWQ6IGJvb2xlYW4sXG4gIGRlZmF1bHRDb2xXaWR0aDogbnVtYmVyID0gMzAwXG4pIHtcbiAgY29uc3QgY29sdW1uc1RvUmVzaXplID0gYWxsQ29sdW1ucy5zbGljZShzdGFydElkeCArIDEsIGFsbENvbHVtbnMubGVuZ3RoKS5maWx0ZXIoYyA9PiBjLmNhbkF1dG9SZXNpemUgIT09IGZhbHNlKTtcblxuICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zVG9SZXNpemUpIHtcbiAgICBpZiAoIWNvbHVtbi4kJG9sZFdpZHRoKSB7XG4gICAgICBjb2x1bW4uJCRvbGRXaWR0aCA9IGNvbHVtbi53aWR0aDtcbiAgICB9XG4gIH1cblxuICBsZXQgYWRkaXRpb25XaWR0aFBlckNvbHVtbiA9IDA7XG4gIGxldCBleGNlZWRzV2luZG93ID0gZmFsc2U7XG4gIGxldCBjb250ZW50V2lkdGggPSBnZXRDb250ZW50V2lkdGgoYWxsQ29sdW1ucywgZGVmYXVsdENvbFdpZHRoKTtcbiAgbGV0IHJlbWFpbmluZ1dpZHRoID0gZXhwZWN0ZWRXaWR0aCAtIGNvbnRlbnRXaWR0aDtcbiAgY29uc3QgY29sdW1uc1Byb2Nlc3NlZDogYW55W10gPSBbXTtcbiAgY29uc3QgcmVtYWluaW5nV2lkdGhMaW1pdCA9IDE7IC8vIHdoZW4gdG8gc3RvcFxuXG4gIC8vIFRoaXMgbG9vcCB0YWtlcyBjYXJlIG9mIHRoZVxuICBkbyB7XG4gICAgYWRkaXRpb25XaWR0aFBlckNvbHVtbiA9IHJlbWFpbmluZ1dpZHRoIC8gY29sdW1uc1RvUmVzaXplLmxlbmd0aDtcbiAgICBleGNlZWRzV2luZG93ID0gY29udGVudFdpZHRoID49IGV4cGVjdGVkV2lkdGg7XG5cbiAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zVG9SZXNpemUpIHtcbiAgICAgIGlmIChleGNlZWRzV2luZG93ICYmIGFsbG93QmxlZWQpIHtcbiAgICAgICAgY29sdW1uLndpZHRoID0gY29sdW1uLiQkb2xkV2lkdGggfHwgY29sdW1uLndpZHRoIHx8IGRlZmF1bHRDb2xXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld1NpemUgPSAoY29sdW1uLndpZHRoIHx8IGRlZmF1bHRDb2xXaWR0aCkgKyBhZGRpdGlvbldpZHRoUGVyQ29sdW1uO1xuXG4gICAgICAgIGlmIChjb2x1bW4ubWluV2lkdGggJiYgbmV3U2l6ZSA8IGNvbHVtbi5taW5XaWR0aCkge1xuICAgICAgICAgIGNvbHVtbi53aWR0aCA9IGNvbHVtbi5taW5XaWR0aDtcbiAgICAgICAgICBjb2x1bW5zUHJvY2Vzc2VkLnB1c2goY29sdW1uKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4ubWF4V2lkdGggJiYgbmV3U2l6ZSA+IGNvbHVtbi5tYXhXaWR0aCkge1xuICAgICAgICAgIGNvbHVtbi53aWR0aCA9IGNvbHVtbi5tYXhXaWR0aDtcbiAgICAgICAgICBjb2x1bW5zUHJvY2Vzc2VkLnB1c2goY29sdW1uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2x1bW4ud2lkdGggPSBuZXdTaXplO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbHVtbi53aWR0aCA9IE1hdGgubWF4KDAsIGNvbHVtbi53aWR0aCk7XG4gICAgfVxuXG4gICAgY29udGVudFdpZHRoID0gZ2V0Q29udGVudFdpZHRoKGFsbENvbHVtbnMpO1xuICAgIHJlbWFpbmluZ1dpZHRoID0gZXhwZWN0ZWRXaWR0aCAtIGNvbnRlbnRXaWR0aDtcbiAgICByZW1vdmVQcm9jZXNzZWRDb2x1bW5zKGNvbHVtbnNUb1Jlc2l6ZSwgY29sdW1uc1Byb2Nlc3NlZCk7XG4gIH0gd2hpbGUgKHJlbWFpbmluZ1dpZHRoID4gcmVtYWluaW5nV2lkdGhMaW1pdCAmJiBjb2x1bW5zVG9SZXNpemUubGVuZ3RoICE9PSAwKTtcblxuICAvLyByZXNldCBzbyB3ZSBkb24ndCBoYXZlIHN0YWxlIHZhbHVlc1xuICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zVG9SZXNpemUpIHtcbiAgICBjb2x1bW4uJCRvbGRXaWR0aCA9IDA7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIHByb2Nlc3NlZCBjb2x1bW5zIGZyb20gdGhlIGN1cnJlbnQgYWN0aXZlIGNvbHVtbnMuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZVByb2Nlc3NlZENvbHVtbnMoY29sdW1uc1RvUmVzaXplOiBhbnlbXSwgY29sdW1uc1Byb2Nlc3NlZDogYW55W10pIHtcbiAgZm9yIChjb25zdCBjb2x1bW4gb2YgY29sdW1uc1Byb2Nlc3NlZCkge1xuICAgIGNvbnN0IGluZGV4ID0gY29sdW1uc1RvUmVzaXplLmluZGV4T2YoY29sdW1uKTtcbiAgICBjb2x1bW5zVG9SZXNpemUuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIHdpZHRoIG9mIHRoZSBjb2x1bW5zXG4gKi9cbmZ1bmN0aW9uIGdldENvbnRlbnRXaWR0aChhbGxDb2x1bW5zOiBhbnksIGRlZmF1bHRDb2xXaWR0aDogbnVtYmVyID0gMzAwKTogbnVtYmVyIHtcbiAgbGV0IGNvbnRlbnRXaWR0aCA9IDA7XG5cbiAgZm9yIChjb25zdCBjb2x1bW4gb2YgYWxsQ29sdW1ucykge1xuICAgIGNvbnRlbnRXaWR0aCArPSBjb2x1bW4ud2lkdGggfHwgZGVmYXVsdENvbFdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnRXaWR0aDtcbn1cbiJdfQ==