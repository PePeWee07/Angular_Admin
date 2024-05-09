import {
  CommonModule,
  DOCUMENT
} from "./chunk-XG6O2LRS.js";
import {
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
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
  Subject
} from "./chunk-JJYN5SQZ.js";
import "./chunk-ECDNAN6X.js";
import "./chunk-6DXHB35K.js";

// node_modules/ngx-window-token/fesm2020/ngx-window-token.mjs
var WINDOW = new InjectionToken("WindowToken", typeof window !== "undefined" && window.document ? { providedIn: "root", factory: () => window } : { providedIn: "root", factory: () => void 0 });

// node_modules/ngx-clipboard/fesm2020/ngx-clipboard.mjs
var ClipboardService = class {
  constructor(ngZone, document, window2) {
    this.ngZone = ngZone;
    this.document = document;
    this.window = window2;
    this.copySubject = new Subject();
    this.copyResponse$ = this.copySubject.asObservable();
    this.config = {};
  }
  configure(config) {
    this.config = config;
  }
  copy(content) {
    if (!this.isSupported || !content) {
      return this.pushCopyResponse({
        isSuccess: false,
        content
      });
    }
    const copyResult = this.copyFromContent(content);
    if (copyResult) {
      return this.pushCopyResponse({
        content,
        isSuccess: copyResult
      });
    }
    return this.pushCopyResponse({
      isSuccess: false,
      content
    });
  }
  get isSupported() {
    return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported("copy") && !!this.window;
  }
  isTargetValid(element) {
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      if (element.hasAttribute("disabled")) {
        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
      }
      return true;
    }
    throw new Error("Target should be input or textarea");
  }
  /**
   * Attempts to copy from an input `targetElm`
   */
  copyFromInputElement(targetElm, isFocus = true) {
    try {
      this.selectTarget(targetElm);
      const re = this.copyText();
      this.clearSelection(isFocus ? targetElm : void 0, this.window);
      return re && this.isCopySuccessInIE11();
    } catch (error) {
      return false;
    }
  }
  /**
   * This is a hack for IE11 to return `true` even if copy fails.
   */
  isCopySuccessInIE11() {
    const clipboardData = this.window["clipboardData"];
    if (clipboardData && clipboardData.getData) {
      if (!clipboardData.getData("Text")) {
        return false;
      }
    }
    return true;
  }
  /**
   * Creates a fake textarea element, sets its value from `text` property,
   * and makes a selection on it.
   */
  copyFromContent(content, container = this.document.body) {
    if (this.tempTextArea && !container.contains(this.tempTextArea)) {
      this.destroy(this.tempTextArea.parentElement || void 0);
    }
    if (!this.tempTextArea) {
      this.tempTextArea = this.createTempTextArea(this.document, this.window);
      try {
        container.appendChild(this.tempTextArea);
      } catch (error) {
        throw new Error("Container should be a Dom element");
      }
    }
    this.tempTextArea.value = content;
    const toReturn = this.copyFromInputElement(this.tempTextArea, false);
    if (this.config.cleanUpAfterCopy) {
      this.destroy(this.tempTextArea.parentElement || void 0);
    }
    return toReturn;
  }
  /**
   * Remove temporary textarea if any exists.
   */
  destroy(container = this.document.body) {
    if (this.tempTextArea) {
      container.removeChild(this.tempTextArea);
      this.tempTextArea = void 0;
    }
  }
  /**
   * Select the target html input element.
   */
  selectTarget(inputElement) {
    inputElement.select();
    inputElement.setSelectionRange(0, inputElement.value.length);
    return inputElement.value.length;
  }
  copyText() {
    return this.document.execCommand("copy");
  }
  /**
   * Moves focus away from `target` and back to the trigger, removes current selection.
   */
  clearSelection(inputElement, window2) {
    inputElement && inputElement.focus();
    window2.getSelection()?.removeAllRanges();
  }
  /**
   * Creates a fake textarea for copy command.
   */
  createTempTextArea(doc, window2) {
    const isRTL = doc.documentElement.getAttribute("dir") === "rtl";
    let ta;
    ta = doc.createElement("textarea");
    ta.style.fontSize = "12pt";
    ta.style.border = "0";
    ta.style.padding = "0";
    ta.style.margin = "0";
    ta.style.position = "absolute";
    ta.style[isRTL ? "right" : "left"] = "-9999px";
    const yPosition = window2.pageYOffset || doc.documentElement.scrollTop;
    ta.style.top = yPosition + "px";
    ta.setAttribute("readonly", "");
    return ta;
  }
  /**
   * Pushes copy operation response to copySubject, to provide global access
   * to the response.
   */
  pushCopyResponse(response) {
    if (this.copySubject.observers.length > 0) {
      this.ngZone.run(() => {
        this.copySubject.next(response);
      });
    }
  }
  /**
   * @deprecated use pushCopyResponse instead.
   */
  pushCopyReponse(response) {
    this.pushCopyResponse(response);
  }
};
ClipboardService.ɵfac = function ClipboardService_Factory(t) {
  return new (t || ClipboardService)(ɵɵinject(NgZone), ɵɵinject(DOCUMENT), ɵɵinject(WINDOW, 8));
};
ClipboardService.ɵprov = ɵɵdefineInjectable({
  token: ClipboardService,
  factory: ClipboardService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [WINDOW]
      }]
    }];
  }, null);
})();
var ClipboardDirective = class {
  constructor(ngZone, host, renderer, clipboardSrv) {
    this.ngZone = ngZone;
    this.host = host;
    this.renderer = renderer;
    this.clipboardSrv = clipboardSrv;
    this.cbOnSuccess = new EventEmitter();
    this.cbOnError = new EventEmitter();
    this.onClick = (event) => {
      if (!this.clipboardSrv.isSupported) {
        this.handleResult(false, void 0, event);
      } else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
        this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
      } else if (this.cbContent) {
        this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, event);
      }
    };
  }
  // eslint-disable-next-line no-empty, @typescript-eslint/no-empty-function
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.clickListener = this.renderer.listen(this.host.nativeElement, "click", this.onClick);
    });
  }
  ngOnDestroy() {
    if (this.clickListener) {
      this.clickListener();
    }
    this.clipboardSrv.destroy(this.container);
  }
  /**
   * Fires an event based on the copy operation result.
   * @param succeeded
   */
  handleResult(succeeded, copiedContent, event) {
    let response = {
      isSuccess: succeeded,
      content: copiedContent,
      successMessage: this.cbSuccessMsg,
      event
    };
    if (succeeded) {
      if (this.cbOnSuccess.observed) {
        this.ngZone.run(() => {
          this.cbOnSuccess.emit(response);
        });
      }
    } else {
      if (this.cbOnError.observed) {
        this.ngZone.run(() => {
          this.cbOnError.emit(response);
        });
      }
    }
    this.clipboardSrv.pushCopyResponse(response);
  }
};
ClipboardDirective.ɵfac = function ClipboardDirective_Factory(t) {
  return new (t || ClipboardDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ClipboardService));
};
ClipboardDirective.ɵdir = ɵɵdefineDirective({
  type: ClipboardDirective,
  selectors: [["", "ngxClipboard", ""]],
  inputs: {
    targetElm: [InputFlags.None, "ngxClipboard", "targetElm"],
    container: "container",
    cbContent: "cbContent",
    cbSuccessMsg: "cbSuccessMsg"
  },
  outputs: {
    cbOnSuccess: "cbOnSuccess",
    cbOnError: "cbOnError"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxClipboard]"
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ClipboardService
    }];
  }, {
    targetElm: [{
      type: Input,
      args: ["ngxClipboard"]
    }],
    container: [{
      type: Input
    }],
    cbContent: [{
      type: Input
    }],
    cbSuccessMsg: [{
      type: Input
    }],
    cbOnSuccess: [{
      type: Output
    }],
    cbOnError: [{
      type: Output
    }]
  });
})();
var ClipboardIfSupportedDirective = class {
  constructor(_clipboardService, _viewContainerRef, _templateRef) {
    this._clipboardService = _clipboardService;
    this._viewContainerRef = _viewContainerRef;
    this._templateRef = _templateRef;
  }
  ngOnInit() {
    if (this._clipboardService.isSupported) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
  }
};
ClipboardIfSupportedDirective.ɵfac = function ClipboardIfSupportedDirective_Factory(t) {
  return new (t || ClipboardIfSupportedDirective)(ɵɵdirectiveInject(ClipboardService), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
};
ClipboardIfSupportedDirective.ɵdir = ɵɵdefineDirective({
  type: ClipboardIfSupportedDirective,
  selectors: [["", "ngxClipboardIfSupported", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardIfSupportedDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxClipboardIfSupported]"
    }]
  }], function() {
    return [{
      type: ClipboardService
    }, {
      type: ViewContainerRef
    }, {
      type: TemplateRef
    }];
  }, null);
})();
var ClipboardModule = class {
};
ClipboardModule.ɵfac = function ClipboardModule_Factory(t) {
  return new (t || ClipboardModule)();
};
ClipboardModule.ɵmod = ɵɵdefineNgModule({
  type: ClipboardModule,
  declarations: [ClipboardDirective, ClipboardIfSupportedDirective],
  imports: [CommonModule],
  exports: [ClipboardDirective, ClipboardIfSupportedDirective]
});
ClipboardModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [ClipboardDirective, ClipboardIfSupportedDirective],
      exports: [ClipboardDirective, ClipboardIfSupportedDirective]
    }]
  }], null, null);
})();
export {
  ClipboardDirective,
  ClipboardIfSupportedDirective,
  ClipboardModule,
  ClipboardService
};
//# sourceMappingURL=ngx-clipboard.js.map
