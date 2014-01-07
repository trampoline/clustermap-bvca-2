(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
// Console-polyfill. MIT license.
// https://github.com/paulmillr/console-polyfill
// Make it safe to do console.log() always.
(function (con) {
  'use strict';
  var prop, method;
  var empty = {};
  var dummy = function() {};
  var properties = 'memory'.split(',');
  var methods = ('assert,count,debug,dir,dirxml,error,exception,group,' +
     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,' +
     'time,timeEnd,trace,warn').split(',');
  while (prop = properties.pop()) con[prop] = con[prop] || empty;
  while (method = methods.pop()) con[method] = con[method] || dummy;
})(window.console = window.console || {});

;// Copyright 2009-2012 by contributors, MIT License
// vim: ts=4 sts=4 sw=4 expandtab

//Add semicolon to prevent IIFE from being passed as argument to concated code.
;
// Module systems magic dance
(function (definition) {
    // RequireJS
    if (typeof define == "function") {
        define(definition);
    // YUI3
    } else if (typeof YUI == "function") {
        YUI.add("es5", definition);
    // CommonJS and <script>
    } else {
        definition();
    }
})(function () {

/**
 * Brings an environment as close to ECMAScript 5 compliance
 * as is possible with the facilities of erstwhile engines.
 *
 * Annotated ES5: http://es5.github.com/ (specific links below)
 * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
 * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
 */

// ES-5 15.1.2.2
if (parseInt('08') !== 8) {
    parseInt = (function (origParseInt) {
        var hexRegex = /^0[xX]/;
        return function parseIntES5(str, radix) {
            str = String(str).trim();
            if (!+radix) {
                radix = hexRegex.test(str) ? 16 : 10;
            }
            return origParseInt(str, radix);
        };
    }(parseInt));
}

//
// Function
// ========
//

// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5

function Empty() {}

if (!Function.prototype.bind) {
    Function.prototype.bind = function bind(that) { // .length is 1
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (typeof target != "function") {
            throw new TypeError("Function.prototype.bind called on incompatible " + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = _Array_slice_.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var binder = function () {

            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.

                var result = target.apply(
                    this,
                    args.concat(_Array_slice_.call(arguments))
                );
                if (Object(result) === result) {
                    return result;
                }
                return this;

            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.

                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    args.concat(_Array_slice_.call(arguments))
                );

            }

        };

        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.

        var boundLength = Math.max(0, target.length - args.length);

        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
            boundArgs.push("$" + i);
        }

        // XXX Build a dynamic function with desired amount of arguments is the only 
        // way to set the length property of a function. 
        // In environments where Content Security Policies enabled (Chrome extensions, 
        // for ex.) all use of eval or Function costructor throws an exception. 
        // However in all of these environments Function.prototype.bind exists 
        // and so this code will never be executed.
        var bound = Function("binder", "return function(" + boundArgs.join(",") + "){return binder.apply(this,arguments)}")(binder);

        if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }

        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.

        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.

        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.

        // 22. Return F.
        return bound;
    };
}

// Shortcut to an often accessed properties, in order to avoid multiple
// dereference that costs universally.
// _Please note: Shortcuts are defined after `Function.prototype.bind` as we
// us it in defining shortcuts.
var call = Function.prototype.call;
var prototypeOfArray = Array.prototype;
var prototypeOfObject = Object.prototype;
var _Array_slice_ = prototypeOfArray.slice;
// Having a toString local variable name breaks in Opera so use _toString.
var _toString = call.bind(prototypeOfObject.toString);
var owns = call.bind(prototypeOfObject.hasOwnProperty);

// If JS engine supports accessors creating shortcuts.
var defineGetter;
var defineSetter;
var lookupGetter;
var lookupSetter;
var supportsAccessors;
if ((supportsAccessors = owns(prototypeOfObject, "__defineGetter__"))) {
    defineGetter = call.bind(prototypeOfObject.__defineGetter__);
    defineSetter = call.bind(prototypeOfObject.__defineSetter__);
    lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
    lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
}

//
// Array
// =====
//

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.12
// Default value for second param
// [bugfix, ielt9, old browsers]
// IE < 9 bug: [1,2].splice(0).join("") == "" but should be "12"
if ([1,2].splice(0).length != 2) {
    var array_splice = Array.prototype.splice;
    var array_push = Array.prototype.push;
    var array_unshift = Array.prototype.unshift;

    if (function() { // test IE < 9 to splice bug - see issue #138
        function makeArray(l) {
            var a = [];
            while (l--) {
                a.unshift(l)
            }
            return a
        }

        var array = []
            , lengthBefore
        ;

        array.splice.bind(array, 0, 0).apply(null, makeArray(20));
        array.splice.bind(array, 0, 0).apply(null, makeArray(26));

        lengthBefore = array.length; //20
        array.splice(5, 0, "XXX"); // add one element

        if (lengthBefore + 1 == array.length) {
            return true;// has right splice implementation without bugs
        }
        // else {
        //    IE8 bug
        // }
    }()) {//IE 6/7
        Array.prototype.splice = function(start, deleteCount) {
            if (!arguments.length) {
                return [];
            } else {
                return array_splice.apply(this, [
                    start === void 0 ? 0 : start,
                    deleteCount === void 0 ? (this.length - start) : deleteCount
                ].concat(_Array_slice_.call(arguments, 2)))
            }
        };
    }
    else {//IE8
        Array.prototype.splice = function(start, deleteCount) {
            var result
                , args = _Array_slice_.call(arguments, 2)
                , addElementsCount = args.length
            ;

            if (!arguments.length) {
                return [];
            }

            if (start === void 0) { // default
                start = 0;
            }
            if (deleteCount === void 0) { // default
                deleteCount = this.length - start;
            }

            if (addElementsCount > 0) {
                if (deleteCount <= 0) {
                    if (start == this.length) { // tiny optimisation #1
                        array_push.apply(this, args);
                        return [];
                    }

                    if (start == 0) { // tiny optimisation #2
                        array_unshift.apply(this, args);
                        return [];
                    }
                }

                // Array.prototype.splice implementation
                result = _Array_slice_.call(this, start, start + deleteCount);// delete part
                args.push.apply(args, _Array_slice_.call(this, start + deleteCount, this.length));// right part
                args.unshift.apply(args, _Array_slice_.call(this, 0, start));// left part

                // delete all items from this array and replace it to 'left part' + _Array_slice_.call(arguments, 2) + 'right part'
                args.unshift(0, this.length);

                array_splice.apply(this, args);

                return result;
            }

            return array_splice.call(this, start, deleteCount);
        }

    }
}

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.13
// Return len+argCount.
// [bugfix, ielt8]
// IE < 8 bug: [].unshift(0) == undefined but should be "1"
if ([].unshift(0) != 1) {
    var array_unshift = Array.prototype.unshift;
    Array.prototype.unshift = function() {
        array_unshift.apply(this, arguments);
        return this.length;
    };
}

// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
if (!Array.isArray) {
    Array.isArray = function isArray(obj) {
        return _toString(obj) == "[object Array]";
    };
}

// The IsCallable() check in the Array functions
// has been replaced with a strict check on the
// internal class of the object to trap cases where
// the provided function was actually a regular
// expression literal, which in V8 and
// JavaScriptCore is a typeof "function".  Only in
// V8 are regular expression literals permitted as
// reduce parameters, so it is desirable in the
// general case for the shim to match the more
// strict and common behavior of rejecting regular
// expressions.

// ES5 15.4.4.18
// http://es5.github.com/#x15.4.4.18
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach

// Check failure of by-index access of string characters (IE < 9)
// and failure of `0 in boxedString` (Rhino)
var boxedString = Object("a"),
    splitString = boxedString[0] != "a" || !(0 in boxedString);
// Check node 0.6.21 bug where third parameter is not boxed
var boxedForEach = true;
if (Array.prototype.forEach) {
    Array.prototype.forEach.call("foo", function(item, i, obj) {
        if (typeof obj !== 'object') boxedForEach = false;
    });
}

if (!Array.prototype.forEach || !boxedForEach) {
    Array.prototype.forEach = function forEach(fun /*, thisp*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            thisp = arguments[1],
            i = -1,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(); // TODO message
        }

        while (++i < length) {
            if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object
                // context
                fun.call(thisp, self[i], i, object);
            }
        }
    };
}

// ES5 15.4.4.19
// http://es5.github.com/#x15.4.4.19
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
if (!Array.prototype.map) {
    Array.prototype.map = function map(fun /*, thisp*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0,
            result = Array(length),
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self)
                result[i] = fun.call(thisp, self[i], i, object);
        }
        return result;
    };
}

// ES5 15.4.4.20
// http://es5.github.com/#x15.4.4.20
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
if (!Array.prototype.filter) {
    Array.prototype.filter = function filter(fun /*, thisp */) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                    object,
            length = self.length >>> 0,
            result = [],
            value,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self) {
                value = self[i];
                if (fun.call(thisp, value, i, object)) {
                    result.push(value);
                }
            }
        }
        return result;
    };
}

// ES5 15.4.4.16
// http://es5.github.com/#x15.4.4.16
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
if (!Array.prototype.every) {
    Array.prototype.every = function every(fun /*, thisp */) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self && !fun.call(thisp, self[i], i, object)) {
                return false;
            }
        }
        return true;
    };
}

// ES5 15.4.4.17
// http://es5.github.com/#x15.4.4.17
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
if (!Array.prototype.some) {
    Array.prototype.some = function some(fun /*, thisp */) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self && fun.call(thisp, self[i], i, object)) {
                return true;
            }
        }
        return false;
    };
}

// ES5 15.4.4.21
// http://es5.github.com/#x15.4.4.21
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function reduce(fun /*, initial*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        // no value to return if no initial value and an empty array
        if (!length && arguments.length == 1) {
            throw new TypeError("reduce of empty array with no initial value");
        }

        var i = 0;
        var result;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i++];
                    break;
                }

                // if array contains no values, no initial value to return
                if (++i >= length) {
                    throw new TypeError("reduce of empty array with no initial value");
                }
            } while (true);
        }

        for (; i < length; i++) {
            if (i in self) {
                result = fun.call(void 0, result, self[i], i, object);
            }
        }

        return result;
    };
}

// ES5 15.4.4.22
// http://es5.github.com/#x15.4.4.22
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
if (!Array.prototype.reduceRight) {
    Array.prototype.reduceRight = function reduceRight(fun /*, initial*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        // no value to return if no initial value, empty array
        if (!length && arguments.length == 1) {
            throw new TypeError("reduceRight of empty array with no initial value");
        }

        var result, i = length - 1;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i--];
                    break;
                }

                // if array contains no values, no initial value to return
                if (--i < 0) {
                    throw new TypeError("reduceRight of empty array with no initial value");
                }
            } while (true);
        }

        if (i < 0) {
            return result;
        }

        do {
            if (i in this) {
                result = fun.call(void 0, result, self[i], i, object);
            }
        } while (i--);

        return result;
    };
}

// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf || ([0, 1].indexOf(1, 2) != -1)) {
    Array.prototype.indexOf = function indexOf(sought /*, fromIndex */ ) {
        var self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                toObject(this),
            length = self.length >>> 0;

        if (!length) {
            return -1;
        }

        var i = 0;
        if (arguments.length > 1) {
            i = toInteger(arguments[1]);
        }

        // handle negative indices
        i = i >= 0 ? i : Math.max(0, length + i);
        for (; i < length; i++) {
            if (i in self && self[i] === sought) {
                return i;
            }
        }
        return -1;
    };
}

// ES5 15.4.4.15
// http://es5.github.com/#x15.4.4.15
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
if (!Array.prototype.lastIndexOf || ([0, 1].lastIndexOf(0, -3) != -1)) {
    Array.prototype.lastIndexOf = function lastIndexOf(sought /*, fromIndex */) {
        var self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                toObject(this),
            length = self.length >>> 0;

        if (!length) {
            return -1;
        }
        var i = length - 1;
        if (arguments.length > 1) {
            i = Math.min(i, toInteger(arguments[1]));
        }
        // handle negative indices
        i = i >= 0 ? i : length - Math.abs(i);
        for (; i >= 0; i--) {
            if (i in self && sought === self[i]) {
                return i;
            }
        }
        return -1;
    };
}

//
// Object
// ======
//

// ES5 15.2.3.14
// http://es5.github.com/#x15.2.3.14
if (!Object.keys) {
    // http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
    var hasDontEnumBug = true,
        dontEnums = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor"
        ],
        dontEnumsLength = dontEnums.length;

    for (var key in {"toString": null}) {
        hasDontEnumBug = false;
    }

    Object.keys = function keys(object) {

        if (
            (typeof object != "object" && typeof object != "function") ||
            object === null
        ) {
            throw new TypeError("Object.keys called on a non-object");
        }

        var keys = [];
        for (var name in object) {
            if (owns(object, name)) {
                keys.push(name);
            }
        }

        if (hasDontEnumBug) {
            for (var i = 0, ii = dontEnumsLength; i < ii; i++) {
                var dontEnum = dontEnums[i];
                if (owns(object, dontEnum)) {
                    keys.push(dontEnum);
                }
            }
        }
        return keys;
    };

}

//
// Date
// ====
//

// ES5 15.9.5.43
// http://es5.github.com/#x15.9.5.43
// This function returns a String value represent the instance in time
// represented by this Date object. The format of the String is the Date Time
// string format defined in 15.9.1.15. All fields are present in the String.
// The time zone is always UTC, denoted by the suffix Z. If the time value of
// this object is not a finite Number a RangeError exception is thrown.
var negativeDate = -62198755200000,
    negativeYearString = "-000001";
if (
    !Date.prototype.toISOString ||
    (new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1)
) {
    Date.prototype.toISOString = function toISOString() {
        var result, length, value, year, month;
        if (!isFinite(this)) {
            throw new RangeError("Date.prototype.toISOString called on non-finite value.");
        }

        year = this.getUTCFullYear();

        month = this.getUTCMonth();
        // see https://github.com/es-shims/es5-shim/issues/111
        year += Math.floor(month / 12);
        month = (month % 12 + 12) % 12;

        // the date time string format is specified in 15.9.1.15.
        result = [month + 1, this.getUTCDate(),
            this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
        year = (
            (year < 0 ? "-" : (year > 9999 ? "+" : "")) +
            ("00000" + Math.abs(year))
            .slice(0 <= year && year <= 9999 ? -4 : -6)
        );

        length = result.length;
        while (length--) {
            value = result[length];
            // pad months, days, hours, minutes, and seconds to have two
            // digits.
            if (value < 10) {
                result[length] = "0" + value;
            }
        }
        // pad milliseconds to have three digits.
        return (
            year + "-" + result.slice(0, 2).join("-") +
            "T" + result.slice(2).join(":") + "." +
            ("000" + this.getUTCMilliseconds()).slice(-3) + "Z"
        );
    };
}


// ES5 15.9.5.44
// http://es5.github.com/#x15.9.5.44
// This function provides a String representation of a Date object for use by
// JSON.stringify (15.12.3).
var dateToJSONIsSupported = false;
try {
    dateToJSONIsSupported = (
        Date.prototype.toJSON &&
        new Date(NaN).toJSON() === null &&
        new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 &&
        Date.prototype.toJSON.call({ // generic
            toISOString: function () {
                return true;
            }
        })
    );
} catch (e) {
}
if (!dateToJSONIsSupported) {
    Date.prototype.toJSON = function toJSON(key) {
        // When the toJSON method is called with argument key, the following
        // steps are taken:

        // 1.  Let O be the result of calling ToObject, giving it the this
        // value as its argument.
        // 2. Let tv be toPrimitive(O, hint Number).
        var o = Object(this),
            tv = toPrimitive(o),
            toISO;
        // 3. If tv is a Number and is not finite, return null.
        if (typeof tv === "number" && !isFinite(tv)) {
            return null;
        }
        // 4. Let toISO be the result of calling the [[Get]] internal method of
        // O with argument "toISOString".
        toISO = o.toISOString;
        // 5. If IsCallable(toISO) is false, throw a TypeError exception.
        if (typeof toISO != "function") {
            throw new TypeError("toISOString property is not callable");
        }
        // 6. Return the result of calling the [[Call]] internal method of
        //  toISO with O as the this value and an empty argument list.
        return toISO.call(o);

        // NOTE 1 The argument is ignored.

        // NOTE 2 The toJSON function is intentionally generic; it does not
        // require that its this value be a Date object. Therefore, it can be
        // transferred to other kinds of objects for use as a method. However,
        // it does require that any such object have a toISOString method. An
        // object is free to use the argument key to filter its
        // stringification.
    };
}

// ES5 15.9.4.2
// http://es5.github.com/#x15.9.4.2
// based on work shared by Daniel Friesen (dantman)
// http://gist.github.com/303249
if (!Date.parse || "Date.parse is buggy") {
    // XXX global assignment won't work in embeddings that use
    // an alternate object for the context.
    Date = (function(NativeDate) {

        // Date.length === 7
        function Date(Y, M, D, h, m, s, ms) {
            var length = arguments.length;
            if (this instanceof NativeDate) {
                var date = length == 1 && String(Y) === Y ? // isString(Y)
                    // We explicitly pass it through parse:
                    new NativeDate(Date.parse(Y)) :
                    // We have to manually make calls depending on argument
                    // length here
                    length >= 7 ? new NativeDate(Y, M, D, h, m, s, ms) :
                    length >= 6 ? new NativeDate(Y, M, D, h, m, s) :
                    length >= 5 ? new NativeDate(Y, M, D, h, m) :
                    length >= 4 ? new NativeDate(Y, M, D, h) :
                    length >= 3 ? new NativeDate(Y, M, D) :
                    length >= 2 ? new NativeDate(Y, M) :
                    length >= 1 ? new NativeDate(Y) :
                                  new NativeDate();
                // Prevent mixups with unfixed Date object
                date.constructor = Date;
                return date;
            }
            return NativeDate.apply(this, arguments);
        };

        // 15.9.1.15 Date Time String Format.
        var isoDateExpression = new RegExp("^" +
            "(\\d{4}|[\+\-]\\d{6})" + // four-digit year capture or sign +
                                      // 6-digit extended year
            "(?:-(\\d{2})" + // optional month capture
            "(?:-(\\d{2})" + // optional day capture
            "(?:" + // capture hours:minutes:seconds.milliseconds
                "T(\\d{2})" + // hours capture
                ":(\\d{2})" + // minutes capture
                "(?:" + // optional :seconds.milliseconds
                    ":(\\d{2})" + // seconds capture
                    "(?:(\\.\\d{1,}))?" + // milliseconds capture
                ")?" +
            "(" + // capture UTC offset component
                "Z|" + // UTC capture
                "(?:" + // offset specifier +/-hours:minutes
                    "([-+])" + // sign capture
                    "(\\d{2})" + // hours offset capture
                    ":(\\d{2})" + // minutes offset capture
                ")" +
            ")?)?)?)?" +
        "$");

        var months = [
            0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365
        ];

        function dayFromMonth(year, month) {
            var t = month > 1 ? 1 : 0;
            return (
                months[month] +
                Math.floor((year - 1969 + t) / 4) -
                Math.floor((year - 1901 + t) / 100) +
                Math.floor((year - 1601 + t) / 400) +
                365 * (year - 1970)
            );
        }

        function toUTC(t) {
            return Number(new NativeDate(1970, 0, 1, 0, 0, 0, t));
        }

        // Copy any custom methods a 3rd party library may have added
        for (var key in NativeDate) {
            Date[key] = NativeDate[key];
        }

        // Copy "native" methods explicitly; they may be non-enumerable
        Date.now = NativeDate.now;
        Date.UTC = NativeDate.UTC;
        Date.prototype = NativeDate.prototype;
        Date.prototype.constructor = Date;

        // Upgrade Date.parse to handle simplified ISO 8601 strings
        Date.parse = function parse(string) {
            var match = isoDateExpression.exec(string);
            if (match) {
                // parse months, days, hours, minutes, seconds, and milliseconds
                // provide default values if necessary
                // parse the UTC offset component
                var year = Number(match[1]),
                    month = Number(match[2] || 1) - 1,
                    day = Number(match[3] || 1) - 1,
                    hour = Number(match[4] || 0),
                    minute = Number(match[5] || 0),
                    second = Number(match[6] || 0),
                    millisecond = Math.floor(Number(match[7] || 0) * 1000),
                    // When time zone is missed, local offset should be used
                    // (ES 5.1 bug)
                    // see https://bugs.ecmascript.org/show_bug.cgi?id=112
                    isLocalTime = Boolean(match[4] && !match[8]),
                    signOffset = match[9] === "-" ? 1 : -1,
                    hourOffset = Number(match[10] || 0),
                    minuteOffset = Number(match[11] || 0),
                    result;
                if (
                    hour < (
                        minute > 0 || second > 0 || millisecond > 0 ?
                        24 : 25
                    ) &&
                    minute < 60 && second < 60 && millisecond < 1000 &&
                    month > -1 && month < 12 && hourOffset < 24 &&
                    minuteOffset < 60 && // detect invalid offsets
                    day > -1 &&
                    day < (
                        dayFromMonth(year, month + 1) -
                        dayFromMonth(year, month)
                    )
                ) {
                    result = (
                        (dayFromMonth(year, month) + day) * 24 +
                        hour +
                        hourOffset * signOffset
                    ) * 60;
                    result = (
                        (result + minute + minuteOffset * signOffset) * 60 +
                        second
                    ) * 1000 + millisecond;
                    if (isLocalTime) {
                        result = toUTC(result);
                    }
                    if (-8.64e15 <= result && result <= 8.64e15) {
                        return result;
                    }
                }
                return NaN;
            }
            return NativeDate.parse.apply(this, arguments);
        };

        return Date;
    })(Date);
}

// ES5 15.9.4.4
// http://es5.github.com/#x15.9.4.4
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}


//
// Number
// ======
//

// ES5.1 15.7.4.5
// http://es5.github.com/#x15.7.4.5
if (!Number.prototype.toFixed || (0.00008).toFixed(3) !== '0.000' || (0.9).toFixed(0) === '0' || (1.255).toFixed(2) !== '1.25' || (1000000000000000128).toFixed(0) !== "1000000000000000128") {
    // Hide these variables and functions
    (function () {
        var base, size, data, i;

        base = 1e7;
        size = 6;
        data = [0, 0, 0, 0, 0, 0];

        function multiply(n, c) {
            var i = -1;
            while (++i < size) {
                c += n * data[i];
                data[i] = c % base;
                c = Math.floor(c / base);
            }
        }

        function divide(n) {
            var i = size, c = 0;
            while (--i >= 0) {
                c += data[i];
                data[i] = Math.floor(c / n);
                c = (c % n) * base;
            }
        }

        function toString() {
            var i = size;
            var s = '';
            while (--i >= 0) {
                if (s !== '' || i === 0 || data[i] !== 0) {
                    var t = String(data[i]);
                    if (s === '') {
                        s = t;
                    } else {
                        s += '0000000'.slice(0, 7 - t.length) + t;
                    }
                }
            }
            return s;
        }

        function pow(x, n, acc) {
            return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
        }

        function log(x) {
            var n = 0;
            while (x >= 4096) {
                n += 12;
                x /= 4096;
            }
            while (x >= 2) {
                n += 1;
                x /= 2;
            }
            return n;
        }

        Number.prototype.toFixed = function (fractionDigits) {
            var f, x, s, m, e, z, j, k;

            // Test for NaN and round fractionDigits down
            f = Number(fractionDigits);
            f = f !== f ? 0 : Math.floor(f);

            if (f < 0 || f > 20) {
                throw new RangeError("Number.toFixed called with invalid number of decimals");
            }

            x = Number(this);

            // Test for NaN
            if (x !== x) {
                return "NaN";
            }

            // If it is too big or small, return the string value of the number
            if (x <= -1e21 || x >= 1e21) {
                return String(x);
            }

            s = "";

            if (x < 0) {
                s = "-";
                x = -x;
            }

            m = "0";

            if (x > 1e-21) {
                // 1e-21 < x < 1e21
                // -70 < log2(x) < 70
                e = log(x * pow(2, 69, 1)) - 69;
                z = (e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1));
                z *= 0x10000000000000; // Math.pow(2, 52);
                e = 52 - e;

                // -18 < e < 122
                // x = z / 2 ^ e
                if (e > 0) {
                    multiply(0, z);
                    j = f;

                    while (j >= 7) {
                        multiply(1e7, 0);
                        j -= 7;
                    }

                    multiply(pow(10, j, 1), 0);
                    j = e - 1;

                    while (j >= 23) {
                        divide(1 << 23);
                        j -= 23;
                    }

                    divide(1 << j);
                    multiply(1, 1);
                    divide(2);
                    m = toString();
                } else {
                    multiply(0, z);
                    multiply(1 << (-e), 0);
                    m = toString() + '0.00000000000000000000'.slice(2, 2 + f);
                }
            }

            if (f > 0) {
                k = m.length;

                if (k <= f) {
                    m = s + '0.0000000000000000000'.slice(0, f - k + 2) + m;
                } else {
                    m = s + m.slice(0, k - f) + '.' + m.slice(k - f);
                }
            } else {
                m = s + m;
            }

            return m;
        }
    }());
}


//
// String
// ======
//


// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14

// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]

var string_split = String.prototype.split;
if (
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    'tesst'.split(/(s)*/)[1] === "t" ||
    ''.split(/.?/).length ||
    '.'.split(/()()/).length > 1
) {
    (function () {
        var compliantExecNpcg = /()??/.exec("")[1] === void 0; // NPCG: nonparticipating capturing group

        String.prototype.split = function (separator, limit) {
            var string = this;
            if (separator === void 0 && limit === 0)
                return [];

            // If `separator` is not a regex, use native split
            if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
                return string_split.apply(this, arguments);
            }

            var output = [],
                flags = (separator.ignoreCase ? "i" : "") +
                        (separator.multiline  ? "m" : "") +
                        (separator.extended   ? "x" : "") + // Proposed for ES6
                        (separator.sticky     ? "y" : ""), // Firefox 3+
                lastLastIndex = 0,
                // Make `global` and avoid `lastIndex` issues by working with a copy
                separator = new RegExp(separator.source, flags + "g"),
                separator2, match, lastIndex, lastLength;
            string += ""; // Type-convert
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */
            limit = limit === void 0 ?
                -1 >>> 0 : // Math.pow(2, 32) - 1
                limit >>> 0; // ToUint32(limit)
            while (match = separator.exec(string)) {
                // `separator.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) {
                        match[0].replace(separator2, function () {
                            for (var i = 1; i < arguments.length - 2; i++) {
                                if (arguments[i] === void 0) {
                                    match[i] = void 0;
                                }
                            }
                        });
                    }
                    if (match.length > 1 && match.index < string.length) {
                        Array.prototype.push.apply(output, match.slice(1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= limit) {
                        break;
                    }
                }
                if (separator.lastIndex === match.index) {
                    separator.lastIndex++; // Avoid an infinite loop
                }
            }
            if (lastLastIndex === string.length) {
                if (lastLength || !separator.test("")) {
                    output.push("");
                }
            } else {
                output.push(string.slice(lastLastIndex));
            }
            return output.length > limit ? output.slice(0, limit) : output;
        };
    }());

// [bugfix, chrome]
// If separator is undefined, then the result array contains just one String,
// which is the this value (converted to a String). If limit is not undefined,
// then the output array is truncated so that it contains no more than limit
// elements.
// "0".split(undefined, 0) -> []
} else if ("0".split(void 0, 0).length) {
    String.prototype.split = function(separator, limit) {
        if (separator === void 0 && limit === 0) return [];
        return string_split.apply(this, arguments);
    }
}


// ECMA-262, 3rd B.2.3
// Note an ECMAScript standart, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
if ("".substr && "0b".substr(-1) !== "b") {
    var string_substr = String.prototype.substr;
    /**
     *  Get the substring of a string
     *  @param  {integer}  start   where to start the substring
     *  @param  {integer}  length  how many characters to return
     *  @return {string}
     */
    String.prototype.substr = function(start, length) {
        return string_substr.call(
            this,
            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,
            length
        );
    }
}

// ES5 15.5.4.20
// http://es5.github.com/#x15.5.4.20
var ws = "\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003" +
    "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" +
    "\u2029\uFEFF";
if (!String.prototype.trim || ws.trim()) {
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript
    // http://perfectionkills.com/whitespace-deviations/
    ws = "[" + ws + "]";
    var trimBeginRegexp = new RegExp("^" + ws + ws + "*"),
        trimEndRegexp = new RegExp(ws + ws + "*$");
    String.prototype.trim = function trim() {
        if (this === void 0 || this === null) {
            throw new TypeError("can't convert "+this+" to object");
        }
        return String(this)
            .replace(trimBeginRegexp, "")
            .replace(trimEndRegexp, "");
    };
}

//
// Util
// ======
//

// ES5 9.4
// http://es5.github.com/#x9.4
// http://jsperf.com/to-integer

function toInteger(n) {
    n = +n;
    if (n !== n) { // isNaN
        n = 0;
    } else if (n !== 0 && n !== (1/0) && n !== -(1/0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
    }
    return n;
}

function isPrimitive(input) {
    var type = typeof input;
    return (
        input === null ||
        type === "undefined" ||
        type === "boolean" ||
        type === "number" ||
        type === "string"
    );
}

function toPrimitive(input) {
    var val, valueOf, toString;
    if (isPrimitive(input)) {
        return input;
    }
    valueOf = input.valueOf;
    if (typeof valueOf === "function") {
        val = valueOf.call(input);
        if (isPrimitive(val)) {
            return val;
        }
    }
    toString = input.toString;
    if (typeof toString === "function") {
        val = toString.call(input);
        if (isPrimitive(val)) {
            return val;
        }
    }
    throw new TypeError();
}

// ES5 9.9
// http://es5.github.com/#x9.9
var toObject = function (o) {
    if (o == null) { // this matches both null and undefined
        throw new TypeError("can't convert "+o+" to object");
    }
    return Object(o);
};

});

;/* Android 2.x claims XPath support, but has none.  Force non-native
   XPath implementation in this case */
  if (document.implementation
      && document.implementation.hasFeature
      && document.implementation.hasFeature("XPath",null)
      && !document.evaluate) {
    window.jsxpath = {
      targetFrame: undefined,
      exportInstaller: false,
      useNative: false, /* force non-native implementation */
      useInnerText: true
    };
  }

;/*  JavaScript-XPath 0.1.12
 *  (c) 2007 Cybozu Labs, Inc.
 *
 *  JavaScript-XPath is freely distributable under the terms of an MIT-style license.
 *  For details, see the JavaScript-XPath web site: http://coderepos.org/share/wiki/JavaScript-XPath
 *
/*--------------------------------------------------------------------------*/



(function () {

var undefined = void(0);

var defaultConfig = {
    targetFrame: undefined,
    exportInstaller: false,
    useNative: true,
    useInnerText: true
};

var config;

if (window.jsxpath) {
    config = window.jsxpath;
}
else {
    var scriptElms = document.getElementsByTagName('script');
    var scriptElm = scriptElms[scriptElms.length - 1];
    var scriptSrc = scriptElm.src;
    config = {};
    var scriptSrcMatchResult = scriptSrc.match(/\?(.*)$/);
    if (scriptSrcMatchResult) {
        var configStrings = scriptSrcMatchResult[1].split('&');
        for (var i = 0, l = configStrings.length; i < l; i ++) {
            var configString = configStrings[i];
            var configStringSplited = configString.split('=');
            var configName = configStringSplited[0];
            var configValue = configStringSplited[1];
            if (configValue == undefined) {
                configValue == true;
            }
            else if (configValue == 'false' || /^-?\d+$/.test(configValue)) {
                configValue = eval(configValue);
            }
            config[configName] = configValue;
        }
    }
}

for (var n in defaultConfig) {
    if (!(n in config)) config[n] = defaultConfig[n];
}

config.hasNative = !!(document.implementation
                        && document.implementation.hasFeature
                        && document.implementation.hasFeature("XPath", null));

if (config.hasNative && config.useNative && !config.exportInstaller) {
    return;
}



var BinaryExpr;
var FilterExpr;
var FunctionCall;
var Literal;
var NameTest;
var NodeSet;
var NodeType;
var NodeUtil;
var Number;
var PathExpr;
var Step;
var UnaryExpr;
var UnionExpr;
var VariableReference;

/*
 * object: user agent identifier
 */
var uai = new function() {

    var ua = navigator.userAgent;

    if (RegExp == undefined) {
        if (ua.indexOf("Opera") >= 0) {
            this.opera = true;
        } else if (ua.indexOf("Netscape") >= 0) {
            this.netscape = true;
        } else if (ua.indexOf("Mozilla/") == 0) {
            this.mozilla = true;
        } else {
            this.unknown = true;
        }

        if (ua.indexOf("Gecko/") >= 0) {
            this.gecko = true;
        }

        if (ua.indexOf("Win") >= 0) {
            this.windows = true;
        } else if (ua.indexOf("Mac") >= 0) {
            this.mac = true;
        } else if (ua.indexOf("Linux") >= 0) {
            this.linux = true;
        } else if (ua.indexOf("BSD") >= 0) {
            this.bsd = true;
        } else if (ua.indexOf("SunOS") >= 0) {
            this.sunos = true;
        }
    }
    else {

        /* for Trident/Tasman */
        /*@cc_on
        @if (@_jscript)
            function jscriptVersion() {
                switch (@_jscript_version) {
                    case 3.0:  return "4.0";
                    case 5.0:  return "5.0";
                    case 5.1:  return "5.01";
                    case 5.5:  return "5.5";
                    case 5.6:
                        if ("XMLHttpRequest" in window) return "7.0";
                        return "6.0";
                    case 5.7:
                        return "7.0";
                    default:   return true;
                }
            }
            if (@_win16 || @_win32 || @_win64) {
                this.windows = true;
                this.trident = jscriptVersion();
            } else if (@_mac || navigator.platform.indexOf("Mac") >= 0) {
                // '@_mac' may be 'NaN' even if the platform is Mac,
                // so we check 'navigator.platform', too.
                this.mac = true;
                this.tasman = jscriptVersion();
            }
            if (/MSIE (\d+\.\d+)b?;/.test(ua)) {
                this.ie = RegExp.$1;
                this['ie' + RegExp.$1.charAt(0)] = true;
            }
        @else @*/

        /* for AppleWebKit */
        if (/AppleWebKit\/(\d+(?:\.\d+)*)/.test(ua)) {
            this.applewebkit = RegExp.$1;
            if (RegExp.$1.charAt(0) == 4) {
                this.applewebkit2 = true;
            }
            else {
                this.applewebkit3 = true;
            }
        }

        /* for Gecko */
        else if (typeof Components == "object" &&
                 (/Gecko\/(\d{8})/.test(ua) ||
                  navigator.product == "Gecko" && /^(\d{8})$/.test(navigator.productSub))) {
            this.gecko = RegExp.$1;
        }

        /*@end @*/

        if (typeof(opera) == "object" && typeof(opera.version) == "function") {
            this.opera = opera.version();
            this['opera' + this.opera[0] + this.opera[2]] = true;
        } else if (typeof opera == "object"
                && (/Opera[\/ ](\d+\.\d+)/.test(ua))) {
            this.opera = RegExp.$1;
        } else if (this.ie) {
        } else if (/Safari\/(\d+(?:\.\d+)*)/.test(ua)) {
            this.safari = RegExp.$1;
        } else if (/NetFront\/(\d+(?:\.\d+)*)/.test(ua)) {
            this.netfront = RegExp.$1;
        } else if (/Konqueror\/(\d+(?:\.\d+)*)/.test(ua)) {
            this.konqueror = RegExp.$1;
        } else if (ua.indexOf("(compatible;") < 0
                && (/^Mozilla\/(\d+\.\d+)/.test(ua))) {
            this.mozilla = RegExp.$1;
            if (/\([^(]*rv:(\d+(?:\.\d+)*).*?\)/.test(ua))
                this.mozillarv = RegExp.$1;
            if (/Firefox\/(\d+(?:\.\d+)*)/.test(ua)) {
                this.firefox = RegExp.$1;
            } else if (/Netscape\d?\/(\d+(?:\.\d+)*)/.test(ua)) {
                this.netscape = RegExp.$1;
            }
        } else {
            this.unknown = true;
        }

        if (ua.indexOf("Win 9x 4.90") >= 0) {
            this.windows = "ME";
        } else if (/Win(?:dows)? ?(NT ?(\d+\.\d+)?|\d+|ME|Vista|XP)/.test(ua)) {
            this.windows = RegExp.$1;
            if (RegExp.$2) {
                this.winnt = RegExp.$2;
            } else switch (RegExp.$1) {
                case "2000":   this.winnt = "5.0";  break;
                case "XP":     this.winnt = "5.1";  break;
                case "Vista":  this.winnt = "6.0";  break;
            }
        } else if (ua.indexOf("Mac") >= 0) {
            this.mac = true;
        } else if (ua.indexOf("Linux") >= 0) {
            this.linux = true;
        } else if (/(\w*BSD)/.test(ua)) {
            this.bsd = RegExp.$1;
        } else if (ua.indexOf("SunOS") >= 0) {
            this.sunos = true;
        }
    }
};


/**
 * pseudo class: Lexer
 */
var Lexer = function(source) {
    var proto = Lexer.prototype;
    var tokens = source.match(proto.regs.token);
    for (var i = 0, l = tokens.length; i < l; i ++) {
        if (proto.regs.strip.test(tokens[i])) {
            tokens.splice(i, 1);
        }
    }
    for (var n in proto) tokens[n] = proto[n];
    tokens.index = 0;
    return tokens;
};

Lexer.prototype.regs = {
    token: /\$?(?:(?![0-9-])[\w-]+:)?(?![0-9-])[\w-]+|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|(?![0-9-])[\w-]+:\*|\s+|./g,
    strip: /^\s/
};

Lexer.prototype.peek = function(i) {
    return this[this.index + (i||0)];
};
Lexer.prototype.next = function() {
    return this[this.index++];
};
Lexer.prototype.back = function() {
    this.index--;
};
Lexer.prototype.empty = function() {
    return this.length <= this.index;
};


/**
 * class: Ctx
 */
var Ctx = function(node, position, last) {
    this.node = node;
    this.position = position || 1;
    this.last = last || 1;
};


/**
 * abstract class: BaseExpr
 */
var BaseExpr = function() {};

BaseExpr.prototype.number = function(ctx) {
    var exrs = this.evaluate(ctx);
    if (exrs.isNodeSet) return exrs.number();
    return + exrs;
};

BaseExpr.prototype.string = function(ctx) {
    var exrs = this.evaluate(ctx);
    if (exrs.isNodeSet) return exrs.string();
    return '' + exrs;
};

BaseExpr.prototype.bool = function(ctx) {
    var exrs = this.evaluate(ctx);
    if (exrs.isNodeSet) return exrs.bool();
    return !! exrs;
};


/**
 * abstract class: BaseExprHasPredicates
 */
var BaseExprHasPredicates = function() {};

BaseExprHasPredicates.parsePredicates = function(lexer, expr) {
    while (lexer.peek() == '[') {
        lexer.next();
        if (lexer.empty()) {
            throw Error('missing predicate expr');
        }
        var predicate = BinaryExpr.parse(lexer);
        expr.predicate(predicate);
        if (lexer.empty()) {
            throw Error('unclosed predicate expr');
        }
        if (lexer.next() != ']') {
            lexer.back();
            throw Error('bad token: ' + lexer.next());
        }
    }
};

BaseExprHasPredicates.prototype = new BaseExpr();

BaseExprHasPredicates.prototype.evaluatePredicates = function(nodeset, start) {
    var predicates, predicate, nodes, node, nodeset, position, reverse;

    reverse = this.reverse;
    predicates = this.predicates;

    nodeset.sort();

    for (var i = start || 0, l0 = predicates.length; i < l0; i ++) {
        predicate = predicates[i];

        var deleteIndexes = [];
        var nodes = nodeset.list();

        for (var j = 0, l1 = nodes.length; j < l1; j ++) {

            position = reverse ? (l1 - j) : (j + 1);
            exrs = predicate.evaluate(new Ctx(nodes[j], position, l1));

            switch (typeof exrs) {
                case 'number':
                    exrs = (position == exrs);
                    break;
                case 'string':
                    exrs = !!exrs;
                    break;
                case 'object':
                    exrs = exrs.bool();
                    break;
            }

            if (!exrs) {
                deleteIndexes.push(j);
            }
        }

        for (var j = deleteIndexes.length - 1, l1 = 0; j >= l1; j --) {
            nodeset.del(deleteIndexes[j]);
        }

    }

    return nodeset;
};


/**
 * class: BinaryExpr
 */
if (!window.BinaryExpr && window.defaultConfig)
    window.BinaryExpr = null;

BinaryExpr = function(op, left, right, datatype) {
    this.op = op;
    this.left = left;
    this.right = right;

    this.datatype = BinaryExpr.ops[op][2];

    this.needContextPosition = left.needContextPosition || right.needContextPosition;
    this.needContextNode = left.needContextNode || right.needContextNode;

    // Optimize [@id="foo"] and [@name="bar"]
    if (this.op == '=') {
        if (!right.needContextNode && !right.needContextPosition && 
            right.datatype != 'nodeset' && right.datatype != 'void' && left.quickAttr) {
            this.quickAttr = true;
            this.attrName = left.attrName;
            this.attrValueExpr = right;
        }
        else if (!left.needContextNode && !left.needContextPosition && 
            left.datatype != 'nodeset' && left.datatype != 'void' && right.quickAttr) {
            this.quickAttr = true;
            this.attrName = right.attrName;
            this.attrValueExpr = left;
        }
    }
};

BinaryExpr.compare = function(op, comp, left, right, ctx) {
    var type, lnodes, rnodes, nodes, nodeset, primitive;

    left = left.evaluate(ctx);
    right = right.evaluate(ctx);

    if (left.isNodeSet && right.isNodeSet) {
        lnodes = left.list();
        rnodes = right.list();
        for (var i = 0, l0 = lnodes.length; i < l0; i ++)
            for (var j = 0, l1 = rnodes.length; j < l1; j ++)
                if (comp(NodeUtil.to('string', lnodes[i]), NodeUtil.to('string', rnodes[j])))
                    return true;
        return false;
    }

    if (left.isNodeSet || right.isNodeSet) {
        if (left.isNodeSet)
            nodeset = left, primitive = right;
        else
            nodeset = right, primitive = left;

        nodes = nodeset.list();
        type = typeof primitive;
        for (var i = 0, l = nodes.length; i < l; i ++) {
            if (comp(NodeUtil.to(type, nodes[i]), primitive))
                return true;
        }
        return false;
    }

    if (op == '=' || op == '!=') {
        if (typeof left == 'boolean' || typeof right == 'boolean') {
            return comp(!!left, !!right);
        }
        if (typeof left == 'number' || typeof right == 'number') {
            return comp(+left, +right);
        }
        return comp(left, right);
    }

    return comp(+left, +right);
};


BinaryExpr.ops = {
    'div': [6, function(left, right, ctx) {
        return left.number(ctx) / right.number(ctx);
    }, 'number'],
    'mod': [6, function(left, right, ctx) {
        return left.number(ctx) % right.number(ctx);
    }, 'number'],
    '*': [6, function(left, right, ctx) {
        return left.number(ctx) * right.number(ctx);
    }, 'number'],
    '+': [5, function(left, right, ctx) {
        return left.number(ctx) + right.number(ctx);
    }, 'number'],
    '-': [5, function(left, right, ctx) {
        return left.number(ctx) - right.number(ctx);
    }, 'number'],
    '<': [4, function(left, right, ctx) {
        return BinaryExpr.compare('<',
                    function(a, b) { return a < b }, left, right, ctx);
    }, 'boolean'],
    '>': [4, function(left, right, ctx) {
        return BinaryExpr.compare('>',
                    function(a, b) { return a > b }, left, right, ctx);
    }, 'boolean'],
    '<=': [4, function(left, right, ctx) {
        return BinaryExpr.compare('<=',
                    function(a, b) { return a <= b }, left, right, ctx);
    }, 'boolean'],
    '>=': [4, function(left, right, ctx) {
        return BinaryExpr.compare('>=',
                    function(a, b) { return a >= b }, left, right, ctx);
    }, 'boolean'],
    '=': [3, function(left, right, ctx) {
        return BinaryExpr.compare('=',
                    function(a, b) { return a == b }, left, right, ctx);
    }, 'boolean'],
    '!=': [3, function(left, right, ctx) {
        return BinaryExpr.compare('!=',
                    function(a, b) { return a != b }, left, right, ctx);
    }, 'boolean'],
    'and': [2, function(left, right, ctx) {
        return left.bool(ctx) && right.bool(ctx);
    }, 'boolean'],
    'or': [1, function(left, right, ctx) {
        return left.bool(ctx) || right.bool(ctx);
    }, 'boolean']
};


BinaryExpr.parse = function(lexer) {
    var op, precedence, info, expr, stack = [], index = lexer.index;

    while (true) {

        if (lexer.empty()) {
            throw Error('missing right expression');
        }
        expr = UnaryExpr.parse(lexer);

        op = lexer.next();
        if (!op) {
            break;
        }

        info = this.ops[op];
        precedence = info && info[0];
        if (!precedence) {
            lexer.back();
            break;
        }

        while (stack.length && precedence <= this.ops[stack[stack.length-1]][0]) {
            expr = new BinaryExpr(stack.pop(), stack.pop(), expr);
        }

        stack.push(expr, op);
    }

    while (stack.length) {
        expr = new BinaryExpr(stack.pop(), stack.pop(), expr);
    }

    return expr;
};

BinaryExpr.prototype = new BaseExpr();

BinaryExpr.prototype.evaluate = function(ctx) {
    return BinaryExpr.ops[this.op][1](this.left, this.right, ctx);
};

BinaryExpr.prototype.show = function(indent) {
    indent = indent || '';
    var t = '';
    t += indent + 'binary: ' + this.op + '\n';
    indent += '    ';
    t += this.left.show(indent);
    t += this.right.show(indent);
    return t;
};


/**
 * class: UnaryExpr
 */
if (!window.UnaryExpr && window.defaultConfig)
    window.UnaryExpr = null;

UnaryExpr = function(op, expr) {
    this.op = op;
    this.expr = expr;

    this.needContextPosition = expr.needContextPosition;
    this.needContextNode = expr.needContextNode;
};

UnaryExpr.ops = { '-': 1 };

UnaryExpr.parse = function(lexer) {
    var token;
    if (this.ops[lexer.peek()])
        return new UnaryExpr(lexer.next(), UnaryExpr.parse(lexer));
    else
        return UnionExpr.parse(lexer);
};

UnaryExpr.prototype = new BaseExpr();

UnaryExpr.prototype.datatype = 'number';

UnaryExpr.prototype.evaluate = function(ctx) {
    return - this.expr.number(ctx);
};

UnaryExpr.prototype.show = function(indent) {
    indent = indent || '';
    var t = '';
    t += indent + 'unary: ' + this.op + '\n';
    indent += '    ';
    t += this.expr.show(indent);
    return t;
};


/**
 * class: UnionExpr
 */
if (!window.UnionExpr && window.defaultConfig)
    window.UnionExpr = null;

UnionExpr = function() {
    this.paths = [];
};

UnionExpr.ops = { '|': 1 };


UnionExpr.parse = function(lexer) {
    var union, expr;

    expr = PathExpr.parse(lexer);
    if (!this.ops[lexer.peek()])
        return expr;

    union = new UnionExpr();
    union.path(expr);

    while (true) {
        if (!this.ops[lexer.next()]) break;
        if (lexer.empty()) {
            throw Error('missing next union location path');
        }
        union.path(PathExpr.parse(lexer));
    }



    lexer.back();
    return union;
};

UnionExpr.prototype = new BaseExpr();

UnionExpr.prototype.datatype = 'nodeset';

UnionExpr.prototype.evaluate = function(ctx) {
    var paths = this.paths;
    var nodeset = new NodeSet();
    for (var i = 0, l = paths.length; i < l; i ++) {
        var exrs = paths[i].evaluate(ctx);
        if (!exrs.isNodeSet) throw Error('PathExpr must be nodeset');
        nodeset.merge(exrs);
    }
    return nodeset;
};

UnionExpr.prototype.path = function(path) {
    this.paths.push(path);

    if (path.needContextPosition) {
        this.needContextPosition = true;
    }
    if (path.needContextNode) {
        this.needContextNode = true;
    }
}
UnionExpr.prototype.show = function(indent) {
    indent = indent || '';
    var t = '';
    t += indent + 'union:' + '\n';
    indent += '    ';
    for (var i = 0; i < this.paths.length; i ++) {
        t += this.paths[i].show(indent);
    }
    return t;
};


/**
 * class: PathExpr
 */
if (!window.PathExpr && window.defaultConfig)
    window.PathExpr = null;

PathExpr = function(filter) {
    this.filter = filter;
    this.steps = [];

    this.datatype = filter.datatype;

    this.needContextPosition = filter.needContextPosition;
    this.needContextNode = filter.needContextNode;
};

PathExpr.ops = { '//': 1, '/': 1 };

PathExpr.parse = function(lexer) {
    var op, expr, path, token;

    if (this.ops[lexer.peek()]) {
        op = lexer.next();
        token = lexer.peek();

        if (op == '/' && (lexer.empty() || 
                (token != '.' && token != '..' && token != '@' && token != '*' && 
                !/(?![0-9])[\w]/.test(token)))) { 
            return FilterExpr.root();
        }

        path = new PathExpr(FilterExpr.root()); // RootExpr

        if (lexer.empty()) {
            throw Error('missing next location step');
        }
        expr = Step.parse(lexer);
        path.step(op, expr);
    }
    else {
        expr = FilterExpr.parse(lexer);
        if (!expr) {
            expr = Step.parse(lexer);
            path = new PathExpr(FilterExpr.context());
            path.step('/', expr);
        }
        else if (!this.ops[lexer.peek()])
            return expr;
        else
            path = new PathExpr(expr);
    }

    while (true) {
        if (!this.ops[lexer.peek()]) break;
        op = lexer.next();
        if (lexer.empty()) {
            throw Error('missing next location step');
        }
        path.step(op, Step.parse(lexer));
    }

    return path;
};

PathExpr.prototype = new BaseExpr();

PathExpr.prototype.evaluate = function(ctx) {
    var nodeset = this.filter.evaluate(ctx);
    if (!nodeset.isNodeSet) throw Exception('Filter nodeset must be nodeset type');

    var steps = this.steps;

    for (var i = 0, l0 = steps.length; i < l0 && nodeset.length; i ++) {
        var step = steps[i][1];
        var reverse = step.reverse;
        var iter = nodeset.iterator(reverse);
        var prevNodeset = nodeset;
        nodeset = null;
        var node, next;
        if (!step.needContextPosition && step.axis == 'following') {
            for (node = iter(); next = iter(); node = next) {

                // Safari 2 node.contains problem
                if (uai.applewebkit2) {
                    var contains = false;
                    var ancestor = next;
                    do {
                        if (ancestor == node) {
                            contains = true;
                            break;
                        }
                    } while (ancestor = ancestor.parentNode);
                    if (!contains) break;
                }
                else {
                    try { if (!node.contains(next)) break }
                    catch(e) { if (!(next.compareDocumentPosition(node) & 8)) break }
                }
            }
            nodeset = step.evaluate(new Ctx(node));
        }
        else if (!step.needContextPosition && step.axis == 'preceding') {
            node = iter();
            nodeset = step.evaluate(new Ctx(node));
        }
        else {
            node = iter();
            var j = 0;
            nodeset = step.evaluate(new Ctx(node), false, prevNodeset, j);
            while (node = iter()) {
                j ++;
                nodeset.merge(step.evaluate(new Ctx(node), false, prevNodeset, j));
            }
        }
    }

    return nodeset;
};

PathExpr.prototype.step = function(op, step) {
    step.op = op;
    this.steps.push([op, step]);

    this.quickAttr = false;

    if (this.steps.length == 1) {
        if (op == '/' && step.axis == 'attribute') {
            var test = step.test;
            if (!test.notOnlyElement && test.name != '*') {
                this.quickAttr = true;
                this.attrName = test.name;
            }
        }
    }
};

PathExpr.prototype.show = function(indent) {
    indent = indent || '';
    var t = '';
    t += indent + 'path:' + '\n';
    indent += '    ';
    t += indent + 'filter:' + '\n';
    t += this.filter.show(indent + '    ');
    if (this.steps.length) {
        t += indent + 'steps:' + '\n';
        indent += '    ';
        for (var i = 0; i < this.steps.length; i ++) {
            var step = this.steps[i];
            t += indent + 'operator: ' + step[0] + '\n';
            t += step[1].show(indent);
        }
    }
    return t;
};


/**
 * class: FilterExpr
 */
if (!window.FilterExpr && window.defaultConfig)
    window.FilterExpr = null;

FilterExpr = function(primary) {
    this.primary = primary;
    this.predicates = [];

    this.datatype = primary.datatype;

    this.needContextPosition = primary.needContextPosition;

    this.needContextNode = primary.needContextNode;
};

FilterExpr.parse = function(lexer) {
    var expr, filter, token, ch;

    token = lexer.peek();
    ch = token.charAt(0);

    switch (ch) {
        case '$':
            expr = VariableReference.parse(lexer);
            break;

        case '(':
            lexer.next();
            expr = BinaryExpr.parse(lexer);
            if (lexer.empty()) {
                throw Error('unclosed "("');
            }
            if (lexer.next() != ')') {
                lexer.back();
                throw Error('bad token: ' + lexer.next());
            }
            break;

        case '"':
        case "'":
            expr = Literal.parse(lexer);
            break;

        default:
            if (!isNaN(+token)) {
                expr = Number.parse(lexer);
            }

            else if (NodeType.types[token]) {
                return null;
            }

            else if (/(?![0-9])[\w]/.test(ch) && lexer.peek(1) == '(') {
                expr = FunctionCall.parse(lexer);
            }
            else {
                return null;
            }
            break;
    }

    if (lexer.peek() != '[') return expr;

    filter = new FilterExpr(expr);

    BaseExprHasPredicates.parsePredicates(lexer, filter);

    return filter;
};

FilterExpr.root = function() {
    return new FunctionCall('root-node');
};
FilterExpr.context = function() {
    return new FunctionCall('context-node');
};

FilterExpr.prototype = new BaseExprHasPredicates();

FilterExpr.prototype.evaluate = function(ctx) {
    var nodeset = this.primary.evaluate(ctx);
    if(!nodeset.isNodeSet) {
        if (this.predicates.length)
            throw Error(
                'Primary result must be nodeset type ' +
                'if filter have predicate expression');
        return nodeset;
    }

    return  this.evaluatePredicates(nodeset);
};

FilterExpr.prototype.predicate = function(predicate) {
    this.predicates.push(predicate);
};

FilterExpr.prototype.show = function(indent) {
    indent = indent || '';
    var t = '';
    t += indent + 'filter: ' + '\n';
    indent += '    ';
    t += this.primary.show(indent);
    if (this.predicates.length) {
        t += indent + 'predicates: ' + '\n';
        indent += '    ';
        for (var i = 0; i < this.predicates.length; i ++) {
            t += this.predicates[i].show(indent);
        }
    }
    return t;
};


if (!window.NodeUtil && window.defaultConfig)
    window.NodeUtil = null;

NodeUtil = {
    to: function(valueType, node) {
        var t, type = node.nodeType;
        // Safari2: innerText contains some bugs
        if (type == 1 && config.useInnerText && !uai.applewebkit2) {
            t = node.textContent;
            t = (t == undefined || t == null) ? node.innerText : t;
            t = (t == undefined || t == null) ? '' : t;
        }
        if (typeof t != 'string') {
/*@cc_on
            if (type == 1 && node.nodeName.toLowerCase() == 'title') {
                t = node.text;
            }
            else
@*/
            if (type == 9 || type == 1) {
                if (type == 9) {
                    node =  node.documentElement;
                }
                else {
                    node = node.firstChild;
                }
                for (t = '', stack = [], i = 0; node;) {
                    do {
                        if (node.nodeType != 1) {
                            t += node.nodeValue;
                        }
/*@cc_on
                        else if (node.nodeName.toLowerCase() == 'title') {
                            t += node.text;
                        }
@*/
                        stack[i++] = node; // push
                    } while (node = node.firstChild);
                    while (i && !(node = stack[--i].nextSibling)) {}
                }
            }
            else {
                t = node.nodeValue;
            }
        }
        switch (valueType) {
            case 'number':
                return + t;
            case 'boolean':
                return !! t;
            default:
                return t;
        }
    },
    attrPropMap: {
        name: 'name',
        'class': 'className',
        dir: 'dir',
        id: 'id',
        name: 'name',
        title: 'title'
    },
    attrMatch: function(node, attrName, attrValue) {
/*@cc_on @if (@_jscript)
        var propName = NodeUtil.attrPropMap[attrName];
        if (!attrName ||
            attrValue == null && (
                propName && node[propName] ||
                !propName && node.getAttribute && node.getAttribute(attrName, 2)
            ) ||
            attrValue != null && (
                propName && node[propName] == attrValue ||
                !propName && node.getAttribute && node.getAttribute(attrName, 2) == attrValue
            )) {
@else @*/
        if (!attrName ||
            attrValue == null && node.hasAttribute && node.hasAttribute(attrName) ||
            attrValue != null && node.getAttribute && node.getAttribute(attrName) == attrValue) {
/*@end @*/
            return true;
        }
        else {
            return false;
        }
    },
    getDescendantNodes: function(test, node, nodeset, attrName, attrValue, prevNodeset, prevIndex) {
        if (prevNodeset) {
            prevNodeset.delDescendant(node, prevIndex);
        }
/*@cc_on
        try {
            if (!test.notOnlyElement || test.type == 8 || (attrName && test.type == 0)) {

                var all = node.all;
                if (!all) {
                    return nodeset;
                }

                var name = test.name;
                if (test.type == 8) name = '!';
                else if (test.type == 0) name = '*';

                if (name != '*') {
                    all = all.tags(name);
                    if (!all) {
                        return nodeset;
                    }
                }

                if (attrName) {
                    var result = []
                    var i = 0;
                    if (attrValue != null && (attrName == 'id' || attrName == 'name')) {
                        all = all[attrValue];
                        if (!all) {
                            return nodeset;
                        }
                        if (!all.length || all.nodeType) {
                            all = [all];
                        }
                    }
        
                    while (node = all[i++]) {
                        if (NodeUtil.attrMatch(node, attrName, attrValue)) result.push(node);
                    }

                    all = result;
                }

                var i = 0;
                while (node = all[i++]) {
                    if (name != '*' || node.tagName != '!') {
                        nodeset.push(node);
                    }
                }

                return nodeset;
            }

            (function (parent) {
                var g = arguments.callee;
                var node = parent.firstChild;
                if (node) {
                    for (; node; node = node.nextSibling) {
                        if (NodeUtil.attrMatch(node, attrName, attrValue)) {
                            if (test.match(node)) nodeset.push(node);
                        }
                        g(node);
                    }
                }
            })(node);

            return nodeset;
        }
        catch(e) {
@*/
        if (attrValue && attrName == 'id' && node.getElementById) {
            node = node.getElementById(attrValue);
            if (node && test.match(node)) {
                nodeset.push(node);
            }
        }
        else if (attrValue && attrName == 'name' && node.getElementsByName) {
            var nodes = node.getElementsByName(attrValue);
            for (var i = 0, l = nodes.length; i < l; i ++) {
                node = nodes[i];
                if (uai.opera ? (node.name == attrValue && test.match(node)) : test.match(node)) {
                    nodeset.push(node);
                }
            }
        }
        else if (attrValue && attrName == 'class' && node.getElementsByClassName) {
            var nodes = node.getElementsByClassName(attrValue);
            for (var i = 0, l = nodes.length; i < l; i ++) {
                node = nodes[i];
                if (node.className == attrValue && test.match(node)) {
                    nodeset.push(node);
                }
            }
        }
        else if (test.notOnlyElement) {
            (function (parent) {
                var f = arguments.callee;
                for (var node = parent.firstChild; node; node = node.nextSibling) {
                    if (NodeUtil.attrMatch(node, attrName, attrValue)) {
                        if (test.match(node.nodeType)) nodeset.push(node);
                    }
                    f(node);
                }
            })(node);
        }
        else {
            var name = test.name;
            if (node.getElementsByTagName) {
                var nodes = node.getElementsByTagName(name);
                if (nodes) {
                    var i = 0;
                    while (node = nodes[i++]) {
                        if (NodeUtil.attrMatch(node, attrName, attrValue)) nodeset.push(node);
                    }
                }
            }
        }
        return nodeset;
/*@cc_on
        }
@*/
    },

    getChildNodes: function(test, node, nodeset, attrName, attrValue) {

/*@cc_on
        try {
            var children;

            if ((!test.notOnlyElement || test.type == 8 || (attrName && test.type == 0)) && (children = node.children)) {
                var name, elm;

                name = test.name;
                if (test.type == 8) name = '!';
                else if (test.type == 0) name = '*';

                if (name != '*') {
                    children = children.tags(name);
                    if (!children) {
                        return nodeset;
                    }
                }

                if (attrName) {
                    var result = []
                    var i = 0;
                    if (attrName == 'id' || attrName == 'name') {
                        children = children[attrValue];
        
                        if (!children) {
                            return nodeset;
                        }
        
                        if (!children.length || children.nodeType) {
                            children = [children];
                        }
                    }
        
                    while (node = children[i++]) {
                        if (NodeUtil.attrMatch(node, attrName, attrValue)) result.push(node);
                    }
                    children = result;
                }

                var i = 0;
                while (node = children[i++]) {
                    if (name != '*' || node.tagName != '!') {
                        nodeset.push(node);
                    }
                }

                return nodeset;
            }

            for (var i = 0, node = node.firstChild; node; i++, node = node.nextSibling) {
                if (NodeUtil.attrMatch(node, attrName, attrValue)) {
                    if (test.match(node)) nodeset.push(node);
                }
            }

            return nodeset;
        } catch(e) {
@*/
        for (var node = node.firstChild; node; node = node.nextSibling) {
            if (NodeUtil.attrMatch(node, attrName, attrValue)) {
                if (test.match(node)) nodeset.push(node);
            }
        }
        return nodeset;
/*@cc_on
        }
@*/
    }
};

/*@cc_on
var AttributeWrapper = function(node, parent, sourceIndex) {
    this.node = node;
    this.nodeType = 2;
    this.nodeValue = node.nodeValue;
    this.nodeName = node.nodeName;
    this.parentNode = parent;
    this.ownerElement = parent;
    this.parentSourceIndex = sourceIndex;
};

@*/


/**
 * class: Step
 */
if (!window.Step && window.defaultConfig)
    window.Step = null;

Step = function(axis, test) {
    // TODO check arguments and throw axis error
    this.axis = axis;
    this.reverse = Step.axises[axis][0];
    this.func = Step.axises[axis][1];
    this.test = test;
    this.predicates = [];
    this._quickAttr = Step.axises[axis][2]
};

Step.axises = {

    ancestor: [true, function(test, node, nodeset, _, __, prevNodeset, prevIndex) {
        while (node = node.parentNode) {
            if (prevNodeset && node.nodeType == 1) {
                prevNodeset.reserveDelByNode(node, prevIndex, true);
            }
            if (test.match(node)) nodeset.unshift(node);
        }
        return nodeset;
    }],

    'ancestor-or-self': [true, function(test, node, nodeset, _, __, prevNodeset, prevIndex) {
        do {
            if (prevNodeset && node.nodeType == 1) {
                prevNodeset.reserveDelByNode(node, prevIndex, true);
            }
            if (test.match(node)) nodeset.unshift(node);
        } while (node = node.parentNode)
        return nodeset;
    }],

    attribute: [false, function(test, node, nodeset) {
        var attrs = node.attributes;
        if (attrs) {
/*@cc_on
            var sourceIndex = node.sourceIndex;
@*/
            if ((test.notOnlyElement && test.type == 0) || test.name == '*') {
                for (var i = 0, attr; attr = attrs[i]; i ++) {
/*@cc_on @if (@_jscript)
                    if (attr.nodeValue) {
                        nodeset.push(new AttributeWrapper(attr, node, sourceIndex));
                    }
@else @*/
                    nodeset.push(attr);
/*@end @*/
                }
            }
            else {
                var attr = attrs.getNamedItem(test.name);
                
/*@cc_on @if (@_jscript)
                if (attr && attr.nodeValue) {
                    attr = new AttributeWrapper(attr, node, sourceIndex);;
@else @*/
                if (attr) {
/*@end @*/
                    nodeset.push(attr);
                }
            }
        }
        return nodeset;
    }],

    child: [false, NodeUtil.getChildNodes, true],

    descendant: [false, NodeUtil.getDescendantNodes, true],

    'descendant-or-self': [false, function(test, node, nodeset, attrName, attrValue, prevNodeset, prevIndex) {
        if (NodeUtil.attrMatch(node, attrName, attrValue)) {
            if (test.match(node)) nodeset.push(node);
        }
        return NodeUtil.getDescendantNodes(test, node, nodeset, attrName, attrValue, prevNodeset, prevIndex);
    }, true],

    following: [false, function(test, node, nodeset, attrName, attrValue) {
        do {
            var child = node;
            while (child = child.nextSibling) {
                if (NodeUtil.attrMatch(child, attrName, attrValue)) {
                    if (test.match(child)) nodeset.push(child);
                }
                nodeset = NodeUtil.getDescendantNodes(test, child, nodeset, attrName, attrValue);
            }
        } while (node = node.parentNode);
        return nodeset;
    }, true],

    'following-sibling': [false, function(test, node, nodeset, _, __, prevNodeset, prevIndex) {
        while (node = node.nextSibling) {

            if (prevNodeset && node.nodeType == 1) {
                prevNodeset.reserveDelByNode(node, prevIndex);
            }

            if (test.match(node)) {
                nodeset.push(node);
            }
        }
        return nodeset;
    }],

    namespace: [false, function(test, node, nodeset) {
        // not implemented
        return nodeset;
    }],

    parent: [false, function(test, node, nodeset) {
        if (node.nodeType == 9) {
            return nodeset;
        }
        if (node.nodeType == 2) {
            nodeset.push(node.ownerElement);
            return nodeset;
        }
        var node = node.parentNode;
        if (test.match(node)) nodeset.push(node);
        return nodeset;
    }],

    preceding: [true, function(test, node, nodeset, attrName, attrValue) {
        var parents = [];
        do {
            parents.unshift(node);
        } while (node = node.parentNode);

        for (var i = 1, l0 = parents.length; i < l0; i ++) {
            var siblings = [];
            node = parents[i];
            while (node = node.previousSibling) {
                siblings.unshift(node);
            }

            for (var j = 0, l1 = siblings.length; j < l1; j ++) {
                node = siblings[j];
                if (NodeUtil.attrMatch(node, attrName, attrValue)) {
                    if (test.match(node)) nodeset.push(node);
                }
                nodeset = NodeUtil.getDescendantNodes(test, node, nodeset, attrName, attrValue);
            }
        }
        return nodeset;
    }, true],

    'preceding-sibling': [true, function(test, node, nodeset, _, __, prevNodeset, prevIndex) {
        while (node = node.previousSibling) {

            if (prevNodeset && node.nodeType == 1) {
                prevNodeset.reserveDelByNode(node, prevIndex, true);
            }

            if (test.match(node)) {
                nodeset.unshift(node)
            }
        }
        return nodeset;
    }],

    self: [false, function(test, node, nodeset) {
        if (test.match(node)) nodeset.push(node);
        return nodeset;
    }]
};

Step.parse = function(lexer) {
    var axis, test, step, token;

    if (lexer.peek() == '.') {
        step = this.self();
        lexer.next();
    }
    else if (lexer.peek() == '..') {
        step = this.parent();
        lexer.next();
    }
    else {
        if (lexer.peek() == '@') {
            axis = 'attribute';
            lexer.next();
            if (lexer.empty()) {
                throw Error('missing attribute name');
            }
        }
        else {
            if (lexer.peek(1) == '::') {
                
                if (!/(?![0-9])[\w]/.test(lexer.peek().charAt(0))) {
                    throw Error('bad token: ' + lexer.next());
                }
        
                axis = lexer.next();
                lexer.next();

                if (!this.axises[axis]) {
                    throw Error('invalid axis: ' + axis);
                }
                if (lexer.empty()) {
                    throw Error('missing node name');
                }
            }
            else {
                axis = 'child';
            }
        }
    
        token = lexer.peek();
        if (!/(?![0-9])[\w]/.test(token.charAt(0))) {
            if (token == '*') {
                test = NameTest.parse(lexer)
            }
            else {
                throw Error('bad token: ' + lexer.next());
            }
        }
        else {
            if (lexer.peek(1) == '(') {
                if (!NodeType.types[token]) {
                    throw Error('invalid node type: ' + token);
                }
                test = NodeType.parse(lexer)
            }
            else {
                test = NameTest.parse(lexer);
            }
        }
        step = new Step(axis, test);
    }

    BaseExprHasPredicates.parsePredicates(lexer, step);

    return step;
};

Step.self = function() {
    return new Step('self', new NodeType('node'));
};

Step.parent = function() {
    return new Step('parent', new NodeType('node'));
};

Step.prototype = new BaseExprHasPredicates();

Step.prototype.evaluate = function(ctx, special, prevNodeset, prevIndex) {
    var node = ctx.node;
    var reverse = false;

    if (!special && this.op == '//') {

        if (!this.needContextPosition && this.axis == 'child') {
            if (this.quickAttr) {
                var attrValue = this.attrValueExpr ? this.attrValueExpr.string(ctx) : null;
                var nodeset = NodeUtil.getDescendantNodes(this.test, node, new NodeSet(), this.attrName, attrValue, prevNodeset, prevIndex);
                nodeset = this.evaluatePredicates(nodeset, 1);
            }
            else {
                var nodeset = NodeUtil.getDescendantNodes(this.test, node, new NodeSet(), null, null, prevNodeset, prevIndex);
                nodeset = this.evaluatePredicates(nodeset);
            }
        }
        else {
            var step = new Step('descendant-or-self', new NodeType('node'));
            var nodes = step.evaluate(ctx, false, prevNodeset, prevIndex).list();
            var nodeset = null;
            step.op = '/';
            for (var i = 0, l = nodes.length; i < l; i ++) {
                if (!nodeset) {
                    nodeset = this.evaluate(new Ctx(nodes[i]), true);
                }
                else {
                    nodeset.merge(this.evaluate(new Ctx(nodes[i]), true));
                }
            }
            nodeset = nodeset || new NodeSet();
        }
    }
    else {

        if (this.needContextPosition) {
            prevNodeset = null;
            prevIndex = null;
        }

        if (this.quickAttr) {
            var attrValue = this.attrValueExpr ? this.attrValueExpr.string(ctx) : null;
            var nodeset = this.func(this.test, node, new NodeSet(), this.attrName, attrValue, prevNodeset, prevIndex);
            nodeset = this.evaluatePredicates(nodeset, 1);
        }
        else {
            var nodeset = this.func(this.test, node, new NodeSet(), null, null, prevNodeset, prevIndex);
            nodeset = this.evaluatePredicates(nodeset);
        }
        if (prevNodeset) {
            prevNodeset.doDel();
        }
    }
    return nodeset;
};

Step.prototype.predicate = function(predicate) {
    this.predicates.push(predicate);

    if (predicate.needContextPosition ||
        predicate.datatype == 'number'||
        predicate.datatype == 'void') {
        this.needContextPosition = true;
    }

    if (this._quickAttr && this.predicates.length == 1 && predicate.quickAttr) {
        var attrName = predicate.attrName;
/*@cc_on @if (@_jscript)
        this.attrName = attrName.toLowerCase();
@else @*/
        this.attrName = attrName;
/*@end @*/
        this.attrValueExpr = predicate.attrValueExpr;
        this.quickAttr = true;
    }
};

Step.prototype.show = function(indent) {
    indent = indent || '';
    var t = '';
    t += indent + 'step: ' + '\n';
    indent += '    ';
    if (this.axis) t += indent + 'axis: ' + this.axis + '\n';
    t += this.test.show(indent);
    if (this.predicates.length) {
        t += indent + 'predicates: ' + '\n';
        indent += '    ';
        for (var i = 0; i < this.predicates.length; i ++) {
            t += this.predicates[i].show(indent);
        }
    }
    return t;
};



/**
 * NodeType
 */
if (!window.NodeType && window.defaultConfig)
    window.NodeType = null;
    
NodeType = function(name, literal) {
    this.name = name;
    this.literal = literal;

    switch (name) {
        case 'comment':
            this.type = 8;
            break;
        case 'text':
            this.type = 3;
            break;
        case 'processing-instruction':
            this.type = 7;
            break;
        case 'node':
            this.type = 0;
            break;
    }
};

NodeType.types = {
    'comment':1, 'text':1, 'processing-instruction':1, 'node':1
};

NodeType.parse = function(lexer) {
    var type, literal, ch;
    type = lexer.next();
    lexer.next();
    if (lexer.empty()) {
        throw Error('bad nodetype');
    }
    ch = lexer.peek().charAt(0);
    if (ch == '"' || ch == "'") {
        literal = Literal.parse(lexer);
    }
    if (lexer.empty()) {
        throw Error('bad nodetype');
    }
    if (lexer.next() != ')') {
        lexer.back();
        throw Error('bad token ' + lexer.next());
    }
    return new NodeType(type, literal);
};

NodeType.prototype = new BaseExpr();

NodeType.prototype.notOnlyElement = true;

NodeType.prototype.match = function(node) {
    return !this.type || this.type == node.nodeType;
};

NodeType.prototype.show = function(indent) {
    indent = indent || '';
    var t = '';
    t += indent + 'nodetype: ' + this.type + '\n';
    if (this.literal) {
        indent += '    ';
        t += this.literal.show(indent);
    }
    return t;
};


/**
 * NodeType
 */
if (!window.NameTest && window.defaultConfig)
    window.NameTest = null;

NameTest = function(name) {
    this.name = name.toLowerCase();
};

NameTest.parse = function(lexer) {
    if (lexer.peek() != '*' &&  lexer.peek(1) == ':' && lexer.peek(2) == '*') {
        return new NameTest(lexer.next() + lexer.next() + lexer.next());
    }
    return new NameTest(lexer.next());
};

NameTest.prototype = new BaseExpr();

NameTest.prototype.match = function(node) {
    var type = node.nodeType;

    if (type == 1 || type == 2) {
        if (this.name == '*' || this.name == node.nodeName.toLowerCase()) {
            return true;
        }
    }
    return false;
};

NameTest.prototype.show = function(indent) {
    indent = indent || '';
    var t = '';
    t += indent + 'nametest: ' + this.name + '\n';
    return t;
};


/**
 * class: VariableRefernce
 */
if (!window.VariableReference && window.defaultConfig)
    window.VariableReference = null;
    
VariableReference = function(name) {
    this.name = name.substring(1);
};


VariableReference.parse = function(lexer) {
    var token = lexer.next();
    if (token.length < 2) {
        throw Error('unnamed variable reference');
    }
    return new VariableReference(token)
};

VariableReference.prototype = new BaseExpr();

VariableReference.prototype.datatype = 'void';

VariableReference.prototype.show = function(indent) {
    indent = indent || '';
    var t = '';
    t += indent + 'variable: ' + this.name + '\n';
    return t;
};


/**
 * class: Literal
 */
if (!window.Literal && window.defaultConfig)
    window.Literal = null;

Literal = function(text) {
    this.text = text.substring(1, text.length - 1);
};

Literal.parse = function(lexer) {
    var token = lexer.next();
    if (token.length < 2) {
        throw Error('unclosed literal string');
    }
    return new Literal(token)
};

Literal.prototype = new BaseExpr();

Literal.prototype.datatype = 'string';

Literal.prototype.evaluate = function(ctx) {
    return this.text;
};

Literal.prototype.show = function(indent) {
    indent = indent || '';
    var t = '';
    t += indent + 'literal: ' + this.text + '\n';
    return t;
};


/**
 * class: Number
 */
if (!window.Number && window.defaultConfig)
    window.Number = null;

Number = function(digit) {
    this.digit = +digit;
};


Number.parse = function(lexer) {
    return new Number(lexer.next());
};

Number.prototype = new BaseExpr();

Number.prototype.datatype = 'number';

Number.prototype.evaluate = function(ctx) {
    return this.digit;
};

Number.prototype.show = function(indent) {
    indent = indent || '';
    var t = '';
    t += indent + 'number: ' + this.digit + '\n';
    return t;
};


/**
 * class: FunctionCall
 */
if (!window.FunctionCall && window.defaultConfig)
    window.FunctionCall = null;

FunctionCall = function(name) {
    var info = FunctionCall.funcs[name];
    if (!info)
        throw Error(name +' is not a function');

    this.name = name;
    this.func = info[0];
    this.args = [];

    this.datatype = info[1];

    if (info[2]) {
        this.needContextPosition = true;
    }

    this.needContextNodeInfo = info[3];
    this.needContextNode = this.needContextNodeInfo[0]
};

FunctionCall.funcs = {

    // Original Function
    'context-node': [function() {
        if (arguments.length != 0) {
            throw Error('Function context-node expects ()');
        }
        var ns;
        ns = new NodeSet();
        ns.push(this.node);
        return ns;
    }, 'nodeset', false, [true]],

    // Original Function
    'root-node': [function() {
        if (arguments.length != 0) {
            throw Error('Function root-node expects ()');
        }
        var ns, ctxn;
        ns = new NodeSet();
        ctxn = this.node;
        if (ctxn.nodeType == 9)
            ns.push(ctxn);
        else
            ns.push(ctxn.ownerDocument);
        return ns;
    }, 'nodeset', false, []],

    last: [function() {
        if (arguments.length != 0) {
            throw Error('Function last expects ()');
        }
        return this.last;
    }, 'number', true, []],

    position: [function() {
        if (arguments.length != 0) {
            throw Error('Function position expects ()');
        }
        return this.position;
    }, 'number', true, []],

    count: [function(ns) {
        if (arguments.length != 1 || !(ns = ns.evaluate(this)).isNodeSet) {
            throw Error('Function count expects (nodeset)');
        }
        return ns.length;
    }, 'number', false, []],

    id: [function(s) {
        var ids, ns, i, id, elm, ctxn, doc;
        if (arguments.length != 1) {
            throw Error('Function id expects (object)');
        }
        ctxn = this.node;
        if (ctxn.nodeType == 9)
            doc = ctxn;
        else
            doc = ctxn.ownerDocument;
/*@cc_on
        all = doc.all;
@*/
        s = s.string(this);
        ids = s.split(/\s+/);
        ns = new NodeSet();
        for (i = 0, l = ids.length; i < l; i ++) {
            id = ids[i];

/*@cc_on @if (@_jscript)
            elm = all[id];
            if (elm) {
                if ((!elm.length || elm.nodeType) && id == elm.id) {
                    ns.push(elm)
                }
                else if (elm.length) {
                    var elms = elm;
                    for (var j = 0, l0 = elms.length; j < l0; j ++) {
                        var elem = elms[j];
                        if (id == elem.id) {
                            ns.push(elem);
                            break;
                        }
                    }
                }
            }
@else @*/
            elm = doc.getElementById(id);
            if (uai.opera && elm && elm.id != id) {
                var elms = doc.getElementsByName(id);
                for (var j = 0, l0 = elms.length; j < l0; j ++) {
                    elm = elms[j];
                    if (elm.id == id) {
                        ns.push(elm);
                    }
                }
            }
            else {
                if (elm) ns.push(elm)
            }
/*@end @*/

        }
        ns.isSorted = false;
        return ns;
    }, 'nodeset', false, []],

    'local-name': [function(ns) {
        var nd;
        switch (arguments.length) {
            case 0:
                nd = this.node;
                break;
            case 1:
                if ((ns = ns.evaluate(this)).isNodeSet) {
                    nd = ns.first();
                    break;
                }
            default:
                throw Error('Function local-name expects (nodeset?)');
                break;
        }
        return '' + nd.nodeName.toLowerCase();
    }, 'string', false, [true, false]],

    name: [function(ns) {
        // not implemented
        return FunctionCall.funcs['local-name'][0].apply(this, arguments);
    }, 'string', false, [true, false]],

    'namespace-uri': [function(ns) {
        // not implemented
        return '';
    }, 'string', false, [true, false]],

    string: [function(s) {
        switch (arguments.length) {
            case 0:
                s = NodeUtil.to('string', this.node);
                break;
            case 1:
                s = s.string(this);
                break;
            default:
                throw Error('Function string expects (object?)');
                break;
        }
        return s;
    }, 'string', false, [true, false]],

    concat: [function(s1, s2) {
        if (arguments.length < 2) {
            throw Error('Function concat expects (string, string[, ...])');
        }
        for (var t = '', i = 0, l = arguments.length; i < l; i ++) {
            t += arguments[i].string(this);
        }
        return t;
    }, 'string', false, []],

    'starts-with': [function(s1, s2) {
        if (arguments.length != 2) {
            throw Error('Function starts-with expects (string, string)');
        }
        s1 = s1.string(this);
        s2 = s2.string(this);
        return s1.indexOf(s2) == 0;
    }, 'boolean', false, []],

    contains: [function(s1, s2) {
        if (arguments.length != 2) {
            throw Error('Function contains expects (string, string)');
        }
        s1 = s1.string(this);
        s2 = s2.string(this);
        return s1.indexOf(s2) != -1;
    }, 'boolean', false, []],

    substring: [function(s, n1, n2) {
        var a1, a2;
        s = s.string(this);
        n1 = n1.number(this);
        switch (arguments.length) {
            case 2:
                n2 = s.length - n1 + 1;
                break;
            case 3:
                n2 = n2.number(this);
                break;
            default:
                throw Error('Function substring expects (string, string)');
                break;
        }
        n1 = Math.round(n1);
        n2 = Math.round(n2);
        a1 = n1 - 1;
        a2 = n1 + n2 - 1;
        if (a2 == Infinity) {
            return s.substring(a1 < 0 ? 0 : a1);
        }
        else {
            return s.substring(a1 < 0 ? 0 : a1, a2)
        }
    }, 'string', false, []],

    'substring-before': [function(s1, s2) {
        var n;
        if (arguments.length != 2) {
            throw Error('Function substring-before expects (string, string)');
        }
        s1 = s1.string(this);
        s2 = s2.string(this);
        n = s1.indexOf(s2);
        if (n == -1) return '';
        return s1.substring(0, n);
    }, 'string', false, []],

    'substring-after': [function(s1, s2) {
        if (arguments.length != 2) {
            throw Error('Function substring-after expects (string, string)');
        }
        s1 = s1.string(this);
        s2 = s2.string(this);
        var n = s1.indexOf(s2);
        if (n == -1) return '';
        return s1.substring(n + s2.length);
    }, 'string', false, []],

    'string-length': [function(s) {
        switch (arguments.length) {
            case 0:
                s = NodeUtil.to('string', this.node);
                break;
            case 1:
                s = s.string(this);
                break;
            default:
                throw Error('Function string-length expects (string?)');
                break;
        }
        return s.length;
    }, 'number', false, [true, false]],

    'normalize-space': [function(s) {
        switch (arguments.length) {
            case 0:
                s = NodeUtil.to('string', this.node);
                break;
            case 1:
                s = s.string(this);
                break;
            default:
                throw Error('Function normalize-space expects (string?)');
                break;
        }
        return s.replace(/\s+/g, ' ').replace(/^ /, '').replace(/ $/, '');
    }, 'string', false, [true, false]],

    translate: [function(s1, s2, s3) {
        if (arguments.length != 3) {
            throw Error('Function translate expects (string, string, string)');
        }
        s1 = s1.string(this);
        s2 = s2.string(this);
        s3 = s3.string(this);

        var map = [];
        for (var i = 0, l = s2.length; i < l; i ++) {
            var ch = s2.charAt(i);
            if (!map[ch]) map[ch] = s3.charAt(i) || '';
        }
        for (var t = '', i = 0, l = s1.length; i < l; i ++) {
            var ch = s1.charAt(i);
            var replace = map[ch]
            t += (replace != undefined) ? replace : ch;
        }
        return t;
    }, 'string', false, []],

    'boolean': [function(b) {
        if (arguments.length != 1) {
            throw Error('Function boolean expects (object)');
        }
        return b.bool(this)
    }, 'boolean', false, []],

    not: [function(b) {
        if (arguments.length != 1) {
            throw Error('Function not expects (object)');
        }
        return !b.bool(this)
    }, 'boolean', false, []],

    'true': [function() {
        if (arguments.length != 0) {
            throw Error('Function true expects ()');
        }
        return true;
    }, 'boolean', false, []],

    'false': [function() {
        if (arguments.length != 0) {
            throw Error('Function false expects ()');
        }
        return false;
    }, 'boolean', false, []],

    lang: [function(s) {
        // not implemented
        return false;
    }, 'boolean', false, []],

    number: [function(n) {
        switch (arguments.length) {
            case 0:
                n = NodeUtil.to('number', this.node);
                break;
            case 1:
                n = n.number(this);
                break;
            default:
                throw Error('Function number expects (object?)');
                break;
        }
        return n;
    }, 'number', false, [true, false]],

    sum: [function(ns) {
        var nodes, n, i, l;
        if (arguments.length != 1 || !(ns = ns.evaluate(this)).isNodeSet) {
            throw Error('Function sum expects (nodeset)');
        }
        nodes = ns.list();
        n = 0;
        for (i = 0, l = nodes.length; i < l; i ++) {
            n += NodeUtil.to('number', nodes[i]);
        }
        return n;
    }, 'number', false, []],

    floor: [function(n) {
        if (arguments.length != 1) {
            throw Error('Function floor expects (number)');
        }
        n = n.number(this);
        return Math.floor(n);
    }, 'number', false, []],

    ceiling: [function(n) {
        if (arguments.length != 1) {
            throw Error('Function ceiling expects (number)');
        }
        n = n.number(this);
        return Math.ceil(n);
    }, 'number', false, []],

    round: [function(n) {
        if (arguments.length != 1) {
            throw Error('Function round expects (number)');
        }
        n = n.number(this);
        return Math.round(n);
    }, 'number', false, []]
};

FunctionCall.parse = function(lexer) {
    var expr, func = new FunctionCall(lexer.next());
    lexer.next();
    while (lexer.peek() != ')') {
        if (lexer.empty()) {
            throw Error('missing function argument list');
        }
        expr = BinaryExpr.parse(lexer);
        func.arg(expr);
        if (lexer.peek() != ',') break;
        lexer.next();
    }
    if (lexer.empty()) {
        throw Error('unclosed function argument list');
    }
    if (lexer.next() != ')') {
        lexer.back();
        throw Error('bad token: ' + lexer.next());
    }
    return func
};

FunctionCall.prototype = new BaseExpr();

FunctionCall.prototype.evaluate = function (ctx) {
    return this.func.apply(ctx, this.args);
};

FunctionCall.prototype.arg = function(arg) {
    this.args.push(arg);

    if (arg.needContextPosition) {
        this.needContextPosition = true;
    }

    var args = this.args;
    if (arg.needContextNode) {
        args.needContexNode = true;
    }
    this.needContextNode = args.needContextNode ||
                            this.needContextNodeInfo[args.length];
};

FunctionCall.prototype.show = function(indent) {
    indent = indent || '';
    var t = '';
    t += indent + 'function: ' + this.name + '\n';
    indent += '    ';

    if (this.args.length) {
        t += indent + 'arguments: ' + '\n';
        indent += '    ';
        for (var i = 0; i < this.args.length; i ++) {
            t += this.args[i].show(indent);
        }
    }

    return t;
};


/*@cc_on @if (@_jscript)
var NodeWrapper = function(node, sourceIndex, subIndex, attributeName) {
    this.node = node;
    this.nodeType = node.nodeType;
    this.sourceIndex = sourceIndex;
    this.subIndex = subIndex;
    this.attributeName = attributeName || '';
    this.order = String.fromCharCode(sourceIndex) + String.fromCharCode(subIndex) + attributeName;
};

NodeWrapper.prototype.toString = function() {
    return this.order;
};
@else @*/
var NodeID = {
    uuid: 1,
    get: function(node) {
        return node.__jsxpath_id__ || (node.__jsxpath_id__ = this.uuid++);
    }
};
/*@end @*/

if (!window.NodeSet && window.defaultConfig)
    window.NodeSet = null;
    
NodeSet = function() {
    this.length = 0;
    this.nodes = [];
    this.seen = {};
    this.idIndexMap = null;
    this.reserveDels = [];
};

NodeSet.prototype.isNodeSet = true;
NodeSet.prototype.isSorted = true;

/*@_cc_on
NodeSet.prototype.shortcut = true;
@*/

NodeSet.prototype.merge = function(nodeset) {
    this.isSorted = false;
    if (nodeset.only) {
        return this.push(nodeset.only);
    }

    if (this.only){
        var only = this.only;
        delete this.only;
        this.push(only);
        this.length --;
    }

    var nodes = nodeset.nodes;
    for (var i = 0, l = nodes.length; i < l; i ++) {
        this._add(nodes[i]);
    }
};

NodeSet.prototype.sort = function() {
    if (this.only) return;
    if (this.sortOff) return;

    if (!this.isSorted) {
        this.isSorted = true;
        this.idIndexMap = null;

/*@cc_on
        if (this.shortcut) {
            this.nodes.sort();
        }
        else {
            this.nodes.sort(function(a, b) {
                var result;
                result = a.sourceIndex - b.sourceIndex;
                if (result == 0)
                    return a.subIndex - a.subIndex;
                else
                    return result;
            });
        }
        return;
@*/
        var nodes = this.nodes;
        nodes.sort(function(a, b) {
            if (a == b) return 0;

            if (a.compareDocumentPosition) {
                var result = a.compareDocumentPosition(b);
                if (result & 2) return 1;
                if (result & 4) return -1;
                return 0;
            }
            else {
                var node1 = a, node2 = b, ancestor1 = a, ancestor2 = b, deep1 = 0, deep2 = 0;

                while(ancestor1 = ancestor1.parentNode) deep1 ++;
                while(ancestor2 = ancestor2.parentNode) deep2 ++;

                // same deep
                if (deep1 > deep2) {
                    while (deep1-- != deep2) node1 = node1.parentNode;
                    if (node1 == node2) return 1;
                }
                else if (deep2 > deep1) {
                    while (deep2-- != deep1) node2 = node2.parentNode;
                    if (node1 == node2) return -1;
                }

                while ((ancestor1 = node1.parentNode) != (ancestor2 = node2.parentNode)) {
                    node1 = ancestor1;
                    node2 = ancestor2;
                }

                // node1 is node2's sibling
                while (node1 = node1.nextSibling) if (node1 == node2) return -1;

                return 1;
            }
        });
    }
};


/*@cc_on @if (@_jscript)
NodeSet.prototype.sourceOffset = 1;
NodeSet.prototype.subOffset = 2;
NodeSet.prototype.createWrapper = function(node) {
    var parent, child, attributes, attributesLength, sourceIndex, subIndex, attributeName;

    sourceIndex = node.sourceIndex;

    if (typeof sourceIndex != 'number') {
        type = node.nodeType;
        switch (type) {
            case 2:
                parent = node.parentNode;
                sourceIndex = node.parentSourceIndex;
                subIndex = -1;
                attributeName = node.nodeName;
                break;
            case 9:
                subIndex = -2;
                sourceIndex = -1;
                break;
            default:
                child = node;
                subIndex = 0;
                do {
                    subIndex ++;
                    sourceIndex = child.sourceIndex;
                    if (sourceIndex) {
                        parent = child;
                        child = child.lastChild;
                        if (!child) {
                            child = parent;
                            break;
                        }
                        subIndex ++;
                    }
                } while (child = child.previousSibling);
                if (!sourceIndex) {
                    sourceIndex = node.parentNode.sourceIndex;
                }
                break;
        }
    }
    else {
        subIndex = -2;
    }

    sourceIndex += this.sourceOffset;
    subIndex += this.subOffset;

    return new NodeWrapper(node, sourceIndex, subIndex, attributeName);
};

NodeSet.prototype.reserveDelBySourceIndexAndSubIndex = function(sourceIndex, subIndex, offset, reverse) {
    var map = this.createIdIndexMap();
    var index;
    if ((map = map[sourceIndex]) && (index = map[subIndex])) {
        if (reverse && (this.length - offset - 1) > index || !reverse && offset < index) {
            var obj = {
                value: index,
                order: String.fromCharCode(index),
                toString: function() { return this.order },
                valueOf: function() { return this.value }
            };
            this.reserveDels.push(obj);
        }
    }
};
@else @*/
NodeSet.prototype.reserveDelByNodeID = function(id, offset, reverse) {
    var map = this.createIdIndexMap();
    var index;
    if (index = map[id]) {
        if (reverse && (this.length - offset - 1) > index || !reverse && offset < index) {
            var obj = {
                value: index,
                order: String.fromCharCode(index),
                toString: function() { return this.order },
                valueOf: function() { return this.value }
            };
            this.reserveDels.push(obj);
        }
    }
};
/*@end @*/

NodeSet.prototype.reserveDelByNode = function(node, offset, reverse) {
/*@cc_on @if (@_jscript)
    node = this.createWrapper(node);
    this.reserveDelBySourceIndexAndSubIndex(node.sourceIndex, node.subIndex, offset, reverse);
@else @*/
    this.reserveDelByNodeID(NodeID.get(node), offset, reverse);
/*@end @*/
};

NodeSet.prototype.doDel = function() {
    if (!this.reserveDels.length) return;

    if (this.length < 0x10000) {
        var dels = this.reserveDels.sort(function(a, b) { return b - a });
    }
    else {
        var dels = this.reserveDels.sort(function(a, b) { return b - a });
    }
    for (var i = 0, l = dels.length; i < l; i ++) {
        this.del(dels[i]);
    }
    this.reserveDels = [];
    this.idIndexMap = null;
};

NodeSet.prototype.createIdIndexMap = function() {
    if (this.idIndexMap) {
        return this.idIndexMap;
    }
    else {
        var map = this.idIndexMap = {};
        var nodes = this.nodes;
        for (var i = 0, l = nodes.length; i < l; i ++) {
            var node = nodes[i];
/*@cc_on @if (@_jscript)
            var sourceIndex = node.sourceIndex;
            var subIndex = node.subIndex;
            if (!map[sourceIndex]) map[sourceIndex] = {};
            map[sourceIndex][subIndex] = i;
@else @*/
            var id = NodeID.get(node);
            map[id] = i;
/*@end @*/
        }
        return map;
    }
};

NodeSet.prototype.del = function(index) {
    this.length --;
    if (this.only) {
        delete this.only;
    }
    else {  
        var node = this.nodes.splice(index, 1)[0];

        if (this._first == node) {
            delete this._first;
            delete this._firstSourceIndex;
            delete this._firstSubIndex;
        }

/*@cc_on @if (@_jscript)
        delete this.seen[node.sourceIndex][node.subIndex];
@else @*/
        delete this.seen[NodeID.get(node)];
/*@end @*/
    }
};


NodeSet.prototype.delDescendant = function(elm, offset) {
    if (this.only) return;
    var nodeType = elm.nodeType;
    if (nodeType != 1 && nodeType != 9) return;
    if (uai.applewebkit2) return;

    // element || document
    if (!elm.contains) {
        if (nodeType == 1) {
            var _elm = elm;
            elm = {
                contains: function(node) {
                    return node.compareDocumentPosition(_elm) & 8;
                }
            };
        }
        else {
            // document
            elm = {
                contains: function() {
                    return true;
                }
            };
        }
    }

    var nodes = this.nodes;
    for (var i = offset + 1; i < nodes.length; i ++) {

/*@cc_on @if (@_jscript)
        if (nodes[i].node.nodeType == 1 && elm.contains(nodes[i].node)) {
@else @*/
        if (elm.contains(nodes[i])) {
/*@end @*/
            this.del(i);
            i --;
        }
    }
};

NodeSet.prototype._add = function(node, reverse) {

/*@cc_on @if (@_jscript)

    var first, firstSourceIndex, firstSubIndex, sourceIndex, subIndex, attributeName;

    sourceIndex = node.sourceIndex;
    subIndex = node.subIndex;
    attributeName = node.attributeName;
    seen = this.seen;

    seen = seen[sourceIndex] || (seen[sourceIndex] = {});

    if (node.nodeType == 2) {
        seen = seen[subIndex] || (seen[subIndex] = {});
        if (seen[attributeName]) {
            return true;
        }
        seen[attributeName] = true;
    }
    else {
        if (seen[subIndex]) {
            return true;
        }
        seen[subIndex] = true;
    }

    if (sourceIndex >= 0x10000 || subIndex >= 0x10000) {
        this.shortcut = false;
    }

    // if this._first is undefined and this.nodes is not empty
    // then first node shortcut is disabled.
    if (this._first || this.nodes.length == 0) {
        first = this._first;
        firstSourceIndex = this._firstSourceIndex;
        firstSubIndex = this._firstSubIndex;
        if (!first || firstSourceIndex > sourceIndex || (firstSourceIndex == sourceIndex && firstSubIndex > subIndex)) {
            this._first = node;
            this._firstSourceIndex = sourceIndex;
            this._firstSubIndex = subIndex
        }
    }

@else @*/

    var seen = this.seen;
    var id = NodeID.get(node);
    if (seen[id]) return true;
    seen[id] = true;

/*@end @*/

    this.length++;
    if (reverse) 
        this.nodes.unshift(node);
    else
        this.nodes.push(node);
};


NodeSet.prototype.unshift = function(node) {
    if (!this.length) {
        this.length ++;
        this.only = node;
        return
    }
    if (this.only){
        var only = this.only;
        delete this.only;
        this.unshift(only);
        this.length --;
    }
/*@cc_on
    node = this.createWrapper(node);
@*/
    return this._add(node, true);
};


NodeSet.prototype.push = function(node) {
    if (!this.length) {
        this.length ++;
        this.only = node;
        return;
    }
    if (this.only) {
        var only = this.only;
        delete this.only;
        this.push(only);
        this.length --;
    }
/*@cc_on
    node = this.createWrapper(node);
@*/
    return this._add(node);
};

NodeSet.prototype.first = function() {
    if (this.only) return this.only;
/*@cc_on
    if (this._first) return this._first.node;
    if (this.nodes.length > 1) this.sort();
    var node = this.nodes[0];
    return node ? node.node : undefined;
@*/
    if (this.nodes.length > 1) this.sort();
    return this.nodes[0];
};

NodeSet.prototype.list = function() {
    if (this.only) return [this.only];
    this.sort();
/*@cc_on
    var i, l, nodes, results;
    nodes = this.nodes;
    results = [];
    for (i = 0, l = nodes.length; i < l; i ++) {
        results.push(nodes[i].node);
    }
    return results;
@*/
    return this.nodes;
};

NodeSet.prototype.string = function() {
    var node = this.only || this.first();
    return node ? NodeUtil.to('string', node) : '';
};

NodeSet.prototype.bool = function() {
    return !! (this.length || this.only);
};

NodeSet.prototype.number = function() {
    return + this.string();
};

NodeSet.prototype.iterator = function(reverse) {
    this.sort();
    var nodeset = this;

    if (!reverse) {
        var count = 0;
        return function() {
            if (nodeset.only && count++ == 0) return nodeset.only;
/*@cc_on @if(@_jscript)
            var wrapper = nodeset.nodes[count++];
            if (wrapper) return wrapper.node;
            return undefined;
@else @*/
            return nodeset.nodes[count++];
/*@end @*/
        };
    }
    else {
        var count = 0;
        return function() {
            var index = nodeset.length - (count++) - 1;
            if (nodeset.only && index == 0) return nodeset.only;
/*@cc_on @if(@_jscript)
            var wrapper = nodeset.nodes[index];
            if (wrapper) return wrapper.node;
            return undefined;
@else @*/
            return nodeset.nodes[index];
/*@end @*/
        };
    }
};


var install = function(win) {

    win = win || this;
    var doc = win.document;
    var undefined = win.undefined;

    win.XPathExpression = function(expr) {
        if (!expr.length) {
            throw win.Error('no expression');
        }
        var lexer = this.lexer = Lexer(expr);
        if (lexer.empty()) {
            throw win.Error('no expression');
        }
        this.expr = BinaryExpr.parse(lexer);
        if (!lexer.empty()) {
            throw win.Error('bad token: ' + lexer.next());
        }
    };
    
    win.XPathExpression.prototype.evaluate = function(node, type) {
        return new win.XPathResult(this.expr.evaluate(new Ctx(node)), type);
    };
    
    win.XPathResult = function (value, type) {
        if (type == 0) {
            switch (typeof value) {
                case 'object':  type ++; // 4
                case 'boolean': type ++; // 3
                case 'string':  type ++; // 2
                case 'number':  type ++; // 1
            }
        }
    
        this.resultType = type;
    
        switch (type) {
            case 1:
                this.numberValue = value.isNodeSet ? value.number() : +value;
                return;
            case 2:
                this.stringValue = value.isNodeSet ? value.string() : '' + value;
                return;
            case 3:
                this.booleanValue = value.isNodeSet ? value.bool() : !! value;
                return;
            case 4: case 5: case 6: case 7:
                this.nodes = value.list();
                this.snapshotLength = value.length;
                this.index = 0;
                this.invalidIteratorState = false;
                break;
            case 8: case 9:
                this.singleNodeValue = value.first();
                return;
        }
    };
    
    win.XPathResult.prototype.iterateNext = function() { return this.nodes[this.index++] };
    win.XPathResult.prototype.snapshotItem = function(i) { return this.nodes[i] };
    
    win.XPathResult.ANY_TYPE = 0;
    win.XPathResult.NUMBER_TYPE = 1;
    win.XPathResult.STRING_TYPE = 2;
    win.XPathResult.BOOLEAN_TYPE = 3;
    win.XPathResult.UNORDERED_NODE_ITERATOR_TYPE = 4;
    win.XPathResult.ORDERED_NODE_ITERATOR_TYPE = 5;
    win.XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE = 6;
    win.XPathResult.ORDERED_NODE_SNAPSHOT_TYPE = 7;
    win.XPathResult.ANY_UNORDERED_NODE_TYPE = 8;
    win.XPathResult.FIRST_ORDERED_NODE_TYPE = 9;
    
    
    doc.createExpression = function(expr) {
        return new win.XPathExpression(expr, null);
    };
    
    doc.evaluate = function(expr, context, _, type) {
        return doc.createExpression(expr, null).evaluate(context, type);
    };
};

var win;

if (config.targetFrame) {
    var frame = document.getElementById(config.targetFrame);
    if (frame) win = frame.contentWindow;
}

if (config.exportInstaller) {
    window.install = install;
}

if (!config.hasNative || !config.useNative) {
    install(win || window);
}


})();

// Thanks for reading this source code. We love JavaScript.


;/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]'),b=!0;if(a.length){var c=this.$element.find("input");"radio"===c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?b=!1:a.find(".active").removeClass("active")),b&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}b&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
;(function() {
  var WebSocket = window.WebSocket || window.MozWebSocket;
  var br = window.brunch = (window.brunch || {});
  var ar = br['auto-reload'] = (br['auto-reload'] || {});
  if (!WebSocket || ar.disabled) return;

  var cacheBuster = function(url){
    var date = Math.round(Date.now() / 1000).toString();
    url = url.replace(/(\&|\\?)cacheBuster=\d*/, '');
    return url + (url.indexOf('?') >= 0 ? '&' : '?') +'cacheBuster=' + date;
  };

  var reloaders = {
    page: function(){
      window.location.reload(true);
    },

    stylesheet: function(){
      [].slice
        .call(document.querySelectorAll('link[rel="stylesheet"]'))
        .filter(function(link){
          return (link != null && link.href != null);
        })
        .forEach(function(link) {
          link.href = cacheBuster(link.href);
        });
    }
  };
  var port = ar.port || 9485;
  var host = (!br['server']) ? window.location.hostname : br['server'];
  var connect = function(){
    var connection = new WebSocket('ws://' + host + ':' + port);
    connection.onmessage = function(event){
      var message = event.data;
      if (ar.disabled) return;
      if (reloaders[message] != null) {
        reloaders[message]();
      } else {
        reloaders.page();
      }
    };
    connection.onerror = function(){
      if (connection.readyState) connection.close();
    };
    connection.onclose = function(){
      window.setTimeout(connect, 1000);
    };
  };
  connect();
})();

;(function(e){if("function"==typeof bootstrap)bootstrap("jade",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeJade=e}else"undefined"!=typeof window?window.jade=e():global.jade=e()})(function(){var define,ses,bootstrap,module,exports;
return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/*!
 * Jade - runtime
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Lame Array.isArray() polyfill for now.
 */

if (!Array.isArray) {
  Array.isArray = function(arr){
    return '[object Array]' == Object.prototype.toString.call(arr);
  };
}

/**
 * Lame Object.keys() polyfill for now.
 */

if (!Object.keys) {
  Object.keys = function(obj){
    var arr = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(key);
      }
    }
    return arr;
  }
}

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    a['class'] = ac.concat(bc).filter(nulls);
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {*} val
 * @return {Boolean}
 * @api private
 */

function nulls(val) {
  return val != null && val !== '';
}

/**
 * join array as classes.
 *
 * @param {*} val
 * @return {String}
 * @api private
 */

function joinClasses(val) {
  return Array.isArray(val) ? val.map(joinClasses).filter(nulls).join(' ') : val;
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 * @api private
 */

exports.attrs = function attrs(obj, escaped){
  var buf = []
    , terse = obj.terse;

  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;

  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if (0 == key.indexOf('data') && 'string' != typeof val) {
        buf.push(key + "='" + JSON.stringify(val) + "'");
      } else if ('class' == key) {
        if (escaped && escaped[key]){
          if (val = exports.escape(joinClasses(val))) {
            buf.push(key + '="' + val + '"');
          }
        } else {
          if (val = joinClasses(val)) {
            buf.push(key + '="' + val + '"');
          }
        }
      } else if (escaped && escaped[key]) {
        buf.push(key + '="' + exports.escape(val) + '"');
      } else {
        buf.push(key + '="' + val + '"');
      }
    }
  }

  return buf.join(' ');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

exports.escape = function escape(html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str =  str || require('fs').readFileSync(filename, 'utf8')
  } catch (ex) {
    rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

},{"fs":2}],2:[function(require,module,exports){
// nothing to see here... no file methods for the browser

},{}]},{},[1])(1)
});
;

;
//# sourceMappingURL=vendor.js.map