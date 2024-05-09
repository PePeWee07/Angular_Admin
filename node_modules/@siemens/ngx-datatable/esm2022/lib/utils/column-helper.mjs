import { camelCase, deCamelCase } from './camel-case';
import { id } from './id';
import { getterForProp } from './column-prop-getters';
/**
 * Sets the column defaults
 */
export function setColumnDefaults(columns) {
    if (!columns) {
        return;
    }
    // Only one column should hold the tree view
    // Thus if multiple columns are provided with
    // isTreeColumn as true we take only the first one
    let treeColumnFound = false;
    for (const column of columns) {
        if (!column.$$id) {
            column.$$id = id();
        }
        // prop can be numeric; zero is valid not a missing prop
        // translate name => prop
        if (isNullOrUndefined(column.prop) && column.name) {
            column.prop = camelCase(column.name);
        }
        if (!column.$$valueGetter) {
            column.$$valueGetter = getterForProp(column.prop);
        }
        // format props if no name passed
        if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = deCamelCase(String(column.prop));
        }
        if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = ''; // Fixes IE and Edge displaying `null`
        }
        if (!column.hasOwnProperty('resizeable')) {
            column.resizeable = true;
        }
        if (!column.hasOwnProperty('sortable')) {
            column.sortable = true;
        }
        if (!column.hasOwnProperty('draggable')) {
            column.draggable = true;
        }
        if (!column.hasOwnProperty('canAutoResize')) {
            column.canAutoResize = true;
        }
        if (!column.hasOwnProperty('width')) {
            column.width = 150;
        }
        if (!column.hasOwnProperty('isTreeColumn')) {
            column.isTreeColumn = false;
        }
        else {
            if (column.isTreeColumn && !treeColumnFound) {
                // If the first column with isTreeColumn is true found
                // we mark that treeCoulmn is found
                treeColumnFound = true;
            }
            else {
                // After that isTreeColumn property for any other column
                // will be set as false
                column.isTreeColumn = false;
            }
        }
    }
}
export function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
/**
 * Translates templates definitions to objects
 */
export function translateTemplates(templates) {
    const result = [];
    for (const temp of templates) {
        const col = {};
        const props = Object.getOwnPropertyNames(temp);
        for (const prop of props) {
            col[prop] = temp[prop];
        }
        if (temp.headerTemplate) {
            col.headerTemplate = temp.headerTemplate;
        }
        if (temp.cellTemplate) {
            col.cellTemplate = temp.cellTemplate;
        }
        if (temp.ghostCellTemplate) {
            col.ghostCellTemplate = temp.ghostCellTemplate;
        }
        if (temp.summaryFunc) {
            col.summaryFunc = temp.summaryFunc;
        }
        if (temp.summaryTemplate) {
            col.summaryTemplate = temp.summaryTemplate;
        }
        result.push(col);
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2xpYi91dGlscy9jb2x1bW4taGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSXREOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE9BQXNCO0lBQ3RELElBQUksQ0FBQyxPQUFPLEVBQUU7UUFBQyxPQUFPO0tBQUM7SUFFdkIsNENBQTRDO0lBQzVDLDZDQUE2QztJQUM3QyxrREFBa0Q7SUFDbEQsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBRTVCLEtBQUssTUFBTSxNQUFNLElBQUksT0FBTyxFQUFFO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUM7U0FDcEI7UUFFRCx3REFBd0Q7UUFDeEQseUJBQXlCO1FBQ3pCLElBQUksaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDakQsTUFBTSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDekIsTUFBTSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25EO1FBRUQsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksaUJB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LENBQUMsZUFBZSxDQUFDO1NBQzVDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW1lbENhc2UsIGRlQ2FtZWxDYXNlIH0gZnJvbSAnLi9jYW1lbC1jYXNlJztcbmltcG9ydCB7IGlkIH0gZnJvbSAnLi9pZCc7XG5pbXBvcnQgeyBnZXR0ZXJGb3JQcm9wIH0gZnJvbSAnLi9jb2x1bW4tcHJvcC1nZXR0ZXJzJztcbmltcG9ydCB7IFRhYmxlQ29sdW1uIH0gZnJvbSAnLi4vdHlwZXMvdGFibGUtY29sdW1uLnR5cGUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb2x1bW5zL2NvbHVtbi5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIFNldHMgdGhlIGNvbHVtbiBkZWZhdWx0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29sdW1uRGVmYXVsdHMoY29sdW1uczogVGFibGVDb2x1bW5bXSkge1xuICBpZiAoIWNvbHVtbnMpIHtyZXR1cm47fVxuXG4gIC8vIE9ubHkgb25lIGNvbHVtbiBzaG91bGQgaG9sZCB0aGUgdHJlZSB2aWV3XG4gIC8vIFRodXMgaWYgbXVsdGlwbGUgY29sdW1ucyBhcmUgcHJvdmlkZWQgd2l0aFxuICAvLyBpc1RyZWVDb2x1bW4gYXMgdHJ1ZSB3ZSB0YWtlIG9ubHkgdGhlIGZpcnN0IG9uZVxuICBsZXQgdHJlZUNvbHVtbkZvdW5kID0gZmFsc2U7XG5cbiAgZm9yIChjb25zdCBjb2x1bW4gb2YgY29sdW1ucykge1xuICAgIGlmICghY29sdW1uLiQkaWQpIHtcbiAgICAgIGNvbHVtbi4kJGlkID0gaWQoKTtcbiAgICB9XG5cbiAgICAvLyBwcm9wIGNhbiBiZSBudW1lcmljOyB6ZXJvIGlzIHZhbGlkIG5vdCBhIG1pc3NpbmcgcHJvcFxuICAgIC8vIHRyYW5zbGF0ZSBuYW1lID0+IHByb3BcbiAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoY29sdW1uLnByb3ApICYmIGNvbHVtbi5uYW1lKSB7XG4gICAgICBjb2x1bW4ucHJvcCA9IGNhbWVsQ2FzZShjb2x1bW4ubmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKCFjb2x1bW4uJCR2YWx1ZUdldHRlcikge1xuICAgICAgY29sdW1uLiQkdmFsdWVHZXR0ZXIgPSBnZXR0ZXJGb3JQcm9wKGNvbHVtbi5wcm9wKTtcbiAgICB9XG5cbiAgICAvLyBmb3JtYXQgcHJvcHMgaWYgbm8gbmFtZSBwYXNzZWRcbiAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGNvbHVtbi5wcm9wKSAmJiBpc051bGxPclVuZGVmaW5lZChjb2x1bW4ubmFtZSkpIHtcbiAgICAgIGNvbHVtbi5uYW1lID0gZGVDYW1lbENhc2UoU3RyaW5nKGNvbHVtbi5wcm9wKSk7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGNvbHVtbi5wcm9wKSAmJiBpc051bGxPclVuZGVmaW5lZChjb2x1bW4ubmFtZSkpIHtcbiAgICAgIGNvbHVtbi5uYW1lID0gJyc7IC8vIEZpeGVzIElFIGFuZCBFZGdlIGRpc3BsYXlpbmcgYG51bGxgXG4gICAgfVxuXG4gICAgaWYgKCFjb2x1bW4uaGFzT3duUHJvcGVydHkoJ3Jlc2l6ZWFibGUnKSkge1xuICAgICAgY29sdW1uLnJlc2l6ZWFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghY29sdW1uLmhhc093blByb3BlcnR5KCdzb3J0YWJsZScpKSB7XG4gICAgICBjb2x1bW4uc29ydGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghY29sdW1uLmhhc093blByb3BlcnR5KCdkcmFnZ2FibGUnKSkge1xuICAgICAgY29sdW1uLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFjb2x1bW4uaGFzT3duUHJvcGVydHkoJ2NhbkF1dG9SZXNpemUnKSkge1xuICAgICAgY29sdW1uLmNhbkF1dG9SZXNpemUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghY29sdW1uLmhhc093blByb3BlcnR5KCd3aWR0aCcpKSB7XG4gICAgICBjb2x1bW4ud2lkdGggPSAxNTA7XG4gICAgfVxuXG4gICAgaWYgKCFjb2x1bW4uaGFzT3duUHJvcGVydHkoJ2lzVHJlZUNvbHVtbicpKSB7XG4gICAgICBjb2x1bW4uaXNUcmVlQ29sdW1uID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb2x1bW4uaXNUcmVlQ29sdW1uICYmICF0cmVlQ29sdW1uRm91bmQpIHtcbiAgICAgICAgLy8gSWYgdGhlIGZpcnN0IGNvbHVtbiB3aXRoIGlzVHJlZUNvbHVtbiBpcyB0cnVlIGZvdW5kXG4gICAgICAgIC8vIHdlIG1hcmsgdGhhdCB0cmVlQ291bG1uIGlzIGZvdW5kXG4gICAgICAgIHRyZWVDb2x1bW5Gb3VuZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBZnRlciB0aGF0IGlzVHJlZUNvbHVtbiBwcm9wZXJ0eSBmb3IgYW55IG90aGVyIGNvbHVtblxuICAgICAgICAvLyB3aWxsIGJlIHNldCBhcyBmYWxzZVxuICAgICAgICBjb2x1bW4uaXNUcmVlQ29sdW1uID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZDxUPih2YWx1ZTogVCB8IG51bGwgfCB1bmRlZmluZWQpOiB2YWx1ZSBpcyBudWxsIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogVHJhbnNsYXRlcyB0ZW1wbGF0ZXMgZGVmaW5pdGlvbnMgdG8gb2JqZWN0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlVGVtcGxhdGVzKHRlbXBsYXRlczogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlW10pOiBhbnlbXSB7XG4gIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgZm9yIChjb25zdCB0ZW1wIG9mIHRlbXBsYXRlcykge1xuICAgIGNvbnN0IGNvbDogYW55ID0ge307XG5cbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlbXApO1xuICAgIGZvciAoY29uc3QgcHJvcCBvZiBwcm9wcykge1xuICAgICAgY29sW3Byb3BdID0gdGVtcFtwcm9wXTtcbiAgICB9XG5cbiAgICBpZiAodGVtcC5oZWFkZXJUZW1wbGF0ZSkge1xuICAgICAgY29sLmhlYWRlclRlbXBsYXRlID0gdGVtcC5oZWFkZXJUZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBpZiAodGVtcC5jZWxsVGVtcGxhdGUpIHtcbiAgICAgIGNvbC5jZWxsVGVtcGxhdGUgPSB0ZW1wLmNlbGxUZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBpZiAodGVtcC5naG9zdENlbGxUZW1wbGF0ZSkge1xuICAgICAgY29sLmdob3N0Q2VsbFRlbXBsYXRlID0gdGVtcC5naG9zdENlbGxUZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBpZiAodGVtcC5zdW1tYXJ5RnVuYykge1xuICAgICAgY29sLnN1bW1hcnlGdW5jID0gdGVtcC5zdW1tYXJ5RnVuYztcbiAgICB9XG5cbiAgICBpZiAodGVtcC5zdW1tYXJ5VGVtcGxhdGUpIHtcbiAgICAgIGNvbC5zdW1tYXJ5VGVtcGxhdGUgPSB0ZW1wLnN1bW1hcnlUZW1wbGF0ZTtcbiAgICB9XG5cbiAgICByZXN1bHQucHVzaChjb2wpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==