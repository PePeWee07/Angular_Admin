import {
  cloneDeepWith_default,
  isElement_default,
  throttle_default
} from "./chunk-SFL3G5OL.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR
} from "./chunk-3IFZEH6V.js";
import {
  CommonModule
} from "./chunk-XG6O2LRS.js";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  forwardRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵtemplate
} from "./chunk-JMTS7RQO.js";
import "./chunk-YRN7ZVOS.js";
import "./chunk-LJ4UR6LK.js";
import {
  first
} from "./chunk-JJYN5SQZ.js";
import "./chunk-ECDNAN6X.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-6DXHB35K.js";

// node_modules/@ckeditor/ckeditor5-watchdog/src/watchdog.js
var Watchdog = class {
  /**
   * @param {module:watchdog/watchdog~WatchdogConfig} config The watchdog plugin configuration.
   */
  constructor(config) {
    this.crashes = [];
    this.state = "initializing";
    this._now = Date.now;
    this.crashes = [];
    this._crashNumberLimit = typeof config.crashNumberLimit === "number" ? config.crashNumberLimit : 3;
    this._minimumNonErrorTimePeriod = typeof config.minimumNonErrorTimePeriod === "number" ? config.minimumNonErrorTimePeriod : 5e3;
    this._boundErrorHandler = (evt) => {
      const error = "error" in evt ? evt.error : evt.reason;
      if (error instanceof Error) {
        this._handleError(error, evt);
      }
    };
    this._listeners = {};
    if (!this._restart) {
      throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.");
    }
  }
  /**
   * Destroys the watchdog and releases the resources.
   */
  destroy() {
    this._stopErrorHandling();
    this._listeners = {};
  }
  /**
   * Starts listening to a specific event name by registering a callback that will be executed
   * whenever an event with a given name fires.
   *
   * Note that this method differs from the CKEditor 5's default `EventEmitterMixin` implementation.
   *
   * @param eventName The event name.
   * @param callback A callback which will be added to event listeners.
   */
  on(eventName, callback) {
    if (!this._listeners[eventName]) {
      this._listeners[eventName] = [];
    }
    this._listeners[eventName].push(callback);
  }
  /**
   * Stops listening to the specified event name by removing the callback from event listeners.
   *
   * Note that this method differs from the CKEditor 5's default `EventEmitterMixin` implementation.
   *
   * @param eventName The event name.
   * @param callback A callback which will be removed from event listeners.
   */
  off(eventName, callback) {
    this._listeners[eventName] = this._listeners[eventName].filter((cb) => cb !== callback);
  }
  /**
   * Fires an event with a given event name and arguments.
   *
   * Note that this method differs from the CKEditor 5's default `EventEmitterMixin` implementation.
   */
  _fire(eventName, ...args) {
    const callbacks = this._listeners[eventName] || [];
    for (const callback of callbacks) {
      callback.apply(this, [null, ...args]);
    }
  }
  /**
   * Starts error handling by attaching global error handlers.
   */
  _startErrorHandling() {
    window.addEventListener("error", this._boundErrorHandler);
    window.addEventListener("unhandledrejection", this._boundErrorHandler);
  }
  /**
   * Stops error handling by detaching global error handlers.
   */
  _stopErrorHandling() {
    window.removeEventListener("error", this._boundErrorHandler);
    window.removeEventListener("unhandledrejection", this._boundErrorHandler);
  }
  /**
   * Checks if an error comes from the watched item and restarts it.
   * It reacts to {@link module:utils/ckeditorerror~CKEditorError `CKEditorError` errors} only.
   *
   * @fires error
   * @param error Error.
   * @param evt An error event.
   */
  _handleError(error, evt) {
    if (this._shouldReactToError(error)) {
      this.crashes.push({
        message: error.message,
        stack: error.stack,
        // `evt.filename`, `evt.lineno` and `evt.colno` are available only in ErrorEvent events
        filename: evt instanceof ErrorEvent ? evt.filename : void 0,
        lineno: evt instanceof ErrorEvent ? evt.lineno : void 0,
        colno: evt instanceof ErrorEvent ? evt.colno : void 0,
        date: this._now()
      });
      const causesRestart = this._shouldRestart();
      this.state = "crashed";
      this._fire("stateChange");
      this._fire("error", { error, causesRestart });
      if (causesRestart) {
        this._restart();
      } else {
        this.state = "crashedPermanently";
        this._fire("stateChange");
      }
    }
  }
  /**
   * Checks whether an error should be handled by the watchdog.
   *
   * @param error An error that was caught by the error handling process.
   */
  _shouldReactToError(error) {
    return error.is && error.is("CKEditorError") && error.context !== void 0 && // In some cases the watched item should not be restarted - e.g. during the item initialization.
    // That's why the `null` was introduced as a correct error context which does cause restarting.
    error.context !== null && // Do not react to errors if the watchdog is in states other than `ready`.
    this.state === "ready" && this._isErrorComingFromThisItem(error);
  }
  /**
   * Checks if the watchdog should restart the underlying item.
   */
  _shouldRestart() {
    if (this.crashes.length <= this._crashNumberLimit) {
      return true;
    }
    const lastErrorTime = this.crashes[this.crashes.length - 1].date;
    const firstMeaningfulErrorTime = this.crashes[this.crashes.length - 1 - this._crashNumberLimit].date;
    const averageNonErrorTimePeriod = (lastErrorTime - firstMeaningfulErrorTime) / this._crashNumberLimit;
    return averageNonErrorTimePeriod > this._minimumNonErrorTimePeriod;
  }
};

// node_modules/@ckeditor/ckeditor5-watchdog/src/utils/getsubnodes.js
function getSubNodes(head, excludedProperties = /* @__PURE__ */ new Set()) {
  const nodes = [head];
  const subNodes = /* @__PURE__ */ new Set();
  let nodeIndex = 0;
  while (nodes.length > nodeIndex) {
    const node = nodes[nodeIndex++];
    if (subNodes.has(node) || !shouldNodeBeIncluded(node) || excludedProperties.has(node)) {
      continue;
    }
    subNodes.add(node);
    if (Symbol.iterator in node) {
      try {
        for (const n of node) {
          nodes.push(n);
        }
      } catch (err) {
      }
    } else {
      for (const key in node) {
        if (key === "defaultValue") {
          continue;
        }
        nodes.push(node[key]);
      }
    }
  }
  return subNodes;
}
function shouldNodeBeIncluded(node) {
  const type = Object.prototype.toString.call(node);
  const typeOfNode = typeof node;
  return !(typeOfNode === "number" || typeOfNode === "boolean" || typeOfNode === "string" || typeOfNode === "symbol" || typeOfNode === "function" || type === "[object Date]" || type === "[object RegExp]" || type === "[object Module]" || node === void 0 || node === null || // This flag is meant to exclude singletons shared across editor instances. So when an error is thrown in one editor,
  // the other editors connected through the reference to the same singleton are not restarted. This is a temporary workaround
  // until a better solution is found.
  // More in https://github.com/ckeditor/ckeditor5/issues/12292.
  node._watchdogExcluded || // Skip native DOM objects, e.g. Window, nodes, events, etc.
  node instanceof EventTarget || node instanceof Event);
}

// node_modules/@ckeditor/ckeditor5-watchdog/src/utils/areconnectedthroughproperties.js
function areConnectedThroughProperties(target1, target2, excludedNodes = /* @__PURE__ */ new Set()) {
  if (target1 === target2 && isObject(target1)) {
    return true;
  }
  const subNodes1 = getSubNodes(target1, excludedNodes);
  const subNodes2 = getSubNodes(target2, excludedNodes);
  for (const node of subNodes1) {
    if (subNodes2.has(node)) {
      return true;
    }
  }
  return false;
}
function isObject(structure) {
  return typeof structure === "object" && structure !== null;
}

// node_modules/@ckeditor/ckeditor5-watchdog/src/editorwatchdog.js
var EditorWatchdog = class extends Watchdog {
  /**
   * @param Editor The editor class.
   * @param watchdogConfig The watchdog plugin configuration.
   */
  constructor(Editor, watchdogConfig = {}) {
    super(watchdogConfig);
    this._editor = null;
    this._initUsingData = true;
    this._editables = {};
    this._throttledSave = throttle_default(this._save.bind(this), typeof watchdogConfig.saveInterval === "number" ? watchdogConfig.saveInterval : 5e3);
    if (Editor) {
      this._creator = (elementOrData, config) => Editor.create(elementOrData, config);
    }
    this._destructor = (editor) => editor.destroy();
  }
  /**
   * The current editor instance.
   */
  get editor() {
    return this._editor;
  }
  /**
   * @internal
   */
  get _item() {
    return this._editor;
  }
  /**
   * Sets the function that is responsible for the editor creation.
   * It expects a function that should return a promise.
   *
   * ```ts
   * watchdog.setCreator( ( element, config ) => ClassicEditor.create( element, config ) );
   * ```
   */
  setCreator(creator) {
    this._creator = creator;
  }
  /**
   * Sets the function that is responsible for the editor destruction.
   * Overrides the default destruction function, which destroys only the editor instance.
   * It expects a function that should return a promise or `undefined`.
   *
   * ```ts
   * watchdog.setDestructor( editor => {
   * 	// Do something before the editor is destroyed.
   *
   * 	return editor
   * 		.destroy()
   * 		.then( () => {
   * 			// Do something after the editor is destroyed.
   * 		} );
   * } );
   * ```
   */
  setDestructor(destructor) {
    this._destructor = destructor;
  }
  /**
   * Restarts the editor instance. This method is called whenever an editor error occurs. It fires the `restart` event and changes
   * the state to `initializing`.
   *
   * @fires restart
   */
  _restart() {
    return Promise.resolve().then(() => {
      this.state = "initializing";
      this._fire("stateChange");
      return this._destroy();
    }).catch((err) => {
      console.error("An error happened during the editor destroying.", err);
    }).then(() => {
      const existingRoots = {};
      const lazyRoots = [];
      const oldRootsAttributes = this._config.rootsAttributes || {};
      const rootsAttributes = {};
      for (const [rootName, rootData] of Object.entries(this._data.roots)) {
        if (rootData.isLoaded) {
          existingRoots[rootName] = "";
          rootsAttributes[rootName] = oldRootsAttributes[rootName] || {};
        } else {
          lazyRoots.push(rootName);
        }
      }
      const updatedConfig = __spreadProps(__spreadValues({}, this._config), {
        extraPlugins: this._config.extraPlugins || [],
        lazyRoots,
        rootsAttributes,
        _watchdogInitialData: this._data
      });
      delete updatedConfig.initialData;
      updatedConfig.extraPlugins.push(EditorWatchdogInitPlugin);
      if (this._initUsingData) {
        return this.create(existingRoots, updatedConfig, updatedConfig.context);
      } else {
        if (isElement_default(this._elementOrData)) {
          return this.create(this._elementOrData, updatedConfig, updatedConfig.context);
        } else {
          return this.create(this._editables, updatedConfig, updatedConfig.context);
        }
      }
    }).then(() => {
      this._fire("restart");
    });
  }
  /**
   * Creates the editor instance and keeps it running, using the defined creator and destructor.
   *
   * @param elementOrData The editor source element or the editor data.
   * @param config The editor configuration.
   * @param context A context for the editor.
   */
  create(elementOrData = this._elementOrData, config = this._config, context) {
    return Promise.resolve().then(() => {
      super._startErrorHandling();
      this._elementOrData = elementOrData;
      this._initUsingData = typeof elementOrData == "string" || Object.keys(elementOrData).length > 0 && typeof Object.values(elementOrData)[0] == "string";
      this._config = this._cloneEditorConfiguration(config) || {};
      this._config.context = context;
      return this._creator(elementOrData, this._config);
    }).then((editor) => {
      this._editor = editor;
      editor.model.document.on("change:data", this._throttledSave);
      this._lastDocumentVersion = editor.model.document.version;
      this._data = this._getData();
      if (!this._initUsingData) {
        this._editables = this._getEditables();
      }
      this.state = "ready";
      this._fire("stateChange");
    });
  }
  /**
   * Destroys the watchdog and the current editor instance. It fires the callback
   * registered in {@link #setDestructor `setDestructor()`} and uses it to destroy the editor instance.
   * It also sets the state to `destroyed`.
   */
  destroy() {
    return Promise.resolve().then(() => {
      this.state = "destroyed";
      this._fire("stateChange");
      super.destroy();
      return this._destroy();
    });
  }
  _destroy() {
    return Promise.resolve().then(() => {
      this._stopErrorHandling();
      this._throttledSave.cancel();
      const editor = this._editor;
      this._editor = null;
      editor.model.document.off("change:data", this._throttledSave);
      return this._destructor(editor);
    });
  }
  /**
   * Saves the editor data, so it can be restored after the crash even if the data cannot be fetched at
   * the moment of the crash.
   */
  _save() {
    const version = this._editor.model.document.version;
    try {
      this._data = this._getData();
      if (!this._initUsingData) {
        this._editables = this._getEditables();
      }
      this._lastDocumentVersion = version;
    } catch (err) {
      console.error(err, "An error happened during restoring editor data. Editor will be restored from the previously saved data.");
    }
  }
  /**
   * @internal
   */
  _setExcludedProperties(props) {
    this._excludedProps = props;
  }
  /**
   * Gets all data that is required to reinitialize editor instance.
   */
  _getData() {
    const editor = this._editor;
    const roots = editor.model.document.roots.filter((root) => root.isAttached() && root.rootName != "$graveyard");
    const { plugins } = editor;
    const commentsRepository = plugins.has("CommentsRepository") && plugins.get("CommentsRepository");
    const trackChanges = plugins.has("TrackChanges") && plugins.get("TrackChanges");
    const data = {
      roots: {},
      markers: {},
      commentThreads: JSON.stringify([]),
      suggestions: JSON.stringify([])
    };
    roots.forEach((root) => {
      data.roots[root.rootName] = {
        content: JSON.stringify(Array.from(root.getChildren())),
        attributes: JSON.stringify(Array.from(root.getAttributes())),
        isLoaded: root._isLoaded
      };
    });
    for (const marker of editor.model.markers) {
      if (!marker._affectsData) {
        continue;
      }
      data.markers[marker.name] = {
        rangeJSON: marker.getRange().toJSON(),
        usingOperation: marker._managedUsingOperations,
        affectsData: marker._affectsData
      };
    }
    if (commentsRepository) {
      data.commentThreads = JSON.stringify(commentsRepository.getCommentThreads({ toJSON: true, skipNotAttached: true }));
    }
    if (trackChanges) {
      data.suggestions = JSON.stringify(trackChanges.getSuggestions({ toJSON: true, skipNotAttached: true }));
    }
    return data;
  }
  /**
   * For each attached model root, returns its HTML editable element (if available).
   */
  _getEditables() {
    const editables = {};
    for (const rootName of this.editor.model.document.getRootNames()) {
      const editable = this.editor.ui.getEditableElement(rootName);
      if (editable) {
        editables[rootName] = editable;
      }
    }
    return editables;
  }
  /**
   * Traverses the error context and the current editor to find out whether these structures are connected
   * to each other via properties.
   *
   * @internal
   */
  _isErrorComingFromThisItem(error) {
    return areConnectedThroughProperties(this._editor, error.context, this._excludedProps);
  }
  /**
   * Clones the editor configuration.
   */
  _cloneEditorConfiguration(config) {
    return cloneDeepWith_default(config, (value, key) => {
      if (isElement_default(value)) {
        return value;
      }
      if (key === "context") {
        return value;
      }
    });
  }
};
var EditorWatchdogInitPlugin = class {
  constructor(editor) {
    this.editor = editor;
    this._data = editor.config.get("_watchdogInitialData");
  }
  /**
   * @inheritDoc
   */
  init() {
    this.editor.data.on("init", (evt) => {
      evt.stop();
      this.editor.model.enqueueChange({ isUndoable: false }, (writer) => {
        this._restoreCollaborationData();
        this._restoreEditorData(writer);
      });
      this.editor.data.fire("ready");
    }, { priority: 1e3 - 1 });
  }
  /**
   * Creates a model node (element or text) based on provided JSON.
   */
  _createNode(writer, jsonNode) {
    if ("name" in jsonNode) {
      const element = writer.createElement(jsonNode.name, jsonNode.attributes);
      if (jsonNode.children) {
        for (const child of jsonNode.children) {
          element._appendChild(this._createNode(writer, child));
        }
      }
      return element;
    } else {
      return writer.createText(jsonNode.data, jsonNode.attributes);
    }
  }
  /**
   * Restores the editor by setting the document data, roots attributes and markers.
   */
  _restoreEditorData(writer) {
    const editor = this.editor;
    Object.entries(this._data.roots).forEach(([rootName, { content, attributes }]) => {
      const parsedNodes = JSON.parse(content);
      const parsedAttributes = JSON.parse(attributes);
      const rootElement = editor.model.document.getRoot(rootName);
      for (const [key, value] of parsedAttributes) {
        writer.setAttribute(key, value, rootElement);
      }
      for (const child of parsedNodes) {
        const node = this._createNode(writer, child);
        writer.insert(node, rootElement, "end");
      }
    });
    Object.entries(this._data.markers).forEach(([markerName, markerOptions]) => {
      const { document: document2 } = editor.model;
      const _a = markerOptions, { rangeJSON: { start, end } } = _a, options = __objRest(_a, ["rangeJSON"]);
      const root = document2.getRoot(start.root);
      const startPosition = writer.createPositionFromPath(root, start.path, start.stickiness);
      const endPosition = writer.createPositionFromPath(root, end.path, end.stickiness);
      const range = writer.createRange(startPosition, endPosition);
      writer.addMarker(markerName, __spreadValues({
        range
      }, options));
    });
  }
  /**
   * Restores the editor collaboration data - comment threads and suggestions.
   */
  _restoreCollaborationData() {
    const parsedCommentThreads = JSON.parse(this._data.commentThreads);
    const parsedSuggestions = JSON.parse(this._data.suggestions);
    parsedCommentThreads.forEach((commentThreadData) => {
      const channelId = this.editor.config.get("collaboration.channelId");
      const commentsRepository = this.editor.plugins.get("CommentsRepository");
      if (commentsRepository.hasCommentThread(commentThreadData.threadId)) {
        const commentThread = commentsRepository.getCommentThread(commentThreadData.threadId);
        commentThread.remove();
      }
      commentsRepository.addCommentThread(__spreadValues({ channelId }, commentThreadData));
    });
    parsedSuggestions.forEach((suggestionData) => {
      const trackChangesEditing = this.editor.plugins.get("TrackChangesEditing");
      if (trackChangesEditing.hasSuggestion(suggestionData.id)) {
        const suggestion = trackChangesEditing.getSuggestion(suggestionData.id);
        suggestion.attributes = suggestionData.attributes;
      } else {
        trackChangesEditing.addSuggestionData(suggestionData);
      }
    });
  }
};

// node_modules/@ckeditor/ckeditor5-watchdog/src/contextwatchdog.js
var mainQueueId = Symbol("MainQueueId");

// node_modules/@ckeditor/ckeditor5-angular/fesm2020/ckeditor-ckeditor5-angular.mjs
function CKEditorComponent_ng_template_0_Template(rf, ctx) {
}
var HEX_NUMBERS = new Array(256).fill(0).map((val, index) => ("0" + index.toString(16)).slice(-2));
function uid() {
  const r1 = Math.random() * 4294967296 >>> 0;
  const r2 = Math.random() * 4294967296 >>> 0;
  const r3 = Math.random() * 4294967296 >>> 0;
  const r4 = Math.random() * 4294967296 >>> 0;
  return "e" + HEX_NUMBERS[r1 >> 0 & 255] + HEX_NUMBERS[r1 >> 8 & 255] + HEX_NUMBERS[r1 >> 16 & 255] + HEX_NUMBERS[r1 >> 24 & 255] + HEX_NUMBERS[r2 >> 0 & 255] + HEX_NUMBERS[r2 >> 8 & 255] + HEX_NUMBERS[r2 >> 16 & 255] + HEX_NUMBERS[r2 >> 24 & 255] + HEX_NUMBERS[r3 >> 0 & 255] + HEX_NUMBERS[r3 >> 8 & 255] + HEX_NUMBERS[r3 >> 16 & 255] + HEX_NUMBERS[r3 >> 24 & 255] + HEX_NUMBERS[r4 >> 0 & 255] + HEX_NUMBERS[r4 >> 8 & 255] + HEX_NUMBERS[r4 >> 16 & 255] + HEX_NUMBERS[r4 >> 24 & 255];
}
var ANGULAR_INTEGRATION_READ_ONLY_LOCK_ID = "Lock from Angular integration (@ckeditor/ckeditor5-angular)";
var CKEditorComponent = class {
  constructor(elementRef, ngZone) {
    this.config = {};
    this.data = "";
    this.tagName = "div";
    this.disableTwoWayDataBinding = false;
    this.ready = new EventEmitter();
    this.change = new EventEmitter();
    this.blur = new EventEmitter();
    this.focus = new EventEmitter();
    this.error = new EventEmitter();
    this.initiallyDisabled = false;
    this.isEditorSettingData = false;
    this.id = uid();
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    const {
      CKEDITOR_VERSION
    } = window;
    if (CKEDITOR_VERSION) {
      const [major] = CKEDITOR_VERSION.split(".").map(Number);
      if (major < 37) {
        console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.");
      }
    } else {
      console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.');
    }
  }
  /**
   * When set `true`, the editor becomes read-only.
   * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#member-isReadOnly
   * to learn more.
   */
  set disabled(isDisabled) {
    this.setDisabledState(isDisabled);
  }
  get disabled() {
    if (this.editorInstance) {
      return this.editorInstance.isReadOnly;
    }
    return this.initiallyDisabled;
  }
  /**
   * The instance of the editor created by this component.
   */
  get editorInstance() {
    let editorWatchdog = this.editorWatchdog;
    if (this.watchdog) {
      editorWatchdog = this.watchdog._watchdogs.get(this.id);
    }
    if (editorWatchdog) {
      return editorWatchdog.editor;
    }
    return null;
  }
  getId() {
    return this.id;
  }
  // Implementing the OnChanges interface. Whenever the `data` property is changed, update the editor content.
  ngOnChanges(changes) {
    if (Object.prototype.hasOwnProperty.call(changes, "data") && changes.data && !changes.data.isFirstChange()) {
      this.writeValue(changes.data.currentValue);
    }
  }
  // Implementing the AfterViewInit interface.
  ngAfterViewInit() {
    this.attachToWatchdog();
  }
  // Implementing the OnDestroy interface.
  ngOnDestroy() {
    return __async(this, null, function* () {
      if (this.watchdog) {
        yield this.watchdog.remove(this.id);
      } else if (this.editorWatchdog && this.editorWatchdog.editor) {
        yield this.editorWatchdog.destroy();
        this.editorWatchdog = void 0;
      }
    });
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  writeValue(value) {
    if (value === null) {
      value = "";
    }
    if (this.editorInstance) {
      this.isEditorSettingData = true;
      this.editorInstance.data.set(value);
      this.isEditorSettingData = false;
    } else {
      this.data = value;
      this.ready.pipe(first()).subscribe((editor) => {
        editor.data.set(this.data);
      });
    }
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  registerOnChange(callback) {
    this.cvaOnChange = callback;
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  registerOnTouched(callback) {
    this.cvaOnTouched = callback;
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  setDisabledState(isDisabled) {
    if (this.editorInstance) {
      if (isDisabled) {
        this.editorInstance.enableReadOnlyMode(ANGULAR_INTEGRATION_READ_ONLY_LOCK_ID);
      } else {
        this.editorInstance.disableReadOnlyMode(ANGULAR_INTEGRATION_READ_ONLY_LOCK_ID);
      }
    }
    this.initiallyDisabled = isDisabled;
  }
  /**
   * Creates the editor instance, sets initial editor data, then integrates
   * the editor with the Angular component. This method does not use the `editor.data.set()`
   * because of the issue in the collaboration mode (#6).
   */
  attachToWatchdog() {
    const creator = (elementOrData, config2) => {
      return this.ngZone.runOutsideAngular(() => __async(this, null, function* () {
        this.elementRef.nativeElement.appendChild(elementOrData);
        const editor = yield this.editor.create(elementOrData, config2);
        if (this.initiallyDisabled) {
          editor.enableReadOnlyMode(ANGULAR_INTEGRATION_READ_ONLY_LOCK_ID);
        }
        this.ngZone.run(() => {
          this.ready.emit(editor);
        });
        this.setUpEditorEvents(editor);
        return editor;
      }));
    };
    const destructor = (editor) => __async(this, null, function* () {
      yield editor.destroy();
      this.elementRef.nativeElement.removeChild(this.editorElement);
    });
    const emitError = (e) => {
      if (hasObservers(this.error)) {
        this.ngZone.run(() => this.error.emit(e));
      }
    };
    const element = document.createElement(this.tagName);
    const config = this.getConfig();
    this.editorElement = element;
    if (this.watchdog) {
      this.watchdog.add({
        id: this.id,
        type: "editor",
        creator,
        destructor,
        sourceElementOrData: element,
        config
      }).catch((e) => {
        emitError(e);
      });
      this.watchdog.on("itemError", (_, {
        itemId
      }) => {
        if (itemId === this.id) {
          emitError();
        }
      });
    } else {
      const editorWatchdog = new EditorWatchdog(this.editor, this.editorWatchdogConfig);
      editorWatchdog.setCreator(creator);
      editorWatchdog.setDestructor(destructor);
      editorWatchdog.on("error", emitError);
      this.editorWatchdog = editorWatchdog;
      this.ngZone.runOutsideAngular(() => {
        editorWatchdog.create(element, config).catch((e) => {
          emitError(e);
        });
      });
    }
  }
  getConfig() {
    if (this.data && this.config.initialData) {
      throw new Error("Editor data should be provided either using `config.initialData` or `data` properties.");
    }
    const config = __spreadValues({}, this.config);
    const initialData = this.config.initialData || this.data;
    if (initialData) {
      config.initialData = initialData;
    }
    return config;
  }
  /**
   * Integrates the editor with the component by attaching related event listeners.
   */
  setUpEditorEvents(editor) {
    const modelDocument = editor.model.document;
    const viewDocument = editor.editing.view.document;
    modelDocument.on("change:data", (evt) => {
      this.ngZone.run(() => {
        if (this.disableTwoWayDataBinding) {
          return;
        }
        if (this.cvaOnChange && !this.isEditorSettingData) {
          const data = editor.data.get();
          this.cvaOnChange(data);
        }
        this.change.emit({
          event: evt,
          editor
        });
      });
    });
    viewDocument.on("focus", (evt) => {
      this.ngZone.run(() => {
        this.focus.emit({
          event: evt,
          editor
        });
      });
    });
    viewDocument.on("blur", (evt) => {
      this.ngZone.run(() => {
        if (this.cvaOnTouched) {
          this.cvaOnTouched();
        }
        this.blur.emit({
          event: evt,
          editor
        });
      });
    });
  }
};
CKEditorComponent.ɵfac = function CKEditorComponent_Factory(t) {
  return new (t || CKEditorComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
CKEditorComponent.ɵcmp = ɵɵdefineComponent({
  type: CKEditorComponent,
  selectors: [["ckeditor"]],
  inputs: {
    editor: "editor",
    config: "config",
    data: "data",
    tagName: "tagName",
    watchdog: "watchdog",
    editorWatchdogConfig: "editorWatchdogConfig",
    disableTwoWayDataBinding: "disableTwoWayDataBinding",
    disabled: "disabled"
  },
  outputs: {
    ready: "ready",
    change: "change",
    blur: "blur",
    focus: "focus",
    error: "error"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    useExisting: forwardRef(() => CKEditorComponent),
    multi: true
  }]), ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 0,
  template: function CKEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CKEditorComponent_ng_template_0_Template, 0, 0, "ng-template");
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CKEditorComponent, [{
    type: Component,
    args: [{
      selector: "ckeditor",
      template: "<ng-template></ng-template>",
      // Integration with @angular/forms.
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: forwardRef(() => CKEditorComponent),
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    editor: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    tagName: [{
      type: Input
    }],
    watchdog: [{
      type: Input
    }],
    editorWatchdogConfig: [{
      type: Input
    }],
    disableTwoWayDataBinding: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    ready: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    error: [{
      type: Output
    }]
  });
})();
function hasObservers(emitter) {
  return emitter.observed || emitter.observers.length > 0;
}
var CKEditorModule = class {
};
CKEditorModule.ɵfac = function CKEditorModule_Factory(t) {
  return new (t || CKEditorModule)();
};
CKEditorModule.ɵmod = ɵɵdefineNgModule({
  type: CKEditorModule,
  declarations: [CKEditorComponent],
  imports: [FormsModule, CommonModule],
  exports: [CKEditorComponent]
});
CKEditorModule.ɵinj = ɵɵdefineInjector({
  imports: [[FormsModule, CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CKEditorModule, [{
    type: NgModule,
    args: [{
      imports: [FormsModule, CommonModule],
      declarations: [CKEditorComponent],
      exports: [CKEditorComponent]
    }]
  }], null, null);
})();
export {
  CKEditorComponent,
  CKEditorModule
};
/*! Bundled license information:

@ckeditor/ckeditor5-watchdog/src/watchdog.js:
  (**
   * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   *)

@ckeditor/ckeditor5-watchdog/src/utils/getsubnodes.js:
  (**
   * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   *)

@ckeditor/ckeditor5-watchdog/src/utils/areconnectedthroughproperties.js:
  (**
   * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   *)
  (* istanbul ignore next -- @preserve *)

@ckeditor/ckeditor5-watchdog/src/editorwatchdog.js:
  (**
   * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   *)

@ckeditor/ckeditor5-watchdog/src/contextwatchdog.js:
  (**
   * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   *)

@ckeditor/ckeditor5-watchdog/src/augmentation.js:
  (**
   * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   *)

@ckeditor/ckeditor5-watchdog/src/index.js:
  (**
   * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   *)

@ckeditor/ckeditor5-angular/fesm2020/ckeditor-ckeditor5-angular.mjs:
  (**
   * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md.
   *)
*/
//# sourceMappingURL=@ckeditor_ckeditor5-angular.js.map
