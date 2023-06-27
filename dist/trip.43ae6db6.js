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
})({"7HmYC":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "3abc7e6543ae6db6";
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

},{}],"7Icui":[function(require,module,exports) {
let baseUrl = "https://travel-planner-api-production.up.railway.app";
let Longitude = 0;
let Latitude = 0;
let tripId = 0;
let locations = [];
$(document).ready(function() {
    let TripList = [];
    getAllTrip();
    async function getAllTrip() {
        let response = await fetch(`${baseUrl}/api/v1/tripPrograms`, {
            method: "GET"
        });
        const result = await response.json();
        console.log(result);
        TripList = result.data.data;
        console.log(TripList);
        DisplayData();
    }
    function DisplayData() {
        let temp = "";
        TripList.forEach((el)=>{
            console.log(el);
            temp += `<tr id="${el._id}">
			<td name="name">${el.name}</td>
            <td name="price">${el.price}</td>
			<td name="summary">${el.summary.split(" ").slice(0, 10).join(" ")}</td>
			<td name="description">${el.description.split(" ").slice(0, 10).join(" ")}</td>
            <td name="image">
			<img class="w-100" src="${el.image}"/></td>
            <td name="startLocations">${el.startLocations.address != undefined ? el.startLocations.address : "Address"}</td>
            <td name="locations"><ol>${el.locations.map((location)=>{
                return `<li>${location.address}</li>`;
            })}
			</ol></td>
			<td>
			

			<button class="btn btn-sm btn-success" onClick="addID('${el._id}')" data-toggle="modal" data-target="#Availability">availability</button>
			
			</td>
            <td name="tour">
			<ol>${el.tour.map((tours)=>{
                return `<li>${tours.name}</li>`;
            })}
			</ol></td>

			<td>
				<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
				<a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
				<a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
			</td>
		</tr >
			`;
        });
        document.getElementById("tableBody").innerHTML = temp;
    }
    $('[data-toggle="tooltip"]').tooltip();
    var actions = $("table td:last-child").html();
    // Append table with add row form on add new button click
    let flag = false;
    $(".add-new").click(function() {
        flag = true;
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr><td data="name"><input type="text" class="form-control" name="name" id="name"></td><td data="price"><input type="number" class="form-control" name="price" id="price"></td><td data="summary"><input type="text" class="form-control" name="summary" id="summary"></td><td data="description"><input type="text" class="form-control" name="description" id="description"></td><td data="image" class="custom-file"><input type="file" id="image" name="image" accept="image/*" class="custom-file-input" ><label class="custom-file-label" for="image"></label></td>' + // '<td data="CreatedAt"><input type="text" class="form-control" name="CreatedAt" id="CreatedAt"></td>' +
        // '<td data="ratingsAverage"><input type="text" class="form-control" name="ratingsAverage" id="ratingsAverage"></td>' +
        // '<td data="ratingsQuantity"><input type="text" class="form-control" name="ratingsQuantity" id="ratingsQuantity"></td>' +
        `<td data="startLocations">
			<input type="text" value="test" hidden  class="form-control" name="startLocations" id="startLocations">
			<button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#StartLocations">
					Select Start Location
				</button></td>` + `<td data="locations">
			<input type="text" value="test" hidden  class="form-control" name="locations" id="locations">
			<button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#Locations">
					Select  Location
				</button></td>` + `<td data="availability">
			<button class="btn btn-sm  btn-primary" disabled  id="AvailabilityBtn" data-toggle="modal" data-target="#Availability">availability</button>
			</td>` + '<td data="tour"><input type="text" class="form-control" name="tour" id="tour"></td>' + // '<td data="company"><input type="text" class="form-control" name="company" id="company"></td>' +
        "<td>" + actions + "</td>" + "</tr>";
        $("table").prepend(row);
        $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
    // Add row on add button click
    $(document).on("click", ".add", function() {
        var empty = false;
        var input = $(this).parents("tr").find("input");
        input.each(function() {
            if (!$(this).val()) {
                $(this).addClass("error");
                empty = true;
            } else $(this).removeClass("error");
        });
        $(this).parents("tr").find(".error").first().focus();
        if (!empty) {
            let obj = {};
            let objAvaliable = {};
            let BodyData = new FormData();
            input.each(function() {
                $(this).parent("td").html($(this).val());
                obj[$(this).attr("name")] = $(this).val();
                if ($(this).attr("name") == "startLocations") {
                    let objs = {
                        type: "point",
                        coordinates: [
                            Latitude,
                            Longitude
                        ],
                        address: $("#search-input").val(),
                        description: $("#descriptionInput").val()
                    };
                    obj[$(this).attr("name")] = objs;
                    BodyData.append($(this).attr("name"), JSON.stringify(objs));
                } else if ($(this).attr("name") == "locations") {
                    let objs = [
                        {
                            type: "Point",
                            coordinates: [
                                123.456,
                                78.901
                            ],
                            address: "456 Main Street",
                            description: "A scenic view of the mountains",
                            day: 1
                        },
                        {
                            type: "Point",
                            coordinates: [
                                123.456,
                                78.901
                            ],
                            address: "789 Main Street",
                            description: "A beautiful waterfall",
                            day: 2
                        }
                    ];
                    obj[$(this).attr("name")] = locations;
                    BodyData.append($(this).attr("name"), JSON.stringify(objs));
                } else if ($(this).attr("name") == "tour") {
                    obj[$(this).attr("name")] = [
                        "645045bdb181ce5ba4725617,64555b90413d2d001b9f7277"
                    ];
                    BodyData.append("tour", [
                        "645045bdb181ce5ba4725617,64555b90413d2d001b9f7277"
                    ]);
                } else if ($(this).attr("name") == "availableSeats" || $(this).attr("name") == "startDate" || $(this).attr("name") == "endDate") objAvaliable[$(this).attr("name")] = $(this).val();
                else BodyData.append($(this).attr("name"), $(this).val());
            });
            console.log(obj);
            console.log(objAvaliable);
            if (flag == true) addTour(BodyData, objAvaliable);
            else {
                console.log($(this).parents("tr"));
                EditTour(obj, $(this).parents("tr").attr("id"));
            }
            $(this).parents("tr").find(".add, .edit").toggle();
            $(".add-new").removeAttr("disabled");
        }
    });
    // Edit row on edit button click
    $(document).on("click", ".edit", function() {
        flag = false;
        $(this).parents("tr").find("td:not(:last-child)").each(function() {
            console.log($(this));
            $(this).html('<input type="text" class="form-control" name="' + $(this).attr("name") + '" value="' + $(this).text() + '">');
        });
        $(this).parents("tr").find(".add, .edit").toggle();
        $(".add-new").attr("disabled", "disabled");
    });
    // Delete row on delete button click
    $(document).on("click", ".delete", function() {
        $(this).parents("tr").remove();
        $(".add-new").removeAttr("disabled");
        DeletTour($(this).parents("tr").attr("id"));
    });
    async function addTour(data, objAvaliable) {
        try {
            const response = await fetch(`${baseUrl}/api/v1/tripPrograms`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("Token")}`
                },
                body: data
            });
            const result = await response.json();
            console.log("Success:", result);
            if (result.status == "success") {
                tripId = result.data.data._id;
                $("#AvailabilityBtn").removeAttr("disabled");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    async function addAvaliable(objAvaliable, id) {
        console.log(JSON.stringify(objAvaliable));
        try {
            const response = await fetch(`${baseUrl}/api/v1/availability/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("Token")}`
                },
                body: JSON.stringify(objAvaliable)
            });
            const result = await response.json();
            console.log("Success:", result);
            if (result.status == "success") getAllTrip();
        } catch (error) {
            console.error("Error:", error);
        }
    }
    async function EditTour(data, id) {
        try {
            const response = await fetch(`${baseUrl}/api/v1/tripPrograms/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("Token")}`
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            console.log("Success:", result);
            if (result.status == "success") getAllTrip();
        } catch (error) {
            console.error("Error:", error);
        }
    }
    async function DeletTour(id) {
        try {
            const response = await fetch(`${baseUrl}/api/v1/tripPrograms/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("Token")}`
                }
            });
            if (response.ok) getAllTrip();
        } catch (error) {
            console.error("Error:", error);
        }
    }
    $("#image").on("change", function() {
        //get the file name
        var fileName = $(this).val();
        //replace the "Choose a file" label
        $(this).next(".custom-file-label").html(fileName);
    });
    $("#Addavailability").on("click", function() {
        let objAvaliable = {
            startDate: $("#startDate").val(),
            endDate: $("#endDates").val(),
            availableSeats: $("#availableSeats").val()
        };
        addAvaliable(objAvaliable, tripId);
    });
});
let map;
let marker;
function displayMap() {
    if (!map) {
        map = L.map("map").setView([
            0,
            0
        ], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map);
        map.on("click", function(e) {
            const lat = e.latlng.lat.toFixed(6);
            const lng = e.latlng.lng.toFixed(6);
            console.log(`Latitude: ${lat}, Longitude: ${lng}`);
            displayMarker(e.latlng);
        });
    }
}
function displayMarker(location) {
    if (marker) map.removeLayer(marker);
    marker = L.marker(location).addTo(map);
}
function searchLocation() {
    const searchInput = document.getElementById("search-input").value;
    const searchUrl = `https://nominatim.openstreetmap.org/search/${encodeURIComponent(searchInput)}?format=json`;
    fetch(searchUrl).then((response)=>response.json()).then((data)=>{
        if (data.length > 0) {
            const lat = data[0].lat;
            const lon = data[0].lon;
            Latitude = lat;
            Longitude = lon;
            const location = L.latLng(lat, lon);
            displayMarker(location);
            console.log(`Latitude: ${lat}, Longitude: ${lon}`);
            map.panTo(location);
        } else alert("Location not found");
    }).catch((error)=>{
        console.log(error);
        alert("Error searching location");
    });
}
function addID(id) {
    tripId = id;
}
document.getElementById("search-button").addEventListener("click", searchLocation);
displayMap();
let map2;
let markers2 = [];
function displayMap2() {
    if (!map2) {
        map2 = L.map("map2").setView([
            0,
            0
        ], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map2);
        map2.on("click", function(e) {
            const lat = e.latlng.lat.toFixed(6);
            const lng = e.latlng.lng.toFixed(6);
            if (document.getElementById("search-input2").value) {
                let object = {
                    type: "Point",
                    coordinates: [
                        lat,
                        lng
                    ],
                    address: document.getElementById("search-input2").value,
                    description: $("#descriptionInput2").val(),
                    day: 1
                };
                locations.push(object);
            } else alert("Enter Location Name");
            console.log(`Latitude: ${lat}, Longitude: ${lng}`);
            displayMarker2(e.latlng);
        });
    }
}
function displayMarker2(location) {
    const newMarker = L.marker(location).addTo(map2);
    markers2.push(newMarker);
    newMarker.on("click", function(e) {
        const index = markers2.indexOf(newMarker);
        if (index !== -1) {
            map2.removeLayer(newMarker);
            markers2.splice(index, 1);
            locations.splice(index, 1);
        }
        console.log(locations);
    });
}
function searchLocation2() {
    const searchInput = document.getElementById("search-input2").value;
    const searchUrl = `https://nominatim.openstreetmap.org/search/${encodeURIComponent(searchInput)}?format=json`;
    fetch(searchUrl).then((response)=>response.json()).then((data)=>{
        if (data.length > 0) {
            const lat = data[0].lat;
            const lon = data[0].lon;
            const location = L.latLng(lat, lon);
            let object = {
                type: "Point",
                coordinates: [
                    lat,
                    lon
                ],
                address: searchInput,
                description: $("#descriptionInput2").val(),
                day: 1
            };
            locations.push(object);
            console.log(locations);
            displayMarker2(location);
            console.log(`Latitude: ${lat}, Longitude: ${lon}`);
            map2.panTo(location);
        } else alert("Location not found");
    }).catch((error)=>{
        console.log(error);
        alert("Error searching location");
    });
}
function displayMarker2(location) {
    const newMarker = L.marker(location).addTo(map2);
    markers2.push(newMarker);
    newMarker.location = location; // add a custom property to store the location
    newMarker.on("click", function(e) {
        const index = markers2.indexOf(newMarker);
        if (index !== -1) {
            map2.removeLayer(newMarker);
            markers2.splice(index, 1);
            locations.splice(index, 1);
            console.log(locations);
            console.log(`Removed marker at Latitude: ${newMarker.location.lat}, Longitude: ${newMarker.location.lng}`);
        }
    });
}
document.getElementById("search-button2").addEventListener("click", searchLocation2);
displayMap2();

},{}]},["7HmYC","7Icui"], "7Icui", "parcelRequire6b74")

//# sourceMappingURL=trip.43ae6db6.js.map
