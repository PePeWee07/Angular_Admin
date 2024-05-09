import { isPlatformServer } from '@angular/common';
import { Component, Directive, ElementRef, EventEmitter, forwardRef, inject, Input, NgZone, Output, PLATFORM_ID, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * Slick component
 */
export class SlickCarouselComponent {
    config;
    afterChange = new EventEmitter();
    beforeChange = new EventEmitter();
    breakpoint = new EventEmitter();
    destroy = new EventEmitter();
    init = new EventEmitter();
    $instance;
    // access from parent component can be a problem with change detection timing. Please use afterChange output
    currentIndex = 0;
    slides = [];
    initialized = false;
    _removedSlides = [];
    _addedSlides = [];
    el = inject(ElementRef);
    zone = inject(NgZone);
    isServer = isPlatformServer(inject(PLATFORM_ID));
    /**
     * On component destroy
     */
    ngOnDestroy() {
        this.unslick();
    }
    ngAfterViewInit() {
        this.ngAfterViewChecked();
    }
    /**
     * On component view checked
     */
    ngAfterViewChecked() {
        if (this.isServer) {
            return;
        }
        if (this._addedSlides.length > 0 || this._removedSlides.length > 0) {
            const nextSlidesLength = this.slides.length - this._removedSlides.length + this._addedSlides.length;
            if (!this.initialized) {
                if (nextSlidesLength > 0) {
                    this.initSlick();
                }
                // if nextSlidesLength is zere, do nothing
            }
            else if (nextSlidesLength === 0) { // unslick case
                this.unslick();
            }
            else {
                this._addedSlides.forEach(slickItem => {
                    this.slides.push(slickItem);
                    this.zone.runOutsideAngular(() => {
                        this.$instance.slick('slickAdd', slickItem.el.nativeElement);
                    });
                });
                this._addedSlides = [];
                this._removedSlides.forEach(slickItem => {
                    const idx = this.slides.indexOf(slickItem);
                    this.slides = this.slides.filter(s => s !== slickItem);
                    this.zone.runOutsideAngular(() => {
                        this.$instance.slick('slickRemove', idx);
                    });
                });
                this._removedSlides = [];
            }
        }
    }
    /**
     * init slick
     */
    initSlick() {
        this.slides = this._addedSlides;
        this._addedSlides = [];
        this._removedSlides = [];
        this.zone.runOutsideAngular(() => {
            this.$instance = jQuery(this.el.nativeElement);
            this.$instance.on('init', (event, slick) => {
                this.zone.run(() => {
                    this.init.emit({ event, slick });
                });
            });
            this.$instance.slick(this.config);
            this.zone.run(() => {
                this.initialized = true;
                this.currentIndex = this.config?.initialSlide || 0;
            });
            this.$instance.on('afterChange', (event, slick, currentSlide) => {
                this.zone.run(() => {
                    this.afterChange.emit({
                        event,
                        slick,
                        currentSlide,
                        first: currentSlide === 0,
                        last: slick.$slides.length === currentSlide + slick.options.slidesToScroll
                    });
                    this.currentIndex = currentSlide;
                });
            });
            this.$instance.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
                this.zone.run(() => {
                    this.beforeChange.emit({ event, slick, currentSlide, nextSlide });
                    this.currentIndex = nextSlide;
                });
            });
            this.$instance.on('breakpoint', (event, slick, breakpoint) => {
                this.zone.run(() => {
                    this.breakpoint.emit({ event, slick, breakpoint });
                });
            });
            this.$instance.on('destroy', (event, slick) => {
                this.zone.run(() => {
                    this.destroy.emit({ event, slick });
                    this.initialized = false;
                });
            });
        });
    }
    addSlide(slickItem) {
        this._addedSlides.push(slickItem);
    }
    removeSlide(slickItem) {
        this._removedSlides.push(slickItem);
    }
    /**
     * Slick Method
     */
    slickGoTo(index) {
        this.zone.runOutsideAngular(() => {
            this.$instance.slick('slickGoTo', index);
        });
    }
    slickNext() {
        this.zone.runOutsideAngular(() => {
            this.$instance.slick('slickNext');
        });
    }
    slickPrev() {
        this.zone.runOutsideAngular(() => {
            this.$instance.slick('slickPrev');
        });
    }
    slickPause() {
        this.zone.runOutsideAngular(() => {
            this.$instance.slick('slickPause');
        });
    }
    slickPlay() {
        this.zone.runOutsideAngular(() => {
            this.$instance.slick('slickPlay');
        });
    }
    unslick() {
        if (this.$instance) {
            this.zone.runOutsideAngular(() => {
                this.$instance.slick('unslick');
            });
            this.$instance = undefined;
        }
        this.initialized = false;
    }
    ngOnChanges(changes) {
        if (this.initialized) {
            const config = changes['config'];
            if (config.previousValue !== config.currentValue && config.currentValue !== undefined) {
                const refresh = config.currentValue['refresh'];
                const newOptions = Object.assign({}, config.currentValue);
                delete newOptions['refresh'];
                this.zone.runOutsideAngular(() => {
                    this.$instance.slick('slickSetOption', newOptions, refresh);
                });
            }
        }
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SlickCarouselComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    /** @nocollapse */ static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: SlickCarouselComponent, selector: "ngx-slick-carousel", inputs: { config: "config" }, outputs: { afterChange: "afterChange", beforeChange: "beforeChange", breakpoint: "breakpoint", destroy: "destroy", init: "init" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => SlickCarouselComponent)),
                multi: true
            }], exportAs: ["slick-carousel"], usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SlickCarouselComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-slick-carousel',
                    exportAs: 'slick-carousel',
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((() => SlickCarouselComponent)),
                            multi: true
                        }],
                    template: '<ng-content></ng-content>',
                }]
        }], propDecorators: { config: [{
                type: Input
            }], afterChange: [{
                type: Output
            }], beforeChange: [{
                type: Output
            }], breakpoint: [{
                type: Output
            }], destroy: [{
                type: Output
            }], init: [{
                type: Output
            }] } });
export class SlickItemDirective {
    carousel = inject(SlickCarouselComponent, { host: true });
    renderer = inject(Renderer2);
    el = inject(ElementRef);
    isServer = isPlatformServer(inject(PLATFORM_ID));
    ngOnInit() {
        this.carousel.addSlide(this);
        if (this.isServer && this.carousel.slides.length > 0) {
            // Do not show other slides in server side rendering (broken ui can be affacted to Core Web Vitals)
            this.renderer.setStyle(this.el, 'display', 'none');
        }
    }
    ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SlickItemDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    /** @nocollapse */ static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: SlickItemDirective, selector: "[ngxSlickItem]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SlickItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxSlickItem]',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NsaWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBR0wsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBRU4sS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFJbkQ7O0dBRUc7QUFXSCxNQUFNLE9BQU8sc0JBQXNCO0lBRXRCLE1BQU0sQ0FBTTtJQUNYLFdBQVcsR0FBa0csSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNoSSxZQUFZLEdBQXNGLElBQUksWUFBWSxFQUFFLENBQUM7SUFDckgsVUFBVSxHQUE4RCxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzNGLE9BQU8sR0FBNkMsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN2RSxJQUFJLEdBQTZDLElBQUksWUFBWSxFQUFFLENBQUM7SUFFekUsU0FBUyxDQUFNO0lBRXRCLDRHQUE0RztJQUNwRyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBRWxCLE1BQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUNuQixjQUFjLEdBQXlCLEVBQUUsQ0FBQztJQUMxQyxZQUFZLEdBQXlCLEVBQUUsQ0FBQztJQUV4QyxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hCLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsUUFBUSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBRXpEOztPQUVH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OEJBR1ksTUFBTTtzQkFBZCxLQUFLO2dCQUNJLFdBQVc7c0JBQXBCLE1BQU07Z0JBQ0csWUFBWTtzQkFBckIsTUFBTTtnQkFDRyxVQUFVO3NCQUFuQixNQUFNO2dCQUNHLE9BQU87c0JBQWhCLE1BQU07Z0JBQ0csSUFBSTtzQkFBYixNQUFNOztBQWtNWCxNQUFNLE9BQU8sa0JBQWtCO0lBQ3JCLFFBQVEsR0FBRyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUVsRSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdCLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEIsUUFBUSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBRWpELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwRCxtR0FBbUc7WUFDbkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7MEhBakJVLGtCQUFrQjs4R0FBbEIsa0JBQWtCOzsyRkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLFxuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBpbmplY3QsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBQTEFURk9STV9JRCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmRlY2xhcmUgY29uc3QgalF1ZXJ5OiBhbnk7XG5cbi8qKlxuICogU2xpY2sgY29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1zbGljay1jYXJvdXNlbCcsXG4gIGV4cG9ydEFzOiAnc2xpY2stY2Fyb3VzZWwnLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2xpY2tDYXJvdXNlbENvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbiAgfV0sXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWNrQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG5cbiAgICBASW5wdXQoKSBjb25maWc6IGFueTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBhbnksIHNsaWNrOiBhbnksIGN1cnJlbnRTbGlkZTogbnVtYmVyLCBmaXJzdDogYm9vbGVhbiwgbGFzdDogYm9vbGVhbiB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYmVmb3JlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBldmVudDogYW55LCBzbGljazogYW55LCBjdXJyZW50U2xpZGU6IG51bWJlciwgbmV4dFNsaWRlOiBudW1iZXIgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGJyZWFrcG9pbnQ6IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBhbnksIHNsaWNrOiBhbnksIGJyZWFrcG9pbnQ6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgZGVzdHJveTogRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IGFueSwgc2xpY2s6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgaW5pdDogRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IGFueSwgc2xpY2s6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgJGluc3RhbmNlOiBhbnk7XG5cbiAgLy8gYWNjZXNzIGZyb20gcGFyZW50IGNvbXBvbmVudCBjYW4gYmUgYSBwcm9ibGVtIHdpdGggY2hhbmdlIGRldGVjdGlvbiB0aW1pbmcuIFBsZWFzZSB1c2UgYWZ0ZXJDaGFuZ2Ugb3V0cHV0XG4gIHByaXZhdGUgY3VycmVudEluZGV4ID0gMDtcblxuICBwdWJsaWMgc2xpZGVzOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVtb3ZlZFNsaWRlczogU2xpY2tJdGVtRGlyZWN0aXZlW10gPSBbXTtcbiAgcHJpdmF0ZSBfYWRkZWRTbGlkZXM6IFNsaWNrSXRlbURpcmVjdGl2ZVtdID0gW107XG5cbiAgcHJpdmF0ZSBlbCA9IGluamVjdChFbGVtZW50UmVmKTtcbiAgcHJpdmF0ZSB6b25lID0gaW5qZWN0KE5nWm9uZSk7XG4gIHByaXZhdGUgaXNTZXJ2ZXIgPSBpc1BsYXRmb3JtU2VydmVyKGluamVjdChQTEFURk9STV9JRCkpO1xuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgZGVzdHJveVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy51bnNsaWNrKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ0FmdGVyVmlld0NoZWNrZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgdmlldyBjaGVja2VkXG4gICAqL1xuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMuaXNTZXJ2ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FkZGVkU2xpZGVzLmxlbmd0aCA+IDAgfHwgdGhpcy5fcmVtb3ZlZFNsaWRlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBuZXh0U2xpZGVzTGVuZ3RoID0gdGhpcy5zbGlkZXMubGVuZ3RoIC0gdGhpcy5fcmVtb3ZlZFNsaWRlcy5sZW5ndGggKyB0aGlzLl9hZGRlZFNsaWRlcy5sZW5ndGg7XG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgaWYgKG5leHRTbGlkZXNMZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5pbml0U2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBuZXh0U2xpZGVzTGVuZ3RoIGlzIHplcmUsIGRvIG5vdGhpbmdcbiAgICAgIH0gZWxzZSBpZiAobmV4dFNsaWRlc0xlbmd0aCA9PT0gMCkgeyAvLyB1bnNsaWNrIGNhc2VcbiAgICAgICAgdGhpcy51bnNsaWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hZGRlZFNsaWRlcy5mb3JFYWNoKHNsaWNrSXRlbSA9PiB7XG4gICAgICAgICAgdGhpcy5zbGlkZXMucHVzaChzbGlja0l0ZW0pO1xuICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRpbnN0YW5jZS5zbGljaygnc2xpY2tBZGQnLCBzbGlja0l0ZW0uZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9hZGRlZFNsaWRlcyA9IFtdO1xuXG4gICAgICAgIHRoaXMuX3JlbW92ZWRTbGlkZXMuZm9yRWFjaChzbGlja0l0ZW0gPT4ge1xuICAgICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuc2xpZGVzLmluZGV4T2Yoc2xpY2tJdGVtKTtcbiAgICAgICAgICB0aGlzLnNsaWRlcyA9IHRoaXMuc2xpZGVzLmZpbHRlcihzID0+IHMgIT09IHNsaWNrSXRlbSk7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGluc3RhbmNlLnNsaWNrKCdzbGlja1JlbW92ZScsIGlkeCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZW1vdmVkU2xpZGVzID0gW107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGluaXQgc2xpY2tcbiAgICovXG4gIGluaXRTbGljaygpIHtcbiAgICB0aGlzLnNsaWRlcyA9IHRoaXMuX2FkZGVkU2xpZGVzO1xuICAgIHRoaXMuX2FkZGVkU2xpZGVzID0gW107XG4gICAgdGhpcy5fcmVtb3ZlZFNsaWRlcyA9IFtdO1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLiRpbnN0YW5jZSA9IGpRdWVyeSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgICB0aGlzLiRpbnN0YW5jZS5vbignaW5pdCcsIChldmVudCwgc2xpY2spID0+IHtcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbml0LmVtaXQoeyBldmVudCwgc2xpY2sgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuJGluc3RhbmNlLnNsaWNrKHRoaXMuY29uZmlnKTtcblxuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5jb25maWc/LmluaXRpYWxTbGlkZSB8fCAwO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuJGluc3RhbmNlLm9uKCdhZnRlckNoYW5nZScsIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSkgPT4ge1xuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJDaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgc2xpY2ssXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlLFxuICAgICAgICAgICAgICAgIGZpcnN0OiBjdXJyZW50U2xpZGUgPT09IDAsXG4gICAgICAgICAgICAgICAgbGFzdDogc2xpY2suJHNsaWRlcy5sZW5ndGggPT09IGN1cnJlbnRTbGlkZSArIHNsaWNrLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBjdXJyZW50U2xpZGU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuJGluc3RhbmNlLm9uKCdiZWZvcmVDaGFuZ2UnLCAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkgPT4ge1xuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmJlZm9yZUNoYW5nZS5lbWl0KHsgZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSB9KTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IG5leHRTbGlkZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy4kaW5zdGFuY2Uub24oJ2JyZWFrcG9pbnQnLCAoZXZlbnQsIHNsaWNrLCBicmVha3BvaW50KSA9PiB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYnJlYWtwb2ludC5lbWl0KHsgZXZlbnQsIHNsaWNrLCBicmVha3BvaW50IH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLiRpbnN0YW5jZS5vbignZGVzdHJveScsIChldmVudCwgc2xpY2spID0+IHtcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kZXN0cm95LmVtaXQoeyBldmVudCwgc2xpY2sgfSk7XG4gICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkU2xpZGUoc2xpY2tJdGVtOiBTbGlja0l0ZW1EaXJlY3RpdmUpIHtcbiAgICB0aGlzLl9hZGRlZFNsaWRlcy5wdXNoKHNsaWNrSXRlbSk7XG4gIH1cblxuICByZW1vdmVTbGlkZShzbGlja0l0ZW06IFNsaWNrSXRlbURpcmVjdGl2ZSkge1xuICAgIHRoaXMuX3JlbW92ZWRTbGlkZXMucHVzaChzbGlja0l0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNsaWNrIE1ldGhvZFxuICAgKi9cbiAgcHVibGljIHNsaWNrR29UbyhpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuJGluc3RhbmNlLnNsaWNrKCdzbGlja0dvVG8nLCBpbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2xpY2tOZXh0KCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLiRpbnN0YW5jZS5zbGljaygnc2xpY2tOZXh0Jyk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2xpY2tQcmV2KCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLiRpbnN0YW5jZS5zbGljaygnc2xpY2tQcmV2Jyk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2xpY2tQYXVzZSgpIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy4kaW5zdGFuY2Uuc2xpY2soJ3NsaWNrUGF1c2UnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzbGlja1BsYXkoKSB7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuJGluc3RhbmNlLnNsaWNrKCdzbGlja1BsYXknKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1bnNsaWNrKCkge1xuICAgIGlmICh0aGlzLiRpbnN0YW5jZSkge1xuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy4kaW5zdGFuY2Uuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kaW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgY29uc3QgY29uZmlnID0gY2hhbmdlc1snY29uZmlnJ107XG4gICAgICBpZiAoY29uZmlnLnByZXZpb3VzVmFsdWUgIT09IGNvbmZpZy5jdXJyZW50VmFsdWUgJiYgY29uZmlnLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHJlZnJlc2ggPSBjb25maWcuY3VycmVudFZhbHVlWydyZWZyZXNoJ107XG4gICAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcuY3VycmVudFZhbHVlKTtcbiAgICAgICAgZGVsZXRlIG5ld09wdGlvbnNbJ3JlZnJlc2gnXTtcblxuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJGluc3RhbmNlLnNsaWNrKCdzbGlja1NldE9wdGlvbicsIG5ld09wdGlvbnMsIHJlZnJlc2gpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4U2xpY2tJdGVtXScsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWNrSXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjYXJvdXNlbCA9IGluamVjdChTbGlja0Nhcm91c2VsQ29tcG9uZW50LCB7IGhvc3Q6IHRydWUgfSk7XG5cbiAgcmVuZGVyZXIgPSBpbmplY3QoUmVuZGVyZXIyKTtcbiAgZWwgPSBpbmplY3QoRWxlbWVudFJlZik7XG4gIGlzU2VydmVyID0gaXNQbGF0Zm9ybVNlcnZlcihpbmplY3QoUExBVEZPUk1fSUQpKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNhcm91c2VsLmFkZFNsaWRlKHRoaXMpO1xuICAgIGlmICh0aGlzLmlzU2VydmVyICYmIHRoaXMuY2Fyb3VzZWwuc2xpZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIERvIG5vdCBzaG93IG90aGVyIHNsaWRlcyBpbiBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgKGJyb2tlbiB1aSBjYW4gYmUgYWZmYWN0ZWQgdG8gQ29yZSBXZWIgVml0YWxzKVxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jYXJvdXNlbC5yZW1vdmVTbGlkZSh0aGlzKTtcbiAgfVxufVxuIl19