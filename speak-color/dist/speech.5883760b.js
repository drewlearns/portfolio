// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"handlers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleResult = handleResult;

function logWords(results) {
  console.log(results[results.length - 1][0].transcript);
}

;

function handleResult(event) {
  logWords(event.results);
}
},{}],"colors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDark = isDark;
exports.isValidColor = isValidColor;
exports.colorsByLength = exports.colors = void 0;
var colors = {
  black: '#000000',
  silver: '#C0C0C0',
  gray: '#808080',
  grey: '#808080',
  white: '#FFFFFF',
  maroon: '#800000',
  red: '#FF0000',
  purple: '#800080',
  fuchsia: '#FF00FF',
  green: '#008000',
  lime: '#00FF00',
  olive: '#808000',
  yellow: '#FFFF00',
  navy: '#000080',
  blue: '#0000FF',
  teal: '#008080',
  aqua: '#00FFFF',
  darkblue: '#00008B',
  mediumblue: '#0000CD',
  darkgreen: '#006400',
  darkcyan: '#008B8B',
  deepskyblue: '#00BFFF',
  darkturquoise: '#00CED1',
  mediumspringgreen: '#00FA9A',
  springgreen: '#00FF7F',
  cyan: '#00FFFF',
  midnightblue: '#191970',
  dodgerblue: '#1E90FF',
  lightseagreen: '#20B2AA',
  forestgreen: '#228B22',
  seagreen: '#2E8B57',
  darkslategray: '#2F4F4F',
  darkslategrey: '#2F4F4F',
  limegreen: '#32CD32',
  mediumseagreen: '#3CB371',
  turquoise: '#40E0D0',
  royalblue: '#4169E1',
  steelblue: '#4682B4',
  darkslateblue: '#483D8B',
  mediumturquoise: '#48D1CC',
  indigo: '#4B0082',
  darkolivegreen: '#556B2F',
  cadetblue: '#5F9EA0',
  cornflowerblue: '#6495ED',
  rebeccapurple: '#663399',
  mediumaquamarine: '#66CDAA',
  dimgray: '#696969',
  dimgrey: '#696969',
  slateblue: '#6A5ACD',
  olivedrab: '#6B8E23',
  slategray: '#708090',
  slategrey: '#708090',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  mediumslateblue: '#7B68EE',
  lawngreen: '#7CFC00',
  chartreuse: '#7FFF00',
  aquamarine: '#7FFFD4',
  skyblue: '#87CEEB',
  lightskyblue: '#87CEFA',
  blueviolet: '#8A2BE2',
  darkred: '#8B0000',
  darkmagenta: '#8B008B',
  saddlebrown: '#8B4513',
  darkseagreen: '#8FBC8F',
  lightgreen: '#90EE90',
  mediumpurple: '#9370DB',
  darkviolet: '#9400D3',
  palegreen: '#98FB98',
  darkorchid: '#9932CC',
  yellowgreen: '#9ACD32',
  sienna: '#A0522D',
  brown: '#A52A2A',
  darkgray: '#A9A9A9',
  darkgrey: '#A9A9A9',
  lightblue: '#ADD8E6',
  greenyellow: '#ADFF2F',
  paleturquoise: '#AFEEEE',
  lightsteelblue: '#B0C4DE',
  powderblue: '#B0E0E6',
  firebrick: '#B22222',
  darkgoldenrod: '#B8860B',
  mediumorchid: '#BA55D3',
  rosybrown: '#BC8F8F',
  darkkhaki: '#BDB76B',
  mediumvioletred: '#C71585',
  indianred: '#CD5C5C',
  peru: '#CD853F',
  chocolate: '#D2691E',
  tan: '#D2B48C',
  lightgray: '#D3D3D3',
  lightgrey: '#D3D3D3',
  thistle: '#D8BFD8',
  orchid: '#DA70D6',
  goldenrod: '#DAA520',
  palevioletred: '#DB7093',
  crimson: '#DC143C',
  gainsboro: '#DCDCDC',
  plum: '#DDA0DD',
  burlywood: '#DEB887',
  lightcyan: '#E0FFFF',
  lavender: '#E6E6FA',
  darksalmon: '#E9967A',
  violet: '#EE82EE',
  palegoldenrod: '#EEE8AA',
  lightcoral: '#F08080',
  khaki: '#F0E68C',
  aliceblue: '#F0F8FF',
  honeydew: '#F0FFF0',
  azure: '#F0FFFF',
  sandybrown: '#F4A460',
  wheat: '#F5DEB3',
  beige: '#F5F5DC',
  whitesmoke: '#F5F5F5',
  mintcream: '#F5FFFA',
  ghostwhite: '#F8F8FF',
  salmon: '#FA8072',
  antiquewhite: '#FAEBD7',
  linen: '#FAF0E6',
  lightgoldenrodyellow: '#FAFAD2',
  oldlace: '#FDF5E6',
  magenta: '#FF00FF',
  deeppink: '#FF1493',
  orangered: '#FF4500',
  tomato: '#FF6347',
  hotpink: '#FF69B4',
  coral: '#FF7F50',
  darkorange: '#FF8C00',
  lightsalmon: '#FFA07A',
  orange: '#FFA500',
  lightpink: '#FFB6C1',
  pink: '#FFC0CB',
  gold: '#FFD700',
  peachpuff: '#FFDAB9',
  navajowhite: '#FFDEAD',
  moccasin: '#FFE4B5',
  bisque: '#FFE4C4',
  mistyrose: '#FFE4E1',
  blanchedalmond: '#FFEBCD',
  papayawhip: '#FFEFD5',
  lavenderblush: '#FFF0F5',
  seashell: '#FFF5EE',
  cornsilk: '#FFF8DC',
  lemonchiffon: '#FFFACD',
  floralwhite: '#FFFAF0',
  snow: '#FFFAFA',
  lightyellow: '#FFFFE0',
  ivory: '#FFFFF0'
};
exports.colors = colors;

function isDark(colorName) {
  var hex = colors[colorName].substring(1, 7);
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 < 120;
}

var colorsByLength = Object.keys(colors).sort(function (a, b) {
  return a.length - b.length;
});
exports.colorsByLength = colorsByLength;

function isValidColor(word) {
  return !!colors[word];
}
},{}],"speech.js":[function(require,module,exports) {
"use strict";

var _handlers = require("./handlers.js");

var _colors = require("./colors.js");

//IMPORTS
// import {isValidColor} from './colors.js';
//VARIABLES
var colorsEl = document.querySelector('.colors');
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //LIB

function displayColors(colors) {
  return colors.map(function (color) {
    return "<span class=\"color\" ".concat(isDar(color) ? 'dark' : '', " style=\"background").concat(color, ">").concat(color, "</span>");
  }).join('');
}

;

function start() {
  //CHECK TO SEE IF THE USER'S BROWSER SUPPORTS SPEECH RECOGNITION
  if (!('SpeechRecognition' in window)) {
    alert("\n                        Sorry your browser doesn't support speech Recognition.\n                        I recommend chrome web browser.\n        ");
    return;
  }

  ; //SPEECH RECOGNITION IS SUPPORTED

  console.log('Starting Speech Recognition'); //MAKE NEW SPEECH RECOGNITION

  var recognition = new SpeechRecognition();
  recognition.continous = true; // doesn't stop after it thinks you are done

  recognition.intermResult = true; // Types as you speak

  console.log(recognition);
  recognition.onresult = _handlers.handleResult;
  recognition.start();
}

; //INIT

start();
displayColors();
colorsEl.innerHTML = displayColors(_colors.colorsByLength);
},{"./handlers.js":"handlers.js","./colors.js":"colors.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50014" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","speech.js"], null)
//# sourceMappingURL=/speech.5883760b.js.map