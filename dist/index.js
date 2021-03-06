/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _synse = __webpack_require__(1);

var startButton = document.querySelector('.js-start-button');

startButton.addEventListener('click', function () {
  // create synthesizer!
  var vco = new _synse.VCO();
  var vcf = new _synse.VCF();
  var vca = new _synse.VCA();
  var speaker = new _synse.Speaker();
  vco.outputConnect(vcf);
  vcf.outputConnect(vca);
  vca.outputConnect(speaker);

  new _synse.Keyboard(vco, vca);

  // init controllers.
  var waveTypeSelect = document.querySelector('.js-oscillator-wave-type');
  var magnification = document.querySelector('.js-oscillator-magnification');
  var lowpass = document.querySelector('.js-low-pass');
  var highpass = document.querySelector('.js-high-pass');
  var attackTime = document.querySelector('.js-attack-time');
  var decayTime = document.querySelector('.js-decay-time');
  var sustainLevel = document.querySelector('.js-sustain-level');
  var releaseTime = document.querySelector('.js-release-time');
  var volume = document.querySelector('.js-volume');

  Object.values(_synse.VCO.waveTypes).forEach(function (w) {
    var o = document.createElement('option');
    o.value = w;
    o.text = w;
    if (w === vco.waveType) {
      o.selected = true;
    }
    waveTypeSelect.appendChild(o);
  });

  magnification.value = vco.magnification;
  lowpass.value = vcf.lowpassFrequency;
  highpass.value = vcf.highpassFrequency;
  attackTime.value = vca.attackTime;
  decayTime.value = vca.decayTime;
  sustainLevel.value = vca.sustainLevel;
  releaseTime.value = vca.releaseTime;
  volume.value = speaker.volume;

  waveTypeSelect.addEventListener('change', function (e) {
    vco.waveType = e.target.value;
  });

  magnification.addEventListener('change', function (e) {
    vco.magnification = Number.parseInt(e.target.value, 10);
  });

  lowpass.addEventListener('change', function (e) {
    vcf.lowpassFrequency = e.target.value;
  });

  highpass.addEventListener('change', function (e) {
    vcf.highpassFrequency = e.target.value;
  });

  attackTime.addEventListener('change', function (e) {
    vca.attackTime = e.target.value;
  });

  decayTime.addEventListener('change', function (e) {
    vca.decayTime = e.target.value;
  });

  sustainLevel.addEventListener('change', function (e) {
    vca.sustainLevel = e.target.value;
  });

  releaseTime.addEventListener('change', function (e) {
    vca.releaseTime = e.target.value;
  });

  volume.addEventListener('change', function (e) {
    speaker.volume = e.target.value;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.synse=e():t.synse=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var i=["a","w","s","e","d","f","t","g","y","h","u","j","k"],u=function(t){var e=!1;return t.forEach((function(t){return e=e||t})),e},c=function(){function t(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.document;r(this,t),this.baseFrequency=261.63,this.targetDOMNode=o,this.targetVCA=n,this.targetVCO=e,this.targetDOMNode.addEventListener("keypress",this.keypress.bind(this)),this.targetDOMNode.addEventListener("keyup",this.keyup.bind(this)),this.keyMap=new Map(i.map((function(t){return[t,!1]}))),this.watch()}var e,n,c;return e=t,(n=[{key:"watch",value:function(){var t=this,e=!1,n=function n(){setTimeout((function(){u(t.keyMap)&&!e?(t.targetVCA.triggerOn(),e=!0):!u(t.keyMap)&&e&&(t.targetVCA.triggerOff(),e=!1),n()}),1)};n()}},{key:"keypress",value:function(t){var e=t.key.toLowerCase(),n=i.indexOf(e);n>=0&&(this.targetVCO.frequency=this.baseFrequency*Math.pow(2,n/12),this.keyMap.set(e,!0))}},{key:"keyup",value:function(t){var e=t.key.toLowerCase();i.indexOf(e)>=0&&this.keyMap.set(e,!1)}}])&&o(e.prototype,n),c&&o(e,c),t}();function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return s(t,arguments,h(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),y(r,t)})(t)}function s(t,e,n){return(s=p()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&y(o,n.prototype),o}).apply(null,arguments)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(o,t);var e,n,r=(e=o,n=p(),function(){var t,r=h(e);if(n){var o=h(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return f(this,t)});function o(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(n=r.call(this)).message="".concat(e," is No Implemented for ").concat(t.constructor.name,"."),n}return o}(l(Error));function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var g=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"outputConnect",value:function(t){this.audioNode.connect(t.audioNode)}},{key:"audioNode",get:function(){throw new b(this,"audioNode")}}])&&v(e.prototype,n),r&&v(e,r),t}(),m=window.AudioContext||window.webkitAudioContext,d=null;function w(){return d||(d=new m)}function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=T(t);if(e){var o=T(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(i,t);var e,n,r,o=k(i);function i(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),t=o.call(this);var e=w();return t.gainNode=e.createGain(),t.destination=e.destination,t.gainNode.connect(t.destination),t}return e=i,(n=[{key:"audioNode",get:function(){return this.gainNode}},{key:"volume",set:function(t){this.gainNode.gain.value=t},get:function(){return this.gainNode.gain.value}}])&&S(e.prototype,n),r&&S(e,r),i}(g);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=q(t);if(e){var o=q(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return C(this,n)}}function C(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(i,t);var e,n,r,o=M(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).gain=w().createGain(),t.level=0,t.attackTime=100,t.decayTime=100,t.releaseTime=100,t.sustainLevel=.7,t}return e=i,(n=[{key:"triggerOn",value:function(){var t=this;this.triggerOnTimeStamp=Date.now(),this.triggerOffTimeStamp=null,function e(){setTimeout((function(){var n=Date.now()-t.triggerOnTimeStamp,r=n-t.attackTime;t.triggerOffTimeStamp||(t.attackTime>n?t.level=t.maxLevel*(n/t.attackTime):t.decayTime>r?t.level=t.maxLevel-(t.maxLevel-t.sustainLevel)*(r/t.decayTime):t.level=t.sustainLevel,e())}),1)}()}},{key:"triggerOff",value:function(){var t=this;this.triggerOnTimeStamp=null,this.triggerOffTimeStamp=Date.now();var e=this.level;!function n(){setTimeout((function(){var r=Date.now()-t.triggerOffTimeStamp;t.level=e-e*(r/t.releaseTime),t.triggerOnTimeStamp||(t.releaseTime<r||0===t.level?t.level=0:n())}),1)}()}},{key:"audioNode",get:function(){return this.gain}},{key:"maxLevel",get:function(){return 1}},{key:"minLevel",get:function(){return 0}},{key:"level",get:function(){return this.gain.gain.value},set:function(t){var e=Math.max(Math.min(t,this.maxLevel),this.minLevel);this.gain.gain.value=e}}])&&R(e.prototype,n),r&&R(e,r),i}(g);function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function F(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=B(t);if(e){var o=B(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return A(this,n)}}function A(t,e){return!e||"object"!==D(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function B(t){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var G=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(i,t);var e,n,r,o=F(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).lowpass=w().createBiquadFilter(),t.highpass=w().createBiquadFilter(),t.highpass.type="highpass",t.lowpass.frequency.value=t.lowpass.frequency.maxValue,t.highpass.frequency.value=t.highpass.frequency.minValue,t.highpass.connect(t.lowpass),t}return e=i,(n=[{key:"outputConnect",value:function(t){this.lowpass.connect(t.audioNode)}},{key:"audioNode",get:function(){return this.highpass}},{key:"highpassFrequency",set:function(t){this.highpass.frequency.value=t},get:function(){return this.highpass.frequency.value}},{key:"lowpassFrequency",set:function(t){this.lowpass.frequency.value=t},get:function(){return this.lowpass.frequency.value}}])&&L(e.prototype,n),r&&L(e,r),i}(g);function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function K(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function z(t,e,n){return e&&K(t.prototype,e),n&&K(t,n),t}function H(t,e){return(H=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=U(t);if(e){var o=U(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Q(this,n)}}function Q(t,e){return!e||"object"!==I(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function U(t){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&H(t,e)}(n,t);var e=J(n);function n(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(t=e.call(this)).oscillator=w().createOscillator(),t.oscillatorMagnification=1,t.oscillator.start(),t}return z(n,null,[{key:"waveTypes",get:function(){return{sine:"sine",square:"square",sawtooth:"sawtooth",triangle:"triangle"}}}]),z(n,[{key:"magnification",set:function(t){this.oscillatorMagnification=Math.max(Number.parseInt(t,10),1)},get:function(){return this.oscillatorMagnification}},{key:"audioNode",get:function(){return this.oscillator}},{key:"frequency",set:function(t){this.oscillator.frequency.value=t*this.magnification},get:function(){return this.oscillator.frequency.value}},{key:"waveType",set:function(t){this.oscillator.type=t},get:function(){return this.oscillator.type}}]),n}(g);e.default={Keyboard:c,Speaker:P,VCA:N,VCF:G,VCO:W}}]).default}));

/***/ })
/******/ ]);