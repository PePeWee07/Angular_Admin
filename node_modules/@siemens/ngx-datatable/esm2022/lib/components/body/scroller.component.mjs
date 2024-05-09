import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class ScrollerComponent {
    constructor(ngZone, element, renderer) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.scrollbarV = false;
        this.scrollbarH = false;
        this.scroll = new EventEmitter();
        this.scrollYPos = 0;
        this.scrollXPos = 0;
        this.prevScrollYPos = 0;
        this.prevScrollXPos = 0;
        this._scrollEventListener = null;
        this.element = element.nativeElement;
    }
    ngOnInit() {
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            const renderer = this.renderer;
            this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
            this._scrollEventListener = this.onScrolled.bind(this);
            this.parentElement.addEventListener('scroll', this._scrollEventListener);
        }
    }
    ngOnDestroy() {
        if (this._scrollEventListener) {
            this.parentElement.removeEventListener('scroll', this._scrollEventListener);
            this._scrollEventListener = null;
        }
    }
    setOffset(offsetY) {
        if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
        }
    }
    onScrolled(event) {
        const dom = event.currentTarget;
        requestAnimationFrame(() => {
            this.scrollYPos = dom.scrollTop;
            this.scrollXPos = dom.scrollLeft;
            this.updateOffset();
        });
    }
    updateOffset() {
        let direction;
        if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
        }
        else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
        }
        this.scroll.emit({
            direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ScrollerComponent, deps: [{ token: i0.NgZone }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.6", type: ScrollerComponent, selector: "datatable-scroller", inputs: { scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", scrollHeight: "scrollHeight", scrollWidth: "scrollWidth" }, outputs: { scroll: "scroll" }, host: { properties: { "style.height.px": "this.scrollHeight", "style.width.px": "this.scrollWidth" }, classAttribute: "datatable-scroll" }, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ScrollerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'datatable-scroller',
                    template: ` <ng-content></ng-content> `,
                    host: {
                        class: 'datatable-scroll'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: () => [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { scrollbarV: [{
                type: Input
            }], scrollbarH: [{
                type: Input
            }], scrollHeight: [{
                type: HostBinding,
                args: ['style.height.px']
            }, {
                type: Input
            }], scrollWidth: [{
                type: HostBinding,
                args: ['style.width.px']
            }, {
                type: Input
            }], scroll: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGF0YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvYm9keS9zY3JvbGxlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBSUwsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDOztBQVl2QixNQUFNLE9BQU8saUJBQWlCO0lBd0I1QixZQUFvQixNQUFjLEVBQUUsT0FBZ0MsRUFBVSxRQUFtQjtRQUE3RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQTRDLGFBQVEsR0FBUixRQUFRLENBQVc7UUF2QnhGLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQVVsQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekQsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUtYLHlCQUFvQixHQUFRLElBQUksQ0FBQztRQUd2QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVELFFBQVE7UUFDTix3Q0FBd0M7UUFDeEMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDdEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLE9BQWU7UUFDdkIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBaUI7UUFDMUIsTUFBTSxHQUFHLEdBQVksS0FBSyxDQUFDLGFBQXdCLENBQUM7UUFDcEQscUJBQXFCLENBQUMsR0FBRyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLFNBQWlCLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDekMsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUNwQjthQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2hELFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDbEI7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLFNBQVM7WUFDVCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzVCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEMsQ0FBQzs4R0E1RVUsaUJBQWlCO2tHQUFqQixpQkFBaUIsK1ZBTmxCLDZCQUE2Qjs7MkZBTTVCLGlCQUFpQjtrQkFSN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLGtCQUFrQjtxQkFDMUI7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzRIQUVVLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFJSixZQUFZO3NCQUZiLFdBQVc7dUJBQUMsaUJBQWlCOztzQkFDN0IsS0FBSztnQkFLSixXQUFXO3NCQUZaLFdBQVc7dUJBQUMsZ0JBQWdCOztzQkFDNUIsS0FBSztnQkFHSSxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vdXNlRXZlbnQgfSBmcm9tICcuLi8uLi9ldmVudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhdGFibGUtc2Nyb2xsZXInLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2RhdGF0YWJsZS1zY3JvbGwnXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBzY3JvbGxiYXJWID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNjcm9sbGJhckggPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXG4gIEBJbnB1dCgpXG4gICAgc2Nyb2xsSGVpZ2h0OiBudW1iZXI7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aC5weCcpXG4gIEBJbnB1dCgpXG4gICAgc2Nyb2xsV2lkdGg6IG51bWJlcjtcblxuICBAT3V0cHV0KCkgc2Nyb2xsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBzY3JvbGxZUG9zID0gMDtcbiAgc2Nyb2xsWFBvcyA9IDA7XG4gIHByZXZTY3JvbGxZUG9zID0gMDtcbiAgcHJldlNjcm9sbFhQb3MgPSAwO1xuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIG9uU2Nyb2xsTGlzdGVuZXI6IGFueTtcblxuICBwcml2YXRlIF9zY3JvbGxFdmVudExpc3RlbmVyOiBhbnkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBtYW51YWwgYmluZCBzbyB3ZSBkb24ndCBhbHdheXMgbGlzdGVuXG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyViB8fCB0aGlzLnNjcm9sbGJhckgpIHtcbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcjtcbiAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHJlbmRlcmVyLnBhcmVudE5vZGUocmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnQpKTtcbiAgICAgIHRoaXMuX3Njcm9sbEV2ZW50TGlzdGVuZXIgPSB0aGlzLm9uU2Nyb2xsZWQuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGxFdmVudExpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc2Nyb2xsRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbEV2ZW50TGlzdGVuZXIpO1xuICAgICAgdGhpcy5fc2Nyb2xsRXZlbnRMaXN0ZW5lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgc2V0T2Zmc2V0KG9mZnNldFk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgIHRoaXMucGFyZW50RWxlbWVudC5zY3JvbGxUb3AgPSBvZmZzZXRZO1xuICAgIH1cbiAgfVxuXG4gIG9uU2Nyb2xsZWQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBkb206IEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsWVBvcyA9IGRvbS5zY3JvbGxUb3A7XG4gICAgICB0aGlzLnNjcm9sbFhQb3MgPSBkb20uc2Nyb2xsTGVmdDtcbiAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KCk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVPZmZzZXQoKTogdm9pZCB7XG4gICAgbGV0IGRpcmVjdGlvbjogc3RyaW5nO1xuICAgIGlmICh0aGlzLnNjcm9sbFlQb3MgPCB0aGlzLnByZXZTY3JvbGxZUG9zKSB7XG4gICAgICBkaXJlY3Rpb24gPSAnZG93bic7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbFlQb3MgPiB0aGlzLnByZXZTY3JvbGxZUG9zKSB7XG4gICAgICBkaXJlY3Rpb24gPSAndXAnO1xuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsLmVtaXQoe1xuICAgICAgZGlyZWN0aW9uLFxuICAgICAgc2Nyb2xsWVBvczogdGhpcy5zY3JvbGxZUG9zLFxuICAgICAgc2Nyb2xsWFBvczogdGhpcy5zY3JvbGxYUG9zXG4gICAgfSk7XG5cbiAgICB0aGlzLnByZXZTY3JvbGxZUG9zID0gdGhpcy5zY3JvbGxZUG9zO1xuICAgIHRoaXMucHJldlNjcm9sbFhQb3MgPSB0aGlzLnNjcm9sbFhQb3M7XG4gIH1cbn1cbiJdfQ==