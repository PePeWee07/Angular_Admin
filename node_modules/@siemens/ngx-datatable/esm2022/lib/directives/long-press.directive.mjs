import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class LongPressDirective {
    constructor() {
        this.pressEnabled = true;
        this.duration = 500;
        this.longPressStart = new EventEmitter();
        this.longPressing = new EventEmitter();
        this.longPressEnd = new EventEmitter();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    get press() {
        return this.pressing;
    }
    get isLongPress() {
        return this.isLongPressing;
    }
    onMouseDown(event) {
        // don't do right/middle clicks
        if (event.which !== 1 || !this.pressEnabled) {
            return;
        }
        // don't start drag if its on resize handle
        const target = event.target;
        if (target.classList.contains('resize-handle')) {
            return;
        }
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        const mouseup = fromEvent(document, 'mouseup');
        this.subscription = mouseup.subscribe((ev) => this.onMouseup());
        this.timeout = setTimeout(() => {
            this.isLongPressing = true;
            this.longPressStart.emit({
                event,
                model: this.pressModel
            });
            this.subscription.add(fromEvent(document, 'mousemove')
                .pipe(takeUntil(mouseup))
                .subscribe((mouseEvent) => this.onMouseMove(mouseEvent)));
            this.loop(event);
        }, this.duration);
        this.loop(event);
    }
    onMouseMove(event) {
        if (this.pressing && !this.isLongPressing) {
            const xThres = Math.abs(event.clientX - this.mouseX) > 10;
            const yThres = Math.abs(event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    }
    loop(event) {
        if (this.isLongPressing) {
            this.timeout = setTimeout(() => {
                this.longPressing.emit({
                    event,
                    model: this.pressModel
                });
                this.loop(event);
            }, 50);
        }
    }
    endPress() {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;
        this._destroySubscription();
        this.longPressEnd.emit({
            model: this.pressModel
        });
    }
    onMouseup() {
        this.endPress();
    }
    ngOnDestroy() {
        clearTimeout(this.timeout);
        this._destroySubscription();
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: LongPressDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.6", type: LongPressDirective, selector: "[long-press]", inputs: { pressEnabled: "pressEnabled", pressModel: "pressModel", duration: "duration" }, outputs: { longPressStart: "longPressStart", longPressing: "longPressing", longPressEnd: "longPressEnd" }, host: { listeners: { "mousedown": "onMouseDown($event)" }, properties: { "class.press": "this.press", "class.longpress": "this.isLongPress" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: LongPressDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[long-press]' }]
        }], propDecorators: { pressEnabled: [{
                type: Input
            }], pressModel: [{
                type: Input
            }], duration: [{
                type: Input
            }], longPressStart: [{
                type: Output
            }], longPressing: [{
                type: Output
            }], longPressEnd: [{
                type: Output
            }], press: [{
                type: HostBinding,
                args: ['class.press']
            }], isLongPress: [{
                type: HostBinding,
                args: ['class.longpress']
            }], onMouseDown: [{
                type: HostListener,
                args: ['mousedown', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1wcmVzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0YXRhYmxlL3NyYy9saWIvZGlyZWN0aXZlcy9sb25nLXByZXNzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLFNBQVMsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUkzQyxNQUFNLE9BQU8sa0JBQWtCO0lBRC9CO1FBRVcsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFcEIsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUVkLG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkQsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRCxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSy9ELFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxXQUFNLEdBQUcsQ0FBQyxDQUFDO0tBb0daO0lBaEdDLElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFHRCxXQUFXLENBQUMsS0FBaUI7UUFDM0IsK0JBQStCO1FBQy9CLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQUMsT0FBTztTQUFDO1FBRXRELDJDQUEyQztRQUMzQyxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBcUIsQ0FBQztRQUMzQyxJQUFJ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USxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFdBQVc7UUFDVCxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7U0FDL0I7SUFDSCxDQUFDOzhHQWhIVSxrQkFBa0I7a0dBQWxCLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFEOUIsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7OEJBRTVCLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVJLGNBQWM7c0JBQXZCLE1BQU07Z0JBQ0csWUFBWTtzQkFBckIsTUFBTTtnQkFDRyxZQUFZO3NCQUFyQixNQUFNO2dCQVdILEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxhQUFhO2dCQU10QixXQUFXO3NCQURkLFdBQVc7dUJBQUMsaUJBQWlCO2dCQU05QixXQUFXO3NCQURWLFlBQVk7dUJBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1vdXNlRXZlbnQgfSBmcm9tICcuLi9ldmVudHMnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbG9uZy1wcmVzc10nIH0pXG5leHBvcnQgY2xhc3MgTG9uZ1ByZXNzRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHJlc3NFbmFibGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgcHJlc3NNb2RlbDogYW55O1xuICBASW5wdXQoKSBkdXJhdGlvbiA9IDUwMDtcblxuICBAT3V0cHV0KCkgbG9uZ1ByZXNzU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbG9uZ1ByZXNzaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxvbmdQcmVzc0VuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJlc3Npbmc6IGJvb2xlYW47XG4gIGlzTG9uZ1ByZXNzaW5nOiBib29sZWFuO1xuICB0aW1lb3V0OiBhbnk7XG4gIG1vdXNlWCA9IDA7XG4gIG1vdXNlWSA9IDA7XG5cbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wcmVzcycpXG4gIGdldCBwcmVzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcmVzc2luZztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubG9uZ3ByZXNzJylcbiAgZ2V0IGlzTG9uZ1ByZXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzTG9uZ1ByZXNzaW5nO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBkb24ndCBkbyByaWdodC9taWRkbGUgY2xpY2tzXG4gICAgaWYgKGV2ZW50LndoaWNoICE9PSAxIHx8ICF0aGlzLnByZXNzRW5hYmxlZCkge3JldHVybjt9XG5cbiAgICAvLyBkb24ndCBzdGFydCBkcmFnIGlmIGl0cyBvbiByZXNpemUgaGFuZGxlXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXNpemUtaGFuZGxlJykpIHtyZXR1cm47fVxuXG4gICAgdGhpcy5tb3VzZVggPSBldmVudC5jbGllbnRYO1xuICAgIHRoaXMubW91c2VZID0gZXZlbnQuY2xpZW50WTtcblxuICAgIHRoaXMucHJlc3NpbmcgPSB0cnVlO1xuICAgIHRoaXMuaXNMb25nUHJlc3NpbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1vdXNldXAgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdtb3VzZXVwJyk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBtb3VzZXVwLnN1YnNjcmliZSgoZXY6IE1vdXNlRXZlbnQpID0+IHRoaXMub25Nb3VzZXVwKCkpO1xuXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzTG9uZ1ByZXNzaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9uZ1ByZXNzU3RhcnQuZW1pdCh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBtb2RlbDogdGhpcy5wcmVzc01vZGVsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICdtb3VzZW1vdmUnKVxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbChtb3VzZXVwKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChtb3VzZUV2ZW50OiBNb3VzZUV2ZW50KSA9PiB0aGlzLm9uTW91c2VNb3ZlKG1vdXNlRXZlbnQpKVxuICAgICAgKTtcblxuICAgICAgdGhpcy5sb29wKGV2ZW50KTtcbiAgICB9LCB0aGlzLmR1cmF0aW9uKTtcblxuICAgIHRoaXMubG9vcChldmVudCk7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByZXNzaW5nICYmICF0aGlzLmlzTG9uZ1ByZXNzaW5nKSB7XG4gICAgICBjb25zdCB4VGhyZXMgPSBNYXRoLmFicyhldmVudC5jbGllbnRYIC0gdGhpcy5tb3VzZVgpID4gMTA7XG4gICAgICBjb25zdCB5VGhyZXMgPSBNYXRoLmFicyhldmVudC5jbGllbnRZIC0gdGhpcy5tb3VzZVkpID4gMTA7XG5cbiAgICAgIGlmICh4VGhyZXMgfHwgeVRocmVzKSB7XG4gICAgICAgIHRoaXMuZW5kUHJlc3MoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsb29wKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNMb25nUHJlc3NpbmcpIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmxvbmdQcmVzc2luZy5lbWl0KHtcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICBtb2RlbDogdGhpcy5wcmVzc01vZGVsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxvb3AoZXZlbnQpO1xuICAgICAgfSwgNTApO1xuICAgIH1cbiAgfVxuXG4gIGVuZFByZXNzKCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIHRoaXMuaXNMb25nUHJlc3NpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnByZXNzaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fZGVzdHJveVN1YnNjcmlwdGlvbigpO1xuXG4gICAgdGhpcy5sb25nUHJlc3NFbmQuZW1pdCh7XG4gICAgICBtb2RlbDogdGhpcy5wcmVzc01vZGVsXG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNldXAoKTogdm9pZCB7XG4gICAgdGhpcy5lbmRQcmVzcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgdGhpcy5fZGVzdHJveVN1YnNjcmlwdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVzdHJveVN1YnNjcmlwdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==