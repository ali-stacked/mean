var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
        /***/ "./node_modules/jquery/dist/jquery.js": 
        /*!********************************************!*\
          !*** ./node_modules/jquery/dist/jquery.js ***!
          \********************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
             * jQuery JavaScript Library v3.5.1
             * https://jquery.com/
             *
             * Includes Sizzle.js
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://jquery.org/license
             *
             * Date: 2020-05-04T22:49Z
             */
            (function (global, factory) {
                "use strict";
                if (true && typeof module.exports === "object") {
                    // For CommonJS and CommonJS-like environments where a proper `window`
                    // is present, execute the factory and get jQuery.
                    // For environments that do not have a `window` with a `document`
                    // (such as Node.js), expose a factory as module.exports.
                    // This accentuates the need for the creation of a real `window`.
                    // e.g. var jQuery = require("jquery")(window);
                    // See ticket #14549 for more info.
                    module.exports = global.document ?
                        factory(global, true) :
                        function (w) {
                            if (!w.document) {
                                throw new Error("jQuery requires a window with a document");
                            }
                            return factory(w);
                        };
                }
                else {
                    factory(global);
                }
                // Pass this if window is not defined yet
            })(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
                // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
                // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
                // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
                // enough that all such attempts are guarded in a try block.
                "use strict";
                var arr = [];
                var getProto = Object.getPrototypeOf;
                var slice = arr.slice;
                var flat = arr.flat ? function (array) {
                    return arr.flat.call(array);
                } : function (array) {
                    return arr.concat.apply([], array);
                };
                var push = arr.push;
                var indexOf = arr.indexOf;
                var class2type = {};
                var toString = class2type.toString;
                var hasOwn = class2type.hasOwnProperty;
                var fnToString = hasOwn.toString;
                var ObjectFunctionString = fnToString.call(Object);
                var support = {};
                var isFunction = function isFunction(obj) {
                    // Support: Chrome <=57, Firefox <=52
                    // In some browsers, typeof returns "function" for HTML <object> elements
                    // (i.e., `typeof document.createElement( "object" ) === "function"`).
                    // We don't want to classify *any* DOM node as a function.
                    return typeof obj === "function" && typeof obj.nodeType !== "number";
                };
                var isWindow = function isWindow(obj) {
                    return obj != null && obj === obj.window;
                };
                var document = window.document;
                var preservedScriptAttributes = {
                    type: true,
                    src: true,
                    nonce: true,
                    noModule: true
                };
                function DOMEval(code, node, doc) {
                    doc = doc || document;
                    var i, val, script = doc.createElement("script");
                    script.text = code;
                    if (node) {
                        for (i in preservedScriptAttributes) {
                            // Support: Firefox 64+, Edge 18+
                            // Some browsers don't support the "nonce" property on scripts.
                            // On the other hand, just using `getAttribute` is not enough as
                            // the `nonce` attribute is reset to an empty string whenever it
                            // becomes browsing-context connected.
                            // See https://github.com/whatwg/html/issues/2369
                            // See https://html.spec.whatwg.org/#nonce-attributes
                            // The `node.getAttribute` check was added for the sake of
                            // `jQuery.globalEval` so that it can fake a nonce-containing node
                            // via an object.
                            val = node[i] || node.getAttribute && node.getAttribute(i);
                            if (val) {
                                script.setAttribute(i, val);
                            }
                        }
                    }
                    doc.head.appendChild(script).parentNode.removeChild(script);
                }
                function toType(obj) {
                    if (obj == null) {
                        return obj + "";
                    }
                    // Support: Android <=2.3 only (functionish RegExp)
                    return typeof obj === "object" || typeof obj === "function" ?
                        class2type[toString.call(obj)] || "object" :
                        typeof obj;
                }
                /* global Symbol */
                // Defining this global in .eslintrc.json would create a danger of using the global
                // unguarded in another place, it seems safer to define global only for this module
                var version = "3.5.1", 
                // Define a local copy of jQuery
                jQuery = function (selector, context) {
                    // The jQuery object is actually just the init constructor 'enhanced'
                    // Need init if jQuery is called (just allow error to be thrown if not included)
                    return new jQuery.fn.init(selector, context);
                };
                jQuery.fn = jQuery.prototype = {
                    // The current version of jQuery being used
                    jquery: version,
                    constructor: jQuery,
                    // The default length of a jQuery object is 0
                    length: 0,
                    toArray: function () {
                        return slice.call(this);
                    },
                    // Get the Nth element in the matched element set OR
                    // Get the whole matched element set as a clean array
                    get: function (num) {
                        // Return all the elements in a clean array
                        if (num == null) {
                            return slice.call(this);
                        }
                        // Return just the one element from the set
                        return num < 0 ? this[num + this.length] : this[num];
                    },
                    // Take an array of elements and push it onto the stack
                    // (returning the new matched element set)
                    pushStack: function (elems) {
                        // Build a new jQuery matched element set
                        var ret = jQuery.merge(this.constructor(), elems);
                        // Add the old object onto the stack (as a reference)
                        ret.prevObject = this;
                        // Return the newly-formed element set
                        return ret;
                    },
                    // Execute a callback for every element in the matched set.
                    each: function (callback) {
                        return jQuery.each(this, callback);
                    },
                    map: function (callback) {
                        return this.pushStack(jQuery.map(this, function (elem, i) {
                            return callback.call(elem, i, elem);
                        }));
                    },
                    slice: function () {
                        return this.pushStack(slice.apply(this, arguments));
                    },
                    first: function () {
                        return this.eq(0);
                    },
                    last: function () {
                        return this.eq(-1);
                    },
                    even: function () {
                        return this.pushStack(jQuery.grep(this, function (_elem, i) {
                            return (i + 1) % 2;
                        }));
                    },
                    odd: function () {
                        return this.pushStack(jQuery.grep(this, function (_elem, i) {
                            return i % 2;
                        }));
                    },
                    eq: function (i) {
                        var len = this.length, j = +i + (i < 0 ? len : 0);
                        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
                    },
                    end: function () {
                        return this.prevObject || this.constructor();
                    },
                    // For internal use only.
                    // Behaves like an Array's method, not like a jQuery method.
                    push: push,
                    sort: arr.sort,
                    splice: arr.splice
                };
                jQuery.extend = jQuery.fn.extend = function () {
                    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
                    // Handle a deep copy situation
                    if (typeof target === "boolean") {
                        deep = target;
                        // Skip the boolean and the target
                        target = arguments[i] || {};
                        i++;
                    }
                    // Handle case when target is a string or something (possible in deep copy)
                    if (typeof target !== "object" && !isFunction(target)) {
                        target = {};
                    }
                    // Extend jQuery itself if only one argument is passed
                    if (i === length) {
                        target = this;
                        i--;
                    }
                    for (; i < length; i++) {
                        // Only deal with non-null/undefined values
                        if ((options = arguments[i]) != null) {
                            // Extend the base object
                            for (name in options) {
                                copy = options[name];
                                // Prevent Object.prototype pollution
                                // Prevent never-ending loop
                                if (name === "__proto__" || target === copy) {
                                    continue;
                                }
                                // Recurse if we're merging plain objects or arrays
                                if (deep && copy && (jQuery.isPlainObject(copy) ||
                                    (copyIsArray = Array.isArray(copy)))) {
                                    src = target[name];
                                    // Ensure proper type for the source value
                                    if (copyIsArray && !Array.isArray(src)) {
                                        clone = [];
                                    }
                                    else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                                        clone = {};
                                    }
                                    else {
                                        clone = src;
                                    }
                                    copyIsArray = false;
                                    // Never move original objects, clone them
                                    target[name] = jQuery.extend(deep, clone, copy);
                                    // Don't bring in undefined values
                                }
                                else if (copy !== undefined) {
                                    target[name] = copy;
                                }
                            }
                        }
                    }
                    // Return the modified object
                    return target;
                };
                jQuery.extend({
                    // Unique for each copy of jQuery on the page
                    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
                    // Assume jQuery is ready without the ready module
                    isReady: true,
                    error: function (msg) {
                        throw new Error(msg);
                    },
                    noop: function () { },
                    isPlainObject: function (obj) {
                        var proto, Ctor;
                        // Detect obvious negatives
                        // Use toString instead of jQuery.type to catch host objects
                        if (!obj || toString.call(obj) !== "[object Object]") {
                            return false;
                        }
                        proto = getProto(obj);
                        // Objects with no prototype (e.g., `Object.create( null )`) are plain
                        if (!proto) {
                            return true;
                        }
                        // Objects with prototype are plain iff they were constructed by a global Object function
                        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
                        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
                    },
                    isEmptyObject: function (obj) {
                        var name;
                        for (name in obj) {
                            return false;
                        }
                        return true;
                    },
                    // Evaluates a script in a provided context; falls back to the global one
                    // if not specified.
                    globalEval: function (code, options, doc) {
                        DOMEval(code, { nonce: options && options.nonce }, doc);
                    },
                    each: function (obj, callback) {
                        var length, i = 0;
                        if (isArrayLike(obj)) {
                            length = obj.length;
                            for (; i < length; i++) {
                                if (callback.call(obj[i], i, obj[i]) === false) {
                                    break;
                                }
                            }
                        }
                        else {
                            for (i in obj) {
                                if (callback.call(obj[i], i, obj[i]) === false) {
                                    break;
                                }
                            }
                        }
                        return obj;
                    },
                    // results is for internal usage only
                    makeArray: function (arr, results) {
                        var ret = results || [];
                        if (arr != null) {
                            if (isArrayLike(Object(arr))) {
                                jQuery.merge(ret, typeof arr === "string" ?
                                    [arr] : arr);
                            }
                            else {
                                push.call(ret, arr);
                            }
                        }
                        return ret;
                    },
                    inArray: function (elem, arr, i) {
                        return arr == null ? -1 : indexOf.call(arr, elem, i);
                    },
                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    merge: function (first, second) {
                        var len = +second.length, j = 0, i = first.length;
                        for (; j < len; j++) {
                            first[i++] = second[j];
                        }
                        first.length = i;
                        return first;
                    },
                    grep: function (elems, callback, invert) {
                        var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
                        // Go through the array, only saving the items
                        // that pass the validator function
                        for (; i < length; i++) {
                            callbackInverse = !callback(elems[i], i);
                            if (callbackInverse !== callbackExpect) {
                                matches.push(elems[i]);
                            }
                        }
                        return matches;
                    },
                    // arg is for internal usage only
                    map: function (elems, callback, arg) {
                        var length, value, i = 0, ret = [];
                        // Go through the array, translating each of the items to their new values
                        if (isArrayLike(elems)) {
                            length = elems.length;
                            for (; i < length; i++) {
                                value = callback(elems[i], i, arg);
                                if (value != null) {
                                    ret.push(value);
                                }
                            }
                            // Go through every key on the object,
                        }
                        else {
                            for (i in elems) {
                                value = callback(elems[i], i, arg);
                                if (value != null) {
                                    ret.push(value);
                                }
                            }
                        }
                        // Flatten any nested arrays
                        return flat(ret);
                    },
                    // A global GUID counter for objects
                    guid: 1,
                    // jQuery.support is not used in Core but other projects attach their
                    // properties to it so it needs to exist.
                    support: support
                });
                if (typeof Symbol === "function") {
                    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
                }
                // Populate the class2type map
                jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
                    class2type["[object " + name + "]"] = name.toLowerCase();
                });
                function isArrayLike(obj) {
                    // Support: real iOS 8.2 only (not reproducible in simulator)
                    // `in` check used to prevent JIT error (gh-2145)
                    // hasOwn isn't used here due to false negatives
                    // regarding Nodelist length in IE
                    var length = !!obj && "length" in obj && obj.length, type = toType(obj);
                    if (isFunction(obj) || isWindow(obj)) {
                        return false;
                    }
                    return type === "array" || length === 0 ||
                        typeof length === "number" && length > 0 && (length - 1) in obj;
                }
                var Sizzle = 
                /*!
                 * Sizzle CSS Selector Engine v2.3.5
                 * https://sizzlejs.com/
                 *
                 * Copyright JS Foundation and other contributors
                 * Released under the MIT license
                 * https://js.foundation/
                 *
                 * Date: 2020-03-14
                 */
                (function (window) {
                    var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, 
                    // Local document vars
                    setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, 
                    // Instance-specific data
                    expando = "sizzle" + 1 * new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function (a, b) {
                        if (a === b) {
                            hasDuplicate = true;
                        }
                        return 0;
                    }, 
                    // Instance methods
                    hasOwn = ({}).hasOwnProperty, arr = [], pop = arr.pop, pushNative = arr.push, push = arr.push, slice = arr.slice, 
                    // Use a stripped-down indexOf as it's faster than native
                    // https://jsperf.com/thor-indexof-vs-for/5
                    indexOf = function (list, elem) {
                        var i = 0, len = list.length;
                        for (; i < len; i++) {
                            if (list[i] === elem) {
                                return i;
                            }
                        }
                        return -1;
                    }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
                        "ismap|loop|multiple|open|readonly|required|scoped", 
                    // Regular expressions
                    // http://www.w3.org/TR/css3-selectors/#whitespace
                    whitespace = "[\\x20\\t\\r\\n\\f]", 
                    // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
                    identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
                        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", 
                    // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
                    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
                        // Operator (capture 2)
                        "*([*^$|!~]?=)" + whitespace +
                        // "Attribute values must be CSS identifiers [capture 5]
                        // or strings [capture 3 or capture 4]"
                        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
                        whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" +
                        // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
                        // 1. quoted (capture 3; capture 4 or capture 5)
                        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
                        // 2. simple (capture 6)
                        "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
                        // 3. anything else (capture 2)
                        ".*" +
                        ")\\)|)", 
                    // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
                    rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
                        whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
                        "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                        "ID": new RegExp("^#(" + identifier + ")"),
                        "CLASS": new RegExp("^\\.(" + identifier + ")"),
                        "TAG": new RegExp("^(" + identifier + "|[*])"),
                        "ATTR": new RegExp("^" + attributes),
                        "PSEUDO": new RegExp("^" + pseudos),
                        "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                            whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
                            whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                        "bool": new RegExp("^(?:" + booleans + ")$", "i"),
                        // For use in libraries implementing .is()
                        // We use this for POS matching in `select`
                        "needsContext": new RegExp("^" + whitespace +
                            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
                            "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                    }, rhtml = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, 
                    // Easily-parseable/retrievable ID or TAG or CLASS selectors
                    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, 
                    // CSS escapes
                    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
                    runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function (escape, nonHex) {
                        var high = "0x" + escape.slice(1) - 0x10000;
                        return nonHex ?
                            // Strip the backslash prefix from a non-hex escape sequence
                            nonHex :
                            // Replace a hexadecimal escape sequence with the encoded Unicode code point
                            // Support: IE <=11+
                            // For values outside the Basic Multilingual Plane (BMP), manually construct a
                            // surrogate pair
                            high < 0 ?
                                String.fromCharCode(high + 0x10000) :
                                String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
                    }, 
                    // CSS string/identifier serialization
                    // https://drafts.csswg.org/cssom/#common-serializing-idioms
                    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function (ch, asCodePoint) {
                        if (asCodePoint) {
                            // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                            if (ch === "\0") {
                                return "\uFFFD";
                            }
                            // Control characters and (dependent upon position) numbers get escaped as code points
                            return ch.slice(0, -1) + "\\" +
                                ch.charCodeAt(ch.length - 1).toString(16) + " ";
                        }
                        // Other potentially-special ASCII characters get backslash-escaped
                        return "\\" + ch;
                    }, 
                    // Used for iframes
                    // See setDocument()
                    // Removing the function wrapper causes a "Permission Denied"
                    // error in IE
                    unloadHandler = function () {
                        setDocument();
                    }, inDisabledFieldset = addCombinator(function (elem) {
                        return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
                    }, { dir: "parentNode", next: "legend" });
                    // Optimize for push.apply( _, NodeList )
                    try {
                        push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
                        // Support: Android<4.0
                        // Detect silently failing push.apply
                        // eslint-disable-next-line no-unused-expressions
                        arr[preferredDoc.childNodes.length].nodeType;
                    }
                    catch (e) {
                        push = { apply: arr.length ?
                                // Leverage slice if possible
                                function (target, els) {
                                    pushNative.apply(target, slice.call(els));
                                } :
                                // Support: IE<9
                                // Otherwise append directly
                                function (target, els) {
                                    var j = target.length, i = 0;
                                    // Can't trust NodeList.length
                                    while ((target[j++] = els[i++])) { }
                                    target.length = j - 1;
                                }
                        };
                    }
                    function Sizzle(selector, context, results, seed) {
                        var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, 
                        // nodeType defaults to 9, since context defaults to document
                        nodeType = context ? context.nodeType : 9;
                        results = results || [];
                        // Return early from calls with invalid selector or context
                        if (typeof selector !== "string" || !selector ||
                            nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                            return results;
                        }
                        // Try to shortcut find operations (as opposed to filters) in HTML documents
                        if (!seed) {
                            setDocument(context);
                            context = context || document;
                            if (documentIsHTML) {
                                // If the selector is sufficiently simple, try using a "get*By*" DOM method
                                // (excepting DocumentFragment context, where the methods don't exist)
                                if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                                    // ID selector
                                    if ((m = match[1])) {
                                        // Document context
                                        if (nodeType === 9) {
                                            if ((elem = context.getElementById(m))) {
                                                // Support: IE, Opera, Webkit
                                                // TODO: identify versions
                                                // getElementById can match elements by name instead of ID
                                                if (elem.id === m) {
                                                    results.push(elem);
                                                    return results;
                                                }
                                            }
                                            else {
                                                return results;
                                            }
                                            // Element context
                                        }
                                        else {
                                            // Support: IE, Opera, Webkit
                                            // TODO: identify versions
                                            // getElementById can match elements by name instead of ID
                                            if (newContext && (elem = newContext.getElementById(m)) &&
                                                contains(context, elem) &&
                                                elem.id === m) {
                                                results.push(elem);
                                                return results;
                                            }
                                        }
                                        // Type selector
                                    }
                                    else if (match[2]) {
                                        push.apply(results, context.getElementsByTagName(selector));
                                        return results;
                                        // Class selector
                                    }
                                    else if ((m = match[3]) && support.getElementsByClassName &&
                                        context.getElementsByClassName) {
                                        push.apply(results, context.getElementsByClassName(m));
                                        return results;
                                    }
                                }
                                // Take advantage of querySelectorAll
                                if (support.qsa &&
                                    !nonnativeSelectorCache[selector + " "] &&
                                    (!rbuggyQSA || !rbuggyQSA.test(selector)) &&
                                    // Support: IE 8 only
                                    // Exclude object elements
                                    (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                                    newSelector = selector;
                                    newContext = context;
                                    // qSA considers elements outside a scoping root when evaluating child or
                                    // descendant combinators, which is not what we want.
                                    // In such cases, we work around the behavior by prefixing every selector in the
                                    // list with an ID selector referencing the scope context.
                                    // The technique has to be used as well when a leading combinator is used
                                    // as such selectors are not recognized by querySelectorAll.
                                    // Thanks to Andrew Dupont for this technique.
                                    if (nodeType === 1 &&
                                        (rdescend.test(selector) || rcombinators.test(selector))) {
                                        // Expand context for sibling selectors
                                        newContext = rsibling.test(selector) && testContext(context.parentNode) ||
                                            context;
                                        // We can use :scope instead of the ID hack if the browser
                                        // supports it & if we're not changing the context.
                                        if (newContext !== context || !support.scope) {
                                            // Capture the context ID, setting it first if necessary
                                            if ((nid = context.getAttribute("id"))) {
                                                nid = nid.replace(rcssescape, fcssescape);
                                            }
                                            else {
                                                context.setAttribute("id", (nid = expando));
                                            }
                                        }
                                        // Prefix every selector in the list
                                        groups = tokenize(selector);
                                        i = groups.length;
                                        while (i--) {
                                            groups[i] = (nid ? "#" + nid : ":scope") + " " +
                                                toSelector(groups[i]);
                                        }
                                        newSelector = groups.join(",");
                                    }
                                    try {
                                        push.apply(results, newContext.querySelectorAll(newSelector));
                                        return results;
                                    }
                                    catch (qsaError) {
                                        nonnativeSelectorCache(selector, true);
                                    }
                                    finally {
                                        if (nid === expando) {
                                            context.removeAttribute("id");
                                        }
                                    }
                                }
                            }
                        }
                        // All others
                        return select(selector.replace(rtrim, "$1"), context, results, seed);
                    }
                    /**
                     * Create key-value caches of limited size
                     * @returns {function(string, object)} Returns the Object data after storing it on itself with
                     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
                     *	deleting the oldest entry
                     */
                    function createCache() {
                        var keys = [];
                        function cache(key, value) {
                            // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                            if (keys.push(key + " ") > Expr.cacheLength) {
                                // Only keep the most recent entries
                                delete cache[keys.shift()];
                            }
                            return (cache[key + " "] = value);
                        }
                        return cache;
                    }
                    /**
                     * Mark a function for special use by Sizzle
                     * @param {Function} fn The function to mark
                     */
                    function markFunction(fn) {
                        fn[expando] = true;
                        return fn;
                    }
                    /**
                     * Support testing using an element
                     * @param {Function} fn Passed the created element and returns a boolean result
                     */
                    function assert(fn) {
                        var el = document.createElement("fieldset");
                        try {
                            return !!fn(el);
                        }
                        catch (e) {
                            return false;
                        }
                        finally {
                            // Remove from its parent by default
                            if (el.parentNode) {
                                el.parentNode.removeChild(el);
                            }
                            // release memory in IE
                            el = null;
                        }
                    }
                    /**
                     * Adds the same handler for all of the specified attrs
                     * @param {String} attrs Pipe-separated list of attributes
                     * @param {Function} handler The method that will be applied
                     */
                    function addHandle(attrs, handler) {
                        var arr = attrs.split("|"), i = arr.length;
                        while (i--) {
                            Expr.attrHandle[arr[i]] = handler;
                        }
                    }
                    /**
                     * Checks document order of two siblings
                     * @param {Element} a
                     * @param {Element} b
                     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
                     */
                    function siblingCheck(a, b) {
                        var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
                            a.sourceIndex - b.sourceIndex;
                        // Use IE sourceIndex if available on both nodes
                        if (diff) {
                            return diff;
                        }
                        // Check if b follows a
                        if (cur) {
                            while ((cur = cur.nextSibling)) {
                                if (cur === b) {
                                    return -1;
                                }
                            }
                        }
                        return a ? 1 : -1;
                    }
                    /**
                     * Returns a function to use in pseudos for input types
                     * @param {String} type
                     */
                    function createInputPseudo(type) {
                        return function (elem) {
                            var name = elem.nodeName.toLowerCase();
                            return name === "input" && elem.type === type;
                        };
                    }
                    /**
                     * Returns a function to use in pseudos for buttons
                     * @param {String} type
                     */
                    function createButtonPseudo(type) {
                        return function (elem) {
                            var name = elem.nodeName.toLowerCase();
                            return (name === "input" || name === "button") && elem.type === type;
                        };
                    }
                    /**
                     * Returns a function to use in pseudos for :enabled/:disabled
                     * @param {Boolean} disabled true for :disabled; false for :enabled
                     */
                    function createDisabledPseudo(disabled) {
                        // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
                        return function (elem) {
                            // Only certain elements can match :enabled or :disabled
                            // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                            // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                            if ("form" in elem) {
                                // Check for inherited disabledness on relevant non-disabled elements:
                                // * listed form-associated elements in a disabled fieldset
                                //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                                //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                                // * option elements in a disabled optgroup
                                //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                                // All such elements have a "form" property.
                                if (elem.parentNode && elem.disabled === false) {
                                    // Option elements defer to a parent optgroup if present
                                    if ("label" in elem) {
                                        if ("label" in elem.parentNode) {
                                            return elem.parentNode.disabled === disabled;
                                        }
                                        else {
                                            return elem.disabled === disabled;
                                        }
                                    }
                                    // Support: IE 6 - 11
                                    // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                                    return elem.isDisabled === disabled ||
                                        // Where there is no isDisabled, check manually
                                        /* jshint -W018 */
                                        elem.isDisabled !== !disabled &&
                                            inDisabledFieldset(elem) === disabled;
                                }
                                return elem.disabled === disabled;
                                // Try to winnow out elements that can't be disabled before trusting the disabled property.
                                // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                                // even exist on them, let alone have a boolean value.
                            }
                            else if ("label" in elem) {
                                return elem.disabled === disabled;
                            }
                            // Remaining elements are neither :enabled nor :disabled
                            return false;
                        };
                    }
                    /**
                     * Returns a function to use in pseudos for positionals
                     * @param {Function} fn
                     */
                    function createPositionalPseudo(fn) {
                        return markFunction(function (argument) {
                            argument = +argument;
                            return markFunction(function (seed, matches) {
                                var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                                // Match elements found at the specified indexes
                                while (i--) {
                                    if (seed[(j = matchIndexes[i])]) {
                                        seed[j] = !(matches[j] = seed[j]);
                                    }
                                }
                            });
                        });
                    }
                    /**
                     * Checks a node for validity as a Sizzle context
                     * @param {Element|Object=} context
                     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
                     */
                    function testContext(context) {
                        return context && typeof context.getElementsByTagName !== "undefined" && context;
                    }
                    // Expose support vars for convenience
                    support = Sizzle.support = {};
                    /**
                     * Detects XML nodes
                     * @param {Element|Object} elem An element or a document
                     * @returns {Boolean} True iff elem is a non-HTML XML node
                     */
                    isXML = Sizzle.isXML = function (elem) {
                        var namespace = elem.namespaceURI, docElem = (elem.ownerDocument || elem).documentElement;
                        // Support: IE <=8
                        // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
                        // https://bugs.jquery.com/ticket/4833
                        return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
                    };
                    /**
                     * Sets document-related variables once based on the current document
                     * @param {Element|Object} [doc] An element or document object to use to set the document
                     * @returns {Object} Returns the current document
                     */
                    setDocument = Sizzle.setDocument = function (node) {
                        var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
                        // Return early if doc is invalid or already selected
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
                            return document;
                        }
                        // Update global variables
                        document = doc;
                        docElem = document.documentElement;
                        documentIsHTML = !isXML(document);
                        // Support: IE 9 - 11+, Edge 12 - 18+
                        // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (preferredDoc != document &&
                            (subWindow = document.defaultView) && subWindow.top !== subWindow) {
                            // Support: IE 11, Edge
                            if (subWindow.addEventListener) {
                                subWindow.addEventListener("unload", unloadHandler, false);
                                // Support: IE 9 - 10 only
                            }
                            else if (subWindow.attachEvent) {
                                subWindow.attachEvent("onunload", unloadHandler);
                            }
                        }
                        // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
                        // Safari 4 - 5 only, Opera <=11.6 - 12.x only
                        // IE/Edge & older browsers don't support the :scope pseudo-class.
                        // Support: Safari 6.0 only
                        // Safari 6.0 supports :scope but it's an alias of :root there.
                        support.scope = assert(function (el) {
                            docElem.appendChild(el).appendChild(document.createElement("div"));
                            return typeof el.querySelectorAll !== "undefined" &&
                                !el.querySelectorAll(":scope fieldset div").length;
                        });
                        /* Attributes
                        ---------------------------------------------------------------------- */
                        // Support: IE<8
                        // Verify that getAttribute really returns attributes and not properties
                        // (excepting IE8 booleans)
                        support.attributes = assert(function (el) {
                            el.className = "i";
                            return !el.getAttribute("className");
                        });
                        /* getElement(s)By*
                        ---------------------------------------------------------------------- */
                        // Check if getElementsByTagName("*") returns only elements
                        support.getElementsByTagName = assert(function (el) {
                            el.appendChild(document.createComment(""));
                            return !el.getElementsByTagName("*").length;
                        });
                        // Support: IE<9
                        support.getElementsByClassName = rnative.test(document.getElementsByClassName);
                        // Support: IE<10
                        // Check if getElementById returns elements by name
                        // The broken getElementById methods don't pick up programmatically-set names,
                        // so use a roundabout getElementsByName test
                        support.getById = assert(function (el) {
                            docElem.appendChild(el).id = expando;
                            return !document.getElementsByName || !document.getElementsByName(expando).length;
                        });
                        // ID filter and find
                        if (support.getById) {
                            Expr.filter["ID"] = function (id) {
                                var attrId = id.replace(runescape, funescape);
                                return function (elem) {
                                    return elem.getAttribute("id") === attrId;
                                };
                            };
                            Expr.find["ID"] = function (id, context) {
                                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                                    var elem = context.getElementById(id);
                                    return elem ? [elem] : [];
                                }
                            };
                        }
                        else {
                            Expr.filter["ID"] = function (id) {
                                var attrId = id.replace(runescape, funescape);
                                return function (elem) {
                                    var node = typeof elem.getAttributeNode !== "undefined" &&
                                        elem.getAttributeNode("id");
                                    return node && node.value === attrId;
                                };
                            };
                            // Support: IE 6 - 7 only
                            // getElementById is not reliable as a find shortcut
                            Expr.find["ID"] = function (id, context) {
                                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                                    var node, i, elems, elem = context.getElementById(id);
                                    if (elem) {
                                        // Verify the id attribute
                                        node = elem.getAttributeNode("id");
                                        if (node && node.value === id) {
                                            return [elem];
                                        }
                                        // Fall back on getElementsByName
                                        elems = context.getElementsByName(id);
                                        i = 0;
                                        while ((elem = elems[i++])) {
                                            node = elem.getAttributeNode("id");
                                            if (node && node.value === id) {
                                                return [elem];
                                            }
                                        }
                                    }
                                    return [];
                                }
                            };
                        }
                        // Tag
                        Expr.find["TAG"] = support.getElementsByTagName ?
                            function (tag, context) {
                                if (typeof context.getElementsByTagName !== "undefined") {
                                    return context.getElementsByTagName(tag);
                                    // DocumentFragment nodes don't have gEBTN
                                }
                                else if (support.qsa) {
                                    return context.querySelectorAll(tag);
                                }
                            } :
                            function (tag, context) {
                                var elem, tmp = [], i = 0, 
                                // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                                results = context.getElementsByTagName(tag);
                                // Filter out possible comments
                                if (tag === "*") {
                                    while ((elem = results[i++])) {
                                        if (elem.nodeType === 1) {
                                            tmp.push(elem);
                                        }
                                    }
                                    return tmp;
                                }
                                return results;
                            };
                        // Class
                        Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
                            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                                return context.getElementsByClassName(className);
                            }
                        };
                        /* QSA/matchesSelector
                        ---------------------------------------------------------------------- */
                        // QSA and matchesSelector support
                        // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
                        rbuggyMatches = [];
                        // qSa(:focus) reports false when true (Chrome 21)
                        // We allow this because of a bug in IE8/9 that throws an error
                        // whenever `document.activeElement` is accessed on an iframe
                        // So, we allow :focus to pass through QSA all the time to avoid the IE error
                        // See https://bugs.jquery.com/ticket/13378
                        rbuggyQSA = [];
                        if ((support.qsa = rnative.test(document.querySelectorAll))) {
                            // Build QSA regex
                            // Regex strategy adopted from Diego Perini
                            assert(function (el) {
                                var input;
                                // Select is set to empty string on purpose
                                // This is to test IE's treatment of not explicitly
                                // setting a boolean content attribute,
                                // since its presence should be enough
                                // https://bugs.jquery.com/ticket/12359
                                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" +
                                    "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                                    "<option selected=''></option></select>";
                                // Support: IE8, Opera 11-12.16
                                // Nothing should be selected when empty strings follow ^= or $= or *=
                                // The test attribute must be unknown in Opera but "safe" for WinRT
                                // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                                if (el.querySelectorAll("[msallowcapture^='']").length) {
                                    rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                                }
                                // Support: IE8
                                // Boolean attributes and "value" are not treated correctly
                                if (!el.querySelectorAll("[selected]").length) {
                                    rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                                }
                                // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                                if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                                    rbuggyQSA.push("~=");
                                }
                                // Support: IE 11+, Edge 15 - 18+
                                // IE 11/Edge don't find elements on a `[name='']` query in some cases.
                                // Adding a temporary attribute to the document before the selection works
                                // around the issue.
                                // Interestingly, IE 10 & older don't seem to have the issue.
                                input = document.createElement("input");
                                input.setAttribute("name", "");
                                el.appendChild(input);
                                if (!el.querySelectorAll("[name='']").length) {
                                    rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" +
                                        whitespace + "*(?:''|\"\")");
                                }
                                // Webkit/Opera - :checked should return selected option elements
                                // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                                // IE8 throws error here and will not see later tests
                                if (!el.querySelectorAll(":checked").length) {
                                    rbuggyQSA.push(":checked");
                                }
                                // Support: Safari 8+, iOS 8+
                                // https://bugs.webkit.org/show_bug.cgi?id=136851
                                // In-page `selector#id sibling-combinator selector` fails
                                if (!el.querySelectorAll("a#" + expando + "+*").length) {
                                    rbuggyQSA.push(".#.+[+~]");
                                }
                                // Support: Firefox <=3.6 - 5 only
                                // Old Firefox doesn't throw on a badly-escaped identifier.
                                el.querySelectorAll("\\\f");
                                rbuggyQSA.push("[\\r\\n\\f]");
                            });
                            assert(function (el) {
                                el.innerHTML = "<a href='' disabled='disabled'></a>" +
                                    "<select disabled='disabled'><option/></select>";
                                // Support: Windows 8 Native Apps
                                // The type and name attributes are restricted during .innerHTML assignment
                                var input = document.createElement("input");
                                input.setAttribute("type", "hidden");
                                el.appendChild(input).setAttribute("name", "D");
                                // Support: IE8
                                // Enforce case-sensitivity of name attribute
                                if (el.querySelectorAll("[name=d]").length) {
                                    rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                                }
                                // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                                // IE8 throws error here and will not see later tests
                                if (el.querySelectorAll(":enabled").length !== 2) {
                                    rbuggyQSA.push(":enabled", ":disabled");
                                }
                                // Support: IE9-11+
                                // IE's :disabled selector does not pick up the children of disabled fieldsets
                                docElem.appendChild(el).disabled = true;
                                if (el.querySelectorAll(":disabled").length !== 2) {
                                    rbuggyQSA.push(":enabled", ":disabled");
                                }
                                // Support: Opera 10 - 11 only
                                // Opera 10-11 does not throw on post-comma invalid pseudos
                                el.querySelectorAll("*,:x");
                                rbuggyQSA.push(",.*:");
                            });
                        }
                        if ((support.matchesSelector = rnative.test((matches = docElem.matches ||
                            docElem.webkitMatchesSelector ||
                            docElem.mozMatchesSelector ||
                            docElem.oMatchesSelector ||
                            docElem.msMatchesSelector)))) {
                            assert(function (el) {
                                // Check to see if it's possible to do matchesSelector
                                // on a disconnected node (IE 9)
                                support.disconnectedMatch = matches.call(el, "*");
                                // This should fail with an exception
                                // Gecko does not error, returns false instead
                                matches.call(el, "[s!='']:x");
                                rbuggyMatches.push("!=", pseudos);
                            });
                        }
                        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                        rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                        /* Contains
                        ---------------------------------------------------------------------- */
                        hasCompare = rnative.test(docElem.compareDocumentPosition);
                        // Element contains another
                        // Purposefully self-exclusive
                        // As in, an element does not contain itself
                        contains = hasCompare || rnative.test(docElem.contains) ?
                            function (a, b) {
                                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ?
                                    adown.contains(bup) :
                                    a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
                            } :
                            function (a, b) {
                                if (b) {
                                    while ((b = b.parentNode)) {
                                        if (b === a) {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            };
                        /* Sorting
                        ---------------------------------------------------------------------- */
                        // Document order sorting
                        sortOrder = hasCompare ?
                            function (a, b) {
                                // Flag for duplicate removal
                                if (a === b) {
                                    hasDuplicate = true;
                                    return 0;
                                }
                                // Sort on method existence if only one input has compareDocumentPosition
                                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                if (compare) {
                                    return compare;
                                }
                                // Calculate position if both inputs belong to the same document
                                // Support: IE 11+, Edge 17 - 18+
                                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                                // two documents; shallow comparisons work.
                                // eslint-disable-next-line eqeqeq
                                compare = (a.ownerDocument || a) == (b.ownerDocument || b) ?
                                    a.compareDocumentPosition(b) :
                                    // Otherwise we know they are disconnected
                                    1;
                                // Disconnected nodes
                                if (compare & 1 ||
                                    (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
                                    // Choose the first element that is related to our preferred document
                                    // Support: IE 11+, Edge 17 - 18+
                                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                                    // two documents; shallow comparisons work.
                                    // eslint-disable-next-line eqeqeq
                                    if (a == document || a.ownerDocument == preferredDoc &&
                                        contains(preferredDoc, a)) {
                                        return -1;
                                    }
                                    // Support: IE 11+, Edge 17 - 18+
                                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                                    // two documents; shallow comparisons work.
                                    // eslint-disable-next-line eqeqeq
                                    if (b == document || b.ownerDocument == preferredDoc &&
                                        contains(preferredDoc, b)) {
                                        return 1;
                                    }
                                    // Maintain original order
                                    return sortInput ?
                                        (indexOf(sortInput, a) - indexOf(sortInput, b)) :
                                        0;
                                }
                                return compare & 4 ? -1 : 1;
                            } :
                            function (a, b) {
                                // Exit early if the nodes are identical
                                if (a === b) {
                                    hasDuplicate = true;
                                    return 0;
                                }
                                var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
                                // Parentless nodes are either documents or disconnected
                                if (!aup || !bup) {
                                    // Support: IE 11+, Edge 17 - 18+
                                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                                    // two documents; shallow comparisons work.
                                    /* eslint-disable eqeqeq */
                                    return a == document ? -1 :
                                        b == document ? 1 :
                                            /* eslint-enable eqeqeq */
                                            aup ? -1 :
                                                bup ? 1 :
                                                    sortInput ?
                                                        (indexOf(sortInput, a) - indexOf(sortInput, b)) :
                                                        0;
                                    // If the nodes are siblings, we can do a quick check
                                }
                                else if (aup === bup) {
                                    return siblingCheck(a, b);
                                }
                                // Otherwise we need full lists of their ancestors for comparison
                                cur = a;
                                while ((cur = cur.parentNode)) {
                                    ap.unshift(cur);
                                }
                                cur = b;
                                while ((cur = cur.parentNode)) {
                                    bp.unshift(cur);
                                }
                                // Walk down the tree looking for a discrepancy
                                while (ap[i] === bp[i]) {
                                    i++;
                                }
                                return i ?
                                    // Do a sibling check if the nodes have a common ancestor
                                    siblingCheck(ap[i], bp[i]) :
                                    // Otherwise nodes in our document sort first
                                    // Support: IE 11+, Edge 17 - 18+
                                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                                    // two documents; shallow comparisons work.
                                    /* eslint-disable eqeqeq */
                                    ap[i] == preferredDoc ? -1 :
                                        bp[i] == preferredDoc ? 1 :
                                            /* eslint-enable eqeqeq */
                                            0;
                            };
                        return document;
                    };
                    Sizzle.matches = function (expr, elements) {
                        return Sizzle(expr, null, null, elements);
                    };
                    Sizzle.matchesSelector = function (elem, expr) {
                        setDocument(elem);
                        if (support.matchesSelector && documentIsHTML &&
                            !nonnativeSelectorCache[expr + " "] &&
                            (!rbuggyMatches || !rbuggyMatches.test(expr)) &&
                            (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                            try {
                                var ret = matches.call(elem, expr);
                                // IE 9's matchesSelector returns false on disconnected nodes
                                if (ret || support.disconnectedMatch ||
                                    // As well, disconnected nodes are said to be in a document
                                    // fragment in IE 9
                                    elem.document && elem.document.nodeType !== 11) {
                                    return ret;
                                }
                            }
                            catch (e) {
                                nonnativeSelectorCache(expr, true);
                            }
                        }
                        return Sizzle(expr, document, null, [elem]).length > 0;
                    };
                    Sizzle.contains = function (context, elem) {
                        // Set document vars if needed
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if ((context.ownerDocument || context) != document) {
                            setDocument(context);
                        }
                        return contains(context, elem);
                    };
                    Sizzle.attr = function (elem, name) {
                        // Set document vars if needed
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if ((elem.ownerDocument || elem) != document) {
                            setDocument(elem);
                        }
                        var fn = Expr.attrHandle[name.toLowerCase()], 
                        // Don't get fooled by Object.prototype properties (jQuery #13807)
                        val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ?
                            fn(elem, name, !documentIsHTML) :
                            undefined;
                        return val !== undefined ?
                            val :
                            support.attributes || !documentIsHTML ?
                                elem.getAttribute(name) :
                                (val = elem.getAttributeNode(name)) && val.specified ?
                                    val.value :
                                    null;
                    };
                    Sizzle.escape = function (sel) {
                        return (sel + "").replace(rcssescape, fcssescape);
                    };
                    Sizzle.error = function (msg) {
                        throw new Error("Syntax error, unrecognized expression: " + msg);
                    };
                    /**
                     * Document sorting and removing duplicates
                     * @param {ArrayLike} results
                     */
                    Sizzle.uniqueSort = function (results) {
                        var elem, duplicates = [], j = 0, i = 0;
                        // Unless we *know* we can detect duplicates, assume their presence
                        hasDuplicate = !support.detectDuplicates;
                        sortInput = !support.sortStable && results.slice(0);
                        results.sort(sortOrder);
                        if (hasDuplicate) {
                            while ((elem = results[i++])) {
                                if (elem === results[i]) {
                                    j = duplicates.push(i);
                                }
                            }
                            while (j--) {
                                results.splice(duplicates[j], 1);
                            }
                        }
                        // Clear input after sorting to release objects
                        // See https://github.com/jquery/sizzle/pull/225
                        sortInput = null;
                        return results;
                    };
                    /**
                     * Utility function for retrieving the text value of an array of DOM nodes
                     * @param {Array|Element} elem
                     */
                    getText = Sizzle.getText = function (elem) {
                        var node, ret = "", i = 0, nodeType = elem.nodeType;
                        if (!nodeType) {
                            // If no nodeType, this is expected to be an array
                            while ((node = elem[i++])) {
                                // Do not traverse comment nodes
                                ret += getText(node);
                            }
                        }
                        else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                            // Use textContent for elements
                            // innerText usage removed for consistency of new lines (jQuery #11153)
                            if (typeof elem.textContent === "string") {
                                return elem.textContent;
                            }
                            else {
                                // Traverse its children
                                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                                    ret += getText(elem);
                                }
                            }
                        }
                        else if (nodeType === 3 || nodeType === 4) {
                            return elem.nodeValue;
                        }
                        // Do not include comment or processing instruction nodes
                        return ret;
                    };
                    Expr = Sizzle.selectors = {
                        // Can be adjusted by the user
                        cacheLength: 50,
                        createPseudo: markFunction,
                        match: matchExpr,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": { dir: "parentNode", first: true },
                            " ": { dir: "parentNode" },
                            "+": { dir: "previousSibling", first: true },
                            "~": { dir: "previousSibling" }
                        },
                        preFilter: {
                            "ATTR": function (match) {
                                match[1] = match[1].replace(runescape, funescape);
                                // Move the given value to match[3] whether quoted or unquoted
                                match[3] = (match[3] || match[4] ||
                                    match[5] || "").replace(runescape, funescape);
                                if (match[2] === "~=") {
                                    match[3] = " " + match[3] + " ";
                                }
                                return match.slice(0, 4);
                            },
                            "CHILD": function (match) {
                                /* matches from matchExpr["CHILD"]
                                    1 type (only|nth|...)
                                    2 what (child|of-type)
                                    3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
                                    4 xn-component of xn+y argument ([+-]?\d*n|)
                                    5 sign of xn-component
                                    6 x of xn-component
                                    7 sign of y-component
                                    8 y of y-component
                                */
                                match[1] = match[1].toLowerCase();
                                if (match[1].slice(0, 3) === "nth") {
                                    // nth-* requires argument
                                    if (!match[3]) {
                                        Sizzle.error(match[0]);
                                    }
                                    // numeric x and y parameters for Expr.filter.CHILD
                                    // remember that false/true cast respectively to 0/1
                                    match[4] = +(match[4] ?
                                        match[5] + (match[6] || 1) :
                                        2 * (match[3] === "even" || match[3] === "odd"));
                                    match[5] = +((match[7] + match[8]) || match[3] === "odd");
                                    // other types prohibit arguments
                                }
                                else if (match[3]) {
                                    Sizzle.error(match[0]);
                                }
                                return match;
                            },
                            "PSEUDO": function (match) {
                                var excess, unquoted = !match[6] && match[2];
                                if (matchExpr["CHILD"].test(match[0])) {
                                    return null;
                                }
                                // Accept quoted arguments as-is
                                if (match[3]) {
                                    match[2] = match[4] || match[5] || "";
                                    // Strip excess characters from unquoted arguments
                                }
                                else if (unquoted && rpseudo.test(unquoted) &&
                                    // Get excess from tokenize (recursively)
                                    (excess = tokenize(unquoted, true)) &&
                                    // advance to the next closing parenthesis
                                    (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                                    // excess is a negative index
                                    match[0] = match[0].slice(0, excess);
                                    match[2] = unquoted.slice(0, excess);
                                }
                                // Return only captures needed by the pseudo filter method (type and argument)
                                return match.slice(0, 3);
                            }
                        },
                        filter: {
                            "TAG": function (nodeNameSelector) {
                                var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                                return nodeNameSelector === "*" ?
                                    function () {
                                        return true;
                                    } :
                                    function (elem) {
                                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                                    };
                            },
                            "CLASS": function (className) {
                                var pattern = classCache[className + " "];
                                return pattern ||
                                    (pattern = new RegExp("(^|" + whitespace +
                                        ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
                                        return pattern.test(typeof elem.className === "string" && elem.className ||
                                            typeof elem.getAttribute !== "undefined" &&
                                                elem.getAttribute("class") ||
                                            "");
                                    });
                            },
                            "ATTR": function (name, operator, check) {
                                return function (elem) {
                                    var result = Sizzle.attr(elem, name);
                                    if (result == null) {
                                        return operator === "!=";
                                    }
                                    if (!operator) {
                                        return true;
                                    }
                                    result += "";
                                    /* eslint-disable max-len */
                                    return operator === "=" ? result === check :
                                        operator === "!=" ? result !== check :
                                            operator === "^=" ? check && result.indexOf(check) === 0 :
                                                operator === "*=" ? check && result.indexOf(check) > -1 :
                                                    operator === "$=" ? check && result.slice(-check.length) === check :
                                                        operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 :
                                                            operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" :
                                                                false;
                                    /* eslint-enable max-len */
                                };
                            },
                            "CHILD": function (type, what, _argument, first, last) {
                                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                                return first === 1 && last === 0 ?
                                    // Shortcut for :nth-*(n)
                                    function (elem) {
                                        return !!elem.parentNode;
                                    } :
                                    function (elem, _context, xml) {
                                        var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                                        if (parent) {
                                            // :(first|last|only)-(child|of-type)
                                            if (simple) {
                                                while (dir) {
                                                    node = elem;
                                                    while ((node = node[dir])) {
                                                        if (ofType ?
                                                            node.nodeName.toLowerCase() === name :
                                                            node.nodeType === 1) {
                                                            return false;
                                                        }
                                                    }
                                                    // Reverse direction for :only-* (if we haven't yet done so)
                                                    start = dir = type === "only" && !start && "nextSibling";
                                                }
                                                return true;
                                            }
                                            start = [forward ? parent.firstChild : parent.lastChild];
                                            // non-xml :nth-child(...) stores cache data on `parent`
                                            if (forward && useCache) {
                                                // Seek `elem` from a previously-cached index
                                                // ...in a gzip-friendly way
                                                node = parent;
                                                outerCache = node[expando] || (node[expando] = {});
                                                // Support: IE <9 only
                                                // Defend against cloned attroperties (jQuery gh-1709)
                                                uniqueCache = outerCache[node.uniqueID] ||
                                                    (outerCache[node.uniqueID] = {});
                                                cache = uniqueCache[type] || [];
                                                nodeIndex = cache[0] === dirruns && cache[1];
                                                diff = nodeIndex && cache[2];
                                                node = nodeIndex && parent.childNodes[nodeIndex];
                                                while ((node = ++nodeIndex && node && node[dir] ||
                                                    // Fallback to seeking `elem` from the start
                                                    (diff = nodeIndex = 0) || start.pop())) {
                                                    // When found, cache indexes on `parent` and break
                                                    if (node.nodeType === 1 && ++diff && node === elem) {
                                                        uniqueCache[type] = [dirruns, nodeIndex, diff];
                                                        break;
                                                    }
                                                }
                                            }
                                            else {
                                                // Use previously-cached element index if available
                                                if (useCache) {
                                                    // ...in a gzip-friendly way
                                                    node = elem;
                                                    outerCache = node[expando] || (node[expando] = {});
                                                    // Support: IE <9 only
                                                    // Defend against cloned attroperties (jQuery gh-1709)
                                                    uniqueCache = outerCache[node.uniqueID] ||
                                                        (outerCache[node.uniqueID] = {});
                                                    cache = uniqueCache[type] || [];
                                                    nodeIndex = cache[0] === dirruns && cache[1];
                                                    diff = nodeIndex;
                                                }
                                                // xml :nth-child(...)
                                                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                                if (diff === false) {
                                                    // Use the same loop as above to seek `elem` from the start
                                                    while ((node = ++nodeIndex && node && node[dir] ||
                                                        (diff = nodeIndex = 0) || start.pop())) {
                                                        if ((ofType ?
                                                            node.nodeName.toLowerCase() === name :
                                                            node.nodeType === 1) &&
                                                            ++diff) {
                                                            // Cache the index of each encountered element
                                                            if (useCache) {
                                                                outerCache = node[expando] ||
                                                                    (node[expando] = {});
                                                                // Support: IE <9 only
                                                                // Defend against cloned attroperties (jQuery gh-1709)
                                                                uniqueCache = outerCache[node.uniqueID] ||
                                                                    (outerCache[node.uniqueID] = {});
                                                                uniqueCache[type] = [dirruns, diff];
                                                            }
                                                            if (node === elem) {
                                                                break;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            // Incorporate the offset, then check against cycle size
                                            diff -= last;
                                            return diff === first || (diff % first === 0 && diff / first >= 0);
                                        }
                                    };
                            },
                            "PSEUDO": function (pseudo, argument) {
                                // pseudo-class names are case-insensitive
                                // http://www.w3.org/TR/selectors/#pseudo-classes
                                // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                                // Remember that setFilters inherits from pseudos
                                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
                                    Sizzle.error("unsupported pseudo: " + pseudo);
                                // The user may use createPseudo to indicate that
                                // arguments are needed to create the filter function
                                // just as Sizzle does
                                if (fn[expando]) {
                                    return fn(argument);
                                }
                                // But maintain support for old signatures
                                if (fn.length > 1) {
                                    args = [pseudo, pseudo, "", argument];
                                    return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
                                        markFunction(function (seed, matches) {
                                            var idx, matched = fn(seed, argument), i = matched.length;
                                            while (i--) {
                                                idx = indexOf(seed, matched[i]);
                                                seed[idx] = !(matches[idx] = matched[i]);
                                            }
                                        }) :
                                        function (elem) {
                                            return fn(elem, 0, args);
                                        };
                                }
                                return fn;
                            }
                        },
                        pseudos: {
                            // Potentially complex pseudos
                            "not": markFunction(function (selector) {
                                // Trim the selector passed to compile
                                // to avoid treating leading and trailing
                                // spaces as combinators
                                var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                                return matcher[expando] ?
                                    markFunction(function (seed, matches, _context, xml) {
                                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                                        // Match elements unmatched by `matcher`
                                        while (i--) {
                                            if ((elem = unmatched[i])) {
                                                seed[i] = !(matches[i] = elem);
                                            }
                                        }
                                    }) :
                                    function (elem, _context, xml) {
                                        input[0] = elem;
                                        matcher(input, null, xml, results);
                                        // Don't keep the element (issue #299)
                                        input[0] = null;
                                        return !results.pop();
                                    };
                            }),
                            "has": markFunction(function (selector) {
                                return function (elem) {
                                    return Sizzle(selector, elem).length > 0;
                                };
                            }),
                            "contains": markFunction(function (text) {
                                text = text.replace(runescape, funescape);
                                return function (elem) {
                                    return (elem.textContent || getText(elem)).indexOf(text) > -1;
                                };
                            }),
                            // "Whether an element is represented by a :lang() selector
                            // is based solely on the element's language value
                            // being equal to the identifier C,
                            // or beginning with the identifier C immediately followed by "-".
                            // The matching of C against the element's language value is performed case-insensitively.
                            // The identifier C does not have to be a valid language name."
                            // http://www.w3.org/TR/selectors/#lang-pseudo
                            "lang": markFunction(function (lang) {
                                // lang value must be a valid identifier
                                if (!ridentifier.test(lang || "")) {
                                    Sizzle.error("unsupported lang: " + lang);
                                }
                                lang = lang.replace(runescape, funescape).toLowerCase();
                                return function (elem) {
                                    var elemLang;
                                    do {
                                        if ((elemLang = documentIsHTML ?
                                            elem.lang :
                                            elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
                                            elemLang = elemLang.toLowerCase();
                                            return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                        }
                                    } while ((elem = elem.parentNode) && elem.nodeType === 1);
                                    return false;
                                };
                            }),
                            // Miscellaneous
                            "target": function (elem) {
                                var hash = window.location && window.location.hash;
                                return hash && hash.slice(1) === elem.id;
                            },
                            "root": function (elem) {
                                return elem === docElem;
                            },
                            "focus": function (elem) {
                                return elem === document.activeElement &&
                                    (!document.hasFocus || document.hasFocus()) &&
                                    !!(elem.type || elem.href || ~elem.tabIndex);
                            },
                            // Boolean properties
                            "enabled": createDisabledPseudo(false),
                            "disabled": createDisabledPseudo(true),
                            "checked": function (elem) {
                                // In CSS3, :checked should return both checked and selected elements
                                // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                                var nodeName = elem.nodeName.toLowerCase();
                                return (nodeName === "input" && !!elem.checked) ||
                                    (nodeName === "option" && !!elem.selected);
                            },
                            "selected": function (elem) {
                                // Accessing this property makes selected-by-default
                                // options in Safari work properly
                                if (elem.parentNode) {
                                    // eslint-disable-next-line no-unused-expressions
                                    elem.parentNode.selectedIndex;
                                }
                                return elem.selected === true;
                            },
                            // Contents
                            "empty": function (elem) {
                                // http://www.w3.org/TR/selectors/#empty-pseudo
                                // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                                //   but not by others (comment: 8; processing instruction: 7; etc.)
                                // nodeType < 6 works because attributes (2) do not appear as children
                                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                                    if (elem.nodeType < 6) {
                                        return false;
                                    }
                                }
                                return true;
                            },
                            "parent": function (elem) {
                                return !Expr.pseudos["empty"](elem);
                            },
                            // Element/input types
                            "header": function (elem) {
                                return rheader.test(elem.nodeName);
                            },
                            "input": function (elem) {
                                return rinputs.test(elem.nodeName);
                            },
                            "button": function (elem) {
                                var name = elem.nodeName.toLowerCase();
                                return name === "input" && elem.type === "button" || name === "button";
                            },
                            "text": function (elem) {
                                var attr;
                                return elem.nodeName.toLowerCase() === "input" &&
                                    elem.type === "text" &&
                                    // Support: IE<8
                                    // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                                    ((attr = elem.getAttribute("type")) == null ||
                                        attr.toLowerCase() === "text");
                            },
                            // Position-in-collection
                            "first": createPositionalPseudo(function () {
                                return [0];
                            }),
                            "last": createPositionalPseudo(function (_matchIndexes, length) {
                                return [length - 1];
                            }),
                            "eq": createPositionalPseudo(function (_matchIndexes, length, argument) {
                                return [argument < 0 ? argument + length : argument];
                            }),
                            "even": createPositionalPseudo(function (matchIndexes, length) {
                                var i = 0;
                                for (; i < length; i += 2) {
                                    matchIndexes.push(i);
                                }
                                return matchIndexes;
                            }),
                            "odd": createPositionalPseudo(function (matchIndexes, length) {
                                var i = 1;
                                for (; i < length; i += 2) {
                                    matchIndexes.push(i);
                                }
                                return matchIndexes;
                            }),
                            "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
                                var i = argument < 0 ?
                                    argument + length :
                                    argument > length ?
                                        length :
                                        argument;
                                for (; --i >= 0;) {
                                    matchIndexes.push(i);
                                }
                                return matchIndexes;
                            }),
                            "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
                                var i = argument < 0 ? argument + length : argument;
                                for (; ++i < length;) {
                                    matchIndexes.push(i);
                                }
                                return matchIndexes;
                            })
                        }
                    };
                    Expr.pseudos["nth"] = Expr.pseudos["eq"];
                    // Add button/input type pseudos
                    for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
                        Expr.pseudos[i] = createInputPseudo(i);
                    }
                    for (i in { submit: true, reset: true }) {
                        Expr.pseudos[i] = createButtonPseudo(i);
                    }
                    // Easy API for creating new setFilters
                    function setFilters() { }
                    setFilters.prototype = Expr.filters = Expr.pseudos;
                    Expr.setFilters = new setFilters();
                    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
                        var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                        if (cached) {
                            return parseOnly ? 0 : cached.slice(0);
                        }
                        soFar = selector;
                        groups = [];
                        preFilters = Expr.preFilter;
                        while (soFar) {
                            // Comma and first run
                            if (!matched || (match = rcomma.exec(soFar))) {
                                if (match) {
                                    // Don't consume trailing commas as valid
                                    soFar = soFar.slice(match[0].length) || soFar;
                                }
                                groups.push((tokens = []));
                            }
                            matched = false;
                            // Combinators
                            if ((match = rcombinators.exec(soFar))) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    // Cast descendant combinators to space
                                    type: match[0].replace(rtrim, " ")
                                });
                                soFar = soFar.slice(matched.length);
                            }
                            // Filters
                            for (type in Expr.filter) {
                                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
                                    (match = preFilters[type](match)))) {
                                    matched = match.shift();
                                    tokens.push({
                                        value: matched,
                                        type: type,
                                        matches: match
                                    });
                                    soFar = soFar.slice(matched.length);
                                }
                            }
                            if (!matched) {
                                break;
                            }
                        }
                        // Return the length of the invalid excess
                        // if we're just parsing
                        // Otherwise, throw an error or return tokens
                        return parseOnly ?
                            soFar.length :
                            soFar ?
                                Sizzle.error(selector) :
                                // Cache the tokens
                                tokenCache(selector, groups).slice(0);
                    };
                    function toSelector(tokens) {
                        var i = 0, len = tokens.length, selector = "";
                        for (; i < len; i++) {
                            selector += tokens[i].value;
                        }
                        return selector;
                    }
                    function addCombinator(matcher, combinator, base) {
                        var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
                        return combinator.first ?
                            // Check against closest ancestor/preceding element
                            function (elem, context, xml) {
                                while ((elem = elem[dir])) {
                                    if (elem.nodeType === 1 || checkNonElements) {
                                        return matcher(elem, context, xml);
                                    }
                                }
                                return false;
                            } :
                            // Check against all ancestor/preceding elements
                            function (elem, context, xml) {
                                var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                                // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                                if (xml) {
                                    while ((elem = elem[dir])) {
                                        if (elem.nodeType === 1 || checkNonElements) {
                                            if (matcher(elem, context, xml)) {
                                                return true;
                                            }
                                        }
                                    }
                                }
                                else {
                                    while ((elem = elem[dir])) {
                                        if (elem.nodeType === 1 || checkNonElements) {
                                            outerCache = elem[expando] || (elem[expando] = {});
                                            // Support: IE <9 only
                                            // Defend against cloned attroperties (jQuery gh-1709)
                                            uniqueCache = outerCache[elem.uniqueID] ||
                                                (outerCache[elem.uniqueID] = {});
                                            if (skip && skip === elem.nodeName.toLowerCase()) {
                                                elem = elem[dir] || elem;
                                            }
                                            else if ((oldCache = uniqueCache[key]) &&
                                                oldCache[0] === dirruns && oldCache[1] === doneName) {
                                                // Assign to newCache so results back-propagate to previous elements
                                                return (newCache[2] = oldCache[2]);
                                            }
                                            else {
                                                // Reuse newcache so results back-propagate to previous elements
                                                uniqueCache[key] = newCache;
                                                // A match means we're done; a fail means we have to keep checking
                                                if ((newCache[2] = matcher(elem, context, xml))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                                return false;
                            };
                    }
                    function elementMatcher(matchers) {
                        return matchers.length > 1 ?
                            function (elem, context, xml) {
                                var i = matchers.length;
                                while (i--) {
                                    if (!matchers[i](elem, context, xml)) {
                                        return false;
                                    }
                                }
                                return true;
                            } :
                            matchers[0];
                    }
                    function multipleContexts(selector, contexts, results) {
                        var i = 0, len = contexts.length;
                        for (; i < len; i++) {
                            Sizzle(selector, contexts[i], results);
                        }
                        return results;
                    }
                    function condense(unmatched, map, filter, context, xml) {
                        var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
                        for (; i < len; i++) {
                            if ((elem = unmatched[i])) {
                                if (!filter || filter(elem, context, xml)) {
                                    newUnmatched.push(elem);
                                    if (mapped) {
                                        map.push(i);
                                    }
                                }
                            }
                        }
                        return newUnmatched;
                    }
                    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                        if (postFilter && !postFilter[expando]) {
                            postFilter = setMatcher(postFilter);
                        }
                        if (postFinder && !postFinder[expando]) {
                            postFinder = setMatcher(postFinder, postSelector);
                        }
                        return markFunction(function (seed, results, context, xml) {
                            var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, 
                            // Get initial elements from seed or context
                            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), 
                            // Prefilter to get matcher input, preserving a map for seed-results synchronization
                            matcherIn = preFilter && (seed || !selector) ?
                                condense(elems, preMap, preFilter, context, xml) :
                                elems, matcherOut = matcher ?
                                // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                                postFinder || (seed ? preFilter : preexisting || postFilter) ?
                                    // ...intermediate processing is necessary
                                    [] :
                                    // ...otherwise use results directly
                                    results :
                                matcherIn;
                            // Find primary matches
                            if (matcher) {
                                matcher(matcherIn, matcherOut, context, xml);
                            }
                            // Apply postFilter
                            if (postFilter) {
                                temp = condense(matcherOut, postMap);
                                postFilter(temp, [], context, xml);
                                // Un-match failing elements by moving them back to matcherIn
                                i = temp.length;
                                while (i--) {
                                    if ((elem = temp[i])) {
                                        matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                                    }
                                }
                            }
                            if (seed) {
                                if (postFinder || preFilter) {
                                    if (postFinder) {
                                        // Get the final matcherOut by condensing this intermediate into postFinder contexts
                                        temp = [];
                                        i = matcherOut.length;
                                        while (i--) {
                                            if ((elem = matcherOut[i])) {
                                                // Restore matcherIn since elem is not yet a final match
                                                temp.push((matcherIn[i] = elem));
                                            }
                                        }
                                        postFinder(null, (matcherOut = []), temp, xml);
                                    }
                                    // Move matched elements from seed to results to keep them synchronized
                                    i = matcherOut.length;
                                    while (i--) {
                                        if ((elem = matcherOut[i]) &&
                                            (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                                            seed[temp] = !(results[temp] = elem);
                                        }
                                    }
                                }
                                // Add elements to results, through postFinder if defined
                            }
                            else {
                                matcherOut = condense(matcherOut === results ?
                                    matcherOut.splice(preexisting, matcherOut.length) :
                                    matcherOut);
                                if (postFinder) {
                                    postFinder(null, results, matcherOut, xml);
                                }
                                else {
                                    push.apply(results, matcherOut);
                                }
                            }
                        });
                    }
                    function matcherFromTokens(tokens) {
                        var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, 
                        // The foundational matcher ensures that elements are reachable from top-level context(s)
                        matchContext = addCombinator(function (elem) {
                            return elem === checkContext;
                        }, implicitRelative, true), matchAnyContext = addCombinator(function (elem) {
                            return indexOf(checkContext, elem) > -1;
                        }, implicitRelative, true), matchers = [function (elem, context, xml) {
                                var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ?
                                    matchContext(elem, context, xml) :
                                    matchAnyContext(elem, context, xml));
                                // Avoid hanging onto element (issue #299)
                                checkContext = null;
                                return ret;
                            }];
                        for (; i < len; i++) {
                            if ((matcher = Expr.relative[tokens[i].type])) {
                                matchers = [addCombinator(elementMatcher(matchers), matcher)];
                            }
                            else {
                                matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                                // Return special upon seeing a positional matcher
                                if (matcher[expando]) {
                                    // Find the next relative operator (if any) for proper handling
                                    j = ++i;
                                    for (; j < len; j++) {
                                        if (Expr.relative[tokens[j].type]) {
                                            break;
                                        }
                                    }
                                    return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
                                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                                    tokens
                                        .slice(0, i - 1)
                                        .concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
                                }
                                matchers.push(matcher);
                            }
                        }
                        return elementMatcher(matchers);
                    }
                    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                        var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function (seed, context, xml, results, outermost) {
                            var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, 
                            // We must always have either seed elements or outermost context
                            elems = seed || byElement && Expr.find["TAG"]("*", outermost), 
                            // Use integer dirruns iff this is the outermost matcher
                            dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1), len = elems.length;
                            if (outermost) {
                                // Support: IE 11+, Edge 17 - 18+
                                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                                // two documents; shallow comparisons work.
                                // eslint-disable-next-line eqeqeq
                                outermostContext = context == document || context || outermost;
                            }
                            // Add elements passing elementMatchers directly to results
                            // Support: IE<9, Safari
                            // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                            for (; i !== len && (elem = elems[i]) != null; i++) {
                                if (byElement && elem) {
                                    j = 0;
                                    // Support: IE 11+, Edge 17 - 18+
                                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                                    // two documents; shallow comparisons work.
                                    // eslint-disable-next-line eqeqeq
                                    if (!context && elem.ownerDocument != document) {
                                        setDocument(elem);
                                        xml = !documentIsHTML;
                                    }
                                    while ((matcher = elementMatchers[j++])) {
                                        if (matcher(elem, context || document, xml)) {
                                            results.push(elem);
                                            break;
                                        }
                                    }
                                    if (outermost) {
                                        dirruns = dirrunsUnique;
                                    }
                                }
                                // Track unmatched elements for set filters
                                if (bySet) {
                                    // They will have gone through all possible matchers
                                    if ((elem = !matcher && elem)) {
                                        matchedCount--;
                                    }
                                    // Lengthen the array for every element, matched or not
                                    if (seed) {
                                        unmatched.push(elem);
                                    }
                                }
                            }
                            // `i` is now the count of elements visited above, and adding it to `matchedCount`
                            // makes the latter nonnegative.
                            matchedCount += i;
                            // Apply set filters to unmatched elements
                            // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                            // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                            // no element matchers and no seed.
                            // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                            // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                            // numerically zero.
                            if (bySet && i !== matchedCount) {
                                j = 0;
                                while ((matcher = setMatchers[j++])) {
                                    matcher(unmatched, setMatched, context, xml);
                                }
                                if (seed) {
                                    // Reintegrate element matches to eliminate the need for sorting
                                    if (matchedCount > 0) {
                                        while (i--) {
                                            if (!(unmatched[i] || setMatched[i])) {
                                                setMatched[i] = pop.call(results);
                                            }
                                        }
                                    }
                                    // Discard index placeholder values to get only actual matches
                                    setMatched = condense(setMatched);
                                }
                                // Add matches to results
                                push.apply(results, setMatched);
                                // Seedless set matches succeeding multiple successful matchers stipulate sorting
                                if (outermost && !seed && setMatched.length > 0 &&
                                    (matchedCount + setMatchers.length) > 1) {
                                    Sizzle.uniqueSort(results);
                                }
                            }
                            // Override manipulation of globals by nested matchers
                            if (outermost) {
                                dirruns = dirrunsUnique;
                                outermostContext = contextBackup;
                            }
                            return unmatched;
                        };
                        return bySet ?
                            markFunction(superMatcher) :
                            superMatcher;
                    }
                    compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
                        var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                        if (!cached) {
                            // Generate a function of recursive functions that can be used to check each element
                            if (!match) {
                                match = tokenize(selector);
                            }
                            i = match.length;
                            while (i--) {
                                cached = matcherFromTokens(match[i]);
                                if (cached[expando]) {
                                    setMatchers.push(cached);
                                }
                                else {
                                    elementMatchers.push(cached);
                                }
                            }
                            // Cache the compiled function
                            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                            // Save selector and tokenization
                            cached.selector = selector;
                        }
                        return cached;
                    };
                    /**
                     * A low-level selection function that works with Sizzle's compiled
                     *  selector functions
                     * @param {String|Function} selector A selector or a pre-compiled
                     *  selector function built with Sizzle.compile
                     * @param {Element} context
                     * @param {Array} [results]
                     * @param {Array} [seed] A set of elements to match against
                     */
                    select = Sizzle.select = function (selector, context, results, seed) {
                        var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize((selector = compiled.selector || selector));
                        results = results || [];
                        // Try to minimize operations if there is only one selector in the list and no seed
                        // (the latter of which guarantees us context)
                        if (match.length === 1) {
                            // Reduce context if the leading compound selector is an ID
                            tokens = match[0] = match[0].slice(0);
                            if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&
                                context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                                context = (Expr.find["ID"](token.matches[0]
                                    .replace(runescape, funescape), context) || [])[0];
                                if (!context) {
                                    return results;
                                    // Precompiled matchers will still verify ancestry, so step up a level
                                }
                                else if (compiled) {
                                    context = context.parentNode;
                                }
                                selector = selector.slice(tokens.shift().value.length);
                            }
                            // Fetch a seed set for right-to-left matching
                            i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                            while (i--) {
                                token = tokens[i];
                                // Abort if we hit a combinator
                                if (Expr.relative[(type = token.type)]) {
                                    break;
                                }
                                if ((find = Expr.find[type])) {
                                    // Search, expanding context for leading sibling combinators
                                    if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) ||
                                        context))) {
                                        // If seed is empty or no tokens remain, we can return early
                                        tokens.splice(i, 1);
                                        selector = seed.length && toSelector(tokens);
                                        if (!selector) {
                                            push.apply(results, seed);
                                            return results;
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                        // Compile and execute a filtering function if one is not provided
                        // Provide `match` to avoid retokenization if we modified the selector above
                        (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                        return results;
                    };
                    // One-time assignments
                    // Sort stability
                    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
                    // Support: Chrome 14-35+
                    // Always assume duplicates if they aren't passed to the comparison function
                    support.detectDuplicates = !!hasDuplicate;
                    // Initialize against the default document
                    setDocument();
                    // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
                    // Detached nodes confoundingly follow *each other*
                    support.sortDetached = assert(function (el) {
                        // Should return 1, but returns 4 (following)
                        return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
                    });
                    // Support: IE<8
                    // Prevent attribute/property "interpolation"
                    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
                    if (!assert(function (el) {
                        el.innerHTML = "<a href='#'></a>";
                        return el.firstChild.getAttribute("href") === "#";
                    })) {
                        addHandle("type|href|height|width", function (elem, name, isXML) {
                            if (!isXML) {
                                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                            }
                        });
                    }
                    // Support: IE<9
                    // Use defaultValue in place of getAttribute("value")
                    if (!support.attributes || !assert(function (el) {
                        el.innerHTML = "<input/>";
                        el.firstChild.setAttribute("value", "");
                        return el.firstChild.getAttribute("value") === "";
                    })) {
                        addHandle("value", function (elem, _name, isXML) {
                            if (!isXML && elem.nodeName.toLowerCase() === "input") {
                                return elem.defaultValue;
                            }
                        });
                    }
                    // Support: IE<9
                    // Use getAttributeNode to fetch booleans when getAttribute lies
                    if (!assert(function (el) {
                        return el.getAttribute("disabled") == null;
                    })) {
                        addHandle(booleans, function (elem, name, isXML) {
                            var val;
                            if (!isXML) {
                                return elem[name] === true ? name.toLowerCase() :
                                    (val = elem.getAttributeNode(name)) && val.specified ?
                                        val.value :
                                        null;
                            }
                        });
                    }
                    return Sizzle;
                })(window);
                jQuery.find = Sizzle;
                jQuery.expr = Sizzle.selectors;
                // Deprecated
                jQuery.expr[":"] = jQuery.expr.pseudos;
                jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
                jQuery.text = Sizzle.getText;
                jQuery.isXMLDoc = Sizzle.isXML;
                jQuery.contains = Sizzle.contains;
                jQuery.escapeSelector = Sizzle.escape;
                var dir = function (elem, dir, until) {
                    var matched = [], truncate = until !== undefined;
                    while ((elem = elem[dir]) && elem.nodeType !== 9) {
                        if (elem.nodeType === 1) {
                            if (truncate && jQuery(elem).is(until)) {
                                break;
                            }
                            matched.push(elem);
                        }
                    }
                    return matched;
                };
                var siblings = function (n, elem) {
                    var matched = [];
                    for (; n; n = n.nextSibling) {
                        if (n.nodeType === 1 && n !== elem) {
                            matched.push(n);
                        }
                    }
                    return matched;
                };
                var rneedsContext = jQuery.expr.match.needsContext;
                function nodeName(elem, name) {
                    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
                }
                ;
                var rsingleTag = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);
                // Implement the identical functionality for filter and not
                function winnow(elements, qualifier, not) {
                    if (isFunction(qualifier)) {
                        return jQuery.grep(elements, function (elem, i) {
                            return !!qualifier.call(elem, i, elem) !== not;
                        });
                    }
                    // Single element
                    if (qualifier.nodeType) {
                        return jQuery.grep(elements, function (elem) {
                            return (elem === qualifier) !== not;
                        });
                    }
                    // Arraylike of elements (jQuery, arguments, Array)
                    if (typeof qualifier !== "string") {
                        return jQuery.grep(elements, function (elem) {
                            return (indexOf.call(qualifier, elem) > -1) !== not;
                        });
                    }
                    // Filtered directly for both simple and complex selectors
                    return jQuery.filter(qualifier, elements, not);
                }
                jQuery.filter = function (expr, elems, not) {
                    var elem = elems[0];
                    if (not) {
                        expr = ":not(" + expr + ")";
                    }
                    if (elems.length === 1 && elem.nodeType === 1) {
                        return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
                    }
                    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
                        return elem.nodeType === 1;
                    }));
                };
                jQuery.fn.extend({
                    find: function (selector) {
                        var i, ret, len = this.length, self = this;
                        if (typeof selector !== "string") {
                            return this.pushStack(jQuery(selector).filter(function () {
                                for (i = 0; i < len; i++) {
                                    if (jQuery.contains(self[i], this)) {
                                        return true;
                                    }
                                }
                            }));
                        }
                        ret = this.pushStack([]);
                        for (i = 0; i < len; i++) {
                            jQuery.find(selector, self[i], ret);
                        }
                        return len > 1 ? jQuery.uniqueSort(ret) : ret;
                    },
                    filter: function (selector) {
                        return this.pushStack(winnow(this, selector || [], false));
                    },
                    not: function (selector) {
                        return this.pushStack(winnow(this, selector || [], true));
                    },
                    is: function (selector) {
                        return !!winnow(this, 
                        // If this is a positional/relative selector, check membership in the returned set
                        // so $("p:first").is("p:last") won't return true for a doc with two "p".
                        typeof selector === "string" && rneedsContext.test(selector) ?
                            jQuery(selector) :
                            selector || [], false).length;
                    }
                });
                // Initialize a jQuery object
                // A central reference to the root jQuery(document)
                var rootjQuery, 
                // A simple way to check for HTML strings
                // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
                // Strict HTML recognition (#11290: must start with <)
                // Shortcut simple #id case for speed
                rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function (selector, context, root) {
                    var match, elem;
                    // HANDLE: $(""), $(null), $(undefined), $(false)
                    if (!selector) {
                        return this;
                    }
                    // Method init() accepts an alternate rootjQuery
                    // so migrate can support jQuery.sub (gh-2101)
                    root = root || rootjQuery;
                    // Handle HTML strings
                    if (typeof selector === "string") {
                        if (selector[0] === "<" &&
                            selector[selector.length - 1] === ">" &&
                            selector.length >= 3) {
                            // Assume that strings that start and end with <> are HTML and skip the regex check
                            match = [null, selector, null];
                        }
                        else {
                            match = rquickExpr.exec(selector);
                        }
                        // Match html or make sure no context is specified for #id
                        if (match && (match[1] || !context)) {
                            // HANDLE: $(html) -> $(array)
                            if (match[1]) {
                                context = context instanceof jQuery ? context[0] : context;
                                // Option to run scripts is true for back-compat
                                // Intentionally let the error be thrown if parseHTML is not present
                                jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                                // HANDLE: $(html, props)
                                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                                    for (match in context) {
                                        // Properties of context are called as methods if possible
                                        if (isFunction(this[match])) {
                                            this[match](context[match]);
                                            // ...and otherwise set as attributes
                                        }
                                        else {
                                            this.attr(match, context[match]);
                                        }
                                    }
                                }
                                return this;
                                // HANDLE: $(#id)
                            }
                            else {
                                elem = document.getElementById(match[2]);
                                if (elem) {
                                    // Inject the element directly into the jQuery object
                                    this[0] = elem;
                                    this.length = 1;
                                }
                                return this;
                            }
                            // HANDLE: $(expr, $(...))
                        }
                        else if (!context || context.jquery) {
                            return (context || root).find(selector);
                            // HANDLE: $(expr, context)
                            // (which is just equivalent to: $(context).find(expr)
                        }
                        else {
                            return this.constructor(context).find(selector);
                        }
                        // HANDLE: $(DOMElement)
                    }
                    else if (selector.nodeType) {
                        this[0] = selector;
                        this.length = 1;
                        return this;
                        // HANDLE: $(function)
                        // Shortcut for document ready
                    }
                    else if (isFunction(selector)) {
                        return root.ready !== undefined ?
                            root.ready(selector) :
                            // Execute immediately if ready is not present
                            selector(jQuery);
                    }
                    return jQuery.makeArray(selector, this);
                };
                // Give the init function the jQuery prototype for later instantiation
                init.prototype = jQuery.fn;
                // Initialize central reference
                rootjQuery = jQuery(document);
                var rparentsprev = /^(?:parents|prev(?:Until|All))/, 
                // Methods guaranteed to produce a unique set when starting from a unique set
                guaranteedUnique = {
                    children: true,
                    contents: true,
                    next: true,
                    prev: true
                };
                jQuery.fn.extend({
                    has: function (target) {
                        var targets = jQuery(target, this), l = targets.length;
                        return this.filter(function () {
                            var i = 0;
                            for (; i < l; i++) {
                                if (jQuery.contains(this, targets[i])) {
                                    return true;
                                }
                            }
                        });
                    },
                    closest: function (selectors, context) {
                        var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
                        // Positional selectors never match, since there's no _selection_ context
                        if (!rneedsContext.test(selectors)) {
                            for (; i < l; i++) {
                                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                                    // Always skip document fragments
                                    if (cur.nodeType < 11 && (targets ?
                                        targets.index(cur) > -1 :
                                        // Don't pass non-elements to Sizzle
                                        cur.nodeType === 1 &&
                                            jQuery.find.matchesSelector(cur, selectors))) {
                                        matched.push(cur);
                                        break;
                                    }
                                }
                            }
                        }
                        return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
                    },
                    // Determine the position of an element within the set
                    index: function (elem) {
                        // No argument, return index in parent
                        if (!elem) {
                            return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
                        }
                        // Index in selector
                        if (typeof elem === "string") {
                            return indexOf.call(jQuery(elem), this[0]);
                        }
                        // Locate the position of the desired element
                        return indexOf.call(this, 
                        // If it receives a jQuery object, the first element is used
                        elem.jquery ? elem[0] : elem);
                    },
                    add: function (selector, context) {
                        return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
                    },
                    addBack: function (selector) {
                        return this.add(selector == null ?
                            this.prevObject : this.prevObject.filter(selector));
                    }
                });
                function sibling(cur, dir) {
                    while ((cur = cur[dir]) && cur.nodeType !== 1) { }
                    return cur;
                }
                jQuery.each({
                    parent: function (elem) {
                        var parent = elem.parentNode;
                        return parent && parent.nodeType !== 11 ? parent : null;
                    },
                    parents: function (elem) {
                        return dir(elem, "parentNode");
                    },
                    parentsUntil: function (elem, _i, until) {
                        return dir(elem, "parentNode", until);
                    },
                    next: function (elem) {
                        return sibling(elem, "nextSibling");
                    },
                    prev: function (elem) {
                        return sibling(elem, "previousSibling");
                    },
                    nextAll: function (elem) {
                        return dir(elem, "nextSibling");
                    },
                    prevAll: function (elem) {
                        return dir(elem, "previousSibling");
                    },
                    nextUntil: function (elem, _i, until) {
                        return dir(elem, "nextSibling", until);
                    },
                    prevUntil: function (elem, _i, until) {
                        return dir(elem, "previousSibling", until);
                    },
                    siblings: function (elem) {
                        return siblings((elem.parentNode || {}).firstChild, elem);
                    },
                    children: function (elem) {
                        return siblings(elem.firstChild);
                    },
                    contents: function (elem) {
                        if (elem.contentDocument != null &&
                            // Support: IE 11+
                            // <object> elements with no `data` attribute has an object
                            // `contentDocument` with a `null` prototype.
                            getProto(elem.contentDocument)) {
                            return elem.contentDocument;
                        }
                        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
                        // Treat the template element as a regular one in browsers that
                        // don't support it.
                        if (nodeName(elem, "template")) {
                            elem = elem.content || elem;
                        }
                        return jQuery.merge([], elem.childNodes);
                    }
                }, function (name, fn) {
                    jQuery.fn[name] = function (until, selector) {
                        var matched = jQuery.map(this, fn, until);
                        if (name.slice(-5) !== "Until") {
                            selector = until;
                        }
                        if (selector && typeof selector === "string") {
                            matched = jQuery.filter(selector, matched);
                        }
                        if (this.length > 1) {
                            // Remove duplicates
                            if (!guaranteedUnique[name]) {
                                jQuery.uniqueSort(matched);
                            }
                            // Reverse order for parents* and prev-derivatives
                            if (rparentsprev.test(name)) {
                                matched.reverse();
                            }
                        }
                        return this.pushStack(matched);
                    };
                });
                var rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);
                // Convert String-formatted options into Object-formatted ones
                function createOptions(options) {
                    var object = {};
                    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
                        object[flag] = true;
                    });
                    return object;
                }
                /*
                 * Create a callback list using the following parameters:
                 *
                 *	options: an optional list of space-separated options that will change how
                 *			the callback list behaves or a more traditional option object
                 *
                 * By default a callback list will act like an event callback list and can be
                 * "fired" multiple times.
                 *
                 * Possible options:
                 *
                 *	once:			will ensure the callback list can only be fired once (like a Deferred)
                 *
                 *	memory:			will keep track of previous values and will call any callback added
                 *					after the list has been fired right away with the latest "memorized"
                 *					values (like a Deferred)
                 *
                 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
                 *
                 *	stopOnFalse:	interrupt callings when a callback returns false
                 *
                 */
                jQuery.Callbacks = function (options) {
                    // Convert options from String-formatted to Object-formatted if needed
                    // (we check in cache first)
                    options = typeof options === "string" ?
                        createOptions(options) :
                        jQuery.extend({}, options);
                    var // Flag to know if list is currently firing
                    firing, 
                    // Last fire value for non-forgettable lists
                    memory, 
                    // Flag to know if list was already fired
                    fired, 
                    // Flag to prevent firing
                    locked, 
                    // Actual callback list
                    list = [], 
                    // Queue of execution data for repeatable lists
                    queue = [], 
                    // Index of currently firing callback (modified by add/remove as needed)
                    firingIndex = -1, 
                    // Fire callbacks
                    fire = function () {
                        // Enforce single-firing
                        locked = locked || options.once;
                        // Execute callbacks for all pending executions,
                        // respecting firingIndex overrides and runtime changes
                        fired = firing = true;
                        for (; queue.length; firingIndex = -1) {
                            memory = queue.shift();
                            while (++firingIndex < list.length) {
                                // Run callback and check for early termination
                                if (list[firingIndex].apply(memory[0], memory[1]) === false &&
                                    options.stopOnFalse) {
                                    // Jump to end and forget the data so .add doesn't re-fire
                                    firingIndex = list.length;
                                    memory = false;
                                }
                            }
                        }
                        // Forget the data if we're done with it
                        if (!options.memory) {
                            memory = false;
                        }
                        firing = false;
                        // Clean up if we're done firing for good
                        if (locked) {
                            // Keep an empty list if we have data for future add calls
                            if (memory) {
                                list = [];
                                // Otherwise, this object is spent
                            }
                            else {
                                list = "";
                            }
                        }
                    }, 
                    // Actual Callbacks object
                    self = {
                        // Add a callback or a collection of callbacks to the list
                        add: function () {
                            if (list) {
                                // If we have memory from a past run, we should fire after adding
                                if (memory && !firing) {
                                    firingIndex = list.length - 1;
                                    queue.push(memory);
                                }
                                (function add(args) {
                                    jQuery.each(args, function (_, arg) {
                                        if (isFunction(arg)) {
                                            if (!options.unique || !self.has(arg)) {
                                                list.push(arg);
                                            }
                                        }
                                        else if (arg && arg.length && toType(arg) !== "string") {
                                            // Inspect recursively
                                            add(arg);
                                        }
                                    });
                                })(arguments);
                                if (memory && !firing) {
                                    fire();
                                }
                            }
                            return this;
                        },
                        // Remove a callback from the list
                        remove: function () {
                            jQuery.each(arguments, function (_, arg) {
                                var index;
                                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                    list.splice(index, 1);
                                    // Handle firing indexes
                                    if (index <= firingIndex) {
                                        firingIndex--;
                                    }
                                }
                            });
                            return this;
                        },
                        // Check if a given callback is in the list.
                        // If no argument is given, return whether or not list has callbacks attached.
                        has: function (fn) {
                            return fn ?
                                jQuery.inArray(fn, list) > -1 :
                                list.length > 0;
                        },
                        // Remove all callbacks from the list
                        empty: function () {
                            if (list) {
                                list = [];
                            }
                            return this;
                        },
                        // Disable .fire and .add
                        // Abort any current/pending executions
                        // Clear all callbacks and values
                        disable: function () {
                            locked = queue = [];
                            list = memory = "";
                            return this;
                        },
                        disabled: function () {
                            return !list;
                        },
                        // Disable .fire
                        // Also disable .add unless we have memory (since it would have no effect)
                        // Abort any pending executions
                        lock: function () {
                            locked = queue = [];
                            if (!memory && !firing) {
                                list = memory = "";
                            }
                            return this;
                        },
                        locked: function () {
                            return !!locked;
                        },
                        // Call all callbacks with the given context and arguments
                        fireWith: function (context, args) {
                            if (!locked) {
                                args = args || [];
                                args = [context, args.slice ? args.slice() : args];
                                queue.push(args);
                                if (!firing) {
                                    fire();
                                }
                            }
                            return this;
                        },
                        // Call all the callbacks with the given arguments
                        fire: function () {
                            self.fireWith(this, arguments);
                            return this;
                        },
                        // To know if the callbacks have already been called at least once
                        fired: function () {
                            return !!fired;
                        }
                    };
                    return self;
                };
                function Identity(v) {
                    return v;
                }
                function Thrower(ex) {
                    throw ex;
                }
                function adoptValue(value, resolve, reject, noValue) {
                    var method;
                    try {
                        // Check for promise aspect first to privilege synchronous behavior
                        if (value && isFunction((method = value.promise))) {
                            method.call(value).done(resolve).fail(reject);
                            // Other thenables
                        }
                        else if (value && isFunction((method = value.then))) {
                            method.call(value, resolve, reject);
                            // Other non-thenables
                        }
                        else {
                            // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
                            // * false: [ value ].slice( 0 ) => resolve( value )
                            // * true: [ value ].slice( 1 ) => resolve()
                            resolve.apply(undefined, [value].slice(noValue));
                        }
                        // For Promises/A+, convert exceptions into rejections
                        // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
                        // Deferred#then to conditionally suppress rejection.
                    }
                    catch (value) {
                        // Support: Android 4.0 only
                        // Strict mode functions invoked without .call/.apply get global-object context
                        reject.apply(undefined, [value]);
                    }
                }
                jQuery.extend({
                    Deferred: function (func) {
                        var tuples = [
                            // action, add listener, callbacks,
                            // ... .then handlers, argument index, [final state]
                            ["notify", "progress", jQuery.Callbacks("memory"),
                                jQuery.Callbacks("memory"), 2],
                            ["resolve", "done", jQuery.Callbacks("once memory"),
                                jQuery.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", jQuery.Callbacks("once memory"),
                                jQuery.Callbacks("once memory"), 1, "rejected"]
                        ], state = "pending", promise = {
                            state: function () {
                                return state;
                            },
                            always: function () {
                                deferred.done(arguments).fail(arguments);
                                return this;
                            },
                            "catch": function (fn) {
                                return promise.then(null, fn);
                            },
                            // Keep pipe for back-compat
                            pipe: function ( /* fnDone, fnFail, fnProgress */) {
                                var fns = arguments;
                                return jQuery.Deferred(function (newDefer) {
                                    jQuery.each(tuples, function (_i, tuple) {
                                        // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                                        var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                        // deferred.progress(function() { bind to newDefer or newDefer.notify })
                                        // deferred.done(function() { bind to newDefer or newDefer.resolve })
                                        // deferred.fail(function() { bind to newDefer or newDefer.reject })
                                        deferred[tuple[1]](function () {
                                            var returned = fn && fn.apply(this, arguments);
                                            if (returned && isFunction(returned.promise)) {
                                                returned.promise()
                                                    .progress(newDefer.notify)
                                                    .done(newDefer.resolve)
                                                    .fail(newDefer.reject);
                                            }
                                            else {
                                                newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                                            }
                                        });
                                    });
                                    fns = null;
                                }).promise();
                            },
                            then: function (onFulfilled, onRejected, onProgress) {
                                var maxDepth = 0;
                                function resolve(depth, deferred, handler, special) {
                                    return function () {
                                        var that = this, args = arguments, mightThrow = function () {
                                            var returned, then;
                                            // Support: Promises/A+ section 2.3.3.3.3
                                            // https://promisesaplus.com/#point-59
                                            // Ignore double-resolution attempts
                                            if (depth < maxDepth) {
                                                return;
                                            }
                                            returned = handler.apply(that, args);
                                            // Support: Promises/A+ section 2.3.1
                                            // https://promisesaplus.com/#point-48
                                            if (returned === deferred.promise()) {
                                                throw new TypeError("Thenable self-resolution");
                                            }
                                            // Support: Promises/A+ sections 2.3.3.1, 3.5
                                            // https://promisesaplus.com/#point-54
                                            // https://promisesaplus.com/#point-75
                                            // Retrieve `then` only once
                                            then = returned &&
                                                // Support: Promises/A+ section 2.3.4
                                                // https://promisesaplus.com/#point-64
                                                // Only check objects and functions for thenability
                                                (typeof returned === "object" ||
                                                    typeof returned === "function") &&
                                                returned.then;
                                            // Handle a returned thenable
                                            if (isFunction(then)) {
                                                // Special processors (notify) just wait for resolution
                                                if (special) {
                                                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                                                    // Normal processors (resolve) also hook into progress
                                                }
                                                else {
                                                    // ...and disregard older resolution values
                                                    maxDepth++;
                                                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                                }
                                                // Handle all other returned values
                                            }
                                            else {
                                                // Only substitute handlers pass on context
                                                // and multiple values (non-spec behavior)
                                                if (handler !== Identity) {
                                                    that = undefined;
                                                    args = [returned];
                                                }
                                                // Process the value(s)
                                                // Default process is resolve
                                                (special || deferred.resolveWith)(that, args);
                                            }
                                        }, 
                                        // Only normal processors (resolve) catch and reject exceptions
                                        process = special ?
                                            mightThrow :
                                            function () {
                                                try {
                                                    mightThrow();
                                                }
                                                catch (e) {
                                                    if (jQuery.Deferred.exceptionHook) {
                                                        jQuery.Deferred.exceptionHook(e, process.stackTrace);
                                                    }
                                                    // Support: Promises/A+ section 2.3.3.3.4.1
                                                    // https://promisesaplus.com/#point-61
                                                    // Ignore post-resolution exceptions
                                                    if (depth + 1 >= maxDepth) {
                                                        // Only substitute handlers pass on context
                                                        // and multiple values (non-spec behavior)
                                                        if (handler !== Thrower) {
                                                            that = undefined;
                                                            args = [e];
                                                        }
                                                        deferred.rejectWith(that, args);
                                                    }
                                                }
                                            };
                                        // Support: Promises/A+ section 2.3.3.3.1
                                        // https://promisesaplus.com/#point-57
                                        // Re-resolve promises immediately to dodge false rejection from
                                        // subsequent errors
                                        if (depth) {
                                            process();
                                        }
                                        else {
                                            // Call an optional hook to record the stack, in case of exception
                                            // since it's otherwise lost when execution goes async
                                            if (jQuery.Deferred.getStackHook) {
                                                process.stackTrace = jQuery.Deferred.getStackHook();
                                            }
                                            window.setTimeout(process);
                                        }
                                    };
                                }
                                return jQuery.Deferred(function (newDefer) {
                                    // progress_handlers.add( ... )
                                    tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ?
                                        onProgress :
                                        Identity, newDefer.notifyWith));
                                    // fulfilled_handlers.add( ... )
                                    tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ?
                                        onFulfilled :
                                        Identity));
                                    // rejected_handlers.add( ... )
                                    tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ?
                                        onRejected :
                                        Thrower));
                                }).promise();
                            },
                            // Get a promise for this deferred
                            // If obj is provided, the promise aspect is added to the object
                            promise: function (obj) {
                                return obj != null ? jQuery.extend(obj, promise) : promise;
                            }
                        }, deferred = {};
                        // Add list-specific methods
                        jQuery.each(tuples, function (i, tuple) {
                            var list = tuple[2], stateString = tuple[5];
                            // promise.progress = list.add
                            // promise.done = list.add
                            // promise.fail = list.add
                            promise[tuple[1]] = list.add;
                            // Handle state
                            if (stateString) {
                                list.add(function () {
                                    // state = "resolved" (i.e., fulfilled)
                                    // state = "rejected"
                                    state = stateString;
                                }, 
                                // rejected_callbacks.disable
                                // fulfilled_callbacks.disable
                                tuples[3 - i][2].disable, 
                                // rejected_handlers.disable
                                // fulfilled_handlers.disable
                                tuples[3 - i][3].disable, 
                                // progress_callbacks.lock
                                tuples[0][2].lock, 
                                // progress_handlers.lock
                                tuples[0][3].lock);
                            }
                            // progress_handlers.fire
                            // fulfilled_handlers.fire
                            // rejected_handlers.fire
                            list.add(tuple[3].fire);
                            // deferred.notify = function() { deferred.notifyWith(...) }
                            // deferred.resolve = function() { deferred.resolveWith(...) }
                            // deferred.reject = function() { deferred.rejectWith(...) }
                            deferred[tuple[0]] = function () {
                                deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                                return this;
                            };
                            // deferred.notifyWith = list.fireWith
                            // deferred.resolveWith = list.fireWith
                            // deferred.rejectWith = list.fireWith
                            deferred[tuple[0] + "With"] = list.fireWith;
                        });
                        // Make the deferred a promise
                        promise.promise(deferred);
                        // Call given func if any
                        if (func) {
                            func.call(deferred, deferred);
                        }
                        // All done!
                        return deferred;
                    },
                    // Deferred helper
                    when: function (singleValue) {
                        var 
                        // count of uncompleted subordinates
                        remaining = arguments.length, 
                        // count of unprocessed arguments
                        i = remaining, 
                        // subordinate fulfillment data
                        resolveContexts = Array(i), resolveValues = slice.call(arguments), 
                        // the master Deferred
                        master = jQuery.Deferred(), 
                        // subordinate callback factory
                        updateFunc = function (i) {
                            return function (value) {
                                resolveContexts[i] = this;
                                resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                                if (!(--remaining)) {
                                    master.resolveWith(resolveContexts, resolveValues);
                                }
                            };
                        };
                        // Single- and empty arguments are adopted like Promise.resolve
                        if (remaining <= 1) {
                            adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);
                            // Use .then() to unwrap secondary thenables (cf. gh-3000)
                            if (master.state() === "pending" ||
                                isFunction(resolveValues[i] && resolveValues[i].then)) {
                                return master.then();
                            }
                        }
                        // Multiple arguments are aggregated like Promise.all array elements
                        while (i--) {
                            adoptValue(resolveValues[i], updateFunc(i), master.reject);
                        }
                        return master.promise();
                    }
                });
                // These usually indicate a programmer mistake during development,
                // warn about them ASAP rather than swallowing them by default.
                var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                jQuery.Deferred.exceptionHook = function (error, stack) {
                    // Support: IE 8 - 9 only
                    // Console exists when dev tools are open, which can happen at any time
                    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
                        window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
                    }
                };
                jQuery.readyException = function (error) {
                    window.setTimeout(function () {
                        throw error;
                    });
                };
                // The deferred used on DOM ready
                var readyList = jQuery.Deferred();
                jQuery.fn.ready = function (fn) {
                    readyList
                        .then(fn)
                        // Wrap jQuery.readyException in a function so that the lookup
                        // happens at the time of error handling instead of callback
                        // registration.
                        .catch(function (error) {
                        jQuery.readyException(error);
                    });
                    return this;
                };
                jQuery.extend({
                    // Is the DOM ready to be used? Set to true once it occurs.
                    isReady: false,
                    // A counter to track how many items to wait for before
                    // the ready event fires. See #6781
                    readyWait: 1,
                    // Handle when the DOM is ready
                    ready: function (wait) {
                        // Abort if there are pending holds or we're already ready
                        if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                            return;
                        }
                        // Remember that the DOM is ready
                        jQuery.isReady = true;
                        // If a normal DOM Ready event fired, decrement, and wait if need be
                        if (wait !== true && --jQuery.readyWait > 0) {
                            return;
                        }
                        // If there are functions bound, to execute
                        readyList.resolveWith(document, [jQuery]);
                    }
                });
                jQuery.ready.then = readyList.then;
                // The ready event handler and self cleanup method
                function completed() {
                    document.removeEventListener("DOMContentLoaded", completed);
                    window.removeEventListener("load", completed);
                    jQuery.ready();
                }
                // Catch cases where $(document).ready() is called
                // after the browser event has already occurred.
                // Support: IE <=9 - 10 only
                // Older IE sometimes signals "interactive" too soon
                if (document.readyState === "complete" ||
                    (document.readyState !== "loading" && !document.documentElement.doScroll)) {
                    // Handle it asynchronously to allow scripts the opportunity to delay ready
                    window.setTimeout(jQuery.ready);
                }
                else {
                    // Use the handy event callback
                    document.addEventListener("DOMContentLoaded", completed);
                    // A fallback to window.onload, that will always work
                    window.addEventListener("load", completed);
                }
                // Multifunctional method to get and set values of a collection
                // The value/s can optionally be executed if it's a function
                var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
                    var i = 0, len = elems.length, bulk = key == null;
                    // Sets many values
                    if (toType(key) === "object") {
                        chainable = true;
                        for (i in key) {
                            access(elems, fn, i, key[i], true, emptyGet, raw);
                        }
                        // Sets one value
                    }
                    else if (value !== undefined) {
                        chainable = true;
                        if (!isFunction(value)) {
                            raw = true;
                        }
                        if (bulk) {
                            // Bulk operations run against the entire set
                            if (raw) {
                                fn.call(elems, value);
                                fn = null;
                                // ...except when executing function values
                            }
                            else {
                                bulk = fn;
                                fn = function (elem, _key, value) {
                                    return bulk.call(jQuery(elem), value);
                                };
                            }
                        }
                        if (fn) {
                            for (; i < len; i++) {
                                fn(elems[i], key, raw ?
                                    value :
                                    value.call(elems[i], i, fn(elems[i], key)));
                            }
                        }
                    }
                    if (chainable) {
                        return elems;
                    }
                    // Gets
                    if (bulk) {
                        return fn.call(elems);
                    }
                    return len ? fn(elems[0], key) : emptyGet;
                };
                // Matches dashed string for camelizing
                var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
                // Used by camelCase as callback to replace()
                function fcamelCase(_all, letter) {
                    return letter.toUpperCase();
                }
                // Convert dashed to camelCase; used by the css and data modules
                // Support: IE <=9 - 11, Edge 12 - 15
                // Microsoft forgot to hump their vendor prefix (#9572)
                function camelCase(string) {
                    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
                }
                var acceptData = function (owner) {
                    // Accepts only:
                    //  - Node
                    //    - Node.ELEMENT_NODE
                    //    - Node.DOCUMENT_NODE
                    //  - Object
                    //    - Any
                    return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
                };
                function Data() {
                    this.expando = jQuery.expando + Data.uid++;
                }
                Data.uid = 1;
                Data.prototype = {
                    cache: function (owner) {
                        // Check if the owner object already has a cache
                        var value = owner[this.expando];
                        // If not, create one
                        if (!value) {
                            value = {};
                            // We can accept data for non-element nodes in modern browsers,
                            // but we should not, see #8335.
                            // Always return an empty object.
                            if (acceptData(owner)) {
                                // If it is a node unlikely to be stringify-ed or looped over
                                // use plain assignment
                                if (owner.nodeType) {
                                    owner[this.expando] = value;
                                    // Otherwise secure it in a non-enumerable property
                                    // configurable must be true to allow the property to be
                                    // deleted when data is removed
                                }
                                else {
                                    Object.defineProperty(owner, this.expando, {
                                        value: value,
                                        configurable: true
                                    });
                                }
                            }
                        }
                        return value;
                    },
                    set: function (owner, data, value) {
                        var prop, cache = this.cache(owner);
                        // Handle: [ owner, key, value ] args
                        // Always use camelCase key (gh-2257)
                        if (typeof data === "string") {
                            cache[camelCase(data)] = value;
                            // Handle: [ owner, { properties } ] args
                        }
                        else {
                            // Copy the properties one-by-one to the cache object
                            for (prop in data) {
                                cache[camelCase(prop)] = data[prop];
                            }
                        }
                        return cache;
                    },
                    get: function (owner, key) {
                        return key === undefined ?
                            this.cache(owner) :
                            // Always use camelCase key (gh-2257)
                            owner[this.expando] && owner[this.expando][camelCase(key)];
                    },
                    access: function (owner, key, value) {
                        // In cases where either:
                        //
                        //   1. No key was specified
                        //   2. A string key was specified, but no value provided
                        //
                        // Take the "read" path and allow the get method to determine
                        // which value to return, respectively either:
                        //
                        //   1. The entire cache object
                        //   2. The data stored at the key
                        //
                        if (key === undefined ||
                            ((key && typeof key === "string") && value === undefined)) {
                            return this.get(owner, key);
                        }
                        // When the key is not a string, or both a key and value
                        // are specified, set or extend (existing objects) with either:
                        //
                        //   1. An object of properties
                        //   2. A key and value
                        //
                        this.set(owner, key, value);
                        // Since the "set" path can have two possible entry points
                        // return the expected data based on which path was taken[*]
                        return value !== undefined ? value : key;
                    },
                    remove: function (owner, key) {
                        var i, cache = owner[this.expando];
                        if (cache === undefined) {
                            return;
                        }
                        if (key !== undefined) {
                            // Support array or space separated string of keys
                            if (Array.isArray(key)) {
                                // If key is an array of keys...
                                // We always set camelCase keys, so remove that.
                                key = key.map(camelCase);
                            }
                            else {
                                key = camelCase(key);
                                // If a key with the spaces exists, use it.
                                // Otherwise, create an array by matching non-whitespace
                                key = key in cache ?
                                    [key] :
                                    (key.match(rnothtmlwhite) || []);
                            }
                            i = key.length;
                            while (i--) {
                                delete cache[key[i]];
                            }
                        }
                        // Remove the expando if there's no more data
                        if (key === undefined || jQuery.isEmptyObject(cache)) {
                            // Support: Chrome <=35 - 45
                            // Webkit & Blink performance suffers when deleting properties
                            // from DOM nodes, so set to undefined instead
                            // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                            if (owner.nodeType) {
                                owner[this.expando] = undefined;
                            }
                            else {
                                delete owner[this.expando];
                            }
                        }
                    },
                    hasData: function (owner) {
                        var cache = owner[this.expando];
                        return cache !== undefined && !jQuery.isEmptyObject(cache);
                    }
                };
                var dataPriv = new Data();
                var dataUser = new Data();
                //	Implementation Summary
                //
                //	1. Enforce API surface and semantic compatibility with 1.9.x branch
                //	2. Improve the module's maintainability by reducing the storage
                //		paths to a single mechanism.
                //	3. Use the same single mechanism to support "private" and "user" data.
                //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
                //	5. Avoid exposing implementation details on user objects (eg. expando properties)
                //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
                var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
                function getData(data) {
                    if (data === "true") {
                        return true;
                    }
                    if (data === "false") {
                        return false;
                    }
                    if (data === "null") {
                        return null;
                    }
                    // Only convert to a number if it doesn't change the string
                    if (data === +data + "") {
                        return +data;
                    }
                    if (rbrace.test(data)) {
                        return JSON.parse(data);
                    }
                    return data;
                }
                function dataAttr(elem, key, data) {
                    var name;
                    // If nothing was found internally, try to fetch any
                    // data from the HTML5 data-* attribute
                    if (data === undefined && elem.nodeType === 1) {
                        name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                        data = elem.getAttribute(name);
                        if (typeof data === "string") {
                            try {
                                data = getData(data);
                            }
                            catch (e) { }
                            // Make sure we set the data so it isn't changed later
                            dataUser.set(elem, key, data);
                        }
                        else {
                            data = undefined;
                        }
                    }
                    return data;
                }
                jQuery.extend({
                    hasData: function (elem) {
                        return dataUser.hasData(elem) || dataPriv.hasData(elem);
                    },
                    data: function (elem, name, data) {
                        return dataUser.access(elem, name, data);
                    },
                    removeData: function (elem, name) {
                        dataUser.remove(elem, name);
                    },
                    // TODO: Now that all calls to _data and _removeData have been replaced
                    // with direct calls to dataPriv methods, these can be deprecated.
                    _data: function (elem, name, data) {
                        return dataPriv.access(elem, name, data);
                    },
                    _removeData: function (elem, name) {
                        dataPriv.remove(elem, name);
                    }
                });
                jQuery.fn.extend({
                    data: function (key, value) {
                        var i, name, data, elem = this[0], attrs = elem && elem.attributes;
                        // Gets all values
                        if (key === undefined) {
                            if (this.length) {
                                data = dataUser.get(elem);
                                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                                    i = attrs.length;
                                    while (i--) {
                                        // Support: IE 11 only
                                        // The attrs elements can be null (#14894)
                                        if (attrs[i]) {
                                            name = attrs[i].name;
                                            if (name.indexOf("data-") === 0) {
                                                name = camelCase(name.slice(5));
                                                dataAttr(elem, name, data[name]);
                                            }
                                        }
                                    }
                                    dataPriv.set(elem, "hasDataAttrs", true);
                                }
                            }
                            return data;
                        }
                        // Sets multiple values
                        if (typeof key === "object") {
                            return this.each(function () {
                                dataUser.set(this, key);
                            });
                        }
                        return access(this, function (value) {
                            var data;
                            // The calling jQuery object (element matches) is not empty
                            // (and therefore has an element appears at this[ 0 ]) and the
                            // `value` parameter was not undefined. An empty jQuery object
                            // will result in `undefined` for elem = this[ 0 ] which will
                            // throw an exception if an attempt to read a data cache is made.
                            if (elem && value === undefined) {
                                // Attempt to get data from the cache
                                // The key will always be camelCased in Data
                                data = dataUser.get(elem, key);
                                if (data !== undefined) {
                                    return data;
                                }
                                // Attempt to "discover" the data in
                                // HTML5 custom data-* attrs
                                data = dataAttr(elem, key);
                                if (data !== undefined) {
                                    return data;
                                }
                                // We tried really hard, but the data doesn't exist.
                                return;
                            }
                            // Set the data...
                            this.each(function () {
                                // We always store the camelCased key
                                dataUser.set(this, key, value);
                            });
                        }, null, value, arguments.length > 1, null, true);
                    },
                    removeData: function (key) {
                        return this.each(function () {
                            dataUser.remove(this, key);
                        });
                    }
                });
                jQuery.extend({
                    queue: function (elem, type, data) {
                        var queue;
                        if (elem) {
                            type = (type || "fx") + "queue";
                            queue = dataPriv.get(elem, type);
                            // Speed up dequeue by getting out quickly if this is just a lookup
                            if (data) {
                                if (!queue || Array.isArray(data)) {
                                    queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                                }
                                else {
                                    queue.push(data);
                                }
                            }
                            return queue || [];
                        }
                    },
                    dequeue: function (elem, type) {
                        type = type || "fx";
                        var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function () {
                            jQuery.dequeue(elem, type);
                        };
                        // If the fx queue is dequeued, always remove the progress sentinel
                        if (fn === "inprogress") {
                            fn = queue.shift();
                            startLength--;
                        }
                        if (fn) {
                            // Add a progress sentinel to prevent the fx queue from being
                            // automatically dequeued
                            if (type === "fx") {
                                queue.unshift("inprogress");
                            }
                            // Clear up the last queue stop function
                            delete hooks.stop;
                            fn.call(elem, next, hooks);
                        }
                        if (!startLength && hooks) {
                            hooks.empty.fire();
                        }
                    },
                    // Not public - generate a queueHooks object, or return the current one
                    _queueHooks: function (elem, type) {
                        var key = type + "queueHooks";
                        return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                            empty: jQuery.Callbacks("once memory").add(function () {
                                dataPriv.remove(elem, [type + "queue", key]);
                            })
                        });
                    }
                });
                jQuery.fn.extend({
                    queue: function (type, data) {
                        var setter = 2;
                        if (typeof type !== "string") {
                            data = type;
                            type = "fx";
                            setter--;
                        }
                        if (arguments.length < setter) {
                            return jQuery.queue(this[0], type);
                        }
                        return data === undefined ?
                            this :
                            this.each(function () {
                                var queue = jQuery.queue(this, type, data);
                                // Ensure a hooks for this queue
                                jQuery._queueHooks(this, type);
                                if (type === "fx" && queue[0] !== "inprogress") {
                                    jQuery.dequeue(this, type);
                                }
                            });
                    },
                    dequeue: function (type) {
                        return this.each(function () {
                            jQuery.dequeue(this, type);
                        });
                    },
                    clearQueue: function (type) {
                        return this.queue(type || "fx", []);
                    },
                    // Get a promise resolved when queues of a certain type
                    // are emptied (fx is the type by default)
                    promise: function (type, obj) {
                        var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function () {
                            if (!(--count)) {
                                defer.resolveWith(elements, [elements]);
                            }
                        };
                        if (typeof type !== "string") {
                            obj = type;
                            type = undefined;
                        }
                        type = type || "fx";
                        while (i--) {
                            tmp = dataPriv.get(elements[i], type + "queueHooks");
                            if (tmp && tmp.empty) {
                                count++;
                                tmp.empty.add(resolve);
                            }
                        }
                        resolve();
                        return defer.promise(obj);
                    }
                });
                var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
                var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
                var cssExpand = ["Top", "Right", "Bottom", "Left"];
                var documentElement = document.documentElement;
                var isAttached = function (elem) {
                    return jQuery.contains(elem.ownerDocument, elem);
                }, composed = { composed: true };
                // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
                // Check attachment across shadow DOM boundaries when possible (gh-3504)
                // Support: iOS 10.0-10.2 only
                // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
                // leading to errors. We need to check for `getRootNode`.
                if (documentElement.getRootNode) {
                    isAttached = function (elem) {
                        return jQuery.contains(elem.ownerDocument, elem) ||
                            elem.getRootNode(composed) === elem.ownerDocument;
                    };
                }
                var isHiddenWithinTree = function (elem, el) {
                    // isHiddenWithinTree might be called from jQuery#filter function;
                    // in that case, element will be second argument
                    elem = el || elem;
                    // Inline style trumps all
                    return elem.style.display === "none" ||
                        elem.style.display === "" &&
                            // Otherwise, check computed style
                            // Support: Firefox <=43 - 45
                            // Disconnected elements can have computed display: none, so first confirm that elem is
                            // in the document.
                            isAttached(elem) &&
                            jQuery.css(elem, "display") === "none";
                };
                function adjustCSS(elem, prop, valueParts, tween) {
                    var adjusted, scale, maxIterations = 20, currentValue = tween ?
                        function () {
                            return tween.cur();
                        } :
                        function () {
                            return jQuery.css(elem, prop, "");
                        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), 
                    // Starting value computation is required for potential unit mismatches
                    initialInUnit = elem.nodeType &&
                        (jQuery.cssNumber[prop] || unit !== "px" && +initial) &&
                        rcssNum.exec(jQuery.css(elem, prop));
                    if (initialInUnit && initialInUnit[3] !== unit) {
                        // Support: Firefox <=54
                        // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
                        initial = initial / 2;
                        // Trust units reported by jQuery.css
                        unit = unit || initialInUnit[3];
                        // Iteratively approximate from a nonzero starting point
                        initialInUnit = +initial || 1;
                        while (maxIterations--) {
                            // Evaluate and update our best guess (doubling guesses that zero out).
                            // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                            jQuery.style(elem, prop, initialInUnit + unit);
                            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                                maxIterations = 0;
                            }
                            initialInUnit = initialInUnit / scale;
                        }
                        initialInUnit = initialInUnit * 2;
                        jQuery.style(elem, prop, initialInUnit + unit);
                        // Make sure we update the tween properties later on
                        valueParts = valueParts || [];
                    }
                    if (valueParts) {
                        initialInUnit = +initialInUnit || +initial || 0;
                        // Apply relative offset (+=/-=) if specified
                        adjusted = valueParts[1] ?
                            initialInUnit + (valueParts[1] + 1) * valueParts[2] :
                            +valueParts[2];
                        if (tween) {
                            tween.unit = unit;
                            tween.start = initialInUnit;
                            tween.end = adjusted;
                        }
                    }
                    return adjusted;
                }
                var defaultDisplayMap = {};
                function getDefaultDisplay(elem) {
                    var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
                    if (display) {
                        return display;
                    }
                    temp = doc.body.appendChild(doc.createElement(nodeName));
                    display = jQuery.css(temp, "display");
                    temp.parentNode.removeChild(temp);
                    if (display === "none") {
                        display = "block";
                    }
                    defaultDisplayMap[nodeName] = display;
                    return display;
                }
                function showHide(elements, show) {
                    var display, elem, values = [], index = 0, length = elements.length;
                    // Determine new display value for elements that need to change
                    for (; index < length; index++) {
                        elem = elements[index];
                        if (!elem.style) {
                            continue;
                        }
                        display = elem.style.display;
                        if (show) {
                            // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                            // check is required in this first loop unless we have a nonempty display value (either
                            // inline or about-to-be-restored)
                            if (display === "none") {
                                values[index] = dataPriv.get(elem, "display") || null;
                                if (!values[index]) {
                                    elem.style.display = "";
                                }
                            }
                            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                                values[index] = getDefaultDisplay(elem);
                            }
                        }
                        else {
                            if (display !== "none") {
                                values[index] = "none";
                                // Remember what we're overwriting
                                dataPriv.set(elem, "display", display);
                            }
                        }
                    }
                    // Set the display of the elements in a second loop to avoid constant reflow
                    for (index = 0; index < length; index++) {
                        if (values[index] != null) {
                            elements[index].style.display = values[index];
                        }
                    }
                    return elements;
                }
                jQuery.fn.extend({
                    show: function () {
                        return showHide(this, true);
                    },
                    hide: function () {
                        return showHide(this);
                    },
                    toggle: function (state) {
                        if (typeof state === "boolean") {
                            return state ? this.show() : this.hide();
                        }
                        return this.each(function () {
                            if (isHiddenWithinTree(this)) {
                                jQuery(this).show();
                            }
                            else {
                                jQuery(this).hide();
                            }
                        });
                    }
                });
                var rcheckableType = (/^(?:checkbox|radio)$/i);
                var rtagName = (/<([a-z][^\/\0>\x20\t\r\n\f]*)/i);
                var rscriptType = (/^$|^module$|\/(?:java|ecma)script/i);
                (function () {
                    var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
                    // Support: Android 4.0 - 4.3 only
                    // Check state lost if the name is set (#11217)
                    // Support: Windows Web Apps (WWA)
                    // `name` and `type` must use .setAttribute for WWA (#14901)
                    input.setAttribute("type", "radio");
                    input.setAttribute("checked", "checked");
                    input.setAttribute("name", "t");
                    div.appendChild(input);
                    // Support: Android <=4.1 only
                    // Older WebKit doesn't clone checked state correctly in fragments
                    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
                    // Support: IE <=11 only
                    // Make sure textarea (and checkbox) defaultValue is properly cloned
                    div.innerHTML = "<textarea>x</textarea>";
                    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
                    // Support: IE <=9 only
                    // IE <=9 replaces <option> tags with their contents when inserted outside of
                    // the select element.
                    div.innerHTML = "<option></option>";
                    support.option = !!div.lastChild;
                })();
                // We have to close these tags to support XHTML (#13200)
                var wrapMap = {
                    // XHTML parsers do not magically insert elements in the
                    // same way that tag soup parsers do. So we cannot shorten
                    // this by omitting <tbody> or other required elements.
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
                wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
                wrapMap.th = wrapMap.td;
                // Support: IE <=9 only
                if (!support.option) {
                    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
                }
                function getAll(context, tag) {
                    // Support: IE <=9 - 11 only
                    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
                    var ret;
                    if (typeof context.getElementsByTagName !== "undefined") {
                        ret = context.getElementsByTagName(tag || "*");
                    }
                    else if (typeof context.querySelectorAll !== "undefined") {
                        ret = context.querySelectorAll(tag || "*");
                    }
                    else {
                        ret = [];
                    }
                    if (tag === undefined || tag && nodeName(context, tag)) {
                        return jQuery.merge([context], ret);
                    }
                    return ret;
                }
                // Mark scripts as having already been evaluated
                function setGlobalEval(elems, refElements) {
                    var i = 0, l = elems.length;
                    for (; i < l; i++) {
                        dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
                    }
                }
                var rhtml = /<|&#?\w+;/;
                function buildFragment(elems, context, scripts, selection, ignored) {
                    var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
                    for (; i < l; i++) {
                        elem = elems[i];
                        if (elem || elem === 0) {
                            // Add nodes directly
                            if (toType(elem) === "object") {
                                // Support: Android <=4.0 only, PhantomJS 1 only
                                // push.apply(_, arraylike) throws on ancient WebKit
                                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
                                // Convert non-html into a text node
                            }
                            else if (!rhtml.test(elem)) {
                                nodes.push(context.createTextNode(elem));
                                // Convert html into DOM nodes
                            }
                            else {
                                tmp = tmp || fragment.appendChild(context.createElement("div"));
                                // Deserialize a standard representation
                                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                                wrap = wrapMap[tag] || wrapMap._default;
                                tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                                // Descend through wrappers to the right content
                                j = wrap[0];
                                while (j--) {
                                    tmp = tmp.lastChild;
                                }
                                // Support: Android <=4.0 only, PhantomJS 1 only
                                // push.apply(_, arraylike) throws on ancient WebKit
                                jQuery.merge(nodes, tmp.childNodes);
                                // Remember the top-level container
                                tmp = fragment.firstChild;
                                // Ensure the created nodes are orphaned (#12392)
                                tmp.textContent = "";
                            }
                        }
                    }
                    // Remove wrapper from fragment
                    fragment.textContent = "";
                    i = 0;
                    while ((elem = nodes[i++])) {
                        // Skip elements already in the context collection (trac-4087)
                        if (selection && jQuery.inArray(elem, selection) > -1) {
                            if (ignored) {
                                ignored.push(elem);
                            }
                            continue;
                        }
                        attached = isAttached(elem);
                        // Append to fragment
                        tmp = getAll(fragment.appendChild(elem), "script");
                        // Preserve script evaluation history
                        if (attached) {
                            setGlobalEval(tmp);
                        }
                        // Capture executables
                        if (scripts) {
                            j = 0;
                            while ((elem = tmp[j++])) {
                                if (rscriptType.test(elem.type || "")) {
                                    scripts.push(elem);
                                }
                            }
                        }
                    }
                    return fragment;
                }
                var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
                function returnTrue() {
                    return true;
                }
                function returnFalse() {
                    return false;
                }
                // Support: IE <=9 - 11+
                // focus() and blur() are asynchronous, except when they are no-op.
                // So expect focus to be synchronous when the element is already active,
                // and blur to be synchronous when the element is not already active.
                // (focus and blur are always synchronous in other supported browsers,
                // this just defines when we can count on it).
                function expectSync(elem, type) {
                    return (elem === safeActiveElement()) === (type === "focus");
                }
                // Support: IE <=9 only
                // Accessing document.activeElement can throw unexpectedly
                // https://bugs.jquery.com/ticket/13393
                function safeActiveElement() {
                    try {
                        return document.activeElement;
                    }
                    catch (err) { }
                }
                function on(elem, types, selector, data, fn, one) {
                    var origFn, type;
                    // Types can be a map of types/handlers
                    if (typeof types === "object") {
                        // ( types-Object, selector, data )
                        if (typeof selector !== "string") {
                            // ( types-Object, data )
                            data = data || selector;
                            selector = undefined;
                        }
                        for (type in types) {
                            on(elem, type, selector, data, types[type], one);
                        }
                        return elem;
                    }
                    if (data == null && fn == null) {
                        // ( types, fn )
                        fn = selector;
                        data = selector = undefined;
                    }
                    else if (fn == null) {
                        if (typeof selector === "string") {
                            // ( types, selector, fn )
                            fn = data;
                            data = undefined;
                        }
                        else {
                            // ( types, data, fn )
                            fn = data;
                            data = selector;
                            selector = undefined;
                        }
                    }
                    if (fn === false) {
                        fn = returnFalse;
                    }
                    else if (!fn) {
                        return elem;
                    }
                    if (one === 1) {
                        origFn = fn;
                        fn = function (event) {
                            // Can use an empty set, since event contains the info
                            jQuery().off(event);
                            return origFn.apply(this, arguments);
                        };
                        // Use same guid so caller can remove using origFn
                        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
                    }
                    return elem.each(function () {
                        jQuery.event.add(this, types, fn, data, selector);
                    });
                }
                /*
                 * Helper functions for managing events -- not part of the public interface.
                 * Props to Dean Edwards' addEvent library for many of the ideas.
                 */
                jQuery.event = {
                    global: {},
                    add: function (elem, types, handler, data, selector) {
                        var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
                        // Only attach events to objects that accept data
                        if (!acceptData(elem)) {
                            return;
                        }
                        // Caller can pass in an object of custom data in lieu of the handler
                        if (handler.handler) {
                            handleObjIn = handler;
                            handler = handleObjIn.handler;
                            selector = handleObjIn.selector;
                        }
                        // Ensure that invalid selectors throw exceptions at attach time
                        // Evaluate against documentElement in case elem is a non-element node (e.g., document)
                        if (selector) {
                            jQuery.find.matchesSelector(documentElement, selector);
                        }
                        // Make sure that the handler has a unique ID, used to find/remove it later
                        if (!handler.guid) {
                            handler.guid = jQuery.guid++;
                        }
                        // Init the element's event structure and main handler, if this is the first
                        if (!(events = elemData.events)) {
                            events = elemData.events = Object.create(null);
                        }
                        if (!(eventHandle = elemData.handle)) {
                            eventHandle = elemData.handle = function (e) {
                                // Discard the second event of a jQuery.event.trigger() and
                                // when an event is called after a page has unloaded
                                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
                                    jQuery.event.dispatch.apply(elem, arguments) : undefined;
                            };
                        }
                        // Handle multiple events separated by a space
                        types = (types || "").match(rnothtmlwhite) || [""];
                        t = types.length;
                        while (t--) {
                            tmp = rtypenamespace.exec(types[t]) || [];
                            type = origType = tmp[1];
                            namespaces = (tmp[2] || "").split(".").sort();
                            // There *must* be a type, no attaching namespace-only handlers
                            if (!type) {
                                continue;
                            }
                            // If event changes its type, use the special event handlers for the changed type
                            special = jQuery.event.special[type] || {};
                            // If selector defined, determine special event api type, otherwise given type
                            type = (selector ? special.delegateType : special.bindType) || type;
                            // Update special based on newly reset type
                            special = jQuery.event.special[type] || {};
                            // handleObj is passed to all event handlers
                            handleObj = jQuery.extend({
                                type: type,
                                origType: origType,
                                data: data,
                                handler: handler,
                                guid: handler.guid,
                                selector: selector,
                                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                                namespace: namespaces.join(".")
                            }, handleObjIn);
                            // Init the event handler queue if we're the first
                            if (!(handlers = events[type])) {
                                handlers = events[type] = [];
                                handlers.delegateCount = 0;
                                // Only use addEventListener if the special events handler returns false
                                if (!special.setup ||
                                    special.setup.call(elem, data, namespaces, eventHandle) === false) {
                                    if (elem.addEventListener) {
                                        elem.addEventListener(type, eventHandle);
                                    }
                                }
                            }
                            if (special.add) {
                                special.add.call(elem, handleObj);
                                if (!handleObj.handler.guid) {
                                    handleObj.handler.guid = handler.guid;
                                }
                            }
                            // Add to the element's handler list, delegates in front
                            if (selector) {
                                handlers.splice(handlers.delegateCount++, 0, handleObj);
                            }
                            else {
                                handlers.push(handleObj);
                            }
                            // Keep track of which events have ever been used, for event optimization
                            jQuery.event.global[type] = true;
                        }
                    },
                    // Detach an event or set of events from an element
                    remove: function (elem, types, handler, selector, mappedTypes) {
                        var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                        if (!elemData || !(events = elemData.events)) {
                            return;
                        }
                        // Once for each type.namespace in types; type may be omitted
                        types = (types || "").match(rnothtmlwhite) || [""];
                        t = types.length;
                        while (t--) {
                            tmp = rtypenamespace.exec(types[t]) || [];
                            type = origType = tmp[1];
                            namespaces = (tmp[2] || "").split(".").sort();
                            // Unbind all events (on this namespace, if provided) for the element
                            if (!type) {
                                for (type in events) {
                                    jQuery.event.remove(elem, type + types[t], handler, selector, true);
                                }
                                continue;
                            }
                            special = jQuery.event.special[type] || {};
                            type = (selector ? special.delegateType : special.bindType) || type;
                            handlers = events[type] || [];
                            tmp = tmp[2] &&
                                new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                            // Remove matching events
                            origCount = j = handlers.length;
                            while (j--) {
                                handleObj = handlers[j];
                                if ((mappedTypes || origType === handleObj.origType) &&
                                    (!handler || handler.guid === handleObj.guid) &&
                                    (!tmp || tmp.test(handleObj.namespace)) &&
                                    (!selector || selector === handleObj.selector ||
                                        selector === "**" && handleObj.selector)) {
                                    handlers.splice(j, 1);
                                    if (handleObj.selector) {
                                        handlers.delegateCount--;
                                    }
                                    if (special.remove) {
                                        special.remove.call(elem, handleObj);
                                    }
                                }
                            }
                            // Remove generic event handler if we removed something and no more handlers exist
                            // (avoids potential for endless recursion during removal of special event handlers)
                            if (origCount && !handlers.length) {
                                if (!special.teardown ||
                                    special.teardown.call(elem, namespaces, elemData.handle) === false) {
                                    jQuery.removeEvent(elem, type, elemData.handle);
                                }
                                delete events[type];
                            }
                        }
                        // Remove data and the expando if it's no longer used
                        if (jQuery.isEmptyObject(events)) {
                            dataPriv.remove(elem, "handle events");
                        }
                    },
                    dispatch: function (nativeEvent) {
                        var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), 
                        // Make a writable jQuery.Event from the native event object
                        event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
                        // Use the fix-ed jQuery.Event rather than the (read-only) native event
                        args[0] = event;
                        for (i = 1; i < arguments.length; i++) {
                            args[i] = arguments[i];
                        }
                        event.delegateTarget = this;
                        // Call the preDispatch hook for the mapped type, and let it bail if desired
                        if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                            return;
                        }
                        // Determine handlers
                        handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                        // Run delegates first; they may want to stop propagation beneath us
                        i = 0;
                        while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                            event.currentTarget = matched.elem;
                            j = 0;
                            while ((handleObj = matched.handlers[j++]) &&
                                !event.isImmediatePropagationStopped()) {
                                // If the event is namespaced, then each handler is only invoked if it is
                                // specially universal or its namespaces are a superset of the event's.
                                if (!event.rnamespace || handleObj.namespace === false ||
                                    event.rnamespace.test(handleObj.namespace)) {
                                    event.handleObj = handleObj;
                                    event.data = handleObj.data;
                                    ret = ((jQuery.event.special[handleObj.origType] || {}).handle ||
                                        handleObj.handler).apply(matched.elem, args);
                                    if (ret !== undefined) {
                                        if ((event.result = ret) === false) {
                                            event.preventDefault();
                                            event.stopPropagation();
                                        }
                                    }
                                }
                            }
                        }
                        // Call the postDispatch hook for the mapped type
                        if (special.postDispatch) {
                            special.postDispatch.call(this, event);
                        }
                        return event.result;
                    },
                    handlers: function (event, handlers) {
                        var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
                        // Find delegate handlers
                        if (delegateCount &&
                            // Support: IE <=9
                            // Black-hole SVG <use> instance trees (trac-13180)
                            cur.nodeType &&
                            // Support: Firefox <=42
                            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
                            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
                            // Support: IE 11 only
                            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
                            !(event.type === "click" && event.button >= 1)) {
                            for (; cur !== this; cur = cur.parentNode || this) {
                                // Don't check non-elements (#13208)
                                // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                                    matchedHandlers = [];
                                    matchedSelectors = {};
                                    for (i = 0; i < delegateCount; i++) {
                                        handleObj = handlers[i];
                                        // Don't conflict with Object.prototype properties (#13203)
                                        sel = handleObj.selector + " ";
                                        if (matchedSelectors[sel] === undefined) {
                                            matchedSelectors[sel] = handleObj.needsContext ?
                                                jQuery(sel, this).index(cur) > -1 :
                                                jQuery.find(sel, this, null, [cur]).length;
                                        }
                                        if (matchedSelectors[sel]) {
                                            matchedHandlers.push(handleObj);
                                        }
                                    }
                                    if (matchedHandlers.length) {
                                        handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                                    }
                                }
                            }
                        }
                        // Add the remaining (directly-bound) handlers
                        cur = this;
                        if (delegateCount < handlers.length) {
                            handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
                        }
                        return handlerQueue;
                    },
                    addProp: function (name, hook) {
                        Object.defineProperty(jQuery.Event.prototype, name, {
                            enumerable: true,
                            configurable: true,
                            get: isFunction(hook) ?
                                function () {
                                    if (this.originalEvent) {
                                        return hook(this.originalEvent);
                                    }
                                } :
                                function () {
                                    if (this.originalEvent) {
                                        return this.originalEvent[name];
                                    }
                                },
                            set: function (value) {
                                Object.defineProperty(this, name, {
                                    enumerable: true,
                                    configurable: true,
                                    writable: true,
                                    value: value
                                });
                            }
                        });
                    },
                    fix: function (originalEvent) {
                        return originalEvent[jQuery.expando] ?
                            originalEvent :
                            new jQuery.Event(originalEvent);
                    },
                    special: {
                        load: {
                            // Prevent triggered image.load events from bubbling to window.load
                            noBubble: true
                        },
                        click: {
                            // Utilize native event to ensure correct state for checkable inputs
                            setup: function (data) {
                                // For mutual compressibility with _default, replace `this` access with a local var.
                                // `|| data` is dead code meant only to preserve the variable through minification.
                                var el = this || data;
                                // Claim the first handler
                                if (rcheckableType.test(el.type) &&
                                    el.click && nodeName(el, "input")) {
                                    // dataPriv.set( el, "click", ... )
                                    leverageNative(el, "click", returnTrue);
                                }
                                // Return false to allow normal processing in the caller
                                return false;
                            },
                            trigger: function (data) {
                                // For mutual compressibility with _default, replace `this` access with a local var.
                                // `|| data` is dead code meant only to preserve the variable through minification.
                                var el = this || data;
                                // Force setup before triggering a click
                                if (rcheckableType.test(el.type) &&
                                    el.click && nodeName(el, "input")) {
                                    leverageNative(el, "click");
                                }
                                // Return non-false to allow normal event-path propagation
                                return true;
                            },
                            // For cross-browser consistency, suppress native .click() on links
                            // Also prevent it if we're currently inside a leveraged native-event stack
                            _default: function (event) {
                                var target = event.target;
                                return rcheckableType.test(target.type) &&
                                    target.click && nodeName(target, "input") &&
                                    dataPriv.get(target, "click") ||
                                    nodeName(target, "a");
                            }
                        },
                        beforeunload: {
                            postDispatch: function (event) {
                                // Support: Firefox 20+
                                // Firefox doesn't alert if the returnValue field is not set.
                                if (event.result !== undefined && event.originalEvent) {
                                    event.originalEvent.returnValue = event.result;
                                }
                            }
                        }
                    }
                };
                // Ensure the presence of an event listener that handles manually-triggered
                // synthetic events by interrupting progress until reinvoked in response to
                // *native* events that it fires directly, ensuring that state changes have
                // already occurred before other listeners are invoked.
                function leverageNative(el, type, expectSync) {
                    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
                    if (!expectSync) {
                        if (dataPriv.get(el, type) === undefined) {
                            jQuery.event.add(el, type, returnTrue);
                        }
                        return;
                    }
                    // Register the controller as a special universal handler for all event namespaces
                    dataPriv.set(el, type, false);
                    jQuery.event.add(el, type, {
                        namespace: false,
                        handler: function (event) {
                            var notAsync, result, saved = dataPriv.get(this, type);
                            if ((event.isTrigger & 1) && this[type]) {
                                // Interrupt processing of the outer synthetic .trigger()ed event
                                // Saved data should be false in such cases, but might be a leftover capture object
                                // from an async native handler (gh-4350)
                                if (!saved.length) {
                                    // Store arguments for use when handling the inner native event
                                    // There will always be at least one argument (an event object), so this array
                                    // will not be confused with a leftover capture object.
                                    saved = slice.call(arguments);
                                    dataPriv.set(this, type, saved);
                                    // Trigger the native event and capture its result
                                    // Support: IE <=9 - 11+
                                    // focus() and blur() are asynchronous
                                    notAsync = expectSync(this, type);
                                    this[type]();
                                    result = dataPriv.get(this, type);
                                    if (saved !== result || notAsync) {
                                        dataPriv.set(this, type, false);
                                    }
                                    else {
                                        result = {};
                                    }
                                    if (saved !== result) {
                                        // Cancel the outer synthetic event
                                        event.stopImmediatePropagation();
                                        event.preventDefault();
                                        return result.value;
                                    }
                                    // If this is an inner synthetic event for an event with a bubbling surrogate
                                    // (focus or blur), assume that the surrogate already propagated from triggering the
                                    // native event and prevent that from happening again here.
                                    // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                                    // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                                    // less bad than duplication.
                                }
                                else if ((jQuery.event.special[type] || {}).delegateType) {
                                    event.stopPropagation();
                                }
                                // If this is a native event triggered above, everything is now in order
                                // Fire an inner synthetic event with the original arguments
                            }
                            else if (saved.length) {
                                // ...and capture the result
                                dataPriv.set(this, type, {
                                    value: jQuery.event.trigger(
                                    // Support: IE <=9 - 11+
                                    // Extend with the prototype to reset the above stopImmediatePropagation()
                                    jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
                                });
                                // Abort handling of the native event
                                event.stopImmediatePropagation();
                            }
                        }
                    });
                }
                jQuery.removeEvent = function (elem, type, handle) {
                    // This "if" is needed for plain objects
                    if (elem.removeEventListener) {
                        elem.removeEventListener(type, handle);
                    }
                };
                jQuery.Event = function (src, props) {
                    // Allow instantiation without the 'new' keyword
                    if (!(this instanceof jQuery.Event)) {
                        return new jQuery.Event(src, props);
                    }
                    // Event object
                    if (src && src.type) {
                        this.originalEvent = src;
                        this.type = src.type;
                        // Events bubbling up the document may have been marked as prevented
                        // by a handler lower down the tree; reflect the correct value.
                        this.isDefaultPrevented = src.defaultPrevented ||
                            src.defaultPrevented === undefined &&
                                // Support: Android <=2.3 only
                                src.returnValue === false ?
                            returnTrue :
                            returnFalse;
                        // Create target properties
                        // Support: Safari <=6 - 7 only
                        // Target should not be a text node (#504, #13143)
                        this.target = (src.target && src.target.nodeType === 3) ?
                            src.target.parentNode :
                            src.target;
                        this.currentTarget = src.currentTarget;
                        this.relatedTarget = src.relatedTarget;
                        // Event type
                    }
                    else {
                        this.type = src;
                    }
                    // Put explicitly provided properties onto the event object
                    if (props) {
                        jQuery.extend(this, props);
                    }
                    // Create a timestamp if incoming event doesn't have one
                    this.timeStamp = src && src.timeStamp || Date.now();
                    // Mark it as fixed
                    this[jQuery.expando] = true;
                };
                // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
                // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
                jQuery.Event.prototype = {
                    constructor: jQuery.Event,
                    isDefaultPrevented: returnFalse,
                    isPropagationStopped: returnFalse,
                    isImmediatePropagationStopped: returnFalse,
                    isSimulated: false,
                    preventDefault: function () {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = returnTrue;
                        if (e && !this.isSimulated) {
                            e.preventDefault();
                        }
                    },
                    stopPropagation: function () {
                        var e = this.originalEvent;
                        this.isPropagationStopped = returnTrue;
                        if (e && !this.isSimulated) {
                            e.stopPropagation();
                        }
                    },
                    stopImmediatePropagation: function () {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = returnTrue;
                        if (e && !this.isSimulated) {
                            e.stopImmediatePropagation();
                        }
                        this.stopPropagation();
                    }
                };
                // Includes all common event props including KeyEvent and MouseEvent specific props
                jQuery.each({
                    altKey: true,
                    bubbles: true,
                    cancelable: true,
                    changedTouches: true,
                    ctrlKey: true,
                    detail: true,
                    eventPhase: true,
                    metaKey: true,
                    pageX: true,
                    pageY: true,
                    shiftKey: true,
                    view: true,
                    "char": true,
                    code: true,
                    charCode: true,
                    key: true,
                    keyCode: true,
                    button: true,
                    buttons: true,
                    clientX: true,
                    clientY: true,
                    offsetX: true,
                    offsetY: true,
                    pointerId: true,
                    pointerType: true,
                    screenX: true,
                    screenY: true,
                    targetTouches: true,
                    toElement: true,
                    touches: true,
                    which: function (event) {
                        var button = event.button;
                        // Add which for key events
                        if (event.which == null && rkeyEvent.test(event.type)) {
                            return event.charCode != null ? event.charCode : event.keyCode;
                        }
                        // Add which for click: 1 === left; 2 === middle; 3 === right
                        if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
                            if (button & 1) {
                                return 1;
                            }
                            if (button & 2) {
                                return 3;
                            }
                            if (button & 4) {
                                return 2;
                            }
                            return 0;
                        }
                        return event.which;
                    }
                }, jQuery.event.addProp);
                jQuery.each({ focus: "focusin", blur: "focusout" }, function (type, delegateType) {
                    jQuery.event.special[type] = {
                        // Utilize native event if possible so blur/focus sequence is correct
                        setup: function () {
                            // Claim the first handler
                            // dataPriv.set( this, "focus", ... )
                            // dataPriv.set( this, "blur", ... )
                            leverageNative(this, type, expectSync);
                            // Return false to allow normal processing in the caller
                            return false;
                        },
                        trigger: function () {
                            // Force setup before trigger
                            leverageNative(this, type);
                            // Return non-false to allow normal event-path propagation
                            return true;
                        },
                        delegateType: delegateType
                    };
                });
                // Create mouseenter/leave events using mouseover/out and event-time checks
                // so that event delegation works in jQuery.
                // Do the same for pointerenter/pointerleave and pointerover/pointerout
                //
                // Support: Safari 7 only
                // Safari sends mouseenter too often; see:
                // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
                // for the description of the bug (it existed in older Chrome versions as well).
                jQuery.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function (orig, fix) {
                    jQuery.event.special[orig] = {
                        delegateType: fix,
                        bindType: fix,
                        handle: function (event) {
                            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                            // For mouseenter/leave call the handler if related is outside the target.
                            // NB: No relatedTarget if the mouse left/entered the browser window
                            if (!related || (related !== target && !jQuery.contains(target, related))) {
                                event.type = handleObj.origType;
                                ret = handleObj.handler.apply(this, arguments);
                                event.type = fix;
                            }
                            return ret;
                        }
                    };
                });
                jQuery.fn.extend({
                    on: function (types, selector, data, fn) {
                        return on(this, types, selector, data, fn);
                    },
                    one: function (types, selector, data, fn) {
                        return on(this, types, selector, data, fn, 1);
                    },
                    off: function (types, selector, fn) {
                        var handleObj, type;
                        if (types && types.preventDefault && types.handleObj) {
                            // ( event )  dispatched jQuery.Event
                            handleObj = types.handleObj;
                            jQuery(types.delegateTarget).off(handleObj.namespace ?
                                handleObj.origType + "." + handleObj.namespace :
                                handleObj.origType, handleObj.selector, handleObj.handler);
                            return this;
                        }
                        if (typeof types === "object") {
                            // ( types-object [, selector] )
                            for (type in types) {
                                this.off(type, selector, types[type]);
                            }
                            return this;
                        }
                        if (selector === false || typeof selector === "function") {
                            // ( types [, fn] )
                            fn = selector;
                            selector = undefined;
                        }
                        if (fn === false) {
                            fn = returnFalse;
                        }
                        return this.each(function () {
                            jQuery.event.remove(this, types, fn, selector);
                        });
                    }
                });
                var 
                // Support: IE <=10 - 11, Edge 12 - 13 only
                // In IE/Edge using regex groups here causes severe slowdowns.
                // See https://connect.microsoft.com/IE/feedback/details/1736512/
                rnoInnerhtml = /<script|<style|<link/i, 
                // checked="checked" or checked
                rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                // Prefer a tbody over its parent table for containing new rows
                function manipulationTarget(elem, content) {
                    if (nodeName(elem, "table") &&
                        nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
                        return jQuery(elem).children("tbody")[0] || elem;
                    }
                    return elem;
                }
                // Replace/restore the type attribute of script elements for safe DOM manipulation
                function disableScript(elem) {
                    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
                    return elem;
                }
                function restoreScript(elem) {
                    if ((elem.type || "").slice(0, 5) === "true/") {
                        elem.type = elem.type.slice(5);
                    }
                    else {
                        elem.removeAttribute("type");
                    }
                    return elem;
                }
                function cloneCopyEvent(src, dest) {
                    var i, l, type, pdataOld, udataOld, udataCur, events;
                    if (dest.nodeType !== 1) {
                        return;
                    }
                    // 1. Copy private data: events, handlers, etc.
                    if (dataPriv.hasData(src)) {
                        pdataOld = dataPriv.get(src);
                        events = pdataOld.events;
                        if (events) {
                            dataPriv.remove(dest, "handle events");
                            for (type in events) {
                                for (i = 0, l = events[type].length; i < l; i++) {
                                    jQuery.event.add(dest, type, events[type][i]);
                                }
                            }
                        }
                    }
                    // 2. Copy user data
                    if (dataUser.hasData(src)) {
                        udataOld = dataUser.access(src);
                        udataCur = jQuery.extend({}, udataOld);
                        dataUser.set(dest, udataCur);
                    }
                }
                // Fix IE bugs, see support tests
                function fixInput(src, dest) {
                    var nodeName = dest.nodeName.toLowerCase();
                    // Fails to persist the checked state of a cloned checkbox or radio button.
                    if (nodeName === "input" && rcheckableType.test(src.type)) {
                        dest.checked = src.checked;
                        // Fails to return the selected option to the default selected state when cloning options
                    }
                    else if (nodeName === "input" || nodeName === "textarea") {
                        dest.defaultValue = src.defaultValue;
                    }
                }
                function domManip(collection, args, callback, ignored) {
                    // Flatten any nested arrays
                    args = flat(args);
                    var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
                    // We can't cloneNode fragments that contain checked, in WebKit
                    if (valueIsFunction ||
                        (l > 1 && typeof value === "string" &&
                            !support.checkClone && rchecked.test(value))) {
                        return collection.each(function (index) {
                            var self = collection.eq(index);
                            if (valueIsFunction) {
                                args[0] = value.call(this, index, self.html());
                            }
                            domManip(self, args, callback, ignored);
                        });
                    }
                    if (l) {
                        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
                        first = fragment.firstChild;
                        if (fragment.childNodes.length === 1) {
                            fragment = first;
                        }
                        // Require either new content or an interest in ignored elements to invoke the callback
                        if (first || ignored) {
                            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                            hasScripts = scripts.length;
                            // Use the original fragment for the last item
                            // instead of the first because it can end up
                            // being emptied incorrectly in certain situations (#8070).
                            for (; i < l; i++) {
                                node = fragment;
                                if (i !== iNoClone) {
                                    node = jQuery.clone(node, true, true);
                                    // Keep references to cloned scripts for later restoration
                                    if (hasScripts) {
                                        // Support: Android <=4.0 only, PhantomJS 1 only
                                        // push.apply(_, arraylike) throws on ancient WebKit
                                        jQuery.merge(scripts, getAll(node, "script"));
                                    }
                                }
                                callback.call(collection[i], node, i);
                            }
                            if (hasScripts) {
                                doc = scripts[scripts.length - 1].ownerDocument;
                                // Reenable scripts
                                jQuery.map(scripts, restoreScript);
                                // Evaluate executable scripts on first document insertion
                                for (i = 0; i < hasScripts; i++) {
                                    node = scripts[i];
                                    if (rscriptType.test(node.type || "") &&
                                        !dataPriv.access(node, "globalEval") &&
                                        jQuery.contains(doc, node)) {
                                        if (node.src && (node.type || "").toLowerCase() !== "module") {
                                            // Optional AJAX dependency, but won't run scripts if not present
                                            if (jQuery._evalUrl && !node.noModule) {
                                                jQuery._evalUrl(node.src, {
                                                    nonce: node.nonce || node.getAttribute("nonce")
                                                }, doc);
                                            }
                                        }
                                        else {
                                            DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return collection;
                }
                function remove(elem, selector, keepData) {
                    var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
                    for (; (node = nodes[i]) != null; i++) {
                        if (!keepData && node.nodeType === 1) {
                            jQuery.cleanData(getAll(node));
                        }
                        if (node.parentNode) {
                            if (keepData && isAttached(node)) {
                                setGlobalEval(getAll(node, "script"));
                            }
                            node.parentNode.removeChild(node);
                        }
                    }
                    return elem;
                }
                jQuery.extend({
                    htmlPrefilter: function (html) {
                        return html;
                    },
                    clone: function (elem, dataAndEvents, deepDataAndEvents) {
                        var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
                        // Fix IE cloning issues
                        if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
                            !jQuery.isXMLDoc(elem)) {
                            // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
                            destElements = getAll(clone);
                            srcElements = getAll(elem);
                            for (i = 0, l = srcElements.length; i < l; i++) {
                                fixInput(srcElements[i], destElements[i]);
                            }
                        }
                        // Copy the events from the original to the clone
                        if (dataAndEvents) {
                            if (deepDataAndEvents) {
                                srcElements = srcElements || getAll(elem);
                                destElements = destElements || getAll(clone);
                                for (i = 0, l = srcElements.length; i < l; i++) {
                                    cloneCopyEvent(srcElements[i], destElements[i]);
                                }
                            }
                            else {
                                cloneCopyEvent(elem, clone);
                            }
                        }
                        // Preserve script evaluation history
                        destElements = getAll(clone, "script");
                        if (destElements.length > 0) {
                            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
                        }
                        // Return the cloned set
                        return clone;
                    },
                    cleanData: function (elems) {
                        var data, elem, type, special = jQuery.event.special, i = 0;
                        for (; (elem = elems[i]) !== undefined; i++) {
                            if (acceptData(elem)) {
                                if ((data = elem[dataPriv.expando])) {
                                    if (data.events) {
                                        for (type in data.events) {
                                            if (special[type]) {
                                                jQuery.event.remove(elem, type);
                                                // This is a shortcut to avoid jQuery.event.remove's overhead
                                            }
                                            else {
                                                jQuery.removeEvent(elem, type, data.handle);
                                            }
                                        }
                                    }
                                    // Support: Chrome <=35 - 45+
                                    // Assign undefined instead of using delete, see Data#remove
                                    elem[dataPriv.expando] = undefined;
                                }
                                if (elem[dataUser.expando]) {
                                    // Support: Chrome <=35 - 45+
                                    // Assign undefined instead of using delete, see Data#remove
                                    elem[dataUser.expando] = undefined;
                                }
                            }
                        }
                    }
                });
                jQuery.fn.extend({
                    detach: function (selector) {
                        return remove(this, selector, true);
                    },
                    remove: function (selector) {
                        return remove(this, selector);
                    },
                    text: function (value) {
                        return access(this, function (value) {
                            return value === undefined ?
                                jQuery.text(this) :
                                this.empty().each(function () {
                                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                        this.textContent = value;
                                    }
                                });
                        }, null, value, arguments.length);
                    },
                    append: function () {
                        return domManip(this, arguments, function (elem) {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                var target = manipulationTarget(this, elem);
                                target.appendChild(elem);
                            }
                        });
                    },
                    prepend: function () {
                        return domManip(this, arguments, function (elem) {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                var target = manipulationTarget(this, elem);
                                target.insertBefore(elem, target.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return domManip(this, arguments, function (elem) {
                            if (this.parentNode) {
                                this.parentNode.insertBefore(elem, this);
                            }
                        });
                    },
                    after: function () {
                        return domManip(this, arguments, function (elem) {
                            if (this.parentNode) {
                                this.parentNode.insertBefore(elem, this.nextSibling);
                            }
                        });
                    },
                    empty: function () {
                        var elem, i = 0;
                        for (; (elem = this[i]) != null; i++) {
                            if (elem.nodeType === 1) {
                                // Prevent memory leaks
                                jQuery.cleanData(getAll(elem, false));
                                // Remove any remaining nodes
                                elem.textContent = "";
                            }
                        }
                        return this;
                    },
                    clone: function (dataAndEvents, deepDataAndEvents) {
                        dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                        deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                        return this.map(function () {
                            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                        });
                    },
                    html: function (value) {
                        return access(this, function (value) {
                            var elem = this[0] || {}, i = 0, l = this.length;
                            if (value === undefined && elem.nodeType === 1) {
                                return elem.innerHTML;
                            }
                            // See if we can take a shortcut and just use innerHTML
                            if (typeof value === "string" && !rnoInnerhtml.test(value) &&
                                !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                                value = jQuery.htmlPrefilter(value);
                                try {
                                    for (; i < l; i++) {
                                        elem = this[i] || {};
                                        // Remove element nodes and prevent memory leaks
                                        if (elem.nodeType === 1) {
                                            jQuery.cleanData(getAll(elem, false));
                                            elem.innerHTML = value;
                                        }
                                    }
                                    elem = 0;
                                    // If using innerHTML throws an exception, use the fallback method
                                }
                                catch (e) { }
                            }
                            if (elem) {
                                this.empty().append(value);
                            }
                        }, null, value, arguments.length);
                    },
                    replaceWith: function () {
                        var ignored = [];
                        // Make the changes, replacing each non-ignored context element with the new content
                        return domManip(this, arguments, function (elem) {
                            var parent = this.parentNode;
                            if (jQuery.inArray(this, ignored) < 0) {
                                jQuery.cleanData(getAll(this));
                                if (parent) {
                                    parent.replaceChild(elem, this);
                                }
                            }
                            // Force callback invocation
                        }, ignored);
                    }
                });
                jQuery.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function (name, original) {
                    jQuery.fn[name] = function (selector) {
                        var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
                        for (; i <= last; i++) {
                            elems = i === last ? this : this.clone(true);
                            jQuery(insert[i])[original](elems);
                            // Support: Android <=4.0 only, PhantomJS 1 only
                            // .get() because push.apply(_, arraylike) throws on ancient WebKit
                            push.apply(ret, elems.get());
                        }
                        return this.pushStack(ret);
                    };
                });
                var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
                var getStyles = function (elem) {
                    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
                    // IE throws on elements created in popups
                    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
                    var view = elem.ownerDocument.defaultView;
                    if (!view || !view.opener) {
                        view = window;
                    }
                    return view.getComputedStyle(elem);
                };
                var swap = function (elem, options, callback) {
                    var ret, name, old = {};
                    // Remember the old values, and insert the new ones
                    for (name in options) {
                        old[name] = elem.style[name];
                        elem.style[name] = options[name];
                    }
                    ret = callback.call(elem);
                    // Revert the old values
                    for (name in options) {
                        elem.style[name] = old[name];
                    }
                    return ret;
                };
                var rboxStyle = new RegExp(cssExpand.join("|"), "i");
                (function () {
                    // Executing both pixelPosition & boxSizingReliable tests require only one layout
                    // so they're executed at the same time to save the second computation.
                    function computeStyleTests() {
                        // This is a singleton, we need to execute it only once
                        if (!div) {
                            return;
                        }
                        container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
                            "margin-top:1px;padding:0;border:0";
                        div.style.cssText =
                            "position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
                                "margin:auto;border:1px;padding:1px;" +
                                "width:60%;top:1%";
                        documentElement.appendChild(container).appendChild(div);
                        var divStyle = window.getComputedStyle(div);
                        pixelPositionVal = divStyle.top !== "1%";
                        // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
                        reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
                        // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
                        // Some styles come back with percentage values, even though they shouldn't
                        div.style.right = "60%";
                        pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
                        // Support: IE 9 - 11 only
                        // Detect misreporting of content dimensions for box-sizing:border-box elements
                        boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
                        // Support: IE 9 only
                        // Detect overflow:scroll screwiness (gh-3699)
                        // Support: Chrome <=64
                        // Don't get tricked when zoom affects offsetWidth (gh-4029)
                        div.style.position = "absolute";
                        scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
                        documentElement.removeChild(container);
                        // Nullify the div so it wouldn't be stored in the memory and
                        // it will also be a sign that checks already performed
                        div = null;
                    }
                    function roundPixelMeasures(measure) {
                        return Math.round(parseFloat(measure));
                    }
                    var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
                    // Finish early in limited (non-browser) environments
                    if (!div.style) {
                        return;
                    }
                    // Support: IE <=9 - 11 only
                    // Style of cloned element affects source element cloned (#8908)
                    div.style.backgroundClip = "content-box";
                    div.cloneNode(true).style.backgroundClip = "";
                    support.clearCloneStyle = div.style.backgroundClip === "content-box";
                    jQuery.extend(support, {
                        boxSizingReliable: function () {
                            computeStyleTests();
                            return boxSizingReliableVal;
                        },
                        pixelBoxStyles: function () {
                            computeStyleTests();
                            return pixelBoxStylesVal;
                        },
                        pixelPosition: function () {
                            computeStyleTests();
                            return pixelPositionVal;
                        },
                        reliableMarginLeft: function () {
                            computeStyleTests();
                            return reliableMarginLeftVal;
                        },
                        scrollboxSize: function () {
                            computeStyleTests();
                            return scrollboxSizeVal;
                        },
                        // Support: IE 9 - 11+, Edge 15 - 18+
                        // IE/Edge misreport `getComputedStyle` of table rows with width/height
                        // set in CSS while `offset*` properties report correct values.
                        // Behavior in IE 9 is more subtle than in newer versions & it passes
                        // some versions of this test; make sure not to make it pass there!
                        reliableTrDimensions: function () {
                            var table, tr, trChild, trStyle;
                            if (reliableTrDimensionsVal == null) {
                                table = document.createElement("table");
                                tr = document.createElement("tr");
                                trChild = document.createElement("div");
                                table.style.cssText = "position:absolute;left:-11111px";
                                tr.style.height = "1px";
                                trChild.style.height = "9px";
                                documentElement
                                    .appendChild(table)
                                    .appendChild(tr)
                                    .appendChild(trChild);
                                trStyle = window.getComputedStyle(tr);
                                reliableTrDimensionsVal = parseInt(trStyle.height) > 3;
                                documentElement.removeChild(table);
                            }
                            return reliableTrDimensionsVal;
                        }
                    });
                })();
                function curCSS(elem, name, computed) {
                    var width, minWidth, maxWidth, ret, 
                    // Support: Firefox 51+
                    // Retrieving style before computed somehow
                    // fixes an issue with getting wrong values
                    // on detached elements
                    style = elem.style;
                    computed = computed || getStyles(elem);
                    // getPropertyValue is needed for:
                    //   .css('filter') (IE 9 only, #12537)
                    //   .css('--customProperty) (#3144)
                    if (computed) {
                        ret = computed.getPropertyValue(name) || computed[name];
                        if (ret === "" && !isAttached(elem)) {
                            ret = jQuery.style(elem, name);
                        }
                        // A tribute to the "awesome hack by Dean Edwards"
                        // Android Browser returns percentage for some values,
                        // but width seems to be reliably pixels.
                        // This is against the CSSOM draft spec:
                        // https://drafts.csswg.org/cssom/#resolved-values
                        if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                            // Remember the original values
                            width = style.width;
                            minWidth = style.minWidth;
                            maxWidth = style.maxWidth;
                            // Put in the new values to get a computed value out
                            style.minWidth = style.maxWidth = style.width = ret;
                            ret = computed.width;
                            // Revert the changed values
                            style.width = width;
                            style.minWidth = minWidth;
                            style.maxWidth = maxWidth;
                        }
                    }
                    return ret !== undefined ?
                        // Support: IE <=9 - 11 only
                        // IE returns zIndex value as an integer.
                        ret + "" :
                        ret;
                }
                function addGetHookIf(conditionFn, hookFn) {
                    // Define the hook, we'll check on the first run if it's really needed.
                    return {
                        get: function () {
                            if (conditionFn()) {
                                // Hook not needed (or it's not possible to use it due
                                // to missing dependency), remove it.
                                delete this.get;
                                return;
                            }
                            // Hook needed; redefine it so that the support test is not executed again.
                            return (this.get = hookFn).apply(this, arguments);
                        }
                    };
                }
                var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document.createElement("div").style, vendorProps = {};
                // Return a vendor-prefixed property or undefined
                function vendorPropName(name) {
                    // Check for vendor prefixed names
                    var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
                    while (i--) {
                        name = cssPrefixes[i] + capName;
                        if (name in emptyStyle) {
                            return name;
                        }
                    }
                }
                // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
                function finalPropName(name) {
                    var final = jQuery.cssProps[name] || vendorProps[name];
                    if (final) {
                        return final;
                    }
                    if (name in emptyStyle) {
                        return name;
                    }
                    return vendorProps[name] = vendorPropName(name) || name;
                }
                var 
                // Swappable if display is none or starts with table
                // except "table", "table-cell", or "table-caption"
                // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
                rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function setPositiveNumber(_elem, value, subtract) {
                    // Any relative (+/-) values have already been
                    // normalized at this point
                    var matches = rcssNum.exec(value);
                    return matches ?
                        // Guard against undefined "subtract", e.g., when used as in cssHooks
                        Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") :
                        value;
                }
                function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
                    var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
                    // Adjustment may not be necessary
                    if (box === (isBorderBox ? "border" : "content")) {
                        return 0;
                    }
                    for (; i < 4; i += 2) {
                        // Both box models exclude margin
                        if (box === "margin") {
                            delta += jQuery.css(elem, box + cssExpand[i], true, styles);
                        }
                        // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
                        if (!isBorderBox) {
                            // Add padding
                            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                            // For "border" or "margin", add border
                            if (box !== "padding") {
                                delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                                // But still keep track of it otherwise
                            }
                            else {
                                extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                            }
                            // If we get here with a border-box (content + padding + border), we're seeking "content" or
                            // "padding" or "margin"
                        }
                        else {
                            // For "content", subtract padding
                            if (box === "content") {
                                delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                            }
                            // For "content" or "padding", subtract border
                            if (box !== "margin") {
                                delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                            }
                        }
                    }
                    // Account for positive content-box scroll gutter when requested by providing computedVal
                    if (!isBorderBox && computedVal >= 0) {
                        // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
                        // Assuming integer scroll gutter, subtract the rest and round down
                        delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -
                            computedVal -
                            delta -
                            extra -
                            0.5
                        // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
                        // Use an explicit zero to avoid NaN (gh-3964)
                        )) || 0;
                    }
                    return delta;
                }
                function getWidthOrHeight(elem, dimension, extra) {
                    // Start with computed style
                    var styles = getStyles(elem), 
                    // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
                    // Fake content-box until we know it's needed to know the true value.
                    boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded &&
                        jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
                    // Support: Firefox <=54
                    // Return a confounding non-pixel value or feign ignorance, as appropriate.
                    if (rnumnonpx.test(val)) {
                        if (!extra) {
                            return val;
                        }
                        val = "auto";
                    }
                    // Support: IE 9 - 11 only
                    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
                    // In those cases, the computed value can be trusted to be border-box.
                    if ((!support.boxSizingReliable() && isBorderBox ||
                        // Support: IE 10 - 11+, Edge 15 - 18+
                        // IE/Edge misreport `getComputedStyle` of table rows with width/height
                        // set in CSS while `offset*` properties report correct values.
                        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
                        !support.reliableTrDimensions() && nodeName(elem, "tr") ||
                        // Fall back to offsetWidth/offsetHeight when value is "auto"
                        // This happens for inline elements with no explicit setting (gh-3571)
                        val === "auto" ||
                        // Support: Android <=4.1 - 4.3 only
                        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
                        !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") &&
                        // Make sure the element is visible & connected
                        elem.getClientRects().length) {
                        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
                        // Where available, offsetWidth/offsetHeight approximate border box dimensions.
                        // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
                        // retrieved value as a content box dimension.
                        valueIsBorderBox = offsetProp in elem;
                        if (valueIsBorderBox) {
                            val = elem[offsetProp];
                        }
                    }
                    // Normalize "" and auto
                    val = parseFloat(val) || 0;
                    // Adjust for the element's box model
                    return (val +
                        boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, 
                        // Provide the current computed size to request scroll gutter calculation (gh-3589)
                        val)) + "px";
                }
                jQuery.extend({
                    // Add in style property hooks for overriding the default
                    // behavior of getting and setting a style property
                    cssHooks: {
                        opacity: {
                            get: function (elem, computed) {
                                if (computed) {
                                    // We should always get a number back from opacity
                                    var ret = curCSS(elem, "opacity");
                                    return ret === "" ? "1" : ret;
                                }
                            }
                        }
                    },
                    // Don't automatically add "px" to these possibly-unitless properties
                    cssNumber: {
                        "animationIterationCount": true,
                        "columnCount": true,
                        "fillOpacity": true,
                        "flexGrow": true,
                        "flexShrink": true,
                        "fontWeight": true,
                        "gridArea": true,
                        "gridColumn": true,
                        "gridColumnEnd": true,
                        "gridColumnStart": true,
                        "gridRow": true,
                        "gridRowEnd": true,
                        "gridRowStart": true,
                        "lineHeight": true,
                        "opacity": true,
                        "order": true,
                        "orphans": true,
                        "widows": true,
                        "zIndex": true,
                        "zoom": true
                    },
                    // Add in properties whose names you wish to fix before
                    // setting or getting the value
                    cssProps: {},
                    // Get and set the style property on a DOM Node
                    style: function (elem, name, value, extra) {
                        // Don't set styles on text and comment nodes
                        if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                            return;
                        }
                        // Make sure that we're working with the right name
                        var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
                        // Make sure that we're working with the right name. We don't
                        // want to query the value if it is a CSS custom property
                        // since they are user-defined.
                        if (!isCustomProp) {
                            name = finalPropName(origName);
                        }
                        // Gets hook for the prefixed version, then unprefixed version
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                        // Check if we're setting a value
                        if (value !== undefined) {
                            type = typeof value;
                            // Convert "+=" or "-=" to relative numbers (#7345)
                            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                                value = adjustCSS(elem, name, ret);
                                // Fixes bug #9237
                                type = "number";
                            }
                            // Make sure that null and NaN values aren't set (#7116)
                            if (value == null || value !== value) {
                                return;
                            }
                            // If a number was passed in, add the unit (except for certain CSS properties)
                            // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
                            // "px" to a few hardcoded values.
                            if (type === "number" && !isCustomProp) {
                                value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                            }
                            // background-* props affect original clone's values
                            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                                style[name] = "inherit";
                            }
                            // If a hook was provided, use that value, otherwise just set the specified value
                            if (!hooks || !("set" in hooks) ||
                                (value = hooks.set(elem, value, extra)) !== undefined) {
                                if (isCustomProp) {
                                    style.setProperty(name, value);
                                }
                                else {
                                    style[name] = value;
                                }
                            }
                        }
                        else {
                            // If a hook was provided get the non-computed value from there
                            if (hooks && "get" in hooks &&
                                (ret = hooks.get(elem, false, extra)) !== undefined) {
                                return ret;
                            }
                            // Otherwise just get the value from the style object
                            return style[name];
                        }
                    },
                    css: function (elem, name, extra, styles) {
                        var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
                        // Make sure that we're working with the right name. We don't
                        // want to modify the value if it is a CSS custom property
                        // since they are user-defined.
                        if (!isCustomProp) {
                            name = finalPropName(origName);
                        }
                        // Try prefixed name followed by the unprefixed name
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                        // If a hook was provided get the computed value from there
                        if (hooks && "get" in hooks) {
                            val = hooks.get(elem, true, extra);
                        }
                        // Otherwise, if a way to get the computed value exists, use that
                        if (val === undefined) {
                            val = curCSS(elem, name, styles);
                        }
                        // Convert "normal" to computed value
                        if (val === "normal" && name in cssNormalTransform) {
                            val = cssNormalTransform[name];
                        }
                        // Make numeric if forced or a qualifier was provided and val looks numeric
                        if (extra === "" || extra) {
                            num = parseFloat(val);
                            return extra === true || isFinite(num) ? num || 0 : val;
                        }
                        return val;
                    }
                });
                jQuery.each(["height", "width"], function (_i, dimension) {
                    jQuery.cssHooks[dimension] = {
                        get: function (elem, computed, extra) {
                            if (computed) {
                                // Certain elements can have dimension info if we invisibly show them
                                // but it must have a current display style that would benefit
                                return rdisplayswap.test(jQuery.css(elem, "display")) &&
                                    // Support: Safari 8+
                                    // Table columns in Safari have non-zero offsetWidth & zero
                                    // getBoundingClientRect().width unless display is changed.
                                    // Support: IE <=11 only
                                    // Running getBoundingClientRect on a disconnected node
                                    // in IE throws an error.
                                    (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ?
                                    swap(elem, cssShow, function () {
                                        return getWidthOrHeight(elem, dimension, extra);
                                    }) :
                                    getWidthOrHeight(elem, dimension, extra);
                            }
                        },
                        set: function (elem, value, extra) {
                            var matches, styles = getStyles(elem), 
                            // Only read styles.position if the test has a chance to fail
                            // to avoid forcing a reflow.
                            scrollboxSizeBuggy = !support.scrollboxSize() &&
                                styles.position === "absolute", 
                            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
                            boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded &&
                                jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ?
                                boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) :
                                0;
                            // Account for unreliable border-box dimensions by comparing offset* to computed and
                            // faking a content-box to get border and padding (gh-3699)
                            if (isBorderBox && scrollboxSizeBuggy) {
                                subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -
                                    parseFloat(styles[dimension]) -
                                    boxModelAdjustment(elem, dimension, "border", false, styles) -
                                    0.5);
                            }
                            // Convert to pixels if value adjustment is needed
                            if (subtract && (matches = rcssNum.exec(value)) &&
                                (matches[3] || "px") !== "px") {
                                elem.style[dimension] = value;
                                value = jQuery.css(elem, dimension);
                            }
                            return setPositiveNumber(elem, value, subtract);
                        }
                    };
                });
                jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
                    if (computed) {
                        return (parseFloat(curCSS(elem, "marginLeft")) ||
                            elem.getBoundingClientRect().left -
                                swap(elem, { marginLeft: 0 }, function () {
                                    return elem.getBoundingClientRect().left;
                                })) + "px";
                    }
                });
                // These hooks are used by animate to expand properties
                jQuery.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function (prefix, suffix) {
                    jQuery.cssHooks[prefix + suffix] = {
                        expand: function (value) {
                            var i = 0, expanded = {}, 
                            // Assumes a single number if not a string
                            parts = typeof value === "string" ? value.split(" ") : [value];
                            for (; i < 4; i++) {
                                expanded[prefix + cssExpand[i] + suffix] =
                                    parts[i] || parts[i - 2] || parts[0];
                            }
                            return expanded;
                        }
                    };
                    if (prefix !== "margin") {
                        jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
                    }
                });
                jQuery.fn.extend({
                    css: function (name, value) {
                        return access(this, function (elem, name, value) {
                            var styles, len, map = {}, i = 0;
                            if (Array.isArray(name)) {
                                styles = getStyles(elem);
                                len = name.length;
                                for (; i < len; i++) {
                                    map[name[i]] = jQuery.css(elem, name[i], false, styles);
                                }
                                return map;
                            }
                            return value !== undefined ?
                                jQuery.style(elem, name, value) :
                                jQuery.css(elem, name);
                        }, name, value, arguments.length > 1);
                    }
                });
                function Tween(elem, options, prop, end, easing) {
                    return new Tween.prototype.init(elem, options, prop, end, easing);
                }
                jQuery.Tween = Tween;
                Tween.prototype = {
                    constructor: Tween,
                    init: function (elem, options, prop, end, easing, unit) {
                        this.elem = elem;
                        this.prop = prop;
                        this.easing = easing || jQuery.easing._default;
                        this.options = options;
                        this.start = this.now = this.cur();
                        this.end = end;
                        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
                    },
                    cur: function () {
                        var hooks = Tween.propHooks[this.prop];
                        return hooks && hooks.get ?
                            hooks.get(this) :
                            Tween.propHooks._default.get(this);
                    },
                    run: function (percent) {
                        var eased, hooks = Tween.propHooks[this.prop];
                        if (this.options.duration) {
                            this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
                        }
                        else {
                            this.pos = eased = percent;
                        }
                        this.now = (this.end - this.start) * eased + this.start;
                        if (this.options.step) {
                            this.options.step.call(this.elem, this.now, this);
                        }
                        if (hooks && hooks.set) {
                            hooks.set(this);
                        }
                        else {
                            Tween.propHooks._default.set(this);
                        }
                        return this;
                    }
                };
                Tween.prototype.init.prototype = Tween.prototype;
                Tween.propHooks = {
                    _default: {
                        get: function (tween) {
                            var result;
                            // Use a property on the element directly when it is not a DOM element,
                            // or when there is no matching style property that exists.
                            if (tween.elem.nodeType !== 1 ||
                                tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                                return tween.elem[tween.prop];
                            }
                            // Passing an empty string as a 3rd parameter to .css will automatically
                            // attempt a parseFloat and fallback to a string if the parse fails.
                            // Simple values such as "10px" are parsed to Float;
                            // complex values such as "rotate(1rad)" are returned as-is.
                            result = jQuery.css(tween.elem, tween.prop, "");
                            // Empty strings, null, undefined and "auto" are converted to 0.
                            return !result || result === "auto" ? 0 : result;
                        },
                        set: function (tween) {
                            // Use step hook for back compat.
                            // Use cssHook if its there.
                            // Use .style if available and use plain properties where available.
                            if (jQuery.fx.step[tween.prop]) {
                                jQuery.fx.step[tween.prop](tween);
                            }
                            else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] ||
                                tween.elem.style[finalPropName(tween.prop)] != null)) {
                                jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                            }
                            else {
                                tween.elem[tween.prop] = tween.now;
                            }
                        }
                    }
                };
                // Support: IE <=9 only
                // Panic based approach to setting things on disconnected nodes
                Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                    set: function (tween) {
                        if (tween.elem.nodeType && tween.elem.parentNode) {
                            tween.elem[tween.prop] = tween.now;
                        }
                    }
                };
                jQuery.easing = {
                    linear: function (p) {
                        return p;
                    },
                    swing: function (p) {
                        return 0.5 - Math.cos(p * Math.PI) / 2;
                    },
                    _default: "swing"
                };
                jQuery.fx = Tween.prototype.init;
                // Back compat <1.8 extension point
                jQuery.fx.step = {};
                var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
                function schedule() {
                    if (inProgress) {
                        if (document.hidden === false && window.requestAnimationFrame) {
                            window.requestAnimationFrame(schedule);
                        }
                        else {
                            window.setTimeout(schedule, jQuery.fx.interval);
                        }
                        jQuery.fx.tick();
                    }
                }
                // Animations created synchronously will run synchronously
                function createFxNow() {
                    window.setTimeout(function () {
                        fxNow = undefined;
                    });
                    return (fxNow = Date.now());
                }
                // Generate parameters to create a standard animation
                function genFx(type, includeWidth) {
                    var which, i = 0, attrs = { height: type };
                    // If we include width, step value is 1 to do all cssExpand values,
                    // otherwise step value is 2 to skip over Left and Right
                    includeWidth = includeWidth ? 1 : 0;
                    for (; i < 4; i += 2 - includeWidth) {
                        which = cssExpand[i];
                        attrs["margin" + which] = attrs["padding" + which] = type;
                    }
                    if (includeWidth) {
                        attrs.opacity = attrs.width = type;
                    }
                    return attrs;
                }
                function createTween(value, prop, animation) {
                    var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
                    for (; index < length; index++) {
                        if ((tween = collection[index].call(animation, prop, value))) {
                            // We're done with this property
                            return tween;
                        }
                    }
                }
                function defaultPrefilter(elem, props, opts) {
                    var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
                    // Queue-skipping animations hijack the fx hooks
                    if (!opts.queue) {
                        hooks = jQuery._queueHooks(elem, "fx");
                        if (hooks.unqueued == null) {
                            hooks.unqueued = 0;
                            oldfire = hooks.empty.fire;
                            hooks.empty.fire = function () {
                                if (!hooks.unqueued) {
                                    oldfire();
                                }
                            };
                        }
                        hooks.unqueued++;
                        anim.always(function () {
                            // Ensure the complete handler is called before this completes
                            anim.always(function () {
                                hooks.unqueued--;
                                if (!jQuery.queue(elem, "fx").length) {
                                    hooks.empty.fire();
                                }
                            });
                        });
                    }
                    // Detect show/hide animations
                    for (prop in props) {
                        value = props[prop];
                        if (rfxtypes.test(value)) {
                            delete props[prop];
                            toggle = toggle || value === "toggle";
                            if (value === (hidden ? "hide" : "show")) {
                                // Pretend to be hidden if this is a "show" and
                                // there is still data from a stopped show/hide
                                if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                                    hidden = true;
                                    // Ignore all other no-op show/hide data
                                }
                                else {
                                    continue;
                                }
                            }
                            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                        }
                    }
                    // Bail out if this is a no-op like .hide().hide()
                    propTween = !jQuery.isEmptyObject(props);
                    if (!propTween && jQuery.isEmptyObject(orig)) {
                        return;
                    }
                    // Restrict "overflow" and "display" styles during box animations
                    if (isBox && elem.nodeType === 1) {
                        // Support: IE <=9 - 11, Edge 12 - 15
                        // Record all 3 overflow attributes because IE does not infer the shorthand
                        // from identically-valued overflowX and overflowY and Edge just mirrors
                        // the overflowX value there.
                        opts.overflow = [style.overflow, style.overflowX, style.overflowY];
                        // Identify a display type, preferring old show/hide data over the CSS cascade
                        restoreDisplay = dataShow && dataShow.display;
                        if (restoreDisplay == null) {
                            restoreDisplay = dataPriv.get(elem, "display");
                        }
                        display = jQuery.css(elem, "display");
                        if (display === "none") {
                            if (restoreDisplay) {
                                display = restoreDisplay;
                            }
                            else {
                                // Get nonempty value(s) by temporarily forcing visibility
                                showHide([elem], true);
                                restoreDisplay = elem.style.display || restoreDisplay;
                                display = jQuery.css(elem, "display");
                                showHide([elem]);
                            }
                        }
                        // Animate inline elements as inline-block
                        if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                            if (jQuery.css(elem, "float") === "none") {
                                // Restore the original display value at the end of pure show/hide animations
                                if (!propTween) {
                                    anim.done(function () {
                                        style.display = restoreDisplay;
                                    });
                                    if (restoreDisplay == null) {
                                        display = style.display;
                                        restoreDisplay = display === "none" ? "" : display;
                                    }
                                }
                                style.display = "inline-block";
                            }
                        }
                    }
                    if (opts.overflow) {
                        style.overflow = "hidden";
                        anim.always(function () {
                            style.overflow = opts.overflow[0];
                            style.overflowX = opts.overflow[1];
                            style.overflowY = opts.overflow[2];
                        });
                    }
                    // Implement show/hide animations
                    propTween = false;
                    for (prop in orig) {
                        // General show/hide setup for this element animation
                        if (!propTween) {
                            if (dataShow) {
                                if ("hidden" in dataShow) {
                                    hidden = dataShow.hidden;
                                }
                            }
                            else {
                                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
                            }
                            // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                            if (toggle) {
                                dataShow.hidden = !hidden;
                            }
                            // Show elements before animating them
                            if (hidden) {
                                showHide([elem], true);
                            }
                            /* eslint-disable no-loop-func */
                            anim.done(function () {
                                /* eslint-enable no-loop-func */
                                // The final step of a "hide" animation is actually hiding the element
                                if (!hidden) {
                                    showHide([elem]);
                                }
                                dataPriv.remove(elem, "fxshow");
                                for (prop in orig) {
                                    jQuery.style(elem, prop, orig[prop]);
                                }
                            });
                        }
                        // Per-property setup
                        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                        if (!(prop in dataShow)) {
                            dataShow[prop] = propTween.start;
                            if (hidden) {
                                propTween.end = propTween.start;
                                propTween.start = 0;
                            }
                        }
                    }
                }
                function propFilter(props, specialEasing) {
                    var index, name, easing, value, hooks;
                    // camelCase, specialEasing and expand cssHook pass
                    for (index in props) {
                        name = camelCase(index);
                        easing = specialEasing[name];
                        value = props[index];
                        if (Array.isArray(value)) {
                            easing = value[1];
                            value = props[index] = value[0];
                        }
                        if (index !== name) {
                            props[name] = value;
                            delete props[index];
                        }
                        hooks = jQuery.cssHooks[name];
                        if (hooks && "expand" in hooks) {
                            value = hooks.expand(value);
                            delete props[name];
                            // Not quite $.extend, this won't overwrite existing keys.
                            // Reusing 'index' because we have the correct "name"
                            for (index in value) {
                                if (!(index in props)) {
                                    props[index] = value[index];
                                    specialEasing[index] = easing;
                                }
                            }
                        }
                        else {
                            specialEasing[name] = easing;
                        }
                    }
                }
                function Animation(elem, properties, options) {
                    var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function () {
                        // Don't match elem in the :animated selector
                        delete tick.elem;
                    }), tick = function () {
                        if (stopped) {
                            return false;
                        }
                        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), 
                        // Support: Android 2.3 only
                        // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                        temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
                        for (; index < length; index++) {
                            animation.tweens[index].run(percent);
                        }
                        deferred.notifyWith(elem, [animation, percent, remaining]);
                        // If there's more to do, yield
                        if (percent < 1 && length) {
                            return remaining;
                        }
                        // If this was an empty animation, synthesize a final progress notification
                        if (!length) {
                            deferred.notifyWith(elem, [animation, 1, 0]);
                        }
                        // Resolve the animation and report its conclusion
                        deferred.resolveWith(elem, [animation]);
                        return false;
                    }, animation = deferred.promise({
                        elem: elem,
                        props: jQuery.extend({}, properties),
                        opts: jQuery.extend(true, {
                            specialEasing: {},
                            easing: jQuery.easing._default
                        }, options),
                        originalProperties: properties,
                        originalOptions: options,
                        startTime: fxNow || createFxNow(),
                        duration: options.duration,
                        tweens: [],
                        createTween: function (prop, end) {
                            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                            animation.tweens.push(tween);
                            return tween;
                        },
                        stop: function (gotoEnd) {
                            var index = 0, 
                            // If we are going to the end, we want to run all the tweens
                            // otherwise we skip this part
                            length = gotoEnd ? animation.tweens.length : 0;
                            if (stopped) {
                                return this;
                            }
                            stopped = true;
                            for (; index < length; index++) {
                                animation.tweens[index].run(1);
                            }
                            // Resolve when we played the last frame; otherwise, reject
                            if (gotoEnd) {
                                deferred.notifyWith(elem, [animation, 1, 0]);
                                deferred.resolveWith(elem, [animation, gotoEnd]);
                            }
                            else {
                                deferred.rejectWith(elem, [animation, gotoEnd]);
                            }
                            return this;
                        }
                    }), props = animation.props;
                    propFilter(props, animation.opts.specialEasing);
                    for (; index < length; index++) {
                        result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
                        if (result) {
                            if (isFunction(result.stop)) {
                                jQuery._queueHooks(animation.elem, animation.opts.queue).stop =
                                    result.stop.bind(result);
                            }
                            return result;
                        }
                    }
                    jQuery.map(props, createTween, animation);
                    if (isFunction(animation.opts.start)) {
                        animation.opts.start.call(elem, animation);
                    }
                    // Attach callbacks from options
                    animation
                        .progress(animation.opts.progress)
                        .done(animation.opts.done, animation.opts.complete)
                        .fail(animation.opts.fail)
                        .always(animation.opts.always);
                    jQuery.fx.timer(jQuery.extend(tick, {
                        elem: elem,
                        anim: animation,
                        queue: animation.opts.queue
                    }));
                    return animation;
                }
                jQuery.Animation = jQuery.extend(Animation, {
                    tweeners: {
                        "*": [function (prop, value) {
                                var tween = this.createTween(prop, value);
                                adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                                return tween;
                            }]
                    },
                    tweener: function (props, callback) {
                        if (isFunction(props)) {
                            callback = props;
                            props = ["*"];
                        }
                        else {
                            props = props.match(rnothtmlwhite);
                        }
                        var prop, index = 0, length = props.length;
                        for (; index < length; index++) {
                            prop = props[index];
                            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                            Animation.tweeners[prop].unshift(callback);
                        }
                    },
                    prefilters: [defaultPrefilter],
                    prefilter: function (callback, prepend) {
                        if (prepend) {
                            Animation.prefilters.unshift(callback);
                        }
                        else {
                            Animation.prefilters.push(callback);
                        }
                    }
                });
                jQuery.speed = function (speed, easing, fn) {
                    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                        complete: fn || !fn && easing ||
                            isFunction(speed) && speed,
                        duration: speed,
                        easing: fn && easing || easing && !isFunction(easing) && easing
                    };
                    // Go to the end state if fx are off
                    if (jQuery.fx.off) {
                        opt.duration = 0;
                    }
                    else {
                        if (typeof opt.duration !== "number") {
                            if (opt.duration in jQuery.fx.speeds) {
                                opt.duration = jQuery.fx.speeds[opt.duration];
                            }
                            else {
                                opt.duration = jQuery.fx.speeds._default;
                            }
                        }
                    }
                    // Normalize opt.queue - true/undefined/null -> "fx"
                    if (opt.queue == null || opt.queue === true) {
                        opt.queue = "fx";
                    }
                    // Queueing
                    opt.old = opt.complete;
                    opt.complete = function () {
                        if (isFunction(opt.old)) {
                            opt.old.call(this);
                        }
                        if (opt.queue) {
                            jQuery.dequeue(this, opt.queue);
                        }
                    };
                    return opt;
                };
                jQuery.fn.extend({
                    fadeTo: function (speed, to, easing, callback) {
                        // Show any hidden elements after setting opacity to 0
                        return this.filter(isHiddenWithinTree).css("opacity", 0).show()
                            // Animate to the value specified
                            .end().animate({ opacity: to }, speed, easing, callback);
                    },
                    animate: function (prop, speed, easing, callback) {
                        var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function () {
                            // Operate on a copy of prop so per-property easing won't be lost
                            var anim = Animation(this, jQuery.extend({}, prop), optall);
                            // Empty animations, or finishing resolves immediately
                            if (empty || dataPriv.get(this, "finish")) {
                                anim.stop(true);
                            }
                        };
                        doAnimation.finish = doAnimation;
                        return empty || optall.queue === false ?
                            this.each(doAnimation) :
                            this.queue(optall.queue, doAnimation);
                    },
                    stop: function (type, clearQueue, gotoEnd) {
                        var stopQueue = function (hooks) {
                            var stop = hooks.stop;
                            delete hooks.stop;
                            stop(gotoEnd);
                        };
                        if (typeof type !== "string") {
                            gotoEnd = clearQueue;
                            clearQueue = type;
                            type = undefined;
                        }
                        if (clearQueue) {
                            this.queue(type || "fx", []);
                        }
                        return this.each(function () {
                            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                            if (index) {
                                if (data[index] && data[index].stop) {
                                    stopQueue(data[index]);
                                }
                            }
                            else {
                                for (index in data) {
                                    if (data[index] && data[index].stop && rrun.test(index)) {
                                        stopQueue(data[index]);
                                    }
                                }
                            }
                            for (index = timers.length; index--;) {
                                if (timers[index].elem === this &&
                                    (type == null || timers[index].queue === type)) {
                                    timers[index].anim.stop(gotoEnd);
                                    dequeue = false;
                                    timers.splice(index, 1);
                                }
                            }
                            // Start the next in the queue if the last step wasn't forced.
                            // Timers currently will call their complete callbacks, which
                            // will dequeue but only if they were gotoEnd.
                            if (dequeue || !gotoEnd) {
                                jQuery.dequeue(this, type);
                            }
                        });
                    },
                    finish: function (type) {
                        if (type !== false) {
                            type = type || "fx";
                        }
                        return this.each(function () {
                            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                            // Enable finishing flag on private data
                            data.finish = true;
                            // Empty the queue first
                            jQuery.queue(this, type, []);
                            if (hooks && hooks.stop) {
                                hooks.stop.call(this, true);
                            }
                            // Look for any active animations, and finish them
                            for (index = timers.length; index--;) {
                                if (timers[index].elem === this && timers[index].queue === type) {
                                    timers[index].anim.stop(true);
                                    timers.splice(index, 1);
                                }
                            }
                            // Look for any animations in the old queue and finish them
                            for (index = 0; index < length; index++) {
                                if (queue[index] && queue[index].finish) {
                                    queue[index].finish.call(this);
                                }
                            }
                            // Turn off finishing flag
                            delete data.finish;
                        });
                    }
                });
                jQuery.each(["toggle", "show", "hide"], function (_i, name) {
                    var cssFn = jQuery.fn[name];
                    jQuery.fn[name] = function (speed, easing, callback) {
                        return speed == null || typeof speed === "boolean" ?
                            cssFn.apply(this, arguments) :
                            this.animate(genFx(name, true), speed, easing, callback);
                    };
                });
                // Generate shortcuts for custom animations
                jQuery.each({
                    slideDown: genFx("show"),
                    slideUp: genFx("hide"),
                    slideToggle: genFx("toggle"),
                    fadeIn: { opacity: "show" },
                    fadeOut: { opacity: "hide" },
                    fadeToggle: { opacity: "toggle" }
                }, function (name, props) {
                    jQuery.fn[name] = function (speed, easing, callback) {
                        return this.animate(props, speed, easing, callback);
                    };
                });
                jQuery.timers = [];
                jQuery.fx.tick = function () {
                    var timer, i = 0, timers = jQuery.timers;
                    fxNow = Date.now();
                    for (; i < timers.length; i++) {
                        timer = timers[i];
                        // Run the timer and safely remove it when done (allowing for external removal)
                        if (!timer() && timers[i] === timer) {
                            timers.splice(i--, 1);
                        }
                    }
                    if (!timers.length) {
                        jQuery.fx.stop();
                    }
                    fxNow = undefined;
                };
                jQuery.fx.timer = function (timer) {
                    jQuery.timers.push(timer);
                    jQuery.fx.start();
                };
                jQuery.fx.interval = 13;
                jQuery.fx.start = function () {
                    if (inProgress) {
                        return;
                    }
                    inProgress = true;
                    schedule();
                };
                jQuery.fx.stop = function () {
                    inProgress = null;
                };
                jQuery.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    // Default speed
                    _default: 400
                };
                // Based off of the plugin by Clint Helfers, with permission.
                // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
                jQuery.fn.delay = function (time, type) {
                    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
                    type = type || "fx";
                    return this.queue(type, function (next, hooks) {
                        var timeout = window.setTimeout(next, time);
                        hooks.stop = function () {
                            window.clearTimeout(timeout);
                        };
                    });
                };
                (function () {
                    var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
                    input.type = "checkbox";
                    // Support: Android <=4.3 only
                    // Default value for a checkbox should be "on"
                    support.checkOn = input.value !== "";
                    // Support: IE <=11 only
                    // Must access selectedIndex to make default options select
                    support.optSelected = opt.selected;
                    // Support: IE <=11 only
                    // An input loses its value after becoming a radio
                    input = document.createElement("input");
                    input.value = "t";
                    input.type = "radio";
                    support.radioValue = input.value === "t";
                })();
                var boolHook, attrHandle = jQuery.expr.attrHandle;
                jQuery.fn.extend({
                    attr: function (name, value) {
                        return access(this, jQuery.attr, name, value, arguments.length > 1);
                    },
                    removeAttr: function (name) {
                        return this.each(function () {
                            jQuery.removeAttr(this, name);
                        });
                    }
                });
                jQuery.extend({
                    attr: function (elem, name, value) {
                        var ret, hooks, nType = elem.nodeType;
                        // Don't get/set attributes on text, comment and attribute nodes
                        if (nType === 3 || nType === 8 || nType === 2) {
                            return;
                        }
                        // Fallback to prop when attributes are not supported
                        if (typeof elem.getAttribute === "undefined") {
                            return jQuery.prop(elem, name, value);
                        }
                        // Attribute hooks are determined by the lowercase version
                        // Grab necessary hook if one is defined
                        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                            hooks = jQuery.attrHooks[name.toLowerCase()] ||
                                (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
                        }
                        if (value !== undefined) {
                            if (value === null) {
                                jQuery.removeAttr(elem, name);
                                return;
                            }
                            if (hooks && "set" in hooks &&
                                (ret = hooks.set(elem, value, name)) !== undefined) {
                                return ret;
                            }
                            elem.setAttribute(name, value + "");
                            return value;
                        }
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                            return ret;
                        }
                        ret = jQuery.find.attr(elem, name);
                        // Non-existent attributes return null, we normalize to undefined
                        return ret == null ? undefined : ret;
                    },
                    attrHooks: {
                        type: {
                            set: function (elem, value) {
                                if (!support.radioValue && value === "radio" &&
                                    nodeName(elem, "input")) {
                                    var val = elem.value;
                                    elem.setAttribute("type", value);
                                    if (val) {
                                        elem.value = val;
                                    }
                                    return value;
                                }
                            }
                        }
                    },
                    removeAttr: function (elem, value) {
                        var name, i = 0, 
                        // Attribute names can contain non-HTML whitespace characters
                        // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
                        attrNames = value && value.match(rnothtmlwhite);
                        if (attrNames && elem.nodeType === 1) {
                            while ((name = attrNames[i++])) {
                                elem.removeAttribute(name);
                            }
                        }
                    }
                });
                // Hooks for boolean attributes
                boolHook = {
                    set: function (elem, value, name) {
                        if (value === false) {
                            // Remove boolean attributes when set to false
                            jQuery.removeAttr(elem, name);
                        }
                        else {
                            elem.setAttribute(name, name);
                        }
                        return name;
                    }
                };
                jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
                    var getter = attrHandle[name] || jQuery.find.attr;
                    attrHandle[name] = function (elem, name, isXML) {
                        var ret, handle, lowercaseName = name.toLowerCase();
                        if (!isXML) {
                            // Avoid an infinite loop by temporarily removing this function from the getter
                            handle = attrHandle[lowercaseName];
                            attrHandle[lowercaseName] = ret;
                            ret = getter(elem, name, isXML) != null ?
                                lowercaseName :
                                null;
                            attrHandle[lowercaseName] = handle;
                        }
                        return ret;
                    };
                });
                var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
                jQuery.fn.extend({
                    prop: function (name, value) {
                        return access(this, jQuery.prop, name, value, arguments.length > 1);
                    },
                    removeProp: function (name) {
                        return this.each(function () {
                            delete this[jQuery.propFix[name] || name];
                        });
                    }
                });
                jQuery.extend({
                    prop: function (elem, name, value) {
                        var ret, hooks, nType = elem.nodeType;
                        // Don't get/set properties on text, comment and attribute nodes
                        if (nType === 3 || nType === 8 || nType === 2) {
                            return;
                        }
                        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                            // Fix name and attach hooks
                            name = jQuery.propFix[name] || name;
                            hooks = jQuery.propHooks[name];
                        }
                        if (value !== undefined) {
                            if (hooks && "set" in hooks &&
                                (ret = hooks.set(elem, value, name)) !== undefined) {
                                return ret;
                            }
                            return (elem[name] = value);
                        }
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                            return ret;
                        }
                        return elem[name];
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (elem) {
                                // Support: IE <=9 - 11 only
                                // elem.tabIndex doesn't always return the
                                // correct value when it hasn't been explicitly set
                                // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                                // Use proper attribute retrieval(#12072)
                                var tabindex = jQuery.find.attr(elem, "tabindex");
                                if (tabindex) {
                                    return parseInt(tabindex, 10);
                                }
                                if (rfocusable.test(elem.nodeName) ||
                                    rclickable.test(elem.nodeName) &&
                                        elem.href) {
                                    return 0;
                                }
                                return -1;
                            }
                        }
                    },
                    propFix: {
                        "for": "htmlFor",
                        "class": "className"
                    }
                });
                // Support: IE <=11 only
                // Accessing the selectedIndex property
                // forces the browser to respect setting selected
                // on the option
                // The getter ensures a default option is selected
                // when in an optgroup
                // eslint rule "no-unused-expressions" is disabled for this code
                // since it considers such accessions noop
                if (!support.optSelected) {
                    jQuery.propHooks.selected = {
                        get: function (elem) {
                            /* eslint no-unused-expressions: "off" */
                            var parent = elem.parentNode;
                            if (parent && parent.parentNode) {
                                parent.parentNode.selectedIndex;
                            }
                            return null;
                        },
                        set: function (elem) {
                            /* eslint no-unused-expressions: "off" */
                            var parent = elem.parentNode;
                            if (parent) {
                                parent.selectedIndex;
                                if (parent.parentNode) {
                                    parent.parentNode.selectedIndex;
                                }
                            }
                        }
                    };
                }
                jQuery.each([
                    "tabIndex",
                    "readOnly",
                    "maxLength",
                    "cellSpacing",
                    "cellPadding",
                    "rowSpan",
                    "colSpan",
                    "useMap",
                    "frameBorder",
                    "contentEditable"
                ], function () {
                    jQuery.propFix[this.toLowerCase()] = this;
                });
                // Strip and collapse whitespace according to HTML spec
                // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
                function stripAndCollapse(value) {
                    var tokens = value.match(rnothtmlwhite) || [];
                    return tokens.join(" ");
                }
                function getClass(elem) {
                    return elem.getAttribute && elem.getAttribute("class") || "";
                }
                function classesToArray(value) {
                    if (Array.isArray(value)) {
                        return value;
                    }
                    if (typeof value === "string") {
                        return value.match(rnothtmlwhite) || [];
                    }
                    return [];
                }
                jQuery.fn.extend({
                    addClass: function (value) {
                        var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                        if (isFunction(value)) {
                            return this.each(function (j) {
                                jQuery(this).addClass(value.call(this, j, getClass(this)));
                            });
                        }
                        classes = classesToArray(value);
                        if (classes.length) {
                            while ((elem = this[i++])) {
                                curValue = getClass(elem);
                                cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");
                                if (cur) {
                                    j = 0;
                                    while ((clazz = classes[j++])) {
                                        if (cur.indexOf(" " + clazz + " ") < 0) {
                                            cur += clazz + " ";
                                        }
                                    }
                                    // Only assign if different to avoid unneeded rendering.
                                    finalValue = stripAndCollapse(cur);
                                    if (curValue !== finalValue) {
                                        elem.setAttribute("class", finalValue);
                                    }
                                }
                            }
                        }
                        return this;
                    },
                    removeClass: function (value) {
                        var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                        if (isFunction(value)) {
                            return this.each(function (j) {
                                jQuery(this).removeClass(value.call(this, j, getClass(this)));
                            });
                        }
                        if (!arguments.length) {
                            return this.attr("class", "");
                        }
                        classes = classesToArray(value);
                        if (classes.length) {
                            while ((elem = this[i++])) {
                                curValue = getClass(elem);
                                // This expression is here for better compressibility (see addClass)
                                cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");
                                if (cur) {
                                    j = 0;
                                    while ((clazz = classes[j++])) {
                                        // Remove *all* instances
                                        while (cur.indexOf(" " + clazz + " ") > -1) {
                                            cur = cur.replace(" " + clazz + " ", " ");
                                        }
                                    }
                                    // Only assign if different to avoid unneeded rendering.
                                    finalValue = stripAndCollapse(cur);
                                    if (curValue !== finalValue) {
                                        elem.setAttribute("class", finalValue);
                                    }
                                }
                            }
                        }
                        return this;
                    },
                    toggleClass: function (value, stateVal) {
                        var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
                        if (typeof stateVal === "boolean" && isValidValue) {
                            return stateVal ? this.addClass(value) : this.removeClass(value);
                        }
                        if (isFunction(value)) {
                            return this.each(function (i) {
                                jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                            });
                        }
                        return this.each(function () {
                            var className, i, self, classNames;
                            if (isValidValue) {
                                // Toggle individual class names
                                i = 0;
                                self = jQuery(this);
                                classNames = classesToArray(value);
                                while ((className = classNames[i++])) {
                                    // Check each className given, space separated list
                                    if (self.hasClass(className)) {
                                        self.removeClass(className);
                                    }
                                    else {
                                        self.addClass(className);
                                    }
                                }
                                // Toggle whole class name
                            }
                            else if (value === undefined || type === "boolean") {
                                className = getClass(this);
                                if (className) {
                                    // Store className if set
                                    dataPriv.set(this, "__className__", className);
                                }
                                // If the element has a class name or if we're passed `false`,
                                // then remove the whole classname (if there was one, the above saved it).
                                // Otherwise bring back whatever was previously saved (if anything),
                                // falling back to the empty string if nothing was stored.
                                if (this.setAttribute) {
                                    this.setAttribute("class", className || value === false ?
                                        "" :
                                        dataPriv.get(this, "__className__") || "");
                                }
                            }
                        });
                    },
                    hasClass: function (selector) {
                        var className, elem, i = 0;
                        className = " " + selector + " ";
                        while ((elem = this[i++])) {
                            if (elem.nodeType === 1 &&
                                (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                                return true;
                            }
                        }
                        return false;
                    }
                });
                var rreturn = /\r/g;
                jQuery.fn.extend({
                    val: function (value) {
                        var hooks, ret, valueIsFunction, elem = this[0];
                        if (!arguments.length) {
                            if (elem) {
                                hooks = jQuery.valHooks[elem.type] ||
                                    jQuery.valHooks[elem.nodeName.toLowerCase()];
                                if (hooks &&
                                    "get" in hooks &&
                                    (ret = hooks.get(elem, "value")) !== undefined) {
                                    return ret;
                                }
                                ret = elem.value;
                                // Handle most common string cases
                                if (typeof ret === "string") {
                                    return ret.replace(rreturn, "");
                                }
                                // Handle cases where value is null/undef or number
                                return ret == null ? "" : ret;
                            }
                            return;
                        }
                        valueIsFunction = isFunction(value);
                        return this.each(function (i) {
                            var val;
                            if (this.nodeType !== 1) {
                                return;
                            }
                            if (valueIsFunction) {
                                val = value.call(this, i, jQuery(this).val());
                            }
                            else {
                                val = value;
                            }
                            // Treat null/undefined as ""; convert numbers to string
                            if (val == null) {
                                val = "";
                            }
                            else if (typeof val === "number") {
                                val += "";
                            }
                            else if (Array.isArray(val)) {
                                val = jQuery.map(val, function (value) {
                                    return value == null ? "" : value + "";
                                });
                            }
                            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                            // If set returns undefined, fall back to normal setting
                            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                                this.value = val;
                            }
                        });
                    }
                });
                jQuery.extend({
                    valHooks: {
                        option: {
                            get: function (elem) {
                                var val = jQuery.find.attr(elem, "value");
                                return val != null ?
                                    val :
                                    // Support: IE <=10 - 11 only
                                    // option.text throws exceptions (#14686, #14858)
                                    // Strip and collapse whitespace
                                    // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                                    stripAndCollapse(jQuery.text(elem));
                            }
                        },
                        select: {
                            get: function (elem) {
                                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                                if (index < 0) {
                                    i = max;
                                }
                                else {
                                    i = one ? index : 0;
                                }
                                // Loop through all the selected options
                                for (; i < max; i++) {
                                    option = options[i];
                                    // Support: IE <=9 only
                                    // IE8-9 doesn't update selected after form reset (#2551)
                                    if ((option.selected || i === index) &&
                                        // Don't return options that are disabled or in a disabled optgroup
                                        !option.disabled &&
                                        (!option.parentNode.disabled ||
                                            !nodeName(option.parentNode, "optgroup"))) {
                                        // Get the specific value for the option
                                        value = jQuery(option).val();
                                        // We don't need an array for one selects
                                        if (one) {
                                            return value;
                                        }
                                        // Multi-Selects return an array
                                        values.push(value);
                                    }
                                }
                                return values;
                            },
                            set: function (elem, value) {
                                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                                while (i--) {
                                    option = options[i];
                                    /* eslint-disable no-cond-assign */
                                    if (option.selected =
                                        jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                                        optionSet = true;
                                    }
                                    /* eslint-enable no-cond-assign */
                                }
                                // Force browsers to behave consistently when non-matching value is set
                                if (!optionSet) {
                                    elem.selectedIndex = -1;
                                }
                                return values;
                            }
                        }
                    }
                });
                // Radios and checkboxes getter/setter
                jQuery.each(["radio", "checkbox"], function () {
                    jQuery.valHooks[this] = {
                        set: function (elem, value) {
                            if (Array.isArray(value)) {
                                return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
                            }
                        }
                    };
                    if (!support.checkOn) {
                        jQuery.valHooks[this].get = function (elem) {
                            return elem.getAttribute("value") === null ? "on" : elem.value;
                        };
                    }
                });
                // Return jQuery for attributes-only inclusion
                support.focusin = "onfocusin" in window;
                var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function (e) {
                    e.stopPropagation();
                };
                jQuery.extend(jQuery.event, {
                    trigger: function (event, data, elem, onlyHandlers) {
                        var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                        cur = lastElement = tmp = elem = elem || document;
                        // Don't do events on text and comment nodes
                        if (elem.nodeType === 3 || elem.nodeType === 8) {
                            return;
                        }
                        // focus/blur morphs to focusin/out; ensure we're not firing them right now
                        if (rfocusMorph.test(type + jQuery.event.triggered)) {
                            return;
                        }
                        if (type.indexOf(".") > -1) {
                            // Namespaced trigger; create a regexp to match event type in handle()
                            namespaces = type.split(".");
                            type = namespaces.shift();
                            namespaces.sort();
                        }
                        ontype = type.indexOf(":") < 0 && "on" + type;
                        // Caller can pass in a jQuery.Event object, Object, or just an event type string
                        event = event[jQuery.expando] ?
                            event :
                            new jQuery.Event(type, typeof event === "object" && event);
                        // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
                        event.isTrigger = onlyHandlers ? 2 : 3;
                        event.namespace = namespaces.join(".");
                        event.rnamespace = event.namespace ?
                            new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") :
                            null;
                        // Clean up the event in case it is being reused
                        event.result = undefined;
                        if (!event.target) {
                            event.target = elem;
                        }
                        // Clone any incoming data and prepend the event, creating the handler arg list
                        data = data == null ?
                            [event] :
                            jQuery.makeArray(data, [event]);
                        // Allow special events to draw outside the lines
                        special = jQuery.event.special[type] || {};
                        if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                            return;
                        }
                        // Determine event propagation path in advance, per W3C events spec (#9951)
                        // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
                        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                            bubbleType = special.delegateType || type;
                            if (!rfocusMorph.test(bubbleType + type)) {
                                cur = cur.parentNode;
                            }
                            for (; cur; cur = cur.parentNode) {
                                eventPath.push(cur);
                                tmp = cur;
                            }
                            // Only add window if we got to document (e.g., not plain obj or detached DOM)
                            if (tmp === (elem.ownerDocument || document)) {
                                eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                            }
                        }
                        // Fire handlers on the event path
                        i = 0;
                        while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                            lastElement = cur;
                            event.type = i > 1 ?
                                bubbleType :
                                special.bindType || type;
                            // jQuery handler
                            handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] &&
                                dataPriv.get(cur, "handle");
                            if (handle) {
                                handle.apply(cur, data);
                            }
                            // Native handler
                            handle = ontype && cur[ontype];
                            if (handle && handle.apply && acceptData(cur)) {
                                event.result = handle.apply(cur, data);
                                if (event.result === false) {
                                    event.preventDefault();
                                }
                            }
                        }
                        event.type = type;
                        // If nobody prevented the default action, do it now
                        if (!onlyHandlers && !event.isDefaultPrevented()) {
                            if ((!special._default ||
                                special._default.apply(eventPath.pop(), data) === false) &&
                                acceptData(elem)) {
                                // Call a native DOM method on the target with the same name as the event.
                                // Don't do default actions on window, that's where global variables be (#6170)
                                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                                    // Don't re-trigger an onFOO event when we call its FOO() method
                                    tmp = elem[ontype];
                                    if (tmp) {
                                        elem[ontype] = null;
                                    }
                                    // Prevent re-triggering of the same event, since we already bubbled it above
                                    jQuery.event.triggered = type;
                                    if (event.isPropagationStopped()) {
                                        lastElement.addEventListener(type, stopPropagationCallback);
                                    }
                                    elem[type]();
                                    if (event.isPropagationStopped()) {
                                        lastElement.removeEventListener(type, stopPropagationCallback);
                                    }
                                    jQuery.event.triggered = undefined;
                                    if (tmp) {
                                        elem[ontype] = tmp;
                                    }
                                }
                            }
                        }
                        return event.result;
                    },
                    // Piggyback on a donor event to simulate a different one
                    // Used only for `focus(in | out)` events
                    simulate: function (type, elem, event) {
                        var e = jQuery.extend(new jQuery.Event(), event, {
                            type: type,
                            isSimulated: true
                        });
                        jQuery.event.trigger(e, null, elem);
                    }
                });
                jQuery.fn.extend({
                    trigger: function (type, data) {
                        return this.each(function () {
                            jQuery.event.trigger(type, data, this);
                        });
                    },
                    triggerHandler: function (type, data) {
                        var elem = this[0];
                        if (elem) {
                            return jQuery.event.trigger(type, data, elem, true);
                        }
                    }
                });
                // Support: Firefox <=44
                // Firefox doesn't have focus(in | out) events
                // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
                //
                // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
                // focus(in | out) events fire after focus & blur events,
                // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
                // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
                if (!support.focusin) {
                    jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {
                        // Attach a single capturing handler on the document while someone wants focusin/focusout
                        var handler = function (event) {
                            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
                        };
                        jQuery.event.special[fix] = {
                            setup: function () {
                                // Handle: regular nodes (via `this.ownerDocument`), window
                                // (via `this.document`) & document (via `this`).
                                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                                if (!attaches) {
                                    doc.addEventListener(orig, handler, true);
                                }
                                dataPriv.access(doc, fix, (attaches || 0) + 1);
                            },
                            teardown: function () {
                                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                                if (!attaches) {
                                    doc.removeEventListener(orig, handler, true);
                                    dataPriv.remove(doc, fix);
                                }
                                else {
                                    dataPriv.access(doc, fix, attaches);
                                }
                            }
                        };
                    });
                }
                var location = window.location;
                var nonce = { guid: Date.now() };
                var rquery = (/\?/);
                // Cross-browser xml parsing
                jQuery.parseXML = function (data) {
                    var xml;
                    if (!data || typeof data !== "string") {
                        return null;
                    }
                    // Support: IE 9 - 11 only
                    // IE throws on parseFromString with invalid input.
                    try {
                        xml = (new window.DOMParser()).parseFromString(data, "text/xml");
                    }
                    catch (e) {
                        xml = undefined;
                    }
                    if (!xml || xml.getElementsByTagName("parsererror").length) {
                        jQuery.error("Invalid XML: " + data);
                    }
                    return xml;
                };
                var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
                function buildParams(prefix, obj, traditional, add) {
                    var name;
                    if (Array.isArray(obj)) {
                        // Serialize array item.
                        jQuery.each(obj, function (i, v) {
                            if (traditional || rbracket.test(prefix)) {
                                // Treat each array item as a scalar.
                                add(prefix, v);
                            }
                            else {
                                // Item is non-scalar (array or object), encode its numeric index.
                                buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
                            }
                        });
                    }
                    else if (!traditional && toType(obj) === "object") {
                        // Serialize object item.
                        for (name in obj) {
                            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
                        }
                    }
                    else {
                        // Serialize scalar item.
                        add(prefix, obj);
                    }
                }
                // Serialize an array of form elements or a set of
                // key/values into a query string
                jQuery.param = function (a, traditional) {
                    var prefix, s = [], add = function (key, valueOrFunction) {
                        // If value is a function, invoke it and use its return value
                        var value = isFunction(valueOrFunction) ?
                            valueOrFunction() :
                            valueOrFunction;
                        s[s.length] = encodeURIComponent(key) + "=" +
                            encodeURIComponent(value == null ? "" : value);
                    };
                    if (a == null) {
                        return "";
                    }
                    // If an array was passed in, assume that it is an array of form elements.
                    if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
                        // Serialize the form elements
                        jQuery.each(a, function () {
                            add(this.name, this.value);
                        });
                    }
                    else {
                        // If traditional, encode the "old" way (the way 1.3.2 or older
                        // did it), otherwise encode params recursively.
                        for (prefix in a) {
                            buildParams(prefix, a[prefix], traditional, add);
                        }
                    }
                    // Return the resulting serialization
                    return s.join("&");
                };
                jQuery.fn.extend({
                    serialize: function () {
                        return jQuery.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            // Can add propHook for "elements" to filter or add form elements
                            var elements = jQuery.prop(this, "elements");
                            return elements ? jQuery.makeArray(elements) : this;
                        })
                            .filter(function () {
                            var type = this.type;
                            // Use .is( ":disabled" ) so that fieldset[disabled] works
                            return this.name && !jQuery(this).is(":disabled") &&
                                rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
                                (this.checked || !rcheckableType.test(type));
                        })
                            .map(function (_i, elem) {
                            var val = jQuery(this).val();
                            if (val == null) {
                                return null;
                            }
                            if (Array.isArray(val)) {
                                return jQuery.map(val, function (val) {
                                    return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
                                });
                            }
                            return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
                        }).get();
                    }
                });
                var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, 
                // #7653, #8125, #8152: local protocol detection
                rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, 
                /* Prefilters
                 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
                 * 2) These are called:
                 *    - BEFORE asking for a transport
                 *    - AFTER param serialization (s.data is a string if s.processData is true)
                 * 3) key is the dataType
                 * 4) the catchall symbol "*" can be used
                 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
                 */
                prefilters = {}, 
                /* Transports bindings
                 * 1) key is the dataType
                 * 2) the catchall symbol "*" can be used
                 * 3) selection will start with transport dataType and THEN go to "*" if needed
                 */
                transports = {}, 
                // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
                allTypes = "*/".concat("*"), 
                // Anchor tag for parsing the document origin
                originAnchor = document.createElement("a");
                originAnchor.href = location.href;
                // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
                function addToPrefiltersOrTransports(structure) {
                    // dataTypeExpression is optional and defaults to "*"
                    return function (dataTypeExpression, func) {
                        if (typeof dataTypeExpression !== "string") {
                            func = dataTypeExpression;
                            dataTypeExpression = "*";
                        }
                        var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
                        if (isFunction(func)) {
                            // For each dataType in the dataTypeExpression
                            while ((dataType = dataTypes[i++])) {
                                // Prepend if requested
                                if (dataType[0] === "+") {
                                    dataType = dataType.slice(1) || "*";
                                    (structure[dataType] = structure[dataType] || []).unshift(func);
                                    // Otherwise append
                                }
                                else {
                                    (structure[dataType] = structure[dataType] || []).push(func);
                                }
                            }
                        }
                    };
                }
                // Base inspection function for prefilters and transports
                function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
                    var inspected = {}, seekingTransport = (structure === transports);
                    function inspect(dataType) {
                        var selected;
                        inspected[dataType] = true;
                        jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
                            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                            if (typeof dataTypeOrTransport === "string" &&
                                !seekingTransport && !inspected[dataTypeOrTransport]) {
                                options.dataTypes.unshift(dataTypeOrTransport);
                                inspect(dataTypeOrTransport);
                                return false;
                            }
                            else if (seekingTransport) {
                                return !(selected = dataTypeOrTransport);
                            }
                        });
                        return selected;
                    }
                    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
                }
                // A special extend for ajax options
                // that takes "flat" options (not to be deep extended)
                // Fixes #9887
                function ajaxExtend(target, src) {
                    var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
                    for (key in src) {
                        if (src[key] !== undefined) {
                            (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
                        }
                    }
                    if (deep) {
                        jQuery.extend(true, target, deep);
                    }
                    return target;
                }
                /* Handles responses to an ajax request:
                 * - finds the right dataType (mediates between content-type and expected dataType)
                 * - returns the corresponding response
                 */
                function ajaxHandleResponses(s, jqXHR, responses) {
                    var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
                    // Remove auto dataType and get content-type in the process
                    while (dataTypes[0] === "*") {
                        dataTypes.shift();
                        if (ct === undefined) {
                            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                        }
                    }
                    // Check if we're dealing with a known content-type
                    if (ct) {
                        for (type in contents) {
                            if (contents[type] && contents[type].test(ct)) {
                                dataTypes.unshift(type);
                                break;
                            }
                        }
                    }
                    // Check to see if we have a response for the expected dataType
                    if (dataTypes[0] in responses) {
                        finalDataType = dataTypes[0];
                    }
                    else {
                        // Try convertible dataTypes
                        for (type in responses) {
                            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                                finalDataType = type;
                                break;
                            }
                            if (!firstDataType) {
                                firstDataType = type;
                            }
                        }
                        // Or just use first one
                        finalDataType = finalDataType || firstDataType;
                    }
                    // If we found a dataType
                    // We add the dataType to the list if needed
                    // and return the corresponding response
                    if (finalDataType) {
                        if (finalDataType !== dataTypes[0]) {
                            dataTypes.unshift(finalDataType);
                        }
                        return responses[finalDataType];
                    }
                }
                /* Chain conversions given the request and the original response
                 * Also sets the responseXXX fields on the jqXHR instance
                 */
                function ajaxConvert(s, response, jqXHR, isSuccess) {
                    var conv2, current, conv, tmp, prev, converters = {}, 
                    // Work with a copy of dataTypes in case we need to modify it for conversion
                    dataTypes = s.dataTypes.slice();
                    // Create converters map with lowercased keys
                    if (dataTypes[1]) {
                        for (conv in s.converters) {
                            converters[conv.toLowerCase()] = s.converters[conv];
                        }
                    }
                    current = dataTypes.shift();
                    // Convert to each sequential dataType
                    while (current) {
                        if (s.responseFields[current]) {
                            jqXHR[s.responseFields[current]] = response;
                        }
                        // Apply the dataFilter if provided
                        if (!prev && isSuccess && s.dataFilter) {
                            response = s.dataFilter(response, s.dataType);
                        }
                        prev = current;
                        current = dataTypes.shift();
                        if (current) {
                            // There's only work to do if current dataType is non-auto
                            if (current === "*") {
                                current = prev;
                                // Convert response if prev dataType is non-auto and differs from current
                            }
                            else if (prev !== "*" && prev !== current) {
                                // Seek a direct converter
                                conv = converters[prev + " " + current] || converters["* " + current];
                                // If none found, seek a pair
                                if (!conv) {
                                    for (conv2 in converters) {
                                        // If conv2 outputs current
                                        tmp = conv2.split(" ");
                                        if (tmp[1] === current) {
                                            // If prev can be converted to accepted input
                                            conv = converters[prev + " " + tmp[0]] ||
                                                converters["* " + tmp[0]];
                                            if (conv) {
                                                // Condense equivalence converters
                                                if (conv === true) {
                                                    conv = converters[conv2];
                                                    // Otherwise, insert the intermediate dataType
                                                }
                                                else if (converters[conv2] !== true) {
                                                    current = tmp[0];
                                                    dataTypes.unshift(tmp[1]);
                                                }
                                                break;
                                            }
                                        }
                                    }
                                }
                                // Apply converter (if not an equivalence)
                                if (conv !== true) {
                                    // Unless errors are allowed to bubble, catch and return them
                                    if (conv && s.throws) {
                                        response = conv(response);
                                    }
                                    else {
                                        try {
                                            response = conv(response);
                                        }
                                        catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: conv ? e : "No conversion from " + prev + " to " + current
                                            };
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return { state: "success", data: response };
                }
                jQuery.extend({
                    // Counter for holding the number of active queries
                    active: 0,
                    // Last-Modified header cache for next request
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: location.href,
                        type: "GET",
                        isLocal: rlocalProtocol.test(location.protocol),
                        global: true,
                        processData: true,
                        async: true,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        /*
                        timeout: 0,
                        data: null,
                        dataType: null,
                        username: null,
                        password: null,
                        cache: null,
                        throws: false,
                        traditional: false,
                        headers: {},
                        */
                        accepts: {
                            "*": allTypes,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        // Data converters
                        // Keys separate source (or catchall "*") and destination types with a single space
                        converters: {
                            // Convert anything to text
                            "* text": String,
                            // Text to html (true = no transformation)
                            "text html": true,
                            // Evaluate text as a json expression
                            "text json": JSON.parse,
                            // Parse text as xml
                            "text xml": jQuery.parseXML
                        },
                        // For options that shouldn't be deep extended:
                        // you can add your own custom options here if
                        // and when you create one that shouldn't be
                        // deep extended (see ajaxExtend)
                        flatOptions: {
                            url: true,
                            context: true
                        }
                    },
                    // Creates a full fledged settings object into target
                    // with both ajaxSettings and settings fields.
                    // If target is omitted, writes into ajaxSettings.
                    ajaxSetup: function (target, settings) {
                        return settings ?
                            // Building a settings object
                            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :
                            // Extending ajaxSettings
                            ajaxExtend(jQuery.ajaxSettings, target);
                    },
                    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                    ajaxTransport: addToPrefiltersOrTransports(transports),
                    // Main method
                    ajax: function (url, options) {
                        // If url is an object, simulate pre-1.5 signature
                        if (typeof url === "object") {
                            options = url;
                            url = undefined;
                        }
                        // Force options to be an object
                        options = options || {};
                        var transport, 
                        // URL without anti-cache param
                        cacheURL, 
                        // Response headers
                        responseHeadersString, responseHeaders, 
                        // timeout handle
                        timeoutTimer, 
                        // Url cleanup var
                        urlAnchor, 
                        // Request state (becomes false upon send and true upon completion)
                        completed, 
                        // To know if global events are to be dispatched
                        fireGlobals, 
                        // Loop variable
                        i, 
                        // uncached part of the url
                        uncached, 
                        // Create the final options object
                        s = jQuery.ajaxSetup({}, options), 
                        // Callbacks context
                        callbackContext = s.context || s, 
                        // Context for global events is callbackContext if it is a DOM node or jQuery collection
                        globalEventContext = s.context &&
                            (callbackContext.nodeType || callbackContext.jquery) ?
                            jQuery(callbackContext) :
                            jQuery.event, 
                        // Deferreds
                        deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), 
                        // Status-dependent callbacks
                        statusCode = s.statusCode || {}, 
                        // Headers (they are sent all at once)
                        requestHeaders = {}, requestHeadersNames = {}, 
                        // Default abort message
                        strAbort = "canceled", 
                        // Fake xhr
                        jqXHR = {
                            readyState: 0,
                            // Builds headers hashtable if needed
                            getResponseHeader: function (key) {
                                var match;
                                if (completed) {
                                    if (!responseHeaders) {
                                        responseHeaders = {};
                                        while ((match = rheaders.exec(responseHeadersString))) {
                                            responseHeaders[match[1].toLowerCase() + " "] =
                                                (responseHeaders[match[1].toLowerCase() + " "] || [])
                                                    .concat(match[2]);
                                        }
                                    }
                                    match = responseHeaders[key.toLowerCase() + " "];
                                }
                                return match == null ? null : match.join(", ");
                            },
                            // Raw string
                            getAllResponseHeaders: function () {
                                return completed ? responseHeadersString : null;
                            },
                            // Caches the header
                            setRequestHeader: function (name, value) {
                                if (completed == null) {
                                    name = requestHeadersNames[name.toLowerCase()] =
                                        requestHeadersNames[name.toLowerCase()] || name;
                                    requestHeaders[name] = value;
                                }
                                return this;
                            },
                            // Overrides response content-type header
                            overrideMimeType: function (type) {
                                if (completed == null) {
                                    s.mimeType = type;
                                }
                                return this;
                            },
                            // Status-dependent callbacks
                            statusCode: function (map) {
                                var code;
                                if (map) {
                                    if (completed) {
                                        // Execute the appropriate callbacks
                                        jqXHR.always(map[jqXHR.status]);
                                    }
                                    else {
                                        // Lazy-add the new callbacks in a way that preserves old ones
                                        for (code in map) {
                                            statusCode[code] = [statusCode[code], map[code]];
                                        }
                                    }
                                }
                                return this;
                            },
                            // Cancel the request
                            abort: function (statusText) {
                                var finalText = statusText || strAbort;
                                if (transport) {
                                    transport.abort(finalText);
                                }
                                done(0, finalText);
                                return this;
                            }
                        };
                        // Attach deferreds
                        deferred.promise(jqXHR);
                        // Add protocol if not provided (prefilters might expect it)
                        // Handle falsy url in the settings object (#10093: consistency with old signature)
                        // We also use the url parameter if available
                        s.url = ((url || s.url || location.href) + "")
                            .replace(rprotocol, location.protocol + "//");
                        // Alias method option to type as per ticket #12004
                        s.type = options.method || options.type || s.method || s.type;
                        // Extract dataTypes list
                        s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
                        // A cross-domain request is in order when the origin doesn't match the current origin.
                        if (s.crossDomain == null) {
                            urlAnchor = document.createElement("a");
                            // Support: IE <=8 - 11, Edge 12 - 15
                            // IE throws exception on accessing the href property if url is malformed,
                            // e.g. http://example.com:80x/
                            try {
                                urlAnchor.href = s.url;
                                // Support: IE <=8 - 11 only
                                // Anchor's host property isn't correctly set when s.url is relative
                                urlAnchor.href = urlAnchor.href;
                                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
                                    urlAnchor.protocol + "//" + urlAnchor.host;
                            }
                            catch (e) {
                                // If there is an error parsing the URL, assume it is crossDomain,
                                // it can be rejected by the transport if it is invalid
                                s.crossDomain = true;
                            }
                        }
                        // Convert data if not already a string
                        if (s.data && s.processData && typeof s.data !== "string") {
                            s.data = jQuery.param(s.data, s.traditional);
                        }
                        // Apply prefilters
                        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                        // If request was aborted inside a prefilter, stop there
                        if (completed) {
                            return jqXHR;
                        }
                        // We can fire global events as of now if asked to
                        // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
                        fireGlobals = jQuery.event && s.global;
                        // Watch for a new set of requests
                        if (fireGlobals && jQuery.active++ === 0) {
                            jQuery.event.trigger("ajaxStart");
                        }
                        // Uppercase the type
                        s.type = s.type.toUpperCase();
                        // Determine if request has content
                        s.hasContent = !rnoContent.test(s.type);
                        // Save the URL in case we're toying with the If-Modified-Since
                        // and/or If-None-Match header later on
                        // Remove hash to simplify url manipulation
                        cacheURL = s.url.replace(rhash, "");
                        // More options handling for requests with no content
                        if (!s.hasContent) {
                            // Remember the hash so we can put it back
                            uncached = s.url.slice(cacheURL.length);
                            // If data is available and should be processed, append data to url
                            if (s.data && (s.processData || typeof s.data === "string")) {
                                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                                // #9682: remove data so that it's not used in an eventual retry
                                delete s.data;
                            }
                            // Add or update anti-cache param if needed
                            if (s.cache === false) {
                                cacheURL = cacheURL.replace(rantiCache, "$1");
                                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + (nonce.guid++) +
                                    uncached;
                            }
                            // Put hash and anti-cache on the URL that will be requested (gh-1732)
                            s.url = cacheURL + uncached;
                            // Change '%20' to '+' if this is encoded form body content (gh-2658)
                        }
                        else if (s.data && s.processData &&
                            (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                            s.data = s.data.replace(r20, "+");
                        }
                        // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                        if (s.ifModified) {
                            if (jQuery.lastModified[cacheURL]) {
                                jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                            }
                            if (jQuery.etag[cacheURL]) {
                                jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                            }
                        }
                        // Set the correct header, if data is being sent
                        if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                            jqXHR.setRequestHeader("Content-Type", s.contentType);
                        }
                        // Set the Accepts header for the server, depending on the dataType
                        jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
                            s.accepts[s.dataTypes[0]] +
                                (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") :
                            s.accepts["*"]);
                        // Check for headers option
                        for (i in s.headers) {
                            jqXHR.setRequestHeader(i, s.headers[i]);
                        }
                        // Allow custom headers/mimetypes and early abort
                        if (s.beforeSend &&
                            (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
                            // Abort if not done already and return
                            return jqXHR.abort();
                        }
                        // Aborting is no longer a cancellation
                        strAbort = "abort";
                        // Install callbacks on deferreds
                        completeDeferred.add(s.complete);
                        jqXHR.done(s.success);
                        jqXHR.fail(s.error);
                        // Get transport
                        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                        // If no transport, we auto-abort
                        if (!transport) {
                            done(-1, "No Transport");
                        }
                        else {
                            jqXHR.readyState = 1;
                            // Send global event
                            if (fireGlobals) {
                                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
                            }
                            // If request was aborted inside ajaxSend, stop there
                            if (completed) {
                                return jqXHR;
                            }
                            // Timeout
                            if (s.async && s.timeout > 0) {
                                timeoutTimer = window.setTimeout(function () {
                                    jqXHR.abort("timeout");
                                }, s.timeout);
                            }
                            try {
                                completed = false;
                                transport.send(requestHeaders, done);
                            }
                            catch (e) {
                                // Rethrow post-completion exceptions
                                if (completed) {
                                    throw e;
                                }
                                // Propagate others as results
                                done(-1, e);
                            }
                        }
                        // Callback for when everything is done
                        function done(status, nativeStatusText, responses, headers) {
                            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                            // Ignore repeat invocations
                            if (completed) {
                                return;
                            }
                            completed = true;
                            // Clear timeout if it exists
                            if (timeoutTimer) {
                                window.clearTimeout(timeoutTimer);
                            }
                            // Dereference transport for early garbage collection
                            // (no matter how long the jqXHR object will be used)
                            transport = undefined;
                            // Cache response headers
                            responseHeadersString = headers || "";
                            // Set readyState
                            jqXHR.readyState = status > 0 ? 4 : 0;
                            // Determine if successful
                            isSuccess = status >= 200 && status < 300 || status === 304;
                            // Get response data
                            if (responses) {
                                response = ajaxHandleResponses(s, jqXHR, responses);
                            }
                            // Use a noop converter for missing script
                            if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1) {
                                s.converters["text script"] = function () { };
                            }
                            // Convert no matter what (that way responseXXX fields are always set)
                            response = ajaxConvert(s, response, jqXHR, isSuccess);
                            // If successful, handle type chaining
                            if (isSuccess) {
                                // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                                if (s.ifModified) {
                                    modified = jqXHR.getResponseHeader("Last-Modified");
                                    if (modified) {
                                        jQuery.lastModified[cacheURL] = modified;
                                    }
                                    modified = jqXHR.getResponseHeader("etag");
                                    if (modified) {
                                        jQuery.etag[cacheURL] = modified;
                                    }
                                }
                                // if no content
                                if (status === 204 || s.type === "HEAD") {
                                    statusText = "nocontent";
                                    // if not modified
                                }
                                else if (status === 304) {
                                    statusText = "notmodified";
                                    // If we have data, let's convert it
                                }
                                else {
                                    statusText = response.state;
                                    success = response.data;
                                    error = response.error;
                                    isSuccess = !error;
                                }
                            }
                            else {
                                // Extract error from statusText and normalize for non-aborts
                                error = statusText;
                                if (status || !statusText) {
                                    statusText = "error";
                                    if (status < 0) {
                                        status = 0;
                                    }
                                }
                            }
                            // Set data for the fake xhr object
                            jqXHR.status = status;
                            jqXHR.statusText = (nativeStatusText || statusText) + "";
                            // Success/Error
                            if (isSuccess) {
                                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                            }
                            else {
                                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                            }
                            // Status-dependent callbacks
                            jqXHR.statusCode(statusCode);
                            statusCode = undefined;
                            if (fireGlobals) {
                                globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
                            }
                            // Complete
                            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                            if (fireGlobals) {
                                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                                // Handle the global AJAX counter
                                if (!(--jQuery.active)) {
                                    jQuery.event.trigger("ajaxStop");
                                }
                            }
                        }
                        return jqXHR;
                    },
                    getJSON: function (url, data, callback) {
                        return jQuery.get(url, data, callback, "json");
                    },
                    getScript: function (url, callback) {
                        return jQuery.get(url, undefined, callback, "script");
                    }
                });
                jQuery.each(["get", "post"], function (_i, method) {
                    jQuery[method] = function (url, data, callback, type) {
                        // Shift arguments if data argument was omitted
                        if (isFunction(data)) {
                            type = type || callback;
                            callback = data;
                            data = undefined;
                        }
                        // The url can be an options object (which then must have .url)
                        return jQuery.ajax(jQuery.extend({
                            url: url,
                            type: method,
                            dataType: type,
                            data: data,
                            success: callback
                        }, jQuery.isPlainObject(url) && url));
                    };
                });
                jQuery.ajaxPrefilter(function (s) {
                    var i;
                    for (i in s.headers) {
                        if (i.toLowerCase() === "content-type") {
                            s.contentType = s.headers[i] || "";
                        }
                    }
                });
                jQuery._evalUrl = function (url, options, doc) {
                    return jQuery.ajax({
                        url: url,
                        // Make this explicit, since user can override this through ajaxSetup (#11264)
                        type: "GET",
                        dataType: "script",
                        cache: true,
                        async: false,
                        global: false,
                        // Only evaluate the response if it is successful (gh-4126)
                        // dataFilter is not invoked for failure responses, so using it instead
                        // of the default converter is kludgy but it works.
                        converters: {
                            "text script": function () { }
                        },
                        dataFilter: function (response) {
                            jQuery.globalEval(response, options, doc);
                        }
                    });
                };
                jQuery.fn.extend({
                    wrapAll: function (html) {
                        var wrap;
                        if (this[0]) {
                            if (isFunction(html)) {
                                html = html.call(this[0]);
                            }
                            // The elements to wrap the target around
                            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                            if (this[0].parentNode) {
                                wrap.insertBefore(this[0]);
                            }
                            wrap.map(function () {
                                var elem = this;
                                while (elem.firstElementChild) {
                                    elem = elem.firstElementChild;
                                }
                                return elem;
                            }).append(this);
                        }
                        return this;
                    },
                    wrapInner: function (html) {
                        if (isFunction(html)) {
                            return this.each(function (i) {
                                jQuery(this).wrapInner(html.call(this, i));
                            });
                        }
                        return this.each(function () {
                            var self = jQuery(this), contents = self.contents();
                            if (contents.length) {
                                contents.wrapAll(html);
                            }
                            else {
                                self.append(html);
                            }
                        });
                    },
                    wrap: function (html) {
                        var htmlIsFunction = isFunction(html);
                        return this.each(function (i) {
                            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
                        });
                    },
                    unwrap: function (selector) {
                        this.parent(selector).not("body").each(function () {
                            jQuery(this).replaceWith(this.childNodes);
                        });
                        return this;
                    }
                });
                jQuery.expr.pseudos.hidden = function (elem) {
                    return !jQuery.expr.pseudos.visible(elem);
                };
                jQuery.expr.pseudos.visible = function (elem) {
                    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
                };
                jQuery.ajaxSettings.xhr = function () {
                    try {
                        return new window.XMLHttpRequest();
                    }
                    catch (e) { }
                };
                var xhrSuccessStatus = {
                    // File protocol always yields status code 0, assume 200
                    0: 200,
                    // Support: IE <=9 only
                    // #1450: sometimes IE returns 1223 when it should be 204
                    1223: 204
                }, xhrSupported = jQuery.ajaxSettings.xhr();
                support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
                support.ajax = xhrSupported = !!xhrSupported;
                jQuery.ajaxTransport(function (options) {
                    var callback, errorCallback;
                    // Cross domain only allowed if supported through XMLHttpRequest
                    if (support.cors || xhrSupported && !options.crossDomain) {
                        return {
                            send: function (headers, complete) {
                                var i, xhr = options.xhr();
                                xhr.open(options.type, options.url, options.async, options.username, options.password);
                                // Apply custom fields if provided
                                if (options.xhrFields) {
                                    for (i in options.xhrFields) {
                                        xhr[i] = options.xhrFields[i];
                                    }
                                }
                                // Override mime type if needed
                                if (options.mimeType && xhr.overrideMimeType) {
                                    xhr.overrideMimeType(options.mimeType);
                                }
                                // X-Requested-With header
                                // For cross-domain requests, seeing as conditions for a preflight are
                                // akin to a jigsaw puzzle, we simply never set it to be sure.
                                // (it can always be set on a per-request basis or even using ajaxSetup)
                                // For same-domain requests, won't change header if already provided.
                                if (!options.crossDomain && !headers["X-Requested-With"]) {
                                    headers["X-Requested-With"] = "XMLHttpRequest";
                                }
                                // Set headers
                                for (i in headers) {
                                    xhr.setRequestHeader(i, headers[i]);
                                }
                                // Callback
                                callback = function (type) {
                                    return function () {
                                        if (callback) {
                                            callback = errorCallback = xhr.onload =
                                                xhr.onerror = xhr.onabort = xhr.ontimeout =
                                                    xhr.onreadystatechange = null;
                                            if (type === "abort") {
                                                xhr.abort();
                                            }
                                            else if (type === "error") {
                                                // Support: IE <=9 only
                                                // On a manual native abort, IE9 throws
                                                // errors on any property access that is not readyState
                                                if (typeof xhr.status !== "number") {
                                                    complete(0, "error");
                                                }
                                                else {
                                                    complete(
                                                    // File: protocol always yields status 0; see #8605, #14207
                                                    xhr.status, xhr.statusText);
                                                }
                                            }
                                            else {
                                                complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, 
                                                // Support: IE <=9 only
                                                // IE9 has no XHR2 but throws on binary (trac-11426)
                                                // For XHR2 non-text, let the caller handle it (gh-2498)
                                                (xhr.responseType || "text") !== "text" ||
                                                    typeof xhr.responseText !== "string" ?
                                                    { binary: xhr.response } :
                                                    { text: xhr.responseText }, xhr.getAllResponseHeaders());
                                            }
                                        }
                                    };
                                };
                                // Listen to events
                                xhr.onload = callback();
                                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                                // Support: IE 9 only
                                // Use onreadystatechange to replace onabort
                                // to handle uncaught aborts
                                if (xhr.onabort !== undefined) {
                                    xhr.onabort = errorCallback;
                                }
                                else {
                                    xhr.onreadystatechange = function () {
                                        // Check readyState before timeout as it changes
                                        if (xhr.readyState === 4) {
                                            // Allow onerror to be called first,
                                            // but that will not handle a native abort
                                            // Also, save errorCallback to a variable
                                            // as xhr.onerror cannot be accessed
                                            window.setTimeout(function () {
                                                if (callback) {
                                                    errorCallback();
                                                }
                                            });
                                        }
                                    };
                                }
                                // Create the abort callback
                                callback = callback("abort");
                                try {
                                    // Do send the request (this may raise an exception)
                                    xhr.send(options.hasContent && options.data || null);
                                }
                                catch (e) {
                                    // #14683: Only rethrow if this hasn't been notified as an error yet
                                    if (callback) {
                                        throw e;
                                    }
                                }
                            },
                            abort: function () {
                                if (callback) {
                                    callback();
                                }
                            }
                        };
                    }
                });
                // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
                jQuery.ajaxPrefilter(function (s) {
                    if (s.crossDomain) {
                        s.contents.script = false;
                    }
                });
                // Install script dataType
                jQuery.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, " +
                            "application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function (text) {
                            jQuery.globalEval(text);
                            return text;
                        }
                    }
                });
                // Handle cache's special case and crossDomain
                jQuery.ajaxPrefilter("script", function (s) {
                    if (s.cache === undefined) {
                        s.cache = false;
                    }
                    if (s.crossDomain) {
                        s.type = "GET";
                    }
                });
                // Bind script tag hack transport
                jQuery.ajaxTransport("script", function (s) {
                    // This transport only deals with cross domain or forced-by-attrs requests
                    if (s.crossDomain || s.scriptAttrs) {
                        var script, callback;
                        return {
                            send: function (_, complete) {
                                script = jQuery("<script>")
                                    .attr(s.scriptAttrs || {})
                                    .prop({ charset: s.scriptCharset, src: s.url })
                                    .on("load error", callback = function (evt) {
                                    script.remove();
                                    callback = null;
                                    if (evt) {
                                        complete(evt.type === "error" ? 404 : 200, evt.type);
                                    }
                                });
                                // Use native DOM manipulation to avoid our domManip AJAX trickery
                                document.head.appendChild(script[0]);
                            },
                            abort: function () {
                                if (callback) {
                                    callback();
                                }
                            }
                        };
                    }
                });
                var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
                // Default jsonp settings
                jQuery.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function () {
                        var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce.guid++));
                        this[callback] = true;
                        return callback;
                    }
                });
                // Detect, normalize options and install callbacks for jsonp requests
                jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
                    var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ?
                        "url" :
                        typeof s.data === "string" &&
                            (s.contentType || "")
                                .indexOf("application/x-www-form-urlencoded") === 0 &&
                            rjsonp.test(s.data) && "data");
                    // Handle iff the expected data type is "jsonp" or we have a parameter to set
                    if (jsonProp || s.dataTypes[0] === "jsonp") {
                        // Get callback name, remembering preexisting value associated with it
                        callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ?
                            s.jsonpCallback() :
                            s.jsonpCallback;
                        // Insert callback into url or form data
                        if (jsonProp) {
                            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
                        }
                        else if (s.jsonp !== false) {
                            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                        }
                        // Use data converter to retrieve json after script execution
                        s.converters["script json"] = function () {
                            if (!responseContainer) {
                                jQuery.error(callbackName + " was not called");
                            }
                            return responseContainer[0];
                        };
                        // Force json dataType
                        s.dataTypes[0] = "json";
                        // Install callback
                        overwritten = window[callbackName];
                        window[callbackName] = function () {
                            responseContainer = arguments;
                        };
                        // Clean-up function (fires after converters)
                        jqXHR.always(function () {
                            // If previous value didn't exist - remove it
                            if (overwritten === undefined) {
                                jQuery(window).removeProp(callbackName);
                                // Otherwise restore preexisting value
                            }
                            else {
                                window[callbackName] = overwritten;
                            }
                            // Save back as free
                            if (s[callbackName]) {
                                // Make sure that re-using the options doesn't screw things around
                                s.jsonpCallback = originalSettings.jsonpCallback;
                                // Save the callback name for future use
                                oldCallbacks.push(callbackName);
                            }
                            // Call if it was a function and we have a response
                            if (responseContainer && isFunction(overwritten)) {
                                overwritten(responseContainer[0]);
                            }
                            responseContainer = overwritten = undefined;
                        });
                        // Delegate to script
                        return "script";
                    }
                });
                // Support: Safari 8 only
                // In Safari 8 documents created via document.implementation.createHTMLDocument
                // collapse sibling forms: the second one becomes a child of the first one.
                // Because of that, this security measure has to be disabled in Safari 8.
                // https://bugs.webkit.org/show_bug.cgi?id=137337
                support.createHTMLDocument = (function () {
                    var body = document.implementation.createHTMLDocument("").body;
                    body.innerHTML = "<form></form><form></form>";
                    return body.childNodes.length === 2;
                })();
                // Argument "data" should be string of html
                // context (optional): If specified, the fragment will be created in this context,
                // defaults to document
                // keepScripts (optional): If true, will include scripts passed in the html string
                jQuery.parseHTML = function (data, context, keepScripts) {
                    if (typeof data !== "string") {
                        return [];
                    }
                    if (typeof context === "boolean") {
                        keepScripts = context;
                        context = false;
                    }
                    var base, parsed, scripts;
                    if (!context) {
                        // Stop scripts or inline event handlers from being executed immediately
                        // by using document.implementation
                        if (support.createHTMLDocument) {
                            context = document.implementation.createHTMLDocument("");
                            // Set the base href for the created document
                            // so any parsed elements with URLs
                            // are based on the document's URL (gh-2965)
                            base = context.createElement("base");
                            base.href = document.location.href;
                            context.head.appendChild(base);
                        }
                        else {
                            context = document;
                        }
                    }
                    parsed = rsingleTag.exec(data);
                    scripts = !keepScripts && [];
                    // Single tag
                    if (parsed) {
                        return [context.createElement(parsed[1])];
                    }
                    parsed = buildFragment([data], context, scripts);
                    if (scripts && scripts.length) {
                        jQuery(scripts).remove();
                    }
                    return jQuery.merge([], parsed.childNodes);
                };
                /**
                 * Load a url into a page
                 */
                jQuery.fn.load = function (url, params, callback) {
                    var selector, type, response, self = this, off = url.indexOf(" ");
                    if (off > -1) {
                        selector = stripAndCollapse(url.slice(off));
                        url = url.slice(0, off);
                    }
                    // If it's a function
                    if (isFunction(params)) {
                        // We assume that it's the callback
                        callback = params;
                        params = undefined;
                        // Otherwise, build a param string
                    }
                    else if (params && typeof params === "object") {
                        type = "POST";
                    }
                    // If we have elements to modify, make the request
                    if (self.length > 0) {
                        jQuery.ajax({
                            url: url,
                            // If "type" variable is undefined, then "GET" method will be used.
                            // Make value of this field explicit since
                            // user can override it through ajaxSetup method
                            type: type || "GET",
                            dataType: "html",
                            data: params
                        }).done(function (responseText) {
                            // Save response for use in complete callback
                            response = arguments;
                            self.html(selector ?
                                // If a selector was specified, locate the right elements in a dummy div
                                // Exclude scripts to avoid IE 'Permission Denied' errors
                                jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :
                                // Otherwise use the full result
                                responseText);
                            // If the request succeeds, this function gets "data", "status", "jqXHR"
                            // but they are ignored because response was set above.
                            // If it fails, this function gets "jqXHR", "status", "error"
                        }).always(callback && function (jqXHR, status) {
                            self.each(function () {
                                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
                            });
                        });
                    }
                    return this;
                };
                jQuery.expr.pseudos.animated = function (elem) {
                    return jQuery.grep(jQuery.timers, function (fn) {
                        return elem === fn.elem;
                    }).length;
                };
                jQuery.offset = {
                    setOffset: function (elem, options, i) {
                        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
                        // Set position first, in-case top/left are set even on static elem
                        if (position === "static") {
                            elem.style.position = "relative";
                        }
                        curOffset = curElem.offset();
                        curCSSTop = jQuery.css(elem, "top");
                        curCSSLeft = jQuery.css(elem, "left");
                        calculatePosition = (position === "absolute" || position === "fixed") &&
                            (curCSSTop + curCSSLeft).indexOf("auto") > -1;
                        // Need to be able to calculate position if either
                        // top or left is auto and position is either absolute or fixed
                        if (calculatePosition) {
                            curPosition = curElem.position();
                            curTop = curPosition.top;
                            curLeft = curPosition.left;
                        }
                        else {
                            curTop = parseFloat(curCSSTop) || 0;
                            curLeft = parseFloat(curCSSLeft) || 0;
                        }
                        if (isFunction(options)) {
                            // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
                            options = options.call(elem, i, jQuery.extend({}, curOffset));
                        }
                        if (options.top != null) {
                            props.top = (options.top - curOffset.top) + curTop;
                        }
                        if (options.left != null) {
                            props.left = (options.left - curOffset.left) + curLeft;
                        }
                        if ("using" in options) {
                            options.using.call(elem, props);
                        }
                        else {
                            if (typeof props.top === "number") {
                                props.top += "px";
                            }
                            if (typeof props.left === "number") {
                                props.left += "px";
                            }
                            curElem.css(props);
                        }
                    }
                };
                jQuery.fn.extend({
                    // offset() relates an element's border box to the document origin
                    offset: function (options) {
                        // Preserve chaining for setter
                        if (arguments.length) {
                            return options === undefined ?
                                this :
                                this.each(function (i) {
                                    jQuery.offset.setOffset(this, options, i);
                                });
                        }
                        var rect, win, elem = this[0];
                        if (!elem) {
                            return;
                        }
                        // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
                        // Support: IE <=11 only
                        // Running getBoundingClientRect on a
                        // disconnected node in IE throws an error
                        if (!elem.getClientRects().length) {
                            return { top: 0, left: 0 };
                        }
                        // Get document-relative position by adding viewport scroll to viewport-relative gBCR
                        rect = elem.getBoundingClientRect();
                        win = elem.ownerDocument.defaultView;
                        return {
                            top: rect.top + win.pageYOffset,
                            left: rect.left + win.pageXOffset
                        };
                    },
                    // position() relates an element's margin box to its offset parent's padding box
                    // This corresponds to the behavior of CSS absolute positioning
                    position: function () {
                        if (!this[0]) {
                            return;
                        }
                        var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
                        // position:fixed elements are offset from the viewport, which itself always has zero offset
                        if (jQuery.css(elem, "position") === "fixed") {
                            // Assume position:fixed implies availability of getBoundingClientRect
                            offset = elem.getBoundingClientRect();
                        }
                        else {
                            offset = this.offset();
                            // Account for the *real* offset parent, which can be the document or its root element
                            // when a statically positioned element is identified
                            doc = elem.ownerDocument;
                            offsetParent = elem.offsetParent || doc.documentElement;
                            while (offsetParent &&
                                (offsetParent === doc.body || offsetParent === doc.documentElement) &&
                                jQuery.css(offsetParent, "position") === "static") {
                                offsetParent = offsetParent.parentNode;
                            }
                            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                                // Incorporate borders into its offset, since they are outside its content origin
                                parentOffset = jQuery(offsetParent).offset();
                                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                            }
                        }
                        // Subtract parent offsets and element margins
                        return {
                            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                        };
                    },
                    // This method will return documentElement in the following cases:
                    // 1) For the element inside the iframe without offsetParent, this method will return
                    //    documentElement of the parent window
                    // 2) For the hidden or detached element
                    // 3) For body or html element, i.e. in case of the html node - it will return itself
                    //
                    // but those exceptions were never presented as a real life use-cases
                    // and might be considered as more preferable results.
                    //
                    // This logic, however, is not guaranteed and can change at any point in the future
                    offsetParent: function () {
                        return this.map(function () {
                            var offsetParent = this.offsetParent;
                            while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                                offsetParent = offsetParent.offsetParent;
                            }
                            return offsetParent || documentElement;
                        });
                    }
                });
                // Create scrollLeft and scrollTop methods
                jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
                    var top = "pageYOffset" === prop;
                    jQuery.fn[method] = function (val) {
                        return access(this, function (elem, method, val) {
                            // Coalesce documents and windows
                            var win;
                            if (isWindow(elem)) {
                                win = elem;
                            }
                            else if (elem.nodeType === 9) {
                                win = elem.defaultView;
                            }
                            if (val === undefined) {
                                return win ? win[prop] : elem[method];
                            }
                            if (win) {
                                win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                            }
                            else {
                                elem[method] = val;
                            }
                        }, method, val, arguments.length);
                    };
                });
                // Support: Safari <=7 - 9.1, Chrome <=37 - 49
                // Add the top/left cssHooks using jQuery.fn.position
                // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
                // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
                // getComputedStyle returns percent when specified for top/left/bottom/right;
                // rather than make the css module depend on the offset module, just check for it here
                jQuery.each(["top", "left"], function (_i, prop) {
                    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
                        if (computed) {
                            computed = curCSS(elem, prop);
                            // If curCSS returns percentage, fallback to offset
                            return rnumnonpx.test(computed) ?
                                jQuery(elem).position()[prop] + "px" :
                                computed;
                        }
                    });
                });
                // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
                jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
                    jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
                        // Margin is only for outerHeight, outerWidth
                        jQuery.fn[funcName] = function (margin, value) {
                            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                            return access(this, function (elem, type, value) {
                                var doc;
                                if (isWindow(elem)) {
                                    // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                                    return funcName.indexOf("outer") === 0 ?
                                        elem["inner" + name] :
                                        elem.document.documentElement["client" + name];
                                }
                                // Get document width or height
                                if (elem.nodeType === 9) {
                                    doc = elem.documentElement;
                                    // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                                    // whichever is greatest
                                    return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                                }
                                return value === undefined ?
                                    // Get width or height on the element, requesting but not forcing parseFloat
                                    jQuery.css(elem, type, extra) :
                                    // Set width or height on the element
                                    jQuery.style(elem, type, value, extra);
                            }, type, chainable ? margin : undefined, chainable);
                        };
                    });
                });
                jQuery.each([
                    "ajaxStart",
                    "ajaxStop",
                    "ajaxComplete",
                    "ajaxError",
                    "ajaxSuccess",
                    "ajaxSend"
                ], function (_i, type) {
                    jQuery.fn[type] = function (fn) {
                        return this.on(type, fn);
                    };
                });
                jQuery.fn.extend({
                    bind: function (types, data, fn) {
                        return this.on(types, null, data, fn);
                    },
                    unbind: function (types, fn) {
                        return this.off(types, null, fn);
                    },
                    delegate: function (selector, types, data, fn) {
                        return this.on(types, selector, data, fn);
                    },
                    undelegate: function (selector, types, fn) {
                        // ( namespace ) or ( selector, types [, fn] )
                        return arguments.length === 1 ?
                            this.off(selector, "**") :
                            this.off(types, selector || "**", fn);
                    },
                    hover: function (fnOver, fnOut) {
                        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
                    }
                });
                jQuery.each(("blur focus focusin focusout resize scroll click dblclick " +
                    "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
                    "change select submit keydown keypress keyup contextmenu").split(" "), function (_i, name) {
                    // Handle event binding
                    jQuery.fn[name] = function (data, fn) {
                        return arguments.length > 0 ?
                            this.on(name, null, data, fn) :
                            this.trigger(name);
                    };
                });
                // Support: Android <=4.0 only
                // Make sure we trim BOM and NBSP
                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                // Bind a function to a context, optionally partially applying any
                // arguments.
                // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
                // However, it is not slated for removal any time soon
                jQuery.proxy = function (fn, context) {
                    var tmp, args, proxy;
                    if (typeof context === "string") {
                        tmp = fn[context];
                        context = fn;
                        fn = tmp;
                    }
                    // Quick check to determine if target is callable, in the spec
                    // this throws a TypeError, but we will just return undefined.
                    if (!isFunction(fn)) {
                        return undefined;
                    }
                    // Simulated bind
                    args = slice.call(arguments, 2);
                    proxy = function () {
                        return fn.apply(context || this, args.concat(slice.call(arguments)));
                    };
                    // Set the guid of unique handler to the same of original handler, so it can be removed
                    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                    return proxy;
                };
                jQuery.holdReady = function (hold) {
                    if (hold) {
                        jQuery.readyWait++;
                    }
                    else {
                        jQuery.ready(true);
                    }
                };
                jQuery.isArray = Array.isArray;
                jQuery.parseJSON = JSON.parse;
                jQuery.nodeName = nodeName;
                jQuery.isFunction = isFunction;
                jQuery.isWindow = isWindow;
                jQuery.camelCase = camelCase;
                jQuery.type = toType;
                jQuery.now = Date.now;
                jQuery.isNumeric = function (obj) {
                    // As of jQuery 3.0, isNumeric is limited to
                    // strings and numbers (primitives or objects)
                    // that can be coerced to finite numbers (gh-2662)
                    var type = jQuery.type(obj);
                    return (type === "number" || type === "string") &&
                        // parseFloat NaNs numeric-cast false positives ("")
                        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
                        // subtraction forces infinities to NaN
                        !isNaN(obj - parseFloat(obj));
                };
                jQuery.trim = function (text) {
                    return text == null ?
                        "" :
                        (text + "").replace(rtrim, "");
                };
                // Register as a named AMD module, since jQuery can be concatenated with other
                // files that may use define, but not via a proper concatenation script that
                // understands anonymous AMD modules. A named AMD is safest and most robust
                // way to register. Lowercase jquery is used because AMD module names are
                // derived from file names, and jQuery is normally delivered in a lowercase
                // file name. Do this after creating the global so that if an AMD module wants
                // to call noConflict to hide this version of jQuery, it will work.
                // Note that for maximum portability, libraries that are not jQuery should
                // declare themselves as anonymous modules, and avoid setting a global if an
                // AMD loader is present. jQuery is a special case. For more information, see
                // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
                if (true) {
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                        return jQuery;
                    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
                        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                }
                var 
                // Map over jQuery in case of overwrite
                _jQuery = window.jQuery, 
                // Map over the $ in case of overwrite
                _$ = window.$;
                jQuery.noConflict = function (deep) {
                    if (window.$ === jQuery) {
                        window.$ = _$;
                    }
                    if (deep && window.jQuery === jQuery) {
                        window.jQuery = _jQuery;
                    }
                    return jQuery;
                };
                // Expose jQuery and $ identifiers, even in AMD
                // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
                // and CommonJS for browser emulators (#13566)
                if (typeof noGlobal === "undefined") {
                    window.jQuery = window.$ = jQuery;
                }
                return jQuery;
            });
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/alerts/alerts.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/alerts/alerts.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid content-wrapper\">\n  <h1 class=\"page-title\">Alerts (Using Material Dialogs)</h1>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"card-description\">Basic example</p>\n          <button type=\"button\" class=\"open-button\" (click)=\"basicAlert()\">Try</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"card-description\">A title with a text below</p>\n          <button type=\"button\" class=\"open-button\" (click)=\"textAlert()\">Try</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"card-description\">A success message</p>\n          <button type=\"button\" class=\"open-button\" (click)=\"iconAlert()\">Try</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"card-description\">A success message with an overflow icon</p>\n          <button type=\"button\" class=\"open-button\" (click)=\"overflowIconSuccessAlert()\">Try</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"card-description\">An error message with an overflow icon</p>\n          <button type=\"button\" class=\"open-button\" (click)=\"overflowIconErrorAlert()\">Try</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"card-description\">A message with a function attached to the OK button</p>\n          <button type=\"button\" class=\"open-button\" (click)=\"optionsAlert()\">Try</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"card-description\">A message with functions attached to both buttons</p>\n          <button type=\"button\" class=\"open-button\" (click)=\"canceledAlert()\">Try</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"card-description\">A message with auto close timer set to 2 seconds</p>\n          <button type=\"button\" class=\"open-button\" (click)=\"timedAlert()\">Try</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"card-description\">Modal window with input field</p>\n          <button type=\"button\" class=\"open-button\" (click)=\"inputAlert()\">Try</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/ali/ali.component.html": 
        /*!***********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/ali/ali.component.html ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<!-- The CSS grid that makes up the entirety of the hero image/banner image area -->\n<section class=\"top-banner-section\">\n  <!-- The CSS grid area that displays the image src=\"/assets/imgs/articles/key.jpeg\" (layer 1) -->\n  <div class=\"banner-image-div\">\n    <img class=\"banner-image\" src=\"/assets/imgs/articles/background.jpg\" alt=\"Banner Image\" />\n  </div>\n  <!-- The CSS grid area that displays the semi-transparent gradient overlay (layer 2) -->\n  <div class=\"banner-overlay-div\"></div>\n  <!-- The CSS grid area that displays the content (layer 3) -->\n  <div class=\"banner-text-div\">\n    <span class=\"banner-text\">\n      <p class=\"banner-h1-bigal\">Lets Build The World Today </p>\n      <p class=\"lead\">One Line of Tested Code At A Time.</p>\n      <p class=\"lead\">People Science In Software Engineering.</p>\n      <p class=\"banner-btn\"><a class=\"banner-btn-item\" href=\"#\">Case Studies &#8594;</a></p>\n    </span>\n  </div>\n</section>\n\n\n<!--<div class=\"visualizations-section knowledge-articles-visualization\">-->\n<!--  <div class=\"row\">-->\n<!--    <div class=\"visualization-heading col-12\">-->\n<!--      <div class=\"heading-info\">-->\n<!--        <h4 class=\"heading-title\">Case Studies</h4>-->\n<!--      </div>-->\n<!--    </div>-->\n<!--  </div>-->\n<!--  <div class=\"knowledge-articles-list row\">-->\n<!--    <div class=\"knowledge-article-wrapper col-12 col-md-6 col-lg-4 col-xl-3\" *ngFor=\"let article of articles\">-->\n<!--      <div class=\"knowledge-article\">-->\n<!--        <div class=\"article-cover-wrapper\">-->\n<!--          <cc-aspect-ratio [ratio]=\"{w: 35, h: 23}\">-->\n<!--            <cc-image-shell class=\"cover-image\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"article.featured_image\" [alt]=\"'cover image'\"></cc-image-shell>-->\n<!--          </cc-aspect-ratio>-->\n<!--        </div>-->\n<!--        <div class=\"article-info\">-->\n<!--          <div class=\"author-image-wrapper\">-->\n<!--            <cc-aspect-ratio [ratio]=\"{w: 1, h: 1}\">-->\n<!--              <cc-image-shell class=\"author-image\" animation=\"spinner\" [src]=\"article.author.picture\" [alt]=\"'author image'\"></cc-image-shell>-->\n<!--            </cc-aspect-ratio>-->\n<!--          </div>-->\n<!--          <div class=\"article-details\">-->\n<!--            <span class=\"author-name\">{{ article.author.name }}</span>-->\n<!--            <span class=\"article-date\">{{ article.published_date }}</span>-->\n<!--          </div>-->\n<!--        </div>-->\n<!--        <h3 class=\"article-title\">{{ article.title }}</h3>-->\n<!--        <span class=\"article-category badge\" [attr.category]=\"article.category\">{{ article.category }}</span>-->\n<!--      </div>-->\n<!--    </div>-->\n<!--  </div>-->\n<!--</div>-->\n<div id=\"wrapper\">\n  <!-- Work -->\n\n<!--  <div class=\"work\">-->\n<!--    <h2>Case Studies</h2>-->\n<!--  </div>-->\n  <section id=\"casestudies\" class=\"casestudies\">\n    <article class=\"content\">\n      <a href=\"autoshow.html\">\n        <div class=\"content-overlay\"></div>\n        <img class=\"content-image\" src=\"../assets/imgs/products/drugs.png\" alt=\"\" />\n        <div class=\"content-details fadeIn-bottom\">\n          <h2 class=\"content-title\">SR UI Architect, MedImpact Healthcare Systems</h2>\n          <p class=\"content-text\"></p>\n        </div>\n      </a>\n    </article>\n\n\n    <article class=\"content\">\n      <div class=\"content-overlay\"></div>\n      <img class=\"content-image\" src=\"../assets/imgs/products/fhf.jpg\" alt=\"\" />\n      <div class=\"content-details fadeIn-bottom\">\n        <h2 class=\"content-title role\">Sr Front End Engineer</h2>\n        <h2 class=\"content-title\">First Help Financial</h2>\n        <p class=\"content-text\"></p>\n      </div>\n    </article>\n\n    <article class=\"content\">\n      <div class=\"content-overlay\"></div>\n      <img class=\"content-image\" src=\"https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362\" alt=\"\" />\n      <div class=\"content-details fadeIn-bottom\">\n        <h2 class=\"content-title\">Engineering Manager & Lead Creative Developer</h2>\n        <h2 class=\"content-title\">The Boston Globe</h2>\n        <p class=\"content-text\"></p>\n      </div>\n    </article>\n\n    <article class=\"content\">\n      <div class=\"content-overlay\"></div>\n      <img class=\"content-image\" src=\"https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362\" alt=\"\" />\n      <div class=\"content-details fadeIn-bottom\">\n        <h2 class=\"content-title\"> Lead Front End Engineer</h2>\n        <h2 class=\"content-title\">The Bank Of New York Mellon</h2>\n\n      </div>\n    </article>\n\n    <article class=\"content\">\n      <div class=\"content-overlay\"></div>\n      <img class=\"content-image\" src=\"https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362\" alt=\"\" />\n      <div class=\"content-details fadeIn-bottom\">\n        <h2 class=\"content-title\">Keypoint Intelligence</h2>\n        <h2 class=\"content-title\">Enterprise Architect & Agile Coach</h2>\n        <p class=\"content-text\"></p>\n      </div>\n    </article>\n\n    <article class=\"content\">\n      <div class=\"content-overlay\"></div>\n      <img class=\"content-image\" src=\"https://firebasestorage.googleapis.com/v0/b/tennisgamelove-2703c.appspot.com/o/mean.png?alt=media&token=1f98f30d-ef46-46ab-b598-20d208d1f9ce\" alt=\"\" />\n      <div class=\"content-details fadeIn-bottom\">\n        <h2 class=\"content-title\">MEANStack Software Partners</h2>\n        <h2 class=\"content-title\">Sr. Software Engineer</h2>\n        <p class=\"content-text\"></p>\n      </div>\n    </article>\n\n  </section>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/autocomplete/autocomplete.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/autocomplete/autocomplete.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid content-wrapper\">\n  <h1 class=\"page-title\">Autocomplete or Typeahead</h1>\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h2 class=\"section-title\">Using Material Design</h2>\n\n      <div class=\"row autocomplete-example\">\n        <div class=\"col-md-5 col-sm-12\">\n          <p>Example that loads results from a json file:</p>\n        </div>\n        <div class=\"col-md-7 col-sm-12\">\n          <div class=\"form-group\">\n            <label>Countries</label>\n            <input class=\"form-control\" type=\"text\" placeholder=\"Where do you live?\" [formControl]=\"selectedCountry\" [matAutocomplete]=\"countriesAutocomplete\">\n            <mat-autocomplete #countriesAutocomplete=\"matAutocomplete\" class=\"countries-autocomplete\">\n              <mat-option *ngFor=\"let country of filteredCountries | async\" [value]=\"country.name\">\n                {{ country.name }}\n              </mat-option>\n            </mat-autocomplete>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row autocomplete-example\">\n        <div class=\"col-md-5 col-sm-12\">\n          <p>Example with images:</p>\n        </div>\n        <div class=\"col-md-7 col-sm-12\">\n          <div class=\"form-group\">\n            <label>Task Owner</label>\n            <input class=\"form-control\" type=\"text\" placeholder=\"Select a task owner\" [matAutocomplete]=\"taskOwnerAutocomplete\" [formControl]=\"selectedTaskOwner\">\n            <mat-autocomplete #taskOwnerAutocomplete=\"matAutocomplete\" class=\"task-owners-autocomplete\">\n              <mat-option class=\"d-flex\" *ngFor=\"let user of filteredTaskOwners | async\" [value]=\"user.name\">\n                <div class=\"image-container\">\n                  <cc-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n                    <cc-image-shell animation=\"spinner\" [src]=\"user.picture\" [alt]=\"'user image'\"></cc-image-shell>\n                  </cc-aspect-ratio>\n                </div>\n                <span class=\"user-name\">{{user.name}} |</span>\n                <span class=\"user-role\">{{user.role}}</span>\n              </mat-option>\n            </mat-autocomplete>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h2 class=\"section-title\">Using Bootstrap</h2>\n\n      <div class=\"row autocomplete-example bootstrap-fruits-example\">\n        <div class=\"col-md-5 col-sm-12\">\n          <p>Example that loads results from a list. It includes a formater function to format every result to Uppercase:</p>\n        </div>\n        <div class=\"col-md-7 col-sm-12\">\n          <div class=\"form-group\">\n            <label>Select a fruit</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"What's your favourite fruit?\" [formControl]=\"selectedFruit\" [ngbTypeahead]=\"searchFruits\" [resultFormatter]=\"fruitsFormatter\"/>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row autocomplete-example bootstrap-users-example\">\n        <div class=\"col-md-5 col-sm-12\">\n          <p>Autocomplete with a custom template for the results:</p>\n        </div>\n        <div class=\"col-md-7 col-sm-12\">\n          <div class=\"form-group\">\n            <label>Select a user</label>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"selectedUser\" [ngbTypeahead]=\"searchUsers\" [resultTemplate]=\"usersAutocompleteTemplate\" [inputFormatter]=\"usersFormatter\"/>\n          </div>\n        </div>\n      </div>\n\n      <ng-template #usersAutocompleteTemplate let-user=\"result\" let-term=\"term\">\n        <div class=\"user-autocomplete-result\">\n          <div class=\"image-container\">\n            <cc-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n              <cc-image-shell animation=\"spinner\" [src]=\"user['picture']\" [alt]=\"'user image'\"></cc-image-shell>\n            </cc-aspect-ratio>\n          </div>\n          <ngb-highlight class=\"name-container\" [result]=\"user.name\" [term]=\"term\"></ngb-highlight>\n        </div>\n      </ng-template>\n\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/file-uploader/file-uploader.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/file-uploader/file-uploader.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid content-wrapper\">\n  <h1 class=\"page-title\">File Uploaders</h1>\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h2 class=\"section-title\">Avatar Upload</h2>\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 col-sm-10 col-xs-12 avatar-upload-wrapper\">\n          <cc-aspect-ratio [ratio]=\"{w:1, h:1}\" appFileUploader class=\"avatar-container\"\n            (filesChangeEmiter)=\"onDropzoneSingleChange($event, 'avatar')\"\n            [allowedExtensions]=\"['png', 'jpg', 'bmp', 'jpeg']\">\n            <span class=\"uploader-empty-state\" *ngIf=\"!uploaders.avatar.url\">\n              <mat-icon class=\"image-icon\" svgIcon=\"image\"></mat-icon>\n            </span>\n            <div *ngIf=\"uploaders.avatar.url\">\n              <cc-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n                <cc-image-shell [mode]=\"'cover'\" animation=\"spinner\" [src]=\"uploaders.avatar.url\" [alt]=\"'user image'\"></cc-image-shell>\n              </cc-aspect-ratio>\n            </div>\n          </cc-aspect-ratio>\n          <button type=\"button\" class=\"btn-upload\" *ngIf=\"!uploaders.avatar.url\"\n            (click)=\"fileDialogAvatar.click()\">\n            <span>Choose File</span>\n          </button>\n          <span class=\"avatar-uploaded-message\" *ngIf=\"uploaders.avatar.progress === 100\">\n            <i class=\"fas fa-check-circle\"></i>\n            Uploaded successfully\n          </span>\n          <input #fileDialogAvatar (change)=\"onSingleChange($event, 'avatar')\" type=\"file\" accept=\"image/*\" />\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h2 class=\"section-title\">Image Uploader</h2>\n      <div class=\"row no-gutters\">\n        <div class=\"col-lg-5 col-md-6 col-sm-10 col-xs-12 image-uploader-wrapper\">\n          <cc-aspect-ratio [ratio]=\"{w:3, h:2}\" appFileUploader  (filesChangeEmiter)=\"onDropzoneSingleChange($event, 'image')\"\n          (filesInvalidEmiter)=\"onInvalidFiles($event)\"\n          [allowedExtensions]=\"['png','jpg','bmp','jpeg']\">\n            <div class=\"dropzone\" [ngClass]=\"(uploaders.image.progress >= 100 ? 'uploaded-state' : 'empty-state')\">\n              <mat-icon class=\"upload-icon\" svgIcon=\"upload\"></mat-icon>\n              <span *ngIf=\"!uploaders.image.progress\">\n                Drag & drop your image here\n              </span>\n              <ngb-progressbar *ngIf=\"(uploaders.image.progress >= 0)\" class=\"rounded-progress-bar\" [value]=\"uploaders.image.progress\"></ngb-progressbar>\n              <span *ngIf=\"uploaders.image.progress < 100\">\n                Uploading\n              </span>\n              <span *ngIf=\"uploaders.image.progress >= 100\">\n                Uploaded\n              </span>\n              <button *ngIf=\"!uploaders.image.progress\" type=\"button\" class=\"select-image-btn\" (click)=\"fileDialogImage.click()\">\n                Or select from your computer\n              </button>\n              <div *ngIf=\"uploaders.image.progress !== undefined\" class=\"post-actions-wrapper\">\n                <button type=\"button\" class=\"post-btn\" (click)=\"post()\">\n                  Post\n                </button>\n                <button type=\"button\" class=\"cancel-btn\" (click)=\"resetUploader('image')\">\n                  Cancel\n                </button>\n              </div>\n            </div>\n            <input #fileDialogImage (change)=\"onSingleChange($event, 'image')\" type=\"file\" accept=\"image/*\" />\n          </cc-aspect-ratio>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-10 col-md-12\">\n      <h2 class=\"section-title\">Files Uploader</h2>\n      <div class=\"files-uploader-wrapper\">\n        <div appFileUploader class=\"dropzone\" (filesChangeEmiter)=\"onDropzoneMultipleChange($event, 'files')\">\n          <button type=\"button\" class=\"btn btn-link dropzone-btn\" (click)=\"fileDialogFiles.click()\">\n            <mat-icon class=\"upload-icon\" svgIcon=\"upload\"></mat-icon>\n            <span>Drop files here to upload or click to choose file</span>\n          </button>\n          <input #fileDialogFiles (change)=\"onMultipleChange($event, 'files')\" type=\"file\" multiple />\n        </div>\n      </div>\n      <div class=\"files-uploader-list\">\n        <ul class=\"dropzone-list\" *ngIf=\"uploaders.files.list.length > 0\">\n          <li class=\"dropzone-list-item\" *ngFor=\"let file of uploaders.files.list\">\n            <div class=\"dropzone-list-item-info\">\n              <span class=\"file-name\">{{ file.name }}</span>\n              <p class=\"progress-bar-wrapper\">\n                <ngb-progressbar *ngIf=\"file.progress >= 0\" class=\"rounded-progress-bar\" [value]=\"file.progress\"></ngb-progressbar>\n              </p>\n              <span class=\"file-upload-status\">\n                {{ file.loaded }} KB of {{ file.total }} KB ({{ file.progress }}% done)\n              </span>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/modals/modals.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/modals/modals.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid content-wrapper\">\n  <h1 class=\"page-title\">Modals (Using Material Dialogs)</h1>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-5\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"card-description\">Create new account</p>\n          <button type=\"button\" class=\"open-button\" (click)=\"openRegisterModal()\">Open Modal</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-md-5\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"card-description\">Sign in</p>\n          <button type=\"button\" class=\"open-button\" (click)=\"openSignInModal()\">Open Modal</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/modals/templates/create-account-modal/create-account-modal.component.html": 
        /*!**************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/modals/templates/create-account-modal/create-account-modal.component.html ***!
          \**************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-container\">\n  <div class=\"app-logo-container\">\n    <cc-aspect-ratio [ratio]=\"{w: 73, h: 80}\">\n      <cc-image-shell animation=\"spinner\" [src]=\"'/assets/icons/logos/angular-logo-2.svg'\" [alt]=\"'app logo'\"></cc-image-shell>\n    </cc-aspect-ratio>\n  </div>\n  <h1 class=\"modal-title\">Register</h1>\n  <form [formGroup]=\"modalForm\" class=\"modal-form\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"User name\" formControlName=\"username\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n    </div>\n    <div class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"newsletter\" formControlName=\"newsletter\">\n      <label class=\"custom-control-label\" for=\"newsletter\">\n        <span class=\"custom-label\">Subscribe to newsletter</span>\n      </label>\n      <span class=\"form-text help-text\">\n        By creating an account, you agree to the site Terms of Service and Privacy Policy.\n      </span>\n    </div>\n    <div class=\"buttons-row\">\n      <button class=\"register-btn\" type=\"submit\" (click)=\"createAccount()\">Create account</button>\n      <button class=\"log-in-btn\">Log In</button>\n    </div>\n  </form>\n  <div class=\"register-divider\">\n    <hr class=\"line\"><span>Or</span><hr class=\"line\">\n  </div>\n  <button type=\"button\" class=\"fb-signin\">\n    Sign up with Facebook\n  </button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/modals/templates/sign-in-modal/sign-in-modal.component.html": 
        /*!************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/modals/templates/sign-in-modal/sign-in-modal.component.html ***!
          \************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-container\">\n  <div class=\"modal-login-form\">\n    <div class=\"row\">\n      <div class=\"col-3 app-logo-container\">\n        <cc-aspect-ratio [ratio]=\"{w: 73, h: 80}\">\n          <cc-image-shell class=\"app-logo\" animation=\"spinner\" [src]=\"'/assets/icons/logos/angular-logo-2.svg'\" [alt]=\"'app logo'\"></cc-image-shell>\n        </cc-aspect-ratio>\n      </div>\n    </div>\n    <h1 class=\"modal-title\">Sign In</h1>\n    <form [formGroup]=\"modalForm\" class=\"modal-form\">\n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"rememberMe\" formControlName=\"rememberMe\">\n        <label class=\"custom-control-label\" for=\"rememberMe\">\n          <span class=\"custom-label\">Keep me logged in</span>\n        </label>\n      </div>\n      <div class=\"existing-account-section\">\n        <button class=\"btn btn-link\" (click)=\"forgotPassword()\">Forgot email or password?</button>\n      </div>\n      <div class=\"buttons-row\">\n        <button class=\"sign-in-btn\" type=\"submit\" (click)=\"signIn()\">Sign In</button>\n        <button class=\"register-btn\">Create Account</button>\n      </div>\n    </form>\n    <div class=\"register-divider\">\n      <hr class=\"line\"><span>Or</span><hr class=\"line\">\n    </div>\n    <button type=\"button\" class=\"fb-signin\">\n      Sign up with Facebook\n    </button>\n  </div>\n  <div class=\"side-image\">\n    <div class=\"background-image\"></div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/home/alerts/alerts.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/home/alerts/alerts.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n:host {\n  --page-title-color: rgb(var(--palette-primary-rgb));\n  --page-padding: 60px 40px;\n  --page-spacing: 10px;\n  --text-color: rgb(var(--palette-grey-5-rgb));\n}\n.content-wrapper {\n  padding: var(--page-padding);\n}\n.content-wrapper .page-title {\n  color: var(--page-title-color);\n  font-size: 30px;\n  margin-bottom: calc(var(--page-spacing) * 6);\n}\n.content-wrapper .card {\n  min-height: 240px;\n  border: none;\n  border-radius: 6px;\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .card .card-description {\n  font-size: 18px;\n  color: var(--text-color);\n}\n.content-wrapper .card .card-body {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: space-around;\n  padding: calc(var(--page-spacing) * 5);\n}\n.content-wrapper .card .card-body .open-button {\n  background-color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-white-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n}\n.content-wrapper .card .card-body .open-button:hover:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.content-wrapper .card .card-body .open-button:active:not([disabled]), .content-wrapper .card .card-body .open-button.active:not([disabled]), .content-wrapper .card .card-body .open-button:focus:not([disabled]), .content-wrapper .card .card-body .open-button.focus:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.content-wrapper .card .card-body .open-button[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bndpc2UvYmVjY2Evc3JjL3RoZW1lL3BhbGV0dGVzL3NoYXJlZC5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvdGhlbWUvcGFsZXR0ZXMvbW9kZS5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvYXBwL2hvbWUvYWxlcnRzL2FsZXJ0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9hbGVydHMvYWxlcnRzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvdGhlbWUvbWl4aW5zL2J1dHRvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUNKQTtFQUVFLG1EQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRDQUFBO0FDMkNGO0FEeENBO0VBQ0UsNEJBQUE7QUMyQ0Y7QUR6Q0U7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtBQzJDSjtBRHhDRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUMwQ0o7QUR4Q0k7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUMwQ047QUR4Q0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQUE7QUMwQ047QUR4Q007RUV4QkosaUZBQUE7RUFDQSx5RUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdFQUFBO0FEbUVGO0FDaEVJO0VBQ0Usb0VBQUE7RUFDQSx5RUFBQTtFQUNBLHNFQUFBO0FEa0VOO0FDMURJO0VBQ0Usb0VBQUE7RUFDQSx5RUFBQTtFQUNBLHNFQUFBO0FENEROO0FDeERFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FEMERKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hbGVydHMvYWxlcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgU2hhcmVkXG4qL1xuXG5AaW1wb3J0ICdwcmVmZXJlbmNlcyc7XG5AaW1wb3J0ICdpbnRlcmZhY2UnO1xuQGltcG9ydCAnbW9kZSc7XG5cbi8vIEFuIGFic3RyYWN0IHdheSB0byBwcm92aWRlIGNvbG9ycy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgYW4gaW50ZXJmYWNlIHRvIGJvdGggU2FzcyB2YXJpYWJsZXMgYW5kIENTUyA0IHZhcmlhYmxlcyBiYXNlZCBjb2xvciBwYWxldHRlcy5cbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCRjb2xvci1uYW1lLCAkYWxwaGE6IDEpIHtcbiAgLy8gJGNvbG9yLXBhbGV0dGUtbW9kZSAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjaG9vc2VuLXBhbGV0dGUgICAgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2UgICA9PiAgRGVmaW5lZCBpbiBpbnRlcmZhY2Uuc2Nzc1xuICAvLyAkY3NzNC12YXItcHJlZml4ICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG4gIC8vICRjc3M0LWNvbG9yLWZvcm1hdCAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcblxuICBAaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ2Nzcy00Jykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlLWluZGV4OiBpbmRleCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUtaW5kZXgpID09ICdudW1iZXInKSB7XG4gICAgICAkY29sb3ItdmFyaWFibGUtbmFtZTogbnRoKCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLXZhcmlhYmxlLWluZGV4KTtcblxuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiYSh2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArJyksICN7JGFscGhhfSknfTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsgJykpJ307XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLW5hbWV9KSB3YXMgbm90IGZvdW5kIG9uIENvbG9yIFBhbGV0dGUgZGVmaW5pdGlvbi4gTWFrZSBzdXJlIGl0J3MgZGVmaW5lZCBpbiB0aGUgdGhlbWUvcGFsZXR0ZXMvaW50ZXJmYWNlLnNjc3MgZmlsZVwiO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnc2FzcycpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjaG9vc2VuLXBhbGV0dGU7XG5cbiAgICAkY29sb3ItdmFyaWFibGU6IG1hcC1nZXQoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICAvLyBDaGVjayBpZiBpdCBpcyBhIFNhc3MgY29sb3JcbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlKSA9PSAnY29sb3InKSB7XG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiByZ2JhKCRjb2xvci12YXJpYWJsZSwgJGFscGhhKTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gJGNvbG9yLXZhcmlhYmxlO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci12YXJpYWJsZX0pIGlzIG5vdCBhIFNhc3MgY29sb3JcIjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gQ29sb3IgUGFsZXR0ZSBtb2RlIHNlbGVjdGVkIGluIHRoZW1lL3BhbGV0dGVzL3ByZWZlcmVuY2VzLnNjc3MnO1xuICB9XG59XG4iLCIvKlxuICBDU1MgNCBNb2RlXG4qL1xuJGNvbG9yLXBhbGV0dGUtbW9kZTogJ2Nzcy00JztcblxuXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vLyBAaW1wb3J0ICdjb3JlJztcbi8vXG4vLyAkY29sb3ItcGFsZXR0ZS1tb2RlOiAnc2Fzcyc7XG4vL1xuLy8gLy8gSW1wb3J0IHRoZSBkZWZpbml0aW9ucyBvZiB0aGUgcGFsZXR0ZSB5b3Ugd2FudCB0byB1c2Vcbi8vIEBpbXBvcnQgJ3BhbGV0dGUtMS9kZWZpbml0aW9ucyc7XG4vLyAvLyBAaW1wb3J0ICdwYWxldHRlLTIvZGVmaW5pdGlvbnMnO1xuLy9cbi8vIC8vIEFzc2lnbiBhIHBhcnRpY3VsYXIgQ29sb3IgUGFsZXR0ZSB0byB0aGUgJ2Nob29zZW4tcGFsZXR0ZScgcG9pbnRlci5cbi8vIC8vICRjaG9vc2VuLXBhbGV0dGUgd2lsbCBiZSBhIFNhc3MgbWFwIHBvaW50aW5nIHRvIGFub3RoZXIgY29sb3IgcGFsZXR0ZSBTYXNzIG1hcFxuLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0xKTtcbi8vIC8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMik7XG4iLCJAaW1wb3J0ICdzaGFyZWQnO1xuXG46aG9zdCB7XG4gIC8vIC8vIERlZmF1bHQgdmFyaWFibGVzXG4gIC0tcGFnZS10aXRsZS1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9O1xuICAtLXBhZ2UtcGFkZGluZzogNjBweCA0MHB4O1xuICAtLXBhZ2Utc3BhY2luZzogMTBweDtcbiAgLS10ZXh0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktNScpfTtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtcGFkZGluZyk7XG5cbiAgLnBhZ2UtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogNik7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgbWluLWhlaWdodDogMjQwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAzKTtcblxuICAgIC5jYXJkLWRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICB9XG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogNSk7XG5cbiAgICAgIC5vcGVuLWJ1dHRvbiB7XG4gICAgICAgIEBpbmNsdWRlIGJ1dHRvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8qXG4gIFNoYXJlZFxuKi9cbi8qXG4gIENTUyA0IE1vZGVcbiovXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8qXG4gIFNoYXJlZFxuKi9cbi8qXG4gIENTUyA0IE1vZGVcbiovXG4vKlxuICBTYXNzIE1vZGVcbiovXG46aG9zdCB7XG4gIC0tcGFnZS10aXRsZS1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKTtcbiAgLS1wYWdlLXBhZGRpbmc6IDYwcHggNDBweDtcbiAgLS1wYWdlLXNwYWNpbmc6IDEwcHg7XG4gIC0tdGV4dC1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtZ3JleS01LXJnYikpO1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1wYWRkaW5nKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLnBhZ2UtdGl0bGUge1xuICBjb2xvcjogdmFyKC0tcGFnZS10aXRsZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogNik7XG59XG4uY29udGVudC13cmFwcGVyIC5jYXJkIHtcbiAgbWluLWhlaWdodDogMjQwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAzKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhcmQgLmNhcmQtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDUpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5IC5vcGVuLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtd2hpdGUtcmdiKSkpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC41cywgY29sb3IgMC41cywgYmFja2dyb3VuZC1jb2xvciAwLjVzO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5IC5vcGVuLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keSAub3Blbi1idXR0b246YWN0aXZlOm5vdChbZGlzYWJsZWRdKSwgLmNvbnRlbnQtd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5IC5vcGVuLWJ1dHRvbi5hY3RpdmU6bm90KFtkaXNhYmxlZF0pLCAuY29udGVudC13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkgLm9wZW4tYnV0dG9uOmZvY3VzOm5vdChbZGlzYWJsZWRdKSwgLmNvbnRlbnQtd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5IC5vcGVuLWJ1dHRvbi5mb2N1czpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keSAub3Blbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgb3BhY2l0eTogMC41O1xufSIsIkBpbXBvcnQgJ3BhbGV0dGVzL3NoYXJlZCc7XG5cbkBtaXhpbiBidXR0b24oKSB7XG4gIC8vIGNvbG9ycyB0aGF0IGNhbiBiZSByZWRlZmluZWQ6XG4gIC8vIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3JcbiAgLy8gLS1idXR0b24tYm9yZGVyLWNvbG9yXG4gIC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9OyAvLyAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yXG4gICRkZWZhdWx0LWJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9OyAvLyAtLWJ1dHRvbi1ib3JkZXItY29sb3JcbiAgJGRlZmF1bHQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignd2hpdGUnKX07IC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsICRkZWZhdWx0LWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsICRkZWZhdWx0LWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cywgY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgJGRlZmF1bHQtYm9yZGVyLWNvbG9yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgJGRlZmF1bHQtYm9yZGVyLWNvbG9yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogLjU7XG4gIH1cbn1cblxuQG1peGluIGJ1dHRvbi1vdXRsaW5lKCkge1xuICAvLyBjb2xvcnMgdGhhdCBjYW4gYmUgcmVkZWZpbmVkOlxuICAvLyAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yXG4gIC8vIC0tYnV0dG9uLWJvcmRlci1jb2xvclxuICAvLyAtLWJ1dHRvbi1jb2xvclxuXG4gICRkZWZhdWx0LWJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignd2hpdGUnKX07IC8vIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3JcbiAgJGRlZmF1bHQtYm9yZGVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07IC8vIC0tYnV0dG9uLWJvcmRlci1jb2xvclxuICAkZGVmYXVsdC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9OyAvLyAtLWJ1dHRvbi1jb2xvclxuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCAkZGVmYXVsdC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCAkZGVmYXVsdC1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCAkZGVmYXVsdC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuNXMsIGNvbG9yIC41cywgYmFja2dyb3VuZC1jb2xvciAuNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCAkZGVmYXVsdC1jb2xvcik7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsICRkZWZhdWx0LWJvcmRlci1jb2xvcik7XG4gICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsICRkZWZhdWx0LWJhY2tncm91bmQtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCAkZGVmYXVsdC1jb2xvcik7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsICRkZWZhdWx0LWJvcmRlci1jb2xvcik7XG4gICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsICRkZWZhdWx0LWJhY2tncm91bmQtY29sb3IpO1xuICAgIH1cbiAgfVxuICAmW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/home/alerts/alerts.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/home/alerts/alerts.component.ts ***!
          \*************************************************/
        /*! exports provided: AlertsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function () { return AlertsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _shared_alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/alert-template/alert-template.component */ "./src/app/shared/alert-template/alert-template.component.ts");
            var AlertsComponent = /** @class */ (function () {
                function AlertsComponent(dialog) {
                    this.dialog = dialog;
                }
                // You can pass the following options to the alert component:
                // {
                //   iconPosition: 'overflow' | 'default' // icon position
                //   iconType: 'success' | 'error', // icon shape and color
                //   title: "Here's a message!", // Title of the modal
                //   text: 'The content, // Text of the modal
                //   options: false, // True will display yes or no buttons
                //   input: false, // True will show a text input
                //   button: 'Good', // Text of the modal button
                //   time: undefined // Time you want the modal to live (ms)
                // }
                AlertsComponent.prototype.basicAlert = function () {
                    var dialogRef = this.dialog.open(_shared_alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_3__["AlertTemplateComponent"], {
                        data: {
                            title: 'Thanks for sharing!',
                            button: 'Download'
                        },
                        autoFocus: false
                    });
                };
                AlertsComponent.prototype.textAlert = function () {
                    var dialogRef = this.dialog.open(_shared_alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_3__["AlertTemplateComponent"], {
                        data: {
                            title: 'Meet up with Alba',
                            text: 'Today, 5:30 PM',
                            button: 'Yasss!'
                        },
                        autoFocus: false
                    });
                };
                AlertsComponent.prototype.iconAlert = function () {
                    var dialogRef = this.dialog.open(_shared_alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_3__["AlertTemplateComponent"], {
                        data: {
                            iconType: 'success',
                            title: 'Good job!',
                            text: 'You are the winner',
                            button: 'Play again'
                        },
                        autoFocus: false
                    });
                };
                AlertsComponent.prototype.overflowIconSuccessAlert = function () {
                    var dialogRef = this.dialog.open(_shared_alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_3__["AlertTemplateComponent"], {
                        data: {
                            iconType: 'success',
                            iconPosition: 'overflow',
                            title: 'Good job!',
                            text: 'You are the winner',
                            button: 'Claim prize'
                        },
                        autoFocus: false,
                        panelClass: ['overflow-icon-alert-wrapper']
                    });
                };
                AlertsComponent.prototype.overflowIconErrorAlert = function () {
                    var dialogRef = this.dialog.open(_shared_alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_3__["AlertTemplateComponent"], {
                        data: {
                            iconType: 'error',
                            iconPosition: 'overflow',
                            title: 'Session expired',
                            text: 'Due to inactivity, your session was closed.',
                            button: 'Log in'
                        },
                        autoFocus: false,
                        panelClass: ['overflow-icon-alert-wrapper']
                    });
                };
                AlertsComponent.prototype.optionsAlert = function () {
                    var _this = this;
                    var dialogRef = this.dialog.open(_shared_alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_3__["AlertTemplateComponent"], {
                        data: {
                            iconType: 'success',
                            title: 'Do you want to submit your exam?',
                            text: 'Think it twice',
                            options: true
                        },
                        autoFocus: false
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result) {
                            _this.dialog.open(_shared_alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_3__["AlertTemplateComponent"], {
                                data: {
                                    iconType: 'success',
                                    title: 'Congrats!',
                                    text: 'Your exam has been submitted successfully.',
                                    button: 'Ok'
                                },
                                autoFocus: false
                            });
                        }
                    });
                };
                AlertsComponent.prototype.canceledAlert = function () {
                    var _this = this;
                    var dialogRef = this.dialog.open(_shared_alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_3__["AlertTemplateComponent"], {
                        data: {
                            iconType: 'error',
                            title: 'Do you want to delete your file?',
                            text: 'You will not be able to recover it',
                            options: true
                        },
                        autoFocus: false
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result) {
                            _this.dialog.open(_shared_alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_3__["AlertTemplateComponent"], {
                                data: {
                                    iconType: 'success',
                                    title: 'Deleted',
                                    text: 'Your file has been deleted.',
                                    button: 'Ok'
                                },
                                autoFocus: false
                            });
                        }
                        else {
                            _this.dialog.open(_shared_alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_3__["AlertTemplateComponent"], {
                                data: {
                                    iconType: 'error',
                                    title: 'Canceled',
                                    text: 'Your file is safe. You can find it in your inbox.',
                                    button: 'Ok'
                                },
                                autoFocus: false
                            });
                        }
                    });
                };
                AlertsComponent.prototype.inputAlert = function () {
                    var _this = this;
                    var dialogRef = this.dialog.open(_shared_alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_3__["AlertTemplateComponent"], {
                        data: {
                            title: 'Please enter your name',
                            input: true
                        },
                        autoFocus: false
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result !== false) {
                            _this.dialog.open(_shared_alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_3__["AlertTemplateComponent"], {
                                data: {
                                    title: 'Your name is',
                                    text: result,
                                    button: 'Ok'
                                },
                                autoFocus: false
                            });
                        }
                    });
                };
                AlertsComponent.prototype.timedAlert = function () {
                    var dialogRef = this.dialog.open(_shared_alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_3__["AlertTemplateComponent"], {
                        data: {
                            title: 'Auto close alert!',
                            text: 'I will close in 2 seconds. Bye bye!',
                            time: 2000
                        },
                        autoFocus: false
                    });
                };
                return AlertsComponent;
            }());
            AlertsComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            AlertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-alerts',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alerts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/alerts/alerts.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alerts.component.scss */ "./src/app/home/alerts/alerts.component.scss")).default]
                })
            ], AlertsComponent);
            /***/ 
        }),
        /***/ "./src/app/home/ali/ali.component.scss": 
        /*!*********************************************!*\
          !*** ./src/app/home/ali/ali.component.scss ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n.banner-h1-bigal {\n  font-family: \"Helvetica | Raleway\";\n  font-size: 3.5rem;\n  font-weight: 100 !important;\n  color: #fff;\n}\n.wrapper {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto 30% 40% auto auto;\n  grid-template-areas: \"hd\" \"hero  \" \"casestudies\" \"contact\" \"ft\";\n}\n/* case studies */\n.casestudies {\n  align-items: stretch;\n  display: grid;\n  grid-area: casestudies;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: auto auto;\n  justify-self: stretch;\n  margin: 0;\n}\n.work {\n  background-color: #F4FAFF;\n  grid-column: span 3;\n  height: auto;\n  padding: 1rem;\n  margin: 0;\n}\n.work h2 {\n  color: #333745;\n  font-size: 3rem;\n  font-weight: 300;\n  text-align: center;\n}\n.content {\n  position: relative;\n}\n.content .content-overlay {\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  opacity: 0;\n  margin: 0;\n  padding: 0;\n  transition: all 0.4s ease-in-out 0s;\n}\n.content:hover .content-overlay {\n  opacity: 1;\n}\n.content-image {\n  width: 100%;\n  height: 100%;\n}\n.content-details {\n  position: absolute;\n  text-align: center;\n  padding: 0 1rem;\n  width: 100%;\n  top: 40%;\n  left: 50%;\n  opacity: 0;\n  transform: translate(-50%, -50%);\n  transition: all 0.3s ease-in-out 0s;\n}\n.content:hover .content-details {\n  top: 50%;\n  left: 50%;\n  opacity: 1;\n}\n.content-details h2 {\n  color: #F4FAFF;\n  font-weight: 100;\n  margin-bottom: 0.5rem;\n}\n.content-details p {\n  color: #F4FAFF;\n  font-size: 1rem;\n}\n.fadeIn-bottom {\n  top: 80%;\n}\n.lead {\n  font-family: \"Helvetica | Raleway\";\n  font-size: 3.5rem;\n  font-weight: 100 !important;\n  color: #fff;\n}\n.top-banner-section {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 55rem;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  align-content: center;\n  justify-content: center;\n}\n.top-banner-section .banner-image-div {\n  grid-area: 1/1/2/2;\n}\n.top-banner-section .banner-overlay-div {\n  grid-area: 1/1/2/2;\n}\n.top-banner-section .banner-text-div {\n  grid-area: 1/1/2/2;\n}\n.banner-image {\n  display: grid;\n  min-width: 350px;\n  width: 100%;\n  height: 55rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.banner-overlay-div {\n  display: grid;\n  max-width: 100%;\n  background: black;\n  background: linear-gradient(60deg, rgba(0, 0, 0, 0.38) 20%, rgba(255, 255, 255, 0) 100%);\n}\n.banner-text-div {\n  display: grid;\n  align-items: center;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: 3rem;\n}\n.banner-body-text {\n  font-size: calc(10pt + 0.15vw);\n  margin-top: 0.5em;\n  color: white;\n  text-decoration: none;\n}\n.banner-body-text:hover {\n  color: white;\n}\n.banner-body-text:visited {\n  color: white;\n}\n.banner-body-text:active {\n  color: white;\n}\n.banner-btn {\n  margin-top: 1em;\n}\n.banner-btn-item {\n  color: #FFFFFF;\n  text-align: center;\n  padding: 1em;\n  margin-top: 2rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  border: 1px solid white;\n}\n.banner-btn-item:link {\n  text-decoration: none;\n}\n.banner-btn-item:visited {\n  text-decoration: none;\n}\n.flex-container {\n  display: flex;\n}\n.content-wrapper {\n  padding: var(--page-padding);\n}\n.content-wrapper .page-title {\n  color: var(--page-title-color);\n  font-size: 30px;\n}\n.content-wrapper .section-title {\n  margin-top: calc(var(--page-spacing) * 6);\n  font-size: 26px;\n  color: var(--section-title-color);\n  padding-bottom: var(--page-spacing);\n  border-bottom: 1px solid var(--section-subtitle-border-color);\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .section-text {\n  color: var(--section-subtitle-color);\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .btn {\n  background-color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-white-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n  margin-bottom: calc(var(--page-spacing) * 2.5);\n  width: 100%;\n}\n.content-wrapper .btn:hover:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.content-wrapper .btn:active:not([disabled]), .content-wrapper .btn.active:not([disabled]), .content-wrapper .btn:focus:not([disabled]), .content-wrapper .btn.focus:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.content-wrapper .btn[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bndpc2UvYmVjY2Evc3JjL3RoZW1lL3BhbGV0dGVzL3NoYXJlZC5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvdGhlbWUvcGFsZXR0ZXMvbW9kZS5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvYXBwL2hvbWUvYWxpL2FsaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9hbGkvYWxpLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvdGhlbWUvbWl4aW5zL2J1dHRvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUNBQTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUN3Q0Y7QURyQ0E7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQ0FBQTtFQUNBLCtEQUNBO0FDdUNGO0FEakNBLGlCQUFBO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7QUNvQ0Y7QURsQ0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDcUNGO0FEbkNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDc0NGO0FEcENBO0VBQ0Usa0JBQUE7QUN1Q0Y7QURyQ0E7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFHQSxtQ0FBQTtBQ3dDRjtBRHJDQTtFQUNFLFVBQUE7QUN3Q0Y7QURyQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ3dDRjtBRHRDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUdBLGdDQUFBO0VBR0EsbUNBQUE7QUN5Q0Y7QUR0Q0E7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUN5Q0Y7QUR0Q0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ3lDRjtBRHRDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDeUNGO0FEdENBO0VBQ0UsUUFBQTtBQ3lDRjtBRHRDQTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUN5Q0Y7QUR0Q0E7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDeUNGO0FEdkNFO0VBQ0Usa0JBQUE7QUN5Q0o7QUR2Q0U7RUFDRSxrQkFBQTtBQ3lDSjtBRHZDRTtFQUNFLGtCQUFBO0FDeUNKO0FEcENBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDdUNGO0FEakNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdGQUFBO0FDb0NGO0FEM0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDOEJGO0FEbEJBO0VBRUUsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ29CRjtBRGxCRTtFQUNFLFlBQUE7QUNvQko7QURsQkU7RUFDRSxZQUFBO0FDb0JKO0FEbEJFO0VBQ0UsWUFBQTtBQ29CSjtBRGhCQTtFQUNFLGVBQUE7QUNtQkY7QURoQkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNtQkY7QURqQkU7RUFDRSxxQkFBQTtBQ21CSjtBRGpCRTtFQUNFLHFCQUFBO0FDbUJKO0FEZkE7RUFDRSxhQUFBO0FDa0JGO0FEZkE7RUFDRSw0QkFBQTtBQ2tCRjtBRGhCRTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtBQ2tCSjtBRGZFO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLDZEQUFBO0VBQ0EsNENBQUE7QUNpQko7QURkRTtFQUNFLG9DQUFBO0VBQ0EsNENBQUE7QUNnQko7QURiRTtFRXpPQSxpRkFBQTtFQUNBLHlFQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0VBQUE7RUZpT0UsOENBQUE7RUFDQSxXQUFBO0FDeUJKO0FDeFBJO0VBQ0Usb0VBQUE7RUFDQSx5RUFBQTtFQUNBLHNFQUFBO0FEMFBOO0FDbFBJO0VBQ0Usb0VBQUE7RUFDQSx5RUFBQTtFQUNBLHNFQUFBO0FEb1BOO0FDaFBFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FEa1BKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hbGkvYWxpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgU2hhcmVkXG4qL1xuXG5AaW1wb3J0ICdwcmVmZXJlbmNlcyc7XG5AaW1wb3J0ICdpbnRlcmZhY2UnO1xuQGltcG9ydCAnbW9kZSc7XG5cbi8vIEFuIGFic3RyYWN0IHdheSB0byBwcm92aWRlIGNvbG9ycy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgYW4gaW50ZXJmYWNlIHRvIGJvdGggU2FzcyB2YXJpYWJsZXMgYW5kIENTUyA0IHZhcmlhYmxlcyBiYXNlZCBjb2xvciBwYWxldHRlcy5cbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCRjb2xvci1uYW1lLCAkYWxwaGE6IDEpIHtcbiAgLy8gJGNvbG9yLXBhbGV0dGUtbW9kZSAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjaG9vc2VuLXBhbGV0dGUgICAgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2UgICA9PiAgRGVmaW5lZCBpbiBpbnRlcmZhY2Uuc2Nzc1xuICAvLyAkY3NzNC12YXItcHJlZml4ICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG4gIC8vICRjc3M0LWNvbG9yLWZvcm1hdCAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcblxuICBAaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ2Nzcy00Jykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlLWluZGV4OiBpbmRleCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUtaW5kZXgpID09ICdudW1iZXInKSB7XG4gICAgICAkY29sb3ItdmFyaWFibGUtbmFtZTogbnRoKCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLXZhcmlhYmxlLWluZGV4KTtcblxuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiYSh2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArJyksICN7JGFscGhhfSknfTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsgJykpJ307XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLW5hbWV9KSB3YXMgbm90IGZvdW5kIG9uIENvbG9yIFBhbGV0dGUgZGVmaW5pdGlvbi4gTWFrZSBzdXJlIGl0J3MgZGVmaW5lZCBpbiB0aGUgdGhlbWUvcGFsZXR0ZXMvaW50ZXJmYWNlLnNjc3MgZmlsZVwiO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnc2FzcycpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjaG9vc2VuLXBhbGV0dGU7XG5cbiAgICAkY29sb3ItdmFyaWFibGU6IG1hcC1nZXQoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICAvLyBDaGVjayBpZiBpdCBpcyBhIFNhc3MgY29sb3JcbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlKSA9PSAnY29sb3InKSB7XG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiByZ2JhKCRjb2xvci12YXJpYWJsZSwgJGFscGhhKTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gJGNvbG9yLXZhcmlhYmxlO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci12YXJpYWJsZX0pIGlzIG5vdCBhIFNhc3MgY29sb3JcIjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gQ29sb3IgUGFsZXR0ZSBtb2RlIHNlbGVjdGVkIGluIHRoZW1lL3BhbGV0dGVzL3ByZWZlcmVuY2VzLnNjc3MnO1xuICB9XG59XG4iLCIvKlxuICBDU1MgNCBNb2RlXG4qL1xuJGNvbG9yLXBhbGV0dGUtbW9kZTogJ2Nzcy00JztcblxuXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vLyBAaW1wb3J0ICdjb3JlJztcbi8vXG4vLyAkY29sb3ItcGFsZXR0ZS1tb2RlOiAnc2Fzcyc7XG4vL1xuLy8gLy8gSW1wb3J0IHRoZSBkZWZpbml0aW9ucyBvZiB0aGUgcGFsZXR0ZSB5b3Ugd2FudCB0byB1c2Vcbi8vIEBpbXBvcnQgJ3BhbGV0dGUtMS9kZWZpbml0aW9ucyc7XG4vLyAvLyBAaW1wb3J0ICdwYWxldHRlLTIvZGVmaW5pdGlvbnMnO1xuLy9cbi8vIC8vIEFzc2lnbiBhIHBhcnRpY3VsYXIgQ29sb3IgUGFsZXR0ZSB0byB0aGUgJ2Nob29zZW4tcGFsZXR0ZScgcG9pbnRlci5cbi8vIC8vICRjaG9vc2VuLXBhbGV0dGUgd2lsbCBiZSBhIFNhc3MgbWFwIHBvaW50aW5nIHRvIGFub3RoZXIgY29sb3IgcGFsZXR0ZSBTYXNzIG1hcFxuLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0xKTtcbi8vIC8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMik7XG4iLCJAaW1wb3J0ICdzaGFyZWQnO1xuXG46aG9zdCB7XG4gIC8vIC8vIERlZmF1bHQgdmFyaWFibGVzXG59XG5cbi5iYW5uZXItaDEtYmlnYWwge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgfCBSYWxld2F5XCI7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ud3JhcHBlcntcbiAgZGlzcGxheTpncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAzMCUgNDAlIGF1dG8gYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgXCJoZFwiXG4gIFwiaGVybyAgXCJcbiAgXCJjYXNlc3R1ZGllc1wiXG4gIFwiY29udGFjdFwiXG4gIFwiZnRcIjtcbn1cbi8qIGNhc2Ugc3R1ZGllcyAqL1xuLmNhc2VzdHVkaWVzIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hcmVhOiBjYXNlc3R1ZGllcztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbiAgbWFyZ2luOjA7XG59XG4ud29ya3tcbiAgYmFja2dyb3VuZC1jb2xvcjojRjRGQUZGO1xuICBncmlkLWNvbHVtbjogc3BhbiAzO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbjowO1xufVxuLndvcmsgaDJ7XG4gIGNvbG9yOiAjMzMzNzQ1O1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OjMwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnR7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuLmNvbnRlbnQgLmNvbnRlbnQtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBvcGFjaXR5OiAwO1xuICBtYXJnaW46MDtcbiAgcGFkZGluZzowO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcbn1cblxuLmNvbnRlbnQ6aG92ZXIgLmNvbnRlbnQtb3ZlcmxheXtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNvbnRlbnQtaW1hZ2V7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbn1cbi5jb250ZW50LWRldGFpbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUwJTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4uY29udGVudDpob3ZlciAuY29udGVudC1kZXRhaWxze1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY29udGVudC1kZXRhaWxzIGgye1xuICBjb2xvcjogI0Y0RkFGRjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uY29udGVudC1kZXRhaWxzIHB7XG4gIGNvbG9yOiAjRjRGQUZGO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5mYWRlSW4tYm90dG9te1xuICB0b3A6IDgwJTtcbn1cblxuLmxlYWQge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgfCBSYWxld2F5XCI7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udG9wLWJhbm5lci1zZWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IC8vIHN0cmV0Y2ggdG8gdGhlIGZ1bGwgZnJhbWVcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1NXJlbTsgLy8gIHRhbGxcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIGdyaWQtcm93LWdhcDogMHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC5iYW5uZXItaW1hZ2UtZGl2IHtcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XG4gIH0gLy8gaW1hZ2VcbiAgLmJhbm5lci1vdmVybGF5LWRpdiB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xuICB9IC8vIG92ZXJsYXlcbiAgLmJhbm5lci10ZXh0LWRpdiB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xuICB9IC8vIG92ZXJsYXkgb2JqZWN0cyBsaWtlIHRleHQsIGJ1dHRvbnMsIGV0Yy5cbn1cblxuLy8gQmFubmVyIGltYWdlIChsYXllciAxKVxuLmJhbm5lci1pbWFnZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1pbi13aWR0aDogMzUwcHg7IC8vIE1pbiBmb3IgbW9iaWxlXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1cmVtO1xuICBvYmplY3QtZml0OiBjb3ZlcjsgLy8gVXNpbmcgdGhpcyBzbyB0aGUgaW1hZ2UgY2FuIGJlIGFueSBzaXplIGFuZCBzdGlsbCBsb29rIGhhbGZ3YXkgZGVjZW50LlxufVxuXG4vLyBHcmFkaWVudCBvdmVybGF5IChsYXllciAyKVxuLy8gZ3JhZGllbnQgb3ZlcmxheSBnb2luZyBmcm9tIGJsYWNrIHRvIHRyYW5zcGFyZW50LlxuLy8gbm90ZTogc2VhcmNoIGZvciBhIGdyYWRpZW50IG92ZXJsYXkgZ2VuZXJhdG9yIHRvIG1ha2UgdGhpcyBlYXNpZXIuXG4uYmFubmVyLW92ZXJsYXktZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgNjBkZWcsXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuMzgpIDIwJSxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJVxuICApOyAvLyBzdGFydCBhdCBibGFjayBhdCB0aGUgYm90dG9tIGxlZnQnaXNoIGFuZCBnb2VzIGF0IGEgNjAlIGFuZ2xlLiBUaGlzIHdpbGwgbWFrZSB0aGUgd2hpdGUgZWFzeSB0byByZWFkIHdpdGggbmVhcmx5IGFueSBpbWFnZS5cbn1cblxuLy8gQmFubmVyIGh0bWwgY29tcG9uZW50cyAobGF5ZXIgMylcbi8vIGJhbm5lciB0ZXh0XG4uYmFubmVyLXRleHQtZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLmJhbm5lci1oMS10ZXh0IHtcbiAgLy8gZm9udCBjYW4gZ2V0IGxhcmdlciwgYnV0IG5vIHNtYWxsZXIgdGhhbiAxMCBwb2ludHMuXG4gIC8vZm9udC1zaXplOiBjYWxjKDEwcHQgKyAwLjE1dncpO1xuICAvL2xldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIC8vZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgLy90ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAvL2NvbG9yOiB3aGl0ZTtcbn1cblxuLmJhbm5lci1ib2R5LXRleHQge1xuICAvLyBmb250IGNhbiBnZXQgbGFyZ2VyLCBidXQgbm8gc21hbGxlciB0aGFuIDEwIHBvaW50cy5cbiAgZm9udC1zaXplOiBjYWxjKDEwcHQgKyAwLjE1dncpO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gICY6dmlzaXRlZCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gICY6YWN0aXZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLmJhbm5lci1idG4ge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5iYW5uZXItYnRuLWl0ZW0ge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcblxuICAmOmxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAmOnZpc2l0ZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1wYWRkaW5nKTtcblxuICAucGFnZS10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXBhZ2UtdGl0bGUtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiA2KTtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgY29sb3I6IHZhcigtLXNlY3Rpb24tdGl0bGUtY29sb3IpO1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWN0aW9uLXN1YnRpdGxlLWJvcmRlci1jb2xvcik7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG4gIH1cblxuICAuc2VjdGlvbi10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tc2VjdGlvbi1zdWJ0aXRsZS1jb2xvcik7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG4gIH1cblxuICAuYnRuIHtcbiAgICBAaW5jbHVkZSBidXR0b24oKTtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyLjUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCIvKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8qXG4gIFNoYXJlZFxuKi9cbi8qXG4gIENTUyA0IE1vZGVcbiovXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi5iYW5uZXItaDEtYmlnYWwge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgfCBSYWxld2F5XCI7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDMwJSA0MCUgYXV0byBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhkXCIgXCJoZXJvICBcIiBcImNhc2VzdHVkaWVzXCIgXCJjb250YWN0XCIgXCJmdFwiO1xufVxuXG4vKiBjYXNlIHN0dWRpZXMgKi9cbi5jYXNlc3R1ZGllcyB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGNhc2VzdHVkaWVzO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xuICBtYXJnaW46IDA7XG59XG5cbi53b3JrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RkFGRjtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMztcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi53b3JrIGgyIHtcbiAgY29sb3I6ICMzMzM3NDU7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRlbnQgLmNvbnRlbnQtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBvcGFjaXR5OiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4uY29udGVudDpob3ZlciAuY29udGVudC1vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNvbnRlbnQtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVudC1kZXRhaWxzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1MCU7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbn1cblxuLmNvbnRlbnQ6aG92ZXIgLmNvbnRlbnQtZGV0YWlscyB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jb250ZW50LWRldGFpbHMgaDIge1xuICBjb2xvcjogI0Y0RkFGRjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uY29udGVudC1kZXRhaWxzIHAge1xuICBjb2xvcjogI0Y0RkFGRjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZmFkZUluLWJvdHRvbSB7XG4gIHRvcDogODAlO1xufVxuXG4ubGVhZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSB8IFJhbGV3YXlcIjtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50b3AtYmFubmVyLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1NXJlbTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIGdyaWQtcm93LWdhcDogMHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnRvcC1iYW5uZXItc2VjdGlvbiAuYmFubmVyLWltYWdlLWRpdiB7XG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcbn1cbi50b3AtYmFubmVyLXNlY3Rpb24gLmJhbm5lci1vdmVybGF5LWRpdiB7XG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcbn1cbi50b3AtYmFubmVyLXNlY3Rpb24gLmJhbm5lci10ZXh0LWRpdiB7XG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcbn1cblxuLmJhbm5lci1pbWFnZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1cmVtO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmJhbm5lci1vdmVybGF5LWRpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgcmdiYSgwLCAwLCAwLCAwLjM4KSAyMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG59XG5cbi5iYW5uZXItdGV4dC1kaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG4uYmFubmVyLWJvZHktdGV4dCB7XG4gIGZvbnQtc2l6ZTogY2FsYygxMHB0ICsgMC4xNXZ3KTtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJhbm5lci1ib2R5LXRleHQ6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG4uYmFubmVyLWJvZHktdGV4dDp2aXNpdGVkIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJhbm5lci1ib2R5LXRleHQ6YWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFubmVyLWJ0biB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLmJhbm5lci1idG4taXRlbSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuLmJhbm5lci1idG4taXRlbTpsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJhbm5lci1idG4taXRlbTp2aXNpdGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1wYWRkaW5nKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLnBhZ2UtdGl0bGUge1xuICBjb2xvcjogdmFyKC0tcGFnZS10aXRsZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5jb250ZW50LXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUge1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiA2KTtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogdmFyKC0tc2VjdGlvbi10aXRsZS1jb2xvcik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2VjdGlvbi1zdWJ0aXRsZS1ib3JkZXItY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAzKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLnNlY3Rpb24tdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1zZWN0aW9uLXN1YnRpdGxlLWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG59XG4uY29udGVudC13cmFwcGVyIC5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNXMsIGNvbG9yIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMi41KTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGVudC13cmFwcGVyIC5idG46aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS13aGl0ZS1yZ2IpKSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG59XG4uY29udGVudC13cmFwcGVyIC5idG46YWN0aXZlOm5vdChbZGlzYWJsZWRdKSwgLmNvbnRlbnQtd3JhcHBlciAuYnRuLmFjdGl2ZTpub3QoW2Rpc2FibGVkXSksIC5jb250ZW50LXdyYXBwZXIgLmJ0bjpmb2N1czpub3QoW2Rpc2FibGVkXSksIC5jb250ZW50LXdyYXBwZXIgLmJ0bi5mb2N1czpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmJ0bltkaXNhYmxlZF0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiAwLjU7XG59IiwiQGltcG9ydCAncGFsZXR0ZXMvc2hhcmVkJztcblxuQG1peGluIGJ1dHRvbigpIHtcbiAgLy8gY29sb3JzIHRoYXQgY2FuIGJlIHJlZGVmaW5lZDpcbiAgLy8gLS1idXR0b24tYmFja2dyb3VuZC1jb2xvclxuICAvLyAtLWJ1dHRvbi1ib3JkZXItY29sb3JcbiAgLy8gLS1idXR0b24tY29sb3JcblxuICAkZGVmYXVsdC1iYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07IC8vIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3JcbiAgJGRlZmF1bHQtYm9yZGVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07IC8vIC0tYnV0dG9uLWJvcmRlci1jb2xvclxuICAkZGVmYXVsdC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTsgLy8gLS1idXR0b24tY29sb3JcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgJGRlZmF1bHQtYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgJGRlZmF1bHQtY29sb3IpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjVzLCBjb2xvciAuNXMsIGJhY2tncm91bmQtY29sb3IgLjVzO1xuXG4gICY6aG92ZXIge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgJGRlZmF1bHQtY29sb3IpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCAkZGVmYXVsdC1ib3JkZXItY29sb3IpO1xuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCAkZGVmYXVsdC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgJGRlZmF1bHQtY29sb3IpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCAkZGVmYXVsdC1ib3JkZXItY29sb3IpO1xuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCAkZGVmYXVsdC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG4gIH1cblxuICAmW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuXG5AbWl4aW4gYnV0dG9uLW91dGxpbmUoKSB7XG4gIC8vIGNvbG9ycyB0aGF0IGNhbiBiZSByZWRlZmluZWQ6XG4gIC8vIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3JcbiAgLy8gLS1idXR0b24tYm9yZGVyLWNvbG9yXG4gIC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTsgLy8gLS1idXR0b24tYmFja2dyb3VuZC1jb2xvclxuICAkZGVmYXVsdC1ib3JkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTsgLy8gLS1idXR0b24tYm9yZGVyLWNvbG9yXG4gICRkZWZhdWx0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07IC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsICRkZWZhdWx0LWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsICRkZWZhdWx0LWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cywgY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgJGRlZmF1bHQtYm9yZGVyLWNvbG9yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgJGRlZmF1bHQtYm9yZGVyLWNvbG9yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICB9XG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/home/ali/ali.component.ts": 
        /*!*******************************************!*\
          !*** ./src/app/home/ali/ali.component.ts ***!
          \*******************************************/
        /*! exports provided: AliComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AliComponent", function () { return AliComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _shared_notification_template_notification_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/notification-template/notification-template.component */ "./src/app/shared/notification-template/notification-template.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _core_side_menus_side_menus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/side-menus/side-menus.service */ "./src/app/core/side-menus/side-menus.service.ts");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
            var AliComponent = /** @class */ (function () {
                function AliComponent(snackBar, menuService, route) {
                    this.snackBar = snackBar;
                    this.menuService = menuService;
                    this.route = route;
                }
                AliComponent.prototype.ngOnInit = function () {
                    (function () {
                        var lead = jquery__WEBPACK_IMPORTED_MODULE_6__('.lead');
                        var leadIndex = -1;
                        function showNextLead() {
                            ++leadIndex;
                            lead.eq(leadIndex % lead.length)
                                .fadeIn(3500)
                                .delay(3000)
                                .fadeOut(3500, showNextLead);
                        }
                        showNextLead();
                    })();
                };
                AliComponent.prototype.showNotification = function (vpos, hpos, type, icon) {
                    if (icon === void 0) { icon = ''; }
                    // for more info about Angular Material snackBar check: https://material.angular.io/components/snack-bar/overview
                    // debugger;
                    this.mySnackBarRef = this.snackBar.openFromComponent(_shared_notification_template_notification_template_component__WEBPACK_IMPORTED_MODULE_3__["NotificationTemplateComponent"], {
                        data: {
                            message: 'This is a notification positioned in the ' + vpos + ' ' + hpos,
                            icon: icon,
                            type: type,
                            dismissible: true
                            // you can add everything you want here
                        },
                        duration: 3000,
                        horizontalPosition: hpos,
                        verticalPosition: vpos,
                        panelClass: ['notification-wrapper']
                    });
                    // this is to be able to close it from the NotificationComponent
                    this.mySnackBarRef.instance.snackBarRef = this.mySnackBarRef;
                };
                return AliComponent;
            }());
            AliComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
                { type: _core_side_menus_side_menus_service__WEBPACK_IMPORTED_MODULE_5__["SideMenusService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
            ]; };
            AliComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-notifications',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ali.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/ali/ali.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ali.component.scss */ "./src/app/home/ali/ali.component.scss")).default]
                })
            ], AliComponent);
            /***/ 
        }),
        /***/ "./src/app/home/autocomplete/autocomplete.component.scss": 
        /*!***************************************************************!*\
          !*** ./src/app/home/autocomplete/autocomplete.component.scss ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n:host {\n  --page-title-color: rgb(var(--palette-primary-rgb));\n  --page-padding: 60px 40px;\n  --page-spacing: 10px;\n  --text-color: rgb(var(--palette-grey-7-rgb));\n  --section-title-color: rgb(var(--palette-grey-9-rgb));\n  --section-border-bottom-color: rgb(var(--palette-grey-8-rgb));\n  --autocomplete-active-background: rgba(var(--palette-primary-rgb), 0.2);\n  --autocomplete-active-color: rgb(var(--palette-primary-rgb));\n}\n.content-wrapper {\n  padding: var(--page-padding);\n}\n.content-wrapper .page-title {\n  color: var(--page-title-color);\n  font-size: 30px;\n}\n.content-wrapper .section-title {\n  margin-top: calc(var(--page-spacing) * 6);\n  font-size: 26px;\n  color: var(--section-title-color);\n  padding-bottom: var(--page-spacing);\n  border-bottom: 1px solid var(--section-border-bottom-color);\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .autocomplete-example {\n  margin-top: calc(var(--page-spacing) * 6);\n  color: var(--text-color);\n}\n.content-wrapper .user-autocomplete-result {\n  display: flex;\n}\n.content-wrapper .user-autocomplete-result .image-container {\n  width: 36px;\n  margin-right: var(--page-spacing);\n}\n.content-wrapper .user-autocomplete-result .name-container {\n  align-self: center;\n  text-align: left;\n}\n:host ::ng-deep .bootstrap-users-example ngb-typeahead-window.dropdown-menu, :host ::ng-deep .bootstrap-fruits-example ngb-typeahead-window.dropdown-menu {\n  padding: 0px;\n  min-width: 300px;\n}\n:host ::ng-deep .bootstrap-users-example ngb-typeahead-window.dropdown-menu .dropdown-item, :host ::ng-deep .bootstrap-fruits-example ngb-typeahead-window.dropdown-menu .dropdown-item {\n  padding: calc(var(--page-spacing) / 2) var(--page-spacing);\n  color: var(--text-color);\n  font-size: 14px;\n}\n:host ::ng-deep .bootstrap-users-example ngb-typeahead-window.dropdown-menu .dropdown-item.active, :host ::ng-deep .bootstrap-fruits-example ngb-typeahead-window.dropdown-menu .dropdown-item.active {\n  background: var(--autocomplete-active-background);\n  color: var(--autocomplete-active-color);\n}\n::ng-deep .mat-autocomplete-panel.task-owners-autocomplete {\n  --page-spacing: 10px;\n  --text-color: rgb(var(--palette-grey-7-rgb));\n  --text-light-color: rgb(var(--palette-grey-5-rgb));\n}\n::ng-deep .mat-autocomplete-panel.task-owners-autocomplete .mat-option-text {\n  display: flex;\n  align-items: center;\n}\n::ng-deep .mat-autocomplete-panel.task-owners-autocomplete .mat-option-text .user-name {\n  margin-left: var(--page-spacing);\n  color: var(--text-color);\n  font-size: 14px;\n  margin-right: 1ch;\n}\n::ng-deep .mat-autocomplete-panel.task-owners-autocomplete .mat-option-text .image-container {\n  width: 34px;\n}\n::ng-deep .mat-autocomplete-panel.task-owners-autocomplete .mat-option-text .user-role {\n  font-size: 14px;\n  color: var(--text-light-color);\n}\n::ng-deep .mat-autocomplete-panel.countries-autocomplete {\n  --input-select-background: rgb(var(--palette-white-rgb));\n  --input-select-color: rgb(var(--palette-grey-7-rgb));\n  --input-select-hover-background: rgba(var(--palette-primary-rgb), 0.2);\n  --input-select-hover-color: rgb(var(--palette-primary-rgb));\n  --input-select-selected-background: rgb(var(--palette-primary-rgb));\n  --input-select-selected-color: rgb(var(--palette-primary-contrast-rgb));\n}\n::ng-deep .mat-autocomplete-panel.countries-autocomplete:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 6px rgba(var(--palette-grey-5-rgb), 0.15),  0px 2px 4px rgba(var(--palette-grey-5-rgb), 0.12);\n}\n::ng-deep .mat-autocomplete-panel.countries-autocomplete .mat-option {\n  color: var(--input-select-color) !important;\n  background: var(--input-select-background) !important;\n}\n::ng-deep .mat-autocomplete-panel.countries-autocomplete .mat-option:hover, ::ng-deep .mat-autocomplete-panel.countries-autocomplete .mat-option.mat-active {\n  --input-select-background: var(--input-select-hover-background);\n  --input-select-color: var(--input-select-hover-color);\n}\n::ng-deep .mat-autocomplete-panel.countries-autocomplete .mat-option.mat-selected {\n  --input-select-background: var(--input-select-selected-background);\n  --input-select-color: var(--input-select-selected-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bndpc2UvYmVjY2Evc3JjL3RoZW1lL3BhbGV0dGVzL3NoYXJlZC5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvdGhlbWUvcGFsZXR0ZXMvbW9kZS5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvYXBwL2hvbWUvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvdGhlbWUvbWl4aW5zL2lucHV0cy9hdXRvY29tcGxldGUuc2NzcyIsIi9Vc2Vycy9zaGF3bndpc2UvYmVjY2Evc3JjL3RoZW1lL21peGlucy9lbGV2YXRpb25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FDSkE7RUFFRSxtREFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHFEQUFBO0VBQ0EsNkRBQUE7RUFFQSx1RUFBQTtFQUNBLDREQUFBO0FDMENGO0FEdkNBO0VBQ0UsNEJBQUE7QUMwQ0Y7QUR4Q0U7RUFDRSw4QkFBQTtFQUNBLGVBQUE7QUMwQ0o7QUR2Q0U7RUFDRSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkRBQUE7RUFDQSw0Q0FBQTtBQ3lDSjtBRHRDRTtFQUNFLHlDQUFBO0VBQ0Esd0JBQUE7QUN3Q0o7QURyQ0U7RUFDRSxhQUFBO0FDdUNKO0FEckNJO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0FDdUNOO0FEckNJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ3VDTjtBRC9CSTtFQUVFLFlBQUE7RUFDQSxnQkFBQTtBQ2lDTjtBRC9CTTtFQUNFLDBEQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDaUNSO0FEL0JRO0VBQ0UsaURBQUE7RUFDQSx1Q0FBQTtBQ2lDVjtBRHhCRTtFQUNFLG9CQUFBO0VBQ0EsNENBQUE7RUFDQSxrREFBQTtBQzJCSjtBRHpCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQzJCTjtBRHpCTTtFQUNFLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUMyQlI7QUR6Qk07RUFDRSxXQUFBO0FDMkJSO0FEekJNO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0FDMkJSO0FEdEJFO0VFakdBLHdEQUFBO0VBQ0Esb0RBQUE7RUFDQSxzRUFBQTtFQUNBLDJEQUFBO0VBQ0EsbUVBQUE7RUFDQSx1RUFBQTtBRDBIRjtBQ3hIRTtFQzBFRSxpSEFBQTtBRmlESjtBQ3ZIRTtFQUNFLDJDQUFBO0VBQ0EscURBQUE7QUR5SEo7QUN2SEk7RUFFRSwrREFBQTtFQUNBLHFEQUFBO0FEd0hOO0FDckhJO0VBQ0Usa0VBQUE7RUFDQSx3REFBQTtBRHVITiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFNoYXJlZFxuKi9cblxuQGltcG9ydCAncHJlZmVyZW5jZXMnO1xuQGltcG9ydCAnaW50ZXJmYWNlJztcbkBpbXBvcnQgJ21vZGUnO1xuXG4vLyBBbiBhYnN0cmFjdCB3YXkgdG8gcHJvdmlkZSBjb2xvcnMuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGFuIGludGVyZmFjZSB0byBib3RoIFNhc3MgdmFyaWFibGVzIGFuZCBDU1MgNCB2YXJpYWJsZXMgYmFzZWQgY29sb3IgcGFsZXR0ZXMuXG5AZnVuY3Rpb24gcGFsZXR0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGFscGhhOiAxKSB7XG4gIC8vICRjb2xvci1wYWxldHRlLW1vZGUgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY2hvb3Nlbi1wYWxldHRlICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlICAgPT4gIERlZmluZWQgaW4gaW50ZXJmYWNlLnNjc3NcbiAgLy8gJGNzczQtdmFyLXByZWZpeCAgICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuICAvLyAkY3NzNC1jb2xvci1mb3JtYXQgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG5cbiAgQGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdjc3MtNCcpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjb2xvci1wYWxldHRlLWludGVyZmFjZTtcblxuICAgICRjb2xvci12YXJpYWJsZS1pbmRleDogaW5kZXgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlLWluZGV4KSA9PSAnbnVtYmVyJykge1xuICAgICAgJGNvbG9yLXZhcmlhYmxlLW5hbWU6IG50aCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci12YXJpYWJsZS1pbmRleCk7XG5cbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYmEodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKycpLCAjeyRhbHBoYX0pJ307XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYih2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArICcpKSd9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci1uYW1lfSkgd2FzIG5vdCBmb3VuZCBvbiBDb2xvciBQYWxldHRlIGRlZmluaXRpb24uIE1ha2Ugc3VyZSBpdCdzIGRlZmluZWQgaW4gdGhlIHRoZW1lL3BhbGV0dGVzL2ludGVyZmFjZS5zY3NzIGZpbGVcIjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ3Nhc3MnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY2hvb3Nlbi1wYWxldHRlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlOiBtYXAtZ2V0KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBTYXNzIGNvbG9yXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZSkgPT0gJ2NvbG9yJykge1xuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gcmdiYSgkY29sb3ItdmFyaWFibGUsICRhbHBoYSk7XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICRjb2xvci12YXJpYWJsZTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItdmFyaWFibGV9KSBpcyBub3QgYSBTYXNzIGNvbG9yXCI7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ05vIENvbG9yIFBhbGV0dGUgbW9kZSBzZWxlY3RlZCBpbiB0aGVtZS9wYWxldHRlcy9wcmVmZXJlbmNlcy5zY3NzJztcbiAgfVxufVxuIiwiLypcbiAgQ1NTIDQgTW9kZVxuKi9cbiRjb2xvci1wYWxldHRlLW1vZGU6ICdjc3MtNCc7XG5cblxuLypcbiAgU2FzcyBNb2RlXG4qL1xuLy8gQGltcG9ydCAnY29yZSc7XG4vL1xuLy8gJGNvbG9yLXBhbGV0dGUtbW9kZTogJ3Nhc3MnO1xuLy9cbi8vIC8vIEltcG9ydCB0aGUgZGVmaW5pdGlvbnMgb2YgdGhlIHBhbGV0dGUgeW91IHdhbnQgdG8gdXNlXG4vLyBAaW1wb3J0ICdwYWxldHRlLTEvZGVmaW5pdGlvbnMnO1xuLy8gLy8gQGltcG9ydCAncGFsZXR0ZS0yL2RlZmluaXRpb25zJztcbi8vXG4vLyAvLyBBc3NpZ24gYSBwYXJ0aWN1bGFyIENvbG9yIFBhbGV0dGUgdG8gdGhlICdjaG9vc2VuLXBhbGV0dGUnIHBvaW50ZXIuXG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlIHdpbGwgYmUgYSBTYXNzIG1hcCBwb2ludGluZyB0byBhbm90aGVyIGNvbG9yIHBhbGV0dGUgU2FzcyBtYXBcbi8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMSk7XG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTIpO1xuIiwiQGltcG9ydCAnc2hhcmVkJztcblxuOmhvc3Qge1xuICAvLyAvLyBEZWZhdWx0IHZhcmlhYmxlc1xuICAtLXBhZ2UtdGl0bGUtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTtcbiAgLS1wYWdlLXBhZGRpbmc6IDYwcHggNDBweDtcbiAgLS1wYWdlLXNwYWNpbmc6IDEwcHg7XG4gIC0tdGV4dC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTcnKX07XG4gIC0tc2VjdGlvbi10aXRsZS1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTknKX07XG4gIC0tc2VjdGlvbi1ib3JkZXItYm90dG9tLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktOCcpfTtcblxuICAtLWF1dG9jb21wbGV0ZS1hY3RpdmUtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgMC4yKX07XG4gIC0tYXV0b2NvbXBsZXRlLWFjdGl2ZS1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9O1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1wYWRkaW5nKTtcblxuICAucGFnZS10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXBhZ2UtdGl0bGUtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiA2KTtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgY29sb3I6IHZhcigtLXNlY3Rpb24tdGl0bGUtY29sb3IpO1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWN0aW9uLWJvcmRlci1ib3R0b20tY29sb3IpO1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xuICB9XG5cbiAgLmF1dG9jb21wbGV0ZS1leGFtcGxlIHtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiA2KTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIH1cblxuICAudXNlci1hdXRvY29tcGxldGUtcmVzdWx0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0tcGFnZS1zcGFjaW5nKTtcbiAgICB9XG4gICAgLm5hbWUtY29udGFpbmVyIHtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEZvciBlbmNhcHN1bGF0ZWQgY29tcG9uZW50cyBJTlNJREUgdGhlIDpob3N0IGVsZW1lbnRcbjpob3N0IDo6bmctZGVlcCB7XG4gIC5ib290c3RyYXAtdXNlcnMtZXhhbXBsZSwgLmJvb3RzdHJhcC1mcnVpdHMtZXhhbXBsZSB7XG4gICAgbmdiLXR5cGVhaGVhZC13aW5kb3cuZHJvcGRvd24tbWVudVxuICAgIHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIG1pbi13aWR0aDogMzAwcHg7XG5cbiAgICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpIC8gMikgdmFyKC0tcGFnZS1zcGFjaW5nKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWF1dG9jb21wbGV0ZS1hY3RpdmUtYmFja2dyb3VuZCk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWF1dG9jb21wbGV0ZS1hY3RpdmUtY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEZvciBlbmNhcHN1bGF0ZWQgY29tcG9uZW50cyBPVVRTSURFIHRoZSA6aG9zdCBlbGVtZW50XG46Om5nLWRlZXAge1xuICAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbC50YXNrLW93bmVycy1hdXRvY29tcGxldGUge1xuICAgIC0tcGFnZS1zcGFjaW5nOiAxMHB4O1xuICAgIC0tdGV4dC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTcnKX07XG4gICAgLS10ZXh0LWxpZ2h0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktNScpfTtcblxuICAgIC5tYXQtb3B0aW9uLXRleHQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0tcGFnZS1zcGFjaW5nKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMWNoO1xuICAgICAgfVxuICAgICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAzNHB4O1xuICAgICAgfVxuICAgICAgLnVzZXItcm9sZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQtY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsLmNvdW50cmllcy1hdXRvY29tcGxldGUge1xuICAgIEBpbmNsdWRlIG1hdGVyaWFsLWF1dG9jb21wbGV0ZS1zdHlsZXMoKTtcbiAgfVxufVxuIiwiLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8qXG4gIFNoYXJlZFxuKi9cbi8qXG4gIENTUyA0IE1vZGVcbiovXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8qXG4gIFNoYXJlZFxuKi9cbi8qXG4gIENTUyA0IE1vZGVcbiovXG4vKlxuICBTYXNzIE1vZGVcbiovXG46aG9zdCB7XG4gIC0tcGFnZS10aXRsZS1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKTtcbiAgLS1wYWdlLXBhZGRpbmc6IDYwcHggNDBweDtcbiAgLS1wYWdlLXNwYWNpbmc6IDEwcHg7XG4gIC0tdGV4dC1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtZ3JleS03LXJnYikpO1xuICAtLXNlY3Rpb24tdGl0bGUtY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLWdyZXktOS1yZ2IpKTtcbiAgLS1zZWN0aW9uLWJvcmRlci1ib3R0b20tY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLWdyZXktOC1yZ2IpKTtcbiAgLS1hdXRvY29tcGxldGUtYWN0aXZlLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYiksIDAuMik7XG4gIC0tYXV0b2NvbXBsZXRlLWFjdGl2ZS1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKTtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtcGFkZGluZyk7XG59XG4uY29udGVudC13cmFwcGVyIC5wYWdlLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtdGl0bGUtY29sb3IpO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uY29udGVudC13cmFwcGVyIC5zZWN0aW9uLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogNik7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IHZhcigtLXNlY3Rpb24tdGl0bGUtY29sb3IpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1zcGFjaW5nKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlY3Rpb24tYm9yZGVyLWJvdHRvbS1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuYXV0b2NvbXBsZXRlLWV4YW1wbGUge1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiA2KTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAudXNlci1hdXRvY29tcGxldGUtcmVzdWx0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb250ZW50LXdyYXBwZXIgLnVzZXItYXV0b2NvbXBsZXRlLXJlc3VsdCAuaW1hZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDM2cHg7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tcGFnZS1zcGFjaW5nKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLnVzZXItYXV0b2NvbXBsZXRlLXJlc3VsdCAubmFtZS1jb250YWluZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYm9vdHN0cmFwLXVzZXJzLWV4YW1wbGUgbmdiLXR5cGVhaGVhZC13aW5kb3cuZHJvcGRvd24tbWVudSwgOmhvc3QgOjpuZy1kZWVwIC5ib290c3RyYXAtZnJ1aXRzLWV4YW1wbGUgbmdiLXR5cGVhaGVhZC13aW5kb3cuZHJvcGRvd24tbWVudSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYm9vdHN0cmFwLXVzZXJzLWV4YW1wbGUgbmdiLXR5cGVhaGVhZC13aW5kb3cuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSwgOmhvc3QgOjpuZy1kZWVwIC5ib290c3RyYXAtZnJ1aXRzLWV4YW1wbGUgbmdiLXR5cGVhaGVhZC13aW5kb3cuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAvIDIpIHZhcigtLXBhZ2Utc3BhY2luZyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5ib290c3RyYXAtdXNlcnMtZXhhbXBsZSBuZ2ItdHlwZWFoZWFkLXdpbmRvdy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtLmFjdGl2ZSwgOmhvc3QgOjpuZy1kZWVwIC5ib290c3RyYXAtZnJ1aXRzLWV4YW1wbGUgbmdiLXR5cGVhaGVhZC13aW5kb3cuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hdXRvY29tcGxldGUtYWN0aXZlLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tYXV0b2NvbXBsZXRlLWFjdGl2ZS1jb2xvcik7XG59XG5cbjo6bmctZGVlcCAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbC50YXNrLW93bmVycy1hdXRvY29tcGxldGUge1xuICAtLXBhZ2Utc3BhY2luZzogMTBweDtcbiAgLS10ZXh0LWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1ncmV5LTctcmdiKSk7XG4gIC0tdGV4dC1saWdodC1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtZ3JleS01LXJnYikpO1xufVxuOjpuZy1kZWVwIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsLnRhc2stb3duZXJzLWF1dG9jb21wbGV0ZSAubWF0LW9wdGlvbi10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjo6bmctZGVlcCAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbC50YXNrLW93bmVycy1hdXRvY29tcGxldGUgLm1hdC1vcHRpb24tdGV4dCAudXNlci1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXBhZ2Utc3BhY2luZyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDFjaDtcbn1cbjo6bmctZGVlcCAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbC50YXNrLW93bmVycy1hdXRvY29tcGxldGUgLm1hdC1vcHRpb24tdGV4dCAuaW1hZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDM0cHg7XG59XG46Om5nLWRlZXAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwudGFzay1vd25lcnMtYXV0b2NvbXBsZXRlIC5tYXQtb3B0aW9uLXRleHQgLnVzZXItcm9sZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQtY29sb3IpO1xufVxuOjpuZy1kZWVwIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsLmNvdW50cmllcy1hdXRvY29tcGxldGUge1xuICAtLWlucHV0LXNlbGVjdC1iYWNrZ3JvdW5kOiByZ2IodmFyKC0tcGFsZXR0ZS13aGl0ZS1yZ2IpKTtcbiAgLS1pbnB1dC1zZWxlY3QtY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLWdyZXktNy1yZ2IpKTtcbiAgLS1pbnB1dC1zZWxlY3QtaG92ZXItYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSwgMC4yKTtcbiAgLS1pbnB1dC1zZWxlY3QtaG92ZXItY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSk7XG4gIC0taW5wdXQtc2VsZWN0LXNlbGVjdGVkLWJhY2tncm91bmQ6IHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSk7XG4gIC0taW5wdXQtc2VsZWN0LXNlbGVjdGVkLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LWNvbnRyYXN0LXJnYikpO1xufVxuOjpuZy1kZWVwIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsLmNvdW50cmllcy1hdXRvY29tcGxldGU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKHZhcigtLXBhbGV0dGUtZ3JleS01LXJnYiksIDAuMTUpLCAgMHB4IDJweCA0cHggcmdiYSh2YXIoLS1wYWxldHRlLWdyZXktNS1yZ2IpLCAwLjEyKTtcbn1cbjo6bmctZGVlcCAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbC5jb3VudHJpZXMtYXV0b2NvbXBsZXRlIC5tYXQtb3B0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlucHV0LXNlbGVjdC1jb2xvcikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtc2VsZWN0LWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwuY291bnRyaWVzLWF1dG9jb21wbGV0ZSAubWF0LW9wdGlvbjpob3ZlciwgOjpuZy1kZWVwIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsLmNvdW50cmllcy1hdXRvY29tcGxldGUgLm1hdC1vcHRpb24ubWF0LWFjdGl2ZSB7XG4gIC0taW5wdXQtc2VsZWN0LWJhY2tncm91bmQ6IHZhcigtLWlucHV0LXNlbGVjdC1ob3Zlci1iYWNrZ3JvdW5kKTtcbiAgLS1pbnB1dC1zZWxlY3QtY29sb3I6IHZhcigtLWlucHV0LXNlbGVjdC1ob3Zlci1jb2xvcik7XG59XG46Om5nLWRlZXAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwuY291bnRyaWVzLWF1dG9jb21wbGV0ZSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQge1xuICAtLWlucHV0LXNlbGVjdC1iYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1zZWxlY3Qtc2VsZWN0ZWQtYmFja2dyb3VuZCk7XG4gIC0taW5wdXQtc2VsZWN0LWNvbG9yOiB2YXIoLS1pbnB1dC1zZWxlY3Qtc2VsZWN0ZWQtY29sb3IpO1xufSIsIkBtaXhpbiBtYXRlcmlhbC1hdXRvY29tcGxldGUtc3R5bGVzKCkge1xuICAvLyBtYXRlcmlhbCBhdXRvY29tcGxldGUgc3R5bGVzXG4gICRzaGFkb3ctY29sb3I6ICdncmV5LTUnO1xuICAtLWlucHV0LXNlbGVjdC1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ3doaXRlJyl9O1xuICAtLWlucHV0LXNlbGVjdC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTcnKX07XG4gIC0taW5wdXQtc2VsZWN0LWhvdmVyLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScsIDAuMil9O1xuICAtLWlucHV0LXNlbGVjdC1ob3Zlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9O1xuICAtLWlucHV0LXNlbGVjdC1zZWxlY3RlZC1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07XG4gIC0taW5wdXQtc2VsZWN0LXNlbGVjdGVkLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnktY29udHJhc3QnKX07XG5cbiAgJjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gICAgQGluY2x1ZGUgZWxldmF0aW9uKHoyLCAkc2hhZG93LWNvbG9yKTtcbiAgfVxuXG4gIC5tYXQtb3B0aW9uIHtcbiAgICBjb2xvcjogdmFyKC0taW5wdXQtc2VsZWN0LWNvbG9yKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LXNlbGVjdC1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xuXG4gICAgJjpob3ZlcixcbiAgICAmLm1hdC1hY3RpdmUgIHtcbiAgICAgIC0taW5wdXQtc2VsZWN0LWJhY2tncm91bmQ6IHZhcigtLWlucHV0LXNlbGVjdC1ob3Zlci1iYWNrZ3JvdW5kKTtcbiAgICAgIC0taW5wdXQtc2VsZWN0LWNvbG9yOiB2YXIoLS1pbnB1dC1zZWxlY3QtaG92ZXItY29sb3IpO1xuICAgIH1cblxuICAgICYubWF0LXNlbGVjdGVkIHtcbiAgICAgIC0taW5wdXQtc2VsZWN0LWJhY2tncm91bmQ6IHZhcigtLWlucHV0LXNlbGVjdC1zZWxlY3RlZC1iYWNrZ3JvdW5kKTtcbiAgICAgIC0taW5wdXQtc2VsZWN0LWNvbG9yOiB2YXIoLS1pbnB1dC1zZWxlY3Qtc2VsZWN0ZWQtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndXRpbHMnO1xuQGltcG9ydCAnLi4vcGFsZXR0ZXMvc2hhcmVkJztcblxuJGVsZXZhdGlvbnMtc3BlY3M6IChcbiAgejE6IChcbiAgICAoc2hhZG93OiAwcHggMXB4IDNweCwgb3BhY2l0eTogMC4xMiksXG4gICAgKHNoYWRvdzogMHB4IDFweCAycHgsIG9wYWNpdHk6IDAuMjQpXG4gICksXG4gIHoyOiAoXG4gICAgKHNoYWRvdzogMHB4IDNweCA2cHgsIG9wYWNpdHk6IDAuMTUpLFxuICAgIChzaGFkb3c6IDBweCAycHggNHB4LCBvcGFjaXR5OiAwLjEyKVxuICApLFxuICB6MzogKFxuICAgIChzaGFkb3c6IDBweCAxMHB4IDIwcHgsIG9wYWNpdHk6IDAuMTUpLFxuICAgIChzaGFkb3c6IDBweCAzcHggNnB4LCBvcGFjaXR5OiAwLjEwKVxuICApLFxuICB6NDogKFxuICAgIChzaGFkb3c6IDBweCAxNXB4IDI1cHgsIG9wYWNpdHk6IDAuMTUpLFxuICAgIChzaGFkb3c6IDBweCA1cHggMTBweCwgb3BhY2l0eTogMC4wNSlcbiAgKSxcbiAgejU6IChcbiAgICAoc2hhZG93OiAwcHggMjBweCA0MHB4LCBvcGFjaXR5OiAwLjIwKVxuICApXG4pO1xuXG4vLyBAbWl4aW4gZWxldmF0aW9uKCR6OiB6MSwgJGNvbG9yOiAjQ0NDKSB7XG5AbWl4aW4gZWxldmF0aW9uKCR6OiB6MSwgJGNvbG9yOiAnZ3JleS0yJykge1xuICAkc2hhZG93cy1yZWZlcmVuY2U6ICRlbGV2YXRpb25zLXNwZWNzO1xuXG4gIC8vIENoZWNrIGlmIHdlIGhhdmUgYSBzcGVjIGZvciB0aGUgZGVzaXJlZCBzaGFkb3dcbiAgQGlmIG1hcC1oYXMta2V5KCRzaGFkb3dzLXJlZmVyZW5jZSwgJHopIHtcbiAgICAvLyBBY2N1bXVsYXRlIG11bHRpcGxlIHNoYWRvdyB2YWx1ZXMgaW4gdGhpcyBsaXN0XG4gICAgJHotc2hhZG93cy12YWx1ZXM6ICgpO1xuICAgIC8vIEdldCBzaGFkb3dzIG1hcFxuICAgICR6LXNoYWRvd3M6IG1hcC1nZXQoJHNoYWRvd3MtcmVmZXJlbmNlLCAkeik7XG5cbiAgICAvLyBAZXJyb3IgJHotc2hhZG93cztcblxuICAgIC8vIE11bHRpcGxlIHNoYWRvd3MgY29tYmluZWRcbiAgICBAaWYgKHR5cGVfb2YoJHotc2hhZG93cykgPT0gJ2xpc3QnKSB7XG4gICAgICBAZWFjaCAkei1zaGFkb3cgaW4gJHotc2hhZG93cyB7XG4gICAgICAgIEBpZiAodHlwZV9vZigkei1zaGFkb3cpID09ICdtYXAnKSB7XG4gICAgICAgICAgJHNoYWRvdzogbWFwLWdldCgkei1zaGFkb3csIHNoYWRvdyk7XG4gICAgICAgICAgJG9wYWNpdHk6IG1hcC1nZXQoJHotc2hhZG93LCBvcGFjaXR5KTtcblxuICAgICAgICAgIC8vIEBlcnJvciAkei1zaGFkb3c7XG4gICAgICAgICAgLy8gQGVycm9yICRzaGFkb3c7XG4gICAgICAgICAgLy8gQGVycm9yICRvcGFjaXR5O1xuXG4gICAgICAgICAgLy8gJHNoYWRvdy12YWx1ZTogJHNoYWRvdyArICcgJyArIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XG4gICAgICAgICAgJHNoYWRvdy12YWx1ZTogJHNoYWRvdyArICcgJyArIHBhbGV0dGUtY29sb3IoJGNvbG9yLCAkb3BhY2l0eSk7XG5cbiAgICAgICAgICAvLyBAZXJyb3IgJHNoYWRvdy12YWx1ZTtcblxuICAgICAgICAgICR6LXNoYWRvd3MtdmFsdWVzOiBhcHBlbmQoJHotc2hhZG93cy12YWx1ZXMsICRzaGFkb3ctdmFsdWUpO1xuXG4gICAgICAgICAgLy8gQGVycm9yICR6LXNoYWRvd3MtdmFsdWVzO1xuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICBAZXJyb3IgJ0ludmFsaWQgc2hhZG93IGRlZmluaXRpb24gZm9yIGFyZ3VtZW50ICR6LXNoYWRvdzogYCN7JHotc2hhZG93fWAnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBAZWxzZSBpZiAodHlwZV9vZigkei1zaGFkb3dzKSA9PSAnbWFwJykge1xuICAgICAgLy8gU2luZ2xlIHNoYWRvd1xuICAgICAgJHNoYWRvdzogbWFwLWdldCgkei1zaGFkb3dzLCBzaGFkb3cpO1xuICAgICAgJG9wYWNpdHk6IG1hcC1nZXQoJHotc2hhZG93cywgb3BhY2l0eSk7XG5cbiAgICAgIC8vIEBlcnJvciAkei1zaGFkb3c7XG4gICAgICAvLyBAZXJyb3IgJHNoYWRvdztcbiAgICAgIC8vIEBlcnJvciAkb3BhY2l0eTtcblxuICAgICAgLy8gJHNoYWRvdy12YWx1ZTogJHNoYWRvdyArICcgJyArIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XG4gICAgICAkc2hhZG93LXZhbHVlOiAkc2hhZG93ICsgJyAnICsgcGFsZXR0ZS1jb2xvcigkY29sb3IsICRvcGFjaXR5KTtcblxuICAgICAgLy8gQGVycm9yICRzaGFkb3ctdmFsdWU7XG5cbiAgICAgICR6LXNoYWRvd3MtdmFsdWVzOiBhcHBlbmQoJHotc2hhZG93cy12YWx1ZXMsICRzaGFkb3ctdmFsdWUpO1xuXG4gICAgICAvLyBAZXJyb3IgJHotc2hhZG93cy12YWx1ZXM7XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgJ0ludmFsaWQgc2hhZG93IHZhbHVlcyBmb3IgYXJndW1lbnQgJHotc2hhZG93czogYCN7JHotc2hhZG93c31gLiBJdFxcJ3MgbmVpdGhlciBhIG1hcCBvciBhIGxpc3QnO1xuICAgIH1cblxuICAgIC8vIEBlcnJvciAje3RvLXN0cmluZygkei1zaGFkb3dzLXZhbHVlcywgJywgJyl9O1xuXG4gICAgYm94LXNoYWRvdzogI3t0by1zdHJpbmcoJHotc2hhZG93cy12YWx1ZXMsICcsICcpfTtcbiAgfSBAZWxzZSB7XG4gICAgQGVycm9yICdObyByZWZlcmVuY2UgZm91bmQgZm9yIGFyZ3VtZW50ICR6OiBgI3sken1gIGluIHNoYWRvd3Mgc3BlY3MuJztcbiAgfVxufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/home/autocomplete/autocomplete.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/home/autocomplete/autocomplete.component.ts ***!
          \*************************************************************/
        /*! exports provided: AutocompleteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function () { return AutocompleteComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities.service */ "./src/app/home/utilities.service.ts");
            var AutocompleteComponent = /** @class */ (function () {
                function AutocompleteComponent(utilitiesService) {
                    var _this = this;
                    this.utilitiesService = utilitiesService;
                    this.countries = new Array();
                    // tslint:disable-next-line:max-line-length
                    this.fruits = ['Apple', 'Watermelon', 'Orange', 'Pear', 'Cherry', 'Strawberry', 'Nectarine', 'Grape', 'Mango', 'Blueberry', 'Pomegranate', 'Plum', 'Banana', 'Raspberry', 'Mandarin', 'Jackfruit', 'Papaya', 'Kiwi', 'Pineapple', 'Lime', 'Lemon', 'Apricot', 'Grapefruit', 'Melon', 'Coconut', 'Avocado', 'Peach'];
                    // tslint:disable-next-line:max-line-length
                    this.users = [
                        { name: 'Francesca Metts', role: 'Designer', picture: '/assets/imgs/users/user-1.jpeg' },
                        { name: 'Malcolm Quaday', role: 'Developer', picture: '/assets/imgs/users/user-2.jpeg' },
                        { name: 'Elizabeth Hurton', role: 'Tester', picture: '/assets/imgs/users/user-3.jpeg' },
                        { name: 'Albert Pollock', role: 'Project Manager', picture: '/assets/imgs/users/user-4.jpeg' },
                        { name: 'John Marston', role: 'Team Leader', picture: '/assets/imgs/users/user-5.jpeg' },
                        { name: 'Sara Williams', role: 'Business Analyst', picture: '/assets/imgs/users/user-6.jpeg' }
                    ];
                    this.searchFruits = function (text$) {
                        return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return term === '' ? []
                            : _this.fruits.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
                    };
                    this.fruitsFormatter = function (fruit) {
                        return fruit.toUpperCase();
                    };
                    this.searchUsers = function (text$) {
                        return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return term === '' ? []
                            : _this.users.filter(function (u) { return u.name.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
                    };
                    this.usersFormatter = function (user) {
                        return user.name;
                    };
                    this.selectedCountry = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
                    this.selectedFruit = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
                    this.selectedUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
                    this.selectedTaskOwner = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
                }
                AutocompleteComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // init countries autocompleter and set the search function
                    this.utilitiesService.getCountries().subscribe(function (countries) {
                        _this.countries = countries;
                        _this.filteredCountries = _this.selectedCountry.valueChanges
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                            return _this.countries.filter(function (c) { return c.name.toLowerCase().includes(value.toLowerCase()); });
                        }));
                    });
                    // init material users autocompleter and set the search function
                    this.filteredTaskOwners = this.selectedTaskOwner.valueChanges
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                        return _this.users.filter(function (c) { return c.name.toLowerCase().indexOf(value.toLowerCase()) === 0; });
                    }));
                };
                return AutocompleteComponent;
            }());
            AutocompleteComponent.ctorParameters = function () { return [
                { type: _utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"] }
            ]; };
            AutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-autocomplete',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./autocomplete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/autocomplete/autocomplete.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./autocomplete.component.scss */ "./src/app/home/autocomplete/autocomplete.component.scss")).default]
                })
            ], AutocompleteComponent);
            /***/ 
        }),
        /***/ "./src/app/home/file-uploader/file-uploader.component.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/home/file-uploader/file-uploader.component.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n:host {\n  --page-title-color: rgb(var(--palette-primary-rgb));\n  --page-padding: 60px 40px;\n  --page-spacing: 10px;\n  --section-title-color: rgb(var(--palette-grey-9-rgb));\n  --section-border-bottom-color: rgb(var(--palette-grey-8-rgb));\n  --text-color: rgb(var(--palette-primary-rgb));\n  --text-alternative-color: rgb(var(--palette-secondary-rgb));\n  --icons-color: rgb(var(--palette-primary-rgb));\n  --avatar-container-background: rgba(var(--palette-primary-rgb), 0.3);\n  --uploader-border-color: rgba(var(--palette-primary-rgb), 0.6);\n  --image-uploader-progress-bar-color: rgb(var(--palette-secondary-rgb));\n  --image-uploader-progress-bar-background: rgba(var(--palette-secondary-rgb), 0.2);\n  --files-uploader-progress-bar-color: rgb(var(--palette-primary-rgb));\n  --files-uploader-progress-bar-background: rgba(var(--palette-primary-rgb), 0.2);\n  --files-uploaded-text-color: rgb(var(--palette-grey-7-rgb));\n  --files-uploaded-border-color: rgba(var(--palette-primary-rgb), 0.2);\n}\n.content-wrapper {\n  padding: var(--page-padding);\n}\n.content-wrapper .page-title {\n  color: var(--page-title-color);\n  font-size: 30px;\n}\n.content-wrapper .section-title {\n  margin-top: calc(var(--page-spacing) * 6);\n  font-size: 26px;\n  color: var(--section-title-color);\n  padding-bottom: var(--page-spacing);\n  border-bottom: 1px solid var(--section-border-bottom-color);\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper input[type=file] {\n  display: none;\n}\n.content-wrapper .avatar-upload-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n.content-wrapper .avatar-upload-wrapper .avatar-container {\n  background-color: var(--avatar-container-background);\n  border-radius: 6px;\n  margin-bottom: calc(var(--page-spacing) * 2);\n  display: flex;\n  justify-content: center;\n}\n.content-wrapper .avatar-upload-wrapper .avatar-container .uploader-empty-state {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  align-items: center;\n}\n.content-wrapper .avatar-upload-wrapper .avatar-container .uploader-empty-state .image-icon {\n  height: 70px;\n  width: 70px;\n  color: var(--icons-color);\n}\n.content-wrapper .avatar-upload-wrapper .btn-upload {\n  background-color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-white-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n}\n.content-wrapper .avatar-upload-wrapper .btn-upload:hover:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.content-wrapper .avatar-upload-wrapper .btn-upload:active:not([disabled]), .content-wrapper .avatar-upload-wrapper .btn-upload.active:not([disabled]), .content-wrapper .avatar-upload-wrapper .btn-upload:focus:not([disabled]), .content-wrapper .avatar-upload-wrapper .btn-upload.focus:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.content-wrapper .avatar-upload-wrapper .btn-upload[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.content-wrapper .avatar-upload-wrapper .avatar-uploaded-message {\n  color: var(--text-alternative-color);\n  text-align: center;\n}\n.content-wrapper .avatar-upload-wrapper .avatar-uploaded-message i {\n  margin-right: calc(var(--page-spacing) / 2);\n}\n.content-wrapper .image-uploader-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  border: 2px dashed var(--uploader-border-color);\n  color: var(--text-color);\n  border-radius: 6px;\n  padding: calc(var(--page-spacing) * 3);\n  text-align: center;\n}\n.content-wrapper .image-uploader-wrapper .dropzone {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.content-wrapper .image-uploader-wrapper .dropzone.empty-state {\n  color: var(--text-color);\n}\n.content-wrapper .image-uploader-wrapper .dropzone.uploaded-state {\n  color: var(--text-alternative-color);\n}\n.content-wrapper .image-uploader-wrapper .dropzone .upload-icon {\n  height: 60px;\n  width: 60px;\n}\n.content-wrapper .image-uploader-wrapper .dropzone .select-image-btn {\n  background-color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-white-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n}\n.content-wrapper .image-uploader-wrapper .dropzone .select-image-btn:hover:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.content-wrapper .image-uploader-wrapper .dropzone .select-image-btn:active:not([disabled]), .content-wrapper .image-uploader-wrapper .dropzone .select-image-btn.active:not([disabled]), .content-wrapper .image-uploader-wrapper .dropzone .select-image-btn:focus:not([disabled]), .content-wrapper .image-uploader-wrapper .dropzone .select-image-btn.focus:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.content-wrapper .image-uploader-wrapper .dropzone .select-image-btn[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.content-wrapper .image-uploader-wrapper .dropzone .rounded-progress-bar {\n  width: 100%;\n}\n.content-wrapper .image-uploader-wrapper .dropzone .rounded-progress-bar ::ng-deep .progress {\n  height: var(--page-spacing);\n  border-radius: 5px;\n  background-color: var(--image-uploader-progress-bar-background);\n}\n.content-wrapper .image-uploader-wrapper .dropzone .rounded-progress-bar ::ng-deep .progress .progress-bar {\n  background-color: var(--image-uploader-progress-bar-color);\n}\n.content-wrapper .image-uploader-wrapper .dropzone .post-actions-wrapper {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.content-wrapper .image-uploader-wrapper .dropzone .post-actions-wrapper .cancel-btn {\n  background-color: var(--button-background-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-primary-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n  margin-left: var(--page-spacing);\n  width: 100%;\n}\n.content-wrapper .image-uploader-wrapper .dropzone .post-actions-wrapper .cancel-btn:hover:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-white-rgb)));\n}\n.content-wrapper .image-uploader-wrapper .dropzone .post-actions-wrapper .cancel-btn:active:not([disabled]), .content-wrapper .image-uploader-wrapper .dropzone .post-actions-wrapper .cancel-btn.active:not([disabled]), .content-wrapper .image-uploader-wrapper .dropzone .post-actions-wrapper .cancel-btn:focus:not([disabled]), .content-wrapper .image-uploader-wrapper .dropzone .post-actions-wrapper .cancel-btn.focus:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-white-rgb)));\n}\n.content-wrapper .image-uploader-wrapper .dropzone .post-actions-wrapper .cancel-btn[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.content-wrapper .image-uploader-wrapper .dropzone .post-actions-wrapper .post-btn {\n  background-color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-white-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n  margin-right: var(--page-spacing);\n  width: 100%;\n}\n.content-wrapper .image-uploader-wrapper .dropzone .post-actions-wrapper .post-btn:hover:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.content-wrapper .image-uploader-wrapper .dropzone .post-actions-wrapper .post-btn:active:not([disabled]), .content-wrapper .image-uploader-wrapper .dropzone .post-actions-wrapper .post-btn.active:not([disabled]), .content-wrapper .image-uploader-wrapper .dropzone .post-actions-wrapper .post-btn:focus:not([disabled]), .content-wrapper .image-uploader-wrapper .dropzone .post-actions-wrapper .post-btn.focus:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.content-wrapper .image-uploader-wrapper .dropzone .post-actions-wrapper .post-btn[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.content-wrapper .files-uploader-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  margin-bottom: calc(var(--page-spacing) * 2);\n  border: 2px dashed var(--uploader-border-color);\n  color: var(--text-color);\n  border-radius: 6px;\n  padding: calc(var(--page-spacing) * 3);\n  text-align: center;\n}\n.content-wrapper .files-uploader-wrapper .upload-icon {\n  height: 60px;\n  width: 60px;\n  color: var(--icons-color);\n}\n.content-wrapper .files-uploader-wrapper .dropzone {\n  width: 100%;\n}\n.content-wrapper .files-uploader-wrapper .dropzone .dropzone-btn {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: var(--text-color);\n}\n.content-wrapper .files-uploader-wrapper .dropzone .dropzone-btn:hover, .content-wrapper .files-uploader-wrapper .dropzone .dropzone-btn:focus {\n  text-decoration: none;\n}\n.content-wrapper .files-uploader-list .dropzone-list {\n  list-style: none;\n  padding: 0;\n}\n.content-wrapper .files-uploader-list .dropzone-list .dropzone-list-item {\n  align-items: center;\n  border: 1px solid var(--files-uploaded-border-color);\n  color: var(--files-uploaded-text-color);\n  display: flex;\n  margin-bottom: calc(var(--page-spacing) * 2);\n  padding: calc(var(--page-spacing) * 2.5) calc(var(--page-spacing) * 4.5);\n  border-radius: 6px;\n}\n.content-wrapper .files-uploader-list .dropzone-list .dropzone-list-item .dropzone-list-item-info {\n  flex-basis: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.content-wrapper .files-uploader-list .dropzone-list .dropzone-list-item .dropzone-list-item-info .file-name {\n  font-size: 14px;\n  margin-bottom: calc(var(--page-spacing) * 2);\n}\n.content-wrapper .files-uploader-list .dropzone-list .dropzone-list-item .dropzone-list-item-info .file-upload-status {\n  font-size: 14px;\n  color: var(--text-color);\n}\n.content-wrapper .files-uploader-list .dropzone-list .dropzone-list-item .dropzone-list-item-info .progress-bar-wrapper {\n  margin: var(--page-spacing) 0px;\n}\n.content-wrapper .files-uploader-list .dropzone-list .dropzone-list-item .dropzone-list-item-info .progress-bar-wrapper .rounded-progress-bar {\n  width: 100%;\n}\n.content-wrapper .files-uploader-list .dropzone-list .dropzone-list-item .dropzone-list-item-info .progress-bar-wrapper .rounded-progress-bar ::ng-deep .progress {\n  height: 6px;\n  border-radius: 3px;\n  background-color: var(--image-uploader-progress-bar-background);\n}\n.content-wrapper .files-uploader-list .dropzone-list .dropzone-list-item .dropzone-list-item-info .progress-bar-wrapper .rounded-progress-bar ::ng-deep .progress .progress-bar {\n  background-color: var(--image-uploader-progress-bar-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bndpc2UvYmVjY2Evc3JjL3RoZW1lL3BhbGV0dGVzL3NoYXJlZC5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvdGhlbWUvcGFsZXR0ZXMvbW9kZS5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvYXBwL2hvbWUvZmlsZS11cGxvYWRlci9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zaGF3bndpc2UvYmVjY2Evc3JjL3RoZW1lL21peGlucy9idXR0b25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FDSkE7RUFFRSxtREFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxREFBQTtFQUNBLDZEQUFBO0VBRUEsNkNBQUE7RUFDQSwyREFBQTtFQUNBLDhDQUFBO0VBRUEsb0VBQUE7RUFDQSw4REFBQTtFQUNBLHNFQUFBO0VBQ0EsaUZBQUE7RUFDQSxvRUFBQTtFQUNBLCtFQUFBO0VBQ0EsMkRBQUE7RUFDQSxvRUFBQTtBQ3lDRjtBRHRDQTtFQUNFLDRCQUFBO0FDeUNGO0FEdkNFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FDeUNKO0FEdENFO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLDJEQUFBO0VBQ0EsNENBQUE7QUN3Q0o7QURwQ0k7RUFDRSxhQUFBO0FDc0NOO0FEakNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDbUNKO0FEakNJO0VBQ0Usb0RBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDbUNOO0FEakNNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDbUNSO0FEakNRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ21DVjtBRDlCSTtFRTdERixpRkFBQTtFQUNBLHlFQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0VBQUE7QUQ4RkY7QUMzRkk7RUFDRSxvRUFBQTtFQUNBLHlFQUFBO0VBQ0Esc0VBQUE7QUQ2Rk47QUNyRkk7RUFDRSxvRUFBQTtFQUNBLHlFQUFBO0VBQ0Esc0VBQUE7QUR1Rk47QUNuRkU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QURxRko7QURyREk7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0FDdUROO0FEdERNO0VBQ0UsMkNBQUE7QUN3RFI7QURsREU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBRUEsK0NBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtBQ21ESjtBRGpESTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDbUROO0FEakRNO0VBQ0Usd0JBQUE7QUNtRFI7QURoRE07RUFDRSxvQ0FBQTtBQ2tEUjtBRC9DTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDaURSO0FEOUNNO0VFM0dKLGlGQUFBO0VBQ0EseUVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5REFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnRUFBQTtBRDRKRjtBQ3pKSTtFQUNFLG9FQUFBO0VBQ0EseUVBQUE7RUFDQSxzRUFBQTtBRDJKTjtBQ25KSTtFQUNFLG9FQUFBO0VBQ0EseUVBQUE7RUFDQSxzRUFBQTtBRHFKTjtBQ2pKRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBRG1KSjtBRHJFTTtFQUNFLFdBQUE7QUN1RVI7QURwRVE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0RBQUE7QUNzRVY7QURwRVU7RUFDRSwwREFBQTtBQ3NFWjtBRGpFTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUNtRVI7QURqRVE7RUVwRk4sK0VBQUE7RUFDQSx5RUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdFQUFBO0VGNEVRLGdDQUFBO0VBQ0EsV0FBQTtBQzZFVjtBQ3ZKSTtFQUNFLHNFQUFBO0VBQ0EseUVBQUE7RUFDQSxvRUFBQTtBRHlKTjtBQ2pKSTtFQUNFLHNFQUFBO0VBQ0EseUVBQUE7RUFDQSxvRUFBQTtBRG1KTjtBQ2hKRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBRGtKSjtBRHhGUTtFRXpJTixpRkFBQTtFQUNBLHlFQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0VBQUE7RUZpSVEsaUNBQUE7RUFDQSxXQUFBO0FDb0dWO0FDbk9JO0VBQ0Usb0VBQUE7RUFDQSx5RUFBQTtFQUNBLHNFQUFBO0FEcU9OO0FDN05JO0VBQ0Usb0VBQUE7RUFDQSx5RUFBQTtFQUNBLHNFQUFBO0FEK05OO0FDM05FO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FENk5KO0FEM0dFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBRUEsK0NBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtBQzRHSjtBRDFHSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUM0R047QUR6R0k7RUFDRSxXQUFBO0FDMkdOO0FEekdNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUMyR1I7QUR6R1E7RUFDRSxxQkFBQTtBQzJHVjtBRHBHSTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQ3NHTjtBRHBHTTtFQUNFLG1CQUFBO0VBQ0Esb0RBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtFQUNBLHdFQUFBO0VBQ0Esa0JBQUE7QUNzR1I7QURwR1E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNzR1Y7QURwR1U7RUFDRSxlQUFBO0VBQ0EsNENBQUE7QUNzR1o7QURwR1U7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUNzR1o7QURuR1U7RUFDRSwrQkFBQTtBQ3FHWjtBRG5HWTtFQUNFLFdBQUE7QUNxR2Q7QURsR2M7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrREFBQTtBQ29HaEI7QURsR2dCO0VBQ0UsMERBQUE7QUNvR2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBTaGFyZWRcbiovXG5cbkBpbXBvcnQgJ3ByZWZlcmVuY2VzJztcbkBpbXBvcnQgJ2ludGVyZmFjZSc7XG5AaW1wb3J0ICdtb2RlJztcblxuLy8gQW4gYWJzdHJhY3Qgd2F5IHRvIHByb3ZpZGUgY29sb3JzLlxuLy8gVGhpcyBmdW5jdGlvbiBpcyBhbiBpbnRlcmZhY2UgdG8gYm90aCBTYXNzIHZhcmlhYmxlcyBhbmQgQ1NTIDQgdmFyaWFibGVzIGJhc2VkIGNvbG9yIHBhbGV0dGVzLlxuQGZ1bmN0aW9uIHBhbGV0dGUtY29sb3IoJGNvbG9yLW5hbWUsICRhbHBoYTogMSkge1xuICAvLyAkY29sb3ItcGFsZXR0ZS1tb2RlICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNob29zZW4tcGFsZXR0ZSAgICAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjb2xvci1wYWxldHRlLWludGVyZmFjZSAgID0+ICBEZWZpbmVkIGluIGludGVyZmFjZS5zY3NzXG4gIC8vICRjc3M0LXZhci1wcmVmaXggICAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcbiAgLy8gJGNzczQtY29sb3ItZm9ybWF0ICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuXG4gIEBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnY3NzLTQnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2U7XG5cbiAgICAkY29sb3ItdmFyaWFibGUtaW5kZXg6IGluZGV4KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZS1pbmRleCkgPT0gJ251bWJlcicpIHtcbiAgICAgICRjb2xvci12YXJpYWJsZS1uYW1lOiBudGgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItdmFyaWFibGUtaW5kZXgpO1xuXG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiAjeydyZ2JhKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsnKSwgI3skYWxwaGF9KSd9O1xuICAgICAgfSBAZWxzZSBpZiAoJGFscGhhID09IDEpIHtcbiAgICAgICAgQHJldHVybiAjeydyZ2IodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKyAnKSknfTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItbmFtZX0pIHdhcyBub3QgZm91bmQgb24gQ29sb3IgUGFsZXR0ZSBkZWZpbml0aW9uLiBNYWtlIHN1cmUgaXQncyBkZWZpbmVkIGluIHRoZSB0aGVtZS9wYWxldHRlcy9pbnRlcmZhY2Uuc2NzcyBmaWxlXCI7XG4gICAgfVxuICB9IEBlbHNlIGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdzYXNzJykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNob29zZW4tcGFsZXR0ZTtcblxuICAgICRjb2xvci12YXJpYWJsZTogbWFwLWdldCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIC8vIENoZWNrIGlmIGl0IGlzIGEgU2FzcyBjb2xvclxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUpID09ICdjb2xvcicpIHtcbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuIHJnYmEoJGNvbG9yLXZhcmlhYmxlLCAkYWxwaGEpO1xuICAgICAgfSBAZWxzZSBpZiAoJGFscGhhID09IDEpIHtcbiAgICAgICAgQHJldHVybiAkY29sb3ItdmFyaWFibGU7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLXZhcmlhYmxlfSkgaXMgbm90IGEgU2FzcyBjb2xvclwiO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGVycm9yICdObyBDb2xvciBQYWxldHRlIG1vZGUgc2VsZWN0ZWQgaW4gdGhlbWUvcGFsZXR0ZXMvcHJlZmVyZW5jZXMuc2Nzcyc7XG4gIH1cbn1cbiIsIi8qXG4gIENTUyA0IE1vZGVcbiovXG4kY29sb3ItcGFsZXR0ZS1tb2RlOiAnY3NzLTQnO1xuXG5cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8vIEBpbXBvcnQgJ2NvcmUnO1xuLy9cbi8vICRjb2xvci1wYWxldHRlLW1vZGU6ICdzYXNzJztcbi8vXG4vLyAvLyBJbXBvcnQgdGhlIGRlZmluaXRpb25zIG9mIHRoZSBwYWxldHRlIHlvdSB3YW50IHRvIHVzZVxuLy8gQGltcG9ydCAncGFsZXR0ZS0xL2RlZmluaXRpb25zJztcbi8vIC8vIEBpbXBvcnQgJ3BhbGV0dGUtMi9kZWZpbml0aW9ucyc7XG4vL1xuLy8gLy8gQXNzaWduIGEgcGFydGljdWxhciBDb2xvciBQYWxldHRlIHRvIHRoZSAnY2hvb3Nlbi1wYWxldHRlJyBwb2ludGVyLlxuLy8gLy8gJGNob29zZW4tcGFsZXR0ZSB3aWxsIGJlIGEgU2FzcyBtYXAgcG9pbnRpbmcgdG8gYW5vdGhlciBjb2xvciBwYWxldHRlIFNhc3MgbWFwXG4vLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTEpO1xuLy8gLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0yKTtcbiIsIkBpbXBvcnQgJ3NoYXJlZCc7XG5cbjpob3N0IHtcbiAgLy8gLy8gRGVmYXVsdCB2YXJpYWJsZXNcbiAgLS1wYWdlLXRpdGxlLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07XG4gIC0tcGFnZS1wYWRkaW5nOiA2MHB4IDQwcHg7XG4gIC0tcGFnZS1zcGFjaW5nOiAxMHB4O1xuICAtLXNlY3Rpb24tdGl0bGUtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS05Jyl9O1xuICAtLXNlY3Rpb24tYm9yZGVyLWJvdHRvbS1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTgnKX07XG5cbiAgLS10ZXh0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07XG4gIC0tdGV4dC1hbHRlcm5hdGl2ZS1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdzZWNvbmRhcnknKX07XG4gIC0taWNvbnMtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTtcblxuICAtLWF2YXRhci1jb250YWluZXItYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgMC4zKX07XG4gIC0tdXBsb2FkZXItYm9yZGVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAwLjYpfTtcbiAgLS1pbWFnZS11cGxvYWRlci1wcm9ncmVzcy1iYXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignc2Vjb25kYXJ5Jyl9O1xuICAtLWltYWdlLXVwbG9hZGVyLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ3NlY29uZGFyeScsIDAuMil9O1xuICAtLWZpbGVzLXVwbG9hZGVyLXByb2dyZXNzLWJhci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9O1xuICAtLWZpbGVzLXVwbG9hZGVyLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAwLjIpfTtcbiAgLS1maWxlcy11cGxvYWRlZC10ZXh0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktNycpfTtcbiAgLS1maWxlcy11cGxvYWRlZC1ib3JkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScsIDAuMil9O1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1wYWRkaW5nKTtcblxuICAucGFnZS10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXBhZ2UtdGl0bGUtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiA2KTtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgY29sb3I6IHZhcigtLXNlY3Rpb24tdGl0bGUtY29sb3IpO1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWN0aW9uLWJvcmRlci1ib3R0b20tY29sb3IpO1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xuICB9XG5cbiAgaW5wdXQge1xuICAgICZbdHlwZT0nZmlsZSddIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gQXZhdGFyIFVwbG9hZFxuICAuYXZhdGFyLXVwbG9hZC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuYXZhdGFyLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hdmF0YXItY29udGFpbmVyLWJhY2tncm91bmQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMik7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIC51cGxvYWRlci1lbXB0eS1zdGF0ZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLmltYWdlLWljb24ge1xuICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taWNvbnMtY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi11cGxvYWQge1xuICAgICAgQGluY2x1ZGUgYnV0dG9uKCk7XG4gICAgfVxuXG4gICAgLmF2YXRhci11cGxvYWRlZC1tZXNzYWdlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWFsdGVybmF0aXZlLWNvbG9yKTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAvIDIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEltYWdlIFVwbG9hZGVyXG4gIC5pbWFnZS11cGxvYWRlci13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS11cGxvYWRlci1ib3JkZXItY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLmRyb3B6b25lIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgICAmLmVtcHR5LXN0YXRlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAmLnVwbG9hZGVkLXN0YXRlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYWx0ZXJuYXRpdmUtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAudXBsb2FkLWljb24ge1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgfVxuXG4gICAgICAuc2VsZWN0LWltYWdlLWJ0biB7XG4gICAgICAgIEBpbmNsdWRlIGJ1dHRvbigpO1xuICAgICAgfVxuXG4gICAgICAucm91bmRlZC1wcm9ncmVzcy1iYXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAvLyBPdmVycmlkZSBCb290c3RyYXAgU3R5bGVzXG4gICAgICAgIDo6bmctZGVlcCAucHJvZ3Jlc3Mge1xuICAgICAgICAgIGhlaWdodDogdmFyKC0tcGFnZS1zcGFjaW5nKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW1hZ2UtdXBsb2FkZXItcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQpO1xuXG4gICAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbWFnZS11cGxvYWRlci1wcm9ncmVzcy1iYXItY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucG9zdC1hY3Rpb25zLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5jYW5jZWwtYnRuIHtcbiAgICAgICAgICBAaW5jbHVkZSBidXR0b24tb3V0bGluZSgpO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtYnRuIHtcbiAgICAgICAgICBAaW5jbHVkZSBidXR0b24oKTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZ2Utc3BhY2luZyk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBGaWxlcyBVcGxvYWRlclxuICAuZmlsZXMtdXBsb2FkZXItd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMik7XG5cbiAgICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0tdXBsb2FkZXItYm9yZGVyLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC51cGxvYWQtaWNvbiB7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pY29ucy1jb2xvcik7XG4gICAgfVxuXG4gICAgLmRyb3B6b25lIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAuZHJvcHpvbmUtYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcblxuICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmlsZXMtdXBsb2FkZXItbGlzdCB7XG4gICAgLmRyb3B6b25lLWxpc3Qge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIC5kcm9wem9uZS1saXN0LWl0ZW0ge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAgdmFyKC0tZmlsZXMtdXBsb2FkZWQtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWZpbGVzLXVwbG9hZGVkLXRleHQtY29sb3IpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyKTtcbiAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMi41KSBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiA0LjUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG5cbiAgICAgICAgLmRyb3B6b25lLWxpc3QtaXRlbS1pbmZvIHtcbiAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICAgICAgICAuZmlsZS1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmlsZS11cGxvYWQtc3RhdHVzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucHJvZ3Jlc3MtYmFyLXdyYXBwZXIge1xuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLXNwYWNpbmcpIDBweDtcblxuICAgICAgICAgICAgLnJvdW5kZWQtcHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIFN0eWxlc1xuICAgICAgICAgICAgICA6Om5nLWRlZXAgLnByb2dyZXNzIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW1hZ2UtdXBsb2FkZXItcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQpO1xuXG4gICAgICAgICAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbWFnZS11cGxvYWRlci1wcm9ncmVzcy1iYXItY29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8qXG4gIFNoYXJlZFxuKi9cbi8qXG4gIENTUyA0IE1vZGVcbiovXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8qXG4gIFNoYXJlZFxuKi9cbi8qXG4gIENTUyA0IE1vZGVcbiovXG4vKlxuICBTYXNzIE1vZGVcbiovXG46aG9zdCB7XG4gIC0tcGFnZS10aXRsZS1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKTtcbiAgLS1wYWdlLXBhZGRpbmc6IDYwcHggNDBweDtcbiAgLS1wYWdlLXNwYWNpbmc6IDEwcHg7XG4gIC0tc2VjdGlvbi10aXRsZS1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtZ3JleS05LXJnYikpO1xuICAtLXNlY3Rpb24tYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtZ3JleS04LXJnYikpO1xuICAtLXRleHQtY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSk7XG4gIC0tdGV4dC1hbHRlcm5hdGl2ZS1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtc2Vjb25kYXJ5LXJnYikpO1xuICAtLWljb25zLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpO1xuICAtLWF2YXRhci1jb250YWluZXItYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSwgMC4zKTtcbiAgLS11cGxvYWRlci1ib3JkZXItY29sb3I6IHJnYmEodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYiksIDAuNik7XG4gIC0taW1hZ2UtdXBsb2FkZXItcHJvZ3Jlc3MtYmFyLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1zZWNvbmRhcnktcmdiKSk7XG4gIC0taW1hZ2UtdXBsb2FkZXItcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tcGFsZXR0ZS1zZWNvbmRhcnktcmdiKSwgMC4yKTtcbiAgLS1maWxlcy11cGxvYWRlci1wcm9ncmVzcy1iYXItY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSk7XG4gIC0tZmlsZXMtdXBsb2FkZXItcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYiksIDAuMik7XG4gIC0tZmlsZXMtdXBsb2FkZWQtdGV4dC1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtZ3JleS03LXJnYikpO1xuICAtLWZpbGVzLXVwbG9hZGVkLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSwgMC4yKTtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtcGFkZGluZyk7XG59XG4uY29udGVudC13cmFwcGVyIC5wYWdlLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtdGl0bGUtY29sb3IpO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uY29udGVudC13cmFwcGVyIC5zZWN0aW9uLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogNik7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IHZhcigtLXNlY3Rpb24tdGl0bGUtY29sb3IpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1zcGFjaW5nKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlY3Rpb24tYm9yZGVyLWJvdHRvbS1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xufVxuLmNvbnRlbnQtd3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmF2YXRhci11cGxvYWQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGVudC13cmFwcGVyIC5hdmF0YXItdXBsb2FkLXdyYXBwZXIgLmF2YXRhci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hdmF0YXItY29udGFpbmVyLWJhY2tncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmF2YXRhci11cGxvYWQtd3JhcHBlciAuYXZhdGFyLWNvbnRhaW5lciAudXBsb2FkZXItZW1wdHktc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuYXZhdGFyLXVwbG9hZC13cmFwcGVyIC5hdmF0YXItY29udGFpbmVyIC51cGxvYWRlci1lbXB0eS1zdGF0ZSAuaW1hZ2UtaWNvbiB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGNvbG9yOiB2YXIoLS1pY29ucy1jb2xvcik7XG59XG4uY29udGVudC13cmFwcGVyIC5hdmF0YXItdXBsb2FkLXdyYXBwZXIgLmJ0bi11cGxvYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNXMsIGNvbG9yIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC41cztcbn1cbi5jb250ZW50LXdyYXBwZXIgLmF2YXRhci11cGxvYWQtd3JhcHBlciAuYnRuLXVwbG9hZDpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmF2YXRhci11cGxvYWQtd3JhcHBlciAuYnRuLXVwbG9hZDphY3RpdmU6bm90KFtkaXNhYmxlZF0pLCAuY29udGVudC13cmFwcGVyIC5hdmF0YXItdXBsb2FkLXdyYXBwZXIgLmJ0bi11cGxvYWQuYWN0aXZlOm5vdChbZGlzYWJsZWRdKSwgLmNvbnRlbnQtd3JhcHBlciAuYXZhdGFyLXVwbG9hZC13cmFwcGVyIC5idG4tdXBsb2FkOmZvY3VzOm5vdChbZGlzYWJsZWRdKSwgLmNvbnRlbnQtd3JhcHBlciAuYXZhdGFyLXVwbG9hZC13cmFwcGVyIC5idG4tdXBsb2FkLmZvY3VzOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtd2hpdGUtcmdiKSkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuYXZhdGFyLXVwbG9hZC13cmFwcGVyIC5idG4tdXBsb2FkW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmF2YXRhci11cGxvYWQtd3JhcHBlciAuYXZhdGFyLXVwbG9hZGVkLW1lc3NhZ2Uge1xuICBjb2xvcjogdmFyKC0tdGV4dC1hbHRlcm5hdGl2ZS1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmF2YXRhci11cGxvYWQtd3JhcHBlciAuYXZhdGFyLXVwbG9hZGVkLW1lc3NhZ2UgaSB7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpIC8gMik7XG59XG4uY29udGVudC13cmFwcGVyIC5pbWFnZS11cGxvYWRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS11cGxvYWRlci1ib3JkZXItY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmltYWdlLXVwbG9hZGVyLXdyYXBwZXIgLmRyb3B6b25lIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmltYWdlLXVwbG9hZGVyLXdyYXBwZXIgLmRyb3B6b25lLmVtcHR5LXN0YXRlIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuaW1hZ2UtdXBsb2FkZXItd3JhcHBlciAuZHJvcHpvbmUudXBsb2FkZWQtc3RhdGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1hbHRlcm5hdGl2ZS1jb2xvcik7XG59XG4uY29udGVudC13cmFwcGVyIC5pbWFnZS11cGxvYWRlci13cmFwcGVyIC5kcm9wem9uZSAudXBsb2FkLWljb24ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xufVxuLmNvbnRlbnQtd3JhcHBlciAuaW1hZ2UtdXBsb2FkZXItd3JhcHBlciAuZHJvcHpvbmUgLnNlbGVjdC1pbWFnZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNXMsIGNvbG9yIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC41cztcbn1cbi5jb250ZW50LXdyYXBwZXIgLmltYWdlLXVwbG9hZGVyLXdyYXBwZXIgLmRyb3B6b25lIC5zZWxlY3QtaW1hZ2UtYnRuOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtd2hpdGUtcmdiKSkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuaW1hZ2UtdXBsb2FkZXItd3JhcHBlciAuZHJvcHpvbmUgLnNlbGVjdC1pbWFnZS1idG46YWN0aXZlOm5vdChbZGlzYWJsZWRdKSwgLmNvbnRlbnQtd3JhcHBlciAuaW1hZ2UtdXBsb2FkZXItd3JhcHBlciAuZHJvcHpvbmUgLnNlbGVjdC1pbWFnZS1idG4uYWN0aXZlOm5vdChbZGlzYWJsZWRdKSwgLmNvbnRlbnQtd3JhcHBlciAuaW1hZ2UtdXBsb2FkZXItd3JhcHBlciAuZHJvcHpvbmUgLnNlbGVjdC1pbWFnZS1idG46Zm9jdXM6bm90KFtkaXNhYmxlZF0pLCAuY29udGVudC13cmFwcGVyIC5pbWFnZS11cGxvYWRlci13cmFwcGVyIC5kcm9wem9uZSAuc2VsZWN0LWltYWdlLWJ0bi5mb2N1czpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmltYWdlLXVwbG9hZGVyLXdyYXBwZXIgLmRyb3B6b25lIC5zZWxlY3QtaW1hZ2UtYnRuW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmltYWdlLXVwbG9hZGVyLXdyYXBwZXIgLmRyb3B6b25lIC5yb3VuZGVkLXByb2dyZXNzLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuaW1hZ2UtdXBsb2FkZXItd3JhcHBlciAuZHJvcHpvbmUgLnJvdW5kZWQtcHJvZ3Jlc3MtYmFyIDo6bmctZGVlcCAucHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IHZhcigtLXBhZ2Utc3BhY2luZyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW1hZ2UtdXBsb2FkZXItcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuaW1hZ2UtdXBsb2FkZXItd3JhcHBlciAuZHJvcHpvbmUgLnJvdW5kZWQtcHJvZ3Jlc3MtYmFyIDo6bmctZGVlcCAucHJvZ3Jlc3MgLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWltYWdlLXVwbG9hZGVyLXByb2dyZXNzLWJhci1jb2xvcik7XG59XG4uY29udGVudC13cmFwcGVyIC5pbWFnZS11cGxvYWRlci13cmFwcGVyIC5kcm9wem9uZSAucG9zdC1hY3Rpb25zLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuaW1hZ2UtdXBsb2FkZXItd3JhcHBlciAuZHJvcHpvbmUgLnBvc3QtYWN0aW9ucy13cmFwcGVyIC5jYW5jZWwtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjVzLCBjb2xvciAwLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmltYWdlLXVwbG9hZGVyLXdyYXBwZXIgLmRyb3B6b25lIC5wb3N0LWFjdGlvbnMtd3JhcHBlciAuY2FuY2VsLWJ0bjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmltYWdlLXVwbG9hZGVyLXdyYXBwZXIgLmRyb3B6b25lIC5wb3N0LWFjdGlvbnMtd3JhcHBlciAuY2FuY2VsLWJ0bjphY3RpdmU6bm90KFtkaXNhYmxlZF0pLCAuY29udGVudC13cmFwcGVyIC5pbWFnZS11cGxvYWRlci13cmFwcGVyIC5kcm9wem9uZSAucG9zdC1hY3Rpb25zLXdyYXBwZXIgLmNhbmNlbC1idG4uYWN0aXZlOm5vdChbZGlzYWJsZWRdKSwgLmNvbnRlbnQtd3JhcHBlciAuaW1hZ2UtdXBsb2FkZXItd3JhcHBlciAuZHJvcHpvbmUgLnBvc3QtYWN0aW9ucy13cmFwcGVyIC5jYW5jZWwtYnRuOmZvY3VzOm5vdChbZGlzYWJsZWRdKSwgLmNvbnRlbnQtd3JhcHBlciAuaW1hZ2UtdXBsb2FkZXItd3JhcHBlciAuZHJvcHpvbmUgLnBvc3QtYWN0aW9ucy13cmFwcGVyIC5jYW5jZWwtYnRuLmZvY3VzOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtd2hpdGUtcmdiKSkpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuaW1hZ2UtdXBsb2FkZXItd3JhcHBlciAuZHJvcHpvbmUgLnBvc3QtYWN0aW9ucy13cmFwcGVyIC5jYW5jZWwtYnRuW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmltYWdlLXVwbG9hZGVyLXdyYXBwZXIgLmRyb3B6b25lIC5wb3N0LWFjdGlvbnMtd3JhcHBlciAucG9zdC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNXMsIGNvbG9yIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmltYWdlLXVwbG9hZGVyLXdyYXBwZXIgLmRyb3B6b25lIC5wb3N0LWFjdGlvbnMtd3JhcHBlciAucG9zdC1idG46aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS13aGl0ZS1yZ2IpKSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG59XG4uY29udGVudC13cmFwcGVyIC5pbWFnZS11cGxvYWRlci13cmFwcGVyIC5kcm9wem9uZSAucG9zdC1hY3Rpb25zLXdyYXBwZXIgLnBvc3QtYnRuOmFjdGl2ZTpub3QoW2Rpc2FibGVkXSksIC5jb250ZW50LXdyYXBwZXIgLmltYWdlLXVwbG9hZGVyLXdyYXBwZXIgLmRyb3B6b25lIC5wb3N0LWFjdGlvbnMtd3JhcHBlciAucG9zdC1idG4uYWN0aXZlOm5vdChbZGlzYWJsZWRdKSwgLmNvbnRlbnQtd3JhcHBlciAuaW1hZ2UtdXBsb2FkZXItd3JhcHBlciAuZHJvcHpvbmUgLnBvc3QtYWN0aW9ucy13cmFwcGVyIC5wb3N0LWJ0bjpmb2N1czpub3QoW2Rpc2FibGVkXSksIC5jb250ZW50LXdyYXBwZXIgLmltYWdlLXVwbG9hZGVyLXdyYXBwZXIgLmRyb3B6b25lIC5wb3N0LWFjdGlvbnMtd3JhcHBlciAucG9zdC1idG4uZm9jdXM6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS13aGl0ZS1yZ2IpKSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG59XG4uY29udGVudC13cmFwcGVyIC5pbWFnZS11cGxvYWRlci13cmFwcGVyIC5kcm9wem9uZSAucG9zdC1hY3Rpb25zLXdyYXBwZXIgLnBvc3QtYnRuW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmZpbGVzLXVwbG9hZGVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMik7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS11cGxvYWRlci1ib3JkZXItY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmZpbGVzLXVwbG9hZGVyLXdyYXBwZXIgLnVwbG9hZC1pY29uIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgY29sb3I6IHZhcigtLWljb25zLWNvbG9yKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmZpbGVzLXVwbG9hZGVyLXdyYXBwZXIgLmRyb3B6b25lIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGVudC13cmFwcGVyIC5maWxlcy11cGxvYWRlci13cmFwcGVyIC5kcm9wem9uZSAuZHJvcHpvbmUtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmZpbGVzLXVwbG9hZGVyLXdyYXBwZXIgLmRyb3B6b25lIC5kcm9wem9uZS1idG46aG92ZXIsIC5jb250ZW50LXdyYXBwZXIgLmZpbGVzLXVwbG9hZGVyLXdyYXBwZXIgLmRyb3B6b25lIC5kcm9wem9uZS1idG46Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY29udGVudC13cmFwcGVyIC5maWxlcy11cGxvYWRlci1saXN0IC5kcm9wem9uZS1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmZpbGVzLXVwbG9hZGVyLWxpc3QgLmRyb3B6b25lLWxpc3QgLmRyb3B6b25lLWxpc3QtaXRlbSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZpbGVzLXVwbG9hZGVkLWJvcmRlci1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1maWxlcy11cGxvYWRlZC10ZXh0LWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDIuNSkgY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogNC41KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmNvbnRlbnQtd3JhcHBlciAuZmlsZXMtdXBsb2FkZXItbGlzdCAuZHJvcHpvbmUtbGlzdCAuZHJvcHpvbmUtbGlzdC1pdGVtIC5kcm9wem9uZS1saXN0LWl0ZW0taW5mbyB7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuZmlsZXMtdXBsb2FkZXItbGlzdCAuZHJvcHpvbmUtbGlzdCAuZHJvcHpvbmUtbGlzdC1pdGVtIC5kcm9wem9uZS1saXN0LWl0ZW0taW5mbyAuZmlsZS1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmZpbGVzLXVwbG9hZGVyLWxpc3QgLmRyb3B6b25lLWxpc3QgLmRyb3B6b25lLWxpc3QtaXRlbSAuZHJvcHpvbmUtbGlzdC1pdGVtLWluZm8gLmZpbGUtdXBsb2FkLXN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuZmlsZXMtdXBsb2FkZXItbGlzdCAuZHJvcHpvbmUtbGlzdCAuZHJvcHpvbmUtbGlzdC1pdGVtIC5kcm9wem9uZS1saXN0LWl0ZW0taW5mbyAucHJvZ3Jlc3MtYmFyLXdyYXBwZXIge1xuICBtYXJnaW46IHZhcigtLXBhZ2Utc3BhY2luZykgMHB4O1xufVxuLmNvbnRlbnQtd3JhcHBlciAuZmlsZXMtdXBsb2FkZXItbGlzdCAuZHJvcHpvbmUtbGlzdCAuZHJvcHpvbmUtbGlzdC1pdGVtIC5kcm9wem9uZS1saXN0LWl0ZW0taW5mbyAucHJvZ3Jlc3MtYmFyLXdyYXBwZXIgLnJvdW5kZWQtcHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGVudC13cmFwcGVyIC5maWxlcy11cGxvYWRlci1saXN0IC5kcm9wem9uZS1saXN0IC5kcm9wem9uZS1saXN0LWl0ZW0gLmRyb3B6b25lLWxpc3QtaXRlbS1pbmZvIC5wcm9ncmVzcy1iYXItd3JhcHBlciAucm91bmRlZC1wcm9ncmVzcy1iYXIgOjpuZy1kZWVwIC5wcm9ncmVzcyB7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWltYWdlLXVwbG9hZGVyLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmZpbGVzLXVwbG9hZGVyLWxpc3QgLmRyb3B6b25lLWxpc3QgLmRyb3B6b25lLWxpc3QtaXRlbSAuZHJvcHpvbmUtbGlzdC1pdGVtLWluZm8gLnByb2dyZXNzLWJhci13cmFwcGVyIC5yb3VuZGVkLXByb2dyZXNzLWJhciA6Om5nLWRlZXAgLnByb2dyZXNzIC5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbWFnZS11cGxvYWRlci1wcm9ncmVzcy1iYXItY29sb3IpO1xufSIsIkBpbXBvcnQgJ3BhbGV0dGVzL3NoYXJlZCc7XG5cbkBtaXhpbiBidXR0b24oKSB7XG4gIC8vIGNvbG9ycyB0aGF0IGNhbiBiZSByZWRlZmluZWQ6XG4gIC8vIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3JcbiAgLy8gLS1idXR0b24tYm9yZGVyLWNvbG9yXG4gIC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9OyAvLyAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yXG4gICRkZWZhdWx0LWJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9OyAvLyAtLWJ1dHRvbi1ib3JkZXItY29sb3JcbiAgJGRlZmF1bHQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignd2hpdGUnKX07IC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsICRkZWZhdWx0LWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsICRkZWZhdWx0LWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cywgY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgJGRlZmF1bHQtYm9yZGVyLWNvbG9yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgJGRlZmF1bHQtYm9yZGVyLWNvbG9yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogLjU7XG4gIH1cbn1cblxuQG1peGluIGJ1dHRvbi1vdXRsaW5lKCkge1xuICAvLyBjb2xvcnMgdGhhdCBjYW4gYmUgcmVkZWZpbmVkOlxuICAvLyAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yXG4gIC8vIC0tYnV0dG9uLWJvcmRlci1jb2xvclxuICAvLyAtLWJ1dHRvbi1jb2xvclxuXG4gICRkZWZhdWx0LWJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignd2hpdGUnKX07IC8vIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3JcbiAgJGRlZmF1bHQtYm9yZGVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07IC8vIC0tYnV0dG9uLWJvcmRlci1jb2xvclxuICAkZGVmYXVsdC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9OyAvLyAtLWJ1dHRvbi1jb2xvclxuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCAkZGVmYXVsdC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCAkZGVmYXVsdC1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCAkZGVmYXVsdC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuNXMsIGNvbG9yIC41cywgYmFja2dyb3VuZC1jb2xvciAuNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCAkZGVmYXVsdC1jb2xvcik7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsICRkZWZhdWx0LWJvcmRlci1jb2xvcik7XG4gICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsICRkZWZhdWx0LWJhY2tncm91bmQtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCAkZGVmYXVsdC1jb2xvcik7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsICRkZWZhdWx0LWJvcmRlci1jb2xvcik7XG4gICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsICRkZWZhdWx0LWJhY2tncm91bmQtY29sb3IpO1xuICAgIH1cbiAgfVxuICAmW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/home/file-uploader/file-uploader.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/home/file-uploader/file-uploader.component.ts ***!
          \***************************************************************/
        /*! exports provided: FileUploaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploaderComponent", function () { return FileUploaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_notification_template_notification_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/notification-template/notification-template.component */ "./src/app/shared/notification-template/notification-template.component.ts");
            var FileUploaderComponent = /** @class */ (function () {
                function FileUploaderComponent(snackBar) {
                    this.snackBar = snackBar;
                    this.uploaders = {
                        avatar: {
                            progress: undefined,
                            url: undefined
                        },
                        image: {
                            progress: undefined,
                            url: undefined
                        },
                        files: {
                            list: [],
                            invalidList: []
                        }
                    };
                }
                FileUploaderComponent.prototype.onMultipleChange = function (event, uploader) {
                    this.onDropzoneMultipleChange(event.target.files, uploader);
                };
                FileUploaderComponent.prototype.onSingleChange = function (event, uploader) {
                    this.onDropzoneSingleChange(event.target.files, uploader);
                };
                FileUploaderComponent.prototype.onDropzoneMultipleChange = function (fileList, uploader) {
                    var e_1, _a;
                    try {
                        for (var fileList_1 = __values(fileList), fileList_1_1 = fileList_1.next(); !fileList_1_1.done; fileList_1_1 = fileList_1.next()) {
                            var file = fileList_1_1.value;
                            var l = this.uploaders[uploader].list.push(file);
                            this.read(file, this.uploaders[uploader].list[l - 1]);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (fileList_1_1 && !fileList_1_1.done && (_a = fileList_1.return)) _a.call(fileList_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                };
                FileUploaderComponent.prototype.onInvalidFiles = function (files) {
                    // this files are invalid because their extension is not allowed on this control
                    this.snackBar.openFromComponent(src_app_shared_notification_template_notification_template_component__WEBPACK_IMPORTED_MODULE_3__["NotificationTemplateComponent"], {
                        data: {
                            message: 'The files are not supported by this control',
                            icon: 'exclamation-triangle',
                            type: 'danger',
                            dismissible: true
                        },
                        duration: 3000,
                        horizontalPosition: 'start',
                        verticalPosition: 'top',
                        panelClass: ['notification-wrapper']
                    });
                };
                FileUploaderComponent.prototype.onDropzoneSingleChange = function (files, uploader) {
                    this.uploaders[uploader] = files[0];
                    this.read(files[0], this.uploaders[uploader]);
                };
                FileUploaderComponent.prototype.resetUploader = function (uploader) {
                    if (uploader === 'files') {
                        this.uploaders[uploader] = {
                            list: [],
                            invalidList: []
                        };
                    }
                    else {
                        this.uploaders[uploader] = {};
                    }
                };
                FileUploaderComponent.prototype.post = function () {
                    var _this = this;
                    this.snackBar.openFromComponent(src_app_shared_notification_template_notification_template_component__WEBPACK_IMPORTED_MODULE_3__["NotificationTemplateComponent"], {
                        data: {
                            message: 'Your file has been uploaded successfully',
                            icon: 'check-circle',
                            type: 'success',
                            dismissible: true
                        },
                        duration: 3000,
                        horizontalPosition: 'start',
                        verticalPosition: 'top',
                        panelClass: ['notification-wrapper']
                    });
                    setTimeout(function () {
                        _this.resetUploader('image');
                    }, 600);
                };
                FileUploaderComponent.prototype.read = function (file, store) {
                    store.total = (file.size / 1024).toFixed(2);
                    store.progress = 0;
                    store.loaded = 0;
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        store.url = e.target.result;
                    };
                    reader.onprogress = function (e) {
                        if (e.lengthComputable) {
                            store.progress = Math.round((e.loaded / e.total) * 100);
                            store.loaded = (e.loaded / 1024).toFixed(2);
                        }
                    };
                    reader.readAsDataURL(file);
                };
                return FileUploaderComponent;
            }());
            FileUploaderComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
            ]; };
            FileUploaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-file-uploader',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-uploader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/file-uploader/file-uploader.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-uploader.component.scss */ "./src/app/home/file-uploader/file-uploader.component.scss")).default]
                })
            ], FileUploaderComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/home/home.module.ts ***!
          \*************************************/
        /*! exports provided: homeRoutes, HomeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeRoutes", function () { return homeRoutes; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function () { return HomeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _ali_ali_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ali/ali.component */ "./src/app/home/ali/ali.component.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/modals.component */ "./src/app/home/modals/modals.component.ts");
            /* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alerts/alerts.component */ "./src/app/home/alerts/alerts.component.ts");
            /* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./autocomplete/autocomplete.component */ "./src/app/home/autocomplete/autocomplete.component.ts");
            /* harmony import */ var _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./file-uploader/file-uploader.component */ "./src/app/home/file-uploader/file-uploader.component.ts");
            /* harmony import */ var _modals_templates_create_account_modal_create_account_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/templates/create-account-modal/create-account-modal.component */ "./src/app/home/modals/templates/create-account-modal/create-account-modal.component.ts");
            /* harmony import */ var _modals_templates_sign_in_modal_sign_in_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/templates/sign-in-modal/sign-in-modal.component */ "./src/app/home/modals/templates/sign-in-modal/sign-in-modal.component.ts");
            /* harmony import */ var _utilities_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utilities.service */ "./src/app/home/utilities.service.ts");
            /* harmony import */ var _resolvers_dashboards_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../resolvers/dashboards.resolver */ "./src/app/resolvers/dashboards.resolver.ts");
            /* harmony import */ var _services_dashboards_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/dashboards.service */ "./src/app/services/dashboards.service.ts");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var homeRoutes = [
                {
                    path: '',
                    redirectTo: 'ali'
                },
                {
                    path: 'ali',
                    component: _ali_ali_component__WEBPACK_IMPORTED_MODULE_3__["AliComponent"],
                    resolve: {
                        data: _resolvers_dashboards_resolver__WEBPACK_IMPORTED_MODULE_13__["CrmDashboardResolver"]
                    }
                },
                {
                    path: 'alerts',
                    component: _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__["AlertsComponent"]
                },
                {
                    path: 'modals',
                    component: _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__["ModalsComponent"]
                },
                {
                    path: 'file-uploader',
                    component: _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_9__["FileUploaderComponent"]
                },
                {
                    path: 'autocomplete',
                    component: _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_8__["AutocompleteComponent"]
                }
            ];
            var HomeModule = /** @class */ (function () {
                function HomeModule() {
                }
                return HomeModule;
            }());
            HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _ali_ali_component__WEBPACK_IMPORTED_MODULE_3__["AliComponent"],
                        _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__["ModalsComponent"],
                        _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__["AlertsComponent"],
                        _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_8__["AutocompleteComponent"],
                        _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_9__["FileUploaderComponent"],
                        _modals_templates_create_account_modal_create_account_modal_component__WEBPACK_IMPORTED_MODULE_10__["CreateAccountModalComponent"],
                        _modals_templates_sign_in_modal_sign_in_modal_component__WEBPACK_IMPORTED_MODULE_11__["SignInModalComponent"]
                    ],
                    providers: [
                        _utilities_service__WEBPACK_IMPORTED_MODULE_12__["UtilitiesService"],
                        _resolvers_dashboards_resolver__WEBPACK_IMPORTED_MODULE_13__["CrmDashboardResolver"],
                        _services_dashboards_service__WEBPACK_IMPORTED_MODULE_14__["DashboardsService"]
                    ],
                    entryComponents: [
                        _modals_templates_create_account_modal_create_account_modal_component__WEBPACK_IMPORTED_MODULE_10__["CreateAccountModalComponent"],
                        _modals_templates_sign_in_modal_sign_in_modal_component__WEBPACK_IMPORTED_MODULE_11__["SignInModalComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(homeRoutes),
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"]
                    ]
                })
            ], HomeModule);
            /***/ 
        }),
        /***/ "./src/app/home/modals/modals.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/home/modals/modals.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n:host {\n  --page-title-color: rgb(var(--palette-primary-rgb));\n  --page-padding: 60px 40px;\n  --page-spacing: 10px;\n  --text-color: rgb(var(--palette-grey-5-rgb));\n}\n.content-wrapper {\n  padding: var(--page-padding);\n}\n.content-wrapper .page-title {\n  color: var(--page-title-color);\n  font-size: 30px;\n  margin-bottom: calc(var(--page-spacing) * 6);\n}\n.content-wrapper .card {\n  min-height: 200px;\n  border: none;\n  border-radius: 6px;\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .card .card-description {\n  font-size: 18px;\n  color: var(--text-color);\n}\n.content-wrapper .card .card-body {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: space-around;\n  padding: calc(var(--page-spacing) * 5);\n}\n.content-wrapper .card .card-body .open-button {\n  background-color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-white-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n}\n.content-wrapper .card .card-body .open-button:hover:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.content-wrapper .card .card-body .open-button:active:not([disabled]), .content-wrapper .card .card-body .open-button.active:not([disabled]), .content-wrapper .card .card-body .open-button:focus:not([disabled]), .content-wrapper .card .card-body .open-button.focus:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.content-wrapper .card .card-body .open-button[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bndpc2UvYmVjY2Evc3JjL3RoZW1lL3BhbGV0dGVzL3NoYXJlZC5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvdGhlbWUvcGFsZXR0ZXMvbW9kZS5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvYXBwL2hvbWUvbW9kYWxzL21vZGFscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9tb2RhbHMvbW9kYWxzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvdGhlbWUvbWl4aW5zL2J1dHRvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUNKQTtFQUVFLG1EQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRDQUFBO0FDMkNGO0FEeENBO0VBQ0UsNEJBQUE7QUMyQ0Y7QUR6Q0U7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtBQzJDSjtBRHhDRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUMwQ0o7QUR4Q0k7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUMwQ047QUR2Q0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQUE7QUN5Q047QUR2Q007RUV6QkosaUZBQUE7RUFDQSx5RUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdFQUFBO0FEbUVGO0FDaEVJO0VBQ0Usb0VBQUE7RUFDQSx5RUFBQTtFQUNBLHNFQUFBO0FEa0VOO0FDMURJO0VBQ0Usb0VBQUE7RUFDQSx5RUFBQTtFQUNBLHNFQUFBO0FENEROO0FDeERFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FEMERKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9tb2RhbHMvbW9kYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgU2hhcmVkXG4qL1xuXG5AaW1wb3J0ICdwcmVmZXJlbmNlcyc7XG5AaW1wb3J0ICdpbnRlcmZhY2UnO1xuQGltcG9ydCAnbW9kZSc7XG5cbi8vIEFuIGFic3RyYWN0IHdheSB0byBwcm92aWRlIGNvbG9ycy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgYW4gaW50ZXJmYWNlIHRvIGJvdGggU2FzcyB2YXJpYWJsZXMgYW5kIENTUyA0IHZhcmlhYmxlcyBiYXNlZCBjb2xvciBwYWxldHRlcy5cbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCRjb2xvci1uYW1lLCAkYWxwaGE6IDEpIHtcbiAgLy8gJGNvbG9yLXBhbGV0dGUtbW9kZSAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjaG9vc2VuLXBhbGV0dGUgICAgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2UgICA9PiAgRGVmaW5lZCBpbiBpbnRlcmZhY2Uuc2Nzc1xuICAvLyAkY3NzNC12YXItcHJlZml4ICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG4gIC8vICRjc3M0LWNvbG9yLWZvcm1hdCAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcblxuICBAaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ2Nzcy00Jykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlLWluZGV4OiBpbmRleCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUtaW5kZXgpID09ICdudW1iZXInKSB7XG4gICAgICAkY29sb3ItdmFyaWFibGUtbmFtZTogbnRoKCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLXZhcmlhYmxlLWluZGV4KTtcblxuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiYSh2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArJyksICN7JGFscGhhfSknfTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsgJykpJ307XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLW5hbWV9KSB3YXMgbm90IGZvdW5kIG9uIENvbG9yIFBhbGV0dGUgZGVmaW5pdGlvbi4gTWFrZSBzdXJlIGl0J3MgZGVmaW5lZCBpbiB0aGUgdGhlbWUvcGFsZXR0ZXMvaW50ZXJmYWNlLnNjc3MgZmlsZVwiO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnc2FzcycpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjaG9vc2VuLXBhbGV0dGU7XG5cbiAgICAkY29sb3ItdmFyaWFibGU6IG1hcC1nZXQoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICAvLyBDaGVjayBpZiBpdCBpcyBhIFNhc3MgY29sb3JcbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlKSA9PSAnY29sb3InKSB7XG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiByZ2JhKCRjb2xvci12YXJpYWJsZSwgJGFscGhhKTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gJGNvbG9yLXZhcmlhYmxlO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci12YXJpYWJsZX0pIGlzIG5vdCBhIFNhc3MgY29sb3JcIjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gQ29sb3IgUGFsZXR0ZSBtb2RlIHNlbGVjdGVkIGluIHRoZW1lL3BhbGV0dGVzL3ByZWZlcmVuY2VzLnNjc3MnO1xuICB9XG59XG4iLCIvKlxuICBDU1MgNCBNb2RlXG4qL1xuJGNvbG9yLXBhbGV0dGUtbW9kZTogJ2Nzcy00JztcblxuXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vLyBAaW1wb3J0ICdjb3JlJztcbi8vXG4vLyAkY29sb3ItcGFsZXR0ZS1tb2RlOiAnc2Fzcyc7XG4vL1xuLy8gLy8gSW1wb3J0IHRoZSBkZWZpbml0aW9ucyBvZiB0aGUgcGFsZXR0ZSB5b3Ugd2FudCB0byB1c2Vcbi8vIEBpbXBvcnQgJ3BhbGV0dGUtMS9kZWZpbml0aW9ucyc7XG4vLyAvLyBAaW1wb3J0ICdwYWxldHRlLTIvZGVmaW5pdGlvbnMnO1xuLy9cbi8vIC8vIEFzc2lnbiBhIHBhcnRpY3VsYXIgQ29sb3IgUGFsZXR0ZSB0byB0aGUgJ2Nob29zZW4tcGFsZXR0ZScgcG9pbnRlci5cbi8vIC8vICRjaG9vc2VuLXBhbGV0dGUgd2lsbCBiZSBhIFNhc3MgbWFwIHBvaW50aW5nIHRvIGFub3RoZXIgY29sb3IgcGFsZXR0ZSBTYXNzIG1hcFxuLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0xKTtcbi8vIC8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMik7XG4iLCJAaW1wb3J0ICdzaGFyZWQnO1xuXG46aG9zdCB7XG4gIC8vIC8vIERlZmF1bHQgdmFyaWFibGVzXG4gIC0tcGFnZS10aXRsZS1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9O1xuICAtLXBhZ2UtcGFkZGluZzogNjBweCA0MHB4O1xuICAtLXBhZ2Utc3BhY2luZzogMTBweDtcbiAgLS10ZXh0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktNScpfTtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtcGFkZGluZyk7XG5cbiAgLnBhZ2UtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogNik7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAzKTtcblxuICAgIC5jYXJkLWRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICB9XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiA1KTtcblxuICAgICAgLm9wZW4tYnV0dG9uIHtcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8qXG4gIFNoYXJlZFxuKi9cbi8qXG4gIENTUyA0IE1vZGVcbiovXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbjpob3N0IHtcbiAgLS1wYWdlLXRpdGxlLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpO1xuICAtLXBhZ2UtcGFkZGluZzogNjBweCA0MHB4O1xuICAtLXBhZ2Utc3BhY2luZzogMTBweDtcbiAgLS10ZXh0LWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1ncmV5LTUtcmdiKSk7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLXBhZGRpbmcpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAucGFnZS10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWNvbG9yKTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiA2KTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhcmQge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FyZCAuY2FyZC1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogNSk7XG59XG4uY29udGVudC13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkgLm9wZW4tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS13aGl0ZS1yZ2IpKSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjVzLCBjb2xvciAwLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG59XG4uY29udGVudC13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkgLm9wZW4tYnV0dG9uOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtd2hpdGUtcmdiKSkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5IC5vcGVuLWJ1dHRvbjphY3RpdmU6bm90KFtkaXNhYmxlZF0pLCAuY29udGVudC13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkgLm9wZW4tYnV0dG9uLmFjdGl2ZTpub3QoW2Rpc2FibGVkXSksIC5jb250ZW50LXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keSAub3Blbi1idXR0b246Zm9jdXM6bm90KFtkaXNhYmxlZF0pLCAuY29udGVudC13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkgLm9wZW4tYnV0dG9uLmZvY3VzOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtd2hpdGUtcmdiKSkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5IC5vcGVuLWJ1dHRvbltkaXNhYmxlZF0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiAwLjU7XG59IiwiQGltcG9ydCAncGFsZXR0ZXMvc2hhcmVkJztcblxuQG1peGluIGJ1dHRvbigpIHtcbiAgLy8gY29sb3JzIHRoYXQgY2FuIGJlIHJlZGVmaW5lZDpcbiAgLy8gLS1idXR0b24tYmFja2dyb3VuZC1jb2xvclxuICAvLyAtLWJ1dHRvbi1ib3JkZXItY29sb3JcbiAgLy8gLS1idXR0b24tY29sb3JcblxuICAkZGVmYXVsdC1iYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07IC8vIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3JcbiAgJGRlZmF1bHQtYm9yZGVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07IC8vIC0tYnV0dG9uLWJvcmRlci1jb2xvclxuICAkZGVmYXVsdC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTsgLy8gLS1idXR0b24tY29sb3JcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgJGRlZmF1bHQtYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgJGRlZmF1bHQtY29sb3IpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjVzLCBjb2xvciAuNXMsIGJhY2tncm91bmQtY29sb3IgLjVzO1xuXG4gICY6aG92ZXIge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgJGRlZmF1bHQtY29sb3IpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCAkZGVmYXVsdC1ib3JkZXItY29sb3IpO1xuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCAkZGVmYXVsdC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgJGRlZmF1bHQtY29sb3IpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCAkZGVmYXVsdC1ib3JkZXItY29sb3IpO1xuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCAkZGVmYXVsdC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG4gIH1cblxuICAmW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuXG5AbWl4aW4gYnV0dG9uLW91dGxpbmUoKSB7XG4gIC8vIGNvbG9ycyB0aGF0IGNhbiBiZSByZWRlZmluZWQ6XG4gIC8vIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3JcbiAgLy8gLS1idXR0b24tYm9yZGVyLWNvbG9yXG4gIC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTsgLy8gLS1idXR0b24tYmFja2dyb3VuZC1jb2xvclxuICAkZGVmYXVsdC1ib3JkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTsgLy8gLS1idXR0b24tYm9yZGVyLWNvbG9yXG4gICRkZWZhdWx0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07IC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsICRkZWZhdWx0LWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsICRkZWZhdWx0LWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cywgY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgJGRlZmF1bHQtYm9yZGVyLWNvbG9yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgJGRlZmF1bHQtYm9yZGVyLWNvbG9yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICB9XG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/home/modals/modals.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/home/modals/modals.component.ts ***!
          \*************************************************/
        /*! exports provided: ModalsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsComponent", function () { return ModalsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _templates_create_account_modal_create_account_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/create-account-modal/create-account-modal.component */ "./src/app/home/modals/templates/create-account-modal/create-account-modal.component.ts");
            /* harmony import */ var _templates_sign_in_modal_sign_in_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/sign-in-modal/sign-in-modal.component */ "./src/app/home/modals/templates/sign-in-modal/sign-in-modal.component.ts");
            var ModalsComponent = /** @class */ (function () {
                function ModalsComponent(dialog) {
                    this.dialog = dialog;
                }
                ModalsComponent.prototype.openRegisterModal = function () {
                    var dialogRef = this.dialog.open(_templates_create_account_modal_create_account_modal_component__WEBPACK_IMPORTED_MODULE_3__["CreateAccountModalComponent"], {
                        panelClass: 'register-modal'
                        // To pass data through the modal:
                        // data: {name: this.name, email: this.email}
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed');
                        // To get the output data from the modal:
                        // var output = result;
                    });
                };
                ModalsComponent.prototype.openSignInModal = function () {
                    var dialogRef = this.dialog.open(_templates_sign_in_modal_sign_in_modal_component__WEBPACK_IMPORTED_MODULE_4__["SignInModalComponent"], {
                        panelClass: 'sign-in-modal'
                        // To pass data through the modal:
                        // data: {name: this.name, email: this.email}
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed');
                        // To get the output data from the modal:
                        // var output = result;
                    });
                };
                return ModalsComponent;
            }());
            ModalsComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            ModalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-modals',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/modals/modals.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modals.component.scss */ "./src/app/home/modals/modals.component.scss")).default]
                })
            ], ModalsComponent);
            /***/ 
        }),
        /***/ "./src/app/home/modals/templates/create-account-modal/create-account-modal.component.scss": 
        /*!************************************************************************************************!*\
          !*** ./src/app/home/modals/templates/create-account-modal/create-account-modal.component.scss ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n:host {\n  --modal-title-color: rgb(var(--palette-primary-rgb));\n  --text-color: rgb(var(--palette-grey-7-rgb));\n  --modal-spacing: 10px;\n  --checkbox-label-color: rgb(var(--palette-primary-rgb));\n  --facebook-btn-background: rgb(var(--palette-facebook-rgb));\n  --facebook-btn-color: rgb(var(--palette-white-rgb));\n}\n.modal-container {\n  color: var(--text-color);\n  padding: calc(var(--modal-spacing) * 4);\n}\n.modal-container .app-logo-container {\n  margin: 0px auto;\n  flex: 0 0 16%;\n  max-width: 16%;\n  margin-bottom: calc(var(--modal-spacing) / 2);\n}\n.modal-container .modal-title {\n  text-align: center;\n  font-size: 30px;\n  margin-bottom: calc(var(--modal-spacing) * 3);\n  color: var(--modal-title-color);\n}\n.modal-container .modal-form {\n  --default-spacing: 10px;\n  --form-label-color: rgb(var(--palette-grey-7-rgb));\n  --form-input-background: rgb(var(--palette-white-rgb));\n  --form-input-border-color: rgba(var(--palette-grey-6-rgb), 0.42);\n  --form-input-color: rgb(var(--palette-grey-9-rgb));\n  --form-input-placeholder-color: rgb(var(--palette-grey-5-rgb));\n  --form-help-color: rgb(var(--palette-grey-7-rgb));\n  --form-input-addons-background: rgba(var(--palette-secondary-rgb), 0.15);\n  --form-input-addons-color: rgb(var(--palette-secondary-rgb));\n  --form-input-success-color: rgb(var(--palette-success-rgb));\n  --form-input-success-background: rgba(var(--palette-success-rgb), 0.15);\n  --form-input-error-color: rgb(var(--palette-error-rgb));\n  --form-input-error-background: rgba(var(--palette-error-rgb), 0.15);\n  --form-disabled-input-background: rgb(var(--palette-grey-2-rgb));\n  --form-disabled-input-color: rgb(var(--palette-grey-9-rgb));\n}\n.modal-container .modal-form label {\n  color: var(--form-label-color);\n  font-size: 16px;\n}\n.modal-container .modal-form .form-control {\n  background-color: var(--form-input-background);\n  border: 1px solid var(--form-input-border-color);\n  color: var(--form-input-color);\n}\n.modal-container .modal-form .form-control::-webkit-input-placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.modal-container .modal-form .form-control::-moz-placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.modal-container .modal-form .form-control::-ms-input-placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.modal-container .modal-form .form-control::placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.modal-container .modal-form .form-control.is-valid {\n  border: 1px solid var(--form-input-success-color);\n}\n.modal-container .modal-form .form-control.is-invalid {\n  border: 1px solid var(--form-input-error-color);\n}\n.modal-container .modal-form .form-control.disabled {\n  opacity: 0.8;\n  color: var(--form-disabled-input-color);\n  background-color: var(--form-disabled-input-background);\n}\n.modal-container .modal-form .form-text {\n  margin-top: calc(var(--default-spacing) / 2);\n  font-size: 14px;\n}\n.modal-container .modal-form .form-text.help-text {\n  color: var(--form-help-color);\n}\n.modal-container .modal-form .custom-valid-feedback {\n  background-color: var(--form-input-success-background);\n  color: var(--form-input-success-color);\n  padding: calc(var(--default-spacing) / 2) var(--default-spacing);\n  border-radius: 6px;\n}\n.modal-container .modal-form .custom-invalid-feedback {\n  background-color: var(--form-input-error-background);\n  color: var(--form-input-error-color);\n  padding: calc(var(--default-spacing) / 2) var(--default-spacing);\n  border-radius: 6px;\n}\n.modal-container .modal-form .input-group .input-group-prepend .input-group-text, .modal-container .modal-form .input-group .input-group-append .input-group-text {\n  background-color: var(--form-input-addons-background);\n  color: var(--form-input-addons-color);\n  border: 1px solid var(--form-input-border-color);\n}\n.modal-container .modal-form .custom-control.custom-checkbox {\n  --default-spacing: 10px;\n  --checkbox-border-color: rgb(var(--palette-primary-rgb));\n  --checkbox-background: rgb(var(--palette-primary-rgb));\n  --checkbox-color: rgb(var(--palette-white-rgb));\n}\n.modal-container .modal-form .custom-control.custom-checkbox .custom-control-label .custom-label {\n  margin-left: calc(var(--default-spacing) / 2);\n}\n.modal-container .modal-form .custom-control.custom-checkbox .custom-control-label::before {\n  width: 22px;\n  height: 22px;\n  border-radius: 6px;\n  top: 0px;\n}\n.modal-container .modal-form .custom-control.custom-checkbox .custom-control-label::after {\n  width: 22px;\n  height: 22px;\n  top: 0px;\n}\n.modal-container .modal-form .custom-control.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  color: var(--checkbox-color);\n  border-color: var(--checkbox-border-color);\n  background-color: var(--checkbox-background);\n}\n.modal-container .modal-form .custom-control.custom-checkbox .custom-label {\n  color: var(--checkbox-label-color);\n}\n.modal-container .modal-form .buttons-row {\n  display: flex;\n  justify-content: space-between;\n  margin: calc(var(--modal-spacing) * 2) 0px;\n}\n.modal-container .modal-form .buttons-row .register-btn {\n  width: 100%;\n  margin-right: calc(var(--modal-spacing) / 2);\n  background-color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-white-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n}\n.modal-container .modal-form .buttons-row .register-btn:hover:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.modal-container .modal-form .buttons-row .register-btn:active:not([disabled]), .modal-container .modal-form .buttons-row .register-btn.active:not([disabled]), .modal-container .modal-form .buttons-row .register-btn:focus:not([disabled]), .modal-container .modal-form .buttons-row .register-btn.focus:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.modal-container .modal-form .buttons-row .register-btn[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.modal-container .modal-form .buttons-row .log-in-btn {\n  width: 100%;\n  margin-left: calc(var(--modal-spacing) / 2);\n  background-color: var(--button-background-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-primary-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n}\n.modal-container .modal-form .buttons-row .log-in-btn:hover:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-white-rgb)));\n}\n.modal-container .modal-form .buttons-row .log-in-btn:active:not([disabled]), .modal-container .modal-form .buttons-row .log-in-btn.active:not([disabled]), .modal-container .modal-form .buttons-row .log-in-btn:focus:not([disabled]), .modal-container .modal-form .buttons-row .log-in-btn.focus:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-white-rgb)));\n}\n.modal-container .modal-form .buttons-row .log-in-btn[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.modal-container .register-divider {\n  align-items: center;\n  color: var(--text-color);\n  display: flex;\n}\n.modal-container .register-divider .line {\n  flex-grow: 1;\n}\n.modal-container .register-divider span {\n  margin: 0 calc(var(--modal-spacing) * 1.5);\n}\n.modal-container .fb-signin {\n  margin: 0px auto;\n  margin-top: calc(var(--modal-spacing) * 1.5);\n  display: flex;\n  --button-background-color: var(--facebook-btn-background);\n  --button-border-color: var(--facebook-btn-background);\n  --button-color: var(--facebook-btn-color);\n  background-color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-white-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n  padding-left: calc(var(--modal-spacing) * 3);\n  padding-right: calc(var(--modal-spacing) * 3);\n}\n.modal-container .fb-signin:hover:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.modal-container .fb-signin:active:not([disabled]), .modal-container .fb-signin.active:not([disabled]), .modal-container .fb-signin:focus:not([disabled]), .modal-container .fb-signin.focus:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.modal-container .fb-signin[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n::ng-deep .register-modal .mat-dialog-container {\n  border-radius: 6px;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bndpc2UvYmVjY2Evc3JjL3RoZW1lL3BhbGV0dGVzL3NoYXJlZC5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvdGhlbWUvcGFsZXR0ZXMvbW9kZS5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvYXBwL2hvbWUvbW9kYWxzL3RlbXBsYXRlcy9jcmVhdGUtYWNjb3VudC1tb2RhbC9jcmVhdGUtYWNjb3VudC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9tb2RhbHMvdGVtcGxhdGVzL2NyZWF0ZS1hY2NvdW50LW1vZGFsL2NyZWF0ZS1hY2NvdW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvdGhlbWUvbWl4aW5zL2lucHV0cy9mb3JtLWdyb3VwLnNjc3MiLCIvVXNlcnMvc2hhd253aXNlL2JlY2NhL3NyYy90aGVtZS90aGlyZC1wYXJ0eS9vdmVycmlkZS1ib290c3RyYXAtdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvc2hhd253aXNlL2JlY2NhL3NyYy90aGVtZS9taXhpbnMvaW5wdXRzL2NoZWNrYm94LnNjc3MiLCIvVXNlcnMvc2hhd253aXNlL2JlY2NhL3NyYy90aGVtZS9taXhpbnMvYnV0dG9ucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBQ0pBO0VBRUUsb0RBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsdURBQUE7RUFDQSwyREFBQTtFQUNBLG1EQUFBO0FDMkNGO0FEeENBO0VBQ0Usd0JBQUE7RUFDQSx1Q0FBQTtBQzJDRjtBRHpDRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSw2Q0FBQTtBQzJDSjtBRHhDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0VBQ0EsK0JBQUE7QUMwQ0o7QUR2Q0U7RUU3QkEsdUJBQUE7RUFDQSxrREFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0VBQUE7RUFDQSxrREFBQTtFQUNBLDhEQUFBO0VBQ0EsaURBQUE7RUFDQSx3RUFBQTtFQUNBLDREQUFBO0VBQ0EsMkRBQUE7RUFDQSx1RUFBQTtFQUNBLHVEQUFBO0VBQ0EsbUVBQUE7RUFDQSxnRUFBQTtFQUNBLDJEQUFBO0FEdUVGO0FDckVFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FEdUVKO0FDcEVFO0VBQ0UsOENBQUE7RUFDQSxnREFBQTtFQUNBLDhCQUFBO0FEc0VKO0FDcEVJO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0FEc0VOO0FDeEVJO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0FEc0VOO0FDeEVJO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0FEc0VOO0FDeEVJO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0FEc0VOO0FDbkVJO0VBQ0UsaURBQUE7QURxRU47QUNsRUk7RUFDRSwrQ0FBQTtBRG9FTjtBQ2pFSTtFQUNFLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLHVEQUFBO0FEbUVOO0FDL0RFO0VBQ0UsNENBQUE7RUFDQSxlQUFBO0FEaUVKO0FDL0RJO0VBQ0UsNkJBQUE7QURpRU47QUM3REU7RUFDRSxzREFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0VBQUE7RUFDQSxrQkFBQTtBRCtESjtBQzVERTtFQUNFLG9EQUFBO0VBQ0Esb0NBQUE7RUFDQSxnRUFBQTtFQUNBLGtCQzVEa0I7QUYwSHRCO0FDekRNO0VBQ0UscURBQUE7RUFDQSxxQ0FBQTtFQUNBLGdEQUFBO0FEMkRSO0FEckdJO0VJaENGLHVCQUFBO0VBQ0Esd0RBQUE7RUFDQSxzREFBQTtFQUNBLCtDQUFBO0FId0lGO0FHcklJO0VBQ0UsNkNBQUE7QUh1SU47QUdwSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBSHNJTjtBR3BJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBSHNJTjtBR2xJRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSw0Q0FBQTtBSG9JSjtBRDVITTtFQUNFLGtDQUFBO0FDOEhSO0FEMUhJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QUM0SE47QUQxSE07RUFDRSxXQUFBO0VBQ0EsNENBQUE7RUtuQ04saUZBQUE7RUFDQSx5RUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdFQUFBO0FKZ0tGO0FJN0pJO0VBQ0Usb0VBQUE7RUFDQSx5RUFBQTtFQUNBLHNFQUFBO0FKK0pOO0FJdkpJO0VBQ0Usb0VBQUE7RUFDQSx5RUFBQTtFQUNBLHNFQUFBO0FKeUpOO0FJckpFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FKdUpKO0FEbEpNO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VLT04sK0VBQUE7RUFDQSx5RUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdFQUFBO0FKOElGO0FJM0lJO0VBQ0Usc0VBQUE7RUFDQSx5RUFBQTtFQUNBLG9FQUFBO0FKNklOO0FJcklJO0VBQ0Usc0VBQUE7RUFDQSx5RUFBQTtFQUNBLG9FQUFBO0FKdUlOO0FJcElFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FKc0lKO0FEdktFO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7QUN5S0o7QUR2S0k7RUFDRSxZQUFBO0FDeUtOO0FEdEtJO0VBQ0UsMENBQUE7QUN3S047QURwS0U7RUFDRSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLHlEQUFBO0VBQ0EscURBQUE7RUFDQSx5Q0FBQTtFS2xFRixpRkFBQTtFQUNBLHlFQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0VBQUE7RUwwREUsNENBQUE7RUFDQSw2Q0FBQTtBQ2dMSjtBSXhPSTtFQUNFLG9FQUFBO0VBQ0EseUVBQUE7RUFDQSxzRUFBQTtBSjBPTjtBSWxPSTtFQUNFLG9FQUFBO0VBQ0EseUVBQUE7RUFDQSxzRUFBQTtBSm9PTjtBSWhPRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBSmtPSjtBRHhMSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQzJMTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbW9kYWxzL3RlbXBsYXRlcy9jcmVhdGUtYWNjb3VudC1tb2RhbC9jcmVhdGUtYWNjb3VudC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFNoYXJlZFxuKi9cblxuQGltcG9ydCAncHJlZmVyZW5jZXMnO1xuQGltcG9ydCAnaW50ZXJmYWNlJztcbkBpbXBvcnQgJ21vZGUnO1xuXG4vLyBBbiBhYnN0cmFjdCB3YXkgdG8gcHJvdmlkZSBjb2xvcnMuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGFuIGludGVyZmFjZSB0byBib3RoIFNhc3MgdmFyaWFibGVzIGFuZCBDU1MgNCB2YXJpYWJsZXMgYmFzZWQgY29sb3IgcGFsZXR0ZXMuXG5AZnVuY3Rpb24gcGFsZXR0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGFscGhhOiAxKSB7XG4gIC8vICRjb2xvci1wYWxldHRlLW1vZGUgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY2hvb3Nlbi1wYWxldHRlICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlICAgPT4gIERlZmluZWQgaW4gaW50ZXJmYWNlLnNjc3NcbiAgLy8gJGNzczQtdmFyLXByZWZpeCAgICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuICAvLyAkY3NzNC1jb2xvci1mb3JtYXQgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG5cbiAgQGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdjc3MtNCcpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjb2xvci1wYWxldHRlLWludGVyZmFjZTtcblxuICAgICRjb2xvci12YXJpYWJsZS1pbmRleDogaW5kZXgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlLWluZGV4KSA9PSAnbnVtYmVyJykge1xuICAgICAgJGNvbG9yLXZhcmlhYmxlLW5hbWU6IG50aCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci12YXJpYWJsZS1pbmRleCk7XG5cbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYmEodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKycpLCAjeyRhbHBoYX0pJ307XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYih2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArICcpKSd9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci1uYW1lfSkgd2FzIG5vdCBmb3VuZCBvbiBDb2xvciBQYWxldHRlIGRlZmluaXRpb24uIE1ha2Ugc3VyZSBpdCdzIGRlZmluZWQgaW4gdGhlIHRoZW1lL3BhbGV0dGVzL2ludGVyZmFjZS5zY3NzIGZpbGVcIjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ3Nhc3MnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY2hvb3Nlbi1wYWxldHRlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlOiBtYXAtZ2V0KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBTYXNzIGNvbG9yXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZSkgPT0gJ2NvbG9yJykge1xuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gcmdiYSgkY29sb3ItdmFyaWFibGUsICRhbHBoYSk7XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICRjb2xvci12YXJpYWJsZTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItdmFyaWFibGV9KSBpcyBub3QgYSBTYXNzIGNvbG9yXCI7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ05vIENvbG9yIFBhbGV0dGUgbW9kZSBzZWxlY3RlZCBpbiB0aGVtZS9wYWxldHRlcy9wcmVmZXJlbmNlcy5zY3NzJztcbiAgfVxufVxuIiwiLypcbiAgQ1NTIDQgTW9kZVxuKi9cbiRjb2xvci1wYWxldHRlLW1vZGU6ICdjc3MtNCc7XG5cblxuLypcbiAgU2FzcyBNb2RlXG4qL1xuLy8gQGltcG9ydCAnY29yZSc7XG4vL1xuLy8gJGNvbG9yLXBhbGV0dGUtbW9kZTogJ3Nhc3MnO1xuLy9cbi8vIC8vIEltcG9ydCB0aGUgZGVmaW5pdGlvbnMgb2YgdGhlIHBhbGV0dGUgeW91IHdhbnQgdG8gdXNlXG4vLyBAaW1wb3J0ICdwYWxldHRlLTEvZGVmaW5pdGlvbnMnO1xuLy8gLy8gQGltcG9ydCAncGFsZXR0ZS0yL2RlZmluaXRpb25zJztcbi8vXG4vLyAvLyBBc3NpZ24gYSBwYXJ0aWN1bGFyIENvbG9yIFBhbGV0dGUgdG8gdGhlICdjaG9vc2VuLXBhbGV0dGUnIHBvaW50ZXIuXG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlIHdpbGwgYmUgYSBTYXNzIG1hcCBwb2ludGluZyB0byBhbm90aGVyIGNvbG9yIHBhbGV0dGUgU2FzcyBtYXBcbi8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMSk7XG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTIpO1xuIiwiQGltcG9ydCAnc2hhcmVkJztcblxuOmhvc3Qge1xuICAvLyBEZWZhdWx0IHZhcmlhYmxlc1xuICAtLW1vZGFsLXRpdGxlLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07XG4gIC0tdGV4dC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTcnKX07XG4gIC0tbW9kYWwtc3BhY2luZzogMTBweDtcbiAgLS1jaGVja2JveC1sYWJlbC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9O1xuICAtLWZhY2Vib29rLWJ0bi1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ2ZhY2Vib29rJyl9O1xuICAtLWZhY2Vib29rLWJ0bi1jb2xvcjogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1tb2RhbC1zcGFjaW5nKSAqIDQpO1xuXG4gIC5hcHAtbG9nby1jb250YWluZXIge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgZmxleDogMCAwIDE2JTtcbiAgICBtYXgtd2lkdGg6IDE2JTtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLW1vZGFsLXNwYWNpbmcpIC8gMik7XG4gIH1cblxuICAubW9kYWwtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1tb2RhbC1zcGFjaW5nKSAqIDMpO1xuICAgIGNvbG9yOiB2YXIoLS1tb2RhbC10aXRsZS1jb2xvcik7XG4gIH1cblxuICAubW9kYWwtZm9ybSB7XG4gICAgQGluY2x1ZGUgZm9ybS1ncm91cC1zdHlsZXMoKTtcblxuICAgIC5jdXN0b20tY29udHJvbC5jdXN0b20tY2hlY2tib3gge1xuICAgICAgQGluY2x1ZGUgYm9vdHN0cmFwLWNoZWNrYm94LXN0eWxlcygpO1xuICAgICAgLmN1c3RvbS1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jaGVja2JveC1sYWJlbC1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ1dHRvbnMtcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW46IGNhbGModmFyKC0tbW9kYWwtc3BhY2luZykgKiAyKSAwcHg7XG5cbiAgICAgIC5yZWdpc3Rlci1idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLW1vZGFsLXNwYWNpbmcpIC8gMik7XG4gICAgICAgIEBpbmNsdWRlIGJ1dHRvbigpO1xuICAgICAgfVxuICAgICAgLmxvZy1pbi1idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tbW9kYWwtc3BhY2luZykgLyAyKTtcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uLW91dGxpbmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmVnaXN0ZXItZGl2aWRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5saW5lIHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIG1hcmdpbjogMCBjYWxjKHZhcigtLW1vZGFsLXNwYWNpbmcpICogMS41KTtcbiAgICB9XG4gIH1cblxuICAuZmItc2lnbmluIHtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tbW9kYWwtc3BhY2luZykgKiAxLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmFjZWJvb2stYnRuLWJhY2tncm91bmQpO1xuICAgIC0tYnV0dG9uLWJvcmRlci1jb2xvcjogdmFyKC0tZmFjZWJvb2stYnRuLWJhY2tncm91bmQpO1xuICAgIC0tYnV0dG9uLWNvbG9yOiB2YXIoLS1mYWNlYm9vay1idG4tY29sb3IpO1xuICAgIEBpbmNsdWRlIGJ1dHRvbigpO1xuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1tb2RhbC1zcGFjaW5nKSAqIDMpO1xuICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tbW9kYWwtc3BhY2luZykgKiAzKTtcbiAgfVxufVxuXG46Om5nLWRlZXAge1xuICAucmVnaXN0ZXItbW9kYWwge1xuICAgIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICB9XG59XG4iLCIvKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8qXG4gIFNoYXJlZFxuKi9cbi8qXG4gIENTUyA0IE1vZGVcbiovXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbjpob3N0IHtcbiAgLS1tb2RhbC10aXRsZS1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKTtcbiAgLS10ZXh0LWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1ncmV5LTctcmdiKSk7XG4gIC0tbW9kYWwtc3BhY2luZzogMTBweDtcbiAgLS1jaGVja2JveC1sYWJlbC1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKTtcbiAgLS1mYWNlYm9vay1idG4tYmFja2dyb3VuZDogcmdiKHZhcigtLXBhbGV0dGUtZmFjZWJvb2stcmdiKSk7XG4gIC0tZmFjZWJvb2stYnRuLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS13aGl0ZS1yZ2IpKTtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1tb2RhbC1zcGFjaW5nKSAqIDQpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAuYXBwLWxvZ28tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgZmxleDogMCAwIDE2JTtcbiAgbWF4LXdpZHRoOiAxNiU7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tbW9kYWwtc3BhY2luZykgLyAyKTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tbW9kYWwtc3BhY2luZykgKiAzKTtcbiAgY29sb3I6IHZhcigtLW1vZGFsLXRpdGxlLWNvbG9yKTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0ge1xuICAtLWRlZmF1bHQtc3BhY2luZzogMTBweDtcbiAgLS1mb3JtLWxhYmVsLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1ncmV5LTctcmdiKSk7XG4gIC0tZm9ybS1pbnB1dC1iYWNrZ3JvdW5kOiByZ2IodmFyKC0tcGFsZXR0ZS13aGl0ZS1yZ2IpKTtcbiAgLS1mb3JtLWlucHV0LWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1wYWxldHRlLWdyZXktNi1yZ2IpLCAwLjQyKTtcbiAgLS1mb3JtLWlucHV0LWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1ncmV5LTktcmdiKSk7XG4gIC0tZm9ybS1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtZ3JleS01LXJnYikpO1xuICAtLWZvcm0taGVscC1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtZ3JleS03LXJnYikpO1xuICAtLWZvcm0taW5wdXQtYWRkb25zLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tcGFsZXR0ZS1zZWNvbmRhcnktcmdiKSwgMC4xNSk7XG4gIC0tZm9ybS1pbnB1dC1hZGRvbnMtY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLXNlY29uZGFyeS1yZ2IpKTtcbiAgLS1mb3JtLWlucHV0LXN1Y2Nlc3MtY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLXN1Y2Nlc3MtcmdiKSk7XG4gIC0tZm9ybS1pbnB1dC1zdWNjZXNzLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tcGFsZXR0ZS1zdWNjZXNzLXJnYiksIDAuMTUpO1xuICAtLWZvcm0taW5wdXQtZXJyb3ItY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLWVycm9yLXJnYikpO1xuICAtLWZvcm0taW5wdXQtZXJyb3ItYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wYWxldHRlLWVycm9yLXJnYiksIDAuMTUpO1xuICAtLWZvcm0tZGlzYWJsZWQtaW5wdXQtYmFja2dyb3VuZDogcmdiKHZhcigtLXBhbGV0dGUtZ3JleS0yLXJnYikpO1xuICAtLWZvcm0tZGlzYWJsZWQtaW5wdXQtY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLWdyZXktOS1yZ2IpKTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gbGFiZWwge1xuICBjb2xvcjogdmFyKC0tZm9ybS1sYWJlbC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0taW5wdXQtYmFja2dyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvcm0taW5wdXQtYm9yZGVyLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWZvcm0taW5wdXQtY29sb3IpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWZvcm0taW5wdXQtcGxhY2Vob2xkZXItY29sb3IpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSAuZm9ybS1jb250cm9sLmlzLXZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9ybS1pbnB1dC1zdWNjZXNzLWNvbG9yKTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9ybS1pbnB1dC1lcnJvci1jb2xvcik7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIC5mb3JtLWNvbnRyb2wuZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjg7XG4gIGNvbG9yOiB2YXIoLS1mb3JtLWRpc2FibGVkLWlucHV0LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1kaXNhYmxlZC1pbnB1dC1iYWNrZ3JvdW5kKTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gLmZvcm0tdGV4dCB7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tZGVmYXVsdC1zcGFjaW5nKSAvIDIpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIC5mb3JtLXRleHQuaGVscC10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWZvcm0taGVscC1jb2xvcik7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIC5jdXN0b20tdmFsaWQtZmVlZGJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LXN1Y2Nlc3MtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LXN1Y2Nlc3MtY29sb3IpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLWRlZmF1bHQtc3BhY2luZykgLyAyKSB2YXIoLS1kZWZhdWx0LXNwYWNpbmcpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIC5jdXN0b20taW52YWxpZC1mZWVkYmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0taW5wdXQtZXJyb3ItYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWVycm9yLWNvbG9yKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1kZWZhdWx0LXNwYWNpbmcpIC8gMikgdmFyKC0tZGVmYXVsdC1zcGFjaW5nKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSAuaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1hcHBlbmQgLmlucHV0LWdyb3VwLXRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWFkZG9ucy1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLWZvcm0taW5wdXQtYWRkb25zLWNvbG9yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9ybS1pbnB1dC1ib3JkZXItY29sb3IpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSAuY3VzdG9tLWNvbnRyb2wuY3VzdG9tLWNoZWNrYm94IHtcbiAgLS1kZWZhdWx0LXNwYWNpbmc6IDEwcHg7XG4gIC0tY2hlY2tib3gtYm9yZGVyLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpO1xuICAtLWNoZWNrYm94LWJhY2tncm91bmQ6IHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSk7XG4gIC0tY2hlY2tib3gtY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSAuY3VzdG9tLWNvbnRyb2wuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1sYWJlbCAuY3VzdG9tLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tZGVmYXVsdC1zcGFjaW5nKSAvIDIpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSAuY3VzdG9tLWNvbnRyb2wuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0b3A6IDBweDtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gLmN1c3RvbS1jb250cm9sLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgdG9wOiAwcHg7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIC5jdXN0b20tY29udHJvbC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGNvbG9yOiB2YXIoLS1jaGVja2JveC1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY2hlY2tib3gtYm9yZGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2tib3gtYmFja2dyb3VuZCk7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIC5jdXN0b20tY29udHJvbC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1jaGVja2JveC1sYWJlbC1jb2xvcik7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIC5idXR0b25zLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLW1vZGFsLXNwYWNpbmcpICogMikgMHB4O1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSAuYnV0dG9ucy1yb3cgLnJlZ2lzdGVyLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tbW9kYWwtc3BhY2luZykgLyAyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS13aGl0ZS1yZ2IpKSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjVzLCBjb2xvciAwLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIC5idXR0b25zLXJvdyAucmVnaXN0ZXItYnRuOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtd2hpdGUtcmdiKSkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSAuYnV0dG9ucy1yb3cgLnJlZ2lzdGVyLWJ0bjphY3RpdmU6bm90KFtkaXNhYmxlZF0pLCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIC5idXR0b25zLXJvdyAucmVnaXN0ZXItYnRuLmFjdGl2ZTpub3QoW2Rpc2FibGVkXSksIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gLmJ1dHRvbnMtcm93IC5yZWdpc3Rlci1idG46Zm9jdXM6bm90KFtkaXNhYmxlZF0pLCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIC5idXR0b25zLXJvdyAucmVnaXN0ZXItYnRuLmZvY3VzOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtd2hpdGUtcmdiKSkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSAuYnV0dG9ucy1yb3cgLnJlZ2lzdGVyLWJ0bltkaXNhYmxlZF0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiAwLjU7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIC5idXR0b25zLXJvdyAubG9nLWluLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1tb2RhbC1zcGFjaW5nKSAvIDIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtd2hpdGUtcmdiKSkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNXMsIGNvbG9yIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC41cztcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gLmJ1dHRvbnMtcm93IC5sb2ctaW4tYnRuOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtd2hpdGUtcmdiKSkpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSAuYnV0dG9ucy1yb3cgLmxvZy1pbi1idG46YWN0aXZlOm5vdChbZGlzYWJsZWRdKSwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSAuYnV0dG9ucy1yb3cgLmxvZy1pbi1idG4uYWN0aXZlOm5vdChbZGlzYWJsZWRdKSwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSAuYnV0dG9ucy1yb3cgLmxvZy1pbi1idG46Zm9jdXM6bm90KFtkaXNhYmxlZF0pLCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIC5idXR0b25zLXJvdyAubG9nLWluLWJ0bi5mb2N1czpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpKTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gLmJ1dHRvbnMtcm93IC5sb2ctaW4tYnRuW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5tb2RhbC1jb250YWluZXIgLnJlZ2lzdGVyLWRpdmlkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubW9kYWwtY29udGFpbmVyIC5yZWdpc3Rlci1kaXZpZGVyIC5saW5lIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLm1vZGFsLWNvbnRhaW5lciAucmVnaXN0ZXItZGl2aWRlciBzcGFuIHtcbiAgbWFyZ2luOiAwIGNhbGModmFyKC0tbW9kYWwtc3BhY2luZykgKiAxLjUpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAuZmItc2lnbmluIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1tb2RhbC1zcGFjaW5nKSAqIDEuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWZhY2Vib29rLWJ0bi1iYWNrZ3JvdW5kKTtcbiAgLS1idXR0b24tYm9yZGVyLWNvbG9yOiB2YXIoLS1mYWNlYm9vay1idG4tYmFja2dyb3VuZCk7XG4gIC0tYnV0dG9uLWNvbG9yOiB2YXIoLS1mYWNlYm9vay1idG4tY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNXMsIGNvbG9yIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLW1vZGFsLXNwYWNpbmcpICogMyk7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tbW9kYWwtc3BhY2luZykgKiAzKTtcbn1cbi5tb2RhbC1jb250YWluZXIgLmZiLXNpZ25pbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbn1cbi5tb2RhbC1jb250YWluZXIgLmZiLXNpZ25pbjphY3RpdmU6bm90KFtkaXNhYmxlZF0pLCAubW9kYWwtY29udGFpbmVyIC5mYi1zaWduaW4uYWN0aXZlOm5vdChbZGlzYWJsZWRdKSwgLm1vZGFsLWNvbnRhaW5lciAuZmItc2lnbmluOmZvY3VzOm5vdChbZGlzYWJsZWRdKSwgLm1vZGFsLWNvbnRhaW5lciAuZmItc2lnbmluLmZvY3VzOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtd2hpdGUtcmdiKSkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAuZmItc2lnbmluW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuOjpuZy1kZWVwIC5yZWdpc3Rlci1tb2RhbCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDBweDtcbn0iLCJAbWl4aW4gZm9ybS1ncm91cC1zdHlsZXMoKSB7XG4gIC0tZGVmYXVsdC1zcGFjaW5nOiAxMHB4O1xuICAtLWZvcm0tbGFiZWwtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS03Jyl9O1xuICAtLWZvcm0taW5wdXQtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTtcbiAgLS1mb3JtLWlucHV0LWJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTYnLCAwLjQyKX07XG4gIC0tZm9ybS1pbnB1dC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTknKX07XG4gIC0tZm9ybS1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTUnKX07XG4gIC0tZm9ybS1oZWxwLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktNycpfTtcbiAgLS1mb3JtLWlucHV0LWFkZG9ucy1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ3NlY29uZGFyeScsIDAuMTUpfTtcbiAgLS1mb3JtLWlucHV0LWFkZG9ucy1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdzZWNvbmRhcnknKX07XG4gIC0tZm9ybS1pbnB1dC1zdWNjZXNzLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3N1Y2Nlc3MnKX07XG4gIC0tZm9ybS1pbnB1dC1zdWNjZXNzLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcignc3VjY2VzcycsIDAuMTUpfTtcbiAgLS1mb3JtLWlucHV0LWVycm9yLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2Vycm9yJyl9O1xuICAtLWZvcm0taW5wdXQtZXJyb3ItYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdlcnJvcicsIDAuMTUpfTtcbiAgLS1mb3JtLWRpc2FibGVkLWlucHV0LWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS0yJyl9O1xuICAtLWZvcm0tZGlzYWJsZWQtaW5wdXQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS05Jyl9O1xuXG4gIGxhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tZm9ybS1sYWJlbC1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JtLWlucHV0LWJvcmRlci1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWZvcm0taW5wdXQtY29sb3IpO1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHZhcigtLWZvcm0taW5wdXQtcGxhY2Vob2xkZXItY29sb3IpO1xuICAgIH1cblxuICAgICYuaXMtdmFsaWQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9ybS1pbnB1dC1zdWNjZXNzLWNvbG9yKTtcbiAgICB9XG5cbiAgICAmLmlzLWludmFsaWQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9ybS1pbnB1dC1lcnJvci1jb2xvcik7XG4gICAgfVxuXG4gICAgJi5kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICBjb2xvcjogdmFyKC0tZm9ybS1kaXNhYmxlZC1pbnB1dC1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWRpc2FibGVkLWlucHV0LWJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLXRleHQge1xuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tZGVmYXVsdC1zcGFjaW5nKSAvIDIpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICYuaGVscC10ZXh0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1mb3JtLWhlbHAtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIC5jdXN0b20tdmFsaWQtZmVlZGJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0taW5wdXQtc3VjY2Vzcy1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1zdWNjZXNzLWNvbG9yKTtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWRlZmF1bHQtc3BhY2luZykgLyAyKSB2YXIoLS1kZWZhdWx0LXNwYWNpbmcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuXG4gIC5jdXN0b20taW52YWxpZC1mZWVkYmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1lcnJvci1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1lcnJvci1jb2xvcik7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1kZWZhdWx0LXNwYWNpbmcpIC8gMikgdmFyKC0tZGVmYXVsdC1zcGFjaW5nKTtcbiAgICBib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gIC5pbnB1dC1ncm91cCB7XG4gICAgLmlucHV0LWdyb3VwLXByZXBlbmQsIC5pbnB1dC1ncm91cC1hcHBlbmQge1xuICAgICAgLmlucHV0LWdyb3VwLXRleHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWFkZG9ucy1iYWNrZ3JvdW5kKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWZvcm0taW5wdXQtYWRkb25zLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9ybS1pbnB1dC1ib3JkZXItY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIFZhcmlhYmxlc1xuJGljb24tZm9udC1wYXRoOiAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9mb250cy9ib290c3RyYXAvJztcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnTnVuaXRvJywgc2Fucy1zZXJpZiAhZGVmYXVsdDtcblxuLy8gSGVyZSB5b3UgY2FuIHJlZGVmaW5lIGdsb2JhbCBzdHlsZXMgZnJvbSBCb290c3RyYXBcblxuLy8gcmVkZWZpbmUgaW5wdXRzIGJvcmRlciByYWRpdXNcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiA2cHg7XG5cbi8vIHlvdSBjYW4gcmVkZWZpbmUgdGhlc2UgY29sb3JzIHdpdGggeW91ciBjaG9vc2VuIHBhbGV0dGUgY29sb3JzXG4vLyAkcHJpbWFyeTogI3lvdXJjb2xvcjtcbi8vICRzZWNvbmRhcnk6ICN5b3VyY29sb3I7XG4vLyAkdGVydGlhcnk6ICN5b3VyY29sb3I7XG5cbi8vIGZvciBwYWxldHRlIDE6XG4kcHJpbWFyeTogIzNiODZmZjtcbiRzZWNvbmRhcnk6ICMzOEQ5OTc7XG4kdGVydGlhcnk6ICNmZmMyMDA7XG5cbi8vIGZvciBwYWxldHRlIDI6XG4vLyAkcHJpbWFyeTogIzllMzRkZjtcbi8vICRzZWNvbmRhcnk6ICM4QkVERDM7XG4vLyAkdGVydGlhcnk6ICNGRkFGODQ7XG4iLCJAbWl4aW4gYm9vdHN0cmFwLWNoZWNrYm94LXN0eWxlcygpIHtcbiAgLS1kZWZhdWx0LXNwYWNpbmc6IDEwcHg7XG4gIC0tY2hlY2tib3gtYm9yZGVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07XG4gIC0tY2hlY2tib3gtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9O1xuICAtLWNoZWNrYm94LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3doaXRlJyl9O1xuXG4gIC5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gICAgLmN1c3RvbS1sYWJlbCB7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1kZWZhdWx0LXNwYWNpbmcpIC8gMik7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgdG9wOiAwcHg7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgdG9wOiAwcHg7XG4gICAgfVxuICB9XG5cbiAgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgY29sb3I6IHZhcigtLWNoZWNrYm94LWNvbG9yKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNoZWNrYm94LWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2tib3gtYmFja2dyb3VuZCk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3BhbGV0dGVzL3NoYXJlZCc7XG5cbkBtaXhpbiBidXR0b24oKSB7XG4gIC8vIGNvbG9ycyB0aGF0IGNhbiBiZSByZWRlZmluZWQ6XG4gIC8vIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3JcbiAgLy8gLS1idXR0b24tYm9yZGVyLWNvbG9yXG4gIC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9OyAvLyAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yXG4gICRkZWZhdWx0LWJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9OyAvLyAtLWJ1dHRvbi1ib3JkZXItY29sb3JcbiAgJGRlZmF1bHQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignd2hpdGUnKX07IC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsICRkZWZhdWx0LWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsICRkZWZhdWx0LWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cywgY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgJGRlZmF1bHQtYm9yZGVyLWNvbG9yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgJGRlZmF1bHQtYm9yZGVyLWNvbG9yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogLjU7XG4gIH1cbn1cblxuQG1peGluIGJ1dHRvbi1vdXRsaW5lKCkge1xuICAvLyBjb2xvcnMgdGhhdCBjYW4gYmUgcmVkZWZpbmVkOlxuICAvLyAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yXG4gIC8vIC0tYnV0dG9uLWJvcmRlci1jb2xvclxuICAvLyAtLWJ1dHRvbi1jb2xvclxuXG4gICRkZWZhdWx0LWJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignd2hpdGUnKX07IC8vIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3JcbiAgJGRlZmF1bHQtYm9yZGVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07IC8vIC0tYnV0dG9uLWJvcmRlci1jb2xvclxuICAkZGVmYXVsdC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9OyAvLyAtLWJ1dHRvbi1jb2xvclxuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCAkZGVmYXVsdC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCAkZGVmYXVsdC1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCAkZGVmYXVsdC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuNXMsIGNvbG9yIC41cywgYmFja2dyb3VuZC1jb2xvciAuNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCAkZGVmYXVsdC1jb2xvcik7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsICRkZWZhdWx0LWJvcmRlci1jb2xvcik7XG4gICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsICRkZWZhdWx0LWJhY2tncm91bmQtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCAkZGVmYXVsdC1jb2xvcik7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsICRkZWZhdWx0LWJvcmRlci1jb2xvcik7XG4gICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsICRkZWZhdWx0LWJhY2tncm91bmQtY29sb3IpO1xuICAgIH1cbiAgfVxuICAmW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/home/modals/templates/create-account-modal/create-account-modal.component.ts": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/home/modals/templates/create-account-modal/create-account-modal.component.ts ***!
          \**********************************************************************************************/
        /*! exports provided: CreateAccountModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountModalComponent", function () { return CreateAccountModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var CreateAccountModalComponent = /** @class */ (function () {
                function CreateAccountModalComponent(dialogRef) {
                    this.dialogRef = dialogRef;
                }
                CreateAccountModalComponent.prototype.ngOnInit = function () {
                    this.modalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                        newsletter: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
                    });
                };
                CreateAccountModalComponent.prototype.createAccount = function () {
                    this.dialogRef.close();
                };
                return CreateAccountModalComponent;
            }());
            CreateAccountModalComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            CreateAccountModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-create-account-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-account-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/modals/templates/create-account-modal/create-account-modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-account-modal.component.scss */ "./src/app/home/modals/templates/create-account-modal/create-account-modal.component.scss")).default]
                })
            ], CreateAccountModalComponent);
            /***/ 
        }),
        /***/ "./src/app/home/modals/templates/sign-in-modal/sign-in-modal.component.scss": 
        /*!**********************************************************************************!*\
          !*** ./src/app/home/modals/templates/sign-in-modal/sign-in-modal.component.scss ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n:host {\n  --modal-title-color: rgb(var(--palette-primary-rgb));\n  --text-color: rgb(var(--palette-grey-7-rgb));\n  --modal-spacing: 10px;\n  --checkbox-label-color: rgb(var(--palette-primary-rgb));\n  --facebook-btn-background: rgb(var(--palette-facebook-rgb));\n  --facebook-btn-color: rgb(var(--palette-white-rgb));\n}\n.modal-container {\n  display: flex;\n  max-width: 100%;\n  width: 850px;\n  min-height: 500px;\n  color: var(--text-color);\n}\n.modal-container .app-logo-container {\n  margin: 0px auto;\n}\n.modal-container .modal-login-form {\n  flex-basis: 100%;\n  padding: calc(var(--modal-spacing) * 4);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.modal-container .modal-login-form .modal-title {\n  text-align: center;\n  font-size: 30px;\n  margin-bottom: calc(var(--modal-spacing) * 3);\n  margin-top: var(--modal-spacing);\n  color: var(--modal-title-color);\n}\n.modal-container .modal-login-form .modal-form {\n  --default-spacing: 10px;\n  --form-label-color: rgb(var(--palette-grey-7-rgb));\n  --form-input-background: rgb(var(--palette-white-rgb));\n  --form-input-border-color: rgba(var(--palette-grey-6-rgb), 0.42);\n  --form-input-color: rgb(var(--palette-grey-9-rgb));\n  --form-input-placeholder-color: rgb(var(--palette-grey-5-rgb));\n  --form-help-color: rgb(var(--palette-grey-7-rgb));\n  --form-input-addons-background: rgba(var(--palette-secondary-rgb), 0.15);\n  --form-input-addons-color: rgb(var(--palette-secondary-rgb));\n  --form-input-success-color: rgb(var(--palette-success-rgb));\n  --form-input-success-background: rgba(var(--palette-success-rgb), 0.15);\n  --form-input-error-color: rgb(var(--palette-error-rgb));\n  --form-input-error-background: rgba(var(--palette-error-rgb), 0.15);\n  --form-disabled-input-background: rgb(var(--palette-grey-2-rgb));\n  --form-disabled-input-color: rgb(var(--palette-grey-9-rgb));\n}\n.modal-container .modal-login-form .modal-form label {\n  color: var(--form-label-color);\n  font-size: 16px;\n}\n.modal-container .modal-login-form .modal-form .form-control {\n  background-color: var(--form-input-background);\n  border: 1px solid var(--form-input-border-color);\n  color: var(--form-input-color);\n}\n.modal-container .modal-login-form .modal-form .form-control::-webkit-input-placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.modal-container .modal-login-form .modal-form .form-control::-moz-placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.modal-container .modal-login-form .modal-form .form-control::-ms-input-placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.modal-container .modal-login-form .modal-form .form-control::placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.modal-container .modal-login-form .modal-form .form-control.is-valid {\n  border: 1px solid var(--form-input-success-color);\n}\n.modal-container .modal-login-form .modal-form .form-control.is-invalid {\n  border: 1px solid var(--form-input-error-color);\n}\n.modal-container .modal-login-form .modal-form .form-control.disabled {\n  opacity: 0.8;\n  color: var(--form-disabled-input-color);\n  background-color: var(--form-disabled-input-background);\n}\n.modal-container .modal-login-form .modal-form .form-text {\n  margin-top: calc(var(--default-spacing) / 2);\n  font-size: 14px;\n}\n.modal-container .modal-login-form .modal-form .form-text.help-text {\n  color: var(--form-help-color);\n}\n.modal-container .modal-login-form .modal-form .custom-valid-feedback {\n  background-color: var(--form-input-success-background);\n  color: var(--form-input-success-color);\n  padding: calc(var(--default-spacing) / 2) var(--default-spacing);\n  border-radius: 6px;\n}\n.modal-container .modal-login-form .modal-form .custom-invalid-feedback {\n  background-color: var(--form-input-error-background);\n  color: var(--form-input-error-color);\n  padding: calc(var(--default-spacing) / 2) var(--default-spacing);\n  border-radius: 6px;\n}\n.modal-container .modal-login-form .modal-form .input-group .input-group-prepend .input-group-text, .modal-container .modal-login-form .modal-form .input-group .input-group-append .input-group-text {\n  background-color: var(--form-input-addons-background);\n  color: var(--form-input-addons-color);\n  border: 1px solid var(--form-input-border-color);\n}\n.modal-container .modal-login-form .modal-form .custom-control.custom-checkbox {\n  --default-spacing: 10px;\n  --checkbox-border-color: rgb(var(--palette-primary-rgb));\n  --checkbox-background: rgb(var(--palette-primary-rgb));\n  --checkbox-color: rgb(var(--palette-white-rgb));\n}\n.modal-container .modal-login-form .modal-form .custom-control.custom-checkbox .custom-control-label .custom-label {\n  margin-left: calc(var(--default-spacing) / 2);\n}\n.modal-container .modal-login-form .modal-form .custom-control.custom-checkbox .custom-control-label::before {\n  width: 22px;\n  height: 22px;\n  border-radius: 6px;\n  top: 0px;\n}\n.modal-container .modal-login-form .modal-form .custom-control.custom-checkbox .custom-control-label::after {\n  width: 22px;\n  height: 22px;\n  top: 0px;\n}\n.modal-container .modal-login-form .modal-form .custom-control.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  color: var(--checkbox-color);\n  border-color: var(--checkbox-border-color);\n  background-color: var(--checkbox-background);\n}\n.modal-container .modal-login-form .modal-form .custom-control.custom-checkbox .custom-label {\n  color: var(--checkbox-label-color);\n}\n.modal-container .modal-login-form .modal-form .existing-account-section {\n  margin-top: var(--modal-spacing);\n}\n.modal-container .modal-login-form .modal-form .existing-account-section .btn-link {\n  color: var(--text-color);\n  text-decoration: none;\n  padding: 0px;\n}\n.modal-container .modal-login-form .modal-form .buttons-row {\n  display: flex;\n  justify-content: space-between;\n  margin: calc(var(--modal-spacing) * 2) 0px calc(var(--modal-spacing) * 1.5);\n}\n.modal-container .modal-login-form .modal-form .buttons-row .sign-in-btn {\n  width: 100%;\n  margin-right: calc(var(--modal-spacing) / 2);\n  background-color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-white-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n}\n.modal-container .modal-login-form .modal-form .buttons-row .sign-in-btn:hover:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.modal-container .modal-login-form .modal-form .buttons-row .sign-in-btn:active:not([disabled]), .modal-container .modal-login-form .modal-form .buttons-row .sign-in-btn.active:not([disabled]), .modal-container .modal-login-form .modal-form .buttons-row .sign-in-btn:focus:not([disabled]), .modal-container .modal-login-form .modal-form .buttons-row .sign-in-btn.focus:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.modal-container .modal-login-form .modal-form .buttons-row .sign-in-btn[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.modal-container .modal-login-form .modal-form .buttons-row .register-btn {\n  width: 100%;\n  margin-left: calc(var(--modal-spacing) / 2);\n  background-color: var(--button-background-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-primary-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n}\n.modal-container .modal-login-form .modal-form .buttons-row .register-btn:hover:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-white-rgb)));\n}\n.modal-container .modal-login-form .modal-form .buttons-row .register-btn:active:not([disabled]), .modal-container .modal-login-form .modal-form .buttons-row .register-btn.active:not([disabled]), .modal-container .modal-login-form .modal-form .buttons-row .register-btn:focus:not([disabled]), .modal-container .modal-login-form .modal-form .buttons-row .register-btn.focus:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-white-rgb)));\n}\n.modal-container .modal-login-form .modal-form .buttons-row .register-btn[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.modal-container .modal-login-form .register-divider {\n  align-items: center;\n  color: var(--text-color);\n  display: flex;\n}\n.modal-container .modal-login-form .register-divider .line {\n  flex-grow: 1;\n}\n.modal-container .modal-login-form .register-divider span {\n  margin: 0 calc(var(--modal-spacing) * 1.5);\n}\n.modal-container .modal-login-form .fb-signin {\n  margin: 0px auto;\n  margin-top: var(--modal-spacing);\n  display: flex;\n  --button-background-color: var(--facebook-btn-background);\n  --button-border-color: var(--facebook-btn-background);\n  --button-color: var(--facebook-btn-color);\n  background-color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-white-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n  padding-left: calc(var(--modal-spacing) * 3);\n  padding-right: calc(var(--modal-spacing) * 3);\n}\n.modal-container .modal-login-form .fb-signin:hover:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.modal-container .modal-login-form .fb-signin:active:not([disabled]), .modal-container .modal-login-form .fb-signin.active:not([disabled]), .modal-container .modal-login-form .fb-signin:focus:not([disabled]), .modal-container .modal-login-form .fb-signin.focus:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border-color, rgb(var(--palette-primary-rgb)));\n  color: var(--button-background-color, rgb(var(--palette-primary-rgb)));\n}\n.modal-container .modal-login-form .fb-signin[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.modal-container .side-image {\n  flex-basis: 100%;\n  position: relative;\n}\n.modal-container .side-image .background-image {\n  background-image: url(\"/assets/imgs/login-modal-image.jpg\");\n  background-position: center;\n  background-size: cover;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n::ng-deep .sign-in-modal .mat-dialog-container {\n  border-radius: 6px;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bndpc2UvYmVjY2Evc3JjL3RoZW1lL3BhbGV0dGVzL3NoYXJlZC5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvdGhlbWUvcGFsZXR0ZXMvbW9kZS5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9iZWNjYS9zcmMvYXBwL2hvbWUvbW9kYWxzL3RlbXBsYXRlcy9zaWduLWluLW1vZGFsL3NpZ24taW4tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvbW9kYWxzL3RlbXBsYXRlcy9zaWduLWluLW1vZGFsL3NpZ24taW4tbW9kYWwuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2hhd253aXNlL2JlY2NhL3NyYy90aGVtZS9taXhpbnMvaW5wdXRzL2Zvcm0tZ3JvdXAuc2NzcyIsIi9Vc2Vycy9zaGF3bndpc2UvYmVjY2Evc3JjL3RoZW1lL3RoaXJkLXBhcnR5L292ZXJyaWRlLWJvb3RzdHJhcC12YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9zaGF3bndpc2UvYmVjY2Evc3JjL3RoZW1lL21peGlucy9pbnB1dHMvY2hlY2tib3guc2NzcyIsIi9Vc2Vycy9zaGF3bndpc2UvYmVjY2Evc3JjL3RoZW1lL21peGlucy9idXR0b25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FDSkE7RUFFRSxvREFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSx1REFBQTtFQUNBLDJEQUFBO0VBQ0EsbURBQUE7QUMyQ0Y7QUR4Q0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FDMkNGO0FEekNFO0VBQ0UsZ0JBQUE7QUMyQ0o7QUR4Q0U7RUFDRSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUMwQ0o7QUR4Q0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUMwQ047QUR2Q0k7RUVyQ0YsdUJBQUE7RUFDQSxrREFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0VBQUE7RUFDQSxrREFBQTtFQUNBLDhEQUFBO0VBQ0EsaURBQUE7RUFDQSx3RUFBQTtFQUNBLDREQUFBO0VBQ0EsMkRBQUE7RUFDQSx1RUFBQTtFQUNBLHVEQUFBO0VBQ0EsbUVBQUE7RUFDQSxnRUFBQTtFQUNBLDJEQUFBO0FEK0VGO0FDN0VFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FEK0VKO0FDNUVFO0VBQ0UsOENBQUE7RUFDQSxnREFBQTtFQUNBLDhCQUFBO0FEOEVKO0FDNUVJO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0FEOEVOO0FDaEZJO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0FEOEVOO0FDaEZJO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0FEOEVOO0FDaEZJO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0FEOEVOO0FDM0VJO0VBQ0UsaURBQUE7QUQ2RU47QUMxRUk7RUFDRSwrQ0FBQTtBRDRFTjtBQ3pFSTtFQUNFLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLHVEQUFBO0FEMkVOO0FDdkVFO0VBQ0UsNENBQUE7RUFDQSxlQUFBO0FEeUVKO0FDdkVJO0VBQ0UsNkJBQUE7QUR5RU47QUNyRUU7RUFDRSxzREFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0VBQUE7RUFDQSxrQkFBQTtBRHVFSjtBQ3BFRTtFQUNFLG9EQUFBO0VBQ0Esb0NBQUE7RUFDQSxnRUFBQTtFQUNBLGtCQzVEa0I7QUZrSXRCO0FDakVNO0VBQ0UscURBQUE7RUFDQSxxQ0FBQTtFQUNBLGdEQUFBO0FEbUVSO0FEckdNO0VJeENKLHVCQUFBO0VBQ0Esd0RBQUE7RUFDQSxzREFBQTtFQUNBLCtDQUFBO0FIZ0pGO0FHN0lJO0VBQ0UsNkNBQUE7QUgrSU47QUc1SUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBSDhJTjtBRzVJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBSDhJTjtBRzFJRTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSw0Q0FBQTtBSDRJSjtBRDVIUTtFQUNFLGtDQUFBO0FDOEhWO0FEMUhNO0VBQ0UsZ0NBQUE7QUM0SFI7QUQzSFE7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQzZIVjtBRHpITTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDJFQUFBO0FDMkhSO0FEekhRO0VBQ0UsV0FBQTtFQUNBLDRDQUFBO0VLcERSLGlGQUFBO0VBQ0EseUVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5REFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnRUFBQTtBSmdMRjtBSTdLSTtFQUNFLG9FQUFBO0VBQ0EseUVBQUE7RUFDQSxzRUFBQTtBSitLTjtBSXZLSTtFQUNFLG9FQUFBO0VBQ0EseUVBQUE7RUFDQSxzRUFBQTtBSnlLTjtBSXJLRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBSnVLSjtBRGhKUTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFS1hSLCtFQUFBO0VBQ0EseUVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnRUFBQTtBSjhKRjtBSTNKSTtFQUNFLHNFQUFBO0VBQ0EseUVBQUE7RUFDQSxvRUFBQTtBSjZKTjtBSXJKSTtFQUNFLHNFQUFBO0VBQ0EseUVBQUE7RUFDQSxvRUFBQTtBSnVKTjtBSXBKRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBSnNKSjtBRHJLSTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FDdUtOO0FEcktNO0VBQ0UsWUFBQTtBQ3VLUjtBRHBLTTtFQUNFLDBDQUFBO0FDc0tSO0FEbEtJO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFFQSx5REFBQTtFQUNBLHFEQUFBO0VBQ0EseUNBQUE7RUtyRkosaUZBQUE7RUFDQSx5RUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdFQUFBO0VMNkVJLDRDQUFBO0VBQ0EsNkNBQUE7QUM2S047QUl4UEk7RUFDRSxvRUFBQTtFQUNBLHlFQUFBO0VBQ0Esc0VBQUE7QUowUE47QUlsUEk7RUFDRSxvRUFBQTtFQUNBLHlFQUFBO0VBQ0Esc0VBQUE7QUpvUE47QUloUEU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUprUEo7QUR2TEU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDeUxKO0FEdkxJO0VBQ0UsMkRBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FDeUxOO0FEbExJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDcUxOIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9tb2RhbHMvdGVtcGxhdGVzL3NpZ24taW4tbW9kYWwvc2lnbi1pbi1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFNoYXJlZFxuKi9cblxuQGltcG9ydCAncHJlZmVyZW5jZXMnO1xuQGltcG9ydCAnaW50ZXJmYWNlJztcbkBpbXBvcnQgJ21vZGUnO1xuXG4vLyBBbiBhYnN0cmFjdCB3YXkgdG8gcHJvdmlkZSBjb2xvcnMuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGFuIGludGVyZmFjZSB0byBib3RoIFNhc3MgdmFyaWFibGVzIGFuZCBDU1MgNCB2YXJpYWJsZXMgYmFzZWQgY29sb3IgcGFsZXR0ZXMuXG5AZnVuY3Rpb24gcGFsZXR0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGFscGhhOiAxKSB7XG4gIC8vICRjb2xvci1wYWxldHRlLW1vZGUgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY2hvb3Nlbi1wYWxldHRlICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlICAgPT4gIERlZmluZWQgaW4gaW50ZXJmYWNlLnNjc3NcbiAgLy8gJGNzczQtdmFyLXByZWZpeCAgICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuICAvLyAkY3NzNC1jb2xvci1mb3JtYXQgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG5cbiAgQGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdjc3MtNCcpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjb2xvci1wYWxldHRlLWludGVyZmFjZTtcblxuICAgICRjb2xvci12YXJpYWJsZS1pbmRleDogaW5kZXgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlLWluZGV4KSA9PSAnbnVtYmVyJykge1xuICAgICAgJGNvbG9yLXZhcmlhYmxlLW5hbWU6IG50aCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci12YXJpYWJsZS1pbmRleCk7XG5cbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYmEodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKycpLCAjeyRhbHBoYX0pJ307XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYih2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArICcpKSd9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci1uYW1lfSkgd2FzIG5vdCBmb3VuZCBvbiBDb2xvciBQYWxldHRlIGRlZmluaXRpb24uIE1ha2Ugc3VyZSBpdCdzIGRlZmluZWQgaW4gdGhlIHRoZW1lL3BhbGV0dGVzL2ludGVyZmFjZS5zY3NzIGZpbGVcIjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ3Nhc3MnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY2hvb3Nlbi1wYWxldHRlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlOiBtYXAtZ2V0KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBTYXNzIGNvbG9yXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZSkgPT0gJ2NvbG9yJykge1xuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gcmdiYSgkY29sb3ItdmFyaWFibGUsICRhbHBoYSk7XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICRjb2xvci12YXJpYWJsZTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItdmFyaWFibGV9KSBpcyBub3QgYSBTYXNzIGNvbG9yXCI7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ05vIENvbG9yIFBhbGV0dGUgbW9kZSBzZWxlY3RlZCBpbiB0aGVtZS9wYWxldHRlcy9wcmVmZXJlbmNlcy5zY3NzJztcbiAgfVxufVxuIiwiLypcbiAgQ1NTIDQgTW9kZVxuKi9cbiRjb2xvci1wYWxldHRlLW1vZGU6ICdjc3MtNCc7XG5cblxuLypcbiAgU2FzcyBNb2RlXG4qL1xuLy8gQGltcG9ydCAnY29yZSc7XG4vL1xuLy8gJGNvbG9yLXBhbGV0dGUtbW9kZTogJ3Nhc3MnO1xuLy9cbi8vIC8vIEltcG9ydCB0aGUgZGVmaW5pdGlvbnMgb2YgdGhlIHBhbGV0dGUgeW91IHdhbnQgdG8gdXNlXG4vLyBAaW1wb3J0ICdwYWxldHRlLTEvZGVmaW5pdGlvbnMnO1xuLy8gLy8gQGltcG9ydCAncGFsZXR0ZS0yL2RlZmluaXRpb25zJztcbi8vXG4vLyAvLyBBc3NpZ24gYSBwYXJ0aWN1bGFyIENvbG9yIFBhbGV0dGUgdG8gdGhlICdjaG9vc2VuLXBhbGV0dGUnIHBvaW50ZXIuXG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlIHdpbGwgYmUgYSBTYXNzIG1hcCBwb2ludGluZyB0byBhbm90aGVyIGNvbG9yIHBhbGV0dGUgU2FzcyBtYXBcbi8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMSk7XG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTIpO1xuIiwiQGltcG9ydCAnc2hhcmVkJztcblxuOmhvc3Qge1xuICAvLyBEZWZhdWx0IHZhcmlhYmxlc1xuICAtLW1vZGFsLXRpdGxlLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07XG4gIC0tdGV4dC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTcnKX07XG4gIC0tbW9kYWwtc3BhY2luZzogMTBweDtcbiAgLS1jaGVja2JveC1sYWJlbC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9O1xuICAtLWZhY2Vib29rLWJ0bi1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ2ZhY2Vib29rJyl9O1xuICAtLWZhY2Vib29rLWJ0bi1jb2xvcjogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDg1MHB4O1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuXG4gIC5hcHAtbG9nby1jb250YWluZXIge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cblxuICAubW9kYWwtbG9naW4tZm9ybSB7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLW1vZGFsLXNwYWNpbmcpICogNCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC5tb2RhbC10aXRsZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLW1vZGFsLXNwYWNpbmcpICogMyk7XG4gICAgICBtYXJnaW4tdG9wOiB2YXIoLS1tb2RhbC1zcGFjaW5nKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1tb2RhbC10aXRsZS1jb2xvcik7XG4gICAgfVxuXG4gICAgLm1vZGFsLWZvcm0ge1xuICAgICAgQGluY2x1ZGUgZm9ybS1ncm91cC1zdHlsZXMoKTtcblxuICAgICAgLmN1c3RvbS1jb250cm9sLmN1c3RvbS1jaGVja2JveCB7XG4gICAgICAgIEBpbmNsdWRlIGJvb3RzdHJhcC1jaGVja2JveC1zdHlsZXMoKTtcbiAgICAgICAgLmN1c3RvbS1sYWJlbCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWNoZWNrYm94LWxhYmVsLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZXhpc3RpbmctYWNjb3VudC1zZWN0aW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tbW9kYWwtc3BhY2luZyk7XG4gICAgICAgIC5idG4tbGluayB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJ1dHRvbnMtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tbW9kYWwtc3BhY2luZykgKiAyKSAwcHggY2FsYyh2YXIoLS1tb2RhbC1zcGFjaW5nKSAqIDEuNSk7XG5cbiAgICAgICAgLnNpZ24taW4tYnRuIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tbW9kYWwtc3BhY2luZykgLyAyKTtcbiAgICAgICAgICBAaW5jbHVkZSBidXR0b24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWdpc3Rlci1idG4ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLW1vZGFsLXNwYWNpbmcpIC8gMik7XG4gICAgICAgICAgQGluY2x1ZGUgYnV0dG9uLW91dGxpbmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5yZWdpc3Rlci1kaXZpZGVyIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAubGluZSB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbjogMCBjYWxjKHZhcigtLW1vZGFsLXNwYWNpbmcpICogMS41KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZmItc2lnbmluIHtcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICBtYXJnaW4tdG9wOiB2YXIoLS1tb2RhbC1zcGFjaW5nKTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWZhY2Vib29rLWJ0bi1iYWNrZ3JvdW5kKTtcbiAgICAgIC0tYnV0dG9uLWJvcmRlci1jb2xvcjogdmFyKC0tZmFjZWJvb2stYnRuLWJhY2tncm91bmQpO1xuICAgICAgLS1idXR0b24tY29sb3I6IHZhcigtLWZhY2Vib29rLWJ0bi1jb2xvcik7XG4gICAgICBAaW5jbHVkZSBidXR0b24oKTtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1tb2RhbC1zcGFjaW5nKSAqIDMpO1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1tb2RhbC1zcGFjaW5nKSAqIDMpO1xuICAgIH1cbiAgfVxuXG4gIC5zaWRlLWltYWdlIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWdzL2xvZ2luLW1vZGFsLWltYWdlLmpwZycpO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRvcDogMDtcbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgLnNpZ24taW4tbW9kYWwge1xuICAgIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICB9XG59XG4iLCIvKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8qXG4gIFNoYXJlZFxuKi9cbi8qXG4gIENTUyA0IE1vZGVcbiovXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbjpob3N0IHtcbiAgLS1tb2RhbC10aXRsZS1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKTtcbiAgLS10ZXh0LWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1ncmV5LTctcmdiKSk7XG4gIC0tbW9kYWwtc3BhY2luZzogMTBweDtcbiAgLS1jaGVja2JveC1sYWJlbC1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKTtcbiAgLS1mYWNlYm9vay1idG4tYmFja2dyb3VuZDogcmdiKHZhcigtLXBhbGV0dGUtZmFjZWJvb2stcmdiKSk7XG4gIC0tZmFjZWJvb2stYnRuLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS13aGl0ZS1yZ2IpKTtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDg1MHB4O1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAuYXBwLWxvZ28tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWxvZ2luLWZvcm0ge1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLW1vZGFsLXNwYWNpbmcpICogNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWxvZ2luLWZvcm0gLm1vZGFsLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tbW9kYWwtc3BhY2luZykgKiAzKTtcbiAgbWFyZ2luLXRvcDogdmFyKC0tbW9kYWwtc3BhY2luZyk7XG4gIGNvbG9yOiB2YXIoLS1tb2RhbC10aXRsZS1jb2xvcik7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1sb2dpbi1mb3JtIC5tb2RhbC1mb3JtIHtcbiAgLS1kZWZhdWx0LXNwYWNpbmc6IDEwcHg7XG4gIC0tZm9ybS1sYWJlbC1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtZ3JleS03LXJnYikpO1xuICAtLWZvcm0taW5wdXQtYmFja2dyb3VuZDogcmdiKHZhcigtLXBhbGV0dGUtd2hpdGUtcmdiKSk7XG4gIC0tZm9ybS1pbnB1dC1ib3JkZXItY29sb3I6IHJnYmEodmFyKC0tcGFsZXR0ZS1ncmV5LTYtcmdiKSwgMC40Mik7XG4gIC0tZm9ybS1pbnB1dC1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtZ3JleS05LXJnYikpO1xuICAtLWZvcm0taW5wdXQtcGxhY2Vob2xkZXItY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLWdyZXktNS1yZ2IpKTtcbiAgLS1mb3JtLWhlbHAtY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLWdyZXktNy1yZ2IpKTtcbiAgLS1mb3JtLWlucHV0LWFkZG9ucy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXBhbGV0dGUtc2Vjb25kYXJ5LXJnYiksIDAuMTUpO1xuICAtLWZvcm0taW5wdXQtYWRkb25zLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1zZWNvbmRhcnktcmdiKSk7XG4gIC0tZm9ybS1pbnB1dC1zdWNjZXNzLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1zdWNjZXNzLXJnYikpO1xuICAtLWZvcm0taW5wdXQtc3VjY2Vzcy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXBhbGV0dGUtc3VjY2Vzcy1yZ2IpLCAwLjE1KTtcbiAgLS1mb3JtLWlucHV0LWVycm9yLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1lcnJvci1yZ2IpKTtcbiAgLS1mb3JtLWlucHV0LWVycm9yLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tcGFsZXR0ZS1lcnJvci1yZ2IpLCAwLjE1KTtcbiAgLS1mb3JtLWRpc2FibGVkLWlucHV0LWJhY2tncm91bmQ6IHJnYih2YXIoLS1wYWxldHRlLWdyZXktMi1yZ2IpKTtcbiAgLS1mb3JtLWRpc2FibGVkLWlucHV0LWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1ncmV5LTktcmdiKSk7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1sb2dpbi1mb3JtIC5tb2RhbC1mb3JtIGxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWZvcm0tbGFiZWwtY29sb3IpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1sb2dpbi1mb3JtIC5tb2RhbC1mb3JtIC5mb3JtLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWJhY2tncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JtLWlucHV0LWJvcmRlci1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWNvbG9yKTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWxvZ2luLWZvcm0gLm1vZGFsLWZvcm0gLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yKTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWxvZ2luLWZvcm0gLm1vZGFsLWZvcm0gLmZvcm0tY29udHJvbC5pcy12YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvcm0taW5wdXQtc3VjY2Vzcy1jb2xvcik7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1sb2dpbi1mb3JtIC5tb2RhbC1mb3JtIC5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvcm0taW5wdXQtZXJyb3ItY29sb3IpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtbG9naW4tZm9ybSAubW9kYWwtZm9ybSAuZm9ybS1jb250cm9sLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC44O1xuICBjb2xvcjogdmFyKC0tZm9ybS1kaXNhYmxlZC1pbnB1dC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tZGlzYWJsZWQtaW5wdXQtYmFja2dyb3VuZCk7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1sb2dpbi1mb3JtIC5tb2RhbC1mb3JtIC5mb3JtLXRleHQge1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLWRlZmF1bHQtc3BhY2luZykgLyAyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtbG9naW4tZm9ybSAubW9kYWwtZm9ybSAuZm9ybS10ZXh0LmhlbHAtdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1mb3JtLWhlbHAtY29sb3IpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtbG9naW4tZm9ybSAubW9kYWwtZm9ybSAuY3VzdG9tLXZhbGlkLWZlZWRiYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1zdWNjZXNzLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1zdWNjZXNzLWNvbG9yKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1kZWZhdWx0LXNwYWNpbmcpIC8gMikgdmFyKC0tZGVmYXVsdC1zcGFjaW5nKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtbG9naW4tZm9ybSAubW9kYWwtZm9ybSAuY3VzdG9tLWludmFsaWQtZmVlZGJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWVycm9yLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1lcnJvci1jb2xvcik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tZGVmYXVsdC1zcGFjaW5nKSAvIDIpIHZhcigtLWRlZmF1bHQtc3BhY2luZyk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWxvZ2luLWZvcm0gLm1vZGFsLWZvcm0gLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1wcmVwZW5kIC5pbnB1dC1ncm91cC10ZXh0LCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1sb2dpbi1mb3JtIC5tb2RhbC1mb3JtIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYXBwZW5kIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1hZGRvbnMtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWFkZG9ucy1jb2xvcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvcm0taW5wdXQtYm9yZGVyLWNvbG9yKTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWxvZ2luLWZvcm0gLm1vZGFsLWZvcm0gLmN1c3RvbS1jb250cm9sLmN1c3RvbS1jaGVja2JveCB7XG4gIC0tZGVmYXVsdC1zcGFjaW5nOiAxMHB4O1xuICAtLWNoZWNrYm94LWJvcmRlci1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKTtcbiAgLS1jaGVja2JveC1iYWNrZ3JvdW5kOiByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpO1xuICAtLWNoZWNrYm94LWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS13aGl0ZS1yZ2IpKTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWxvZ2luLWZvcm0gLm1vZGFsLWZvcm0gLmN1c3RvbS1jb250cm9sLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWwgLmN1c3RvbS1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLWRlZmF1bHQtc3BhY2luZykgLyAyKTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWxvZ2luLWZvcm0gLm1vZGFsLWZvcm0gLmN1c3RvbS1jb250cm9sLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdG9wOiAwcHg7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1sb2dpbi1mb3JtIC5tb2RhbC1mb3JtIC5jdXN0b20tY29udHJvbC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIHRvcDogMHB4O1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtbG9naW4tZm9ybSAubW9kYWwtZm9ybSAuY3VzdG9tLWNvbnRyb2wuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBjb2xvcjogdmFyKC0tY2hlY2tib3gtY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNoZWNrYm94LWJvcmRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrYm94LWJhY2tncm91bmQpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtbG9naW4tZm9ybSAubW9kYWwtZm9ybSAuY3VzdG9tLWNvbnRyb2wuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tbGFiZWwge1xuICBjb2xvcjogdmFyKC0tY2hlY2tib3gtbGFiZWwtY29sb3IpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtbG9naW4tZm9ybSAubW9kYWwtZm9ybSAuZXhpc3RpbmctYWNjb3VudC1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tbW9kYWwtc3BhY2luZyk7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1sb2dpbi1mb3JtIC5tb2RhbC1mb3JtIC5leGlzdGluZy1hY2NvdW50LXNlY3Rpb24gLmJ0bi1saW5rIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWxvZ2luLWZvcm0gLm1vZGFsLWZvcm0gLmJ1dHRvbnMtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IGNhbGModmFyKC0tbW9kYWwtc3BhY2luZykgKiAyKSAwcHggY2FsYyh2YXIoLS1tb2RhbC1zcGFjaW5nKSAqIDEuNSk7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1sb2dpbi1mb3JtIC5tb2RhbC1mb3JtIC5idXR0b25zLXJvdyAuc2lnbi1pbi1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLW1vZGFsLXNwYWNpbmcpIC8gMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtd2hpdGUtcmdiKSkpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC41cywgY29sb3IgMC41cywgYmFja2dyb3VuZC1jb2xvciAwLjVzO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtbG9naW4tZm9ybSAubW9kYWwtZm9ybSAuYnV0dG9ucy1yb3cgLnNpZ24taW4tYnRuOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtd2hpdGUtcmdiKSkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtbG9naW4tZm9ybSAubW9kYWwtZm9ybSAuYnV0dG9ucy1yb3cgLnNpZ24taW4tYnRuOmFjdGl2ZTpub3QoW2Rpc2FibGVkXSksIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWxvZ2luLWZvcm0gLm1vZGFsLWZvcm0gLmJ1dHRvbnMtcm93IC5zaWduLWluLWJ0bi5hY3RpdmU6bm90KFtkaXNhYmxlZF0pLCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1sb2dpbi1mb3JtIC5tb2RhbC1mb3JtIC5idXR0b25zLXJvdyAuc2lnbi1pbi1idG46Zm9jdXM6bm90KFtkaXNhYmxlZF0pLCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1sb2dpbi1mb3JtIC5tb2RhbC1mb3JtIC5idXR0b25zLXJvdyAuc2lnbi1pbi1idG4uZm9jdXM6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS13aGl0ZS1yZ2IpKSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1sb2dpbi1mb3JtIC5tb2RhbC1mb3JtIC5idXR0b25zLXJvdyAuc2lnbi1pbi1idG5bZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgb3BhY2l0eTogMC41O1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtbG9naW4tZm9ybSAubW9kYWwtZm9ybSAuYnV0dG9ucy1yb3cgLnJlZ2lzdGVyLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1tb2RhbC1zcGFjaW5nKSAvIDIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtd2hpdGUtcmdiKSkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNXMsIGNvbG9yIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC41cztcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWxvZ2luLWZvcm0gLm1vZGFsLWZvcm0gLmJ1dHRvbnMtcm93IC5yZWdpc3Rlci1idG46aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS13aGl0ZS1yZ2IpKSk7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1sb2dpbi1mb3JtIC5tb2RhbC1mb3JtIC5idXR0b25zLXJvdyAucmVnaXN0ZXItYnRuOmFjdGl2ZTpub3QoW2Rpc2FibGVkXSksIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWxvZ2luLWZvcm0gLm1vZGFsLWZvcm0gLmJ1dHRvbnMtcm93IC5yZWdpc3Rlci1idG4uYWN0aXZlOm5vdChbZGlzYWJsZWRdKSwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtbG9naW4tZm9ybSAubW9kYWwtZm9ybSAuYnV0dG9ucy1yb3cgLnJlZ2lzdGVyLWJ0bjpmb2N1czpub3QoW2Rpc2FibGVkXSksIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWxvZ2luLWZvcm0gLm1vZGFsLWZvcm0gLmJ1dHRvbnMtcm93IC5yZWdpc3Rlci1idG4uZm9jdXM6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS13aGl0ZS1yZ2IpKSk7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1sb2dpbi1mb3JtIC5tb2RhbC1mb3JtIC5idXR0b25zLXJvdyAucmVnaXN0ZXItYnRuW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWxvZ2luLWZvcm0gLnJlZ2lzdGVyLWRpdmlkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1sb2dpbi1mb3JtIC5yZWdpc3Rlci1kaXZpZGVyIC5saW5lIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtbG9naW4tZm9ybSAucmVnaXN0ZXItZGl2aWRlciBzcGFuIHtcbiAgbWFyZ2luOiAwIGNhbGModmFyKC0tbW9kYWwtc3BhY2luZykgKiAxLjUpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtbG9naW4tZm9ybSAuZmItc2lnbmluIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgbWFyZ2luLXRvcDogdmFyKC0tbW9kYWwtc3BhY2luZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWZhY2Vib29rLWJ0bi1iYWNrZ3JvdW5kKTtcbiAgLS1idXR0b24tYm9yZGVyLWNvbG9yOiB2YXIoLS1mYWNlYm9vay1idG4tYmFja2dyb3VuZCk7XG4gIC0tYnV0dG9uLWNvbG9yOiB2YXIoLS1mYWNlYm9vay1idG4tY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtcHJpbWFyeS1yZ2IpKSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNXMsIGNvbG9yIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLW1vZGFsLXNwYWNpbmcpICogMyk7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tbW9kYWwtc3BhY2luZykgKiAzKTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWxvZ2luLWZvcm0gLmZiLXNpZ25pbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpKTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWxvZ2luLWZvcm0gLmZiLXNpZ25pbjphY3RpdmU6bm90KFtkaXNhYmxlZF0pLCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1sb2dpbi1mb3JtIC5mYi1zaWduaW4uYWN0aXZlOm5vdChbZGlzYWJsZWRdKSwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtbG9naW4tZm9ybSAuZmItc2lnbmluOmZvY3VzOm5vdChbZGlzYWJsZWRdKSwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtbG9naW4tZm9ybSAuZmItc2lnbmluLmZvY3VzOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgcmdiKHZhcigtLXBhbGV0dGUtd2hpdGUtcmdiKSkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsIHJnYih2YXIoLS1wYWxldHRlLXByaW1hcnktcmdiKSkpO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtbG9naW4tZm9ybSAuZmItc2lnbmluW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5tb2RhbC1jb250YWluZXIgLnNpZGUtaW1hZ2Uge1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubW9kYWwtY29udGFpbmVyIC5zaWRlLWltYWdlIC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWdzL2xvZ2luLW1vZGFsLWltYWdlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuOjpuZy1kZWVwIC5zaWduLWluLW1vZGFsIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMHB4O1xufSIsIkBtaXhpbiBmb3JtLWdyb3VwLXN0eWxlcygpIHtcbiAgLS1kZWZhdWx0LXNwYWNpbmc6IDEwcHg7XG4gIC0tZm9ybS1sYWJlbC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTcnKX07XG4gIC0tZm9ybS1pbnB1dC1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ3doaXRlJyl9O1xuICAtLWZvcm0taW5wdXQtYm9yZGVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktNicsIDAuNDIpfTtcbiAgLS1mb3JtLWlucHV0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktOScpfTtcbiAgLS1mb3JtLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktNScpfTtcbiAgLS1mb3JtLWhlbHAtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS03Jyl9O1xuICAtLWZvcm0taW5wdXQtYWRkb25zLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcignc2Vjb25kYXJ5JywgMC4xNSl9O1xuICAtLWZvcm0taW5wdXQtYWRkb25zLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3NlY29uZGFyeScpfTtcbiAgLS1mb3JtLWlucHV0LXN1Y2Nlc3MtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignc3VjY2VzcycpfTtcbiAgLS1mb3JtLWlucHV0LXN1Y2Nlc3MtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdzdWNjZXNzJywgMC4xNSl9O1xuICAtLWZvcm0taW5wdXQtZXJyb3ItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZXJyb3InKX07XG4gIC0tZm9ybS1pbnB1dC1lcnJvci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ2Vycm9yJywgMC4xNSl9O1xuICAtLWZvcm0tZGlzYWJsZWQtaW5wdXQtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdncmV5LTInKX07XG4gIC0tZm9ybS1kaXNhYmxlZC1pbnB1dC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTknKX07XG5cbiAgbGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1mb3JtLWxhYmVsLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWJhY2tncm91bmQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvcm0taW5wdXQtYm9yZGVyLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1jb2xvcik7XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcik7XG4gICAgfVxuXG4gICAgJi5pcy12YWxpZCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JtLWlucHV0LXN1Y2Nlc3MtY29sb3IpO1xuICAgIH1cblxuICAgICYuaXMtaW52YWxpZCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JtLWlucHV0LWVycm9yLWNvbG9yKTtcbiAgICB9XG5cbiAgICAmLmRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIGNvbG9yOiB2YXIoLS1mb3JtLWRpc2FibGVkLWlucHV0LWNvbG9yKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tZGlzYWJsZWQtaW5wdXQtYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1kZWZhdWx0LXNwYWNpbmcpIC8gMik7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgJi5oZWxwLXRleHQge1xuICAgICAgY29sb3I6IHZhcigtLWZvcm0taGVscC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgLmN1c3RvbS12YWxpZC1mZWVkYmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1zdWNjZXNzLWJhY2tncm91bmQpO1xuICAgIGNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LXN1Y2Nlc3MtY29sb3IpO1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tZGVmYXVsdC1zcGFjaW5nKSAvIDIpIHZhcigtLWRlZmF1bHQtc3BhY2luZyk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG5cbiAgLmN1c3RvbS1pbnZhbGlkLWZlZWRiYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWVycm9yLWJhY2tncm91bmQpO1xuICAgIGNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWVycm9yLWNvbG9yKTtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWRlZmF1bHQtc3BhY2luZykgLyAyKSB2YXIoLS1kZWZhdWx0LXNwYWNpbmcpO1xuICAgIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzO1xuICB9XG5cbiAgLmlucHV0LWdyb3VwIHtcbiAgICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCwgLmlucHV0LWdyb3VwLWFwcGVuZCB7XG4gICAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0taW5wdXQtYWRkb25zLWJhY2tncm91bmQpO1xuICAgICAgICBjb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1hZGRvbnMtY29sb3IpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JtLWlucHV0LWJvcmRlci1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBPdmVycmlkZSBCb290c3RyYXAgVmFyaWFibGVzXG4kaWNvbi1mb250LXBhdGg6ICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2ZvbnRzL2Jvb3RzdHJhcC8nO1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdOdW5pdG8nLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xuXG4vLyBIZXJlIHlvdSBjYW4gcmVkZWZpbmUgZ2xvYmFsIHN0eWxlcyBmcm9tIEJvb3RzdHJhcFxuXG4vLyByZWRlZmluZSBpbnB1dHMgYm9yZGVyIHJhZGl1c1xuJGlucHV0LWJvcmRlci1yYWRpdXM6IDZweDtcblxuLy8geW91IGNhbiByZWRlZmluZSB0aGVzZSBjb2xvcnMgd2l0aCB5b3VyIGNob29zZW4gcGFsZXR0ZSBjb2xvcnNcbi8vICRwcmltYXJ5OiAjeW91cmNvbG9yO1xuLy8gJHNlY29uZGFyeTogI3lvdXJjb2xvcjtcbi8vICR0ZXJ0aWFyeTogI3lvdXJjb2xvcjtcblxuLy8gZm9yIHBhbGV0dGUgMTpcbiRwcmltYXJ5OiAjM2I4NmZmO1xuJHNlY29uZGFyeTogIzM4RDk5NztcbiR0ZXJ0aWFyeTogI2ZmYzIwMDtcblxuLy8gZm9yIHBhbGV0dGUgMjpcbi8vICRwcmltYXJ5OiAjOWUzNGRmO1xuLy8gJHNlY29uZGFyeTogIzhCRUREMztcbi8vICR0ZXJ0aWFyeTogI0ZGQUY4NDtcbiIsIkBtaXhpbiBib290c3RyYXAtY2hlY2tib3gtc3R5bGVzKCkge1xuICAtLWRlZmF1bHQtc3BhY2luZzogMTBweDtcbiAgLS1jaGVja2JveC1ib3JkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTtcbiAgLS1jaGVja2JveC1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07XG4gIC0tY2hlY2tib3gtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignd2hpdGUnKX07XG5cbiAgLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgICAuY3VzdG9tLWxhYmVsIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLWRlZmF1bHQtc3BhY2luZykgLyAyKTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgd2lkdGg6IDIycHg7XG4gICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICB0b3A6IDBweDtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDIycHg7XG4gICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICB0b3A6IDBweDtcbiAgICB9XG4gIH1cblxuICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICBjb2xvcjogdmFyKC0tY2hlY2tib3gtY29sb3IpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2hlY2tib3gtYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGVja2JveC1iYWNrZ3JvdW5kKTtcbiAgfVxufVxuIiwiQGltcG9ydCAncGFsZXR0ZXMvc2hhcmVkJztcblxuQG1peGluIGJ1dHRvbigpIHtcbiAgLy8gY29sb3JzIHRoYXQgY2FuIGJlIHJlZGVmaW5lZDpcbiAgLy8gLS1idXR0b24tYmFja2dyb3VuZC1jb2xvclxuICAvLyAtLWJ1dHRvbi1ib3JkZXItY29sb3JcbiAgLy8gLS1idXR0b24tY29sb3JcblxuICAkZGVmYXVsdC1iYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07IC8vIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3JcbiAgJGRlZmF1bHQtYm9yZGVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07IC8vIC0tYnV0dG9uLWJvcmRlci1jb2xvclxuICAkZGVmYXVsdC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTsgLy8gLS1idXR0b24tY29sb3JcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgJGRlZmF1bHQtYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgJGRlZmF1bHQtY29sb3IpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjVzLCBjb2xvciAuNXMsIGJhY2tncm91bmQtY29sb3IgLjVzO1xuXG4gICY6aG92ZXIge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgJGRlZmF1bHQtY29sb3IpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCAkZGVmYXVsdC1ib3JkZXItY29sb3IpO1xuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCAkZGVmYXVsdC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgJGRlZmF1bHQtY29sb3IpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yLCAkZGVmYXVsdC1ib3JkZXItY29sb3IpO1xuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLCAkZGVmYXVsdC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG4gIH1cblxuICAmW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuXG5AbWl4aW4gYnV0dG9uLW91dGxpbmUoKSB7XG4gIC8vIGNvbG9ycyB0aGF0IGNhbiBiZSByZWRlZmluZWQ6XG4gIC8vIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3JcbiAgLy8gLS1idXR0b24tYm9yZGVyLWNvbG9yXG4gIC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTsgLy8gLS1idXR0b24tYmFja2dyb3VuZC1jb2xvclxuICAkZGVmYXVsdC1ib3JkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTsgLy8gLS1idXR0b24tYm9yZGVyLWNvbG9yXG4gICRkZWZhdWx0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07IC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IsICRkZWZhdWx0LWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IsICRkZWZhdWx0LWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cywgY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgJGRlZmF1bHQtYm9yZGVyLWNvbG9yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvciwgJGRlZmF1bHQtYm9yZGVyLWNvbG9yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvciwgJGRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICB9XG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/home/modals/templates/sign-in-modal/sign-in-modal.component.ts": 
        /*!********************************************************************************!*\
          !*** ./src/app/home/modals/templates/sign-in-modal/sign-in-modal.component.ts ***!
          \********************************************************************************/
        /*! exports provided: SignInModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInModalComponent", function () { return SignInModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var SignInModalComponent = /** @class */ (function () {
                function SignInModalComponent(dialogRef) {
                    this.dialogRef = dialogRef;
                }
                SignInModalComponent.prototype.ngOnInit = function () {
                    this.modalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                        rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
                    });
                };
                SignInModalComponent.prototype.signIn = function () {
                    this.dialogRef.close();
                };
                SignInModalComponent.prototype.forgotPassword = function () {
                    this.dialogRef.close();
                };
                return SignInModalComponent;
            }());
            SignInModalComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            SignInModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sign-in-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/modals/templates/sign-in-modal/sign-in-modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in-modal.component.scss */ "./src/app/home/modals/templates/sign-in-modal/sign-in-modal.component.scss")).default]
                })
            ], SignInModalComponent);
            /***/ 
        }),
        /***/ "./src/app/home/utilities.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/home/utilities.service.ts ***!
          \*******************************************/
        /*! exports provided: UtilitiesService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesService", function () { return UtilitiesService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _forms_validators_country_phone_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms/validators/country-phone.model */ "./src/app/forms/validators/country-phone.model.ts");
            var UtilitiesService = /** @class */ (function () {
                function UtilitiesService(http) {
                    this.http = http;
                }
                UtilitiesService.prototype.getCountries = function () {
                    // List of countries for the autocomplete
                    return this.http.get('/assets/data/countries.json')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (countries) {
                        return countries.map(function (c) { return new _forms_validators_country_phone_model__WEBPACK_IMPORTED_MODULE_4__["CountryPhone"](c.iso, c.name); });
                    }));
                };
                return UtilitiesService;
            }());
            UtilitiesService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UtilitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], UtilitiesService);
            /***/ 
        })
    }]);
//# sourceMappingURL=home-home-module-es2015.js.map
//# sourceMappingURL=home-home-module-es5.js.map
//# sourceMappingURL=home-home-module-es5.js.map