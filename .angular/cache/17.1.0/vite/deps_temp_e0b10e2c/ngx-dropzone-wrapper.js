import {
  CommonModule,
  NgIf,
  isPlatformBrowser
} from "./chunk-XG6O2LRS.js";
import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  InputFlags,
  KeyValueDiffers,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-JMTS7RQO.js";
import "./chunk-YRN7ZVOS.js";
import "./chunk-LJ4UR6LK.js";
import "./chunk-JJYN5SQZ.js";
import "./chunk-ECDNAN6X.js";
import {
  __commonJS,
  __toESM
} from "./chunk-6DXHB35K.js";

// node_modules/dropzone/dist/dropzone.js
var require_dropzone = __commonJS({
  "node_modules/dropzone/dist/dropzone.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else {
        var a = factory();
        for (var i in a)
          (typeof exports === "object" ? exports : root)[i] = a[i];
      }
    })(self, function() {
      return (
        /******/
        function() {
          var __webpack_modules__ = {
            /***/
            3099: (
              /***/
              function(module2) {
                module2.exports = function(it) {
                  if (typeof it != "function") {
                    throw TypeError(String(it) + " is not a function");
                  }
                  return it;
                };
              }
            ),
            /***/
            6077: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var isObject = __webpack_require__2(111);
                module2.exports = function(it) {
                  if (!isObject(it) && it !== null) {
                    throw TypeError("Can't set " + String(it) + " as a prototype");
                  }
                  return it;
                };
              }
            ),
            /***/
            1223: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var wellKnownSymbol = __webpack_require__2(5112);
                var create = __webpack_require__2(30);
                var definePropertyModule = __webpack_require__2(3070);
                var UNSCOPABLES = wellKnownSymbol("unscopables");
                var ArrayPrototype = Array.prototype;
                if (ArrayPrototype[UNSCOPABLES] == void 0) {
                  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
                    configurable: true,
                    value: create(null)
                  });
                }
                module2.exports = function(key) {
                  ArrayPrototype[UNSCOPABLES][key] = true;
                };
              }
            ),
            /***/
            1530: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var charAt = __webpack_require__2(8710).charAt;
                module2.exports = function(S, index, unicode) {
                  return index + (unicode ? charAt(S, index).length : 1);
                };
              }
            ),
            /***/
            5787: (
              /***/
              function(module2) {
                module2.exports = function(it, Constructor, name) {
                  if (!(it instanceof Constructor)) {
                    throw TypeError("Incorrect " + (name ? name + " " : "") + "invocation");
                  }
                  return it;
                };
              }
            ),
            /***/
            9670: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var isObject = __webpack_require__2(111);
                module2.exports = function(it) {
                  if (!isObject(it)) {
                    throw TypeError(String(it) + " is not an object");
                  }
                  return it;
                };
              }
            ),
            /***/
            4019: (
              /***/
              function(module2) {
                module2.exports = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined";
              }
            ),
            /***/
            260: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var NATIVE_ARRAY_BUFFER = __webpack_require__2(4019);
                var DESCRIPTORS = __webpack_require__2(9781);
                var global = __webpack_require__2(7854);
                var isObject = __webpack_require__2(111);
                var has = __webpack_require__2(6656);
                var classof = __webpack_require__2(648);
                var createNonEnumerableProperty = __webpack_require__2(8880);
                var redefine = __webpack_require__2(1320);
                var defineProperty = __webpack_require__2(3070).f;
                var getPrototypeOf = __webpack_require__2(9518);
                var setPrototypeOf = __webpack_require__2(7674);
                var wellKnownSymbol = __webpack_require__2(5112);
                var uid = __webpack_require__2(9711);
                var Int8Array2 = global.Int8Array;
                var Int8ArrayPrototype = Int8Array2 && Int8Array2.prototype;
                var Uint8ClampedArray = global.Uint8ClampedArray;
                var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
                var TypedArray = Int8Array2 && getPrototypeOf(Int8Array2);
                var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
                var ObjectPrototype = Object.prototype;
                var isPrototypeOf = ObjectPrototype.isPrototypeOf;
                var TO_STRING_TAG = wellKnownSymbol("toStringTag");
                var TYPED_ARRAY_TAG = uid("TYPED_ARRAY_TAG");
                var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== "Opera";
                var TYPED_ARRAY_TAG_REQIRED = false;
                var NAME;
                var TypedArrayConstructorsList = {
                  Int8Array: 1,
                  Uint8Array: 1,
                  Uint8ClampedArray: 1,
                  Int16Array: 2,
                  Uint16Array: 2,
                  Int32Array: 4,
                  Uint32Array: 4,
                  Float32Array: 4,
                  Float64Array: 8
                };
                var BigIntArrayConstructorsList = {
                  BigInt64Array: 8,
                  BigUint64Array: 8
                };
                var isView = function isView2(it) {
                  if (!isObject(it))
                    return false;
                  var klass = classof(it);
                  return klass === "DataView" || has(TypedArrayConstructorsList, klass) || has(BigIntArrayConstructorsList, klass);
                };
                var isTypedArray = function(it) {
                  if (!isObject(it))
                    return false;
                  var klass = classof(it);
                  return has(TypedArrayConstructorsList, klass) || has(BigIntArrayConstructorsList, klass);
                };
                var aTypedArray = function(it) {
                  if (isTypedArray(it))
                    return it;
                  throw TypeError("Target is not a typed array");
                };
                var aTypedArrayConstructor = function(C) {
                  if (setPrototypeOf) {
                    if (isPrototypeOf.call(TypedArray, C))
                      return C;
                  } else
                    for (var ARRAY in TypedArrayConstructorsList)
                      if (has(TypedArrayConstructorsList, NAME)) {
                        var TypedArrayConstructor = global[ARRAY];
                        if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
                          return C;
                        }
                      }
                  throw TypeError("Target is not a typed array constructor");
                };
                var exportTypedArrayMethod = function(KEY, property, forced) {
                  if (!DESCRIPTORS)
                    return;
                  if (forced)
                    for (var ARRAY in TypedArrayConstructorsList) {
                      var TypedArrayConstructor = global[ARRAY];
                      if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
                        delete TypedArrayConstructor.prototype[KEY];
                      }
                    }
                  if (!TypedArrayPrototype[KEY] || forced) {
                    redefine(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
                  }
                };
                var exportTypedArrayStaticMethod = function(KEY, property, forced) {
                  var ARRAY, TypedArrayConstructor;
                  if (!DESCRIPTORS)
                    return;
                  if (setPrototypeOf) {
                    if (forced)
                      for (ARRAY in TypedArrayConstructorsList) {
                        TypedArrayConstructor = global[ARRAY];
                        if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
                          delete TypedArrayConstructor[KEY];
                        }
                      }
                    if (!TypedArray[KEY] || forced) {
                      try {
                        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array2[KEY] || property);
                      } catch (error) {
                      }
                    } else
                      return;
                  }
                  for (ARRAY in TypedArrayConstructorsList) {
                    TypedArrayConstructor = global[ARRAY];
                    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
                      redefine(TypedArrayConstructor, KEY, property);
                    }
                  }
                };
                for (NAME in TypedArrayConstructorsList) {
                  if (!global[NAME])
                    NATIVE_ARRAY_BUFFER_VIEWS = false;
                }
                if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != "function" || TypedArray === Function.prototype) {
                  TypedArray = function TypedArray2() {
                    throw TypeError("Incorrect invocation");
                  };
                  if (NATIVE_ARRAY_BUFFER_VIEWS)
                    for (NAME in TypedArrayConstructorsList) {
                      if (global[NAME])
                        setPrototypeOf(global[NAME], TypedArray);
                    }
                }
                if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
                  TypedArrayPrototype = TypedArray.prototype;
                  if (NATIVE_ARRAY_BUFFER_VIEWS)
                    for (NAME in TypedArrayConstructorsList) {
                      if (global[NAME])
                        setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
                    }
                }
                if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
                  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
                }
                if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
                  TYPED_ARRAY_TAG_REQIRED = true;
                  defineProperty(TypedArrayPrototype, TO_STRING_TAG, { get: function() {
                    return isObject(this) ? this[TYPED_ARRAY_TAG] : void 0;
                  } });
                  for (NAME in TypedArrayConstructorsList)
                    if (global[NAME]) {
                      createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
                    }
                }
                module2.exports = {
                  NATIVE_ARRAY_BUFFER_VIEWS,
                  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
                  aTypedArray,
                  aTypedArrayConstructor,
                  exportTypedArrayMethod,
                  exportTypedArrayStaticMethod,
                  isView,
                  isTypedArray,
                  TypedArray,
                  TypedArrayPrototype
                };
              }
            ),
            /***/
            3331: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var global = __webpack_require__2(7854);
                var DESCRIPTORS = __webpack_require__2(9781);
                var NATIVE_ARRAY_BUFFER = __webpack_require__2(4019);
                var createNonEnumerableProperty = __webpack_require__2(8880);
                var redefineAll = __webpack_require__2(2248);
                var fails = __webpack_require__2(7293);
                var anInstance = __webpack_require__2(5787);
                var toInteger = __webpack_require__2(9958);
                var toLength = __webpack_require__2(7466);
                var toIndex = __webpack_require__2(7067);
                var IEEE754 = __webpack_require__2(1179);
                var getPrototypeOf = __webpack_require__2(9518);
                var setPrototypeOf = __webpack_require__2(7674);
                var getOwnPropertyNames = __webpack_require__2(8006).f;
                var defineProperty = __webpack_require__2(3070).f;
                var arrayFill = __webpack_require__2(1285);
                var setToStringTag = __webpack_require__2(8003);
                var InternalStateModule = __webpack_require__2(9909);
                var getInternalState = InternalStateModule.get;
                var setInternalState = InternalStateModule.set;
                var ARRAY_BUFFER = "ArrayBuffer";
                var DATA_VIEW = "DataView";
                var PROTOTYPE = "prototype";
                var WRONG_LENGTH = "Wrong length";
                var WRONG_INDEX = "Wrong index";
                var NativeArrayBuffer = global[ARRAY_BUFFER];
                var $ArrayBuffer = NativeArrayBuffer;
                var $DataView = global[DATA_VIEW];
                var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
                var ObjectPrototype = Object.prototype;
                var RangeError2 = global.RangeError;
                var packIEEE754 = IEEE754.pack;
                var unpackIEEE754 = IEEE754.unpack;
                var packInt8 = function(number) {
                  return [number & 255];
                };
                var packInt16 = function(number) {
                  return [number & 255, number >> 8 & 255];
                };
                var packInt32 = function(number) {
                  return [number & 255, number >> 8 & 255, number >> 16 & 255, number >> 24 & 255];
                };
                var unpackInt32 = function(buffer) {
                  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
                };
                var packFloat32 = function(number) {
                  return packIEEE754(number, 23, 4);
                };
                var packFloat64 = function(number) {
                  return packIEEE754(number, 52, 8);
                };
                var addGetter = function(Constructor, key2) {
                  defineProperty(Constructor[PROTOTYPE], key2, { get: function() {
                    return getInternalState(this)[key2];
                  } });
                };
                var get = function(view, count, index, isLittleEndian) {
                  var intIndex = toIndex(index);
                  var store = getInternalState(view);
                  if (intIndex + count > store.byteLength)
                    throw RangeError2(WRONG_INDEX);
                  var bytes = getInternalState(store.buffer).bytes;
                  var start = intIndex + store.byteOffset;
                  var pack = bytes.slice(start, start + count);
                  return isLittleEndian ? pack : pack.reverse();
                };
                var set = function(view, count, index, conversion, value, isLittleEndian) {
                  var intIndex = toIndex(index);
                  var store = getInternalState(view);
                  if (intIndex + count > store.byteLength)
                    throw RangeError2(WRONG_INDEX);
                  var bytes = getInternalState(store.buffer).bytes;
                  var start = intIndex + store.byteOffset;
                  var pack = conversion(+value);
                  for (var i = 0; i < count; i++)
                    bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
                };
                if (!NATIVE_ARRAY_BUFFER) {
                  $ArrayBuffer = function ArrayBuffer2(length) {
                    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
                    var byteLength = toIndex(length);
                    setInternalState(this, {
                      bytes: arrayFill.call(new Array(byteLength), 0),
                      byteLength
                    });
                    if (!DESCRIPTORS)
                      this.byteLength = byteLength;
                  };
                  $DataView = function DataView2(buffer, byteOffset, byteLength) {
                    anInstance(this, $DataView, DATA_VIEW);
                    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
                    var bufferLength = getInternalState(buffer).byteLength;
                    var offset = toInteger(byteOffset);
                    if (offset < 0 || offset > bufferLength)
                      throw RangeError2("Wrong offset");
                    byteLength = byteLength === void 0 ? bufferLength - offset : toLength(byteLength);
                    if (offset + byteLength > bufferLength)
                      throw RangeError2(WRONG_LENGTH);
                    setInternalState(this, {
                      buffer,
                      byteLength,
                      byteOffset: offset
                    });
                    if (!DESCRIPTORS) {
                      this.buffer = buffer;
                      this.byteLength = byteLength;
                      this.byteOffset = offset;
                    }
                  };
                  if (DESCRIPTORS) {
                    addGetter($ArrayBuffer, "byteLength");
                    addGetter($DataView, "buffer");
                    addGetter($DataView, "byteLength");
                    addGetter($DataView, "byteOffset");
                  }
                  redefineAll($DataView[PROTOTYPE], {
                    getInt8: function getInt8(byteOffset) {
                      return get(this, 1, byteOffset)[0] << 24 >> 24;
                    },
                    getUint8: function getUint8(byteOffset) {
                      return get(this, 1, byteOffset)[0];
                    },
                    getInt16: function getInt16(byteOffset) {
                      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : void 0);
                      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
                    },
                    getUint16: function getUint16(byteOffset) {
                      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : void 0);
                      return bytes[1] << 8 | bytes[0];
                    },
                    getInt32: function getInt32(byteOffset) {
                      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : void 0));
                    },
                    getUint32: function getUint32(byteOffset) {
                      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
                    },
                    getFloat32: function getFloat32(byteOffset) {
                      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : void 0), 23);
                    },
                    getFloat64: function getFloat64(byteOffset) {
                      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : void 0), 52);
                    },
                    setInt8: function setInt8(byteOffset, value) {
                      set(this, 1, byteOffset, packInt8, value);
                    },
                    setUint8: function setUint8(byteOffset, value) {
                      set(this, 1, byteOffset, packInt8, value);
                    },
                    setInt16: function setInt16(byteOffset, value) {
                      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setUint16: function setUint16(byteOffset, value) {
                      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setInt32: function setInt32(byteOffset, value) {
                      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setUint32: function setUint32(byteOffset, value) {
                      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setFloat32: function setFloat32(byteOffset, value) {
                      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setFloat64: function setFloat64(byteOffset, value) {
                      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : void 0);
                    }
                  });
                } else {
                  if (!fails(function() {
                    NativeArrayBuffer(1);
                  }) || !fails(function() {
                    new NativeArrayBuffer(-1);
                  }) || fails(function() {
                    new NativeArrayBuffer();
                    new NativeArrayBuffer(1.5);
                    new NativeArrayBuffer(NaN);
                    return NativeArrayBuffer.name != ARRAY_BUFFER;
                  })) {
                    $ArrayBuffer = function ArrayBuffer2(length) {
                      anInstance(this, $ArrayBuffer);
                      return new NativeArrayBuffer(toIndex(length));
                    };
                    var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
                    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j; ) {
                      if (!((key = keys[j++]) in $ArrayBuffer)) {
                        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
                      }
                    }
                    ArrayBufferPrototype.constructor = $ArrayBuffer;
                  }
                  if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) {
                    setPrototypeOf($DataViewPrototype, ObjectPrototype);
                  }
                  var testView = new $DataView(new $ArrayBuffer(2));
                  var nativeSetInt8 = $DataViewPrototype.setInt8;
                  testView.setInt8(0, 2147483648);
                  testView.setInt8(1, 2147483649);
                  if (testView.getInt8(0) || !testView.getInt8(1))
                    redefineAll($DataViewPrototype, {
                      setInt8: function setInt8(byteOffset, value) {
                        nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
                      },
                      setUint8: function setUint8(byteOffset, value) {
                        nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
                      }
                    }, { unsafe: true });
                }
                setToStringTag($ArrayBuffer, ARRAY_BUFFER);
                setToStringTag($DataView, DATA_VIEW);
                module2.exports = {
                  ArrayBuffer: $ArrayBuffer,
                  DataView: $DataView
                };
              }
            ),
            /***/
            1048: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var toObject = __webpack_require__2(7908);
                var toAbsoluteIndex = __webpack_require__2(1400);
                var toLength = __webpack_require__2(7466);
                var min = Math.min;
                module2.exports = [].copyWithin || function copyWithin(target, start) {
                  var O = toObject(this);
                  var len = toLength(O.length);
                  var to = toAbsoluteIndex(target, len);
                  var from = toAbsoluteIndex(start, len);
                  var end = arguments.length > 2 ? arguments[2] : void 0;
                  var count = min((end === void 0 ? len : toAbsoluteIndex(end, len)) - from, len - to);
                  var inc = 1;
                  if (from < to && to < from + count) {
                    inc = -1;
                    from += count - 1;
                    to += count - 1;
                  }
                  while (count-- > 0) {
                    if (from in O)
                      O[to] = O[from];
                    else
                      delete O[to];
                    to += inc;
                    from += inc;
                  }
                  return O;
                };
              }
            ),
            /***/
            1285: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var toObject = __webpack_require__2(7908);
                var toAbsoluteIndex = __webpack_require__2(1400);
                var toLength = __webpack_require__2(7466);
                module2.exports = function fill(value) {
                  var O = toObject(this);
                  var length = toLength(O.length);
                  var argumentsLength = arguments.length;
                  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : void 0, length);
                  var end = argumentsLength > 2 ? arguments[2] : void 0;
                  var endPos = end === void 0 ? length : toAbsoluteIndex(end, length);
                  while (endPos > index)
                    O[index++] = value;
                  return O;
                };
              }
            ),
            /***/
            8533: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var $forEach = __webpack_require__2(2092).forEach;
                var arrayMethodIsStrict = __webpack_require__2(9341);
                var STRICT_METHOD = arrayMethodIsStrict("forEach");
                module2.exports = !STRICT_METHOD ? function forEach(callbackfn) {
                  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
                } : [].forEach;
              }
            ),
            /***/
            8457: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var bind = __webpack_require__2(9974);
                var toObject = __webpack_require__2(7908);
                var callWithSafeIterationClosing = __webpack_require__2(3411);
                var isArrayIteratorMethod = __webpack_require__2(7659);
                var toLength = __webpack_require__2(7466);
                var createProperty = __webpack_require__2(6135);
                var getIteratorMethod = __webpack_require__2(1246);
                module2.exports = function from(arrayLike) {
                  var O = toObject(arrayLike);
                  var C = typeof this == "function" ? this : Array;
                  var argumentsLength = arguments.length;
                  var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
                  var mapping = mapfn !== void 0;
                  var iteratorMethod = getIteratorMethod(O);
                  var index = 0;
                  var length, result, step, iterator, next, value;
                  if (mapping)
                    mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0, 2);
                  if (iteratorMethod != void 0 && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
                    iterator = iteratorMethod.call(O);
                    next = iterator.next;
                    result = new C();
                    for (; !(step = next.call(iterator)).done; index++) {
                      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
                      createProperty(result, index, value);
                    }
                  } else {
                    length = toLength(O.length);
                    result = new C(length);
                    for (; length > index; index++) {
                      value = mapping ? mapfn(O[index], index) : O[index];
                      createProperty(result, index, value);
                    }
                  }
                  result.length = index;
                  return result;
                };
              }
            ),
            /***/
            1318: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var toIndexedObject = __webpack_require__2(5656);
                var toLength = __webpack_require__2(7466);
                var toAbsoluteIndex = __webpack_require__2(1400);
                var createMethod = function(IS_INCLUDES) {
                  return function($this, el, fromIndex) {
                    var O = toIndexedObject($this);
                    var length = toLength(O.length);
                    var index = toAbsoluteIndex(fromIndex, length);
                    var value;
                    if (IS_INCLUDES && el != el)
                      while (length > index) {
                        value = O[index++];
                        if (value != value)
                          return true;
                      }
                    else
                      for (; length > index; index++) {
                        if ((IS_INCLUDES || index in O) && O[index] === el)
                          return IS_INCLUDES || index || 0;
                      }
                    return !IS_INCLUDES && -1;
                  };
                };
                module2.exports = {
                  // `Array.prototype.includes` method
                  // https://tc39.es/ecma262/#sec-array.prototype.includes
                  includes: createMethod(true),
                  // `Array.prototype.indexOf` method
                  // https://tc39.es/ecma262/#sec-array.prototype.indexof
                  indexOf: createMethod(false)
                };
              }
            ),
            /***/
            2092: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var bind = __webpack_require__2(9974);
                var IndexedObject = __webpack_require__2(8361);
                var toObject = __webpack_require__2(7908);
                var toLength = __webpack_require__2(7466);
                var arraySpeciesCreate = __webpack_require__2(5417);
                var push = [].push;
                var createMethod = function(TYPE) {
                  var IS_MAP = TYPE == 1;
                  var IS_FILTER = TYPE == 2;
                  var IS_SOME = TYPE == 3;
                  var IS_EVERY = TYPE == 4;
                  var IS_FIND_INDEX = TYPE == 6;
                  var IS_FILTER_OUT = TYPE == 7;
                  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
                  return function($this, callbackfn, that, specificCreate) {
                    var O = toObject($this);
                    var self2 = IndexedObject(O);
                    var boundFunction = bind(callbackfn, that, 3);
                    var length = toLength(self2.length);
                    var index = 0;
                    var create = specificCreate || arraySpeciesCreate;
                    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : void 0;
                    var value, result;
                    for (; length > index; index++)
                      if (NO_HOLES || index in self2) {
                        value = self2[index];
                        result = boundFunction(value, index, O);
                        if (TYPE) {
                          if (IS_MAP)
                            target[index] = result;
                          else if (result)
                            switch (TYPE) {
                              case 3:
                                return true;
                              case 5:
                                return value;
                              case 6:
                                return index;
                              case 2:
                                push.call(target, value);
                            }
                          else
                            switch (TYPE) {
                              case 4:
                                return false;
                              case 7:
                                push.call(target, value);
                            }
                        }
                      }
                    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
                  };
                };
                module2.exports = {
                  // `Array.prototype.forEach` method
                  // https://tc39.es/ecma262/#sec-array.prototype.foreach
                  forEach: createMethod(0),
                  // `Array.prototype.map` method
                  // https://tc39.es/ecma262/#sec-array.prototype.map
                  map: createMethod(1),
                  // `Array.prototype.filter` method
                  // https://tc39.es/ecma262/#sec-array.prototype.filter
                  filter: createMethod(2),
                  // `Array.prototype.some` method
                  // https://tc39.es/ecma262/#sec-array.prototype.some
                  some: createMethod(3),
                  // `Array.prototype.every` method
                  // https://tc39.es/ecma262/#sec-array.prototype.every
                  every: createMethod(4),
                  // `Array.prototype.find` method
                  // https://tc39.es/ecma262/#sec-array.prototype.find
                  find: createMethod(5),
                  // `Array.prototype.findIndex` method
                  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
                  findIndex: createMethod(6),
                  // `Array.prototype.filterOut` method
                  // https://github.com/tc39/proposal-array-filtering
                  filterOut: createMethod(7)
                };
              }
            ),
            /***/
            6583: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var toIndexedObject = __webpack_require__2(5656);
                var toInteger = __webpack_require__2(9958);
                var toLength = __webpack_require__2(7466);
                var arrayMethodIsStrict = __webpack_require__2(9341);
                var min = Math.min;
                var nativeLastIndexOf = [].lastIndexOf;
                var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
                var STRICT_METHOD = arrayMethodIsStrict("lastIndexOf");
                var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;
                module2.exports = FORCED ? function lastIndexOf(searchElement) {
                  if (NEGATIVE_ZERO)
                    return nativeLastIndexOf.apply(this, arguments) || 0;
                  var O = toIndexedObject(this);
                  var length = toLength(O.length);
                  var index = length - 1;
                  if (arguments.length > 1)
                    index = min(index, toInteger(arguments[1]));
                  if (index < 0)
                    index = length + index;
                  for (; index >= 0; index--)
                    if (index in O && O[index] === searchElement)
                      return index || 0;
                  return -1;
                } : nativeLastIndexOf;
              }
            ),
            /***/
            1194: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var fails = __webpack_require__2(7293);
                var wellKnownSymbol = __webpack_require__2(5112);
                var V8_VERSION = __webpack_require__2(7392);
                var SPECIES = wellKnownSymbol("species");
                module2.exports = function(METHOD_NAME) {
                  return V8_VERSION >= 51 || !fails(function() {
                    var array = [];
                    var constructor = array.constructor = {};
                    constructor[SPECIES] = function() {
                      return { foo: 1 };
                    };
                    return array[METHOD_NAME](Boolean).foo !== 1;
                  });
                };
              }
            ),
            /***/
            9341: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var fails = __webpack_require__2(7293);
                module2.exports = function(METHOD_NAME, argument) {
                  var method = [][METHOD_NAME];
                  return !!method && fails(function() {
                    method.call(null, argument || function() {
                      throw 1;
                    }, 1);
                  });
                };
              }
            ),
            /***/
            3671: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var aFunction = __webpack_require__2(3099);
                var toObject = __webpack_require__2(7908);
                var IndexedObject = __webpack_require__2(8361);
                var toLength = __webpack_require__2(7466);
                var createMethod = function(IS_RIGHT) {
                  return function(that, callbackfn, argumentsLength, memo) {
                    aFunction(callbackfn);
                    var O = toObject(that);
                    var self2 = IndexedObject(O);
                    var length = toLength(O.length);
                    var index = IS_RIGHT ? length - 1 : 0;
                    var i = IS_RIGHT ? -1 : 1;
                    if (argumentsLength < 2)
                      while (true) {
                        if (index in self2) {
                          memo = self2[index];
                          index += i;
                          break;
                        }
                        index += i;
                        if (IS_RIGHT ? index < 0 : length <= index) {
                          throw TypeError("Reduce of empty array with no initial value");
                        }
                      }
                    for (; IS_RIGHT ? index >= 0 : length > index; index += i)
                      if (index in self2) {
                        memo = callbackfn(memo, self2[index], index, O);
                      }
                    return memo;
                  };
                };
                module2.exports = {
                  // `Array.prototype.reduce` method
                  // https://tc39.es/ecma262/#sec-array.prototype.reduce
                  left: createMethod(false),
                  // `Array.prototype.reduceRight` method
                  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
                  right: createMethod(true)
                };
              }
            ),
            /***/
            5417: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var isObject = __webpack_require__2(111);
                var isArray = __webpack_require__2(3157);
                var wellKnownSymbol = __webpack_require__2(5112);
                var SPECIES = wellKnownSymbol("species");
                module2.exports = function(originalArray, length) {
                  var C;
                  if (isArray(originalArray)) {
                    C = originalArray.constructor;
                    if (typeof C == "function" && (C === Array || isArray(C.prototype)))
                      C = void 0;
                    else if (isObject(C)) {
                      C = C[SPECIES];
                      if (C === null)
                        C = void 0;
                    }
                  }
                  return new (C === void 0 ? Array : C)(length === 0 ? 0 : length);
                };
              }
            ),
            /***/
            3411: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var anObject = __webpack_require__2(9670);
                var iteratorClose = __webpack_require__2(9212);
                module2.exports = function(iterator, fn, value, ENTRIES) {
                  try {
                    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
                  } catch (error) {
                    iteratorClose(iterator);
                    throw error;
                  }
                };
              }
            ),
            /***/
            7072: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var wellKnownSymbol = __webpack_require__2(5112);
                var ITERATOR = wellKnownSymbol("iterator");
                var SAFE_CLOSING = false;
                try {
                  var called = 0;
                  var iteratorWithReturn = {
                    next: function() {
                      return { done: !!called++ };
                    },
                    "return": function() {
                      SAFE_CLOSING = true;
                    }
                  };
                  iteratorWithReturn[ITERATOR] = function() {
                    return this;
                  };
                  Array.from(iteratorWithReturn, function() {
                    throw 2;
                  });
                } catch (error) {
                }
                module2.exports = function(exec, SKIP_CLOSING) {
                  if (!SKIP_CLOSING && !SAFE_CLOSING)
                    return false;
                  var ITERATION_SUPPORT = false;
                  try {
                    var object = {};
                    object[ITERATOR] = function() {
                      return {
                        next: function() {
                          return { done: ITERATION_SUPPORT = true };
                        }
                      };
                    };
                    exec(object);
                  } catch (error) {
                  }
                  return ITERATION_SUPPORT;
                };
              }
            ),
            /***/
            4326: (
              /***/
              function(module2) {
                var toString = {}.toString;
                module2.exports = function(it) {
                  return toString.call(it).slice(8, -1);
                };
              }
            ),
            /***/
            648: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var TO_STRING_TAG_SUPPORT = __webpack_require__2(1694);
                var classofRaw = __webpack_require__2(4326);
                var wellKnownSymbol = __webpack_require__2(5112);
                var TO_STRING_TAG = wellKnownSymbol("toStringTag");
                var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
                  return arguments;
                }()) == "Arguments";
                var tryGet = function(it, key) {
                  try {
                    return it[key];
                  } catch (error) {
                  }
                };
                module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
                  var O, tag, result;
                  return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : result;
                };
              }
            ),
            /***/
            9920: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var has = __webpack_require__2(6656);
                var ownKeys = __webpack_require__2(3887);
                var getOwnPropertyDescriptorModule = __webpack_require__2(1236);
                var definePropertyModule = __webpack_require__2(3070);
                module2.exports = function(target, source) {
                  var keys = ownKeys(source);
                  var defineProperty = definePropertyModule.f;
                  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
                  for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    if (!has(target, key))
                      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
                  }
                };
              }
            ),
            /***/
            8544: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var fails = __webpack_require__2(7293);
                module2.exports = !fails(function() {
                  function F() {
                  }
                  F.prototype.constructor = null;
                  return Object.getPrototypeOf(new F()) !== F.prototype;
                });
              }
            ),
            /***/
            4994: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var IteratorPrototype = __webpack_require__2(3383).IteratorPrototype;
                var create = __webpack_require__2(30);
                var createPropertyDescriptor = __webpack_require__2(9114);
                var setToStringTag = __webpack_require__2(8003);
                var Iterators = __webpack_require__2(7497);
                var returnThis = function() {
                  return this;
                };
                module2.exports = function(IteratorConstructor, NAME, next) {
                  var TO_STRING_TAG = NAME + " Iterator";
                  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
                  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
                  Iterators[TO_STRING_TAG] = returnThis;
                  return IteratorConstructor;
                };
              }
            ),
            /***/
            8880: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var DESCRIPTORS = __webpack_require__2(9781);
                var definePropertyModule = __webpack_require__2(3070);
                var createPropertyDescriptor = __webpack_require__2(9114);
                module2.exports = DESCRIPTORS ? function(object, key, value) {
                  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
                } : function(object, key, value) {
                  object[key] = value;
                  return object;
                };
              }
            ),
            /***/
            9114: (
              /***/
              function(module2) {
                module2.exports = function(bitmap, value) {
                  return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value
                  };
                };
              }
            ),
            /***/
            6135: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var toPrimitive = __webpack_require__2(7593);
                var definePropertyModule = __webpack_require__2(3070);
                var createPropertyDescriptor = __webpack_require__2(9114);
                module2.exports = function(object, key, value) {
                  var propertyKey = toPrimitive(key);
                  if (propertyKey in object)
                    definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
                  else
                    object[propertyKey] = value;
                };
              }
            ),
            /***/
            654: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var $ = __webpack_require__2(2109);
                var createIteratorConstructor = __webpack_require__2(4994);
                var getPrototypeOf = __webpack_require__2(9518);
                var setPrototypeOf = __webpack_require__2(7674);
                var setToStringTag = __webpack_require__2(8003);
                var createNonEnumerableProperty = __webpack_require__2(8880);
                var redefine = __webpack_require__2(1320);
                var wellKnownSymbol = __webpack_require__2(5112);
                var IS_PURE = __webpack_require__2(1913);
                var Iterators = __webpack_require__2(7497);
                var IteratorsCore = __webpack_require__2(3383);
                var IteratorPrototype = IteratorsCore.IteratorPrototype;
                var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
                var ITERATOR = wellKnownSymbol("iterator");
                var KEYS = "keys";
                var VALUES = "values";
                var ENTRIES = "entries";
                var returnThis = function() {
                  return this;
                };
                module2.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
                  createIteratorConstructor(IteratorConstructor, NAME, next);
                  var getIterationMethod = function(KIND) {
                    if (KIND === DEFAULT && defaultIterator)
                      return defaultIterator;
                    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
                      return IterablePrototype[KIND];
                    switch (KIND) {
                      case KEYS:
                        return function keys() {
                          return new IteratorConstructor(this, KIND);
                        };
                      case VALUES:
                        return function values() {
                          return new IteratorConstructor(this, KIND);
                        };
                      case ENTRIES:
                        return function entries() {
                          return new IteratorConstructor(this, KIND);
                        };
                    }
                    return function() {
                      return new IteratorConstructor(this);
                    };
                  };
                  var TO_STRING_TAG = NAME + " Iterator";
                  var INCORRECT_VALUES_NAME = false;
                  var IterablePrototype = Iterable.prototype;
                  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
                  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
                  var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
                  var CurrentIteratorPrototype, methods, KEY;
                  if (anyNativeIterator) {
                    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
                    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                        if (setPrototypeOf) {
                          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                        } else if (typeof CurrentIteratorPrototype[ITERATOR] != "function") {
                          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
                        }
                      }
                      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                      if (IS_PURE)
                        Iterators[TO_STRING_TAG] = returnThis;
                    }
                  }
                  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
                    INCORRECT_VALUES_NAME = true;
                    defaultIterator = function values() {
                      return nativeIterator.call(this);
                    };
                  }
                  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
                    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
                  }
                  Iterators[NAME] = defaultIterator;
                  if (DEFAULT) {
                    methods = {
                      values: getIterationMethod(VALUES),
                      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                      entries: getIterationMethod(ENTRIES)
                    };
                    if (FORCED)
                      for (KEY in methods) {
                        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                          redefine(IterablePrototype, KEY, methods[KEY]);
                        }
                      }
                    else
                      $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
                  }
                  return methods;
                };
              }
            ),
            /***/
            9781: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var fails = __webpack_require__2(7293);
                module2.exports = !fails(function() {
                  return Object.defineProperty({}, 1, { get: function() {
                    return 7;
                  } })[1] != 7;
                });
              }
            ),
            /***/
            317: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var global = __webpack_require__2(7854);
                var isObject = __webpack_require__2(111);
                var document2 = global.document;
                var EXISTS = isObject(document2) && isObject(document2.createElement);
                module2.exports = function(it) {
                  return EXISTS ? document2.createElement(it) : {};
                };
              }
            ),
            /***/
            8324: (
              /***/
              function(module2) {
                module2.exports = {
                  CSSRuleList: 0,
                  CSSStyleDeclaration: 0,
                  CSSValueList: 0,
                  ClientRectList: 0,
                  DOMRectList: 0,
                  DOMStringList: 0,
                  DOMTokenList: 1,
                  DataTransferItemList: 0,
                  FileList: 0,
                  HTMLAllCollection: 0,
                  HTMLCollection: 0,
                  HTMLFormElement: 0,
                  HTMLSelectElement: 0,
                  MediaList: 0,
                  MimeTypeArray: 0,
                  NamedNodeMap: 0,
                  NodeList: 1,
                  PaintRequestList: 0,
                  Plugin: 0,
                  PluginArray: 0,
                  SVGLengthList: 0,
                  SVGNumberList: 0,
                  SVGPathSegList: 0,
                  SVGPointList: 0,
                  SVGStringList: 0,
                  SVGTransformList: 0,
                  SourceBufferList: 0,
                  StyleSheetList: 0,
                  TextTrackCueList: 0,
                  TextTrackList: 0,
                  TouchList: 0
                };
              }
            ),
            /***/
            8113: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var getBuiltIn = __webpack_require__2(5005);
                module2.exports = getBuiltIn("navigator", "userAgent") || "";
              }
            ),
            /***/
            7392: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var global = __webpack_require__2(7854);
                var userAgent = __webpack_require__2(8113);
                var process = global.process;
                var versions = process && process.versions;
                var v8 = versions && versions.v8;
                var match, version;
                if (v8) {
                  match = v8.split(".");
                  version = match[0] + match[1];
                } else if (userAgent) {
                  match = userAgent.match(/Edge\/(\d+)/);
                  if (!match || match[1] >= 74) {
                    match = userAgent.match(/Chrome\/(\d+)/);
                    if (match)
                      version = match[1];
                  }
                }
                module2.exports = version && +version;
              }
            ),
            /***/
            748: (
              /***/
              function(module2) {
                module2.exports = [
                  "constructor",
                  "hasOwnProperty",
                  "isPrototypeOf",
                  "propertyIsEnumerable",
                  "toLocaleString",
                  "toString",
                  "valueOf"
                ];
              }
            ),
            /***/
            2109: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var global = __webpack_require__2(7854);
                var getOwnPropertyDescriptor = __webpack_require__2(1236).f;
                var createNonEnumerableProperty = __webpack_require__2(8880);
                var redefine = __webpack_require__2(1320);
                var setGlobal = __webpack_require__2(3505);
                var copyConstructorProperties = __webpack_require__2(9920);
                var isForced = __webpack_require__2(4705);
                module2.exports = function(options, source) {
                  var TARGET = options.target;
                  var GLOBAL = options.global;
                  var STATIC = options.stat;
                  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
                  if (GLOBAL) {
                    target = global;
                  } else if (STATIC) {
                    target = global[TARGET] || setGlobal(TARGET, {});
                  } else {
                    target = (global[TARGET] || {}).prototype;
                  }
                  if (target)
                    for (key in source) {
                      sourceProperty = source[key];
                      if (options.noTargetGet) {
                        descriptor = getOwnPropertyDescriptor(target, key);
                        targetProperty = descriptor && descriptor.value;
                      } else
                        targetProperty = target[key];
                      FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
                      if (!FORCED && targetProperty !== void 0) {
                        if (typeof sourceProperty === typeof targetProperty)
                          continue;
                        copyConstructorProperties(sourceProperty, targetProperty);
                      }
                      if (options.sham || targetProperty && targetProperty.sham) {
                        createNonEnumerableProperty(sourceProperty, "sham", true);
                      }
                      redefine(target, key, sourceProperty, options);
                    }
                };
              }
            ),
            /***/
            7293: (
              /***/
              function(module2) {
                module2.exports = function(exec) {
                  try {
                    return !!exec();
                  } catch (error) {
                    return true;
                  }
                };
              }
            ),
            /***/
            7007: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                __webpack_require__2(4916);
                var redefine = __webpack_require__2(1320);
                var fails = __webpack_require__2(7293);
                var wellKnownSymbol = __webpack_require__2(5112);
                var regexpExec = __webpack_require__2(2261);
                var createNonEnumerableProperty = __webpack_require__2(8880);
                var SPECIES = wellKnownSymbol("species");
                var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
                  var re = /./;
                  re.exec = function() {
                    var result = [];
                    result.groups = { a: "7" };
                    return result;
                  };
                  return "".replace(re, "$<a>") !== "7";
                });
                var REPLACE_KEEPS_$0 = function() {
                  return "a".replace(/./, "$0") === "$0";
                }();
                var REPLACE = wellKnownSymbol("replace");
                var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
                  if (/./[REPLACE]) {
                    return /./[REPLACE]("a", "$0") === "";
                  }
                  return false;
                }();
                var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
                  var re = /(?:)/;
                  var originalExec = re.exec;
                  re.exec = function() {
                    return originalExec.apply(this, arguments);
                  };
                  var result = "ab".split(re);
                  return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
                });
                module2.exports = function(KEY, length, exec, sham) {
                  var SYMBOL = wellKnownSymbol(KEY);
                  var DELEGATES_TO_SYMBOL = !fails(function() {
                    var O = {};
                    O[SYMBOL] = function() {
                      return 7;
                    };
                    return ""[KEY](O) != 7;
                  });
                  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
                    var execCalled = false;
                    var re = /a/;
                    if (KEY === "split") {
                      re = {};
                      re.constructor = {};
                      re.constructor[SPECIES] = function() {
                        return re;
                      };
                      re.flags = "";
                      re[SYMBOL] = /./[SYMBOL];
                    }
                    re.exec = function() {
                      execCalled = true;
                      return null;
                    };
                    re[SYMBOL]("");
                    return !execCalled;
                  });
                  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === "replace" && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
                    var nativeRegExpMethod = /./[SYMBOL];
                    var methods = exec(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
                      if (regexp.exec === regexpExec) {
                        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
                        }
                        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
                      }
                      return { done: false };
                    }, {
                      REPLACE_KEEPS_$0,
                      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
                    });
                    var stringMethod = methods[0];
                    var regexMethod = methods[1];
                    redefine(String.prototype, KEY, stringMethod);
                    redefine(
                      RegExp.prototype,
                      SYMBOL,
                      length == 2 ? function(string, arg) {
                        return regexMethod.call(string, this, arg);
                      } : function(string) {
                        return regexMethod.call(string, this);
                      }
                    );
                  }
                  if (sham)
                    createNonEnumerableProperty(RegExp.prototype[SYMBOL], "sham", true);
                };
              }
            ),
            /***/
            9974: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var aFunction = __webpack_require__2(3099);
                module2.exports = function(fn, that, length) {
                  aFunction(fn);
                  if (that === void 0)
                    return fn;
                  switch (length) {
                    case 0:
                      return function() {
                        return fn.call(that);
                      };
                    case 1:
                      return function(a) {
                        return fn.call(that, a);
                      };
                    case 2:
                      return function(a, b) {
                        return fn.call(that, a, b);
                      };
                    case 3:
                      return function(a, b, c) {
                        return fn.call(that, a, b, c);
                      };
                  }
                  return function() {
                    return fn.apply(that, arguments);
                  };
                };
              }
            ),
            /***/
            5005: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var path = __webpack_require__2(857);
                var global = __webpack_require__2(7854);
                var aFunction = function(variable) {
                  return typeof variable == "function" ? variable : void 0;
                };
                module2.exports = function(namespace, method) {
                  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
                };
              }
            ),
            /***/
            1246: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var classof = __webpack_require__2(648);
                var Iterators = __webpack_require__2(7497);
                var wellKnownSymbol = __webpack_require__2(5112);
                var ITERATOR = wellKnownSymbol("iterator");
                module2.exports = function(it) {
                  if (it != void 0)
                    return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
                };
              }
            ),
            /***/
            8554: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var anObject = __webpack_require__2(9670);
                var getIteratorMethod = __webpack_require__2(1246);
                module2.exports = function(it) {
                  var iteratorMethod = getIteratorMethod(it);
                  if (typeof iteratorMethod != "function") {
                    throw TypeError(String(it) + " is not iterable");
                  }
                  return anObject(iteratorMethod.call(it));
                };
              }
            ),
            /***/
            647: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var toObject = __webpack_require__2(7908);
                var floor = Math.floor;
                var replace = "".replace;
                var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
                var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;
                module2.exports = function(matched, str, position, captures, namedCaptures, replacement) {
                  var tailPos = position + matched.length;
                  var m = captures.length;
                  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
                  if (namedCaptures !== void 0) {
                    namedCaptures = toObject(namedCaptures);
                    symbols = SUBSTITUTION_SYMBOLS;
                  }
                  return replace.call(replacement, symbols, function(match, ch) {
                    var capture;
                    switch (ch.charAt(0)) {
                      case "$":
                        return "$";
                      case "&":
                        return matched;
                      case "`":
                        return str.slice(0, position);
                      case "'":
                        return str.slice(tailPos);
                      case "<":
                        capture = namedCaptures[ch.slice(1, -1)];
                        break;
                      default:
                        var n = +ch;
                        if (n === 0)
                          return match;
                        if (n > m) {
                          var f = floor(n / 10);
                          if (f === 0)
                            return match;
                          if (f <= m)
                            return captures[f - 1] === void 0 ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                          return match;
                        }
                        capture = captures[n - 1];
                    }
                    return capture === void 0 ? "" : capture;
                  });
                };
              }
            ),
            /***/
            7854: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var check = function(it) {
                  return it && it.Math == Math && it;
                };
                module2.exports = /* global globalThis -- safe */
                check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof __webpack_require__2.g == "object" && __webpack_require__2.g) || // eslint-disable-next-line no-new-func -- fallback
                /* @__PURE__ */ function() {
                  return this;
                }() || Function("return this")();
              }
            ),
            /***/
            6656: (
              /***/
              function(module2) {
                var hasOwnProperty = {}.hasOwnProperty;
                module2.exports = function(it, key) {
                  return hasOwnProperty.call(it, key);
                };
              }
            ),
            /***/
            3501: (
              /***/
              function(module2) {
                module2.exports = {};
              }
            ),
            /***/
            490: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var getBuiltIn = __webpack_require__2(5005);
                module2.exports = getBuiltIn("document", "documentElement");
              }
            ),
            /***/
            4664: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var DESCRIPTORS = __webpack_require__2(9781);
                var fails = __webpack_require__2(7293);
                var createElement = __webpack_require__2(317);
                module2.exports = !DESCRIPTORS && !fails(function() {
                  return Object.defineProperty(createElement("div"), "a", {
                    get: function() {
                      return 7;
                    }
                  }).a != 7;
                });
              }
            ),
            /***/
            1179: (
              /***/
              function(module2) {
                var abs = Math.abs;
                var pow = Math.pow;
                var floor = Math.floor;
                var log = Math.log;
                var LN2 = Math.LN2;
                var pack = function(number, mantissaLength, bytes) {
                  var buffer = new Array(bytes);
                  var exponentLength = bytes * 8 - mantissaLength - 1;
                  var eMax = (1 << exponentLength) - 1;
                  var eBias = eMax >> 1;
                  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
                  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
                  var index = 0;
                  var exponent, mantissa, c;
                  number = abs(number);
                  if (number != number || number === Infinity) {
                    mantissa = number != number ? 1 : 0;
                    exponent = eMax;
                  } else {
                    exponent = floor(log(number) / LN2);
                    if (number * (c = pow(2, -exponent)) < 1) {
                      exponent--;
                      c *= 2;
                    }
                    if (exponent + eBias >= 1) {
                      number += rt / c;
                    } else {
                      number += rt * pow(2, 1 - eBias);
                    }
                    if (number * c >= 2) {
                      exponent++;
                      c /= 2;
                    }
                    if (exponent + eBias >= eMax) {
                      mantissa = 0;
                      exponent = eMax;
                    } else if (exponent + eBias >= 1) {
                      mantissa = (number * c - 1) * pow(2, mantissaLength);
                      exponent = exponent + eBias;
                    } else {
                      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
                      exponent = 0;
                    }
                  }
                  for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8)
                    ;
                  exponent = exponent << mantissaLength | mantissa;
                  exponentLength += mantissaLength;
                  for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8)
                    ;
                  buffer[--index] |= sign * 128;
                  return buffer;
                };
                var unpack = function(buffer, mantissaLength) {
                  var bytes = buffer.length;
                  var exponentLength = bytes * 8 - mantissaLength - 1;
                  var eMax = (1 << exponentLength) - 1;
                  var eBias = eMax >> 1;
                  var nBits = exponentLength - 7;
                  var index = bytes - 1;
                  var sign = buffer[index--];
                  var exponent = sign & 127;
                  var mantissa;
                  sign >>= 7;
                  for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8)
                    ;
                  mantissa = exponent & (1 << -nBits) - 1;
                  exponent >>= -nBits;
                  nBits += mantissaLength;
                  for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8)
                    ;
                  if (exponent === 0) {
                    exponent = 1 - eBias;
                  } else if (exponent === eMax) {
                    return mantissa ? NaN : sign ? -Infinity : Infinity;
                  } else {
                    mantissa = mantissa + pow(2, mantissaLength);
                    exponent = exponent - eBias;
                  }
                  return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
                };
                module2.exports = {
                  pack,
                  unpack
                };
              }
            ),
            /***/
            8361: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var fails = __webpack_require__2(7293);
                var classof = __webpack_require__2(4326);
                var split = "".split;
                module2.exports = fails(function() {
                  return !Object("z").propertyIsEnumerable(0);
                }) ? function(it) {
                  return classof(it) == "String" ? split.call(it, "") : Object(it);
                } : Object;
              }
            ),
            /***/
            9587: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var isObject = __webpack_require__2(111);
                var setPrototypeOf = __webpack_require__2(7674);
                module2.exports = function($this, dummy, Wrapper) {
                  var NewTarget, NewTargetPrototype;
                  if (
                    // it can work only with native `setPrototypeOf`
                    setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
                    typeof (NewTarget = dummy.constructor) == "function" && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
                  )
                    setPrototypeOf($this, NewTargetPrototype);
                  return $this;
                };
              }
            ),
            /***/
            2788: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var store = __webpack_require__2(5465);
                var functionToString = Function.toString;
                if (typeof store.inspectSource != "function") {
                  store.inspectSource = function(it) {
                    return functionToString.call(it);
                  };
                }
                module2.exports = store.inspectSource;
              }
            ),
            /***/
            9909: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var NATIVE_WEAK_MAP = __webpack_require__2(8536);
                var global = __webpack_require__2(7854);
                var isObject = __webpack_require__2(111);
                var createNonEnumerableProperty = __webpack_require__2(8880);
                var objectHas = __webpack_require__2(6656);
                var shared = __webpack_require__2(5465);
                var sharedKey = __webpack_require__2(6200);
                var hiddenKeys = __webpack_require__2(3501);
                var WeakMap = global.WeakMap;
                var set, get, has;
                var enforce = function(it) {
                  return has(it) ? get(it) : set(it, {});
                };
                var getterFor = function(TYPE) {
                  return function(it) {
                    var state;
                    if (!isObject(it) || (state = get(it)).type !== TYPE) {
                      throw TypeError("Incompatible receiver, " + TYPE + " required");
                    }
                    return state;
                  };
                };
                if (NATIVE_WEAK_MAP) {
                  var store = shared.state || (shared.state = new WeakMap());
                  var wmget = store.get;
                  var wmhas = store.has;
                  var wmset = store.set;
                  set = function(it, metadata) {
                    metadata.facade = it;
                    wmset.call(store, it, metadata);
                    return metadata;
                  };
                  get = function(it) {
                    return wmget.call(store, it) || {};
                  };
                  has = function(it) {
                    return wmhas.call(store, it);
                  };
                } else {
                  var STATE = sharedKey("state");
                  hiddenKeys[STATE] = true;
                  set = function(it, metadata) {
                    metadata.facade = it;
                    createNonEnumerableProperty(it, STATE, metadata);
                    return metadata;
                  };
                  get = function(it) {
                    return objectHas(it, STATE) ? it[STATE] : {};
                  };
                  has = function(it) {
                    return objectHas(it, STATE);
                  };
                }
                module2.exports = {
                  set,
                  get,
                  has,
                  enforce,
                  getterFor
                };
              }
            ),
            /***/
            7659: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var wellKnownSymbol = __webpack_require__2(5112);
                var Iterators = __webpack_require__2(7497);
                var ITERATOR = wellKnownSymbol("iterator");
                var ArrayPrototype = Array.prototype;
                module2.exports = function(it) {
                  return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
                };
              }
            ),
            /***/
            3157: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var classof = __webpack_require__2(4326);
                module2.exports = Array.isArray || function isArray(arg) {
                  return classof(arg) == "Array";
                };
              }
            ),
            /***/
            4705: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var fails = __webpack_require__2(7293);
                var replacement = /#|\.prototype\./;
                var isForced = function(feature, detection) {
                  var value = data[normalize(feature)];
                  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
                };
                var normalize = isForced.normalize = function(string) {
                  return String(string).replace(replacement, ".").toLowerCase();
                };
                var data = isForced.data = {};
                var NATIVE = isForced.NATIVE = "N";
                var POLYFILL = isForced.POLYFILL = "P";
                module2.exports = isForced;
              }
            ),
            /***/
            111: (
              /***/
              function(module2) {
                module2.exports = function(it) {
                  return typeof it === "object" ? it !== null : typeof it === "function";
                };
              }
            ),
            /***/
            1913: (
              /***/
              function(module2) {
                module2.exports = false;
              }
            ),
            /***/
            7850: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var isObject = __webpack_require__2(111);
                var classof = __webpack_require__2(4326);
                var wellKnownSymbol = __webpack_require__2(5112);
                var MATCH = wellKnownSymbol("match");
                module2.exports = function(it) {
                  var isRegExp;
                  return isObject(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp : classof(it) == "RegExp");
                };
              }
            ),
            /***/
            9212: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var anObject = __webpack_require__2(9670);
                module2.exports = function(iterator) {
                  var returnMethod = iterator["return"];
                  if (returnMethod !== void 0) {
                    return anObject(returnMethod.call(iterator)).value;
                  }
                };
              }
            ),
            /***/
            3383: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var fails = __webpack_require__2(7293);
                var getPrototypeOf = __webpack_require__2(9518);
                var createNonEnumerableProperty = __webpack_require__2(8880);
                var has = __webpack_require__2(6656);
                var wellKnownSymbol = __webpack_require__2(5112);
                var IS_PURE = __webpack_require__2(1913);
                var ITERATOR = wellKnownSymbol("iterator");
                var BUGGY_SAFARI_ITERATORS = false;
                var returnThis = function() {
                  return this;
                };
                var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
                if ([].keys) {
                  arrayIterator = [].keys();
                  if (!("next" in arrayIterator))
                    BUGGY_SAFARI_ITERATORS = true;
                  else {
                    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
                    if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
                      IteratorPrototype = PrototypeOfArrayIteratorPrototype;
                  }
                }
                var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == void 0 || fails(function() {
                  var test = {};
                  return IteratorPrototype[ITERATOR].call(test) !== test;
                });
                if (NEW_ITERATOR_PROTOTYPE)
                  IteratorPrototype = {};
                if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
                  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
                }
                module2.exports = {
                  IteratorPrototype,
                  BUGGY_SAFARI_ITERATORS
                };
              }
            ),
            /***/
            7497: (
              /***/
              function(module2) {
                module2.exports = {};
              }
            ),
            /***/
            133: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var fails = __webpack_require__2(7293);
                module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
                  return !String(Symbol());
                });
              }
            ),
            /***/
            590: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var fails = __webpack_require__2(7293);
                var wellKnownSymbol = __webpack_require__2(5112);
                var IS_PURE = __webpack_require__2(1913);
                var ITERATOR = wellKnownSymbol("iterator");
                module2.exports = !fails(function() {
                  var url = new URL("b?a=1&b=2&c=3", "http://a");
                  var searchParams = url.searchParams;
                  var result = "";
                  url.pathname = "c%20d";
                  searchParams.forEach(function(value, key) {
                    searchParams["delete"]("b");
                    result += key + value;
                  });
                  return IS_PURE && !url.toJSON || !searchParams.sort || url.href !== "http://a/c%20d?a=1&c=3" || searchParams.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !searchParams[ITERATOR] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("http://тест").host !== "xn--e1aybc" || new URL("http://a#б").hash !== "#%D0%B1" || result !== "a1c3" || new URL("http://x", void 0).host !== "x";
                });
              }
            ),
            /***/
            8536: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var global = __webpack_require__2(7854);
                var inspectSource = __webpack_require__2(2788);
                var WeakMap = global.WeakMap;
                module2.exports = typeof WeakMap === "function" && /native code/.test(inspectSource(WeakMap));
              }
            ),
            /***/
            1574: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var DESCRIPTORS = __webpack_require__2(9781);
                var fails = __webpack_require__2(7293);
                var objectKeys = __webpack_require__2(1956);
                var getOwnPropertySymbolsModule = __webpack_require__2(5181);
                var propertyIsEnumerableModule = __webpack_require__2(5296);
                var toObject = __webpack_require__2(7908);
                var IndexedObject = __webpack_require__2(8361);
                var nativeAssign = Object.assign;
                var defineProperty = Object.defineProperty;
                module2.exports = !nativeAssign || fails(function() {
                  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, "a", {
                    enumerable: true,
                    get: function() {
                      defineProperty(this, "b", {
                        value: 3,
                        enumerable: false
                      });
                    }
                  }), { b: 2 })).b !== 1)
                    return true;
                  var A = {};
                  var B = {};
                  var symbol = Symbol();
                  var alphabet = "abcdefghijklmnopqrst";
                  A[symbol] = 7;
                  alphabet.split("").forEach(function(chr) {
                    B[chr] = chr;
                  });
                  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join("") != alphabet;
                }) ? function assign(target, source) {
                  var T = toObject(target);
                  var argumentsLength = arguments.length;
                  var index = 1;
                  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                  var propertyIsEnumerable = propertyIsEnumerableModule.f;
                  while (argumentsLength > index) {
                    var S = IndexedObject(arguments[index++]);
                    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
                    var length = keys.length;
                    var j = 0;
                    var key;
                    while (length > j) {
                      key = keys[j++];
                      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key))
                        T[key] = S[key];
                    }
                  }
                  return T;
                } : nativeAssign;
              }
            ),
            /***/
            30: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var anObject = __webpack_require__2(9670);
                var defineProperties = __webpack_require__2(6048);
                var enumBugKeys = __webpack_require__2(748);
                var hiddenKeys = __webpack_require__2(3501);
                var html = __webpack_require__2(490);
                var documentCreateElement = __webpack_require__2(317);
                var sharedKey = __webpack_require__2(6200);
                var GT = ">";
                var LT = "<";
                var PROTOTYPE = "prototype";
                var SCRIPT = "script";
                var IE_PROTO = sharedKey("IE_PROTO");
                var EmptyConstructor = function() {
                };
                var scriptTag = function(content) {
                  return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
                };
                var NullProtoObjectViaActiveX = function(activeXDocument2) {
                  activeXDocument2.write(scriptTag(""));
                  activeXDocument2.close();
                  var temp = activeXDocument2.parentWindow.Object;
                  activeXDocument2 = null;
                  return temp;
                };
                var NullProtoObjectViaIFrame = function() {
                  var iframe = documentCreateElement("iframe");
                  var JS = "java" + SCRIPT + ":";
                  var iframeDocument;
                  iframe.style.display = "none";
                  html.appendChild(iframe);
                  iframe.src = String(JS);
                  iframeDocument = iframe.contentWindow.document;
                  iframeDocument.open();
                  iframeDocument.write(scriptTag("document.F=Object"));
                  iframeDocument.close();
                  return iframeDocument.F;
                };
                var activeXDocument;
                var NullProtoObject = function() {
                  try {
                    activeXDocument = document.domain && new ActiveXObject("htmlfile");
                  } catch (error) {
                  }
                  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
                  var length = enumBugKeys.length;
                  while (length--)
                    delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
                  return NullProtoObject();
                };
                hiddenKeys[IE_PROTO] = true;
                module2.exports = Object.create || function create(O, Properties) {
                  var result;
                  if (O !== null) {
                    EmptyConstructor[PROTOTYPE] = anObject(O);
                    result = new EmptyConstructor();
                    EmptyConstructor[PROTOTYPE] = null;
                    result[IE_PROTO] = O;
                  } else
                    result = NullProtoObject();
                  return Properties === void 0 ? result : defineProperties(result, Properties);
                };
              }
            ),
            /***/
            6048: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var DESCRIPTORS = __webpack_require__2(9781);
                var definePropertyModule = __webpack_require__2(3070);
                var anObject = __webpack_require__2(9670);
                var objectKeys = __webpack_require__2(1956);
                module2.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
                  anObject(O);
                  var keys = objectKeys(Properties);
                  var length = keys.length;
                  var index = 0;
                  var key;
                  while (length > index)
                    definePropertyModule.f(O, key = keys[index++], Properties[key]);
                  return O;
                };
              }
            ),
            /***/
            3070: (
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var DESCRIPTORS = __webpack_require__2(9781);
                var IE8_DOM_DEFINE = __webpack_require__2(4664);
                var anObject = __webpack_require__2(9670);
                var toPrimitive = __webpack_require__2(7593);
                var nativeDefineProperty = Object.defineProperty;
                exports2.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
                  anObject(O);
                  P = toPrimitive(P, true);
                  anObject(Attributes);
                  if (IE8_DOM_DEFINE)
                    try {
                      return nativeDefineProperty(O, P, Attributes);
                    } catch (error) {
                    }
                  if ("get" in Attributes || "set" in Attributes)
                    throw TypeError("Accessors not supported");
                  if ("value" in Attributes)
                    O[P] = Attributes.value;
                  return O;
                };
              }
            ),
            /***/
            1236: (
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var DESCRIPTORS = __webpack_require__2(9781);
                var propertyIsEnumerableModule = __webpack_require__2(5296);
                var createPropertyDescriptor = __webpack_require__2(9114);
                var toIndexedObject = __webpack_require__2(5656);
                var toPrimitive = __webpack_require__2(7593);
                var has = __webpack_require__2(6656);
                var IE8_DOM_DEFINE = __webpack_require__2(4664);
                var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
                exports2.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
                  O = toIndexedObject(O);
                  P = toPrimitive(P, true);
                  if (IE8_DOM_DEFINE)
                    try {
                      return nativeGetOwnPropertyDescriptor(O, P);
                    } catch (error) {
                    }
                  if (has(O, P))
                    return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
                };
              }
            ),
            /***/
            8006: (
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                var internalObjectKeys = __webpack_require__2(6324);
                var enumBugKeys = __webpack_require__2(748);
                var hiddenKeys = enumBugKeys.concat("length", "prototype");
                exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                  return internalObjectKeys(O, hiddenKeys);
                };
              }
            ),
            /***/
            5181: (
              /***/
              function(__unused_webpack_module, exports2) {
                exports2.f = Object.getOwnPropertySymbols;
              }
            ),
            /***/
            9518: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var has = __webpack_require__2(6656);
                var toObject = __webpack_require__2(7908);
                var sharedKey = __webpack_require__2(6200);
                var CORRECT_PROTOTYPE_GETTER = __webpack_require__2(8544);
                var IE_PROTO = sharedKey("IE_PROTO");
                var ObjectPrototype = Object.prototype;
                module2.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
                  O = toObject(O);
                  if (has(O, IE_PROTO))
                    return O[IE_PROTO];
                  if (typeof O.constructor == "function" && O instanceof O.constructor) {
                    return O.constructor.prototype;
                  }
                  return O instanceof Object ? ObjectPrototype : null;
                };
              }
            ),
            /***/
            6324: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var has = __webpack_require__2(6656);
                var toIndexedObject = __webpack_require__2(5656);
                var indexOf = __webpack_require__2(1318).indexOf;
                var hiddenKeys = __webpack_require__2(3501);
                module2.exports = function(object, names) {
                  var O = toIndexedObject(object);
                  var i = 0;
                  var result = [];
                  var key;
                  for (key in O)
                    !has(hiddenKeys, key) && has(O, key) && result.push(key);
                  while (names.length > i)
                    if (has(O, key = names[i++])) {
                      ~indexOf(result, key) || result.push(key);
                    }
                  return result;
                };
              }
            ),
            /***/
            1956: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var internalObjectKeys = __webpack_require__2(6324);
                var enumBugKeys = __webpack_require__2(748);
                module2.exports = Object.keys || function keys(O) {
                  return internalObjectKeys(O, enumBugKeys);
                };
              }
            ),
            /***/
            5296: (
              /***/
              function(__unused_webpack_module, exports2) {
                "use strict";
                var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
                var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
                var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);
                exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
                  var descriptor = getOwnPropertyDescriptor(this, V);
                  return !!descriptor && descriptor.enumerable;
                } : nativePropertyIsEnumerable;
              }
            ),
            /***/
            7674: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var anObject = __webpack_require__2(9670);
                var aPossiblePrototype = __webpack_require__2(6077);
                module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                  var CORRECT_SETTER = false;
                  var test = {};
                  var setter;
                  try {
                    setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
                    setter.call(test, []);
                    CORRECT_SETTER = test instanceof Array;
                  } catch (error) {
                  }
                  return function setPrototypeOf(O, proto) {
                    anObject(O);
                    aPossiblePrototype(proto);
                    if (CORRECT_SETTER)
                      setter.call(O, proto);
                    else
                      O.__proto__ = proto;
                    return O;
                  };
                }() : void 0);
              }
            ),
            /***/
            288: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var TO_STRING_TAG_SUPPORT = __webpack_require__2(1694);
                var classof = __webpack_require__2(648);
                module2.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
                  return "[object " + classof(this) + "]";
                };
              }
            ),
            /***/
            3887: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var getBuiltIn = __webpack_require__2(5005);
                var getOwnPropertyNamesModule = __webpack_require__2(8006);
                var getOwnPropertySymbolsModule = __webpack_require__2(5181);
                var anObject = __webpack_require__2(9670);
                module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
                  var keys = getOwnPropertyNamesModule.f(anObject(it));
                  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
                };
              }
            ),
            /***/
            857: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var global = __webpack_require__2(7854);
                module2.exports = global;
              }
            ),
            /***/
            2248: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var redefine = __webpack_require__2(1320);
                module2.exports = function(target, src, options) {
                  for (var key in src)
                    redefine(target, key, src[key], options);
                  return target;
                };
              }
            ),
            /***/
            1320: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var global = __webpack_require__2(7854);
                var createNonEnumerableProperty = __webpack_require__2(8880);
                var has = __webpack_require__2(6656);
                var setGlobal = __webpack_require__2(3505);
                var inspectSource = __webpack_require__2(2788);
                var InternalStateModule = __webpack_require__2(9909);
                var getInternalState = InternalStateModule.get;
                var enforceInternalState = InternalStateModule.enforce;
                var TEMPLATE = String(String).split("String");
                (module2.exports = function(O, key, value, options) {
                  var unsafe = options ? !!options.unsafe : false;
                  var simple = options ? !!options.enumerable : false;
                  var noTargetGet = options ? !!options.noTargetGet : false;
                  var state;
                  if (typeof value == "function") {
                    if (typeof key == "string" && !has(value, "name")) {
                      createNonEnumerableProperty(value, "name", key);
                    }
                    state = enforceInternalState(value);
                    if (!state.source) {
                      state.source = TEMPLATE.join(typeof key == "string" ? key : "");
                    }
                  }
                  if (O === global) {
                    if (simple)
                      O[key] = value;
                    else
                      setGlobal(key, value);
                    return;
                  } else if (!unsafe) {
                    delete O[key];
                  } else if (!noTargetGet && O[key]) {
                    simple = true;
                  }
                  if (simple)
                    O[key] = value;
                  else
                    createNonEnumerableProperty(O, key, value);
                })(Function.prototype, "toString", function toString() {
                  return typeof this == "function" && getInternalState(this).source || inspectSource(this);
                });
              }
            ),
            /***/
            7651: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var classof = __webpack_require__2(4326);
                var regexpExec = __webpack_require__2(2261);
                module2.exports = function(R, S) {
                  var exec = R.exec;
                  if (typeof exec === "function") {
                    var result = exec.call(R, S);
                    if (typeof result !== "object") {
                      throw TypeError("RegExp exec method returned something other than an Object or null");
                    }
                    return result;
                  }
                  if (classof(R) !== "RegExp") {
                    throw TypeError("RegExp#exec called on incompatible receiver");
                  }
                  return regexpExec.call(R, S);
                };
              }
            ),
            /***/
            2261: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var regexpFlags = __webpack_require__2(7066);
                var stickyHelpers = __webpack_require__2(2999);
                var nativeExec = RegExp.prototype.exec;
                var nativeReplace = String.prototype.replace;
                var patchedExec = nativeExec;
                var UPDATES_LAST_INDEX_WRONG = function() {
                  var re1 = /a/;
                  var re2 = /b*/g;
                  nativeExec.call(re1, "a");
                  nativeExec.call(re2, "a");
                  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
                }();
                var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;
                var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
                var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;
                if (PATCH) {
                  patchedExec = function exec(str) {
                    var re = this;
                    var lastIndex, reCopy, match, i;
                    var sticky = UNSUPPORTED_Y && re.sticky;
                    var flags = regexpFlags.call(re);
                    var source = re.source;
                    var charsAdded = 0;
                    var strCopy = str;
                    if (sticky) {
                      flags = flags.replace("y", "");
                      if (flags.indexOf("g") === -1) {
                        flags += "g";
                      }
                      strCopy = String(str).slice(re.lastIndex);
                      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== "\n")) {
                        source = "(?: " + source + ")";
                        strCopy = " " + strCopy;
                        charsAdded++;
                      }
                      reCopy = new RegExp("^(?:" + source + ")", flags);
                    }
                    if (NPCG_INCLUDED) {
                      reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
                    }
                    if (UPDATES_LAST_INDEX_WRONG)
                      lastIndex = re.lastIndex;
                    match = nativeExec.call(sticky ? reCopy : re, strCopy);
                    if (sticky) {
                      if (match) {
                        match.input = match.input.slice(charsAdded);
                        match[0] = match[0].slice(charsAdded);
                        match.index = re.lastIndex;
                        re.lastIndex += match[0].length;
                      } else
                        re.lastIndex = 0;
                    } else if (UPDATES_LAST_INDEX_WRONG && match) {
                      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
                    }
                    if (NPCG_INCLUDED && match && match.length > 1) {
                      nativeReplace.call(match[0], reCopy, function() {
                        for (i = 1; i < arguments.length - 2; i++) {
                          if (arguments[i] === void 0)
                            match[i] = void 0;
                        }
                      });
                    }
                    return match;
                  };
                }
                module2.exports = patchedExec;
              }
            ),
            /***/
            7066: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var anObject = __webpack_require__2(9670);
                module2.exports = function() {
                  var that = anObject(this);
                  var result = "";
                  if (that.global)
                    result += "g";
                  if (that.ignoreCase)
                    result += "i";
                  if (that.multiline)
                    result += "m";
                  if (that.dotAll)
                    result += "s";
                  if (that.unicode)
                    result += "u";
                  if (that.sticky)
                    result += "y";
                  return result;
                };
              }
            ),
            /***/
            2999: (
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                "use strict";
                var fails = __webpack_require__2(7293);
                function RE(s, f) {
                  return RegExp(s, f);
                }
                exports2.UNSUPPORTED_Y = fails(function() {
                  var re = RE("a", "y");
                  re.lastIndex = 2;
                  return re.exec("abcd") != null;
                });
                exports2.BROKEN_CARET = fails(function() {
                  var re = RE("^r", "gy");
                  re.lastIndex = 2;
                  return re.exec("str") != null;
                });
              }
            ),
            /***/
            4488: (
              /***/
              function(module2) {
                module2.exports = function(it) {
                  if (it == void 0)
                    throw TypeError("Can't call method on " + it);
                  return it;
                };
              }
            ),
            /***/
            3505: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var global = __webpack_require__2(7854);
                var createNonEnumerableProperty = __webpack_require__2(8880);
                module2.exports = function(key, value) {
                  try {
                    createNonEnumerableProperty(global, key, value);
                  } catch (error) {
                    global[key] = value;
                  }
                  return value;
                };
              }
            ),
            /***/
            6340: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var getBuiltIn = __webpack_require__2(5005);
                var definePropertyModule = __webpack_require__2(3070);
                var wellKnownSymbol = __webpack_require__2(5112);
                var DESCRIPTORS = __webpack_require__2(9781);
                var SPECIES = wellKnownSymbol("species");
                module2.exports = function(CONSTRUCTOR_NAME) {
                  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
                  var defineProperty = definePropertyModule.f;
                  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
                    defineProperty(Constructor, SPECIES, {
                      configurable: true,
                      get: function() {
                        return this;
                      }
                    });
                  }
                };
              }
            ),
            /***/
            8003: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var defineProperty = __webpack_require__2(3070).f;
                var has = __webpack_require__2(6656);
                var wellKnownSymbol = __webpack_require__2(5112);
                var TO_STRING_TAG = wellKnownSymbol("toStringTag");
                module2.exports = function(it, TAG, STATIC) {
                  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
                    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
                  }
                };
              }
            ),
            /***/
            6200: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var shared = __webpack_require__2(2309);
                var uid = __webpack_require__2(9711);
                var keys = shared("keys");
                module2.exports = function(key) {
                  return keys[key] || (keys[key] = uid(key));
                };
              }
            ),
            /***/
            5465: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var global = __webpack_require__2(7854);
                var setGlobal = __webpack_require__2(3505);
                var SHARED = "__core-js_shared__";
                var store = global[SHARED] || setGlobal(SHARED, {});
                module2.exports = store;
              }
            ),
            /***/
            2309: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var IS_PURE = __webpack_require__2(1913);
                var store = __webpack_require__2(5465);
                (module2.exports = function(key, value) {
                  return store[key] || (store[key] = value !== void 0 ? value : {});
                })("versions", []).push({
                  version: "3.9.0",
                  mode: IS_PURE ? "pure" : "global",
                  copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
                });
              }
            ),
            /***/
            6707: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var anObject = __webpack_require__2(9670);
                var aFunction = __webpack_require__2(3099);
                var wellKnownSymbol = __webpack_require__2(5112);
                var SPECIES = wellKnownSymbol("species");
                module2.exports = function(O, defaultConstructor) {
                  var C = anObject(O).constructor;
                  var S;
                  return C === void 0 || (S = anObject(C)[SPECIES]) == void 0 ? defaultConstructor : aFunction(S);
                };
              }
            ),
            /***/
            8710: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var toInteger = __webpack_require__2(9958);
                var requireObjectCoercible = __webpack_require__2(4488);
                var createMethod = function(CONVERT_TO_STRING) {
                  return function($this, pos) {
                    var S = String(requireObjectCoercible($this));
                    var position = toInteger(pos);
                    var size = S.length;
                    var first, second;
                    if (position < 0 || position >= size)
                      return CONVERT_TO_STRING ? "" : void 0;
                    first = S.charCodeAt(position);
                    return first < 55296 || first > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
                  };
                };
                module2.exports = {
                  // `String.prototype.codePointAt` method
                  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
                  codeAt: createMethod(false),
                  // `String.prototype.at` method
                  // https://github.com/mathiasbynens/String.prototype.at
                  charAt: createMethod(true)
                };
              }
            ),
            /***/
            3197: (
              /***/
              function(module2) {
                "use strict";
                var maxInt = 2147483647;
                var base = 36;
                var tMin = 1;
                var tMax = 26;
                var skew = 38;
                var damp = 700;
                var initialBias = 72;
                var initialN = 128;
                var delimiter = "-";
                var regexNonASCII = /[^\0-\u007E]/;
                var regexSeparators = /[.\u3002\uFF0E\uFF61]/g;
                var OVERFLOW_ERROR = "Overflow: input needs wider integers to process";
                var baseMinusTMin = base - tMin;
                var floor = Math.floor;
                var stringFromCharCode = String.fromCharCode;
                var ucs2decode = function(string) {
                  var output = [];
                  var counter = 0;
                  var length = string.length;
                  while (counter < length) {
                    var value = string.charCodeAt(counter++);
                    if (value >= 55296 && value <= 56319 && counter < length) {
                      var extra = string.charCodeAt(counter++);
                      if ((extra & 64512) == 56320) {
                        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
                      } else {
                        output.push(value);
                        counter--;
                      }
                    } else {
                      output.push(value);
                    }
                  }
                  return output;
                };
                var digitToBasic = function(digit) {
                  return digit + 22 + 75 * (digit < 26);
                };
                var adapt = function(delta, numPoints, firstTime) {
                  var k = 0;
                  delta = firstTime ? floor(delta / damp) : delta >> 1;
                  delta += floor(delta / numPoints);
                  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
                    delta = floor(delta / baseMinusTMin);
                  }
                  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
                };
                var encode = function(input) {
                  var output = [];
                  input = ucs2decode(input);
                  var inputLength = input.length;
                  var n = initialN;
                  var delta = 0;
                  var bias = initialBias;
                  var i, currentValue;
                  for (i = 0; i < input.length; i++) {
                    currentValue = input[i];
                    if (currentValue < 128) {
                      output.push(stringFromCharCode(currentValue));
                    }
                  }
                  var basicLength = output.length;
                  var handledCPCount = basicLength;
                  if (basicLength) {
                    output.push(delimiter);
                  }
                  while (handledCPCount < inputLength) {
                    var m = maxInt;
                    for (i = 0; i < input.length; i++) {
                      currentValue = input[i];
                      if (currentValue >= n && currentValue < m) {
                        m = currentValue;
                      }
                    }
                    var handledCPCountPlusOne = handledCPCount + 1;
                    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                      throw RangeError(OVERFLOW_ERROR);
                    }
                    delta += (m - n) * handledCPCountPlusOne;
                    n = m;
                    for (i = 0; i < input.length; i++) {
                      currentValue = input[i];
                      if (currentValue < n && ++delta > maxInt) {
                        throw RangeError(OVERFLOW_ERROR);
                      }
                      if (currentValue == n) {
                        var q = delta;
                        for (var k = base; ; k += base) {
                          var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                          if (q < t)
                            break;
                          var qMinusT = q - t;
                          var baseMinusT = base - t;
                          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
                          q = floor(qMinusT / baseMinusT);
                        }
                        output.push(stringFromCharCode(digitToBasic(q)));
                        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                        delta = 0;
                        ++handledCPCount;
                      }
                    }
                    ++delta;
                    ++n;
                  }
                  return output.join("");
                };
                module2.exports = function(input) {
                  var encoded = [];
                  var labels = input.toLowerCase().replace(regexSeparators, ".").split(".");
                  var i, label;
                  for (i = 0; i < labels.length; i++) {
                    label = labels[i];
                    encoded.push(regexNonASCII.test(label) ? "xn--" + encode(label) : label);
                  }
                  return encoded.join(".");
                };
              }
            ),
            /***/
            6091: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var fails = __webpack_require__2(7293);
                var whitespaces = __webpack_require__2(1361);
                var non = "​᠎";
                module2.exports = function(METHOD_NAME) {
                  return fails(function() {
                    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
                  });
                };
              }
            ),
            /***/
            3111: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var requireObjectCoercible = __webpack_require__2(4488);
                var whitespaces = __webpack_require__2(1361);
                var whitespace = "[" + whitespaces + "]";
                var ltrim = RegExp("^" + whitespace + whitespace + "*");
                var rtrim = RegExp(whitespace + whitespace + "*$");
                var createMethod = function(TYPE) {
                  return function($this) {
                    var string = String(requireObjectCoercible($this));
                    if (TYPE & 1)
                      string = string.replace(ltrim, "");
                    if (TYPE & 2)
                      string = string.replace(rtrim, "");
                    return string;
                  };
                };
                module2.exports = {
                  // `String.prototype.{ trimLeft, trimStart }` methods
                  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
                  start: createMethod(1),
                  // `String.prototype.{ trimRight, trimEnd }` methods
                  // https://tc39.es/ecma262/#sec-string.prototype.trimend
                  end: createMethod(2),
                  // `String.prototype.trim` method
                  // https://tc39.es/ecma262/#sec-string.prototype.trim
                  trim: createMethod(3)
                };
              }
            ),
            /***/
            1400: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var toInteger = __webpack_require__2(9958);
                var max = Math.max;
                var min = Math.min;
                module2.exports = function(index, length) {
                  var integer = toInteger(index);
                  return integer < 0 ? max(integer + length, 0) : min(integer, length);
                };
              }
            ),
            /***/
            7067: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var toInteger = __webpack_require__2(9958);
                var toLength = __webpack_require__2(7466);
                module2.exports = function(it) {
                  if (it === void 0)
                    return 0;
                  var number = toInteger(it);
                  var length = toLength(number);
                  if (number !== length)
                    throw RangeError("Wrong length or index");
                  return length;
                };
              }
            ),
            /***/
            5656: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var IndexedObject = __webpack_require__2(8361);
                var requireObjectCoercible = __webpack_require__2(4488);
                module2.exports = function(it) {
                  return IndexedObject(requireObjectCoercible(it));
                };
              }
            ),
            /***/
            9958: (
              /***/
              function(module2) {
                var ceil = Math.ceil;
                var floor = Math.floor;
                module2.exports = function(argument) {
                  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
                };
              }
            ),
            /***/
            7466: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var toInteger = __webpack_require__2(9958);
                var min = Math.min;
                module2.exports = function(argument) {
                  return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0;
                };
              }
            ),
            /***/
            7908: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var requireObjectCoercible = __webpack_require__2(4488);
                module2.exports = function(argument) {
                  return Object(requireObjectCoercible(argument));
                };
              }
            ),
            /***/
            4590: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var toPositiveInteger = __webpack_require__2(3002);
                module2.exports = function(it, BYTES) {
                  var offset = toPositiveInteger(it);
                  if (offset % BYTES)
                    throw RangeError("Wrong offset");
                  return offset;
                };
              }
            ),
            /***/
            3002: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var toInteger = __webpack_require__2(9958);
                module2.exports = function(it) {
                  var result = toInteger(it);
                  if (result < 0)
                    throw RangeError("The argument can't be less than 0");
                  return result;
                };
              }
            ),
            /***/
            7593: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var isObject = __webpack_require__2(111);
                module2.exports = function(input, PREFERRED_STRING) {
                  if (!isObject(input))
                    return input;
                  var fn, val;
                  if (PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input)))
                    return val;
                  if (typeof (fn = input.valueOf) == "function" && !isObject(val = fn.call(input)))
                    return val;
                  if (!PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input)))
                    return val;
                  throw TypeError("Can't convert object to primitive value");
                };
              }
            ),
            /***/
            1694: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var wellKnownSymbol = __webpack_require__2(5112);
                var TO_STRING_TAG = wellKnownSymbol("toStringTag");
                var test = {};
                test[TO_STRING_TAG] = "z";
                module2.exports = String(test) === "[object z]";
              }
            ),
            /***/
            9843: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var $ = __webpack_require__2(2109);
                var global = __webpack_require__2(7854);
                var DESCRIPTORS = __webpack_require__2(9781);
                var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__2(3832);
                var ArrayBufferViewCore = __webpack_require__2(260);
                var ArrayBufferModule = __webpack_require__2(3331);
                var anInstance = __webpack_require__2(5787);
                var createPropertyDescriptor = __webpack_require__2(9114);
                var createNonEnumerableProperty = __webpack_require__2(8880);
                var toLength = __webpack_require__2(7466);
                var toIndex = __webpack_require__2(7067);
                var toOffset = __webpack_require__2(4590);
                var toPrimitive = __webpack_require__2(7593);
                var has = __webpack_require__2(6656);
                var classof = __webpack_require__2(648);
                var isObject = __webpack_require__2(111);
                var create = __webpack_require__2(30);
                var setPrototypeOf = __webpack_require__2(7674);
                var getOwnPropertyNames = __webpack_require__2(8006).f;
                var typedArrayFrom = __webpack_require__2(7321);
                var forEach = __webpack_require__2(2092).forEach;
                var setSpecies = __webpack_require__2(6340);
                var definePropertyModule = __webpack_require__2(3070);
                var getOwnPropertyDescriptorModule = __webpack_require__2(1236);
                var InternalStateModule = __webpack_require__2(9909);
                var inheritIfRequired = __webpack_require__2(9587);
                var getInternalState = InternalStateModule.get;
                var setInternalState = InternalStateModule.set;
                var nativeDefineProperty = definePropertyModule.f;
                var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
                var round = Math.round;
                var RangeError2 = global.RangeError;
                var ArrayBuffer2 = ArrayBufferModule.ArrayBuffer;
                var DataView2 = ArrayBufferModule.DataView;
                var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
                var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
                var TypedArray = ArrayBufferViewCore.TypedArray;
                var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
                var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
                var isTypedArray = ArrayBufferViewCore.isTypedArray;
                var BYTES_PER_ELEMENT = "BYTES_PER_ELEMENT";
                var WRONG_LENGTH = "Wrong length";
                var fromList = function(C, list) {
                  var index = 0;
                  var length = list.length;
                  var result = new (aTypedArrayConstructor(C))(length);
                  while (length > index)
                    result[index] = list[index++];
                  return result;
                };
                var addGetter = function(it, key) {
                  nativeDefineProperty(it, key, { get: function() {
                    return getInternalState(this)[key];
                  } });
                };
                var isArrayBuffer = function(it) {
                  var klass;
                  return it instanceof ArrayBuffer2 || (klass = classof(it)) == "ArrayBuffer" || klass == "SharedArrayBuffer";
                };
                var isTypedArrayIndex = function(target, key) {
                  return isTypedArray(target) && typeof key != "symbol" && key in target && String(+key) == String(key);
                };
                var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
                  return isTypedArrayIndex(target, key = toPrimitive(key, true)) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
                };
                var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
                  if (isTypedArrayIndex(target, key = toPrimitive(key, true)) && isObject(descriptor) && has(descriptor, "value") && !has(descriptor, "get") && !has(descriptor, "set") && !descriptor.configurable && (!has(descriptor, "writable") || descriptor.writable) && (!has(descriptor, "enumerable") || descriptor.enumerable)) {
                    target[key] = descriptor.value;
                    return target;
                  }
                  return nativeDefineProperty(target, key, descriptor);
                };
                if (DESCRIPTORS) {
                  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
                    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
                    definePropertyModule.f = wrappedDefineProperty;
                    addGetter(TypedArrayPrototype, "buffer");
                    addGetter(TypedArrayPrototype, "byteOffset");
                    addGetter(TypedArrayPrototype, "byteLength");
                    addGetter(TypedArrayPrototype, "length");
                  }
                  $({ target: "Object", stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
                    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
                    defineProperty: wrappedDefineProperty
                  });
                  module2.exports = function(TYPE, wrapper, CLAMPED) {
                    var BYTES = TYPE.match(/\d+$/)[0] / 8;
                    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? "Clamped" : "") + "Array";
                    var GETTER = "get" + TYPE;
                    var SETTER = "set" + TYPE;
                    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
                    var TypedArrayConstructor = NativeTypedArrayConstructor;
                    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
                    var exported = {};
                    var getter = function(that, index) {
                      var data = getInternalState(that);
                      return data.view[GETTER](index * BYTES + data.byteOffset, true);
                    };
                    var setter = function(that, index, value) {
                      var data = getInternalState(that);
                      if (CLAMPED)
                        value = (value = round(value)) < 0 ? 0 : value > 255 ? 255 : value & 255;
                      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
                    };
                    var addElement = function(that, index) {
                      nativeDefineProperty(that, index, {
                        get: function() {
                          return getter(this, index);
                        },
                        set: function(value) {
                          return setter(this, index, value);
                        },
                        enumerable: true
                      });
                    };
                    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
                      TypedArrayConstructor = wrapper(function(that, data, offset, $length) {
                        anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
                        var index = 0;
                        var byteOffset = 0;
                        var buffer, byteLength, length;
                        if (!isObject(data)) {
                          length = toIndex(data);
                          byteLength = length * BYTES;
                          buffer = new ArrayBuffer2(byteLength);
                        } else if (isArrayBuffer(data)) {
                          buffer = data;
                          byteOffset = toOffset(offset, BYTES);
                          var $len = data.byteLength;
                          if ($length === void 0) {
                            if ($len % BYTES)
                              throw RangeError2(WRONG_LENGTH);
                            byteLength = $len - byteOffset;
                            if (byteLength < 0)
                              throw RangeError2(WRONG_LENGTH);
                          } else {
                            byteLength = toLength($length) * BYTES;
                            if (byteLength + byteOffset > $len)
                              throw RangeError2(WRONG_LENGTH);
                          }
                          length = byteLength / BYTES;
                        } else if (isTypedArray(data)) {
                          return fromList(TypedArrayConstructor, data);
                        } else {
                          return typedArrayFrom.call(TypedArrayConstructor, data);
                        }
                        setInternalState(that, {
                          buffer,
                          byteOffset,
                          byteLength,
                          length,
                          view: new DataView2(buffer)
                        });
                        while (index < length)
                          addElement(that, index++);
                      });
                      if (setPrototypeOf)
                        setPrototypeOf(TypedArrayConstructor, TypedArray);
                      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
                    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
                      TypedArrayConstructor = wrapper(function(dummy, data, typedArrayOffset, $length) {
                        anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
                        return inheritIfRequired(function() {
                          if (!isObject(data))
                            return new NativeTypedArrayConstructor(toIndex(data));
                          if (isArrayBuffer(data))
                            return $length !== void 0 ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !== void 0 ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
                          if (isTypedArray(data))
                            return fromList(TypedArrayConstructor, data);
                          return typedArrayFrom.call(TypedArrayConstructor, data);
                        }(), dummy, TypedArrayConstructor);
                      });
                      if (setPrototypeOf)
                        setPrototypeOf(TypedArrayConstructor, TypedArray);
                      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function(key) {
                        if (!(key in TypedArrayConstructor)) {
                          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
                        }
                      });
                      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
                    }
                    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
                      createNonEnumerableProperty(TypedArrayConstructorPrototype, "constructor", TypedArrayConstructor);
                    }
                    if (TYPED_ARRAY_TAG) {
                      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
                    }
                    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
                    $({
                      global: true,
                      forced: TypedArrayConstructor != NativeTypedArrayConstructor,
                      sham: !NATIVE_ARRAY_BUFFER_VIEWS
                    }, exported);
                    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
                      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
                    }
                    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
                      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
                    }
                    setSpecies(CONSTRUCTOR_NAME);
                  };
                } else
                  module2.exports = function() {
                  };
              }
            ),
            /***/
            3832: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var global = __webpack_require__2(7854);
                var fails = __webpack_require__2(7293);
                var checkCorrectnessOfIteration = __webpack_require__2(7072);
                var NATIVE_ARRAY_BUFFER_VIEWS = __webpack_require__2(260).NATIVE_ARRAY_BUFFER_VIEWS;
                var ArrayBuffer2 = global.ArrayBuffer;
                var Int8Array2 = global.Int8Array;
                module2.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function() {
                  Int8Array2(1);
                }) || !fails(function() {
                  new Int8Array2(-1);
                }) || !checkCorrectnessOfIteration(function(iterable) {
                  new Int8Array2();
                  new Int8Array2(null);
                  new Int8Array2(1.5);
                  new Int8Array2(iterable);
                }, true) || fails(function() {
                  return new Int8Array2(new ArrayBuffer2(2), 1, void 0).length !== 1;
                });
              }
            ),
            /***/
            3074: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var aTypedArrayConstructor = __webpack_require__2(260).aTypedArrayConstructor;
                var speciesConstructor = __webpack_require__2(6707);
                module2.exports = function(instance, list) {
                  var C = speciesConstructor(instance, instance.constructor);
                  var index = 0;
                  var length = list.length;
                  var result = new (aTypedArrayConstructor(C))(length);
                  while (length > index)
                    result[index] = list[index++];
                  return result;
                };
              }
            ),
            /***/
            7321: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var toObject = __webpack_require__2(7908);
                var toLength = __webpack_require__2(7466);
                var getIteratorMethod = __webpack_require__2(1246);
                var isArrayIteratorMethod = __webpack_require__2(7659);
                var bind = __webpack_require__2(9974);
                var aTypedArrayConstructor = __webpack_require__2(260).aTypedArrayConstructor;
                module2.exports = function from(source) {
                  var O = toObject(source);
                  var argumentsLength = arguments.length;
                  var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
                  var mapping = mapfn !== void 0;
                  var iteratorMethod = getIteratorMethod(O);
                  var i, length, result, step, iterator, next;
                  if (iteratorMethod != void 0 && !isArrayIteratorMethod(iteratorMethod)) {
                    iterator = iteratorMethod.call(O);
                    next = iterator.next;
                    O = [];
                    while (!(step = next.call(iterator)).done) {
                      O.push(step.value);
                    }
                  }
                  if (mapping && argumentsLength > 2) {
                    mapfn = bind(mapfn, arguments[2], 2);
                  }
                  length = toLength(O.length);
                  result = new (aTypedArrayConstructor(this))(length);
                  for (i = 0; length > i; i++) {
                    result[i] = mapping ? mapfn(O[i], i) : O[i];
                  }
                  return result;
                };
              }
            ),
            /***/
            9711: (
              /***/
              function(module2) {
                var id = 0;
                var postfix = Math.random();
                module2.exports = function(key) {
                  return "Symbol(" + String(key === void 0 ? "" : key) + ")_" + (++id + postfix).toString(36);
                };
              }
            ),
            /***/
            3307: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var NATIVE_SYMBOL = __webpack_require__2(133);
                module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
              }
            ),
            /***/
            5112: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                var global = __webpack_require__2(7854);
                var shared = __webpack_require__2(2309);
                var has = __webpack_require__2(6656);
                var uid = __webpack_require__2(9711);
                var NATIVE_SYMBOL = __webpack_require__2(133);
                var USE_SYMBOL_AS_UID = __webpack_require__2(3307);
                var WellKnownSymbolsStore = shared("wks");
                var Symbol2 = global.Symbol;
                var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
                module2.exports = function(name) {
                  if (!has(WellKnownSymbolsStore, name)) {
                    if (NATIVE_SYMBOL && has(Symbol2, name))
                      WellKnownSymbolsStore[name] = Symbol2[name];
                    else
                      WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name);
                  }
                  return WellKnownSymbolsStore[name];
                };
              }
            ),
            /***/
            1361: (
              /***/
              function(module2) {
                module2.exports = "	\n\v\f\r                　\u2028\u2029\uFEFF";
              }
            ),
            /***/
            8264: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var $ = __webpack_require__2(2109);
                var global = __webpack_require__2(7854);
                var arrayBufferModule = __webpack_require__2(3331);
                var setSpecies = __webpack_require__2(6340);
                var ARRAY_BUFFER = "ArrayBuffer";
                var ArrayBuffer2 = arrayBufferModule[ARRAY_BUFFER];
                var NativeArrayBuffer = global[ARRAY_BUFFER];
                $({ global: true, forced: NativeArrayBuffer !== ArrayBuffer2 }, {
                  ArrayBuffer: ArrayBuffer2
                });
                setSpecies(ARRAY_BUFFER);
              }
            ),
            /***/
            2222: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var $ = __webpack_require__2(2109);
                var fails = __webpack_require__2(7293);
                var isArray = __webpack_require__2(3157);
                var isObject = __webpack_require__2(111);
                var toObject = __webpack_require__2(7908);
                var toLength = __webpack_require__2(7466);
                var createProperty = __webpack_require__2(6135);
                var arraySpeciesCreate = __webpack_require__2(5417);
                var arrayMethodHasSpeciesSupport = __webpack_require__2(1194);
                var wellKnownSymbol = __webpack_require__2(5112);
                var V8_VERSION = __webpack_require__2(7392);
                var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
                var MAX_SAFE_INTEGER = 9007199254740991;
                var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded";
                var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
                  var array = [];
                  array[IS_CONCAT_SPREADABLE] = false;
                  return array.concat()[0] !== array;
                });
                var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");
                var isConcatSpreadable = function(O) {
                  if (!isObject(O))
                    return false;
                  var spreadable = O[IS_CONCAT_SPREADABLE];
                  return spreadable !== void 0 ? !!spreadable : isArray(O);
                };
                var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
                $({ target: "Array", proto: true, forced: FORCED }, {
                  // eslint-disable-next-line no-unused-vars -- required for `.length`
                  concat: function concat(arg) {
                    var O = toObject(this);
                    var A = arraySpeciesCreate(O, 0);
                    var n = 0;
                    var i, k, length, len, E;
                    for (i = -1, length = arguments.length; i < length; i++) {
                      E = i === -1 ? O : arguments[i];
                      if (isConcatSpreadable(E)) {
                        len = toLength(E.length);
                        if (n + len > MAX_SAFE_INTEGER)
                          throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                        for (k = 0; k < len; k++, n++)
                          if (k in E)
                            createProperty(A, n, E[k]);
                      } else {
                        if (n >= MAX_SAFE_INTEGER)
                          throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                        createProperty(A, n++, E);
                      }
                    }
                    A.length = n;
                    return A;
                  }
                });
              }
            ),
            /***/
            7327: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var $ = __webpack_require__2(2109);
                var $filter = __webpack_require__2(2092).filter;
                var arrayMethodHasSpeciesSupport = __webpack_require__2(1194);
                var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");
                $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
                  filter: function filter(callbackfn) {
                    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              }
            ),
            /***/
            2772: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var $ = __webpack_require__2(2109);
                var $indexOf = __webpack_require__2(1318).indexOf;
                var arrayMethodIsStrict = __webpack_require__2(9341);
                var nativeIndexOf = [].indexOf;
                var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
                var STRICT_METHOD = arrayMethodIsStrict("indexOf");
                $({ target: "Array", proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
                  indexOf: function indexOf(searchElement) {
                    return NEGATIVE_ZERO ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              }
            ),
            /***/
            6992: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var toIndexedObject = __webpack_require__2(5656);
                var addToUnscopables = __webpack_require__2(1223);
                var Iterators = __webpack_require__2(7497);
                var InternalStateModule = __webpack_require__2(9909);
                var defineIterator = __webpack_require__2(654);
                var ARRAY_ITERATOR = "Array Iterator";
                var setInternalState = InternalStateModule.set;
                var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
                module2.exports = defineIterator(Array, "Array", function(iterated, kind) {
                  setInternalState(this, {
                    type: ARRAY_ITERATOR,
                    target: toIndexedObject(iterated),
                    // target
                    index: 0,
                    // next index
                    kind
                    // kind
                  });
                }, function() {
                  var state = getInternalState(this);
                  var target = state.target;
                  var kind = state.kind;
                  var index = state.index++;
                  if (!target || index >= target.length) {
                    state.target = void 0;
                    return { value: void 0, done: true };
                  }
                  if (kind == "keys")
                    return { value: index, done: false };
                  if (kind == "values")
                    return { value: target[index], done: false };
                  return { value: [index, target[index]], done: false };
                }, "values");
                Iterators.Arguments = Iterators.Array;
                addToUnscopables("keys");
                addToUnscopables("values");
                addToUnscopables("entries");
              }
            ),
            /***/
            1249: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var $ = __webpack_require__2(2109);
                var $map = __webpack_require__2(2092).map;
                var arrayMethodHasSpeciesSupport = __webpack_require__2(1194);
                var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("map");
                $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
                  map: function map(callbackfn) {
                    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              }
            ),
            /***/
            7042: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var $ = __webpack_require__2(2109);
                var isObject = __webpack_require__2(111);
                var isArray = __webpack_require__2(3157);
                var toAbsoluteIndex = __webpack_require__2(1400);
                var toLength = __webpack_require__2(7466);
                var toIndexedObject = __webpack_require__2(5656);
                var createProperty = __webpack_require__2(6135);
                var wellKnownSymbol = __webpack_require__2(5112);
                var arrayMethodHasSpeciesSupport = __webpack_require__2(1194);
                var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("slice");
                var SPECIES = wellKnownSymbol("species");
                var nativeSlice = [].slice;
                var max = Math.max;
                $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
                  slice: function slice(start, end) {
                    var O = toIndexedObject(this);
                    var length = toLength(O.length);
                    var k = toAbsoluteIndex(start, length);
                    var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
                    var Constructor, result, n;
                    if (isArray(O)) {
                      Constructor = O.constructor;
                      if (typeof Constructor == "function" && (Constructor === Array || isArray(Constructor.prototype))) {
                        Constructor = void 0;
                      } else if (isObject(Constructor)) {
                        Constructor = Constructor[SPECIES];
                        if (Constructor === null)
                          Constructor = void 0;
                      }
                      if (Constructor === Array || Constructor === void 0) {
                        return nativeSlice.call(O, k, fin);
                      }
                    }
                    result = new (Constructor === void 0 ? Array : Constructor)(max(fin - k, 0));
                    for (n = 0; k < fin; k++, n++)
                      if (k in O)
                        createProperty(result, n, O[k]);
                    result.length = n;
                    return result;
                  }
                });
              }
            ),
            /***/
            561: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var $ = __webpack_require__2(2109);
                var toAbsoluteIndex = __webpack_require__2(1400);
                var toInteger = __webpack_require__2(9958);
                var toLength = __webpack_require__2(7466);
                var toObject = __webpack_require__2(7908);
                var arraySpeciesCreate = __webpack_require__2(5417);
                var createProperty = __webpack_require__2(6135);
                var arrayMethodHasSpeciesSupport = __webpack_require__2(1194);
                var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("splice");
                var max = Math.max;
                var min = Math.min;
                var MAX_SAFE_INTEGER = 9007199254740991;
                var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = "Maximum allowed length exceeded";
                $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
                  splice: function splice(start, deleteCount) {
                    var O = toObject(this);
                    var len = toLength(O.length);
                    var actualStart = toAbsoluteIndex(start, len);
                    var argumentsLength = arguments.length;
                    var insertCount, actualDeleteCount, A, k, from, to;
                    if (argumentsLength === 0) {
                      insertCount = actualDeleteCount = 0;
                    } else if (argumentsLength === 1) {
                      insertCount = 0;
                      actualDeleteCount = len - actualStart;
                    } else {
                      insertCount = argumentsLength - 2;
                      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
                    }
                    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
                      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
                    }
                    A = arraySpeciesCreate(O, actualDeleteCount);
                    for (k = 0; k < actualDeleteCount; k++) {
                      from = actualStart + k;
                      if (from in O)
                        createProperty(A, k, O[from]);
                    }
                    A.length = actualDeleteCount;
                    if (insertCount < actualDeleteCount) {
                      for (k = actualStart; k < len - actualDeleteCount; k++) {
                        from = k + actualDeleteCount;
                        to = k + insertCount;
                        if (from in O)
                          O[to] = O[from];
                        else
                          delete O[to];
                      }
                      for (k = len; k > len - actualDeleteCount + insertCount; k--)
                        delete O[k - 1];
                    } else if (insertCount > actualDeleteCount) {
                      for (k = len - actualDeleteCount; k > actualStart; k--) {
                        from = k + actualDeleteCount - 1;
                        to = k + insertCount - 1;
                        if (from in O)
                          O[to] = O[from];
                        else
                          delete O[to];
                      }
                    }
                    for (k = 0; k < insertCount; k++) {
                      O[k + actualStart] = arguments[k + 2];
                    }
                    O.length = len - actualDeleteCount + insertCount;
                    return A;
                  }
                });
              }
            ),
            /***/
            8309: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                var DESCRIPTORS = __webpack_require__2(9781);
                var defineProperty = __webpack_require__2(3070).f;
                var FunctionPrototype = Function.prototype;
                var FunctionPrototypeToString = FunctionPrototype.toString;
                var nameRE = /^\s*function ([^ (]*)/;
                var NAME = "name";
                if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
                  defineProperty(FunctionPrototype, NAME, {
                    configurable: true,
                    get: function() {
                      try {
                        return FunctionPrototypeToString.call(this).match(nameRE)[1];
                      } catch (error) {
                        return "";
                      }
                    }
                  });
                }
              }
            ),
            /***/
            489: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                var $ = __webpack_require__2(2109);
                var fails = __webpack_require__2(7293);
                var toObject = __webpack_require__2(7908);
                var nativeGetPrototypeOf = __webpack_require__2(9518);
                var CORRECT_PROTOTYPE_GETTER = __webpack_require__2(8544);
                var FAILS_ON_PRIMITIVES = fails(function() {
                  nativeGetPrototypeOf(1);
                });
                $({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
                  getPrototypeOf: function getPrototypeOf(it) {
                    return nativeGetPrototypeOf(toObject(it));
                  }
                });
              }
            ),
            /***/
            1539: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                var TO_STRING_TAG_SUPPORT = __webpack_require__2(1694);
                var redefine = __webpack_require__2(1320);
                var toString = __webpack_require__2(288);
                if (!TO_STRING_TAG_SUPPORT) {
                  redefine(Object.prototype, "toString", toString, { unsafe: true });
                }
              }
            ),
            /***/
            4916: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var $ = __webpack_require__2(2109);
                var exec = __webpack_require__2(2261);
                $({ target: "RegExp", proto: true, forced: /./.exec !== exec }, {
                  exec
                });
              }
            ),
            /***/
            9714: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var redefine = __webpack_require__2(1320);
                var anObject = __webpack_require__2(9670);
                var fails = __webpack_require__2(7293);
                var flags = __webpack_require__2(7066);
                var TO_STRING = "toString";
                var RegExpPrototype = RegExp.prototype;
                var nativeToString = RegExpPrototype[TO_STRING];
                var NOT_GENERIC = fails(function() {
                  return nativeToString.call({ source: "a", flags: "b" }) != "/a/b";
                });
                var INCORRECT_NAME = nativeToString.name != TO_STRING;
                if (NOT_GENERIC || INCORRECT_NAME) {
                  redefine(RegExp.prototype, TO_STRING, function toString() {
                    var R = anObject(this);
                    var p = String(R.source);
                    var rf = R.flags;
                    var f = String(rf === void 0 && R instanceof RegExp && !("flags" in RegExpPrototype) ? flags.call(R) : rf);
                    return "/" + p + "/" + f;
                  }, { unsafe: true });
                }
              }
            ),
            /***/
            8783: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var charAt = __webpack_require__2(8710).charAt;
                var InternalStateModule = __webpack_require__2(9909);
                var defineIterator = __webpack_require__2(654);
                var STRING_ITERATOR = "String Iterator";
                var setInternalState = InternalStateModule.set;
                var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
                defineIterator(String, "String", function(iterated) {
                  setInternalState(this, {
                    type: STRING_ITERATOR,
                    string: String(iterated),
                    index: 0
                  });
                }, function next() {
                  var state = getInternalState(this);
                  var string = state.string;
                  var index = state.index;
                  var point;
                  if (index >= string.length)
                    return { value: void 0, done: true };
                  point = charAt(string, index);
                  state.index += point.length;
                  return { value: point, done: false };
                });
              }
            ),
            /***/
            4723: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var fixRegExpWellKnownSymbolLogic = __webpack_require__2(7007);
                var anObject = __webpack_require__2(9670);
                var toLength = __webpack_require__2(7466);
                var requireObjectCoercible = __webpack_require__2(4488);
                var advanceStringIndex = __webpack_require__2(1530);
                var regExpExec = __webpack_require__2(7651);
                fixRegExpWellKnownSymbolLogic("match", 1, function(MATCH, nativeMatch, maybeCallNative) {
                  return [
                    // `String.prototype.match` method
                    // https://tc39.es/ecma262/#sec-string.prototype.match
                    function match(regexp) {
                      var O = requireObjectCoercible(this);
                      var matcher = regexp == void 0 ? void 0 : regexp[MATCH];
                      return matcher !== void 0 ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
                    },
                    // `RegExp.prototype[@@match]` method
                    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
                    function(regexp) {
                      var res = maybeCallNative(nativeMatch, regexp, this);
                      if (res.done)
                        return res.value;
                      var rx = anObject(regexp);
                      var S = String(this);
                      if (!rx.global)
                        return regExpExec(rx, S);
                      var fullUnicode = rx.unicode;
                      rx.lastIndex = 0;
                      var A = [];
                      var n = 0;
                      var result;
                      while ((result = regExpExec(rx, S)) !== null) {
                        var matchStr = String(result[0]);
                        A[n] = matchStr;
                        if (matchStr === "")
                          rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                        n++;
                      }
                      return n === 0 ? null : A;
                    }
                  ];
                });
              }
            ),
            /***/
            5306: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var fixRegExpWellKnownSymbolLogic = __webpack_require__2(7007);
                var anObject = __webpack_require__2(9670);
                var toLength = __webpack_require__2(7466);
                var toInteger = __webpack_require__2(9958);
                var requireObjectCoercible = __webpack_require__2(4488);
                var advanceStringIndex = __webpack_require__2(1530);
                var getSubstitution = __webpack_require__2(647);
                var regExpExec = __webpack_require__2(7651);
                var max = Math.max;
                var min = Math.min;
                var maybeToString = function(it) {
                  return it === void 0 ? it : String(it);
                };
                fixRegExpWellKnownSymbolLogic("replace", 2, function(REPLACE, nativeReplace, maybeCallNative, reason) {
                  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
                  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
                  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
                  return [
                    // `String.prototype.replace` method
                    // https://tc39.es/ecma262/#sec-string.prototype.replace
                    function replace(searchValue, replaceValue) {
                      var O = requireObjectCoercible(this);
                      var replacer = searchValue == void 0 ? void 0 : searchValue[REPLACE];
                      return replacer !== void 0 ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
                    },
                    // `RegExp.prototype[@@replace]` method
                    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
                    function(regexp, replaceValue) {
                      if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === "string" && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
                        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
                        if (res.done)
                          return res.value;
                      }
                      var rx = anObject(regexp);
                      var S = String(this);
                      var functionalReplace = typeof replaceValue === "function";
                      if (!functionalReplace)
                        replaceValue = String(replaceValue);
                      var global = rx.global;
                      if (global) {
                        var fullUnicode = rx.unicode;
                        rx.lastIndex = 0;
                      }
                      var results = [];
                      while (true) {
                        var result = regExpExec(rx, S);
                        if (result === null)
                          break;
                        results.push(result);
                        if (!global)
                          break;
                        var matchStr = String(result[0]);
                        if (matchStr === "")
                          rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                      }
                      var accumulatedResult = "";
                      var nextSourcePosition = 0;
                      for (var i = 0; i < results.length; i++) {
                        result = results[i];
                        var matched = String(result[0]);
                        var position = max(min(toInteger(result.index), S.length), 0);
                        var captures = [];
                        for (var j = 1; j < result.length; j++)
                          captures.push(maybeToString(result[j]));
                        var namedCaptures = result.groups;
                        if (functionalReplace) {
                          var replacerArgs = [matched].concat(captures, position, S);
                          if (namedCaptures !== void 0)
                            replacerArgs.push(namedCaptures);
                          var replacement = String(replaceValue.apply(void 0, replacerArgs));
                        } else {
                          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                        }
                        if (position >= nextSourcePosition) {
                          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                          nextSourcePosition = position + matched.length;
                        }
                      }
                      return accumulatedResult + S.slice(nextSourcePosition);
                    }
                  ];
                });
              }
            ),
            /***/
            3123: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var fixRegExpWellKnownSymbolLogic = __webpack_require__2(7007);
                var isRegExp = __webpack_require__2(7850);
                var anObject = __webpack_require__2(9670);
                var requireObjectCoercible = __webpack_require__2(4488);
                var speciesConstructor = __webpack_require__2(6707);
                var advanceStringIndex = __webpack_require__2(1530);
                var toLength = __webpack_require__2(7466);
                var callRegExpExec = __webpack_require__2(7651);
                var regexpExec = __webpack_require__2(2261);
                var fails = __webpack_require__2(7293);
                var arrayPush = [].push;
                var min = Math.min;
                var MAX_UINT32 = 4294967295;
                var SUPPORTS_Y = !fails(function() {
                  return !RegExp(MAX_UINT32, "y");
                });
                fixRegExpWellKnownSymbolLogic("split", 2, function(SPLIT, nativeSplit, maybeCallNative) {
                  var internalSplit;
                  if ("abbc".split(/(b)*/)[1] == "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
                  "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
                  ".".split(/()()/).length > 1 || "".split(/.?/).length) {
                    internalSplit = function(separator, limit) {
                      var string = String(requireObjectCoercible(this));
                      var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
                      if (lim === 0)
                        return [];
                      if (separator === void 0)
                        return [string];
                      if (!isRegExp(separator)) {
                        return nativeSplit.call(string, separator, lim);
                      }
                      var output = [];
                      var flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.unicode ? "u" : "") + (separator.sticky ? "y" : "");
                      var lastLastIndex = 0;
                      var separatorCopy = new RegExp(separator.source, flags + "g");
                      var match, lastIndex, lastLength;
                      while (match = regexpExec.call(separatorCopy, string)) {
                        lastIndex = separatorCopy.lastIndex;
                        if (lastIndex > lastLastIndex) {
                          output.push(string.slice(lastLastIndex, match.index));
                          if (match.length > 1 && match.index < string.length)
                            arrayPush.apply(output, match.slice(1));
                          lastLength = match[0].length;
                          lastLastIndex = lastIndex;
                          if (output.length >= lim)
                            break;
                        }
                        if (separatorCopy.lastIndex === match.index)
                          separatorCopy.lastIndex++;
                      }
                      if (lastLastIndex === string.length) {
                        if (lastLength || !separatorCopy.test(""))
                          output.push("");
                      } else
                        output.push(string.slice(lastLastIndex));
                      return output.length > lim ? output.slice(0, lim) : output;
                    };
                  } else if ("0".split(void 0, 0).length) {
                    internalSplit = function(separator, limit) {
                      return separator === void 0 && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
                    };
                  } else
                    internalSplit = nativeSplit;
                  return [
                    // `String.prototype.split` method
                    // https://tc39.es/ecma262/#sec-string.prototype.split
                    function split(separator, limit) {
                      var O = requireObjectCoercible(this);
                      var splitter = separator == void 0 ? void 0 : separator[SPLIT];
                      return splitter !== void 0 ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
                    },
                    // `RegExp.prototype[@@split]` method
                    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
                    //
                    // NOTE: This cannot be properly polyfilled in engines that don't support
                    // the 'y' flag.
                    function(regexp, limit) {
                      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
                      if (res.done)
                        return res.value;
                      var rx = anObject(regexp);
                      var S = String(this);
                      var C = speciesConstructor(rx, RegExp);
                      var unicodeMatching = rx.unicode;
                      var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (SUPPORTS_Y ? "y" : "g");
                      var splitter = new C(SUPPORTS_Y ? rx : "^(?:" + rx.source + ")", flags);
                      var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
                      if (lim === 0)
                        return [];
                      if (S.length === 0)
                        return callRegExpExec(splitter, S) === null ? [S] : [];
                      var p = 0;
                      var q = 0;
                      var A = [];
                      while (q < S.length) {
                        splitter.lastIndex = SUPPORTS_Y ? q : 0;
                        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                        var e;
                        if (z === null || (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
                          q = advanceStringIndex(S, q, unicodeMatching);
                        } else {
                          A.push(S.slice(p, q));
                          if (A.length === lim)
                            return A;
                          for (var i = 1; i <= z.length - 1; i++) {
                            A.push(z[i]);
                            if (A.length === lim)
                              return A;
                          }
                          q = p = e;
                        }
                      }
                      A.push(S.slice(p));
                      return A;
                    }
                  ];
                }, !SUPPORTS_Y);
              }
            ),
            /***/
            3210: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var $ = __webpack_require__2(2109);
                var $trim = __webpack_require__2(3111).trim;
                var forcedStringTrimMethod = __webpack_require__2(6091);
                $({ target: "String", proto: true, forced: forcedStringTrimMethod("trim") }, {
                  trim: function trim() {
                    return $trim(this);
                  }
                });
              }
            ),
            /***/
            2990: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var $copyWithin = __webpack_require__2(1048);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                exportTypedArrayMethod("copyWithin", function copyWithin(target, start) {
                  return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : void 0);
                });
              }
            ),
            /***/
            8927: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var $every = __webpack_require__2(2092).every;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                exportTypedArrayMethod("every", function every(callbackfn) {
                  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            3105: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var $fill = __webpack_require__2(1285);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                exportTypedArrayMethod("fill", function fill(value) {
                  return $fill.apply(aTypedArray(this), arguments);
                });
              }
            ),
            /***/
            5035: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var $filter = __webpack_require__2(2092).filter;
                var fromSpeciesAndList = __webpack_require__2(3074);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                exportTypedArrayMethod("filter", function filter(callbackfn) {
                  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
                  return fromSpeciesAndList(this, list);
                });
              }
            ),
            /***/
            7174: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var $findIndex = __webpack_require__2(2092).findIndex;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                exportTypedArrayMethod("findIndex", function findIndex(predicate) {
                  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            4345: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var $find = __webpack_require__2(2092).find;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                exportTypedArrayMethod("find", function find(predicate) {
                  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            2846: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var $forEach = __webpack_require__2(2092).forEach;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                exportTypedArrayMethod("forEach", function forEach(callbackfn) {
                  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            4731: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var $includes = __webpack_require__2(1318).includes;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                exportTypedArrayMethod("includes", function includes(searchElement) {
                  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            7209: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var $indexOf = __webpack_require__2(1318).indexOf;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                exportTypedArrayMethod("indexOf", function indexOf(searchElement) {
                  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            6319: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var global = __webpack_require__2(7854);
                var ArrayBufferViewCore = __webpack_require__2(260);
                var ArrayIterators = __webpack_require__2(6992);
                var wellKnownSymbol = __webpack_require__2(5112);
                var ITERATOR = wellKnownSymbol("iterator");
                var Uint8Array2 = global.Uint8Array;
                var arrayValues = ArrayIterators.values;
                var arrayKeys = ArrayIterators.keys;
                var arrayEntries = ArrayIterators.entries;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                var nativeTypedArrayIterator = Uint8Array2 && Uint8Array2.prototype[ITERATOR];
                var CORRECT_ITER_NAME = !!nativeTypedArrayIterator && (nativeTypedArrayIterator.name == "values" || nativeTypedArrayIterator.name == void 0);
                var typedArrayValues = function values() {
                  return arrayValues.call(aTypedArray(this));
                };
                exportTypedArrayMethod("entries", function entries() {
                  return arrayEntries.call(aTypedArray(this));
                });
                exportTypedArrayMethod("keys", function keys() {
                  return arrayKeys.call(aTypedArray(this));
                });
                exportTypedArrayMethod("values", typedArrayValues, !CORRECT_ITER_NAME);
                exportTypedArrayMethod(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);
              }
            ),
            /***/
            8867: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                var $join = [].join;
                exportTypedArrayMethod("join", function join(separator) {
                  return $join.apply(aTypedArray(this), arguments);
                });
              }
            ),
            /***/
            7789: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var $lastIndexOf = __webpack_require__2(6583);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                exportTypedArrayMethod("lastIndexOf", function lastIndexOf(searchElement) {
                  return $lastIndexOf.apply(aTypedArray(this), arguments);
                });
              }
            ),
            /***/
            3739: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var $map = __webpack_require__2(2092).map;
                var speciesConstructor = __webpack_require__2(6707);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                exportTypedArrayMethod("map", function map(mapfn) {
                  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : void 0, function(O, length) {
                    return new (aTypedArrayConstructor(speciesConstructor(O, O.constructor)))(length);
                  });
                });
              }
            ),
            /***/
            4483: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var $reduceRight = __webpack_require__2(3671).right;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                exportTypedArrayMethod("reduceRight", function reduceRight(callbackfn) {
                  return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            9368: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var $reduce = __webpack_require__2(3671).left;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                exportTypedArrayMethod("reduce", function reduce(callbackfn) {
                  return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            2056: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                var floor = Math.floor;
                exportTypedArrayMethod("reverse", function reverse() {
                  var that = this;
                  var length = aTypedArray(that).length;
                  var middle = floor(length / 2);
                  var index = 0;
                  var value;
                  while (index < middle) {
                    value = that[index];
                    that[index++] = that[--length];
                    that[length] = value;
                  }
                  return that;
                });
              }
            ),
            /***/
            3462: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var toLength = __webpack_require__2(7466);
                var toOffset = __webpack_require__2(4590);
                var toObject = __webpack_require__2(7908);
                var fails = __webpack_require__2(7293);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                var FORCED = fails(function() {
                  new Int8Array(1).set({});
                });
                exportTypedArrayMethod("set", function set(arrayLike) {
                  aTypedArray(this);
                  var offset = toOffset(arguments.length > 1 ? arguments[1] : void 0, 1);
                  var length = this.length;
                  var src = toObject(arrayLike);
                  var len = toLength(src.length);
                  var index = 0;
                  if (len + offset > length)
                    throw RangeError("Wrong length");
                  while (index < len)
                    this[offset + index] = src[index++];
                }, FORCED);
              }
            ),
            /***/
            678: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var speciesConstructor = __webpack_require__2(6707);
                var fails = __webpack_require__2(7293);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                var $slice = [].slice;
                var FORCED = fails(function() {
                  new Int8Array(1).slice();
                });
                exportTypedArrayMethod("slice", function slice(start, end) {
                  var list = $slice.call(aTypedArray(this), start, end);
                  var C = speciesConstructor(this, this.constructor);
                  var index = 0;
                  var length = list.length;
                  var result = new (aTypedArrayConstructor(C))(length);
                  while (length > index)
                    result[index] = list[index++];
                  return result;
                }, FORCED);
              }
            ),
            /***/
            7462: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var $some = __webpack_require__2(2092).some;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                exportTypedArrayMethod("some", function some(callbackfn) {
                  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            3824: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                var $sort = [].sort;
                exportTypedArrayMethod("sort", function sort(comparefn) {
                  return $sort.call(aTypedArray(this), comparefn);
                });
              }
            ),
            /***/
            5021: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__2(260);
                var toLength = __webpack_require__2(7466);
                var toAbsoluteIndex = __webpack_require__2(1400);
                var speciesConstructor = __webpack_require__2(6707);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                exportTypedArrayMethod("subarray", function subarray(begin, end) {
                  var O = aTypedArray(this);
                  var length = O.length;
                  var beginIndex = toAbsoluteIndex(begin, length);
                  return new (speciesConstructor(O, O.constructor))(
                    O.buffer,
                    O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
                    toLength((end === void 0 ? length : toAbsoluteIndex(end, length)) - beginIndex)
                  );
                });
              }
            ),
            /***/
            2974: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var global = __webpack_require__2(7854);
                var ArrayBufferViewCore = __webpack_require__2(260);
                var fails = __webpack_require__2(7293);
                var Int8Array2 = global.Int8Array;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                var $toLocaleString = [].toLocaleString;
                var $slice = [].slice;
                var TO_LOCALE_STRING_BUG = !!Int8Array2 && fails(function() {
                  $toLocaleString.call(new Int8Array2(1));
                });
                var FORCED = fails(function() {
                  return [1, 2].toLocaleString() != new Int8Array2([1, 2]).toLocaleString();
                }) || !fails(function() {
                  Int8Array2.prototype.toLocaleString.call([1, 2]);
                });
                exportTypedArrayMethod("toLocaleString", function toLocaleString() {
                  return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
                }, FORCED);
              }
            ),
            /***/
            5016: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                var exportTypedArrayMethod = __webpack_require__2(260).exportTypedArrayMethod;
                var fails = __webpack_require__2(7293);
                var global = __webpack_require__2(7854);
                var Uint8Array2 = global.Uint8Array;
                var Uint8ArrayPrototype = Uint8Array2 && Uint8Array2.prototype || {};
                var arrayToString = [].toString;
                var arrayJoin = [].join;
                if (fails(function() {
                  arrayToString.call({});
                })) {
                  arrayToString = function toString() {
                    return arrayJoin.call(this);
                  };
                }
                var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;
                exportTypedArrayMethod("toString", arrayToString, IS_NOT_ARRAY_METHOD);
              }
            ),
            /***/
            2472: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                var createTypedArrayConstructor = __webpack_require__2(9843);
                createTypedArrayConstructor("Uint8", function(init) {
                  return function Uint8Array2(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                  };
                });
              }
            ),
            /***/
            4747: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                var global = __webpack_require__2(7854);
                var DOMIterables = __webpack_require__2(8324);
                var forEach = __webpack_require__2(8533);
                var createNonEnumerableProperty = __webpack_require__2(8880);
                for (var COLLECTION_NAME in DOMIterables) {
                  var Collection = global[COLLECTION_NAME];
                  var CollectionPrototype = Collection && Collection.prototype;
                  if (CollectionPrototype && CollectionPrototype.forEach !== forEach)
                    try {
                      createNonEnumerableProperty(CollectionPrototype, "forEach", forEach);
                    } catch (error) {
                      CollectionPrototype.forEach = forEach;
                    }
                }
              }
            ),
            /***/
            3948: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                var global = __webpack_require__2(7854);
                var DOMIterables = __webpack_require__2(8324);
                var ArrayIteratorMethods = __webpack_require__2(6992);
                var createNonEnumerableProperty = __webpack_require__2(8880);
                var wellKnownSymbol = __webpack_require__2(5112);
                var ITERATOR = wellKnownSymbol("iterator");
                var TO_STRING_TAG = wellKnownSymbol("toStringTag");
                var ArrayValues = ArrayIteratorMethods.values;
                for (var COLLECTION_NAME in DOMIterables) {
                  var Collection = global[COLLECTION_NAME];
                  var CollectionPrototype = Collection && Collection.prototype;
                  if (CollectionPrototype) {
                    if (CollectionPrototype[ITERATOR] !== ArrayValues)
                      try {
                        createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
                      } catch (error) {
                        CollectionPrototype[ITERATOR] = ArrayValues;
                      }
                    if (!CollectionPrototype[TO_STRING_TAG]) {
                      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
                    }
                    if (DOMIterables[COLLECTION_NAME])
                      for (var METHOD_NAME in ArrayIteratorMethods) {
                        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME])
                          try {
                            createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
                          } catch (error) {
                            CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
                          }
                      }
                  }
                }
              }
            ),
            /***/
            1637: (
              /***/
              function(module2, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                __webpack_require__2(6992);
                var $ = __webpack_require__2(2109);
                var getBuiltIn = __webpack_require__2(5005);
                var USE_NATIVE_URL = __webpack_require__2(590);
                var redefine = __webpack_require__2(1320);
                var redefineAll = __webpack_require__2(2248);
                var setToStringTag = __webpack_require__2(8003);
                var createIteratorConstructor = __webpack_require__2(4994);
                var InternalStateModule = __webpack_require__2(9909);
                var anInstance = __webpack_require__2(5787);
                var hasOwn = __webpack_require__2(6656);
                var bind = __webpack_require__2(9974);
                var classof = __webpack_require__2(648);
                var anObject = __webpack_require__2(9670);
                var isObject = __webpack_require__2(111);
                var create = __webpack_require__2(30);
                var createPropertyDescriptor = __webpack_require__2(9114);
                var getIterator = __webpack_require__2(8554);
                var getIteratorMethod = __webpack_require__2(1246);
                var wellKnownSymbol = __webpack_require__2(5112);
                var $fetch = getBuiltIn("fetch");
                var Headers = getBuiltIn("Headers");
                var ITERATOR = wellKnownSymbol("iterator");
                var URL_SEARCH_PARAMS = "URLSearchParams";
                var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + "Iterator";
                var setInternalState = InternalStateModule.set;
                var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
                var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
                var plus = /\+/g;
                var sequences = Array(4);
                var percentSequence = function(bytes) {
                  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp("((?:%[\\da-f]{2}){" + bytes + "})", "gi"));
                };
                var percentDecode = function(sequence) {
                  try {
                    return decodeURIComponent(sequence);
                  } catch (error) {
                    return sequence;
                  }
                };
                var deserialize = function(it) {
                  var result = it.replace(plus, " ");
                  var bytes = 4;
                  try {
                    return decodeURIComponent(result);
                  } catch (error) {
                    while (bytes) {
                      result = result.replace(percentSequence(bytes--), percentDecode);
                    }
                    return result;
                  }
                };
                var find = /[!'()~]|%20/g;
                var replace = {
                  "!": "%21",
                  "'": "%27",
                  "(": "%28",
                  ")": "%29",
                  "~": "%7E",
                  "%20": "+"
                };
                var replacer = function(match) {
                  return replace[match];
                };
                var serialize = function(it) {
                  return encodeURIComponent(it).replace(find, replacer);
                };
                var parseSearchParams = function(result, query) {
                  if (query) {
                    var attributes = query.split("&");
                    var index = 0;
                    var attribute, entry;
                    while (index < attributes.length) {
                      attribute = attributes[index++];
                      if (attribute.length) {
                        entry = attribute.split("=");
                        result.push({
                          key: deserialize(entry.shift()),
                          value: deserialize(entry.join("="))
                        });
                      }
                    }
                  }
                };
                var updateSearchParams = function(query) {
                  this.entries.length = 0;
                  parseSearchParams(this.entries, query);
                };
                var validateArgumentsLength = function(passed, required) {
                  if (passed < required)
                    throw TypeError("Not enough arguments");
                };
                var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
                  setInternalState(this, {
                    type: URL_SEARCH_PARAMS_ITERATOR,
                    iterator: getIterator(getInternalParamsState(params).entries),
                    kind
                  });
                }, "Iterator", function next() {
                  var state = getInternalIteratorState(this);
                  var kind = state.kind;
                  var step = state.iterator.next();
                  var entry = step.value;
                  if (!step.done) {
                    step.value = kind === "keys" ? entry.key : kind === "values" ? entry.value : [entry.key, entry.value];
                  }
                  return step;
                });
                var URLSearchParamsConstructor = function URLSearchParams2() {
                  anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
                  var init = arguments.length > 0 ? arguments[0] : void 0;
                  var that = this;
                  var entries = [];
                  var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;
                  setInternalState(that, {
                    type: URL_SEARCH_PARAMS,
                    entries,
                    updateURL: function() {
                    },
                    updateSearchParams
                  });
                  if (init !== void 0) {
                    if (isObject(init)) {
                      iteratorMethod = getIteratorMethod(init);
                      if (typeof iteratorMethod === "function") {
                        iterator = iteratorMethod.call(init);
                        next = iterator.next;
                        while (!(step = next.call(iterator)).done) {
                          entryIterator = getIterator(anObject(step.value));
                          entryNext = entryIterator.next;
                          if ((first = entryNext.call(entryIterator)).done || (second = entryNext.call(entryIterator)).done || !entryNext.call(entryIterator).done)
                            throw TypeError("Expected sequence with length 2");
                          entries.push({ key: first.value + "", value: second.value + "" });
                        }
                      } else
                        for (key in init)
                          if (hasOwn(init, key))
                            entries.push({ key, value: init[key] + "" });
                    } else {
                      parseSearchParams(entries, typeof init === "string" ? init.charAt(0) === "?" ? init.slice(1) : init : init + "");
                    }
                  }
                };
                var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
                redefineAll(URLSearchParamsPrototype, {
                  // `URLSearchParams.prototype.append` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
                  append: function append(name, value) {
                    validateArgumentsLength(arguments.length, 2);
                    var state = getInternalParamsState(this);
                    state.entries.push({ key: name + "", value: value + "" });
                    state.updateURL();
                  },
                  // `URLSearchParams.prototype.delete` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
                  "delete": function(name) {
                    validateArgumentsLength(arguments.length, 1);
                    var state = getInternalParamsState(this);
                    var entries = state.entries;
                    var key = name + "";
                    var index = 0;
                    while (index < entries.length) {
                      if (entries[index].key === key)
                        entries.splice(index, 1);
                      else
                        index++;
                    }
                    state.updateURL();
                  },
                  // `URLSearchParams.prototype.get` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
                  get: function get(name) {
                    validateArgumentsLength(arguments.length, 1);
                    var entries = getInternalParamsState(this).entries;
                    var key = name + "";
                    var index = 0;
                    for (; index < entries.length; index++) {
                      if (entries[index].key === key)
                        return entries[index].value;
                    }
                    return null;
                  },
                  // `URLSearchParams.prototype.getAll` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
                  getAll: function getAll(name) {
                    validateArgumentsLength(arguments.length, 1);
                    var entries = getInternalParamsState(this).entries;
                    var key = name + "";
                    var result = [];
                    var index = 0;
                    for (; index < entries.length; index++) {
                      if (entries[index].key === key)
                        result.push(entries[index].value);
                    }
                    return result;
                  },
                  // `URLSearchParams.prototype.has` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
                  has: function has(name) {
                    validateArgumentsLength(arguments.length, 1);
                    var entries = getInternalParamsState(this).entries;
                    var key = name + "";
                    var index = 0;
                    while (index < entries.length) {
                      if (entries[index++].key === key)
                        return true;
                    }
                    return false;
                  },
                  // `URLSearchParams.prototype.set` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
                  set: function set(name, value) {
                    validateArgumentsLength(arguments.length, 1);
                    var state = getInternalParamsState(this);
                    var entries = state.entries;
                    var found = false;
                    var key = name + "";
                    var val = value + "";
                    var index = 0;
                    var entry;
                    for (; index < entries.length; index++) {
                      entry = entries[index];
                      if (entry.key === key) {
                        if (found)
                          entries.splice(index--, 1);
                        else {
                          found = true;
                          entry.value = val;
                        }
                      }
                    }
                    if (!found)
                      entries.push({ key, value: val });
                    state.updateURL();
                  },
                  // `URLSearchParams.prototype.sort` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
                  sort: function sort() {
                    var state = getInternalParamsState(this);
                    var entries = state.entries;
                    var slice = entries.slice();
                    var entry, entriesIndex, sliceIndex;
                    entries.length = 0;
                    for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
                      entry = slice[sliceIndex];
                      for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
                        if (entries[entriesIndex].key > entry.key) {
                          entries.splice(entriesIndex, 0, entry);
                          break;
                        }
                      }
                      if (entriesIndex === sliceIndex)
                        entries.push(entry);
                    }
                    state.updateURL();
                  },
                  // `URLSearchParams.prototype.forEach` method
                  forEach: function forEach(callback) {
                    var entries = getInternalParamsState(this).entries;
                    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : void 0, 3);
                    var index = 0;
                    var entry;
                    while (index < entries.length) {
                      entry = entries[index++];
                      boundFunction(entry.value, entry.key, this);
                    }
                  },
                  // `URLSearchParams.prototype.keys` method
                  keys: function keys() {
                    return new URLSearchParamsIterator(this, "keys");
                  },
                  // `URLSearchParams.prototype.values` method
                  values: function values() {
                    return new URLSearchParamsIterator(this, "values");
                  },
                  // `URLSearchParams.prototype.entries` method
                  entries: function entries() {
                    return new URLSearchParamsIterator(this, "entries");
                  }
                }, { enumerable: true });
                redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);
                redefine(URLSearchParamsPrototype, "toString", function toString() {
                  var entries = getInternalParamsState(this).entries;
                  var result = [];
                  var index = 0;
                  var entry;
                  while (index < entries.length) {
                    entry = entries[index++];
                    result.push(serialize(entry.key) + "=" + serialize(entry.value));
                  }
                  return result.join("&");
                }, { enumerable: true });
                setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
                $({ global: true, forced: !USE_NATIVE_URL }, {
                  URLSearchParams: URLSearchParamsConstructor
                });
                if (!USE_NATIVE_URL && typeof $fetch == "function" && typeof Headers == "function") {
                  $({ global: true, enumerable: true, forced: true }, {
                    fetch: function fetch(input) {
                      var args = [input];
                      var init, body, headers;
                      if (arguments.length > 1) {
                        init = arguments[1];
                        if (isObject(init)) {
                          body = init.body;
                          if (classof(body) === URL_SEARCH_PARAMS) {
                            headers = init.headers ? new Headers(init.headers) : new Headers();
                            if (!headers.has("content-type")) {
                              headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                            }
                            init = create(init, {
                              body: createPropertyDescriptor(0, String(body)),
                              headers: createPropertyDescriptor(0, headers)
                            });
                          }
                        }
                        args.push(init);
                      }
                      return $fetch.apply(this, args);
                    }
                  });
                }
                module2.exports = {
                  URLSearchParams: URLSearchParamsConstructor,
                  getState: getInternalParamsState
                };
              }
            ),
            /***/
            285: (
              /***/
              function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
                "use strict";
                __webpack_require__2(8783);
                var $ = __webpack_require__2(2109);
                var DESCRIPTORS = __webpack_require__2(9781);
                var USE_NATIVE_URL = __webpack_require__2(590);
                var global = __webpack_require__2(7854);
                var defineProperties = __webpack_require__2(6048);
                var redefine = __webpack_require__2(1320);
                var anInstance = __webpack_require__2(5787);
                var has = __webpack_require__2(6656);
                var assign = __webpack_require__2(1574);
                var arrayFrom = __webpack_require__2(8457);
                var codeAt = __webpack_require__2(8710).codeAt;
                var toASCII = __webpack_require__2(3197);
                var setToStringTag = __webpack_require__2(8003);
                var URLSearchParamsModule = __webpack_require__2(1637);
                var InternalStateModule = __webpack_require__2(9909);
                var NativeURL = global.URL;
                var URLSearchParams2 = URLSearchParamsModule.URLSearchParams;
                var getInternalSearchParamsState = URLSearchParamsModule.getState;
                var setInternalState = InternalStateModule.set;
                var getInternalURLState = InternalStateModule.getterFor("URL");
                var floor = Math.floor;
                var pow = Math.pow;
                var INVALID_AUTHORITY = "Invalid authority";
                var INVALID_SCHEME = "Invalid scheme";
                var INVALID_HOST = "Invalid host";
                var INVALID_PORT = "Invalid port";
                var ALPHA = /[A-Za-z]/;
                var ALPHANUMERIC = /[\d+-.A-Za-z]/;
                var DIGIT = /\d/;
                var HEX_START = /^(0x|0X)/;
                var OCT = /^[0-7]+$/;
                var DEC = /^\d+$/;
                var HEX = /^[\dA-Fa-f]+$/;
                var FORBIDDEN_HOST_CODE_POINT = /[\u0000\t\u000A\u000D #%/:?@[\\]]/;
                var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\t\u000A\u000D #/:?@[\\]]/;
                var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
                var TAB_AND_NEW_LINE = /[\t\u000A\u000D]/g;
                var EOF;
                var parseHost = function(url, input) {
                  var result, codePoints, index;
                  if (input.charAt(0) == "[") {
                    if (input.charAt(input.length - 1) != "]")
                      return INVALID_HOST;
                    result = parseIPv6(input.slice(1, -1));
                    if (!result)
                      return INVALID_HOST;
                    url.host = result;
                  } else if (!isSpecial(url)) {
                    if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input))
                      return INVALID_HOST;
                    result = "";
                    codePoints = arrayFrom(input);
                    for (index = 0; index < codePoints.length; index++) {
                      result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
                    }
                    url.host = result;
                  } else {
                    input = toASCII(input);
                    if (FORBIDDEN_HOST_CODE_POINT.test(input))
                      return INVALID_HOST;
                    result = parseIPv4(input);
                    if (result === null)
                      return INVALID_HOST;
                    url.host = result;
                  }
                };
                var parseIPv4 = function(input) {
                  var parts = input.split(".");
                  var partsLength, numbers, index, part, radix, number, ipv4;
                  if (parts.length && parts[parts.length - 1] == "") {
                    parts.pop();
                  }
                  partsLength = parts.length;
                  if (partsLength > 4)
                    return input;
                  numbers = [];
                  for (index = 0; index < partsLength; index++) {
                    part = parts[index];
                    if (part == "")
                      return input;
                    radix = 10;
                    if (part.length > 1 && part.charAt(0) == "0") {
                      radix = HEX_START.test(part) ? 16 : 8;
                      part = part.slice(radix == 8 ? 1 : 2);
                    }
                    if (part === "") {
                      number = 0;
                    } else {
                      if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part))
                        return input;
                      number = parseInt(part, radix);
                    }
                    numbers.push(number);
                  }
                  for (index = 0; index < partsLength; index++) {
                    number = numbers[index];
                    if (index == partsLength - 1) {
                      if (number >= pow(256, 5 - partsLength))
                        return null;
                    } else if (number > 255)
                      return null;
                  }
                  ipv4 = numbers.pop();
                  for (index = 0; index < numbers.length; index++) {
                    ipv4 += numbers[index] * pow(256, 3 - index);
                  }
                  return ipv4;
                };
                var parseIPv6 = function(input) {
                  var address = [0, 0, 0, 0, 0, 0, 0, 0];
                  var pieceIndex = 0;
                  var compress = null;
                  var pointer = 0;
                  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
                  var char = function() {
                    return input.charAt(pointer);
                  };
                  if (char() == ":") {
                    if (input.charAt(1) != ":")
                      return;
                    pointer += 2;
                    pieceIndex++;
                    compress = pieceIndex;
                  }
                  while (char()) {
                    if (pieceIndex == 8)
                      return;
                    if (char() == ":") {
                      if (compress !== null)
                        return;
                      pointer++;
                      pieceIndex++;
                      compress = pieceIndex;
                      continue;
                    }
                    value = length = 0;
                    while (length < 4 && HEX.test(char())) {
                      value = value * 16 + parseInt(char(), 16);
                      pointer++;
                      length++;
                    }
                    if (char() == ".") {
                      if (length == 0)
                        return;
                      pointer -= length;
                      if (pieceIndex > 6)
                        return;
                      numbersSeen = 0;
                      while (char()) {
                        ipv4Piece = null;
                        if (numbersSeen > 0) {
                          if (char() == "." && numbersSeen < 4)
                            pointer++;
                          else
                            return;
                        }
                        if (!DIGIT.test(char()))
                          return;
                        while (DIGIT.test(char())) {
                          number = parseInt(char(), 10);
                          if (ipv4Piece === null)
                            ipv4Piece = number;
                          else if (ipv4Piece == 0)
                            return;
                          else
                            ipv4Piece = ipv4Piece * 10 + number;
                          if (ipv4Piece > 255)
                            return;
                          pointer++;
                        }
                        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
                        numbersSeen++;
                        if (numbersSeen == 2 || numbersSeen == 4)
                          pieceIndex++;
                      }
                      if (numbersSeen != 4)
                        return;
                      break;
                    } else if (char() == ":") {
                      pointer++;
                      if (!char())
                        return;
                    } else if (char())
                      return;
                    address[pieceIndex++] = value;
                  }
                  if (compress !== null) {
                    swaps = pieceIndex - compress;
                    pieceIndex = 7;
                    while (pieceIndex != 0 && swaps > 0) {
                      swap = address[pieceIndex];
                      address[pieceIndex--] = address[compress + swaps - 1];
                      address[compress + --swaps] = swap;
                    }
                  } else if (pieceIndex != 8)
                    return;
                  return address;
                };
                var findLongestZeroSequence = function(ipv6) {
                  var maxIndex = null;
                  var maxLength = 1;
                  var currStart = null;
                  var currLength = 0;
                  var index = 0;
                  for (; index < 8; index++) {
                    if (ipv6[index] !== 0) {
                      if (currLength > maxLength) {
                        maxIndex = currStart;
                        maxLength = currLength;
                      }
                      currStart = null;
                      currLength = 0;
                    } else {
                      if (currStart === null)
                        currStart = index;
                      ++currLength;
                    }
                  }
                  if (currLength > maxLength) {
                    maxIndex = currStart;
                    maxLength = currLength;
                  }
                  return maxIndex;
                };
                var serializeHost = function(host) {
                  var result, index, compress, ignore0;
                  if (typeof host == "number") {
                    result = [];
                    for (index = 0; index < 4; index++) {
                      result.unshift(host % 256);
                      host = floor(host / 256);
                    }
                    return result.join(".");
                  } else if (typeof host == "object") {
                    result = "";
                    compress = findLongestZeroSequence(host);
                    for (index = 0; index < 8; index++) {
                      if (ignore0 && host[index] === 0)
                        continue;
                      if (ignore0)
                        ignore0 = false;
                      if (compress === index) {
                        result += index ? ":" : "::";
                        ignore0 = true;
                      } else {
                        result += host[index].toString(16);
                        if (index < 7)
                          result += ":";
                      }
                    }
                    return "[" + result + "]";
                  }
                  return host;
                };
                var C0ControlPercentEncodeSet = {};
                var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
                  " ": 1,
                  '"': 1,
                  "<": 1,
                  ">": 1,
                  "`": 1
                });
                var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
                  "#": 1,
                  "?": 1,
                  "{": 1,
                  "}": 1
                });
                var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
                  "/": 1,
                  ":": 1,
                  ";": 1,
                  "=": 1,
                  "@": 1,
                  "[": 1,
                  "\\": 1,
                  "]": 1,
                  "^": 1,
                  "|": 1
                });
                var percentEncode = function(char, set) {
                  var code = codeAt(char, 0);
                  return code > 32 && code < 127 && !has(set, char) ? char : encodeURIComponent(char);
                };
                var specialSchemes = {
                  ftp: 21,
                  file: null,
                  http: 80,
                  https: 443,
                  ws: 80,
                  wss: 443
                };
                var isSpecial = function(url) {
                  return has(specialSchemes, url.scheme);
                };
                var includesCredentials = function(url) {
                  return url.username != "" || url.password != "";
                };
                var cannotHaveUsernamePasswordPort = function(url) {
                  return !url.host || url.cannotBeABaseURL || url.scheme == "file";
                };
                var isWindowsDriveLetter = function(string, normalized) {
                  var second;
                  return string.length == 2 && ALPHA.test(string.charAt(0)) && ((second = string.charAt(1)) == ":" || !normalized && second == "|");
                };
                var startsWithWindowsDriveLetter = function(string) {
                  var third;
                  return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (string.length == 2 || ((third = string.charAt(2)) === "/" || third === "\\" || third === "?" || third === "#"));
                };
                var shortenURLsPath = function(url) {
                  var path = url.path;
                  var pathSize = path.length;
                  if (pathSize && (url.scheme != "file" || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
                    path.pop();
                  }
                };
                var isSingleDot = function(segment) {
                  return segment === "." || segment.toLowerCase() === "%2e";
                };
                var isDoubleDot = function(segment) {
                  segment = segment.toLowerCase();
                  return segment === ".." || segment === "%2e." || segment === ".%2e" || segment === "%2e%2e";
                };
                var SCHEME_START = {};
                var SCHEME = {};
                var NO_SCHEME = {};
                var SPECIAL_RELATIVE_OR_AUTHORITY = {};
                var PATH_OR_AUTHORITY = {};
                var RELATIVE = {};
                var RELATIVE_SLASH = {};
                var SPECIAL_AUTHORITY_SLASHES = {};
                var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
                var AUTHORITY = {};
                var HOST = {};
                var HOSTNAME = {};
                var PORT = {};
                var FILE = {};
                var FILE_SLASH = {};
                var FILE_HOST = {};
                var PATH_START = {};
                var PATH = {};
                var CANNOT_BE_A_BASE_URL_PATH = {};
                var QUERY = {};
                var FRAGMENT = {};
                var parseURL = function(url, input, stateOverride, base) {
                  var state = stateOverride || SCHEME_START;
                  var pointer = 0;
                  var buffer = "";
                  var seenAt = false;
                  var seenBracket = false;
                  var seenPasswordToken = false;
                  var codePoints, char, bufferCodePoints, failure;
                  if (!stateOverride) {
                    url.scheme = "";
                    url.username = "";
                    url.password = "";
                    url.host = null;
                    url.port = null;
                    url.path = [];
                    url.query = null;
                    url.fragment = null;
                    url.cannotBeABaseURL = false;
                    input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, "");
                  }
                  input = input.replace(TAB_AND_NEW_LINE, "");
                  codePoints = arrayFrom(input);
                  while (pointer <= codePoints.length) {
                    char = codePoints[pointer];
                    switch (state) {
                      case SCHEME_START:
                        if (char && ALPHA.test(char)) {
                          buffer += char.toLowerCase();
                          state = SCHEME;
                        } else if (!stateOverride) {
                          state = NO_SCHEME;
                          continue;
                        } else
                          return INVALID_SCHEME;
                        break;
                      case SCHEME:
                        if (char && (ALPHANUMERIC.test(char) || char == "+" || char == "-" || char == ".")) {
                          buffer += char.toLowerCase();
                        } else if (char == ":") {
                          if (stateOverride && (isSpecial(url) != has(specialSchemes, buffer) || buffer == "file" && (includesCredentials(url) || url.port !== null) || url.scheme == "file" && !url.host))
                            return;
                          url.scheme = buffer;
                          if (stateOverride) {
                            if (isSpecial(url) && specialSchemes[url.scheme] == url.port)
                              url.port = null;
                            return;
                          }
                          buffer = "";
                          if (url.scheme == "file") {
                            state = FILE;
                          } else if (isSpecial(url) && base && base.scheme == url.scheme) {
                            state = SPECIAL_RELATIVE_OR_AUTHORITY;
                          } else if (isSpecial(url)) {
                            state = SPECIAL_AUTHORITY_SLASHES;
                          } else if (codePoints[pointer + 1] == "/") {
                            state = PATH_OR_AUTHORITY;
                            pointer++;
                          } else {
                            url.cannotBeABaseURL = true;
                            url.path.push("");
                            state = CANNOT_BE_A_BASE_URL_PATH;
                          }
                        } else if (!stateOverride) {
                          buffer = "";
                          state = NO_SCHEME;
                          pointer = 0;
                          continue;
                        } else
                          return INVALID_SCHEME;
                        break;
                      case NO_SCHEME:
                        if (!base || base.cannotBeABaseURL && char != "#")
                          return INVALID_SCHEME;
                        if (base.cannotBeABaseURL && char == "#") {
                          url.scheme = base.scheme;
                          url.path = base.path.slice();
                          url.query = base.query;
                          url.fragment = "";
                          url.cannotBeABaseURL = true;
                          state = FRAGMENT;
                          break;
                        }
                        state = base.scheme == "file" ? FILE : RELATIVE;
                        continue;
                      case SPECIAL_RELATIVE_OR_AUTHORITY:
                        if (char == "/" && codePoints[pointer + 1] == "/") {
                          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                          pointer++;
                        } else {
                          state = RELATIVE;
                          continue;
                        }
                        break;
                      case PATH_OR_AUTHORITY:
                        if (char == "/") {
                          state = AUTHORITY;
                          break;
                        } else {
                          state = PATH;
                          continue;
                        }
                      case RELATIVE:
                        url.scheme = base.scheme;
                        if (char == EOF) {
                          url.username = base.username;
                          url.password = base.password;
                          url.host = base.host;
                          url.port = base.port;
                          url.path = base.path.slice();
                          url.query = base.query;
                        } else if (char == "/" || char == "\\" && isSpecial(url)) {
                          state = RELATIVE_SLASH;
                        } else if (char == "?") {
                          url.username = base.username;
                          url.password = base.password;
                          url.host = base.host;
                          url.port = base.port;
                          url.path = base.path.slice();
                          url.query = "";
                          state = QUERY;
                        } else if (char == "#") {
                          url.username = base.username;
                          url.password = base.password;
                          url.host = base.host;
                          url.port = base.port;
                          url.path = base.path.slice();
                          url.query = base.query;
                          url.fragment = "";
                          state = FRAGMENT;
                        } else {
                          url.username = base.username;
                          url.password = base.password;
                          url.host = base.host;
                          url.port = base.port;
                          url.path = base.path.slice();
                          url.path.pop();
                          state = PATH;
                          continue;
                        }
                        break;
                      case RELATIVE_SLASH:
                        if (isSpecial(url) && (char == "/" || char == "\\")) {
                          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                        } else if (char == "/") {
                          state = AUTHORITY;
                        } else {
                          url.username = base.username;
                          url.password = base.password;
                          url.host = base.host;
                          url.port = base.port;
                          state = PATH;
                          continue;
                        }
                        break;
                      case SPECIAL_AUTHORITY_SLASHES:
                        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                        if (char != "/" || buffer.charAt(pointer + 1) != "/")
                          continue;
                        pointer++;
                        break;
                      case SPECIAL_AUTHORITY_IGNORE_SLASHES:
                        if (char != "/" && char != "\\") {
                          state = AUTHORITY;
                          continue;
                        }
                        break;
                      case AUTHORITY:
                        if (char == "@") {
                          if (seenAt)
                            buffer = "%40" + buffer;
                          seenAt = true;
                          bufferCodePoints = arrayFrom(buffer);
                          for (var i = 0; i < bufferCodePoints.length; i++) {
                            var codePoint = bufferCodePoints[i];
                            if (codePoint == ":" && !seenPasswordToken) {
                              seenPasswordToken = true;
                              continue;
                            }
                            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                            if (seenPasswordToken)
                              url.password += encodedCodePoints;
                            else
                              url.username += encodedCodePoints;
                          }
                          buffer = "";
                        } else if (char == EOF || char == "/" || char == "?" || char == "#" || char == "\\" && isSpecial(url)) {
                          if (seenAt && buffer == "")
                            return INVALID_AUTHORITY;
                          pointer -= arrayFrom(buffer).length + 1;
                          buffer = "";
                          state = HOST;
                        } else
                          buffer += char;
                        break;
                      case HOST:
                      case HOSTNAME:
                        if (stateOverride && url.scheme == "file") {
                          state = FILE_HOST;
                          continue;
                        } else if (char == ":" && !seenBracket) {
                          if (buffer == "")
                            return INVALID_HOST;
                          failure = parseHost(url, buffer);
                          if (failure)
                            return failure;
                          buffer = "";
                          state = PORT;
                          if (stateOverride == HOSTNAME)
                            return;
                        } else if (char == EOF || char == "/" || char == "?" || char == "#" || char == "\\" && isSpecial(url)) {
                          if (isSpecial(url) && buffer == "")
                            return INVALID_HOST;
                          if (stateOverride && buffer == "" && (includesCredentials(url) || url.port !== null))
                            return;
                          failure = parseHost(url, buffer);
                          if (failure)
                            return failure;
                          buffer = "";
                          state = PATH_START;
                          if (stateOverride)
                            return;
                          continue;
                        } else {
                          if (char == "[")
                            seenBracket = true;
                          else if (char == "]")
                            seenBracket = false;
                          buffer += char;
                        }
                        break;
                      case PORT:
                        if (DIGIT.test(char)) {
                          buffer += char;
                        } else if (char == EOF || char == "/" || char == "?" || char == "#" || char == "\\" && isSpecial(url) || stateOverride) {
                          if (buffer != "") {
                            var port = parseInt(buffer, 10);
                            if (port > 65535)
                              return INVALID_PORT;
                            url.port = isSpecial(url) && port === specialSchemes[url.scheme] ? null : port;
                            buffer = "";
                          }
                          if (stateOverride)
                            return;
                          state = PATH_START;
                          continue;
                        } else
                          return INVALID_PORT;
                        break;
                      case FILE:
                        url.scheme = "file";
                        if (char == "/" || char == "\\")
                          state = FILE_SLASH;
                        else if (base && base.scheme == "file") {
                          if (char == EOF) {
                            url.host = base.host;
                            url.path = base.path.slice();
                            url.query = base.query;
                          } else if (char == "?") {
                            url.host = base.host;
                            url.path = base.path.slice();
                            url.query = "";
                            state = QUERY;
                          } else if (char == "#") {
                            url.host = base.host;
                            url.path = base.path.slice();
                            url.query = base.query;
                            url.fragment = "";
                            state = FRAGMENT;
                          } else {
                            if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(""))) {
                              url.host = base.host;
                              url.path = base.path.slice();
                              shortenURLsPath(url);
                            }
                            state = PATH;
                            continue;
                          }
                        } else {
                          state = PATH;
                          continue;
                        }
                        break;
                      case FILE_SLASH:
                        if (char == "/" || char == "\\") {
                          state = FILE_HOST;
                          break;
                        }
                        if (base && base.scheme == "file" && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(""))) {
                          if (isWindowsDriveLetter(base.path[0], true))
                            url.path.push(base.path[0]);
                          else
                            url.host = base.host;
                        }
                        state = PATH;
                        continue;
                      case FILE_HOST:
                        if (char == EOF || char == "/" || char == "\\" || char == "?" || char == "#") {
                          if (!stateOverride && isWindowsDriveLetter(buffer)) {
                            state = PATH;
                          } else if (buffer == "") {
                            url.host = "";
                            if (stateOverride)
                              return;
                            state = PATH_START;
                          } else {
                            failure = parseHost(url, buffer);
                            if (failure)
                              return failure;
                            if (url.host == "localhost")
                              url.host = "";
                            if (stateOverride)
                              return;
                            buffer = "";
                            state = PATH_START;
                          }
                          continue;
                        } else
                          buffer += char;
                        break;
                      case PATH_START:
                        if (isSpecial(url)) {
                          state = PATH;
                          if (char != "/" && char != "\\")
                            continue;
                        } else if (!stateOverride && char == "?") {
                          url.query = "";
                          state = QUERY;
                        } else if (!stateOverride && char == "#") {
                          url.fragment = "";
                          state = FRAGMENT;
                        } else if (char != EOF) {
                          state = PATH;
                          if (char != "/")
                            continue;
                        }
                        break;
                      case PATH:
                        if (char == EOF || char == "/" || char == "\\" && isSpecial(url) || !stateOverride && (char == "?" || char == "#")) {
                          if (isDoubleDot(buffer)) {
                            shortenURLsPath(url);
                            if (char != "/" && !(char == "\\" && isSpecial(url))) {
                              url.path.push("");
                            }
                          } else if (isSingleDot(buffer)) {
                            if (char != "/" && !(char == "\\" && isSpecial(url))) {
                              url.path.push("");
                            }
                          } else {
                            if (url.scheme == "file" && !url.path.length && isWindowsDriveLetter(buffer)) {
                              if (url.host)
                                url.host = "";
                              buffer = buffer.charAt(0) + ":";
                            }
                            url.path.push(buffer);
                          }
                          buffer = "";
                          if (url.scheme == "file" && (char == EOF || char == "?" || char == "#")) {
                            while (url.path.length > 1 && url.path[0] === "") {
                              url.path.shift();
                            }
                          }
                          if (char == "?") {
                            url.query = "";
                            state = QUERY;
                          } else if (char == "#") {
                            url.fragment = "";
                            state = FRAGMENT;
                          }
                        } else {
                          buffer += percentEncode(char, pathPercentEncodeSet);
                        }
                        break;
                      case CANNOT_BE_A_BASE_URL_PATH:
                        if (char == "?") {
                          url.query = "";
                          state = QUERY;
                        } else if (char == "#") {
                          url.fragment = "";
                          state = FRAGMENT;
                        } else if (char != EOF) {
                          url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
                        }
                        break;
                      case QUERY:
                        if (!stateOverride && char == "#") {
                          url.fragment = "";
                          state = FRAGMENT;
                        } else if (char != EOF) {
                          if (char == "'" && isSpecial(url))
                            url.query += "%27";
                          else if (char == "#")
                            url.query += "%23";
                          else
                            url.query += percentEncode(char, C0ControlPercentEncodeSet);
                        }
                        break;
                      case FRAGMENT:
                        if (char != EOF)
                          url.fragment += percentEncode(char, fragmentPercentEncodeSet);
                        break;
                    }
                    pointer++;
                  }
                };
                var URLConstructor = function URL2(url) {
                  var that = anInstance(this, URLConstructor, "URL");
                  var base = arguments.length > 1 ? arguments[1] : void 0;
                  var urlString = String(url);
                  var state = setInternalState(that, { type: "URL" });
                  var baseState, failure;
                  if (base !== void 0) {
                    if (base instanceof URLConstructor)
                      baseState = getInternalURLState(base);
                    else {
                      failure = parseURL(baseState = {}, String(base));
                      if (failure)
                        throw TypeError(failure);
                    }
                  }
                  failure = parseURL(state, urlString, null, baseState);
                  if (failure)
                    throw TypeError(failure);
                  var searchParams = state.searchParams = new URLSearchParams2();
                  var searchParamsState = getInternalSearchParamsState(searchParams);
                  searchParamsState.updateSearchParams(state.query);
                  searchParamsState.updateURL = function() {
                    state.query = String(searchParams) || null;
                  };
                  if (!DESCRIPTORS) {
                    that.href = serializeURL.call(that);
                    that.origin = getOrigin.call(that);
                    that.protocol = getProtocol.call(that);
                    that.username = getUsername.call(that);
                    that.password = getPassword.call(that);
                    that.host = getHost.call(that);
                    that.hostname = getHostname.call(that);
                    that.port = getPort.call(that);
                    that.pathname = getPathname.call(that);
                    that.search = getSearch.call(that);
                    that.searchParams = getSearchParams.call(that);
                    that.hash = getHash.call(that);
                  }
                };
                var URLPrototype = URLConstructor.prototype;
                var serializeURL = function() {
                  var url = getInternalURLState(this);
                  var scheme = url.scheme;
                  var username = url.username;
                  var password = url.password;
                  var host = url.host;
                  var port = url.port;
                  var path = url.path;
                  var query = url.query;
                  var fragment = url.fragment;
                  var output = scheme + ":";
                  if (host !== null) {
                    output += "//";
                    if (includesCredentials(url)) {
                      output += username + (password ? ":" + password : "") + "@";
                    }
                    output += serializeHost(host);
                    if (port !== null)
                      output += ":" + port;
                  } else if (scheme == "file")
                    output += "//";
                  output += url.cannotBeABaseURL ? path[0] : path.length ? "/" + path.join("/") : "";
                  if (query !== null)
                    output += "?" + query;
                  if (fragment !== null)
                    output += "#" + fragment;
                  return output;
                };
                var getOrigin = function() {
                  var url = getInternalURLState(this);
                  var scheme = url.scheme;
                  var port = url.port;
                  if (scheme == "blob")
                    try {
                      return new URL(scheme.path[0]).origin;
                    } catch (error) {
                      return "null";
                    }
                  if (scheme == "file" || !isSpecial(url))
                    return "null";
                  return scheme + "://" + serializeHost(url.host) + (port !== null ? ":" + port : "");
                };
                var getProtocol = function() {
                  return getInternalURLState(this).scheme + ":";
                };
                var getUsername = function() {
                  return getInternalURLState(this).username;
                };
                var getPassword = function() {
                  return getInternalURLState(this).password;
                };
                var getHost = function() {
                  var url = getInternalURLState(this);
                  var host = url.host;
                  var port = url.port;
                  return host === null ? "" : port === null ? serializeHost(host) : serializeHost(host) + ":" + port;
                };
                var getHostname = function() {
                  var host = getInternalURLState(this).host;
                  return host === null ? "" : serializeHost(host);
                };
                var getPort = function() {
                  var port = getInternalURLState(this).port;
                  return port === null ? "" : String(port);
                };
                var getPathname = function() {
                  var url = getInternalURLState(this);
                  var path = url.path;
                  return url.cannotBeABaseURL ? path[0] : path.length ? "/" + path.join("/") : "";
                };
                var getSearch = function() {
                  var query = getInternalURLState(this).query;
                  return query ? "?" + query : "";
                };
                var getSearchParams = function() {
                  return getInternalURLState(this).searchParams;
                };
                var getHash = function() {
                  var fragment = getInternalURLState(this).fragment;
                  return fragment ? "#" + fragment : "";
                };
                var accessorDescriptor = function(getter, setter) {
                  return { get: getter, set: setter, configurable: true, enumerable: true };
                };
                if (DESCRIPTORS) {
                  defineProperties(URLPrototype, {
                    // `URL.prototype.href` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-href
                    href: accessorDescriptor(serializeURL, function(href) {
                      var url = getInternalURLState(this);
                      var urlString = String(href);
                      var failure = parseURL(url, urlString);
                      if (failure)
                        throw TypeError(failure);
                      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
                    }),
                    // `URL.prototype.origin` getter
                    // https://url.spec.whatwg.org/#dom-url-origin
                    origin: accessorDescriptor(getOrigin),
                    // `URL.prototype.protocol` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-protocol
                    protocol: accessorDescriptor(getProtocol, function(protocol) {
                      var url = getInternalURLState(this);
                      parseURL(url, String(protocol) + ":", SCHEME_START);
                    }),
                    // `URL.prototype.username` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-username
                    username: accessorDescriptor(getUsername, function(username) {
                      var url = getInternalURLState(this);
                      var codePoints = arrayFrom(String(username));
                      if (cannotHaveUsernamePasswordPort(url))
                        return;
                      url.username = "";
                      for (var i = 0; i < codePoints.length; i++) {
                        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
                      }
                    }),
                    // `URL.prototype.password` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-password
                    password: accessorDescriptor(getPassword, function(password) {
                      var url = getInternalURLState(this);
                      var codePoints = arrayFrom(String(password));
                      if (cannotHaveUsernamePasswordPort(url))
                        return;
                      url.password = "";
                      for (var i = 0; i < codePoints.length; i++) {
                        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
                      }
                    }),
                    // `URL.prototype.host` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-host
                    host: accessorDescriptor(getHost, function(host) {
                      var url = getInternalURLState(this);
                      if (url.cannotBeABaseURL)
                        return;
                      parseURL(url, String(host), HOST);
                    }),
                    // `URL.prototype.hostname` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-hostname
                    hostname: accessorDescriptor(getHostname, function(hostname) {
                      var url = getInternalURLState(this);
                      if (url.cannotBeABaseURL)
                        return;
                      parseURL(url, String(hostname), HOSTNAME);
                    }),
                    // `URL.prototype.port` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-port
                    port: accessorDescriptor(getPort, function(port) {
                      var url = getInternalURLState(this);
                      if (cannotHaveUsernamePasswordPort(url))
                        return;
                      port = String(port);
                      if (port == "")
                        url.port = null;
                      else
                        parseURL(url, port, PORT);
                    }),
                    // `URL.prototype.pathname` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-pathname
                    pathname: accessorDescriptor(getPathname, function(pathname) {
                      var url = getInternalURLState(this);
                      if (url.cannotBeABaseURL)
                        return;
                      url.path = [];
                      parseURL(url, pathname + "", PATH_START);
                    }),
                    // `URL.prototype.search` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-search
                    search: accessorDescriptor(getSearch, function(search) {
                      var url = getInternalURLState(this);
                      search = String(search);
                      if (search == "") {
                        url.query = null;
                      } else {
                        if ("?" == search.charAt(0))
                          search = search.slice(1);
                        url.query = "";
                        parseURL(url, search, QUERY);
                      }
                      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
                    }),
                    // `URL.prototype.searchParams` getter
                    // https://url.spec.whatwg.org/#dom-url-searchparams
                    searchParams: accessorDescriptor(getSearchParams),
                    // `URL.prototype.hash` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-hash
                    hash: accessorDescriptor(getHash, function(hash) {
                      var url = getInternalURLState(this);
                      hash = String(hash);
                      if (hash == "") {
                        url.fragment = null;
                        return;
                      }
                      if ("#" == hash.charAt(0))
                        hash = hash.slice(1);
                      url.fragment = "";
                      parseURL(url, hash, FRAGMENT);
                    })
                  });
                }
                redefine(URLPrototype, "toJSON", function toJSON() {
                  return serializeURL.call(this);
                }, { enumerable: true });
                redefine(URLPrototype, "toString", function toString() {
                  return serializeURL.call(this);
                }, { enumerable: true });
                if (NativeURL) {
                  var nativeCreateObjectURL = NativeURL.createObjectURL;
                  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
                  if (nativeCreateObjectURL)
                    redefine(URLConstructor, "createObjectURL", function createObjectURL(blob) {
                      return nativeCreateObjectURL.apply(NativeURL, arguments);
                    });
                  if (nativeRevokeObjectURL)
                    redefine(URLConstructor, "revokeObjectURL", function revokeObjectURL(url) {
                      return nativeRevokeObjectURL.apply(NativeURL, arguments);
                    });
                }
                setToStringTag(URLConstructor, "URL");
                $({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
                  URL: URLConstructor
                });
              }
            )
            /******/
          };
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            if (__webpack_module_cache__[moduleId]) {
              return __webpack_module_cache__[moduleId].exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          !function() {
            __webpack_require__.d = function(exports2, definition) {
              for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                  Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                }
              }
            };
          }();
          !function() {
            __webpack_require__.g = function() {
              if (typeof globalThis === "object")
                return globalThis;
              try {
                return this || new Function("return this")();
              } catch (e) {
                if (typeof window === "object")
                  return window;
              }
            }();
          }();
          !function() {
            __webpack_require__.o = function(obj, prop) {
              return Object.prototype.hasOwnProperty.call(obj, prop);
            };
          }();
          !function() {
            __webpack_require__.r = function(exports2) {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
          }();
          var __webpack_exports__ = {};
          !function() {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
              "Dropzone": function() {
                return (
                  /* reexport */
                  Dropzone2
                );
              },
              "default": function() {
                return (
                  /* binding */
                  dropzone_dist
                );
              }
            });
            var es_array_concat = __webpack_require__(2222);
            var es_array_filter = __webpack_require__(7327);
            var es_array_index_of = __webpack_require__(2772);
            var es_array_iterator = __webpack_require__(6992);
            var es_array_map = __webpack_require__(1249);
            var es_array_slice = __webpack_require__(7042);
            var es_array_splice = __webpack_require__(561);
            var es_array_buffer_constructor = __webpack_require__(8264);
            var es_function_name = __webpack_require__(8309);
            var es_object_get_prototype_of = __webpack_require__(489);
            var es_object_to_string = __webpack_require__(1539);
            var es_regexp_exec = __webpack_require__(4916);
            var es_regexp_to_string = __webpack_require__(9714);
            var es_string_iterator = __webpack_require__(8783);
            var es_string_match = __webpack_require__(4723);
            var es_string_replace = __webpack_require__(5306);
            var es_string_split = __webpack_require__(3123);
            var es_string_trim = __webpack_require__(3210);
            var es_typed_array_uint8_array = __webpack_require__(2472);
            var es_typed_array_copy_within = __webpack_require__(2990);
            var es_typed_array_every = __webpack_require__(8927);
            var es_typed_array_fill = __webpack_require__(3105);
            var es_typed_array_filter = __webpack_require__(5035);
            var es_typed_array_find = __webpack_require__(4345);
            var es_typed_array_find_index = __webpack_require__(7174);
            var es_typed_array_for_each = __webpack_require__(2846);
            var es_typed_array_includes = __webpack_require__(4731);
            var es_typed_array_index_of = __webpack_require__(7209);
            var es_typed_array_iterator = __webpack_require__(6319);
            var es_typed_array_join = __webpack_require__(8867);
            var es_typed_array_last_index_of = __webpack_require__(7789);
            var es_typed_array_map = __webpack_require__(3739);
            var es_typed_array_reduce = __webpack_require__(9368);
            var es_typed_array_reduce_right = __webpack_require__(4483);
            var es_typed_array_reverse = __webpack_require__(2056);
            var es_typed_array_set = __webpack_require__(3462);
            var es_typed_array_slice = __webpack_require__(678);
            var es_typed_array_some = __webpack_require__(7462);
            var es_typed_array_sort = __webpack_require__(3824);
            var es_typed_array_subarray = __webpack_require__(5021);
            var es_typed_array_to_locale_string = __webpack_require__(2974);
            var es_typed_array_to_string = __webpack_require__(5016);
            var web_dom_collections_for_each = __webpack_require__(4747);
            var web_dom_collections_iterator = __webpack_require__(3948);
            var web_url = __webpack_require__(285);
            ;
            function _createForOfIteratorHelper(o, allowArrayLike) {
              var it;
              if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
                if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                  if (it)
                    o = it;
                  var i = 0;
                  var F = function F2() {
                  };
                  return { s: F, n: function n() {
                    if (i >= o.length)
                      return { done: true };
                    return { done: false, value: o[i++] };
                  }, e: function e(_e) {
                    throw _e;
                  }, f: F };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var normalCompletion = true, didErr = false, err;
              return { s: function s() {
                it = o[Symbol.iterator]();
              }, n: function n() {
                var step = it.next();
                normalCompletion = step.done;
                return step;
              }, e: function e(_e2) {
                didErr = true;
                err = _e2;
              }, f: function f() {
                try {
                  if (!normalCompletion && it.return != null)
                    it.return();
                } finally {
                  if (didErr)
                    throw err;
                }
              } };
            }
            function _unsupportedIterableToArray(o, minLen) {
              if (!o)
                return;
              if (typeof o === "string")
                return _arrayLikeToArray(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              if (n === "Object" && o.constructor)
                n = o.constructor.name;
              if (n === "Map" || n === "Set")
                return Array.from(o);
              if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return _arrayLikeToArray(o, minLen);
            }
            function _arrayLikeToArray(arr, len) {
              if (len == null || len > arr.length)
                len = arr.length;
              for (var i = 0, arr2 = new Array(len); i < len; i++) {
                arr2[i] = arr[i];
              }
              return arr2;
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps)
                _defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                _defineProperties(Constructor, staticProps);
              return Constructor;
            }
            var Emitter = function() {
              function Emitter2() {
                _classCallCheck(this, Emitter2);
              }
              _createClass(Emitter2, [{
                key: "on",
                value: (
                  // Add an event listener for given event
                  function on(event, fn) {
                    this._callbacks = this._callbacks || {};
                    if (!this._callbacks[event]) {
                      this._callbacks[event] = [];
                    }
                    this._callbacks[event].push(fn);
                    return this;
                  }
                )
              }, {
                key: "emit",
                value: function emit(event) {
                  this._callbacks = this._callbacks || {};
                  var callbacks = this._callbacks[event];
                  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                  }
                  if (callbacks) {
                    var _iterator = _createForOfIteratorHelper(callbacks, true), _step;
                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                        var callback = _step.value;
                        callback.apply(this, args);
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                  }
                  if (this.element) {
                    this.element.dispatchEvent(this.makeEvent("dropzone:" + event, {
                      args
                    }));
                  }
                  return this;
                }
              }, {
                key: "makeEvent",
                value: function makeEvent(eventName, detail) {
                  var params = {
                    bubbles: true,
                    cancelable: true,
                    detail
                  };
                  if (typeof window.CustomEvent === "function") {
                    return new CustomEvent(eventName, params);
                  } else {
                    var evt = document.createEvent("CustomEvent");
                    evt.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);
                    return evt;
                  }
                }
                // Remove event listener for given event. If fn is not provided, all event
                // listeners for that event will be removed. If neither is provided, all
                // event listeners will be removed.
              }, {
                key: "off",
                value: function off(event, fn) {
                  if (!this._callbacks || arguments.length === 0) {
                    this._callbacks = {};
                    return this;
                  }
                  var callbacks = this._callbacks[event];
                  if (!callbacks) {
                    return this;
                  }
                  if (arguments.length === 1) {
                    delete this._callbacks[event];
                    return this;
                  }
                  for (var i = 0; i < callbacks.length; i++) {
                    var callback = callbacks[i];
                    if (callback === fn) {
                      callbacks.splice(i, 1);
                      break;
                    }
                  }
                  return this;
                }
              }]);
              return Emitter2;
            }();
            ;
            var code = '<div class="dz-preview dz-file-preview"> <div class="dz-image"><img data-dz-thumbnail/></div> <div class="dz-details"> <div class="dz-size"><span data-dz-size></span></div> <div class="dz-filename"><span data-dz-name></span></div> </div> <div class="dz-progress"> <span class="dz-upload" data-dz-uploadprogress></span> </div> <div class="dz-error-message"><span data-dz-errormessage></span></div> <div class="dz-success-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Check</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path> </g> </svg> </div> <div class="dz-error-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Error</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475"> <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path> </g> </g> </svg> </div> </div> ';
            var preview_template = code;
            ;
            function options_createForOfIteratorHelper(o, allowArrayLike) {
              var it;
              if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
                if (Array.isArray(o) || (it = options_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                  if (it)
                    o = it;
                  var i = 0;
                  var F = function F2() {
                  };
                  return { s: F, n: function n() {
                    if (i >= o.length)
                      return { done: true };
                    return { done: false, value: o[i++] };
                  }, e: function e(_e) {
                    throw _e;
                  }, f: F };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var normalCompletion = true, didErr = false, err;
              return { s: function s() {
                it = o[Symbol.iterator]();
              }, n: function n() {
                var step = it.next();
                normalCompletion = step.done;
                return step;
              }, e: function e(_e2) {
                didErr = true;
                err = _e2;
              }, f: function f() {
                try {
                  if (!normalCompletion && it.return != null)
                    it.return();
                } finally {
                  if (didErr)
                    throw err;
                }
              } };
            }
            function options_unsupportedIterableToArray(o, minLen) {
              if (!o)
                return;
              if (typeof o === "string")
                return options_arrayLikeToArray(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              if (n === "Object" && o.constructor)
                n = o.constructor.name;
              if (n === "Map" || n === "Set")
                return Array.from(o);
              if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return options_arrayLikeToArray(o, minLen);
            }
            function options_arrayLikeToArray(arr, len) {
              if (len == null || len > arr.length)
                len = arr.length;
              for (var i = 0, arr2 = new Array(len); i < len; i++) {
                arr2[i] = arr[i];
              }
              return arr2;
            }
            var defaultOptions = {
              /**
               * Has to be specified on elements other than form (or when the form
               * doesn't have an `action` attribute). You can also
               * provide a function that will be called with `files` and
               * must return the url (since `v3.12.0`)
               */
              url: null,
              /**
               * Can be changed to `"put"` if necessary. You can also provide a function
               * that will be called with `files` and must return the method (since `v3.12.0`).
               */
              method: "post",
              /**
               * Will be set on the XHRequest.
               */
              withCredentials: false,
              /**
               * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
               * If set to null or 0, no timeout is going to be set.
               */
              timeout: null,
              /**
               * How many file uploads to process in parallel (See the
               * Enqueuing file uploads documentation section for more info)
               */
              parallelUploads: 2,
              /**
               * Whether to send multiple files in one request. If
               * this it set to true, then the fallback file input element will
               * have the `multiple` attribute as well. This option will
               * also trigger additional events (like `processingmultiple`). See the events
               * documentation section for more information.
               */
              uploadMultiple: false,
              /**
               * Whether you want files to be uploaded in chunks to your server. This can't be
               * used in combination with `uploadMultiple`.
               *
               * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
               */
              chunking: false,
              /**
               * If `chunking` is enabled, this defines whether **every** file should be chunked,
               * even if the file size is below chunkSize. This means, that the additional chunk
               * form data will be submitted and the `chunksUploaded` callback will be invoked.
               */
              forceChunking: false,
              /**
               * If `chunking` is `true`, then this defines the chunk size in bytes.
               */
              chunkSize: 2e6,
              /**
               * If `true`, the individual chunks of a file are being uploaded simultaneously.
               */
              parallelChunkUploads: false,
              /**
               * Whether a chunk should be retried if it fails.
               */
              retryChunks: false,
              /**
               * If `retryChunks` is true, how many times should it be retried.
               */
              retryChunksLimit: 3,
              /**
               * The maximum filesize (in bytes) that is allowed to be uploaded.
               */
              maxFilesize: 256,
              /**
               * The name of the file param that gets transferred.
               * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
               * Dropzone will append `[]` to the name.
               */
              paramName: "file",
              /**
               * Whether thumbnails for images should be generated
               */
              createImageThumbnails: true,
              /**
               * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
               */
              maxThumbnailFilesize: 10,
              /**
               * If `null`, the ratio of the image will be used to calculate it.
               */
              thumbnailWidth: 120,
              /**
               * The same as `thumbnailWidth`. If both are null, images will not be resized.
               */
              thumbnailHeight: 120,
              /**
               * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
               * Can be either `contain` or `crop`.
               */
              thumbnailMethod: "crop",
              /**
               * If set, images will be resized to these dimensions before being **uploaded**.
               * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
               * ratio of the file will be preserved.
               *
               * The `options.transformFile` function uses these options, so if the `transformFile` function
               * is overridden, these options don't do anything.
               */
              resizeWidth: null,
              /**
               * See `resizeWidth`.
               */
              resizeHeight: null,
              /**
               * The mime type of the resized image (before it gets uploaded to the server).
               * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
               * See `resizeWidth` for more information.
               */
              resizeMimeType: null,
              /**
               * The quality of the resized images. See `resizeWidth`.
               */
              resizeQuality: 0.8,
              /**
               * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
               * Can be either `contain` or `crop`.
               */
              resizeMethod: "contain",
              /**
               * The base that is used to calculate the **displayed** filesize. You can
               * change this to 1024 if you would rather display kibibytes, mebibytes,
               * etc... 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte`
               * not `1 kilobyte`. You can change this to `1024` if you don't care about
               * validity.
               */
              filesizeBase: 1e3,
              /**
               * If not `null` defines how many files this Dropzone handles. If it exceeds,
               * the event `maxfilesexceeded` will be called. The dropzone element gets the
               * class `dz-max-files-reached` accordingly so you can provide visual
               * feedback.
               */
              maxFiles: null,
              /**
               * An optional object to send additional headers to the server. Eg:
               * `{ "My-Awesome-Header": "header value" }`
               */
              headers: null,
              /**
               * If `true`, the dropzone element itself will be clickable, if `false`
               * nothing will be clickable.
               *
               * You can also pass an HTML element, a CSS selector (for multiple elements)
               * or an array of those. In that case, all of those elements will trigger an
               * upload when clicked.
               */
              clickable: true,
              /**
               * Whether hidden files in directories should be ignored.
               */
              ignoreHiddenFiles: true,
              /**
               * The default implementation of `accept` checks the file's mime type or
               * extension against this list. This is a comma separated list of mime
               * types or file extensions.
               *
               * Eg.: `image/*,application/pdf,.psd`
               *
               * If the Dropzone is `clickable` this option will also be used as
               * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
               * parameter on the hidden file input as well.
               */
              acceptedFiles: null,
              /**
               * **Deprecated!**
               * Use acceptedFiles instead.
               */
              acceptedMimeTypes: null,
              /**
               * If false, files will be added to the queue but the queue will not be
               * processed automatically.
               * This can be useful if you need some additional user input before sending
               * files (or if you want want all files sent at once).
               * If you're ready to send the file simply call `myDropzone.processQueue()`.
               *
               * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
               * section for more information.
               */
              autoProcessQueue: true,
              /**
               * If false, files added to the dropzone will not be queued by default.
               * You'll have to call `enqueueFile(file)` manually.
               */
              autoQueue: true,
              /**
               * If `true`, this will add a link to every file preview to remove or cancel (if
               * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
               * and `dictRemoveFile` options are used for the wording.
               */
              addRemoveLinks: false,
              /**
               * Defines where to display the file previews – if `null` the
               * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
               * selector. The element should have the `dropzone-previews` class so
               * the previews are displayed properly.
               */
              previewsContainer: null,
              /**
               * Set this to `true` if you don't want previews to be shown.
               */
              disablePreviews: false,
              /**
               * This is the element the hidden input field (which is used when clicking on the
               * dropzone to trigger file selection) will be appended to. This might
               * be important in case you use frameworks to switch the content of your page.
               *
               * Can be a selector string, or an element directly.
               */
              hiddenInputContainer: "body",
              /**
               * If null, no capture type will be specified
               * If camera, mobile devices will skip the file selection and choose camera
               * If microphone, mobile devices will skip the file selection and choose the microphone
               * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
               * On apple devices multiple must be set to false.  AcceptedFiles may need to
               * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
               */
              capture: null,
              /**
               * **Deprecated**. Use `renameFile` instead.
               */
              renameFilename: null,
              /**
               * A function that is invoked before the file is uploaded to the server and renames the file.
               * This function gets the `File` as argument and can use the `file.name`. The actual name of the
               * file that gets used during the upload can be accessed through `file.upload.filename`.
               */
              renameFile: null,
              /**
               * If `true` the fallback will be forced. This is very useful to test your server
               * implementations first and make sure that everything works as
               * expected without dropzone if you experience problems, and to test
               * how your fallbacks will look.
               */
              forceFallback: false,
              /**
               * The text used before any files are dropped.
               */
              dictDefaultMessage: "Drop files here to upload",
              /**
               * The text that replaces the default message text it the browser is not supported.
               */
              dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
              /**
               * The text that will be added before the fallback form.
               * If you provide a  fallback element yourself, or if this option is `null` this will
               * be ignored.
               */
              dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
              /**
               * If the filesize is too big.
               * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
               */
              dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
              /**
               * If the file doesn't match the file type.
               */
              dictInvalidFileType: "You can't upload files of this type.",
              /**
               * If the server response was invalid.
               * `{{statusCode}}` will be replaced with the servers status code.
               */
              dictResponseError: "Server responded with {{statusCode}} code.",
              /**
               * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
               */
              dictCancelUpload: "Cancel upload",
              /**
               * The text that is displayed if an upload was manually canceled
               */
              dictUploadCanceled: "Upload canceled.",
              /**
               * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
               */
              dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
              /**
               * If `addRemoveLinks` is true, the text to be used to remove a file.
               */
              dictRemoveFile: "Remove file",
              /**
               * If this is not null, then the user will be prompted before removing a file.
               */
              dictRemoveFileConfirmation: null,
              /**
               * Displayed if `maxFiles` is st and exceeded.
               * The string `{{maxFiles}}` will be replaced by the configuration value.
               */
              dictMaxFilesExceeded: "You can not upload any more files.",
              /**
               * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
               * `b` for bytes.
               */
              dictFileSizeUnits: {
                tb: "TB",
                gb: "GB",
                mb: "MB",
                kb: "KB",
                b: "b"
              },
              /**
               * Called when dropzone initialized
               * You can add event listeners here
               */
              init: function init() {
              },
              /**
               * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
               * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
               * of a function, this needs to return a map.
               *
               * The default implementation does nothing for normal uploads, but adds relevant information for
               * chunked uploads.
               *
               * This is the same as adding hidden input fields in the form element.
               */
              params: function params(files, xhr, chunk) {
                if (chunk) {
                  return {
                    dzuuid: chunk.file.upload.uuid,
                    dzchunkindex: chunk.index,
                    dztotalfilesize: chunk.file.size,
                    dzchunksize: this.options.chunkSize,
                    dztotalchunkcount: chunk.file.upload.totalChunkCount,
                    dzchunkbyteoffset: chunk.index * this.options.chunkSize
                  };
                }
              },
              /**
               * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
               * and a `done` function as parameters.
               *
               * If the done function is invoked without arguments, the file is "accepted" and will
               * be processed. If you pass an error message, the file is rejected, and the error
               * message will be displayed.
               * This function will not be called if the file is too big or doesn't match the mime types.
               */
              accept: function accept(file, done) {
                return done();
              },
              /**
               * The callback that will be invoked when all chunks have been uploaded for a file.
               * It gets the file for which the chunks have been uploaded as the first parameter,
               * and the `done` function as second. `done()` needs to be invoked when everything
               * needed to finish the upload process is done.
               */
              chunksUploaded: function chunksUploaded(file, done) {
                done();
              },
              /**
               * Gets called when the browser is not supported.
               * The default implementation shows the fallback input field and adds
               * a text.
               */
              fallback: function fallback() {
                var messageElement;
                this.element.className = "".concat(this.element.className, " dz-browser-not-supported");
                var _iterator = options_createForOfIteratorHelper(this.element.getElementsByTagName("div"), true), _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                    var child = _step.value;
                    if (/(^| )dz-message($| )/.test(child.className)) {
                      messageElement = child;
                      child.className = "dz-message";
                      break;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                if (!messageElement) {
                  messageElement = Dropzone2.createElement('<div class="dz-message"><span></span></div>');
                  this.element.appendChild(messageElement);
                }
                var span = messageElement.getElementsByTagName("span")[0];
                if (span) {
                  if (span.textContent != null) {
                    span.textContent = this.options.dictFallbackMessage;
                  } else if (span.innerText != null) {
                    span.innerText = this.options.dictFallbackMessage;
                  }
                }
                return this.element.appendChild(this.getFallbackForm());
              },
              /**
               * Gets called to calculate the thumbnail dimensions.
               *
               * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
               *
               *  - `srcWidth` & `srcHeight` (required)
               *  - `trgWidth` & `trgHeight` (required)
               *  - `srcX` & `srcY` (optional, default `0`)
               *  - `trgX` & `trgY` (optional, default `0`)
               *
               * Those values are going to be used by `ctx.drawImage()`.
               */
              resize: function resize(file, width, height, resizeMethod) {
                var info = {
                  srcX: 0,
                  srcY: 0,
                  srcWidth: file.width,
                  srcHeight: file.height
                };
                var srcRatio = file.width / file.height;
                if (width == null && height == null) {
                  width = info.srcWidth;
                  height = info.srcHeight;
                } else if (width == null) {
                  width = height * srcRatio;
                } else if (height == null) {
                  height = width / srcRatio;
                }
                width = Math.min(width, info.srcWidth);
                height = Math.min(height, info.srcHeight);
                var trgRatio = width / height;
                if (info.srcWidth > width || info.srcHeight > height) {
                  if (resizeMethod === "crop") {
                    if (srcRatio > trgRatio) {
                      info.srcHeight = file.height;
                      info.srcWidth = info.srcHeight * trgRatio;
                    } else {
                      info.srcWidth = file.width;
                      info.srcHeight = info.srcWidth / trgRatio;
                    }
                  } else if (resizeMethod === "contain") {
                    if (srcRatio > trgRatio) {
                      height = width / srcRatio;
                    } else {
                      width = height * srcRatio;
                    }
                  } else {
                    throw new Error("Unknown resizeMethod '".concat(resizeMethod, "'"));
                  }
                }
                info.srcX = (file.width - info.srcWidth) / 2;
                info.srcY = (file.height - info.srcHeight) / 2;
                info.trgWidth = width;
                info.trgHeight = height;
                return info;
              },
              /**
               * Can be used to transform the file (for example, resize an image if necessary).
               *
               * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
               * images according to those dimensions.
               *
               * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
               * to be invoked with the file when the transformation is done.
               */
              transformFile: function transformFile(file, done) {
                if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
                  return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
                } else {
                  return done(file);
                }
              },
              /**
               * A string that contains the template used for each dropped
               * file. Change it to fulfill your needs but make sure to properly
               * provide all elements.
               *
               * If you want to use an actual HTML element instead of providing a String
               * as a config option, you could create a div with the id `tpl`,
               * put the template inside it and provide the element like this:
               *
               *     document
               *       .querySelector('#tpl')
               *       .innerHTML
               *
               */
              previewTemplate: preview_template,
              /*
               Those functions register themselves to the events on init and handle all
               the user interface specific stuff. Overwriting them won't break the upload
               but can break the way it's displayed.
               You can overwrite them if you don't like the default behavior. If you just
               want to add an additional event handler, register it on the dropzone object
               and don't overwrite those options.
               */
              // Those are self explanatory and simply concern the DragnDrop.
              drop: function drop(e) {
                return this.element.classList.remove("dz-drag-hover");
              },
              dragstart: function dragstart(e) {
              },
              dragend: function dragend(e) {
                return this.element.classList.remove("dz-drag-hover");
              },
              dragenter: function dragenter(e) {
                return this.element.classList.add("dz-drag-hover");
              },
              dragover: function dragover(e) {
                return this.element.classList.add("dz-drag-hover");
              },
              dragleave: function dragleave(e) {
                return this.element.classList.remove("dz-drag-hover");
              },
              paste: function paste(e) {
              },
              // Called whenever there are no files left in the dropzone anymore, and the
              // dropzone should be displayed as if in the initial state.
              reset: function reset() {
                return this.element.classList.remove("dz-started");
              },
              // Called when a file is added to the queue
              // Receives `file`
              addedfile: function addedfile(file) {
                var _this = this;
                if (this.element === this.previewsContainer) {
                  this.element.classList.add("dz-started");
                }
                if (this.previewsContainer && !this.options.disablePreviews) {
                  file.previewElement = Dropzone2.createElement(this.options.previewTemplate.trim());
                  file.previewTemplate = file.previewElement;
                  this.previewsContainer.appendChild(file.previewElement);
                  var _iterator2 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-name]"), true), _step2;
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                      var node = _step2.value;
                      node.textContent = file.name;
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                  var _iterator3 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-size]"), true), _step3;
                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                      node = _step3.value;
                      node.innerHTML = this.filesize(file.size);
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                  if (this.options.addRemoveLinks) {
                    file._removeLink = Dropzone2.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(this.options.dictRemoveFile, "</a>"));
                    file.previewElement.appendChild(file._removeLink);
                  }
                  var removeFileEvent = function removeFileEvent2(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (file.status === Dropzone2.UPLOADING) {
                      return Dropzone2.confirm(_this.options.dictCancelUploadConfirmation, function() {
                        return _this.removeFile(file);
                      });
                    } else {
                      if (_this.options.dictRemoveFileConfirmation) {
                        return Dropzone2.confirm(_this.options.dictRemoveFileConfirmation, function() {
                          return _this.removeFile(file);
                        });
                      } else {
                        return _this.removeFile(file);
                      }
                    }
                  };
                  var _iterator4 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-remove]"), true), _step4;
                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                      var removeLink = _step4.value;
                      removeLink.addEventListener("click", removeFileEvent);
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }
                }
              },
              // Called whenever a file is removed.
              removedfile: function removedfile(file) {
                if (file.previewElement != null && file.previewElement.parentNode != null) {
                  file.previewElement.parentNode.removeChild(file.previewElement);
                }
                return this._updateMaxFilesReachedClass();
              },
              // Called when a thumbnail has been generated
              // Receives `file` and `dataUrl`
              thumbnail: function thumbnail(file, dataUrl) {
                if (file.previewElement) {
                  file.previewElement.classList.remove("dz-file-preview");
                  var _iterator5 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-thumbnail]"), true), _step5;
                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                      var thumbnailElement = _step5.value;
                      thumbnailElement.alt = file.name;
                      thumbnailElement.src = dataUrl;
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                  return setTimeout(function() {
                    return file.previewElement.classList.add("dz-image-preview");
                  }, 1);
                }
              },
              // Called whenever an error occurs
              // Receives `file` and `message`
              error: function error(file, message) {
                if (file.previewElement) {
                  file.previewElement.classList.add("dz-error");
                  if (typeof message !== "string" && message.error) {
                    message = message.error;
                  }
                  var _iterator6 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-errormessage]"), true), _step6;
                  try {
                    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                      var node = _step6.value;
                      node.textContent = message;
                    }
                  } catch (err) {
                    _iterator6.e(err);
                  } finally {
                    _iterator6.f();
                  }
                }
              },
              errormultiple: function errormultiple() {
              },
              // Called when a file gets processed. Since there is a cue, not all added
              // files are processed immediately.
              // Receives `file`
              processing: function processing(file) {
                if (file.previewElement) {
                  file.previewElement.classList.add("dz-processing");
                  if (file._removeLink) {
                    return file._removeLink.innerHTML = this.options.dictCancelUpload;
                  }
                }
              },
              processingmultiple: function processingmultiple() {
              },
              // Called whenever the upload progress gets updated.
              // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
              // To get the total number of bytes of the file, use `file.size`
              uploadprogress: function uploadprogress(file, progress, bytesSent) {
                if (file.previewElement) {
                  var _iterator7 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-uploadprogress]"), true), _step7;
                  try {
                    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                      var node = _step7.value;
                      node.nodeName === "PROGRESS" ? node.value = progress : node.style.width = "".concat(progress, "%");
                    }
                  } catch (err) {
                    _iterator7.e(err);
                  } finally {
                    _iterator7.f();
                  }
                }
              },
              // Called whenever the total upload progress gets updated.
              // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
              totaluploadprogress: function totaluploadprogress() {
              },
              // Called just before the file is sent. Gets the `xhr` object as second
              // parameter, so you can modify it (for example to add a CSRF token) and a
              // `formData` object to add additional information.
              sending: function sending() {
              },
              sendingmultiple: function sendingmultiple() {
              },
              // When the complete upload is finished and successful
              // Receives `file`
              success: function success(file) {
                if (file.previewElement) {
                  return file.previewElement.classList.add("dz-success");
                }
              },
              successmultiple: function successmultiple() {
              },
              // When the upload is canceled.
              canceled: function canceled(file) {
                return this.emit("error", file, this.options.dictUploadCanceled);
              },
              canceledmultiple: function canceledmultiple() {
              },
              // When the upload is finished, either with success or an error.
              // Receives `file`
              complete: function complete(file) {
                if (file._removeLink) {
                  file._removeLink.innerHTML = this.options.dictRemoveFile;
                }
                if (file.previewElement) {
                  return file.previewElement.classList.add("dz-complete");
                }
              },
              completemultiple: function completemultiple() {
              },
              maxfilesexceeded: function maxfilesexceeded() {
              },
              maxfilesreached: function maxfilesreached() {
              },
              queuecomplete: function queuecomplete() {
              },
              addedfiles: function addedfiles() {
              }
            };
            var src_options = defaultOptions;
            ;
            function _typeof(obj) {
              "@babel/helpers - typeof";
              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof2(obj2) {
                  return typeof obj2;
                };
              } else {
                _typeof = function _typeof2(obj2) {
                  return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                };
              }
              return _typeof(obj);
            }
            function dropzone_createForOfIteratorHelper(o, allowArrayLike) {
              var it;
              if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
                if (Array.isArray(o) || (it = dropzone_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                  if (it)
                    o = it;
                  var i = 0;
                  var F = function F2() {
                  };
                  return { s: F, n: function n() {
                    if (i >= o.length)
                      return { done: true };
                    return { done: false, value: o[i++] };
                  }, e: function e(_e) {
                    throw _e;
                  }, f: F };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var normalCompletion = true, didErr = false, err;
              return { s: function s() {
                it = o[Symbol.iterator]();
              }, n: function n() {
                var step = it.next();
                normalCompletion = step.done;
                return step;
              }, e: function e(_e2) {
                didErr = true;
                err = _e2;
              }, f: function f() {
                try {
                  if (!normalCompletion && it.return != null)
                    it.return();
                } finally {
                  if (didErr)
                    throw err;
                }
              } };
            }
            function dropzone_unsupportedIterableToArray(o, minLen) {
              if (!o)
                return;
              if (typeof o === "string")
                return dropzone_arrayLikeToArray(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              if (n === "Object" && o.constructor)
                n = o.constructor.name;
              if (n === "Map" || n === "Set")
                return Array.from(o);
              if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return dropzone_arrayLikeToArray(o, minLen);
            }
            function dropzone_arrayLikeToArray(arr, len) {
              if (len == null || len > arr.length)
                len = arr.length;
              for (var i = 0, arr2 = new Array(len); i < len; i++) {
                arr2[i] = arr[i];
              }
              return arr2;
            }
            function dropzone_classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function dropzone_defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function dropzone_createClass(Constructor, protoProps, staticProps) {
              if (protoProps)
                dropzone_defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                dropzone_defineProperties(Constructor, staticProps);
              return Constructor;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
              if (superClass)
                _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
                o2.__proto__ = p2;
                return o2;
              };
              return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived), result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }
            function _possibleConstructorReturn(self2, call) {
              if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
              }
              return _assertThisInitialized(self2);
            }
            function _assertThisInitialized(self2) {
              if (self2 === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self2;
            }
            function _isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy === "function")
                return true;
              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                }));
                return true;
              } catch (e) {
                return false;
              }
            }
            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
                return o2.__proto__ || Object.getPrototypeOf(o2);
              };
              return _getPrototypeOf(o);
            }
            var Dropzone2 = function(_Emitter) {
              _inherits(Dropzone3, _Emitter);
              var _super = _createSuper(Dropzone3);
              function Dropzone3(el, options) {
                var _this;
                dropzone_classCallCheck(this, Dropzone3);
                _this = _super.call(this);
                var fallback, left;
                _this.element = el;
                _this.version = Dropzone3.version;
                _this.clickableElements = [];
                _this.listeners = [];
                _this.files = [];
                if (typeof _this.element === "string") {
                  _this.element = document.querySelector(_this.element);
                }
                if (!_this.element || _this.element.nodeType == null) {
                  throw new Error("Invalid dropzone element.");
                }
                if (_this.element.dropzone) {
                  throw new Error("Dropzone already attached.");
                }
                Dropzone3.instances.push(_assertThisInitialized(_this));
                _this.element.dropzone = _assertThisInitialized(_this);
                var elementOptions = (left = Dropzone3.optionsForElement(_this.element)) != null ? left : {};
                _this.options = Dropzone3.extend({}, src_options, elementOptions, options != null ? options : {});
                _this.options.previewTemplate = _this.options.previewTemplate.replace(/\n*/g, "");
                if (_this.options.forceFallback || !Dropzone3.isBrowserSupported()) {
                  return _possibleConstructorReturn(_this, _this.options.fallback.call(_assertThisInitialized(_this)));
                }
                if (_this.options.url == null) {
                  _this.options.url = _this.element.getAttribute("action");
                }
                if (!_this.options.url) {
                  throw new Error("No URL provided.");
                }
                if (_this.options.acceptedFiles && _this.options.acceptedMimeTypes) {
                  throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                }
                if (_this.options.uploadMultiple && _this.options.chunking) {
                  throw new Error("You cannot set both: uploadMultiple and chunking.");
                }
                if (_this.options.acceptedMimeTypes) {
                  _this.options.acceptedFiles = _this.options.acceptedMimeTypes;
                  delete _this.options.acceptedMimeTypes;
                }
                if (_this.options.renameFilename != null) {
                  _this.options.renameFile = function(file) {
                    return _this.options.renameFilename.call(_assertThisInitialized(_this), file.name, file);
                  };
                }
                if (typeof _this.options.method === "string") {
                  _this.options.method = _this.options.method.toUpperCase();
                }
                if ((fallback = _this.getExistingFallback()) && fallback.parentNode) {
                  fallback.parentNode.removeChild(fallback);
                }
                if (_this.options.previewsContainer !== false) {
                  if (_this.options.previewsContainer) {
                    _this.previewsContainer = Dropzone3.getElement(_this.options.previewsContainer, "previewsContainer");
                  } else {
                    _this.previewsContainer = _this.element;
                  }
                }
                if (_this.options.clickable) {
                  if (_this.options.clickable === true) {
                    _this.clickableElements = [_this.element];
                  } else {
                    _this.clickableElements = Dropzone3.getElements(_this.options.clickable, "clickable");
                  }
                }
                _this.init();
                return _this;
              }
              dropzone_createClass(Dropzone3, [{
                key: "getAcceptedFiles",
                value: function getAcceptedFiles() {
                  return this.files.filter(function(file) {
                    return file.accepted;
                  }).map(function(file) {
                    return file;
                  });
                }
                // Returns all files that have been rejected
                // Not sure when that's going to be useful, but added for completeness.
              }, {
                key: "getRejectedFiles",
                value: function getRejectedFiles() {
                  return this.files.filter(function(file) {
                    return !file.accepted;
                  }).map(function(file) {
                    return file;
                  });
                }
              }, {
                key: "getFilesWithStatus",
                value: function getFilesWithStatus(status) {
                  return this.files.filter(function(file) {
                    return file.status === status;
                  }).map(function(file) {
                    return file;
                  });
                }
                // Returns all files that are in the queue
              }, {
                key: "getQueuedFiles",
                value: function getQueuedFiles() {
                  return this.getFilesWithStatus(Dropzone3.QUEUED);
                }
              }, {
                key: "getUploadingFiles",
                value: function getUploadingFiles() {
                  return this.getFilesWithStatus(Dropzone3.UPLOADING);
                }
              }, {
                key: "getAddedFiles",
                value: function getAddedFiles() {
                  return this.getFilesWithStatus(Dropzone3.ADDED);
                }
                // Files that are either queued or uploading
              }, {
                key: "getActiveFiles",
                value: function getActiveFiles() {
                  return this.files.filter(function(file) {
                    return file.status === Dropzone3.UPLOADING || file.status === Dropzone3.QUEUED;
                  }).map(function(file) {
                    return file;
                  });
                }
                // The function that gets called when Dropzone is initialized. You
                // can (and should) setup event listeners inside this function.
              }, {
                key: "init",
                value: function init() {
                  var _this2 = this;
                  if (this.element.tagName === "form") {
                    this.element.setAttribute("enctype", "multipart/form-data");
                  }
                  if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
                    this.element.appendChild(Dropzone3.createElement('<div class="dz-default dz-message"><button class="dz-button" type="button">'.concat(this.options.dictDefaultMessage, "</button></div>")));
                  }
                  if (this.clickableElements.length) {
                    var setupHiddenFileInput = function setupHiddenFileInput2() {
                      if (_this2.hiddenFileInput) {
                        _this2.hiddenFileInput.parentNode.removeChild(_this2.hiddenFileInput);
                      }
                      _this2.hiddenFileInput = document.createElement("input");
                      _this2.hiddenFileInput.setAttribute("type", "file");
                      if (_this2.options.maxFiles === null || _this2.options.maxFiles > 1) {
                        _this2.hiddenFileInput.setAttribute("multiple", "multiple");
                      }
                      _this2.hiddenFileInput.className = "dz-hidden-input";
                      if (_this2.options.acceptedFiles !== null) {
                        _this2.hiddenFileInput.setAttribute("accept", _this2.options.acceptedFiles);
                      }
                      if (_this2.options.capture !== null) {
                        _this2.hiddenFileInput.setAttribute("capture", _this2.options.capture);
                      }
                      _this2.hiddenFileInput.setAttribute("tabindex", "-1");
                      _this2.hiddenFileInput.style.visibility = "hidden";
                      _this2.hiddenFileInput.style.position = "absolute";
                      _this2.hiddenFileInput.style.top = "0";
                      _this2.hiddenFileInput.style.left = "0";
                      _this2.hiddenFileInput.style.height = "0";
                      _this2.hiddenFileInput.style.width = "0";
                      Dropzone3.getElement(_this2.options.hiddenInputContainer, "hiddenInputContainer").appendChild(_this2.hiddenFileInput);
                      _this2.hiddenFileInput.addEventListener("change", function() {
                        var files = _this2.hiddenFileInput.files;
                        if (files.length) {
                          var _iterator = dropzone_createForOfIteratorHelper(files, true), _step;
                          try {
                            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                              var file = _step.value;
                              _this2.addFile(file);
                            }
                          } catch (err) {
                            _iterator.e(err);
                          } finally {
                            _iterator.f();
                          }
                        }
                        _this2.emit("addedfiles", files);
                        setupHiddenFileInput2();
                      });
                    };
                    setupHiddenFileInput();
                  }
                  this.URL = window.URL !== null ? window.URL : window.webkitURL;
                  var _iterator2 = dropzone_createForOfIteratorHelper(this.events, true), _step2;
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                      var eventName = _step2.value;
                      this.on(eventName, this.options[eventName]);
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                  this.on("uploadprogress", function() {
                    return _this2.updateTotalUploadProgress();
                  });
                  this.on("removedfile", function() {
                    return _this2.updateTotalUploadProgress();
                  });
                  this.on("canceled", function(file) {
                    return _this2.emit("complete", file);
                  });
                  this.on("complete", function(file) {
                    if (_this2.getAddedFiles().length === 0 && _this2.getUploadingFiles().length === 0 && _this2.getQueuedFiles().length === 0) {
                      return setTimeout(function() {
                        return _this2.emit("queuecomplete");
                      }, 0);
                    }
                  });
                  var containsFiles = function containsFiles2(e) {
                    if (e.dataTransfer.types) {
                      for (var i = 0; i < e.dataTransfer.types.length; i++) {
                        if (e.dataTransfer.types[i] === "Files")
                          return true;
                      }
                    }
                    return false;
                  };
                  var noPropagation = function noPropagation2(e) {
                    if (!containsFiles(e))
                      return;
                    e.stopPropagation();
                    if (e.preventDefault) {
                      return e.preventDefault();
                    } else {
                      return e.returnValue = false;
                    }
                  };
                  this.listeners = [{
                    element: this.element,
                    events: {
                      dragstart: function dragstart(e) {
                        return _this2.emit("dragstart", e);
                      },
                      dragenter: function dragenter(e) {
                        noPropagation(e);
                        return _this2.emit("dragenter", e);
                      },
                      dragover: function dragover(e) {
                        var efct;
                        try {
                          efct = e.dataTransfer.effectAllowed;
                        } catch (error) {
                        }
                        e.dataTransfer.dropEffect = "move" === efct || "linkMove" === efct ? "move" : "copy";
                        noPropagation(e);
                        return _this2.emit("dragover", e);
                      },
                      dragleave: function dragleave(e) {
                        return _this2.emit("dragleave", e);
                      },
                      drop: function drop(e) {
                        noPropagation(e);
                        return _this2.drop(e);
                      },
                      dragend: function dragend(e) {
                        return _this2.emit("dragend", e);
                      }
                    }
                    // This is disabled right now, because the browsers don't implement it properly.
                    // "paste": (e) =>
                    //   noPropagation e
                    //   @paste e
                  }];
                  this.clickableElements.forEach(function(clickableElement) {
                    return _this2.listeners.push({
                      element: clickableElement,
                      events: {
                        click: function click(evt) {
                          if (clickableElement !== _this2.element || evt.target === _this2.element || Dropzone3.elementInside(evt.target, _this2.element.querySelector(".dz-message"))) {
                            _this2.hiddenFileInput.click();
                          }
                          return true;
                        }
                      }
                    });
                  });
                  this.enable();
                  return this.options.init.call(this);
                }
                // Not fully tested yet
              }, {
                key: "destroy",
                value: function destroy() {
                  this.disable();
                  this.removeAllFiles(true);
                  if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : void 0) {
                    this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
                    this.hiddenFileInput = null;
                  }
                  delete this.element.dropzone;
                  return Dropzone3.instances.splice(Dropzone3.instances.indexOf(this), 1);
                }
              }, {
                key: "updateTotalUploadProgress",
                value: function updateTotalUploadProgress() {
                  var totalUploadProgress;
                  var totalBytesSent = 0;
                  var totalBytes = 0;
                  var activeFiles = this.getActiveFiles();
                  if (activeFiles.length) {
                    var _iterator3 = dropzone_createForOfIteratorHelper(this.getActiveFiles(), true), _step3;
                    try {
                      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                        var file = _step3.value;
                        totalBytesSent += file.upload.bytesSent;
                        totalBytes += file.upload.total;
                      }
                    } catch (err) {
                      _iterator3.e(err);
                    } finally {
                      _iterator3.f();
                    }
                    totalUploadProgress = 100 * totalBytesSent / totalBytes;
                  } else {
                    totalUploadProgress = 100;
                  }
                  return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
                }
                // @options.paramName can be a function taking one parameter rather than a string.
                // A parameter name for a file is obtained simply by calling this with an index number.
              }, {
                key: "_getParamName",
                value: function _getParamName(n) {
                  if (typeof this.options.paramName === "function") {
                    return this.options.paramName(n);
                  } else {
                    return "".concat(this.options.paramName).concat(this.options.uploadMultiple ? "[".concat(n, "]") : "");
                  }
                }
                // If @options.renameFile is a function,
                // the function will be used to rename the file.name before appending it to the formData
              }, {
                key: "_renameFile",
                value: function _renameFile(file) {
                  if (typeof this.options.renameFile !== "function") {
                    return file.name;
                  }
                  return this.options.renameFile(file);
                }
                // Returns a form that can be used as fallback if the browser does not support DragnDrop
                //
                // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
                // This code has to pass in IE7 :(
              }, {
                key: "getFallbackForm",
                value: function getFallbackForm() {
                  var existingFallback, form;
                  if (existingFallback = this.getExistingFallback()) {
                    return existingFallback;
                  }
                  var fieldsString = '<div class="dz-fallback">';
                  if (this.options.dictFallbackText) {
                    fieldsString += "<p>".concat(this.options.dictFallbackText, "</p>");
                  }
                  fieldsString += '<input type="file" name="'.concat(this._getParamName(0), '" ').concat(this.options.uploadMultiple ? 'multiple="multiple"' : void 0, ' /><input type="submit" value="Upload!"></div>');
                  var fields = Dropzone3.createElement(fieldsString);
                  if (this.element.tagName !== "FORM") {
                    form = Dropzone3.createElement('<form action="'.concat(this.options.url, '" enctype="multipart/form-data" method="').concat(this.options.method, '"></form>'));
                    form.appendChild(fields);
                  } else {
                    this.element.setAttribute("enctype", "multipart/form-data");
                    this.element.setAttribute("method", this.options.method);
                  }
                  return form != null ? form : fields;
                }
                // Returns the fallback elements if they exist already
                //
                // This code has to pass in IE7 :(
              }, {
                key: "getExistingFallback",
                value: function getExistingFallback() {
                  var getFallback = function getFallback2(elements) {
                    var _iterator4 = dropzone_createForOfIteratorHelper(elements, true), _step4;
                    try {
                      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                        var el = _step4.value;
                        if (/(^| )fallback($| )/.test(el.className)) {
                          return el;
                        }
                      }
                    } catch (err) {
                      _iterator4.e(err);
                    } finally {
                      _iterator4.f();
                    }
                  };
                  for (var _i = 0, _arr = ["div", "form"]; _i < _arr.length; _i++) {
                    var tagName = _arr[_i];
                    var fallback;
                    if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
                      return fallback;
                    }
                  }
                }
                // Activates all listeners stored in @listeners
              }, {
                key: "setupEventListeners",
                value: function setupEventListeners() {
                  return this.listeners.map(function(elementListeners) {
                    return function() {
                      var result = [];
                      for (var event in elementListeners.events) {
                        var listener = elementListeners.events[event];
                        result.push(elementListeners.element.addEventListener(event, listener, false));
                      }
                      return result;
                    }();
                  });
                }
                // Deactivates all listeners stored in @listeners
              }, {
                key: "removeEventListeners",
                value: function removeEventListeners() {
                  return this.listeners.map(function(elementListeners) {
                    return function() {
                      var result = [];
                      for (var event in elementListeners.events) {
                        var listener = elementListeners.events[event];
                        result.push(elementListeners.element.removeEventListener(event, listener, false));
                      }
                      return result;
                    }();
                  });
                }
                // Removes all event listeners and cancels all files in the queue or being processed.
              }, {
                key: "disable",
                value: function disable() {
                  var _this3 = this;
                  this.clickableElements.forEach(function(element) {
                    return element.classList.remove("dz-clickable");
                  });
                  this.removeEventListeners();
                  this.disabled = true;
                  return this.files.map(function(file) {
                    return _this3.cancelUpload(file);
                  });
                }
              }, {
                key: "enable",
                value: function enable() {
                  delete this.disabled;
                  this.clickableElements.forEach(function(element) {
                    return element.classList.add("dz-clickable");
                  });
                  return this.setupEventListeners();
                }
                // Returns a nicely formatted filesize
              }, {
                key: "filesize",
                value: function filesize(size) {
                  var selectedSize = 0;
                  var selectedUnit = "b";
                  if (size > 0) {
                    var units = ["tb", "gb", "mb", "kb", "b"];
                    for (var i = 0; i < units.length; i++) {
                      var unit = units[i];
                      var cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
                      if (size >= cutoff) {
                        selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
                        selectedUnit = unit;
                        break;
                      }
                    }
                    selectedSize = Math.round(10 * selectedSize) / 10;
                  }
                  return "<strong>".concat(selectedSize, "</strong> ").concat(this.options.dictFileSizeUnits[selectedUnit]);
                }
                // Adds or removes the `dz-max-files-reached` class from the form.
              }, {
                key: "_updateMaxFilesReachedClass",
                value: function _updateMaxFilesReachedClass() {
                  if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
                    if (this.getAcceptedFiles().length === this.options.maxFiles) {
                      this.emit("maxfilesreached", this.files);
                    }
                    return this.element.classList.add("dz-max-files-reached");
                  } else {
                    return this.element.classList.remove("dz-max-files-reached");
                  }
                }
              }, {
                key: "drop",
                value: function drop(e) {
                  if (!e.dataTransfer) {
                    return;
                  }
                  this.emit("drop", e);
                  var files = [];
                  for (var i = 0; i < e.dataTransfer.files.length; i++) {
                    files[i] = e.dataTransfer.files[i];
                  }
                  if (files.length) {
                    var items = e.dataTransfer.items;
                    if (items && items.length && items[0].webkitGetAsEntry != null) {
                      this._addFilesFromItems(items);
                    } else {
                      this.handleFiles(files);
                    }
                  }
                  this.emit("addedfiles", files);
                }
              }, {
                key: "paste",
                value: function paste(e) {
                  if (__guard__(e != null ? e.clipboardData : void 0, function(x) {
                    return x.items;
                  }) == null) {
                    return;
                  }
                  this.emit("paste", e);
                  var items = e.clipboardData.items;
                  if (items.length) {
                    return this._addFilesFromItems(items);
                  }
                }
              }, {
                key: "handleFiles",
                value: function handleFiles(files) {
                  var _iterator5 = dropzone_createForOfIteratorHelper(files, true), _step5;
                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                      var file = _step5.value;
                      this.addFile(file);
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                }
                // When a folder is dropped (or files are pasted), items must be handled
                // instead of files.
              }, {
                key: "_addFilesFromItems",
                value: function _addFilesFromItems(items) {
                  var _this4 = this;
                  return function() {
                    var result = [];
                    var _iterator6 = dropzone_createForOfIteratorHelper(items, true), _step6;
                    try {
                      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                        var item = _step6.value;
                        var entry;
                        if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
                          if (entry.isFile) {
                            result.push(_this4.addFile(item.getAsFile()));
                          } else if (entry.isDirectory) {
                            result.push(_this4._addFilesFromDirectory(entry, entry.name));
                          } else {
                            result.push(void 0);
                          }
                        } else if (item.getAsFile != null) {
                          if (item.kind == null || item.kind === "file") {
                            result.push(_this4.addFile(item.getAsFile()));
                          } else {
                            result.push(void 0);
                          }
                        } else {
                          result.push(void 0);
                        }
                      }
                    } catch (err) {
                      _iterator6.e(err);
                    } finally {
                      _iterator6.f();
                    }
                    return result;
                  }();
                }
                // Goes through the directory, and adds each file it finds recursively
              }, {
                key: "_addFilesFromDirectory",
                value: function _addFilesFromDirectory(directory, path) {
                  var _this5 = this;
                  var dirReader = directory.createReader();
                  var errorHandler = function errorHandler2(error) {
                    return __guardMethod__(console, "log", function(o) {
                      return o.log(error);
                    });
                  };
                  var readEntries = function readEntries2() {
                    return dirReader.readEntries(function(entries) {
                      if (entries.length > 0) {
                        var _iterator7 = dropzone_createForOfIteratorHelper(entries, true), _step7;
                        try {
                          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                            var entry = _step7.value;
                            if (entry.isFile) {
                              entry.file(function(file) {
                                if (_this5.options.ignoreHiddenFiles && file.name.substring(0, 1) === ".") {
                                  return;
                                }
                                file.fullPath = "".concat(path, "/").concat(file.name);
                                return _this5.addFile(file);
                              });
                            } else if (entry.isDirectory) {
                              _this5._addFilesFromDirectory(entry, "".concat(path, "/").concat(entry.name));
                            }
                          }
                        } catch (err) {
                          _iterator7.e(err);
                        } finally {
                          _iterator7.f();
                        }
                        readEntries2();
                      }
                      return null;
                    }, errorHandler);
                  };
                  return readEntries();
                }
                // If `done()` is called without argument the file is accepted
                // If you call it with an error message, the file is rejected
                // (This allows for asynchronous validation)
                //
                // This function checks the filesize, and if the file.type passes the
                // `acceptedFiles` check.
              }, {
                key: "accept",
                value: function accept(file, done) {
                  if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1024 * 1024) {
                    done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
                  } else if (!Dropzone3.isValidFile(file, this.options.acceptedFiles)) {
                    done(this.options.dictInvalidFileType);
                  } else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
                    done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
                    this.emit("maxfilesexceeded", file);
                  } else {
                    this.options.accept.call(this, file, done);
                  }
                }
              }, {
                key: "addFile",
                value: function addFile(file) {
                  var _this6 = this;
                  file.upload = {
                    uuid: Dropzone3.uuidv4(),
                    progress: 0,
                    // Setting the total upload size to file.size for the beginning
                    // It's actual different than the size to be transmitted.
                    total: file.size,
                    bytesSent: 0,
                    filename: this._renameFile(file)
                    // Not setting chunking information here, because the acutal data — and
                    // thus the chunks — might change if `options.transformFile` is set
                    // and does something to the data.
                  };
                  this.files.push(file);
                  file.status = Dropzone3.ADDED;
                  this.emit("addedfile", file);
                  this._enqueueThumbnail(file);
                  this.accept(file, function(error) {
                    if (error) {
                      file.accepted = false;
                      _this6._errorProcessing([file], error);
                    } else {
                      file.accepted = true;
                      if (_this6.options.autoQueue) {
                        _this6.enqueueFile(file);
                      }
                    }
                    _this6._updateMaxFilesReachedClass();
                  });
                }
                // Wrapper for enqueueFile
              }, {
                key: "enqueueFiles",
                value: function enqueueFiles(files) {
                  var _iterator8 = dropzone_createForOfIteratorHelper(files, true), _step8;
                  try {
                    for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                      var file = _step8.value;
                      this.enqueueFile(file);
                    }
                  } catch (err) {
                    _iterator8.e(err);
                  } finally {
                    _iterator8.f();
                  }
                  return null;
                }
              }, {
                key: "enqueueFile",
                value: function enqueueFile(file) {
                  var _this7 = this;
                  if (file.status === Dropzone3.ADDED && file.accepted === true) {
                    file.status = Dropzone3.QUEUED;
                    if (this.options.autoProcessQueue) {
                      return setTimeout(function() {
                        return _this7.processQueue();
                      }, 0);
                    }
                  } else {
                    throw new Error("This file can't be queued because it has already been processed or was rejected.");
                  }
                }
              }, {
                key: "_enqueueThumbnail",
                value: function _enqueueThumbnail(file) {
                  var _this8 = this;
                  if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
                    this._thumbnailQueue.push(file);
                    return setTimeout(function() {
                      return _this8._processThumbnailQueue();
                    }, 0);
                  }
                }
              }, {
                key: "_processThumbnailQueue",
                value: function _processThumbnailQueue() {
                  var _this9 = this;
                  if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
                    return;
                  }
                  this._processingThumbnail = true;
                  var file = this._thumbnailQueue.shift();
                  return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, function(dataUrl) {
                    _this9.emit("thumbnail", file, dataUrl);
                    _this9._processingThumbnail = false;
                    return _this9._processThumbnailQueue();
                  });
                }
                // Can be called by the user to remove a file
              }, {
                key: "removeFile",
                value: function removeFile(file) {
                  if (file.status === Dropzone3.UPLOADING) {
                    this.cancelUpload(file);
                  }
                  this.files = without(this.files, file);
                  this.emit("removedfile", file);
                  if (this.files.length === 0) {
                    return this.emit("reset");
                  }
                }
                // Removes all files that aren't currently processed from the list
              }, {
                key: "removeAllFiles",
                value: function removeAllFiles(cancelIfNecessary) {
                  if (cancelIfNecessary == null) {
                    cancelIfNecessary = false;
                  }
                  var _iterator9 = dropzone_createForOfIteratorHelper(this.files.slice(), true), _step9;
                  try {
                    for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
                      var file = _step9.value;
                      if (file.status !== Dropzone3.UPLOADING || cancelIfNecessary) {
                        this.removeFile(file);
                      }
                    }
                  } catch (err) {
                    _iterator9.e(err);
                  } finally {
                    _iterator9.f();
                  }
                  return null;
                }
                // Resizes an image before it gets sent to the server. This function is the default behavior of
                // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
                // the resized blob.
              }, {
                key: "resizeImage",
                value: function resizeImage(file, width, height, resizeMethod, callback) {
                  var _this10 = this;
                  return this.createThumbnail(file, width, height, resizeMethod, true, function(dataUrl, canvas) {
                    if (canvas == null) {
                      return callback(file);
                    } else {
                      var resizeMimeType = _this10.options.resizeMimeType;
                      if (resizeMimeType == null) {
                        resizeMimeType = file.type;
                      }
                      var resizedDataURL = canvas.toDataURL(resizeMimeType, _this10.options.resizeQuality);
                      if (resizeMimeType === "image/jpeg" || resizeMimeType === "image/jpg") {
                        resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
                      }
                      return callback(Dropzone3.dataURItoBlob(resizedDataURL));
                    }
                  });
                }
              }, {
                key: "createThumbnail",
                value: function createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
                  var _this11 = this;
                  var fileReader = new FileReader();
                  fileReader.onload = function() {
                    file.dataURL = fileReader.result;
                    if (file.type === "image/svg+xml") {
                      if (callback != null) {
                        callback(fileReader.result);
                      }
                      return;
                    }
                    _this11.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
                  };
                  fileReader.readAsDataURL(file);
                }
                // `mockFile` needs to have these attributes:
                //
                //     { name: 'name', size: 12345, imageUrl: '' }
                //
                // `callback` will be invoked when the image has been downloaded and displayed.
                // `crossOrigin` will be added to the `img` tag when accessing the file.
              }, {
                key: "displayExistingFile",
                value: function displayExistingFile(mockFile, imageUrl, callback, crossOrigin) {
                  var _this12 = this;
                  var resizeThumbnail = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
                  this.emit("addedfile", mockFile);
                  this.emit("complete", mockFile);
                  if (!resizeThumbnail) {
                    this.emit("thumbnail", mockFile, imageUrl);
                    if (callback)
                      callback();
                  } else {
                    var onDone = function onDone2(thumbnail) {
                      _this12.emit("thumbnail", mockFile, thumbnail);
                      if (callback)
                        callback();
                    };
                    mockFile.dataURL = imageUrl;
                    this.createThumbnailFromUrl(mockFile, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, onDone, crossOrigin);
                  }
                }
              }, {
                key: "createThumbnailFromUrl",
                value: function createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
                  var _this13 = this;
                  var img = document.createElement("img");
                  if (crossOrigin) {
                    img.crossOrigin = crossOrigin;
                  }
                  fixOrientation = getComputedStyle(document.body)["imageOrientation"] == "from-image" ? false : fixOrientation;
                  img.onload = function() {
                    var loadExif = function loadExif2(callback2) {
                      return callback2(1);
                    };
                    if (typeof EXIF !== "undefined" && EXIF !== null && fixOrientation) {
                      loadExif = function loadExif2(callback2) {
                        return EXIF.getData(img, function() {
                          return callback2(EXIF.getTag(this, "Orientation"));
                        });
                      };
                    }
                    return loadExif(function(orientation) {
                      file.width = img.width;
                      file.height = img.height;
                      var resizeInfo = _this13.options.resize.call(_this13, file, width, height, resizeMethod);
                      var canvas = document.createElement("canvas");
                      var ctx = canvas.getContext("2d");
                      canvas.width = resizeInfo.trgWidth;
                      canvas.height = resizeInfo.trgHeight;
                      if (orientation > 4) {
                        canvas.width = resizeInfo.trgHeight;
                        canvas.height = resizeInfo.trgWidth;
                      }
                      switch (orientation) {
                        case 2:
                          ctx.translate(canvas.width, 0);
                          ctx.scale(-1, 1);
                          break;
                        case 3:
                          ctx.translate(canvas.width, canvas.height);
                          ctx.rotate(Math.PI);
                          break;
                        case 4:
                          ctx.translate(0, canvas.height);
                          ctx.scale(1, -1);
                          break;
                        case 5:
                          ctx.rotate(0.5 * Math.PI);
                          ctx.scale(1, -1);
                          break;
                        case 6:
                          ctx.rotate(0.5 * Math.PI);
                          ctx.translate(0, -canvas.width);
                          break;
                        case 7:
                          ctx.rotate(0.5 * Math.PI);
                          ctx.translate(canvas.height, -canvas.width);
                          ctx.scale(-1, 1);
                          break;
                        case 8:
                          ctx.rotate(-0.5 * Math.PI);
                          ctx.translate(-canvas.height, 0);
                          break;
                      }
                      drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                      var thumbnail = canvas.toDataURL("image/png");
                      if (callback != null) {
                        return callback(thumbnail, canvas);
                      }
                    });
                  };
                  if (callback != null) {
                    img.onerror = callback;
                  }
                  return img.src = file.dataURL;
                }
                // Goes through the queue and processes files if there aren't too many already.
              }, {
                key: "processQueue",
                value: function processQueue() {
                  var parallelUploads = this.options.parallelUploads;
                  var processingLength = this.getUploadingFiles().length;
                  var i = processingLength;
                  if (processingLength >= parallelUploads) {
                    return;
                  }
                  var queuedFiles = this.getQueuedFiles();
                  if (!(queuedFiles.length > 0)) {
                    return;
                  }
                  if (this.options.uploadMultiple) {
                    return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
                  } else {
                    while (i < parallelUploads) {
                      if (!queuedFiles.length) {
                        return;
                      }
                      this.processFile(queuedFiles.shift());
                      i++;
                    }
                  }
                }
                // Wrapper for `processFiles`
              }, {
                key: "processFile",
                value: function processFile(file) {
                  return this.processFiles([file]);
                }
                // Loads the file, then calls finishedLoading()
              }, {
                key: "processFiles",
                value: function processFiles(files) {
                  var _iterator10 = dropzone_createForOfIteratorHelper(files, true), _step10;
                  try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
                      var file = _step10.value;
                      file.processing = true;
                      file.status = Dropzone3.UPLOADING;
                      this.emit("processing", file);
                    }
                  } catch (err) {
                    _iterator10.e(err);
                  } finally {
                    _iterator10.f();
                  }
                  if (this.options.uploadMultiple) {
                    this.emit("processingmultiple", files);
                  }
                  return this.uploadFiles(files);
                }
              }, {
                key: "_getFilesWithXhr",
                value: function _getFilesWithXhr(xhr) {
                  var files;
                  return files = this.files.filter(function(file) {
                    return file.xhr === xhr;
                  }).map(function(file) {
                    return file;
                  });
                }
                // Cancels the file upload and sets the status to CANCELED
                // **if** the file is actually being uploaded.
                // If it's still in the queue, the file is being removed from it and the status
                // set to CANCELED.
              }, {
                key: "cancelUpload",
                value: function cancelUpload(file) {
                  if (file.status === Dropzone3.UPLOADING) {
                    var groupedFiles = this._getFilesWithXhr(file.xhr);
                    var _iterator11 = dropzone_createForOfIteratorHelper(groupedFiles, true), _step11;
                    try {
                      for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
                        var groupedFile = _step11.value;
                        groupedFile.status = Dropzone3.CANCELED;
                      }
                    } catch (err) {
                      _iterator11.e(err);
                    } finally {
                      _iterator11.f();
                    }
                    if (typeof file.xhr !== "undefined") {
                      file.xhr.abort();
                    }
                    var _iterator12 = dropzone_createForOfIteratorHelper(groupedFiles, true), _step12;
                    try {
                      for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
                        var _groupedFile = _step12.value;
                        this.emit("canceled", _groupedFile);
                      }
                    } catch (err) {
                      _iterator12.e(err);
                    } finally {
                      _iterator12.f();
                    }
                    if (this.options.uploadMultiple) {
                      this.emit("canceledmultiple", groupedFiles);
                    }
                  } else if (file.status === Dropzone3.ADDED || file.status === Dropzone3.QUEUED) {
                    file.status = Dropzone3.CANCELED;
                    this.emit("canceled", file);
                    if (this.options.uploadMultiple) {
                      this.emit("canceledmultiple", [file]);
                    }
                  }
                  if (this.options.autoProcessQueue) {
                    return this.processQueue();
                  }
                }
              }, {
                key: "resolveOption",
                value: function resolveOption(option) {
                  if (typeof option === "function") {
                    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                      args[_key - 1] = arguments[_key];
                    }
                    return option.apply(this, args);
                  }
                  return option;
                }
              }, {
                key: "uploadFile",
                value: function uploadFile(file) {
                  return this.uploadFiles([file]);
                }
              }, {
                key: "uploadFiles",
                value: function uploadFiles(files) {
                  var _this14 = this;
                  this._transformFiles(files, function(transformedFiles) {
                    if (_this14.options.chunking) {
                      var transformedFile = transformedFiles[0];
                      files[0].upload.chunked = _this14.options.chunking && (_this14.options.forceChunking || transformedFile.size > _this14.options.chunkSize);
                      files[0].upload.totalChunkCount = Math.ceil(transformedFile.size / _this14.options.chunkSize);
                    }
                    if (files[0].upload.chunked) {
                      var file = files[0];
                      var _transformedFile = transformedFiles[0];
                      var startedChunkCount = 0;
                      file.upload.chunks = [];
                      var handleNextChunk = function handleNextChunk2() {
                        var chunkIndex = 0;
                        while (file.upload.chunks[chunkIndex] !== void 0) {
                          chunkIndex++;
                        }
                        if (chunkIndex >= file.upload.totalChunkCount)
                          return;
                        startedChunkCount++;
                        var start = chunkIndex * _this14.options.chunkSize;
                        var end = Math.min(start + _this14.options.chunkSize, _transformedFile.size);
                        var dataBlock = {
                          name: _this14._getParamName(0),
                          data: _transformedFile.webkitSlice ? _transformedFile.webkitSlice(start, end) : _transformedFile.slice(start, end),
                          filename: file.upload.filename,
                          chunkIndex
                        };
                        file.upload.chunks[chunkIndex] = {
                          file,
                          index: chunkIndex,
                          dataBlock,
                          // In case we want to retry.
                          status: Dropzone3.UPLOADING,
                          progress: 0,
                          retries: 0
                          // The number of times this block has been retried.
                        };
                        _this14._uploadData(files, [dataBlock]);
                      };
                      file.upload.finishedChunkUpload = function(chunk, response) {
                        var allFinished = true;
                        chunk.status = Dropzone3.SUCCESS;
                        chunk.dataBlock = null;
                        chunk.xhr = null;
                        for (var i2 = 0; i2 < file.upload.totalChunkCount; i2++) {
                          if (file.upload.chunks[i2] === void 0) {
                            return handleNextChunk();
                          }
                          if (file.upload.chunks[i2].status !== Dropzone3.SUCCESS) {
                            allFinished = false;
                          }
                        }
                        if (allFinished) {
                          _this14.options.chunksUploaded(file, function() {
                            _this14._finished(files, response, null);
                          });
                        }
                      };
                      if (_this14.options.parallelChunkUploads) {
                        for (var i = 0; i < file.upload.totalChunkCount; i++) {
                          handleNextChunk();
                        }
                      } else {
                        handleNextChunk();
                      }
                    } else {
                      var dataBlocks = [];
                      for (var _i2 = 0; _i2 < files.length; _i2++) {
                        dataBlocks[_i2] = {
                          name: _this14._getParamName(_i2),
                          data: transformedFiles[_i2],
                          filename: files[_i2].upload.filename
                        };
                      }
                      _this14._uploadData(files, dataBlocks);
                    }
                  });
                }
                /// Returns the right chunk for given file and xhr
              }, {
                key: "_getChunk",
                value: function _getChunk(file, xhr) {
                  for (var i = 0; i < file.upload.totalChunkCount; i++) {
                    if (file.upload.chunks[i] !== void 0 && file.upload.chunks[i].xhr === xhr) {
                      return file.upload.chunks[i];
                    }
                  }
                }
                // This function actually uploads the file(s) to the server.
                // If dataBlocks contains the actual data to upload (meaning, that this could either be transformed
                // files, or individual chunks for chunked upload).
              }, {
                key: "_uploadData",
                value: function _uploadData(files, dataBlocks) {
                  var _this15 = this;
                  var xhr = new XMLHttpRequest();
                  var _iterator13 = dropzone_createForOfIteratorHelper(files, true), _step13;
                  try {
                    for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
                      var file = _step13.value;
                      file.xhr = xhr;
                    }
                  } catch (err) {
                    _iterator13.e(err);
                  } finally {
                    _iterator13.f();
                  }
                  if (files[0].upload.chunked) {
                    files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
                  }
                  var method = this.resolveOption(this.options.method, files);
                  var url = this.resolveOption(this.options.url, files);
                  xhr.open(method, url, true);
                  var timeout = this.resolveOption(this.options.timeout, files);
                  if (timeout)
                    xhr.timeout = this.resolveOption(this.options.timeout, files);
                  xhr.withCredentials = !!this.options.withCredentials;
                  xhr.onload = function(e) {
                    _this15._finishedUploading(files, xhr, e);
                  };
                  xhr.ontimeout = function() {
                    _this15._handleUploadError(files, xhr, "Request timedout after ".concat(_this15.options.timeout / 1e3, " seconds"));
                  };
                  xhr.onerror = function() {
                    _this15._handleUploadError(files, xhr);
                  };
                  var progressObj = xhr.upload != null ? xhr.upload : xhr;
                  progressObj.onprogress = function(e) {
                    return _this15._updateFilesUploadProgress(files, xhr, e);
                  };
                  var headers = {
                    Accept: "application/json",
                    "Cache-Control": "no-cache",
                    "X-Requested-With": "XMLHttpRequest"
                  };
                  if (this.options.headers) {
                    Dropzone3.extend(headers, this.options.headers);
                  }
                  for (var headerName in headers) {
                    var headerValue = headers[headerName];
                    if (headerValue) {
                      xhr.setRequestHeader(headerName, headerValue);
                    }
                  }
                  var formData = new FormData();
                  if (this.options.params) {
                    var additionalParams = this.options.params;
                    if (typeof additionalParams === "function") {
                      additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
                    }
                    for (var key in additionalParams) {
                      var value = additionalParams[key];
                      if (Array.isArray(value)) {
                        for (var i = 0; i < value.length; i++) {
                          formData.append(key, value[i]);
                        }
                      } else {
                        formData.append(key, value);
                      }
                    }
                  }
                  var _iterator14 = dropzone_createForOfIteratorHelper(files, true), _step14;
                  try {
                    for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
                      var _file = _step14.value;
                      this.emit("sending", _file, xhr, formData);
                    }
                  } catch (err) {
                    _iterator14.e(err);
                  } finally {
                    _iterator14.f();
                  }
                  if (this.options.uploadMultiple) {
                    this.emit("sendingmultiple", files, xhr, formData);
                  }
                  this._addFormElementData(formData);
                  for (var _i3 = 0; _i3 < dataBlocks.length; _i3++) {
                    var dataBlock = dataBlocks[_i3];
                    formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
                  }
                  this.submitRequest(xhr, formData, files);
                }
                // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.
              }, {
                key: "_transformFiles",
                value: function _transformFiles(files, done) {
                  var _this16 = this;
                  var transformedFiles = [];
                  var doneCounter = 0;
                  var _loop = function _loop2(i2) {
                    _this16.options.transformFile.call(_this16, files[i2], function(transformedFile) {
                      transformedFiles[i2] = transformedFile;
                      if (++doneCounter === files.length) {
                        done(transformedFiles);
                      }
                    });
                  };
                  for (var i = 0; i < files.length; i++) {
                    _loop(i);
                  }
                }
                // Takes care of adding other input elements of the form to the AJAX request
              }, {
                key: "_addFormElementData",
                value: function _addFormElementData(formData) {
                  if (this.element.tagName === "FORM") {
                    var _iterator15 = dropzone_createForOfIteratorHelper(this.element.querySelectorAll("input, textarea, select, button"), true), _step15;
                    try {
                      for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
                        var input = _step15.value;
                        var inputName = input.getAttribute("name");
                        var inputType = input.getAttribute("type");
                        if (inputType)
                          inputType = inputType.toLowerCase();
                        if (typeof inputName === "undefined" || inputName === null)
                          continue;
                        if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
                          var _iterator16 = dropzone_createForOfIteratorHelper(input.options, true), _step16;
                          try {
                            for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
                              var option = _step16.value;
                              if (option.selected) {
                                formData.append(inputName, option.value);
                              }
                            }
                          } catch (err) {
                            _iterator16.e(err);
                          } finally {
                            _iterator16.f();
                          }
                        } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) {
                          formData.append(inputName, input.value);
                        }
                      }
                    } catch (err) {
                      _iterator15.e(err);
                    } finally {
                      _iterator15.f();
                    }
                  }
                }
                // Invoked when there is new progress information about given files.
                // If e is not provided, it is assumed that the upload is finished.
              }, {
                key: "_updateFilesUploadProgress",
                value: function _updateFilesUploadProgress(files, xhr, e) {
                  if (!files[0].upload.chunked) {
                    var _iterator17 = dropzone_createForOfIteratorHelper(files, true), _step17;
                    try {
                      for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
                        var file = _step17.value;
                        if (file.upload.total && file.upload.bytesSent && file.upload.bytesSent == file.upload.total) {
                          continue;
                        }
                        if (e) {
                          file.upload.progress = 100 * e.loaded / e.total;
                          file.upload.total = e.total;
                          file.upload.bytesSent = e.loaded;
                        } else {
                          file.upload.progress = 100;
                          file.upload.bytesSent = file.upload.total;
                        }
                        this.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
                      }
                    } catch (err) {
                      _iterator17.e(err);
                    } finally {
                      _iterator17.f();
                    }
                  } else {
                    var _file2 = files[0];
                    var chunk = this._getChunk(_file2, xhr);
                    if (e) {
                      chunk.progress = 100 * e.loaded / e.total;
                      chunk.total = e.total;
                      chunk.bytesSent = e.loaded;
                    } else {
                      chunk.progress = 100;
                      chunk.bytesSent = chunk.total;
                    }
                    _file2.upload.progress = 0;
                    _file2.upload.total = 0;
                    _file2.upload.bytesSent = 0;
                    for (var i = 0; i < _file2.upload.totalChunkCount; i++) {
                      if (_file2.upload.chunks[i] && typeof _file2.upload.chunks[i].progress !== "undefined") {
                        _file2.upload.progress += _file2.upload.chunks[i].progress;
                        _file2.upload.total += _file2.upload.chunks[i].total;
                        _file2.upload.bytesSent += _file2.upload.chunks[i].bytesSent;
                      }
                    }
                    _file2.upload.progress = _file2.upload.progress / _file2.upload.totalChunkCount;
                    this.emit("uploadprogress", _file2, _file2.upload.progress, _file2.upload.bytesSent);
                  }
                }
              }, {
                key: "_finishedUploading",
                value: function _finishedUploading(files, xhr, e) {
                  var response;
                  if (files[0].status === Dropzone3.CANCELED) {
                    return;
                  }
                  if (xhr.readyState !== 4) {
                    return;
                  }
                  if (xhr.responseType !== "arraybuffer" && xhr.responseType !== "blob") {
                    response = xhr.responseText;
                    if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
                      try {
                        response = JSON.parse(response);
                      } catch (error) {
                        e = error;
                        response = "Invalid JSON response from server.";
                      }
                    }
                  }
                  this._updateFilesUploadProgress(files, xhr);
                  if (!(200 <= xhr.status && xhr.status < 300)) {
                    this._handleUploadError(files, xhr, response);
                  } else {
                    if (files[0].upload.chunked) {
                      files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr), response);
                    } else {
                      this._finished(files, response, e);
                    }
                  }
                }
              }, {
                key: "_handleUploadError",
                value: function _handleUploadError(files, xhr, response) {
                  if (files[0].status === Dropzone3.CANCELED) {
                    return;
                  }
                  if (files[0].upload.chunked && this.options.retryChunks) {
                    var chunk = this._getChunk(files[0], xhr);
                    if (chunk.retries++ < this.options.retryChunksLimit) {
                      this._uploadData(files, [chunk.dataBlock]);
                      return;
                    } else {
                      console.warn("Retried this chunk too often. Giving up.");
                    }
                  }
                  this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
                }
              }, {
                key: "submitRequest",
                value: function submitRequest(xhr, formData, files) {
                  if (xhr.readyState != 1) {
                    console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");
                    return;
                  }
                  xhr.send(formData);
                }
                // Called internally when processing is finished.
                // Individual callbacks have to be called in the appropriate sections.
              }, {
                key: "_finished",
                value: function _finished(files, responseText, e) {
                  var _iterator18 = dropzone_createForOfIteratorHelper(files, true), _step18;
                  try {
                    for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
                      var file = _step18.value;
                      file.status = Dropzone3.SUCCESS;
                      this.emit("success", file, responseText, e);
                      this.emit("complete", file);
                    }
                  } catch (err) {
                    _iterator18.e(err);
                  } finally {
                    _iterator18.f();
                  }
                  if (this.options.uploadMultiple) {
                    this.emit("successmultiple", files, responseText, e);
                    this.emit("completemultiple", files);
                  }
                  if (this.options.autoProcessQueue) {
                    return this.processQueue();
                  }
                }
                // Called internally when processing is finished.
                // Individual callbacks have to be called in the appropriate sections.
              }, {
                key: "_errorProcessing",
                value: function _errorProcessing(files, message, xhr) {
                  var _iterator19 = dropzone_createForOfIteratorHelper(files, true), _step19;
                  try {
                    for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
                      var file = _step19.value;
                      file.status = Dropzone3.ERROR;
                      this.emit("error", file, message, xhr);
                      this.emit("complete", file);
                    }
                  } catch (err) {
                    _iterator19.e(err);
                  } finally {
                    _iterator19.f();
                  }
                  if (this.options.uploadMultiple) {
                    this.emit("errormultiple", files, message, xhr);
                    this.emit("completemultiple", files);
                  }
                  if (this.options.autoProcessQueue) {
                    return this.processQueue();
                  }
                }
              }], [{
                key: "initClass",
                value: function initClass() {
                  this.prototype.Emitter = Emitter;
                  this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];
                  this.prototype._thumbnailQueue = [];
                  this.prototype._processingThumbnail = false;
                }
                // global utility
              }, {
                key: "extend",
                value: function extend(target) {
                  for (var _len2 = arguments.length, objects = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    objects[_key2 - 1] = arguments[_key2];
                  }
                  for (var _i4 = 0, _objects = objects; _i4 < _objects.length; _i4++) {
                    var object = _objects[_i4];
                    for (var key in object) {
                      var val = object[key];
                      target[key] = val;
                    }
                  }
                  return target;
                }
              }, {
                key: "uuidv4",
                value: function uuidv4() {
                  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                    var r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
                    return v.toString(16);
                  });
                }
              }]);
              return Dropzone3;
            }(Emitter);
            Dropzone2.initClass();
            Dropzone2.version = "5.9.3";
            Dropzone2.options = {};
            Dropzone2.optionsForElement = function(element) {
              if (element.getAttribute("id")) {
                return Dropzone2.options[camelize(element.getAttribute("id"))];
              } else {
                return void 0;
              }
            };
            Dropzone2.instances = [];
            Dropzone2.forElement = function(element) {
              if (typeof element === "string") {
                element = document.querySelector(element);
              }
              if ((element != null ? element.dropzone : void 0) == null) {
                throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
              }
              return element.dropzone;
            };
            Dropzone2.autoDiscover = true;
            Dropzone2.discover = function() {
              var dropzones;
              if (document.querySelectorAll) {
                dropzones = document.querySelectorAll(".dropzone");
              } else {
                dropzones = [];
                var checkElements = function checkElements2(elements) {
                  return function() {
                    var result = [];
                    var _iterator20 = dropzone_createForOfIteratorHelper(elements, true), _step20;
                    try {
                      for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
                        var el = _step20.value;
                        if (/(^| )dropzone($| )/.test(el.className)) {
                          result.push(dropzones.push(el));
                        } else {
                          result.push(void 0);
                        }
                      }
                    } catch (err) {
                      _iterator20.e(err);
                    } finally {
                      _iterator20.f();
                    }
                    return result;
                  }();
                };
                checkElements(document.getElementsByTagName("div"));
                checkElements(document.getElementsByTagName("form"));
              }
              return function() {
                var result = [];
                var _iterator21 = dropzone_createForOfIteratorHelper(dropzones, true), _step21;
                try {
                  for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
                    var dropzone = _step21.value;
                    if (Dropzone2.optionsForElement(dropzone) !== false) {
                      result.push(new Dropzone2(dropzone));
                    } else {
                      result.push(void 0);
                    }
                  }
                } catch (err) {
                  _iterator21.e(err);
                } finally {
                  _iterator21.f();
                }
                return result;
              }();
            };
            Dropzone2.blockedBrowsers = [
              // The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
              /opera.*(Macintosh|Windows Phone).*version\/12/i
            ];
            Dropzone2.isBrowserSupported = function() {
              var capableBrowser = true;
              if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
                if (!("classList" in document.createElement("a"))) {
                  capableBrowser = false;
                } else {
                  if (Dropzone2.blacklistedBrowsers !== void 0) {
                    Dropzone2.blockedBrowsers = Dropzone2.blacklistedBrowsers;
                  }
                  var _iterator22 = dropzone_createForOfIteratorHelper(Dropzone2.blockedBrowsers, true), _step22;
                  try {
                    for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
                      var regex = _step22.value;
                      if (regex.test(navigator.userAgent)) {
                        capableBrowser = false;
                        continue;
                      }
                    }
                  } catch (err) {
                    _iterator22.e(err);
                  } finally {
                    _iterator22.f();
                  }
                }
              } else {
                capableBrowser = false;
              }
              return capableBrowser;
            };
            Dropzone2.dataURItoBlob = function(dataURI) {
              var byteString = atob(dataURI.split(",")[1]);
              var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
              var ab = new ArrayBuffer(byteString.length);
              var ia = new Uint8Array(ab);
              for (var i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) {
                ia[i] = byteString.charCodeAt(i);
              }
              return new Blob([ab], {
                type: mimeString
              });
            };
            var without = function without2(list, rejectedItem) {
              return list.filter(function(item) {
                return item !== rejectedItem;
              }).map(function(item) {
                return item;
              });
            };
            var camelize = function camelize2(str) {
              return str.replace(/[\-_](\w)/g, function(match) {
                return match.charAt(1).toUpperCase();
              });
            };
            Dropzone2.createElement = function(string) {
              var div = document.createElement("div");
              div.innerHTML = string;
              return div.childNodes[0];
            };
            Dropzone2.elementInside = function(element, container) {
              if (element === container) {
                return true;
              }
              while (element = element.parentNode) {
                if (element === container) {
                  return true;
                }
              }
              return false;
            };
            Dropzone2.getElement = function(el, name) {
              var element;
              if (typeof el === "string") {
                element = document.querySelector(el);
              } else if (el.nodeType != null) {
                element = el;
              }
              if (element == null) {
                throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector or a plain HTML element."));
              }
              return element;
            };
            Dropzone2.getElements = function(els, name) {
              var el, elements;
              if (els instanceof Array) {
                elements = [];
                try {
                  var _iterator23 = dropzone_createForOfIteratorHelper(els, true), _step23;
                  try {
                    for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
                      el = _step23.value;
                      elements.push(this.getElement(el, name));
                    }
                  } catch (err) {
                    _iterator23.e(err);
                  } finally {
                    _iterator23.f();
                  }
                } catch (e) {
                  elements = null;
                }
              } else if (typeof els === "string") {
                elements = [];
                var _iterator24 = dropzone_createForOfIteratorHelper(document.querySelectorAll(els), true), _step24;
                try {
                  for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
                    el = _step24.value;
                    elements.push(el);
                  }
                } catch (err) {
                  _iterator24.e(err);
                } finally {
                  _iterator24.f();
                }
              } else if (els.nodeType != null) {
                elements = [els];
              }
              if (elements == null || !elements.length) {
                throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));
              }
              return elements;
            };
            Dropzone2.confirm = function(question, accepted, rejected) {
              if (window.confirm(question)) {
                return accepted();
              } else if (rejected != null) {
                return rejected();
              }
            };
            Dropzone2.isValidFile = function(file, acceptedFiles) {
              if (!acceptedFiles) {
                return true;
              }
              acceptedFiles = acceptedFiles.split(",");
              var mimeType = file.type;
              var baseMimeType = mimeType.replace(/\/.*$/, "");
              var _iterator25 = dropzone_createForOfIteratorHelper(acceptedFiles, true), _step25;
              try {
                for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
                  var validType = _step25.value;
                  validType = validType.trim();
                  if (validType.charAt(0) === ".") {
                    if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
                      return true;
                    }
                  } else if (/\/\*$/.test(validType)) {
                    if (baseMimeType === validType.replace(/\/.*$/, "")) {
                      return true;
                    }
                  } else {
                    if (mimeType === validType) {
                      return true;
                    }
                  }
                }
              } catch (err) {
                _iterator25.e(err);
              } finally {
                _iterator25.f();
              }
              return false;
            };
            if (typeof jQuery !== "undefined" && jQuery !== null) {
              jQuery.fn.dropzone = function(options) {
                return this.each(function() {
                  return new Dropzone2(this, options);
                });
              };
            }
            Dropzone2.ADDED = "added";
            Dropzone2.QUEUED = "queued";
            Dropzone2.ACCEPTED = Dropzone2.QUEUED;
            Dropzone2.UPLOADING = "uploading";
            Dropzone2.PROCESSING = Dropzone2.UPLOADING;
            Dropzone2.CANCELED = "canceled";
            Dropzone2.ERROR = "error";
            Dropzone2.SUCCESS = "success";
            var detectVerticalSquash = function detectVerticalSquash2(img) {
              var iw = img.naturalWidth;
              var ih = img.naturalHeight;
              var canvas = document.createElement("canvas");
              canvas.width = 1;
              canvas.height = ih;
              var ctx = canvas.getContext("2d");
              ctx.drawImage(img, 0, 0);
              var _ctx$getImageData = ctx.getImageData(1, 0, 1, ih), data = _ctx$getImageData.data;
              var sy = 0;
              var ey = ih;
              var py = ih;
              while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                  ey = py;
                } else {
                  sy = py;
                }
                py = ey + sy >> 1;
              }
              var ratio = py / ih;
              if (ratio === 0) {
                return 1;
              } else {
                return ratio;
              }
            };
            var drawImageIOSFix = function drawImageIOSFix2(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
              var vertSquashRatio = detectVerticalSquash(img);
              return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
            };
            var ExifRestore = function() {
              function ExifRestore2() {
                dropzone_classCallCheck(this, ExifRestore2);
              }
              dropzone_createClass(ExifRestore2, null, [{
                key: "initClass",
                value: function initClass() {
                  this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                }
              }, {
                key: "encode64",
                value: function encode64(input) {
                  var output = "";
                  var chr1 = void 0;
                  var chr2 = void 0;
                  var chr3 = "";
                  var enc1 = void 0;
                  var enc2 = void 0;
                  var enc3 = void 0;
                  var enc4 = "";
                  var i = 0;
                  while (true) {
                    chr1 = input[i++];
                    chr2 = input[i++];
                    chr3 = input[i++];
                    enc1 = chr1 >> 2;
                    enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                    enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                    enc4 = chr3 & 63;
                    if (isNaN(chr2)) {
                      enc3 = enc4 = 64;
                    } else if (isNaN(chr3)) {
                      enc4 = 64;
                    }
                    output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";
                    if (!(i < input.length)) {
                      break;
                    }
                  }
                  return output;
                }
              }, {
                key: "restore",
                value: function restore(origFileBase64, resizedFileBase64) {
                  if (!origFileBase64.match("data:image/jpeg;base64,")) {
                    return resizedFileBase64;
                  }
                  var rawImage = this.decode64(origFileBase64.replace("data:image/jpeg;base64,", ""));
                  var segments = this.slice2Segments(rawImage);
                  var image = this.exifManipulation(resizedFileBase64, segments);
                  return "data:image/jpeg;base64,".concat(this.encode64(image));
                }
              }, {
                key: "exifManipulation",
                value: function exifManipulation(resizedFileBase64, segments) {
                  var exifArray = this.getExifArray(segments);
                  var newImageArray = this.insertExif(resizedFileBase64, exifArray);
                  var aBuffer = new Uint8Array(newImageArray);
                  return aBuffer;
                }
              }, {
                key: "getExifArray",
                value: function getExifArray(segments) {
                  var seg = void 0;
                  var x = 0;
                  while (x < segments.length) {
                    seg = segments[x];
                    if (seg[0] === 255 & seg[1] === 225) {
                      return seg;
                    }
                    x++;
                  }
                  return [];
                }
              }, {
                key: "insertExif",
                value: function insertExif(resizedFileBase64, exifArray) {
                  var imageData = resizedFileBase64.replace("data:image/jpeg;base64,", "");
                  var buf = this.decode64(imageData);
                  var separatePoint = buf.indexOf(255, 3);
                  var mae = buf.slice(0, separatePoint);
                  var ato = buf.slice(separatePoint);
                  var array = mae;
                  array = array.concat(exifArray);
                  array = array.concat(ato);
                  return array;
                }
              }, {
                key: "slice2Segments",
                value: function slice2Segments(rawImageArray) {
                  var head = 0;
                  var segments = [];
                  while (true) {
                    var length;
                    if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
                      break;
                    }
                    if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
                      head += 2;
                    } else {
                      length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
                      var endPoint = head + length + 2;
                      var seg = rawImageArray.slice(head, endPoint);
                      segments.push(seg);
                      head = endPoint;
                    }
                    if (head > rawImageArray.length) {
                      break;
                    }
                  }
                  return segments;
                }
              }, {
                key: "decode64",
                value: function decode64(input) {
                  var output = "";
                  var chr1 = void 0;
                  var chr2 = void 0;
                  var chr3 = "";
                  var enc1 = void 0;
                  var enc2 = void 0;
                  var enc3 = void 0;
                  var enc4 = "";
                  var i = 0;
                  var buf = [];
                  var base64test = /[^A-Za-z0-9\+\/\=]/g;
                  if (base64test.exec(input)) {
                    console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");
                  }
                  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                  while (true) {
                    enc1 = this.KEY_STR.indexOf(input.charAt(i++));
                    enc2 = this.KEY_STR.indexOf(input.charAt(i++));
                    enc3 = this.KEY_STR.indexOf(input.charAt(i++));
                    enc4 = this.KEY_STR.indexOf(input.charAt(i++));
                    chr1 = enc1 << 2 | enc2 >> 4;
                    chr2 = (enc2 & 15) << 4 | enc3 >> 2;
                    chr3 = (enc3 & 3) << 6 | enc4;
                    buf.push(chr1);
                    if (enc3 !== 64) {
                      buf.push(chr2);
                    }
                    if (enc4 !== 64) {
                      buf.push(chr3);
                    }
                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";
                    if (!(i < input.length)) {
                      break;
                    }
                  }
                  return buf;
                }
              }]);
              return ExifRestore2;
            }();
            ExifRestore.initClass();
            var contentLoaded = function contentLoaded2(win, fn) {
              var done = false;
              var top = true;
              var doc = win.document;
              var root = doc.documentElement;
              var add = doc.addEventListener ? "addEventListener" : "attachEvent";
              var rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
              var pre = doc.addEventListener ? "" : "on";
              var init = function init2(e) {
                if (e.type === "readystatechange" && doc.readyState !== "complete") {
                  return;
                }
                (e.type === "load" ? win : doc)[rem](pre + e.type, init2, false);
                if (!done && (done = true)) {
                  return fn.call(win, e.type || e);
                }
              };
              var poll = function poll2() {
                try {
                  root.doScroll("left");
                } catch (e) {
                  setTimeout(poll2, 50);
                  return;
                }
                return init("poll");
              };
              if (doc.readyState !== "complete") {
                if (doc.createEventObject && root.doScroll) {
                  try {
                    top = !win.frameElement;
                  } catch (error) {
                  }
                  if (top) {
                    poll();
                  }
                }
                doc[add](pre + "DOMContentLoaded", init, false);
                doc[add](pre + "readystatechange", init, false);
                return win[add](pre + "load", init, false);
              }
            };
            Dropzone2._autoDiscoverFunction = function() {
              if (Dropzone2.autoDiscover) {
                return Dropzone2.discover();
              }
            };
            contentLoaded(window, Dropzone2._autoDiscoverFunction);
            function __guard__(value, transform) {
              return typeof value !== "undefined" && value !== null ? transform(value) : void 0;
            }
            function __guardMethod__(obj, methodName, transform) {
              if (typeof obj !== "undefined" && obj !== null && typeof obj[methodName] === "function") {
                return transform(obj, methodName);
              } else {
                return void 0;
              }
            }
            ;
            window.Dropzone = Dropzone2;
            var dropzone_dist = Dropzone2;
          }();
          return __webpack_exports__;
        }()
      );
    });
  }
});

// node_modules/ngx-dropzone-wrapper/fesm2022/ngx-dropzone-wrapper.mjs
var import_dropzone = __toESM(require_dropzone(), 1);
function DropzoneComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("background-image", ctx_r0.getPlaceholder());
  }
}
var _c0 = ["*"];
var DROPZONE_CONFIG = new InjectionToken("DROPZONE_CONFIG");
var DropzoneEvents = ["error", "success", "sending", "canceled", "complete", "processing", "drop", "dragStart", "dragEnd", "dragEnter", "dragOver", "dragLeave", "thumbnail", "addedFile", "addedFiles", "removedFile", "uploadProgress", "maxFilesReached", "maxFilesExceeded", "errorMultiple", "successMultiple", "sendingMultiple", "canceledMultiple", "completeMultiple", "processingMultiple", "reset", "queueComplete", "totalUploadProgress"];
var DropzoneConfig = class {
  timeout;
  autoReset;
  errorReset;
  cancelReset;
  url;
  method;
  params;
  headers;
  init;
  accept;
  resize;
  fallback;
  renameFile;
  transformFile;
  chunksUploaded;
  withCredentials;
  previewsContainer;
  hiddenInputContainer;
  clickable;
  paramName;
  capture;
  maxFiles;
  maxFilesize;
  filesizeBase;
  acceptedFiles;
  forceFallback;
  addRemoveLinks;
  uploadMultiple;
  parallelUploads;
  resizeWidth;
  resizeHeight;
  resizeMethod;
  resizeQuality;
  resizeMimeType;
  thumbnailWidth;
  thumbnailHeight;
  thumbnailMethod;
  previewTemplate;
  autoQueue;
  autoProcessQueue;
  ignoreHiddenFiles;
  maxThumbnailFilesize;
  createImageThumbnails;
  chunking;
  chunkSize;
  retryChunks;
  forceChunking;
  retryChunksLimit;
  parallelChunkUploads;
  dictFileSizeUnits;
  dictDefaultMessage;
  dictFallbackMessage;
  dictFileTooBig;
  dictResponseError;
  dictInvalidFileType;
  dictRemoveFile;
  dictCancelUpload;
  dictUploadCanceled;
  dictFallbackText;
  dictMaxFilesExceeded;
  dictRemoveFileConfirmation;
  dictCancelUploadConfirmation;
  constructor(config = {}) {
    this.assign(config);
  }
  assign(config = {}, target) {
    target = target || this;
    for (const key in config) {
      if (config[key] != null && !Array.isArray(config[key]) && typeof config[key] === "object" && !(config[key] instanceof HTMLElement)) {
        target[key] = {};
        this.assign(config[key], target[key]);
      } else {
        target[key] = config[key];
      }
    }
  }
};
var DropzoneDirective = class _DropzoneDirective {
  zone;
  renderer;
  elementRef;
  differs;
  platformId;
  defaults;
  instance;
  configDiff = null;
  disabled = false;
  config;
  DZ_INIT = new EventEmitter();
  DZ_ERROR = new EventEmitter();
  DZ_SUCCESS = new EventEmitter();
  DZ_SENDING = new EventEmitter();
  DZ_CANCELED = new EventEmitter();
  DZ_COMPLETE = new EventEmitter();
  DZ_PROCESSING = new EventEmitter();
  DZ_DROP = new EventEmitter();
  DZ_DRAGSTART = new EventEmitter();
  DZ_DRAGEND = new EventEmitter();
  DZ_DRAGENTER = new EventEmitter();
  DZ_DRAGOVER = new EventEmitter();
  DZ_DRAGLEAVE = new EventEmitter();
  DZ_THUMBNAIL = new EventEmitter();
  DZ_ADDEDFILE = new EventEmitter();
  DZ_ADDEDFILES = new EventEmitter();
  DZ_REMOVEDFILE = new EventEmitter();
  DZ_UPLOADPROGRESS = new EventEmitter();
  DZ_MAXFILESREACHED = new EventEmitter();
  DZ_MAXFILESEXCEEDED = new EventEmitter();
  DZ_ERRORMULTIPLE = new EventEmitter();
  DZ_SUCCESSMULTIPLE = new EventEmitter();
  DZ_SENDINGMULTIPLE = new EventEmitter();
  DZ_CANCELEDMULTIPLE = new EventEmitter();
  DZ_COMPLETEMULTIPLE = new EventEmitter();
  DZ_PROCESSINGMULTIPLE = new EventEmitter();
  DZ_RESET = new EventEmitter();
  DZ_QUEUECOMPLETE = new EventEmitter();
  DZ_TOTALUPLOADPROGRESS = new EventEmitter();
  constructor(zone, renderer, elementRef, differs, platformId, defaults) {
    this.zone = zone;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.differs = differs;
    this.platformId = platformId;
    this.defaults = defaults;
    const dz = import_dropzone.Dropzone;
    dz.autoDiscover = false;
  }
  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const params = new DropzoneConfig(this.defaults);
    params.assign(this.config);
    this.renderer.addClass(this.elementRef.nativeElement, params.maxFiles === 1 ? "dz-single" : "dz-multiple");
    this.renderer.removeClass(this.elementRef.nativeElement, params.maxFiles === 1 ? "dz-multiple" : "dz-single");
    Object.keys(params).forEach((key) => params[key] === void 0 && delete params[key]);
    this.zone.runOutsideAngular(() => {
      console.log(params);
      this.instance = new import_dropzone.Dropzone(this.elementRef.nativeElement, params);
    });
    if (this.disabled) {
      this.instance.disable();
    }
    if (this.DZ_INIT.observers.length) {
      this.zone.run(() => {
        this.DZ_INIT.emit(this.instance);
      });
    }
    this.instance.on("success", () => {
      if (params.autoReset != null) {
        setTimeout(() => this.reset(), params.autoReset);
      }
    });
    this.instance.on("error", () => {
      if (params.errorReset != null) {
        setTimeout(() => this.reset(), params.errorReset);
      }
    });
    this.instance.on("canceled", () => {
      if (params.cancelReset != null) {
        setTimeout(() => this.reset(), params.cancelReset);
      }
    });
    DropzoneEvents.forEach((eventName) => {
      this.instance.on(eventName.toLowerCase(), (...args) => {
        args = args.length === 1 ? args[0] : args;
        const output = `DZ_${eventName.toUpperCase()}`;
        const emitter = this[output];
        if (emitter.observers.length > 0) {
          this.zone.run(() => {
            emitter.emit(args);
          });
        }
      });
    });
    if (!this.configDiff) {
      this.configDiff = this.differs.find(this.config || {}).create();
      this.configDiff.diff(this.config || {});
    }
  }
  ngOnDestroy() {
    if (this.instance) {
      this.zone.runOutsideAngular(() => {
        this.instance.destroy();
      });
      this.instance = null;
    }
  }
  ngDoCheck() {
    if (!this.disabled && this.configDiff) {
      const changes = this.configDiff.diff(this.config || {});
      if (changes && this.instance) {
        this.ngOnDestroy();
        this.ngOnInit();
      }
    }
  }
  ngOnChanges(changes) {
    if (this.instance && changes["disabled"]) {
      if (changes["disabled"].currentValue !== changes["disabled"].previousValue) {
        if (changes["disabled"].currentValue === false) {
          this.zone.runOutsideAngular(() => {
            this.instance.enable();
          });
        } else if (changes["disabled"].currentValue === true) {
          this.zone.runOutsideAngular(() => {
            this.instance.disable();
          });
        }
      }
    }
  }
  dropzone() {
    return this.instance;
  }
  reset(cancel) {
    if (this.instance) {
      this.zone.runOutsideAngular(() => {
        this.instance.removeAllFiles(cancel);
      });
    }
  }
  static ɵfac = function DropzoneDirective_Factory(t) {
    return new (t || _DropzoneDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(DROPZONE_CONFIG, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DropzoneDirective,
    selectors: [["", "dropzone", ""]],
    inputs: {
      disabled: "disabled",
      config: [InputFlags.None, "dropzone", "config"]
    },
    outputs: {
      DZ_INIT: "init",
      DZ_ERROR: "error",
      DZ_SUCCESS: "success",
      DZ_SENDING: "sending",
      DZ_CANCELED: "canceled",
      DZ_COMPLETE: "complete",
      DZ_PROCESSING: "processing",
      DZ_DROP: "drop",
      DZ_DRAGSTART: "dragStart",
      DZ_DRAGEND: "dragEnd",
      DZ_DRAGENTER: "dragEnter",
      DZ_DRAGOVER: "dragOver",
      DZ_DRAGLEAVE: "dragLeave",
      DZ_THUMBNAIL: "thumbnail",
      DZ_ADDEDFILE: "addedFile",
      DZ_ADDEDFILES: "addedFiles",
      DZ_REMOVEDFILE: "removedFile",
      DZ_UPLOADPROGRESS: "uploadProgress",
      DZ_MAXFILESREACHED: "maxFilesReached",
      DZ_MAXFILESEXCEEDED: "maxFilesExceeded",
      DZ_ERRORMULTIPLE: "errorMultiple",
      DZ_SUCCESSMULTIPLE: "successMultiple",
      DZ_SENDINGMULTIPLE: "sendingMultiple",
      DZ_CANCELEDMULTIPLE: "canceledMultiple",
      DZ_COMPLETEMULTIPLE: "completeMultiple",
      DZ_PROCESSINGMULTIPLE: "processingMultiple",
      DZ_RESET: "reset",
      DZ_QUEUECOMPLETE: "queueComplete",
      DZ_TOTALUPLOADPROGRESS: "totalUploadProgress"
    },
    exportAs: ["ngxDropzone"],
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropzoneDirective, [{
    type: Directive,
    args: [{
      selector: "[dropzone]",
      exportAs: "ngxDropzone"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: KeyValueDiffers
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DROPZONE_CONFIG]
    }]
  }], {
    disabled: [{
      type: Input
    }],
    config: [{
      type: Input,
      args: ["dropzone"]
    }],
    DZ_INIT: [{
      type: Output,
      args: ["init"]
    }],
    DZ_ERROR: [{
      type: Output,
      args: ["error"]
    }],
    DZ_SUCCESS: [{
      type: Output,
      args: ["success"]
    }],
    DZ_SENDING: [{
      type: Output,
      args: ["sending"]
    }],
    DZ_CANCELED: [{
      type: Output,
      args: ["canceled"]
    }],
    DZ_COMPLETE: [{
      type: Output,
      args: ["complete"]
    }],
    DZ_PROCESSING: [{
      type: Output,
      args: ["processing"]
    }],
    DZ_DROP: [{
      type: Output,
      args: ["drop"]
    }],
    DZ_DRAGSTART: [{
      type: Output,
      args: ["dragStart"]
    }],
    DZ_DRAGEND: [{
      type: Output,
      args: ["dragEnd"]
    }],
    DZ_DRAGENTER: [{
      type: Output,
      args: ["dragEnter"]
    }],
    DZ_DRAGOVER: [{
      type: Output,
      args: ["dragOver"]
    }],
    DZ_DRAGLEAVE: [{
      type: Output,
      args: ["dragLeave"]
    }],
    DZ_THUMBNAIL: [{
      type: Output,
      args: ["thumbnail"]
    }],
    DZ_ADDEDFILE: [{
      type: Output,
      args: ["addedFile"]
    }],
    DZ_ADDEDFILES: [{
      type: Output,
      args: ["addedFiles"]
    }],
    DZ_REMOVEDFILE: [{
      type: Output,
      args: ["removedFile"]
    }],
    DZ_UPLOADPROGRESS: [{
      type: Output,
      args: ["uploadProgress"]
    }],
    DZ_MAXFILESREACHED: [{
      type: Output,
      args: ["maxFilesReached"]
    }],
    DZ_MAXFILESEXCEEDED: [{
      type: Output,
      args: ["maxFilesExceeded"]
    }],
    DZ_ERRORMULTIPLE: [{
      type: Output,
      args: ["errorMultiple"]
    }],
    DZ_SUCCESSMULTIPLE: [{
      type: Output,
      args: ["successMultiple"]
    }],
    DZ_SENDINGMULTIPLE: [{
      type: Output,
      args: ["sendingMultiple"]
    }],
    DZ_CANCELEDMULTIPLE: [{
      type: Output,
      args: ["canceledMultiple"]
    }],
    DZ_COMPLETEMULTIPLE: [{
      type: Output,
      args: ["completeMultiple"]
    }],
    DZ_PROCESSINGMULTIPLE: [{
      type: Output,
      args: ["processingMultiple"]
    }],
    DZ_RESET: [{
      type: Output,
      args: ["reset"]
    }],
    DZ_QUEUECOMPLETE: [{
      type: Output,
      args: ["queueComplete"]
    }],
    DZ_TOTALUPLOADPROGRESS: [{
      type: Output,
      args: ["totalUploadProgress"]
    }]
  });
})();
var DropzoneComponent = class _DropzoneComponent {
  platformId;
  disabled = false;
  config;
  message = "Click or drag files to upload";
  placeholder = "";
  useDropzoneClass = true;
  DZ_INIT = new EventEmitter();
  DZ_ERROR = new EventEmitter();
  DZ_SUCCESS = new EventEmitter();
  DZ_SENDING = new EventEmitter();
  DZ_CANCELED = new EventEmitter();
  DZ_COMPLETE = new EventEmitter();
  DZ_PROCESSING = new EventEmitter();
  DZ_DROP = new EventEmitter();
  DZ_DRAGSTART = new EventEmitter();
  DZ_DRAGEND = new EventEmitter();
  DZ_DRAGENTER = new EventEmitter();
  DZ_DRAGOVER = new EventEmitter();
  DZ_DRAGLEAVE = new EventEmitter();
  DZ_THUMBNAIL = new EventEmitter();
  DZ_ADDEDFILE = new EventEmitter();
  DZ_ADDEDFILES = new EventEmitter();
  DZ_REMOVEDFILE = new EventEmitter();
  DZ_UPLOADPROGRESS = new EventEmitter();
  DZ_MAXFILESREACHED = new EventEmitter();
  DZ_MAXFILESEXCEEDED = new EventEmitter();
  DZ_ERRORMULTIPLE = new EventEmitter();
  DZ_SUCCESSMULTIPLE = new EventEmitter();
  DZ_SENDINGMULTIPLE = new EventEmitter();
  DZ_CANCELEDMULTIPLE = new EventEmitter();
  DZ_COMPLETEMULTIPLE = new EventEmitter();
  DZ_PROCESSINGMULTIPLE = new EventEmitter();
  DZ_RESET = new EventEmitter();
  DZ_QUEUECOMPLETE = new EventEmitter();
  DZ_TOTALUPLOADPROGRESS = new EventEmitter();
  directiveRef;
  constructor(platformId) {
    this.platformId = platformId;
  }
  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    window.setTimeout(() => {
      DropzoneEvents.forEach((eventName) => {
        if (this.directiveRef) {
          const output = `DZ_${eventName.toUpperCase()}`;
          const directiveOutput = output;
          const componentOutput = output;
          this.directiveRef[directiveOutput] = this[componentOutput];
        }
      });
    }, 0);
  }
  getPlaceholder() {
    return "url(" + encodeURI(this.placeholder) + ")";
  }
  static ɵfac = function DropzoneComponent_Factory(t) {
    return new (t || _DropzoneComponent)(ɵɵdirectiveInject(PLATFORM_ID));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DropzoneComponent,
    selectors: [["dropzone"]],
    viewQuery: function DropzoneComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(DropzoneDirective, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.directiveRef = _t.first);
      }
    },
    inputs: {
      disabled: "disabled",
      config: "config",
      message: "message",
      placeholder: "placeholder",
      useDropzoneClass: "useDropzoneClass"
    },
    outputs: {
      DZ_INIT: "init",
      DZ_ERROR: "error",
      DZ_SUCCESS: "success",
      DZ_SENDING: "sending",
      DZ_CANCELED: "canceled",
      DZ_COMPLETE: "complete",
      DZ_PROCESSING: "processing",
      DZ_DROP: "drop",
      DZ_DRAGSTART: "dragStart",
      DZ_DRAGEND: "dragEnd",
      DZ_DRAGENTER: "dragEnter",
      DZ_DRAGOVER: "dragOver",
      DZ_DRAGLEAVE: "dragLeave",
      DZ_THUMBNAIL: "thumbnail",
      DZ_ADDEDFILE: "addedFile",
      DZ_ADDEDFILES: "addedFiles",
      DZ_REMOVEDFILE: "removedFile",
      DZ_UPLOADPROGRESS: "uploadProgress",
      DZ_MAXFILESREACHED: "maxFilesReached",
      DZ_MAXFILESEXCEEDED: "maxFilesExceeded",
      DZ_ERRORMULTIPLE: "errorMultiple",
      DZ_SUCCESSMULTIPLE: "successMultiple",
      DZ_SENDINGMULTIPLE: "sendingMultiple",
      DZ_CANCELEDMULTIPLE: "canceledMultiple",
      DZ_COMPLETEMULTIPLE: "completeMultiple",
      DZ_PROCESSINGMULTIPLE: "processingMultiple",
      DZ_RESET: "reset",
      DZ_QUEUECOMPLETE: "queueComplete",
      DZ_TOTALUPLOADPROGRESS: "totalUploadProgress"
    },
    exportAs: ["ngxDropzone"],
    ngContentSelectors: _c0,
    decls: 5,
    vars: 10,
    consts: [[1, "dz-wrapper", 3, "dropzone", "disabled", "init"], [1, "dz-message"], [1, "dz-text", 3, "innerHTML"], ["class", "dz-image", 3, "background-image", 4, "ngIf"], [1, "dz-image"]],
    template: function DropzoneComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("init", function DropzoneComponent_Template_div_init_0_listener($event) {
          return ctx.DZ_INIT.emit($event);
        });
        ɵɵelementStart(1, "div", 1);
        ɵɵelement(2, "div", 2);
        ɵɵtemplate(3, DropzoneComponent_div_3_Template, 1, 2, "div", 3);
        ɵɵelementEnd();
        ɵɵprojection(4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassProp("dropzone", ctx.useDropzoneClass);
        ɵɵproperty("dropzone", ctx.config)("disabled", ctx.disabled);
        ɵɵadvance();
        ɵɵclassProp("disabled", ctx.disabled)("dz-placeholder", ctx.placeholder);
        ɵɵadvance();
        ɵɵproperty("innerHTML", (ctx.config == null ? null : ctx.config.dictDefaultMessage) || ctx.message, ɵɵsanitizeHtml);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.placeholder);
      }
    },
    dependencies: [NgIf, DropzoneDirective],
    styles: ["dropzone{display:block;width:100%;height:auto}dropzone.flex{display:flex;flex-direction:inherit;min-width:0;min-height:0}dropzone.flex>.dropzone.dz-wrapper{flex:1 1 auto;min-width:0;min-height:0;-webkit-box-flex:1}dropzone.flex{align-items:inherit;align-content:inherit;justify-content:inherit;-webkit-box-align:inherit;-webkit-box-pack:inherit}dropzone.flex>.dropzone.dz-wrapper.dz-single{display:flex;flex-direction:column;align-items:center;align-content:center;justify-content:center;-webkit-box-align:center;-webkit-box-pack:center}dropzone.flex>.dropzone.dz-wrapper.dz-multiple{display:flex;flex-flow:row wrap;align-items:flex-start;align-content:flex-start;justify-content:space-between;-webkit-box-align:flex-start;-webkit-box-pack:flex-start}dropzone>.dropzone.dz-wrapper{position:relative;overflow:auto;width:100%;min-height:0;max-height:100%;padding:0;border:none;color:#666;background:transparent}dropzone>.dropzone.dz-wrapper .dz-message{position:relative;display:inline-block;overflow:auto;width:calc(100% - 16px);min-width:calc(100% - 16px);min-height:40px;max-width:calc(100% - 16px);max-height:100%;margin:8px;border:2px dashed #aaa;background-color:#eee}dropzone>.dropzone.dz-wrapper .dz-message .dz-text{position:absolute;top:50%;width:100%;padding:8px 16px;text-align:center;transform:translateY(-50%)}dropzone>.dropzone.dz-wrapper .dz-message .dz-image{width:100%;height:100%;background-size:contain;background-repeat:no-repeat;background-position:50% 50%}dropzone>.dropzone.dz-wrapper .dz-message.disabled{cursor:not-allowed}dropzone>.dropzone.dz-wrapper .dz-message.disabled .dz-text{opacity:.5}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder{border-color:rgba(#aaa,0)}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder .dz-text{position:absolute;z-index:1;top:0;right:10%;left:10%;opacity:0;font-weight:700;background-color:rgba(#fff,.5);transform:translateY(-50%);transition:filter .25s ease-in-out,opacity .25s ease-in-out,border-color .25s ease-in-out}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled){border-color:#aaa}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) .dz-text{opacity:1}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) .dz-image{filter:blur(8px)}dropzone>.dropzone.dz-wrapper .dz-preview{margin:8px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-details{padding:24px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-progress{width:80%;margin-left:-40%;border:1px solid #aaa;border-radius:4px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-progress .dz-upload{background-color:#666}dropzone>.dropzone.dz-wrapper .dz-preview .dz-filename span{display:block;overflow:hidden;width:100%;max-width:100%;text-overflow:ellipsis}dropzone>.dropzone.dz-wrapper .dz-preview .dz-filename span:hover{overflow:visible;white-space:normal;word-wrap:break-word}dropzone>.dropzone.dz-wrapper.dz-single .dz-message{width:100%;height:100%}dropzone>.dropzone.dz-wrapper.dz-single.dz-started .dz-message{display:none}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview{width:calc(100% - 16px);height:100%}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview .dz-image{width:100%;height:100%;border-radius:0}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview .dz-image img{display:block;width:100%;height:auto;margin:0}dropzone>.dropzone.dz-wrapper.dz-single .dz-error-message{top:50%;left:50%;transform:translate(-50%) translateY(100%)}dropzone>.dropzone.dz-wrapper.dz-multiple.dz-started .dz-message{display:inline-block}\n", '@keyframes passing-through{0%{opacity:0;transform:translateY(40px)}30%,70%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes slide-in{0%{opacity:0;transform:translateY(40px)}30%{opacity:1;transform:translateY(0)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.1)}20%{transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{min-height:150px;border:2px solid rgba(0,0,0,.3);background:#fff;padding:20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-message{text-align:center;margin:2em 0}.dropzone .dz-message .dz-button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(to bottom,#eee,#ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:#fff}.dropzone .dz-preview.dz-image-preview .dz-details{transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:#000000e6;line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid rgba(200,200,200,.8);background-color:#fffc}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:#fff6;padding:0 .4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{transform:scale(1.05);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{animation:passing-through 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;animation:slide-in 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview .dz-success-mark,.dropzone .dz-preview .dz-error-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px}.dropzone .dz-preview .dz-success-mark svg,.dropzone .dz-preview .dz-error-mark svg{display:block;width:54px;height:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:16px;left:50%;top:50%;margin-top:-8px;width:80px;margin-left:-40px;background:rgba(255,255,255,.9);-webkit-transform:scale(1);border-radius:8px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:linear-gradient(to bottom,#666,#444);position:absolute;top:0;left:0;bottom:0;width:0;transition:width .3s ease-in-out}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;transition:opacity .3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#be2626;background:linear-gradient(to bottom,#be2626,#a92222);padding:.5em 1.2em;color:#fff}.dropzone .dz-preview .dz-error-message:after{content:"";position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #be2626}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropzoneComponent, [{
    type: Component,
    args: [{
      selector: "dropzone",
      exportAs: "ngxDropzone",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div class="dz-wrapper" [class.dropzone]="useDropzoneClass" [dropzone]="config" [disabled]="disabled" (init)="DZ_INIT.emit($event)">\n  <div class="dz-message" [class.disabled]="disabled" [class.dz-placeholder]="placeholder">\n    <div class="dz-text" [innerHTML]="config?.dictDefaultMessage || message"></div>\n\n    <div *ngIf="placeholder" class="dz-image" [style.background-image]="getPlaceholder()"></div>\n  </div>\n\n  <ng-content></ng-content>\n</div>\n',
      styles: ["dropzone{display:block;width:100%;height:auto}dropzone.flex{display:flex;flex-direction:inherit;min-width:0;min-height:0}dropzone.flex>.dropzone.dz-wrapper{flex:1 1 auto;min-width:0;min-height:0;-webkit-box-flex:1}dropzone.flex{align-items:inherit;align-content:inherit;justify-content:inherit;-webkit-box-align:inherit;-webkit-box-pack:inherit}dropzone.flex>.dropzone.dz-wrapper.dz-single{display:flex;flex-direction:column;align-items:center;align-content:center;justify-content:center;-webkit-box-align:center;-webkit-box-pack:center}dropzone.flex>.dropzone.dz-wrapper.dz-multiple{display:flex;flex-flow:row wrap;align-items:flex-start;align-content:flex-start;justify-content:space-between;-webkit-box-align:flex-start;-webkit-box-pack:flex-start}dropzone>.dropzone.dz-wrapper{position:relative;overflow:auto;width:100%;min-height:0;max-height:100%;padding:0;border:none;color:#666;background:transparent}dropzone>.dropzone.dz-wrapper .dz-message{position:relative;display:inline-block;overflow:auto;width:calc(100% - 16px);min-width:calc(100% - 16px);min-height:40px;max-width:calc(100% - 16px);max-height:100%;margin:8px;border:2px dashed #aaa;background-color:#eee}dropzone>.dropzone.dz-wrapper .dz-message .dz-text{position:absolute;top:50%;width:100%;padding:8px 16px;text-align:center;transform:translateY(-50%)}dropzone>.dropzone.dz-wrapper .dz-message .dz-image{width:100%;height:100%;background-size:contain;background-repeat:no-repeat;background-position:50% 50%}dropzone>.dropzone.dz-wrapper .dz-message.disabled{cursor:not-allowed}dropzone>.dropzone.dz-wrapper .dz-message.disabled .dz-text{opacity:.5}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder{border-color:rgba(#aaa,0)}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder .dz-text{position:absolute;z-index:1;top:0;right:10%;left:10%;opacity:0;font-weight:700;background-color:rgba(#fff,.5);transform:translateY(-50%);transition:filter .25s ease-in-out,opacity .25s ease-in-out,border-color .25s ease-in-out}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled){border-color:#aaa}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) .dz-text{opacity:1}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) .dz-image{filter:blur(8px)}dropzone>.dropzone.dz-wrapper .dz-preview{margin:8px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-details{padding:24px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-progress{width:80%;margin-left:-40%;border:1px solid #aaa;border-radius:4px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-progress .dz-upload{background-color:#666}dropzone>.dropzone.dz-wrapper .dz-preview .dz-filename span{display:block;overflow:hidden;width:100%;max-width:100%;text-overflow:ellipsis}dropzone>.dropzone.dz-wrapper .dz-preview .dz-filename span:hover{overflow:visible;white-space:normal;word-wrap:break-word}dropzone>.dropzone.dz-wrapper.dz-single .dz-message{width:100%;height:100%}dropzone>.dropzone.dz-wrapper.dz-single.dz-started .dz-message{display:none}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview{width:calc(100% - 16px);height:100%}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview .dz-image{width:100%;height:100%;border-radius:0}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview .dz-image img{display:block;width:100%;height:auto;margin:0}dropzone>.dropzone.dz-wrapper.dz-single .dz-error-message{top:50%;left:50%;transform:translate(-50%) translateY(100%)}dropzone>.dropzone.dz-wrapper.dz-multiple.dz-started .dz-message{display:inline-block}\n", '@keyframes passing-through{0%{opacity:0;transform:translateY(40px)}30%,70%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes slide-in{0%{opacity:0;transform:translateY(40px)}30%{opacity:1;transform:translateY(0)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.1)}20%{transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{min-height:150px;border:2px solid rgba(0,0,0,.3);background:#fff;padding:20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-message{text-align:center;margin:2em 0}.dropzone .dz-message .dz-button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(to bottom,#eee,#ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:#fff}.dropzone .dz-preview.dz-image-preview .dz-details{transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:#000000e6;line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid rgba(200,200,200,.8);background-color:#fffc}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:#fff6;padding:0 .4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{transform:scale(1.05);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{animation:passing-through 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;animation:slide-in 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview .dz-success-mark,.dropzone .dz-preview .dz-error-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px}.dropzone .dz-preview .dz-success-mark svg,.dropzone .dz-preview .dz-error-mark svg{display:block;width:54px;height:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:16px;left:50%;top:50%;margin-top:-8px;width:80px;margin-left:-40px;background:rgba(255,255,255,.9);-webkit-transform:scale(1);border-radius:8px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:linear-gradient(to bottom,#666,#444);position:absolute;top:0;left:0;bottom:0;width:0;transition:width .3s ease-in-out}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;transition:opacity .3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#be2626;background:linear-gradient(to bottom,#be2626,#a92222);padding:.5em 1.2em;color:#fff}.dropzone .dz-preview .dz-error-message:after{content:"";position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #be2626}\n']
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], {
    disabled: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    message: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    useDropzoneClass: [{
      type: Input
    }],
    DZ_INIT: [{
      type: Output,
      args: ["init"]
    }],
    DZ_ERROR: [{
      type: Output,
      args: ["error"]
    }],
    DZ_SUCCESS: [{
      type: Output,
      args: ["success"]
    }],
    DZ_SENDING: [{
      type: Output,
      args: ["sending"]
    }],
    DZ_CANCELED: [{
      type: Output,
      args: ["canceled"]
    }],
    DZ_COMPLETE: [{
      type: Output,
      args: ["complete"]
    }],
    DZ_PROCESSING: [{
      type: Output,
      args: ["processing"]
    }],
    DZ_DROP: [{
      type: Output,
      args: ["drop"]
    }],
    DZ_DRAGSTART: [{
      type: Output,
      args: ["dragStart"]
    }],
    DZ_DRAGEND: [{
      type: Output,
      args: ["dragEnd"]
    }],
    DZ_DRAGENTER: [{
      type: Output,
      args: ["dragEnter"]
    }],
    DZ_DRAGOVER: [{
      type: Output,
      args: ["dragOver"]
    }],
    DZ_DRAGLEAVE: [{
      type: Output,
      args: ["dragLeave"]
    }],
    DZ_THUMBNAIL: [{
      type: Output,
      args: ["thumbnail"]
    }],
    DZ_ADDEDFILE: [{
      type: Output,
      args: ["addedFile"]
    }],
    DZ_ADDEDFILES: [{
      type: Output,
      args: ["addedFiles"]
    }],
    DZ_REMOVEDFILE: [{
      type: Output,
      args: ["removedFile"]
    }],
    DZ_UPLOADPROGRESS: [{
      type: Output,
      args: ["uploadProgress"]
    }],
    DZ_MAXFILESREACHED: [{
      type: Output,
      args: ["maxFilesReached"]
    }],
    DZ_MAXFILESEXCEEDED: [{
      type: Output,
      args: ["maxFilesExceeded"]
    }],
    DZ_ERRORMULTIPLE: [{
      type: Output,
      args: ["errorMultiple"]
    }],
    DZ_SUCCESSMULTIPLE: [{
      type: Output,
      args: ["successMultiple"]
    }],
    DZ_SENDINGMULTIPLE: [{
      type: Output,
      args: ["sendingMultiple"]
    }],
    DZ_CANCELEDMULTIPLE: [{
      type: Output,
      args: ["canceledMultiple"]
    }],
    DZ_COMPLETEMULTIPLE: [{
      type: Output,
      args: ["completeMultiple"]
    }],
    DZ_PROCESSINGMULTIPLE: [{
      type: Output,
      args: ["processingMultiple"]
    }],
    DZ_RESET: [{
      type: Output,
      args: ["reset"]
    }],
    DZ_QUEUECOMPLETE: [{
      type: Output,
      args: ["queueComplete"]
    }],
    DZ_TOTALUPLOADPROGRESS: [{
      type: Output,
      args: ["totalUploadProgress"]
    }],
    directiveRef: [{
      type: ViewChild,
      args: [DropzoneDirective, {
        static: true
      }]
    }]
  });
})();
var DropzoneModule = class _DropzoneModule {
  static ɵfac = function DropzoneModule_Factory(t) {
    return new (t || _DropzoneModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DropzoneModule,
    declarations: [DropzoneComponent, DropzoneDirective],
    imports: [CommonModule],
    exports: [CommonModule, DropzoneComponent, DropzoneDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropzoneModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [DropzoneComponent, DropzoneDirective],
      exports: [CommonModule, DropzoneComponent, DropzoneDirective]
    }]
  }], null, null);
})();
export {
  DROPZONE_CONFIG,
  DropzoneComponent,
  DropzoneConfig,
  DropzoneDirective,
  DropzoneModule
};
//# sourceMappingURL=ngx-dropzone-wrapper.js.map
