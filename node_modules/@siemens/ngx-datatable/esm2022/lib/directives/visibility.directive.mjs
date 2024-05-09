import { Directive, EventEmitter, HostBinding, Output } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
export class VisibilityDirective {
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.isVisible = false;
        this.visible = new EventEmitter();
    }
    ngOnInit() {
        this.runCheck();
    }
    ngOnDestroy() {
        clearTimeout(this.timeout);
    }
    onVisibilityChange() {
        // trigger zone recalc for columns
        this.zone.run(() => {
            this.isVisible = true;
            this.visible.emit(true);
        });
    }
    runCheck() {
        const check = () => {
            // https://davidwalsh.name/offsetheight-visibility
            const { offsetHeight, offsetWidth } = this.element.nativeElement;
            if (offsetHeight && offsetWidth) {
                clearTimeout(this.timeout);
                this.onVisibilityChange();
            }
            else {
                clearTimeout(this.timeout);
                this.zone.runOutsideAngular(() => {
                    this.timeout = setTimeout(() => check(), 50);
                });
            }
        };
        this.timeout = setTimeout(() => check());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: VisibilityDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.6", type: VisibilityDirective, selector: "[visibilityObserver]", outputs: { visible: "visible" }, host: { properties: { "class.visible": "this.isVisible" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: VisibilityDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[visibilityObserver]' }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { isVisible: [{
                type: HostBinding,
                args: ['class.visible']
            }], visible: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJpbGl0eS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0YXRhYmxlL3NyYy9saWIvZGlyZWN0aXZlcy92aXNpYmlsaXR5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxXQUFXLEVBQTZCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFcEg7Ozs7Ozs7Ozs7R0FVRztBQUVILE1BQU0sT0FBTyxtQkFBbUI7SUFROUIsWUFBb0IsT0FBbUIsRUFBVSxJQUFZO1FBQXpDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBTjNELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFVixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFJTSxDQUFDO0lBRWpFLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFdBQVc7UUFDVCxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQ2pCLGtEQUFrRDtZQUNsRCxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBRWpFLElBQUksWUFBWSxJQUFJLFdBQVcsRUFBRTtnQkFDL0IsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDOzhHQTNDVSxtQkFBbUI7a0dBQW5CLG1CQUFtQjs7MkZBQW5CLG1CQUFtQjtrQkFEL0IsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTtvR0FHM0MsU0FBUztzQkFEVixXQUFXO3VCQUFDLGVBQWU7Z0JBR2xCLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFZpc2liaWxpdHkgT2JzZXJ2ZXIgRGlyZWN0aXZlXG4gKlxuICogVXNhZ2U6XG4gKlxuICogXHRcdDxkaXZcbiAqIFx0XHRcdHZpc2liaWxpdHlPYnNlcnZlclxuICogXHRcdFx0KHZpc2libGUpPVwib25WaXNpYmxlKCRldmVudClcIj5cbiAqIFx0XHQ8L2Rpdj5cbiAqXG4gKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t2aXNpYmlsaXR5T2JzZXJ2ZXJdJyB9KVxuZXhwb3J0IGNsYXNzIFZpc2liaWxpdHlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MudmlzaWJsZScpXG4gICAgaXNWaXNpYmxlID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHZpc2libGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHRpbWVvdXQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgem9uZTogTmdab25lKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucnVuQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9XG5cbiAgb25WaXNpYmlsaXR5Q2hhbmdlKCk6IHZvaWQge1xuICAgIC8vIHRyaWdnZXIgem9uZSByZWNhbGMgZm9yIGNvbHVtbnNcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMudmlzaWJsZS5lbWl0KHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcnVuQ2hlY2soKTogdm9pZCB7XG4gICAgY29uc3QgY2hlY2sgPSAoKSA9PiB7XG4gICAgICAvLyBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9vZmZzZXRoZWlnaHQtdmlzaWJpbGl0eVxuICAgICAgY29uc3QgeyBvZmZzZXRIZWlnaHQsIG9mZnNldFdpZHRoIH0gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcblxuICAgICAgaWYgKG9mZnNldEhlaWdodCAmJiBvZmZzZXRXaWR0aCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgdGhpcy5vblZpc2liaWxpdHlDaGFuZ2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gY2hlY2soKSwgNTApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBjaGVjaygpKTtcbiAgfVxufVxuIl19