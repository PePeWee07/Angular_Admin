import {
  DOCUMENT,
  isPlatformBrowser
} from "./chunk-XG6O2LRS.js";
import {
  Directive,
  ElementRef,
  Inject,
  Injectable,
  Input,
  NgModule,
  PLATFORM_ID,
  Renderer2,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵinject
} from "./chunk-JMTS7RQO.js";
import "./chunk-YRN7ZVOS.js";
import "./chunk-LJ4UR6LK.js";
import {
  ReplaySubject,
  throwError
} from "./chunk-JJYN5SQZ.js";
import "./chunk-ECDNAN6X.js";
import {
  __spreadValues
} from "./chunk-6DXHB35K.js";

// node_modules/@nicky-lenaers/ngx-scroll-to/fesm2020/nicky-lenaers-ngx-scroll-to.mjs
var DEFAULTS = {
  target: null,
  action: "click",
  duration: 650,
  easing: "easeInOutQuad",
  offset: 0,
  offsetMap: /* @__PURE__ */ new Map()
};
var EASING = {
  easeInQuad: (time) => {
    return time * time;
  },
  easeOutQuad: (time) => {
    return time * (2 - time);
  },
  easeInOutQuad: (time) => {
    return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
  },
  easeInCubic: (time) => {
    return time * time * time;
  },
  easeOutCubic: (time) => {
    return --time * time * time + 1;
  },
  easeInOutCubic: (time) => {
    return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
  },
  easeInQuart: (time) => {
    return time * time * time * time;
  },
  easeOutQuart: (time) => {
    return 1 - --time * time * time * time;
  },
  easeInOutQuart: (time) => {
    return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * --time * time * time * time;
  },
  easeInQuint: (time) => {
    return time * time * time * time * time;
  },
  easeOutQuint: (time) => {
    return 1 + --time * time * time * time * time;
  },
  easeInOutQuint: (time) => {
    return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * --time * time * time * time * time;
  },
  easeOutElastic: (time) => {
    return Math.pow(2, -10 * time) * Math.sin((time - 1 / 4) * (2 * Math.PI) / 1) + 1;
  }
};
var EVENTS = ["click", "mouseenter", "mouseover", "mousedown", "mouseup", "dblclick", "contextmenu", "wheel", "mouseleave", "mouseout"];
function stripHash(value) {
  return value.substring(0, 1) === "#" ? value.substring(1) : value;
}
function isString(value) {
  return typeof value === "string" || value instanceof String;
}
function isWindow(container) {
  return container === window;
}
function isElementRef(value) {
  return value instanceof ElementRef;
}
function isNativeElement(value) {
  return value instanceof HTMLElement;
}
function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
var ScrollToAnimation = class {
  /**
   * Class Constructor.
   *
   * @param container            The Container
   * @param listenerTarget       The Element that listens for DOM Events
   * @param isWindow             Whether or not the listener is the Window
   * @param to                   Position to scroll to
   * @param options              Additional options for scrolling
   * @param isBrowser            Whether or not execution runs in the browser
   *                              (as opposed to the server)
   */
  constructor(container, listenerTarget, isWindow2, to, options, isBrowser) {
    this.container = container;
    this.listenerTarget = listenerTarget;
    this.isWindow = isWindow2;
    this.to = to;
    this.options = options;
    this.isBrowser = isBrowser;
    this.loop = () => {
      this.timeLapsed += this.tick;
      this.percentage = this.timeLapsed / this.options.duration;
      this.percentage = this.percentage > 1 ? 1 : this.percentage;
      this.position = this.startPosition + (this.startPosition - this.to <= 0 ? 1 : -1) * this.distance * EASING[this.options.easing](this.percentage);
      if (this.lastPosition !== null && this.position === this.lastPosition) {
        this.stop();
      } else {
        this.source$.next(this.position);
        this.isWindow ? this.listenerTarget.scrollTo(0, Math.floor(this.position)) : this.container.scrollTop = Math.floor(this.position);
        this.lastPosition = this.position;
      }
    };
    this.tick = 16;
    this.interval = null;
    this.lastPosition = null;
    this.timeLapsed = 0;
    this.windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (!this.container) {
      this.startPosition = this.windowScrollTop;
    } else {
      this.startPosition = this.isWindow ? this.windowScrollTop : this.container.scrollTop;
    }
    if (this.container && !this.isWindow) {
      this.to = this.to - this.container.getBoundingClientRect().top + this.startPosition;
    }
    const directionalDistance = this.startPosition - this.to;
    this.distance = this.container ? Math.abs(this.startPosition - this.to) : this.to;
    this.mappedOffset = this.options.offset;
    if (this.isBrowser) {
      this.options.offsetMap.forEach((value, key) => this.mappedOffset = window.innerWidth > key ? value : this.mappedOffset);
    }
    this.distance += this.mappedOffset * (directionalDistance <= 0 ? 1 : -1);
    this.source$ = new ReplaySubject();
  }
  /**
   * Start the new Scroll Animation.
   *
   * @returns         Observable containing a number
   */
  start() {
    clearInterval(this.interval);
    this.interval = setInterval(this.loop, this.tick);
    return this.source$.asObservable();
  }
  /**
   * Stop the current Scroll Animation Loop.
   *
   * @param force          Force to stop the Animation Loop
   * @returns               Void
   */
  stop() {
    clearInterval(this.interval);
    this.interval = null;
    this.source$.complete();
  }
};
var ScrollToService = class {
  /**
   * Construct and setup required paratemeters.
   *
   * @param document         A Reference to the Document
   * @param platformId       Angular Platform ID
   */
  constructor(document2, platformId) {
    this.document = document2;
    this.platformId = platformId;
    this.interruptiveEvents = ["mousewheel", "DOMMouseScroll", "touchstart"];
  }
  /**
   * Target an Element to scroll to. Notice that the `TimeOut` decorator
   * ensures the executing to take place in the next Angular lifecycle.
   * This allows for scrolling to elements that are e.g. initially hidden
   * by means of `*ngIf`, but ought to be scrolled to eventually.
   *
   * @todo type 'any' in Observable should become custom type like 'ScrollToEvent' (base class), see issue comment:
   *  - https://github.com/nicky-lenaers/ngx-scroll-to/issues/10#issuecomment-317198481
   *
   * @param options         Configuration Object
   * @returns               Observable
   */
  scrollTo(options) {
    if (!isPlatformBrowser(this.platformId)) {
      return new ReplaySubject().asObservable();
    }
    return this.start(options);
  }
  /**
   * Start a new Animation.
   *
   * @todo Emit proper events from subscription
   *
   * @param options         Configuration Object
   * @returns               Observable
   */
  start(options) {
    const mergedConfigOptions = __spreadValues(__spreadValues({}, DEFAULTS), options);
    if (this.animation) {
      this.animation.stop();
    }
    const targetNode = this.getNode(mergedConfigOptions.target);
    if (mergedConfigOptions.target && !targetNode) {
      return throwError(() => new Error("Unable to find Target Element"));
    }
    const container = this.getContainer(mergedConfigOptions, targetNode);
    if (mergedConfigOptions.container && !container) {
      return throwError(() => new Error("Unable to find Container Element"));
    }
    const listenerTarget = this.getListenerTarget(container) || window;
    let to = container ? container.getBoundingClientRect().top : 0;
    if (targetNode) {
      to = isWindow(listenerTarget) ? window.scrollY + targetNode.getBoundingClientRect().top : targetNode.getBoundingClientRect().top;
    }
    this.animation = new ScrollToAnimation(container, listenerTarget, isWindow(listenerTarget), to, mergedConfigOptions, isPlatformBrowser(this.platformId));
    const onInterrupt = () => this.animation.stop();
    this.addInterruptiveEventListeners(listenerTarget, onInterrupt);
    const animation$ = this.animation.start();
    this.subscribeToAnimation(animation$, listenerTarget, onInterrupt);
    return animation$;
  }
  /**
   * Subscribe to the events emitted from the Scrolling
   * Animation. Events might be used for e.g. unsubscribing
   * once finished.
   *
   * @param animation$              The Animation Observable
   * @param listenerTarget          The Listener Target for events
   * @param onInterrupt             The handler for Interruptive Events
   * @returns                       Void
   */
  subscribeToAnimation(animation$, listenerTarget, onInterrupt) {
    const subscription = animation$.subscribe({
      complete: () => {
        this.removeInterruptiveEventListeners(this.interruptiveEvents, listenerTarget, onInterrupt);
        subscription.unsubscribe();
      }
    });
  }
  /**
   * Get the container HTML Element in which
   * the scrolling should happen.
   *
   * @param options         The Merged Configuration Object
   * @param targetNode    the targeted HTMLElement
   */
  getContainer(options, targetNode) {
    let container = null;
    if (options.container) {
      container = this.getNode(options.container, true);
    } else if (targetNode) {
      container = this.getFirstScrollableParent(targetNode);
    }
    return container;
  }
  /**
   * Add listeners for the Animation Interruptive Events
   * to the Listener Target.
   *
   * @param events            List of events to listen to
   * @param listenerTarget    Target to attach the listener on
   * @param handler           Handler for when the listener fires
   * @returns                 Void
   */
  addInterruptiveEventListeners(listenerTarget, handler) {
    if (!listenerTarget) {
      listenerTarget = window;
    }
    this.interruptiveEvents.forEach((event) => listenerTarget.addEventListener(event, handler, this.supportPassive() ? {
      passive: true
    } : false));
  }
  /**
   * Feature-detect support for passive event listeners.
   *
   * @returns       Whether or not passive event listeners are supported
   */
  supportPassive() {
    let supportsPassive = false;
    try {
      const opts = Object.defineProperty({}, "passive", {
        get: () => {
          supportsPassive = true;
        }
      });
      window.addEventListener("testPassive", null, opts);
      window.removeEventListener("testPassive", null, opts);
    } catch (e) {
    }
    return supportsPassive;
  }
  /**
   * Remove listeners for the Animation Interrupt Event from
   * the Listener Target. Specifying the correct handler prevents
   * memory leaks and makes the allocated memory available for
   * Garbage Collection.
   *
   * @param events            List of Interruptive Events to remove
   * @param listenerTarget    Target to attach the listener on
   * @param handler           Handler for when the listener fires
   * @returns                 Void
   */
  removeInterruptiveEventListeners(events, listenerTarget, handler) {
    if (!listenerTarget) {
      listenerTarget = window;
    }
    events.forEach((event) => listenerTarget.removeEventListener(event, handler));
  }
  /**
   * Find the first scrollable parent Node of a given
   * Element. The DOM Tree gets searched upwards
   * to find this first scrollable parent. Parents might
   * be ignored by CSS styles applied to the HTML Element.
   *
   * @param nativeElement     The Element to search the DOM Tree upwards from
   * @returns                 The first scrollable parent HTML Element
   */
  getFirstScrollableParent(nativeElement) {
    let style = window.getComputedStyle(nativeElement);
    const overflowRegex = /(auto|scroll|overlay)/;
    if (style.position === "fixed") {
      return null;
    }
    let parent = nativeElement;
    while (parent.parentElement) {
      parent = parent.parentElement;
      style = window.getComputedStyle(parent);
      if (style.position === "absolute" || style.overflow === "hidden" || style.overflowY === "hidden") {
        continue;
      }
      if (overflowRegex.test(style.overflow + style.overflowY) || parent.tagName === "BODY") {
        return parent;
      }
    }
    return null;
  }
  /**
   * Get the Target Node to scroll to.
   *
   * @param id              The given ID of the node, either a string or
   *                        an element reference
   * @param allowBodyTag    Indicate whether or not the Document Body is
   *                        considered a valid Target Node
   * @returns               The Target Node to scroll to
   */
  getNode(id, allowBodyTag = false) {
    let targetNode;
    if (isString(id)) {
      if (allowBodyTag && (id === "body" || id === "BODY")) {
        targetNode = this.document.body;
      } else {
        targetNode = this.document.getElementById(stripHash(id));
      }
    } else if (isNumber(id)) {
      targetNode = this.document.getElementById(String(id));
    } else if (isElementRef(id)) {
      targetNode = id.nativeElement;
    } else if (isNativeElement(id)) {
      targetNode = id;
    }
    return targetNode;
  }
  /**
   * Retrieve the Listener target. This Listener Target is used
   * to attach Event Listeners on. In case of the target being
   * the Document Body, we need the actual `window` to listen
   * for events.
   *
   * @param container           The HTML Container element
   * @returns                   The Listener Target to attach events on
   */
  getListenerTarget(container) {
    if (!container) {
      return null;
    }
    return this.isDocumentBody(container) ? window : container;
  }
  /**
   * Test if a given HTML Element is the Document Body.
   *
   * @param element             The given HTML Element
   * @returns                   Whether or not the Element is the
   *                            Document Body Element
   */
  isDocumentBody(element) {
    return element.tagName.toUpperCase() === "BODY";
  }
};
ScrollToService.ɵfac = function ScrollToService_Factory(t) {
  return new (t || ScrollToService)(ɵɵinject(DOCUMENT), ɵɵinject(PLATFORM_ID));
};
ScrollToService.ɵprov = ɵɵdefineInjectable({
  token: ScrollToService,
  factory: ScrollToService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollToService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, null);
})();
var ScrollToDirective = class {
  constructor(elementRef, scrollToService, renderer2) {
    this.elementRef = elementRef;
    this.scrollToService = scrollToService;
    this.renderer2 = renderer2;
    this.ngxScrollTo = DEFAULTS.target;
    this.ngxScrollToEvent = DEFAULTS.action;
    this.ngxScrollToDuration = DEFAULTS.duration;
    this.ngxScrollToEasing = DEFAULTS.easing;
    this.ngxScrollToOffset = DEFAULTS.offset;
    this.ngxScrollToOffsetMap = DEFAULTS.offsetMap;
  }
  /**
   * Angular Lifecycle Hook - After View Init
   *
   * @todo Implement Subscription for Events
   *
   * @returns void
   */
  ngAfterViewInit() {
    if (EVENTS.indexOf(this.ngxScrollToEvent) === -1) {
      throw new Error(`Unsupported Event '${this.ngxScrollToEvent}'`);
    }
    this.renderer2.listen(this.elementRef.nativeElement, this.ngxScrollToEvent, (event) => {
      this.options = {
        target: this.ngxScrollTo,
        duration: this.ngxScrollToDuration,
        easing: this.ngxScrollToEasing,
        offset: this.ngxScrollToOffset,
        offsetMap: this.ngxScrollToOffsetMap
      };
      this.scrollToService.scrollTo(this.options);
    });
  }
};
ScrollToDirective.ɵfac = function ScrollToDirective_Factory(t) {
  return new (t || ScrollToDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ScrollToService), ɵɵdirectiveInject(Renderer2));
};
ScrollToDirective.ɵdir = ɵɵdefineDirective({
  type: ScrollToDirective,
  selectors: [["", "ngxScrollTo", ""]],
  inputs: {
    ngxScrollTo: "ngxScrollTo",
    ngxScrollToEvent: "ngxScrollToEvent",
    ngxScrollToDuration: "ngxScrollToDuration",
    ngxScrollToEasing: "ngxScrollToEasing",
    ngxScrollToOffset: "ngxScrollToOffset",
    ngxScrollToOffsetMap: "ngxScrollToOffsetMap"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollToDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxScrollTo]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ScrollToService
    }, {
      type: Renderer2
    }];
  }, {
    ngxScrollTo: [{
      type: Input
    }],
    ngxScrollToEvent: [{
      type: Input
    }],
    ngxScrollToDuration: [{
      type: Input
    }],
    ngxScrollToEasing: [{
      type: Input
    }],
    ngxScrollToOffset: [{
      type: Input
    }],
    ngxScrollToOffsetMap: [{
      type: Input
    }]
  });
})();
var ScrollToModule = class _ScrollToModule {
  /**
   * Guaranteed singletons for provided Services across App.
   *
   * @return          An Angular Module with Providers
   */
  static forRoot() {
    return {
      ngModule: _ScrollToModule,
      providers: [ScrollToService]
    };
  }
};
ScrollToModule.ɵfac = function ScrollToModule_Factory(t) {
  return new (t || ScrollToModule)();
};
ScrollToModule.ɵmod = ɵɵdefineNgModule({
  type: ScrollToModule,
  declarations: [ScrollToDirective],
  exports: [ScrollToDirective]
});
ScrollToModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollToModule, [{
    type: NgModule,
    args: [{
      declarations: [ScrollToDirective],
      exports: [ScrollToDirective]
    }]
  }], null, null);
})();
export {
  ScrollToDirective,
  ScrollToModule,
  ScrollToService
};
//# sourceMappingURL=@nicky-lenaers_ngx-scroll-to.js.map
