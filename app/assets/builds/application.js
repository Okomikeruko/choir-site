var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/jquery/dist/jquery.js
var require_jquery = __commonJS({
  "node_modules/jquery/dist/jquery.js"(exports, module) {
    (function(global, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
      "use strict";
      var arr = [];
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
      } : function(array) {
        return arr.concat.apply([], array);
      };
      var push = arr.push;
      var indexOf2 = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction = function isFunction2(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
      };
      var isWindow = function isWindow2(obj) {
        return obj != null && obj === obj.window;
      };
      var document2 = window2.document;
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };
      function DOMEval(code, node, doc) {
        doc = doc || document2;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i in preservedScriptAttributes) {
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) {
              script.setAttribute(i, val);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      function toType2(obj) {
        if (obj == null) {
          return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      }
      var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery6 = function(selector, context) {
        return new jQuery6.fn.init(selector, context);
      };
      jQuery6.fn = jQuery6.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery6,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
          if (num == null) {
            return slice.call(this);
          }
          return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
          var ret = jQuery6.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
          return jQuery6.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery6.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(jQuery6.grep(this, function(_elem, i) {
            return (i + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(jQuery6.grep(this, function(_elem, i) {
            return i % 2;
          }));
        },
        eq: function(i) {
          var len = this.length, j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery6.extend = jQuery6.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (typeof target !== "object" && !isFunction(target)) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (; i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              copy = options[name];
              if (name === "__proto__" || target === copy) {
                continue;
              }
              if (deep && copy && (jQuery6.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name];
                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery6.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }
                copyIsArray = false;
                target[name] = jQuery6.extend(deep, clone, copy);
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery6.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
          var proto, Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }
          proto = getProto(obj);
          if (!proto) {
            return true;
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
          DOMEval(code, { nonce: options && options.nonce }, doc);
        },
        each: function(obj, callback) {
          var length, i = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(elem) {
          var node, ret = "", i = 0, nodeType = elem.nodeType;
          if (!nodeType) {
            while (node = elem[i++]) {
              ret += jQuery6.text(node);
            }
          }
          if (nodeType === 1 || nodeType === 11) {
            return elem.textContent;
          }
          if (nodeType === 9) {
            return elem.documentElement.textContent;
          }
          if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          }
          return ret;
        },
        // results is for internal usage only
        makeArray: function(arr2, results) {
          var ret = results || [];
          if (arr2 != null) {
            if (isArrayLike(Object(arr2))) {
              jQuery6.merge(
                ret,
                typeof arr2 === "string" ? [arr2] : arr2
              );
            } else {
              push.call(ret, arr2);
            }
          }
          return ret;
        },
        inArray: function(elem, arr2, i) {
          return arr2 == null ? -1 : indexOf2.call(arr2, elem, i);
        },
        isXMLDoc: function(elem) {
          var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
          return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
          var len = +second.length, j = 0, i = first.length;
          for (; j < len; j++) {
            first[i++] = second[j];
          }
          first.length = i;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }
          return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
          var length, value, i = 0, ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support
      });
      if (typeof Symbol === "function") {
        jQuery6.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery6.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(_i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        }
      );
      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType2(obj);
        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }
      var pop = arr.pop;
      var sort = arr.sort;
      var splice = arr.splice;
      var whitespace = "[\\x20\\t\\r\\n\\f]";
      var rtrimCSS = new RegExp(
        "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
        "g"
      );
      jQuery6.contains = function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      };
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
          if (ch === "\0") {
            return "\uFFFD";
          }
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        return "\\" + ch;
      }
      jQuery6.escapeSelector = function(sel) {
        return (sel + "").replace(rcssescape, fcssescape);
      };
      var preferredDoc = document2, pushNative = push;
      (function() {
        var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery6.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
          ID: new RegExp("^#(" + identifier + ")"),
          CLASS: new RegExp("^\\.(" + identifier + ")"),
          TAG: new RegExp("^(" + identifier + "|[*])"),
          ATTR: new RegExp("^" + attributes),
          PSEUDO: new RegExp("^" + pseudos),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + booleans + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
          var high = "0x" + escape.slice(1) - 65536;
          if (nonHex) {
            return nonHex;
          }
          return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, unloadHandler = function() {
          setDocument();
        }, inDisabledFieldset = addCombinator(
          function(elem) {
            return elem.disabled === true && nodeName(elem, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function safeActiveElement() {
          try {
            return document3.activeElement;
          } catch (err) {
          }
        }
        try {
          push2.apply(
            arr = slice.call(preferredDoc.childNodes),
            preferredDoc.childNodes
          );
          arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push2 = {
            apply: function(target, els) {
              pushNative.apply(target, slice.call(els));
            },
            call: function(target) {
              pushNative.apply(target, slice.call(arguments, 1));
            }
          };
        }
        function find(selector, context, results, seed) {
          var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
          results = results || [];
          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          }
          if (!seed) {
            setDocument(context);
            context = context || document3;
            if (documentIsHTML) {
              if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                if (m = match[1]) {
                  if (nodeType === 9) {
                    if (elem = context.getElementById(m)) {
                      if (elem.id === m) {
                        push2.call(results, elem);
                        return results;
                      }
                    } else {
                      return results;
                    }
                  } else {
                    if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                      push2.call(results, elem);
                      return results;
                    }
                  }
                } else if (match[2]) {
                  push2.apply(results, context.getElementsByTagName(selector));
                  return results;
                } else if ((m = match[3]) && context.getElementsByClassName) {
                  push2.apply(results, context.getElementsByClassName(m));
                  return results;
                }
              }
              if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                newSelector = selector;
                newContext = context;
                if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                  if (newContext != context || !support.scope) {
                    if (nid = context.getAttribute("id")) {
                      nid = jQuery6.escapeSelector(nid);
                    } else {
                      context.setAttribute("id", nid = expando);
                    }
                  }
                  groups = tokenize(selector);
                  i2 = groups.length;
                  while (i2--) {
                    groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                  }
                  newSelector = groups.join(",");
                }
                try {
                  push2.apply(
                    results,
                    newContext.querySelectorAll(newSelector)
                  );
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
          return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
        }
        function createCache() {
          var keys = [];
          function cache(key, value) {
            if (keys.push(key + " ") > Expr.cacheLength) {
              delete cache[keys.shift()];
            }
            return cache[key + " "] = value;
          }
          return cache;
        }
        function markFunction(fn2) {
          fn2[expando] = true;
          return fn2;
        }
        function assert(fn2) {
          var el = document3.createElement("fieldset");
          try {
            return !!fn2(el);
          } catch (e) {
            return false;
          } finally {
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
            el = null;
          }
        }
        function createInputPseudo(type) {
          return function(elem) {
            return nodeName(elem, "input") && elem.type === type;
          };
        }
        function createButtonPseudo(type) {
          return function(elem) {
            return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
          };
        }
        function createDisabledPseudo(disabled) {
          return function(elem) {
            if ("form" in elem) {
              if (elem.parentNode && elem.disabled === false) {
                if ("label" in elem) {
                  if ("label" in elem.parentNode) {
                    return elem.parentNode.disabled === disabled;
                  } else {
                    return elem.disabled === disabled;
                  }
                }
                return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
              }
              return elem.disabled === disabled;
            } else if ("label" in elem) {
              return elem.disabled === disabled;
            }
            return false;
          };
        }
        function createPositionalPseudo(fn2) {
          return markFunction(function(argument) {
            argument = +argument;
            return markFunction(function(seed, matches2) {
              var j, matchIndexes = fn2([], seed.length, argument), i2 = matchIndexes.length;
              while (i2--) {
                if (seed[j = matchIndexes[i2]]) {
                  seed[j] = !(matches2[j] = seed[j]);
                }
              }
            });
          });
        }
        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        function setDocument(node) {
          var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
          if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
            return document3;
          }
          document3 = doc;
          documentElement2 = document3.documentElement;
          documentIsHTML = !jQuery6.isXMLDoc(document3);
          matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
          if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
            subWindow.addEventListener("unload", unloadHandler);
          }
          support.getById = assert(function(el) {
            documentElement2.appendChild(el).id = jQuery6.expando;
            return !document3.getElementsByName || !document3.getElementsByName(jQuery6.expando).length;
          });
          support.disconnectedMatch = assert(function(el) {
            return matches.call(el, "*");
          });
          support.scope = assert(function() {
            return document3.querySelectorAll(":scope");
          });
          support.cssHas = assert(function() {
            try {
              document3.querySelector(":has(*,:jqfake)");
              return false;
            } catch (e) {
              return true;
            }
          });
          if (support.getById) {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                return elem.getAttribute("id") === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var elem = context.getElementById(id);
                return elem ? [elem] : [];
              }
            };
          } else {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node2 && node2.value === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var node2, i2, elems, elem = context.getElementById(id);
                if (elem) {
                  node2 = elem.getAttributeNode("id");
                  if (node2 && node2.value === id) {
                    return [elem];
                  }
                  elems = context.getElementsByName(id);
                  i2 = 0;
                  while (elem = elems[i2++]) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                  }
                }
                return [];
              }
            };
          }
          Expr.find.TAG = function(tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag);
            } else {
              return context.querySelectorAll(tag);
            }
          };
          Expr.find.CLASS = function(className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          rbuggyQSA = [];
          assert(function(el) {
            var input;
            documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
            if (!el.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
            }
            if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
              rbuggyQSA.push("~=");
            }
            if (!el.querySelectorAll("a#" + expando + "+*").length) {
              rbuggyQSA.push(".#.+[+~]");
            }
            if (!el.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
            input = document3.createElement("input");
            input.setAttribute("type", "hidden");
            el.appendChild(input).setAttribute("name", "D");
            documentElement2.appendChild(el).disabled = true;
            if (el.querySelectorAll(":disabled").length !== 2) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            input = document3.createElement("input");
            input.setAttribute("name", "");
            el.appendChild(input);
            if (!el.querySelectorAll("[name='']").length) {
              rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
            }
          });
          if (!support.cssHas) {
            rbuggyQSA.push(":has");
          }
          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (compare) {
              return compare;
            }
            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
              // Otherwise we know they are disconnected
              1
            );
            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
              if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                return -1;
              }
              if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                return 1;
              }
              return sortInput ? indexOf2.call(sortInput, a) - indexOf2.call(sortInput, b) : 0;
            }
            return compare & 4 ? -1 : 1;
          };
          return document3;
        }
        find.matches = function(expr, elements) {
          return find(expr, null, null, elements);
        };
        find.matchesSelector = function(elem, expr) {
          setDocument(elem);
          if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches.call(elem, expr);
              if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e) {
              nonnativeSelectorCache(expr, true);
            }
          }
          return find(expr, document3, null, [elem]).length > 0;
        };
        find.contains = function(context, elem) {
          if ((context.ownerDocument || context) != document3) {
            setDocument(context);
          }
          return jQuery6.contains(context, elem);
        };
        find.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) != document3) {
            setDocument(elem);
          }
          var fn2 = Expr.attrHandle[name.toLowerCase()], val = fn2 && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn2(elem, name, !documentIsHTML) : void 0;
          if (val !== void 0) {
            return val;
          }
          return elem.getAttribute(name);
        };
        find.error = function(msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        jQuery6.uniqueSort = function(results) {
          var elem, duplicates = [], j = 0, i2 = 0;
          hasDuplicate = !support.sortStable;
          sortInput = !support.sortStable && slice.call(results, 0);
          sort.call(results, sortOrder);
          if (hasDuplicate) {
            while (elem = results[i2++]) {
              if (elem === results[i2]) {
                j = duplicates.push(i2);
              }
            }
            while (j--) {
              splice.call(results, duplicates[j], 1);
            }
          }
          sortInput = null;
          return results;
        };
        jQuery6.fn.uniqueSort = function() {
          return this.pushStack(jQuery6.uniqueSort(slice.apply(this)));
        };
        Expr = jQuery6.expr = {
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
            ATTR: function(match) {
              match[1] = match[1].replace(runescape, funescape);
              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }
              return match.slice(0, 4);
            },
            CHILD: function(match) {
              match[1] = match[1].toLowerCase();
              if (match[1].slice(0, 3) === "nth") {
                if (!match[3]) {
                  find.error(match[0]);
                }
                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +(match[7] + match[8] || match[3] === "odd");
              } else if (match[3]) {
                find.error(match[0]);
              }
              return match;
            },
            PSEUDO: function(match) {
              var excess, unquoted = !match[6] && match[2];
              if (matchExpr.CHILD.test(match[0])) {
                return null;
              }
              if (match[3]) {
                match[2] = match[4] || match[5] || "";
              } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
              (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
              (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              }
              return match.slice(0, 3);
            }
          },
          filter: {
            TAG: function(nodeNameSelector) {
              var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function() {
                return true;
              } : function(elem) {
                return nodeName(elem, expectedNodeName);
              };
            },
            CLASS: function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test(
                  typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(name, operator, check) {
              return function(elem) {
                var result = find.attr(elem, name);
                if (result == null) {
                  return operator === "!=";
                }
                if (!operator) {
                  return true;
                }
                result += "";
                if (operator === "=") {
                  return result === check;
                }
                if (operator === "!=") {
                  return result !== check;
                }
                if (operator === "^=") {
                  return check && result.indexOf(check) === 0;
                }
                if (operator === "*=") {
                  return check && result.indexOf(check) > -1;
                }
                if (operator === "$=") {
                  return check && result.slice(-check.length) === check;
                }
                if (operator === "~=") {
                  return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                }
                if (operator === "|=") {
                  return result === check || result.slice(0, check.length + 1) === check + "-";
                }
                return false;
              };
            },
            CHILD: function(type, what, _argument, first, last) {
              var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
              return first === 1 && last === 0 ? (
                // Shortcut for :nth-*(n)
                function(elem) {
                  return !!elem.parentNode;
                }
              ) : function(elem, _context, xml) {
                var cache, outerCache, node, nodeIndex, start2, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                if (parent) {
                  if (simple) {
                    while (dir2) {
                      node = elem;
                      while (node = node[dir2]) {
                        if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                          return false;
                        }
                      }
                      start2 = dir2 = type === "only" && !start2 && "nextSibling";
                    }
                    return true;
                  }
                  start2 = [forward ? parent.firstChild : parent.lastChild];
                  if (forward && useCache) {
                    outerCache = parent[expando] || (parent[expando] = {});
                    cache = outerCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                    (diff = nodeIndex = 0) || start2.pop()) {
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        outerCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    if (useCache) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    }
                    if (diff === false) {
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start2.pop()) {
                        if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {});
                            outerCache[type] = [dirruns, diff];
                          }
                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  diff -= last;
                  return diff === first || diff % first === 0 && diff / first >= 0;
                }
              };
            },
            PSEUDO: function(pseudo, argument) {
              var args, fn2 = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
              if (fn2[expando]) {
                return fn2(argument);
              }
              if (fn2.length > 1) {
                args = [pseudo, pseudo, "", argument];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                  var idx, matched = fn2(seed, argument), i2 = matched.length;
                  while (i2--) {
                    idx = indexOf2.call(seed, matched[i2]);
                    seed[idx] = !(matches2[idx] = matched[i2]);
                  }
                }) : function(elem) {
                  return fn2(elem, 0, args);
                };
              }
              return fn2;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: markFunction(function(selector) {
              var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
              return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                while (i2--) {
                  if (elem = unmatched[i2]) {
                    seed[i2] = !(matches2[i2] = elem);
                  }
                }
              }) : function(elem, _context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results);
                input[0] = null;
                return !results.pop();
              };
            }),
            has: markFunction(function(selector) {
              return function(elem) {
                return find(selector, elem).length > 0;
              };
            }),
            contains: markFunction(function(text) {
              text = text.replace(runescape, funescape);
              return function(elem) {
                return (elem.textContent || jQuery6.text(elem)).indexOf(text) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // https://www.w3.org/TR/selectors/#lang-pseudo
            lang: markFunction(function(lang) {
              if (!ridentifier.test(lang || "")) {
                find.error("unsupported lang: " + lang);
              }
              lang = lang.replace(runescape, funescape).toLowerCase();
              return function(elem) {
                var elemLang;
                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                return false;
              };
            }),
            // Miscellaneous
            target: function(elem) {
              var hash3 = window2.location && window2.location.hash;
              return hash3 && hash3.slice(1) === elem.id;
            },
            root: function(elem) {
              return elem === documentElement2;
            },
            focus: function(elem) {
              return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            // Boolean properties
            enabled: createDisabledPseudo(false),
            disabled: createDisabledPseudo(true),
            checked: function(elem) {
              return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
            },
            selected: function(elem) {
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }
              return elem.selected === true;
            },
            // Contents
            empty: function(elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            parent: function(elem) {
              return !Expr.pseudos.empty(elem);
            },
            // Element/input types
            header: function(elem) {
              return rheader.test(elem.nodeName);
            },
            input: function(elem) {
              return rinputs.test(elem.nodeName);
            },
            button: function(elem) {
              return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
            },
            text: function(elem) {
              var attr;
              return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            // Position-in-collection
            first: createPositionalPseudo(function() {
              return [0];
            }),
            last: createPositionalPseudo(function(_matchIndexes, length) {
              return [length - 1];
            }),
            eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
              return [argument < 0 ? argument + length : argument];
            }),
            even: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 0;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            odd: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 1;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            lt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2;
              if (argument < 0) {
                i2 = argument + length;
              } else if (argument > length) {
                i2 = length;
              } else {
                i2 = argument;
              }
              for (; --i2 >= 0; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            gt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2 = argument < 0 ? argument + length : argument;
              for (; ++i2 < length; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            })
          }
        };
        Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
          Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in { submit: true, reset: true }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {
        }
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        function tokenize(selector, parseOnly) {
          var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }
          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;
          while (soFar) {
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                soFar = soFar.slice(match[0].length) || soFar;
              }
              groups.push(tokens = []);
            }
            matched = false;
            if (match = rleadingCombinator.exec(soFar)) {
              matched = match.shift();
              tokens.push({
                value: matched,
                // Cast descendant combinators to space
                type: match[0].replace(rtrimCSS, " ")
              });
              soFar = soFar.slice(matched.length);
            }
            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }
            if (!matched) {
              break;
            }
          }
          if (parseOnly) {
            return soFar.length;
          }
          return soFar ? find.error(selector) : (
            // Cache the tokens
            tokenCache(selector, groups).slice(0)
          );
        }
        function toSelector(tokens) {
          var i2 = 0, len = tokens.length, selector = "";
          for (; i2 < len; i2++) {
            selector += tokens[i2].value;
          }
          return selector;
        }
        function addCombinator(matcher, combinator, base) {
          var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
          return combinator.first ? (
            // Check against closest ancestor/preceding element
            function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
              return false;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(elem, context, xml) {
              var oldCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    if (skip && nodeName(elem, skip)) {
                      elem = elem[dir2] || elem;
                    } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      outerCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            }
          );
        }
        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            var i2 = matchers.length;
            while (i2--) {
              if (!matchers[i2](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
          var i2 = 0, len = contexts.length;
          for (; i2 < len; i2++) {
            find(selector, contexts[i2], results);
          }
          return results;
        }
        function condense(unmatched, map, filter, context, xml) {
          var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
          for (; i2 < len; i2++) {
            if (elem = unmatched[i2]) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);
                if (mapped) {
                  map.push(i2);
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
          return markFunction(function(seed, results, context, xml) {
            var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
              selector || "*",
              context.nodeType ? [context] : context,
              []
            ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
            if (matcher) {
              matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                // ...intermediate processing is necessary
                []
              ) : (
                // ...otherwise use results directly
                results
              );
              matcher(matcherIn, matcherOut, context, xml);
            } else {
              matcherOut = matcherIn;
            }
            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml);
              i2 = temp.length;
              while (i2--) {
                if (elem = temp[i2]) {
                  matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                }
              }
            }
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  temp = [];
                  i2 = matcherOut.length;
                  while (i2--) {
                    if (elem = matcherOut[i2]) {
                      temp.push(matcherIn[i2] = elem);
                    }
                  }
                  postFinder(null, matcherOut = [], temp, xml);
                }
                i2 = matcherOut.length;
                while (i2--) {
                  if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf2.call(seed, elem) : preMap[i2]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              }
            } else {
              matcherOut = condense(
                matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
              );
              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push2.apply(results, matcherOut);
              }
            }
          });
        }
        function matcherFromTokens(tokens) {
          var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
            return indexOf2.call(checkContext, elem) > -1;
          }, implicitRelative, true), matchers = [function(elem, context, xml) {
            var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
          for (; i2 < len; i2++) {
            if (matcher = Expr.relative[tokens[i2].type]) {
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
              if (matcher[expando]) {
                j = ++i2;
                for (; j < len; j++) {
                  if (Expr.relative[tokens[j].type]) {
                    break;
                  }
                }
                return setMatcher(
                  i2 > 1 && elementMatcher(matchers),
                  i2 > 1 && toSelector(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                  ).replace(rtrimCSS, "$1"),
                  matcher,
                  i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                  j < len && matcherFromTokens(tokens = tokens.slice(j)),
                  j < len && toSelector(tokens)
                );
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
            var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
            if (outermost) {
              outermostContext = context == document3 || context || outermost;
            }
            for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument != document3) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context || document3, xml)) {
                    push2.call(results, elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i2;
            if (bySet && i2 !== matchedCount) {
              j = 0;
              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i2--) {
                    if (!(unmatched[i2] || setMatched[i2])) {
                      setMatched[i2] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push2.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                jQuery6.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        function compile(selector, match) {
          var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
          if (!cached) {
            if (!match) {
              match = tokenize(selector);
            }
            i2 = match.length;
            while (i2--) {
              cached = matcherFromTokens(match[i2]);
              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            }
            cached = compilerCache(
              selector,
              matcherFromGroupMatchers(elementMatchers, setMatchers)
            );
            cached.selector = selector;
          }
          return cached;
        }
        function select(selector, context, results, seed) {
          var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
          results = results || [];
          if (match.length === 1) {
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find.ID(
                token.matches[0].replace(runescape, funescape),
                context
              ) || [])[0];
              if (!context) {
                return results;
              } else if (compiled) {
                context = context.parentNode;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
            while (i2--) {
              token = tokens[i2];
              if (Expr.relative[type = token.type]) {
                break;
              }
              if (find2 = Expr.find[type]) {
                if (seed = find2(
                  token.matches[0].replace(runescape, funescape),
                  rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                )) {
                  tokens.splice(i2, 1);
                  selector = seed.length && toSelector(tokens);
                  if (!selector) {
                    push2.apply(results, seed);
                    return results;
                  }
                  break;
                }
              }
            }
          }
          (compiled || compile(selector, match))(
            seed,
            context,
            !documentIsHTML,
            results,
            !context || rsibling.test(selector) && testContext(context.parentNode) || context
          );
          return results;
        }
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        setDocument();
        support.sortDetached = assert(function(el) {
          return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
        });
        jQuery6.find = find;
        jQuery6.expr[":"] = jQuery6.expr.pseudos;
        jQuery6.unique = jQuery6.uniqueSort;
        find.compile = compile;
        find.select = select;
        find.setDocument = setDocument;
        find.tokenize = tokenize;
        find.escape = jQuery6.escapeSelector;
        find.getText = jQuery6.text;
        find.isXML = jQuery6.isXMLDoc;
        find.selectors = jQuery6.expr;
        find.support = jQuery6.support;
        find.uniqueSort = jQuery6.uniqueSort;
      })();
      var dir = function(elem, dir2, until) {
        var matched = [], truncate = until !== void 0;
        while ((elem = elem[dir2]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery6(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery6.expr.match.needsContext;
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery6.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery6.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if (typeof qualifier !== "string") {
          return jQuery6.grep(elements, function(elem) {
            return indexOf2.call(qualifier, elem) > -1 !== not;
          });
        }
        return jQuery6.filter(qualifier, elements, not);
      }
      jQuery6.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery6.find.matchesSelector(elem, expr) ? [elem] : [];
        }
        return jQuery6.find.matches(expr, jQuery6.grep(elems, function(elem2) {
          return elem2.nodeType === 1;
        }));
      };
      jQuery6.fn.extend({
        find: function(selector) {
          var i, ret, len = this.length, self2 = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery6(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery6.contains(self2[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery6.find(selector, self2[i], ret);
          }
          return len > 1 ? jQuery6.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery6(selector) : selector || [],
            false
          ).length;
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init2 = jQuery6.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery6 ? context[0] : context;
              jQuery6.merge(this, jQuery6.parseHTML(
                match[1],
                context && context.nodeType ? context.ownerDocument || context : document2,
                true
              ));
              if (rsingleTag.test(match[1]) && jQuery6.isPlainObject(context)) {
                for (match in context) {
                  if (isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document2.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction(selector)) {
          return root.ready !== void 0 ? root.ready(selector) : (
            // Execute immediately if ready is not present
            selector(jQuery6)
          );
        }
        return jQuery6.makeArray(selector, this);
      };
      init2.prototype = jQuery6.fn;
      rootjQuery = jQuery6(document2);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery6.fn.extend({
        has: function(target) {
          var targets = jQuery6(target, this), l = targets.length;
          return this.filter(function() {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery6.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery6(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                  // Don't pass non-elements to jQuery#find
                  cur.nodeType === 1 && jQuery6.find.matchesSelector(cur, selectors)
                ))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery6.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf2.call(jQuery6(elem), this[0]);
          }
          return indexOf2.call(
            this,
            // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem
          );
        },
        add: function(selector, context) {
          return this.pushStack(
            jQuery6.uniqueSort(
              jQuery6.merge(this.get(), jQuery6(selector, context))
            )
          );
        },
        addBack: function(selector) {
          return this.add(
            selector == null ? this.prevObject : this.prevObject.filter(selector)
          );
        }
      });
      function sibling(cur, dir2) {
        while ((cur = cur[dir2]) && cur.nodeType !== 1) {
        }
        return cur;
      }
      jQuery6.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (elem.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          getProto(elem.contentDocument)) {
            return elem.contentDocument;
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }
          return jQuery6.merge([], elem.childNodes);
        }
      }, function(name, fn2) {
        jQuery6.fn[name] = function(until, selector) {
          var matched = jQuery6.map(this, fn2, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery6.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery6.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
      function createOptions(options) {
        var object = {};
        jQuery6.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery6.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery6.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
          locked = locked || options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        }, self2 = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery6.each(args, function(_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self2.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType2(arg) !== "string") {
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
          remove: function() {
            jQuery6.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery6.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(fn2) {
            return fn2 ? jQuery6.inArray(fn2, list) > -1 : list.length > 0;
          },
          // Remove all callbacks from the list
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function(context, args) {
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
          fire: function() {
            self2.fireWith(this, arguments);
            return this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!fired;
          }
        };
        return self2;
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
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject);
          } else {
            resolve.apply(void 0, [value].slice(noValue));
          }
        } catch (value2) {
          reject.apply(void 0, [value2]);
        }
      }
      jQuery6.extend({
        Deferred: function(func) {
          var tuples = [
            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            [
              "notify",
              "progress",
              jQuery6.Callbacks("memory"),
              jQuery6.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              jQuery6.Callbacks("once memory"),
              jQuery6.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              jQuery6.Callbacks("once memory"),
              jQuery6.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], state = "pending", promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function(fn2) {
              return promise.then(null, fn2);
            },
            // Keep pipe for back-compat
            pipe: function() {
              var fns = arguments;
              return jQuery6.Deferred(function(newDefer) {
                jQuery6.each(tuples, function(_i, tuple) {
                  var fn2 = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn2 && fn2.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](
                        this,
                        fn2 ? [returned] : arguments
                      );
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred2, handler, special) {
                return function() {
                  var that = this, args = arguments, mightThrow = function() {
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred2.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    then = returned && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof returned === "object" || typeof returned === "function") && returned.then;
                    if (isFunction(then)) {
                      if (special) {
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special)
                        );
                      } else {
                        maxDepth++;
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special),
                          resolve(
                            maxDepth,
                            deferred2,
                            Identity,
                            deferred2.notifyWith
                          )
                        );
                      }
                    } else {
                      if (handler !== Identity) {
                        that = void 0;
                        args = [returned];
                      }
                      (special || deferred2.resolveWith)(that, args);
                    }
                  }, process = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery6.Deferred.exceptionHook) {
                        jQuery6.Deferred.exceptionHook(
                          e,
                          process.error
                        );
                      }
                      if (depth + 1 >= maxDepth) {
                        if (handler !== Thrower) {
                          that = void 0;
                          args = [e];
                        }
                        deferred2.rejectWith(that, args);
                      }
                    }
                  };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery6.Deferred.getErrorHook) {
                      process.error = jQuery6.Deferred.getErrorHook();
                    } else if (jQuery6.Deferred.getStackHook) {
                      process.error = jQuery6.Deferred.getStackHook();
                    }
                    window2.setTimeout(process);
                  }
                };
              }
              return jQuery6.Deferred(function(newDefer) {
                tuples[0][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onProgress) ? onProgress : Identity,
                    newDefer.notifyWith
                  )
                );
                tuples[1][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onFulfilled) ? onFulfilled : Identity
                  )
                );
                tuples[2][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onRejected) ? onRejected : Thrower
                  )
                );
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function(obj) {
              return obj != null ? jQuery6.extend(obj, promise) : promise;
            }
          }, deferred = {};
          jQuery6.each(tuples, function(i, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(
                function() {
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
                tuples[0][3].lock
              );
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
          var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery6.Deferred(), updateFunc = function(i2) {
            return function(value) {
              resolveContexts[i2] = this;
              resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!--remaining) {
                primary.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
          if (remaining <= 1) {
            adoptValue(
              singleValue,
              primary.done(updateFunc(i)).resolve,
              primary.reject,
              !remaining
            );
            if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return primary.then();
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), primary.reject);
          }
          return primary.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery6.Deferred.exceptionHook = function(error, asyncError) {
        if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
          window2.console.warn(
            "jQuery.Deferred exception: " + error.message,
            error.stack,
            asyncError
          );
        }
      };
      jQuery6.readyException = function(error) {
        window2.setTimeout(function() {
          throw error;
        });
      };
      var readyList = jQuery6.Deferred();
      jQuery6.fn.ready = function(fn2) {
        readyList.then(fn2).catch(function(error) {
          jQuery6.readyException(error);
        });
        return this;
      };
      jQuery6.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
          if (wait === true ? --jQuery6.readyWait : jQuery6.isReady) {
            return;
          }
          jQuery6.isReady = true;
          if (wait !== true && --jQuery6.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document2, [jQuery6]);
        }
      });
      jQuery6.ready.then = readyList.then;
      function completed() {
        document2.removeEventListener("DOMContentLoaded", completed);
        window2.removeEventListener("load", completed);
        jQuery6.ready();
      }
      if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
        window2.setTimeout(jQuery6.ready);
      } else {
        document2.addEventListener("DOMContentLoaded", completed);
        window2.addEventListener("load", completed);
      }
      var access = function(elems, fn2, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (toType2(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn2, i, key[i], true, emptyGet, raw);
          }
        } else if (value !== void 0) {
          chainable = true;
          if (!isFunction(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn2.call(elems, value);
              fn2 = null;
            } else {
              bulk = fn2;
              fn2 = function(elem, _key, value2) {
                return bulk.call(jQuery6(elem), value2);
              };
            }
          }
          if (fn2) {
            for (; i < len; i++) {
              fn2(
                elems[i],
                key,
                raw ? value : value.call(elems[i], i, fn2(elems[i], key))
              );
            }
          }
        }
        if (chainable) {
          return elems;
        }
        if (bulk) {
          return fn2.call(elems);
        }
        return len ? fn2(elems[0], key) : emptyGet;
      };
      var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
      function fcamelCase(_all, letter) {
        return letter.toUpperCase();
      }
      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };
      function Data2() {
        this.expando = jQuery6.expando + Data2.uid++;
      }
      Data2.uid = 1;
      Data2.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === void 0 ? this.cache(owner) : (
            // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)]
          );
        },
        access: function(owner, key, value) {
          if (key === void 0 || key && typeof key === "string" && value === void 0) {
            return this.get(owner, key);
          }
          this.set(owner, key, value);
          return value !== void 0 ? value : key;
        },
        remove: function(owner, key) {
          var i, cache = owner[this.expando];
          if (cache === void 0) {
            return;
          }
          if (key !== void 0) {
            if (Array.isArray(key)) {
              key = key.map(camelCase);
            } else {
              key = camelCase(key);
              key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
            }
            i = key.length;
            while (i--) {
              delete cache[key[i]];
            }
          }
          if (key === void 0 || jQuery6.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = void 0;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== void 0 && !jQuery6.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data2();
      var dataUser = new Data2();
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
        if (data === void 0 && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e) {
            }
            dataUser.set(elem, key, data);
          } else {
            data = void 0;
          }
        }
        return data;
      }
      jQuery6.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery6.fn.extend({
        data: function(key, value) {
          var i, name, data, elem = this[0], attrs = elem && elem.attributes;
          if (key === void 0) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
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
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }
          return access(this, function(value2) {
            var data2;
            if (elem && value2 === void 0) {
              data2 = dataUser.get(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              data2 = dataAttr(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key, value2);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery6.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery6.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery6.queue(elem, type), startLength = queue.length, fn2 = queue.shift(), hooks = jQuery6._queueHooks(elem, type), next = function() {
            jQuery6.dequeue(elem, type);
          };
          if (fn2 === "inprogress") {
            fn2 = queue.shift();
            startLength--;
          }
          if (fn2) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn2.call(elem, next, hooks);
          }
          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery6.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery6.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery6.queue(this[0], type);
          }
          return data === void 0 ? this : this.each(function() {
            var queue = jQuery6.queue(this, type, data);
            jQuery6._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery6.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery6.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
          var tmp, count = 1, defer = jQuery6.Deferred(), elements = this, i = this.length, resolve = function() {
            if (!--count) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if (typeof type !== "string") {
            obj = type;
            type = void 0;
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
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document2.documentElement;
      var isAttached = function(elem) {
        return jQuery6.contains(elem.ownerDocument, elem);
      }, composed = { composed: true };
      if (documentElement.getRootNode) {
        isAttached = function(elem) {
          return jQuery6.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery6.css(elem, "display") === "none";
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery6.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery6.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery6.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery6.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery6.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;
          }
          initialInUnit = initialInUnit * 2;
          jQuery6.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
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
        var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName2));
        display = jQuery6.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName2] = display;
        return display;
      }
      function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery6.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery6(this).show();
            } else {
              jQuery6(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
      })();
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
      if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
      }
      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }
        if (tag === void 0 || tag && nodeName(context, tag)) {
          return jQuery6.merge([context], ret);
        }
        return ret;
      }
      function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (; i < l; i++) {
          dataPriv.set(
            elems[i],
            "globalEval",
            !refElements || dataPriv.get(refElements[i], "globalEval")
          );
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType2(elem) === "object") {
              jQuery6.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery6.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery6.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
          if (selection && jQuery6.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          attached = isAttached(elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (attached) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function on(elem, types, selector, data, fn2, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = void 0;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn2 == null) {
          fn2 = selector;
          data = selector = void 0;
        } else if (fn2 == null) {
          if (typeof selector === "string") {
            fn2 = data;
            data = void 0;
          } else {
            fn2 = data;
            data = selector;
            selector = void 0;
          }
        }
        if (fn2 === false) {
          fn2 = returnFalse;
        } else if (!fn2) {
          return elem;
        }
        if (one === 1) {
          origFn = fn2;
          fn2 = function(event) {
            jQuery6().off(event);
            return origFn.apply(this, arguments);
          };
          fn2.guid = origFn.guid || (origFn.guid = jQuery6.guid++);
        }
        return elem.each(function() {
          jQuery6.event.add(this, types, fn2, data, selector);
        });
      }
      jQuery6.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
          if (!acceptData(elem)) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery6.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery6.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = /* @__PURE__ */ Object.create(null);
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {
              return typeof jQuery6 !== "undefined" && jQuery6.event.triggered !== e.type ? jQuery6.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery6.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery6.event.special[type] || {};
            handleObj = jQuery6.extend({
              type,
              origType,
              data,
              handler,
              guid: handler.guid,
              selector,
              needsContext: selector && jQuery6.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
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
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery6.event.global[type] = true;
          }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery6.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery6.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery6.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery6.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery6.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery6.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery6.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery6.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== void 0) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
          if (delegateCount && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          cur.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === void 0) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery6(sel, this).index(cur) > -1 : jQuery6.find(sel, this, null, [cur]).length;
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
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery6.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery6.expando] ? originalEvent : new jQuery6.Event(originalEvent);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: true
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click", true);
              }
              return false;
            },
            trigger: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              }
              return true;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(event) {
              if (event.result !== void 0 && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      function leverageNative(el, type, isSetup) {
        if (!isSetup) {
          if (dataPriv.get(el, type) === void 0) {
            jQuery6.event.add(el, type, returnTrue);
          }
          return;
        }
        dataPriv.set(el, type, false);
        jQuery6.event.add(el, type, {
          namespace: false,
          handler: function(event) {
            var result, saved = dataPriv.get(this, type);
            if (event.isTrigger & 1 && this[type]) {
              if (!saved) {
                saved = slice.call(arguments);
                dataPriv.set(this, type, saved);
                this[type]();
                result = dataPriv.get(this, type);
                dataPriv.set(this, type, false);
                if (saved !== result) {
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result;
                }
              } else if ((jQuery6.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              }
            } else if (saved) {
              dataPriv.set(this, type, jQuery6.event.trigger(
                saved[0],
                saved.slice(1),
                this
              ));
              event.stopPropagation();
              event.isImmediatePropagationStopped = returnTrue;
            }
          }
        });
      }
      jQuery6.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery6.Event = function(src, props) {
        if (!(this instanceof jQuery6.Event)) {
          return new jQuery6.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
          src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery6.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery6.expando] = true;
      };
      jQuery6.Event.prototype = {
        constructor: jQuery6.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery6.each({
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
        which: true
      }, jQuery6.event.addProp);
      jQuery6.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
        function focusMappedHandler(nativeEvent) {
          if (document2.documentMode) {
            var handle = dataPriv.get(this, "handle"), event = jQuery6.event.fix(nativeEvent);
            event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
            event.isSimulated = true;
            handle(nativeEvent);
            if (event.target === event.currentTarget) {
              handle(event);
            }
          } else {
            jQuery6.event.simulate(
              delegateType,
              nativeEvent.target,
              jQuery6.event.fix(nativeEvent)
            );
          }
        }
        jQuery6.event.special[type] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function() {
            var attaches;
            leverageNative(this, type, true);
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType);
              if (!attaches) {
                this.addEventListener(delegateType, focusMappedHandler);
              }
              dataPriv.set(this, delegateType, (attaches || 0) + 1);
            } else {
              return false;
            }
          },
          trigger: function() {
            leverageNative(this, type);
            return true;
          },
          teardown: function() {
            var attaches;
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType) - 1;
              if (!attaches) {
                this.removeEventListener(delegateType, focusMappedHandler);
                dataPriv.remove(this, delegateType);
              } else {
                dataPriv.set(this, delegateType, attaches);
              }
            } else {
              return false;
            }
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(event) {
            return dataPriv.get(event.target, type);
          },
          delegateType
        };
        jQuery6.event.special[delegateType] = {
          setup: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
            if (!attaches) {
              if (document2.documentMode) {
                this.addEventListener(delegateType, focusMappedHandler);
              } else {
                doc.addEventListener(type, focusMappedHandler, true);
              }
            }
            dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
          },
          teardown: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
            if (!attaches) {
              if (document2.documentMode) {
                this.removeEventListener(delegateType, focusMappedHandler);
              } else {
                doc.removeEventListener(type, focusMappedHandler, true);
              }
              dataPriv.remove(dataHolder, delegateType);
            } else {
              dataPriv.set(dataHolder, delegateType, attaches);
            }
          }
        };
      });
      jQuery6.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery6.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
            if (!related || related !== target && !jQuery6.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery6.fn.extend({
        on: function(types, selector, data, fn2) {
          return on(this, types, selector, data, fn2);
        },
        one: function(types, selector, data, fn2) {
          return on(this, types, selector, data, fn2, 1);
        },
        off: function(types, selector, fn2) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery6(types.delegateTarget).off(
              handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
              handleObj.selector,
              handleObj.handler
            );
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn2 = selector;
            selector = void 0;
          }
          if (fn2 === false) {
            fn2 = returnFalse;
          }
          return this.each(function() {
            jQuery6.event.remove(this, types, fn2, selector);
          });
        }
      });
      var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery6(elem).children("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.get(src);
          events = pdataOld.events;
          if (events) {
            dataPriv.remove(dest, "handle events");
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery6.event.add(dest, type, events[type][i]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery6.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName2 = dest.nodeName.toLowerCase();
        if (nodeName2 === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName2 === "input" || nodeName2 === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self2 = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self2.html());
            }
            domManip(self2, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery6.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery6.clone(node, true, true);
                if (hasScripts) {
                  jQuery6.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i], node, i);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery6.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery6.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery6._evalUrl && !node.noModule) {
                      jQuery6._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      }, doc);
                    }
                  } else {
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
        var node, nodes = selector ? jQuery6.filter(selector, elem) : elem, i = 0;
        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery6.cleanData(getAll(node));
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
      jQuery6.extend({
        htmlPrefilter: function(html) {
          return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery6.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone;
        },
        cleanData: function(elems) {
          var data, elem, type, special = jQuery6.event.special, i = 0;
          for (; (elem = elems[i]) !== void 0; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery6.event.remove(elem, type);
                    } else {
                      jQuery6.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = void 0;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery6.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value2) {
            return value2 === void 0 ? jQuery6.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value2;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem, i = 0;
          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery6.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery6.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value2) {
            var elem = this[0] || {}, i = 0, l = this.length;
            if (value2 === void 0 && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
              value2 = jQuery6.htmlPrefilter(value2);
              try {
                for (; i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery6.cleanData(getAll(elem, false));
                    elem.innerHTML = value2;
                  }
                }
                elem = 0;
              } catch (e) {
              }
            }
            if (elem) {
              this.empty().append(value2);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery6.inArray(this, ignored) < 0) {
              jQuery6.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery6.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery6.fn[name] = function(selector) {
          var elems, ret = [], insert = jQuery6(selector), last = insert.length - 1, i = 0;
          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery6(insert[i])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var rcustomProp = /^--/;
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window2;
        }
        return view.getComputedStyle(elem);
      };
      var swap = function(elem, options, callback) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window2.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery6.extend(support, {
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
            computeStyleTests();
            return scrollboxSizeVal;
          },
          // Support: IE 9 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Behavior in IE 9 is more subtle than in newer versions & it passes
          // some versions of this test; make sure not to make it pass there!
          //
          // Support: Firefox 70+
          // Only Firefox includes border widths
          // in computed dimensions. (gh-4529)
          reliableTrDimensions: function() {
            var table, tr, trChild, trStyle;
            if (reliableTrDimensionsVal == null) {
              table = document2.createElement("table");
              tr = document2.createElement("tr");
              trChild = document2.createElement("div");
              table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
              tr.style.cssText = "box-sizing:content-box;border:1px solid";
              tr.style.height = "1px";
              trChild.style.height = "9px";
              trChild.style.display = "block";
              documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
              trStyle = window2.getComputedStyle(tr);
              reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
              documentElement.removeChild(table);
            }
            return reliableTrDimensionsVal;
          }
        });
      })();
      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (isCustomProp && ret) {
            ret = ret.replace(rtrimCSS, "$1") || void 0;
          }
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery6.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }
        return ret !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          ret + ""
        ) : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
      function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function finalPropName(name) {
        var final = jQuery6.cssProps[name] || vendorProps[name];
        if (final) {
          return final;
        }
        if (name in emptyStyle) {
          return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function setPositiveNumber(_elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
        ) : value;
      }
      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (; i < 4; i += 2) {
          if (box === "margin") {
            marginDelta += jQuery6.css(elem, box + cssExpand[i], true, styles);
          }
          if (!isBorderBox) {
            delta += jQuery6.css(elem, "padding" + cssExpand[i], true, styles);
            if (box !== "padding") {
              delta += jQuery6.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } else {
              extra += jQuery6.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            if (box === "content") {
              delta -= jQuery6.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if (box !== "margin") {
              delta -= jQuery6.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(
            elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
            // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
            // Use an explicit zero to avoid NaN (gh-3964)
          )) || 0;
        }
        return delta + marginDelta;
      }
      function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery6.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }
          val = "auto";
        }
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery6.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
          isBorderBox = jQuery6.css(elem, "boxSizing", false, styles) === "border-box";
          valueIsBorderBox = offsetProp in elem;
          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(
          elem,
          dimension,
          extra || (isBorderBox ? "border" : "content"),
          valueIsBorderBox,
          styles,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          val
        ) + "px";
      }
      jQuery6.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function(elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageSlice: true,
          columnCount: true,
          flexGrow: true,
          flexShrink: true,
          fontWeight: true,
          gridArea: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnStart: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowStart: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          scale: true,
          widows: true,
          zIndex: true,
          zoom: true,
          // SVG-related
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeMiterlimit: true,
          strokeOpacity: true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery6.cssHooks[name] || jQuery6.cssHooks[origName];
          if (value !== void 0) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery6.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
              return ret;
            }
            return style[name];
          }
        },
        css: function(elem, name, extra, styles) {
          var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery6.cssHooks[name] || jQuery6.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }
          if (val === void 0) {
            val = curCSS(elem, name, styles);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery6.each(["height", "width"], function(_i, dimension) {
        jQuery6.cssHooks[dimension] = {
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery6.css(elem, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery6.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
              elem,
              dimension,
              extra,
              isBorderBox,
              styles
            ) : 0;
            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(
                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
              );
            }
            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery6.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery6.cssHooks.marginLeft = addGetHookIf(
        support.reliableMarginLeft,
        function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
              return elem.getBoundingClientRect().left;
            })) + "px";
          }
        }
      );
      jQuery6.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery6.cssHooks[prefix + suffix] = {
          expand: function(value) {
            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }
            return expanded;
          }
        };
        if (prefix !== "margin") {
          jQuery6.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery6.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name2, value2) {
            var styles, len, map = {}, i = 0;
            if (Array.isArray(name2)) {
              styles = getStyles(elem);
              len = name2.length;
              for (; i < len; i++) {
                map[name2[i]] = jQuery6.css(elem, name2[i], false, styles);
              }
              return map;
            }
            return value2 !== void 0 ? jQuery6.style(elem, name2, value2) : jQuery6.css(elem, name2);
          }, name, value, arguments.length > 1);
        }
      });
      function Tween(elem, options, prop, end2, easing) {
        return new Tween.prototype.init(elem, options, prop, end2, easing);
      }
      jQuery6.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end2, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery6.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end2;
          this.unit = unit || (jQuery6.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased, hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery6.easing[this.easing](
              percent,
              this.options.duration * percent,
              0,
              1,
              this.options.duration
            );
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery6.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery6.fx.step[tween.prop]) {
              jQuery6.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery6.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery6.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery6.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery6.fx = Tween.prototype.init;
      jQuery6.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
      function schedule() {
        if (inProgress) {
          if (document2.hidden === false && window2.requestAnimationFrame) {
            window2.requestAnimationFrame(schedule);
          } else {
            window2.setTimeout(schedule, jQuery6.fx.interval);
          }
          jQuery6.fx.tick();
        }
      }
      function createFxNow() {
        window2.setTimeout(function() {
          fxNow = void 0;
        });
        return fxNow = Date.now();
      }
      function genFx(type, includeWidth) {
        var which, i = 0, attrs = { height: type };
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
          if (tween = collection[index].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery6._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery6.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery6.style(elem, prop);
          }
        }
        propTween = !jQuery6.isEmptyObject(props);
        if (!propTween && jQuery6.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery6.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery6.css(elem, "display");
              showHide([elem]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery6.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
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
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery6.style(elem, prop, orig[prop]);
              }
            });
          }
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
          hooks = jQuery6.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery6.Deferred().always(function() {
          delete tick.elem;
        }), tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length2) {
            return remaining;
          }
          if (!length2) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          }
          deferred.resolveWith(elem, [animation]);
          return false;
        }, animation = deferred.promise({
          elem,
          props: jQuery6.extend({}, properties),
          opts: jQuery6.extend(true, {
            specialEasing: {},
            easing: jQuery6.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end2) {
            var tween = jQuery6.Tween(
              elem,
              animation.opts,
              prop,
              end2,
              animation.opts.specialEasing[prop] || animation.opts.easing
            );
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
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
              jQuery6._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery6.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery6.fx.timer(
          jQuery6.extend(tick, {
            elem,
            anim: animation,
            queue: animation.opts.queue
          })
        );
        return animation;
      }
      jQuery6.Animation = jQuery6.extend(Animation, {
        tweeners: {
          "*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
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
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery6.speed = function(speed, easing, fn2) {
        var opt = speed && typeof speed === "object" ? jQuery6.extend({}, speed) : {
          complete: fn2 || !fn2 && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn2 && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery6.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery6.fx.speeds) {
              opt.duration = jQuery6.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery6.fx.speeds._default;
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery6.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery6.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery6.isEmptyObject(prop), optall = jQuery6.speed(speed, easing, callback), doAnimation = function() {
            var anim = Animation(this, jQuery6.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = void 0;
          }
          if (clearQueue) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery6.timers, data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery6.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery6.timers, length = queue ? queue.length : 0;
            data.finish = true;
            jQuery6.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery6.each(["toggle", "show", "hide"], function(_i, name) {
        var cssFn = jQuery6.fn[name];
        jQuery6.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery6.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(name, props) {
        jQuery6.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery6.timers = [];
      jQuery6.fx.tick = function() {
        var timer, i = 0, timers = jQuery6.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery6.fx.stop();
        }
        fxNow = void 0;
      };
      jQuery6.fx.timer = function(timer) {
        jQuery6.timers.push(timer);
        jQuery6.fx.start();
      };
      jQuery6.fx.interval = 13;
      jQuery6.fx.start = function() {
        if (inProgress) {
          return;
        }
        inProgress = true;
        schedule();
      };
      jQuery6.fx.stop = function() {
        inProgress = null;
      };
      jQuery6.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      };
      jQuery6.fn.delay = function(time, type) {
        time = jQuery6.fx ? jQuery6.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
          var timeout = window2.setTimeout(next, time);
          hooks.stop = function() {
            window2.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document2.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();
      var boolHook, attrHandle = jQuery6.expr.attrHandle;
      jQuery6.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery6.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery6.removeAttr(this, name);
          });
        }
      });
      jQuery6.extend({
        attr: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery6.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery6.isXMLDoc(elem)) {
            hooks = jQuery6.attrHooks[name.toLowerCase()] || (jQuery6.expr.match.bool.test(name) ? boolHook : void 0);
          }
          if (value !== void 0) {
            if (value === null) {
              jQuery6.removeAttr(elem, name);
              return;
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery6.find.attr(elem, name);
          return ret == null ? void 0 : ret;
        },
        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
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
        removeAttr: function(elem, value) {
          var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {
            jQuery6.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };
      jQuery6.each(jQuery6.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery6.find.attr;
        attrHandle[name] = function(elem, name2, isXML) {
          var ret, handle, lowercaseName = name2.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
      jQuery6.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery6.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery6.propFix[name] || name];
          });
        }
      });
      jQuery6.extend({
        prop: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery6.isXMLDoc(elem)) {
            name = jQuery6.propFix[name] || name;
            hooks = jQuery6.propHooks[name];
          }
          if (value !== void 0) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            return elem[name] = value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function(elem) {
              var tabindex = jQuery6.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10);
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
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
      if (!support.optSelected) {
        jQuery6.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
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
      jQuery6.each([
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
      ], function() {
        jQuery6.propFix[this.toLowerCase()] = this;
      });
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
      jQuery6.fn.extend({
        addClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery6(this).addClass(value.call(this, j, getClass(this)));
            });
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (cur.indexOf(" " + className + " ") < 0) {
                    cur += className + " ";
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        removeClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery6(this).removeClass(value.call(this, j, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  while (cur.indexOf(" " + className + " ") > -1) {
                    cur = cur.replace(" " + className + " ", " ");
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var classNames, className, i, self2, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
          if (isFunction(value)) {
            return this.each(function(i2) {
              jQuery6(this).toggleClass(
                value.call(this, i2, getClass(this), stateVal),
                stateVal
              );
            });
          }
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          classNames = classesToArray(value);
          return this.each(function() {
            if (isValidValue) {
              self2 = jQuery6(this);
              for (i = 0; i < classNames.length; i++) {
                className = classNames[i];
                if (self2.hasClass(className)) {
                  self2.removeClass(className);
                } else {
                  self2.addClass(className);
                }
              }
            } else if (value === void 0 || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute(
                  "class",
                  className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                );
              }
            }
          });
        },
        hasClass: function(selector) {
          var className, elem, i = 0;
          className = " " + selector + " ";
          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery6.fn.extend({
        val: function(value) {
          var hooks, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery6.valHooks[elem.type] || jQuery6.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                return ret;
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }
              return ret == null ? "" : ret;
            }
            return;
          }
          valueIsFunction = isFunction(value);
          return this.each(function(i) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (valueIsFunction) {
              val = value.call(this, i, jQuery6(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery6.map(val, function(value2) {
                return value2 == null ? "" : value2 + "";
              });
            }
            hooks = jQuery6.valHooks[this.type] || jQuery6.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
              this.value = val;
            }
          });
        }
      });
      jQuery6.extend({
        valHooks: {
          option: {
            get: function(elem) {
              var val = jQuery6.find.attr(elem, "value");
              return val != null ? val : (
                // Support: IE <=10 - 11 only
                // option.text throws exceptions (trac-14686, trac-14858)
                // Strip and collapse whitespace
                // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                stripAndCollapse(jQuery6.text(elem))
              );
            }
          },
          select: {
            get: function(elem) {
              var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max2 = one ? index + 1 : options.length;
              if (index < 0) {
                i = max2;
              } else {
                i = one ? index : 0;
              }
              for (; i < max2; i++) {
                option = options[i];
                if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery6(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet, option, options = elem.options, values = jQuery6.makeArray(value), i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery6.inArray(jQuery6.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });
      jQuery6.each(["radio", "checkbox"], function() {
        jQuery6.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery6.inArray(jQuery6(elem).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          jQuery6.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      var location2 = window2.location;
      var nonce = { guid: Date.now() };
      var rquery = /\?/;
      jQuery6.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = new window2.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
        }
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) {
          jQuery6.error("Invalid XML: " + (parserErrorElem ? jQuery6.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
          }).join("\n") : data));
        }
        return xml;
      };
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
      };
      jQuery6.extend(jQuery6.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document2;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery6.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery6.expando] ? event : new jQuery6.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = void 0;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [event] : jQuery6.makeArray(data, [event]);
          special = jQuery6.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document2)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery6.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }
                jQuery6.event.triggered = void 0;
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
        simulate: function(type, elem, event) {
          var e = jQuery6.extend(
            new jQuery6.Event(),
            event,
            {
              type,
              isSimulated: true
            }
          );
          jQuery6.event.trigger(e, null, elem);
        }
      });
      jQuery6.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery6.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery6.event.trigger(type, data, elem, true);
          }
        }
      });
      var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
          jQuery6.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) {
              add(prefix, v);
            } else {
              buildParams(
                prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                v,
                traditional,
                add
              );
            }
          });
        } else if (!traditional && toType2(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          add(prefix, obj);
        }
      }
      jQuery6.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) {
          return "";
        }
        if (Array.isArray(a) || a.jquery && !jQuery6.isPlainObject(a)) {
          jQuery6.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }
        return s.join("&");
      };
      jQuery6.fn.extend({
        serialize: function() {
          return jQuery6.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery6.prop(this, "elements");
            return elements ? jQuery6.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery6(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(_i, elem) {
            var val = jQuery6(this).val();
            if (val == null) {
              return null;
            }
            if (Array.isArray(val)) {
              return jQuery6.map(val, function(val2) {
                return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
              });
            }
            return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
          }).get();
        }
      });
      var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
      originAnchor.href = location2.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction(func)) {
            while (dataType = dataTypes[i++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery6.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery6.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== void 0) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }
        if (deep) {
          jQuery6.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === void 0) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
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
      jQuery6.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location2.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location2.protocol),
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
            "text xml": jQuery6.parseXML
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
        ajaxSetup: function(target, settings) {
          return settings ? (
            // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery6.ajaxSettings), settings)
          ) : (
            // Extending ajaxSettings
            ajaxExtend(jQuery6.ajaxSettings, target)
          );
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = void 0;
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery6.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery6(callbackContext) : jQuery6.event, deferred = jQuery6.Deferred(), completeDeferred = jQuery6.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(key) {
              var match;
              if (completed2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = responseHeaders[key.toLowerCase() + " "];
              }
              return match == null ? null : match.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return completed2 ? responseHeadersString : null;
            },
            // Caches the header
            setRequestHeader: function(name, value) {
              if (completed2 == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            // Overrides response content-type header
            overrideMimeType: function(type) {
              if (completed2 == null) {
                s.mimeType = type;
              }
              return this;
            },
            // Status-dependent callbacks
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed2) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            // Cancel the request
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
          if (s.crossDomain == null) {
            urlAnchor = document2.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery6.param(s.data, s.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed2) {
            return jqXHR;
          }
          fireGlobals = jQuery6.event && s.global;
          if (fireGlobals && jQuery6.active++ === 0) {
            jQuery6.event.trigger("ajaxStart");
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
            }
            s.url = cacheURL + uncached;
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }
          if (s.ifModified) {
            if (jQuery6.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery6.lastModified[cacheURL]);
            }
            if (jQuery6.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery6.etag[cacheURL]);
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader(
            "Accept",
            s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
          );
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }
            if (completed2) {
              return jqXHR;
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window2.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              completed2 = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (completed2) {
                throw e;
              }
              done(-1, e);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            if (completed2) {
              return;
            }
            completed2 = true;
            if (timeoutTimer) {
              window2.clearTimeout(timeoutTimer);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            if (!isSuccess && jQuery6.inArray("script", s.dataTypes) > -1 && jQuery6.inArray("json", s.dataTypes) < 0) {
              s.converters["text script"] = function() {
              };
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery6.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery6.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (fireGlobals) {
              globalEventContext.trigger(
                isSuccess ? "ajaxSuccess" : "ajaxError",
                [jqXHR, s, isSuccess ? success : error]
              );
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery6.active) {
                jQuery6.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery6.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery6.get(url, void 0, callback, "script");
        }
      });
      jQuery6.each(["get", "post"], function(_i, method) {
        jQuery6[method] = function(url, data, callback, type) {
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = void 0;
          }
          return jQuery6.ajax(jQuery6.extend({
            url,
            type: method,
            dataType: type,
            data,
            success: callback
          }, jQuery6.isPlainObject(url) && url));
        };
      });
      jQuery6.ajaxPrefilter(function(s) {
        var i;
        for (i in s.headers) {
          if (i.toLowerCase() === "content-type") {
            s.contentType = s.headers[i] || "";
          }
        }
      });
      jQuery6._evalUrl = function(url, options, doc) {
        return jQuery6.ajax({
          url,
          // Make this explicit, since user can override this through ajaxSetup (trac-11264)
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(response) {
            jQuery6.globalEval(response, options, doc);
          }
        });
      };
      jQuery6.fn.extend({
        wrapAll: function(html) {
          var wrap;
          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            }
            wrap = jQuery6(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html) {
          if (isFunction(html)) {
            return this.each(function(i) {
              jQuery6(this).wrapInner(html.call(this, i));
            });
          }
          return this.each(function() {
            var self2 = jQuery6(this), contents = self2.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self2.append(html);
            }
          });
        },
        wrap: function(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function(i) {
            jQuery6(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery6(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery6.expr.pseudos.hidden = function(elem) {
        return !jQuery6.expr.pseudos.visible(elem);
      };
      jQuery6.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery6.ajaxSettings.xhr = function() {
        try {
          return new window2.XMLHttpRequest();
        } catch (e) {
        }
      };
      var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, xhrSupported = jQuery6.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery6.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i, xhr = options.xhr();
              xhr.open(
                options.type,
                options.url,
                options.async,
                options.username,
                options.password
              );
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(
                          // File: protocol always yields status 0; see trac-8605, trac-14207
                          xhr.status,
                          xhr.statusText
                        );
                      }
                    } else {
                      complete(
                        xhrSuccessStatus[xhr.status] || xhr.status,
                        xhr.statusText,
                        // Support: IE <=9 only
                        // IE9 has no XHR2 but throws on binary (trac-11426)
                        // For XHR2 non-text, let the caller handle it (gh-2498)
                        (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                        xhr.getAllResponseHeaders()
                      );
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== void 0) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window2.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                if (callback) {
                  throw e;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery6.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });
      jQuery6.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery6.globalEval(text);
            return text;
          }
        }
      });
      jQuery6.ajaxPrefilter("script", function(s) {
        if (s.cache === void 0) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });
      jQuery6.ajaxTransport("script", function(s) {
        if (s.crossDomain || s.scriptAttrs) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery6("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document2.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery6.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || jQuery6.expando + "_" + nonce.guid++;
          this[callback] = true;
          return callback;
        }
      });
      jQuery6.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery6.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s.dataTypes[0] = "json";
          overwritten = window2[callbackName];
          window2[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === void 0) {
              jQuery6(window2).removeProp(callbackName);
            } else {
              window2[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = void 0;
          });
          return "script";
        }
      });
      support.createHTMLDocument = function() {
        var body = document2.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }();
      jQuery6.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document2.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document2.location.href;
            context.head.appendChild(base);
          } else {
            context = document2;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery6(scripts).remove();
        }
        return jQuery6.merge([], parsed.childNodes);
      };
      jQuery6.fn.load = function(url, params, callback) {
        var selector, type, response, self2 = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction(params)) {
          callback = params;
          params = void 0;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self2.length > 0) {
          jQuery6.ajax({
            url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self2.html(selector ? (
              // If a selector was specified, locate the right elements in a dummy div
              // Exclude scripts to avoid IE 'Permission Denied' errors
              jQuery6("<div>").append(jQuery6.parseHTML(responseText)).find(selector)
            ) : (
              // Otherwise use the full result
              responseText
            ));
          }).always(callback && function(jqXHR, status) {
            self2.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }
        return this;
      };
      jQuery6.expr.pseudos.animated = function(elem) {
        return jQuery6.grep(jQuery6.timers, function(fn2) {
          return elem === fn2.elem;
        }).length;
      };
      jQuery6.offset = {
        setOffset: function(elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery6.css(elem, "position"), curElem = jQuery6(elem), props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery6.css(elem, "top");
          curCSSLeft = jQuery6.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (isFunction(options)) {
            options = options.call(elem, i, jQuery6.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }
      };
      jQuery6.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
          if (arguments.length) {
            return options === void 0 ? this : this.each(function(i) {
              jQuery6.offset.setOffset(this, options, i);
            });
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
          }
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
          if (!this[0]) {
            return;
          }
          var offsetParent, offset2, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
          if (jQuery6.css(elem, "position") === "fixed") {
            offset2 = elem.getBoundingClientRect();
          } else {
            offset2 = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery6.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery6(offsetParent).offset();
              parentOffset.top += jQuery6.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery6.css(offsetParent, "borderLeftWidth", true);
            }
          }
          return {
            top: offset2.top - parentOffset.top - jQuery6.css(elem, "marginTop", true),
            left: offset2.left - parentOffset.left - jQuery6.css(elem, "marginLeft", true)
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
        offsetParent: function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery6.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery6.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
        var top2 = "pageYOffset" === prop;
        jQuery6.fn[method] = function(val) {
          return access(this, function(elem, method2, val2) {
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val2 === void 0) {
              return win ? win[prop] : elem[method2];
            }
            if (win) {
              win.scrollTo(
                !top2 ? val2 : win.pageXOffset,
                top2 ? val2 : win.pageYOffset
              );
            } else {
              elem[method2] = val2;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery6.each(["top", "left"], function(_i, prop) {
        jQuery6.cssHooks[prop] = addGetHookIf(
          support.pixelPosition,
          function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery6(elem).position()[prop] + "px" : computed;
            }
          }
        );
      });
      jQuery6.each({ Height: "height", Width: "width" }, function(name, type) {
        jQuery6.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function(defaultExtra, funcName) {
          jQuery6.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type2, value2) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(
                  elem.body["scroll" + name],
                  doc["scroll" + name],
                  elem.body["offset" + name],
                  doc["offset" + name],
                  doc["client" + name]
                );
              }
              return value2 === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                jQuery6.css(elem, type2, extra)
              ) : (
                // Set width or height on the element
                jQuery6.style(elem, type2, value2, extra)
              );
            }, type, chainable ? margin : void 0, chainable);
          };
        });
      });
      jQuery6.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(_i, type) {
        jQuery6.fn[type] = function(fn2) {
          return this.on(type, fn2);
        };
      });
      jQuery6.fn.extend({
        bind: function(types, data, fn2) {
          return this.on(types, null, data, fn2);
        },
        unbind: function(types, fn2) {
          return this.off(types, null, fn2);
        },
        delegate: function(selector, types, data, fn2) {
          return this.on(types, selector, data, fn2);
        },
        undelegate: function(selector, types, fn2) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn2);
        },
        hover: function(fnOver, fnOut) {
          return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
        }
      });
      jQuery6.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(_i, name) {
          jQuery6.fn[name] = function(data, fn2) {
            return arguments.length > 0 ? this.on(name, null, data, fn2) : this.trigger(name);
          };
        }
      );
      var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      jQuery6.proxy = function(fn2, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn2[context];
          context = fn2;
          fn2 = tmp;
        }
        if (!isFunction(fn2)) {
          return void 0;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn2.apply(context || this, args.concat(slice.call(arguments)));
        };
        proxy.guid = fn2.guid = fn2.guid || jQuery6.guid++;
        return proxy;
      };
      jQuery6.holdReady = function(hold) {
        if (hold) {
          jQuery6.readyWait++;
        } else {
          jQuery6.ready(true);
        }
      };
      jQuery6.isArray = Array.isArray;
      jQuery6.parseJSON = JSON.parse;
      jQuery6.nodeName = nodeName;
      jQuery6.isFunction = isFunction;
      jQuery6.isWindow = isWindow;
      jQuery6.camelCase = camelCase;
      jQuery6.type = toType2;
      jQuery6.now = Date.now;
      jQuery6.isNumeric = function(obj) {
        var type = jQuery6.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
      };
      jQuery6.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
      };
      if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
          return jQuery6;
        });
      }
      var _jQuery = window2.jQuery, _$ = window2.$;
      jQuery6.noConflict = function(deep) {
        if (window2.$ === jQuery6) {
          window2.$ = _$;
        }
        if (deep && window2.jQuery === jQuery6) {
          window2.jQuery = _jQuery;
        }
        return jQuery6;
      };
      if (typeof noGlobal === "undefined") {
        window2.jQuery = window2.$ = jQuery6;
      }
      return jQuery6;
    });
  }
});

// node_modules/datatables.net/js/dataTables.js
var require_dataTables = __commonJS({
  "node_modules/datatables.net/js/dataTables.js"(exports, module) {
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define(["jquery"], function($6) {
          return factory($6, window, document);
        });
      } else if (typeof exports === "object") {
        var jq = require_jquery();
        if (typeof window === "undefined") {
          module.exports = function(root, $6) {
            if (!root) {
              root = window;
            }
            if (!$6) {
              $6 = jq(root);
            }
            return factory($6, root, root.document);
          };
        } else {
          module.exports = factory(jq, window, window.document);
        }
      } else {
        window.DataTable = factory(jQuery, window, document);
      }
    })(function($6, window2, document2) {
      "use strict";
      var DataTable3 = function(selector, options) {
        if (DataTable3.factory(selector, options)) {
          return DataTable3;
        }
        if (this instanceof DataTable3) {
          return $6(selector).DataTable(options);
        } else {
          options = selector;
        }
        var _that = this;
        var emptyInit = options === void 0;
        var len = this.length;
        if (emptyInit) {
          options = {};
        }
        this.api = function() {
          return new _Api(this);
        };
        this.each(function() {
          var o = {};
          var oInit = len > 1 ? (
            // optimisation for single table case
            _fnExtend(o, options, true)
          ) : options;
          var i2 = 0, iLen;
          var sId = this.getAttribute("id");
          var defaults = DataTable3.defaults;
          var $this = $6(this);
          if (this.nodeName.toLowerCase() != "table") {
            _fnLog(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
            return;
          }
          $6(this).trigger("options.dt", oInit);
          _fnCompatOpts(defaults);
          _fnCompatCols(defaults.column);
          _fnCamelToHungarian(defaults, defaults, true);
          _fnCamelToHungarian(defaults.column, defaults.column, true);
          _fnCamelToHungarian(defaults, $6.extend(oInit, $this.data()), true);
          var allSettings = DataTable3.settings;
          for (i2 = 0, iLen = allSettings.length; i2 < iLen; i2++) {
            var s = allSettings[i2];
            if (s.nTable == this || s.nTHead && s.nTHead.parentNode == this || s.nTFoot && s.nTFoot.parentNode == this) {
              var bRetrieve = oInit.bRetrieve !== void 0 ? oInit.bRetrieve : defaults.bRetrieve;
              var bDestroy = oInit.bDestroy !== void 0 ? oInit.bDestroy : defaults.bDestroy;
              if (emptyInit || bRetrieve) {
                return s.oInstance;
              } else if (bDestroy) {
                new DataTable3.Api(s).destroy();
                break;
              } else {
                _fnLog(s, 0, "Cannot reinitialise DataTable", 3);
                return;
              }
            }
            if (s.sTableId == this.id) {
              allSettings.splice(i2, 1);
              break;
            }
          }
          if (sId === null || sId === "") {
            sId = "DataTables_Table_" + DataTable3.ext._unique++;
            this.id = sId;
          }
          var oSettings = $6.extend(true, {}, DataTable3.models.oSettings, {
            "sDestroyWidth": $this[0].style.width,
            "sInstance": sId,
            "sTableId": sId,
            colgroup: $6("<colgroup>").prependTo(this),
            fastData: function(row, column, type) {
              return _fnGetCellData(oSettings, row, column, type);
            }
          });
          oSettings.nTable = this;
          oSettings.oInit = oInit;
          allSettings.push(oSettings);
          oSettings.api = new _Api(oSettings);
          oSettings.oInstance = _that.length === 1 ? _that : $this.dataTable();
          _fnCompatOpts(oInit);
          if (oInit.aLengthMenu && !oInit.iDisplayLength) {
            oInit.iDisplayLength = Array.isArray(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0][0] : $6.isPlainObject(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0].value : oInit.aLengthMenu[0];
          }
          oInit = _fnExtend($6.extend(true, {}, defaults), oInit);
          _fnMap(oSettings.oFeatures, oInit, [
            "bPaginate",
            "bLengthChange",
            "bFilter",
            "bSort",
            "bSortMulti",
            "bInfo",
            "bProcessing",
            "bAutoWidth",
            "bSortClasses",
            "bServerSide",
            "bDeferRender"
          ]);
          _fnMap(oSettings, oInit, [
            "ajax",
            "fnFormatNumber",
            "sServerMethod",
            "aaSorting",
            "aaSortingFixed",
            "aLengthMenu",
            "sPaginationType",
            "iStateDuration",
            "bSortCellsTop",
            "iTabIndex",
            "sDom",
            "fnStateLoadCallback",
            "fnStateSaveCallback",
            "renderer",
            "searchDelay",
            "rowId",
            "caption",
            "layout",
            "orderDescReverse",
            "typeDetect",
            ["iCookieDuration", "iStateDuration"],
            // backwards compat
            ["oSearch", "oPreviousSearch"],
            ["aoSearchCols", "aoPreSearchCols"],
            ["iDisplayLength", "_iDisplayLength"]
          ]);
          _fnMap(oSettings.oScroll, oInit, [
            ["sScrollX", "sX"],
            ["sScrollXInner", "sXInner"],
            ["sScrollY", "sY"],
            ["bScrollCollapse", "bCollapse"]
          ]);
          _fnMap(oSettings.oLanguage, oInit, "fnInfoCallback");
          _fnCallbackReg(oSettings, "aoDrawCallback", oInit.fnDrawCallback);
          _fnCallbackReg(oSettings, "aoStateSaveParams", oInit.fnStateSaveParams);
          _fnCallbackReg(oSettings, "aoStateLoadParams", oInit.fnStateLoadParams);
          _fnCallbackReg(oSettings, "aoStateLoaded", oInit.fnStateLoaded);
          _fnCallbackReg(oSettings, "aoRowCallback", oInit.fnRowCallback);
          _fnCallbackReg(oSettings, "aoRowCreatedCallback", oInit.fnCreatedRow);
          _fnCallbackReg(oSettings, "aoHeaderCallback", oInit.fnHeaderCallback);
          _fnCallbackReg(oSettings, "aoFooterCallback", oInit.fnFooterCallback);
          _fnCallbackReg(oSettings, "aoInitComplete", oInit.fnInitComplete);
          _fnCallbackReg(oSettings, "aoPreDrawCallback", oInit.fnPreDrawCallback);
          oSettings.rowIdFn = _fnGetObjectDataFn(oInit.rowId);
          _fnBrowserDetect(oSettings);
          var oClasses = oSettings.oClasses;
          $6.extend(oClasses, DataTable3.ext.classes, oInit.oClasses);
          $this.addClass(oClasses.table);
          if (!oSettings.oFeatures.bPaginate) {
            oInit.iDisplayStart = 0;
          }
          if (oSettings.iInitDisplayStart === void 0) {
            oSettings.iInitDisplayStart = oInit.iDisplayStart;
            oSettings._iDisplayStart = oInit.iDisplayStart;
          }
          var defer = oInit.iDeferLoading;
          if (defer !== null) {
            oSettings.deferLoading = true;
            var tmp = Array.isArray(defer);
            oSettings._iRecordsDisplay = tmp ? defer[0] : defer;
            oSettings._iRecordsTotal = tmp ? defer[1] : defer;
          }
          var columnsInit = [];
          var thead = this.getElementsByTagName("thead");
          var initHeaderLayout = _fnDetectHeader(oSettings, thead[0]);
          if (oInit.aoColumns) {
            columnsInit = oInit.aoColumns;
          } else if (initHeaderLayout.length) {
            for (i2 = 0, iLen = initHeaderLayout[0].length; i2 < iLen; i2++) {
              columnsInit.push(null);
            }
          }
          for (i2 = 0, iLen = columnsInit.length; i2 < iLen; i2++) {
            _fnAddColumn(oSettings);
          }
          _fnApplyColumnDefs(oSettings, oInit.aoColumnDefs, columnsInit, initHeaderLayout, function(iCol, oDef) {
            _fnColumnOptions(oSettings, iCol, oDef);
          });
          var rowOne = $this.children("tbody").find("tr").eq(0);
          if (rowOne.length) {
            var a = function(cell, name) {
              return cell.getAttribute("data-" + name) !== null ? name : null;
            };
            $6(rowOne[0]).children("th, td").each(function(i3, cell) {
              var col = oSettings.aoColumns[i3];
              if (!col) {
                _fnLog(oSettings, 0, "Incorrect column count", 18);
              }
              if (col.mData === i3) {
                var sort = a(cell, "sort") || a(cell, "order");
                var filter = a(cell, "filter") || a(cell, "search");
                if (sort !== null || filter !== null) {
                  col.mData = {
                    _: i3 + ".display",
                    sort: sort !== null ? i3 + ".@data-" + sort : void 0,
                    type: sort !== null ? i3 + ".@data-" + sort : void 0,
                    filter: filter !== null ? i3 + ".@data-" + filter : void 0
                  };
                  col._isArrayHost = true;
                  _fnColumnOptions(oSettings, i3);
                }
              }
            });
          }
          _fnCallbackReg(oSettings, "aoDrawCallback", _fnSaveState);
          var features = oSettings.oFeatures;
          if (oInit.bStateSave) {
            features.bStateSave = true;
          }
          if (oInit.aaSorting === void 0) {
            var sorting = oSettings.aaSorting;
            for (i2 = 0, iLen = sorting.length; i2 < iLen; i2++) {
              sorting[i2][1] = oSettings.aoColumns[i2].asSorting[0];
            }
          }
          _fnSortingClasses(oSettings);
          _fnCallbackReg(oSettings, "aoDrawCallback", function() {
            if (oSettings.bSorted || _fnDataSource(oSettings) === "ssp" || features.bDeferRender) {
              _fnSortingClasses(oSettings);
            }
          });
          var caption = $this.children("caption");
          if (oSettings.caption) {
            if (caption.length === 0) {
              caption = $6("<caption/>").appendTo($this);
            }
            caption.html(oSettings.caption);
          }
          if (caption.length) {
            caption[0]._captionSide = caption.css("caption-side");
            oSettings.captionNode = caption[0];
          }
          if (thead.length === 0) {
            thead = $6("<thead/>").appendTo($this);
          }
          oSettings.nTHead = thead[0];
          var tbody = $this.children("tbody");
          if (tbody.length === 0) {
            tbody = $6("<tbody/>").insertAfter(thead);
          }
          oSettings.nTBody = tbody[0];
          var tfoot = $this.children("tfoot");
          if (tfoot.length === 0) {
            tfoot = $6("<tfoot/>").appendTo($this);
          }
          oSettings.nTFoot = tfoot[0];
          oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
          oSettings.bInitialised = true;
          var oLanguage = oSettings.oLanguage;
          $6.extend(true, oLanguage, oInit.oLanguage);
          if (oLanguage.sUrl) {
            $6.ajax({
              dataType: "json",
              url: oLanguage.sUrl,
              success: function(json) {
                _fnCamelToHungarian(defaults.oLanguage, json);
                $6.extend(true, oLanguage, json, oSettings.oInit.oLanguage);
                _fnCallbackFire(oSettings, null, "i18n", [oSettings], true);
                _fnInitialise(oSettings);
              },
              error: function() {
                _fnLog(oSettings, 0, "i18n file loading error", 21);
                _fnInitialise(oSettings);
              }
            });
          } else {
            _fnCallbackFire(oSettings, null, "i18n", [oSettings], true);
            _fnInitialise(oSettings);
          }
        });
        _that = null;
        return this;
      };
      DataTable3.ext = _ext = {
        /**
         * Buttons. For use with the Buttons extension for DataTables. This is
         * defined here so other extensions can define buttons regardless of load
         * order. It is _not_ used by DataTables core.
         *
         *  @type object
         *  @default {}
         */
        buttons: {},
        /**
         * Element class names
         *
         *  @type object
         *  @default {}
         */
        classes: {},
        /**
         * DataTables build type (expanded by the download builder)
         *
         *  @type string
         */
        builder: "-source-",
        /**
         * Error reporting.
         * 
         * How should DataTables report an error. Can take the value 'alert',
         * 'throw', 'none' or a function.
         *
         *  @type string|function
         *  @default alert
         */
        errMode: "alert",
        /**
         * Legacy so v1 plug-ins don't throw js errors on load
         */
        feature: [],
        /**
         * Feature plug-ins.
         * 
         * This is an object of callbacks which provide the features for DataTables
         * to be initialised via the `layout` option.
         */
        features: {},
        /**
         * Row searching.
         * 
         * This method of searching is complimentary to the default type based
         * searching, and a lot more comprehensive as it allows you complete control
         * over the searching logic. Each element in this array is a function
         * (parameters described below) that is called for every row in the table,
         * and your logic decides if it should be included in the searching data set
         * or not.
         *
         * Searching functions have the following input parameters:
         *
         * 1. `{object}` DataTables settings object: see
         *    {@link DataTable.models.oSettings}
         * 2. `{array|object}` Data for the row to be processed (same as the
         *    original format that was passed in as the data source, or an array
         *    from a DOM data source
         * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
         *    can be useful to retrieve the `TR` element if you need DOM interaction.
         *
         * And the following return is expected:
         *
         * * {boolean} Include the row in the searched result set (true) or not
         *   (false)
         *
         * Note that as with the main search ability in DataTables, technically this
         * is "filtering", since it is subtractive. However, for consistency in
         * naming we call it searching here.
         *
         *  @type array
         *  @default []
         *
         *  @example
         *    // The following example shows custom search being applied to the
         *    // fourth column (i.e. the data[3] index) based on two input values
         *    // from the end-user, matching the data in a certain range.
         *    $.fn.dataTable.ext.search.push(
         *      function( settings, data, dataIndex ) {
         *        var min = document.getElementById('min').value * 1;
         *        var max = document.getElementById('max').value * 1;
         *        var version = data[3] == "-" ? 0 : data[3]*1;
         *
         *        if ( min == "" && max == "" ) {
         *          return true;
         *        }
         *        else if ( min == "" && version < max ) {
         *          return true;
         *        }
         *        else if ( min < version && "" == max ) {
         *          return true;
         *        }
         *        else if ( min < version && version < max ) {
         *          return true;
         *        }
         *        return false;
         *      }
         *    );
         */
        search: [],
        /**
         * Selector extensions
         *
         * The `selector` option can be used to extend the options available for the
         * selector modifier options (`selector-modifier` object data type) that
         * each of the three built in selector types offer (row, column and cell +
         * their plural counterparts). For example the Select extension uses this
         * mechanism to provide an option to select only rows, columns and cells
         * that have been marked as selected by the end user (`{selected: true}`),
         * which can be used in conjunction with the existing built in selector
         * options.
         *
         * Each property is an array to which functions can be pushed. The functions
         * take three attributes:
         *
         * * Settings object for the host table
         * * Options object (`selector-modifier` object type)
         * * Array of selected item indexes
         *
         * The return is an array of the resulting item indexes after the custom
         * selector has been applied.
         *
         *  @type object
         */
        selector: {
          cell: [],
          column: [],
          row: []
        },
        /**
         * Legacy configuration options. Enable and disable legacy options that
         * are available in DataTables.
         *
         *  @type object
         */
        legacy: {
          /**
           * Enable / disable DataTables 1.9 compatible server-side processing
           * requests
           *
           *  @type boolean
           *  @default null
           */
          ajax: null
        },
        /**
         * Pagination plug-in methods.
         * 
         * Each entry in this object is a function and defines which buttons should
         * be shown by the pagination rendering method that is used for the table:
         * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
         * buttons are displayed in the document, while the functions here tell it
         * what buttons to display. This is done by returning an array of button
         * descriptions (what each button will do).
         *
         * Pagination types (the four built in options and any additional plug-in
         * options defined here) can be used through the `paginationType`
         * initialisation parameter.
         *
         * The functions defined take two parameters:
         *
         * 1. `{int} page` The current page index
         * 2. `{int} pages` The number of pages in the table
         *
         * Each function is expected to return an array where each element of the
         * array can be one of:
         *
         * * `first` - Jump to first page when activated
         * * `last` - Jump to last page when activated
         * * `previous` - Show previous page when activated
         * * `next` - Show next page when activated
         * * `{int}` - Show page of the index given
         * * `{array}` - A nested array containing the above elements to add a
         *   containing 'DIV' element (might be useful for styling).
         *
         * Note that DataTables v1.9- used this object slightly differently whereby
         * an object with two functions would be defined for each plug-in. That
         * ability is still supported by DataTables 1.10+ to provide backwards
         * compatibility, but this option of use is now decremented and no longer
         * documented in DataTables 1.10+.
         *
         *  @type object
         *  @default {}
         *
         *  @example
         *    // Show previous, next and current page buttons only
         *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
         *      return [ 'previous', page, 'next' ];
         *    };
         */
        pager: {},
        renderer: {
          pageButton: {},
          header: {}
        },
        /**
         * Ordering plug-ins - custom data source
         * 
         * The extension options for ordering of data available here is complimentary
         * to the default type based ordering that DataTables typically uses. It
         * allows much greater control over the the data that is being used to
         * order a column, but is necessarily therefore more complex.
         * 
         * This type of ordering is useful if you want to do ordering based on data
         * live from the DOM (for example the contents of an 'input' element) rather
         * than just the static string that DataTables knows of.
         * 
         * The way these plug-ins work is that you create an array of the values you
         * wish to be ordering for the column in question and then return that
         * array. The data in the array much be in the index order of the rows in
         * the table (not the currently ordering order!). Which order data gathering
         * function is run here depends on the `dt-init columns.orderDataType`
         * parameter that is used for the column (if any).
         *
         * The functions defined take two parameters:
         *
         * 1. `{object}` DataTables settings object: see
         *    {@link DataTable.models.oSettings}
         * 2. `{int}` Target column index
         *
         * Each function is expected to return an array:
         *
         * * `{array}` Data for the column to be ordering upon
         *
         *  @type array
         *
         *  @example
         *    // Ordering using `input` node values
         *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
         *    {
         *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
         *        return $('input', td).val();
         *      } );
         *    }
         */
        order: {},
        /**
         * Type based plug-ins.
         *
         * Each column in DataTables has a type assigned to it, either by automatic
         * detection or by direct assignment using the `type` option for the column.
         * The type of a column will effect how it is ordering and search (plug-ins
         * can also make use of the column type if required).
         *
         * @namespace
         */
        type: {
          /**
           * Automatic column class assignment
           */
          className: {},
          /**
           * Type detection functions.
           *
           * The functions defined in this object are used to automatically detect
           * a column's type, making initialisation of DataTables super easy, even
           * when complex data is in the table.
           *
           * The functions defined take two parameters:
           *
              *  1. `{*}` Data from the column cell to be analysed
              *  2. `{settings}` DataTables settings object. This can be used to
              *     perform context specific type detection - for example detection
              *     based on language settings such as using a comma for a decimal
              *     place. Generally speaking the options from the settings will not
              *     be required
           *
           * Each function is expected to return:
           *
           * * `{string|null}` Data type detected, or null if unknown (and thus
           *   pass it on to the other type detection functions.
           *
           *  @type array
           *
           *  @example
           *    // Currency type detection plug-in:
           *    $.fn.dataTable.ext.type.detect.push(
           *      function ( data, settings ) {
           *        // Check the numeric part
           *        if ( ! data.substring(1).match(/[0-9]/) ) {
           *          return null;
           *        }
           *
           *        // Check prefixed by currency
           *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
           *          return 'currency';
           *        }
           *        return null;
           *      }
           *    );
           */
          detect: [],
          /**
           * Automatic renderer assignment
           */
          render: {},
          /**
           * Type based search formatting.
           *
           * The type based searching functions can be used to pre-format the
           * data to be search on. For example, it can be used to strip HTML
           * tags or to de-format telephone numbers for numeric only searching.
           *
           * Note that is a search is not defined for a column of a given type,
           * no search formatting will be performed.
           * 
           * Pre-processing of searching data plug-ins - When you assign the sType
           * for a column (or have it automatically detected for you by DataTables
           * or a type detection plug-in), you will typically be using this for
           * custom sorting, but it can also be used to provide custom searching
           * by allowing you to pre-processing the data and returning the data in
           * the format that should be searched upon. This is done by adding
           * functions this object with a parameter name which matches the sType
           * for that target column. This is the corollary of <i>afnSortData</i>
           * for searching data.
           *
           * The functions defined take a single parameter:
           *
              *  1. `{*}` Data from the column cell to be prepared for searching
           *
           * Each function is expected to return:
           *
           * * `{string|null}` Formatted string that will be used for the searching.
           *
           *  @type object
           *  @default {}
           *
           *  @example
           *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
           *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
           *    }
           */
          search: {},
          /**
           * Type based ordering.
           *
           * The column type tells DataTables what ordering to apply to the table
           * when a column is sorted upon. The order for each type that is defined,
           * is defined by the functions available in this object.
           *
           * Each ordering option can be described by three properties added to
           * this object:
           *
           * * `{type}-pre` - Pre-formatting function
           * * `{type}-asc` - Ascending order function
           * * `{type}-desc` - Descending order function
           *
           * All three can be used together, only `{type}-pre` or only
           * `{type}-asc` and `{type}-desc` together. It is generally recommended
           * that only `{type}-pre` is used, as this provides the optimal
           * implementation in terms of speed, although the others are provided
           * for compatibility with existing Javascript sort functions.
           *
           * `{type}-pre`: Functions defined take a single parameter:
           *
              *  1. `{*}` Data from the column cell to be prepared for ordering
           *
           * And return:
           *
           * * `{*}` Data to be sorted upon
           *
           * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
           * functions, taking two parameters:
           *
              *  1. `{*}` Data to compare to the second parameter
              *  2. `{*}` Data to compare to the first parameter
           *
           * And returning:
           *
           * * `{*}` Ordering match: <0 if first parameter should be sorted lower
           *   than the second parameter, ===0 if the two parameters are equal and
           *   >0 if the first parameter should be sorted height than the second
           *   parameter.
           * 
           *  @type object
           *  @default {}
           *
           *  @example
           *    // Numeric ordering of formatted numbers with a pre-formatter
           *    $.extend( $.fn.dataTable.ext.type.order, {
           *      "string-pre": function(x) {
           *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
           *        return parseFloat( a );
           *      }
           *    } );
           *
           *  @example
           *    // Case-sensitive string ordering, with no pre-formatting method
           *    $.extend( $.fn.dataTable.ext.order, {
           *      "string-case-asc": function(x,y) {
           *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
           *      },
           *      "string-case-desc": function(x,y) {
           *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
           *      }
           *    } );
           */
          order: {}
        },
        /**
         * Unique DataTables instance counter
         *
         * @type int
         * @private
         */
        _unique: 0,
        //
        // Depreciated
        // The following properties are retained for backwards compatibility only.
        // The should not be used in new projects and will be removed in a future
        // version
        //
        /**
         * Version check function.
         *  @type function
         *  @depreciated Since 1.10
         */
        fnVersionCheck: DataTable3.fnVersionCheck,
        /**
         * Index for what 'this' index API functions should use
         *  @type int
         *  @deprecated Since v1.10
         */
        iApiIndex: 0,
        /**
         * Software version
         *  @type string
         *  @deprecated Since v1.10
         */
        sVersion: DataTable3.version
      };
      $6.extend(_ext, {
        afnFiltering: _ext.search,
        aTypes: _ext.type.detect,
        ofnSearch: _ext.type.search,
        oSort: _ext.type.order,
        afnSortData: _ext.order,
        aoFeatures: _ext.feature,
        oStdClasses: _ext.classes,
        oPagination: _ext.pager
      });
      $6.extend(DataTable3.ext.classes, {
        container: "dt-container",
        empty: {
          row: "dt-empty"
        },
        info: {
          container: "dt-info"
        },
        layout: {
          row: "dt-layout-row",
          cell: "dt-layout-cell",
          tableRow: "dt-layout-table",
          tableCell: "",
          start: "dt-layout-start",
          end: "dt-layout-end",
          full: "dt-layout-full"
        },
        length: {
          container: "dt-length",
          select: "dt-input"
        },
        order: {
          canAsc: "dt-orderable-asc",
          canDesc: "dt-orderable-desc",
          isAsc: "dt-ordering-asc",
          isDesc: "dt-ordering-desc",
          none: "dt-orderable-none",
          position: "sorting_"
        },
        processing: {
          container: "dt-processing"
        },
        scrolling: {
          body: "dt-scroll-body",
          container: "dt-scroll",
          footer: {
            self: "dt-scroll-foot",
            inner: "dt-scroll-footInner"
          },
          header: {
            self: "dt-scroll-head",
            inner: "dt-scroll-headInner"
          }
        },
        search: {
          container: "dt-search",
          input: "dt-input"
        },
        table: "dataTable",
        tbody: {
          cell: "",
          row: ""
        },
        thead: {
          cell: "",
          row: ""
        },
        tfoot: {
          cell: "",
          row: ""
        },
        paging: {
          active: "current",
          button: "dt-paging-button",
          container: "dt-paging",
          disabled: "disabled",
          nav: ""
        }
      });
      var _ext;
      var _Api;
      var _api_register;
      var _api_registerPlural;
      var _re_dic = {};
      var _re_new_lines = /[\r\n\u2028]/g;
      var _re_html = /<([^>]*>)/g;
      var _max_str_len = Math.pow(2, 28);
      var _re_date = /^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/;
      var _re_escape_regex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g");
      var _re_formatted_numeric = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;
      var _empty = function(d) {
        return !d || d === true || d === "-" ? true : false;
      };
      var _intVal = function(s) {
        var integer = parseInt(s, 10);
        return !isNaN(integer) && isFinite(s) ? integer : null;
      };
      var _numToDecimal = function(num2, decimalPoint) {
        if (!_re_dic[decimalPoint]) {
          _re_dic[decimalPoint] = new RegExp(_fnEscapeRegex(decimalPoint), "g");
        }
        return typeof num2 === "string" && decimalPoint !== "." ? num2.replace(/\./g, "").replace(_re_dic[decimalPoint], ".") : num2;
      };
      var _isNumber = function(d, decimalPoint, formatted, allowEmpty) {
        var type = typeof d;
        var strType = type === "string";
        if (type === "number" || type === "bigint") {
          return true;
        }
        if (allowEmpty && _empty(d)) {
          return true;
        }
        if (decimalPoint && strType) {
          d = _numToDecimal(d, decimalPoint);
        }
        if (formatted && strType) {
          d = d.replace(_re_formatted_numeric, "");
        }
        return !isNaN(parseFloat(d)) && isFinite(d);
      };
      var _isHtml = function(d) {
        return _empty(d) || typeof d === "string";
      };
      var _htmlNumeric = function(d, decimalPoint, formatted, allowEmpty) {
        if (allowEmpty && _empty(d)) {
          return true;
        }
        if (typeof d === "string" && d.match(/<(input|select)/i)) {
          return null;
        }
        var html = _isHtml(d);
        return !html ? null : _isNumber(_stripHtml(d), decimalPoint, formatted, allowEmpty) ? true : null;
      };
      var _pluck = function(a, prop, prop2) {
        var out = [];
        var i2 = 0, ien = a.length;
        if (prop2 !== void 0) {
          for (; i2 < ien; i2++) {
            if (a[i2] && a[i2][prop]) {
              out.push(a[i2][prop][prop2]);
            }
          }
        } else {
          for (; i2 < ien; i2++) {
            if (a[i2]) {
              out.push(a[i2][prop]);
            }
          }
        }
        return out;
      };
      var _pluck_order = function(a, order2, prop, prop2) {
        var out = [];
        var i2 = 0, ien = order2.length;
        if (prop2 !== void 0) {
          for (; i2 < ien; i2++) {
            if (a[order2[i2]] && a[order2[i2]][prop]) {
              out.push(a[order2[i2]][prop][prop2]);
            }
          }
        } else {
          for (; i2 < ien; i2++) {
            if (a[order2[i2]]) {
              out.push(a[order2[i2]][prop]);
            }
          }
        }
        return out;
      };
      var _range = function(len, start2) {
        var out = [];
        var end2;
        if (start2 === void 0) {
          start2 = 0;
          end2 = len;
        } else {
          end2 = start2;
          start2 = len;
        }
        for (var i2 = start2; i2 < end2; i2++) {
          out.push(i2);
        }
        return out;
      };
      var _removeEmpty = function(a) {
        var out = [];
        for (var i2 = 0, ien = a.length; i2 < ien; i2++) {
          if (a[i2]) {
            out.push(a[i2]);
          }
        }
        return out;
      };
      var _stripHtml = function(input) {
        if (!input || typeof input !== "string") {
          return input;
        }
        if (input.length > _max_str_len) {
          throw new Error("Exceeded max str len");
        }
        var previous;
        input = input.replace(_re_html, "");
        do {
          previous = input;
          input = input.replace(/<script/i, "");
        } while (input !== previous);
        return previous;
      };
      var _escapeHtml = function(d) {
        if (Array.isArray(d)) {
          d = d.join(",");
        }
        return typeof d === "string" ? d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : d;
      };
      var _normalize = function(str, both) {
        if (typeof str !== "string") {
          return str;
        }
        var res = str.normalize ? str.normalize("NFD") : str;
        return res.length !== str.length ? (both === true ? str + " " : "") + res.replace(/[\u0300-\u036f]/g, "") : res;
      };
      var _areAllUnique = function(src) {
        if (src.length < 2) {
          return true;
        }
        var sorted = src.slice().sort();
        var last = sorted[0];
        for (var i2 = 1, ien = sorted.length; i2 < ien; i2++) {
          if (sorted[i2] === last) {
            return false;
          }
          last = sorted[i2];
        }
        return true;
      };
      var _unique = function(src) {
        if (Array.from && Set) {
          return Array.from(new Set(src));
        }
        if (_areAllUnique(src)) {
          return src.slice();
        }
        var out = [], val, i2, ien = src.length, j, k = 0;
        again: for (i2 = 0; i2 < ien; i2++) {
          val = src[i2];
          for (j = 0; j < k; j++) {
            if (out[j] === val) {
              continue again;
            }
          }
          out.push(val);
          k++;
        }
        return out;
      };
      var _flatten = function(out, val) {
        if (Array.isArray(val)) {
          for (var i2 = 0; i2 < val.length; i2++) {
            _flatten(out, val[i2]);
          }
        } else {
          out.push(val);
        }
        return out;
      };
      function _addClass(el, name) {
        if (name) {
          name.split(" ").forEach(function(n) {
            if (n) {
              el.classList.add(n);
            }
          });
        }
      }
      DataTable3.util = {
        /**
         * Return a string with diacritic characters decomposed
         * @param {*} mixed Function or string to normalize
         * @param {*} both Return original string and the normalized string
         * @returns String or undefined
         */
        diacritics: function(mixed, both) {
          var type = typeof mixed;
          if (type !== "function") {
            return _normalize(mixed, both);
          }
          _normalize = mixed;
        },
        /**
         * Debounce a function
         *
         * @param {function} fn Function to be called
         * @param {integer} freq Call frequency in mS
         * @return {function} Wrapped function
         */
        debounce: function(fn2, timeout) {
          var timer;
          return function() {
            var that = this;
            var args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function() {
              fn2.apply(that, args);
            }, timeout || 250);
          };
        },
        /**
         * Throttle the calls to a function. Arguments and context are maintained
         * for the throttled function.
         *
         * @param {function} fn Function to be called
         * @param {integer} freq Call frequency in mS
         * @return {function} Wrapped function
         */
        throttle: function(fn2, freq) {
          var frequency = freq !== void 0 ? freq : 200, last, timer;
          return function() {
            var that = this, now2 = +/* @__PURE__ */ new Date(), args = arguments;
            if (last && now2 < last + frequency) {
              clearTimeout(timer);
              timer = setTimeout(function() {
                last = void 0;
                fn2.apply(that, args);
              }, frequency);
            } else {
              last = now2;
              fn2.apply(that, args);
            }
          };
        },
        /**
         * Escape a string such that it can be used in a regular expression
         *
         *  @param {string} val string to escape
         *  @returns {string} escaped string
         */
        escapeRegex: function(val) {
          return val.replace(_re_escape_regex, "\\$1");
        },
        /**
         * Create a function that will write to a nested object or array
         * @param {*} source JSON notation string
         * @returns Write function
         */
        set: function(source) {
          if ($6.isPlainObject(source)) {
            return DataTable3.util.set(source._);
          } else if (source === null) {
            return function() {
            };
          } else if (typeof source === "function") {
            return function(data, val, meta) {
              source(data, "set", val, meta);
            };
          } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
            var setData = function(data, val, src) {
              var a = _fnSplitObjNotation(src), b;
              var aLast = a[a.length - 1];
              var arrayNotation, funcNotation, o, innerSrc;
              for (var i2 = 0, iLen = a.length - 1; i2 < iLen; i2++) {
                if (a[i2] === "__proto__" || a[i2] === "constructor") {
                  throw new Error("Cannot set prototype values");
                }
                arrayNotation = a[i2].match(__reArray);
                funcNotation = a[i2].match(__reFn);
                if (arrayNotation) {
                  a[i2] = a[i2].replace(__reArray, "");
                  data[a[i2]] = [];
                  b = a.slice();
                  b.splice(0, i2 + 1);
                  innerSrc = b.join(".");
                  if (Array.isArray(val)) {
                    for (var j = 0, jLen = val.length; j < jLen; j++) {
                      o = {};
                      setData(o, val[j], innerSrc);
                      data[a[i2]].push(o);
                    }
                  } else {
                    data[a[i2]] = val;
                  }
                  return;
                } else if (funcNotation) {
                  a[i2] = a[i2].replace(__reFn, "");
                  data = data[a[i2]](val);
                }
                if (data[a[i2]] === null || data[a[i2]] === void 0) {
                  data[a[i2]] = {};
                }
                data = data[a[i2]];
              }
              if (aLast.match(__reFn)) {
                data = data[aLast.replace(__reFn, "")](val);
              } else {
                data[aLast.replace(__reArray, "")] = val;
              }
            };
            return function(data, val) {
              return setData(data, val, source);
            };
          } else {
            return function(data, val) {
              data[source] = val;
            };
          }
        },
        /**
         * Create a function that will read nested objects from arrays, based on JSON notation
         * @param {*} source JSON notation string
         * @returns Value read
         */
        get: function(source) {
          if ($6.isPlainObject(source)) {
            var o = {};
            $6.each(source, function(key, val) {
              if (val) {
                o[key] = DataTable3.util.get(val);
              }
            });
            return function(data, type, row, meta) {
              var t = o[type] || o._;
              return t !== void 0 ? t(data, type, row, meta) : data;
            };
          } else if (source === null) {
            return function(data) {
              return data;
            };
          } else if (typeof source === "function") {
            return function(data, type, row, meta) {
              return source(data, type, row, meta);
            };
          } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
            var fetchData = function(data, type, src) {
              var arrayNotation, funcNotation, out, innerSrc;
              if (src !== "") {
                var a = _fnSplitObjNotation(src);
                for (var i2 = 0, iLen = a.length; i2 < iLen; i2++) {
                  arrayNotation = a[i2].match(__reArray);
                  funcNotation = a[i2].match(__reFn);
                  if (arrayNotation) {
                    a[i2] = a[i2].replace(__reArray, "");
                    if (a[i2] !== "") {
                      data = data[a[i2]];
                    }
                    out = [];
                    a.splice(0, i2 + 1);
                    innerSrc = a.join(".");
                    if (Array.isArray(data)) {
                      for (var j = 0, jLen = data.length; j < jLen; j++) {
                        out.push(fetchData(data[j], type, innerSrc));
                      }
                    }
                    var join = arrayNotation[0].substring(1, arrayNotation[0].length - 1);
                    data = join === "" ? out : out.join(join);
                    break;
                  } else if (funcNotation) {
                    a[i2] = a[i2].replace(__reFn, "");
                    data = data[a[i2]]();
                    continue;
                  }
                  if (data === null || data[a[i2]] === null) {
                    return null;
                  } else if (data === void 0 || data[a[i2]] === void 0) {
                    return void 0;
                  }
                  data = data[a[i2]];
                }
              }
              return data;
            };
            return function(data, type) {
              return fetchData(data, type, source);
            };
          } else {
            return function(data) {
              return data[source];
            };
          }
        },
        stripHtml: function(mixed) {
          var type = typeof mixed;
          if (type === "function") {
            _stripHtml = mixed;
            return;
          } else if (type === "string") {
            return _stripHtml(mixed);
          }
          return mixed;
        },
        escapeHtml: function(mixed) {
          var type = typeof mixed;
          if (type === "function") {
            _escapeHtml = mixed;
            return;
          } else if (type === "string" || Array.isArray(mixed)) {
            return _escapeHtml(mixed);
          }
          return mixed;
        },
        unique: _unique
      };
      function _fnHungarianMap(o) {
        var hungarian = "a aa ai ao as b fn i m o s ", match, newKey, map = {};
        $6.each(o, function(key) {
          match = key.match(/^([^A-Z]+?)([A-Z])/);
          if (match && hungarian.indexOf(match[1] + " ") !== -1) {
            newKey = key.replace(match[0], match[2].toLowerCase());
            map[newKey] = key;
            if (match[1] === "o") {
              _fnHungarianMap(o[key]);
            }
          }
        });
        o._hungarianMap = map;
      }
      function _fnCamelToHungarian(src, user, force) {
        if (!src._hungarianMap) {
          _fnHungarianMap(src);
        }
        var hungarianKey;
        $6.each(user, function(key) {
          hungarianKey = src._hungarianMap[key];
          if (hungarianKey !== void 0 && (force || user[hungarianKey] === void 0)) {
            if (hungarianKey.charAt(0) === "o") {
              if (!user[hungarianKey]) {
                user[hungarianKey] = {};
              }
              $6.extend(true, user[hungarianKey], user[key]);
              _fnCamelToHungarian(src[hungarianKey], user[hungarianKey], force);
            } else {
              user[hungarianKey] = user[key];
            }
          }
        });
      }
      var _fnCompatMap = function(o, knew, old) {
        if (o[knew] !== void 0) {
          o[old] = o[knew];
        }
      };
      function _fnCompatOpts(init2) {
        _fnCompatMap(init2, "ordering", "bSort");
        _fnCompatMap(init2, "orderMulti", "bSortMulti");
        _fnCompatMap(init2, "orderClasses", "bSortClasses");
        _fnCompatMap(init2, "orderCellsTop", "bSortCellsTop");
        _fnCompatMap(init2, "order", "aaSorting");
        _fnCompatMap(init2, "orderFixed", "aaSortingFixed");
        _fnCompatMap(init2, "paging", "bPaginate");
        _fnCompatMap(init2, "pagingType", "sPaginationType");
        _fnCompatMap(init2, "pageLength", "iDisplayLength");
        _fnCompatMap(init2, "searching", "bFilter");
        if (typeof init2.sScrollX === "boolean") {
          init2.sScrollX = init2.sScrollX ? "100%" : "";
        }
        if (typeof init2.scrollX === "boolean") {
          init2.scrollX = init2.scrollX ? "100%" : "";
        }
        var searchCols = init2.aoSearchCols;
        if (searchCols) {
          for (var i2 = 0, ien = searchCols.length; i2 < ien; i2++) {
            if (searchCols[i2]) {
              _fnCamelToHungarian(DataTable3.models.oSearch, searchCols[i2]);
            }
          }
        }
        if (init2.serverSide && !init2.searchDelay) {
          init2.searchDelay = 400;
        }
      }
      function _fnCompatCols(init2) {
        _fnCompatMap(init2, "orderable", "bSortable");
        _fnCompatMap(init2, "orderData", "aDataSort");
        _fnCompatMap(init2, "orderSequence", "asSorting");
        _fnCompatMap(init2, "orderDataType", "sortDataType");
        var dataSort = init2.aDataSort;
        if (typeof dataSort === "number" && !Array.isArray(dataSort)) {
          init2.aDataSort = [dataSort];
        }
      }
      function _fnBrowserDetect(settings) {
        if (!DataTable3.__browser) {
          var browser = {};
          DataTable3.__browser = browser;
          var n = $6("<div/>").css({
            position: "fixed",
            top: 0,
            left: -1 * window2.pageXOffset,
            // allow for scrolling
            height: 1,
            width: 1,
            overflow: "hidden"
          }).append(
            $6("<div/>").css({
              position: "absolute",
              top: 1,
              left: 1,
              width: 100,
              overflow: "scroll"
            }).append(
              $6("<div/>").css({
                width: "100%",
                height: 10
              })
            )
          ).appendTo("body");
          var outer = n.children();
          var inner = outer.children();
          browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;
          browser.bScrollbarLeft = Math.round(inner.offset().left) !== 1;
          n.remove();
        }
        $6.extend(settings.oBrowser, DataTable3.__browser);
        settings.oScroll.iBarWidth = DataTable3.__browser.barWidth;
      }
      function _fnAddColumn(oSettings) {
        var oDefaults = DataTable3.defaults.column;
        var iCol = oSettings.aoColumns.length;
        var oCol = $6.extend({}, DataTable3.models.oColumn, oDefaults, {
          "aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
          "mData": oDefaults.mData ? oDefaults.mData : iCol,
          idx: iCol,
          searchFixed: {},
          colEl: $6("<col>").attr("data-dt-column", iCol)
        });
        oSettings.aoColumns.push(oCol);
        var searchCols = oSettings.aoPreSearchCols;
        searchCols[iCol] = $6.extend({}, DataTable3.models.oSearch, searchCols[iCol]);
      }
      function _fnColumnOptions(oSettings, iCol, oOptions) {
        var oCol = oSettings.aoColumns[iCol];
        if (oOptions !== void 0 && oOptions !== null) {
          _fnCompatCols(oOptions);
          _fnCamelToHungarian(DataTable3.defaults.column, oOptions, true);
          if (oOptions.mDataProp !== void 0 && !oOptions.mData) {
            oOptions.mData = oOptions.mDataProp;
          }
          if (oOptions.sType) {
            oCol._sManualType = oOptions.sType;
          }
          if (oOptions.className && !oOptions.sClass) {
            oOptions.sClass = oOptions.className;
          }
          var origClass = oCol.sClass;
          $6.extend(oCol, oOptions);
          _fnMap(oCol, oOptions, "sWidth", "sWidthOrig");
          if (origClass !== oCol.sClass) {
            oCol.sClass = origClass + " " + oCol.sClass;
          }
          if (oOptions.iDataSort !== void 0) {
            oCol.aDataSort = [oOptions.iDataSort];
          }
          _fnMap(oCol, oOptions, "aDataSort");
        }
        var mDataSrc = oCol.mData;
        var mData = _fnGetObjectDataFn(mDataSrc);
        if (oCol.mRender && Array.isArray(oCol.mRender)) {
          var copy = oCol.mRender.slice();
          var name = copy.shift();
          oCol.mRender = DataTable3.render[name].apply(window2, copy);
        }
        oCol._render = oCol.mRender ? _fnGetObjectDataFn(oCol.mRender) : null;
        var attrTest = function(src) {
          return typeof src === "string" && src.indexOf("@") !== -1;
        };
        oCol._bAttrSrc = $6.isPlainObject(mDataSrc) && (attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter));
        oCol._setter = null;
        oCol.fnGetData = function(rowData, type, meta) {
          var innerData = mData(rowData, type, void 0, meta);
          return oCol._render && type ? oCol._render(innerData, type, rowData, meta) : innerData;
        };
        oCol.fnSetData = function(rowData, val, meta) {
          return _fnSetObjectDataFn(mDataSrc)(rowData, val, meta);
        };
        if (typeof mDataSrc !== "number" && !oCol._isArrayHost) {
          oSettings._rowReadObject = true;
        }
        if (!oSettings.oFeatures.bSort) {
          oCol.bSortable = false;
        }
      }
      function _fnAdjustColumnSizing(settings) {
        _fnCalculateColumnWidths(settings);
        _fnColumnSizes(settings);
        var scroll = settings.oScroll;
        if (scroll.sY !== "" || scroll.sX !== "") {
          _fnScrollDraw(settings);
        }
        _fnCallbackFire(settings, null, "column-sizing", [settings]);
      }
      function _fnColumnSizes(settings) {
        var cols = settings.aoColumns;
        for (var i2 = 0; i2 < cols.length; i2++) {
          var width = _fnColumnsSumWidth(settings, [i2], false, false);
          cols[i2].colEl.css("width", width);
          if (settings.oScroll.sX) {
            cols[i2].colEl.css("min-width", width);
          }
        }
      }
      function _fnVisibleToColumnIndex(oSettings, iMatch) {
        var aiVis = _fnGetColumns(oSettings, "bVisible");
        return typeof aiVis[iMatch] === "number" ? aiVis[iMatch] : null;
      }
      function _fnColumnIndexToVisible(oSettings, iMatch) {
        var aiVis = _fnGetColumns(oSettings, "bVisible");
        var iPos = aiVis.indexOf(iMatch);
        return iPos !== -1 ? iPos : null;
      }
      function _fnVisbleColumns(settings) {
        var layout = settings.aoHeader;
        var columns = settings.aoColumns;
        var vis = 0;
        if (layout.length) {
          for (var i2 = 0, ien = layout[0].length; i2 < ien; i2++) {
            if (columns[i2].bVisible && $6(layout[0][i2].cell).css("display") !== "none") {
              vis++;
            }
          }
        }
        return vis;
      }
      function _fnGetColumns(oSettings, sParam) {
        var a = [];
        oSettings.aoColumns.map(function(val, i2) {
          if (val[sParam]) {
            a.push(i2);
          }
        });
        return a;
      }
      function _typeResult(typeDetect, res) {
        return res === true ? typeDetect._name : res;
      }
      function _fnColumnTypes(settings) {
        var columns = settings.aoColumns;
        var data = settings.aoData;
        var types = DataTable3.ext.type.detect;
        var i2, ien, j, jen, k, ken;
        var col, detectedType, cache;
        for (i2 = 0, ien = columns.length; i2 < ien; i2++) {
          col = columns[i2];
          cache = [];
          if (!col.sType && col._sManualType) {
            col.sType = col._sManualType;
          } else if (!col.sType) {
            if (!settings.typeDetect) {
              return;
            }
            for (j = 0, jen = types.length; j < jen; j++) {
              var typeDetect = types[j];
              var oneOf = typeDetect.oneOf;
              var allOf = typeDetect.allOf || typeDetect;
              var init2 = typeDetect.init;
              var one = false;
              detectedType = null;
              if (init2) {
                detectedType = _typeResult(typeDetect, init2(settings, col, i2));
                if (detectedType) {
                  col.sType = detectedType;
                  break;
                }
              }
              for (k = 0, ken = data.length; k < ken; k++) {
                if (!data[k]) {
                  continue;
                }
                if (cache[k] === void 0) {
                  cache[k] = _fnGetCellData(settings, k, i2, "type");
                }
                if (oneOf && !one) {
                  one = _typeResult(typeDetect, oneOf(cache[k], settings));
                }
                detectedType = _typeResult(typeDetect, allOf(cache[k], settings));
                if (!detectedType && j !== types.length - 3) {
                  break;
                }
                if (detectedType === "html" && !_empty(cache[k])) {
                  break;
                }
              }
              if (oneOf && one && detectedType || !oneOf && detectedType) {
                col.sType = detectedType;
                break;
              }
            }
            if (!col.sType) {
              col.sType = "string";
            }
          }
          var autoClass = _ext.type.className[col.sType];
          if (autoClass) {
            _columnAutoClass(settings.aoHeader, i2, autoClass);
            _columnAutoClass(settings.aoFooter, i2, autoClass);
          }
          var renderer = _ext.type.render[col.sType];
          if (renderer && !col._render) {
            col._render = DataTable3.util.get(renderer);
            _columnAutoRender(settings, i2);
          }
        }
      }
      function _columnAutoRender(settings, colIdx) {
        var data = settings.aoData;
        for (var i2 = 0; i2 < data.length; i2++) {
          if (data[i2].nTr) {
            var display = _fnGetCellData(settings, i2, colIdx, "display");
            data[i2].displayData[colIdx] = display;
            _fnWriteCell(data[i2].anCells[colIdx], display);
          }
        }
      }
      function _columnAutoClass(container, colIdx, className) {
        container.forEach(function(row) {
          if (row[colIdx] && row[colIdx].unique) {
            _addClass(row[colIdx].cell, className);
          }
        });
      }
      function _fnApplyColumnDefs(oSettings, aoColDefs, aoCols, headerLayout, fn2) {
        var i2, iLen, j, jLen, k, kLen, def;
        var columns = oSettings.aoColumns;
        if (aoCols) {
          for (i2 = 0, iLen = aoCols.length; i2 < iLen; i2++) {
            if (aoCols[i2] && aoCols[i2].name) {
              columns[i2].sName = aoCols[i2].name;
            }
          }
        }
        if (aoColDefs) {
          for (i2 = aoColDefs.length - 1; i2 >= 0; i2--) {
            def = aoColDefs[i2];
            var aTargets = def.target !== void 0 ? def.target : def.targets !== void 0 ? def.targets : def.aTargets;
            if (!Array.isArray(aTargets)) {
              aTargets = [aTargets];
            }
            for (j = 0, jLen = aTargets.length; j < jLen; j++) {
              var target = aTargets[j];
              if (typeof target === "number" && target >= 0) {
                while (columns.length <= target) {
                  _fnAddColumn(oSettings);
                }
                fn2(target, def);
              } else if (typeof target === "number" && target < 0) {
                fn2(columns.length + target, def);
              } else if (typeof target === "string") {
                for (k = 0, kLen = columns.length; k < kLen; k++) {
                  if (target === "_all") {
                    fn2(k, def);
                  } else if (target.indexOf(":name") !== -1) {
                    if (columns[k].sName === target.replace(":name", "")) {
                      fn2(k, def);
                    }
                  } else {
                    headerLayout.forEach(function(row) {
                      if (row[k]) {
                        var cell = $6(row[k].cell);
                        if (target.match(/^[a-z][\w-]*$/i)) {
                          target = "." + target;
                        }
                        if (cell.is(target)) {
                          fn2(k, def);
                        }
                      }
                    });
                  }
                }
              }
            }
          }
        }
        if (aoCols) {
          for (i2 = 0, iLen = aoCols.length; i2 < iLen; i2++) {
            fn2(i2, aoCols[i2]);
          }
        }
      }
      function _fnColumnsSumWidth(settings, targets, original, incVisible) {
        if (!Array.isArray(targets)) {
          targets = _fnColumnsFromHeader(targets);
        }
        var sum = 0;
        var unit;
        var columns = settings.aoColumns;
        for (var i2 = 0, ien = targets.length; i2 < ien; i2++) {
          var column = columns[targets[i2]];
          var definedWidth = original ? column.sWidthOrig : column.sWidth;
          if (!incVisible && column.bVisible === false) {
            continue;
          }
          if (definedWidth === null || definedWidth === void 0) {
            return null;
          } else if (typeof definedWidth === "number") {
            unit = "px";
            sum += definedWidth;
          } else {
            var matched = definedWidth.match(/([\d\.]+)([^\d]*)/);
            if (matched) {
              sum += matched[1] * 1;
              unit = matched.length === 3 ? matched[2] : "px";
            }
          }
        }
        return sum + unit;
      }
      function _fnColumnsFromHeader(cell) {
        var attr = $6(cell).closest("[data-dt-column]").attr("data-dt-column");
        if (!attr) {
          return [];
        }
        return attr.split(",").map(function(val) {
          return val * 1;
        });
      }
      function _fnAddData(settings, dataIn, tr, tds) {
        var rowIdx = settings.aoData.length;
        var rowModel = $6.extend(true, {}, DataTable3.models.oRow, {
          src: tr ? "dom" : "data",
          idx: rowIdx
        });
        rowModel._aData = dataIn;
        settings.aoData.push(rowModel);
        var columns = settings.aoColumns;
        for (var i2 = 0, iLen = columns.length; i2 < iLen; i2++) {
          columns[i2].sType = null;
        }
        settings.aiDisplayMaster.push(rowIdx);
        var id = settings.rowIdFn(dataIn);
        if (id !== void 0) {
          settings.aIds[id] = rowModel;
        }
        if (tr || !settings.oFeatures.bDeferRender) {
          _fnCreateTr(settings, rowIdx, tr, tds);
        }
        return rowIdx;
      }
      function _fnAddTr(settings, trs) {
        var row;
        if (!(trs instanceof $6)) {
          trs = $6(trs);
        }
        return trs.map(function(i2, el) {
          row = _fnGetRowElements(settings, el);
          return _fnAddData(settings, row.data, el, row.cells);
        });
      }
      function _fnGetCellData(settings, rowIdx, colIdx, type) {
        if (type === "search") {
          type = "filter";
        } else if (type === "order") {
          type = "sort";
        }
        var row = settings.aoData[rowIdx];
        if (!row) {
          return void 0;
        }
        var draw = settings.iDraw;
        var col = settings.aoColumns[colIdx];
        var rowData = row._aData;
        var defaultContent = col.sDefaultContent;
        var cellData = col.fnGetData(rowData, type, {
          settings,
          row: rowIdx,
          col: colIdx
        });
        if (type !== "display" && cellData && typeof cellData === "object" && cellData.nodeName) {
          cellData = cellData.innerHTML;
        }
        if (cellData === void 0) {
          if (settings.iDrawError != draw && defaultContent === null) {
            _fnLog(settings, 0, "Requested unknown parameter " + (typeof col.mData == "function" ? "{function}" : "'" + col.mData + "'") + " for row " + rowIdx + ", column " + colIdx, 4);
            settings.iDrawError = draw;
          }
          return defaultContent;
        }
        if ((cellData === rowData || cellData === null) && defaultContent !== null && type !== void 0) {
          cellData = defaultContent;
        } else if (typeof cellData === "function") {
          return cellData.call(rowData);
        }
        if (cellData === null && type === "display") {
          return "";
        }
        if (type === "filter") {
          var fomatters = DataTable3.ext.type.search;
          if (fomatters[col.sType]) {
            cellData = fomatters[col.sType](cellData);
          }
        }
        return cellData;
      }
      function _fnSetCellData(settings, rowIdx, colIdx, val) {
        var col = settings.aoColumns[colIdx];
        var rowData = settings.aoData[rowIdx]._aData;
        col.fnSetData(rowData, val, {
          settings,
          row: rowIdx,
          col: colIdx
        });
      }
      function _fnWriteCell(td, val) {
        if (val && typeof val === "object" && val.nodeName) {
          $6(td).empty().append(val);
        } else {
          td.innerHTML = val;
        }
      }
      var __reArray = /\[.*?\]$/;
      var __reFn = /\(\)$/;
      function _fnSplitObjNotation(str) {
        var parts = str.match(/(\\.|[^.])+/g) || [""];
        return parts.map(function(s) {
          return s.replace(/\\\./g, ".");
        });
      }
      var _fnGetObjectDataFn = DataTable3.util.get;
      var _fnSetObjectDataFn = DataTable3.util.set;
      function _fnGetDataMaster(settings) {
        return _pluck(settings.aoData, "_aData");
      }
      function _fnClearTable(settings) {
        settings.aoData.length = 0;
        settings.aiDisplayMaster.length = 0;
        settings.aiDisplay.length = 0;
        settings.aIds = {};
      }
      function _fnInvalidate(settings, rowIdx, src, colIdx) {
        var row = settings.aoData[rowIdx];
        var i2, ien;
        row._aSortData = null;
        row._aFilterData = null;
        row.displayData = null;
        if (src === "dom" || (!src || src === "auto") && row.src === "dom") {
          row._aData = _fnGetRowElements(
            settings,
            row,
            colIdx,
            colIdx === void 0 ? void 0 : row._aData
          ).data;
        } else {
          var cells = row.anCells;
          var display = _fnGetRowDisplay(settings, rowIdx);
          if (cells) {
            if (colIdx !== void 0) {
              _fnWriteCell(cells[colIdx], display[colIdx]);
            } else {
              for (i2 = 0, ien = cells.length; i2 < ien; i2++) {
                _fnWriteCell(cells[i2], display[i2]);
              }
            }
          }
        }
        var cols = settings.aoColumns;
        if (colIdx !== void 0) {
          cols[colIdx].sType = null;
          cols[colIdx].maxLenString = null;
        } else {
          for (i2 = 0, ien = cols.length; i2 < ien; i2++) {
            cols[i2].sType = null;
            cols[i2].maxLenString = null;
          }
          _fnRowAttributes(settings, row);
        }
      }
      function _fnGetRowElements(settings, row, colIdx, d) {
        var tds = [], td = row.firstChild, name, col, i2 = 0, contents, columns = settings.aoColumns, objectRead = settings._rowReadObject;
        d = d !== void 0 ? d : objectRead ? {} : [];
        var attr = function(str, td2) {
          if (typeof str === "string") {
            var idx = str.indexOf("@");
            if (idx !== -1) {
              var attr2 = str.substring(idx + 1);
              var setter = _fnSetObjectDataFn(str);
              setter(d, td2.getAttribute(attr2));
            }
          }
        };
        var cellProcess = function(cell) {
          if (colIdx === void 0 || colIdx === i2) {
            col = columns[i2];
            contents = cell.innerHTML.trim();
            if (col && col._bAttrSrc) {
              var setter = _fnSetObjectDataFn(col.mData._);
              setter(d, contents);
              attr(col.mData.sort, cell);
              attr(col.mData.type, cell);
              attr(col.mData.filter, cell);
            } else {
              if (objectRead) {
                if (!col._setter) {
                  col._setter = _fnSetObjectDataFn(col.mData);
                }
                col._setter(d, contents);
              } else {
                d[i2] = contents;
              }
            }
          }
          i2++;
        };
        if (td) {
          while (td) {
            name = td.nodeName.toUpperCase();
            if (name == "TD" || name == "TH") {
              cellProcess(td);
              tds.push(td);
            }
            td = td.nextSibling;
          }
        } else {
          tds = row.anCells;
          for (var j = 0, jen = tds.length; j < jen; j++) {
            cellProcess(tds[j]);
          }
        }
        var rowNode = row.firstChild ? row : row.nTr;
        if (rowNode) {
          var id = rowNode.getAttribute("id");
          if (id) {
            _fnSetObjectDataFn(settings.rowId)(d, id);
          }
        }
        return {
          data: d,
          cells: tds
        };
      }
      function _fnGetRowDisplay(settings, rowIdx) {
        var rowModal = settings.aoData[rowIdx];
        var columns = settings.aoColumns;
        if (!rowModal.displayData) {
          rowModal.displayData = [];
          for (var colIdx = 0, len = columns.length; colIdx < len; colIdx++) {
            rowModal.displayData.push(
              _fnGetCellData(settings, rowIdx, colIdx, "display")
            );
          }
        }
        return rowModal.displayData;
      }
      function _fnCreateTr(oSettings, iRow, nTrIn, anTds) {
        var row = oSettings.aoData[iRow], rowData = row._aData, cells = [], nTr, nTd, oCol, i2, iLen, create, trClass = oSettings.oClasses.tbody.row;
        if (row.nTr === null) {
          nTr = nTrIn || document2.createElement("tr");
          row.nTr = nTr;
          row.anCells = cells;
          _addClass(nTr, trClass);
          nTr._DT_RowIndex = iRow;
          _fnRowAttributes(oSettings, row);
          for (i2 = 0, iLen = oSettings.aoColumns.length; i2 < iLen; i2++) {
            oCol = oSettings.aoColumns[i2];
            create = nTrIn && anTds[i2] ? false : true;
            nTd = create ? document2.createElement(oCol.sCellType) : anTds[i2];
            if (!nTd) {
              _fnLog(oSettings, 0, "Incorrect column count", 18);
            }
            nTd._DT_CellIndex = {
              row: iRow,
              column: i2
            };
            cells.push(nTd);
            var display = _fnGetRowDisplay(oSettings, iRow);
            if (create || (oCol.mRender || oCol.mData !== i2) && (!$6.isPlainObject(oCol.mData) || oCol.mData._ !== i2 + ".display")) {
              _fnWriteCell(nTd, display[i2]);
            }
            _addClass(nTd, oCol.sClass);
            if (oCol.bVisible && create) {
              nTr.appendChild(nTd);
            } else if (!oCol.bVisible && !create) {
              nTd.parentNode.removeChild(nTd);
            }
            if (oCol.fnCreatedCell) {
              oCol.fnCreatedCell.call(
                oSettings.oInstance,
                nTd,
                _fnGetCellData(oSettings, iRow, i2),
                rowData,
                iRow,
                i2
              );
            }
          }
          _fnCallbackFire(oSettings, "aoRowCreatedCallback", "row-created", [nTr, rowData, iRow, cells]);
        } else {
          _addClass(row.nTr, trClass);
        }
      }
      function _fnRowAttributes(settings, row) {
        var tr = row.nTr;
        var data = row._aData;
        if (tr) {
          var id = settings.rowIdFn(data);
          if (id) {
            tr.id = id;
          }
          if (data.DT_RowClass) {
            var a = data.DT_RowClass.split(" ");
            row.__rowc = row.__rowc ? _unique(row.__rowc.concat(a)) : a;
            $6(tr).removeClass(row.__rowc.join(" ")).addClass(data.DT_RowClass);
          }
          if (data.DT_RowAttr) {
            $6(tr).attr(data.DT_RowAttr);
          }
          if (data.DT_RowData) {
            $6(tr).data(data.DT_RowData);
          }
        }
      }
      function _fnBuildHead(settings, side) {
        var classes = settings.oClasses;
        var columns = settings.aoColumns;
        var i2, ien, row;
        var target = side === "header" ? settings.nTHead : settings.nTFoot;
        var titleProp = side === "header" ? "sTitle" : side;
        if (!target) {
          return;
        }
        if (side === "header" || _pluck(settings.aoColumns, titleProp).join("")) {
          row = $6("tr", target);
          if (!row.length) {
            row = $6("<tr/>").appendTo(target);
          }
          if (row.length === 1) {
            var cellCount = 0;
            $6("td, th", row).each(function() {
              cellCount += this.colSpan;
            });
            for (i2 = cellCount, ien = columns.length; i2 < ien; i2++) {
              $6("<th/>").html(columns[i2][titleProp] || "").appendTo(row);
            }
          }
        }
        var detected = _fnDetectHeader(settings, target, true);
        if (side === "header") {
          settings.aoHeader = detected;
          $6("tr", target).addClass(classes.thead.row);
        } else {
          settings.aoFooter = detected;
          $6("tr", target).addClass(classes.tfoot.row);
        }
        $6(target).children("tr").children("th, td").each(function() {
          _fnRenderer(settings, side)(
            settings,
            $6(this),
            classes
          );
        });
      }
      function _fnHeaderLayout(settings, source, incColumns) {
        var row, column, cell;
        var local = [];
        var structure = [];
        var columns = settings.aoColumns;
        var columnCount = columns.length;
        var rowspan, colspan;
        if (!source) {
          return;
        }
        if (!incColumns) {
          incColumns = _range(columnCount).filter(function(idx) {
            return columns[idx].bVisible;
          });
        }
        for (row = 0; row < source.length; row++) {
          local[row] = source[row].slice().filter(function(cell2, i2) {
            return incColumns.includes(i2);
          });
          structure.push([]);
        }
        for (row = 0; row < local.length; row++) {
          for (column = 0; column < local[row].length; column++) {
            rowspan = 1;
            colspan = 1;
            if (structure[row][column] === void 0) {
              cell = local[row][column].cell;
              while (local[row + rowspan] !== void 0 && local[row][column].cell == local[row + rowspan][column].cell) {
                structure[row + rowspan][column] = null;
                rowspan++;
              }
              while (local[row][column + colspan] !== void 0 && local[row][column].cell == local[row][column + colspan].cell) {
                for (var k = 0; k < rowspan; k++) {
                  structure[row + k][column + colspan] = null;
                }
                colspan++;
              }
              var titleSpan = $6("span.dt-column-title", cell);
              structure[row][column] = {
                cell,
                colspan,
                rowspan,
                title: titleSpan.length ? titleSpan.html() : $6(cell).html()
              };
            }
          }
        }
        return structure;
      }
      function _fnDrawHead(settings, source) {
        var layout = _fnHeaderLayout(settings, source);
        var tr, n;
        for (var row = 0; row < source.length; row++) {
          tr = source[row].row;
          if (tr) {
            while (n = tr.firstChild) {
              tr.removeChild(n);
            }
          }
          for (var column = 0; column < layout[row].length; column++) {
            var point = layout[row][column];
            if (point) {
              $6(point.cell).appendTo(tr).attr("rowspan", point.rowspan).attr("colspan", point.colspan);
            }
          }
        }
      }
      function _fnDraw(oSettings, ajaxComplete) {
        _fnStart(oSettings);
        var aPreDraw = _fnCallbackFire(oSettings, "aoPreDrawCallback", "preDraw", [oSettings]);
        if (aPreDraw.indexOf(false) !== -1) {
          _fnProcessingDisplay(oSettings, false);
          return;
        }
        var anRows = [];
        var iRowCount = 0;
        var bServerSide = _fnDataSource(oSettings) == "ssp";
        var aiDisplay = oSettings.aiDisplay;
        var iDisplayStart = oSettings._iDisplayStart;
        var iDisplayEnd = oSettings.fnDisplayEnd();
        var columns = oSettings.aoColumns;
        var body = $6(oSettings.nTBody);
        oSettings.bDrawing = true;
        if (oSettings.deferLoading) {
          oSettings.deferLoading = false;
          oSettings.iDraw++;
          _fnProcessingDisplay(oSettings, false);
        } else if (!bServerSide) {
          oSettings.iDraw++;
        } else if (!oSettings.bDestroying && !ajaxComplete) {
          if (oSettings.iDraw === 0) {
            body.empty().append(_emptyRow(oSettings));
          }
          _fnAjaxUpdate(oSettings);
          return;
        }
        if (aiDisplay.length !== 0) {
          var iStart = bServerSide ? 0 : iDisplayStart;
          var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
          for (var j = iStart; j < iEnd; j++) {
            var iDataIndex = aiDisplay[j];
            var aoData = oSettings.aoData[iDataIndex];
            if (aoData.nTr === null) {
              _fnCreateTr(oSettings, iDataIndex);
            }
            var nRow = aoData.nTr;
            for (var i2 = 0; i2 < columns.length; i2++) {
              var col = columns[i2];
              var td = aoData.anCells[i2];
              _addClass(td, _ext.type.className[col.sType]);
              _addClass(td, oSettings.oClasses.tbody.cell);
            }
            _fnCallbackFire(
              oSettings,
              "aoRowCallback",
              null,
              [nRow, aoData._aData, iRowCount, j, iDataIndex]
            );
            anRows.push(nRow);
            iRowCount++;
          }
        } else {
          anRows[0] = _emptyRow(oSettings);
        }
        _fnCallbackFire(oSettings, "aoHeaderCallback", "header", [
          $6(oSettings.nTHead).children("tr")[0],
          _fnGetDataMaster(oSettings),
          iDisplayStart,
          iDisplayEnd,
          aiDisplay
        ]);
        _fnCallbackFire(oSettings, "aoFooterCallback", "footer", [
          $6(oSettings.nTFoot).children("tr")[0],
          _fnGetDataMaster(oSettings),
          iDisplayStart,
          iDisplayEnd,
          aiDisplay
        ]);
        if (body[0].replaceChildren) {
          body[0].replaceChildren.apply(body[0], anRows);
        } else {
          body.children().detach();
          body.append($6(anRows));
        }
        $6(oSettings.nTableWrapper).toggleClass("dt-empty-footer", $6("tr", oSettings.nTFoot).length === 0);
        _fnCallbackFire(oSettings, "aoDrawCallback", "draw", [oSettings], true);
        oSettings.bSorted = false;
        oSettings.bFiltered = false;
        oSettings.bDrawing = false;
      }
      function _fnReDraw(settings, holdPosition, recompute) {
        var features = settings.oFeatures, sort = features.bSort, filter = features.bFilter;
        if (recompute === void 0 || recompute === true) {
          _fnColumnTypes(settings);
          if (sort) {
            _fnSort(settings);
          }
          if (filter) {
            _fnFilterComplete(settings, settings.oPreviousSearch);
          } else {
            settings.aiDisplay = settings.aiDisplayMaster.slice();
          }
        }
        if (holdPosition !== true) {
          settings._iDisplayStart = 0;
        }
        settings._drawHold = holdPosition;
        _fnDraw(settings);
        settings._drawHold = false;
      }
      function _emptyRow(settings) {
        var oLang = settings.oLanguage;
        var zero = oLang.sZeroRecords;
        var dataSrc = _fnDataSource(settings);
        if (settings.iDraw < 1 && dataSrc === "ssp" || settings.iDraw <= 1 && dataSrc === "ajax") {
          zero = oLang.sLoadingRecords;
        } else if (oLang.sEmptyTable && settings.fnRecordsTotal() === 0) {
          zero = oLang.sEmptyTable;
        }
        return $6("<tr/>").append($6("<td />", {
          "colSpan": _fnVisbleColumns(settings),
          "class": settings.oClasses.empty.row
        }).html(zero))[0];
      }
      function _layoutItems(row, align, items) {
        if (Array.isArray(items)) {
          for (var i2 = 0; i2 < items.length; i2++) {
            _layoutItems(row, align, items[i2]);
          }
          return;
        }
        var rowCell = row[align];
        if ($6.isPlainObject(items)) {
          if (items.features) {
            if (items.rowId) {
              row.id = items.rowId;
            }
            if (items.rowClass) {
              row.className = items.rowClass;
            }
            rowCell.id = items.id;
            rowCell.className = items.className;
            _layoutItems(row, align, items.features);
          } else {
            Object.keys(items).map(function(key) {
              rowCell.contents.push({
                feature: key,
                opts: items[key]
              });
            });
          }
        } else {
          rowCell.contents.push(items);
        }
      }
      function _layoutGetRow(rows, rowNum, align) {
        var row;
        for (var i2 = 0; i2 < rows.length; i2++) {
          row = rows[i2];
          if (row.rowNum === rowNum) {
            if (align === "full" && row.full || (align === "start" || align === "end") && (row.start || row.end)) {
              if (!row[align]) {
                row[align] = {
                  contents: []
                };
              }
              return row;
            }
          }
        }
        row = {
          rowNum
        };
        row[align] = {
          contents: []
        };
        rows.push(row);
        return row;
      }
      function _layoutArray(settings, layout, side) {
        var rows = [];
        $6.each(layout, function(pos, items) {
          if (items === null) {
            return;
          }
          var parts = pos.match(/^([a-z]+)([0-9]*)([A-Za-z]*)$/);
          var rowNum = parts[2] ? parts[2] * 1 : 0;
          var align = parts[3] ? parts[3].toLowerCase() : "full";
          if (parts[1] !== side) {
            return;
          }
          var row2 = _layoutGetRow(rows, rowNum, align);
          _layoutItems(row2, align, items);
        });
        rows.sort(function(a, b) {
          var order1 = a.rowNum;
          var order2 = b.rowNum;
          if (order1 === order2) {
            var ret = a.full && !b.full ? -1 : 1;
            return side === "bottom" ? ret * -1 : ret;
          }
          return order2 - order1;
        });
        if (side === "bottom") {
          rows.reverse();
        }
        for (var row = 0; row < rows.length; row++) {
          delete rows[row].rowNum;
          _layoutResolve(settings, rows[row]);
        }
        return rows;
      }
      function _layoutResolve(settings, row) {
        var getFeature = function(feature, opts) {
          if (!_ext.features[feature]) {
            _fnLog(settings, 0, "Unknown feature: " + feature);
          }
          return _ext.features[feature].apply(this, [settings, opts]);
        };
        var resolve = function(item) {
          if (!row[item]) {
            return;
          }
          var line = row[item].contents;
          for (var i2 = 0, ien = line.length; i2 < ien; i2++) {
            if (!line[i2]) {
              continue;
            } else if (typeof line[i2] === "string") {
              line[i2] = getFeature(line[i2], null);
            } else if ($6.isPlainObject(line[i2])) {
              line[i2] = getFeature(line[i2].feature, line[i2].opts);
            } else if (typeof line[i2].node === "function") {
              line[i2] = line[i2].node(settings);
            } else if (typeof line[i2] === "function") {
              var inst = line[i2](settings);
              line[i2] = typeof inst.node === "function" ? inst.node() : inst;
            }
          }
        };
        resolve("start");
        resolve("end");
        resolve("full");
      }
      function _fnAddOptionsHtml(settings) {
        var classes = settings.oClasses;
        var table = $6(settings.nTable);
        var insert = $6("<div/>").attr({
          id: settings.sTableId + "_wrapper",
          "class": classes.container
        }).insertBefore(table);
        settings.nTableWrapper = insert[0];
        if (settings.sDom) {
          _fnLayoutDom(settings, settings.sDom, insert);
        } else {
          var top2 = _layoutArray(settings, settings.layout, "top");
          var bottom2 = _layoutArray(settings, settings.layout, "bottom");
          var renderer = _fnRenderer(settings, "layout");
          top2.forEach(function(item) {
            renderer(settings, insert, item);
          });
          renderer(settings, insert, {
            full: {
              table: true,
              contents: [_fnFeatureHtmlTable(settings)]
            }
          });
          bottom2.forEach(function(item) {
            renderer(settings, insert, item);
          });
        }
        _processingHtml(settings);
      }
      function _fnLayoutDom(settings, dom, insert) {
        var parts = dom.match(/(".*?")|('.*?')|./g);
        var featureNode, option, newNode, next, attr;
        for (var i2 = 0; i2 < parts.length; i2++) {
          featureNode = null;
          option = parts[i2];
          if (option == "<") {
            newNode = $6("<div/>");
            next = parts[i2 + 1];
            if (next[0] == "'" || next[0] == '"') {
              attr = next.replace(/['"]/g, "");
              var id = "", className;
              if (attr.indexOf(".") != -1) {
                var split = attr.split(".");
                id = split[0];
                className = split[1];
              } else if (attr[0] == "#") {
                id = attr;
              } else {
                className = attr;
              }
              newNode.attr("id", id.substring(1)).addClass(className);
              i2++;
            }
            insert.append(newNode);
            insert = newNode;
          } else if (option == ">") {
            insert = insert.parent();
          } else if (option == "t") {
            featureNode = _fnFeatureHtmlTable(settings);
          } else {
            DataTable3.ext.feature.forEach(function(feature) {
              if (option == feature.cFeature) {
                featureNode = feature.fnInit(settings);
              }
            });
          }
          if (featureNode) {
            insert.append(featureNode);
          }
        }
      }
      function _fnDetectHeader(settings, thead, write2) {
        var columns = settings.aoColumns;
        var rows = $6(thead).children("tr");
        var row, cell;
        var i2, k, l, iLen, shifted, column, colspan, rowspan;
        var isHeader = thead && thead.nodeName.toLowerCase() === "thead";
        var layout = [];
        var unique;
        var shift = function(a, i3, j) {
          var k2 = a[i3];
          while (k2[j]) {
            j++;
          }
          return j;
        };
        for (i2 = 0, iLen = rows.length; i2 < iLen; i2++) {
          layout.push([]);
        }
        for (i2 = 0, iLen = rows.length; i2 < iLen; i2++) {
          row = rows[i2];
          column = 0;
          cell = row.firstChild;
          while (cell) {
            if (cell.nodeName.toUpperCase() == "TD" || cell.nodeName.toUpperCase() == "TH") {
              var cols = [];
              colspan = cell.getAttribute("colspan") * 1;
              rowspan = cell.getAttribute("rowspan") * 1;
              colspan = !colspan || colspan === 0 || colspan === 1 ? 1 : colspan;
              rowspan = !rowspan || rowspan === 0 || rowspan === 1 ? 1 : rowspan;
              shifted = shift(layout, i2, column);
              unique = colspan === 1 ? true : false;
              if (write2) {
                if (unique) {
                  _fnColumnOptions(settings, shifted, $6(cell).data());
                  var columnDef = columns[shifted];
                  var width = cell.getAttribute("width") || null;
                  var t = cell.style.width.match(/width:\s*(\d+[pxem%]+)/);
                  if (t) {
                    width = t[1];
                  }
                  columnDef.sWidthOrig = columnDef.sWidth || width;
                  if (isHeader) {
                    if (columnDef.sTitle !== null && !columnDef.autoTitle) {
                      cell.innerHTML = columnDef.sTitle;
                    }
                    if (!columnDef.sTitle && unique) {
                      columnDef.sTitle = _stripHtml(cell.innerHTML);
                      columnDef.autoTitle = true;
                    }
                  } else {
                    if (columnDef.footer) {
                      cell.innerHTML = columnDef.footer;
                    }
                  }
                  if (!columnDef.ariaTitle) {
                    columnDef.ariaTitle = $6(cell).attr("aria-label") || columnDef.sTitle;
                  }
                  if (columnDef.className) {
                    $6(cell).addClass(columnDef.className);
                  }
                }
                if ($6("span.dt-column-title", cell).length === 0) {
                  $6("<span>").addClass("dt-column-title").append(cell.childNodes).appendTo(cell);
                }
                if (isHeader && $6("span.dt-column-order", cell).length === 0) {
                  $6("<span>").addClass("dt-column-order").appendTo(cell);
                }
              }
              for (l = 0; l < colspan; l++) {
                for (k = 0; k < rowspan; k++) {
                  layout[i2 + k][shifted + l] = {
                    cell,
                    unique
                  };
                  layout[i2 + k].row = row;
                }
                cols.push(shifted + l);
              }
              cell.setAttribute("data-dt-column", _unique(cols).join(","));
            }
            cell = cell.nextSibling;
          }
        }
        return layout;
      }
      function _fnStart(oSettings) {
        var bServerSide = _fnDataSource(oSettings) == "ssp";
        var iInitDisplayStart = oSettings.iInitDisplayStart;
        if (iInitDisplayStart !== void 0 && iInitDisplayStart !== -1) {
          oSettings._iDisplayStart = bServerSide ? iInitDisplayStart : iInitDisplayStart >= oSettings.fnRecordsDisplay() ? 0 : iInitDisplayStart;
          oSettings.iInitDisplayStart = -1;
        }
      }
      function _fnBuildAjax(oSettings, data, fn2) {
        var ajaxData;
        var ajax = oSettings.ajax;
        var instance = oSettings.oInstance;
        var callback = function(json) {
          var status = oSettings.jqXHR ? oSettings.jqXHR.status : null;
          if (json === null || typeof status === "number" && status == 204) {
            json = {};
            _fnAjaxDataSrc(oSettings, json, []);
          }
          var error = json.error || json.sError;
          if (error) {
            _fnLog(oSettings, 0, error);
          }
          if (json.d && typeof json.d === "string") {
            try {
              json = JSON.parse(json.d);
            } catch (e) {
            }
          }
          oSettings.json = json;
          _fnCallbackFire(oSettings, null, "xhr", [oSettings, json, oSettings.jqXHR], true);
          fn2(json);
        };
        if ($6.isPlainObject(ajax) && ajax.data) {
          ajaxData = ajax.data;
          var newData = typeof ajaxData === "function" ? ajaxData(data, oSettings) : (
            // fn can manipulate data or return
            ajaxData
          );
          data = typeof ajaxData === "function" && newData ? newData : $6.extend(true, data, newData);
          delete ajax.data;
        }
        var baseAjax = {
          "url": typeof ajax === "string" ? ajax : "",
          "data": data,
          "success": callback,
          "dataType": "json",
          "cache": false,
          "type": oSettings.sServerMethod,
          "error": function(xhr, error) {
            var ret = _fnCallbackFire(oSettings, null, "xhr", [oSettings, null, oSettings.jqXHR], true);
            if (ret.indexOf(true) === -1) {
              if (error == "parsererror") {
                _fnLog(oSettings, 0, "Invalid JSON response", 1);
              } else if (xhr.readyState === 4) {
                _fnLog(oSettings, 0, "Ajax error", 7);
              }
            }
            _fnProcessingDisplay(oSettings, false);
          }
        };
        if ($6.isPlainObject(ajax)) {
          $6.extend(baseAjax, ajax);
        }
        oSettings.oAjaxData = data;
        _fnCallbackFire(oSettings, null, "preXhr", [oSettings, data, baseAjax], true);
        if (typeof ajax === "function") {
          oSettings.jqXHR = ajax.call(instance, data, callback, oSettings);
        } else if (ajax.url === "") {
          var empty = {};
          DataTable3.util.set(ajax.dataSrc)(empty, []);
          callback(empty);
        } else {
          oSettings.jqXHR = $6.ajax(baseAjax);
        }
        if (ajaxData) {
          ajax.data = ajaxData;
        }
      }
      function _fnAjaxUpdate(settings) {
        settings.iDraw++;
        _fnProcessingDisplay(settings, true);
        _fnBuildAjax(
          settings,
          _fnAjaxParameters(settings),
          function(json) {
            _fnAjaxUpdateDraw(settings, json);
          }
        );
      }
      function _fnAjaxParameters(settings) {
        var columns = settings.aoColumns, features = settings.oFeatures, preSearch = settings.oPreviousSearch, preColSearch = settings.aoPreSearchCols, colData = function(idx, prop) {
          return typeof columns[idx][prop] === "function" ? "function" : columns[idx][prop];
        };
        return {
          draw: settings.iDraw,
          columns: columns.map(function(column, i2) {
            return {
              data: colData(i2, "mData"),
              name: column.sName,
              searchable: column.bSearchable,
              orderable: column.bSortable,
              search: {
                value: preColSearch[i2].search,
                regex: preColSearch[i2].regex,
                fixed: Object.keys(column.searchFixed).map(function(name) {
                  return {
                    name,
                    term: column.searchFixed[name].toString()
                  };
                })
              }
            };
          }),
          order: _fnSortFlatten(settings).map(function(val) {
            return {
              column: val.col,
              dir: val.dir,
              name: colData(val.col, "sName")
            };
          }),
          start: settings._iDisplayStart,
          length: features.bPaginate ? settings._iDisplayLength : -1,
          search: {
            value: preSearch.search,
            regex: preSearch.regex,
            fixed: Object.keys(settings.searchFixed).map(function(name) {
              return {
                name,
                term: settings.searchFixed[name].toString()
              };
            })
          }
        };
      }
      function _fnAjaxUpdateDraw(settings, json) {
        var data = _fnAjaxDataSrc(settings, json);
        var draw = _fnAjaxDataSrcParam(settings, "draw", json);
        var recordsTotal = _fnAjaxDataSrcParam(settings, "recordsTotal", json);
        var recordsFiltered = _fnAjaxDataSrcParam(settings, "recordsFiltered", json);
        if (draw !== void 0) {
          if (draw * 1 < settings.iDraw) {
            return;
          }
          settings.iDraw = draw * 1;
        }
        if (!data) {
          data = [];
        }
        _fnClearTable(settings);
        settings._iRecordsTotal = parseInt(recordsTotal, 10);
        settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
        for (var i2 = 0, ien = data.length; i2 < ien; i2++) {
          _fnAddData(settings, data[i2]);
        }
        settings.aiDisplay = settings.aiDisplayMaster.slice();
        _fnColumnTypes(settings);
        _fnDraw(settings, true);
        _fnInitComplete(settings);
        _fnProcessingDisplay(settings, false);
      }
      function _fnAjaxDataSrc(settings, json, write2) {
        var dataProp = "data";
        if ($6.isPlainObject(settings.ajax) && settings.ajax.dataSrc !== void 0) {
          var dataSrc = settings.ajax.dataSrc;
          if (typeof dataSrc === "string" || typeof dataSrc === "function") {
            dataProp = dataSrc;
          } else if (dataSrc.data !== void 0) {
            dataProp = dataSrc.data;
          }
        }
        if (!write2) {
          if (dataProp === "data") {
            return json.aaData || json[dataProp];
          }
          return dataProp !== "" ? _fnGetObjectDataFn(dataProp)(json) : json;
        }
        _fnSetObjectDataFn(dataProp)(json, write2);
      }
      function _fnAjaxDataSrcParam(settings, param, json) {
        var dataSrc = $6.isPlainObject(settings.ajax) ? settings.ajax.dataSrc : null;
        if (dataSrc && dataSrc[param]) {
          return _fnGetObjectDataFn(dataSrc[param])(json);
        }
        var old = "";
        if (param === "draw") {
          old = "sEcho";
        } else if (param === "recordsTotal") {
          old = "iTotalRecords";
        } else if (param === "recordsFiltered") {
          old = "iTotalDisplayRecords";
        }
        return json[old] !== void 0 ? json[old] : json[param];
      }
      function _fnFilterComplete(settings, input) {
        var columnsSearch = settings.aoPreSearchCols;
        if (_fnDataSource(settings) != "ssp") {
          _fnFilterData(settings);
          settings.aiDisplay = settings.aiDisplayMaster.slice();
          _fnFilter(settings.aiDisplay, settings, input.search, input);
          $6.each(settings.searchFixed, function(name, term) {
            _fnFilter(settings.aiDisplay, settings, term, {});
          });
          for (var i2 = 0; i2 < columnsSearch.length; i2++) {
            var col = columnsSearch[i2];
            _fnFilter(
              settings.aiDisplay,
              settings,
              col.search,
              col,
              i2
            );
            $6.each(settings.aoColumns[i2].searchFixed, function(name, term) {
              _fnFilter(settings.aiDisplay, settings, term, {}, i2);
            });
          }
          _fnFilterCustom(settings);
        }
        settings.bFiltered = true;
        _fnCallbackFire(settings, null, "search", [settings]);
      }
      function _fnFilterCustom(settings) {
        var filters = DataTable3.ext.search;
        var displayRows = settings.aiDisplay;
        var row, rowIdx;
        for (var i2 = 0, ien = filters.length; i2 < ien; i2++) {
          var rows = [];
          for (var j = 0, jen = displayRows.length; j < jen; j++) {
            rowIdx = displayRows[j];
            row = settings.aoData[rowIdx];
            if (filters[i2](settings, row._aFilterData, rowIdx, row._aData, j)) {
              rows.push(rowIdx);
            }
          }
          displayRows.length = 0;
          _fnArrayApply(displayRows, rows);
        }
      }
      function _fnFilter(searchRows, settings, input, options, column) {
        if (input === "") {
          return;
        }
        var i2 = 0;
        var matched = [];
        var searchFunc = typeof input === "function" ? input : null;
        var rpSearch = input instanceof RegExp ? input : searchFunc ? null : _fnFilterCreateSearch(input, options);
        for (i2 = 0; i2 < searchRows.length; i2++) {
          var row = settings.aoData[searchRows[i2]];
          var data = column === void 0 ? row._sFilterRow : row._aFilterData[column];
          if (searchFunc && searchFunc(data, row._aData, searchRows[i2], column) || rpSearch && rpSearch.test(data)) {
            matched.push(searchRows[i2]);
          }
        }
        searchRows.length = matched.length;
        for (i2 = 0; i2 < matched.length; i2++) {
          searchRows[i2] = matched[i2];
        }
      }
      function _fnFilterCreateSearch(search, inOpts) {
        var not = [];
        var options = $6.extend({}, {
          boundary: false,
          caseInsensitive: true,
          exact: false,
          regex: false,
          smart: true
        }, inOpts);
        if (typeof search !== "string") {
          search = search.toString();
        }
        search = _normalize(search);
        if (options.exact) {
          return new RegExp(
            "^" + _fnEscapeRegex(search) + "$",
            options.caseInsensitive ? "i" : ""
          );
        }
        search = options.regex ? search : _fnEscapeRegex(search);
        if (options.smart) {
          var parts = search.match(/!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""];
          var a = parts.map(function(word) {
            var negative = false;
            var m;
            if (word.charAt(0) === "!") {
              negative = true;
              word = word.substring(1);
            }
            if (word.charAt(0) === '"') {
              m = word.match(/^"(.*)"$/);
              word = m ? m[1] : word;
            } else if (word.charAt(0) === "\u201C") {
              m = word.match(/^\u201C(.*)\u201D$/);
              word = m ? m[1] : word;
            }
            if (negative) {
              if (word.length > 1) {
                not.push("(?!" + word + ")");
              }
              word = "";
            }
            return word.replace(/"/g, "");
          });
          var match = not.length ? not.join("") : "";
          var boundary = options.boundary ? "\\b" : "";
          search = "^(?=.*?" + boundary + a.join(")(?=.*?" + boundary) + ")(" + match + ".)*$";
        }
        return new RegExp(search, options.caseInsensitive ? "i" : "");
      }
      var _fnEscapeRegex = DataTable3.util.escapeRegex;
      var __filter_div = $6("<div>")[0];
      var __filter_div_textContent = __filter_div.textContent !== void 0;
      function _fnFilterData(settings) {
        var columns = settings.aoColumns;
        var data = settings.aoData;
        var column;
        var j, jen, filterData, cellData, row;
        var wasInvalidated = false;
        for (var rowIdx = 0; rowIdx < data.length; rowIdx++) {
          if (!data[rowIdx]) {
            continue;
          }
          row = data[rowIdx];
          if (!row._aFilterData) {
            filterData = [];
            for (j = 0, jen = columns.length; j < jen; j++) {
              column = columns[j];
              if (column.bSearchable) {
                cellData = _fnGetCellData(settings, rowIdx, j, "filter");
                if (cellData === null) {
                  cellData = "";
                }
                if (typeof cellData !== "string" && cellData.toString) {
                  cellData = cellData.toString();
                }
              } else {
                cellData = "";
              }
              if (cellData.indexOf && cellData.indexOf("&") !== -1) {
                __filter_div.innerHTML = cellData;
                cellData = __filter_div_textContent ? __filter_div.textContent : __filter_div.innerText;
              }
              if (cellData.replace) {
                cellData = cellData.replace(/[\r\n\u2028]/g, "");
              }
              filterData.push(cellData);
            }
            row._aFilterData = filterData;
            row._sFilterRow = filterData.join("  ");
            wasInvalidated = true;
          }
        }
        return wasInvalidated;
      }
      function _fnInitialise(settings) {
        var i2;
        var init2 = settings.oInit;
        var deferLoading = settings.deferLoading;
        var dataSrc = _fnDataSource(settings);
        if (!settings.bInitialised) {
          setTimeout(function() {
            _fnInitialise(settings);
          }, 200);
          return;
        }
        _fnBuildHead(settings, "header");
        _fnBuildHead(settings, "footer");
        _fnLoadState(settings, init2, function() {
          _fnDrawHead(settings, settings.aoHeader);
          _fnDrawHead(settings, settings.aoFooter);
          var iAjaxStart = settings.iInitDisplayStart;
          if (init2.aaData) {
            for (i2 = 0; i2 < init2.aaData.length; i2++) {
              _fnAddData(settings, init2.aaData[i2]);
            }
          } else if (deferLoading || dataSrc == "dom") {
            _fnAddTr(settings, $6(settings.nTBody).children("tr"));
          }
          settings.aiDisplay = settings.aiDisplayMaster.slice();
          _fnAddOptionsHtml(settings);
          _fnSortInit(settings);
          _colGroup(settings);
          _fnProcessingDisplay(settings, true);
          _fnCallbackFire(settings, null, "preInit", [settings], true);
          _fnReDraw(settings);
          if (dataSrc != "ssp" || deferLoading) {
            if (dataSrc == "ajax") {
              _fnBuildAjax(settings, {}, function(json) {
                var aData = _fnAjaxDataSrc(settings, json);
                for (i2 = 0; i2 < aData.length; i2++) {
                  _fnAddData(settings, aData[i2]);
                }
                settings.iInitDisplayStart = iAjaxStart;
                _fnReDraw(settings);
                _fnProcessingDisplay(settings, false);
                _fnInitComplete(settings);
              }, settings);
            } else {
              _fnInitComplete(settings);
              _fnProcessingDisplay(settings, false);
            }
          }
        });
      }
      function _fnInitComplete(settings) {
        if (settings._bInitComplete) {
          return;
        }
        var args = [settings, settings.json];
        settings._bInitComplete = true;
        _fnAdjustColumnSizing(settings);
        _fnCallbackFire(settings, null, "plugin-init", args, true);
        _fnCallbackFire(settings, "aoInitComplete", "init", args, true);
      }
      function _fnLengthChange(settings, val) {
        var len = parseInt(val, 10);
        settings._iDisplayLength = len;
        _fnLengthOverflow(settings);
        _fnCallbackFire(settings, null, "length", [settings, len]);
      }
      function _fnPageChange(settings, action, redraw) {
        var start2 = settings._iDisplayStart, len = settings._iDisplayLength, records = settings.fnRecordsDisplay();
        if (records === 0 || len === -1) {
          start2 = 0;
        } else if (typeof action === "number") {
          start2 = action * len;
          if (start2 > records) {
            start2 = 0;
          }
        } else if (action == "first") {
          start2 = 0;
        } else if (action == "previous") {
          start2 = len >= 0 ? start2 - len : 0;
          if (start2 < 0) {
            start2 = 0;
          }
        } else if (action == "next") {
          if (start2 + len < records) {
            start2 += len;
          }
        } else if (action == "last") {
          start2 = Math.floor((records - 1) / len) * len;
        } else if (action === "ellipsis") {
          return;
        } else {
          _fnLog(settings, 0, "Unknown paging action: " + action, 5);
        }
        var changed = settings._iDisplayStart !== start2;
        settings._iDisplayStart = start2;
        _fnCallbackFire(settings, null, changed ? "page" : "page-nc", [settings]);
        if (changed && redraw) {
          _fnDraw(settings);
        }
        return changed;
      }
      function _processingHtml(settings) {
        var table = settings.nTable;
        var scrolling = settings.oScroll.sX !== "" || settings.oScroll.sY !== "";
        if (settings.oFeatures.bProcessing) {
          var n = $6("<div/>", {
            "id": settings.sTableId + "_processing",
            "class": settings.oClasses.processing.container,
            "role": "status"
          }).html(settings.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>");
          if (scrolling) {
            n.prependTo($6("div.dt-scroll", settings.nTableWrapper));
          } else {
            n.insertBefore(table);
          }
          $6(table).on("processing.dt.DT", function(e, s, show) {
            n.css("display", show ? "block" : "none");
          });
        }
      }
      function _fnProcessingDisplay(settings, show) {
        if (settings.bDrawing && show === false) {
          return;
        }
        _fnCallbackFire(settings, null, "processing", [settings, show]);
      }
      function _fnProcessingRun(settings, enable, run) {
        if (!enable) {
          run();
        } else {
          _fnProcessingDisplay(settings, true);
          setTimeout(function() {
            run();
            _fnProcessingDisplay(settings, false);
          }, 0);
        }
      }
      function _fnFeatureHtmlTable(settings) {
        var table = $6(settings.nTable);
        var scroll = settings.oScroll;
        if (scroll.sX === "" && scroll.sY === "") {
          return settings.nTable;
        }
        var scrollX = scroll.sX;
        var scrollY = scroll.sY;
        var classes = settings.oClasses.scrolling;
        var caption = settings.captionNode;
        var captionSide = caption ? caption._captionSide : null;
        var headerClone = $6(table[0].cloneNode(false));
        var footerClone = $6(table[0].cloneNode(false));
        var footer = table.children("tfoot");
        var _div = "<div/>";
        var size = function(s) {
          return !s ? null : _fnStringToCss(s);
        };
        if (!footer.length) {
          footer = null;
        }
        var scroller = $6(_div, { "class": classes.container }).append(
          $6(_div, { "class": classes.header.self }).css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: scrollX ? size(scrollX) : "100%"
          }).append(
            $6(_div, { "class": classes.header.inner }).css({
              "box-sizing": "content-box",
              width: scroll.sXInner || "100%"
            }).append(
              headerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "top" ? caption : null).append(
                table.children("thead")
              )
            )
          )
        ).append(
          $6(_div, { "class": classes.body }).css({
            position: "relative",
            overflow: "auto",
            width: size(scrollX)
          }).append(table)
        );
        if (footer) {
          scroller.append(
            $6(_div, { "class": classes.footer.self }).css({
              overflow: "hidden",
              border: 0,
              width: scrollX ? size(scrollX) : "100%"
            }).append(
              $6(_div, { "class": classes.footer.inner }).append(
                footerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "bottom" ? caption : null).append(
                  table.children("tfoot")
                )
              )
            )
          );
        }
        var children = scroller.children();
        var scrollHead = children[0];
        var scrollBody = children[1];
        var scrollFoot = footer ? children[2] : null;
        $6(scrollBody).on("scroll.DT", function() {
          var scrollLeft = this.scrollLeft;
          scrollHead.scrollLeft = scrollLeft;
          if (footer) {
            scrollFoot.scrollLeft = scrollLeft;
          }
        });
        $6("th, td", scrollHead).on("focus", function() {
          var scrollLeft = scrollHead.scrollLeft;
          scrollBody.scrollLeft = scrollLeft;
          if (footer) {
            scrollBody.scrollLeft = scrollLeft;
          }
        });
        $6(scrollBody).css("max-height", scrollY);
        if (!scroll.bCollapse) {
          $6(scrollBody).css("height", scrollY);
        }
        settings.nScrollHead = scrollHead;
        settings.nScrollBody = scrollBody;
        settings.nScrollFoot = scrollFoot;
        settings.aoDrawCallback.push(_fnScrollDraw);
        return scroller[0];
      }
      function _fnScrollDraw(settings) {
        var scroll = settings.oScroll, barWidth = scroll.iBarWidth, divHeader = $6(settings.nScrollHead), divHeaderInner = divHeader.children("div"), divHeaderTable = divHeaderInner.children("table"), divBodyEl = settings.nScrollBody, divBody = $6(divBodyEl), divFooter = $6(settings.nScrollFoot), divFooterInner = divFooter.children("div"), divFooterTable = divFooterInner.children("table"), header = $6(settings.nTHead), table = $6(settings.nTable), footer = settings.nTFoot && $6("th, td", settings.nTFoot).length ? $6(settings.nTFoot) : null, browser = settings.oBrowser, headerCopy, footerCopy;
        var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
        if (settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== void 0) {
          settings.scrollBarVis = scrollBarVis;
          _fnAdjustColumnSizing(settings);
          return;
        } else {
          settings.scrollBarVis = scrollBarVis;
        }
        table.children("thead, tfoot").remove();
        headerCopy = header.clone().prependTo(table);
        headerCopy.find("th, td").removeAttr("tabindex");
        headerCopy.find("[id]").removeAttr("id");
        if (footer) {
          footerCopy = footer.clone().prependTo(table);
          footerCopy.find("[id]").removeAttr("id");
        }
        if (settings.aiDisplay.length) {
          var firstTr = null;
          var start2 = _fnDataSource(settings) !== "ssp" ? settings._iDisplayStart : 0;
          for (i2 = start2; i2 < start2 + settings.aiDisplay.length; i2++) {
            var idx = settings.aiDisplay[i2];
            var tr = settings.aoData[idx].nTr;
            if (tr) {
              firstTr = tr;
              break;
            }
          }
          if (firstTr) {
            var colSizes = $6(firstTr).children("th, td").map(function(vis) {
              return {
                idx: _fnVisibleToColumnIndex(settings, vis),
                width: $6(this).outerWidth()
              };
            });
            for (var i2 = 0; i2 < colSizes.length; i2++) {
              var colEl = settings.aoColumns[colSizes[i2].idx].colEl[0];
              var colWidth = colEl.style.width.replace("px", "");
              if (colWidth !== colSizes[i2].width) {
                colEl.style.width = colSizes[i2].width + "px";
                if (scroll.sX) {
                  colEl.style.minWidth = colSizes[i2].width + "px";
                }
              }
            }
          }
        }
        divHeaderTable.find("colgroup").remove();
        divHeaderTable.append(settings.colgroup.clone());
        if (footer) {
          divFooterTable.find("colgroup").remove();
          divFooterTable.append(settings.colgroup.clone());
        }
        $6("th, td", headerCopy).each(function() {
          $6(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
        });
        if (footer) {
          $6("th, td", footerCopy).each(function() {
            $6(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
          });
        }
        var isScrolling = Math.floor(table.height()) > divBodyEl.clientHeight || divBody.css("overflow-y") == "scroll";
        var paddingSide = "padding" + (browser.bScrollbarLeft ? "Left" : "Right");
        var outerWidth = table.outerWidth();
        divHeaderTable.css("width", _fnStringToCss(outerWidth));
        divHeaderInner.css("width", _fnStringToCss(outerWidth)).css(paddingSide, isScrolling ? barWidth + "px" : "0px");
        if (footer) {
          divFooterTable.css("width", _fnStringToCss(outerWidth));
          divFooterInner.css("width", _fnStringToCss(outerWidth)).css(paddingSide, isScrolling ? barWidth + "px" : "0px");
        }
        table.children("colgroup").prependTo(table);
        divBody.trigger("scroll");
        if ((settings.bSorted || settings.bFiltered) && !settings._drawHold) {
          divBodyEl.scrollTop = 0;
        }
      }
      function _fnCalculateColumnWidths(settings) {
        if (!settings.oFeatures.bAutoWidth) {
          return;
        }
        var table = settings.nTable, columns = settings.aoColumns, scroll = settings.oScroll, scrollY = scroll.sY, scrollX = scroll.sX, scrollXInner = scroll.sXInner, visibleColumns = _fnGetColumns(settings, "bVisible"), tableWidthAttr = table.getAttribute("width"), tableContainer = table.parentNode, i2, column, columnIdx;
        var styleWidth = table.style.width;
        var containerWidth = _fnWrapperWidth(settings);
        if (containerWidth === settings.containerWidth) {
          return false;
        }
        settings.containerWidth = containerWidth;
        if (!styleWidth && !tableWidthAttr) {
          table.style.width = "100%";
          styleWidth = "100%";
        }
        if (styleWidth && styleWidth.indexOf("%") !== -1) {
          tableWidthAttr = styleWidth;
        }
        _fnCallbackFire(
          settings,
          null,
          "column-calc",
          { visible: visibleColumns },
          false
        );
        var tmpTable = $6(table.cloneNode()).css("visibility", "hidden").removeAttr("id");
        tmpTable.append("<tbody>");
        var tr = $6("<tr/>").appendTo(tmpTable.find("tbody"));
        tmpTable.append($6(settings.nTHead).clone()).append($6(settings.nTFoot).clone());
        tmpTable.find("tfoot th, tfoot td").css("width", "");
        tmpTable.find("thead th, thead td").each(function() {
          var width = _fnColumnsSumWidth(settings, this, true, false);
          if (width) {
            this.style.width = width;
            if (scrollX) {
              this.style.minWidth = width;
              $6(this).append($6("<div/>").css({
                width,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1
              }));
            }
          } else {
            this.style.width = "";
          }
        });
        for (i2 = 0; i2 < visibleColumns.length; i2++) {
          columnIdx = visibleColumns[i2];
          column = columns[columnIdx];
          var longest = _fnGetMaxLenString(settings, columnIdx);
          var autoClass = _ext.type.className[column.sType];
          var text = longest + column.sContentPadding;
          var insert = longest.indexOf("<") === -1 ? document2.createTextNode(text) : text;
          $6("<td/>").addClass(autoClass).addClass(column.sClass).append(insert).appendTo(tr);
        }
        $6("[name]", tmpTable).removeAttr("name");
        var holder = $6("<div/>").css(
          scrollX || scrollY ? {
            position: "absolute",
            top: 0,
            left: 0,
            height: 1,
            right: 0,
            overflow: "hidden"
          } : {}
        ).append(tmpTable).appendTo(tableContainer);
        if (scrollX && scrollXInner) {
          tmpTable.width(scrollXInner);
        } else if (scrollX) {
          tmpTable.css("width", "auto");
          tmpTable.removeAttr("width");
          if (tmpTable.outerWidth() < tableContainer.clientWidth && tableWidthAttr) {
            tmpTable.outerWidth(tableContainer.clientWidth);
          }
        } else if (scrollY) {
          tmpTable.outerWidth(tableContainer.clientWidth);
        } else if (tableWidthAttr) {
          tmpTable.outerWidth(tableWidthAttr);
        }
        var total = 0;
        var bodyCells = tmpTable.find("tbody tr").eq(0).children();
        for (i2 = 0; i2 < visibleColumns.length; i2++) {
          var bounding = bodyCells[i2].getBoundingClientRect().width;
          total += bounding;
          columns[visibleColumns[i2]].sWidth = _fnStringToCss(bounding);
        }
        table.style.width = _fnStringToCss(total);
        holder.remove();
        if (tableWidthAttr) {
          table.style.width = _fnStringToCss(tableWidthAttr);
        }
        if ((tableWidthAttr || scrollX) && !settings._reszEvt) {
          var resize = DataTable3.util.throttle(function() {
            var newWidth = _fnWrapperWidth(settings);
            if (!settings.bDestroying && newWidth !== 0) {
              _fnAdjustColumnSizing(settings);
            }
          });
          if (window2.ResizeObserver) {
            var first = $6(settings.nTableWrapper).is(":visible");
            var resizer = $6("<div>").css({
              width: "100%",
              height: 0
            }).addClass("dt-autosize").appendTo(settings.nTableWrapper);
            settings.resizeObserver = new ResizeObserver(function(e) {
              if (first) {
                first = false;
              } else {
                resize();
              }
            });
            settings.resizeObserver.observe(resizer[0]);
          } else {
            $6(window2).on("resize.DT-" + settings.sInstance, resize);
          }
          settings._reszEvt = true;
        }
      }
      function _fnWrapperWidth(settings) {
        return $6(settings.nTableWrapper).is(":visible") ? $6(settings.nTableWrapper).width() : 0;
      }
      function _fnGetMaxLenString(settings, colIdx) {
        var column = settings.aoColumns[colIdx];
        if (!column.maxLenString) {
          var s, max2 = "", maxLen = -1;
          for (var i2 = 0, ien = settings.aiDisplayMaster.length; i2 < ien; i2++) {
            var rowIdx = settings.aiDisplayMaster[i2];
            var data = _fnGetRowDisplay(settings, rowIdx)[colIdx];
            var cellString = data && typeof data === "object" && data.nodeType ? data.innerHTML : data + "";
            cellString = cellString.replace(/id=".*?"/g, "").replace(/name=".*?"/g, "");
            s = _stripHtml(cellString).replace(/&nbsp;/g, " ");
            if (s.length > maxLen) {
              max2 = cellString;
              maxLen = s.length;
            }
          }
          column.maxLenString = max2;
        }
        return column.maxLenString;
      }
      function _fnStringToCss(s) {
        if (s === null) {
          return "0px";
        }
        if (typeof s == "number") {
          return s < 0 ? "0px" : s + "px";
        }
        return s.match(/\d$/) ? s + "px" : s;
      }
      function _colGroup(settings) {
        var cols = settings.aoColumns;
        settings.colgroup.empty();
        for (i = 0; i < cols.length; i++) {
          if (cols[i].bVisible) {
            settings.colgroup.append(cols[i].colEl);
          }
        }
      }
      function _fnSortInit(settings) {
        var target = settings.nTHead;
        var headerRows = target.querySelectorAll("tr");
        var legacyTop = settings.bSortCellsTop;
        var notSelector = ':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])';
        if (legacyTop === true) {
          target = headerRows[0];
        } else if (legacyTop === false) {
          target = headerRows[headerRows.length - 1];
        }
        _fnSortAttachListener(
          settings,
          target,
          target === settings.nTHead ? "tr" + notSelector + " th" + notSelector + ", tr" + notSelector + " td" + notSelector : "th" + notSelector + ", td" + notSelector
        );
        var order2 = [];
        _fnSortResolve(settings, order2, settings.aaSorting);
        settings.aaSorting = order2;
      }
      function _fnSortAttachListener(settings, node, selector, column, callback) {
        _fnBindAction(node, selector, function(e) {
          var run = false;
          var columns = column === void 0 ? _fnColumnsFromHeader(e.target) : [column];
          if (columns.length) {
            for (var i2 = 0, ien = columns.length; i2 < ien; i2++) {
              var ret = _fnSortAdd(settings, columns[i2], i2, e.shiftKey);
              if (ret !== false) {
                run = true;
              }
              if (settings.aaSorting.length === 1 && settings.aaSorting[0][1] === "") {
                break;
              }
            }
            if (run) {
              _fnProcessingRun(settings, true, function() {
                _fnSort(settings);
                _fnSortDisplay(settings, settings.aiDisplay);
                _fnReDraw(settings, false, false);
                if (callback) {
                  callback();
                }
              });
            }
          }
        });
      }
      function _fnSortDisplay(settings, display) {
        if (display.length < 2) {
          return;
        }
        var master = settings.aiDisplayMaster;
        var masterMap = {};
        var map = {};
        var i2;
        for (i2 = 0; i2 < master.length; i2++) {
          masterMap[master[i2]] = i2;
        }
        for (i2 = 0; i2 < display.length; i2++) {
          map[display[i2]] = masterMap[display[i2]];
        }
        display.sort(function(a, b) {
          return map[a] - map[b];
        });
      }
      function _fnSortResolve(settings, nestedSort, sort) {
        var push = function(a) {
          if ($6.isPlainObject(a)) {
            if (a.idx !== void 0) {
              nestedSort.push([a.idx, a.dir]);
            } else if (a.name) {
              var cols = _pluck(settings.aoColumns, "sName");
              var idx = cols.indexOf(a.name);
              if (idx !== -1) {
                nestedSort.push([idx, a.dir]);
              }
            }
          } else {
            nestedSort.push(a);
          }
        };
        if ($6.isPlainObject(sort)) {
          push(sort);
        } else if (sort.length && typeof sort[0] === "number") {
          push(sort);
        } else if (sort.length) {
          for (var z = 0; z < sort.length; z++) {
            push(sort[z]);
          }
        }
      }
      function _fnSortFlatten(settings) {
        var i2, k, kLen, aSort = [], extSort = DataTable3.ext.type.order, aoColumns = settings.aoColumns, aDataSort, iCol, sType, srcCol, fixed = settings.aaSortingFixed, fixedObj = $6.isPlainObject(fixed), nestedSort = [];
        if (!settings.oFeatures.bSort) {
          return aSort;
        }
        if (Array.isArray(fixed)) {
          _fnSortResolve(settings, nestedSort, fixed);
        }
        if (fixedObj && fixed.pre) {
          _fnSortResolve(settings, nestedSort, fixed.pre);
        }
        _fnSortResolve(settings, nestedSort, settings.aaSorting);
        if (fixedObj && fixed.post) {
          _fnSortResolve(settings, nestedSort, fixed.post);
        }
        for (i2 = 0; i2 < nestedSort.length; i2++) {
          srcCol = nestedSort[i2][0];
          if (aoColumns[srcCol]) {
            aDataSort = aoColumns[srcCol].aDataSort;
            for (k = 0, kLen = aDataSort.length; k < kLen; k++) {
              iCol = aDataSort[k];
              sType = aoColumns[iCol].sType || "string";
              if (nestedSort[i2]._idx === void 0) {
                nestedSort[i2]._idx = aoColumns[iCol].asSorting.indexOf(nestedSort[i2][1]);
              }
              if (nestedSort[i2][1]) {
                aSort.push({
                  src: srcCol,
                  col: iCol,
                  dir: nestedSort[i2][1],
                  index: nestedSort[i2]._idx,
                  type: sType,
                  formatter: extSort[sType + "-pre"],
                  sorter: extSort[sType + "-" + nestedSort[i2][1]]
                });
              }
            }
          }
        }
        return aSort;
      }
      function _fnSort(oSettings, col, dir) {
        var i2, ien, iLen, aiOrig = [], extSort = DataTable3.ext.type.order, aoData = oSettings.aoData, sortCol, displayMaster = oSettings.aiDisplayMaster, aSort;
        _fnColumnTypes(oSettings);
        if (col !== void 0) {
          var srcCol = oSettings.aoColumns[col];
          aSort = [{
            src: col,
            col,
            dir,
            index: 0,
            type: srcCol.sType,
            formatter: extSort[srcCol.sType + "-pre"],
            sorter: extSort[srcCol.sType + "-" + dir]
          }];
          displayMaster = displayMaster.slice();
        } else {
          aSort = _fnSortFlatten(oSettings);
        }
        for (i2 = 0, ien = aSort.length; i2 < ien; i2++) {
          sortCol = aSort[i2];
          _fnSortData(oSettings, sortCol.col);
        }
        if (_fnDataSource(oSettings) != "ssp" && aSort.length !== 0) {
          for (i2 = 0, iLen = displayMaster.length; i2 < iLen; i2++) {
            aiOrig[i2] = i2;
          }
          if (aSort.length && aSort[0].dir === "desc" && oSettings.orderDescReverse) {
            aiOrig.reverse();
          }
          displayMaster.sort(function(a, b) {
            var x, y, k, test, sort, len = aSort.length, dataA = aoData[a]._aSortData, dataB = aoData[b]._aSortData;
            for (k = 0; k < len; k++) {
              sort = aSort[k];
              x = dataA[sort.col];
              y = dataB[sort.col];
              if (sort.sorter) {
                test = sort.sorter(x, y);
                if (test !== 0) {
                  return test;
                }
              } else {
                test = x < y ? -1 : x > y ? 1 : 0;
                if (test !== 0) {
                  return sort.dir === "asc" ? test : -test;
                }
              }
            }
            x = aiOrig[a];
            y = aiOrig[b];
            return x < y ? -1 : x > y ? 1 : 0;
          });
        } else if (aSort.length === 0) {
          displayMaster.sort(function(x, y) {
            return x < y ? -1 : x > y ? 1 : 0;
          });
        }
        if (col === void 0) {
          oSettings.bSorted = true;
          oSettings.sortDetails = aSort;
          _fnCallbackFire(oSettings, null, "order", [oSettings, aSort]);
        }
        return displayMaster;
      }
      function _fnSortAdd(settings, colIdx, addIndex, shift) {
        var col = settings.aoColumns[colIdx];
        var sorting = settings.aaSorting;
        var asSorting = col.asSorting;
        var nextSortIdx;
        var next = function(a, overflow) {
          var idx = a._idx;
          if (idx === void 0) {
            idx = asSorting.indexOf(a[1]);
          }
          return idx + 1 < asSorting.length ? idx + 1 : overflow ? null : 0;
        };
        if (!col.bSortable) {
          return false;
        }
        if (typeof sorting[0] === "number") {
          sorting = settings.aaSorting = [sorting];
        }
        if ((shift || addIndex) && settings.oFeatures.bSortMulti) {
          var sortIdx = _pluck(sorting, "0").indexOf(colIdx);
          if (sortIdx !== -1) {
            nextSortIdx = next(sorting[sortIdx], true);
            if (nextSortIdx === null && sorting.length === 1) {
              nextSortIdx = 0;
            }
            if (nextSortIdx === null) {
              sorting.splice(sortIdx, 1);
            } else {
              sorting[sortIdx][1] = asSorting[nextSortIdx];
              sorting[sortIdx]._idx = nextSortIdx;
            }
          } else if (shift) {
            sorting.push([colIdx, asSorting[0], 0]);
            sorting[sorting.length - 1]._idx = 0;
          } else {
            sorting.push([colIdx, sorting[0][1], 0]);
            sorting[sorting.length - 1]._idx = 0;
          }
        } else if (sorting.length && sorting[0][0] == colIdx) {
          nextSortIdx = next(sorting[0]);
          sorting.length = 1;
          sorting[0][1] = asSorting[nextSortIdx];
          sorting[0]._idx = nextSortIdx;
        } else {
          sorting.length = 0;
          sorting.push([colIdx, asSorting[0]]);
          sorting[0]._idx = 0;
        }
      }
      function _fnSortingClasses(settings) {
        var oldSort = settings.aLastSort;
        var sortClass = settings.oClasses.order.position;
        var sort = _fnSortFlatten(settings);
        var features = settings.oFeatures;
        var i2, ien, colIdx;
        if (features.bSort && features.bSortClasses) {
          for (i2 = 0, ien = oldSort.length; i2 < ien; i2++) {
            colIdx = oldSort[i2].src;
            $6(_pluck(settings.aoData, "anCells", colIdx)).removeClass(sortClass + (i2 < 2 ? i2 + 1 : 3));
          }
          for (i2 = 0, ien = sort.length; i2 < ien; i2++) {
            colIdx = sort[i2].src;
            $6(_pluck(settings.aoData, "anCells", colIdx)).addClass(sortClass + (i2 < 2 ? i2 + 1 : 3));
          }
        }
        settings.aLastSort = sort;
      }
      function _fnSortData(settings, colIdx) {
        var column = settings.aoColumns[colIdx];
        var customSort = DataTable3.ext.order[column.sSortDataType];
        var customData;
        if (customSort) {
          customData = customSort.call(
            settings.oInstance,
            settings,
            colIdx,
            _fnColumnIndexToVisible(settings, colIdx)
          );
        }
        var row, cellData;
        var formatter = DataTable3.ext.type.order[column.sType + "-pre"];
        var data = settings.aoData;
        for (var rowIdx = 0; rowIdx < data.length; rowIdx++) {
          if (!data[rowIdx]) {
            continue;
          }
          row = data[rowIdx];
          if (!row._aSortData) {
            row._aSortData = [];
          }
          if (!row._aSortData[colIdx] || customSort) {
            cellData = customSort ? customData[rowIdx] : (
              // If there was a custom sort function, use data from there
              _fnGetCellData(settings, rowIdx, colIdx, "sort")
            );
            row._aSortData[colIdx] = formatter ? formatter(cellData, settings) : cellData;
          }
        }
      }
      function _fnSaveState(settings) {
        if (settings._bLoadingState) {
          return;
        }
        var sorting = [];
        _fnSortResolve(settings, sorting, settings.aaSorting);
        var columns = settings.aoColumns;
        var state = {
          time: +/* @__PURE__ */ new Date(),
          start: settings._iDisplayStart,
          length: settings._iDisplayLength,
          order: sorting.map(function(sort) {
            return columns[sort[0]] && columns[sort[0]].sName ? [columns[sort[0]].sName, sort[1]] : sort.slice();
          }),
          search: $6.extend({}, settings.oPreviousSearch),
          columns: settings.aoColumns.map(function(col, i2) {
            return {
              name: col.sName,
              visible: col.bVisible,
              search: $6.extend({}, settings.aoPreSearchCols[i2])
            };
          })
        };
        settings.oSavedState = state;
        _fnCallbackFire(settings, "aoStateSaveParams", "stateSaveParams", [settings, state]);
        if (settings.oFeatures.bStateSave && !settings.bDestroying) {
          settings.fnStateSaveCallback.call(settings.oInstance, settings, state);
        }
      }
      function _fnLoadState(settings, init2, callback) {
        if (!settings.oFeatures.bStateSave) {
          callback();
          return;
        }
        var loaded = function(state2) {
          _fnImplementState(settings, state2, callback);
        };
        var state = settings.fnStateLoadCallback.call(settings.oInstance, settings, loaded);
        if (state !== void 0) {
          _fnImplementState(settings, state, callback);
        }
        return true;
      }
      function _fnImplementState(settings, s, callback) {
        var i2, ien;
        var columns = settings.aoColumns;
        var currentNames = _pluck(settings.aoColumns, "sName");
        settings._bLoadingState = true;
        var api = settings._bInitComplete ? new DataTable3.Api(settings) : null;
        if (!s || !s.time) {
          settings._bLoadingState = false;
          callback();
          return;
        }
        var duration = settings.iStateDuration;
        if (duration > 0 && s.time < +/* @__PURE__ */ new Date() - duration * 1e3) {
          settings._bLoadingState = false;
          callback();
          return;
        }
        var abStateLoad = _fnCallbackFire(settings, "aoStateLoadParams", "stateLoadParams", [settings, s]);
        if (abStateLoad.indexOf(false) !== -1) {
          settings._bLoadingState = false;
          callback();
          return;
        }
        settings.oLoadedState = $6.extend(true, {}, s);
        _fnCallbackFire(settings, null, "stateLoadInit", [settings, s], true);
        if (s.length !== void 0) {
          if (api) {
            api.page.len(s.length);
          } else {
            settings._iDisplayLength = s.length;
          }
        }
        if (s.start !== void 0) {
          if (api === null) {
            settings._iDisplayStart = s.start;
            settings.iInitDisplayStart = s.start;
          } else {
            _fnPageChange(settings, s.start / settings._iDisplayLength);
          }
        }
        if (s.order !== void 0) {
          settings.aaSorting = [];
          $6.each(s.order, function(i3, col2) {
            var set2 = [col2[0], col2[1]];
            if (typeof col2[0] === "string") {
              var idx2 = currentNames.indexOf(col2[0]);
              set2[0] = idx2 >= 0 ? idx2 : 0;
            } else if (set2[0] >= columns.length) {
              set2[0] = 0;
            }
            settings.aaSorting.push(set2);
          });
        }
        if (s.search !== void 0) {
          $6.extend(settings.oPreviousSearch, s.search);
        }
        if (s.columns) {
          var set = s.columns;
          var incoming = _pluck(s.columns, "name");
          if (incoming.join("").length && incoming.join("") !== currentNames.join("")) {
            set = [];
            for (i2 = 0; i2 < currentNames.length; i2++) {
              if (currentNames[i2] != "") {
                var idx = incoming.indexOf(currentNames[i2]);
                if (idx >= 0) {
                  set.push(s.columns[idx]);
                } else {
                  set.push({});
                }
              } else {
                set.push({});
              }
            }
          }
          if (set.length === columns.length) {
            for (i2 = 0, ien = set.length; i2 < ien; i2++) {
              var col = set[i2];
              if (col.visible !== void 0) {
                if (api) {
                  api.column(i2).visible(col.visible, false);
                } else {
                  columns[i2].bVisible = col.visible;
                }
              }
              if (col.search !== void 0) {
                $6.extend(settings.aoPreSearchCols[i2], col.search);
              }
            }
            if (api) {
              api.columns.adjust();
            }
          }
        }
        settings._bLoadingState = false;
        _fnCallbackFire(settings, "aoStateLoaded", "stateLoaded", [settings, s]);
        callback();
      }
      function _fnLog(settings, level, msg, tn) {
        msg = "DataTables warning: " + (settings ? "table id=" + settings.sTableId + " - " : "") + msg;
        if (tn) {
          msg += ". For more information about this error, please see https://datatables.net/tn/" + tn;
        }
        if (!level) {
          var ext = DataTable3.ext;
          var type = ext.sErrMode || ext.errMode;
          if (settings) {
            _fnCallbackFire(settings, null, "dt-error", [settings, tn, msg], true);
          }
          if (type == "alert") {
            alert(msg);
          } else if (type == "throw") {
            throw new Error(msg);
          } else if (typeof type == "function") {
            type(settings, tn, msg);
          }
        } else if (window2.console && console.log) {
          console.log(msg);
        }
      }
      function _fnMap(ret, src, name, mappedName) {
        if (Array.isArray(name)) {
          $6.each(name, function(i2, val) {
            if (Array.isArray(val)) {
              _fnMap(ret, src, val[0], val[1]);
            } else {
              _fnMap(ret, src, val);
            }
          });
          return;
        }
        if (mappedName === void 0) {
          mappedName = name;
        }
        if (src[name] !== void 0) {
          ret[mappedName] = src[name];
        }
      }
      function _fnExtend(out, extender, breakRefs) {
        var val;
        for (var prop in extender) {
          if (Object.prototype.hasOwnProperty.call(extender, prop)) {
            val = extender[prop];
            if ($6.isPlainObject(val)) {
              if (!$6.isPlainObject(out[prop])) {
                out[prop] = {};
              }
              $6.extend(true, out[prop], val);
            } else if (breakRefs && prop !== "data" && prop !== "aaData" && Array.isArray(val)) {
              out[prop] = val.slice();
            } else {
              out[prop] = val;
            }
          }
        }
        return out;
      }
      function _fnBindAction(n, selector, fn2) {
        $6(n).on("click.DT", selector, function(e) {
          fn2(e);
        }).on("keypress.DT", selector, function(e) {
          if (e.which === 13) {
            e.preventDefault();
            fn2(e);
          }
        }).on("selectstart.DT", selector, function() {
          return false;
        });
      }
      function _fnCallbackReg(settings, store, fn2) {
        if (fn2) {
          settings[store].push(fn2);
        }
      }
      function _fnCallbackFire(settings, callbackArr, eventName, args, bubbles) {
        var ret = [];
        if (callbackArr) {
          ret = settings[callbackArr].slice().reverse().map(function(val) {
            return val.apply(settings.oInstance, args);
          });
        }
        if (eventName !== null) {
          var e = $6.Event(eventName + ".dt");
          var table = $6(settings.nTable);
          e.dt = settings.api;
          table[bubbles ? "trigger" : "triggerHandler"](e, args);
          if (bubbles && table.parents("body").length === 0) {
            $6("body").trigger(e, args);
          }
          ret.push(e.result);
        }
        return ret;
      }
      function _fnLengthOverflow(settings) {
        var start2 = settings._iDisplayStart, end2 = settings.fnDisplayEnd(), len = settings._iDisplayLength;
        if (start2 >= end2) {
          start2 = end2 - len;
        }
        start2 -= start2 % len;
        if (len === -1 || start2 < 0) {
          start2 = 0;
        }
        settings._iDisplayStart = start2;
      }
      function _fnRenderer(settings, type) {
        var renderer = settings.renderer;
        var host = DataTable3.ext.renderer[type];
        if ($6.isPlainObject(renderer) && renderer[type]) {
          return host[renderer[type]] || host._;
        } else if (typeof renderer === "string") {
          return host[renderer] || host._;
        }
        return host._;
      }
      function _fnDataSource(settings) {
        if (settings.oFeatures.bServerSide) {
          return "ssp";
        } else if (settings.ajax) {
          return "ajax";
        }
        return "dom";
      }
      function _fnMacros(settings, str, entries) {
        var formatter = settings.fnFormatNumber, start2 = settings._iDisplayStart + 1, len = settings._iDisplayLength, vis = settings.fnRecordsDisplay(), max2 = settings.fnRecordsTotal(), all = len === -1;
        return str.replace(/_START_/g, formatter.call(settings, start2)).replace(/_END_/g, formatter.call(settings, settings.fnDisplayEnd())).replace(/_MAX_/g, formatter.call(settings, max2)).replace(/_TOTAL_/g, formatter.call(settings, vis)).replace(/_PAGE_/g, formatter.call(settings, all ? 1 : Math.ceil(start2 / len))).replace(/_PAGES_/g, formatter.call(settings, all ? 1 : Math.ceil(vis / len))).replace(/_ENTRIES_/g, settings.api.i18n("entries", "", entries)).replace(/_ENTRIES-MAX_/g, settings.api.i18n("entries", "", max2)).replace(/_ENTRIES-TOTAL_/g, settings.api.i18n("entries", "", vis));
      }
      function _fnArrayApply(arr, data) {
        if (!data) {
          return;
        }
        if (data.length < 1e4) {
          arr.push.apply(arr, data);
        } else {
          for (i = 0; i < data.length; i++) {
            arr.push(data[i]);
          }
        }
      }
      var __apiStruct = [];
      var __arrayProto = Array.prototype;
      var _toSettings = function(mixed) {
        var idx, jq;
        var settings = DataTable3.settings;
        var tables = _pluck(settings, "nTable");
        if (!mixed) {
          return [];
        } else if (mixed.nTable && mixed.oFeatures) {
          return [mixed];
        } else if (mixed.nodeName && mixed.nodeName.toLowerCase() === "table") {
          idx = tables.indexOf(mixed);
          return idx !== -1 ? [settings[idx]] : null;
        } else if (mixed && typeof mixed.settings === "function") {
          return mixed.settings().toArray();
        } else if (typeof mixed === "string") {
          jq = $6(mixed).get();
        } else if (mixed instanceof $6) {
          jq = mixed.get();
        }
        if (jq) {
          return settings.filter(function(v, idx2) {
            return jq.includes(tables[idx2]);
          });
        }
      };
      _Api = function(context, data) {
        if (!(this instanceof _Api)) {
          return new _Api(context, data);
        }
        var i2;
        var settings = [];
        var ctxSettings = function(o) {
          var a = _toSettings(o);
          if (a) {
            settings.push.apply(settings, a);
          }
        };
        if (Array.isArray(context)) {
          for (i2 = 0; i2 < context.length; i2++) {
            ctxSettings(context[i2]);
          }
        } else {
          ctxSettings(context);
        }
        this.context = settings.length > 1 ? _unique(settings) : settings;
        _fnArrayApply(this, data);
        this.selector = {
          rows: null,
          cols: null,
          opts: null
        };
        _Api.extend(this, this, __apiStruct);
      };
      DataTable3.Api = _Api;
      $6.extend(_Api.prototype, {
        any: function() {
          return this.count() !== 0;
        },
        context: [],
        // array of table settings objects
        count: function() {
          return this.flatten().length;
        },
        each: function(fn2) {
          for (var i2 = 0, ien = this.length; i2 < ien; i2++) {
            fn2.call(this, this[i2], i2, this);
          }
          return this;
        },
        eq: function(idx) {
          var ctx = this.context;
          return ctx.length > idx ? new _Api(ctx[idx], this[idx]) : null;
        },
        filter: function(fn2) {
          var a = __arrayProto.filter.call(this, fn2, this);
          return new _Api(this.context, a);
        },
        flatten: function() {
          var a = [];
          return new _Api(this.context, a.concat.apply(a, this.toArray()));
        },
        get: function(idx) {
          return this[idx];
        },
        join: __arrayProto.join,
        includes: function(find) {
          return this.indexOf(find) === -1 ? false : true;
        },
        indexOf: __arrayProto.indexOf,
        iterator: function(flatten, type, fn2, alwaysNew) {
          var a = [], ret, i2, ien, j, jen, context = this.context, rows, items, item, selector = this.selector;
          if (typeof flatten === "string") {
            alwaysNew = fn2;
            fn2 = type;
            type = flatten;
            flatten = false;
          }
          for (i2 = 0, ien = context.length; i2 < ien; i2++) {
            var apiInst = new _Api(context[i2]);
            if (type === "table") {
              ret = fn2.call(apiInst, context[i2], i2);
              if (ret !== void 0) {
                a.push(ret);
              }
            } else if (type === "columns" || type === "rows") {
              ret = fn2.call(apiInst, context[i2], this[i2], i2);
              if (ret !== void 0) {
                a.push(ret);
              }
            } else if (type === "every" || type === "column" || type === "column-rows" || type === "row" || type === "cell") {
              items = this[i2];
              if (type === "column-rows") {
                rows = _selector_row_indexes(context[i2], selector.opts);
              }
              for (j = 0, jen = items.length; j < jen; j++) {
                item = items[j];
                if (type === "cell") {
                  ret = fn2.call(apiInst, context[i2], item.row, item.column, i2, j);
                } else {
                  ret = fn2.call(apiInst, context[i2], item, i2, j, rows);
                }
                if (ret !== void 0) {
                  a.push(ret);
                }
              }
            }
          }
          if (a.length || alwaysNew) {
            var api = new _Api(context, flatten ? a.concat.apply([], a) : a);
            var apiSelector = api.selector;
            apiSelector.rows = selector.rows;
            apiSelector.cols = selector.cols;
            apiSelector.opts = selector.opts;
            return api;
          }
          return this;
        },
        lastIndexOf: __arrayProto.lastIndexOf,
        length: 0,
        map: function(fn2) {
          var a = __arrayProto.map.call(this, fn2, this);
          return new _Api(this.context, a);
        },
        pluck: function(prop) {
          var fn2 = DataTable3.util.get(prop);
          return this.map(function(el) {
            return fn2(el);
          });
        },
        pop: __arrayProto.pop,
        push: __arrayProto.push,
        reduce: __arrayProto.reduce,
        reduceRight: __arrayProto.reduceRight,
        reverse: __arrayProto.reverse,
        // Object with rows, columns and opts
        selector: null,
        shift: __arrayProto.shift,
        slice: function() {
          return new _Api(this.context, this);
        },
        sort: __arrayProto.sort,
        splice: __arrayProto.splice,
        toArray: function() {
          return __arrayProto.slice.call(this);
        },
        to$: function() {
          return $6(this);
        },
        toJQuery: function() {
          return $6(this);
        },
        unique: function() {
          return new _Api(this.context, _unique(this.toArray()));
        },
        unshift: __arrayProto.unshift
      });
      function _api_scope(scope, fn2, struc) {
        return function() {
          var ret = fn2.apply(scope || this, arguments);
          _Api.extend(ret, ret, struc.methodExt);
          return ret;
        };
      }
      function _api_find(src, name) {
        for (var i2 = 0, ien = src.length; i2 < ien; i2++) {
          if (src[i2].name === name) {
            return src[i2];
          }
        }
        return null;
      }
      window2.__apiStruct = __apiStruct;
      _Api.extend = function(scope, obj, ext) {
        if (!ext.length || !obj || !(obj instanceof _Api) && !obj.__dt_wrapper) {
          return;
        }
        var i2, ien, struct;
        for (i2 = 0, ien = ext.length; i2 < ien; i2++) {
          struct = ext[i2];
          if (struct.name === "__proto__") {
            continue;
          }
          obj[struct.name] = struct.type === "function" ? _api_scope(scope, struct.val, struct) : struct.type === "object" ? {} : struct.val;
          obj[struct.name].__dt_wrapper = true;
          _Api.extend(scope, obj[struct.name], struct.propExt);
        }
      };
      _Api.register = _api_register = function(name, val) {
        if (Array.isArray(name)) {
          for (var j = 0, jen = name.length; j < jen; j++) {
            _Api.register(name[j], val);
          }
          return;
        }
        var i2, ien, heir = name.split("."), struct = __apiStruct, key, method;
        for (i2 = 0, ien = heir.length; i2 < ien; i2++) {
          method = heir[i2].indexOf("()") !== -1;
          key = method ? heir[i2].replace("()", "") : heir[i2];
          var src = _api_find(struct, key);
          if (!src) {
            src = {
              name: key,
              val: {},
              methodExt: [],
              propExt: [],
              type: "object"
            };
            struct.push(src);
          }
          if (i2 === ien - 1) {
            src.val = val;
            src.type = typeof val === "function" ? "function" : $6.isPlainObject(val) ? "object" : "other";
          } else {
            struct = method ? src.methodExt : src.propExt;
          }
        }
      };
      _Api.registerPlural = _api_registerPlural = function(pluralName, singularName, val) {
        _Api.register(pluralName, val);
        _Api.register(singularName, function() {
          var ret = val.apply(this, arguments);
          if (ret === this) {
            return this;
          } else if (ret instanceof _Api) {
            return ret.length ? Array.isArray(ret[0]) ? new _Api(ret.context, ret[0]) : (
              // Array results are 'enhanced'
              ret[0]
            ) : void 0;
          }
          return ret;
        });
      };
      var __table_selector = function(selector, a) {
        if (Array.isArray(selector)) {
          var result = [];
          selector.forEach(function(sel) {
            var inner = __table_selector(sel, a);
            _fnArrayApply(result, inner);
          });
          return result.filter(function(item) {
            return item;
          });
        }
        if (typeof selector === "number") {
          return [a[selector]];
        }
        var nodes = a.map(function(el) {
          return el.nTable;
        });
        return $6(nodes).filter(selector).map(function() {
          var idx = nodes.indexOf(this);
          return a[idx];
        }).toArray();
      };
      _api_register("tables()", function(selector) {
        return selector !== void 0 && selector !== null ? new _Api(__table_selector(selector, this.context)) : this;
      });
      _api_register("table()", function(selector) {
        var tables = this.tables(selector);
        var ctx = tables.context;
        return ctx.length ? new _Api(ctx[0]) : tables;
      });
      [
        ["nodes", "node", "nTable"],
        ["body", "body", "nTBody"],
        ["header", "header", "nTHead"],
        ["footer", "footer", "nTFoot"]
      ].forEach(function(item) {
        _api_registerPlural(
          "tables()." + item[0] + "()",
          "table()." + item[1] + "()",
          function() {
            return this.iterator("table", function(ctx) {
              return ctx[item[2]];
            }, 1);
          }
        );
      });
      [
        ["header", "aoHeader"],
        ["footer", "aoFooter"]
      ].forEach(function(item) {
        _api_register("table()." + item[0] + ".structure()", function(selector) {
          var indexes = this.columns(selector).indexes().flatten();
          var ctx = this.context[0];
          return _fnHeaderLayout(ctx, ctx[item[1]], indexes);
        });
      });
      _api_registerPlural("tables().containers()", "table().container()", function() {
        return this.iterator("table", function(ctx) {
          return ctx.nTableWrapper;
        }, 1);
      });
      _api_register("tables().every()", function(fn2) {
        var that = this;
        return this.iterator("table", function(s, i2) {
          fn2.call(that.table(i2), i2);
        });
      });
      _api_register("caption()", function(value, side) {
        var context = this.context;
        if (value === void 0) {
          var caption = context[0].captionNode;
          return caption && context.length ? caption.innerHTML : null;
        }
        return this.iterator("table", function(ctx) {
          var table = $6(ctx.nTable);
          var caption2 = $6(ctx.captionNode);
          var container = $6(ctx.nTableWrapper);
          if (!caption2.length) {
            caption2 = $6("<caption/>").html(value);
            ctx.captionNode = caption2[0];
            if (!side) {
              table.prepend(caption2);
              side = caption2.css("caption-side");
            }
          }
          caption2.html(value);
          if (side) {
            caption2.css("caption-side", side);
            caption2[0]._captionSide = side;
          }
          if (container.find("div.dataTables_scroll").length) {
            var selector = side === "top" ? "Head" : "Foot";
            container.find("div.dataTables_scroll" + selector + " table").prepend(caption2);
          } else {
            table.prepend(caption2);
          }
        }, 1);
      });
      _api_register("caption.node()", function() {
        var ctx = this.context;
        return ctx.length ? ctx[0].captionNode : null;
      });
      _api_register("draw()", function(paging) {
        return this.iterator("table", function(settings) {
          if (paging === "page") {
            _fnDraw(settings);
          } else {
            if (typeof paging === "string") {
              paging = paging === "full-hold" ? false : true;
            }
            _fnReDraw(settings, paging === false);
          }
        });
      });
      _api_register("page()", function(action) {
        if (action === void 0) {
          return this.page.info().page;
        }
        return this.iterator("table", function(settings) {
          _fnPageChange(settings, action);
        });
      });
      _api_register("page.info()", function() {
        if (this.context.length === 0) {
          return void 0;
        }
        var settings = this.context[0], start2 = settings._iDisplayStart, len = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1, visRecords = settings.fnRecordsDisplay(), all = len === -1;
        return {
          "page": all ? 0 : Math.floor(start2 / len),
          "pages": all ? 1 : Math.ceil(visRecords / len),
          "start": start2,
          "end": settings.fnDisplayEnd(),
          "length": len,
          "recordsTotal": settings.fnRecordsTotal(),
          "recordsDisplay": visRecords,
          "serverSide": _fnDataSource(settings) === "ssp"
        };
      });
      _api_register("page.len()", function(len) {
        if (len === void 0) {
          return this.context.length !== 0 ? this.context[0]._iDisplayLength : void 0;
        }
        return this.iterator("table", function(settings) {
          _fnLengthChange(settings, len);
        });
      });
      var __reload = function(settings, holdPosition, callback) {
        if (callback) {
          var api = new _Api(settings);
          api.one("draw", function() {
            callback(api.ajax.json());
          });
        }
        if (_fnDataSource(settings) == "ssp") {
          _fnReDraw(settings, holdPosition);
        } else {
          _fnProcessingDisplay(settings, true);
          var xhr = settings.jqXHR;
          if (xhr && xhr.readyState !== 4) {
            xhr.abort();
          }
          _fnBuildAjax(settings, {}, function(json) {
            _fnClearTable(settings);
            var data = _fnAjaxDataSrc(settings, json);
            for (var i2 = 0, ien = data.length; i2 < ien; i2++) {
              _fnAddData(settings, data[i2]);
            }
            _fnReDraw(settings, holdPosition);
            _fnInitComplete(settings);
            _fnProcessingDisplay(settings, false);
          });
        }
      };
      _api_register("ajax.json()", function() {
        var ctx = this.context;
        if (ctx.length > 0) {
          return ctx[0].json;
        }
      });
      _api_register("ajax.params()", function() {
        var ctx = this.context;
        if (ctx.length > 0) {
          return ctx[0].oAjaxData;
        }
      });
      _api_register("ajax.reload()", function(callback, resetPaging) {
        return this.iterator("table", function(settings) {
          __reload(settings, resetPaging === false, callback);
        });
      });
      _api_register("ajax.url()", function(url) {
        var ctx = this.context;
        if (url === void 0) {
          if (ctx.length === 0) {
            return void 0;
          }
          ctx = ctx[0];
          return $6.isPlainObject(ctx.ajax) ? ctx.ajax.url : ctx.ajax;
        }
        return this.iterator("table", function(settings) {
          if ($6.isPlainObject(settings.ajax)) {
            settings.ajax.url = url;
          } else {
            settings.ajax = url;
          }
        });
      });
      _api_register("ajax.url().load()", function(callback, resetPaging) {
        return this.iterator("table", function(ctx) {
          __reload(ctx, resetPaging === false, callback);
        });
      });
      var _selector_run = function(type, selector, selectFn, settings, opts) {
        var out = [], res, a, i2, ien, j, jen, selectorType = typeof selector;
        if (!selector || selectorType === "string" || selectorType === "function" || selector.length === void 0) {
          selector = [selector];
        }
        for (i2 = 0, ien = selector.length; i2 < ien; i2++) {
          a = selector[i2] && selector[i2].split && !selector[i2].match(/[[(:]/) ? selector[i2].split(",") : [selector[i2]];
          for (j = 0, jen = a.length; j < jen; j++) {
            res = selectFn(typeof a[j] === "string" ? a[j].trim() : a[j]);
            res = res.filter(function(item) {
              return item !== null && item !== void 0;
            });
            if (res && res.length) {
              out = out.concat(res);
            }
          }
        }
        var ext = _ext.selector[type];
        if (ext.length) {
          for (i2 = 0, ien = ext.length; i2 < ien; i2++) {
            out = ext[i2](settings, opts, out);
          }
        }
        return _unique(out);
      };
      var _selector_opts = function(opts) {
        if (!opts) {
          opts = {};
        }
        if (opts.filter && opts.search === void 0) {
          opts.search = opts.filter;
        }
        return $6.extend({
          search: "none",
          order: "current",
          page: "all"
        }, opts);
      };
      var _selector_first = function(old) {
        var inst = new _Api(old.context[0]);
        if (old.length) {
          inst.push(old[0]);
        }
        inst.selector = old.selector;
        if (inst.length && inst[0].length > 1) {
          inst[0].splice(1);
        }
        return inst;
      };
      var _selector_row_indexes = function(settings, opts) {
        var i2, ien, tmp, a = [], displayFiltered = settings.aiDisplay, displayMaster = settings.aiDisplayMaster;
        var search = opts.search, order2 = opts.order, page = opts.page;
        if (_fnDataSource(settings) == "ssp") {
          return search === "removed" ? [] : _range(0, displayMaster.length);
        }
        if (page == "current") {
          for (i2 = settings._iDisplayStart, ien = settings.fnDisplayEnd(); i2 < ien; i2++) {
            a.push(displayFiltered[i2]);
          }
        } else if (order2 == "current" || order2 == "applied") {
          if (search == "none") {
            a = displayMaster.slice();
          } else if (search == "applied") {
            a = displayFiltered.slice();
          } else if (search == "removed") {
            var displayFilteredMap = {};
            for (i2 = 0, ien = displayFiltered.length; i2 < ien; i2++) {
              displayFilteredMap[displayFiltered[i2]] = null;
            }
            displayMaster.forEach(function(item) {
              if (!Object.prototype.hasOwnProperty.call(displayFilteredMap, item)) {
                a.push(item);
              }
            });
          }
        } else if (order2 == "index" || order2 == "original") {
          for (i2 = 0, ien = settings.aoData.length; i2 < ien; i2++) {
            if (!settings.aoData[i2]) {
              continue;
            }
            if (search == "none") {
              a.push(i2);
            } else {
              tmp = displayFiltered.indexOf(i2);
              if (tmp === -1 && search == "removed" || tmp >= 0 && search == "applied") {
                a.push(i2);
              }
            }
          }
        } else if (typeof order2 === "number") {
          var ordered = _fnSort(settings, order2, "asc");
          if (search === "none") {
            a = ordered;
          } else {
            for (i2 = 0; i2 < ordered.length; i2++) {
              tmp = displayFiltered.indexOf(ordered[i2]);
              if (tmp === -1 && search == "removed" || tmp >= 0 && search == "applied") {
                a.push(ordered[i2]);
              }
            }
          }
        }
        return a;
      };
      var __row_selector = function(settings, selector, opts) {
        var rows;
        var run = function(sel) {
          var selInt = _intVal(sel);
          var aoData = settings.aoData;
          if (selInt !== null && !opts) {
            return [selInt];
          }
          if (!rows) {
            rows = _selector_row_indexes(settings, opts);
          }
          if (selInt !== null && rows.indexOf(selInt) !== -1) {
            return [selInt];
          } else if (sel === null || sel === void 0 || sel === "") {
            return rows;
          }
          if (typeof sel === "function") {
            return rows.map(function(idx) {
              var row = aoData[idx];
              return sel(idx, row._aData, row.nTr) ? idx : null;
            });
          }
          if (sel.nodeName) {
            var rowIdx = sel._DT_RowIndex;
            var cellIdx = sel._DT_CellIndex;
            if (rowIdx !== void 0) {
              return aoData[rowIdx] && aoData[rowIdx].nTr === sel ? [rowIdx] : [];
            } else if (cellIdx) {
              return aoData[cellIdx.row] && aoData[cellIdx.row].nTr === sel.parentNode ? [cellIdx.row] : [];
            } else {
              var host = $6(sel).closest("*[data-dt-row]");
              return host.length ? [host.data("dt-row")] : [];
            }
          }
          if (typeof sel === "string" && sel.charAt(0) === "#") {
            var rowObj = settings.aIds[sel.replace(/^#/, "")];
            if (rowObj !== void 0) {
              return [rowObj.idx];
            }
          }
          var nodes = _removeEmpty(
            _pluck_order(settings.aoData, rows, "nTr")
          );
          return $6(nodes).filter(sel).map(function() {
            return this._DT_RowIndex;
          }).toArray();
        };
        var matched = _selector_run("row", selector, run, settings, opts);
        if (opts.order === "current" || opts.order === "applied") {
          _fnSortDisplay(settings, matched);
        }
        return matched;
      };
      _api_register("rows()", function(selector, opts) {
        if (selector === void 0) {
          selector = "";
        } else if ($6.isPlainObject(selector)) {
          opts = selector;
          selector = "";
        }
        opts = _selector_opts(opts);
        var inst = this.iterator("table", function(settings) {
          return __row_selector(settings, selector, opts);
        }, 1);
        inst.selector.rows = selector;
        inst.selector.opts = opts;
        return inst;
      });
      _api_register("rows().nodes()", function() {
        return this.iterator("row", function(settings, row) {
          return settings.aoData[row].nTr || void 0;
        }, 1);
      });
      _api_register("rows().data()", function() {
        return this.iterator(true, "rows", function(settings, rows) {
          return _pluck_order(settings.aoData, rows, "_aData");
        }, 1);
      });
      _api_registerPlural("rows().cache()", "row().cache()", function(type) {
        return this.iterator("row", function(settings, row) {
          var r = settings.aoData[row];
          return type === "search" ? r._aFilterData : r._aSortData;
        }, 1);
      });
      _api_registerPlural("rows().invalidate()", "row().invalidate()", function(src) {
        return this.iterator("row", function(settings, row) {
          _fnInvalidate(settings, row, src);
        });
      });
      _api_registerPlural("rows().indexes()", "row().index()", function() {
        return this.iterator("row", function(settings, row) {
          return row;
        }, 1);
      });
      _api_registerPlural("rows().ids()", "row().id()", function(hash3) {
        var a = [];
        var context = this.context;
        for (var i2 = 0, ien = context.length; i2 < ien; i2++) {
          for (var j = 0, jen = this[i2].length; j < jen; j++) {
            var id = context[i2].rowIdFn(context[i2].aoData[this[i2][j]]._aData);
            a.push((hash3 === true ? "#" : "") + id);
          }
        }
        return new _Api(context, a);
      });
      _api_registerPlural("rows().remove()", "row().remove()", function() {
        this.iterator("row", function(settings, row) {
          var data = settings.aoData;
          var rowData = data[row];
          var idx = settings.aiDisplayMaster.indexOf(row);
          if (idx !== -1) {
            settings.aiDisplayMaster.splice(idx, 1);
          }
          if (settings._iRecordsDisplay > 0) {
            settings._iRecordsDisplay--;
          }
          _fnLengthOverflow(settings);
          var id = settings.rowIdFn(rowData._aData);
          if (id !== void 0) {
            delete settings.aIds[id];
          }
          data[row] = null;
        });
        return this;
      });
      _api_register("rows.add()", function(rows) {
        var newRows = this.iterator("table", function(settings) {
          var row, i2, ien;
          var out = [];
          for (i2 = 0, ien = rows.length; i2 < ien; i2++) {
            row = rows[i2];
            if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
              out.push(_fnAddTr(settings, row)[0]);
            } else {
              out.push(_fnAddData(settings, row));
            }
          }
          return out;
        }, 1);
        var modRows = this.rows(-1);
        modRows.pop();
        _fnArrayApply(modRows, newRows);
        return modRows;
      });
      _api_register("row()", function(selector, opts) {
        return _selector_first(this.rows(selector, opts));
      });
      _api_register("row().data()", function(data) {
        var ctx = this.context;
        if (data === void 0) {
          return ctx.length && this.length && this[0].length ? ctx[0].aoData[this[0]]._aData : void 0;
        }
        var row = ctx[0].aoData[this[0]];
        row._aData = data;
        if (Array.isArray(data) && row.nTr && row.nTr.id) {
          _fnSetObjectDataFn(ctx[0].rowId)(data, row.nTr.id);
        }
        _fnInvalidate(ctx[0], this[0], "data");
        return this;
      });
      _api_register("row().node()", function() {
        var ctx = this.context;
        if (ctx.length && this.length && this[0].length) {
          var row = ctx[0].aoData[this[0]];
          if (row && row.nTr) {
            return row.nTr;
          }
        }
        return null;
      });
      _api_register("row.add()", function(row) {
        if (row instanceof $6 && row.length) {
          row = row[0];
        }
        var rows = this.iterator("table", function(settings) {
          if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
            return _fnAddTr(settings, row)[0];
          }
          return _fnAddData(settings, row);
        });
        return this.row(rows[0]);
      });
      $6(document2).on("plugin-init.dt", function(e, context) {
        var api = new _Api(context);
        api.on("stateSaveParams.DT", function(e2, settings, d) {
          var idFn = settings.rowIdFn;
          var rows = settings.aiDisplayMaster;
          var ids = [];
          for (var i2 = 0; i2 < rows.length; i2++) {
            var rowIdx = rows[i2];
            var data = settings.aoData[rowIdx];
            if (data._detailsShow) {
              ids.push("#" + idFn(data._aData));
            }
          }
          d.childRows = ids;
        });
        api.on("stateLoaded.DT", function(e2, settings, state) {
          __details_state_load(api, state);
        });
        __details_state_load(api, api.state.loaded());
      });
      var __details_state_load = function(api, state) {
        if (state && state.childRows) {
          api.rows(state.childRows.map(function(id) {
            return id.replace(/([^:\\]*(?:\\.[^:\\]*)*):/g, "$1\\:");
          })).every(function() {
            _fnCallbackFire(api.settings()[0], null, "requestChild", [this]);
          });
        }
      };
      var __details_add = function(ctx, row, data, klass) {
        var rows = [];
        var addRow = function(r, k) {
          if (Array.isArray(r) || r instanceof $6) {
            for (var i2 = 0, ien = r.length; i2 < ien; i2++) {
              addRow(r[i2], k);
            }
            return;
          }
          if (r.nodeName && r.nodeName.toLowerCase() === "tr") {
            r.setAttribute("data-dt-row", row.idx);
            rows.push(r);
          } else {
            var created = $6("<tr><td></td></tr>").attr("data-dt-row", row.idx).addClass(k);
            $6("td", created).addClass(k).html(r)[0].colSpan = _fnVisbleColumns(ctx);
            rows.push(created[0]);
          }
        };
        addRow(data, klass);
        if (row._details) {
          row._details.detach();
        }
        row._details = $6(rows);
        if (row._detailsShow) {
          row._details.insertAfter(row.nTr);
        }
      };
      var __details_state = DataTable3.util.throttle(
        function(ctx) {
          _fnSaveState(ctx[0]);
        },
        500
      );
      var __details_remove = function(api, idx) {
        var ctx = api.context;
        if (ctx.length) {
          var row = ctx[0].aoData[idx !== void 0 ? idx : api[0]];
          if (row && row._details) {
            row._details.remove();
            row._detailsShow = void 0;
            row._details = void 0;
            $6(row.nTr).removeClass("dt-hasChild");
            __details_state(ctx);
          }
        }
      };
      var __details_display = function(api, show) {
        var ctx = api.context;
        if (ctx.length && api.length) {
          var row = ctx[0].aoData[api[0]];
          if (row._details) {
            row._detailsShow = show;
            if (show) {
              row._details.insertAfter(row.nTr);
              $6(row.nTr).addClass("dt-hasChild");
            } else {
              row._details.detach();
              $6(row.nTr).removeClass("dt-hasChild");
            }
            _fnCallbackFire(ctx[0], null, "childRow", [show, api.row(api[0])]);
            __details_events(ctx[0]);
            __details_state(ctx);
          }
        }
      };
      var __details_events = function(settings) {
        var api = new _Api(settings);
        var namespace = ".dt.DT_details";
        var drawEvent = "draw" + namespace;
        var colvisEvent = "column-sizing" + namespace;
        var destroyEvent = "destroy" + namespace;
        var data = settings.aoData;
        api.off(drawEvent + " " + colvisEvent + " " + destroyEvent);
        if (_pluck(data, "_details").length > 0) {
          api.on(drawEvent, function(e, ctx) {
            if (settings !== ctx) {
              return;
            }
            api.rows({ page: "current" }).eq(0).each(function(idx) {
              var row = data[idx];
              if (row._detailsShow) {
                row._details.insertAfter(row.nTr);
              }
            });
          });
          api.on(colvisEvent, function(e, ctx) {
            if (settings !== ctx) {
              return;
            }
            var row, visible = _fnVisbleColumns(ctx);
            for (var i2 = 0, ien = data.length; i2 < ien; i2++) {
              row = data[i2];
              if (row && row._details) {
                row._details.each(function() {
                  var el = $6(this).children("td");
                  if (el.length == 1) {
                    el.attr("colspan", visible);
                  }
                });
              }
            }
          });
          api.on(destroyEvent, function(e, ctx) {
            if (settings !== ctx) {
              return;
            }
            for (var i2 = 0, ien = data.length; i2 < ien; i2++) {
              if (data[i2] && data[i2]._details) {
                __details_remove(api, i2);
              }
            }
          });
        }
      };
      var _emp = "";
      var _child_obj = _emp + "row().child";
      var _child_mth = _child_obj + "()";
      _api_register(_child_mth, function(data, klass) {
        var ctx = this.context;
        if (data === void 0) {
          return ctx.length && this.length && ctx[0].aoData[this[0]] ? ctx[0].aoData[this[0]]._details : void 0;
        } else if (data === true) {
          this.child.show();
        } else if (data === false) {
          __details_remove(this);
        } else if (ctx.length && this.length) {
          __details_add(ctx[0], ctx[0].aoData[this[0]], data, klass);
        }
        return this;
      });
      _api_register([
        _child_obj + ".show()",
        _child_mth + ".show()"
        // only when `child()` was called with parameters (without
      ], function() {
        __details_display(this, true);
        return this;
      });
      _api_register([
        _child_obj + ".hide()",
        _child_mth + ".hide()"
        // only when `child()` was called with parameters (without
      ], function() {
        __details_display(this, false);
        return this;
      });
      _api_register([
        _child_obj + ".remove()",
        _child_mth + ".remove()"
        // only when `child()` was called with parameters (without
      ], function() {
        __details_remove(this);
        return this;
      });
      _api_register(_child_obj + ".isShown()", function() {
        var ctx = this.context;
        if (ctx.length && this.length && ctx[0].aoData[this[0]]) {
          return ctx[0].aoData[this[0]]._detailsShow || false;
        }
        return false;
      });
      var __re_column_selector = /^([^:]+)?:(name|title|visIdx|visible)$/;
      var __columnData = function(settings, column, r1, r2, rows, type) {
        var a = [];
        for (var row = 0, ien = rows.length; row < ien; row++) {
          a.push(_fnGetCellData(settings, rows[row], column, type));
        }
        return a;
      };
      var __column_header = function(settings, column, row) {
        var header = settings.aoHeader;
        var target = row !== void 0 ? row : settings.bSortCellsTop ? 0 : header.length - 1;
        return header[target][column].cell;
      };
      var __column_selector = function(settings, selector, opts) {
        var columns = settings.aoColumns, names = _pluck(columns, "sName"), titles = _pluck(columns, "sTitle"), cells = DataTable3.util.get("[].[].cell")(settings.aoHeader), nodes = _unique(_flatten([], cells));
        var run = function(s) {
          var selInt = _intVal(s);
          if (s === "") {
            return _range(columns.length);
          }
          if (selInt !== null) {
            return [
              selInt >= 0 ? selInt : (
                // Count from left
                columns.length + selInt
              )
              // Count from right (+ because its a negative value)
            ];
          }
          if (typeof s === "function") {
            var rows = _selector_row_indexes(settings, opts);
            return columns.map(function(col, idx2) {
              return s(
                idx2,
                __columnData(settings, idx2, 0, 0, rows),
                __column_header(settings, idx2)
              ) ? idx2 : null;
            });
          }
          var match = typeof s === "string" ? s.match(__re_column_selector) : "";
          if (match) {
            switch (match[2]) {
              case "visIdx":
              case "visible":
                if (match[1] && match[1].match(/^\d+$/)) {
                  var idx = parseInt(match[1], 10);
                  if (idx < 0) {
                    var visColumns = columns.map(function(col, i2) {
                      return col.bVisible ? i2 : null;
                    });
                    return [visColumns[visColumns.length + idx]];
                  }
                  return [_fnVisibleToColumnIndex(settings, idx)];
                }
                return columns.map(function(col, idx2) {
                  if (!col.bVisible) {
                    return null;
                  }
                  if (match[1]) {
                    return $6(nodes[idx2]).filter(match[1]).length > 0 ? idx2 : null;
                  }
                  return idx2;
                });
              case "name":
                return names.map(function(name, i2) {
                  return name === match[1] ? i2 : null;
                });
              case "title":
                return titles.map(function(title, i2) {
                  return title === match[1] ? i2 : null;
                });
              default:
                return [];
            }
          }
          if (s.nodeName && s._DT_CellIndex) {
            return [s._DT_CellIndex.column];
          }
          var jqResult = $6(nodes).filter(s).map(function() {
            return _fnColumnsFromHeader(this);
          }).toArray().sort(function(a, b) {
            return a - b;
          });
          if (jqResult.length || !s.nodeName) {
            return jqResult;
          }
          var host = $6(s).closest("*[data-dt-column]");
          return host.length ? [host.data("dt-column")] : [];
        };
        return _selector_run("column", selector, run, settings, opts);
      };
      var __setColumnVis = function(settings, column, vis) {
        var cols = settings.aoColumns, col = cols[column], data = settings.aoData, cells, i2, ien, tr;
        if (vis === void 0) {
          return col.bVisible;
        }
        if (col.bVisible === vis) {
          return false;
        }
        if (vis) {
          var insertBefore = _pluck(cols, "bVisible").indexOf(true, column + 1);
          for (i2 = 0, ien = data.length; i2 < ien; i2++) {
            if (data[i2]) {
              tr = data[i2].nTr;
              cells = data[i2].anCells;
              if (tr) {
                tr.insertBefore(cells[column], cells[insertBefore] || null);
              }
            }
          }
        } else {
          $6(_pluck(settings.aoData, "anCells", column)).detach();
        }
        col.bVisible = vis;
        _colGroup(settings);
        return true;
      };
      _api_register("columns()", function(selector, opts) {
        if (selector === void 0) {
          selector = "";
        } else if ($6.isPlainObject(selector)) {
          opts = selector;
          selector = "";
        }
        opts = _selector_opts(opts);
        var inst = this.iterator("table", function(settings) {
          return __column_selector(settings, selector, opts);
        }, 1);
        inst.selector.cols = selector;
        inst.selector.opts = opts;
        return inst;
      });
      _api_registerPlural("columns().header()", "column().header()", function(row) {
        return this.iterator("column", function(settings, column) {
          return __column_header(settings, column, row);
        }, 1);
      });
      _api_registerPlural("columns().footer()", "column().footer()", function(row) {
        return this.iterator("column", function(settings, column) {
          var footer = settings.aoFooter;
          if (!footer.length) {
            return null;
          }
          return settings.aoFooter[row !== void 0 ? row : 0][column].cell;
        }, 1);
      });
      _api_registerPlural("columns().data()", "column().data()", function() {
        return this.iterator("column-rows", __columnData, 1);
      });
      _api_registerPlural("columns().render()", "column().render()", function(type) {
        return this.iterator("column-rows", function(settings, column, i2, j, rows) {
          return __columnData(settings, column, i2, j, rows, type);
        }, 1);
      });
      _api_registerPlural("columns().dataSrc()", "column().dataSrc()", function() {
        return this.iterator("column", function(settings, column) {
          return settings.aoColumns[column].mData;
        }, 1);
      });
      _api_registerPlural("columns().cache()", "column().cache()", function(type) {
        return this.iterator("column-rows", function(settings, column, i2, j, rows) {
          return _pluck_order(
            settings.aoData,
            rows,
            type === "search" ? "_aFilterData" : "_aSortData",
            column
          );
        }, 1);
      });
      _api_registerPlural("columns().init()", "column().init()", function() {
        return this.iterator("column", function(settings, column) {
          return settings.aoColumns[column];
        }, 1);
      });
      _api_registerPlural("columns().nodes()", "column().nodes()", function() {
        return this.iterator("column-rows", function(settings, column, i2, j, rows) {
          return _pluck_order(settings.aoData, rows, "anCells", column);
        }, 1);
      });
      _api_registerPlural("columns().titles()", "column().title()", function(title, row) {
        return this.iterator("column", function(settings, column) {
          if (typeof title === "number") {
            row = title;
            title = void 0;
          }
          var span = $6("span.dt-column-title", this.column(column).header(row));
          if (title !== void 0) {
            span.html(title);
            return this;
          }
          return span.html();
        }, 1);
      });
      _api_registerPlural("columns().types()", "column().type()", function() {
        return this.iterator("column", function(settings, column) {
          var type = settings.aoColumns[column].sType;
          if (!type) {
            _fnColumnTypes(settings);
          }
          return type;
        }, 1);
      });
      _api_registerPlural("columns().visible()", "column().visible()", function(vis, calc) {
        var that = this;
        var changed = [];
        var ret = this.iterator("column", function(settings, column) {
          if (vis === void 0) {
            return settings.aoColumns[column].bVisible;
          }
          if (__setColumnVis(settings, column, vis)) {
            changed.push(column);
          }
        });
        if (vis !== void 0) {
          this.iterator("table", function(settings) {
            _fnDrawHead(settings, settings.aoHeader);
            _fnDrawHead(settings, settings.aoFooter);
            if (!settings.aiDisplay.length) {
              $6(settings.nTBody).find("td[colspan]").attr("colspan", _fnVisbleColumns(settings));
            }
            _fnSaveState(settings);
            that.iterator("column", function(settings2, column) {
              if (changed.includes(column)) {
                _fnCallbackFire(settings2, null, "column-visibility", [settings2, column, vis, calc]);
              }
            });
            if (changed.length && (calc === void 0 || calc)) {
              that.columns.adjust();
            }
          });
        }
        return ret;
      });
      _api_registerPlural("columns().widths()", "column().width()", function() {
        var columns = this.columns(":visible").count();
        var row = $6("<tr>").html("<td>" + Array(columns).join("</td><td>") + "</td>");
        $6(this.table().body()).append(row);
        var widths = row.children().map(function() {
          return $6(this).outerWidth();
        });
        row.remove();
        return this.iterator("column", function(settings, column) {
          var visIdx = _fnColumnIndexToVisible(settings, column);
          return visIdx !== null ? widths[visIdx] : 0;
        }, 1);
      });
      _api_registerPlural("columns().indexes()", "column().index()", function(type) {
        return this.iterator("column", function(settings, column) {
          return type === "visible" ? _fnColumnIndexToVisible(settings, column) : column;
        }, 1);
      });
      _api_register("columns.adjust()", function() {
        return this.iterator("table", function(settings) {
          settings.containerWidth = -1;
          _fnAdjustColumnSizing(settings);
        }, 1);
      });
      _api_register("column.index()", function(type, idx) {
        if (this.context.length !== 0) {
          var ctx = this.context[0];
          if (type === "fromVisible" || type === "toData") {
            return _fnVisibleToColumnIndex(ctx, idx);
          } else if (type === "fromData" || type === "toVisible") {
            return _fnColumnIndexToVisible(ctx, idx);
          }
        }
      });
      _api_register("column()", function(selector, opts) {
        return _selector_first(this.columns(selector, opts));
      });
      var __cell_selector = function(settings, selector, opts) {
        var data = settings.aoData;
        var rows = _selector_row_indexes(settings, opts);
        var cells = _removeEmpty(_pluck_order(data, rows, "anCells"));
        var allCells = $6(_flatten([], cells));
        var row;
        var columns = settings.aoColumns.length;
        var a, i2, ien, j, o, host;
        var run = function(s) {
          var fnSelector = typeof s === "function";
          if (s === null || s === void 0 || fnSelector) {
            a = [];
            for (i2 = 0, ien = rows.length; i2 < ien; i2++) {
              row = rows[i2];
              for (j = 0; j < columns; j++) {
                o = {
                  row,
                  column: j
                };
                if (fnSelector) {
                  host = data[row];
                  if (s(o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null)) {
                    a.push(o);
                  }
                } else {
                  a.push(o);
                }
              }
            }
            return a;
          }
          if ($6.isPlainObject(s)) {
            return s.column !== void 0 && s.row !== void 0 && rows.indexOf(s.row) !== -1 ? [s] : [];
          }
          var jqResult = allCells.filter(s).map(function(i3, el) {
            return {
              // use a new object, in case someone changes the values
              row: el._DT_CellIndex.row,
              column: el._DT_CellIndex.column
            };
          }).toArray();
          if (jqResult.length || !s.nodeName) {
            return jqResult;
          }
          host = $6(s).closest("*[data-dt-row]");
          return host.length ? [{
            row: host.data("dt-row"),
            column: host.data("dt-column")
          }] : [];
        };
        return _selector_run("cell", selector, run, settings, opts);
      };
      _api_register("cells()", function(rowSelector, columnSelector, opts) {
        if ($6.isPlainObject(rowSelector)) {
          if (rowSelector.row === void 0) {
            opts = rowSelector;
            rowSelector = null;
          } else {
            opts = columnSelector;
            columnSelector = null;
          }
        }
        if ($6.isPlainObject(columnSelector)) {
          opts = columnSelector;
          columnSelector = null;
        }
        if (columnSelector === null || columnSelector === void 0) {
          return this.iterator("table", function(settings) {
            return __cell_selector(settings, rowSelector, _selector_opts(opts));
          });
        }
        var internalOpts = opts ? {
          page: opts.page,
          order: opts.order,
          search: opts.search
        } : {};
        var columns = this.columns(columnSelector, internalOpts);
        var rows = this.rows(rowSelector, internalOpts);
        var i2, ien, j, jen;
        var cellsNoOpts = this.iterator("table", function(settings, idx) {
          var a = [];
          for (i2 = 0, ien = rows[idx].length; i2 < ien; i2++) {
            for (j = 0, jen = columns[idx].length; j < jen; j++) {
              a.push({
                row: rows[idx][i2],
                column: columns[idx][j]
              });
            }
          }
          return a;
        }, 1);
        var cells = opts && opts.selected ? this.cells(cellsNoOpts, opts) : cellsNoOpts;
        $6.extend(cells.selector, {
          cols: columnSelector,
          rows: rowSelector,
          opts
        });
        return cells;
      });
      _api_registerPlural("cells().nodes()", "cell().node()", function() {
        return this.iterator("cell", function(settings, row, column) {
          var data = settings.aoData[row];
          return data && data.anCells ? data.anCells[column] : void 0;
        }, 1);
      });
      _api_register("cells().data()", function() {
        return this.iterator("cell", function(settings, row, column) {
          return _fnGetCellData(settings, row, column);
        }, 1);
      });
      _api_registerPlural("cells().cache()", "cell().cache()", function(type) {
        type = type === "search" ? "_aFilterData" : "_aSortData";
        return this.iterator("cell", function(settings, row, column) {
          return settings.aoData[row][type][column];
        }, 1);
      });
      _api_registerPlural("cells().render()", "cell().render()", function(type) {
        return this.iterator("cell", function(settings, row, column) {
          return _fnGetCellData(settings, row, column, type);
        }, 1);
      });
      _api_registerPlural("cells().indexes()", "cell().index()", function() {
        return this.iterator("cell", function(settings, row, column) {
          return {
            row,
            column,
            columnVisible: _fnColumnIndexToVisible(settings, column)
          };
        }, 1);
      });
      _api_registerPlural("cells().invalidate()", "cell().invalidate()", function(src) {
        return this.iterator("cell", function(settings, row, column) {
          _fnInvalidate(settings, row, src, column);
        });
      });
      _api_register("cell()", function(rowSelector, columnSelector, opts) {
        return _selector_first(this.cells(rowSelector, columnSelector, opts));
      });
      _api_register("cell().data()", function(data) {
        var ctx = this.context;
        var cell = this[0];
        if (data === void 0) {
          return ctx.length && cell.length ? _fnGetCellData(ctx[0], cell[0].row, cell[0].column) : void 0;
        }
        _fnSetCellData(ctx[0], cell[0].row, cell[0].column, data);
        _fnInvalidate(ctx[0], cell[0].row, "data", cell[0].column);
        return this;
      });
      _api_register("order()", function(order2, dir) {
        var ctx = this.context;
        var args = Array.prototype.slice.call(arguments);
        if (order2 === void 0) {
          return ctx.length !== 0 ? ctx[0].aaSorting : void 0;
        }
        if (typeof order2 === "number") {
          order2 = [[order2, dir]];
        } else if (args.length > 1) {
          order2 = args;
        }
        return this.iterator("table", function(settings) {
          settings.aaSorting = Array.isArray(order2) ? order2.slice() : order2;
        });
      });
      _api_register("order.listener()", function(node, column, callback) {
        return this.iterator("table", function(settings) {
          _fnSortAttachListener(settings, node, {}, column, callback);
        });
      });
      _api_register("order.fixed()", function(set) {
        if (!set) {
          var ctx = this.context;
          var fixed = ctx.length ? ctx[0].aaSortingFixed : void 0;
          return Array.isArray(fixed) ? { pre: fixed } : fixed;
        }
        return this.iterator("table", function(settings) {
          settings.aaSortingFixed = $6.extend(true, {}, set);
        });
      });
      _api_register([
        "columns().order()",
        "column().order()"
      ], function(dir) {
        var that = this;
        if (!dir) {
          return this.iterator("column", function(settings, idx) {
            var sort = _fnSortFlatten(settings);
            for (var i2 = 0, ien = sort.length; i2 < ien; i2++) {
              if (sort[i2].col === idx) {
                return sort[i2].dir;
              }
            }
            return null;
          }, 1);
        } else {
          return this.iterator("table", function(settings, i2) {
            settings.aaSorting = that[i2].map(function(col) {
              return [col, dir];
            });
          });
        }
      });
      _api_registerPlural("columns().orderable()", "column().orderable()", function(directions) {
        return this.iterator("column", function(settings, idx) {
          var col = settings.aoColumns[idx];
          return directions ? col.asSorting : col.bSortable;
        }, 1);
      });
      _api_register("processing()", function(show) {
        return this.iterator("table", function(ctx) {
          _fnProcessingDisplay(ctx, show);
        });
      });
      _api_register("search()", function(input, regex, smart, caseInsen) {
        var ctx = this.context;
        if (input === void 0) {
          return ctx.length !== 0 ? ctx[0].oPreviousSearch.search : void 0;
        }
        return this.iterator("table", function(settings) {
          if (!settings.oFeatures.bFilter) {
            return;
          }
          if (typeof regex === "object") {
            _fnFilterComplete(settings, $6.extend(settings.oPreviousSearch, regex, {
              search: input
            }));
          } else {
            _fnFilterComplete(settings, $6.extend(settings.oPreviousSearch, {
              search: input,
              regex: regex === null ? false : regex,
              smart: smart === null ? true : smart,
              caseInsensitive: caseInsen === null ? true : caseInsen
            }));
          }
        });
      });
      _api_register("search.fixed()", function(name, search) {
        var ret = this.iterator(true, "table", function(settings) {
          var fixed = settings.searchFixed;
          if (!name) {
            return Object.keys(fixed);
          } else if (search === void 0) {
            return fixed[name];
          } else if (search === null) {
            delete fixed[name];
          } else {
            fixed[name] = search;
          }
          return this;
        });
        return name !== void 0 && search === void 0 ? ret[0] : ret;
      });
      _api_registerPlural(
        "columns().search()",
        "column().search()",
        function(input, regex, smart, caseInsen) {
          return this.iterator("column", function(settings, column) {
            var preSearch = settings.aoPreSearchCols;
            if (input === void 0) {
              return preSearch[column].search;
            }
            if (!settings.oFeatures.bFilter) {
              return;
            }
            if (typeof regex === "object") {
              $6.extend(preSearch[column], regex, {
                search: input
              });
            } else {
              $6.extend(preSearch[column], {
                search: input,
                regex: regex === null ? false : regex,
                smart: smart === null ? true : smart,
                caseInsensitive: caseInsen === null ? true : caseInsen
              });
            }
            _fnFilterComplete(settings, settings.oPreviousSearch);
          });
        }
      );
      _api_register(
        [
          "columns().search.fixed()",
          "column().search.fixed()"
        ],
        function(name, search) {
          var ret = this.iterator(true, "column", function(settings, colIdx) {
            var fixed = settings.aoColumns[colIdx].searchFixed;
            if (!name) {
              return Object.keys(fixed);
            } else if (search === void 0) {
              return fixed[name];
            } else if (search === null) {
              delete fixed[name];
            } else {
              fixed[name] = search;
            }
            return this;
          });
          return name !== void 0 && search === void 0 ? ret[0] : ret;
        }
      );
      _api_register("state()", function(set, ignoreTime) {
        if (!set) {
          return this.context.length ? this.context[0].oSavedState : null;
        }
        var setMutate = $6.extend(true, {}, set);
        return this.iterator("table", function(settings) {
          if (ignoreTime !== false) {
            setMutate.time = +/* @__PURE__ */ new Date() + 100;
          }
          _fnImplementState(settings, setMutate, function() {
          });
        });
      });
      _api_register("state.clear()", function() {
        return this.iterator("table", function(settings) {
          settings.fnStateSaveCallback.call(settings.oInstance, settings, {});
        });
      });
      _api_register("state.loaded()", function() {
        return this.context.length ? this.context[0].oLoadedState : null;
      });
      _api_register("state.save()", function() {
        return this.iterator("table", function(settings) {
          _fnSaveState(settings);
        });
      });
      var __bootstrap;
      var __foundation;
      DataTable3.use = function(arg1, arg2) {
        var module2 = typeof arg1 === "string" ? arg2 : arg1;
        var type = typeof arg2 === "string" ? arg2 : arg1;
        if (module2 === void 0 && typeof type === "string") {
          switch (type) {
            case "lib":
            case "jq":
              return $6;
            case "win":
              return window2;
            case "datetime":
              return DataTable3.DateTime;
            case "luxon":
              return __luxon;
            case "moment":
              return __moment;
            case "bootstrap":
              return __bootstrap || window2.bootstrap;
            case "foundation":
              return __foundation || window2.Foundation;
            default:
              return null;
          }
        }
        if (type === "lib" || type === "jq" || module2 && module2.fn && module2.fn.jquery) {
          $6 = module2;
        } else if (type === "win" || module2 && module2.document) {
          window2 = module2;
          document2 = module2.document;
        } else if (type === "datetime" || module2 && module2.type === "DateTime") {
          DataTable3.DateTime = module2;
        } else if (type === "luxon" || module2 && module2.FixedOffsetZone) {
          __luxon = module2;
        } else if (type === "moment" || module2 && module2.isMoment) {
          __moment = module2;
        } else if (type === "bootstrap" || module2 && module2.Modal && module2.Modal.NAME === "modal") {
          __bootstrap = module2;
        } else if (type === "foundation" || module2 && module2.Reveal) {
          __foundation = module2;
        }
      };
      DataTable3.factory = function(root, jq) {
        var is = false;
        if (root && root.document) {
          window2 = root;
          document2 = root.document;
        }
        if (jq && jq.fn && jq.fn.jquery) {
          $6 = jq;
          is = true;
        }
        return is;
      };
      DataTable3.versionCheck = function(version, version2) {
        var aThis = version2 ? version2.split(".") : DataTable3.version.split(".");
        var aThat = version.split(".");
        var iThis, iThat;
        for (var i2 = 0, iLen = aThat.length; i2 < iLen; i2++) {
          iThis = parseInt(aThis[i2], 10) || 0;
          iThat = parseInt(aThat[i2], 10) || 0;
          if (iThis === iThat) {
            continue;
          }
          return iThis > iThat;
        }
        return true;
      };
      DataTable3.isDataTable = function(table) {
        var t = $6(table).get(0);
        var is = false;
        if (table instanceof DataTable3.Api) {
          return true;
        }
        $6.each(DataTable3.settings, function(i2, o) {
          var head = o.nScrollHead ? $6("table", o.nScrollHead)[0] : null;
          var foot = o.nScrollFoot ? $6("table", o.nScrollFoot)[0] : null;
          if (o.nTable === t || head === t || foot === t) {
            is = true;
          }
        });
        return is;
      };
      DataTable3.tables = function(visible) {
        var api = false;
        if ($6.isPlainObject(visible)) {
          api = visible.api;
          visible = visible.visible;
        }
        var a = DataTable3.settings.filter(function(o) {
          return !visible || visible && $6(o.nTable).is(":visible") ? true : false;
        }).map(function(o) {
          return o.nTable;
        });
        return api ? new _Api(a) : a;
      };
      DataTable3.camelToHungarian = _fnCamelToHungarian;
      _api_register("$()", function(selector, opts) {
        var rows = this.rows(opts).nodes(), jqRows = $6(rows);
        return $6([].concat(
          jqRows.filter(selector).toArray(),
          jqRows.find(selector).toArray()
        ));
      });
      $6.each(["on", "one", "off"], function(i2, key) {
        _api_register(key + "()", function() {
          var args = Array.prototype.slice.call(arguments);
          args[0] = args[0].split(/\s/).map(function(e) {
            return !e.match(/\.dt\b/) ? e + ".dt" : e;
          }).join(" ");
          var inst = $6(this.tables().nodes());
          inst[key].apply(inst, args);
          return this;
        });
      });
      _api_register("clear()", function() {
        return this.iterator("table", function(settings) {
          _fnClearTable(settings);
        });
      });
      _api_register("error()", function(msg) {
        return this.iterator("table", function(settings) {
          _fnLog(settings, 0, msg);
        });
      });
      _api_register("settings()", function() {
        return new _Api(this.context, this.context);
      });
      _api_register("init()", function() {
        var ctx = this.context;
        return ctx.length ? ctx[0].oInit : null;
      });
      _api_register("data()", function() {
        return this.iterator("table", function(settings) {
          return _pluck(settings.aoData, "_aData");
        }).flatten();
      });
      _api_register("trigger()", function(name, args, bubbles) {
        return this.iterator("table", function(settings) {
          return _fnCallbackFire(settings, null, name, args, bubbles);
        }).flatten();
      });
      _api_register("ready()", function(fn2) {
        var ctx = this.context;
        if (!fn2) {
          return ctx.length ? ctx[0]._bInitComplete || false : null;
        }
        return this.tables().every(function() {
          var api = this;
          if (this.context[0]._bInitComplete) {
            fn2.call(api);
          } else {
            this.on("init.dt.DT", function() {
              fn2.call(api);
            });
          }
        });
      });
      _api_register("destroy()", function(remove) {
        remove = remove || false;
        return this.iterator("table", function(settings) {
          var classes = settings.oClasses;
          var table = settings.nTable;
          var tbody = settings.nTBody;
          var thead = settings.nTHead;
          var tfoot = settings.nTFoot;
          var jqTable = $6(table);
          var jqTbody = $6(tbody);
          var jqWrapper = $6(settings.nTableWrapper);
          var rows = settings.aoData.map(function(r) {
            return r ? r.nTr : null;
          });
          var orderClasses = classes.order;
          settings.bDestroying = true;
          _fnCallbackFire(settings, "aoDestroyCallback", "destroy", [settings], true);
          if (!remove) {
            new _Api(settings).columns().visible(true);
          }
          if (settings.resizeObserver) {
            settings.resizeObserver.disconnect();
          }
          jqWrapper.off(".DT").find(":not(tbody *)").off(".DT");
          $6(window2).off(".DT-" + settings.sInstance);
          if (table != thead.parentNode) {
            jqTable.children("thead").detach();
            jqTable.append(thead);
          }
          if (tfoot && table != tfoot.parentNode) {
            jqTable.children("tfoot").detach();
            jqTable.append(tfoot);
          }
          $6(thead).find("span.dt-column-order").remove();
          $6(thead).find("span.dt-column-title").each(function() {
            var title = $6(this).html();
            $6(this).parent().append(title);
            $6(this).remove();
          });
          settings.colgroup.remove();
          settings.aaSorting = [];
          settings.aaSortingFixed = [];
          _fnSortingClasses(settings);
          $6(jqTable).find("th, td").removeClass(
            $6.map(DataTable3.ext.type.className, function(v) {
              return v;
            }).join(" ")
          );
          $6("th, td", thead).removeClass(
            orderClasses.none + " " + orderClasses.canAsc + " " + orderClasses.canDesc + " " + orderClasses.isAsc + " " + orderClasses.isDesc
          ).css("width", "").removeAttr("data-dt-column").removeAttr("aria-sort");
          jqTbody.children().detach();
          jqTbody.append(rows);
          var orig = settings.nTableWrapper.parentNode;
          var insertBefore = settings.nTableWrapper.nextSibling;
          var removedMethod = remove ? "remove" : "detach";
          jqTable[removedMethod]();
          jqWrapper[removedMethod]();
          if (!remove && orig) {
            orig.insertBefore(table, insertBefore);
            jqTable.css("width", settings.sDestroyWidth).removeClass(classes.table);
          }
          var idx = DataTable3.settings.indexOf(settings);
          if (idx !== -1) {
            DataTable3.settings.splice(idx, 1);
          }
        });
      });
      $6.each(["column", "row", "cell"], function(i2, type) {
        _api_register(type + "s().every()", function(fn2) {
          var opts = this.selector.opts;
          var api = this;
          var inst;
          var counter = 0;
          return this.iterator("every", function(settings, selectedIdx, tableIdx) {
            inst = api[type](selectedIdx, opts);
            if (type === "cell") {
              fn2.call(inst, inst[0][0].row, inst[0][0].column, tableIdx, counter);
            } else {
              fn2.call(inst, selectedIdx, tableIdx, counter);
            }
            counter++;
          });
        });
      });
      _api_register("i18n()", function(token, def, plural) {
        var ctx = this.context[0];
        var resolved = _fnGetObjectDataFn(token)(ctx.oLanguage);
        if (resolved === void 0) {
          resolved = def;
        }
        if ($6.isPlainObject(resolved)) {
          resolved = plural !== void 0 && resolved[plural] !== void 0 ? resolved[plural] : resolved._;
        }
        return typeof resolved === "string" ? resolved.replace("%d", plural) : resolved;
      });
      DataTable3.version = "2.2.2";
      DataTable3.settings = [];
      DataTable3.models = {};
      DataTable3.models.oSearch = {
        /**
         * Flag to indicate if the filtering should be case insensitive or not
         */
        "caseInsensitive": true,
        /**
         * Applied search term
         */
        "search": "",
        /**
         * Flag to indicate if the search term should be interpreted as a
         * regular expression (true) or not (false) and therefore and special
         * regex characters escaped.
         */
        "regex": false,
        /**
         * Flag to indicate if DataTables is to use its smart filtering or not.
         */
        "smart": true,
        /**
         * Flag to indicate if DataTables should only trigger a search when
         * the return key is pressed.
         */
        "return": false
      };
      DataTable3.models.oRow = {
        /**
         * TR element for the row
         */
        "nTr": null,
        /**
         * Array of TD elements for each row. This is null until the row has been
         * created.
         */
        "anCells": null,
        /**
         * Data object from the original data source for the row. This is either
         * an array if using the traditional form of DataTables, or an object if
         * using mData options. The exact type will depend on the passed in
         * data from the data source, or will be an array if using DOM a data
         * source.
         */
        "_aData": [],
        /**
         * Sorting data cache - this array is ostensibly the same length as the
         * number of columns (although each index is generated only as it is
         * needed), and holds the data that is used for sorting each column in the
         * row. We do this cache generation at the start of the sort in order that
         * the formatting of the sort data need be done only once for each cell
         * per sort. This array should not be read from or written to by anything
         * other than the master sorting methods.
         */
        "_aSortData": null,
        /**
         * Per cell filtering data cache. As per the sort data cache, used to
         * increase the performance of the filtering in DataTables
         */
        "_aFilterData": null,
        /**
         * Filtering data cache. This is the same as the cell filtering cache, but
         * in this case a string rather than an array. This is easily computed with
         * a join on `_aFilterData`, but is provided as a cache so the join isn't
         * needed on every search (memory traded for performance)
         */
        "_sFilterRow": null,
        /**
         * Denote if the original data source was from the DOM, or the data source
         * object. This is used for invalidating data, so DataTables can
         * automatically read data from the original source, unless uninstructed
         * otherwise.
         */
        "src": null,
        /**
         * Index in the aoData array. This saves an indexOf lookup when we have the
         * object, but want to know the index
         */
        "idx": -1,
        /**
         * Cached display value
         */
        displayData: null
      };
      DataTable3.models.oColumn = {
        /**
         * Column index.
         */
        "idx": null,
        /**
         * A list of the columns that sorting should occur on when this column
         * is sorted. That this property is an array allows multi-column sorting
         * to be defined for a column (for example first name / last name columns
         * would benefit from this). The values are integers pointing to the
         * columns to be sorted on (typically it will be a single integer pointing
         * at itself, but that doesn't need to be the case).
         */
        "aDataSort": null,
        /**
         * Define the sorting directions that are applied to the column, in sequence
         * as the column is repeatedly sorted upon - i.e. the first value is used
         * as the sorting direction when the column if first sorted (clicked on).
         * Sort it again (click again) and it will move on to the next index.
         * Repeat until loop.
         */
        "asSorting": null,
        /**
         * Flag to indicate if the column is searchable, and thus should be included
         * in the filtering or not.
         */
        "bSearchable": null,
        /**
         * Flag to indicate if the column is sortable or not.
         */
        "bSortable": null,
        /**
         * Flag to indicate if the column is currently visible in the table or not
         */
        "bVisible": null,
        /**
         * Store for manual type assignment using the `column.type` option. This
         * is held in store so we can manipulate the column's `sType` property.
         */
        "_sManualType": null,
        /**
         * Flag to indicate if HTML5 data attributes should be used as the data
         * source for filtering or sorting. True is either are.
         */
        "_bAttrSrc": false,
        /**
         * Developer definable function that is called whenever a cell is created (Ajax source,
         * etc) or processed for input (DOM source). This can be used as a compliment to mRender
         * allowing you to modify the DOM element (add background colour for example) when the
         * element is available.
         */
        "fnCreatedCell": null,
        /**
         * Function to get data from a cell in a column. You should <b>never</b>
         * access data directly through _aData internally in DataTables - always use
         * the method attached to this property. It allows mData to function as
         * required. This function is automatically assigned by the column
         * initialisation method
         */
        "fnGetData": null,
        /**
         * Function to set data for a cell in the column. You should <b>never</b>
         * set the data directly to _aData internally in DataTables - always use
         * this method. It allows mData to function as required. This function
         * is automatically assigned by the column initialisation method
         */
        "fnSetData": null,
        /**
         * Property to read the value for the cells in the column from the data
         * source array / object. If null, then the default content is used, if a
         * function is given then the return from the function is used.
         */
        "mData": null,
        /**
         * Partner property to mData which is used (only when defined) to get
         * the data - i.e. it is basically the same as mData, but without the
         * 'set' option, and also the data fed to it is the result from mData.
         * This is the rendering method to match the data method of mData.
         */
        "mRender": null,
        /**
         * The class to apply to all TD elements in the table's TBODY for the column
         */
        "sClass": null,
        /**
         * When DataTables calculates the column widths to assign to each column,
         * it finds the longest string in each column and then constructs a
         * temporary table and reads the widths from that. The problem with this
         * is that "mmm" is much wider then "iiii", but the latter is a longer
         * string - thus the calculation can go wrong (doing it properly and putting
         * it into an DOM object and measuring that is horribly(!) slow). Thus as
         * a "work around" we provide this option. It will append its value to the
         * text that is found to be the longest string for the column - i.e. padding.
         */
        "sContentPadding": null,
        /**
         * Allows a default value to be given for a column's data, and will be used
         * whenever a null data source is encountered (this can be because mData
         * is set to null, or because the data source itself is null).
         */
        "sDefaultContent": null,
        /**
         * Name for the column, allowing reference to the column by name as well as
         * by index (needs a lookup to work by name).
         */
        "sName": null,
        /**
         * Custom sorting data type - defines which of the available plug-ins in
         * afnSortData the custom sorting will use - if any is defined.
         */
        "sSortDataType": "std",
        /**
         * Class to be applied to the header element when sorting on this column
         */
        "sSortingClass": null,
        /**
         * Title of the column - what is seen in the TH element (nTh).
         */
        "sTitle": null,
        /**
         * Column sorting and filtering type
         */
        "sType": null,
        /**
         * Width of the column
         */
        "sWidth": null,
        /**
         * Width of the column when it was first "encountered"
         */
        "sWidthOrig": null,
        /** Cached string which is the longest in the column */
        maxLenString: null,
        /**
         * Store for named searches
         */
        searchFixed: null
      };
      DataTable3.defaults = {
        /**
         * An array of data to use for the table, passed in at initialisation which
         * will be used in preference to any data which is already in the DOM. This is
         * particularly useful for constructing tables purely in Javascript, for
         * example with a custom Ajax call.
         */
        "aaData": null,
        /**
         * If ordering is enabled, then DataTables will perform a first pass sort on
         * initialisation. You can define which column(s) the sort is performed
         * upon, and the sorting direction, with this variable. The `sorting` array
         * should contain an array for each column to be sorted initially containing
         * the column's index and a direction string ('asc' or 'desc').
         */
        "aaSorting": [[0, "asc"]],
        /**
         * This parameter is basically identical to the `sorting` parameter, but
         * cannot be overridden by user interaction with the table. What this means
         * is that you could have a column (visible or hidden) which the sorting
         * will always be forced on first - any sorting after that (from the user)
         * will then be performed as required. This can be useful for grouping rows
         * together.
         */
        "aaSortingFixed": [],
        /**
         * DataTables can be instructed to load data to display in the table from a
         * Ajax source. This option defines how that Ajax call is made and where to.
         *
         * The `ajax` property has three different modes of operation, depending on
         * how it is defined. These are:
         *
         * * `string` - Set the URL from where the data should be loaded from.
         * * `object` - Define properties for `jQuery.ajax`.
         * * `function` - Custom data get function
         *
         * `string`
         * --------
         *
         * As a string, the `ajax` property simply defines the URL from which
         * DataTables will load data.
         *
         * `object`
         * --------
         *
         * As an object, the parameters in the object are passed to
         * [jQuery.ajax](https://api.jquery.com/jQuery.ajax/) allowing fine control
         * of the Ajax request. DataTables has a number of default parameters which
         * you can override using this option. Please refer to the jQuery
         * documentation for a full description of the options available, although
         * the following parameters provide additional options in DataTables or
         * require special consideration:
         *
         * * `data` - As with jQuery, `data` can be provided as an object, but it
         *   can also be used as a function to manipulate the data DataTables sends
         *   to the server. The function takes a single parameter, an object of
         *   parameters with the values that DataTables has readied for sending. An
         *   object may be returned which will be merged into the DataTables
         *   defaults, or you can add the items to the object that was passed in and
         *   not return anything from the function. This supersedes `fnServerParams`
         *   from DataTables 1.9-.
         *
         * * `dataSrc` - By default DataTables will look for the property `data` (or
         *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
         *   from an Ajax source or for server-side processing - this parameter
         *   allows that property to be changed. You can use Javascript dotted
         *   object notation to get a data source for multiple levels of nesting, or
         *   it my be used as a function. As a function it takes a single parameter,
         *   the JSON returned from the server, which can be manipulated as
         *   required, with the returned value being that used by DataTables as the
         *   data source for the table.
         *
         * * `success` - Should not be overridden it is used internally in
         *   DataTables. To manipulate / transform the data returned by the server
         *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
         *
         * `function`
         * ----------
         *
         * As a function, making the Ajax call is left up to yourself allowing
         * complete control of the Ajax request. Indeed, if desired, a method other
         * than Ajax could be used to obtain the required data, such as Web storage
         * or an AIR database.
         *
         * The function is given four parameters and no return is required. The
         * parameters are:
         *
         * 1. _object_ - Data to send to the server
         * 2. _function_ - Callback function that must be executed when the required
         *    data has been obtained. That data should be passed into the callback
         *    as the only parameter
         * 3. _object_ - DataTables settings object for the table
         */
        "ajax": null,
        /**
         * This parameter allows you to readily specify the entries in the length drop
         * down menu that DataTables shows when pagination is enabled. It can be
         * either a 1D array of options which will be used for both the displayed
         * option and the value, or a 2D array which will use the array in the first
         * position as the value, and the array in the second position as the
         * displayed options (useful for language strings such as 'All').
         *
         * Note that the `pageLength` property will be automatically set to the
         * first value given in this array, unless `pageLength` is also provided.
         */
        "aLengthMenu": [10, 25, 50, 100],
        /**
         * The `columns` option in the initialisation parameter allows you to define
         * details about the way individual columns behave. For a full list of
         * column options that can be set, please see
         * {@link DataTable.defaults.column}. Note that if you use `columns` to
         * define your columns, you must have an entry in the array for every single
         * column that you have in your table (these can be null if you don't which
         * to specify any options).
         */
        "aoColumns": null,
        /**
         * Very similar to `columns`, `columnDefs` allows you to target a specific
         * column, multiple columns, or all columns, using the `targets` property of
         * each object in the array. This allows great flexibility when creating
         * tables, as the `columnDefs` arrays can be of any length, targeting the
         * columns you specifically want. `columnDefs` may use any of the column
         * options available: {@link DataTable.defaults.column}, but it _must_
         * have `targets` defined in each object in the array. Values in the `targets`
         * array may be:
         *   <ul>
         *     <li>a string - class name will be matched on the TH for the column</li>
         *     <li>0 or a positive integer - column index counting from the left</li>
         *     <li>a negative integer - column index counting from the right</li>
         *     <li>the string "_all" - all columns (i.e. assign a default)</li>
         *   </ul>
         */
        "aoColumnDefs": null,
        /**
         * Basically the same as `search`, this parameter defines the individual column
         * filtering state at initialisation time. The array must be of the same size
         * as the number of columns, and each element be an object with the parameters
         * `search` and `escapeRegex` (the latter is optional). 'null' is also
         * accepted and the default will be used.
         */
        "aoSearchCols": [],
        /**
         * Enable or disable automatic column width calculation. This can be disabled
         * as an optimisation (it takes some time to calculate the widths) if the
         * tables widths are passed in using `columns`.
         */
        "bAutoWidth": true,
        /**
         * Deferred rendering can provide DataTables with a huge speed boost when you
         * are using an Ajax or JS data source for the table. This option, when set to
         * true, will cause DataTables to defer the creation of the table elements for
         * each row until they are needed for a draw - saving a significant amount of
         * time.
         */
        "bDeferRender": true,
        /**
         * Replace a DataTable which matches the given selector and replace it with
         * one which has the properties of the new initialisation object passed. If no
         * table matches the selector, then the new DataTable will be constructed as
         * per normal.
         */
        "bDestroy": false,
        /**
         * Enable or disable filtering of data. Filtering in DataTables is "smart" in
         * that it allows the end user to input multiple words (space separated) and
         * will match a row containing those words, even if not in the order that was
         * specified (this allow matching across multiple columns). Note that if you
         * wish to use filtering in DataTables this must remain 'true' - to remove the
         * default filtering input box and retain filtering abilities, please use
         * {@link DataTable.defaults.dom}.
         */
        "bFilter": true,
        /**
         * Used only for compatiblity with DT1
         * @deprecated
         */
        "bInfo": true,
        /**
         * Used only for compatiblity with DT1
         * @deprecated
         */
        "bLengthChange": true,
        /**
         * Enable or disable pagination.
         */
        "bPaginate": true,
        /**
         * Enable or disable the display of a 'processing' indicator when the table is
         * being processed (e.g. a sort). This is particularly useful for tables with
         * large amounts of data where it can take a noticeable amount of time to sort
         * the entries.
         */
        "bProcessing": false,
        /**
         * Retrieve the DataTables object for the given selector. Note that if the
         * table has already been initialised, this parameter will cause DataTables
         * to simply return the object that has already been set up - it will not take
         * account of any changes you might have made to the initialisation object
         * passed to DataTables (setting this parameter to true is an acknowledgement
         * that you understand this). `destroy` can be used to reinitialise a table if
         * you need.
         */
        "bRetrieve": false,
        /**
         * When vertical (y) scrolling is enabled, DataTables will force the height of
         * the table's viewport to the given height at all times (useful for layout).
         * However, this can look odd when filtering data down to a small data set,
         * and the footer is left "floating" further down. This parameter (when
         * enabled) will cause DataTables to collapse the table's viewport down when
         * the result set will fit within the given Y height.
         */
        "bScrollCollapse": false,
        /**
         * Configure DataTables to use server-side processing. Note that the
         * `ajax` parameter must also be given in order to give DataTables a
         * source to obtain the required data for each draw.
         */
        "bServerSide": false,
        /**
         * Enable or disable sorting of columns. Sorting of individual columns can be
         * disabled by the `sortable` option for each column.
         */
        "bSort": true,
        /**
         * Enable or display DataTables' ability to sort multiple columns at the
         * same time (activated by shift-click by the user).
         */
        "bSortMulti": true,
        /**
         * Allows control over whether DataTables should use the top (true) unique
         * cell that is found for a single column, or the bottom (false - default).
         * This is useful when using complex headers.
         */
        "bSortCellsTop": null,
        /**
         * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
         * `sorting\_3` to the columns which are currently being sorted on. This is
         * presented as a feature switch as it can increase processing time (while
         * classes are removed and added) so for large data sets you might want to
         * turn this off.
         */
        "bSortClasses": true,
        /**
         * Enable or disable state saving. When enabled HTML5 `localStorage` will be
         * used to save table display information such as pagination information,
         * display length, filtering and sorting. As such when the end user reloads
         * the page the display display will match what thy had previously set up.
         */
        "bStateSave": false,
        /**
         * This function is called when a TR element is created (and all TD child
         * elements have been inserted), or registered if using a DOM source, allowing
         * manipulation of the TR element (adding classes etc).
         */
        "fnCreatedRow": null,
        /**
         * This function is called on every 'draw' event, and allows you to
         * dynamically modify any aspect you want about the created DOM.
         */
        "fnDrawCallback": null,
        /**
         * Identical to fnHeaderCallback() but for the table footer this function
         * allows you to modify the table footer on every 'draw' event.
         */
        "fnFooterCallback": null,
        /**
         * When rendering large numbers in the information element for the table
         * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
         * to have a comma separator for the 'thousands' units (e.g. 1 million is
         * rendered as "1,000,000") to help readability for the end user. This
         * function will override the default method DataTables uses.
         */
        "fnFormatNumber": function(toFormat) {
          return toFormat.toString().replace(
            /\B(?=(\d{3})+(?!\d))/g,
            this.oLanguage.sThousands
          );
        },
        /**
         * This function is called on every 'draw' event, and allows you to
         * dynamically modify the header row. This can be used to calculate and
         * display useful information about the table.
         */
        "fnHeaderCallback": null,
        /**
         * The information element can be used to convey information about the current
         * state of the table. Although the internationalisation options presented by
         * DataTables are quite capable of dealing with most customisations, there may
         * be times where you wish to customise the string further. This callback
         * allows you to do exactly that.
         */
        "fnInfoCallback": null,
        /**
         * Called when the table has been initialised. Normally DataTables will
         * initialise sequentially and there will be no need for this function,
         * however, this does not hold true when using external language information
         * since that is obtained using an async XHR call.
         */
        "fnInitComplete": null,
        /**
         * Called at the very start of each table draw and can be used to cancel the
         * draw by returning false, any other return (including undefined) results in
         * the full draw occurring).
         */
        "fnPreDrawCallback": null,
        /**
         * This function allows you to 'post process' each row after it have been
         * generated for each table draw, but before it is rendered on screen. This
         * function might be used for setting the row class name etc.
         */
        "fnRowCallback": null,
        /**
         * Load the table state. With this function you can define from where, and how, the
         * state of a table is loaded. By default DataTables will load from `localStorage`
         * but you might wish to use a server-side database or cookies.
         */
        "fnStateLoadCallback": function(settings) {
          try {
            return JSON.parse(
              (settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
                "DataTables_" + settings.sInstance + "_" + location.pathname
              )
            );
          } catch (e) {
            return {};
          }
        },
        /**
         * Callback which allows modification of the saved state prior to loading that state.
         * This callback is called when the table is loading state from the stored data, but
         * prior to the settings object being modified by the saved state. Note that for
         * plug-in authors, you should use the `stateLoadParams` event to load parameters for
         * a plug-in.
         */
        "fnStateLoadParams": null,
        /**
         * Callback that is called when the state has been loaded from the state saving method
         * and the DataTables settings object has been modified as a result of the loaded state.
         */
        "fnStateLoaded": null,
        /**
         * Save the table state. This function allows you to define where and how the state
         * information for the table is stored By default DataTables will use `localStorage`
         * but you might wish to use a server-side database or cookies.
         */
        "fnStateSaveCallback": function(settings, data) {
          try {
            (settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
              "DataTables_" + settings.sInstance + "_" + location.pathname,
              JSON.stringify(data)
            );
          } catch (e) {
          }
        },
        /**
         * Callback which allows modification of the state to be saved. Called when the table
         * has changed state a new state save is required. This method allows modification of
         * the state saving object prior to actually doing the save, including addition or
         * other state properties or modification. Note that for plug-in authors, you should
         * use the `stateSaveParams` event to save parameters for a plug-in.
         */
        "fnStateSaveParams": null,
        /**
         * Duration for which the saved state information is considered valid. After this period
         * has elapsed the state will be returned to the default.
         * Value is given in seconds.
         */
        "iStateDuration": 7200,
        /**
         * Number of rows to display on a single page when using pagination. If
         * feature enabled (`lengthChange`) then the end user will be able to override
         * this to a custom setting using a pop-up menu.
         */
        "iDisplayLength": 10,
        /**
         * Define the starting point for data display when using DataTables with
         * pagination. Note that this parameter is the number of records, rather than
         * the page number, so if you have 10 records per page and want to start on
         * the third page, it should be "20".
         */
        "iDisplayStart": 0,
        /**
         * By default DataTables allows keyboard navigation of the table (sorting, paging,
         * and filtering) by adding a `tabindex` attribute to the required elements. This
         * allows you to tab through the controls and press the enter key to activate them.
         * The tabindex is default 0, meaning that the tab follows the flow of the document.
         * You can overrule this using this parameter if you wish. Use a value of -1 to
         * disable built-in keyboard navigation.
         */
        "iTabIndex": 0,
        /**
         * Classes that DataTables assigns to the various components and features
         * that it adds to the HTML table. This allows classes to be configured
         * during initialisation in addition to through the static
         * {@link DataTable.ext.oStdClasses} object).
         */
        "oClasses": {},
        /**
         * All strings that DataTables uses in the user interface that it creates
         * are defined in this object, allowing you to modified them individually or
         * completely replace them all as required.
         */
        "oLanguage": {
          /**
           * Strings that are used for WAI-ARIA labels and controls only (these are not
           * actually visible on the page, but will be read by screenreaders, and thus
           * must be internationalised as well).
           */
          "oAria": {
            /**
             * ARIA label that is added to the table headers when the column may be sorted
             */
            "orderable": ": Activate to sort",
            /**
             * ARIA label that is added to the table headers when the column is currently being sorted
             */
            "orderableReverse": ": Activate to invert sorting",
            /**
             * ARIA label that is added to the table headers when the column is currently being 
             * sorted and next step is to remove sorting
             */
            "orderableRemove": ": Activate to remove sorting",
            paginate: {
              first: "First",
              last: "Last",
              next: "Next",
              previous: "Previous",
              number: ""
            }
          },
          /**
           * Pagination string used by DataTables for the built-in pagination
           * control types.
           */
          "oPaginate": {
            /**
             * Label and character for first page button («)
             */
            "sFirst": "\xAB",
            /**
             * Last page button (»)
             */
            "sLast": "\xBB",
            /**
             * Next page button (›)
             */
            "sNext": "\u203A",
            /**
             * Previous page button (‹)
             */
            "sPrevious": "\u2039"
          },
          /**
           * Plural object for the data type the table is showing
           */
          entries: {
            _: "entries",
            1: "entry"
          },
          /**
           * This string is shown in preference to `zeroRecords` when the table is
           * empty of data (regardless of filtering). Note that this is an optional
           * parameter - if it is not given, the value of `zeroRecords` will be used
           * instead (either the default or given value).
           */
          "sEmptyTable": "No data available in table",
          /**
           * This string gives information to the end user about the information
           * that is current on display on the page. The following tokens can be
           * used in the string and will be dynamically replaced as the table
           * display updates. This tokens can be placed anywhere in the string, or
           * removed as needed by the language requires:
           *
           * * `\_START\_` - Display index of the first record on the current page
           * * `\_END\_` - Display index of the last record on the current page
           * * `\_TOTAL\_` - Number of records in the table after filtering
           * * `\_MAX\_` - Number of records in the table without filtering
           * * `\_PAGE\_` - Current page number
           * * `\_PAGES\_` - Total number of pages of data in the table
           */
          "sInfo": "Showing _START_ to _END_ of _TOTAL_ _ENTRIES-TOTAL_",
          /**
           * Display information string for when the table is empty. Typically the
           * format of this string should match `info`.
           */
          "sInfoEmpty": "Showing 0 to 0 of 0 _ENTRIES-TOTAL_",
          /**
           * When a user filters the information in a table, this string is appended
           * to the information (`info`) to give an idea of how strong the filtering
           * is. The variable _MAX_ is dynamically updated.
           */
          "sInfoFiltered": "(filtered from _MAX_ total _ENTRIES-MAX_)",
          /**
           * If can be useful to append extra information to the info string at times,
           * and this variable does exactly that. This information will be appended to
           * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
           * being used) at all times.
           */
          "sInfoPostFix": "",
          /**
           * This decimal place operator is a little different from the other
           * language options since DataTables doesn't output floating point
           * numbers, so it won't ever use this for display of a number. Rather,
           * what this parameter does is modify the sort methods of the table so
           * that numbers which are in a format which has a character other than
           * a period (`.`) as a decimal place will be sorted numerically.
           *
           * Note that numbers with different decimal places cannot be shown in
           * the same table and still be sortable, the table must be consistent.
           * However, multiple different tables on the page can use different
           * decimal place characters.
           */
          "sDecimal": "",
          /**
           * DataTables has a build in number formatter (`formatNumber`) which is
           * used to format large numbers that are used in the table information.
           * By default a comma is used, but this can be trivially changed to any
           * character you wish with this parameter.
           */
          "sThousands": ",",
          /**
           * Detail the action that will be taken when the drop down menu for the
           * pagination length option is changed. The '_MENU_' variable is replaced
           * with a default select list of 10, 25, 50 and 100, and can be replaced
           * with a custom select box if required.
           */
          "sLengthMenu": "_MENU_ _ENTRIES_ per page",
          /**
           * When using Ajax sourced data and during the first draw when DataTables is
           * gathering the data, this message is shown in an empty row in the table to
           * indicate to the end user the the data is being loaded. Note that this
           * parameter is not used when loading data by server-side processing, just
           * Ajax sourced data with client-side processing.
           */
          "sLoadingRecords": "Loading...",
          /**
           * Text which is displayed when the table is processing a user action
           * (usually a sort command or similar).
           */
          "sProcessing": "",
          /**
           * Details the actions that will be taken when the user types into the
           * filtering input text box. The variable "_INPUT_", if used in the string,
           * is replaced with the HTML text box for the filtering input allowing
           * control over where it appears in the string. If "_INPUT_" is not given
           * then the input box is appended to the string automatically.
           */
          "sSearch": "Search:",
          /**
           * Assign a `placeholder` attribute to the search `input` element
           *  @type string
           *  @default 
           *
           *  @dtopt Language
           *  @name DataTable.defaults.language.searchPlaceholder
           */
          "sSearchPlaceholder": "",
          /**
           * All of the language information can be stored in a file on the
           * server-side, which DataTables will look up if this parameter is passed.
           * It must store the URL of the language file, which is in a JSON format,
           * and the object has the same properties as the oLanguage object in the
           * initialiser object (i.e. the above parameters). Please refer to one of
           * the example language files to see how this works in action.
           */
          "sUrl": "",
          /**
           * Text shown inside the table records when the is no information to be
           * displayed after filtering. `emptyTable` is shown when there is simply no
           * information in the table at all (regardless of filtering).
           */
          "sZeroRecords": "No matching records found"
        },
        /** The initial data order is reversed when `desc` ordering */
        orderDescReverse: true,
        /**
         * This parameter allows you to have define the global filtering state at
         * initialisation time. As an object the `search` parameter must be
         * defined, but all other parameters are optional. When `regex` is true,
         * the search string will be treated as a regular expression, when false
         * (default) it will be treated as a straight string. When `smart`
         * DataTables will use it's smart filtering methods (to word match at
         * any point in the data), when false this will not be done.
         */
        "oSearch": $6.extend({}, DataTable3.models.oSearch),
        /**
         * Table and control layout. This replaces the legacy `dom` option.
         */
        layout: {
          topStart: "pageLength",
          topEnd: "search",
          bottomStart: "info",
          bottomEnd: "paging"
        },
        /**
         * Legacy DOM layout option
         */
        "sDom": null,
        /**
         * Search delay option. This will throttle full table searches that use the
         * DataTables provided search input element (it does not effect calls to
         * `dt-api search()`, providing a delay before the search is made.
         */
        "searchDelay": null,
        /**
         * DataTables features six different built-in options for the buttons to
         * display for pagination control:
         *
         * * `numbers` - Page number buttons only
         * * `simple` - 'Previous' and 'Next' buttons only
         * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
         * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
         * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
         * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
         */
        "sPaginationType": "",
        /**
         * Enable horizontal scrolling. When a table is too wide to fit into a
         * certain layout, or you have a large number of columns in the table, you
         * can enable x-scrolling to show the table in a viewport, which can be
         * scrolled. This property can be `true` which will allow the table to
         * scroll horizontally when needed, or any CSS unit, or a number (in which
         * case it will be treated as a pixel measurement). Setting as simply `true`
         * is recommended.
         */
        "sScrollX": "",
        /**
         * This property can be used to force a DataTable to use more width than it
         * might otherwise do when x-scrolling is enabled. For example if you have a
         * table which requires to be well spaced, this parameter is useful for
         * "over-sizing" the table, and thus forcing scrolling. This property can by
         * any CSS unit, or a number (in which case it will be treated as a pixel
         * measurement).
         */
        "sScrollXInner": "",
        /**
         * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
         * to the given height, and enable scrolling for any data which overflows the
         * current viewport. This can be used as an alternative to paging to display
         * a lot of data in a small area (although paging and scrolling can both be
         * enabled at the same time). This property can be any CSS unit, or a number
         * (in which case it will be treated as a pixel measurement).
         */
        "sScrollY": "",
        /**
         * __Deprecated__ The functionality provided by this parameter has now been
         * superseded by that provided through `ajax`, which should be used instead.
         *
         * Set the HTTP method that is used to make the Ajax call for server-side
         * processing or Ajax sourced data.
         */
        "sServerMethod": "GET",
        /**
         * DataTables makes use of renderers when displaying HTML elements for
         * a table. These renderers can be added or modified by plug-ins to
         * generate suitable mark-up for a site. For example the Bootstrap
         * integration plug-in for DataTables uses a paging button renderer to
         * display pagination buttons in the mark-up required by Bootstrap.
         *
         * For further information about the renderers available see
         * DataTable.ext.renderer
         */
        "renderer": null,
        /**
         * Set the data property name that DataTables should use to get a row's id
         * to set as the `id` property in the node.
         */
        "rowId": "DT_RowId",
        /**
         * Caption value
         */
        "caption": null,
        /**
         * For server-side processing - use the data from the DOM for the first draw
         */
        iDeferLoading: null
      };
      _fnHungarianMap(DataTable3.defaults);
      DataTable3.defaults.column = {
        /**
         * Define which column(s) an order will occur on for this column. This
         * allows a column's ordering to take multiple columns into account when
         * doing a sort or use the data from a different column. For example first
         * name / last name columns make sense to do a multi-column sort over the
         * two columns.
         */
        "aDataSort": null,
        "iDataSort": -1,
        ariaTitle: "",
        /**
         * You can control the default ordering direction, and even alter the
         * behaviour of the sort handler (i.e. only allow ascending ordering etc)
         * using this parameter.
         */
        "asSorting": ["asc", "desc", ""],
        /**
         * Enable or disable filtering on the data in this column.
         */
        "bSearchable": true,
        /**
         * Enable or disable ordering on this column.
         */
        "bSortable": true,
        /**
         * Enable or disable the display of this column.
         */
        "bVisible": true,
        /**
         * Developer definable function that is called whenever a cell is created (Ajax source,
         * etc) or processed for input (DOM source). This can be used as a compliment to mRender
         * allowing you to modify the DOM element (add background colour for example) when the
         * element is available.
         */
        "fnCreatedCell": null,
        /**
         * This property can be used to read data from any data source property,
         * including deeply nested objects / properties. `data` can be given in a
         * number of different ways which effect its behaviour:
         *
         * * `integer` - treated as an array index for the data source. This is the
         *   default that DataTables uses (incrementally increased for each column).
         * * `string` - read an object property from the data source. There are
         *   three 'special' options that can be used in the string to alter how
         *   DataTables reads the data from the source object:
         *    * `.` - Dotted Javascript notation. Just as you use a `.` in
         *      Javascript to read from nested objects, so to can the options
         *      specified in `data`. For example: `browser.version` or
         *      `browser.name`. If your object parameter name contains a period, use
         *      `\\` to escape it - i.e. `first\\.name`.
         *    * `[]` - Array notation. DataTables can automatically combine data
         *      from and array source, joining the data with the characters provided
         *      between the two brackets. For example: `name[, ]` would provide a
         *      comma-space separated list from the source array. If no characters
         *      are provided between the brackets, the original array source is
         *      returned.
         *    * `()` - Function notation. Adding `()` to the end of a parameter will
         *      execute a function of the name given. For example: `browser()` for a
         *      simple function on the data source, `browser.version()` for a
         *      function in a nested property or even `browser().version` to get an
         *      object property if the function called returns an object. Note that
         *      function notation is recommended for use in `render` rather than
         *      `data` as it is much simpler to use as a renderer.
         * * `null` - use the original data source for the row rather than plucking
         *   data directly from it. This action has effects on two other
         *   initialisation options:
         *    * `defaultContent` - When null is given as the `data` option and
         *      `defaultContent` is specified for the column, the value defined by
         *      `defaultContent` will be used for the cell.
         *    * `render` - When null is used for the `data` option and the `render`
         *      option is specified for the column, the whole data source for the
         *      row is used for the renderer.
         * * `function` - the function given will be executed whenever DataTables
         *   needs to set or get the data for a cell in the column. The function
         *   takes three parameters:
         *    * Parameters:
         *      * `{array|object}` The data source for the row
         *      * `{string}` The type call data requested - this will be 'set' when
         *        setting data or 'filter', 'display', 'type', 'sort' or undefined
         *        when gathering data. Note that when `undefined` is given for the
         *        type DataTables expects to get the raw data for the object back<
         *      * `{*}` Data to set when the second parameter is 'set'.
         *    * Return:
         *      * The return value from the function is not required when 'set' is
         *        the type of call, but otherwise the return is what will be used
         *        for the data requested.
         *
         * Note that `data` is a getter and setter option. If you just require
         * formatting of data for output, you will likely want to use `render` which
         * is simply a getter and thus simpler to use.
         *
         * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
         * name change reflects the flexibility of this property and is consistent
         * with the naming of mRender. If 'mDataProp' is given, then it will still
         * be used by DataTables, as it automatically maps the old name to the new
         * if required.
         */
        "mData": null,
        /**
         * This property is the rendering partner to `data` and it is suggested that
         * when you want to manipulate data for display (including filtering,
         * sorting etc) without altering the underlying data for the table, use this
         * property. `render` can be considered to be the the read only companion to
         * `data` which is read / write (then as such more complex). Like `data`
         * this option can be given in a number of different ways to effect its
         * behaviour:
         *
         * * `integer` - treated as an array index for the data source. This is the
         *   default that DataTables uses (incrementally increased for each column).
         * * `string` - read an object property from the data source. There are
         *   three 'special' options that can be used in the string to alter how
         *   DataTables reads the data from the source object:
         *    * `.` - Dotted Javascript notation. Just as you use a `.` in
         *      Javascript to read from nested objects, so to can the options
         *      specified in `data`. For example: `browser.version` or
         *      `browser.name`. If your object parameter name contains a period, use
         *      `\\` to escape it - i.e. `first\\.name`.
         *    * `[]` - Array notation. DataTables can automatically combine data
         *      from and array source, joining the data with the characters provided
         *      between the two brackets. For example: `name[, ]` would provide a
         *      comma-space separated list from the source array. If no characters
         *      are provided between the brackets, the original array source is
         *      returned.
         *    * `()` - Function notation. Adding `()` to the end of a parameter will
         *      execute a function of the name given. For example: `browser()` for a
         *      simple function on the data source, `browser.version()` for a
         *      function in a nested property or even `browser().version` to get an
         *      object property if the function called returns an object.
         * * `object` - use different data for the different data types requested by
         *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
         *   of the object is the data type the property refers to and the value can
         *   defined using an integer, string or function using the same rules as
         *   `render` normally does. Note that an `_` option _must_ be specified.
         *   This is the default value to use if you haven't specified a value for
         *   the data type requested by DataTables.
         * * `function` - the function given will be executed whenever DataTables
         *   needs to set or get the data for a cell in the column. The function
         *   takes three parameters:
         *    * Parameters:
         *      * {array|object} The data source for the row (based on `data`)
         *      * {string} The type call data requested - this will be 'filter',
         *        'display', 'type' or 'sort'.
         *      * {array|object} The full data source for the row (not based on
         *        `data`)
         *    * Return:
         *      * The return value from the function is what will be used for the
         *        data requested.
         */
        "mRender": null,
        /**
         * Change the cell type created for the column - either TD cells or TH cells. This
         * can be useful as TH cells have semantic meaning in the table body, allowing them
         * to act as a header for a row (you may wish to add scope='row' to the TH elements).
         */
        "sCellType": "td",
        /**
         * Class to give to each cell in this column.
         */
        "sClass": "",
        /**
         * When DataTables calculates the column widths to assign to each column,
         * it finds the longest string in each column and then constructs a
         * temporary table and reads the widths from that. The problem with this
         * is that "mmm" is much wider then "iiii", but the latter is a longer
         * string - thus the calculation can go wrong (doing it properly and putting
         * it into an DOM object and measuring that is horribly(!) slow). Thus as
         * a "work around" we provide this option. It will append its value to the
         * text that is found to be the longest string for the column - i.e. padding.
         * Generally you shouldn't need this!
         */
        "sContentPadding": "",
        /**
         * Allows a default value to be given for a column's data, and will be used
         * whenever a null data source is encountered (this can be because `data`
         * is set to null, or because the data source itself is null).
         */
        "sDefaultContent": null,
        /**
         * This parameter is only used in DataTables' server-side processing. It can
         * be exceptionally useful to know what columns are being displayed on the
         * client side, and to map these to database fields. When defined, the names
         * also allow DataTables to reorder information from the server if it comes
         * back in an unexpected order (i.e. if you switch your columns around on the
         * client-side, your server-side code does not also need updating).
         */
        "sName": "",
        /**
         * Defines a data source type for the ordering which can be used to read
         * real-time information from the table (updating the internally cached
         * version) prior to ordering. This allows ordering to occur on user
         * editable elements such as form inputs.
         */
        "sSortDataType": "std",
        /**
         * The title of this column.
         */
        "sTitle": null,
        /**
         * The type allows you to specify how the data for this column will be
         * ordered. Four types (string, numeric, date and html (which will strip
         * HTML tags before ordering)) are currently available. Note that only date
         * formats understood by Javascript's Date() object will be accepted as type
         * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
         * 'numeric', 'date' or 'html' (by default). Further types can be adding
         * through plug-ins.
         */
        "sType": null,
        /**
         * Defining the width of the column, this parameter may take any CSS value
         * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
         * been given a specific width through this interface ensuring that the table
         * remains readable.
         */
        "sWidth": null
      };
      _fnHungarianMap(DataTable3.defaults.column);
      DataTable3.models.oSettings = {
        /**
         * Primary features of DataTables and their enablement state.
         */
        "oFeatures": {
          /**
           * Flag to say if DataTables should automatically try to calculate the
           * optimum table and columns widths (true) or not (false).
           * Note that this parameter will be set by the initialisation routine. To
           * set a default use {@link DataTable.defaults}.
           */
          "bAutoWidth": null,
          /**
           * Delay the creation of TR and TD elements until they are actually
           * needed by a driven page draw. This can give a significant speed
           * increase for Ajax source and Javascript source data, but makes no
           * difference at all for DOM and server-side processing tables.
           * Note that this parameter will be set by the initialisation routine. To
           * set a default use {@link DataTable.defaults}.
           */
          "bDeferRender": null,
          /**
           * Enable filtering on the table or not. Note that if this is disabled
           * then there is no filtering at all on the table, including fnFilter.
           * To just remove the filtering input use sDom and remove the 'f' option.
           * Note that this parameter will be set by the initialisation routine. To
           * set a default use {@link DataTable.defaults}.
           */
          "bFilter": null,
          /**
           * Used only for compatiblity with DT1
           * @deprecated
           */
          "bInfo": true,
          /**
           * Used only for compatiblity with DT1
           * @deprecated
           */
          "bLengthChange": true,
          /**
           * Pagination enabled or not. Note that if this is disabled then length
           * changing must also be disabled.
           * Note that this parameter will be set by the initialisation routine. To
           * set a default use {@link DataTable.defaults}.
           */
          "bPaginate": null,
          /**
           * Processing indicator enable flag whenever DataTables is enacting a
           * user request - typically an Ajax request for server-side processing.
           * Note that this parameter will be set by the initialisation routine. To
           * set a default use {@link DataTable.defaults}.
           */
          "bProcessing": null,
          /**
           * Server-side processing enabled flag - when enabled DataTables will
           * get all data from the server for every draw - there is no filtering,
           * sorting or paging done on the client-side.
           * Note that this parameter will be set by the initialisation routine. To
           * set a default use {@link DataTable.defaults}.
           */
          "bServerSide": null,
          /**
           * Sorting enablement flag.
           * Note that this parameter will be set by the initialisation routine. To
           * set a default use {@link DataTable.defaults}.
           */
          "bSort": null,
          /**
           * Multi-column sorting
           * Note that this parameter will be set by the initialisation routine. To
           * set a default use {@link DataTable.defaults}.
           */
          "bSortMulti": null,
          /**
           * Apply a class to the columns which are being sorted to provide a
           * visual highlight or not. This can slow things down when enabled since
           * there is a lot of DOM interaction.
           * Note that this parameter will be set by the initialisation routine. To
           * set a default use {@link DataTable.defaults}.
           */
          "bSortClasses": null,
          /**
           * State saving enablement flag.
           * Note that this parameter will be set by the initialisation routine. To
           * set a default use {@link DataTable.defaults}.
           */
          "bStateSave": null
        },
        /**
         * Scrolling settings for a table.
         */
        "oScroll": {
          /**
           * When the table is shorter in height than sScrollY, collapse the
           * table container down to the height of the table (when true).
           * Note that this parameter will be set by the initialisation routine. To
           * set a default use {@link DataTable.defaults}.
           */
          "bCollapse": null,
          /**
           * Width of the scrollbar for the web-browser's platform. Calculated
           * during table initialisation.
           */
          "iBarWidth": 0,
          /**
           * Viewport width for horizontal scrolling. Horizontal scrolling is
           * disabled if an empty string.
           * Note that this parameter will be set by the initialisation routine. To
           * set a default use {@link DataTable.defaults}.
           */
          "sX": null,
          /**
           * Width to expand the table to when using x-scrolling. Typically you
           * should not need to use this.
           * Note that this parameter will be set by the initialisation routine. To
           * set a default use {@link DataTable.defaults}.
           *  @deprecated
           */
          "sXInner": null,
          /**
           * Viewport height for vertical scrolling. Vertical scrolling is disabled
           * if an empty string.
           * Note that this parameter will be set by the initialisation routine. To
           * set a default use {@link DataTable.defaults}.
           */
          "sY": null
        },
        /**
         * Language information for the table.
         */
        "oLanguage": {
          /**
           * Information callback function. See
           * {@link DataTable.defaults.fnInfoCallback}
           */
          "fnInfoCallback": null
        },
        /**
         * Browser support parameters
         */
        "oBrowser": {
          /**
           * Determine if the vertical scrollbar is on the right or left of the
           * scrolling container - needed for rtl language layout, although not
           * all browsers move the scrollbar (Safari).
           */
          "bScrollbarLeft": false,
          /**
           * Browser scrollbar width
           */
          "barWidth": 0
        },
        "ajax": null,
        /**
         * Array referencing the nodes which are used for the features. The
         * parameters of this object match what is allowed by sDom - i.e.
         *   <ul>
         *     <li>'l' - Length changing</li>
         *     <li>'f' - Filtering input</li>
         *     <li>'t' - The table!</li>
         *     <li>'i' - Information</li>
         *     <li>'p' - Pagination</li>
         *     <li>'r' - pRocessing</li>
         *   </ul>
         */
        "aanFeatures": [],
        /**
         * Store data information - see {@link DataTable.models.oRow} for detailed
         * information.
         */
        "aoData": [],
        /**
         * Array of indexes which are in the current display (after filtering etc)
         */
        "aiDisplay": [],
        /**
         * Array of indexes for display - no filtering
         */
        "aiDisplayMaster": [],
        /**
         * Map of row ids to data indexes
         */
        "aIds": {},
        /**
         * Store information about each column that is in use
         */
        "aoColumns": [],
        /**
         * Store information about the table's header
         */
        "aoHeader": [],
        /**
         * Store information about the table's footer
         */
        "aoFooter": [],
        /**
         * Store the applied global search information in case we want to force a
         * research or compare the old search to a new one.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         */
        "oPreviousSearch": {},
        /**
         * Store for named searches
         */
        searchFixed: {},
        /**
         * Store the applied search for each column - see
         * {@link DataTable.models.oSearch} for the format that is used for the
         * filtering information for each column.
         */
        "aoPreSearchCols": [],
        /**
         * Sorting that is applied to the table. Note that the inner arrays are
         * used in the following manner:
         * <ul>
         *   <li>Index 0 - column number</li>
         *   <li>Index 1 - current sorting direction</li>
         * </ul>
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         */
        "aaSorting": null,
        /**
         * Sorting that is always applied to the table (i.e. prefixed in front of
         * aaSorting).
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         */
        "aaSortingFixed": [],
        /**
         * If restoring a table - we should restore its width
         */
        "sDestroyWidth": 0,
        /**
         * Callback functions array for every time a row is inserted (i.e. on a draw).
         */
        "aoRowCallback": [],
        /**
         * Callback functions for the header on each draw.
         */
        "aoHeaderCallback": [],
        /**
         * Callback function for the footer on each draw.
         */
        "aoFooterCallback": [],
        /**
         * Array of callback functions for draw callback functions
         */
        "aoDrawCallback": [],
        /**
         * Array of callback functions for row created function
         */
        "aoRowCreatedCallback": [],
        /**
         * Callback functions for just before the table is redrawn. A return of
         * false will be used to cancel the draw.
         */
        "aoPreDrawCallback": [],
        /**
         * Callback functions for when the table has been initialised.
         */
        "aoInitComplete": [],
        /**
         * Callbacks for modifying the settings to be stored for state saving, prior to
         * saving state.
         */
        "aoStateSaveParams": [],
        /**
         * Callbacks for modifying the settings that have been stored for state saving
         * prior to using the stored values to restore the state.
         */
        "aoStateLoadParams": [],
        /**
         * Callbacks for operating on the settings object once the saved state has been
         * loaded
         */
        "aoStateLoaded": [],
        /**
         * Cache the table ID for quick access
         */
        "sTableId": "",
        /**
         * The TABLE node for the main table
         */
        "nTable": null,
        /**
         * Permanent ref to the thead element
         */
        "nTHead": null,
        /**
         * Permanent ref to the tfoot element - if it exists
         */
        "nTFoot": null,
        /**
         * Permanent ref to the tbody element
         */
        "nTBody": null,
        /**
         * Cache the wrapper node (contains all DataTables controlled elements)
         */
        "nTableWrapper": null,
        /**
         * Indicate if all required information has been read in
         */
        "bInitialised": false,
        /**
         * Information about open rows. Each object in the array has the parameters
         * 'nTr' and 'nParent'
         */
        "aoOpenRows": [],
        /**
         * Dictate the positioning of DataTables' control elements - see
         * {@link DataTable.model.oInit.sDom}.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         */
        "sDom": null,
        /**
         * Search delay (in mS)
         */
        "searchDelay": null,
        /**
         * Which type of pagination should be used.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         */
        "sPaginationType": "two_button",
        /**
         * Number of paging controls on the page. Only used for backwards compatibility
         */
        pagingControls: 0,
        /**
         * The state duration (for `stateSave`) in seconds.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         */
        "iStateDuration": 0,
        /**
         * Array of callback functions for state saving. Each array element is an
         * object with the following parameters:
         *   <ul>
         *     <li>function:fn - function to call. Takes two parameters, oSettings
         *       and the JSON string to save that has been thus far created. Returns
         *       a JSON string to be inserted into a json object
         *       (i.e. '"param": [ 0, 1, 2]')</li>
         *     <li>string:sName - name of callback</li>
         *   </ul>
         */
        "aoStateSave": [],
        /**
         * Array of callback functions for state loading. Each array element is an
         * object with the following parameters:
         *   <ul>
         *     <li>function:fn - function to call. Takes two parameters, oSettings
         *       and the object stored. May return false to cancel state loading</li>
         *     <li>string:sName - name of callback</li>
         *   </ul>
         */
        "aoStateLoad": [],
        /**
         * State that was saved. Useful for back reference
         */
        "oSavedState": null,
        /**
         * State that was loaded. Useful for back reference
         */
        "oLoadedState": null,
        /**
         * Note if draw should be blocked while getting data
         */
        "bAjaxDataGet": true,
        /**
         * The last jQuery XHR object that was used for server-side data gathering.
         * This can be used for working with the XHR information in one of the
         * callbacks
         */
        "jqXHR": null,
        /**
         * JSON returned from the server in the last Ajax request
         */
        "json": void 0,
        /**
         * Data submitted as part of the last Ajax request
         */
        "oAjaxData": void 0,
        /**
         * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
         * required).
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         */
        "sServerMethod": null,
        /**
         * Format numbers for display.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         */
        "fnFormatNumber": null,
        /**
         * List of options that can be used for the user selectable length menu.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         */
        "aLengthMenu": null,
        /**
         * Counter for the draws that the table does. Also used as a tracker for
         * server-side processing
         */
        "iDraw": 0,
        /**
         * Indicate if a redraw is being done - useful for Ajax
         */
        "bDrawing": false,
        /**
         * Draw index (iDraw) of the last error when parsing the returned data
         */
        "iDrawError": -1,
        /**
         * Paging display length
         */
        "_iDisplayLength": 10,
        /**
         * Paging start point - aiDisplay index
         */
        "_iDisplayStart": 0,
        /**
         * Server-side processing - number of records in the result set
         * (i.e. before filtering), Use fnRecordsTotal rather than
         * this property to get the value of the number of records, regardless of
         * the server-side processing setting.
         */
        "_iRecordsTotal": 0,
        /**
         * Server-side processing - number of records in the current display set
         * (i.e. after filtering). Use fnRecordsDisplay rather than
         * this property to get the value of the number of records, regardless of
         * the server-side processing setting.
         */
        "_iRecordsDisplay": 0,
        /**
         * The classes to use for the table
         */
        "oClasses": {},
        /**
         * Flag attached to the settings object so you can check in the draw
         * callback if filtering has been done in the draw. Deprecated in favour of
         * events.
         *  @deprecated
         */
        "bFiltered": false,
        /**
         * Flag attached to the settings object so you can check in the draw
         * callback if sorting has been done in the draw. Deprecated in favour of
         * events.
         *  @deprecated
         */
        "bSorted": false,
        /**
         * Indicate that if multiple rows are in the header and there is more than
         * one unique cell per column, if the top one (true) or bottom one (false)
         * should be used for sorting / title by DataTables.
         * Note that this parameter will be set by the initialisation routine. To
         * set a default use {@link DataTable.defaults}.
         */
        "bSortCellsTop": null,
        /**
         * Initialisation object that is used for the table
         */
        "oInit": null,
        /**
         * Destroy callback functions - for plug-ins to attach themselves to the
         * destroy so they can clean up markup and events.
         */
        "aoDestroyCallback": [],
        /**
         * Get the number of records in the current record set, before filtering
         */
        "fnRecordsTotal": function() {
          return _fnDataSource(this) == "ssp" ? this._iRecordsTotal * 1 : this.aiDisplayMaster.length;
        },
        /**
         * Get the number of records in the current record set, after filtering
         */
        "fnRecordsDisplay": function() {
          return _fnDataSource(this) == "ssp" ? this._iRecordsDisplay * 1 : this.aiDisplay.length;
        },
        /**
         * Get the display end point - aiDisplay index
         */
        "fnDisplayEnd": function() {
          var len = this._iDisplayLength, start2 = this._iDisplayStart, calc = start2 + len, records = this.aiDisplay.length, features = this.oFeatures, paginate = features.bPaginate;
          if (features.bServerSide) {
            return paginate === false || len === -1 ? start2 + records : Math.min(start2 + len, this._iRecordsDisplay);
          } else {
            return !paginate || calc > records || len === -1 ? records : calc;
          }
        },
        /**
         * The DataTables object for this table
         */
        "oInstance": null,
        /**
         * Unique identifier for each instance of the DataTables object. If there
         * is an ID on the table node, then it takes that value, otherwise an
         * incrementing internal counter is used.
         */
        "sInstance": null,
        /**
         * tabindex attribute value that is added to DataTables control elements, allowing
         * keyboard navigation of the table and its controls.
         */
        "iTabIndex": 0,
        /**
         * DIV container for the footer scrolling table if scrolling
         */
        "nScrollHead": null,
        /**
         * DIV container for the footer scrolling table if scrolling
         */
        "nScrollFoot": null,
        /**
         * Last applied sort
         */
        "aLastSort": [],
        /**
         * Stored plug-in instances
         */
        "oPlugins": {},
        /**
         * Function used to get a row's id from the row's data
         */
        "rowIdFn": null,
        /**
         * Data location where to store a row's id
         */
        "rowId": null,
        caption: "",
        captionNode: null,
        colgroup: null,
        /** Delay loading of data */
        deferLoading: null,
        /** Allow auto type detection */
        typeDetect: true,
        /** ResizeObserver for the container div */
        resizeObserver: null,
        /** Keep a record of the last size of the container, so we can skip duplicates */
        containerWidth: -1
      };
      var extPagination = DataTable3.ext.pager;
      $6.extend(extPagination, {
        simple: function() {
          return ["previous", "next"];
        },
        full: function() {
          return ["first", "previous", "next", "last"];
        },
        numbers: function() {
          return ["numbers"];
        },
        simple_numbers: function() {
          return ["previous", "numbers", "next"];
        },
        full_numbers: function() {
          return ["first", "previous", "numbers", "next", "last"];
        },
        first_last: function() {
          return ["first", "last"];
        },
        first_last_numbers: function() {
          return ["first", "numbers", "last"];
        },
        // For testing and plug-ins to use
        _numbers: _pagingNumbers,
        // Number of number buttons - legacy, use `numbers` option for paging feature
        numbers_length: 7
      });
      $6.extend(true, DataTable3.ext.renderer, {
        pagingButton: {
          _: function(settings, buttonType, content, active, disabled) {
            var classes = settings.oClasses.paging;
            var btnClasses = [classes.button];
            var btn;
            if (active) {
              btnClasses.push(classes.active);
            }
            if (disabled) {
              btnClasses.push(classes.disabled);
            }
            if (buttonType === "ellipsis") {
              btn = $6('<span class="ellipsis"></span>').html(content)[0];
            } else {
              btn = $6("<button>", {
                class: btnClasses.join(" "),
                role: "link",
                type: "button"
              }).html(content);
            }
            return {
              display: btn,
              clicker: btn
            };
          }
        },
        pagingContainer: {
          _: function(settings, buttons) {
            return buttons;
          }
        }
      });
      var _filterString = function(stripHtml, normalize) {
        return function(str) {
          if (_empty(str) || typeof str !== "string") {
            return str;
          }
          str = str.replace(_re_new_lines, " ");
          if (stripHtml) {
            str = _stripHtml(str);
          }
          if (normalize) {
            str = _normalize(str, false);
          }
          return str;
        };
      };
      function __mld(dtLib, momentFn, luxonFn, dateFn, arg1) {
        if (__moment) {
          return dtLib[momentFn](arg1);
        } else if (__luxon) {
          return dtLib[luxonFn](arg1);
        }
        return dateFn ? dtLib[dateFn](arg1) : dtLib;
      }
      var __mlWarning = false;
      var __luxon;
      var __moment;
      function resolveWindowLibs() {
        if (window2.luxon && !__luxon) {
          __luxon = window2.luxon;
        }
        if (window2.moment && !__moment) {
          __moment = window2.moment;
        }
      }
      function __mldObj(d, format, locale) {
        var dt;
        resolveWindowLibs();
        if (__moment) {
          dt = __moment.utc(d, format, locale, true);
          if (!dt.isValid()) {
            return null;
          }
        } else if (__luxon) {
          dt = format && typeof d === "string" ? __luxon.DateTime.fromFormat(d, format) : __luxon.DateTime.fromISO(d);
          if (!dt.isValid) {
            return null;
          }
          dt = dt.setLocale(locale);
        } else if (!format) {
          dt = new Date(d);
        } else {
          if (!__mlWarning) {
            alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17");
          }
          __mlWarning = true;
        }
        return dt;
      }
      function __mlHelper(localeString) {
        return function(from, to, locale, def) {
          if (arguments.length === 0) {
            locale = "en";
            to = null;
            from = null;
          } else if (arguments.length === 1) {
            locale = "en";
            to = from;
            from = null;
          } else if (arguments.length === 2) {
            locale = to;
            to = from;
            from = null;
          }
          var typeName = "datetime" + (to ? "-" + to : "");
          if (!DataTable3.ext.type.order[typeName + "-pre"]) {
            DataTable3.type(typeName, {
              detect: function(d) {
                return d === typeName ? typeName : false;
              },
              order: {
                pre: function(d) {
                  return d.valueOf();
                }
              },
              className: "dt-right"
            });
          }
          return function(d, type) {
            if (d === null || d === void 0) {
              if (def === "--now") {
                var local = /* @__PURE__ */ new Date();
                d = new Date(Date.UTC(
                  local.getFullYear(),
                  local.getMonth(),
                  local.getDate(),
                  local.getHours(),
                  local.getMinutes(),
                  local.getSeconds()
                ));
              } else {
                d = "";
              }
            }
            if (type === "type") {
              return typeName;
            }
            if (d === "") {
              return type !== "sort" ? "" : __mldObj("0000-01-01 00:00:00", null, locale);
            }
            if (to !== null && from === to && type !== "sort" && type !== "type" && !(d instanceof Date)) {
              return d;
            }
            var dt = __mldObj(d, from, locale);
            if (dt === null) {
              return d;
            }
            if (type === "sort") {
              return dt;
            }
            var formatted = to === null ? __mld(dt, "toDate", "toJSDate", "")[localeString]() : __mld(dt, "format", "toFormat", "toISOString", to);
            return type === "display" ? _escapeHtml(formatted) : formatted;
          };
        };
      }
      var __thousands = ",";
      var __decimal = ".";
      if (window2.Intl !== void 0) {
        try {
          var num = new Intl.NumberFormat().formatToParts(100000.1);
          for (var i = 0; i < num.length; i++) {
            if (num[i].type === "group") {
              __thousands = num[i].value;
            } else if (num[i].type === "decimal") {
              __decimal = num[i].value;
            }
          }
        } catch (e) {
        }
      }
      DataTable3.datetime = function(format, locale) {
        var typeName = "datetime-" + format;
        if (!locale) {
          locale = "en";
        }
        if (!DataTable3.ext.type.order[typeName]) {
          DataTable3.type(typeName, {
            detect: function(d) {
              var dt = __mldObj(d, format, locale);
              return d === "" || dt ? typeName : false;
            },
            order: {
              pre: function(d) {
                return __mldObj(d, format, locale) || 0;
              }
            },
            className: "dt-right"
          });
        }
      };
      DataTable3.render = {
        date: __mlHelper("toLocaleDateString"),
        datetime: __mlHelper("toLocaleString"),
        time: __mlHelper("toLocaleTimeString"),
        number: function(thousands, decimal, precision, prefix, postfix) {
          if (thousands === null || thousands === void 0) {
            thousands = __thousands;
          }
          if (decimal === null || decimal === void 0) {
            decimal = __decimal;
          }
          return {
            display: function(d) {
              if (typeof d !== "number" && typeof d !== "string") {
                return d;
              }
              if (d === "" || d === null) {
                return d;
              }
              var negative = d < 0 ? "-" : "";
              var flo = parseFloat(d);
              var abs = Math.abs(flo);
              if (abs >= 1e11 || abs < 1e-4 && abs !== 0) {
                var exp = flo.toExponential(precision).split(/e\+?/);
                return exp[0] + " x 10<sup>" + exp[1] + "</sup>";
              }
              if (isNaN(flo)) {
                return _escapeHtml(d);
              }
              flo = flo.toFixed(precision);
              d = Math.abs(flo);
              var intPart = parseInt(d, 10);
              var floatPart = precision ? decimal + (d - intPart).toFixed(precision).substring(2) : "";
              if (intPart === 0 && parseFloat(floatPart) === 0) {
                negative = "";
              }
              return negative + (prefix || "") + intPart.toString().replace(
                /\B(?=(\d{3})+(?!\d))/g,
                thousands
              ) + floatPart + (postfix || "");
            }
          };
        },
        text: function() {
          return {
            display: _escapeHtml,
            filter: _escapeHtml
          };
        }
      };
      var _extTypes = DataTable3.ext.type;
      DataTable3.type = function(name, prop, val) {
        if (!prop) {
          return {
            className: _extTypes.className[name],
            detect: _extTypes.detect.find(function(fn2) {
              return fn2._name === name;
            }),
            order: {
              pre: _extTypes.order[name + "-pre"],
              asc: _extTypes.order[name + "-asc"],
              desc: _extTypes.order[name + "-desc"]
            },
            render: _extTypes.render[name],
            search: _extTypes.search[name]
          };
        }
        var setProp = function(prop2, propVal) {
          _extTypes[prop2][name] = propVal;
        };
        var setDetect = function(detect) {
          Object.defineProperty(detect, "_name", { value: name });
          var idx = _extTypes.detect.findIndex(function(item) {
            return item._name === name;
          });
          if (idx === -1) {
            _extTypes.detect.unshift(detect);
          } else {
            _extTypes.detect.splice(idx, 1, detect);
          }
        };
        var setOrder = function(obj) {
          _extTypes.order[name + "-pre"] = obj.pre;
          _extTypes.order[name + "-asc"] = obj.asc;
          _extTypes.order[name + "-desc"] = obj.desc;
        };
        if (val === void 0) {
          val = prop;
          prop = null;
        }
        if (prop === "className") {
          setProp("className", val);
        } else if (prop === "detect") {
          setDetect(val);
        } else if (prop === "order") {
          setOrder(val);
        } else if (prop === "render") {
          setProp("render", val);
        } else if (prop === "search") {
          setProp("search", val);
        } else if (!prop) {
          if (val.className) {
            setProp("className", val.className);
          }
          if (val.detect !== void 0) {
            setDetect(val.detect);
          }
          if (val.order) {
            setOrder(val.order);
          }
          if (val.render !== void 0) {
            setProp("render", val.render);
          }
          if (val.search !== void 0) {
            setProp("search", val.search);
          }
        }
      };
      DataTable3.types = function() {
        return _extTypes.detect.map(function(fn2) {
          return fn2._name;
        });
      };
      var __diacriticSort = function(a, b) {
        a = a !== null && a !== void 0 ? a.toString().toLowerCase() : "";
        b = b !== null && b !== void 0 ? b.toString().toLowerCase() : "";
        return a.localeCompare(b, navigator.languages[0] || navigator.language, {
          numeric: true,
          ignorePunctuation: true
        });
      };
      var __diacriticHtmlSort = function(a, b) {
        a = _stripHtml(a);
        b = _stripHtml(b);
        return __diacriticSort(a, b);
      };
      DataTable3.type("string", {
        detect: function() {
          return "string";
        },
        order: {
          pre: function(a) {
            return _empty(a) && typeof a !== "boolean" ? "" : typeof a === "string" ? a.toLowerCase() : !a.toString ? "" : a.toString();
          }
        },
        search: _filterString(false, true)
      });
      DataTable3.type("string-utf8", {
        detect: {
          allOf: function(d) {
            return true;
          },
          oneOf: function(d) {
            return !_empty(d) && navigator.languages && typeof d === "string" && d.match(/[^\x00-\x7F]/);
          }
        },
        order: {
          asc: __diacriticSort,
          desc: function(a, b) {
            return __diacriticSort(a, b) * -1;
          }
        },
        search: _filterString(false, true)
      });
      DataTable3.type("html", {
        detect: {
          allOf: function(d) {
            return _empty(d) || typeof d === "string" && d.indexOf("<") !== -1;
          },
          oneOf: function(d) {
            return !_empty(d) && typeof d === "string" && d.indexOf("<") !== -1;
          }
        },
        order: {
          pre: function(a) {
            return _empty(a) ? "" : a.replace ? _stripHtml(a).trim().toLowerCase() : a + "";
          }
        },
        search: _filterString(true, true)
      });
      DataTable3.type("html-utf8", {
        detect: {
          allOf: function(d) {
            return _empty(d) || typeof d === "string" && d.indexOf("<") !== -1;
          },
          oneOf: function(d) {
            return navigator.languages && !_empty(d) && typeof d === "string" && d.indexOf("<") !== -1 && typeof d === "string" && d.match(/[^\x00-\x7F]/);
          }
        },
        order: {
          asc: __diacriticHtmlSort,
          desc: function(a, b) {
            return __diacriticHtmlSort(a, b) * -1;
          }
        },
        search: _filterString(true, true)
      });
      DataTable3.type("date", {
        className: "dt-type-date",
        detect: {
          allOf: function(d) {
            if (d && !(d instanceof Date) && !_re_date.test(d)) {
              return null;
            }
            var parsed = Date.parse(d);
            return parsed !== null && !isNaN(parsed) || _empty(d);
          },
          oneOf: function(d) {
            return d instanceof Date || typeof d === "string" && _re_date.test(d);
          }
        },
        order: {
          pre: function(d) {
            var ts = Date.parse(d);
            return isNaN(ts) ? -Infinity : ts;
          }
        }
      });
      DataTable3.type("html-num-fmt", {
        className: "dt-type-numeric",
        detect: {
          allOf: function(d, settings) {
            var decimal = settings.oLanguage.sDecimal;
            return _htmlNumeric(d, decimal, true, false);
          },
          oneOf: function(d, settings) {
            var decimal = settings.oLanguage.sDecimal;
            return _htmlNumeric(d, decimal, true, false);
          }
        },
        order: {
          pre: function(d, s) {
            var dp = s.oLanguage.sDecimal;
            return __numericReplace(d, dp, _re_html, _re_formatted_numeric);
          }
        },
        search: _filterString(true, true)
      });
      DataTable3.type("html-num", {
        className: "dt-type-numeric",
        detect: {
          allOf: function(d, settings) {
            var decimal = settings.oLanguage.sDecimal;
            return _htmlNumeric(d, decimal, false, true);
          },
          oneOf: function(d, settings) {
            var decimal = settings.oLanguage.sDecimal;
            return _htmlNumeric(d, decimal, false, false);
          }
        },
        order: {
          pre: function(d, s) {
            var dp = s.oLanguage.sDecimal;
            return __numericReplace(d, dp, _re_html);
          }
        },
        search: _filterString(true, true)
      });
      DataTable3.type("num-fmt", {
        className: "dt-type-numeric",
        detect: {
          allOf: function(d, settings) {
            var decimal = settings.oLanguage.sDecimal;
            return _isNumber(d, decimal, true, true);
          },
          oneOf: function(d, settings) {
            var decimal = settings.oLanguage.sDecimal;
            return _isNumber(d, decimal, true, false);
          }
        },
        order: {
          pre: function(d, s) {
            var dp = s.oLanguage.sDecimal;
            return __numericReplace(d, dp, _re_formatted_numeric);
          }
        }
      });
      DataTable3.type("num", {
        className: "dt-type-numeric",
        detect: {
          allOf: function(d, settings) {
            var decimal = settings.oLanguage.sDecimal;
            return _isNumber(d, decimal, false, true);
          },
          oneOf: function(d, settings) {
            var decimal = settings.oLanguage.sDecimal;
            return _isNumber(d, decimal, false, false);
          }
        },
        order: {
          pre: function(d, s) {
            var dp = s.oLanguage.sDecimal;
            return __numericReplace(d, dp);
          }
        }
      });
      var __numericReplace = function(d, decimalPlace, re1, re2) {
        if (d !== 0 && (!d || d === "-")) {
          return -Infinity;
        }
        var type = typeof d;
        if (type === "number" || type === "bigint") {
          return d;
        }
        if (decimalPlace) {
          d = _numToDecimal(d, decimalPlace);
        }
        if (d.replace) {
          if (re1) {
            d = d.replace(re1, "");
          }
          if (re2) {
            d = d.replace(re2, "");
          }
        }
        return d * 1;
      };
      $6.extend(true, DataTable3.ext.renderer, {
        footer: {
          _: function(settings, cell, classes) {
            cell.addClass(classes.tfoot.cell);
          }
        },
        header: {
          _: function(settings, cell, classes) {
            cell.addClass(classes.thead.cell);
            if (!settings.oFeatures.bSort) {
              cell.addClass(classes.order.none);
            }
            var legacyTop = settings.bSortCellsTop;
            var headerRows = cell.closest("thead").find("tr");
            var rowIdx = cell.parent().index();
            if (
              // Cells and rows which have the attribute to disable the icons
              cell.attr("data-dt-order") === "disable" || cell.parent().attr("data-dt-order") === "disable" || // Legacy support for `orderCellsTop`. If it is set, then cells
              // which are not in the top or bottom row of the header (depending
              // on the value) do not get the sorting classes applied to them
              legacyTop === true && rowIdx !== 0 || legacyTop === false && rowIdx !== headerRows.length - 1
            ) {
              return;
            }
            $6(settings.nTable).on("order.dt.DT column-visibility.dt.DT", function(e, ctx) {
              if (settings !== ctx) {
                return;
              }
              var sorting = ctx.sortDetails;
              if (!sorting) {
                return;
              }
              var i2;
              var orderClasses = classes.order;
              var columns = ctx.api.columns(cell);
              var col = settings.aoColumns[columns.flatten()[0]];
              var orderable = columns.orderable().includes(true);
              var ariaType = "";
              var indexes = columns.indexes();
              var sortDirs = columns.orderable(true).flatten();
              var orderedColumns = _pluck(sorting, "col");
              var tabIndex = settings.iTabIndex;
              cell.removeClass(
                orderClasses.isAsc + " " + orderClasses.isDesc
              ).toggleClass(orderClasses.none, !orderable).toggleClass(orderClasses.canAsc, orderable && sortDirs.includes("asc")).toggleClass(orderClasses.canDesc, orderable && sortDirs.includes("desc"));
              var isOrdering = true;
              for (i2 = 0; i2 < indexes.length; i2++) {
                if (!orderedColumns.includes(indexes[i2])) {
                  isOrdering = false;
                }
              }
              if (isOrdering) {
                var orderDirs = columns.order();
                cell.addClass(
                  orderDirs.includes("asc") ? orderClasses.isAsc : "" + orderDirs.includes("desc") ? orderClasses.isDesc : ""
                );
              }
              var firstVis = -1;
              for (i2 = 0; i2 < orderedColumns.length; i2++) {
                if (settings.aoColumns[orderedColumns[i2]].bVisible) {
                  firstVis = orderedColumns[i2];
                  break;
                }
              }
              if (indexes[0] == firstVis) {
                var firstSort = sorting[0];
                var sortOrder = col.asSorting;
                cell.attr("aria-sort", firstSort.dir === "asc" ? "ascending" : "descending");
                ariaType = !sortOrder[firstSort.index + 1] ? "Remove" : "Reverse";
              } else {
                cell.removeAttr("aria-sort");
              }
              if (orderable) {
                var orderSpan = cell.find(".dt-column-order");
                orderSpan.attr("role", "button").attr(
                  "aria-label",
                  orderable ? col.ariaTitle + ctx.api.i18n("oAria.orderable" + ariaType) : col.ariaTitle
                );
                if (tabIndex !== -1) {
                  orderSpan.attr("tabindex", tabIndex);
                }
              }
            });
          }
        },
        layout: {
          _: function(settings, container, items) {
            var classes = settings.oClasses.layout;
            var row = $6("<div/>").attr("id", items.id || null).addClass(items.className || classes.row).appendTo(container);
            DataTable3.ext.renderer.layout._forLayoutRow(items, function(key, val) {
              if (key === "id" || key === "className") {
                return;
              }
              var klass = "";
              if (val.table) {
                row.addClass(classes.tableRow);
                klass += classes.tableCell + " ";
              }
              if (key === "start") {
                klass += classes.start;
              } else if (key === "end") {
                klass += classes.end;
              } else {
                klass += classes.full;
              }
              $6("<div/>").attr({
                id: val.id || null,
                "class": val.className ? val.className : classes.cell + " " + klass
              }).append(val.contents).appendTo(row);
            });
          },
          // Shared for use by the styling frameworks
          _forLayoutRow: function(items, fn2) {
            var layoutEnum = function(x) {
              switch (x) {
                case "":
                  return 0;
                case "start":
                  return 1;
                case "end":
                  return 2;
                default:
                  return 3;
              }
            };
            Object.keys(items).sort(function(a, b) {
              return layoutEnum(a) - layoutEnum(b);
            }).forEach(function(key) {
              fn2(key, items[key]);
            });
          }
        }
      });
      DataTable3.feature = {};
      DataTable3.feature.register = function(name, cb, legacy) {
        DataTable3.ext.features[name] = cb;
        if (legacy) {
          _ext.feature.push({
            cFeature: legacy,
            fnInit: cb
          });
        }
      };
      function _divProp(el, prop, val) {
        if (val) {
          el[prop] = val;
        }
      }
      DataTable3.feature.register("div", function(settings, opts) {
        var n = $6("<div>")[0];
        if (opts) {
          _divProp(n, "className", opts.className);
          _divProp(n, "id", opts.id);
          _divProp(n, "innerHTML", opts.html);
          _divProp(n, "textContent", opts.text);
        }
        return n;
      });
      DataTable3.feature.register("info", function(settings, opts) {
        if (!settings.oFeatures.bInfo) {
          return null;
        }
        var lang = settings.oLanguage, tid = settings.sTableId, n = $6("<div/>", {
          "class": settings.oClasses.info.container
        });
        opts = $6.extend({
          callback: lang.fnInfoCallback,
          empty: lang.sInfoEmpty,
          postfix: lang.sInfoPostFix,
          search: lang.sInfoFiltered,
          text: lang.sInfo
        }, opts);
        settings.aoDrawCallback.push(function(s) {
          _fnUpdateInfo(s, opts, n);
        });
        if (!settings._infoEl) {
          n.attr({
            "aria-live": "polite",
            id: tid + "_info",
            role: "status"
          });
          $6(settings.nTable).attr("aria-describedby", tid + "_info");
          settings._infoEl = n;
        }
        return n;
      }, "i");
      function _fnUpdateInfo(settings, opts, node) {
        var start2 = settings._iDisplayStart + 1, end2 = settings.fnDisplayEnd(), max2 = settings.fnRecordsTotal(), total = settings.fnRecordsDisplay(), out = total ? opts.text : opts.empty;
        if (total !== max2) {
          out += " " + opts.search;
        }
        out += opts.postfix;
        out = _fnMacros(settings, out);
        if (opts.callback) {
          out = opts.callback.call(
            settings.oInstance,
            settings,
            start2,
            end2,
            max2,
            total,
            out
          );
        }
        node.html(out);
        _fnCallbackFire(settings, null, "info", [settings, node[0], out]);
      }
      var __searchCounter = 0;
      DataTable3.feature.register("search", function(settings, opts) {
        if (!settings.oFeatures.bFilter) {
          return null;
        }
        var classes = settings.oClasses.search;
        var tableId = settings.sTableId;
        var language = settings.oLanguage;
        var previousSearch = settings.oPreviousSearch;
        var input = '<input type="search" class="' + classes.input + '"/>';
        opts = $6.extend({
          placeholder: language.sSearchPlaceholder,
          processing: false,
          text: language.sSearch
        }, opts);
        if (opts.text.indexOf("_INPUT_") === -1) {
          opts.text += "_INPUT_";
        }
        opts.text = _fnMacros(settings, opts.text);
        var end2 = opts.text.match(/_INPUT_$/);
        var start2 = opts.text.match(/^_INPUT_/);
        var removed = opts.text.replace(/_INPUT_/, "");
        var str = "<label>" + opts.text + "</label>";
        if (start2) {
          str = "_INPUT_<label>" + removed + "</label>";
        } else if (end2) {
          str = "<label>" + removed + "</label>_INPUT_";
        }
        var filter = $6("<div>").addClass(classes.container).append(str.replace(/_INPUT_/, input));
        filter.find("label").attr("for", "dt-search-" + __searchCounter);
        filter.find("input").attr("id", "dt-search-" + __searchCounter);
        __searchCounter++;
        var searchFn = function(event) {
          var val = this.value;
          if (previousSearch.return && event.key !== "Enter") {
            return;
          }
          if (val != previousSearch.search) {
            _fnProcessingRun(settings, opts.processing, function() {
              previousSearch.search = val;
              _fnFilterComplete(settings, previousSearch);
              settings._iDisplayStart = 0;
              _fnDraw(settings);
            });
          }
        };
        var searchDelay = settings.searchDelay !== null ? settings.searchDelay : 0;
        var jqFilter = $6("input", filter).val(previousSearch.search).attr("placeholder", opts.placeholder).on(
          "keyup.DT search.DT input.DT paste.DT cut.DT",
          searchDelay ? DataTable3.util.debounce(searchFn, searchDelay) : searchFn
        ).on("mouseup.DT", function(e) {
          setTimeout(function() {
            searchFn.call(jqFilter[0], e);
          }, 10);
        }).on("keypress.DT", function(e) {
          if (e.keyCode == 13) {
            return false;
          }
        }).attr("aria-controls", tableId);
        $6(settings.nTable).on("search.dt.DT", function(ev, s) {
          if (settings === s && jqFilter[0] !== document2.activeElement) {
            jqFilter.val(
              typeof previousSearch.search !== "function" ? previousSearch.search : ""
            );
          }
        });
        return filter;
      }, "f");
      DataTable3.feature.register("paging", function(settings, opts) {
        if (!settings.oFeatures.bPaginate) {
          return null;
        }
        opts = $6.extend({
          buttons: DataTable3.ext.pager.numbers_length,
          type: settings.sPaginationType,
          boundaryNumbers: true,
          firstLast: true,
          previousNext: true,
          numbers: true
        }, opts);
        var host = $6("<div/>").addClass(settings.oClasses.paging.container + (opts.type ? " paging_" + opts.type : "")).append(
          $6("<nav>").attr("aria-label", "pagination").addClass(settings.oClasses.paging.nav)
        );
        var draw = function() {
          _pagingDraw(settings, host.children(), opts);
        };
        settings.aoDrawCallback.push(draw);
        $6(settings.nTable).on("column-sizing.dt.DT", draw);
        return host;
      }, "p");
      function _pagingDynamic(opts) {
        var out = [];
        if (opts.numbers) {
          out.push("numbers");
        }
        if (opts.previousNext) {
          out.unshift("previous");
          out.push("next");
        }
        if (opts.firstLast) {
          out.unshift("first");
          out.push("last");
        }
        return out;
      }
      function _pagingDraw(settings, host, opts) {
        if (!settings._bInitComplete) {
          return;
        }
        var plugin = opts.type ? DataTable3.ext.pager[opts.type] : _pagingDynamic, aria = settings.oLanguage.oAria.paginate || {}, start2 = settings._iDisplayStart, len = settings._iDisplayLength, visRecords = settings.fnRecordsDisplay(), all = len === -1, page = all ? 0 : Math.ceil(start2 / len), pages = all ? 1 : Math.ceil(visRecords / len), buttons = [], buttonEls = [], buttonsNested = plugin(opts).map(function(val) {
          return val === "numbers" ? _pagingNumbers(page, pages, opts.buttons, opts.boundaryNumbers) : val;
        });
        buttons = buttons.concat.apply(buttons, buttonsNested);
        for (var i2 = 0; i2 < buttons.length; i2++) {
          var button = buttons[i2];
          var btnInfo = _pagingButtonInfo(settings, button, page, pages);
          var btn = _fnRenderer(settings, "pagingButton")(
            settings,
            button,
            btnInfo.display,
            btnInfo.active,
            btnInfo.disabled
          );
          var ariaLabel = typeof button === "string" ? aria[button] : aria.number ? aria.number + (button + 1) : null;
          $6(btn.clicker).attr({
            "aria-controls": settings.sTableId,
            "aria-disabled": btnInfo.disabled ? "true" : null,
            "aria-current": btnInfo.active ? "page" : null,
            "aria-label": ariaLabel,
            "data-dt-idx": button,
            "tabIndex": btnInfo.disabled ? -1 : settings.iTabIndex && btn.clicker[0].nodeName.toLowerCase() !== "span" ? settings.iTabIndex : null
            // `0` doesn't need a tabIndex since it is the default
          });
          if (typeof button !== "number") {
            $6(btn.clicker).addClass(button);
          }
          _fnBindAction(
            btn.clicker,
            { action: button },
            function(e) {
              e.preventDefault();
              _fnPageChange(settings, e.data.action, true);
            }
          );
          buttonEls.push(btn.display);
        }
        var wrapped = _fnRenderer(settings, "pagingContainer")(
          settings,
          buttonEls
        );
        var activeEl = host.find(document2.activeElement).data("dt-idx");
        host.empty().append(wrapped);
        if (activeEl !== void 0) {
          host.find("[data-dt-idx=" + activeEl + "]").trigger("focus");
        }
        if (buttonEls.length) {
          var outerHeight = $6(buttonEls[0]).outerHeight();
          if (opts.buttons > 1 && // prevent infinite
          outerHeight > 0 && // will be 0 if hidden
          $6(host).height() >= outerHeight * 2 - 10) {
            _pagingDraw(settings, host, $6.extend({}, opts, { buttons: opts.buttons - 2 }));
          }
        }
      }
      function _pagingButtonInfo(settings, button, page, pages) {
        var lang = settings.oLanguage.oPaginate;
        var o = {
          display: "",
          active: false,
          disabled: false
        };
        switch (button) {
          case "ellipsis":
            o.display = "&#x2026;";
            break;
          case "first":
            o.display = lang.sFirst;
            if (page === 0) {
              o.disabled = true;
            }
            break;
          case "previous":
            o.display = lang.sPrevious;
            if (page === 0) {
              o.disabled = true;
            }
            break;
          case "next":
            o.display = lang.sNext;
            if (pages === 0 || page === pages - 1) {
              o.disabled = true;
            }
            break;
          case "last":
            o.display = lang.sLast;
            if (pages === 0 || page === pages - 1) {
              o.disabled = true;
            }
            break;
          default:
            if (typeof button === "number") {
              o.display = settings.fnFormatNumber(button + 1);
              if (page === button) {
                o.active = true;
              }
            }
            break;
        }
        return o;
      }
      function _pagingNumbers(page, pages, buttons, addFirstLast) {
        var numbers = [], half = Math.floor(buttons / 2), before = addFirstLast ? 2 : 1, after = addFirstLast ? 1 : 0;
        if (pages <= buttons) {
          numbers = _range(0, pages);
        } else if (buttons === 1) {
          numbers = [page];
        } else if (buttons === 3) {
          if (page <= 1) {
            numbers = [0, 1, "ellipsis"];
          } else if (page >= pages - 2) {
            numbers = _range(pages - 2, pages);
            numbers.unshift("ellipsis");
          } else {
            numbers = ["ellipsis", page, "ellipsis"];
          }
        } else if (page <= half) {
          numbers = _range(0, buttons - before);
          numbers.push("ellipsis");
          if (addFirstLast) {
            numbers.push(pages - 1);
          }
        } else if (page >= pages - 1 - half) {
          numbers = _range(pages - (buttons - before), pages);
          numbers.unshift("ellipsis");
          if (addFirstLast) {
            numbers.unshift(0);
          }
        } else {
          numbers = _range(page - half + before, page + half - after);
          numbers.push("ellipsis");
          numbers.unshift("ellipsis");
          if (addFirstLast) {
            numbers.push(pages - 1);
            numbers.unshift(0);
          }
        }
        return numbers;
      }
      var __lengthCounter = 0;
      DataTable3.feature.register("pageLength", function(settings, opts) {
        var features = settings.oFeatures;
        if (!features.bPaginate || !features.bLengthChange) {
          return null;
        }
        opts = $6.extend({
          menu: settings.aLengthMenu,
          text: settings.oLanguage.sLengthMenu
        }, opts);
        var classes = settings.oClasses.length, tableId = settings.sTableId, menu = opts.menu, lengths = [], language = [], i2;
        if (Array.isArray(menu[0])) {
          lengths = menu[0];
          language = menu[1];
        } else {
          for (i2 = 0; i2 < menu.length; i2++) {
            if ($6.isPlainObject(menu[i2])) {
              lengths.push(menu[i2].value);
              language.push(menu[i2].label);
            } else {
              lengths.push(menu[i2]);
              language.push(menu[i2]);
            }
          }
        }
        var end2 = opts.text.match(/_MENU_$/);
        var start2 = opts.text.match(/^_MENU_/);
        var removed = opts.text.replace(/_MENU_/, "");
        var str = "<label>" + opts.text + "</label>";
        if (start2) {
          str = "_MENU_<label>" + removed + "</label>";
        } else if (end2) {
          str = "<label>" + removed + "</label>_MENU_";
        }
        var tmpId = "tmp-" + +/* @__PURE__ */ new Date();
        var div = $6("<div/>").addClass(classes.container).append(
          str.replace("_MENU_", '<span id="' + tmpId + '"></span>')
        );
        var textNodes = [];
        Array.prototype.slice.call(div.find("label")[0].childNodes).forEach(function(el) {
          if (el.nodeType === Node.TEXT_NODE) {
            textNodes.push({
              el,
              text: el.textContent
            });
          }
        });
        var updateEntries = function(len) {
          textNodes.forEach(function(node) {
            node.el.textContent = _fnMacros(settings, node.text, len);
          });
        };
        var select = $6("<select/>", {
          "aria-controls": tableId,
          "class": classes.select
        });
        for (i2 = 0; i2 < lengths.length; i2++) {
          select[0][i2] = new Option(
            typeof language[i2] === "number" ? settings.fnFormatNumber(language[i2]) : language[i2],
            lengths[i2]
          );
        }
        div.find("label").attr("for", "dt-length-" + __lengthCounter);
        select.attr("id", "dt-length-" + __lengthCounter);
        __lengthCounter++;
        div.find("#" + tmpId).replaceWith(select);
        $6("select", div).val(settings._iDisplayLength).on("change.DT", function() {
          _fnLengthChange(settings, $6(this).val());
          _fnDraw(settings);
        });
        $6(settings.nTable).on("length.dt.DT", function(e, s, len) {
          if (settings === s) {
            $6("select", div).val(len);
            updateEntries(len);
          }
        });
        updateEntries(settings._iDisplayLength);
        return div;
      }, "l");
      $6.fn.dataTable = DataTable3;
      DataTable3.$ = $6;
      $6.fn.dataTableSettings = DataTable3.settings;
      $6.fn.dataTableExt = DataTable3.ext;
      $6.fn.DataTable = function(opts) {
        return $6(this).dataTable(opts).api();
      };
      $6.each(DataTable3, function(prop, val) {
        $6.fn.DataTable[prop] = val;
      });
      return DataTable3;
    });
  }
});

// node_modules/datatables.net-buttons/js/dataTables.buttons.js
var require_dataTables_buttons = __commonJS({
  "node_modules/datatables.net-buttons/js/dataTables.buttons.js"(exports, module) {
    (function(factory) {
      if (typeof define === "function" && define.amd) {
        define(["jquery", "datatables.net"], function($6) {
          return factory($6, window, document);
        });
      } else if (typeof exports === "object") {
        var jq = require_jquery();
        var cjsRequires = function(root, $6) {
          if (!$6.fn.dataTable) {
            require_dataTables()(root, $6);
          }
        };
        if (typeof window === "undefined") {
          module.exports = function(root, $6) {
            if (!root) {
              root = window;
            }
            if (!$6) {
              $6 = jq(root);
            }
            cjsRequires(root, $6);
            return factory($6, root, root.document);
          };
        } else {
          cjsRequires(window, jq);
          module.exports = factory(jq, window, window.document);
        }
      } else {
        factory(jQuery, window, document);
      }
    })(function($6, window2, document2) {
      "use strict";
      var DataTable3 = $6.fn.dataTable;
      var _instCounter = 0;
      var _buttonCounter = 0;
      var _dtButtons = DataTable3.ext.buttons;
      var _entityDecoder = null;
      function _fadeIn(el, duration, fn2) {
        if ($6.fn.animate) {
          el.stop().fadeIn(duration, fn2);
        } else {
          el.css("display", "block");
          if (fn2) {
            fn2.call(el);
          }
        }
      }
      function _fadeOut(el, duration, fn2) {
        if ($6.fn.animate) {
          el.stop().fadeOut(duration, fn2);
        } else {
          el.css("display", "none");
          if (fn2) {
            fn2.call(el);
          }
        }
      }
      var Buttons2 = function(dt, config) {
        if (!DataTable3.versionCheck("2")) {
          throw "Warning: Buttons requires DataTables 2 or newer";
        }
        if (!(this instanceof Buttons2)) {
          return function(settings) {
            return new Buttons2(settings, dt).container();
          };
        }
        if (typeof config === "undefined") {
          config = {};
        }
        if (config === true) {
          config = {};
        }
        if (Array.isArray(config)) {
          config = { buttons: config };
        }
        this.c = $6.extend(true, {}, Buttons2.defaults, config);
        if (config.buttons) {
          this.c.buttons = config.buttons;
        }
        this.s = {
          dt: new DataTable3.Api(dt),
          buttons: [],
          listenKeys: "",
          namespace: "dtb" + _instCounter++
        };
        this.dom = {
          container: $6("<" + this.c.dom.container.tag + "/>").addClass(
            this.c.dom.container.className
          )
        };
        this._constructor();
      };
      $6.extend(Buttons2.prototype, {
        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         * Public methods
         */
        /**
         * Get the action of a button
         * @param  {int|string} Button index
         * @return {function}
         */
        /**
        * Set the action of a button
        * @param  {node} node Button element
        * @param  {function} action Function to set
        * @return {Buttons} Self for chaining
        */
        action: function(node, action) {
          var button = this._nodeToButton(node);
          if (action === void 0) {
            return button.conf.action;
          }
          button.conf.action = action;
          return this;
        },
        /**
         * Add an active class to the button to make to look active or get current
         * active state.
         * @param  {node} node Button element
         * @param  {boolean} [flag] Enable / disable flag
         * @return {Buttons} Self for chaining or boolean for getter
         */
        active: function(node, flag) {
          var button = this._nodeToButton(node);
          var klass = this.c.dom.button.active;
          var jqNode = $6(button.node);
          if (button.inCollection && this.c.dom.collection.button && this.c.dom.collection.button.active !== void 0) {
            klass = this.c.dom.collection.button.active;
          }
          if (flag === void 0) {
            return jqNode.hasClass(klass);
          }
          jqNode.toggleClass(klass, flag === void 0 ? true : flag);
          return this;
        },
        /**
         * Add a new button
         * @param {object} config Button configuration object, base string name or function
         * @param {int|string} [idx] Button index for where to insert the button
         * @param {boolean} [draw=true] Trigger a draw. Set a false when adding
         *   lots of buttons, until the last button.
         * @return {Buttons} Self for chaining
         */
        add: function(config, idx, draw) {
          var buttons = this.s.buttons;
          if (typeof idx === "string") {
            var split = idx.split("-");
            var base = this.s;
            for (var i = 0, ien = split.length - 1; i < ien; i++) {
              base = base.buttons[split[i] * 1];
            }
            buttons = base.buttons;
            idx = split[split.length - 1] * 1;
          }
          this._expandButton(
            buttons,
            config,
            config !== void 0 ? config.split : void 0,
            (config === void 0 || config.split === void 0 || config.split.length === 0) && base !== void 0,
            false,
            idx
          );
          if (draw === void 0 || draw === true) {
            this._draw();
          }
          return this;
        },
        /**
         * Clear buttons from a collection and then insert new buttons
         */
        collectionRebuild: function(node, newButtons) {
          var button = this._nodeToButton(node);
          if (newButtons !== void 0) {
            var i;
            for (i = button.buttons.length - 1; i >= 0; i--) {
              this.remove(button.buttons[i].node);
            }
            if (button.conf.prefixButtons) {
              newButtons.unshift.apply(newButtons, button.conf.prefixButtons);
            }
            if (button.conf.postfixButtons) {
              newButtons.push.apply(newButtons, button.conf.postfixButtons);
            }
            for (i = 0; i < newButtons.length; i++) {
              var newBtn = newButtons[i];
              this._expandButton(
                button.buttons,
                newBtn,
                newBtn !== void 0 && newBtn.config !== void 0 && newBtn.config.split !== void 0,
                true,
                newBtn.parentConf !== void 0 && newBtn.parentConf.split !== void 0,
                null,
                newBtn.parentConf
              );
            }
          }
          this._draw(button.collection, button.buttons);
        },
        /**
         * Get the container node for the buttons
         * @return {jQuery} Buttons node
         */
        container: function() {
          return this.dom.container;
        },
        /**
         * Disable a button
         * @param  {node} node Button node
         * @return {Buttons} Self for chaining
         */
        disable: function(node) {
          var button = this._nodeToButton(node);
          if (button.isSplit) {
            $6(button.node.childNodes[0]).addClass(this.c.dom.button.disabled).prop("disabled", true);
          } else {
            $6(button.node).addClass(this.c.dom.button.disabled).prop("disabled", true);
          }
          button.disabled = true;
          this._checkSplitEnable();
          return this;
        },
        /**
         * Destroy the instance, cleaning up event handlers and removing DOM
         * elements
         * @return {Buttons} Self for chaining
         */
        destroy: function() {
          $6("body").off("keyup." + this.s.namespace);
          var buttons = this.s.buttons.slice();
          var i, ien;
          for (i = 0, ien = buttons.length; i < ien; i++) {
            this.remove(buttons[i].node);
          }
          this.dom.container.remove();
          var buttonInsts = this.s.dt.settings()[0];
          for (i = 0, ien = buttonInsts.length; i < ien; i++) {
            if (buttonInsts.inst === this) {
              buttonInsts.splice(i, 1);
              break;
            }
          }
          return this;
        },
        /**
         * Enable / disable a button
         * @param  {node} node Button node
         * @param  {boolean} [flag=true] Enable / disable flag
         * @return {Buttons} Self for chaining
         */
        enable: function(node, flag) {
          if (flag === false) {
            return this.disable(node);
          }
          var button = this._nodeToButton(node);
          if (button.isSplit) {
            $6(button.node.childNodes[0]).removeClass(this.c.dom.button.disabled).prop("disabled", false);
          } else {
            $6(button.node).removeClass(this.c.dom.button.disabled).prop("disabled", false);
          }
          button.disabled = false;
          this._checkSplitEnable();
          return this;
        },
        /**
         * Get a button's index
         *
         * This is internally recursive
         * @param {element} node Button to get the index of
         * @return {string} Button index
         */
        index: function(node, nested, buttons) {
          if (!nested) {
            nested = "";
            buttons = this.s.buttons;
          }
          for (var i = 0, ien = buttons.length; i < ien; i++) {
            var inner = buttons[i].buttons;
            if (buttons[i].node === node) {
              return nested + i;
            }
            if (inner && inner.length) {
              var match = this.index(node, i + "-", inner);
              if (match !== null) {
                return match;
              }
            }
          }
          return null;
        },
        /**
         * Get the instance name for the button set selector
         * @return {string} Instance name
         */
        name: function() {
          return this.c.name;
        },
        /**
         * Get a button's node of the buttons container if no button is given
         * @param  {node} [node] Button node
         * @return {jQuery} Button element, or container
         */
        node: function(node) {
          if (!node) {
            return this.dom.container;
          }
          var button = this._nodeToButton(node);
          return $6(button.node);
        },
        /**
         * Set / get a processing class on the selected button
         * @param {element} node Triggering button node
         * @param  {boolean} flag true to add, false to remove, undefined to get
         * @return {boolean|Buttons} Getter value or this if a setter.
         */
        processing: function(node, flag) {
          var dt = this.s.dt;
          var button = this._nodeToButton(node);
          if (flag === void 0) {
            return $6(button.node).hasClass("processing");
          }
          $6(button.node).toggleClass("processing", flag);
          $6(dt.table().node()).triggerHandler("buttons-processing.dt", [
            flag,
            dt.button(node),
            dt,
            $6(node),
            button.conf
          ]);
          return this;
        },
        /**
         * Remove a button.
         * @param  {node} node Button node
         * @return {Buttons} Self for chaining
         */
        remove: function(node) {
          var button = this._nodeToButton(node);
          var host = this._nodeToHost(node);
          var dt = this.s.dt;
          if (button.buttons.length) {
            for (var i = button.buttons.length - 1; i >= 0; i--) {
              this.remove(button.buttons[i].node);
            }
          }
          button.conf.destroying = true;
          if (button.conf.destroy) {
            button.conf.destroy.call(dt.button(node), dt, $6(node), button.conf);
          }
          this._removeKey(button.conf);
          $6(button.node).remove();
          var idx = $6.inArray(button, host);
          host.splice(idx, 1);
          return this;
        },
        /**
         * Get the text for a button
         * @param  {int|string} node Button index
         * @return {string} Button text
         */
        /**
        * Set the text for a button
        * @param  {int|string|function} node Button index
        * @param  {string} label Text
        * @return {Buttons} Self for chaining
        */
        text: function(node, label) {
          var button = this._nodeToButton(node);
          var textNode = button.textNode;
          var dt = this.s.dt;
          var jqNode = $6(button.node);
          var text = function(opt) {
            return typeof opt === "function" ? opt(dt, jqNode, button.conf) : opt;
          };
          if (label === void 0) {
            return text(button.conf.text);
          }
          button.conf.text = label;
          textNode.html(text(label));
          return this;
        },
        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         * Constructor
         */
        /**
         * Buttons constructor
         * @private
         */
        _constructor: function() {
          var that = this;
          var dt = this.s.dt;
          var dtSettings = dt.settings()[0];
          var buttons = this.c.buttons;
          if (!dtSettings._buttons) {
            dtSettings._buttons = [];
          }
          dtSettings._buttons.push({
            inst: this,
            name: this.c.name
          });
          for (var i = 0, ien = buttons.length; i < ien; i++) {
            this.add(buttons[i]);
          }
          dt.on("destroy", function(e, settings) {
            if (settings === dtSettings) {
              that.destroy();
            }
          });
          $6("body").on("keyup." + this.s.namespace, function(e) {
            if (!document2.activeElement || document2.activeElement === document2.body) {
              var character = String.fromCharCode(e.keyCode).toLowerCase();
              if (that.s.listenKeys.toLowerCase().indexOf(character) !== -1) {
                that._keypress(character, e);
              }
            }
          });
        },
        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         * Private methods
         */
        /**
         * Add a new button to the key press listener
         * @param {object} conf Resolved button configuration object
         * @private
         */
        _addKey: function(conf) {
          if (conf.key) {
            this.s.listenKeys += $6.isPlainObject(conf.key) ? conf.key.key : conf.key;
          }
        },
        /**
         * Insert the buttons into the container. Call without parameters!
         * @param  {node} [container] Recursive only - Insert point
         * @param  {array} [buttons] Recursive only - Buttons array
         * @private
         */
        _draw: function(container, buttons) {
          if (!container) {
            container = this.dom.container;
            buttons = this.s.buttons;
          }
          container.children().detach();
          for (var i = 0, ien = buttons.length; i < ien; i++) {
            container.append(buttons[i].inserter);
            container.append(" ");
            if (buttons[i].buttons && buttons[i].buttons.length) {
              this._draw(buttons[i].collection, buttons[i].buttons);
            }
          }
        },
        /**
         * Create buttons from an array of buttons
         * @param  {array} attachTo Buttons array to attach to
         * @param  {object} button Button definition
         * @param  {boolean} inCollection true if the button is in a collection
         * @private
         */
        _expandButton: function(attachTo, button, split, inCollection, inSplit, attachPoint, parentConf) {
          var dt = this.s.dt;
          var isSplit = false;
          var domCollection = this.c.dom.collection;
          var buttons = !Array.isArray(button) ? [button] : button;
          if (button === void 0) {
            buttons = !Array.isArray(split) ? [split] : split;
          }
          for (var i = 0, ien = buttons.length; i < ien; i++) {
            var conf = this._resolveExtends(buttons[i]);
            if (!conf) {
              continue;
            }
            isSplit = conf.config && conf.config.split ? true : false;
            if (Array.isArray(conf)) {
              this._expandButton(
                attachTo,
                conf,
                built !== void 0 && built.conf !== void 0 ? built.conf.split : void 0,
                inCollection,
                parentConf !== void 0 && parentConf.split !== void 0,
                attachPoint,
                parentConf
              );
              continue;
            }
            var built = this._buildButton(
              conf,
              inCollection,
              conf.split !== void 0 || conf.config !== void 0 && conf.config.split !== void 0,
              inSplit
            );
            if (!built) {
              continue;
            }
            if (attachPoint !== void 0 && attachPoint !== null) {
              attachTo.splice(attachPoint, 0, built);
              attachPoint++;
            } else {
              attachTo.push(built);
            }
            if (built.conf.dropIcon && !built.conf.split) {
              $6(built.node).addClass(this.c.dom.button.dropClass).append(this.c.dom.button.dropHtml);
            }
            if (built.conf.buttons) {
              built.collection = $6(
                "<" + domCollection.container.content.tag + "/>"
              );
              built.conf._collection = built.collection;
              this._expandButton(
                built.buttons,
                built.conf.buttons,
                built.conf.split,
                !isSplit,
                isSplit,
                attachPoint,
                built.conf
              );
            }
            if (built.conf.split) {
              built.collection = $6("<" + domCollection.container.tag + "/>");
              built.conf._collection = built.collection;
              for (var j = 0; j < built.conf.split.length; j++) {
                var item = built.conf.split[j];
                if (typeof item === "object") {
                  item.parent = parentConf;
                  if (item.collectionLayout === void 0) {
                    item.collectionLayout = built.conf.collectionLayout;
                  }
                  if (item.dropup === void 0) {
                    item.dropup = built.conf.dropup;
                  }
                  if (item.fade === void 0) {
                    item.fade = built.conf.fade;
                  }
                }
              }
              this._expandButton(
                built.buttons,
                built.conf.buttons,
                built.conf.split,
                !isSplit,
                isSplit,
                attachPoint,
                built.conf
              );
            }
            built.conf.parent = parentConf;
            if (conf.init) {
              conf.init.call(dt.button(built.node), dt, $6(built.node), conf);
            }
          }
        },
        /**
         * Create an individual button
         * @param  {object} config            Resolved button configuration
         * @param  {boolean} inCollection `true` if a collection button
         * @return {object} Completed button description object
         * @private
         */
        _buildButton: function(config, inCollection, isSplit, inSplit) {
          var that = this;
          var configDom = this.c.dom;
          var textNode;
          var dt = this.s.dt;
          var text = function(opt) {
            return typeof opt === "function" ? opt(dt, button, config) : opt;
          };
          var dom = $6.extend(true, {}, configDom.button);
          if (inCollection && isSplit && configDom.collection.split) {
            $6.extend(true, dom, configDom.collection.split.action);
          } else if (inSplit || inCollection) {
            $6.extend(true, dom, configDom.collection.button);
          } else if (isSplit) {
            $6.extend(true, dom, configDom.split.button);
          }
          if (config.spacer) {
            var spacer = $6("<" + dom.spacer.tag + "/>").addClass(
              "dt-button-spacer " + config.style + " " + dom.spacer.className
            ).html(text(config.text));
            return {
              conf: config,
              node: spacer,
              inserter: spacer,
              buttons: [],
              inCollection,
              isSplit,
              collection: null,
              textNode: spacer
            };
          }
          if (config.available && !config.available(dt, config) && !config.html) {
            return false;
          }
          var button;
          if (!config.html) {
            var run = function(e, dt2, button2, config2, done) {
              config2.action.call(dt2.button(button2), e, dt2, button2, config2, done);
              $6(dt2.table().node()).triggerHandler("buttons-action.dt", [
                dt2.button(button2),
                dt2,
                button2,
                config2
              ]);
            };
            var action = function(e, dt2, button2, config2) {
              if (config2.async) {
                that.processing(button2[0], true);
                setTimeout(function() {
                  run(e, dt2, button2, config2, function() {
                    that.processing(button2[0], false);
                  });
                }, config2.async);
              } else {
                run(e, dt2, button2, config2, function() {
                });
              }
            };
            var tag = config.tag || dom.tag;
            var clickBlurs = config.clickBlurs === void 0 ? true : config.clickBlurs;
            button = $6("<" + tag + "/>").addClass(dom.className).attr("tabindex", this.s.dt.settings()[0].iTabIndex).attr("aria-controls", this.s.dt.table().node().id).on("click.dtb", function(e) {
              e.preventDefault();
              if (!button.hasClass(dom.disabled) && config.action) {
                action(e, dt, button, config);
              }
              if (clickBlurs) {
                button.trigger("blur");
              }
            }).on("keypress.dtb", function(e) {
              if (e.keyCode === 13) {
                e.preventDefault();
                if (!button.hasClass(dom.disabled) && config.action) {
                  action(e, dt, button, config);
                }
              }
            });
            if (tag.toLowerCase() === "a") {
              button.attr("href", "#");
            }
            if (tag.toLowerCase() === "button") {
              button.attr("type", "button");
            }
            if (dom.liner.tag) {
              var liner = $6("<" + dom.liner.tag + "/>").html(text(config.text)).addClass(dom.liner.className);
              if (dom.liner.tag.toLowerCase() === "a") {
                liner.attr("href", "#");
              }
              button.append(liner);
              textNode = liner;
            } else {
              button.html(text(config.text));
              textNode = button;
            }
            if (config.enabled === false) {
              button.addClass(dom.disabled);
            }
            if (config.className) {
              button.addClass(config.className);
            }
            if (config.titleAttr) {
              button.attr("title", text(config.titleAttr));
            }
            if (config.attr) {
              button.attr(config.attr);
            }
            if (!config.namespace) {
              config.namespace = ".dt-button-" + _buttonCounter++;
            }
            if (config.config !== void 0 && config.config.split) {
              config.split = config.config.split;
            }
          } else {
            button = $6(config.html);
          }
          var buttonContainer = this.c.dom.buttonContainer;
          var inserter;
          if (buttonContainer && buttonContainer.tag) {
            inserter = $6("<" + buttonContainer.tag + "/>").addClass(buttonContainer.className).append(button);
          } else {
            inserter = button;
          }
          this._addKey(config);
          if (this.c.buttonCreated) {
            inserter = this.c.buttonCreated(config, inserter);
          }
          var splitDiv;
          if (isSplit) {
            var dropdownConf = inCollection ? $6.extend(true, this.c.dom.split, this.c.dom.collection.split) : this.c.dom.split;
            var wrapperConf = dropdownConf.wrapper;
            splitDiv = $6("<" + wrapperConf.tag + "/>").addClass(wrapperConf.className).append(button);
            var dropButtonConfig = $6.extend(config, {
              autoClose: true,
              align: dropdownConf.dropdown.align,
              attr: {
                "aria-haspopup": "dialog",
                "aria-expanded": false
              },
              className: dropdownConf.dropdown.className,
              closeButton: false,
              splitAlignClass: dropdownConf.dropdown.splitAlignClass,
              text: dropdownConf.dropdown.text
            });
            this._addKey(dropButtonConfig);
            var splitAction = function(e, dt2, button2, config2) {
              _dtButtons.split.action.call(
                dt2.button(splitDiv),
                e,
                dt2,
                button2,
                config2
              );
              $6(dt2.table().node()).triggerHandler("buttons-action.dt", [
                dt2.button(button2),
                dt2,
                button2,
                config2
              ]);
              button2.attr("aria-expanded", true);
            };
            var dropButton = $6(
              '<button class="' + dropdownConf.dropdown.className + ' dt-button"></button>'
            ).html(this.c.dom.button.dropHtml).addClass(this.c.dom.button.dropClass).on("click.dtb", function(e) {
              e.preventDefault();
              e.stopPropagation();
              if (!dropButton.hasClass(dom.disabled)) {
                splitAction(e, dt, dropButton, dropButtonConfig);
              }
              if (clickBlurs) {
                dropButton.trigger("blur");
              }
            }).on("keypress.dtb", function(e) {
              if (e.keyCode === 13) {
                e.preventDefault();
                if (!dropButton.hasClass(dom.disabled)) {
                  splitAction(e, dt, dropButton, dropButtonConfig);
                }
              }
            });
            if (config.split.length === 0) {
              dropButton.addClass("dtb-hide-drop");
            }
            splitDiv.append(dropButton).attr(dropButtonConfig.attr);
          }
          return {
            conf: config,
            node: isSplit ? splitDiv.get(0) : button.get(0),
            inserter: isSplit ? splitDiv : inserter,
            buttons: [],
            inCollection,
            isSplit,
            inSplit,
            collection: null,
            textNode
          };
        },
        /**
         * Spin over buttons checking if splits should be enabled or not.
         * @param {*} buttons Array of buttons to check
         */
        _checkSplitEnable: function(buttons) {
          if (!buttons) {
            buttons = this.s.buttons;
          }
          for (var i = 0; i < buttons.length; i++) {
            var button = buttons[i];
            if (button.isSplit) {
              var splitBtn = button.node.childNodes[1];
              if (this._checkAnyEnabled(button.buttons)) {
                $6(splitBtn).removeClass(this.c.dom.button.disabled).prop("disabled", false);
              } else {
                $6(splitBtn).addClass(this.c.dom.button.disabled).prop("disabled", false);
              }
            } else if (button.isCollection) {
              this._checkSplitEnable(button.buttons);
            }
          }
        },
        /**
         * Check an array of buttons and see if any are enabled in it
         * @param {*} buttons Button array
         * @returns true if a button is enabled, false otherwise
         */
        _checkAnyEnabled: function(buttons) {
          for (var i = 0; i < buttons.length; i++) {
            if (!buttons[i].disabled) {
              return true;
            }
          }
          return false;
        },
        /**
         * Get the button object from a node (recursive)
         * @param  {node} node Button node
         * @param  {array} [buttons] Button array, uses base if not defined
         * @return {object} Button object
         * @private
         */
        _nodeToButton: function(node, buttons) {
          if (!buttons) {
            buttons = this.s.buttons;
          }
          for (var i = 0, ien = buttons.length; i < ien; i++) {
            if (buttons[i].node === node || $6(buttons[i].node).children().eq(0).get(0) === node) {
              return buttons[i];
            }
            if (buttons[i].buttons.length) {
              var ret = this._nodeToButton(node, buttons[i].buttons);
              if (ret) {
                return ret;
              }
            }
          }
        },
        /**
         * Get container array for a button from a button node (recursive)
         * @param  {node} node Button node
         * @param  {array} [buttons] Button array, uses base if not defined
         * @return {array} Button's host array
         * @private
         */
        _nodeToHost: function(node, buttons) {
          if (!buttons) {
            buttons = this.s.buttons;
          }
          for (var i = 0, ien = buttons.length; i < ien; i++) {
            if (buttons[i].node === node) {
              return buttons;
            }
            if (buttons[i].buttons.length) {
              var ret = this._nodeToHost(node, buttons[i].buttons);
              if (ret) {
                return ret;
              }
            }
          }
        },
        /**
         * Handle a key press - determine if any button's key configured matches
         * what was typed and trigger the action if so.
         * @param  {string} character The character pressed
         * @param  {object} e Key event that triggered this call
         * @private
         */
        _keypress: function(character, e) {
          if (e._buttonsHandled) {
            return;
          }
          var run = function(conf, node) {
            if (!conf.key) {
              return;
            }
            if (conf.key === character) {
              e._buttonsHandled = true;
              $6(node).click();
            } else if ($6.isPlainObject(conf.key)) {
              if (conf.key.key !== character) {
                return;
              }
              if (conf.key.shiftKey && !e.shiftKey) {
                return;
              }
              if (conf.key.altKey && !e.altKey) {
                return;
              }
              if (conf.key.ctrlKey && !e.ctrlKey) {
                return;
              }
              if (conf.key.metaKey && !e.metaKey) {
                return;
              }
              e._buttonsHandled = true;
              $6(node).click();
            }
          };
          var recurse = function(a) {
            for (var i = 0, ien = a.length; i < ien; i++) {
              run(a[i].conf, a[i].node);
              if (a[i].buttons.length) {
                recurse(a[i].buttons);
              }
            }
          };
          recurse(this.s.buttons);
        },
        /**
         * Remove a key from the key listener for this instance (to be used when a
         * button is removed)
         * @param  {object} conf Button configuration
         * @private
         */
        _removeKey: function(conf) {
          if (conf.key) {
            var character = $6.isPlainObject(conf.key) ? conf.key.key : conf.key;
            var a = this.s.listenKeys.split("");
            var idx = $6.inArray(character, a);
            a.splice(idx, 1);
            this.s.listenKeys = a.join("");
          }
        },
        /**
         * Resolve a button configuration
         * @param  {string|function|object} conf Button config to resolve
         * @return {object} Button configuration
         * @private
         */
        _resolveExtends: function(conf) {
          var that = this;
          var dt = this.s.dt;
          var i, ien;
          var toConfObject = function(base) {
            var loop = 0;
            while (!$6.isPlainObject(base) && !Array.isArray(base)) {
              if (base === void 0) {
                return;
              }
              if (typeof base === "function") {
                base = base.call(that, dt, conf);
                if (!base) {
                  return false;
                }
              } else if (typeof base === "string") {
                if (!_dtButtons[base]) {
                  return { html: base };
                }
                base = _dtButtons[base];
              }
              loop++;
              if (loop > 30) {
                throw "Buttons: Too many iterations";
              }
            }
            return Array.isArray(base) ? base : $6.extend({}, base);
          };
          conf = toConfObject(conf);
          while (conf && conf.extend) {
            if (!_dtButtons[conf.extend]) {
              throw "Cannot extend unknown button type: " + conf.extend;
            }
            var objArray = toConfObject(_dtButtons[conf.extend]);
            if (Array.isArray(objArray)) {
              return objArray;
            } else if (!objArray) {
              return false;
            }
            var originalClassName = objArray.className;
            if (conf.config !== void 0 && objArray.config !== void 0) {
              conf.config = $6.extend({}, objArray.config, conf.config);
            }
            conf = $6.extend({}, objArray, conf);
            if (originalClassName && conf.className !== originalClassName) {
              conf.className = originalClassName + " " + conf.className;
            }
            conf.extend = objArray.extend;
          }
          var postfixButtons = conf.postfixButtons;
          if (postfixButtons) {
            if (!conf.buttons) {
              conf.buttons = [];
            }
            for (i = 0, ien = postfixButtons.length; i < ien; i++) {
              conf.buttons.push(postfixButtons[i]);
            }
          }
          var prefixButtons = conf.prefixButtons;
          if (prefixButtons) {
            if (!conf.buttons) {
              conf.buttons = [];
            }
            for (i = 0, ien = prefixButtons.length; i < ien; i++) {
              conf.buttons.splice(i, 0, prefixButtons[i]);
            }
          }
          return conf;
        },
        /**
         * Display (and replace if there is an existing one) a popover attached to a button
         * @param {string|node} content Content to show
         * @param {DataTable.Api} hostButton DT API instance of the button
         * @param {object} inOpts Options (see object below for all options)
         */
        _popover: function(content, hostButton, inOpts) {
          var dt = hostButton;
          var c = this.c;
          var closed = false;
          var options = $6.extend(
            {
              align: "button-left",
              // button-right, dt-container, split-left, split-right
              autoClose: false,
              background: true,
              backgroundClassName: "dt-button-background",
              closeButton: true,
              containerClassName: c.dom.collection.container.className,
              contentClassName: c.dom.collection.container.content.className,
              collectionLayout: "",
              collectionTitle: "",
              dropup: false,
              fade: 400,
              popoverTitle: "",
              rightAlignClassName: "dt-button-right",
              tag: c.dom.collection.container.tag
            },
            inOpts
          );
          var containerSelector = options.tag + "." + options.containerClassName.replace(/ /g, ".");
          var hostButtonNode = hostButton.node();
          var hostNode = options.collectionLayout.includes("fixed") ? $6("body") : hostButton.node();
          var close = function() {
            closed = true;
            _fadeOut($6(containerSelector), options.fade, function() {
              $6(this).detach();
            });
            $6(
              dt.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()
            ).attr("aria-expanded", "false");
            $6("div.dt-button-background").off("click.dtb-collection");
            Buttons2.background(
              false,
              options.backgroundClassName,
              options.fade,
              hostNode
            );
            $6(window2).off("resize.resize.dtb-collection");
            $6("body").off(".dtb-collection");
            dt.off("buttons-action.b-internal");
            dt.off("destroy");
            $6("body").trigger("buttons-popover-hide.dt");
          };
          if (content === false) {
            close();
            return;
          }
          var existingExpanded = $6(
            dt.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()
          );
          if (existingExpanded.length) {
            if (hostNode.closest(containerSelector).length) {
              hostNode = existingExpanded.eq(0);
            }
            close();
          }
          if (options.sort) {
            var elements = $6("button", content).map(function(idx, el) {
              return {
                text: $6(el).text(),
                el
              };
            }).toArray();
            elements.sort(function(a, b) {
              return a.text.localeCompare(b.text);
            });
            $6(content).append(elements.map(function(v) {
              return v.el;
            }));
          }
          var cnt = $6(".dt-button", content).length;
          var mod = "";
          if (cnt === 3) {
            mod = "dtb-b3";
          } else if (cnt === 2) {
            mod = "dtb-b2";
          } else if (cnt === 1) {
            mod = "dtb-b1";
          }
          var display = $6("<" + options.tag + "/>").addClass(options.containerClassName).addClass(options.collectionLayout).addClass(options.splitAlignClass).addClass(mod).css("display", "none").attr({
            "aria-modal": true,
            role: "dialog"
          });
          content = $6(content).addClass(options.contentClassName).attr("role", "menu").appendTo(display);
          hostButtonNode.attr("aria-expanded", "true");
          if (hostNode.parents("body")[0] !== document2.body) {
            hostNode = $6(document2.body).children("div, section, p").last();
          }
          if (options.popoverTitle) {
            display.prepend(
              '<div class="dt-button-collection-title">' + options.popoverTitle + "</div>"
            );
          } else if (options.collectionTitle) {
            display.prepend(
              '<div class="dt-button-collection-title">' + options.collectionTitle + "</div>"
            );
          }
          if (options.closeButton) {
            display.prepend('<div class="dtb-popover-close">&times;</div>').addClass("dtb-collection-closeable");
          }
          _fadeIn(display.insertAfter(hostNode), options.fade);
          var tableContainer = $6(hostButton.table().container());
          var position = display.css("position");
          if (options.span === "container" || options.align === "dt-container") {
            hostNode = hostNode.parent();
            display.css("width", tableContainer.width());
          }
          if (position === "absolute") {
            var offsetParent = $6(hostNode[0].offsetParent);
            var buttonPosition = hostNode.position();
            var buttonOffset = hostNode.offset();
            var tableSizes = offsetParent.offset();
            var containerPosition = offsetParent.position();
            var computed = window2.getComputedStyle(offsetParent[0]);
            tableSizes.height = offsetParent.outerHeight();
            tableSizes.width = offsetParent.width() + parseFloat(computed.paddingLeft);
            tableSizes.right = tableSizes.left + tableSizes.width;
            tableSizes.bottom = tableSizes.top + tableSizes.height;
            var top2 = buttonPosition.top + hostNode.outerHeight();
            var left2 = buttonPosition.left;
            display.css({
              top: top2,
              left: left2
            });
            computed = window2.getComputedStyle(display[0]);
            var popoverSizes = display.offset();
            popoverSizes.height = display.outerHeight();
            popoverSizes.width = display.outerWidth();
            popoverSizes.right = popoverSizes.left + popoverSizes.width;
            popoverSizes.bottom = popoverSizes.top + popoverSizes.height;
            popoverSizes.marginTop = parseFloat(computed.marginTop);
            popoverSizes.marginBottom = parseFloat(computed.marginBottom);
            if (options.dropup) {
              top2 = buttonPosition.top - popoverSizes.height - popoverSizes.marginTop - popoverSizes.marginBottom;
            }
            if (options.align === "button-right" || display.hasClass(options.rightAlignClassName)) {
              left2 = buttonPosition.left - popoverSizes.width + hostNode.outerWidth();
            }
            if (options.align === "dt-container" || options.align === "container") {
              if (left2 < buttonPosition.left) {
                left2 = -buttonPosition.left;
              }
            }
            if (containerPosition.left + left2 + popoverSizes.width > $6(window2).width()) {
              left2 = $6(window2).width() - popoverSizes.width - containerPosition.left;
            }
            if (buttonOffset.left + left2 < 0) {
              left2 = -buttonOffset.left;
            }
            if (containerPosition.top + top2 + popoverSizes.height > $6(window2).height() + $6(window2).scrollTop()) {
              top2 = buttonPosition.top - popoverSizes.height - popoverSizes.marginTop - popoverSizes.marginBottom;
            }
            if (offsetParent.offset().top + top2 < $6(window2).scrollTop()) {
              top2 = buttonPosition.top + hostNode.outerHeight();
            }
            display.css({
              top: top2,
              left: left2
            });
          } else {
            var place = function() {
              var half = $6(window2).height() / 2;
              var top3 = display.height() / 2;
              if (top3 > half) {
                top3 = half;
              }
              display.css("marginTop", top3 * -1);
            };
            place();
            $6(window2).on("resize.dtb-collection", function() {
              place();
            });
          }
          if (options.background) {
            Buttons2.background(
              true,
              options.backgroundClassName,
              options.fade,
              options.backgroundHost || hostNode
            );
          }
          $6("div.dt-button-background").on(
            "click.dtb-collection",
            function() {
            }
          );
          if (options.autoClose) {
            setTimeout(function() {
              dt.on("buttons-action.b-internal", function(e, btn, dt2, node) {
                if (node[0] === hostNode[0]) {
                  return;
                }
                close();
              });
            }, 0);
          }
          $6(display).trigger("buttons-popover.dt");
          dt.on("destroy", close);
          setTimeout(function() {
            closed = false;
            $6("body").on("click.dtb-collection", function(e) {
              if (closed) {
                return;
              }
              var back = $6.fn.addBack ? "addBack" : "andSelf";
              var parent = $6(e.target).parent()[0];
              if (!$6(e.target).parents()[back]().filter(content).length && !$6(parent).hasClass("dt-buttons") || $6(e.target).hasClass("dt-button-background")) {
                close();
              }
            }).on("keyup.dtb-collection", function(e) {
              if (e.keyCode === 27) {
                close();
              }
            }).on("keydown.dtb-collection", function(e) {
              var elements2 = $6("a, button", content);
              var active = document2.activeElement;
              if (e.keyCode !== 9) {
                return;
              }
              if (elements2.index(active) === -1) {
                elements2.first().focus();
                e.preventDefault();
              } else if (e.shiftKey) {
                if (active === elements2[0]) {
                  elements2.last().focus();
                  e.preventDefault();
                }
              } else {
                if (active === elements2.last()[0]) {
                  elements2.first().focus();
                  e.preventDefault();
                }
              }
            });
          }, 0);
        }
      });
      Buttons2.background = function(show, className, fade, insertPoint) {
        if (fade === void 0) {
          fade = 400;
        }
        if (!insertPoint) {
          insertPoint = document2.body;
        }
        if (show) {
          _fadeIn(
            $6("<div/>").addClass(className).css("display", "none").insertAfter(insertPoint),
            fade
          );
        } else {
          _fadeOut($6("div." + className), fade, function() {
            $6(this).removeClass(className).remove();
          });
        }
      };
      Buttons2.instanceSelector = function(group, buttons) {
        if (group === void 0 || group === null) {
          return $6.map(buttons, function(v) {
            return v.inst;
          });
        }
        var ret = [];
        var names = $6.map(buttons, function(v) {
          return v.name;
        });
        var process = function(input) {
          if (Array.isArray(input)) {
            for (var i = 0, ien = input.length; i < ien; i++) {
              process(input[i]);
            }
            return;
          }
          if (typeof input === "string") {
            if (input.indexOf(",") !== -1) {
              process(input.split(","));
            } else {
              var idx = $6.inArray(input.trim(), names);
              if (idx !== -1) {
                ret.push(buttons[idx].inst);
              }
            }
          } else if (typeof input === "number") {
            ret.push(buttons[input].inst);
          } else if (typeof input === "object" && input.nodeName) {
            for (var j = 0; j < buttons.length; j++) {
              if (buttons[j].inst.dom.container[0] === input) {
                ret.push(buttons[j].inst);
              }
            }
          } else if (typeof input === "object") {
            ret.push(input);
          }
        };
        process(group);
        return ret;
      };
      Buttons2.buttonSelector = function(insts, selector) {
        var ret = [];
        var nodeBuilder = function(a, buttons, baseIdx) {
          var button;
          var idx;
          for (var i2 = 0, ien2 = buttons.length; i2 < ien2; i2++) {
            button = buttons[i2];
            if (button) {
              idx = baseIdx !== void 0 ? baseIdx + i2 : i2 + "";
              a.push({
                node: button.node,
                name: button.conf.name,
                idx
              });
              if (button.buttons) {
                nodeBuilder(a, button.buttons, idx + "-");
              }
            }
          }
        };
        var run = function(selector2, inst2) {
          var i2, ien2;
          var buttons = [];
          nodeBuilder(buttons, inst2.s.buttons);
          var nodes = $6.map(buttons, function(v) {
            return v.node;
          });
          if (Array.isArray(selector2) || selector2 instanceof $6) {
            for (i2 = 0, ien2 = selector2.length; i2 < ien2; i2++) {
              run(selector2[i2], inst2);
            }
            return;
          }
          if (selector2 === null || selector2 === void 0 || selector2 === "*") {
            for (i2 = 0, ien2 = buttons.length; i2 < ien2; i2++) {
              ret.push({
                inst: inst2,
                node: buttons[i2].node
              });
            }
          } else if (typeof selector2 === "number") {
            if (inst2.s.buttons[selector2]) {
              ret.push({
                inst: inst2,
                node: inst2.s.buttons[selector2].node
              });
            }
          } else if (typeof selector2 === "string") {
            if (selector2.indexOf(",") !== -1) {
              var a = selector2.split(",");
              for (i2 = 0, ien2 = a.length; i2 < ien2; i2++) {
                run(a[i2].trim(), inst2);
              }
            } else if (selector2.match(/^\d+(\-\d+)*$/)) {
              var indexes = $6.map(buttons, function(v) {
                return v.idx;
              });
              ret.push({
                inst: inst2,
                node: buttons[$6.inArray(selector2, indexes)].node
              });
            } else if (selector2.indexOf(":name") !== -1) {
              var name = selector2.replace(":name", "");
              for (i2 = 0, ien2 = buttons.length; i2 < ien2; i2++) {
                if (buttons[i2].name === name) {
                  ret.push({
                    inst: inst2,
                    node: buttons[i2].node
                  });
                }
              }
            } else {
              $6(nodes).filter(selector2).each(function() {
                ret.push({
                  inst: inst2,
                  node: this
                });
              });
            }
          } else if (typeof selector2 === "object" && selector2.nodeName) {
            var idx = $6.inArray(selector2, nodes);
            if (idx !== -1) {
              ret.push({
                inst: inst2,
                node: nodes[idx]
              });
            }
          }
        };
        for (var i = 0, ien = insts.length; i < ien; i++) {
          var inst = insts[i];
          run(selector, inst);
        }
        return ret;
      };
      Buttons2.stripData = function(str, config) {
        if (str !== null && typeof str === "object" && str.nodeName && str.nodeType) {
          str = str.innerHTML;
        }
        if (typeof str !== "string") {
          return str;
        }
        str = Buttons2.stripHtmlScript(str);
        str = Buttons2.stripHtmlComments(str);
        if (!config || config.stripHtml) {
          str = DataTable3.util.stripHtml(str);
        }
        if (!config || config.trim) {
          str = str.trim();
        }
        if (!config || config.stripNewlines) {
          str = str.replace(/\n/g, " ");
        }
        if (!config || config.decodeEntities) {
          if (_entityDecoder) {
            str = _entityDecoder(str);
          } else {
            _exportTextarea.innerHTML = str;
            str = _exportTextarea.value;
          }
        }
        if (!config || config.escapeExcelFormula) {
          if (str.match(/^[=+\-@\t\r]/)) {
            console.log("matching and updateing");
            str = "'" + str;
          }
        }
        return str;
      };
      Buttons2.entityDecoder = function(fn2) {
        _entityDecoder = fn2;
      };
      Buttons2.stripHtmlComments = function(input) {
        var previous;
        do {
          previous = input;
          input = input.replace(/(<!--.*?--!?>)|(<!--[\S\s]+?--!?>)|(<!--[\S\s]*?$)/g, "");
        } while (input !== previous);
        return input;
      };
      Buttons2.stripHtmlScript = function(input) {
        var previous;
        do {
          previous = input;
          input = input.replace(/<script\b[^<]*(?:(?!<\/script[^>]*>)<[^<]*)*<\/script[^>]*>/gi, "");
        } while (input !== previous);
        return input;
      };
      Buttons2.defaults = {
        buttons: ["copy", "excel", "csv", "pdf", "print"],
        name: "main",
        tabIndex: 0,
        dom: {
          container: {
            tag: "div",
            className: "dt-buttons"
          },
          collection: {
            container: {
              // The element used for the dropdown
              className: "dt-button-collection",
              content: {
                className: "",
                tag: "div"
              },
              tag: "div"
            }
            // optionally
            // , button: IButton - buttons inside the collection container
            // , split: ISplit - splits inside the collection container
          },
          button: {
            tag: "button",
            className: "dt-button",
            active: "dt-button-active",
            // class name
            disabled: "disabled",
            // class name
            spacer: {
              className: "dt-button-spacer",
              tag: "span"
            },
            liner: {
              tag: "span",
              className: ""
            },
            dropClass: "",
            dropHtml: '<span class="dt-button-down-arrow">&#x25BC;</span>'
          },
          split: {
            action: {
              // action button
              className: "dt-button-split-drop-button dt-button",
              tag: "button"
            },
            dropdown: {
              // button to trigger the dropdown
              align: "split-right",
              className: "dt-button-split-drop",
              splitAlignClass: "dt-button-split-left",
              tag: "button"
            },
            wrapper: {
              // wrap around both
              className: "dt-button-split",
              tag: "div"
            }
          }
        }
      };
      Buttons2.version = "3.2.2";
      $6.extend(_dtButtons, {
        collection: {
          text: function(dt) {
            return dt.i18n("buttons.collection", "Collection");
          },
          className: "buttons-collection",
          closeButton: false,
          dropIcon: true,
          init: function(dt, button) {
            button.attr("aria-expanded", false);
          },
          action: function(e, dt, button, config) {
            if (config._collection.parents("body").length) {
              this.popover(false, config);
            } else {
              this.popover(config._collection, config);
            }
            if (e.type === "keypress") {
              $6("a, button", config._collection).eq(0).focus();
            }
          },
          attr: {
            "aria-haspopup": "dialog"
          }
          // Also the popover options, defined in Buttons.popover
        },
        split: {
          text: function(dt) {
            return dt.i18n("buttons.split", "Split");
          },
          className: "buttons-split",
          closeButton: false,
          init: function(dt, button) {
            return button.attr("aria-expanded", false);
          },
          action: function(e, dt, button, config) {
            this.popover(config._collection, config);
          },
          attr: {
            "aria-haspopup": "dialog"
          }
          // Also the popover options, defined in Buttons.popover
        },
        copy: function() {
          if (_dtButtons.copyHtml5) {
            return "copyHtml5";
          }
        },
        csv: function(dt, conf) {
          if (_dtButtons.csvHtml5 && _dtButtons.csvHtml5.available(dt, conf)) {
            return "csvHtml5";
          }
        },
        excel: function(dt, conf) {
          if (_dtButtons.excelHtml5 && _dtButtons.excelHtml5.available(dt, conf)) {
            return "excelHtml5";
          }
        },
        pdf: function(dt, conf) {
          if (_dtButtons.pdfHtml5 && _dtButtons.pdfHtml5.available(dt, conf)) {
            return "pdfHtml5";
          }
        },
        pageLength: function(dt) {
          var lengthMenu = dt.settings()[0].aLengthMenu;
          var vals = [];
          var lang = [];
          var text = function(dt2) {
            return dt2.i18n(
              "buttons.pageLength",
              {
                "-1": "Show all rows",
                _: "Show %d rows"
              },
              dt2.page.len()
            );
          };
          if (Array.isArray(lengthMenu[0])) {
            vals = lengthMenu[0];
            lang = lengthMenu[1];
          } else {
            for (var i = 0; i < lengthMenu.length; i++) {
              var option = lengthMenu[i];
              if ($6.isPlainObject(option)) {
                vals.push(option.value);
                lang.push(option.label);
              } else {
                vals.push(option);
                lang.push(option);
              }
            }
          }
          return {
            extend: "collection",
            text,
            className: "buttons-page-length",
            autoClose: true,
            buttons: $6.map(vals, function(val, i2) {
              return {
                text: lang[i2],
                className: "button-page-length",
                action: function(e, dt2) {
                  dt2.page.len(val).draw();
                },
                init: function(dt2, node, conf) {
                  var that = this;
                  var fn2 = function() {
                    that.active(dt2.page.len() === val);
                  };
                  dt2.on("length.dt" + conf.namespace, fn2);
                  fn2();
                },
                destroy: function(dt2, node, conf) {
                  dt2.off("length.dt" + conf.namespace);
                }
              };
            }),
            init: function(dt2, node, conf) {
              var that = this;
              dt2.on("length.dt" + conf.namespace, function() {
                that.text(conf.text);
              });
            },
            destroy: function(dt2, node, conf) {
              dt2.off("length.dt" + conf.namespace);
            }
          };
        },
        spacer: {
          style: "empty",
          spacer: true,
          text: function(dt) {
            return dt.i18n("buttons.spacer", "");
          }
        }
      });
      DataTable3.Api.register("buttons()", function(group, selector) {
        if (selector === void 0) {
          selector = group;
          group = void 0;
        }
        this.selector.buttonGroup = group;
        var res = this.iterator(
          true,
          "table",
          function(ctx) {
            if (ctx._buttons) {
              return Buttons2.buttonSelector(
                Buttons2.instanceSelector(group, ctx._buttons),
                selector
              );
            }
          },
          true
        );
        res._groupSelector = group;
        return res;
      });
      DataTable3.Api.register("button()", function(group, selector) {
        var buttons = this.buttons(group, selector);
        if (buttons.length > 1) {
          buttons.splice(1, buttons.length);
        }
        return buttons;
      });
      DataTable3.Api.registerPlural(
        "buttons().active()",
        "button().active()",
        function(flag) {
          if (flag === void 0) {
            return this.map(function(set) {
              return set.inst.active(set.node);
            });
          }
          return this.each(function(set) {
            set.inst.active(set.node, flag);
          });
        }
      );
      DataTable3.Api.registerPlural(
        "buttons().action()",
        "button().action()",
        function(action) {
          if (action === void 0) {
            return this.map(function(set) {
              return set.inst.action(set.node);
            });
          }
          return this.each(function(set) {
            set.inst.action(set.node, action);
          });
        }
      );
      DataTable3.Api.registerPlural(
        "buttons().collectionRebuild()",
        "button().collectionRebuild()",
        function(buttons) {
          return this.each(function(set) {
            for (var i = 0; i < buttons.length; i++) {
              if (typeof buttons[i] === "object") {
                buttons[i].parentConf = set;
              }
            }
            set.inst.collectionRebuild(set.node, buttons);
          });
        }
      );
      DataTable3.Api.register(
        ["buttons().enable()", "button().enable()"],
        function(flag) {
          return this.each(function(set) {
            set.inst.enable(set.node, flag);
          });
        }
      );
      DataTable3.Api.register(
        ["buttons().disable()", "button().disable()"],
        function() {
          return this.each(function(set) {
            set.inst.disable(set.node);
          });
        }
      );
      DataTable3.Api.register("button().index()", function() {
        var idx = null;
        this.each(function(set) {
          var res = set.inst.index(set.node);
          if (res !== null) {
            idx = res;
          }
        });
        return idx;
      });
      DataTable3.Api.registerPlural(
        "buttons().nodes()",
        "button().node()",
        function() {
          var jq = $6();
          $6(
            this.each(function(set) {
              jq = jq.add(set.inst.node(set.node));
            })
          );
          return jq;
        }
      );
      DataTable3.Api.registerPlural(
        "buttons().processing()",
        "button().processing()",
        function(flag) {
          if (flag === void 0) {
            return this.map(function(set) {
              return set.inst.processing(set.node);
            });
          }
          return this.each(function(set) {
            set.inst.processing(set.node, flag);
          });
        }
      );
      DataTable3.Api.registerPlural(
        "buttons().text()",
        "button().text()",
        function(label) {
          if (label === void 0) {
            return this.map(function(set) {
              return set.inst.text(set.node);
            });
          }
          return this.each(function(set) {
            set.inst.text(set.node, label);
          });
        }
      );
      DataTable3.Api.registerPlural(
        "buttons().trigger()",
        "button().trigger()",
        function() {
          return this.each(function(set) {
            set.inst.node(set.node).trigger("click");
          });
        }
      );
      DataTable3.Api.register("button().popover()", function(content, options) {
        return this.map(function(set) {
          return set.inst._popover(content, this.button(this[0].node), options);
        });
      });
      DataTable3.Api.register("buttons().containers()", function() {
        var jq = $6();
        var groupSelector = this._groupSelector;
        this.iterator(true, "table", function(ctx) {
          if (ctx._buttons) {
            var insts = Buttons2.instanceSelector(groupSelector, ctx._buttons);
            for (var i = 0, ien = insts.length; i < ien; i++) {
              jq = jq.add(insts[i].container());
            }
          }
        });
        return jq;
      });
      DataTable3.Api.register("buttons().container()", function() {
        return this.containers().eq(0);
      });
      DataTable3.Api.register("button().add()", function(idx, conf, draw) {
        var ctx = this.context;
        if (ctx.length) {
          var inst = Buttons2.instanceSelector(
            this._groupSelector,
            ctx[0]._buttons
          );
          if (inst.length) {
            inst[0].add(conf, idx, draw);
          }
        }
        return this.button(this._groupSelector, idx);
      });
      DataTable3.Api.register("buttons().destroy()", function() {
        this.pluck("inst").unique().each(function(inst) {
          inst.destroy();
        });
        return this;
      });
      DataTable3.Api.registerPlural(
        "buttons().remove()",
        "buttons().remove()",
        function() {
          this.each(function(set) {
            set.inst.remove(set.node);
          });
          return this;
        }
      );
      var _infoTimer;
      DataTable3.Api.register("buttons.info()", function(title, message, time) {
        var that = this;
        if (title === false) {
          this.off("destroy.btn-info");
          _fadeOut($6("#datatables_buttons_info"), 400, function() {
            $6(this).remove();
          });
          clearTimeout(_infoTimer);
          _infoTimer = null;
          return this;
        }
        if (_infoTimer) {
          clearTimeout(_infoTimer);
        }
        if ($6("#datatables_buttons_info").length) {
          $6("#datatables_buttons_info").remove();
        }
        title = title ? "<h2>" + title + "</h2>" : "";
        _fadeIn(
          $6('<div id="datatables_buttons_info" class="dt-button-info"/>').html(title).append(
            $6("<div/>")[typeof message === "string" ? "html" : "append"](
              message
            )
          ).css("display", "none").appendTo("body")
        );
        if (time !== void 0 && time !== 0) {
          _infoTimer = setTimeout(function() {
            that.buttons.info(false);
          }, time);
        }
        this.on("destroy.btn-info", function() {
          that.buttons.info(false);
        });
        return this;
      });
      DataTable3.Api.register("buttons.exportData()", function(options) {
        if (this.context.length) {
          return _exportData(new DataTable3.Api(this.context[0]), options);
        }
      });
      DataTable3.Api.register("buttons.exportInfo()", function(conf) {
        if (!conf) {
          conf = {};
        }
        return {
          filename: _filename(conf, this),
          title: _title(conf, this),
          messageTop: _message(this, conf, conf.message || conf.messageTop, "top"),
          messageBottom: _message(this, conf, conf.messageBottom, "bottom")
        };
      });
      var _filename = function(config, dt) {
        var filename = config.filename === "*" && config.title !== "*" && config.title !== void 0 && config.title !== null && config.title !== "" ? config.title : config.filename;
        if (typeof filename === "function") {
          filename = filename(config, dt);
        }
        if (filename === void 0 || filename === null) {
          return null;
        }
        if (filename.indexOf("*") !== -1) {
          filename = filename.replace(/\*/g, $6("head > title").text()).trim();
        }
        filename = filename.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, "");
        var extension = _stringOrFunction(config.extension, config, dt);
        if (!extension) {
          extension = "";
        }
        return filename + extension;
      };
      var _stringOrFunction = function(option, config, dt) {
        if (option === null || option === void 0) {
          return null;
        } else if (typeof option === "function") {
          return option(config, dt);
        }
        return option;
      };
      var _title = function(config, dt) {
        var title = _stringOrFunction(config.title, config, dt);
        return title === null ? null : title.indexOf("*") !== -1 ? title.replace(/\*/g, $6("head > title").text() || "Exported data") : title;
      };
      var _message = function(dt, config, option, position) {
        var message = _stringOrFunction(option, config, dt);
        if (message === null) {
          return null;
        }
        var caption = $6("caption", dt.table().container()).eq(0);
        if (message === "*") {
          var side = caption.css("caption-side");
          if (side !== position) {
            return null;
          }
          return caption.length ? caption.text() : "";
        }
        return message;
      };
      var _exportTextarea = $6("<textarea/>")[0];
      var _exportData = function(dt, inOpts) {
        var config = $6.extend(
          true,
          {},
          {
            rows: null,
            columns: "",
            modifier: {
              search: "applied",
              order: "applied"
            },
            orthogonal: "display",
            stripHtml: true,
            stripNewlines: true,
            decodeEntities: true,
            escapeExcelFormula: false,
            trim: true,
            format: {
              header: function(d) {
                return Buttons2.stripData(d, config);
              },
              footer: function(d) {
                return Buttons2.stripData(d, config);
              },
              body: function(d) {
                return Buttons2.stripData(d, config);
              }
            },
            customizeData: null,
            customizeZip: null
          },
          inOpts
        );
        var header = dt.columns(config.columns).indexes().map(function(idx) {
          var col = dt.column(idx);
          return config.format.header(col.title(), idx, col.header());
        }).toArray();
        var footer = dt.table().footer() ? dt.columns(config.columns).indexes().map(function(idx) {
          var el = dt.column(idx).footer();
          var val = "";
          if (el) {
            var inner = $6(".dt-column-title", el);
            val = inner.length ? inner.html() : $6(el).html();
          }
          return config.format.footer(val, idx, el);
        }).toArray() : null;
        var modifier = $6.extend({}, config.modifier);
        if (dt.select && typeof dt.select.info === "function" && modifier.selected === void 0) {
          if (dt.rows(config.rows, $6.extend({ selected: true }, modifier)).any()) {
            $6.extend(modifier, { selected: true });
          }
        }
        var rowIndexes = dt.rows(config.rows, modifier).indexes().toArray();
        var selectedCells = dt.cells(rowIndexes, config.columns, {
          order: modifier.order
        });
        var cells = selectedCells.render(config.orthogonal).toArray();
        var cellNodes = selectedCells.nodes().toArray();
        var cellIndexes = selectedCells.indexes().toArray();
        var columns = dt.columns(config.columns).count();
        var rows = columns > 0 ? cells.length / columns : 0;
        var body = [];
        var cellCounter = 0;
        for (var i = 0, ien = rows; i < ien; i++) {
          var row = [columns];
          for (var j = 0; j < columns; j++) {
            row[j] = config.format.body(
              cells[cellCounter],
              cellIndexes[cellCounter].row,
              cellIndexes[cellCounter].column,
              cellNodes[cellCounter]
            );
            cellCounter++;
          }
          body[i] = row;
        }
        var data = {
          header,
          headerStructure: _headerFormatter(
            config.format.header,
            dt.table().header.structure(config.columns)
          ),
          footer,
          footerStructure: _headerFormatter(
            config.format.footer,
            dt.table().footer.structure(config.columns)
          ),
          body
        };
        if (config.customizeData) {
          config.customizeData(data);
        }
        return data;
      };
      function _headerFormatter(formatter, struct) {
        for (var i = 0; i < struct.length; i++) {
          for (var j = 0; j < struct[i].length; j++) {
            var item = struct[i][j];
            if (item) {
              item.title = formatter(
                item.title,
                j,
                item.cell
              );
            }
          }
        }
        return struct;
      }
      $6.fn.dataTable.Buttons = Buttons2;
      $6.fn.DataTable.Buttons = Buttons2;
      $6(document2).on("init.dt plugin-init.dt", function(e, settings) {
        if (e.namespace !== "dt") {
          return;
        }
        var opts = settings.oInit.buttons || DataTable3.defaults.buttons;
        if (opts && !settings._buttons) {
          new Buttons2(settings, opts).container();
        }
      });
      function _init(settings, options) {
        var api = new DataTable3.Api(settings);
        var opts = options ? options : api.init().buttons || DataTable3.defaults.buttons;
        return new Buttons2(api, opts).container();
      }
      DataTable3.ext.feature.push({
        fnInit: _init,
        cFeature: "B"
      });
      if (DataTable3.feature) {
        DataTable3.feature.register("buttons", _init);
      }
      return DataTable3;
    });
  }
});

// node_modules/datatables.net-buttons/js/buttons.html5.js
var require_buttons_html5 = __commonJS({
  "node_modules/datatables.net-buttons/js/buttons.html5.js"(exports, module) {
    (function(factory) {
      if (typeof define === "function" && define.amd) {
        define(["jquery", "datatables.net", "datatables.net-buttons"], function($6) {
          return factory($6, window, document);
        });
      } else if (typeof exports === "object") {
        var jq = require_jquery();
        var cjsRequires = function(root, $6) {
          if (!$6.fn.dataTable) {
            require_dataTables()(root, $6);
          }
          if (!$6.fn.dataTable.Buttons) {
            require_dataTables_buttons()(root, $6);
          }
        };
        if (typeof window === "undefined") {
          module.exports = function(root, $6) {
            if (!root) {
              root = window;
            }
            if (!$6) {
              $6 = jq(root);
            }
            cjsRequires(root, $6);
            return factory($6, root, root.document);
          };
        } else {
          cjsRequires(window, jq);
          module.exports = factory(jq, window, window.document);
        }
      } else {
        factory(jQuery, window, document);
      }
    })(function($6, window2, document2) {
      "use strict";
      var DataTable3 = $6.fn.dataTable;
      var useJszip;
      var usePdfmake;
      function _jsZip() {
        return useJszip || window2.JSZip;
      }
      function _pdfMake() {
        return usePdfmake || window2.pdfMake;
      }
      DataTable3.Buttons.pdfMake = function(_) {
        if (!_) {
          return _pdfMake();
        }
        usePdfmake = _;
      };
      DataTable3.Buttons.jszip = function(_) {
        if (!_) {
          return _jsZip();
        }
        useJszip = _;
      };
      var _saveAs = function(view) {
        "use strict";
        if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
          return;
        }
        var doc = view.document, get_URL = function() {
          return view.URL || view.webkitURL || view;
        }, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a"), can_use_save_link = "download" in save_link, click = function(node) {
          var event = new MouseEvent("click");
          node.dispatchEvent(event);
        }, is_safari = /constructor/i.test(view.HTMLElement) || view.safari, is_chrome_ios = /CriOS\/[\d]+/.test(navigator.userAgent), throw_outside = function(ex) {
          (view.setImmediate || view.setTimeout)(function() {
            throw ex;
          }, 0);
        }, force_saveable_type = "application/octet-stream", arbitrary_revoke_timeout = 1e3 * 40, revoke = function(file) {
          var revoker = function() {
            if (typeof file === "string") {
              get_URL().revokeObjectURL(file);
            } else {
              file.remove();
            }
          };
          setTimeout(revoker, arbitrary_revoke_timeout);
        }, dispatch = function(filesaver, event_types, event) {
          event_types = [].concat(event_types);
          var i = event_types.length;
          while (i--) {
            var listener = filesaver["on" + event_types[i]];
            if (typeof listener === "function") {
              try {
                listener.call(filesaver, event || filesaver);
              } catch (ex) {
                throw_outside(ex);
              }
            }
          }
        }, auto_bom = function(blob) {
          if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
            blob.type
          )) {
            return new Blob([String.fromCharCode(65279), blob], {
              type: blob.type
            });
          }
          return blob;
        }, FileSaver = function(blob, name, no_auto_bom) {
          if (!no_auto_bom) {
            blob = auto_bom(blob);
          }
          var filesaver = this, type = blob.type, force = type === force_saveable_type, object_url, dispatch_all = function() {
            dispatch(
              filesaver,
              "writestart progress write writeend".split(" ")
            );
          }, fs_error = function() {
            if ((is_chrome_ios || force && is_safari) && view.FileReader) {
              var reader = new FileReader();
              reader.onloadend = function() {
                var url = is_chrome_ios ? reader.result : reader.result.replace(
                  /^data:[^;]*;/,
                  "data:attachment/file;"
                );
                var popup = view.open(url, "_blank");
                if (!popup) view.location.href = url;
                url = void 0;
                filesaver.readyState = filesaver.DONE;
                dispatch_all();
              };
              reader.readAsDataURL(blob);
              filesaver.readyState = filesaver.INIT;
              return;
            }
            if (!object_url) {
              object_url = get_URL().createObjectURL(blob);
            }
            if (force) {
              view.location.href = object_url;
            } else {
              var opened = view.open(object_url, "_blank");
              if (!opened) {
                view.location.href = object_url;
              }
            }
            filesaver.readyState = filesaver.DONE;
            dispatch_all();
            revoke(object_url);
          };
          filesaver.readyState = filesaver.INIT;
          if (can_use_save_link) {
            object_url = get_URL().createObjectURL(blob);
            setTimeout(function() {
              save_link.href = object_url;
              save_link.download = name;
              click(save_link);
              dispatch_all();
              revoke(object_url);
              filesaver.readyState = filesaver.DONE;
            });
            return;
          }
          fs_error();
        }, FS_proto = FileSaver.prototype, saveAs = function(blob, name, no_auto_bom) {
          return new FileSaver(
            blob,
            name || blob.name || "download",
            no_auto_bom
          );
        };
        if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
          return function(blob, name, no_auto_bom) {
            name = name || blob.name || "download";
            if (!no_auto_bom) {
              blob = auto_bom(blob);
            }
            return navigator.msSaveOrOpenBlob(blob, name);
          };
        }
        FS_proto.abort = function() {
        };
        FS_proto.readyState = FS_proto.INIT = 0;
        FS_proto.WRITING = 1;
        FS_proto.DONE = 2;
        FS_proto.error = FS_proto.onwritestart = FS_proto.onprogress = FS_proto.onwrite = FS_proto.onabort = FS_proto.onerror = FS_proto.onwriteend = null;
        return saveAs;
      }(
        typeof self !== "undefined" && self || typeof window2 !== "undefined" && window2 || this.content
      );
      DataTable3.fileSave = _saveAs;
      var _sheetname = function(config) {
        var sheetName = "Sheet1";
        if (config.sheetName) {
          sheetName = config.sheetName.replace(/[\[\]\*\/\\\?\:]/g, "");
        }
        return sheetName;
      };
      var _newLine = function(config) {
        return config.newline ? config.newline : navigator.userAgent.match(/Windows/) ? "\r\n" : "\n";
      };
      var _exportData = function(dt, config) {
        var newLine = _newLine(config);
        var data = dt.buttons.exportData(config.exportOptions);
        var boundary = config.fieldBoundary;
        var separator = config.fieldSeparator;
        var reBoundary = new RegExp(boundary, "g");
        var escapeChar = config.escapeChar !== void 0 ? config.escapeChar : "\\";
        var join = function(a) {
          var s = "";
          for (var i2 = 0, ien2 = a.length; i2 < ien2; i2++) {
            if (i2 > 0) {
              s += separator;
            }
            s += boundary ? boundary + ("" + a[i2]).replace(reBoundary, escapeChar + boundary) + boundary : a[i2];
          }
          return s;
        };
        var header = "";
        var footer = "";
        var body = [];
        if (config.header) {
          header = data.headerStructure.map(function(row) {
            return join(
              row.map(function(cell) {
                return cell ? cell.title : "";
              })
            );
          }).join(newLine) + newLine;
        }
        if (config.footer && data.footer) {
          footer = data.footerStructure.map(function(row) {
            return join(
              row.map(function(cell) {
                return cell ? cell.title : "";
              })
            );
          }).join(newLine) + newLine;
        }
        for (var i = 0, ien = data.body.length; i < ien; i++) {
          body.push(join(data.body[i]));
        }
        return {
          str: header + body.join(newLine) + newLine + footer,
          rows: body.length
        };
      };
      var _isDuffSafari = function() {
        var safari = navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Chrome") === -1 && navigator.userAgent.indexOf("Opera") === -1;
        if (!safari) {
          return false;
        }
        var version = navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);
        if (version && version.length > 1 && version[1] * 1 < 603.1) {
          return true;
        }
        return false;
      };
      function createCellPos(n) {
        var ordA = "A".charCodeAt(0);
        var ordZ = "Z".charCodeAt(0);
        var len = ordZ - ordA + 1;
        var s = "";
        while (n >= 0) {
          s = String.fromCharCode(n % len + ordA) + s;
          n = Math.floor(n / len) - 1;
        }
        return s;
      }
      try {
        var _serialiser = new XMLSerializer();
        var _ieExcel;
      } catch (t) {
      }
      function _addToZip(zip, obj) {
        if (_ieExcel === void 0) {
          _ieExcel = _serialiser.serializeToString(
            new window2.DOMParser().parseFromString(
              excelStrings["xl/worksheets/sheet1.xml"],
              "text/xml"
            )
          ).indexOf("xmlns:r") === -1;
        }
        $6.each(obj, function(name, val) {
          if ($6.isPlainObject(val)) {
            var newDir = zip.folder(name);
            _addToZip(newDir, val);
          } else {
            if (_ieExcel) {
              var worksheet = val.childNodes[0];
              var i, ien;
              var attrs = [];
              for (i = worksheet.attributes.length - 1; i >= 0; i--) {
                var attrName = worksheet.attributes[i].nodeName;
                var attrValue = worksheet.attributes[i].nodeValue;
                if (attrName.indexOf(":") !== -1) {
                  attrs.push({ name: attrName, value: attrValue });
                  worksheet.removeAttribute(attrName);
                }
              }
              for (i = 0, ien = attrs.length; i < ien; i++) {
                var attr = val.createAttribute(
                  attrs[i].name.replace(":", "_dt_b_namespace_token_")
                );
                attr.value = attrs[i].value;
                worksheet.setAttributeNode(attr);
              }
            }
            var str = _serialiser.serializeToString(val);
            if (_ieExcel) {
              if (str.indexOf("<?xml") === -1) {
                str = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + str;
              }
              str = str.replace(/_dt_b_namespace_token_/g, ":");
              str = str.replace(/xmlns:NS[\d]+="" NS[\d]+:/g, "");
            }
            str = str.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, "<$1 $2>");
            zip.file(name, str);
          }
        });
      }
      function _createNode(doc, nodeName, opts) {
        var tempNode = doc.createElement(nodeName);
        if (opts) {
          if (opts.attr) {
            $6(tempNode).attr(opts.attr);
          }
          if (opts.children) {
            $6.each(opts.children, function(key, value) {
              tempNode.appendChild(value);
            });
          }
          if (opts.text !== null && opts.text !== void 0) {
            tempNode.appendChild(doc.createTextNode(opts.text));
          }
        }
        return tempNode;
      }
      function _excelColWidth(data, col) {
        var max2 = data.header[col].length;
        var len, lineSplit, str;
        if (data.footer && data.footer[col] && data.footer[col].length > max2) {
          max2 = data.footer[col].length;
        }
        for (var i = 0, ien = data.body.length; i < ien; i++) {
          var point = data.body[i][col];
          str = point !== null && point !== void 0 ? point.toString() : "";
          if (str.indexOf("\n") !== -1) {
            lineSplit = str.split("\n");
            lineSplit.sort(function(a, b) {
              return b.length - a.length;
            });
            len = lineSplit[0].length;
          } else {
            len = str.length;
          }
          if (len > max2) {
            max2 = len;
          }
          if (max2 > 40) {
            return 54;
          }
        }
        max2 *= 1.35;
        return max2 > 6 ? max2 : 6;
      }
      var excelStrings = {
        "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
        "xl/_rels/workbook.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
        "[Content_Types].xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
        "xl/workbook.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',
        "xl/worksheets/sheet1.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',
        "xl/styles.xml": '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="[$$-409]#,##0.00;-[$$-409]#,##0.00"/><numFmt numFmtId="165" formatCode="&quot;\xA3&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$\u20AC-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="68"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="14" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'
      };
      var _excelSpecials = [
        {
          match: /^\-?\d+\.\d%$/,
          style: 60,
          fmt: function(d) {
            return d / 100;
          }
        },
        // Percent with d.p.
        {
          match: /^\-?\d+\.?\d*%$/,
          style: 56,
          fmt: function(d) {
            return d / 100;
          }
        },
        // Percent
        { match: /^\-?\$[\d,]+.?\d*$/, style: 57 },
        // Dollars
        { match: /^\-?£[\d,]+.?\d*$/, style: 58 },
        // Pounds
        { match: /^\-?€[\d,]+.?\d*$/, style: 59 },
        // Euros
        { match: /^\-?\d+$/, style: 65 },
        // Numbers without thousand separators
        { match: /^\-?\d+\.\d{2}$/, style: 66 },
        // Numbers 2 d.p. without thousands separators
        {
          match: /^\([\d,]+\)$/,
          style: 61,
          fmt: function(d) {
            return -1 * d.replace(/[\(\)]/g, "");
          }
        },
        // Negative numbers indicated by brackets
        {
          match: /^\([\d,]+\.\d{2}\)$/,
          style: 62,
          fmt: function(d) {
            return -1 * d.replace(/[\(\)]/g, "");
          }
        },
        // Negative numbers indicated by brackets - 2d.p.
        { match: /^\-?[\d,]+$/, style: 63 },
        // Numbers with thousand separators
        { match: /^\-?[\d,]+\.\d{2}$/, style: 64 },
        {
          match: /^(19\d\d|[2-9]\d\d\d)\-(0\d|1[012])\-[0123][\d]$/,
          style: 67,
          fmt: function(d) {
            return Math.round(25569 + Date.parse(d) / (86400 * 1e3));
          }
        }
        //Date yyyy-mm-dd
      ];
      var _excelMergeCells = function(rels, row, column, rowspan, colspan) {
        var mergeCells = $6("mergeCells", rels);
        mergeCells[0].appendChild(
          _createNode(rels, "mergeCell", {
            attr: {
              ref: createCellPos(column) + row + ":" + createCellPos(column + colspan - 1) + (row + rowspan - 1)
            }
          })
        );
        mergeCells.attr("count", parseFloat(mergeCells.attr("count")) + 1);
      };
      DataTable3.ext.buttons.copyHtml5 = {
        className: "buttons-copy buttons-html5",
        text: function(dt) {
          return dt.i18n("buttons.copy", "Copy");
        },
        action: function(e, dt, button, config, cb) {
          var exportData = _exportData(dt, config);
          var info2 = dt.buttons.exportInfo(config);
          var newline = _newLine(config);
          var output = exportData.str;
          var hiddenDiv = $6("<div/>").css({
            height: 1,
            width: 1,
            overflow: "hidden",
            position: "fixed",
            top: 0,
            left: 0
          });
          if (info2.title) {
            output = info2.title + newline + newline + output;
          }
          if (info2.messageTop) {
            output = info2.messageTop + newline + newline + output;
          }
          if (info2.messageBottom) {
            output = output + newline + newline + info2.messageBottom;
          }
          if (config.customize) {
            output = config.customize(output, config, dt);
          }
          var textarea = $6("<textarea readonly/>").val(output).appendTo(hiddenDiv);
          if (document2.queryCommandSupported("copy")) {
            hiddenDiv.appendTo(dt.table().container());
            textarea[0].focus();
            textarea[0].select();
            try {
              var successful = document2.execCommand("copy");
              hiddenDiv.remove();
              if (successful) {
                if (config.copySuccess) {
                  dt.buttons.info(
                    dt.i18n("buttons.copyTitle", "Copy to clipboard"),
                    dt.i18n(
                      "buttons.copySuccess",
                      {
                        1: "Copied one row to clipboard",
                        _: "Copied %d rows to clipboard"
                      },
                      exportData.rows
                    ),
                    2e3
                  );
                }
                cb();
                return;
              }
            } catch (t) {
            }
          }
          var message = $6(
            "<span>" + dt.i18n(
              "buttons.copyKeys",
              "Press <i>ctrl</i> or <i>\u2318</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape."
            ) + "</span>"
          ).append(hiddenDiv);
          dt.buttons.info(
            dt.i18n("buttons.copyTitle", "Copy to clipboard"),
            message,
            0
          );
          textarea[0].focus();
          textarea[0].select();
          var container = $6(message).closest(".dt-button-info");
          var close = function() {
            container.off("click.buttons-copy");
            $6(document2).off(".buttons-copy");
            dt.buttons.info(false);
          };
          container.on("click.buttons-copy", function() {
            close();
            cb();
          });
          $6(document2).on("keydown.buttons-copy", function(e2) {
            if (e2.keyCode === 27) {
              close();
              cb();
            }
          }).on("copy.buttons-copy cut.buttons-copy", function() {
            close();
            cb();
          });
        },
        async: 100,
        copySuccess: true,
        exportOptions: {},
        fieldSeparator: "	",
        fieldBoundary: "",
        header: true,
        footer: true,
        title: "*",
        messageTop: "*",
        messageBottom: "*"
      };
      DataTable3.ext.buttons.csvHtml5 = {
        bom: false,
        className: "buttons-csv buttons-html5",
        available: function() {
          return window2.FileReader !== void 0 && window2.Blob;
        },
        text: function(dt) {
          return dt.i18n("buttons.csv", "CSV");
        },
        action: function(e, dt, button, config, cb) {
          var output = _exportData(dt, config).str;
          var info2 = dt.buttons.exportInfo(config);
          var charset = config.charset;
          if (config.customize) {
            output = config.customize(output, config, dt);
          }
          if (charset !== false) {
            if (!charset) {
              charset = document2.characterSet || document2.charset;
            }
            if (charset) {
              charset = ";charset=" + charset;
            }
          } else {
            charset = "";
          }
          if (config.bom) {
            output = String.fromCharCode(65279) + output;
          }
          _saveAs(
            new Blob([output], { type: "text/csv" + charset }),
            info2.filename,
            true
          );
          cb();
        },
        async: 100,
        filename: "*",
        extension: ".csv",
        exportOptions: {
          escapeExcelFormula: true
        },
        fieldSeparator: ",",
        fieldBoundary: '"',
        escapeChar: '"',
        charset: null,
        header: true,
        footer: true
      };
      DataTable3.ext.buttons.excelHtml5 = {
        className: "buttons-excel buttons-html5",
        available: function() {
          return window2.FileReader !== void 0 && _jsZip() !== void 0 && !_isDuffSafari() && _serialiser;
        },
        text: function(dt) {
          return dt.i18n("buttons.excel", "Excel");
        },
        action: function(e, dt, button, config, cb) {
          var rowPos = 0;
          var dataStartRow, dataEndRow;
          var getXml = function(type) {
            var str = excelStrings[type];
            return $6.parseXML(str);
          };
          var rels = getXml("xl/worksheets/sheet1.xml");
          var relsGet = rels.getElementsByTagName("sheetData")[0];
          var xlsx = {
            _rels: {
              ".rels": getXml("_rels/.rels")
            },
            xl: {
              _rels: {
                "workbook.xml.rels": getXml("xl/_rels/workbook.xml.rels")
              },
              "workbook.xml": getXml("xl/workbook.xml"),
              "styles.xml": getXml("xl/styles.xml"),
              worksheets: {
                "sheet1.xml": rels
              }
            },
            "[Content_Types].xml": getXml("[Content_Types].xml")
          };
          var data = dt.buttons.exportData(config.exportOptions);
          var currentRow, rowNode;
          var addRow = function(row) {
            currentRow = rowPos + 1;
            rowNode = _createNode(rels, "row", { attr: { r: currentRow } });
            for (var i2 = 0, ien2 = row.length; i2 < ien2; i2++) {
              var cellId = createCellPos(i2) + "" + currentRow;
              var cell = null;
              if (row[i2] === null || row[i2] === void 0 || row[i2] === "") {
                if (config.createEmptyCells === true) {
                  row[i2] = "";
                } else {
                  continue;
                }
              }
              var originalContent = row[i2];
              row[i2] = typeof row[i2].trim === "function" ? row[i2].trim() : row[i2];
              for (var j = 0, jen = _excelSpecials.length; j < jen; j++) {
                var special = _excelSpecials[j];
                if (row[i2].match && !row[i2].match(/^0\d+/) && row[i2].match(special.match)) {
                  var val = row[i2].replace(/[^\d\.\-]/g, "");
                  if (special.fmt) {
                    val = special.fmt(val);
                  }
                  cell = _createNode(rels, "c", {
                    attr: {
                      r: cellId,
                      s: special.style
                    },
                    children: [_createNode(rels, "v", { text: val })]
                  });
                  break;
                }
              }
              if (!cell) {
                if (typeof row[i2] === "number" || row[i2].match && row[i2].match(/^-?\d+(\.\d+)?([eE]\-?\d+)?$/) && // Includes exponential format
                !row[i2].match(/^0\d+/)) {
                  cell = _createNode(rels, "c", {
                    attr: {
                      t: "n",
                      r: cellId
                    },
                    children: [_createNode(rels, "v", { text: row[i2] })]
                  });
                } else {
                  var text = !originalContent.replace ? originalContent : originalContent.replace(
                    /[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,
                    ""
                  );
                  cell = _createNode(rels, "c", {
                    attr: {
                      t: "inlineStr",
                      r: cellId
                    },
                    children: {
                      row: _createNode(rels, "is", {
                        children: {
                          row: _createNode(rels, "t", {
                            text,
                            attr: {
                              "xml:space": "preserve"
                            }
                          })
                        }
                      })
                    }
                  });
                }
              }
              rowNode.appendChild(cell);
            }
            relsGet.appendChild(rowNode);
            rowPos++;
          };
          var addHeader = function(structure) {
            structure.forEach(function(row) {
              addRow(
                row.map(function(cell) {
                  return cell ? cell.title : "";
                }),
                rowPos
              );
              $6("row:last c", rels).attr("s", "2");
              row.forEach(function(cell, columnCounter) {
                if (cell && (cell.colSpan > 1 || cell.rowSpan > 1)) {
                  _excelMergeCells(
                    rels,
                    rowPos,
                    columnCounter,
                    cell.rowSpan,
                    cell.colSpan
                  );
                }
              });
            });
          };
          var exportInfo = dt.buttons.exportInfo(config);
          if (exportInfo.title) {
            addRow([exportInfo.title], rowPos);
            _excelMergeCells(rels, rowPos, 0, 1, data.header.length);
            $6("row:last c", rels).attr("s", "51");
          }
          if (exportInfo.messageTop) {
            addRow([exportInfo.messageTop], rowPos);
            _excelMergeCells(rels, rowPos, 0, 1, data.header.length);
          }
          if (config.header) {
            addHeader(data.headerStructure);
          }
          dataStartRow = rowPos;
          for (var n = 0, ie = data.body.length; n < ie; n++) {
            addRow(data.body[n], rowPos);
          }
          dataEndRow = rowPos;
          if (config.footer && data.footer) {
            addHeader(data.footerStructure);
          }
          if (exportInfo.messageBottom) {
            addRow([exportInfo.messageBottom], rowPos);
            _excelMergeCells(rels, rowPos, 0, 1, data.header.length);
          }
          var cols = _createNode(rels, "cols");
          $6("worksheet", rels).prepend(cols);
          for (var i = 0, ien = data.header.length; i < ien; i++) {
            cols.appendChild(
              _createNode(rels, "col", {
                attr: {
                  min: i + 1,
                  max: i + 1,
                  width: _excelColWidth(data, i),
                  customWidth: 1
                }
              })
            );
          }
          var workbook = xlsx.xl["workbook.xml"];
          $6("sheets sheet", workbook).attr("name", _sheetname(config));
          if (config.autoFilter) {
            $6("mergeCells", rels).before(
              _createNode(rels, "autoFilter", {
                attr: {
                  ref: "A" + dataStartRow + ":" + createCellPos(data.header.length - 1) + dataEndRow
                }
              })
            );
            $6("definedNames", workbook).append(
              _createNode(workbook, "definedName", {
                attr: {
                  name: "_xlnm._FilterDatabase",
                  localSheetId: "0",
                  hidden: 1
                },
                text: "'" + _sheetname(config).replace(/'/g, "''") + "'!$A$" + dataStartRow + ":" + createCellPos(data.header.length - 1) + dataEndRow
              })
            );
          }
          if (config.customize) {
            config.customize(xlsx, config, dt);
          }
          if ($6("mergeCells", rels).children().length === 0) {
            $6("mergeCells", rels).remove();
          }
          var jszip = _jsZip();
          var zip = new jszip();
          var zipConfig = {
            compression: "DEFLATE",
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          };
          _addToZip(zip, xlsx);
          var filename = exportInfo.filename;
          if (filename > 175) {
            filename = filename.substr(0, 175);
          }
          if (config.customizeZip) {
            config.customizeZip(zip, data, filename);
          }
          if (zip.generateAsync) {
            zip.generateAsync(zipConfig).then(function(blob) {
              _saveAs(blob, filename);
              cb();
            });
          } else {
            _saveAs(zip.generate(zipConfig), filename);
            cb();
          }
        },
        async: 100,
        filename: "*",
        extension: ".xlsx",
        exportOptions: {},
        header: true,
        footer: true,
        title: "*",
        messageTop: "*",
        messageBottom: "*",
        createEmptyCells: false,
        autoFilter: false,
        sheetName: ""
      };
      DataTable3.ext.buttons.pdfHtml5 = {
        className: "buttons-pdf buttons-html5",
        available: function() {
          return window2.FileReader !== void 0 && _pdfMake();
        },
        text: function(dt) {
          return dt.i18n("buttons.pdf", "PDF");
        },
        action: function(e, dt, button, config, cb) {
          var data = dt.buttons.exportData(config.exportOptions);
          var info2 = dt.buttons.exportInfo(config);
          var rows = [];
          if (config.header) {
            data.headerStructure.forEach(function(row) {
              rows.push(
                row.map(function(cell) {
                  return cell ? {
                    text: cell.title,
                    colSpan: cell.colspan,
                    rowSpan: cell.rowspan,
                    style: "tableHeader"
                  } : {};
                })
              );
            });
          }
          for (var i = 0, ien = data.body.length; i < ien; i++) {
            rows.push(
              data.body[i].map(function(d) {
                return {
                  text: d === null || d === void 0 ? "" : typeof d === "string" ? d : d.toString()
                };
              })
            );
          }
          if (config.footer) {
            data.footerStructure.forEach(function(row) {
              rows.push(
                row.map(function(cell) {
                  return cell ? {
                    text: cell.title,
                    colSpan: cell.colspan,
                    rowSpan: cell.rowspan,
                    style: "tableFooter"
                  } : {};
                })
              );
            });
          }
          var doc = {
            pageSize: config.pageSize,
            pageOrientation: config.orientation,
            content: [
              {
                style: "table",
                table: {
                  headerRows: data.headerStructure.length,
                  footerRows: data.footerStructure.length,
                  // Used for styling, doesn't do anything in pdfmake
                  body: rows
                },
                layout: {
                  hLineWidth: function(i2, node) {
                    if (i2 === 0 || i2 === node.table.body.length) {
                      return 0;
                    }
                    return 0.5;
                  },
                  vLineWidth: function() {
                    return 0;
                  },
                  hLineColor: function(i2, node) {
                    return i2 === node.table.headerRows || i2 === node.table.body.length - node.table.footerRows ? "#333" : "#ddd";
                  },
                  fillColor: function(rowIndex) {
                    if (rowIndex < data.headerStructure.length) {
                      return "#fff";
                    }
                    return rowIndex % 2 === 0 ? "#f3f3f3" : null;
                  },
                  paddingTop: function() {
                    return 5;
                  },
                  paddingBottom: function() {
                    return 5;
                  }
                }
              }
            ],
            styles: {
              tableHeader: {
                bold: true,
                fontSize: 11,
                alignment: "center"
              },
              tableFooter: {
                bold: true,
                fontSize: 11,
                alignment: "center"
              },
              table: {
                margin: [0, 5, 0, 5]
              },
              title: {
                alignment: "center",
                fontSize: 13
              },
              message: {}
            },
            defaultStyle: {
              fontSize: 10
            }
          };
          if (info2.messageTop) {
            doc.content.unshift({
              text: info2.messageTop,
              style: "message",
              margin: [0, 0, 0, 12]
            });
          }
          if (info2.messageBottom) {
            doc.content.push({
              text: info2.messageBottom,
              style: "message",
              margin: [0, 0, 0, 12]
            });
          }
          if (info2.title) {
            doc.content.unshift({
              text: info2.title,
              style: "title",
              margin: [0, 0, 0, 12]
            });
          }
          if (config.customize) {
            config.customize(doc, config, dt);
          }
          var pdf = _pdfMake().createPdf(doc);
          if (config.download === "open" && !_isDuffSafari()) {
            pdf.open();
          } else {
            pdf.download(info2.filename);
          }
          cb();
        },
        async: 100,
        title: "*",
        filename: "*",
        extension: ".pdf",
        exportOptions: {},
        orientation: "portrait",
        // This isn't perfect, but it is close
        pageSize: navigator.language === "en-US" || navigator.language === "en-CA" ? "LETTER" : "A4",
        header: true,
        footer: true,
        messageTop: "*",
        messageBottom: "*",
        customize: null,
        download: "download"
      };
      return DataTable3;
    });
  }
});

// app/javascript/application.js
var import_jquery5 = __toESM(require_jquery());

// node_modules/bootstrap/dist/js/bootstrap.esm.js
var bootstrap_esm_exports = {};
__export(bootstrap_esm_exports, {
  Alert: () => Alert,
  Button: () => Button,
  Carousel: () => Carousel,
  Collapse: () => Collapse,
  Dropdown: () => Dropdown,
  Modal: () => Modal,
  Offcanvas: () => Offcanvas,
  Popover: () => Popover,
  ScrollSpy: () => ScrollSpy,
  Tab: () => Tab,
  Toast: () => Toast,
  Tooltip: () => Tooltip
});

// node_modules/@popperjs/core/lib/index.js
var lib_exports = {};
__export(lib_exports, {
  afterMain: () => afterMain,
  afterRead: () => afterRead,
  afterWrite: () => afterWrite,
  applyStyles: () => applyStyles_default,
  arrow: () => arrow_default,
  auto: () => auto,
  basePlacements: () => basePlacements,
  beforeMain: () => beforeMain,
  beforeRead: () => beforeRead,
  beforeWrite: () => beforeWrite,
  bottom: () => bottom,
  clippingParents: () => clippingParents,
  computeStyles: () => computeStyles_default,
  createPopper: () => createPopper3,
  createPopperBase: () => createPopper,
  createPopperLite: () => createPopper2,
  detectOverflow: () => detectOverflow,
  end: () => end,
  eventListeners: () => eventListeners_default,
  flip: () => flip_default,
  hide: () => hide_default,
  left: () => left,
  main: () => main,
  modifierPhases: () => modifierPhases,
  offset: () => offset_default,
  placements: () => placements,
  popper: () => popper,
  popperGenerator: () => popperGenerator,
  popperOffsets: () => popperOffsets_default,
  preventOverflow: () => preventOverflow_default,
  read: () => read,
  reference: () => reference,
  right: () => right,
  start: () => start,
  top: () => top,
  variationPlacements: () => variationPlacements,
  viewport: () => viewport,
  write: () => write
});

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = /* @__PURE__ */ popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = /* @__PURE__ */ popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/bootstrap/dist/js/bootstrap.esm.js
var elementMap = /* @__PURE__ */ new Map();
var Data = {
  set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, /* @__PURE__ */ new Map());
    }
    const instanceMap = elementMap.get(element);
    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
      return;
    }
    instanceMap.set(key, instance);
  },
  get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }
    return null;
  },
  remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }
    const instanceMap = elementMap.get(element);
    instanceMap.delete(key);
    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }
};
var MAX_UID = 1e6;
var MILLISECONDS_MULTIPLIER = 1e3;
var TRANSITION_END = "transitionend";
var parseSelector = (selector) => {
  if (selector && window.CSS && window.CSS.escape) {
    selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
  }
  return selector;
};
var toType = (object) => {
  if (object === null || object === void 0) {
    return `${object}`;
  }
  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
var getUID = (prefix) => {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));
  return prefix;
};
var getTransitionDurationFromElement = (element) => {
  if (!element) {
    return 0;
  }
  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }
  transitionDuration = transitionDuration.split(",")[0];
  transitionDelay = transitionDelay.split(",")[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
var triggerTransitionEnd = (element) => {
  element.dispatchEvent(new Event(TRANSITION_END));
};
var isElement2 = (object) => {
  if (!object || typeof object !== "object") {
    return false;
  }
  if (typeof object.jquery !== "undefined") {
    object = object[0];
  }
  return typeof object.nodeType !== "undefined";
};
var getElement = (object) => {
  if (isElement2(object)) {
    return object.jquery ? object[0] : object;
  }
  if (typeof object === "string" && object.length > 0) {
    return document.querySelector(parseSelector(object));
  }
  return null;
};
var isVisible = (element) => {
  if (!isElement2(element) || element.getClientRects().length === 0) {
    return false;
  }
  const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
  const closedDetails = element.closest("details:not([open])");
  if (!closedDetails) {
    return elementIsVisible;
  }
  if (closedDetails !== element) {
    const summary = element.closest("summary");
    if (summary && summary.parentNode !== closedDetails) {
      return false;
    }
    if (summary === null) {
      return false;
    }
  }
  return elementIsVisible;
};
var isDisabled = (element) => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }
  if (element.classList.contains("disabled")) {
    return true;
  }
  if (typeof element.disabled !== "undefined") {
    return element.disabled;
  }
  return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
};
var findShadowRoot = (element) => {
  if (!document.documentElement.attachShadow) {
    return null;
  }
  if (typeof element.getRootNode === "function") {
    const root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }
  if (element instanceof ShadowRoot) {
    return element;
  }
  if (!element.parentNode) {
    return null;
  }
  return findShadowRoot(element.parentNode);
};
var noop = () => {
};
var reflow = (element) => {
  element.offsetHeight;
};
var getjQuery = () => {
  if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
    return window.jQuery;
  }
  return null;
};
var DOMContentLoadedCallbacks = [];
var onDOMContentLoaded = (callback) => {
  if (document.readyState === "loading") {
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener("DOMContentLoaded", () => {
        for (const callback2 of DOMContentLoadedCallbacks) {
          callback2();
        }
      });
    }
    DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};
var isRTL = () => document.documentElement.dir === "rtl";
var defineJQueryPlugin = (plugin) => {
  onDOMContentLoaded(() => {
    const $6 = getjQuery();
    if ($6) {
      const name = plugin.NAME;
      const JQUERY_NO_CONFLICT = $6.fn[name];
      $6.fn[name] = plugin.jQueryInterface;
      $6.fn[name].Constructor = plugin;
      $6.fn[name].noConflict = () => {
        $6.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};
var execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
  return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
};
var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
  if (!waitForTransition) {
    execute(callback);
    return;
  }
  const durationPadding = 5;
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  let called = false;
  const handler = ({
    target
  }) => {
    if (target !== transitionElement) {
      return;
    }
    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  };
  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
  const listLength = list.length;
  let index = list.indexOf(activeElement);
  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
  }
  index += shouldGetNext ? 1 : -1;
  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }
  return list[Math.max(0, Math.min(index, listLength - 1))];
};
var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
var stripNameRegex = /\..*/;
var stripUidRegex = /::\d+$/;
var eventRegistry = {};
var uidEvent = 1;
var customEvents = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
};
var nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function makeEventUid(element, uid) {
  return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
  const uid = makeEventUid(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}
function bootstrapHandler(element, fn2) {
  return function handler(event) {
    hydrateObj(event, {
      delegateTarget: element
    });
    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn2);
    }
    return fn2.apply(element, [event]);
  };
}
function bootstrapDelegationHandler(element, selector, fn2) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector);
    for (let {
      target
    } = event; target && target !== this; target = target.parentNode) {
      for (const domElement of domElements) {
        if (domElement !== target) {
          continue;
        }
        hydrateObj(event, {
          delegateTarget: target
        });
        if (handler.oneOff) {
          EventHandler.off(element, event.type, selector, fn2);
        }
        return fn2.apply(target, [event]);
      }
    }
  };
}
function findHandler(events, callable, delegationSelector = null) {
  return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
  const isDelegated = typeof handler === "string";
  const callable = isDelegated ? delegationFunction : handler || delegationFunction;
  let typeEvent = getTypeEvent(originalTypeEvent);
  if (!nativeEvents.has(typeEvent)) {
    typeEvent = originalTypeEvent;
  }
  return [isDelegated, callable, typeEvent];
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
  if (typeof originalTypeEvent !== "string" || !element) {
    return;
  }
  let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
  if (originalTypeEvent in customEvents) {
    const wrapFunction = (fn3) => {
      return function(event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn3.call(this, event);
        }
      };
    };
    callable = wrapFunction(callable);
  }
  const events = getElementEvents(element);
  const handlers = events[typeEvent] || (events[typeEvent] = {});
  const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
  if (previousFunction) {
    previousFunction.oneOff = previousFunction.oneOff && oneOff;
    return;
  }
  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
  const fn2 = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
  fn2.delegationSelector = isDelegated ? handler : null;
  fn2.callable = callable;
  fn2.oneOff = oneOff;
  fn2.uidEvent = uid;
  handlers[uid] = fn2;
  element.addEventListener(typeEvent, fn2, isDelegated);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn2 = findHandler(events[typeEvent], handler, delegationSelector);
  if (!fn2) {
    return;
  }
  element.removeEventListener(typeEvent, fn2, Boolean(delegationSelector));
  delete events[typeEvent][fn2.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {};
  for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
    if (handlerKey.includes(namespace)) {
      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
  }
}
function getTypeEvent(event) {
  event = event.replace(stripNameRegex, "");
  return customEvents[event] || event;
}
var EventHandler = {
  on(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, false);
  },
  one(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, true);
  },
  off(element, originalTypeEvent, handler, delegationFunction) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = getElementEvents(element);
    const storeElementEvent = events[typeEvent] || {};
    const isNamespace = originalTypeEvent.startsWith(".");
    if (typeof callable !== "undefined") {
      if (!Object.keys(storeElementEvent).length) {
        return;
      }
      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
      return;
    }
    if (isNamespace) {
      for (const elementEvent of Object.keys(events)) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      }
    }
    for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
      const handlerKey = keyHandlers.replace(stripUidRegex, "");
      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  },
  trigger(element, event, args) {
    if (typeof event !== "string" || !element) {
      return null;
    }
    const $6 = getjQuery();
    const typeEvent = getTypeEvent(event);
    const inNamespace = event !== typeEvent;
    let jQueryEvent = null;
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;
    if (inNamespace && $6) {
      jQueryEvent = $6.Event(event, args);
      $6(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }
    const evt = hydrateObj(new Event(event, {
      bubbles,
      cancelable: true
    }), args);
    if (defaultPrevented) {
      evt.preventDefault();
    }
    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }
    if (evt.defaultPrevented && jQueryEvent) {
      jQueryEvent.preventDefault();
    }
    return evt;
  }
};
function hydrateObj(obj, meta = {}) {
  for (const [key, value] of Object.entries(meta)) {
    try {
      obj[key] = value;
    } catch (_unused) {
      Object.defineProperty(obj, key, {
        configurable: true,
        get() {
          return value;
        }
      });
    }
  }
  return obj;
}
function normalizeData(value) {
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  if (value === Number(value).toString()) {
    return Number(value);
  }
  if (value === "" || value === "null") {
    return null;
  }
  if (typeof value !== "string") {
    return value;
  }
  try {
    return JSON.parse(decodeURIComponent(value));
  } catch (_unused) {
    return value;
  }
}
function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
}
var Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
  },
  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
  },
  getDataAttributes(element) {
    if (!element) {
      return {};
    }
    const attributes = {};
    const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
    for (const key of bsKeys) {
      let pureKey = key.replace(/^bs/, "");
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    }
    return attributes;
  },
  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
  }
};
var Config = class {
  // Getters
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }
  _getConfig(config) {
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  _configAfterMerge(config) {
    return config;
  }
  _mergeConfigObj(config, element) {
    const jsonConfig = isElement2(element) ? Manipulator.getDataAttribute(element, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof jsonConfig === "object" ? jsonConfig : {},
      ...isElement2(element) ? Manipulator.getDataAttributes(element) : {},
      ...typeof config === "object" ? config : {}
    };
  }
  _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
    for (const [property, expectedTypes] of Object.entries(configTypes)) {
      const value = config[property];
      const valueType = isElement2(value) ? "element" : toType(value);
      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    }
  }
};
var VERSION = "5.3.3";
var BaseComponent = class extends Config {
  constructor(element, config) {
    super();
    element = getElement(element);
    if (!element) {
      return;
    }
    this._element = element;
    this._config = this._getConfig(config);
    Data.set(this._element, this.constructor.DATA_KEY, this);
  }
  // Public
  dispose() {
    Data.remove(this._element, this.constructor.DATA_KEY);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);
    for (const propertyName of Object.getOwnPropertyNames(this)) {
      this[propertyName] = null;
    }
  }
  _queueCallback(callback, element, isAnimated = true) {
    executeAfterTransition(callback, element, isAnimated);
  }
  _getConfig(config) {
    config = this._mergeConfigObj(config, this._element);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  // Static
  static getInstance(element) {
    return Data.get(getElement(element), this.DATA_KEY);
  }
  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
  }
  static get VERSION() {
    return VERSION;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(name) {
    return `${name}${this.EVENT_KEY}`;
  }
};
var getSelector = (element) => {
  let selector = element.getAttribute("data-bs-target");
  if (!selector || selector === "#") {
    let hrefAttribute = element.getAttribute("href");
    if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
      return null;
    }
    if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
      hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
    }
    selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
  }
  return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
};
var SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },
  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },
  children(element, selector) {
    return [].concat(...element.children).filter((child) => child.matches(selector));
  },
  parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode.closest(selector);
    while (ancestor) {
      parents.push(ancestor);
      ancestor = ancestor.parentNode.closest(selector);
    }
    return parents;
  },
  prev(element, selector) {
    let previous = element.previousElementSibling;
    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }
      previous = previous.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(element, selector) {
    let next = element.nextElementSibling;
    while (next) {
      if (next.matches(selector)) {
        return [next];
      }
      next = next.nextElementSibling;
    }
    return [];
  },
  focusableChildren(element) {
    const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
    return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
  },
  getSelectorFromElement(element) {
    const selector = getSelector(element);
    if (selector) {
      return SelectorEngine.findOne(selector) ? selector : null;
    }
    return null;
  },
  getElementFromSelector(element) {
    const selector = getSelector(element);
    return selector ? SelectorEngine.findOne(selector) : null;
  },
  getMultipleElementsFromSelector(element) {
    const selector = getSelector(element);
    return selector ? SelectorEngine.find(selector) : [];
  }
};
var enableDismissTrigger = (component, method = "hide") => {
  const clickEvent = `click.dismiss${component.EVENT_KEY}`;
  const name = component.NAME;
  EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
    const instance = component.getOrCreateInstance(target);
    instance[method]();
  });
};
var NAME$f = "alert";
var DATA_KEY$a = "bs.alert";
var EVENT_KEY$b = `.${DATA_KEY$a}`;
var EVENT_CLOSE = `close${EVENT_KEY$b}`;
var EVENT_CLOSED = `closed${EVENT_KEY$b}`;
var CLASS_NAME_FADE$5 = "fade";
var CLASS_NAME_SHOW$8 = "show";
var Alert = class _Alert extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$f;
  }
  // Public
  close() {
    const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
    if (closeEvent.defaultPrevented) {
      return;
    }
    this._element.classList.remove(CLASS_NAME_SHOW$8);
    const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
    this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
  }
  // Private
  _destroyElement() {
    this._element.remove();
    EventHandler.trigger(this._element, EVENT_CLOSED);
    this.dispose();
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Alert.getOrCreateInstance(this);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](this);
    });
  }
};
enableDismissTrigger(Alert, "close");
defineJQueryPlugin(Alert);
var NAME$e = "button";
var DATA_KEY$9 = "bs.button";
var EVENT_KEY$a = `.${DATA_KEY$9}`;
var DATA_API_KEY$6 = ".data-api";
var CLASS_NAME_ACTIVE$3 = "active";
var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
var EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
var Button = class _Button extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$e;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Button.getOrCreateInstance(this);
      if (config === "toggle") {
        data[config]();
      }
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event) => {
  event.preventDefault();
  const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  const data = Button.getOrCreateInstance(button);
  data.toggle();
});
defineJQueryPlugin(Button);
var NAME$d = "swipe";
var EVENT_KEY$9 = ".bs.swipe";
var EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
var EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
var EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
var POINTER_TYPE_TOUCH = "touch";
var POINTER_TYPE_PEN = "pen";
var CLASS_NAME_POINTER_EVENT = "pointer-event";
var SWIPE_THRESHOLD = 40;
var Default$c = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
};
var DefaultType$c = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
var Swipe = class _Swipe extends Config {
  constructor(element, config) {
    super();
    this._element = element;
    if (!element || !_Swipe.isSupported()) {
      return;
    }
    this._config = this._getConfig(config);
    this._deltaX = 0;
    this._supportPointerEvents = Boolean(window.PointerEvent);
    this._initEvents();
  }
  // Getters
  static get Default() {
    return Default$c;
  }
  static get DefaultType() {
    return DefaultType$c;
  }
  static get NAME() {
    return NAME$d;
  }
  // Public
  dispose() {
    EventHandler.off(this._element, EVENT_KEY$9);
  }
  // Private
  _start(event) {
    if (!this._supportPointerEvents) {
      this._deltaX = event.touches[0].clientX;
      return;
    }
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX;
    }
  }
  _end(event) {
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX - this._deltaX;
    }
    this._handleSwipe();
    execute(this._config.endCallback);
  }
  _move(event) {
    this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const absDeltaX = Math.abs(this._deltaX);
    if (absDeltaX <= SWIPE_THRESHOLD) {
      return;
    }
    const direction = absDeltaX / this._deltaX;
    this._deltaX = 0;
    if (!direction) {
      return;
    }
    execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    if (this._supportPointerEvents) {
      EventHandler.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
      EventHandler.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
    } else {
      EventHandler.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
      EventHandler.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
      EventHandler.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
    }
  }
  _eventIsPointerPenTouch(event) {
    return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
};
var NAME$c = "carousel";
var DATA_KEY$8 = "bs.carousel";
var EVENT_KEY$8 = `.${DATA_KEY$8}`;
var DATA_API_KEY$5 = ".data-api";
var ARROW_LEFT_KEY$1 = "ArrowLeft";
var ARROW_RIGHT_KEY$1 = "ArrowRight";
var TOUCHEVENT_COMPAT_WAIT = 500;
var ORDER_NEXT = "next";
var ORDER_PREV = "prev";
var DIRECTION_LEFT = "left";
var DIRECTION_RIGHT = "right";
var EVENT_SLIDE = `slide${EVENT_KEY$8}`;
var EVENT_SLID = `slid${EVENT_KEY$8}`;
var EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
var EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
var EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
var EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
var EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
var EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
var CLASS_NAME_CAROUSEL = "carousel";
var CLASS_NAME_ACTIVE$2 = "active";
var CLASS_NAME_SLIDE = "slide";
var CLASS_NAME_END = "carousel-item-end";
var CLASS_NAME_START = "carousel-item-start";
var CLASS_NAME_NEXT = "carousel-item-next";
var CLASS_NAME_PREV = "carousel-item-prev";
var SELECTOR_ACTIVE = ".active";
var SELECTOR_ITEM = ".carousel-item";
var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
var SELECTOR_ITEM_IMG = ".carousel-item img";
var SELECTOR_INDICATORS = ".carousel-indicators";
var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
var KEY_TO_DIRECTION = {
  [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
  [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
};
var Default$b = {
  interval: 5e3,
  keyboard: true,
  pause: "hover",
  ride: false,
  touch: true,
  wrap: true
};
var DefaultType$b = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
var Carousel = class _Carousel extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._interval = null;
    this._activeElement = null;
    this._isSliding = false;
    this.touchTimeout = null;
    this._swipeHelper = null;
    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
    this._addEventListeners();
    if (this._config.ride === CLASS_NAME_CAROUSEL) {
      this.cycle();
    }
  }
  // Getters
  static get Default() {
    return Default$b;
  }
  static get DefaultType() {
    return DefaultType$b;
  }
  static get NAME() {
    return NAME$c;
  }
  // Public
  next() {
    this._slide(ORDER_NEXT);
  }
  nextWhenVisible() {
    if (!document.hidden && isVisible(this._element)) {
      this.next();
    }
  }
  prev() {
    this._slide(ORDER_PREV);
  }
  pause() {
    if (this._isSliding) {
      triggerTransitionEnd(this._element);
    }
    this._clearInterval();
  }
  cycle() {
    this._clearInterval();
    this._updateInterval();
    this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (!this._config.ride) {
      return;
    }
    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
      return;
    }
    this.cycle();
  }
  to(index) {
    const items = this._getItems();
    if (index > items.length - 1 || index < 0) {
      return;
    }
    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
      return;
    }
    const activeIndex = this._getItemIndex(this._getActive());
    if (activeIndex === index) {
      return;
    }
    const order2 = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
    this._slide(order2, items[index]);
  }
  dispose() {
    if (this._swipeHelper) {
      this._swipeHelper.dispose();
    }
    super.dispose();
  }
  // Private
  _configAfterMerge(config) {
    config.defaultInterval = config.interval;
    return config;
  }
  _addEventListeners() {
    if (this._config.keyboard) {
      EventHandler.on(this._element, EVENT_KEYDOWN$1, (event) => this._keydown(event));
    }
    if (this._config.pause === "hover") {
      EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
      EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
    }
    if (this._config.touch && Swipe.isSupported()) {
      this._addTouchEventListeners();
    }
  }
  _addTouchEventListeners() {
    for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
      EventHandler.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
    }
    const endCallBack = () => {
      if (this._config.pause !== "hover") {
        return;
      }
      this.pause();
      if (this.touchTimeout) {
        clearTimeout(this.touchTimeout);
      }
      this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
    };
    const swipeConfig = {
      leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
      rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
      endCallback: endCallBack
    };
    this._swipeHelper = new Swipe(this._element, swipeConfig);
  }
  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }
    const direction = KEY_TO_DIRECTION[event.key];
    if (direction) {
      event.preventDefault();
      this._slide(this._directionToOrder(direction));
    }
  }
  _getItemIndex(element) {
    return this._getItems().indexOf(element);
  }
  _setActiveIndicatorElement(index) {
    if (!this._indicatorsElement) {
      return;
    }
    const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
    activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
    activeIndicator.removeAttribute("aria-current");
    const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
    if (newActiveIndicator) {
      newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
      newActiveIndicator.setAttribute("aria-current", "true");
    }
  }
  _updateInterval() {
    const element = this._activeElement || this._getActive();
    if (!element) {
      return;
    }
    const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
    this._config.interval = elementInterval || this._config.defaultInterval;
  }
  _slide(order2, element = null) {
    if (this._isSliding) {
      return;
    }
    const activeElement = this._getActive();
    const isNext = order2 === ORDER_NEXT;
    const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
    if (nextElement === activeElement) {
      return;
    }
    const nextElementIndex = this._getItemIndex(nextElement);
    const triggerEvent = (eventName) => {
      return EventHandler.trigger(this._element, eventName, {
        relatedTarget: nextElement,
        direction: this._orderToDirection(order2),
        from: this._getItemIndex(activeElement),
        to: nextElementIndex
      });
    };
    const slideEvent = triggerEvent(EVENT_SLIDE);
    if (slideEvent.defaultPrevented) {
      return;
    }
    if (!activeElement || !nextElement) {
      return;
    }
    const isCycling = Boolean(this._interval);
    this.pause();
    this._isSliding = true;
    this._setActiveIndicatorElement(nextElementIndex);
    this._activeElement = nextElement;
    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
    nextElement.classList.add(orderClassName);
    reflow(nextElement);
    activeElement.classList.add(directionalClassName);
    nextElement.classList.add(directionalClassName);
    const completeCallBack = () => {
      nextElement.classList.remove(directionalClassName, orderClassName);
      nextElement.classList.add(CLASS_NAME_ACTIVE$2);
      activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
      this._isSliding = false;
      triggerEvent(EVENT_SLID);
    };
    this._queueCallback(completeCallBack, activeElement, this._isAnimated());
    if (isCycling) {
      this.cycle();
    }
  }
  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_SLIDE);
  }
  _getActive() {
    return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
  }
  _getItems() {
    return SelectorEngine.find(SELECTOR_ITEM, this._element);
  }
  _clearInterval() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }
  _directionToOrder(direction) {
    if (isRTL()) {
      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
    }
    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
  }
  _orderToDirection(order2) {
    if (isRTL()) {
      return order2 === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return order2 === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Carousel.getOrCreateInstance(this, config);
      if (typeof config === "number") {
        data.to(config);
        return;
      }
      if (typeof config === "string") {
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
    return;
  }
  event.preventDefault();
  const carousel = Carousel.getOrCreateInstance(target);
  const slideIndex = this.getAttribute("data-bs-slide-to");
  if (slideIndex) {
    carousel.to(slideIndex);
    carousel._maybeEnableCycle();
    return;
  }
  if (Manipulator.getDataAttribute(this, "slide") === "next") {
    carousel.next();
    carousel._maybeEnableCycle();
    return;
  }
  carousel.prev();
  carousel._maybeEnableCycle();
});
EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
  for (const carousel of carousels) {
    Carousel.getOrCreateInstance(carousel);
  }
});
defineJQueryPlugin(Carousel);
var NAME$b = "collapse";
var DATA_KEY$7 = "bs.collapse";
var EVENT_KEY$7 = `.${DATA_KEY$7}`;
var DATA_API_KEY$4 = ".data-api";
var EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
var EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
var EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
var EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
var EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
var CLASS_NAME_SHOW$7 = "show";
var CLASS_NAME_COLLAPSE = "collapse";
var CLASS_NAME_COLLAPSING = "collapsing";
var CLASS_NAME_COLLAPSED = "collapsed";
var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
var WIDTH = "width";
var HEIGHT = "height";
var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
var Default$a = {
  parent: null,
  toggle: true
};
var DefaultType$a = {
  parent: "(null|element)",
  toggle: "boolean"
};
var Collapse = class _Collapse extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isTransitioning = false;
    this._triggerArray = [];
    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
    for (const elem of toggleList) {
      const selector = SelectorEngine.getSelectorFromElement(elem);
      const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
      if (selector !== null && filterElement.length) {
        this._triggerArray.push(elem);
      }
    }
    this._initializeChildren();
    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
    }
    if (this._config.toggle) {
      this.toggle();
    }
  }
  // Getters
  static get Default() {
    return Default$a;
  }
  static get DefaultType() {
    return DefaultType$a;
  }
  static get NAME() {
    return NAME$b;
  }
  // Public
  toggle() {
    if (this._isShown()) {
      this.hide();
    } else {
      this.show();
    }
  }
  show() {
    if (this._isTransitioning || this._isShown()) {
      return;
    }
    let activeChildren = [];
    if (this._config.parent) {
      activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => _Collapse.getOrCreateInstance(element, {
        toggle: false
      }));
    }
    if (activeChildren.length && activeChildren[0]._isTransitioning) {
      return;
    }
    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
    if (startEvent.defaultPrevented) {
      return;
    }
    for (const activeInstance of activeChildren) {
      activeInstance.hide();
    }
    const dimension = this._getDimension();
    this._element.classList.remove(CLASS_NAME_COLLAPSE);
    this._element.classList.add(CLASS_NAME_COLLAPSING);
    this._element.style[dimension] = 0;
    this._addAriaAndCollapsedClass(this._triggerArray, true);
    this._isTransitioning = true;
    const complete = () => {
      this._isTransitioning = false;
      this._element.classList.remove(CLASS_NAME_COLLAPSING);
      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      this._element.style[dimension] = "";
      EventHandler.trigger(this._element, EVENT_SHOWN$6);
    };
    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;
    this._queueCallback(complete, this._element, true);
    this._element.style[dimension] = `${this._element[scrollSize]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown()) {
      return;
    }
    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
    if (startEvent.defaultPrevented) {
      return;
    }
    const dimension = this._getDimension();
    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_COLLAPSING);
    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
    for (const trigger of this._triggerArray) {
      const element = SelectorEngine.getElementFromSelector(trigger);
      if (element && !this._isShown(element)) {
        this._addAriaAndCollapsedClass([trigger], false);
      }
    }
    this._isTransitioning = true;
    const complete = () => {
      this._isTransitioning = false;
      this._element.classList.remove(CLASS_NAME_COLLAPSING);
      this._element.classList.add(CLASS_NAME_COLLAPSE);
      EventHandler.trigger(this._element, EVENT_HIDDEN$6);
    };
    this._element.style[dimension] = "";
    this._queueCallback(complete, this._element, true);
  }
  _isShown(element = this._element) {
    return element.classList.contains(CLASS_NAME_SHOW$7);
  }
  // Private
  _configAfterMerge(config) {
    config.toggle = Boolean(config.toggle);
    config.parent = getElement(config.parent);
    return config;
  }
  _getDimension() {
    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
  }
  _initializeChildren() {
    if (!this._config.parent) {
      return;
    }
    const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
    for (const element of children) {
      const selected = SelectorEngine.getElementFromSelector(element);
      if (selected) {
        this._addAriaAndCollapsedClass([element], this._isShown(selected));
      }
    }
  }
  _getFirstLevelChildren(selector) {
    const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
    return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
  }
  _addAriaAndCollapsedClass(triggerArray, isOpen) {
    if (!triggerArray.length) {
      return;
    }
    for (const element of triggerArray) {
      element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
      element.setAttribute("aria-expanded", isOpen);
    }
  }
  // Static
  static jQueryInterface(config) {
    const _config = {};
    if (typeof config === "string" && /show|hide/.test(config)) {
      _config.toggle = false;
    }
    return this.each(function() {
      const data = _Collapse.getOrCreateInstance(this, _config);
      if (typeof config === "string") {
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
  if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
    event.preventDefault();
  }
  for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
    Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  }
});
defineJQueryPlugin(Collapse);
var NAME$a = "dropdown";
var DATA_KEY$6 = "bs.dropdown";
var EVENT_KEY$6 = `.${DATA_KEY$6}`;
var DATA_API_KEY$3 = ".data-api";
var ESCAPE_KEY$2 = "Escape";
var TAB_KEY$1 = "Tab";
var ARROW_UP_KEY$1 = "ArrowUp";
var ARROW_DOWN_KEY$1 = "ArrowDown";
var RIGHT_MOUSE_BUTTON = 2;
var EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
var EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
var EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
var EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
var EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
var CLASS_NAME_SHOW$6 = "show";
var CLASS_NAME_DROPUP = "dropup";
var CLASS_NAME_DROPEND = "dropend";
var CLASS_NAME_DROPSTART = "dropstart";
var CLASS_NAME_DROPUP_CENTER = "dropup-center";
var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
var SELECTOR_MENU = ".dropdown-menu";
var SELECTOR_NAVBAR = ".navbar";
var SELECTOR_NAVBAR_NAV = ".navbar-nav";
var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
var PLACEMENT_TOPCENTER = "top";
var PLACEMENT_BOTTOMCENTER = "bottom";
var Default$9 = {
  autoClose: true,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
};
var DefaultType$9 = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
var Dropdown = class _Dropdown extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._popper = null;
    this._parent = this._element.parentNode;
    this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
    this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return Default$9;
  }
  static get DefaultType() {
    return DefaultType$9;
  }
  static get NAME() {
    return NAME$a;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (isDisabled(this._element) || this._isShown()) {
      return;
    }
    const relatedTarget = {
      relatedTarget: this._element
    };
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
    if (showEvent.defaultPrevented) {
      return;
    }
    this._createPopper();
    if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, "mouseover", noop);
      }
    }
    this._element.focus();
    this._element.setAttribute("aria-expanded", true);
    this._menu.classList.add(CLASS_NAME_SHOW$6);
    this._element.classList.add(CLASS_NAME_SHOW$6);
    EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
  }
  hide() {
    if (isDisabled(this._element) || !this._isShown()) {
      return;
    }
    const relatedTarget = {
      relatedTarget: this._element
    };
    this._completeHide(relatedTarget);
  }
  dispose() {
    if (this._popper) {
      this._popper.destroy();
    }
    super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar();
    if (this._popper) {
      this._popper.update();
    }
  }
  // Private
  _completeHide(relatedTarget) {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
    if (hideEvent.defaultPrevented) {
      return;
    }
    if ("ontouchstart" in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, "mouseover", noop);
      }
    }
    if (this._popper) {
      this._popper.destroy();
    }
    this._menu.classList.remove(CLASS_NAME_SHOW$6);
    this._element.classList.remove(CLASS_NAME_SHOW$6);
    this._element.setAttribute("aria-expanded", "false");
    Manipulator.removeDataAttribute(this._menu, "popper");
    EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
  }
  _getConfig(config) {
    config = super._getConfig(config);
    if (typeof config.reference === "object" && !isElement2(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
      throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    }
    return config;
  }
  _createPopper() {
    if (typeof lib_exports === "undefined") {
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
    }
    let referenceElement = this._element;
    if (this._config.reference === "parent") {
      referenceElement = this._parent;
    } else if (isElement2(this._config.reference)) {
      referenceElement = getElement(this._config.reference);
    } else if (typeof this._config.reference === "object") {
      referenceElement = this._config.reference;
    }
    const popperConfig = this._getPopperConfig();
    this._popper = createPopper3(referenceElement, this._menu, popperConfig);
  }
  _isShown() {
    return this._menu.classList.contains(CLASS_NAME_SHOW$6);
  }
  _getPlacement() {
    const parentDropdown = this._parent;
    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
      return PLACEMENT_RIGHT;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
      return PLACEMENT_LEFT;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
      return PLACEMENT_TOPCENTER;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
      return PLACEMENT_BOTTOMCENTER;
    }
    const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
    }
    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
  }
  _detectNavbar() {
    return this._element.closest(SELECTOR_NAVBAR) !== null;
  }
  _getOffset() {
    const {
      offset: offset2
    } = this._config;
    if (typeof offset2 === "string") {
      return offset2.split(",").map((value) => Number.parseInt(value, 10));
    }
    if (typeof offset2 === "function") {
      return (popperData) => offset2(popperData, this._element);
    }
    return offset2;
  }
  _getPopperConfig() {
    const defaultBsPopperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }]
    };
    if (this._inNavbar || this._config.display === "static") {
      Manipulator.setDataAttribute(this._menu, "popper", "static");
      defaultBsPopperConfig.modifiers = [{
        name: "applyStyles",
        enabled: false
      }];
    }
    return {
      ...defaultBsPopperConfig,
      ...execute(this._config.popperConfig, [defaultBsPopperConfig])
    };
  }
  _selectMenuItem({
    key,
    target
  }) {
    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
    if (!items.length) {
      return;
    }
    getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Dropdown.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
  static clearMenus(event) {
    if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) {
      return;
    }
    const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
    for (const toggle of openToggles) {
      const context = _Dropdown.getInstance(toggle);
      if (!context || context._config.autoClose === false) {
        continue;
      }
      const composedPath = event.composedPath();
      const isMenuTarget = composedPath.includes(context._menu);
      if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
        continue;
      }
      if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
        continue;
      }
      const relatedTarget = {
        relatedTarget: context._element
      };
      if (event.type === "click") {
        relatedTarget.clickEvent = event;
      }
      context._completeHide(relatedTarget);
    }
  }
  static dataApiKeydownHandler(event) {
    const isInput = /input|textarea/i.test(event.target.tagName);
    const isEscapeEvent = event.key === ESCAPE_KEY$2;
    const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
    if (!isUpOrDownEvent && !isEscapeEvent) {
      return;
    }
    if (isInput && !isEscapeEvent) {
      return;
    }
    event.preventDefault();
    const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
    const instance = _Dropdown.getOrCreateInstance(getToggleButton);
    if (isUpOrDownEvent) {
      event.stopPropagation();
      instance.show();
      instance._selectMenuItem(event);
      return;
    }
    if (instance._isShown()) {
      event.stopPropagation();
      instance.hide();
      getToggleButton.focus();
    }
  }
};
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
  event.preventDefault();
  Dropdown.getOrCreateInstance(this).toggle();
});
defineJQueryPlugin(Dropdown);
var NAME$9 = "backdrop";
var CLASS_NAME_FADE$4 = "fade";
var CLASS_NAME_SHOW$5 = "show";
var EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
var Default$8 = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: false,
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
};
var DefaultType$8 = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
var Backdrop = class extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  }
  // Getters
  static get Default() {
    return Default$8;
  }
  static get DefaultType() {
    return DefaultType$8;
  }
  static get NAME() {
    return NAME$9;
  }
  // Public
  show(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }
    this._append();
    const element = this._getElement();
    if (this._config.isAnimated) {
      reflow(element);
    }
    element.classList.add(CLASS_NAME_SHOW$5);
    this._emulateAnimation(() => {
      execute(callback);
    });
  }
  hide(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }
    this._getElement().classList.remove(CLASS_NAME_SHOW$5);
    this._emulateAnimation(() => {
      this.dispose();
      execute(callback);
    });
  }
  dispose() {
    if (!this._isAppended) {
      return;
    }
    EventHandler.off(this._element, EVENT_MOUSEDOWN);
    this._element.remove();
    this._isAppended = false;
  }
  // Private
  _getElement() {
    if (!this._element) {
      const backdrop = document.createElement("div");
      backdrop.className = this._config.className;
      if (this._config.isAnimated) {
        backdrop.classList.add(CLASS_NAME_FADE$4);
      }
      this._element = backdrop;
    }
    return this._element;
  }
  _configAfterMerge(config) {
    config.rootElement = getElement(config.rootElement);
    return config;
  }
  _append() {
    if (this._isAppended) {
      return;
    }
    const element = this._getElement();
    this._config.rootElement.append(element);
    EventHandler.on(element, EVENT_MOUSEDOWN, () => {
      execute(this._config.clickCallback);
    });
    this._isAppended = true;
  }
  _emulateAnimation(callback) {
    executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
  }
};
var NAME$8 = "focustrap";
var DATA_KEY$5 = "bs.focustrap";
var EVENT_KEY$5 = `.${DATA_KEY$5}`;
var EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
var TAB_KEY = "Tab";
var TAB_NAV_FORWARD = "forward";
var TAB_NAV_BACKWARD = "backward";
var Default$7 = {
  autofocus: true,
  trapElement: null
  // The element to trap focus inside of
};
var DefaultType$7 = {
  autofocus: "boolean",
  trapElement: "element"
};
var FocusTrap = class extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return Default$7;
  }
  static get DefaultType() {
    return DefaultType$7;
  }
  static get NAME() {
    return NAME$8;
  }
  // Public
  activate() {
    if (this._isActive) {
      return;
    }
    if (this._config.autofocus) {
      this._config.trapElement.focus();
    }
    EventHandler.off(document, EVENT_KEY$5);
    EventHandler.on(document, EVENT_FOCUSIN$2, (event) => this._handleFocusin(event));
    EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
    this._isActive = true;
  }
  deactivate() {
    if (!this._isActive) {
      return;
    }
    this._isActive = false;
    EventHandler.off(document, EVENT_KEY$5);
  }
  // Private
  _handleFocusin(event) {
    const {
      trapElement
    } = this._config;
    if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
      return;
    }
    const elements = SelectorEngine.focusableChildren(trapElement);
    if (elements.length === 0) {
      trapElement.focus();
    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
      elements[elements.length - 1].focus();
    } else {
      elements[0].focus();
    }
  }
  _handleKeydown(event) {
    if (event.key !== TAB_KEY) {
      return;
    }
    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
  }
};
var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
var SELECTOR_STICKY_CONTENT = ".sticky-top";
var PROPERTY_PADDING = "padding-right";
var PROPERTY_MARGIN = "margin-right";
var ScrollBarHelper = class {
  constructor() {
    this._element = document.body;
  }
  // Public
  getWidth() {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }
  hide() {
    const width = this.getWidth();
    this._disableOverFlow();
    this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
    this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
    this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow");
    this._resetElementAttributes(this._element, PROPERTY_PADDING);
    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow");
    this._element.style.overflow = "hidden";
  }
  _setElementAttributes(selector, styleProperty, callback) {
    const scrollbarWidth = this.getWidth();
    const manipulationCallBack = (element) => {
      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }
      this._saveInitialAttribute(element, styleProperty);
      const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
      element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
    };
    this._applyManipulationCallback(selector, manipulationCallBack);
  }
  _saveInitialAttribute(element, styleProperty) {
    const actualValue = element.style.getPropertyValue(styleProperty);
    if (actualValue) {
      Manipulator.setDataAttribute(element, styleProperty, actualValue);
    }
  }
  _resetElementAttributes(selector, styleProperty) {
    const manipulationCallBack = (element) => {
      const value = Manipulator.getDataAttribute(element, styleProperty);
      if (value === null) {
        element.style.removeProperty(styleProperty);
        return;
      }
      Manipulator.removeDataAttribute(element, styleProperty);
      element.style.setProperty(styleProperty, value);
    };
    this._applyManipulationCallback(selector, manipulationCallBack);
  }
  _applyManipulationCallback(selector, callBack) {
    if (isElement2(selector)) {
      callBack(selector);
      return;
    }
    for (const sel of SelectorEngine.find(selector, this._element)) {
      callBack(sel);
    }
  }
};
var NAME$7 = "modal";
var DATA_KEY$4 = "bs.modal";
var EVENT_KEY$4 = `.${DATA_KEY$4}`;
var DATA_API_KEY$2 = ".data-api";
var ESCAPE_KEY$1 = "Escape";
var EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
var EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
var EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
var EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
var EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
var EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
var EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
var EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
var EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
var EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
var CLASS_NAME_OPEN = "modal-open";
var CLASS_NAME_FADE$3 = "fade";
var CLASS_NAME_SHOW$4 = "show";
var CLASS_NAME_STATIC = "modal-static";
var OPEN_SELECTOR$1 = ".modal.show";
var SELECTOR_DIALOG = ".modal-dialog";
var SELECTOR_MODAL_BODY = ".modal-body";
var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
var Default$6 = {
  backdrop: true,
  focus: true,
  keyboard: true
};
var DefaultType$6 = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
var Modal = class _Modal extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._isShown = false;
    this._isTransitioning = false;
    this._scrollBar = new ScrollBarHelper();
    this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Default$6;
  }
  static get DefaultType() {
    return DefaultType$6;
  }
  static get NAME() {
    return NAME$7;
  }
  // Public
  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }
  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
      relatedTarget
    });
    if (showEvent.defaultPrevented) {
      return;
    }
    this._isShown = true;
    this._isTransitioning = true;
    this._scrollBar.hide();
    document.body.classList.add(CLASS_NAME_OPEN);
    this._adjustDialog();
    this._backdrop.show(() => this._showElement(relatedTarget));
  }
  hide() {
    if (!this._isShown || this._isTransitioning) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
    if (hideEvent.defaultPrevented) {
      return;
    }
    this._isShown = false;
    this._isTransitioning = true;
    this._focustrap.deactivate();
    this._element.classList.remove(CLASS_NAME_SHOW$4);
    this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
  }
  dispose() {
    EventHandler.off(window, EVENT_KEY$4);
    EventHandler.off(this._dialog, EVENT_KEY$4);
    this._backdrop.dispose();
    this._focustrap.deactivate();
    super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new Backdrop({
      isVisible: Boolean(this._config.backdrop),
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }
  _showElement(relatedTarget) {
    if (!document.body.contains(this._element)) {
      document.body.append(this._element);
    }
    this._element.style.display = "block";
    this._element.removeAttribute("aria-hidden");
    this._element.setAttribute("aria-modal", true);
    this._element.setAttribute("role", "dialog");
    this._element.scrollTop = 0;
    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
    if (modalBody) {
      modalBody.scrollTop = 0;
    }
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_SHOW$4);
    const transitionComplete = () => {
      if (this._config.focus) {
        this._focustrap.activate();
      }
      this._isTransitioning = false;
      EventHandler.trigger(this._element, EVENT_SHOWN$4, {
        relatedTarget
      });
    };
    this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event) => {
      if (event.key !== ESCAPE_KEY$1) {
        return;
      }
      if (this._config.keyboard) {
        this.hide();
        return;
      }
      this._triggerBackdropTransition();
    });
    EventHandler.on(window, EVENT_RESIZE$1, () => {
      if (this._isShown && !this._isTransitioning) {
        this._adjustDialog();
      }
    });
    EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
      EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
        if (this._element !== event.target || this._element !== event2.target) {
          return;
        }
        if (this._config.backdrop === "static") {
          this._triggerBackdropTransition();
          return;
        }
        if (this._config.backdrop) {
          this.hide();
        }
      });
    });
  }
  _hideModal() {
    this._element.style.display = "none";
    this._element.setAttribute("aria-hidden", true);
    this._element.removeAttribute("aria-modal");
    this._element.removeAttribute("role");
    this._isTransitioning = false;
    this._backdrop.hide(() => {
      document.body.classList.remove(CLASS_NAME_OPEN);
      this._resetAdjustments();
      this._scrollBar.reset();
      EventHandler.trigger(this._element, EVENT_HIDDEN$4);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE$3);
  }
  _triggerBackdropTransition() {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
    if (hideEvent.defaultPrevented) {
      return;
    }
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const initialOverflowY = this._element.style.overflowY;
    if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) {
      return;
    }
    if (!isModalOverflowing) {
      this._element.style.overflowY = "hidden";
    }
    this._element.classList.add(CLASS_NAME_STATIC);
    this._queueCallback(() => {
      this._element.classList.remove(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.style.overflowY = initialOverflowY;
      }, this._dialog);
    }, this._dialog);
    this._element.focus();
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const scrollbarWidth = this._scrollBar.getWidth();
    const isBodyOverflowing = scrollbarWidth > 0;
    if (isBodyOverflowing && !isModalOverflowing) {
      const property = isRTL() ? "paddingLeft" : "paddingRight";
      this._element.style[property] = `${scrollbarWidth}px`;
    }
    if (!isBodyOverflowing && isModalOverflowing) {
      const property = isRTL() ? "paddingRight" : "paddingLeft";
      this._element.style[property] = `${scrollbarWidth}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "";
    this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(config, relatedTarget) {
    return this.each(function() {
      const data = _Modal.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](relatedTarget);
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName)) {
    event.preventDefault();
  }
  EventHandler.one(target, EVENT_SHOW$4, (showEvent) => {
    if (showEvent.defaultPrevented) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$4, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
  });
  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
  if (alreadyOpen) {
    Modal.getInstance(alreadyOpen).hide();
  }
  const data = Modal.getOrCreateInstance(target);
  data.toggle(this);
});
enableDismissTrigger(Modal);
defineJQueryPlugin(Modal);
var NAME$6 = "offcanvas";
var DATA_KEY$3 = "bs.offcanvas";
var EVENT_KEY$3 = `.${DATA_KEY$3}`;
var DATA_API_KEY$1 = ".data-api";
var EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
var ESCAPE_KEY = "Escape";
var CLASS_NAME_SHOW$3 = "show";
var CLASS_NAME_SHOWING$1 = "showing";
var CLASS_NAME_HIDING = "hiding";
var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
var OPEN_SELECTOR = ".offcanvas.show";
var EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
var EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
var EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
var EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
var EVENT_RESIZE = `resize${EVENT_KEY$3}`;
var EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
var Default$5 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
var DefaultType$5 = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
var Offcanvas = class _Offcanvas extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isShown = false;
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Default$5;
  }
  static get DefaultType() {
    return DefaultType$5;
  }
  static get NAME() {
    return NAME$6;
  }
  // Public
  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }
  show(relatedTarget) {
    if (this._isShown) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
      relatedTarget
    });
    if (showEvent.defaultPrevented) {
      return;
    }
    this._isShown = true;
    this._backdrop.show();
    if (!this._config.scroll) {
      new ScrollBarHelper().hide();
    }
    this._element.setAttribute("aria-modal", true);
    this._element.setAttribute("role", "dialog");
    this._element.classList.add(CLASS_NAME_SHOWING$1);
    const completeCallBack = () => {
      if (!this._config.scroll || this._config.backdrop) {
        this._focustrap.activate();
      }
      this._element.classList.add(CLASS_NAME_SHOW$3);
      this._element.classList.remove(CLASS_NAME_SHOWING$1);
      EventHandler.trigger(this._element, EVENT_SHOWN$3, {
        relatedTarget
      });
    };
    this._queueCallback(completeCallBack, this._element, true);
  }
  hide() {
    if (!this._isShown) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
    if (hideEvent.defaultPrevented) {
      return;
    }
    this._focustrap.deactivate();
    this._element.blur();
    this._isShown = false;
    this._element.classList.add(CLASS_NAME_HIDING);
    this._backdrop.hide();
    const completeCallback = () => {
      this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
      this._element.removeAttribute("aria-modal");
      this._element.removeAttribute("role");
      if (!this._config.scroll) {
        new ScrollBarHelper().reset();
      }
      EventHandler.trigger(this._element, EVENT_HIDDEN$3);
    };
    this._queueCallback(completeCallback, this._element, true);
  }
  dispose() {
    this._backdrop.dispose();
    this._focustrap.deactivate();
    super.dispose();
  }
  // Private
  _initializeBackDrop() {
    const clickCallback = () => {
      if (this._config.backdrop === "static") {
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        return;
      }
      this.hide();
    };
    const isVisible2 = Boolean(this._config.backdrop);
    return new Backdrop({
      className: CLASS_NAME_BACKDROP,
      isVisible: isVisible2,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: isVisible2 ? clickCallback : null
    });
  }
  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
      if (event.key !== ESCAPE_KEY) {
        return;
      }
      if (this._config.keyboard) {
        this.hide();
        return;
      }
      EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
    });
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Offcanvas.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](this);
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  EventHandler.one(target, EVENT_HIDDEN$3, () => {
    if (isVisible(this)) {
      this.focus();
    }
  });
  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
  if (alreadyOpen && alreadyOpen !== target) {
    Offcanvas.getInstance(alreadyOpen).hide();
  }
  const data = Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
  for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
    Offcanvas.getOrCreateInstance(selector).show();
  }
});
EventHandler.on(window, EVENT_RESIZE, () => {
  for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]")) {
    if (getComputedStyle(element).position !== "fixed") {
      Offcanvas.getOrCreateInstance(element).hide();
    }
  }
});
enableDismissTrigger(Offcanvas);
defineJQueryPlugin(Offcanvas);
var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
var DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  dd: [],
  div: [],
  dl: [],
  dt: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
var uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
var allowedAttribute = (attribute, allowedAttributeList) => {
  const attributeName = attribute.nodeName.toLowerCase();
  if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
    }
    return true;
  }
  return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }
  if (sanitizeFunction && typeof sanitizeFunction === "function") {
    return sanitizeFunction(unsafeHtml);
  }
  const domParser = new window.DOMParser();
  const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
  const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
  for (const element of elements) {
    const elementName = element.nodeName.toLowerCase();
    if (!Object.keys(allowList).includes(elementName)) {
      element.remove();
      continue;
    }
    const attributeList = [].concat(...element.attributes);
    const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
    for (const attribute of attributeList) {
      if (!allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName);
      }
    }
  }
  return createdDocument.body.innerHTML;
}
var NAME$5 = "TemplateFactory";
var Default$4 = {
  allowList: DefaultAllowlist,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: false,
  sanitize: true,
  sanitizeFn: null,
  template: "<div></div>"
};
var DefaultType$4 = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
};
var DefaultContentType = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
var TemplateFactory = class extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
  }
  // Getters
  static get Default() {
    return Default$4;
  }
  static get DefaultType() {
    return DefaultType$4;
  }
  static get NAME() {
    return NAME$5;
  }
  // Public
  getContent() {
    return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(content) {
    this._checkContent(content);
    this._config.content = {
      ...this._config.content,
      ...content
    };
    return this;
  }
  toHtml() {
    const templateWrapper = document.createElement("div");
    templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
    for (const [selector, text] of Object.entries(this._config.content)) {
      this._setContent(templateWrapper, text, selector);
    }
    const template = templateWrapper.children[0];
    const extraClass = this._resolvePossibleFunction(this._config.extraClass);
    if (extraClass) {
      template.classList.add(...extraClass.split(" "));
    }
    return template;
  }
  // Private
  _typeCheckConfig(config) {
    super._typeCheckConfig(config);
    this._checkContent(config.content);
  }
  _checkContent(arg) {
    for (const [selector, content] of Object.entries(arg)) {
      super._typeCheckConfig({
        selector,
        entry: content
      }, DefaultContentType);
    }
  }
  _setContent(template, content, selector) {
    const templateElement = SelectorEngine.findOne(selector, template);
    if (!templateElement) {
      return;
    }
    content = this._resolvePossibleFunction(content);
    if (!content) {
      templateElement.remove();
      return;
    }
    if (isElement2(content)) {
      this._putElementInTemplate(getElement(content), templateElement);
      return;
    }
    if (this._config.html) {
      templateElement.innerHTML = this._maybeSanitize(content);
      return;
    }
    templateElement.textContent = content;
  }
  _maybeSanitize(arg) {
    return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
  }
  _resolvePossibleFunction(arg) {
    return execute(arg, [this]);
  }
  _putElementInTemplate(element, templateElement) {
    if (this._config.html) {
      templateElement.innerHTML = "";
      templateElement.append(element);
      return;
    }
    templateElement.textContent = element.textContent;
  }
};
var NAME$4 = "tooltip";
var DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
var CLASS_NAME_FADE$2 = "fade";
var CLASS_NAME_MODAL = "modal";
var CLASS_NAME_SHOW$2 = "show";
var SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
var SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
var EVENT_MODAL_HIDE = "hide.bs.modal";
var TRIGGER_HOVER = "hover";
var TRIGGER_FOCUS = "focus";
var TRIGGER_CLICK = "click";
var TRIGGER_MANUAL = "manual";
var EVENT_HIDE$2 = "hide";
var EVENT_HIDDEN$2 = "hidden";
var EVENT_SHOW$2 = "show";
var EVENT_SHOWN$2 = "shown";
var EVENT_INSERTED = "inserted";
var EVENT_CLICK$1 = "click";
var EVENT_FOCUSIN$1 = "focusin";
var EVENT_FOCUSOUT$1 = "focusout";
var EVENT_MOUSEENTER = "mouseenter";
var EVENT_MOUSELEAVE = "mouseleave";
var AttachmentMap = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: isRTL() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: isRTL() ? "right" : "left"
};
var Default$3 = {
  allowList: DefaultAllowlist,
  animation: true,
  boundary: "clippingParents",
  container: false,
  customClass: "",
  delay: 0,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  html: false,
  offset: [0, 6],
  placement: "top",
  popperConfig: null,
  sanitize: true,
  sanitizeFn: null,
  selector: false,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  title: "",
  trigger: "hover focus"
};
var DefaultType$3 = {
  allowList: "object",
  animation: "boolean",
  boundary: "(string|element)",
  container: "(string|element|boolean)",
  customClass: "(string|function)",
  delay: "(number|object)",
  fallbackPlacements: "array",
  html: "boolean",
  offset: "(array|string|function)",
  placement: "(string|function)",
  popperConfig: "(null|object|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  selector: "(string|boolean)",
  template: "string",
  title: "(string|element|function)",
  trigger: "string"
};
var Tooltip = class _Tooltip extends BaseComponent {
  constructor(element, config) {
    if (typeof lib_exports === "undefined") {
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    }
    super(element, config);
    this._isEnabled = true;
    this._timeout = 0;
    this._isHovered = null;
    this._activeTrigger = {};
    this._popper = null;
    this._templateFactory = null;
    this._newContent = null;
    this.tip = null;
    this._setListeners();
    if (!this._config.selector) {
      this._fixTitle();
    }
  }
  // Getters
  static get Default() {
    return Default$3;
  }
  static get DefaultType() {
    return DefaultType$3;
  }
  static get NAME() {
    return NAME$4;
  }
  // Public
  enable() {
    this._isEnabled = true;
  }
  disable() {
    this._isEnabled = false;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (!this._isEnabled) {
      return;
    }
    this._activeTrigger.click = !this._activeTrigger.click;
    if (this._isShown()) {
      this._leave();
      return;
    }
    this._enter();
  }
  dispose() {
    clearTimeout(this._timeout);
    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    if (this._element.getAttribute("data-bs-original-title")) {
      this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
    }
    this._disposePopper();
    super.dispose();
  }
  show() {
    if (this._element.style.display === "none") {
      throw new Error("Please use show on visible elements");
    }
    if (!(this._isWithContent() && this._isEnabled)) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
    const shadowRoot = findShadowRoot(this._element);
    const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
    if (showEvent.defaultPrevented || !isInTheDom) {
      return;
    }
    this._disposePopper();
    const tip = this._getTipElement();
    this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
    const {
      container
    } = this._config;
    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
      container.append(tip);
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
    }
    this._popper = this._createPopper(tip);
    tip.classList.add(CLASS_NAME_SHOW$2);
    if ("ontouchstart" in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, "mouseover", noop);
      }
    }
    const complete = () => {
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
      if (this._isHovered === false) {
        this._leave();
      }
      this._isHovered = false;
    };
    this._queueCallback(complete, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown()) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
    if (hideEvent.defaultPrevented) {
      return;
    }
    const tip = this._getTipElement();
    tip.classList.remove(CLASS_NAME_SHOW$2);
    if ("ontouchstart" in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, "mouseover", noop);
      }
    }
    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;
    this._isHovered = null;
    const complete = () => {
      if (this._isWithActiveTrigger()) {
        return;
      }
      if (!this._isHovered) {
        this._disposePopper();
      }
      this._element.removeAttribute("aria-describedby");
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
    };
    this._queueCallback(complete, this.tip, this._isAnimated());
  }
  update() {
    if (this._popper) {
      this._popper.update();
    }
  }
  // Protected
  _isWithContent() {
    return Boolean(this._getTitle());
  }
  _getTipElement() {
    if (!this.tip) {
      this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
    }
    return this.tip;
  }
  _createTipElement(content) {
    const tip = this._getTemplateFactory(content).toHtml();
    if (!tip) {
      return null;
    }
    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
    tip.classList.add(`bs-${this.constructor.NAME}-auto`);
    const tipId = getUID(this.constructor.NAME).toString();
    tip.setAttribute("id", tipId);
    if (this._isAnimated()) {
      tip.classList.add(CLASS_NAME_FADE$2);
    }
    return tip;
  }
  setContent(content) {
    this._newContent = content;
    if (this._isShown()) {
      this._disposePopper();
      this.show();
    }
  }
  _getTemplateFactory(content) {
    if (this._templateFactory) {
      this._templateFactory.changeContent(content);
    } else {
      this._templateFactory = new TemplateFactory({
        ...this._config,
        // the `content` var has to be after `this._config`
        // to override config.content in case of popover
        content,
        extraClass: this._resolvePossibleFunction(this._config.customClass)
      });
    }
    return this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [SELECTOR_TOOLTIP_INNER]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
  }
  // Private
  _initializeOnDelegatedTarget(event) {
    return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
  }
  _createPopper(tip) {
    const placement = execute(this._config.placement, [this, tip, this._element]);
    const attachment = AttachmentMap[placement.toUpperCase()];
    return createPopper3(this._element, tip, this._getPopperConfig(attachment));
  }
  _getOffset() {
    const {
      offset: offset2
    } = this._config;
    if (typeof offset2 === "string") {
      return offset2.split(",").map((value) => Number.parseInt(value, 10));
    }
    if (typeof offset2 === "function") {
      return (popperData) => offset2(popperData, this._element);
    }
    return offset2;
  }
  _resolvePossibleFunction(arg) {
    return execute(arg, [this._element]);
  }
  _getPopperConfig(attachment) {
    const defaultBsPopperConfig = {
      placement: attachment,
      modifiers: [{
        name: "flip",
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }, {
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "arrow",
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: "preSetPlacement",
        enabled: true,
        phase: "beforeMain",
        fn: (data) => {
          this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
        }
      }]
    };
    return {
      ...defaultBsPopperConfig,
      ...execute(this._config.popperConfig, [defaultBsPopperConfig])
    };
  }
  _setListeners() {
    const triggers = this._config.trigger.split(" ");
    for (const trigger of triggers) {
      if (trigger === "click") {
        EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event) => {
          const context = this._initializeOnDelegatedTarget(event);
          context.toggle();
        });
      } else if (trigger !== TRIGGER_MANUAL) {
        const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
        const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
        EventHandler.on(this._element, eventIn, this._config.selector, (event) => {
          const context = this._initializeOnDelegatedTarget(event);
          context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
          context._enter();
        });
        EventHandler.on(this._element, eventOut, this._config.selector, (event) => {
          const context = this._initializeOnDelegatedTarget(event);
          context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
          context._leave();
        });
      }
    }
    this._hideModalHandler = () => {
      if (this._element) {
        this.hide();
      }
    };
    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
  }
  _fixTitle() {
    const title = this._element.getAttribute("title");
    if (!title) {
      return;
    }
    if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
      this._element.setAttribute("aria-label", title);
    }
    this._element.setAttribute("data-bs-original-title", title);
    this._element.removeAttribute("title");
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = true;
      return;
    }
    this._isHovered = true;
    this._setTimeout(() => {
      if (this._isHovered) {
        this.show();
      }
    }, this._config.delay.show);
  }
  _leave() {
    if (this._isWithActiveTrigger()) {
      return;
    }
    this._isHovered = false;
    this._setTimeout(() => {
      if (!this._isHovered) {
        this.hide();
      }
    }, this._config.delay.hide);
  }
  _setTimeout(handler, timeout) {
    clearTimeout(this._timeout);
    this._timeout = setTimeout(handler, timeout);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(true);
  }
  _getConfig(config) {
    const dataAttributes = Manipulator.getDataAttributes(this._element);
    for (const dataAttribute of Object.keys(dataAttributes)) {
      if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
        delete dataAttributes[dataAttribute];
      }
    }
    config = {
      ...dataAttributes,
      ...typeof config === "object" && config ? config : {}
    };
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  _configAfterMerge(config) {
    config.container = config.container === false ? document.body : getElement(config.container);
    if (typeof config.delay === "number") {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }
    if (typeof config.title === "number") {
      config.title = config.title.toString();
    }
    if (typeof config.content === "number") {
      config.content = config.content.toString();
    }
    return config;
  }
  _getDelegateConfig() {
    const config = {};
    for (const [key, value] of Object.entries(this._config)) {
      if (this.constructor.Default[key] !== value) {
        config[key] = value;
      }
    }
    config.selector = false;
    config.trigger = "manual";
    return config;
  }
  _disposePopper() {
    if (this._popper) {
      this._popper.destroy();
      this._popper = null;
    }
    if (this.tip) {
      this.tip.remove();
      this.tip = null;
    }
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Tooltip.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
};
defineJQueryPlugin(Tooltip);
var NAME$3 = "popover";
var SELECTOR_TITLE = ".popover-header";
var SELECTOR_CONTENT = ".popover-body";
var Default$2 = {
  ...Tooltip.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
};
var DefaultType$2 = {
  ...Tooltip.DefaultType,
  content: "(null|string|element|function)"
};
var Popover = class _Popover extends Tooltip {
  // Getters
  static get Default() {
    return Default$2;
  }
  static get DefaultType() {
    return DefaultType$2;
  }
  static get NAME() {
    return NAME$3;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [SELECTOR_TITLE]: this._getTitle(),
      [SELECTOR_CONTENT]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Popover.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
};
defineJQueryPlugin(Popover);
var NAME$2 = "scrollspy";
var DATA_KEY$2 = "bs.scrollspy";
var EVENT_KEY$2 = `.${DATA_KEY$2}`;
var DATA_API_KEY = ".data-api";
var EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
var EVENT_CLICK = `click${EVENT_KEY$2}`;
var EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
var CLASS_NAME_ACTIVE$1 = "active";
var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
var SELECTOR_TARGET_LINKS = "[href]";
var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
var SELECTOR_NAV_LINKS = ".nav-link";
var SELECTOR_NAV_ITEMS = ".nav-item";
var SELECTOR_LIST_ITEMS = ".list-group-item";
var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
var SELECTOR_DROPDOWN = ".dropdown";
var SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
var Default$1 = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: false,
  target: null,
  threshold: [0.1, 0.5, 1]
};
var DefaultType$1 = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
var ScrollSpy = class _ScrollSpy extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._targetLinks = /* @__PURE__ */ new Map();
    this._observableSections = /* @__PURE__ */ new Map();
    this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
    this._activeTarget = null;
    this._observer = null;
    this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    };
    this.refresh();
  }
  // Getters
  static get Default() {
    return Default$1;
  }
  static get DefaultType() {
    return DefaultType$1;
  }
  static get NAME() {
    return NAME$2;
  }
  // Public
  refresh() {
    this._initializeTargetsAndObservables();
    this._maybeEnableSmoothScroll();
    if (this._observer) {
      this._observer.disconnect();
    } else {
      this._observer = this._getNewObserver();
    }
    for (const section of this._observableSections.values()) {
      this._observer.observe(section);
    }
  }
  dispose() {
    this._observer.disconnect();
    super.dispose();
  }
  // Private
  _configAfterMerge(config) {
    config.target = getElement(config.target) || document.body;
    config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
    if (typeof config.threshold === "string") {
      config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
    }
    return config;
  }
  _maybeEnableSmoothScroll() {
    if (!this._config.smoothScroll) {
      return;
    }
    EventHandler.off(this._config.target, EVENT_CLICK);
    EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
      const observableSection = this._observableSections.get(event.target.hash);
      if (observableSection) {
        event.preventDefault();
        const root = this._rootElement || window;
        const height = observableSection.offsetTop - this._element.offsetTop;
        if (root.scrollTo) {
          root.scrollTo({
            top: height,
            behavior: "smooth"
          });
          return;
        }
        root.scrollTop = height;
      }
    });
  }
  _getNewObserver() {
    const options = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver((entries) => this._observerCallback(entries), options);
  }
  // The logic of selection
  _observerCallback(entries) {
    const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
    const activate = (entry) => {
      this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
      this._process(targetElement(entry));
    };
    const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
    const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = parentScrollTop;
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        this._activeTarget = null;
        this._clearActiveClass(targetElement(entry));
        continue;
      }
      const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (userScrollsDown && entryIsLowerThanPrevious) {
        activate(entry);
        if (!parentScrollTop) {
          return;
        }
        continue;
      }
      if (!userScrollsDown && !entryIsLowerThanPrevious) {
        activate(entry);
      }
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map();
    this._observableSections = /* @__PURE__ */ new Map();
    const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
    for (const anchor of targetLinks) {
      if (!anchor.hash || isDisabled(anchor)) {
        continue;
      }
      const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
      if (isVisible(observableSection)) {
        this._targetLinks.set(decodeURI(anchor.hash), anchor);
        this._observableSections.set(anchor.hash, observableSection);
      }
    }
  }
  _process(target) {
    if (this._activeTarget === target) {
      return;
    }
    this._clearActiveClass(this._config.target);
    this._activeTarget = target;
    target.classList.add(CLASS_NAME_ACTIVE$1);
    this._activateParents(target);
    EventHandler.trigger(this._element, EVENT_ACTIVATE, {
      relatedTarget: target
    });
  }
  _activateParents(target) {
    if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
      return;
    }
    for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
      for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
        item.classList.add(CLASS_NAME_ACTIVE$1);
      }
    }
  }
  _clearActiveClass(parent) {
    parent.classList.remove(CLASS_NAME_ACTIVE$1);
    const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
    for (const node of activeNodes) {
      node.classList.remove(CLASS_NAME_ACTIVE$1);
    }
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _ScrollSpy.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
};
EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
  for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
    ScrollSpy.getOrCreateInstance(spy);
  }
});
defineJQueryPlugin(ScrollSpy);
var NAME$1 = "tab";
var DATA_KEY$1 = "bs.tab";
var EVENT_KEY$1 = `.${DATA_KEY$1}`;
var EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
var EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
var EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
var EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
var EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
var EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
var EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
var ARROW_LEFT_KEY = "ArrowLeft";
var ARROW_RIGHT_KEY = "ArrowRight";
var ARROW_UP_KEY = "ArrowUp";
var ARROW_DOWN_KEY = "ArrowDown";
var HOME_KEY = "Home";
var END_KEY = "End";
var CLASS_NAME_ACTIVE = "active";
var CLASS_NAME_FADE$1 = "fade";
var CLASS_NAME_SHOW$1 = "show";
var CLASS_DROPDOWN = "dropdown";
var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
var NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
var SELECTOR_OUTER = ".nav-item, .list-group-item";
var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
var Tab = class _Tab extends BaseComponent {
  constructor(element) {
    super(element);
    this._parent = this._element.closest(SELECTOR_TAB_PANEL);
    if (!this._parent) {
      return;
    }
    this._setInitialAttributes(this._parent, this._getChildren());
    EventHandler.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
  }
  // Getters
  static get NAME() {
    return NAME$1;
  }
  // Public
  show() {
    const innerElem = this._element;
    if (this._elemIsActive(innerElem)) {
      return;
    }
    const active = this._getActiveElem();
    const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
      relatedTarget: innerElem
    }) : null;
    const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
      relatedTarget: active
    });
    if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
      return;
    }
    this._deactivate(active, innerElem);
    this._activate(innerElem, active);
  }
  // Private
  _activate(element, relatedElem) {
    if (!element) {
      return;
    }
    element.classList.add(CLASS_NAME_ACTIVE);
    this._activate(SelectorEngine.getElementFromSelector(element));
    const complete = () => {
      if (element.getAttribute("role") !== "tab") {
        element.classList.add(CLASS_NAME_SHOW$1);
        return;
      }
      element.removeAttribute("tabindex");
      element.setAttribute("aria-selected", true);
      this._toggleDropDown(element, true);
      EventHandler.trigger(element, EVENT_SHOWN$1, {
        relatedTarget: relatedElem
      });
    };
    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }
  _deactivate(element, relatedElem) {
    if (!element) {
      return;
    }
    element.classList.remove(CLASS_NAME_ACTIVE);
    element.blur();
    this._deactivate(SelectorEngine.getElementFromSelector(element));
    const complete = () => {
      if (element.getAttribute("role") !== "tab") {
        element.classList.remove(CLASS_NAME_SHOW$1);
        return;
      }
      element.setAttribute("aria-selected", false);
      element.setAttribute("tabindex", "-1");
      this._toggleDropDown(element, false);
      EventHandler.trigger(element, EVENT_HIDDEN$1, {
        relatedTarget: relatedElem
      });
    };
    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }
  _keydown(event) {
    if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    const children = this._getChildren().filter((element) => !isDisabled(element));
    let nextActiveElement;
    if ([HOME_KEY, END_KEY].includes(event.key)) {
      nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
    } else {
      const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
      nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
    }
    if (nextActiveElement) {
      nextActiveElement.focus({
        preventScroll: true
      });
      _Tab.getOrCreateInstance(nextActiveElement).show();
    }
  }
  _getChildren() {
    return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((child) => this._elemIsActive(child)) || null;
  }
  _setInitialAttributes(parent, children) {
    this._setAttributeIfNotExists(parent, "role", "tablist");
    for (const child of children) {
      this._setInitialAttributesOnChild(child);
    }
  }
  _setInitialAttributesOnChild(child) {
    child = this._getInnerElement(child);
    const isActive = this._elemIsActive(child);
    const outerElem = this._getOuterElement(child);
    child.setAttribute("aria-selected", isActive);
    if (outerElem !== child) {
      this._setAttributeIfNotExists(outerElem, "role", "presentation");
    }
    if (!isActive) {
      child.setAttribute("tabindex", "-1");
    }
    this._setAttributeIfNotExists(child, "role", "tab");
    this._setInitialAttributesOnTargetPanel(child);
  }
  _setInitialAttributesOnTargetPanel(child) {
    const target = SelectorEngine.getElementFromSelector(child);
    if (!target) {
      return;
    }
    this._setAttributeIfNotExists(target, "role", "tabpanel");
    if (child.id) {
      this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
    }
  }
  _toggleDropDown(element, open) {
    const outerElem = this._getOuterElement(element);
    if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
      return;
    }
    const toggle = (selector, className) => {
      const element2 = SelectorEngine.findOne(selector, outerElem);
      if (element2) {
        element2.classList.toggle(className, open);
      }
    };
    toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
    toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
    outerElem.setAttribute("aria-expanded", open);
  }
  _setAttributeIfNotExists(element, attribute, value) {
    if (!element.hasAttribute(attribute)) {
      element.setAttribute(attribute, value);
    }
  }
  _elemIsActive(elem) {
    return elem.classList.contains(CLASS_NAME_ACTIVE);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(elem) {
    return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(elem) {
    return elem.closest(SELECTOR_OUTER) || elem;
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Tab.getOrCreateInstance(this);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
  if (["A", "AREA"].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  Tab.getOrCreateInstance(this).show();
});
EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
    Tab.getOrCreateInstance(element);
  }
});
defineJQueryPlugin(Tab);
var NAME = "toast";
var DATA_KEY = "bs.toast";
var EVENT_KEY = `.${DATA_KEY}`;
var EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
var EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
var EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
var EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
var EVENT_HIDE = `hide${EVENT_KEY}`;
var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
var EVENT_SHOW = `show${EVENT_KEY}`;
var EVENT_SHOWN = `shown${EVENT_KEY}`;
var CLASS_NAME_FADE = "fade";
var CLASS_NAME_HIDE = "hide";
var CLASS_NAME_SHOW = "show";
var CLASS_NAME_SHOWING = "showing";
var DefaultType = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
};
var Default = {
  animation: true,
  autohide: true,
  delay: 5e3
};
var Toast = class _Toast extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._timeout = null;
    this._hasMouseInteraction = false;
    this._hasKeyboardInteraction = false;
    this._setListeners();
  }
  // Getters
  static get Default() {
    return Default;
  }
  static get DefaultType() {
    return DefaultType;
  }
  static get NAME() {
    return NAME;
  }
  // Public
  show() {
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
    if (showEvent.defaultPrevented) {
      return;
    }
    this._clearTimeout();
    if (this._config.animation) {
      this._element.classList.add(CLASS_NAME_FADE);
    }
    const complete = () => {
      this._element.classList.remove(CLASS_NAME_SHOWING);
      EventHandler.trigger(this._element, EVENT_SHOWN);
      this._maybeScheduleHide();
    };
    this._element.classList.remove(CLASS_NAME_HIDE);
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
    this._queueCallback(complete, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown()) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
    if (hideEvent.defaultPrevented) {
      return;
    }
    const complete = () => {
      this._element.classList.add(CLASS_NAME_HIDE);
      this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
      EventHandler.trigger(this._element, EVENT_HIDDEN);
    };
    this._element.classList.add(CLASS_NAME_SHOWING);
    this._queueCallback(complete, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout();
    if (this.isShown()) {
      this._element.classList.remove(CLASS_NAME_SHOW);
    }
    super.dispose();
  }
  isShown() {
    return this._element.classList.contains(CLASS_NAME_SHOW);
  }
  // Private
  _maybeScheduleHide() {
    if (!this._config.autohide) {
      return;
    }
    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
      return;
    }
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _onInteraction(event, isInteracting) {
    switch (event.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = isInteracting;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = isInteracting;
        break;
      }
    }
    if (isInteracting) {
      this._clearTimeout();
      return;
    }
    const nextElement = event.relatedTarget;
    if (this._element === nextElement || this._element.contains(nextElement)) {
      return;
    }
    this._maybeScheduleHide();
  }
  _setListeners() {
    EventHandler.on(this._element, EVENT_MOUSEOVER, (event) => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_MOUSEOUT, (event) => this._onInteraction(event, false));
    EventHandler.on(this._element, EVENT_FOCUSIN, (event) => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_FOCUSOUT, (event) => this._onInteraction(event, false));
  }
  _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Toast.getOrCreateInstance(this, config);
      if (typeof config === "string") {
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      }
    });
  }
};
enableDismissTrigger(Toast);
defineJQueryPlugin(Toast);

// app/javascript/datatables.js
var import_jquery4 = __toESM(require_jquery());
var import_datatables5 = __toESM(require_dataTables());

// node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs
var import_jquery = __toESM(require_jquery(), 1);
var import_datatables = __toESM(require_dataTables(), 1);
var $2 = import_jquery.default;
$2.extend(true, import_datatables.default.defaults, {
  renderer: "bootstrap"
});
$2.extend(true, import_datatables.default.ext.classes, {
  container: "dt-container dt-bootstrap4",
  search: {
    input: "form-control form-control-sm"
  },
  length: {
    select: "custom-select custom-select-sm form-control form-control-sm"
  },
  processing: {
    container: "dt-processing card"
  },
  layout: {
    row: "row justify-content-between",
    cell: "d-md-flex justify-content-between align-items-center",
    tableCell: "col-12",
    start: "dt-layout-start col-md-auto mr-auto",
    end: "dt-layout-end col-md-auto ml-auto",
    full: "dt-layout-full col-md"
  }
});
import_datatables.default.ext.renderer.pagingButton.bootstrap = function(settings, buttonType, content, active, disabled) {
  var btnClasses = ["dt-paging-button", "page-item"];
  if (active) {
    btnClasses.push("active");
  }
  if (disabled) {
    btnClasses.push("disabled");
  }
  var li = $2("<li>").addClass(btnClasses.join(" "));
  var a = $2("<a>", {
    "href": disabled ? null : "#",
    "class": "page-link"
  }).html(content).appendTo(li);
  return {
    display: li,
    clicker: a
  };
};
import_datatables.default.ext.renderer.pagingContainer.bootstrap = function(settings, buttonEls) {
  return $2("<ul/>").addClass("pagination").append(buttonEls);
};
var dataTables_bootstrap4_default = import_datatables.default;

// node_modules/datatables.net-select/js/dataTables.select.mjs
var import_jquery2 = __toESM(require_jquery(), 1);
var import_datatables2 = __toESM(require_dataTables(), 1);
var $3 = import_jquery2.default;
import_datatables2.default.select = {};
import_datatables2.default.select.classes = {
  checkbox: "dt-select-checkbox"
};
import_datatables2.default.select.version = "3.0.0";
import_datatables2.default.select.init = function(dt) {
  var ctx = dt.settings()[0];
  if (!import_datatables2.default.versionCheck("2")) {
    throw "Warning: Select requires DataTables 2 or newer";
  }
  if (ctx._select) {
    return;
  }
  var savedSelected = dt.state.loaded();
  var selectAndSave = function(e, settings, data) {
    if (data === null || data.select === void 0) {
      return;
    }
    if (dt.rows({ selected: true }).any()) {
      dt.rows().deselect();
    }
    if (data.select.rows !== void 0) {
      dt.rows(data.select.rows).select();
    }
    if (dt.columns({ selected: true }).any()) {
      dt.columns().deselect();
    }
    if (data.select.columns !== void 0) {
      dt.columns(data.select.columns).select();
    }
    if (dt.cells({ selected: true }).any()) {
      dt.cells().deselect();
    }
    if (data.select.cells !== void 0) {
      for (var i = 0; i < data.select.cells.length; i++) {
        dt.cell(data.select.cells[i].row, data.select.cells[i].column).select();
      }
    }
    dt.state.save();
  };
  dt.on("stateSaveParams", function(e, settings, data) {
    data.select = {};
    data.select.rows = dt.rows({ selected: true }).ids(true).toArray();
    data.select.columns = dt.columns({ selected: true })[0];
    data.select.cells = dt.cells({ selected: true })[0].map(function(coords) {
      return { row: dt.row(coords.row).id(true), column: coords.column };
    });
  }).on("stateLoadParams", selectAndSave).one("init", function() {
    selectAndSave(void 0, void 0, savedSelected);
  });
  var init2 = ctx.oInit.select;
  var defaults = import_datatables2.default.defaults.select;
  var opts = init2 === void 0 ? defaults : init2;
  var items = "row";
  var style = "api";
  var blurable = false;
  var toggleable = true;
  var selectable = null;
  var info2 = true;
  var selector = "td, th";
  var className = "selected";
  var headerCheckbox = true;
  var setStyle = false;
  var keys = false;
  ctx._select = {
    infoEls: []
  };
  if (opts === true) {
    style = "os";
    setStyle = true;
  } else if (typeof opts === "string") {
    style = opts;
    setStyle = true;
  } else if ($3.isPlainObject(opts)) {
    if (opts.blurable !== void 0) {
      blurable = opts.blurable;
    }
    if (opts.toggleable !== void 0) {
      toggleable = opts.toggleable;
    }
    if (opts.info !== void 0) {
      info2 = opts.info;
    }
    if (opts.items !== void 0) {
      items = opts.items;
    }
    if (opts.style !== void 0) {
      style = opts.style;
      setStyle = true;
    } else {
      style = "os";
      setStyle = true;
    }
    if (opts.selector !== void 0) {
      selector = opts.selector;
    }
    if (opts.className !== void 0) {
      className = opts.className;
    }
    if (opts.headerCheckbox !== void 0) {
      headerCheckbox = opts.headerCheckbox;
    }
    if (opts.selectable !== void 0) {
      selectable = opts.selectable;
    }
    if (opts.keys !== void 0) {
      keys = opts.keys;
    }
  }
  dt.select.selector(selector);
  dt.select.items(items);
  dt.select.style(style);
  dt.select.blurable(blurable);
  dt.select.toggleable(toggleable);
  dt.select.info(info2);
  dt.select.keys(keys);
  dt.select.selectable(selectable);
  ctx._select.className = className;
  if (!setStyle && $3(dt.table().node()).hasClass("selectable")) {
    dt.select.style("os");
  }
  if (headerCheckbox || headerCheckbox === "select-page" || headerCheckbox === "select-all") {
    dt.ready(function() {
      initCheckboxHeader(dt, headerCheckbox);
    });
  }
};
function cellRange(dt, idx, last) {
  var indexes;
  var columnIndexes;
  var rowIndexes;
  var selectColumns = function(start2, end2) {
    if (start2 > end2) {
      var tmp = end2;
      end2 = start2;
      start2 = tmp;
    }
    var record = false;
    return dt.columns(":visible").indexes().filter(function(i) {
      if (i === start2) {
        record = true;
      }
      if (i === end2) {
        record = false;
        return true;
      }
      return record;
    });
  };
  var selectRows = function(start2, end2) {
    var indexes2 = dt.rows({ search: "applied" }).indexes();
    if (indexes2.indexOf(start2) > indexes2.indexOf(end2)) {
      var tmp = end2;
      end2 = start2;
      start2 = tmp;
    }
    var record = false;
    return indexes2.filter(function(i) {
      if (i === start2) {
        record = true;
      }
      if (i === end2) {
        record = false;
        return true;
      }
      return record;
    });
  };
  if (!dt.cells({ selected: true }).any() && !last) {
    columnIndexes = selectColumns(0, idx.column);
    rowIndexes = selectRows(0, idx.row);
  } else {
    columnIndexes = selectColumns(last.column, idx.column);
    rowIndexes = selectRows(last.row, idx.row);
  }
  indexes = dt.cells(rowIndexes, columnIndexes).flatten();
  if (!dt.cells(idx, { selected: true }).any()) {
    dt.cells(indexes).select();
  } else {
    dt.cells(indexes).deselect();
  }
}
function checkboxClass(selector) {
  var name = import_datatables2.default.select.classes.checkbox;
  return selector ? name.replace(/ /g, ".") : name;
}
function disableMouseSelection(dt) {
  var ctx = dt.settings()[0];
  var selector = ctx._select.selector;
  $3(dt.table().container()).off("mousedown.dtSelect", selector).off("mouseup.dtSelect", selector).off("click.dtSelect", selector);
  $3("body").off("click.dtSelect" + _safeId(dt.table().node()));
}
function enableMouseSelection(dt) {
  var container = $3(dt.table().container());
  var ctx = dt.settings()[0];
  var selector = ctx._select.selector;
  var matchSelection;
  container.on("mousedown.dtSelect", selector, function(e) {
    if (e.shiftKey || e.metaKey || e.ctrlKey) {
      container.css("-moz-user-select", "none").one("selectstart.dtSelect", selector, function() {
        return false;
      });
    }
    if (window.getSelection) {
      matchSelection = window.getSelection();
    }
  }).on("mouseup.dtSelect", selector, function() {
    container.css("-moz-user-select", "");
  }).on("click.dtSelect", selector, function(e) {
    var items = dt.select.items();
    var idx;
    if (matchSelection) {
      var selection = window.getSelection();
      if (!selection.anchorNode || $3(selection.anchorNode).closest("table")[0] === dt.table().node()) {
        if (selection !== matchSelection) {
          return;
        }
      }
    }
    var ctx2 = dt.settings()[0];
    var container2 = dt.table().container();
    if ($3(e.target).closest("div.dt-container")[0] != container2) {
      return;
    }
    var cell = dt.cell($3(e.target).closest("td, th"));
    if (!cell.any()) {
      return;
    }
    var event = $3.Event("user-select.dt");
    eventTrigger(dt, event, [items, cell, e]);
    if (event.isDefaultPrevented()) {
      return;
    }
    var cellIndex = cell.index();
    if (items === "row") {
      idx = cellIndex.row;
      typeSelect(e, dt, ctx2, "row", idx);
    } else if (items === "column") {
      idx = cell.index().column;
      typeSelect(e, dt, ctx2, "column", idx);
    } else if (items === "cell") {
      idx = cell.index();
      typeSelect(e, dt, ctx2, "cell", idx);
    }
    ctx2._select_lastCell = cellIndex;
  });
  $3("body").on("click.dtSelect" + _safeId(dt.table().node()), function(e) {
    if (ctx._select.blurable) {
      if ($3(e.target).parents().filter(dt.table().container()).length) {
        return;
      }
      if ($3(e.target).parents("html").length === 0) {
        return;
      }
      if ($3(e.target).parents("div.DTE").length) {
        return;
      }
      var event = $3.Event("select-blur.dt");
      eventTrigger(dt, event, [e.target, e]);
      if (event.isDefaultPrevented()) {
        return;
      }
      clear(ctx, true);
    }
  });
}
function eventTrigger(api, type, args, any) {
  if (any && !api.flatten().length) {
    return;
  }
  if (typeof type === "string") {
    type = type + ".dt";
  }
  args.unshift(api);
  $3(api.table().node()).trigger(type, args);
}
function isCheckboxColumn(col) {
  return col.mRender && col.mRender._name === "selectCheckbox";
}
function info(api, node) {
  if (api.select.style() === "api" || api.select.info() === false) {
    return;
  }
  var ctx = api.settings()[0];
  var rowSetLength = ctx._select_set.length;
  var rows = rowSetLength ? rowSetLength : api.rows({ selected: true }).count();
  var columns = api.columns({ selected: true }).count();
  var cells = api.cells({ selected: true }).count();
  if (ctx._select_mode === "subtractive") {
    rows = api.page.info().recordsDisplay - rowSetLength;
  }
  var add = function(el2, name, num) {
    el2.append(
      $3('<span class="select-item"/>').append(
        api.i18n(
          "select." + name + "s",
          { _: "%d " + name + "s selected", 0: "", 1: "1 " + name + " selected" },
          num
        )
      )
    );
  };
  var el = $3(node);
  var output = $3('<span class="select-info"/>');
  add(output, "row", rows);
  add(output, "column", columns);
  add(output, "cell", cells);
  var existing = el.children("span.select-info");
  if (existing.length) {
    existing.remove();
  }
  if (output.text() !== "") {
    el.append(output);
  }
}
function initCheckboxHeader(dt, headerCheckbox) {
  var dtSettings = dt.settings()[0];
  var dtInternalColumns = dtSettings.aoColumns;
  dt.columns().iterator("column", function(s, idx) {
    var col = dtInternalColumns[idx];
    if (!isCheckboxColumn(col)) {
      return;
    }
    var header = dt.column(idx).header();
    if (!$3("input", header).length) {
      var input = $3("<input>").attr({
        class: checkboxClass(true),
        type: "checkbox",
        "aria-label": dt.i18n("select.aria.headerCheckbox") || "Select all rows"
      }).appendTo(header).on("change", function() {
        if (this.checked) {
          if (headerCheckbox == "select-page") {
            dt.rows({ page: "current" }).select();
          } else {
            dt.rows({ search: "applied" }).select();
          }
        } else {
          if (headerCheckbox == "select-page") {
            dt.rows({ page: "current", selected: true }).deselect();
          } else {
            dt.rows({ selected: true }).deselect();
          }
        }
      }).on("click", function(e) {
        e.stopPropagation();
      });
      dt.on("draw select deselect", function(e, pass, type) {
        if (type === "row" || !type) {
          var nums = headerCheckboxState(dt, headerCheckbox);
          if (nums.search && nums.search <= nums.count && nums.search === nums.available) {
            input.prop("checked", true).prop("indeterminate", false);
          } else if (nums.search === 0 && nums.count === 0) {
            input.prop("checked", false).prop("indeterminate", false);
          } else {
            input.prop("checked", false).prop("indeterminate", true);
          }
        }
      });
    }
  });
}
function keysSet(dt) {
  var ctx = dt.settings()[0];
  var flag = ctx._select.keys;
  var namespace = "dts-keys-" + ctx.sTableId;
  if (flag) {
    $3(dt.rows({ page: "current" }).nodes()).attr("tabindex", 0);
    dt.on("draw." + namespace, function() {
      $3(dt.rows({ page: "current" }).nodes()).attr("tabindex", 0);
    });
    $3(document).on("keydown." + namespace, function(e) {
      var key = e.keyCode;
      var active = document.activeElement;
      if (![9, 13, 32, 38, 40].includes(key)) {
        return;
      }
      var nodes = dt.rows({ page: "current" }).nodes().toArray();
      var idx = nodes.indexOf(active);
      var preventDefault = true;
      if (idx === -1) {
        return;
      }
      if (key === 9) {
        if (e.shift === false && idx === nodes.length - 1) {
          keysPageDown(dt);
        } else if (e.shift === true && idx === 0) {
          keysPageUp(dt);
        } else {
          preventDefault = false;
        }
      } else if (key === 13 || key === 32) {
        var row = dt.row(active);
        if (row.selected()) {
          row.deselect();
        } else {
          row.select();
        }
      } else if (key === 38) {
        if (idx > 0) {
          nodes[idx - 1].focus();
        } else {
          keysPageUp(dt);
        }
      } else {
        if (idx < nodes.length - 1) {
          nodes[idx + 1].focus();
        } else {
          keysPageDown(dt);
        }
      }
      if (preventDefault) {
        e.stopPropagation();
        e.preventDefault();
      }
    });
  } else {
    $3(dt.rows().nodes()).removeAttr("tabindex");
    dt.off("draw." + namespace);
    $3(document).off("keydown." + namespace);
  }
}
function keysPageDown(dt) {
  var info2 = dt.page.info();
  if (info2.page < info2.pages - 1) {
    dt.one("draw", function() {
      dt.row(":first-child").node().focus();
    }).page("next").draw(false);
  }
}
function keysPageUp(dt) {
  var info2 = dt.page.info();
  if (info2.page > 0) {
    dt.one("draw", function() {
      dt.row(":last-child").node().focus();
    }).page("previous").draw(false);
  }
}
function headerCheckboxState(dt, headerCheckbox) {
  var ctx = dt.settings()[0];
  var selectable = ctx._select.selectable;
  var available = 0;
  var count = headerCheckbox == "select-page" ? dt.rows({ page: "current", selected: true }).count() : dt.rows({ selected: true }).count();
  var search = headerCheckbox == "select-page" ? dt.rows({ page: "current", selected: true }).count() : dt.rows({ search: "applied", selected: true }).count();
  if (!selectable) {
    available = headerCheckbox == "select-page" ? dt.rows({ page: "current" }).count() : dt.rows({ search: "applied" }).count();
  } else {
    var indexes = headerCheckbox == "select-page" ? dt.rows({ page: "current" }).indexes() : dt.rows({ search: "applied" }).indexes();
    for (var i = 0; i < indexes.length; i++) {
      var rowInternal = ctx.aoData[indexes[i]];
      var result = selectable(rowInternal._aData, rowInternal.nTr, indexes[i]);
      if (result) {
        available++;
      }
    }
  }
  return {
    available,
    count,
    search
  };
}
function init(ctx) {
  var api = new import_datatables2.default.Api(ctx);
  ctx._select_init = true;
  ctx._select_mode = "additive";
  ctx._select_set = [];
  ctx.aoRowCreatedCallback.push(
    function(row, data, index) {
      var i, ien;
      var d = ctx.aoData[index];
      var id = api.row(index).id();
      if (d._select_selected || ctx._select_mode === "additive" && ctx._select_set.includes(id) || ctx._select_mode === "subtractive" && !ctx._select_set.includes(id)) {
        d._select_selected = true;
        $3(row).addClass(ctx._select.className).find("input." + checkboxClass(true)).prop("checked", true);
      }
      for (i = 0, ien = ctx.aoColumns.length; i < ien; i++) {
        if (ctx.aoColumns[i]._select_selected || d._selected_cells && d._selected_cells[i]) {
          $3(d.anCells[i]).addClass(ctx._select.className);
        }
      }
    }
  );
  _cumulativeEvents(api);
  api.on("info.dt", function(e, ctx2, node) {
    if (!ctx2._select.infoEls.includes(node)) {
      ctx2._select.infoEls.push(node);
    }
    info(api, node);
  });
  api.on("select.dtSelect.dt deselect.dtSelect.dt", function() {
    ctx._select.infoEls.forEach(function(el) {
      info(api, el);
    });
    api.state.save();
  });
  api.on("destroy.dtSelect", function() {
    $3(api.rows({ selected: true }).nodes()).removeClass(api.settings()[0]._select.className);
    $3("input." + checkboxClass(true), api.table().header()).remove();
    disableMouseSelection(api);
    api.off(".dtSelect");
    $3("body").off(".dtSelect" + _safeId(api.table().node()));
  });
}
function rowColumnRange(dt, type, idx, last) {
  var indexes = dt[type + "s"]({ search: "applied" }).indexes();
  var idx1 = indexes.indexOf(last);
  var idx2 = indexes.indexOf(idx);
  if (!dt[type + "s"]({ selected: true }).any() && idx1 === -1) {
    indexes.splice(indexes.indexOf(idx) + 1, indexes.length);
  } else {
    if (idx1 > idx2) {
      var tmp = idx2;
      idx2 = idx1;
      idx1 = tmp;
    }
    indexes.splice(idx2 + 1, indexes.length);
    indexes.splice(0, idx1);
  }
  if (!dt[type](idx, { selected: true }).any()) {
    dt[type + "s"](indexes).select();
  } else {
    indexes.splice(indexes.indexOf(idx), 1);
    dt[type + "s"](indexes).deselect();
  }
}
function clear(ctx, force) {
  if (force || ctx._select.style === "single") {
    var api = new import_datatables2.default.Api(ctx);
    api.rows({ selected: true }).deselect();
    api.columns({ selected: true }).deselect();
    api.cells({ selected: true }).deselect();
  }
}
function typeSelect(e, dt, ctx, type, idx) {
  var style = dt.select.style();
  var toggleable = dt.select.toggleable();
  var isSelected = dt[type](idx, { selected: true }).any();
  if (isSelected && !toggleable) {
    return;
  }
  if (style === "os") {
    if (e.ctrlKey || e.metaKey) {
      dt[type](idx).select(!isSelected);
    } else if (e.shiftKey) {
      if (type === "cell") {
        cellRange(dt, idx, ctx._select_lastCell || null);
      } else {
        rowColumnRange(
          dt,
          type,
          idx,
          ctx._select_lastCell ? ctx._select_lastCell[type] : null
        );
      }
    } else {
      var selected = dt[type + "s"]({ selected: true });
      if (isSelected && selected.flatten().length === 1) {
        dt[type](idx).deselect();
      } else {
        selected.deselect();
        dt[type](idx).select();
      }
    }
  } else if (style == "multi+shift") {
    if (e.shiftKey) {
      if (type === "cell") {
        cellRange(dt, idx, ctx._select_lastCell || null);
      } else {
        rowColumnRange(
          dt,
          type,
          idx,
          ctx._select_lastCell ? ctx._select_lastCell[type] : null
        );
      }
    } else {
      dt[type](idx).select(!isSelected);
    }
  } else {
    dt[type](idx).select(!isSelected);
  }
}
function _safeId(node) {
  return node.id.replace(/[^a-zA-Z0-9\-\_]/g, "-");
}
function _cumulativeEvents(api) {
  api.on("select", function(e, dt, type, indexes) {
    if (type !== "row") {
      return;
    }
    var ctx = api.settings()[0];
    if (ctx._select_mode === "additive") {
      _add(api, ctx._select_set, indexes);
    } else {
      _remove(api, ctx._select_set, indexes);
    }
  });
  api.on("deselect", function(e, dt, type, indexes) {
    if (type !== "row") {
      return;
    }
    var ctx = api.settings()[0];
    if (ctx._select_mode === "additive") {
      _remove(api, ctx._select_set, indexes);
    } else {
      _add(api, ctx._select_set, indexes);
    }
  });
}
function _add(api, arr, indexes) {
  for (var i = 0; i < indexes.length; i++) {
    var id = api.row(indexes[i]).id();
    if (id && id !== "undefined" && !arr.includes(id)) {
      arr.push(id);
    }
  }
}
function _remove(api, arr, indexes) {
  for (var i = 0; i < indexes.length; i++) {
    var id = api.row(indexes[i]).id();
    var idx = arr.indexOf(id);
    if (idx !== -1) {
      arr.splice(idx, 1);
    }
  }
}
$3.each(
  [
    { type: "row", prop: "aoData" },
    { type: "column", prop: "aoColumns" }
  ],
  function(i, o) {
    import_datatables2.default.ext.selector[o.type].push(function(settings, opts, indexes) {
      var selected = opts.selected;
      var data;
      var out = [];
      if (selected !== true && selected !== false) {
        return indexes;
      }
      for (var i2 = 0, ien = indexes.length; i2 < ien; i2++) {
        data = settings[o.prop][indexes[i2]];
        if (data && (selected === true && data._select_selected === true || selected === false && !data._select_selected)) {
          out.push(indexes[i2]);
        }
      }
      return out;
    });
  }
);
import_datatables2.default.ext.selector.cell.push(function(settings, opts, cells) {
  var selected = opts.selected;
  var rowData;
  var out = [];
  if (selected === void 0) {
    return cells;
  }
  for (var i = 0, ien = cells.length; i < ien; i++) {
    rowData = settings.aoData[cells[i].row];
    if (rowData && (selected === true && rowData._selected_cells && rowData._selected_cells[cells[i].column] === true || selected === false && (!rowData._selected_cells || !rowData._selected_cells[cells[i].column]))) {
      out.push(cells[i]);
    }
  }
  return out;
});
var apiRegister = import_datatables2.default.Api.register;
var apiRegisterPlural = import_datatables2.default.Api.registerPlural;
apiRegister("select()", function() {
  return this.iterator("table", function(ctx) {
    import_datatables2.default.select.init(new import_datatables2.default.Api(ctx));
  });
});
apiRegister("select.blurable()", function(flag) {
  if (flag === void 0) {
    return this.context[0]._select.blurable;
  }
  return this.iterator("table", function(ctx) {
    ctx._select.blurable = flag;
  });
});
apiRegister("select.toggleable()", function(flag) {
  if (flag === void 0) {
    return this.context[0]._select.toggleable;
  }
  return this.iterator("table", function(ctx) {
    ctx._select.toggleable = flag;
  });
});
apiRegister("select.info()", function(flag) {
  if (flag === void 0) {
    return this.context[0]._select.info;
  }
  return this.iterator("table", function(ctx) {
    ctx._select.info = flag;
  });
});
apiRegister("select.items()", function(items) {
  if (items === void 0) {
    return this.context[0]._select.items;
  }
  return this.iterator("table", function(ctx) {
    ctx._select.items = items;
    eventTrigger(new import_datatables2.default.Api(ctx), "selectItems", [items]);
  });
});
apiRegister("select.keys()", function(flag) {
  if (flag === void 0) {
    return this.context[0]._select.keys;
  }
  return this.iterator("table", function(ctx) {
    if (!ctx._select) {
      import_datatables2.default.select.init(new import_datatables2.default.Api(ctx));
    }
    ctx._select.keys = flag;
    keysSet(new import_datatables2.default.Api(ctx));
  });
});
apiRegister("select.style()", function(style) {
  if (style === void 0) {
    return this.context[0]._select.style;
  }
  return this.iterator("table", function(ctx) {
    if (!ctx._select) {
      import_datatables2.default.select.init(new import_datatables2.default.Api(ctx));
    }
    if (!ctx._select_init) {
      init(ctx);
    }
    ctx._select.style = style;
    var dt = new import_datatables2.default.Api(ctx);
    if (style !== "api") {
      dt.ready(function() {
        disableMouseSelection(dt);
        enableMouseSelection(dt);
      });
    } else {
      disableMouseSelection(dt);
    }
    eventTrigger(new import_datatables2.default.Api(ctx), "selectStyle", [style]);
  });
});
apiRegister("select.selector()", function(selector) {
  if (selector === void 0) {
    return this.context[0]._select.selector;
  }
  return this.iterator("table", function(ctx) {
    var dt = new import_datatables2.default.Api(ctx);
    var style = ctx._select.style;
    disableMouseSelection(dt);
    ctx._select.selector = selector;
    if (style && style !== "api") {
      dt.ready(function() {
        disableMouseSelection(dt);
        enableMouseSelection(dt);
      });
    } else {
      disableMouseSelection(dt);
    }
  });
});
apiRegister("select.selectable()", function(set) {
  let ctx = this.context[0];
  if (set) {
    ctx._select.selectable = set;
    return this;
  }
  return ctx._select.selectable;
});
apiRegister("select.last()", function(set) {
  let ctx = this.context[0];
  if (set) {
    ctx._select_lastCell = set;
    return this;
  }
  return ctx._select_lastCell;
});
apiRegister("select.cumulative()", function(mode) {
  if (mode) {
    return this.iterator("table", function(ctx2) {
      if (ctx2._select_mode === mode) {
        return;
      }
      var dt = new import_datatables2.default.Api(ctx2);
      if (mode === "subtractive") {
        var unselected = dt.rows({ selected: false }).ids().toArray();
        ctx2._select_mode = mode;
        ctx2._select_set.length = 0;
        ctx2._select_set.push.apply(ctx2._select_set, unselected);
      } else {
        var selected = dt.rows({ selected: true }).ids().toArray();
        ctx2._select_mode = mode;
        ctx2._select_set.length = 0;
        ctx2._select_set.push.apply(ctx2._select_set, selected);
      }
    }).draw(false);
  }
  let ctx = this.context[0];
  if (ctx && ctx._select_set) {
    return {
      mode: ctx._select_mode,
      rows: ctx._select_set
    };
  }
  return null;
});
apiRegisterPlural("rows().select()", "row().select()", function(select) {
  var api = this;
  var selectedIndexes = [];
  if (select === false) {
    return this.deselect();
  }
  this.iterator("row", function(ctx, idx) {
    clear(ctx);
    var dtData = ctx.aoData[idx];
    var dtColumns = ctx.aoColumns;
    if (ctx._select.selectable) {
      var result = ctx._select.selectable(dtData._aData, dtData.nTr, idx);
      if (result === false) {
        return;
      }
    }
    $3(dtData.nTr).addClass(ctx._select.className);
    dtData._select_selected = true;
    selectedIndexes.push(idx);
    for (var i = 0; i < dtColumns.length; i++) {
      var col = dtColumns[i];
      if (col.sType === null) {
        api.columns().types();
      }
      if (isCheckboxColumn(col)) {
        var cells = dtData.anCells;
        if (cells && cells[i]) {
          $3("input." + checkboxClass(true), cells[i]).prop("checked", true);
        }
        if (dtData._aSortData !== null) {
          dtData._aSortData[i] = null;
        }
      }
    }
  });
  this.iterator("table", function(ct) {
    eventTrigger(api, "select", ["row", selectedIndexes], true);
  });
  return this;
});
apiRegister("row().selected()", function() {
  var ctx = this.context[0];
  if (ctx && this.length && ctx.aoData[this[0]] && ctx.aoData[this[0]]._select_selected) {
    return true;
  }
  return false;
});
apiRegister("row().focus()", function() {
  var ctx = this.context[0];
  if (ctx && this.length && ctx.aoData[this[0]] && ctx.aoData[this[0]].nTr) {
    ctx.aoData[this[0]].nTr.focus();
  }
});
apiRegister("row().blur()", function() {
  var ctx = this.context[0];
  if (ctx && this.length && ctx.aoData[this[0]] && ctx.aoData[this[0]].nTr) {
    ctx.aoData[this[0]].nTr.blur();
  }
});
apiRegisterPlural("columns().select()", "column().select()", function(select) {
  var api = this;
  if (select === false) {
    return this.deselect();
  }
  this.iterator("column", function(ctx, idx) {
    clear(ctx);
    ctx.aoColumns[idx]._select_selected = true;
    var column = new import_datatables2.default.Api(ctx).column(idx);
    $3(column.header()).addClass(ctx._select.className);
    $3(column.footer()).addClass(ctx._select.className);
    column.nodes().to$().addClass(ctx._select.className);
  });
  this.iterator("table", function(ctx, i) {
    eventTrigger(api, "select", ["column", api[i]], true);
  });
  return this;
});
apiRegister("column().selected()", function() {
  var ctx = this.context[0];
  if (ctx && this.length && ctx.aoColumns[this[0]] && ctx.aoColumns[this[0]]._select_selected) {
    return true;
  }
  return false;
});
apiRegisterPlural("cells().select()", "cell().select()", function(select) {
  var api = this;
  if (select === false) {
    return this.deselect();
  }
  this.iterator("cell", function(ctx, rowIdx, colIdx) {
    clear(ctx);
    var data = ctx.aoData[rowIdx];
    if (data._selected_cells === void 0) {
      data._selected_cells = [];
    }
    data._selected_cells[colIdx] = true;
    if (data.anCells) {
      $3(data.anCells[colIdx]).addClass(ctx._select.className);
    }
  });
  this.iterator("table", function(ctx, i) {
    eventTrigger(api, "select", ["cell", api.cells(api[i]).indexes().toArray()], true);
  });
  return this;
});
apiRegister("cell().selected()", function() {
  var ctx = this.context[0];
  if (ctx && this.length) {
    var row = ctx.aoData[this[0][0].row];
    if (row && row._selected_cells && row._selected_cells[this[0][0].column]) {
      return true;
    }
  }
  return false;
});
apiRegisterPlural("rows().deselect()", "row().deselect()", function() {
  var api = this;
  this.iterator("row", function(ctx, idx) {
    var dtData = ctx.aoData[idx];
    var dtColumns = ctx.aoColumns;
    $3(dtData.nTr).removeClass(ctx._select.className);
    dtData._select_selected = false;
    ctx._select_lastCell = null;
    for (var i = 0; i < dtColumns.length; i++) {
      var col = dtColumns[i];
      if (col.sType === null) {
        api.columns().types();
      }
      if (isCheckboxColumn(col)) {
        var cells = dtData.anCells;
        if (cells && cells[i]) {
          $3("input." + checkboxClass(true), dtData.anCells[i]).prop("checked", false);
        }
        if (dtData._aSortData !== null) {
          dtData._aSortData[i] = null;
        }
      }
    }
  });
  this.iterator("table", function(ctx, i) {
    eventTrigger(api, "deselect", ["row", api[i]], true);
  });
  return this;
});
apiRegisterPlural("columns().deselect()", "column().deselect()", function() {
  var api = this;
  this.iterator("column", function(ctx, idx) {
    ctx.aoColumns[idx]._select_selected = false;
    var api2 = new import_datatables2.default.Api(ctx);
    var column = api2.column(idx);
    $3(column.header()).removeClass(ctx._select.className);
    $3(column.footer()).removeClass(ctx._select.className);
    api2.cells(null, idx).indexes().each(function(cellIdx) {
      var data = ctx.aoData[cellIdx.row];
      var cellSelected = data._selected_cells;
      if (data.anCells && (!cellSelected || !cellSelected[cellIdx.column])) {
        $3(data.anCells[cellIdx.column]).removeClass(ctx._select.className);
      }
    });
  });
  this.iterator("table", function(ctx, i) {
    eventTrigger(api, "deselect", ["column", api[i]], true);
  });
  return this;
});
apiRegisterPlural("cells().deselect()", "cell().deselect()", function() {
  var api = this;
  this.iterator("cell", function(ctx, rowIdx, colIdx) {
    var data = ctx.aoData[rowIdx];
    if (data._selected_cells !== void 0) {
      data._selected_cells[colIdx] = false;
    }
    if (data.anCells && !ctx.aoColumns[colIdx]._select_selected) {
      $3(data.anCells[colIdx]).removeClass(ctx._select.className);
    }
  });
  this.iterator("table", function(ctx, i) {
    eventTrigger(api, "deselect", ["cell", api[i]], true);
  });
  return this;
});
function i18n(label, def) {
  return function(dt) {
    return dt.i18n("buttons." + label, def);
  };
}
function namespacedEvents(config) {
  var unique = config._eventNamespace;
  return "draw.dt.DT" + unique + " select.dt.DT" + unique + " deselect.dt.DT" + unique;
}
function enabled(dt, config) {
  if (config.limitTo.indexOf("rows") !== -1 && dt.rows({ selected: true }).any()) {
    return true;
  }
  if (config.limitTo.indexOf("columns") !== -1 && dt.columns({ selected: true }).any()) {
    return true;
  }
  if (config.limitTo.indexOf("cells") !== -1 && dt.cells({ selected: true }).any()) {
    return true;
  }
  return false;
}
var _buttonNamespace = 0;
$3.extend(import_datatables2.default.ext.buttons, {
  selected: {
    text: i18n("selected", "Selected"),
    className: "buttons-selected",
    limitTo: ["rows", "columns", "cells"],
    init: function(dt, node, config) {
      var that = this;
      config._eventNamespace = ".select" + _buttonNamespace++;
      dt.on(namespacedEvents(config), function() {
        that.enable(enabled(dt, config));
      });
      this.disable();
    },
    destroy: function(dt, node, config) {
      dt.off(config._eventNamespace);
    }
  },
  selectedSingle: {
    text: i18n("selectedSingle", "Selected single"),
    className: "buttons-selected-single",
    init: function(dt, node, config) {
      var that = this;
      config._eventNamespace = ".select" + _buttonNamespace++;
      dt.on(namespacedEvents(config), function() {
        var count = dt.rows({ selected: true }).flatten().length + dt.columns({ selected: true }).flatten().length + dt.cells({ selected: true }).flatten().length;
        that.enable(count === 1);
      });
      this.disable();
    },
    destroy: function(dt, node, config) {
      dt.off(config._eventNamespace);
    }
  },
  selectAll: {
    text: i18n("selectAll", "Select all"),
    className: "buttons-select-all",
    action: function(e, dt, node, config) {
      var items = this.select.items();
      var mod = config.selectorModifier;
      if (mod) {
        if (typeof mod === "function") {
          mod = mod.call(dt, e, dt, node, config);
        }
        this[items + "s"](mod).select();
      } else {
        this[items + "s"]().select();
      }
    }
    // selectorModifier can be specified
  },
  selectNone: {
    text: i18n("selectNone", "Deselect all"),
    className: "buttons-select-none",
    action: function() {
      clear(this.settings()[0], true);
    },
    init: function(dt, node, config) {
      var that = this;
      config._eventNamespace = ".select" + _buttonNamespace++;
      dt.on(namespacedEvents(config), function() {
        var count = dt.rows({ selected: true }).flatten().length + dt.columns({ selected: true }).flatten().length + dt.cells({ selected: true }).flatten().length;
        that.enable(count > 0);
      });
      this.disable();
    },
    destroy: function(dt, node, config) {
      dt.off(config._eventNamespace);
    }
  },
  showSelected: {
    text: i18n("showSelected", "Show only selected"),
    className: "buttons-show-selected",
    action: function(e, dt) {
      if (dt.search.fixed("dt-select")) {
        dt.search.fixed("dt-select", null);
        this.active(false);
      } else {
        var dataSrc = dt.settings()[0].aoData;
        dt.search.fixed("dt-select", function(text, data, idx) {
          return dataSrc[idx]._select_selected;
        });
        this.active(true);
      }
      dt.draw();
    }
  }
});
$3.each(["Row", "Column", "Cell"], function(i, item) {
  var lc = item.toLowerCase();
  import_datatables2.default.ext.buttons["select" + item + "s"] = {
    text: i18n("select" + item + "s", "Select " + lc + "s"),
    className: "buttons-select-" + lc + "s",
    action: function() {
      this.select.items(lc);
    },
    init: function(dt) {
      var that = this;
      this.active(dt.select.items() === lc);
      dt.on("selectItems.dt.DT", function(e, ctx, items) {
        that.active(items === lc);
      });
    }
  };
});
import_datatables2.default.type("select-checkbox", {
  className: "dt-select",
  detect: import_datatables2.default.versionCheck("2.1") ? {
    oneOf: function() {
      return false;
    },
    allOf: function() {
      return false;
    },
    init: function(settings, col, idx) {
      return isCheckboxColumn(col);
    }
  } : function(data) {
    return data === "select-checkbox" ? data : false;
  },
  order: {
    pre: function(d) {
      return d === "X" ? -1 : 0;
    }
  }
});
$3.extend(true, import_datatables2.default.defaults.oLanguage, {
  select: {
    aria: {
      rowCheckbox: "Select row"
    }
  }
});
import_datatables2.default.render.select = function(valueProp, nameProp) {
  var valueFn = valueProp ? import_datatables2.default.util.get(valueProp) : null;
  var nameFn = nameProp ? import_datatables2.default.util.get(nameProp) : null;
  var fn2 = function(data, type, row, meta) {
    var dtRow = meta.settings.aoData[meta.row];
    var selected = dtRow._select_selected;
    var ariaLabel = meta.settings.oLanguage.select.aria.rowCheckbox;
    var selectable = meta.settings._select.selectable;
    if (type === "display") {
      if (selectable) {
        var result = selectable(row, dtRow.nTr, meta.row);
        if (result === false) {
          return "";
        }
      }
      return $3("<input>").attr({
        "aria-label": ariaLabel,
        class: checkboxClass(),
        name: nameFn ? nameFn(row) : null,
        type: "checkbox",
        value: valueFn ? valueFn(row) : null,
        checked: selected
      }).on("input", function(e) {
        e.preventDefault();
        this.checked = $3(this).closest("tr").hasClass("selected");
      })[0];
    } else if (type === "type") {
      return "select-checkbox";
    } else if (type === "filter") {
      return "";
    }
    return selected ? "X" : "";
  };
  fn2._name = "selectCheckbox";
  return fn2;
};
import_datatables2.default.ext.order["select-checkbox"] = function(settings, col) {
  return this.api().column(col, { order: "index" }).nodes().map(function(td) {
    if (settings._select.items === "row") {
      return $3(td).parent().hasClass(settings._select.className).toString();
    } else if (settings._select.items === "cell") {
      return $3(td).hasClass(settings._select.className).toString();
    }
    return false;
  });
};
$3.fn.DataTable.select = import_datatables2.default.select;
$3(document).on("i18n.dt.dtSelect preInit.dt.dtSelect", function(e, ctx) {
  if (e.namespace !== "dt") {
    return;
  }
  import_datatables2.default.select.init(new import_datatables2.default.Api(ctx));
});

// app/javascript/datatables.js
var import_datatables8 = __toESM(require_dataTables_buttons());

// node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.mjs
var import_jquery3 = __toESM(require_jquery(), 1);
var import_datatables4 = __toESM(require_dataTables_buttons(), 1);
var $4 = import_jquery3.default;
$4.extend(true, dataTables_bootstrap4_default.Buttons.defaults, {
  dom: {
    container: {
      className: "dt-buttons btn-group flex-wrap"
    },
    button: {
      className: "btn btn-secondary",
      active: "active",
      dropHtml: "",
      dropClass: "dropdown-toggle"
    },
    collection: {
      container: {
        tag: "div",
        className: "dropdown-menu dt-button-collection"
      },
      closeButton: false,
      button: {
        tag: "a",
        className: "dt-button dropdown-item",
        active: "dt-button-active",
        disabled: "disabled",
        spacer: {
          className: "dropdown-divider",
          tag: "hr"
        }
      }
    },
    split: {
      action: {
        tag: "a",
        className: "btn btn-secondary dt-button-split-drop-button",
        closeButton: false
      },
      dropdown: {
        tag: "button",
        className: "btn btn-secondary dt-button-split-drop dropdown-toggle-split",
        closeButton: false,
        align: "split-left",
        splitAlignClass: "dt-button-split-left"
      },
      wrapper: {
        tag: "div",
        className: "dt-button-split btn-group",
        closeButton: false
      }
    }
  },
  buttonCreated: function(config, button) {
    return config.buttons ? $4('<div class="btn-group"/>').append(button) : button;
  }
});
dataTables_bootstrap4_default.ext.buttons.collection.rightAlignClassName = "dropdown-menu-right";

// app/javascript/datatables.js
var import_buttons_html5 = __toESM(require_buttons_html5());
var parseRowAttributes = (data) => {
  if (!data.row_attributes) return null;
  return JSON.parse(data.row_attributes.replace(/&quot;/g, '"'));
};
var applyAttributes = (element, attributes) => {
  if (!attributes || typeof attributes !== "object") return;
  Object.entries(attributes).forEach(([key, value]) => {
    if (value == null) return;
    if (key === "class") {
      element.addClass(value);
      return;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
      switch (key) {
        case "data":
          applyAttributes(element, Object.fromEntries(
            Object.entries(value).map(([k, v]) => [`data-${k}`, v])
          ));
          break;
        case "aria":
          applyAttributes(element, Object.fromEntries(
            Object.entries(value).map(([k, v]) => [`aria-${k}`, v])
          ));
          break;
        default:
          const namespace = `${key}-`;
          applyAttributes(element, Object.fromEntries(
            Object.entries(value).map(([k, v]) => [`${namespace}${k}`, v])
          ));
      }
      return;
    }
    let attrKey = key;
    if (!key.startsWith("aria-") && !key.startsWith("data-")) {
      attrKey = `data-${key}`;
    }
    element.attr(attrKey, value);
    if (key === "data" || attrKey.startsWith("data-")) {
      const dataKey = key === "data" ? value : key.replace("data-", "");
      element.data(dataKey, value);
    }
  });
};
import_jquery4.default.extend(import_jquery4.default.fn.dataTable.defaults, {
  dom: "Bfrtlip",
  pagingType: "full_numbers",
  processing: true,
  responsive: true
});
var initializeDataTables = () => {
  (0, import_jquery4.default)("table[data-source]").each((_, element) => {
    const $table = (0, import_jquery4.default)(element);
    $table.DataTable({
      ajax: {
        url: $table.data("source")
      },
      buttons: $table.data("buttons"),
      serverSide: true,
      columns: $table.data("columns"),
      order: $table.data("order"),
      select: {
        style: "multi",
        selector: "td.select-checkbox"
      },
      createdRow: (row, data, _dataIndex) => {
        const attrs = parseRowAttributes(data);
        if (attrs) {
          applyAttributes((0, import_jquery4.default)(row), attrs);
        }
      }
    });
  });
  (0, import_jquery4.default)("table[id^=dttb-]").not(".dataTable").each((_, element) => {
    (0, import_jquery4.default)(element).DataTable();
  });
};
(0, import_jquery4.default)(document).on("preInit.dt", function(e, settings) {
  const api = new import_jquery4.default.fn.dataTable.Api(settings);
  const tableId = `#${api.table().node().id}`;
  const url = (0, import_jquery4.default)(tableId).data("source");
  if (url) {
    return api.ajax.url(url);
  }
});
(0, import_jquery4.default)(document).on("click", "tr.clickable-row td:not(.select-checkbox)", function(e) {
  const href = (0, import_jquery4.default)(this).parent().data("href");
  if (href) {
    window.location = href;
  }
});
import_jquery4.default.fn.dataTable.ext.buttons.deleteMessages = {
  text: "Delete",
  className: "btn btn-sm btn-danger",
  action: function(e, dt, node, config) {
    var rows = dt.rows({ selected: true });
    if (rows.count() === 0) {
      alert("Please select at least one message");
      return;
    }
    if (!confirm("Are you sure you want to delete the selected messages?")) {
      return;
    }
    var ids = rows.data().map(function(row) {
      return row.DT_RowId;
    }).toArray();
    import_jquery4.default.ajax({
      url: "/admin/messages/do_to_all",
      method: "POST",
      data: {
        all_messages: {
          msgs: ids
        },
        commit: "Delete Messages",
        authenticity_token: (0, import_jquery4.default)('meta[name="csrf-token"]').attr("content")
      },
      success: function() {
        dt.ajax.reload();
      },
      error: function(xhr, status, error) {
        alert("Error deleting messages: " + error);
      }
    });
  }
};
import_jquery4.default.fn.dataTable.ext.buttons.markAsRead = {
  text: "Mark as Read",
  className: "btn btn-sm btn-primary",
  action: function(e, dt, node, config) {
    var rows = dt.rows({ selected: true });
    if (rows.count() === 0) {
      alert("Please select at least one message");
      return;
    }
    var ids = rows.data().map(function(row) {
      return row.DT_RowId;
    }).toArray();
    import_jquery4.default.ajax({
      url: "/admin/messages/do_to_all",
      method: "POST",
      data: {
        all_messages: {
          msgs: ids
        },
        commit: "Mark as Read",
        authenticity_token: (0, import_jquery4.default)('meta[name="csrf-token"]').attr("content")
      },
      success: function() {
        dt.rows().deselect();
        dt.ajax.reload();
      },
      error: function(xhr, status, error) {
        alert("Error updating messages: " + error);
      }
    });
  }
};
import_jquery4.default.fn.dataTable.ext.buttons.markAsUnread = {
  text: "Mark as Unread",
  className: "btn btn-sm btn-info",
  action: function(e, dt, node, config) {
    var rows = dt.rows({ selected: true });
    if (rows.count() === 0) {
      alert("Please select at least one message");
      return;
    }
    var ids = rows.data().map(function(row) {
      return row.DT_RowId;
    }).toArray();
    import_jquery4.default.ajax({
      url: "/admin/messages/do_to_all",
      method: "POST",
      data: {
        all_messages: {
          msgs: ids
        },
        commit: "Mark as Unread",
        authenticity_token: (0, import_jquery4.default)('meta[name="csrf-token"]').attr("content")
      },
      success: function() {
        dt.rows().deselect();
        dt.ajax.reload();
      },
      error: function(xhr, status, error) {
        alert("Error updating messages: " + error);
      }
    });
  }
};
import_jquery4.default.fn.dataTable.ext.buttons.selectAll = {
  text: '<span class="glyphicon glyphicon-check"></span>',
  titleAttr: "Select All",
  className: "btn btn-sm btn-outline-secondary",
  action: function(e, dt, node, config) {
    dt.rows().select();
  }
};
import_jquery4.default.fn.dataTable.ext.buttons.selectNone = {
  text: "Select None",
  className: "btn btn-sm btn-outline-secondary",
  action: function(e, dt, node, config) {
    dt.rows().deselect();
  }
};
document.addEventListener("turbo:load", initializeDataTables);
document.addEventListener("turbo:before-cache", function() {
  const tables = (0, import_jquery4.default)(import_jquery4.default.fn.dataTable.tables(true)).DataTable();
  if (tables) {
    tables.clear();
    tables.destroy();
  }
});
window.initializeDataTables = initializeDataTables;

// node_modules/@rails/actioncable/app/assets/javascripts/actioncable.esm.js
var adapters = {
  logger: typeof console !== "undefined" ? console : void 0,
  WebSocket: typeof WebSocket !== "undefined" ? WebSocket : void 0
};
var logger = {
  log(...messages) {
    if (this.enabled) {
      messages.push(Date.now());
      adapters.logger.log("[ActionCable]", ...messages);
    }
  }
};
var now = () => (/* @__PURE__ */ new Date()).getTime();
var secondsSince = (time) => (now() - time) / 1e3;
var ConnectionMonitor = class {
  constructor(connection) {
    this.visibilityDidChange = this.visibilityDidChange.bind(this);
    this.connection = connection;
    this.reconnectAttempts = 0;
  }
  start() {
    if (!this.isRunning()) {
      this.startedAt = now();
      delete this.stoppedAt;
      this.startPolling();
      addEventListener("visibilitychange", this.visibilityDidChange);
      logger.log(`ConnectionMonitor started. stale threshold = ${this.constructor.staleThreshold} s`);
    }
  }
  stop() {
    if (this.isRunning()) {
      this.stoppedAt = now();
      this.stopPolling();
      removeEventListener("visibilitychange", this.visibilityDidChange);
      logger.log("ConnectionMonitor stopped");
    }
  }
  isRunning() {
    return this.startedAt && !this.stoppedAt;
  }
  recordMessage() {
    this.pingedAt = now();
  }
  recordConnect() {
    this.reconnectAttempts = 0;
    delete this.disconnectedAt;
    logger.log("ConnectionMonitor recorded connect");
  }
  recordDisconnect() {
    this.disconnectedAt = now();
    logger.log("ConnectionMonitor recorded disconnect");
  }
  startPolling() {
    this.stopPolling();
    this.poll();
  }
  stopPolling() {
    clearTimeout(this.pollTimeout);
  }
  poll() {
    this.pollTimeout = setTimeout(() => {
      this.reconnectIfStale();
      this.poll();
    }, this.getPollInterval());
  }
  getPollInterval() {
    const { staleThreshold, reconnectionBackoffRate } = this.constructor;
    const backoff = Math.pow(1 + reconnectionBackoffRate, Math.min(this.reconnectAttempts, 10));
    const jitterMax = this.reconnectAttempts === 0 ? 1 : reconnectionBackoffRate;
    const jitter = jitterMax * Math.random();
    return staleThreshold * 1e3 * backoff * (1 + jitter);
  }
  reconnectIfStale() {
    if (this.connectionIsStale()) {
      logger.log(`ConnectionMonitor detected stale connection. reconnectAttempts = ${this.reconnectAttempts}, time stale = ${secondsSince(this.refreshedAt)} s, stale threshold = ${this.constructor.staleThreshold} s`);
      this.reconnectAttempts++;
      if (this.disconnectedRecently()) {
        logger.log(`ConnectionMonitor skipping reopening recent disconnect. time disconnected = ${secondsSince(this.disconnectedAt)} s`);
      } else {
        logger.log("ConnectionMonitor reopening");
        this.connection.reopen();
      }
    }
  }
  get refreshedAt() {
    return this.pingedAt ? this.pingedAt : this.startedAt;
  }
  connectionIsStale() {
    return secondsSince(this.refreshedAt) > this.constructor.staleThreshold;
  }
  disconnectedRecently() {
    return this.disconnectedAt && secondsSince(this.disconnectedAt) < this.constructor.staleThreshold;
  }
  visibilityDidChange() {
    if (document.visibilityState === "visible") {
      setTimeout(() => {
        if (this.connectionIsStale() || !this.connection.isOpen()) {
          logger.log(`ConnectionMonitor reopening stale connection on visibilitychange. visibilityState = ${document.visibilityState}`);
          this.connection.reopen();
        }
      }, 200);
    }
  }
};
ConnectionMonitor.staleThreshold = 6;
ConnectionMonitor.reconnectionBackoffRate = 0.15;
var INTERNAL = {
  message_types: {
    welcome: "welcome",
    disconnect: "disconnect",
    ping: "ping",
    confirmation: "confirm_subscription",
    rejection: "reject_subscription"
  },
  disconnect_reasons: {
    unauthorized: "unauthorized",
    invalid_request: "invalid_request",
    server_restart: "server_restart",
    remote: "remote"
  },
  default_mount_path: "/cable",
  protocols: ["actioncable-v1-json", "actioncable-unsupported"]
};
var { message_types, protocols } = INTERNAL;
var supportedProtocols = protocols.slice(0, protocols.length - 1);
var indexOf = [].indexOf;
var Connection = class {
  constructor(consumer) {
    this.open = this.open.bind(this);
    this.consumer = consumer;
    this.subscriptions = this.consumer.subscriptions;
    this.monitor = new ConnectionMonitor(this);
    this.disconnected = true;
  }
  send(data) {
    if (this.isOpen()) {
      this.webSocket.send(JSON.stringify(data));
      return true;
    } else {
      return false;
    }
  }
  open() {
    if (this.isActive()) {
      logger.log(`Attempted to open WebSocket, but existing socket is ${this.getState()}`);
      return false;
    } else {
      const socketProtocols = [...protocols, ...this.consumer.subprotocols || []];
      logger.log(`Opening WebSocket, current state is ${this.getState()}, subprotocols: ${socketProtocols}`);
      if (this.webSocket) {
        this.uninstallEventHandlers();
      }
      this.webSocket = new adapters.WebSocket(this.consumer.url, socketProtocols);
      this.installEventHandlers();
      this.monitor.start();
      return true;
    }
  }
  close({ allowReconnect } = {
    allowReconnect: true
  }) {
    if (!allowReconnect) {
      this.monitor.stop();
    }
    if (this.isOpen()) {
      return this.webSocket.close();
    }
  }
  reopen() {
    logger.log(`Reopening WebSocket, current state is ${this.getState()}`);
    if (this.isActive()) {
      try {
        return this.close();
      } catch (error) {
        logger.log("Failed to reopen WebSocket", error);
      } finally {
        logger.log(`Reopening WebSocket in ${this.constructor.reopenDelay}ms`);
        setTimeout(this.open, this.constructor.reopenDelay);
      }
    } else {
      return this.open();
    }
  }
  getProtocol() {
    if (this.webSocket) {
      return this.webSocket.protocol;
    }
  }
  isOpen() {
    return this.isState("open");
  }
  isActive() {
    return this.isState("open", "connecting");
  }
  triedToReconnect() {
    return this.monitor.reconnectAttempts > 0;
  }
  isProtocolSupported() {
    return indexOf.call(supportedProtocols, this.getProtocol()) >= 0;
  }
  isState(...states) {
    return indexOf.call(states, this.getState()) >= 0;
  }
  getState() {
    if (this.webSocket) {
      for (let state in adapters.WebSocket) {
        if (adapters.WebSocket[state] === this.webSocket.readyState) {
          return state.toLowerCase();
        }
      }
    }
    return null;
  }
  installEventHandlers() {
    for (let eventName in this.events) {
      const handler = this.events[eventName].bind(this);
      this.webSocket[`on${eventName}`] = handler;
    }
  }
  uninstallEventHandlers() {
    for (let eventName in this.events) {
      this.webSocket[`on${eventName}`] = function() {
      };
    }
  }
};
Connection.reopenDelay = 500;
Connection.prototype.events = {
  message(event) {
    if (!this.isProtocolSupported()) {
      return;
    }
    const { identifier, message, reason, reconnect, type } = JSON.parse(event.data);
    this.monitor.recordMessage();
    switch (type) {
      case message_types.welcome:
        if (this.triedToReconnect()) {
          this.reconnectAttempted = true;
        }
        this.monitor.recordConnect();
        return this.subscriptions.reload();
      case message_types.disconnect:
        logger.log(`Disconnecting. Reason: ${reason}`);
        return this.close({
          allowReconnect: reconnect
        });
      case message_types.ping:
        return null;
      case message_types.confirmation:
        this.subscriptions.confirmSubscription(identifier);
        if (this.reconnectAttempted) {
          this.reconnectAttempted = false;
          return this.subscriptions.notify(identifier, "connected", {
            reconnected: true
          });
        } else {
          return this.subscriptions.notify(identifier, "connected", {
            reconnected: false
          });
        }
      case message_types.rejection:
        return this.subscriptions.reject(identifier);
      default:
        return this.subscriptions.notify(identifier, "received", message);
    }
  },
  open() {
    logger.log(`WebSocket onopen event, using '${this.getProtocol()}' subprotocol`);
    this.disconnected = false;
    if (!this.isProtocolSupported()) {
      logger.log("Protocol is unsupported. Stopping monitor and disconnecting.");
      return this.close({
        allowReconnect: false
      });
    }
  },
  close(event) {
    logger.log("WebSocket onclose event");
    if (this.disconnected) {
      return;
    }
    this.disconnected = true;
    this.monitor.recordDisconnect();
    return this.subscriptions.notifyAll("disconnected", {
      willAttemptReconnect: this.monitor.isRunning()
    });
  },
  error() {
    logger.log("WebSocket onerror event");
  }
};
var extend = function(object, properties) {
  if (properties != null) {
    for (let key in properties) {
      const value = properties[key];
      object[key] = value;
    }
  }
  return object;
};
var Subscription = class {
  constructor(consumer, params = {}, mixin) {
    this.consumer = consumer;
    this.identifier = JSON.stringify(params);
    extend(this, mixin);
  }
  perform(action, data = {}) {
    data.action = action;
    return this.send(data);
  }
  send(data) {
    return this.consumer.send({
      command: "message",
      identifier: this.identifier,
      data: JSON.stringify(data)
    });
  }
  unsubscribe() {
    return this.consumer.subscriptions.remove(this);
  }
};
var SubscriptionGuarantor = class {
  constructor(subscriptions) {
    this.subscriptions = subscriptions;
    this.pendingSubscriptions = [];
  }
  guarantee(subscription) {
    if (this.pendingSubscriptions.indexOf(subscription) == -1) {
      logger.log(`SubscriptionGuarantor guaranteeing ${subscription.identifier}`);
      this.pendingSubscriptions.push(subscription);
    } else {
      logger.log(`SubscriptionGuarantor already guaranteeing ${subscription.identifier}`);
    }
    this.startGuaranteeing();
  }
  forget(subscription) {
    logger.log(`SubscriptionGuarantor forgetting ${subscription.identifier}`);
    this.pendingSubscriptions = this.pendingSubscriptions.filter((s) => s !== subscription);
  }
  startGuaranteeing() {
    this.stopGuaranteeing();
    this.retrySubscribing();
  }
  stopGuaranteeing() {
    clearTimeout(this.retryTimeout);
  }
  retrySubscribing() {
    this.retryTimeout = setTimeout(() => {
      if (this.subscriptions && typeof this.subscriptions.subscribe === "function") {
        this.pendingSubscriptions.map((subscription) => {
          logger.log(`SubscriptionGuarantor resubscribing ${subscription.identifier}`);
          this.subscriptions.subscribe(subscription);
        });
      }
    }, 500);
  }
};
var Subscriptions = class {
  constructor(consumer) {
    this.consumer = consumer;
    this.guarantor = new SubscriptionGuarantor(this);
    this.subscriptions = [];
  }
  create(channelName, mixin) {
    const channel = channelName;
    const params = typeof channel === "object" ? channel : {
      channel
    };
    const subscription = new Subscription(this.consumer, params, mixin);
    return this.add(subscription);
  }
  add(subscription) {
    this.subscriptions.push(subscription);
    this.consumer.ensureActiveConnection();
    this.notify(subscription, "initialized");
    this.subscribe(subscription);
    return subscription;
  }
  remove(subscription) {
    this.forget(subscription);
    if (!this.findAll(subscription.identifier).length) {
      this.sendCommand(subscription, "unsubscribe");
    }
    return subscription;
  }
  reject(identifier) {
    return this.findAll(identifier).map((subscription) => {
      this.forget(subscription);
      this.notify(subscription, "rejected");
      return subscription;
    });
  }
  forget(subscription) {
    this.guarantor.forget(subscription);
    this.subscriptions = this.subscriptions.filter((s) => s !== subscription);
    return subscription;
  }
  findAll(identifier) {
    return this.subscriptions.filter((s) => s.identifier === identifier);
  }
  reload() {
    return this.subscriptions.map((subscription) => this.subscribe(subscription));
  }
  notifyAll(callbackName, ...args) {
    return this.subscriptions.map((subscription) => this.notify(subscription, callbackName, ...args));
  }
  notify(subscription, callbackName, ...args) {
    let subscriptions;
    if (typeof subscription === "string") {
      subscriptions = this.findAll(subscription);
    } else {
      subscriptions = [subscription];
    }
    return subscriptions.map((subscription2) => typeof subscription2[callbackName] === "function" ? subscription2[callbackName](...args) : void 0);
  }
  subscribe(subscription) {
    if (this.sendCommand(subscription, "subscribe")) {
      this.guarantor.guarantee(subscription);
    }
  }
  confirmSubscription(identifier) {
    logger.log(`Subscription confirmed ${identifier}`);
    this.findAll(identifier).map((subscription) => this.guarantor.forget(subscription));
  }
  sendCommand(subscription, command) {
    const { identifier } = subscription;
    return this.consumer.send({
      command,
      identifier
    });
  }
};
var Consumer = class {
  constructor(url) {
    this._url = url;
    this.subscriptions = new Subscriptions(this);
    this.connection = new Connection(this);
    this.subprotocols = [];
  }
  get url() {
    return createWebSocketURL(this._url);
  }
  send(data) {
    return this.connection.send(data);
  }
  connect() {
    return this.connection.open();
  }
  disconnect() {
    return this.connection.close({
      allowReconnect: false
    });
  }
  ensureActiveConnection() {
    if (!this.connection.isActive()) {
      return this.connection.open();
    }
  }
  addSubProtocol(subprotocol) {
    this.subprotocols = [...this.subprotocols, subprotocol];
  }
};
function createWebSocketURL(url) {
  if (typeof url === "function") {
    url = url();
  }
  if (url && !/^wss?:/i.test(url)) {
    const a = document.createElement("a");
    a.href = url;
    a.href = a.href;
    a.protocol = a.protocol.replace("http", "ws");
    return a.href;
  } else {
    return url;
  }
}
function createConsumer(url = getConfig("url") || INTERNAL.default_mount_path) {
  return new Consumer(url);
}
function getConfig(name) {
  const element = document.head.querySelector(`meta[name='action-cable-${name}']`);
  if (element) {
    return element.getAttribute("content");
  }
}

// app/javascript/cable.js
var cable_default = createConsumer();

// app/javascript/channels/message_channel.js
cable_default.subscriptions.create("MessageChannel", {
  connected() {
    console.log("Connected to MessageChannel");
  },
  disconnected() {
  },
  received(data) {
    this.updateUnreadBadge(data.unread_count);
    const tableId = "#messages-datatable";
    const table = $(tableId);
    if (table.length > 0 && $.fn.DataTable.isDataTable(tableId)) {
      const dt = table.DataTable();
      dt.ajax.reload(null, false);
    }
  },
  updateUnreadBadge(count) {
    const badge = document.querySelector("#unread-messages-badge");
    if (badge) {
      badge.textContent = count;
      badge.classList.toggle("d-none", count === 0);
    }
  }
});

// app/javascript/application.js
$ = window.$ = window.jQuery = import_jquery5.default;
window.bootstrap = bootstrap_esm_exports;
document.addEventListener("DOMContentLoaded", () => {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new Tooltip(tooltipTriggerEl);
  });
});
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   *)

datatables.net/js/dataTables.js:
  (*! DataTables 2.2.2
   * © SpryMedia Ltd - datatables.net/license
   *)

datatables.net-buttons/js/dataTables.buttons.js:
  (*! Buttons for DataTables 3.2.2
   * © SpryMedia Ltd - datatables.net/license
   *)

datatables.net-buttons/js/buttons.html5.js:
  (*!
   * HTML5 export buttons for Buttons and DataTables.
   * © SpryMedia Ltd - datatables.net/license
   *
   * FileSaver.js (1.3.3) - MIT license
   * Copyright © 2016 Eli Grey - http://eligrey.com
   *)

bootstrap/dist/js/bootstrap.esm.js:
  (*!
    * Bootstrap v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

datatables.net-bs4/js/dataTables.bootstrap4.mjs:
  (*! DataTables Bootstrap 4 integration
   * © SpryMedia Ltd - datatables.net/license
   *)

datatables.net-select/js/dataTables.select.mjs:
  (*! Select for DataTables 3.0.0
   * © SpryMedia Ltd - datatables.net/license/mit
   *)

datatables.net-buttons-bs4/js/buttons.bootstrap4.mjs:
  (*! Bootstrap integration for DataTables' Buttons
   * © SpryMedia Ltd - datatables.net/license
   *)
*/
//# sourceMappingURL=/assets/application.js.map
