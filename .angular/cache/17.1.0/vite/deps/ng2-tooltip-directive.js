import {
  CommonModule,
  NgIf,
  NgTemplateOutlet
} from "./chunk-XG6O2LRS.js";
import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  NgModule,
  Optional,
  Output,
  Renderer2,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-JMTS7RQO.js";
import "./chunk-YRN7ZVOS.js";
import "./chunk-LJ4UR6LK.js";
import "./chunk-JJYN5SQZ.js";
import "./chunk-ECDNAN6X.js";
import "./chunk-6DXHB35K.js";

// node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js
function TooltipComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
}
function TooltipComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TooltipComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, TooltipComponent_div_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.value);
  }
}
function TooltipComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 5);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r2.value, ɵɵsanitizeHtml);
  }
}
var TooltipComponent = class {
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this._show = false;
    this.events = new EventEmitter();
  }
  transitionEnd(event) {
    if (this.show) {
      this.events.emit({
        type: "shown"
      });
    }
  }
  set show(value) {
    if (value) {
      this.setPosition();
    }
    this._show = this.hostClassShow = value;
  }
  get show() {
    return this._show;
  }
  get placement() {
    return this.data.options.placement;
  }
  get autoPlacement() {
    return this.data.options.autoPlacement;
  }
  get element() {
    return this.data.element;
  }
  get elementPosition() {
    return this.data.elementPosition;
  }
  get options() {
    return this.data.options;
  }
  get value() {
    return this.data.value;
  }
  get tooltipOffset() {
    return Number(this.data.options.offset);
  }
  get isThemeLight() {
    return this.options["theme"] === "light";
  }
  ngOnInit() {
    this.setCustomClass();
    this.setStyles();
  }
  setPosition() {
    if (this.setHostStyle(this.placement)) {
      this.setPlacementClass(this.placement);
      return;
    } else {
      const placements = ["top", "right", "bottom", "left"];
      let isPlacementSet;
      for (const placement of placements) {
        if (this.setHostStyle(placement)) {
          this.setPlacementClass(placement);
          isPlacementSet = true;
          return;
        }
      }
      if (!isPlacementSet) {
        this.setHostStyle(this.placement, true);
        this.setPlacementClass(this.placement);
      }
    }
  }
  setPlacementClass(placement) {
    this.renderer.addClass(this.elementRef.nativeElement, "tooltip-" + placement);
  }
  setHostStyle(placement, disableAutoPlacement = false) {
    const isSvg = this.element instanceof SVGElement;
    const tooltip = this.elementRef.nativeElement;
    const isCustomPosition = !this.elementPosition.right;
    let elementHeight = isSvg ? this.element.getBoundingClientRect().height : this.element.offsetHeight;
    let elementWidth = isSvg ? this.element.getBoundingClientRect().width : this.element.offsetWidth;
    const tooltipHeight = tooltip.clientHeight;
    const tooltipWidth = tooltip.clientWidth;
    const scrollY = window.pageYOffset;
    if (isCustomPosition) {
      elementHeight = 0;
      elementWidth = 0;
    }
    let topStyle;
    let leftStyle;
    if (placement === "top") {
      topStyle = this.elementPosition.top + scrollY - (tooltipHeight + this.tooltipOffset);
    }
    if (placement === "bottom") {
      topStyle = this.elementPosition.top + scrollY + elementHeight + this.tooltipOffset;
    }
    if (placement === "top" || placement === "bottom") {
      leftStyle = this.elementPosition.left + elementWidth / 2 - tooltipWidth / 2;
    }
    if (placement === "left") {
      leftStyle = this.elementPosition.left - tooltipWidth - this.tooltipOffset;
    }
    if (placement === "right") {
      leftStyle = this.elementPosition.left + elementWidth + this.tooltipOffset;
    }
    if (placement === "left" || placement === "right") {
      topStyle = this.elementPosition.top + scrollY + elementHeight / 2 - tooltip.clientHeight / 2;
    }
    if (this.autoPlacement && !disableAutoPlacement) {
      const topEdge = topStyle;
      const bottomEdge = topStyle + tooltipHeight;
      const leftEdge = leftStyle;
      const rightEdge = leftStyle + tooltipWidth;
      const bodyHeight = window.innerHeight + scrollY;
      const bodyWidth = document.body.clientWidth;
      if (topEdge < 0 || bottomEdge > bodyHeight || leftEdge < 0 || rightEdge > bodyWidth) {
        return false;
      }
    }
    this.hostStyleTop = topStyle + "px";
    this.hostStyleLeft = leftStyle + "px";
    return true;
  }
  setZIndex() {
    if (this.options["zIndex"] !== 0) {
      this.hostStyleZIndex = this.options["zIndex"];
    }
  }
  setPointerEvents() {
    if (this.options["pointerEvents"]) {
      this.hostStylePointerEvents = this.options["pointerEvents"];
    }
  }
  setCustomClass() {
    if (this.options["tooltipClass"]) {
      this.options["tooltipClass"].split(" ").forEach((className) => {
        this.renderer.addClass(this.elementRef.nativeElement, className);
      });
    }
  }
  setAnimationDuration() {
    if (Number(this.options["animationDuration"]) != this.options["animationDurationDefault"]) {
      this.hostStyleTransition = "opacity " + this.options["animationDuration"] + "ms";
    }
  }
  setStyles() {
    this.setZIndex();
    this.setPointerEvents();
    this.setAnimationDuration();
    this.hostClassShadow = this.options["shadow"];
    this.hostClassLight = this.isThemeLight;
    this.hostStyleMaxWidth = this.options["maxWidth"];
    this.hostStyleWidth = this.options["width"] ? this.options["width"] : "";
  }
};
TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
  return new (t || TooltipComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
TooltipComponent.ɵcmp = ɵɵdefineComponent({
  type: TooltipComponent,
  selectors: [["tooltip"]],
  hostAttrs: [1, "tooltip"],
  hostVars: 20,
  hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("transitionend", function TooltipComponent_transitionend_HostBindingHandler($event) {
        return ctx.transitionEnd($event);
      });
    }
    if (rf & 2) {
      ɵɵstyleProp("top", ctx.hostStyleTop)("left", ctx.hostStyleLeft)("z-index", ctx.hostStyleZIndex)("transition", ctx.hostStyleTransition)("width", ctx.hostStyleWidth)("max-width", ctx.hostStyleMaxWidth)("pointer-events", ctx.hostStylePointerEvents);
      ɵɵclassProp("tooltip-show", ctx.hostClassShow)("tooltip-shadow", ctx.hostClassShadow)("tooltip-light", ctx.hostClassLight);
    }
  },
  inputs: {
    data: "data",
    show: "show"
  },
  decls: 4,
  vars: 3,
  consts: [["class", "tooltip-arrow", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["htmlOrStringTemplate", ""], [1, "tooltip-arrow"], [4, "ngTemplateOutlet"], [3, "innerHTML"]],
  template: function TooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TooltipComponent_div_0_Template, 1, 0, "div", 0)(1, TooltipComponent_div_1_Template, 2, 1, "div", 1)(2, TooltipComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r3 = ɵɵreference(3);
      ɵɵproperty("ngIf", ctx.isThemeLight);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.options["contentType"] === "template")("ngIfElse", _r3);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  styles: ['[_nghost-%COMP%]{max-width:200px;background-color:#000;color:#fff;text-align:center;border-radius:6px;padding:5px 8px;position:absolute;pointer-events:none;z-index:1000;display:block;opacity:0;transition:opacity .3s;top:0;left:0}.tooltip-show[_nghost-%COMP%]{opacity:1}.tooltip-shadow[_nghost-%COMP%]{box-shadow:0 7px 15px -5px #0006}.tooltip-light.tooltip-shadow[_nghost-%COMP%]{box-shadow:0 5px 15px -5px #0006}.tooltip[_nghost-%COMP%]:after{content:"";position:absolute;border-style:solid}.tooltip-top[_nghost-%COMP%]:after{top:100%;left:50%;margin-left:-5px;border-width:5px;border-color:#000 #0000 #0000}.tooltip-bottom[_nghost-%COMP%]:after{bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-color:#0000 #0000 #000}.tooltip-left[_nghost-%COMP%]:after{top:50%;left:100%;margin-top:-5px;border-width:5px;border-color:#0000 #0000 #0000 #000}.tooltip-right[_nghost-%COMP%]:after{top:50%;right:100%;margin-top:-5px;border-width:5px;border-color:#0000 #000 #0000 #0000}.tooltip-light[_nghost-%COMP%]:after{display:none}.tooltip-light[_nghost-%COMP%]{border:1px solid #0000000f;background-color:#fff;color:#000}.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]{position:absolute;width:10px;height:10px;transform:rotate(135deg);background-color:#00000012}.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]:after{background-color:#fff;content:"";display:block;position:absolute;width:10px;height:10px}.tooltip-top.tooltip-light[_nghost-%COMP%]{margin-top:-2px}.tooltip-top.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]{top:100%;left:50%;margin-top:-4px;margin-left:-5px;background:linear-gradient(to bottom left,#00000012 50%,#0000 0)}.tooltip-top.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]:after{top:1px;right:1px}.tooltip-bottom.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]{bottom:100%;left:50%;margin-bottom:-4px;margin-left:-5px;background:linear-gradient(to top right,#0000001a 50%,#0000 0)}.tooltip-bottom.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]:after{top:-1px;right:-1px}.tooltip-left.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]{top:50%;left:100%;margin-top:-5px;margin-left:-4px;background:linear-gradient(to bottom right,#00000012 50%,#0000 0)}.tooltip-left.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]:after{top:1px;right:-1px}.tooltip-right.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]{top:50%;right:100%;margin-top:-5px;margin-right:-4px;background:linear-gradient(to top left,#00000012 50%,#0000 0)}.tooltip-right.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]:after{top:-1px;right:1px}']
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipComponent, [{
    type: Component,
    args: [{
      selector: "tooltip",
      templateUrl: "./tooltip.component.html",
      host: {
        "class": "tooltip"
      },
      styleUrls: ["./tooltip.component.sass"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    data: [{
      type: Input
    }],
    hostStyleTop: [{
      type: HostBinding,
      args: ["style.top"]
    }],
    hostStyleLeft: [{
      type: HostBinding,
      args: ["style.left"]
    }],
    hostStyleZIndex: [{
      type: HostBinding,
      args: ["style.z-index"]
    }],
    hostStyleTransition: [{
      type: HostBinding,
      args: ["style.transition"]
    }],
    hostStyleWidth: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    hostStyleMaxWidth: [{
      type: HostBinding,
      args: ["style.max-width"]
    }],
    hostStylePointerEvents: [{
      type: HostBinding,
      args: ["style.pointer-events"]
    }],
    hostClassShow: [{
      type: HostBinding,
      args: ["class.tooltip-show"]
    }],
    hostClassShadow: [{
      type: HostBinding,
      args: ["class.tooltip-shadow"]
    }],
    hostClassLight: [{
      type: HostBinding,
      args: ["class.tooltip-light"]
    }],
    transitionEnd: [{
      type: HostListener,
      args: ["transitionend", ["$event"]]
    }],
    show: [{
      type: Input
    }]
  });
})();
var TooltipOptionsService = new InjectionToken("TooltipOptions");
var defaultOptions = {
  "placement": "top",
  "autoPlacement": true,
  "contentType": "string",
  "showDelay": 0,
  "hideDelay": 300,
  "hideDelayMobile": 0,
  "hideDelayTouchscreen": 0,
  "zIndex": 0,
  "animationDuration": 300,
  "animationDurationDefault": 300,
  "trigger": "hover",
  "tooltipClass": "",
  "display": true,
  "displayMobile": true,
  "displayTouchscreen": true,
  "shadow": true,
  "theme": "dark",
  "offset": 8,
  "maxWidth": "",
  "id": false,
  "hideDelayAfterClick": 2e3
};
var backwardCompatibilityOptions = {
  "delay": "showDelay",
  "show-delay": "showDelay",
  "hide-delay": "hideDelay",
  "hide-delay-mobile": "hideDelayTouchscreen",
  "hideDelayMobile": "hideDelayTouchscreen",
  "z-index": "zIndex",
  "animation-duration": "animationDuration",
  "animation-duration-default": "animationDurationDefault",
  "tooltip-class": "tooltipClass",
  "display-mobile": "displayTouchscreen",
  "displayMobile": "displayTouchscreen",
  "max-width": "maxWidth"
};
var TooltipDirective = class {
  constructor(initOptions, elementRef, componentFactoryResolver, appRef, injector) {
    this.initOptions = initOptions;
    this.elementRef = elementRef;
    this.componentFactoryResolver = componentFactoryResolver;
    this.appRef = appRef;
    this.injector = injector;
    this._options = {};
    this._contentType = "string";
    this.events = new EventEmitter();
  }
  set options(value) {
    if (value && defaultOptions) {
      this._options = value;
    }
  }
  get options() {
    return this._options;
  }
  // Content type
  set contentTypeBackwardCompatibility(value) {
    if (value) {
      this._contentType = value;
    }
  }
  set contentType(value) {
    if (value) {
      this._contentType = value;
    }
  }
  get contentType() {
    return this._contentType;
  }
  // z-index
  set zIndexBackwardCompatibility(value) {
    if (value) {
      this._zIndex = value;
    }
  }
  set zIndex(value) {
    if (value) {
      this._zIndex = value;
    }
  }
  get zIndex() {
    return this._zIndex;
  }
  // Animation duration
  set animationDurationBackwardCompatibility(value) {
    if (value) {
      this._animationDuration = value;
    }
  }
  set animationDuration(value) {
    if (value) {
      this._animationDuration = value;
    }
  }
  get animationDuration() {
    return this._animationDuration;
  }
  // Tooltip class
  set tooltipClassBackwardCompatibility(value) {
    if (value) {
      this._tooltipClass = value;
    }
  }
  set tooltipClass(value) {
    if (value) {
      this._tooltipClass = value;
    }
  }
  get tooltipClass() {
    return this._tooltipClass;
  }
  // Max width
  set maxWidthBackwardCompatibility(value) {
    if (value) {
      this._maxWidth = value;
    }
  }
  set maxWidth(value) {
    if (value) {
      this._maxWidth = value;
    }
  }
  get maxWidth() {
    return this._maxWidth;
  }
  // Show delay
  set showDelayBackwardCompatibility(value) {
    if (value) {
      this._showDelay = value;
    }
  }
  set showDelay(value) {
    if (value) {
      this._showDelay = value;
    }
  }
  get showDelay() {
    return this._showDelay;
  }
  // Hide delay
  set hideDelayBackwardCompatibility(value) {
    if (value) {
      this._hideDelay = value;
    }
  }
  set hideDelay(value) {
    if (value) {
      this._hideDelay = value;
    }
  }
  get hideDelay() {
    return this._hideDelay;
  }
  get isTooltipDestroyed() {
    return this.componentRef && this.componentRef.hostView.destroyed;
  }
  get destroyDelay() {
    if (this._destroyDelay) {
      return this._destroyDelay;
    } else {
      return Number(this.getHideDelay()) + Number(this.options["animationDuration"]);
    }
  }
  set destroyDelay(value) {
    this._destroyDelay = value;
  }
  get tooltipPosition() {
    if (this.options["position"]) {
      return this.options["position"];
    } else {
      return this.elementPosition;
    }
  }
  onMouseEnter() {
    if (this.isDisplayOnHover == false) {
      return;
    }
    this.show();
  }
  onMouseLeave() {
    if (this.options["trigger"] === "hover") {
      this.destroyTooltip();
    }
  }
  onClick() {
    if (this.isDisplayOnClick == false) {
      return;
    }
    this.show();
    this.hideAfterClickTimeoutId = window.setTimeout(() => {
      this.destroyTooltip();
    }, this.options["hideDelayAfterClick"]);
  }
  ngOnInit() {
  }
  ngOnChanges(changes) {
    this.initOptions = this.renameProperties(this.initOptions);
    let changedOptions = this.getProperties(changes);
    changedOptions = this.renameProperties(changedOptions);
    this.applyOptionsDefault(defaultOptions, changedOptions);
  }
  ngOnDestroy() {
    this.destroyTooltip({
      fast: true
    });
    if (this.componentSubscribe) {
      this.componentSubscribe.unsubscribe();
    }
  }
  getShowDelay() {
    return this.options["showDelay"];
  }
  getHideDelay() {
    const hideDelay = this.options["hideDelay"];
    const hideDelayTouchscreen = this.options["hideDelayTouchscreen"];
    return this.isTouchScreen ? hideDelayTouchscreen : hideDelay;
  }
  getProperties(changes) {
    let directiveProperties = {};
    let customProperties = {};
    let allProperties = {};
    for (var prop in changes) {
      if (prop !== "options" && prop !== "tooltipValue") {
        directiveProperties[prop] = changes[prop].currentValue;
      }
      if (prop === "options") {
        customProperties = changes[prop].currentValue;
      }
    }
    allProperties = Object.assign({}, customProperties, directiveProperties);
    return allProperties;
  }
  renameProperties(options) {
    for (var prop in options) {
      if (backwardCompatibilityOptions[prop]) {
        options[backwardCompatibilityOptions[prop]] = options[prop];
        delete options[prop];
      }
    }
    return options;
  }
  getElementPosition() {
    this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
  }
  createTooltip() {
    this.clearTimeouts();
    this.getElementPosition();
    this.createTimeoutId = window.setTimeout(() => {
      this.appendComponentToBody(TooltipComponent);
    }, this.getShowDelay());
    this.showTimeoutId = window.setTimeout(() => {
      this.showTooltipElem();
    }, this.getShowDelay());
  }
  destroyTooltip(options = {
    fast: false
  }) {
    this.clearTimeouts();
    if (this.isTooltipDestroyed == false) {
      this.hideTimeoutId = window.setTimeout(() => {
        this.hideTooltip();
      }, options.fast ? 0 : this.getHideDelay());
      this.destroyTimeoutId = window.setTimeout(() => {
        if (!this.componentRef || this.isTooltipDestroyed) {
          return;
        }
        this.appRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
        this.events.emit({
          type: "hidden",
          position: this.tooltipPosition
        });
      }, options.fast ? 0 : this.destroyDelay);
    }
  }
  showTooltipElem() {
    this.clearTimeouts();
    this.componentRef.instance.show = true;
    this.events.emit({
      type: "show",
      position: this.tooltipPosition
    });
  }
  hideTooltip() {
    if (!this.componentRef || this.isTooltipDestroyed) {
      return;
    }
    this.componentRef.instance.show = false;
    this.events.emit({
      type: "hide",
      position: this.tooltipPosition
    });
  }
  appendComponentToBody(component, data = {}) {
    this.componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
    this.componentRef.instance.data = {
      value: this.tooltipValue,
      element: this.elementRef.nativeElement,
      elementPosition: this.tooltipPosition,
      options: this.options
    };
    this.appRef.attachView(this.componentRef.hostView);
    const domElem = this.componentRef.hostView.rootNodes[0];
    document.body.appendChild(domElem);
    this.componentSubscribe = this.componentRef.instance.events.subscribe((event) => {
      this.handleEvents(event);
    });
  }
  clearTimeouts() {
    if (this.createTimeoutId) {
      clearTimeout(this.createTimeoutId);
    }
    if (this.showTimeoutId) {
      clearTimeout(this.showTimeoutId);
    }
    if (this.hideTimeoutId) {
      clearTimeout(this.hideTimeoutId);
    }
    if (this.destroyTimeoutId) {
      clearTimeout(this.destroyTimeoutId);
    }
  }
  get isDisplayOnHover() {
    if (this.options["display"] == false) {
      return false;
    }
    if (this.options["displayTouchscreen"] == false && this.isTouchScreen) {
      return false;
    }
    if (this.options["trigger"] !== "hover") {
      return false;
    }
    return true;
  }
  get isDisplayOnClick() {
    if (this.options["display"] == false) {
      return false;
    }
    if (this.options["displayTouchscreen"] == false && this.isTouchScreen) {
      return false;
    }
    if (this.options["trigger"] != "click") {
      return false;
    }
    return true;
  }
  get isTouchScreen() {
    var prefixes = " -webkit- -moz- -o- -ms- ".split(" ");
    var mq = function(query2) {
      return window.matchMedia(query2).matches;
    };
    if ("ontouchstart" in window) {
      return true;
    }
    var query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join("");
    return mq(query);
  }
  applyOptionsDefault(defaultOptions2, options) {
    this.options = Object.assign({}, defaultOptions2, this.initOptions || {}, this.options, options);
  }
  handleEvents(event) {
    if (event.type === "shown") {
      this.events.emit({
        type: "shown",
        position: this.tooltipPosition
      });
    }
  }
  show() {
    if (!this.tooltipValue) {
      return;
    }
    if (!this.componentRef || this.isTooltipDestroyed) {
      this.createTooltip();
    } else if (!this.isTooltipDestroyed) {
      this.showTooltipElem();
    }
  }
  hide() {
    this.destroyTooltip();
  }
};
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) {
  return new (t || TooltipDirective)(ɵɵdirectiveInject(TooltipOptionsService, 8), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(ApplicationRef), ɵɵdirectiveInject(Injector));
};
TooltipDirective.ɵdir = ɵɵdefineDirective({
  type: TooltipDirective,
  selectors: [["", "tooltip", ""]],
  hostBindings: function TooltipDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focusin", function TooltipDirective_focusin_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("focusout", function TooltipDirective_focusout_HostBindingHandler() {
        return ctx.onMouseLeave();
      })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      })("click", function TooltipDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    options: "options",
    tooltipValue: [InputFlags.None, "tooltip", "tooltipValue"],
    placement: "placement",
    autoPlacement: "autoPlacement",
    contentTypeBackwardCompatibility: [InputFlags.None, "content-type", "contentTypeBackwardCompatibility"],
    contentType: "contentType",
    hideDelayMobile: [InputFlags.None, "hide-delay-mobile", "hideDelayMobile"],
    hideDelayTouchscreen: "hideDelayTouchscreen",
    zIndexBackwardCompatibility: [InputFlags.None, "z-index", "zIndexBackwardCompatibility"],
    zIndex: "zIndex",
    animationDurationBackwardCompatibility: [InputFlags.None, "animation-duration", "animationDurationBackwardCompatibility"],
    animationDuration: "animationDuration",
    trigger: "trigger",
    tooltipClassBackwardCompatibility: [InputFlags.None, "tooltip-class", "tooltipClassBackwardCompatibility"],
    tooltipClass: "tooltipClass",
    display: "display",
    displayMobile: [InputFlags.None, "display-mobile", "displayMobile"],
    displayTouchscreen: "displayTouchscreen",
    shadow: "shadow",
    theme: "theme",
    offset: "offset",
    width: "width",
    maxWidthBackwardCompatibility: [InputFlags.None, "max-width", "maxWidthBackwardCompatibility"],
    maxWidth: "maxWidth",
    id: "id",
    showDelayBackwardCompatibility: [InputFlags.None, "show-delay", "showDelayBackwardCompatibility"],
    showDelay: "showDelay",
    hideDelayBackwardCompatibility: [InputFlags.None, "hide-delay", "hideDelayBackwardCompatibility"],
    hideDelay: "hideDelay",
    hideDelayAfterClick: "hideDelayAfterClick",
    pointerEvents: "pointerEvents",
    position: "position"
  },
  outputs: {
    events: "events"
  },
  exportAs: ["tooltip"],
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[tooltip]",
      exportAs: "tooltip"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TooltipOptionsService]
      }]
    }, {
      type: ElementRef
    }, {
      type: ComponentFactoryResolver$1
    }, {
      type: ApplicationRef
    }, {
      type: Injector
    }];
  }, {
    options: [{
      type: Input,
      args: ["options"]
    }],
    tooltipValue: [{
      type: Input,
      args: ["tooltip"]
    }],
    placement: [{
      type: Input,
      args: ["placement"]
    }],
    autoPlacement: [{
      type: Input,
      args: ["autoPlacement"]
    }],
    contentTypeBackwardCompatibility: [{
      type: Input,
      args: ["content-type"]
    }],
    contentType: [{
      type: Input,
      args: ["contentType"]
    }],
    hideDelayMobile: [{
      type: Input,
      args: ["hide-delay-mobile"]
    }],
    hideDelayTouchscreen: [{
      type: Input,
      args: ["hideDelayTouchscreen"]
    }],
    zIndexBackwardCompatibility: [{
      type: Input,
      args: ["z-index"]
    }],
    zIndex: [{
      type: Input,
      args: ["zIndex"]
    }],
    animationDurationBackwardCompatibility: [{
      type: Input,
      args: ["animation-duration"]
    }],
    animationDuration: [{
      type: Input,
      args: ["animationDuration"]
    }],
    trigger: [{
      type: Input,
      args: ["trigger"]
    }],
    tooltipClassBackwardCompatibility: [{
      type: Input,
      args: ["tooltip-class"]
    }],
    tooltipClass: [{
      type: Input,
      args: ["tooltipClass"]
    }],
    display: [{
      type: Input,
      args: ["display"]
    }],
    displayMobile: [{
      type: Input,
      args: ["display-mobile"]
    }],
    displayTouchscreen: [{
      type: Input,
      args: ["displayTouchscreen"]
    }],
    shadow: [{
      type: Input,
      args: ["shadow"]
    }],
    theme: [{
      type: Input,
      args: ["theme"]
    }],
    offset: [{
      type: Input,
      args: ["offset"]
    }],
    width: [{
      type: Input,
      args: ["width"]
    }],
    maxWidthBackwardCompatibility: [{
      type: Input,
      args: ["max-width"]
    }],
    maxWidth: [{
      type: Input,
      args: ["maxWidth"]
    }],
    id: [{
      type: Input,
      args: ["id"]
    }],
    showDelayBackwardCompatibility: [{
      type: Input,
      args: ["show-delay"]
    }],
    showDelay: [{
      type: Input,
      args: ["showDelay"]
    }],
    hideDelayBackwardCompatibility: [{
      type: Input,
      args: ["hide-delay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["hideDelay"]
    }],
    hideDelayAfterClick: [{
      type: Input,
      args: ["hideDelayAfterClick"]
    }],
    pointerEvents: [{
      type: Input,
      args: ["pointerEvents"]
    }],
    position: [{
      type: Input,
      args: ["position"]
    }],
    events: [{
      type: Output
    }],
    onMouseEnter: [{
      type: HostListener,
      args: ["focusin"]
    }, {
      type: HostListener,
      args: ["mouseenter"]
    }],
    onMouseLeave: [{
      type: HostListener,
      args: ["focusout"]
    }, {
      type: HostListener,
      args: ["mouseleave"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var TooltipModule = class _TooltipModule {
  static forRoot(initOptions) {
    return {
      ngModule: _TooltipModule,
      providers: [{
        provide: TooltipOptionsService,
        useValue: initOptions
      }]
    };
  }
};
TooltipModule.ɵfac = function TooltipModule_Factory(t) {
  return new (t || TooltipModule)();
};
TooltipModule.ɵmod = ɵɵdefineNgModule({
  type: TooltipModule,
  declarations: [TooltipDirective, TooltipComponent],
  imports: [CommonModule],
  exports: [TooltipDirective]
});
TooltipModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      declarations: [TooltipDirective, TooltipComponent],
      imports: [CommonModule],
      exports: [TooltipDirective],
      entryComponents: [TooltipComponent]
    }]
  }], null, null);
})();
export {
  TooltipComponent,
  TooltipDirective,
  TooltipModule
};
//# sourceMappingURL=ng2-tooltip-directive.js.map
