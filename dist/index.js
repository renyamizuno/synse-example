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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _noImplementedError = __webpack_require__(6);

var _noImplementedError2 = _interopRequireDefault(_noImplementedError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AudioNode = function () {
  function AudioNode() {
    _classCallCheck(this, AudioNode);
  }

  _createClass(AudioNode, [{
    key: 'outputConnect',
    value: function outputConnect(outputNode) {
      this.audioNode.connect(outputNode.audioNode);
    }
  }, {
    key: 'audioNode',
    get: function get() {
      throw new _noImplementedError2.default(this, 'audioNode');
    }
  }]);

  return AudioNode;
}();

exports.default = AudioNode;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAudioContext;
var SynseAudioContext = window.AudioContext || window.webkitAudioContext;

function getAudioContext() {
  return window.__synse_audio_context__ || (window.__synse_audio_context__ = new SynseAudioContext());
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _synse = __webpack_require__(3);

var vco = new _synse.VCO();
var vcf = new _synse.VCF();
var vca = new _synse.VCA();
var speaker = new _synse.Speaker();
vco.outputConnect(vcf);
vcf.outputConnect(vca);
vca.outputConnect(speaker);

new _synse.Keyboard(vco, vca);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VCO = exports.VCF = exports.VCA = exports.Speaker = exports.Keyboard = undefined;

var _keyboard = __webpack_require__(4);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _speaker = __webpack_require__(5);

var _speaker2 = _interopRequireDefault(_speaker);

var _vca = __webpack_require__(7);

var _vca2 = _interopRequireDefault(_vca);

var _vcf = __webpack_require__(8);

var _vcf2 = _interopRequireDefault(_vcf);

var _vco = __webpack_require__(9);

var _vco2 = _interopRequireDefault(_vco);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Keyboard = _keyboard2.default;
exports.Speaker = _speaker2.default;
exports.VCA = _vca2.default;
exports.VCF = _vcf2.default;
exports.VCO = _vco2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KEY_ARRAY = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k'];

var keyPushed = function keyPushed(keyMap) {
  var f = false;

  keyMap.forEach(function (k) {
    return f = f || k;
  });
  return f;
};

var Keyboard = function () {
  function Keyboard(targetVCO, targetVCA) {
    var targetDOM = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.document;

    _classCallCheck(this, Keyboard);

    this.baseFrequency = 261.63;
    this.targetDOMNode = targetDOM;
    this.targetVCA = targetVCA;
    this.targetVCO = targetVCO;
    this.targetDOMNode.addEventListener('keypress', this.keypress.bind(this));
    this.targetDOMNode.addEventListener('keyup', this.keyup.bind(this));
    this.keyMap = new Map(KEY_ARRAY.map(function (k) {
      return [k, false];
    }));
    this.watch();
  }

  _createClass(Keyboard, [{
    key: 'watch',
    value: function watch() {
      var _this = this;

      var flag = false;
      var watch = function watch() {
        setTimeout(function () {
          if (keyPushed(_this.keyMap) && !flag) {
            _this.targetVCA.triggerOn();
            flag = true;
          } else if (!keyPushed(_this.keyMap) && flag) {
            _this.targetVCA.triggerOff();
            flag = false;
          }
          watch();
        }, 1);
      };

      watch();
    }
  }, {
    key: 'keypress',
    value: function keypress(e) {
      var key = e.key.toLowerCase();
      var keyPosition = KEY_ARRAY.indexOf(key);

      if (keyPosition >= 0) {
        this.targetVCO.frequency = this.baseFrequency * Math.pow(2, keyPosition / 12);
        this.keyMap.set(key, true);
      }
    }
  }, {
    key: 'keyup',
    value: function keyup(e) {
      var key = e.key.toLowerCase();
      var keyPosition = KEY_ARRAY.indexOf(key);

      if (keyPosition >= 0) {
        this.keyMap.set(key, false);
      }
    }
  }]);

  return Keyboard;
}();

exports.default = Keyboard;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _audioNode = __webpack_require__(0);

var _audioNode2 = _interopRequireDefault(_audioNode);

var _audioContext = __webpack_require__(1);

var _audioContext2 = _interopRequireDefault(_audioContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Speaker = function (_AudioNode) {
  _inherits(Speaker, _AudioNode);

  function Speaker() {
    _classCallCheck(this, Speaker);

    var _this = _possibleConstructorReturn(this, (Speaker.__proto__ || Object.getPrototypeOf(Speaker)).call(this));

    var context = (0, _audioContext2.default)();

    _this.gainNode = context.createGain();
    _this.destination = context.destination;
    _this.gainNode.connect(_this.destination);
    return _this;
  }

  _createClass(Speaker, [{
    key: 'audioNode',
    get: function get() {
      return this.gainNode;
    }
  }, {
    key: 'volume',
    set: function set(value) {
      this.gainNode.gain.value = value;
    },
    get: function get() {
      return this.gainNode.gain.value;
    }
  }]);

  return Speaker;
}(_audioNode2.default);

exports.default = Speaker;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoImplementedError = function (_Error) {
  _inherits(NoImplementedError, _Error);

  function NoImplementedError(self, methodName) {
    _classCallCheck(this, NoImplementedError);

    var _this = _possibleConstructorReturn(this, (NoImplementedError.__proto__ || Object.getPrototypeOf(NoImplementedError)).call(this));

    _this.message = methodName + " is No Implemented for " + self.constructor.name + ".";
    return _this;
  }

  return NoImplementedError;
}(Error);

exports.default = NoImplementedError;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _audioNode = __webpack_require__(0);

var _audioNode2 = _interopRequireDefault(_audioNode);

var _audioContext = __webpack_require__(1);

var _audioContext2 = _interopRequireDefault(_audioContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VCA = function (_AudioNode) {
  _inherits(VCA, _AudioNode);

  function VCA() {
    _classCallCheck(this, VCA);

    var _this = _possibleConstructorReturn(this, (VCA.__proto__ || Object.getPrototypeOf(VCA)).call(this));

    _this.gain = (0, _audioContext2.default)().createGain();
    _this.level = 0;

    _this.attackTime = 100;
    _this.decayTime = 100;
    _this.releaseTime = 100;

    _this.sustainLevel = 0.7;
    return _this;
  }

  _createClass(VCA, [{
    key: 'triggerOn',
    value: function triggerOn() {
      var _this2 = this;

      this.triggerOnTimeStamp = Date.now();
      this.triggerOffTimeStamp = null;

      var push = function push() {
        setTimeout(function () {
          var time = Date.now() - _this2.triggerOnTimeStamp;
          var subtractionTime = time - _this2.attackTime;

          if (!_this2.triggerOffTimeStamp) {
            if (_this2.attackTime > time) {
              _this2.level = _this2.maxLevel * (time / _this2.attackTime);
            } else if (_this2.decayTime > subtractionTime) {
              _this2.level = _this2.maxLevel - (_this2.maxLevel - _this2.sustainLevel) * (subtractionTime / _this2.decayTime);
            } else {
              _this2.level = _this2.sustainLevel;
            }
            push();
          }
        }, 1);
      };

      push();
    }
  }, {
    key: 'triggerOff',
    value: function triggerOff() {
      var _this3 = this;

      this.triggerOnTimeStamp = null;
      this.triggerOffTimeStamp = Date.now();
      var nowLevel = this.level;

      var relese = function relese() {
        setTimeout(function () {
          var time = Date.now() - _this3.triggerOffTimeStamp;

          _this3.level = nowLevel - nowLevel * (time / _this3.releaseTime);
          if (!_this3.triggerOnTimeStamp) {
            if (_this3.releaseTime < time || _this3.level === 0) {
              _this3.level = 0;
            } else {
              relese();
            }
          }
        }, 1);
      };

      relese();
    }
  }, {
    key: 'audioNode',
    get: function get() {
      return this.gain;
    }
  }, {
    key: 'maxLevel',
    get: function get() {
      return 1;
    }
  }, {
    key: 'minLevel',
    get: function get() {
      return 0;
    }
  }, {
    key: 'level',
    get: function get() {
      return this.gain.gain.value;
    },
    set: function set(level) {
      var fixLevel = Math.max(Math.min(level, this.maxLevel), this.minLevel);

      this.gain.gain.value = fixLevel;
    }
  }]);

  return VCA;
}(_audioNode2.default);

exports.default = VCA;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _audioNode = __webpack_require__(0);

var _audioNode2 = _interopRequireDefault(_audioNode);

var _audioContext = __webpack_require__(1);

var _audioContext2 = _interopRequireDefault(_audioContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VCF = function (_AudioNode) {
  _inherits(VCF, _AudioNode);

  function VCF() {
    _classCallCheck(this, VCF);

    var _this = _possibleConstructorReturn(this, (VCF.__proto__ || Object.getPrototypeOf(VCF)).call(this));

    _this.lowpass = (0, _audioContext2.default)().createBiquadFilter();
    _this.highpass = (0, _audioContext2.default)().createBiquadFilter();

    _this.highpass.type = 'highpass';

    _this.lowpass.frequency.value = _this.lowpass.frequency.maxValue;
    _this.highpass.frequency.value = _this.highpass.frequency.minValue;

    _this.highpass.connect(_this.lowpass);
    return _this;
  }

  _createClass(VCF, [{
    key: 'outputConnect',
    value: function outputConnect(outputNode) {
      this.lowpass.connect(outputNode.audioNode);
    }
  }, {
    key: 'audioNode',
    get: function get() {
      return this.highpass;
    }
  }, {
    key: 'highpassFrequency',
    set: function set(f) {
      this.highpass.frequency.value = f;
    },
    get: function get() {
      return this.highpass.frequency.value;
    }
  }, {
    key: 'lowpassFrequency',
    set: function set(f) {
      this.lowpass.frequency.value = f;
    },
    get: function get() {
      return this.lowpass.frequency.value;
    }
  }]);

  return VCF;
}(_audioNode2.default);

exports.default = VCF;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _audioNode = __webpack_require__(0);

var _audioNode2 = _interopRequireDefault(_audioNode);

var _audioContext = __webpack_require__(1);

var _audioContext2 = _interopRequireDefault(_audioContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VCO = function (_AudioNode) {
  _inherits(VCO, _AudioNode);

  _createClass(VCO, null, [{
    key: 'waveTypes',
    get: function get() {
      return {
        sine: 'sine',
        square: 'square',
        sawtooth: 'sawtooth',
        triangle: 'triangle'
      };
    }
  }]);

  function VCO() {
    _classCallCheck(this, VCO);

    var _this = _possibleConstructorReturn(this, (VCO.__proto__ || Object.getPrototypeOf(VCO)).call(this));

    _this.oscillator = (0, _audioContext2.default)().createOscillator();
    _this.oscillator.start();
    return _this;
  }

  _createClass(VCO, [{
    key: 'audioNode',
    get: function get() {
      return this.oscillator;
    }
  }, {
    key: 'frequency',
    set: function set(value) {
      this.oscillator.frequency.value = value;
    },
    get: function get() {
      return this.oscillator.frequency.value;
    }
  }, {
    key: 'waveType',
    set: function set(waveType) {
      this.oscillator.type = waveType;
    },
    get: function get() {
      return this.oscillator.type;
    }
  }]);

  return VCO;
}(_audioNode2.default);

exports.default = VCO;

/***/ })
/******/ ]);