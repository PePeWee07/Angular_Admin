import {
  isPlatformBrowser
} from "./chunk-XG6O2LRS.js";
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵlistener
} from "./chunk-JMTS7RQO.js";
import "./chunk-YRN7ZVOS.js";
import "./chunk-LJ4UR6LK.js";
import "./chunk-JJYN5SQZ.js";
import "./chunk-ECDNAN6X.js";
import "./chunk-6DXHB35K.js";

// node_modules/countup.js/dist/countUp.min.js
var t = function() {
  return t = Object.assign || function(t2) {
    for (var i2, n = 1, s = arguments.length; n < s; n++)
      for (var a in i2 = arguments[n])
        Object.prototype.hasOwnProperty.call(i2, a) && (t2[a] = i2[a]);
    return t2;
  }, t.apply(this, arguments);
};
var i = function() {
  function i2(i3, n, s) {
    var a = this;
    this.endVal = n, this.options = s, this.version = "2.8.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, useIndianSeparators: false, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: false, scrollSpyDelay: 200, scrollSpyOnce: false }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t2) {
      a.startTime || (a.startTime = t2);
      var i4 = t2 - a.startTime;
      a.remaining = a.duration - i4, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(i4, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(i4, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (i4 / a.duration);
      var n2 = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
      a.frameVal = n2 ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), i4 < a.duration ? a.rAF = requestAnimationFrame(a.count) : null !== a.finalEndVal ? a.update(a.finalEndVal) : a.options.onCompleteCallback && a.options.onCompleteCallback();
    }, this.formatNumber = function(t2) {
      var i4, n2, s2, e, o = t2 < 0 ? "-" : "";
      i4 = Math.abs(t2).toFixed(a.options.decimalPlaces);
      var r = (i4 += "").split(".");
      if (n2 = r[0], s2 = r.length > 1 ? a.options.decimal + r[1] : "", a.options.useGrouping) {
        e = "";
        for (var l = 3, h = 0, u = 0, p = n2.length; u < p; ++u)
          a.options.useIndianSeparators && 4 === u && (l = 2, h = 1), 0 !== u && h % l == 0 && (e = a.options.separator + e), h++, e = n2[p - u - 1] + e;
        n2 = e;
      }
      return a.options.numerals && a.options.numerals.length && (n2 = n2.replace(/[0-9]/g, function(t3) {
        return a.options.numerals[+t3];
      }), s2 = s2.replace(/[0-9]/g, function(t3) {
        return a.options.numerals[+t3];
      })), o + a.options.prefix + n2 + s2 + a.options.suffix;
    }, this.easeOutExpo = function(t2, i4, n2, s2) {
      return n2 * (1 - Math.pow(2, -10 * t2 / s2)) * 1024 / 1023 + i4;
    }, this.options = t(t({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = false), this.el = "string" == typeof i3 ? document.getElementById(i3) : i3, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, i3) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
      return a.handleScroll(a);
    }), window.onscroll = function() {
      window.onScrollFns.forEach(function(t2) {
        return t2();
      });
    }, this.handleScroll(this)));
  }
  return i2.prototype.handleScroll = function(t2) {
    if (t2 && window && !t2.once) {
      var i3 = window.innerHeight + window.scrollY, n = t2.el.getBoundingClientRect(), s = n.top + window.pageYOffset, a = n.top + n.height + window.pageYOffset;
      a < i3 && a > window.scrollY && t2.paused ? (t2.paused = false, setTimeout(function() {
        return t2.start();
      }, t2.options.scrollSpyDelay), t2.options.scrollSpyOnce && (t2.once = true)) : (window.scrollY > a || s > i3) && !t2.paused && t2.reset();
    }
  }, i2.prototype.determineDirectionAndSmartEasing = function() {
    var t2 = this.finalEndVal ? this.finalEndVal : this.endVal;
    this.countDown = this.startVal > t2;
    var i3 = t2 - this.startVal;
    if (Math.abs(i3) > this.options.smartEasingThreshold && this.options.useEasing) {
      this.finalEndVal = t2;
      var n = this.countDown ? 1 : -1;
      this.endVal = t2 + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
    } else
      this.endVal = t2, this.finalEndVal = null;
    null !== this.finalEndVal ? this.useEasing = false : this.useEasing = this.options.useEasing;
  }, i2.prototype.start = function(t2) {
    this.error || (this.options.onStartCallback && this.options.onStartCallback(), t2 && (this.options.onCompleteCallback = t2), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
  }, i2.prototype.pauseResume = function() {
    this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
  }, i2.prototype.reset = function() {
    cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
  }, i2.prototype.update = function(t2) {
    cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t2), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
  }, i2.prototype.printValue = function(t2) {
    var i3;
    if (this.el) {
      var n = this.formattingFn(t2);
      if (null === (i3 = this.options.plugin) || void 0 === i3 ? void 0 : i3.render)
        this.options.plugin.render(this.el, n);
      else if ("INPUT" === this.el.tagName)
        this.el.value = n;
      else
        "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n;
    }
  }, i2.prototype.ensureNumber = function(t2) {
    return "number" == typeof t2 && !isNaN(t2);
  }, i2.prototype.validateValue = function(t2) {
    var i3 = Number(t2);
    return this.ensureNumber(i3) ? i3 : (this.error = "[CountUp] invalid start or end value: ".concat(t2), null);
  }, i2.prototype.resetDuration = function() {
    this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
  }, i2;
}();

// node_modules/ngx-countup/fesm2020/ngx-countup.mjs
var CountUpDirective = class {
  constructor(el, zone, platformId) {
    this.el = el;
    this.zone = zone;
    this.platformId = platformId;
    this.options = {};
    this.reanimateOnClick = true;
    this.complete = new EventEmitter();
  }
  // Re-animate if preference is set.
  onClick() {
    if (this.reanimateOnClick) {
      this.animate();
    }
  }
  ngOnChanges(changes) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const {
      options,
      endVal
    } = changes;
    if (endVal?.currentValue !== void 0) {
      if (this.countUp !== void 0) {
        this.zone.runOutsideAngular(() => {
          this.countUp.update(this.endVal);
        });
      } else {
        this.initAndRun();
      }
    } else if (options?.currentValue !== void 0) {
      this.initAndRun();
    }
  }
  animate() {
    this.zone.runOutsideAngular(() => {
      this.countUp.reset();
      this.countUp.start(() => {
        this.zone.run(() => {
          this.complete.emit();
        });
      });
    });
  }
  initAndRun() {
    this.zone.runOutsideAngular(() => {
      this.countUp = new i(this.el.nativeElement, this.endVal, this.options);
      if (!this.options.enableScrollSpy) {
        this.animate();
      }
    });
  }
};
CountUpDirective.ɵfac = function CountUpDirective_Factory(t2) {
  return new (t2 || CountUpDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PLATFORM_ID));
};
CountUpDirective.ɵdir = ɵɵdefineDirective({
  type: CountUpDirective,
  selectors: [["", "countUp", ""]],
  hostBindings: function CountUpDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function CountUpDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    endVal: [InputFlags.None, "countUp", "endVal"],
    options: "options",
    reanimateOnClick: "reanimateOnClick"
  },
  outputs: {
    complete: "complete"
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountUpDirective, [{
    type: Directive,
    args: [{
      selector: "[countUp]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Object,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    endVal: [{
      type: Input,
      args: ["countUp"]
    }],
    options: [{
      type: Input
    }],
    reanimateOnClick: [{
      type: Input
    }],
    complete: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var CountUpModule = class {
};
CountUpModule.ɵfac = function CountUpModule_Factory(t2) {
  return new (t2 || CountUpModule)();
};
CountUpModule.ɵmod = ɵɵdefineNgModule({
  type: CountUpModule,
  declarations: [CountUpDirective],
  exports: [CountUpDirective]
});
CountUpModule.ɵinj = ɵɵdefineInjector({
  imports: [[]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountUpModule, [{
    type: NgModule,
    args: [{
      imports: [],
      declarations: [CountUpDirective],
      exports: [CountUpDirective]
    }]
  }], null, null);
})();
export {
  CountUpDirective,
  CountUpModule
};
//# sourceMappingURL=ngx-countup.js.map
