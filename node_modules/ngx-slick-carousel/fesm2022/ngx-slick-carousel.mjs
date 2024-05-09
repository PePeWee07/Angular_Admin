import { isPlatformServer, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, ElementRef, inject, NgZone, PLATFORM_ID, forwardRef, Component, Input, Output, Renderer2, Directive, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Slick component
 */
class SlickCarouselComponent {
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
class SlickItemDirective {
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

class SlickCarouselModule {
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SlickCarouselModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    /** @nocollapse */ static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: SlickCarouselModule, declarations: [SlickCarouselComponent,
            SlickItemDirective], imports: [CommonModule], exports: [SlickCarouselComponent,
            SlickItemDirective] });
    /** @nocollapse */ static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SlickCarouselModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SlickCarouselModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        SlickCarouselComponent,
                        SlickItemDirective,
                    ],
                    exports: [
                        SlickCarouselComponent,
                        SlickItemDirective,
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SlickCarouselComponent, SlickCarouselModule, SlickItemDirective };
//# sourceMappingURL=ngx-slick-carousel.mjs.map
