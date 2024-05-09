import { getterForProp } from './column-prop-getters';
import { SortType } from '../types/sort.type';
import { SortDirection } from '../types/sort-direction.type';
/**
 * Gets the next sort direction
 */
export function nextSortDir(sortType, current) {
    if (sortType === SortType.single) {
        if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else {
            return SortDirection.asc;
        }
    }
    else {
        if (!current) {
            return SortDirection.asc;
        }
        else if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else if (current === SortDirection.desc) {
            return undefined;
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
}
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 */
export function orderByComparator(a, b) {
    if (a === null || typeof a === 'undefined') {
        a = 0;
    }
    if (b === null || typeof b === 'undefined') {
        b = 0;
    }
    if (a instanceof Date && b instanceof Date) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
    }
    else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
        // Convert to string in case of a=0 or b=0
        a = String(a);
        b = String(b);
        // Isn't a number so lowercase the string to properly compare
        if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
        }
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }
    }
    else {
        // Parse strings as numbers to compare properly
        if (parseFloat(a) < parseFloat(b)) {
            return -1;
        }
        if (parseFloat(a) > parseFloat(b)) {
            return 1;
        }
    }
    // equal each other
    return 0;
}
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 */
export function sortRows(rows, columns, dirs) {
    if (!rows) {
        return [];
    }
    if (!dirs || !dirs.length || !columns) {
        return [...rows];
    }
    /**
     * record the row ordering of results from prior sort operations (if applicable)
     * this is necessary to guarantee stable sorting behavior
     */
    const rowToIndexMap = new Map();
    rows.forEach((row, index) => rowToIndexMap.set(row, index));
    const temp = [...rows];
    const cols = columns.reduce((obj, col) => {
        if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
        }
        return obj;
    }, {});
    // cache valueGetter and compareFn so that they
    // do not need to be looked-up in the sort function body
    const cachedDirs = dirs.map(dir => {
        const prop = dir.prop;
        return {
            prop,
            dir: dir.dir,
            valueGetter: getterForProp(prop),
            compareFn: cols[prop] || orderByComparator
        };
    });
    return temp.sort(function (rowA, rowB) {
        for (const cachedDir of cachedDirs) {
            // Get property and valuegetters for column to be sorted
            const { prop, valueGetter } = cachedDir;
            // Get A and B cell values from rows based on properties of the columns
            const propA = valueGetter(rowA, prop);
            const propB = valueGetter(rowB, prop);
            // Compare function gets five parameters:
            // Two cell values to be compared as propA and propB
            // Two rows corresponding to the cells as rowA and rowB
            // Direction of the sort for this column as SortDirection
            // Compare can be a standard JS comparison function (a,b) => -1|0|1
            // as additional parameters are silently ignored. The whole row and sort
            // direction enable more complex sort logic.
            const comparison = cachedDir.dir !== SortDirection.desc
                ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir)
                : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
            // Don't return 0 yet in case of needing to sort by next property
            if (comparison !== 0) {
                return comparison;
            }
        }
        if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB))) {
            return 0;
        }
        /**
         * all else being equal, preserve original order of the rows (stable sort)
         */
        return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2xpYi91dGlscy9zb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTdEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FBQyxRQUFrQixFQUFFLE9BQXNCO0lBQ3BFLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7UUFDaEMsSUFBSSxPQUFPLEtBQUssYUFBYSxDQUFDLEdBQUcsRUFBRTtZQUNqQyxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUM7U0FDM0I7YUFBTTtZQUNMLE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQztTQUMxQjtLQUNGO1NBQU07UUFDTCxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDO1NBQzFCO2FBQU0sSUFBSSxPQUFPLEtBQUssYUFBYSxDQUFDLEdBQUcsRUFBRTtZQUN4QyxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUM7U0FDM0I7YUFBTSxJQUFJLE9BQU8sS0FBSyxhQUFhLENBQUMsSUFBSSxFQUFFO1lBQ3pDLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsbURBQW1EO1FBQ25ELE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0FBQ0gsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtJQUM5QyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssV0FBVyxFQUFFO1FBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUFDO0lBQ3BELElBQUks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QUFDLE9BQU8sQ0FBQyxDQUFDO1NBQUM7UUFFdEU7O1dBRUc7UUFDSCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXR0ZXJGb3JQcm9wIH0gZnJvbSAnLi9jb2x1bW4tcHJvcC1nZXR0ZXJzJztcbmltcG9ydCB7IFNvcnRUeXBlIH0gZnJvbSAnLi4vdHlwZXMvc29ydC50eXBlJztcbmltcG9ydCB7IFNvcnREaXJlY3Rpb24gfSBmcm9tICcuLi90eXBlcy9zb3J0LWRpcmVjdGlvbi50eXBlJztcbmltcG9ydCB7IFNvcnRQcm9wRGlyIH0gZnJvbSAnLi4vdHlwZXMvc29ydC1wcm9wLWRpci50eXBlJztcbi8qKlxuICogR2V0cyB0aGUgbmV4dCBzb3J0IGRpcmVjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dFNvcnREaXIoc29ydFR5cGU6IFNvcnRUeXBlLCBjdXJyZW50OiBTb3J0RGlyZWN0aW9uKTogU29ydERpcmVjdGlvbiB8IHVuZGVmaW5lZCB7XG4gIGlmIChzb3J0VHlwZSA9PT0gU29ydFR5cGUuc2luZ2xlKSB7XG4gICAgaWYgKGN1cnJlbnQgPT09IFNvcnREaXJlY3Rpb24uYXNjKSB7XG4gICAgICByZXR1cm4gU29ydERpcmVjdGlvbi5kZXNjO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gU29ydERpcmVjdGlvbi5hc2M7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICghY3VycmVudCkge1xuICAgICAgcmV0dXJuIFNvcnREaXJlY3Rpb24uYXNjO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gU29ydERpcmVjdGlvbi5hc2MpIHtcbiAgICAgIHJldHVybiBTb3J0RGlyZWN0aW9uLmRlc2M7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50ID09PSBTb3J0RGlyZWN0aW9uLmRlc2MpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIGF2b2lkIFRTNzAzMDogTm90IGFsbCBjb2RlIHBhdGhzIHJldHVybiBhIHZhbHVlLlxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBBZGFwdGVkIGZyb20gZnVlbGQtdWkgb24gNi8yMTZcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9GdWVsSW50ZXJhY3RpdmUvZnVlbC11aS90cmVlL21hc3Rlci9zcmMvcGlwZXMvT3JkZXJCeVxuICovXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJCeUNvbXBhcmF0b3IoYTogYW55LCBiOiBhbnkpOiBudW1iZXIge1xuICBpZiAoYSA9PT0gbnVsbCB8fCB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCcpIHthID0gMDt9XG4gIGlmIChiID09PSBudWxsIHx8IHR5cGVvZiBiID09PSAndW5kZWZpbmVkJykge2IgPSAwO31cbiAgaWYgKGEgaW5zdGFuY2VvZiBEYXRlICYmIGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgaWYgKGEgPCBiKSB7cmV0dXJuIC0xO31cbiAgICBpZiAoYSA+IGIpIHtyZXR1cm4gMTt9XG4gIH0gZWxzZSBpZiAoaXNOYU4ocGFyc2VGbG9hdChhKSkgfHwgIWlzRmluaXRlKGEpIHx8IGlzTmFOKHBhcnNlRmxvYXQoYikpIHx8ICFpc0Zpbml0ZShiKSkge1xuICAgIC8vIENvbnZlcnQgdG8gc3RyaW5nIGluIGNhc2Ugb2YgYT0wIG9yIGI9MFxuICAgIGEgPSBTdHJpbmcoYSk7XG4gICAgYiA9IFN0cmluZyhiKTtcbiAgICAvLyBJc24ndCBhIG51bWJlciBzbyBsb3dlcmNhc2UgdGhlIHN0cmluZyB0byBwcm9wZXJseSBjb21wYXJlXG4gICAgaWYgKGEudG9Mb3dlckNhc2UoKSA8IGIudG9Mb3dlckNhc2UoKSkge3JldHVybiAtMTt9XG4gICAgaWYgKGEudG9Mb3dlckNhc2UoKSA+IGIudG9Mb3dlckNhc2UoKSkge3JldHVybiAxO31cbiAgfSBlbHNlIHtcbiAgICAvLyBQYXJzZSBzdHJpbmdzIGFzIG51bWJlcnMgdG8gY29tcGFyZSBwcm9wZXJseVxuICAgIGlmIChwYXJzZUZsb2F0KGEpIDwgcGFyc2VGbG9hdChiKSkge3JldHVybiAtMTt9XG4gICAgaWYgKHBhcnNlRmxvYXQoYSkgPiBwYXJzZUZsb2F0KGIpKSB7cmV0dXJuIDE7fVxuICB9XG5cbiAgLy8gZXF1YWwgZWFjaCBvdGhlclxuICByZXR1cm4gMDtcbn1cblxuLyoqXG4gKiBjcmVhdGVzIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSBgcm93c2AgaW5wdXQgYW5kIHJldHVybnMgdGhlIHNvcnRlZCBjb3B5LiB0aGlzIGZ1bmN0aW9uXG4gKiBkb2VzIG5vdCBzb3J0IHRoZSBgcm93c2AgYXJndW1lbnQgaW4gcGxhY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRSb3dzKHJvd3M6IGFueVtdLCBjb2x1bW5zOiBhbnlbXSwgZGlyczogU29ydFByb3BEaXJbXSk6IGFueVtdIHtcbiAgaWYgKCFyb3dzKSB7cmV0dXJuIFtdO31cbiAgaWYgKCFkaXJzIHx8ICFkaXJzLmxlbmd0aCB8fCAhY29sdW1ucykge3JldHVybiBbLi4ucm93c107fVxuXG4gIC8qKlxuICAgKiByZWNvcmQgdGhlIHJvdyBvcmRlcmluZyBvZiByZXN1bHRzIGZyb20gcHJpb3Igc29ydCBvcGVyYXRpb25zIChpZiBhcHBsaWNhYmxlKVxuICAgKiB0aGlzIGlzIG5lY2Vzc2FyeSB0byBndWFyYW50ZWUgc3RhYmxlIHNvcnRpbmcgYmVoYXZpb3JcbiAgICovXG4gIGNvbnN0IHJvd1RvSW5kZXhNYXAgPSBuZXcgTWFwPGFueSwgbnVtYmVyPigpO1xuICByb3dzLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHJvd1RvSW5kZXhNYXAuc2V0KHJvdywgaW5kZXgpKTtcblxuICBjb25zdCB0ZW1wID0gWy4uLnJvd3NdO1xuICBjb25zdCBjb2xzID0gY29sdW1ucy5yZWR1Y2UoKG9iaiwgY29sKSA9PiB7XG4gICAgaWYgKGNvbC5jb21wYXJhdG9yICYmIHR5cGVvZiBjb2wuY29tcGFyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2JqW2NvbC5wcm9wXSA9IGNvbC5jb21wYXJhdG9yO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LCB7fSk7XG5cbiAgLy8gY2FjaGUgdmFsdWVHZXR0ZXIgYW5kIGNvbXBhcmVGbiBzbyB0aGF0IHRoZXlcbiAgLy8gZG8gbm90IG5lZWQgdG8gYmUgbG9va2VkLXVwIGluIHRoZSBzb3J0IGZ1bmN0aW9uIGJvZHlcbiAgY29uc3QgY2FjaGVkRGlycyA9IGRpcnMubWFwKGRpciA9PiB7XG4gICAgY29uc3QgcHJvcCA9IGRpci5wcm9wO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wLFxuICAgICAgZGlyOiBkaXIuZGlyLFxuICAgICAgdmFsdWVHZXR0ZXI6IGdldHRlckZvclByb3AocHJvcCksXG4gICAgICBjb21wYXJlRm46IGNvbHNbcHJvcF0gfHwgb3JkZXJCeUNvbXBhcmF0b3JcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gdGVtcC5zb3J0KGZ1bmN0aW9uKHJvd0E6IGFueSwgcm93QjogYW55KSB7XG4gICAgZm9yIChjb25zdCBjYWNoZWREaXIgb2YgY2FjaGVkRGlycykge1xuICAgICAgLy8gR2V0IHByb3BlcnR5IGFuZCB2YWx1ZWdldHRlcnMgZm9yIGNvbHVtbiB0byBiZSBzb3J0ZWRcbiAgICAgIGNvbnN0IHsgcHJvcCwgdmFsdWVHZXR0ZXIgfSA9IGNhY2hlZERpcjtcbiAgICAgIC8vIEdldCBBIGFuZCBCIGNlbGwgdmFsdWVzIGZyb20gcm93cyBiYXNlZCBvbiBwcm9wZXJ0aWVzIG9mIHRoZSBjb2x1bW5zXG4gICAgICBjb25zdCBwcm9wQSA9IHZhbHVlR2V0dGVyKHJvd0EsIHByb3ApO1xuICAgICAgY29uc3QgcHJvcEIgPSB2YWx1ZUdldHRlcihyb3dCLCBwcm9wKTtcblxuICAgICAgLy8gQ29tcGFyZSBmdW5jdGlvbiBnZXRzIGZpdmUgcGFyYW1ldGVyczpcbiAgICAgIC8vIFR3byBjZWxsIHZhbHVlcyB0byBiZSBjb21wYXJlZCBhcyBwcm9wQSBhbmQgcHJvcEJcbiAgICAgIC8vIFR3byByb3dzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGNlbGxzIGFzIHJvd0EgYW5kIHJvd0JcbiAgICAgIC8vIERpcmVjdGlvbiBvZiB0aGUgc29ydCBmb3IgdGhpcyBjb2x1bW4gYXMgU29ydERpcmVjdGlvblxuICAgICAgLy8gQ29tcGFyZSBjYW4gYmUgYSBzdGFuZGFyZCBKUyBjb21wYXJpc29uIGZ1bmN0aW9uIChhLGIpID0+IC0xfDB8MVxuICAgICAgLy8gYXMgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGFyZSBzaWxlbnRseSBpZ25vcmVkLiBUaGUgd2hvbGUgcm93IGFuZCBzb3J0XG4gICAgICAvLyBkaXJlY3Rpb24gZW5hYmxlIG1vcmUgY29tcGxleCBzb3J0IGxvZ2ljLlxuICAgICAgY29uc3QgY29tcGFyaXNvbiA9XG4gICAgICAgIGNhY2hlZERpci5kaXIgIT09IFNvcnREaXJlY3Rpb24uZGVzY1xuICAgICAgICAgID8gY2FjaGVkRGlyLmNvbXBhcmVGbihwcm9wQSwgcHJvcEIsIHJvd0EsIHJvd0IsIGNhY2hlZERpci5kaXIpXG4gICAgICAgICAgOiAtY2FjaGVkRGlyLmNvbXBhcmVGbihwcm9wQSwgcHJvcEIsIHJvd0EsIHJvd0IsIGNhY2hlZERpci5kaXIpO1xuXG4gICAgICAvLyBEb24ndCByZXR1cm4gMCB5ZXQgaW4gY2FzZSBvZiBuZWVkaW5nIHRvIHNvcnQgYnkgbmV4dCBwcm9wZXJ0eVxuICAgICAgaWYgKGNvbXBhcmlzb24gIT09IDApIHtyZXR1cm4gY29tcGFyaXNvbjt9XG4gICAgfVxuXG4gICAgaWYgKCEocm93VG9JbmRleE1hcC5oYXMocm93QSkgJiYgcm93VG9JbmRleE1hcC5oYXMocm93QikpKSB7cmV0dXJuIDA7fVxuXG4gICAgLyoqXG4gICAgICogYWxsIGVsc2UgYmVpbmcgZXF1YWwsIHByZXNlcnZlIG9yaWdpbmFsIG9yZGVyIG9mIHRoZSByb3dzIChzdGFibGUgc29ydClcbiAgICAgKi9cbiAgICByZXR1cm4gcm93VG9JbmRleE1hcC5nZXQocm93QSkgPCByb3dUb0luZGV4TWFwLmdldChyb3dCKSA/IC0xIDogMTtcbiAgfSk7XG59XG4iXX0=