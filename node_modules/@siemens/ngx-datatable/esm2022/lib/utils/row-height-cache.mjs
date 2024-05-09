/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */
export class RowHeightCache {
    constructor() {
        /**
         * Tree Array stores the cumulative information of the row heights to perform efficient
         * range queries and updates.  Currently the tree is initialized to the base row
         * height instead of the detail row height.
         */
        this.treeArray = [];
    }
    /**
     * Clear the Tree array.
     */
    clearCache() {
        this.treeArray = [];
    }
    /**
     * Initialize the Fenwick tree with row Heights.
     *
     * @param rows The array of rows which contain the expanded status.
     * @param rowHeight The row height.
     * @param detailRowHeight The detail row height.
     */
    initCache(details) {
        const { rows, rowHeight, detailRowHeight, externalVirtual, rowCount, rowIndexes, rowExpansions } = details;
        const isFn = typeof rowHeight === 'function';
        const isDetailFn = typeof detailRowHeight === 'function';
        if (!isFn && isNaN(rowHeight)) {
            throw new Error(`Row Height cache initialization failed. Please ensure that 'rowHeight' is a
        valid number or function value: (${rowHeight}) when 'scrollbarV' is enabled.`);
        }
        // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.
        if (!isDetailFn && isNaN(detailRowHeight)) {
            throw new Error(`Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a
        valid number or function value: (${detailRowHeight}) when 'scrollbarV' is enabled.`);
        }
        const n = externalVirtual ? rowCount : rows.length;
        this.treeArray = new Array(n);
        for (let i = 0; i < n; ++i) {
            this.treeArray[i] = 0;
        }
        for (let i = 0; i < n; ++i) {
            const row = rows[i];
            let currentRowHeight = rowHeight;
            if (isFn) {
                currentRowHeight = rowHeight(row);
            }
            // Add the detail row height to the already expanded rows.
            // This is useful for the table that goes through a filter or sort.
            const expanded = rowExpansions.has(row);
            if (row && expanded) {
                if (isDetailFn) {
                    const index = rowIndexes.get(row);
                    currentRowHeight += detailRowHeight(row, index);
                }
                else {
                    currentRowHeight += detailRowHeight;
                }
            }
            this.update(i, currentRowHeight);
        }
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.  Below handles edge cases.
     */
    getRowIndex(scrollY) {
        if (scrollY === 0) {
            return 0;
        }
        return this.calcRowIndex(scrollY);
    }
    /**
     * When a row is expanded or rowHeight is changed, update the height.  This can
     * be utilized in future when Angular Data table supports dynamic row heights.
     */
    update(atRowIndex, byRowHeight) {
        if (!this.treeArray.length) {
            throw new Error(`Update at index ${atRowIndex} with value ${byRowHeight} failed:
        Row Height cache not initialized.`);
        }
        const n = this.treeArray.length;
        atRowIndex |= 0;
        while (atRowIndex < n) {
            this.treeArray[atRowIndex] += byRowHeight;
            atRowIndex |= atRowIndex + 1;
        }
    }
    /**
     * Range Sum query from 1 to the rowIndex
     */
    query(atIndex) {
        if (!this.treeArray.length) {
            throw new Error(`query at index ${atIndex} failed: Fenwick tree array not initialized.`);
        }
        let sum = 0;
        atIndex |= 0;
        while (atIndex >= 0) {
            sum += this.treeArray[atIndex];
            atIndex = (atIndex & (atIndex + 1)) - 1;
        }
        return sum;
    }
    /**
     * Find the total height between 2 row indexes
     */
    queryBetween(atIndexA, atIndexB) {
        return this.query(atIndexB) - this.query(atIndexA - 1);
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.
     */
    calcRowIndex(sum) {
        if (!this.treeArray.length) {
            return 0;
        }
        let pos = -1;
        const dataLength = this.treeArray.length;
        // Get the highest bit for the block size.
        const highestBit = Math.pow(2, dataLength.toString(2).length - 1);
        for (let blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
            const nextPos = pos + blockSize;
            if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
                sum -= this.treeArray[nextPos];
                pos = nextPos;
            }
        }
        return pos + 1;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWhlaWdodC1jYWNoZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2xpYi91dGlscy9yb3ctaGVpZ2h0LWNhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxPQUFPLGNBQWM7SUFBM0I7UUFDRTs7OztXQUlHO1FBQ0ssY0FBUyxHQUFhLEVBQUUsQ0FBQztJQTJJbkMsQ0FBQztJQXpJQzs7T0FFRztJQUNILFVBQVU7UUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsU0FBUyxDQUFDLE9BQVk7UUFDcEIsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUMzRyxNQUFNLElBQUksR0FBRyxPQUFPLFNBQVMsS0FBSyxVQUFVLENBQUM7UUFDN0MsTUFBTSxVQUFVLEdBQUcsT0FBTyxlQUFlLEtBQUssVUFBVSxDQUFDO1FBRXpELElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUM7MkNBQ3FCLFNBQVMsaUNBQWlDLENBQUMsQ0FBQztTQUNsRjtRQUVELHNGQUFzRjtRQUN0RixJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN6QyxNQUFNLElBQUksS0FBSyxDQUFDOzJDQUNxQixlQUFlLGlDQUFpQyxDQUFDLENBQUM7U0FDeEY7UUFFRCxNQUFNLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLElB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QUNLLFlBQVksQ0FBQyxHQUFXO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQUM7UUFFdkMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDYixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUV6QywwQ0FBMEM7UUFDMUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFbEUsS0FBSyxJQUFJLFNBQVMsR0FBRyxVQUFVLEVBQUUsU0FBUyxLQUFLLENBQUMsRUFBRSxTQUFTLEtBQUssQ0FBQyxFQUFFO1lBQ2pFLE1BQU0sT0FBTyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFDaEMsSUFBSSxPQUFPLEdBQUcsVUFBVSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMxRCxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0IsR0FBRyxHQUFHLE9BQU8sQ0FBQzthQUNmO1NBQ0Y7UUFFRCxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIG9iamVjdCBjb250YWlucyB0aGUgY2FjaGUgb2YgdGhlIHZhcmlvdXMgcm93IGhlaWdodHMgdGhhdCBhcmUgcHJlc2VudCBpbnNpZGVcbiAqIHRoZSBkYXRhIHRhYmxlLiAgIEl0cyBiYXNlZCBvbiBGZW53aWNrIHRyZWUgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBoZWxwcyB3aXRoXG4gKiBxdWVyeWluZyBzdW1zIHRoYXQgaGF2ZSB0aW1lIGNvbXBsZXhpdHkgb2YgbG9nIG4uXG4gKlxuICogRmVud2ljayBUcmVlIENyZWRpdHM6IGh0dHA6Ly9wZXRyLW1pdHJpY2hldi5ibG9nc3BvdC5jb20vMjAxMy8wNS9mZW53aWNrLXRyZWUtcmFuZ2UtdXBkYXRlcy5odG1sXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWlrb2xhbHlzZW5rby9mZW53aWNrLXRyZWVcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3dIZWlnaHRDYWNoZSB7XG4gIC8qKlxuICAgKiBUcmVlIEFycmF5IHN0b3JlcyB0aGUgY3VtdWxhdGl2ZSBpbmZvcm1hdGlvbiBvZiB0aGUgcm93IGhlaWdodHMgdG8gcGVyZm9ybSBlZmZpY2llbnRcbiAgICogcmFuZ2UgcXVlcmllcyBhbmQgdXBkYXRlcy4gIEN1cnJlbnRseSB0aGUgdHJlZSBpcyBpbml0aWFsaXplZCB0byB0aGUgYmFzZSByb3dcbiAgICogaGVpZ2h0IGluc3RlYWQgb2YgdGhlIGRldGFpbCByb3cgaGVpZ2h0LlxuICAgKi9cbiAgcHJpdmF0ZSB0cmVlQXJyYXk6IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBUcmVlIGFycmF5LlxuICAgKi9cbiAgY2xlYXJDYWNoZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRyZWVBcnJheSA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIEZlbndpY2sgdHJlZSB3aXRoIHJvdyBIZWlnaHRzLlxuICAgKlxuICAgKiBAcGFyYW0gcm93cyBUaGUgYXJyYXkgb2Ygcm93cyB3aGljaCBjb250YWluIHRoZSBleHBhbmRlZCBzdGF0dXMuXG4gICAqIEBwYXJhbSByb3dIZWlnaHQgVGhlIHJvdyBoZWlnaHQuXG4gICAqIEBwYXJhbSBkZXRhaWxSb3dIZWlnaHQgVGhlIGRldGFpbCByb3cgaGVpZ2h0LlxuICAgKi9cbiAgaW5pdENhY2hlKGRldGFpbHM6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHsgcm93cywgcm93SGVpZ2h0LCBkZXRhaWxSb3dIZWlnaHQsIGV4dGVybmFsVmlydHVhbCwgcm93Q291bnQsIHJvd0luZGV4ZXMsIHJvd0V4cGFuc2lvbnMgfSA9IGRldGFpbHM7XG4gICAgY29uc3QgaXNGbiA9IHR5cGVvZiByb3dIZWlnaHQgPT09ICdmdW5jdGlvbic7XG4gICAgY29uc3QgaXNEZXRhaWxGbiA9IHR5cGVvZiBkZXRhaWxSb3dIZWlnaHQgPT09ICdmdW5jdGlvbic7XG5cbiAgICBpZiAoIWlzRm4gJiYgaXNOYU4ocm93SGVpZ2h0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3cgSGVpZ2h0IGNhY2hlIGluaXRpYWxpemF0aW9uIGZhaWxlZC4gUGxlYXNlIGVuc3VyZSB0aGF0ICdyb3dIZWlnaHQnIGlzIGFcbiAgICAgICAgdmFsaWQgbnVtYmVyIG9yIGZ1bmN0aW9uIHZhbHVlOiAoJHtyb3dIZWlnaHR9KSB3aGVuICdzY3JvbGxiYXJWJyBpcyBlbmFibGVkLmApO1xuICAgIH1cblxuICAgIC8vIEFkZCB0aGlzIGFkZGl0aW9uYWwgZ3VhcmQgaW4gY2FzZSBkZXRhaWxSb3dIZWlnaHQgaXMgc2V0IHRvICdhdXRvJyBhcyBpdCB3b250IHdvcmsuXG4gICAgaWYgKCFpc0RldGFpbEZuICYmIGlzTmFOKGRldGFpbFJvd0hlaWdodCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm93IEhlaWdodCBjYWNoZSBpbml0aWFsaXphdGlvbiBmYWlsZWQuIFBsZWFzZSBlbnN1cmUgdGhhdCAnZGV0YWlsUm93SGVpZ2h0JyBpcyBhXG4gICAgICAgIHZhbGlkIG51bWJlciBvciBmdW5jdGlvbiB2YWx1ZTogKCR7ZGV0YWlsUm93SGVpZ2h0fSkgd2hlbiAnc2Nyb2xsYmFyVicgaXMgZW5hYmxlZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBuID0gZXh0ZXJuYWxWaXJ0dWFsID8gcm93Q291bnQgOiByb3dzLmxlbmd0aDtcbiAgICB0aGlzLnRyZWVBcnJheSA9IG5ldyBBcnJheShuKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICB0aGlzLnRyZWVBcnJheVtpXSA9IDA7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgICBsZXQgY3VycmVudFJvd0hlaWdodCA9IHJvd0hlaWdodDtcbiAgICAgIGlmIChpc0ZuKSB7XG4gICAgICAgIGN1cnJlbnRSb3dIZWlnaHQgPSByb3dIZWlnaHQocm93KTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBkZXRhaWwgcm93IGhlaWdodCB0byB0aGUgYWxyZWFkeSBleHBhbmRlZCByb3dzLlxuICAgICAgLy8gVGhpcyBpcyB1c2VmdWwgZm9yIHRoZSB0YWJsZSB0aGF0IGdvZXMgdGhyb3VnaCBhIGZpbHRlciBvciBzb3J0LlxuICAgICAgY29uc3QgZXhwYW5kZWQgPSByb3dFeHBhbnNpb25zLmhhcyhyb3cpO1xuICAgICAgaWYgKHJvdyAmJiBleHBhbmRlZCkge1xuICAgICAgICBpZiAoaXNEZXRhaWxGbikge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcm93SW5kZXhlcy5nZXQocm93KTtcbiAgICAgICAgICBjdXJyZW50Um93SGVpZ2h0ICs9IGRldGFpbFJvd0hlaWdodChyb3csIGluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50Um93SGVpZ2h0ICs9IGRldGFpbFJvd0hlaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZShpLCBjdXJyZW50Um93SGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gdGhlIFNjcm9sbFkgcG9zaXRpb24gaS5lLiBzdW0sIHByb3ZpZGUgdGhlIHJvd0luZGV4XG4gICAqIHRoYXQgaXMgcHJlc2VudCBpbiB0aGUgY3VycmVudCB2aWV3IHBvcnQuICBCZWxvdyBoYW5kbGVzIGVkZ2UgY2FzZXMuXG4gICAqL1xuICBnZXRSb3dJbmRleChzY3JvbGxZOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChzY3JvbGxZID09PSAwKSB7cmV0dXJuIDA7fVxuICAgIHJldHVybiB0aGlzLmNhbGNSb3dJbmRleChzY3JvbGxZKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgcm93IGlzIGV4cGFuZGVkIG9yIHJvd0hlaWdodCBpcyBjaGFuZ2VkLCB1cGRhdGUgdGhlIGhlaWdodC4gIFRoaXMgY2FuXG4gICAqIGJlIHV0aWxpemVkIGluIGZ1dHVyZSB3aGVuIEFuZ3VsYXIgRGF0YSB0YWJsZSBzdXBwb3J0cyBkeW5hbWljIHJvdyBoZWlnaHRzLlxuICAgKi9cbiAgdXBkYXRlKGF0Um93SW5kZXg6IG51bWJlciwgYnlSb3dIZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy50cmVlQXJyYXkubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVwZGF0ZSBhdCBpbmRleCAke2F0Um93SW5kZXh9IHdpdGggdmFsdWUgJHtieVJvd0hlaWdodH0gZmFpbGVkOlxuICAgICAgICBSb3cgSGVpZ2h0IGNhY2hlIG5vdCBpbml0aWFsaXplZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBuID0gdGhpcy50cmVlQXJyYXkubGVuZ3RoO1xuICAgIGF0Um93SW5kZXggfD0gMDtcblxuICAgIHdoaWxlIChhdFJvd0luZGV4IDwgbikge1xuICAgICAgdGhpcy50cmVlQXJyYXlbYXRSb3dJbmRleF0gKz0gYnlSb3dIZWlnaHQ7XG4gICAgICBhdFJvd0luZGV4IHw9IGF0Um93SW5kZXggKyAxO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSYW5nZSBTdW0gcXVlcnkgZnJvbSAxIHRvIHRoZSByb3dJbmRleFxuICAgKi9cbiAgcXVlcnkoYXRJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMudHJlZUFycmF5Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBxdWVyeSBhdCBpbmRleCAke2F0SW5kZXh9IGZhaWxlZDogRmVud2ljayB0cmVlIGFycmF5IG5vdCBpbml0aWFsaXplZC5gKTtcbiAgICB9XG5cbiAgICBsZXQgc3VtID0gMDtcbiAgICBhdEluZGV4IHw9IDA7XG5cbiAgICB3aGlsZSAoYXRJbmRleCA+PSAwKSB7XG4gICAgICBzdW0gKz0gdGhpcy50cmVlQXJyYXlbYXRJbmRleF07XG4gICAgICBhdEluZGV4ID0gKGF0SW5kZXggJiAoYXRJbmRleCArIDEpKSAtIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1bTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSB0b3RhbCBoZWlnaHQgYmV0d2VlbiAyIHJvdyBpbmRleGVzXG4gICAqL1xuICBxdWVyeUJldHdlZW4oYXRJbmRleEE6IG51bWJlciwgYXRJbmRleEI6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkoYXRJbmRleEIpIC0gdGhpcy5xdWVyeShhdEluZGV4QSAtIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHRoZSBTY3JvbGxZIHBvc2l0aW9uIGkuZS4gc3VtLCBwcm92aWRlIHRoZSByb3dJbmRleFxuICAgKiB0aGF0IGlzIHByZXNlbnQgaW4gdGhlIGN1cnJlbnQgdmlldyBwb3J0LlxuICAgKi9cbiAgcHJpdmF0ZSBjYWxjUm93SW5kZXgoc3VtOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy50cmVlQXJyYXkubGVuZ3RoKSB7cmV0dXJuIDA7fVxuXG4gICAgbGV0IHBvcyA9IC0xO1xuICAgIGNvbnN0IGRhdGFMZW5ndGggPSB0aGlzLnRyZWVBcnJheS5sZW5ndGg7XG5cbiAgICAvLyBHZXQgdGhlIGhpZ2hlc3QgYml0IGZvciB0aGUgYmxvY2sgc2l6ZS5cbiAgICBjb25zdCBoaWdoZXN0Qml0ID0gTWF0aC5wb3coMiwgZGF0YUxlbmd0aC50b1N0cmluZygyKS5sZW5ndGggLSAxKTtcblxuICAgIGZvciAobGV0IGJsb2NrU2l6ZSA9IGhpZ2hlc3RCaXQ7IGJsb2NrU2l6ZSAhPT0gMDsgYmxvY2tTaXplID4+PSAxKSB7XG4gICAgICBjb25zdCBuZXh0UG9zID0gcG9zICsgYmxvY2tTaXplO1xuICAgICAgaWYgKG5leHRQb3MgPCBkYXRhTGVuZ3RoICYmIHN1bSA+PSB0aGlzLnRyZWVBcnJheVtuZXh0UG9zXSkge1xuICAgICAgICBzdW0gLT0gdGhpcy50cmVlQXJyYXlbbmV4dFBvc107XG4gICAgICAgIHBvcyA9IG5leHRQb3M7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvcyArIDE7XG4gIH1cbn1cbiJdfQ==