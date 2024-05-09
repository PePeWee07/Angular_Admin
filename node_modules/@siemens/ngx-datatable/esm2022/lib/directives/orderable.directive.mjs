import { ContentChildren, Directive, EventEmitter, Inject, Output } from '@angular/core';
import { DraggableDirective } from './draggable.directive';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
export class OrderableDirective {
    constructor(differs, document) {
        this.document = document;
        this.reorder = new EventEmitter();
        this.targetChanged = new EventEmitter();
        this.differ = differs.find({}).create();
    }
    ngAfterContentInit() {
        // HACK: Investigate Better Way
        this.updateSubscriptions();
        this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
    }
    ngOnDestroy() {
        this.draggables.forEach(d => {
            d.dragStart.unsubscribe();
            d.dragging.unsubscribe();
            d.dragEnd.unsubscribe();
        });
    }
    updateSubscriptions() {
        const diffs = this.differ.diff(this.createMapDiffs());
        if (diffs) {
            const subscribe = ({ currentValue, previousValue }) => {
                unsubscribe({ previousValue });
                if (currentValue) {
                    currentValue.dragStart.subscribe(this.onDragStart.bind(this));
                    currentValue.dragging.subscribe(this.onDragging.bind(this));
                    currentValue.dragEnd.subscribe(this.onDragEnd.bind(this));
                }
            };
            const unsubscribe = ({ previousValue }) => {
                if (previousValue) {
                    previousValue.dragStart.unsubscribe();
                    previousValue.dragging.unsubscribe();
                    previousValue.dragEnd.unsubscribe();
                }
            };
            diffs.forEachAddedItem(subscribe);
            // diffs.forEachChangedItem(subscribe.bind(this));
            diffs.forEachRemovedItem(unsubscribe);
        }
    }
    onDragStart() {
        this.positions = {};
        let i = 0;
        for (const dragger of this.draggables.toArray()) {
            const elm = dragger.element;
            const left = parseInt(elm.offsetLeft.toString(), 10);
            this.positions[dragger.dragModel.$$id] = {
                left,
                right: left + parseInt(elm.offsetWidth.toString(), 10),
                index: i++,
                element: elm
            };
        }
    }
    onDragging({ element, model, event }) {
        const prevPos = this.positions[model.$$id];
        const target = this.isTarget(model, event);
        if (target) {
            if (this.lastDraggingIndex !== target.i) {
                this.targetChanged.emit({
                    prevIndex: this.lastDraggingIndex,
                    newIndex: target.i,
                    initialIndex: prevPos.index
                });
                this.lastDraggingIndex = target.i;
            }
        }
        else if (this.lastDraggingIndex !== prevPos.index) {
            this.targetChanged.emit({
                prevIndex: this.lastDraggingIndex,
                initialIndex: prevPos.index
            });
            this.lastDraggingIndex = prevPos.index;
        }
    }
    onDragEnd({ element, model, event }) {
        const prevPos = this.positions[model.$$id];
        const target = this.isTarget(model, event);
        if (target) {
            this.reorder.emit({
                prevIndex: prevPos.index,
                newIndex: target.i,
                model
            });
        }
        this.lastDraggingIndex = undefined;
        element.style.left = 'auto';
    }
    isTarget(model, event) {
        let i = 0;
        const x = event.x || event.clientX;
        const y = event.y || event.clientY;
        const targets = this.document.elementsFromPoint(x, y);
        // eslint-disable-next-line guard-for-in
        for (const id in this.positions) {
            // current column position which throws event.
            const pos = this.positions[id];
            // since we drag the inner span, we need to find it in the elements at the cursor
            if (model.$$id !== id && targets.find((el) => el === pos.element)) {
                return {
                    pos,
                    i
                };
            }
            i++;
        }
    }
    createMapDiffs() {
        return this.draggables.toArray().reduce((acc, curr) => {
            acc[curr.dragModel.$$id] = curr;
            return acc;
        }, {});
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: OrderableDirective, deps: [{ token: i0.KeyValueDiffers }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.6", type: OrderableDirective, selector: "[orderable]", outputs: { reorder: "reorder", targetChanged: "targetChanged" }, queries: [{ propertyName: "draggables", predicate: DraggableDirective, descendants: true }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: OrderableDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[orderable]' }]
        }], ctorParameters: () => [{ type: i0.KeyValueDiffers }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }], propDecorators: { reorder: [{
                type: Output
            }], targetChanged: [{
                type: Output
            }], draggables: [{
                type: ContentChildren,
                args: [DraggableDirective, { descendants: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2xpYi9kaXJlY3RpdmVzL29yZGVyYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLGVBQWUsRUFDZixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFHTixNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUczQyxNQUFNLE9BQU8sa0JBQWtCO0lBVzdCLFlBQVksT0FBd0IsRUFBNEIsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7UUFWbkUsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hELGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFVOUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMxQixDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDekIs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QUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBLZXlWYWx1ZURpZmZlcnMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFnZ2FibGVEaXJlY3RpdmUgfSBmcm9tICcuL2RyYWdnYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbb3JkZXJhYmxlXScgfSlcbmV4cG9ydCBjbGFzcyBPcmRlcmFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KCkgcmVvcmRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSB0YXJnZXRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAQ29udGVudENoaWxkcmVuKERyYWdnYWJsZURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIGRyYWdnYWJsZXM6IFF1ZXJ5TGlzdDxEcmFnZ2FibGVEaXJlY3RpdmU+O1xuXG4gIHBvc2l0aW9uczogYW55O1xuICBkaWZmZXI6IGFueTtcbiAgbGFzdERyYWdnaW5nSW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuICAgIHRoaXMuZGlmZmVyID0gZGlmZmVycy5maW5kKHt9KS5jcmVhdGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBIQUNLOiBJbnZlc3RpZ2F0ZSBCZXR0ZXIgV2F5XG4gICAgdGhpcy51cGRhdGVTdWJzY3JpcHRpb25zKCk7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmNoYW5nZXMuc3Vic2NyaWJlKHRoaXMudXBkYXRlU3Vic2NyaXB0aW9ucy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKGQgPT4ge1xuICAgICAgZC5kcmFnU3RhcnQudW5zdWJzY3JpYmUoKTtcbiAgICAgIGQuZHJhZ2dpbmcudW5zdWJzY3JpYmUoKTtcbiAgICAgIGQuZHJhZ0VuZC51bnN1YnNjcmliZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlU3Vic2NyaXB0aW9ucygpOiB2b2lkIHtcbiAgICBjb25zdCBkaWZmcyA9IHRoaXMuZGlmZmVyLmRpZmYodGhpcy5jcmVhdGVNYXBEaWZmcygpKTtcblxuICAgIGlmIChkaWZmcykge1xuICAgICAgY29uc3Qgc3Vic2NyaWJlID0gKHsgY3VycmVudFZhbHVlLCBwcmV2aW91c1ZhbHVlIH06IGFueSkgPT4ge1xuICAgICAgICB1bnN1YnNjcmliZSh7IHByZXZpb3VzVmFsdWUgfSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGN1cnJlbnRWYWx1ZS5kcmFnU3RhcnQuc3Vic2NyaWJlKHRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgY3VycmVudFZhbHVlLmRyYWdnaW5nLnN1YnNjcmliZSh0aGlzLm9uRHJhZ2dpbmcuYmluZCh0aGlzKSk7XG4gICAgICAgICAgY3VycmVudFZhbHVlLmRyYWdFbmQuc3Vic2NyaWJlKHRoaXMub25EcmFnRW5kLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB1bnN1YnNjcmliZSA9ICh7IHByZXZpb3VzVmFsdWUgfTogYW55KSA9PiB7XG4gICAgICAgIGlmIChwcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgICAgcHJldmlvdXNWYWx1ZS5kcmFnU3RhcnQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICBwcmV2aW91c1ZhbHVlLmRyYWdnaW5nLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgcHJldmlvdXNWYWx1ZS5kcmFnRW5kLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGRpZmZzLmZvckVhY2hBZGRlZEl0ZW0oc3Vic2NyaWJlKTtcbiAgICAgIC8vIGRpZmZzLmZvckVhY2hDaGFuZ2VkSXRlbShzdWJzY3JpYmUuYmluZCh0aGlzKSk7XG4gICAgICBkaWZmcy5mb3JFYWNoUmVtb3ZlZEl0ZW0odW5zdWJzY3JpYmUpO1xuICAgIH1cbiAgfVxuXG4gIG9uRHJhZ1N0YXJ0KCk6IHZvaWQge1xuICAgIHRoaXMucG9zaXRpb25zID0ge307XG5cbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChjb25zdCBkcmFnZ2VyIG9mIHRoaXMuZHJhZ2dhYmxlcy50b0FycmF5KCkpIHtcbiAgICAgIGNvbnN0IGVsbSA9IGRyYWdnZXIuZWxlbWVudDtcbiAgICAgIGNvbnN0IGxlZnQgPSBwYXJzZUludChlbG0ub2Zmc2V0TGVmdC50b1N0cmluZygpLCAxMCk7XG4gICAgICB0aGlzLnBvc2l0aW9uc1tkcmFnZ2VyLmRyYWdNb2RlbC4kJGlkXSA9IHtcbiAgICAgICAgbGVmdCxcbiAgICAgICAgcmlnaHQ6IGxlZnQgKyBwYXJzZUludChlbG0ub2Zmc2V0V2lkdGgudG9TdHJpbmcoKSwgMTApLFxuICAgICAgICBpbmRleDogaSsrLFxuICAgICAgICBlbGVtZW50OiBlbG1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgb25EcmFnZ2luZyh7IGVsZW1lbnQsIG1vZGVsLCBldmVudCB9OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBwcmV2UG9zID0gdGhpcy5wb3NpdGlvbnNbbW9kZWwuJCRpZF07XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5pc1RhcmdldChtb2RlbCwgZXZlbnQpO1xuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgaWYgKHRoaXMubGFzdERyYWdnaW5nSW5kZXggIT09IHRhcmdldC5pKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0Q2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICBwcmV2SW5kZXg6IHRoaXMubGFzdERyYWdnaW5nSW5kZXgsXG4gICAgICAgICAgbmV3SW5kZXg6IHRhcmdldC5pLFxuICAgICAgICAgIGluaXRpYWxJbmRleDogcHJldlBvcy5pbmRleFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sYXN0RHJhZ2dpbmdJbmRleCA9IHRhcmdldC5pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5sYXN0RHJhZ2dpbmdJbmRleCAhPT0gcHJldlBvcy5pbmRleCkge1xuICAgICAgdGhpcy50YXJnZXRDaGFuZ2VkLmVtaXQoe1xuICAgICAgICBwcmV2SW5kZXg6IHRoaXMubGFzdERyYWdnaW5nSW5kZXgsXG4gICAgICAgIGluaXRpYWxJbmRleDogcHJldlBvcy5pbmRleFxuICAgICAgfSk7XG4gICAgICB0aGlzLmxhc3REcmFnZ2luZ0luZGV4ID0gcHJldlBvcy5pbmRleDtcbiAgICB9XG4gIH1cblxuICBvbkRyYWdFbmQoeyBlbGVtZW50LCBtb2RlbCwgZXZlbnQgfTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgcHJldlBvcyA9IHRoaXMucG9zaXRpb25zW21vZGVsLiQkaWRdO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5pc1RhcmdldChtb2RlbCwgZXZlbnQpO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHRoaXMucmVvcmRlci5lbWl0KHtcbiAgICAgICAgcHJldkluZGV4OiBwcmV2UG9zLmluZGV4LFxuICAgICAgICBuZXdJbmRleDogdGFyZ2V0LmksXG4gICAgICAgIG1vZGVsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3REcmFnZ2luZ0luZGV4ID0gdW5kZWZpbmVkO1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICdhdXRvJztcbiAgfVxuXG4gIGlzVGFyZ2V0KG1vZGVsOiBhbnksIGV2ZW50OiBhbnkpOiBhbnkge1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCB4ID0gZXZlbnQueCB8fCBldmVudC5jbGllbnRYO1xuICAgIGNvbnN0IHkgPSBldmVudC55IHx8IGV2ZW50LmNsaWVudFk7XG4gICAgY29uc3QgdGFyZ2V0cyA9IHRoaXMuZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoeCwgeSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluXG4gICAgZm9yIChjb25zdCBpZCBpbiB0aGlzLnBvc2l0aW9ucykge1xuICAgICAgLy8gY3VycmVudCBjb2x1bW4gcG9zaXRpb24gd2hpY2ggdGhyb3dzIGV2ZW50LlxuICAgICAgY29uc3QgcG9zID0gdGhpcy5wb3NpdGlvbnNbaWRdO1xuXG4gICAgICAvLyBzaW5jZSB3ZSBkcmFnIHRoZSBpbm5lciBzcGFuLCB3ZSBuZWVkIHRvIGZpbmQgaXQgaW4gdGhlIGVsZW1lbnRzIGF0IHRoZSBjdXJzb3JcbiAgICAgIGlmIChtb2RlbC4kJGlkICE9PSBpZCAmJiB0YXJnZXRzLmZpbmQoKGVsOiBhbnkpID0+IGVsID09PSBwb3MuZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwb3MsXG4gICAgICAgICAgaVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVNYXBEaWZmcygpOiB7IFtrZXk6IHN0cmluZ106IERyYWdnYWJsZURpcmVjdGl2ZSB9IHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLnRvQXJyYXkoKS5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuICAgICAgYWNjW2N1cnIuZHJhZ01vZGVsLiQkaWRdID0gY3VycjtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9XG59XG4iXX0=