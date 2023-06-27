// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1uvjH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "53018bd1deb440d4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jpuUO":[function(require,module,exports) {
!function(a) {
    var e = [], t = {
        options: {
            prependExistingHelpBlock: !1,
            sniffHtml: !0,
            preventSubmit: !0,
            submitError: !1,
            submitSuccess: !1,
            semanticallyStrict: !1,
            autoAdd: {
                helpBlocks: !0
            },
            filter: function() {
                return !0;
            }
        },
        methods: {
            init: function(o) {
                var r = a.extend(!0, {}, t);
                r.options = a.extend(!0, r.options, o);
                var l = a.unique(this.map(function() {
                    return a(this).parents("form")[0];
                }).toArray());
                return a(l).bind("submit", function(e) {
                    var t = a(this), i = 0, n = t.find("input,textarea,select").not("[type=submit],[type=image]").filter(r.options.filter);
                    n.trigger("submit.validation").trigger("validationLostFocus.validation"), n.each(function(e, t) {
                        var n = a(t).parents(".control-group").first();
                        n.hasClass("warning") && (n.removeClass("warning").addClass("error"), i++);
                    }), n.trigger("validationLostFocus.validation"), i ? (r.options.preventSubmit && e.preventDefault(), t.addClass("error"), a.isFunction(r.options.submitError) && r.options.submitError(t, e, n.jqBootstrapValidation("collectErrors", !0))) : (t.removeClass("error"), a.isFunction(r.options.submitSuccess) && r.options.submitSuccess(t, e));
                }), this.each(function() {
                    var t = a(this), o = t.parents(".control-group").first(), l = o.find(".help-block").first(), s = t.parents("form").first(), d = [];
                    if (!l.length && r.options.autoAdd && r.options.autoAdd.helpBlocks && (l = a('<div class="help-block" />'), o.find(".controls").append(l), e.push(l[0])), r.options.sniffHtml) {
                        var c = "";
                        if (void 0 !== t.attr("pattern") && (c = "Not in the expected format<!-- data-validation-pattern-message to override -->", t.data("validationPatternMessage") && (c = t.data("validationPatternMessage")), t.data("validationPatternMessage", c), t.data("validationPatternRegex", t.attr("pattern"))), void 0 !== t.attr("max") || void 0 !== t.attr("aria-valuemax")) {
                            var v = void 0 !== t.attr("max") ? t.attr("max") : t.attr("aria-valuemax");
                            c = "Too high: Maximum of '" + v + "'<!-- data-validation-max-message to override -->", t.data("validationMaxMessage") && (c = t.data("validationMaxMessage")), t.data("validationMaxMessage", c), t.data("validationMaxMax", v);
                        }
                        if (void 0 !== t.attr("min") || void 0 !== t.attr("aria-valuemin")) {
                            var u = void 0 !== t.attr("min") ? t.attr("min") : t.attr("aria-valuemin");
                            c = "Too low: Minimum of '" + u + "'<!-- data-validation-min-message to override -->", t.data("validationMinMessage") && (c = t.data("validationMinMessage")), t.data("validationMinMessage", c), t.data("validationMinMin", u);
                        }
                        void 0 !== t.attr("maxlength") && (c = "Too long: Maximum of '" + t.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->", t.data("validationMaxlengthMessage") && (c = t.data("validationMaxlengthMessage")), t.data("validationMaxlengthMessage", c), t.data("validationMaxlengthMaxlength", t.attr("maxlength"))), void 0 !== t.attr("minlength") && (c = "Too short: Minimum of '" + t.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->", t.data("validationMinlengthMessage") && (c = t.data("validationMinlengthMessage")), t.data("validationMinlengthMessage", c), t.data("validationMinlengthMinlength", t.attr("minlength"))), void 0 === t.attr("required") && void 0 === t.attr("aria-required") || (c = r.builtInValidators.required.message, t.data("validationRequiredMessage") && (c = t.data("validationRequiredMessage")), t.data("validationRequiredMessage", c)), void 0 !== t.attr("type") && "number" === t.attr("type").toLowerCase() && (c = r.builtInValidators.number.message, t.data("validationNumberMessage") && (c = t.data("validationNumberMessage")), t.data("validationNumberMessage", c)), void 0 !== t.attr("type") && "email" === t.attr("type").toLowerCase() && (c = "Not a valid email address<!-- data-validator-validemail-message to override -->", t.data("validationValidemailMessage") ? c = t.data("validationValidemailMessage") : t.data("validationEmailMessage") && (c = t.data("validationEmailMessage")), t.data("validationValidemailMessage", c)), void 0 !== t.attr("minchecked") && (c = "Not enough options checked; Minimum of '" + t.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->", t.data("validationMincheckedMessage") && (c = t.data("validationMincheckedMessage")), t.data("validationMincheckedMessage", c), t.data("validationMincheckedMinchecked", t.attr("minchecked"))), void 0 !== t.attr("maxchecked") && (c = "Too many options checked; Maximum of '" + t.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->", t.data("validationMaxcheckedMessage") && (c = t.data("validationMaxcheckedMessage")), t.data("validationMaxcheckedMessage", c), t.data("validationMaxcheckedMaxchecked", t.attr("maxchecked")));
                    }
                    void 0 !== t.data("validation") && (d = t.data("validation").split(",")), a.each(t.data(), function(a, e) {
                        var t = a.replace(/([A-Z])/g, ",$1").split(",");
                        "validation" === t[0] && t[1] && d.push(t[1]);
                    });
                    var m = d, g = [];
                    do a.each(d, function(a, e) {
                        d[a] = i(e);
                    }), d = a.unique(d), g = [], a.each(m, function(e, n) {
                        if (void 0 !== t.data("validation" + n + "Shortcut")) a.each(t.data("validation" + n + "Shortcut").split(","), function(a, e) {
                            g.push(e);
                        });
                        else if (r.builtInValidators[n.toLowerCase()]) {
                            var o = r.builtInValidators[n.toLowerCase()];
                            "shortcut" === o.type.toLowerCase() && a.each(o.shortcut.split(","), function(a, e) {
                                e = i(e), g.push(e), d.push(e);
                            });
                        }
                    }), m = g;
                    while (m.length > 0);
                    var h = {};
                    a.each(d, function(e, n) {
                        var o = t.data("validation" + n + "Message"), l = void 0 !== o, s = !1;
                        if (o = o || "'" + n + "' validation failed <!-- Add attribute 'data-validation-" + n.toLowerCase() + "-message' to input to change this message -->", a.each(r.validatorTypes, function(e, r) {
                            void 0 === h[e] && (h[e] = []), s || void 0 === t.data("validation" + n + i(r.name)) || (h[e].push(a.extend(!0, {
                                name: i(r.name),
                                message: o
                            }, r.init(t, n))), s = !0);
                        }), !s && r.builtInValidators[n.toLowerCase()]) {
                            var d = a.extend(!0, {}, r.builtInValidators[n.toLowerCase()]);
                            l && (d.message = o);
                            var c = d.type.toLowerCase();
                            "shortcut" === c ? s = !0 : a.each(r.validatorTypes, function(e, o) {
                                void 0 === h[e] && (h[e] = []), s || c !== e.toLowerCase() || (t.data("validation" + n + i(o.name), d[o.name.toLowerCase()]), h[c].push(a.extend(d, o.init(t, n))), s = !0);
                            });
                        }
                        s || a.error("Cannot find validation info for '" + n + "'");
                    }), l.data("original-contents", l.data("original-contents") ? l.data("original-contents") : l.html()), l.data("original-role", l.data("original-role") ? l.data("original-role") : l.attr("role")), o.data("original-classes", o.data("original-clases") ? o.data("original-classes") : o.attr("class")), t.data("original-aria-invalid", t.data("original-aria-invalid") ? t.data("original-aria-invalid") : t.attr("aria-invalid")), t.bind("validation.validation", function(e, i) {
                        var o = n(t), l = [];
                        return a.each(h, function(e, n) {
                            (o || o.length || i && i.includeEmpty || r.validatorTypes[e].blockSubmit && i && i.submitting) && a.each(n, function(a, i) {
                                r.validatorTypes[e].validate(t, o, i) && l.push(i.message);
                            });
                        }), l;
                    }), t.bind("getValidators.validation", function() {
                        return h;
                    }), t.bind("submit.validation", function() {
                        return t.triggerHandler("change.validation", {
                            submitting: !0
                        });
                    }), t.bind([
                        "keyup",
                        "focus",
                        "blur",
                        "click",
                        "keydown",
                        "keypress",
                        "change"
                    ].join(".validation ") + ".validation", function(e, i) {
                        var d = n(t), c = [];
                        o.find("input,textarea,select").each(function(e, n) {
                            var o = c.length;
                            if (a.each(a(n).triggerHandler("validation.validation", i), function(a, e) {
                                c.push(e);
                            }), c.length > o) a(n).attr("aria-invalid", "true");
                            else {
                                var r = t.data("original-aria-invalid");
                                a(n).attr("aria-invalid", void 0 !== r && r);
                            }
                        }), s.find("input,select,textarea").not(t).not('[name="' + t.attr("name") + '"]').trigger("validationLostFocus.validation"), (c = a.unique(c.sort())).length ? (o.removeClass("success error").addClass("warning"), r.options.semanticallyStrict && 1 === c.length ? l.html(c[0] + (r.options.prependExistingHelpBlock ? l.data("original-contents") : "")) : l.html('<ul role="alert"><li>' + c.join("</li><li>") + "</li></ul>" + (r.options.prependExistingHelpBlock ? l.data("original-contents") : ""))) : (o.removeClass("warning error success"), d.length > 0 && o.addClass("success"), l.html(l.data("original-contents"))), "blur" === e.type && o.removeClass("success");
                    }), t.bind("validationLostFocus.validation", function() {
                        o.removeClass("success");
                    });
                });
            },
            destroy: function() {
                return this.each(function() {
                    var t = a(this), i = t.parents(".control-group").first(), n = i.find(".help-block").first();
                    t.unbind(".validation"), n.html(n.data("original-contents")), i.attr("class", i.data("original-classes")), t.attr("aria-invalid", t.data("original-aria-invalid")), n.attr("role", t.data("original-role")), e.indexOf(n[0]) > -1 && n.remove();
                });
            },
            collectErrors: function(e) {
                var t = {};
                return this.each(function(e, i) {
                    var n = a(i), o = n.attr("name"), r = n.triggerHandler("validation.validation", {
                        includeEmpty: !0
                    });
                    t[o] = a.extend(!0, r, t[o]);
                }), a.each(t, function(a, e) {
                    0 === e.length && delete t[a];
                }), t;
            },
            hasErrors: function() {
                var e = [];
                return this.each(function(t, i) {
                    e = e.concat(a(i).triggerHandler("getValidators.validation") ? a(i).triggerHandler("validation.validation", {
                        submitting: !0
                    }) : []);
                }), e.length > 0;
            },
            override: function(e) {
                t = a.extend(!0, t, e);
            }
        },
        validatorTypes: {
            callback: {
                name: "callback",
                init: function(a, e) {
                    return {
                        validatorName: e,
                        callback: a.data("validation" + e + "Callback"),
                        lastValue: a.val(),
                        lastValid: !0,
                        lastFinished: !0
                    };
                },
                validate: function(a, e, t) {
                    if (t.lastValue === e && t.lastFinished) return !t.lastValid;
                    if (!0 === t.lastFinished) {
                        t.lastValue = e, t.lastValid = !0, t.lastFinished = !1;
                        var i = t, n = a;
                        !function(a, e) {
                            for(var t = Array.prototype.slice.call(arguments).splice(2), i = a.split("."), n = i.pop(), o = 0; o < i.length; o++)e = e[i[o]];
                            e[n].apply(this, t);
                        }(t.callback, window, a, e, function(a) {
                            i.lastValue === a.value && (i.lastValid = a.valid, a.message && (i.message = a.message), i.lastFinished = !0, n.data("validation" + i.validatorName + "Message", i.message), setTimeout(function() {
                                n.trigger("change.validation");
                            }, 1));
                        });
                    }
                    return !1;
                }
            },
            ajax: {
                name: "ajax",
                init: function(a, e) {
                    return {
                        validatorName: e,
                        url: a.data("validation" + e + "Ajax"),
                        lastValue: a.val(),
                        lastValid: !0,
                        lastFinished: !0
                    };
                },
                validate: function(e, t, i) {
                    return "" + i.lastValue == "" + t && !0 === i.lastFinished ? !1 === i.lastValid : (!0 === i.lastFinished && (i.lastValue = t, i.lastValid = !0, i.lastFinished = !1, a.ajax({
                        url: i.url,
                        data: "value=" + t + "&field=" + e.attr("name"),
                        dataType: "json",
                        success: function(a) {
                            "" + i.lastValue == "" + a.value && (i.lastValid = !!a.valid, a.message && (i.message = a.message), i.lastFinished = !0, e.data("validation" + i.validatorName + "Message", i.message), setTimeout(function() {
                                e.trigger("change.validation");
                            }, 1));
                        },
                        failure: function() {
                            i.lastValid = !0, i.message = "ajax call failed", i.lastFinished = !0, e.data("validation" + i.validatorName + "Message", i.message), setTimeout(function() {
                                e.trigger("change.validation");
                            }, 1);
                        }
                    })), !1);
                }
            },
            regex: {
                name: "regex",
                init: function(a, e) {
                    var t;
                    return {
                        regex: (t = a.data("validation" + e + "Regex"), new RegExp("^" + t + "$"))
                    };
                },
                validate: function(a, e, t) {
                    return !t.regex.test(e) && !t.negative || t.regex.test(e) && t.negative;
                }
            },
            required: {
                name: "required",
                init: function(a, e) {
                    return {};
                },
                validate: function(a, e, t) {
                    return !(0 !== e.length || t.negative) || !!(e.length > 0 && t.negative);
                },
                blockSubmit: !0
            },
            match: {
                name: "match",
                init: function(a, e) {
                    var t = a.parents("form").first().find('[name="' + a.data("validation" + e + "Match") + '"]').first();
                    return t.bind("validation.validation", function() {
                        a.trigger("change.validation", {
                            submitting: !0
                        });
                    }), {
                        element: t
                    };
                },
                validate: function(a, e, t) {
                    return e !== t.element.val() && !t.negative || e === t.element.val() && t.negative;
                },
                blockSubmit: !0
            },
            max: {
                name: "max",
                init: function(a, e) {
                    return {
                        max: a.data("validation" + e + "Max")
                    };
                },
                validate: function(a, e, t) {
                    return parseFloat(e, 10) > parseFloat(t.max, 10) && !t.negative || parseFloat(e, 10) <= parseFloat(t.max, 10) && t.negative;
                }
            },
            min: {
                name: "min",
                init: function(a, e) {
                    return {
                        min: a.data("validation" + e + "Min")
                    };
                },
                validate: function(a, e, t) {
                    return parseFloat(e) < parseFloat(t.min) && !t.negative || parseFloat(e) >= parseFloat(t.min) && t.negative;
                }
            },
            maxlength: {
                name: "maxlength",
                init: function(a, e) {
                    return {
                        maxlength: a.data("validation" + e + "Maxlength")
                    };
                },
                validate: function(a, e, t) {
                    return e.length > t.maxlength && !t.negative || e.length <= t.maxlength && t.negative;
                }
            },
            minlength: {
                name: "minlength",
                init: function(a, e) {
                    return {
                        minlength: a.data("validation" + e + "Minlength")
                    };
                },
                validate: function(a, e, t) {
                    return e.length < t.minlength && !t.negative || e.length >= t.minlength && t.negative;
                }
            },
            maxchecked: {
                name: "maxchecked",
                init: function(a, e) {
                    var t = a.parents("form").first().find('[name="' + a.attr("name") + '"]');
                    return t.bind("click.validation", function() {
                        a.trigger("change.validation", {
                            includeEmpty: !0
                        });
                    }), {
                        maxchecked: a.data("validation" + e + "Maxchecked"),
                        elements: t
                    };
                },
                validate: function(a, e, t) {
                    return t.elements.filter(":checked").length > t.maxchecked && !t.negative || t.elements.filter(":checked").length <= t.maxchecked && t.negative;
                },
                blockSubmit: !0
            },
            minchecked: {
                name: "minchecked",
                init: function(a, e) {
                    var t = a.parents("form").first().find('[name="' + a.attr("name") + '"]');
                    return t.bind("click.validation", function() {
                        a.trigger("change.validation", {
                            includeEmpty: !0
                        });
                    }), {
                        minchecked: a.data("validation" + e + "Minchecked"),
                        elements: t
                    };
                },
                validate: function(a, e, t) {
                    return t.elements.filter(":checked").length < t.minchecked && !t.negative || t.elements.filter(":checked").length >= t.minchecked && t.negative;
                },
                blockSubmit: !0
            }
        },
        builtInValidators: {
            email: {
                name: "Email",
                type: "shortcut",
                shortcut: "validemail"
            },
            validemail: {
                name: "Validemail",
                type: "regex",
                regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",
                message: "Not a valid email address<!-- data-validator-validemail-message to override -->"
            },
            passwordagain: {
                name: "Passwordagain",
                type: "match",
                match: "password",
                message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
            },
            positive: {
                name: "Positive",
                type: "shortcut",
                shortcut: "number,positivenumber"
            },
            negative: {
                name: "Negative",
                type: "shortcut",
                shortcut: "number,negativenumber"
            },
            number: {
                name: "Number",
                type: "regex",
                regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",
                message: "Must be a number<!-- data-validator-number-message to override -->"
            },
            integer: {
                name: "Integer",
                type: "regex",
                regex: "[+-]?\\d+",
                message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
            },
            positivenumber: {
                name: "Positivenumber",
                type: "min",
                min: 0,
                message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
            },
            negativenumber: {
                name: "Negativenumber",
                type: "max",
                max: 0,
                message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
            },
            required: {
                name: "Required",
                type: "required",
                message: "This is required<!-- data-validator-required-message to override -->"
            },
            checkone: {
                name: "Checkone",
                type: "minchecked",
                minchecked: 1,
                message: "Check at least one option<!-- data-validation-checkone-message to override -->"
            }
        }
    }, i = function(a) {
        return a.toLowerCase().replace(/(^|\s)([a-z])/g, function(a, e, t) {
            return e + t.toUpperCase();
        });
    }, n = function(e) {
        var t = e.val(), i = e.attr("type");
        return "checkbox" === i && (t = e.is(":checked") ? t : ""), "radio" === i && (t = a('input[name="' + e.attr("name") + '"]:checked').length > 0 ? t : ""), t;
    };
    a.fn.jqBootstrapValidation = function(e) {
        return t.methods[e] ? t.methods[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (a.error("Method " + e + " does not exist on jQuery.jqBootstrapValidation"), null) : t.methods.init.apply(this, arguments);
    }, a.jqBootstrapValidation = function(e) {
        a(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments);
    };
}(jQuery);

},{}]},["1uvjH","jpuUO"], "jpuUO", "parcelRequire6b74")

//# sourceMappingURL=index.deb440d4.js.map
