import {
  firebase,
  getApps,
  registerVersion
} from "./chunk-2IZ6NI6C.js";
import {
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  NgZone,
  Optional,
  PLATFORM_ID,
  VERSION,
  Version,
  isDevMode,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-JMTS7RQO.js";
import {
  queueScheduler
} from "./chunk-LJ4UR6LK.js";
import {
  Observable,
  asyncScheduler,
  observeOn,
  subscribeOn,
  tap
} from "./chunk-JJYN5SQZ.js";

// node_modules/firebase/app/dist/esm/index.esm.js
var name = "firebase";
var version = "10.7.2";
registerVersion(name, version, "app");

// node_modules/@angular/fire/fesm2022/angular-fire.mjs
var VERSION2 = new Version("ANGULARFIRE2_VERSION");
function ɵgetDefaultInstanceOf(identifier, provided, defaultApp) {
  if (provided) {
    if (provided.length === 1) {
      return provided[0];
    }
    const providedUsingDefaultApp = provided.filter((it) => it.app === defaultApp);
    if (providedUsingDefaultApp.length === 1) {
      return providedUsingDefaultApp[0];
    }
  }
  const defaultAppWithContainer = defaultApp;
  const provider = defaultAppWithContainer.container.getProvider(identifier);
  return provider.getImmediate({
    optional: true
  });
}
var ɵgetAllInstancesOf = (identifier, app) => {
  const apps = app ? [app] : getApps();
  const instances = [];
  apps.forEach((app2) => {
    const provider = app2.container.getProvider(identifier);
    provider.instances.forEach((instance) => {
      if (!instances.includes(instance)) {
        instances.push(instance);
      }
    });
  });
  return instances;
};
var ɵAppCheckInstances = class {
  constructor() {
    return ɵgetAllInstancesOf(ɵAPP_CHECK_PROVIDER_NAME);
  }
};
var ɵAPP_CHECK_PROVIDER_NAME = "app-check";
function noop() {
}
var ɵZoneScheduler = class {
  zone;
  delegate;
  constructor(zone, delegate = queueScheduler) {
    this.zone = zone;
    this.delegate = delegate;
  }
  now() {
    return this.delegate.now();
  }
  schedule(work, delay, state) {
    const targetZone = this.zone;
    const workInZone = function(state2) {
      targetZone.runGuarded(() => {
        work.apply(this, [state2]);
      });
    };
    return this.delegate.schedule(workInZone, delay, state);
  }
};
var BlockUntilFirstOperator = class {
  zone;
  // @ts-ignore
  task = null;
  constructor(zone) {
    this.zone = zone;
  }
  call(subscriber, source) {
    const unscheduleTask = this.unscheduleTask.bind(this);
    this.task = this.zone.run(() => Zone.current.scheduleMacroTask("firebaseZoneBlock", noop, {}, noop, noop));
    return source.pipe(tap({
      next: unscheduleTask,
      complete: unscheduleTask,
      error: unscheduleTask
    })).subscribe(subscriber).add(unscheduleTask);
  }
  unscheduleTask() {
    setTimeout(() => {
      if (this.task != null && this.task.state === "scheduled") {
        this.task.invoke();
        this.task = null;
      }
    }, 10);
  }
};
var ɵAngularFireSchedulers = class _ɵAngularFireSchedulers {
  ngZone;
  outsideAngular;
  insideAngular;
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.outsideAngular = ngZone.runOutsideAngular(() => new ɵZoneScheduler(Zone.current));
    this.insideAngular = ngZone.run(() => new ɵZoneScheduler(Zone.current, asyncScheduler));
    globalThis.ɵAngularFireScheduler ||= this;
  }
  static ɵfac = function ɵAngularFireSchedulers_Factory(t) {
    return new (t || _ɵAngularFireSchedulers)(ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ɵAngularFireSchedulers,
    factory: _ɵAngularFireSchedulers.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵAngularFireSchedulers, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }], null);
})();
function getSchedulers() {
  const schedulers = globalThis.ɵAngularFireScheduler;
  if (!schedulers) {
    throw new Error(`Either AngularFireModule has not been provided in your AppModule (this can be done manually or implictly using
provideFirebaseApp) or you're calling an AngularFire method outside of an NgModule (which is not supported).`);
  }
  return schedulers;
}
function runOutsideAngular(fn) {
  return getSchedulers().ngZone.runOutsideAngular(() => fn());
}
function run(fn) {
  return getSchedulers().ngZone.run(() => fn());
}
function keepUnstableUntilFirst(obs$) {
  return ɵkeepUnstableUntilFirstFactory(getSchedulers())(obs$);
}
function ɵkeepUnstableUntilFirstFactory(schedulers) {
  return function keepUnstableUntilFirst2(obs$) {
    obs$ = obs$.lift(new BlockUntilFirstOperator(schedulers.ngZone));
    return obs$.pipe(
      // Run the subscribe body outside of Angular (e.g. calling Firebase SDK to add a listener to a change event)
      subscribeOn(schedulers.outsideAngular),
      // Run operators inside the angular zone (e.g. side effects via tap())
      observeOn(schedulers.insideAngular)
      // INVESTIGATE https://github.com/angular/angularfire/pull/2315
      // share()
    );
  };
}
var zoneWrapFn = (it, macrotask) => {
  const _this = void 0;
  return function() {
    const _arguments = arguments;
    if (macrotask) {
      setTimeout(() => {
        if (macrotask.state === "scheduled") {
          macrotask.invoke();
        }
      }, 10);
    }
    return run(() => it.apply(_this, _arguments));
  };
};
var ɵzoneWrap = (it, blockUntilFirst) => {
  return function() {
    let macrotask;
    const _arguments = arguments;
    for (let i = 0; i < arguments.length; i++) {
      if (typeof _arguments[i] === "function") {
        if (blockUntilFirst) {
          macrotask ||= run(() => Zone.current.scheduleMacroTask("firebaseZoneBlock", noop, {}, noop, noop));
        }
        _arguments[i] = zoneWrapFn(_arguments[i], macrotask);
      }
    }
    const ret = runOutsideAngular(() => it.apply(this, _arguments));
    if (!blockUntilFirst) {
      if (ret instanceof Observable) {
        const schedulers = getSchedulers();
        return ret.pipe(subscribeOn(schedulers.outsideAngular), observeOn(schedulers.insideAngular));
      } else {
        return run(() => ret);
      }
    }
    if (ret instanceof Observable) {
      return ret.pipe(keepUnstableUntilFirst);
    } else if (ret instanceof Promise) {
      return run(() => new Promise((resolve, reject) => ret.then((it2) => run(() => resolve(it2)), (reason) => run(() => reject(reason)))));
    } else if (typeof ret === "function" && macrotask) {
      return function() {
        setTimeout(() => {
          if (macrotask && macrotask.state === "scheduled") {
            macrotask.invoke();
          }
        }, 10);
        return ret.apply(this, arguments);
      };
    } else {
      return run(() => ret);
    }
  };
};

// node_modules/@angular/fire/fesm2022/angular-fire-compat.mjs
var noopFunctions = ["ngOnDestroy"];
var ɵlazySDKProxy = (klass, observable, zone, options = {}) => {
  return new Proxy(klass, {
    get: (_, name2) => zone.runOutsideAngular(() => {
      if (klass[name2]) {
        if (options?.spy?.get) {
          options.spy.get(name2, klass[name2]);
        }
        return klass[name2];
      }
      if (noopFunctions.indexOf(name2) > -1) {
        return () => void 0;
      }
      const promise = observable.toPromise().then((mod) => {
        const ret = mod?.[name2];
        if (typeof ret === "function") {
          return ret.bind(mod);
        } else if (ret?.then) {
          return ret.then((res) => zone.run(() => res));
        } else {
          return zone.run(() => ret);
        }
      });
      return new Proxy(() => void 0, {
        get: (_2, name3) => promise[name3],
        // TODO handle callbacks as transparently as I can
        apply: (self, _2, args) => promise.then((it) => {
          const res = it?.(...args);
          if (options?.spy?.apply) {
            options.spy.apply(name2, args, res);
          }
          return res;
        })
      });
    })
  });
};
var ɵapplyMixins = (derivedCtor, constructors) => {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype || baseCtor).forEach((name2) => {
      Object.defineProperty(derivedCtor.prototype, name2, Object.getOwnPropertyDescriptor(baseCtor.prototype || baseCtor, name2));
    });
  });
};
var FirebaseApp = class {
  constructor(app) {
    return app;
  }
};
var FIREBASE_OPTIONS = new InjectionToken("angularfire2.app.options");
var FIREBASE_APP_NAME = new InjectionToken("angularfire2.app.name");
function ɵfirebaseAppFactory(options, zone, nameOrConfig) {
  const name2 = typeof nameOrConfig === "string" && nameOrConfig || "[DEFAULT]";
  const config = typeof nameOrConfig === "object" && nameOrConfig || {};
  config.name = config.name || name2;
  const existingApp = firebase.apps.filter((app2) => app2 && app2.name === config.name)[0];
  const app = existingApp || zone.runOutsideAngular(() => firebase.initializeApp(options, config));
  try {
    if (JSON.stringify(options) !== JSON.stringify(app.options)) {
      const hmr = !!module.hot;
      log$1("error", `${app.name} Firebase App already initialized with different options${hmr ? ", you may need to reload as Firebase is not HMR aware." : "."}`);
    }
  } catch (e) {
  }
  return new FirebaseApp(app);
}
var log$1 = (level, ...args) => {
  if (isDevMode() && typeof console !== "undefined") {
    console[level](...args);
  }
};
var FIREBASE_APP_PROVIDER = {
  provide: FirebaseApp,
  useFactory: ɵfirebaseAppFactory,
  deps: [FIREBASE_OPTIONS, NgZone, [new Optional(), FIREBASE_APP_NAME]]
};
var AngularFireModule = class _AngularFireModule {
  static initializeApp(options, nameOrConfig) {
    return {
      ngModule: _AngularFireModule,
      providers: [{
        provide: FIREBASE_OPTIONS,
        useValue: options
      }, {
        provide: FIREBASE_APP_NAME,
        useValue: nameOrConfig
      }]
    };
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(platformId) {
    firebase.registerVersion("angularfire", VERSION2.full, "core");
    firebase.registerVersion("angularfire", VERSION2.full, "app-compat");
    firebase.registerVersion("angular", VERSION.full, platformId.toString());
  }
  static ɵfac = function AngularFireModule_Factory(t) {
    return new (t || _AngularFireModule)(ɵɵinject(PLATFORM_ID));
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AngularFireModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [FIREBASE_APP_PROVIDER]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularFireModule, [{
    type: NgModule,
    args: [{
      providers: [FIREBASE_APP_PROVIDER]
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
function ɵcacheInstance(cacheKey, moduleName, appName, fn, deps) {
  const [, instance, cachedDeps] = globalThis.ɵAngularfireInstanceCache.find((it) => it[0] === cacheKey) || [];
  if (instance) {
    if (!matchDep(deps, cachedDeps)) {
      log("error", `${moduleName} was already initialized on the ${appName} Firebase App with different settings.${IS_HMR ? " You may need to reload as Firebase is not HMR aware." : ""}`);
      log("warn", {
        is: deps,
        was: cachedDeps
      });
    }
    return instance;
  } else {
    const newInstance = fn();
    globalThis.ɵAngularfireInstanceCache.push([cacheKey, newInstance, deps]);
    return newInstance;
  }
}
function matchDep(a, b) {
  try {
    return a.toString() === b.toString();
  } catch (_) {
    return a === b;
  }
}
var IS_HMR = typeof module !== "undefined" && !!module.hot;
var log = (level, ...args) => {
  if (isDevMode() && typeof console !== "undefined") {
    console[level](...args);
  }
};
globalThis.ɵAngularfireInstanceCache ||= [];

export {
  VERSION2 as VERSION,
  ɵgetDefaultInstanceOf,
  ɵgetAllInstancesOf,
  ɵAppCheckInstances,
  ɵAPP_CHECK_PROVIDER_NAME,
  ɵAngularFireSchedulers,
  keepUnstableUntilFirst,
  ɵzoneWrap,
  ɵlazySDKProxy,
  ɵapplyMixins,
  FirebaseApp,
  FIREBASE_OPTIONS,
  FIREBASE_APP_NAME,
  ɵfirebaseAppFactory,
  AngularFireModule,
  ɵcacheInstance
};
/*! Bundled license information:

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=chunk-OITJZE76.js.map
