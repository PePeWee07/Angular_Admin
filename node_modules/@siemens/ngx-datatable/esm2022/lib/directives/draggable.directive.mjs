import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
export class DraggableDirective {
    constructor(element) {
        this.dragX = true;
        this.dragY = true;
        this.dragStart = new EventEmitter();
        this.dragging = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.isDragging = false;
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        if (changes.dragEventTarget && changes.dragEventTarget.currentValue && this.dragModel.dragging) {
            this.onMousedown(changes.dragEventTarget.currentValue);
        }
    }
    ngOnDestroy() {
        this._destroySubscription();
    }
    onMouseup(event) {
        if (!this.isDragging) {
            return;
        }
        this.isDragging = false;
        this.element.classList.remove('dragging');
        if (this.subscription) {
            this._destroySubscription();
            this.dragEnd.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    onMousedown(event) {
        // we only want to drag the inner header text
        const isDragElm = event.target.classList.contains('draggable');
        if (isDragElm && (this.dragX || this.dragY)) {
            event.preventDefault();
            this.isDragging = true;
            const mouseDownPos = { x: event.clientX, y: event.clientY };
            const mouseup = fromEvent(document, 'mouseup');
            this.subscription = mouseup.subscribe((ev) => this.onMouseup(ev));
            const mouseMoveSub = fromEvent(document, 'mousemove')
                .pipe(takeUntil(mouseup))
                .subscribe((ev) => this.move(ev, mouseDownPos));
            this.subscription.add(mouseMoveSub);
            this.dragStart.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    move(event, mouseDownPos) {
        if (!this.isDragging) {
            return;
        }
        const x = event.clientX - mouseDownPos.x;
        const y = event.clientY - mouseDownPos.y;
        if (this.dragX) {
            this.element.style.left = `${x}px`;
        }
        if (this.dragY) {
            this.element.style.top = `${y}px`;
        }
        this.element.classList.add('dragging');
        this.dragging.emit({
            event,
            element: this.element,
            model: this.dragModel
        });
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DraggableDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.6", type: DraggableDirective, selector: "[draggable]", inputs: { dragEventTarget: "dragEventTarget", dragModel: "dragModel", dragX: "dragX", dragY: "dragY" }, outputs: { dragStart: "dragStart", dragging: "dragging", dragEnd: "dragEnd" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DraggableDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[draggable]' }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { dragEventTarget: [{
                type: Input
            }], dragModel: [{
                type: Input
            }], dragX: [{
                type: Input
            }], dragY: [{
                type: Input
            }], dragStart: [{
                type: Output
            }], dragging: [{
                type: Output
            }], dragEnd: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2xpYi9kaXJlY3RpdmVzL2RyYWdnYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUF3QixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFM0M7Ozs7Ozs7R0FPRztBQUVILE1BQU0sT0FBTyxrQkFBa0I7SUFjN0IsWUFBWSxPQUFtQjtRQVh0QixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsVUFBSyxHQUFHLElBQUksQ0FBQztRQUVaLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsRCxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakQsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzFELGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsZUFBZSxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQzlGLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFpQjtR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QUFJLENBQUMsU0FBUztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sb0JBQW9CO1FBQzFCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs4R0E5RlUsa0JBQWtCO2tHQUFsQixrQkFBa0I7OzJGQUFsQixrQkFBa0I7a0JBRDlCLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFOytFQUUzQixlQUFlO3NCQUF2QixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFFSSxTQUFTO3NCQUFsQixNQUFNO2dCQUNHLFFBQVE7c0JBQWpCLE1BQU07Z0JBQ0csT0FBTztzQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBEcmFnZ2FibGUgRGlyZWN0aXZlIGZvciBBbmd1bGFyMlxuICpcbiAqIEluc3BpcmF0aW9uOlxuICogICBodHRwczovL2dpdGh1Yi5jb20vQW5ndWxhckNsYXNzL2FuZ3VsYXIyLWV4YW1wbGVzL2Jsb2IvbWFzdGVyL3J4LWRyYWdnYWJsZS9kaXJlY3RpdmVzL2RyYWdnYWJsZS50c1xuICogICBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1NjYyNTMwL2hvdy10by1pbXBsZW1lbnQtZHJhZy1hbmQtZHJvcC1pbi1hbmd1bGFyMlxuICpcbiAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2RyYWdnYWJsZV0nIH0pXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBkcmFnRXZlbnRUYXJnZXQ6IGFueTtcbiAgQElucHV0KCkgZHJhZ01vZGVsOiBhbnk7XG4gIEBJbnB1dCgpIGRyYWdYID0gdHJ1ZTtcbiAgQElucHV0KCkgZHJhZ1kgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBkcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHJhZ2dpbmc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHJhZ0VuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5kcmFnRXZlbnRUYXJnZXQgJiYgY2hhbmdlcy5kcmFnRXZlbnRUYXJnZXQuY3VycmVudFZhbHVlICYmIHRoaXMuZHJhZ01vZGVsLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLm9uTW91c2Vkb3duKGNoYW5nZXMuZHJhZ0V2ZW50VGFyZ2V0LmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGVzdHJveVN1YnNjcmlwdGlvbigpO1xuICB9XG5cbiAgb25Nb3VzZXVwKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcpIHtyZXR1cm47fVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG5cbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lTdWJzY3JpcHRpb24oKTtcbiAgICAgIHRoaXMuZHJhZ0VuZC5lbWl0KHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgbW9kZWw6IHRoaXMuZHJhZ01vZGVsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIC8vIHdlIG9ubHkgd2FudCB0byBkcmFnIHRoZSBpbm5lciBoZWFkZXIgdGV4dFxuICAgIGNvbnN0IGlzRHJhZ0VsbSA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnZHJhZ2dhYmxlJyk7XG5cbiAgICBpZiAoaXNEcmFnRWxtICYmICh0aGlzLmRyYWdYIHx8IHRoaXMuZHJhZ1kpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcblxuICAgICAgY29uc3QgbW91c2VEb3duUG9zID0geyB4OiBldmVudC5jbGllbnRYLCB5OiBldmVudC5jbGllbnRZIH07XG5cbiAgICAgIGNvbnN0IG1vdXNldXAgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdtb3VzZXVwJyk7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG1vdXNldXAuc3Vic2NyaWJlKChldjogTW91c2VFdmVudCkgPT4gdGhpcy5vbk1vdXNldXAoZXYpKTtcblxuICAgICAgY29uc3QgbW91c2VNb3ZlU3ViID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2Vtb3ZlJylcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKG1vdXNldXApKVxuICAgICAgICAuc3Vic2NyaWJlKChldjogTW91c2VFdmVudCkgPT4gdGhpcy5tb3ZlKGV2LCBtb3VzZURvd25Qb3MpKTtcblxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKG1vdXNlTW92ZVN1Yik7XG5cbiAgICAgIHRoaXMuZHJhZ1N0YXJ0LmVtaXQoe1xuICAgICAgICBldmVudCxcbiAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICBtb2RlbDogdGhpcy5kcmFnTW9kZWxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQsIG1vdXNlRG93blBvczogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcpIHtyZXR1cm47fVxuXG4gICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25Qb3MueDtcbiAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93blBvcy55O1xuXG4gICAgaWYgKHRoaXMuZHJhZ1gpIHt0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3h9cHhgO31cbiAgICBpZiAodGhpcy5kcmFnWSkge3RoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBgJHt5fXB4YDt9XG5cbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcblxuICAgIHRoaXMuZHJhZ2dpbmcuZW1pdCh7XG4gICAgICBldmVudCxcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgIG1vZGVsOiB0aGlzLmRyYWdNb2RlbFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVzdHJveVN1YnNjcmlwdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==