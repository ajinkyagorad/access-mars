(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (process){(function (){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * The Ease class provides a collection of easing functions for use with tween.js.
 */
var Easing = {
    Linear: {
        None: function (amount) {
            return amount;
        },
    },
    Quadratic: {
        In: function (amount) {
            return amount * amount;
        },
        Out: function (amount) {
            return amount * (2 - amount);
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount;
            }
            return -0.5 * (--amount * (amount - 2) - 1);
        },
    },
    Cubic: {
        In: function (amount) {
            return amount * amount * amount;
        },
        Out: function (amount) {
            return --amount * amount * amount + 1;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount + 2);
        },
    },
    Quartic: {
        In: function (amount) {
            return amount * amount * amount * amount;
        },
        Out: function (amount) {
            return 1 - --amount * amount * amount * amount;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount;
            }
            return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
        },
    },
    Quintic: {
        In: function (amount) {
            return amount * amount * amount * amount * amount;
        },
        Out: function (amount) {
            return --amount * amount * amount * amount * amount + 1;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
        },
    },
    Sinusoidal: {
        In: function (amount) {
            return 1 - Math.cos((amount * Math.PI) / 2);
        },
        Out: function (amount) {
            return Math.sin((amount * Math.PI) / 2);
        },
        InOut: function (amount) {
            return 0.5 * (1 - Math.cos(Math.PI * amount));
        },
    },
    Exponential: {
        In: function (amount) {
            return amount === 0 ? 0 : Math.pow(1024, amount - 1);
        },
        Out: function (amount) {
            return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
        },
        InOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            if ((amount *= 2) < 1) {
                return 0.5 * Math.pow(1024, amount - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
        },
    },
    Circular: {
        In: function (amount) {
            return 1 - Math.sqrt(1 - amount * amount);
        },
        Out: function (amount) {
            return Math.sqrt(1 - --amount * amount);
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
        },
    },
    Elastic: {
        In: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
        },
        Out: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            amount *= 2;
            if (amount < 1) {
                return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
            }
            return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
        },
    },
    Back: {
        In: function (amount) {
            var s = 1.70158;
            return amount * amount * ((s + 1) * amount - s);
        },
        Out: function (amount) {
            var s = 1.70158;
            return --amount * amount * ((s + 1) * amount + s) + 1;
        },
        InOut: function (amount) {
            var s = 1.70158 * 1.525;
            if ((amount *= 2) < 1) {
                return 0.5 * (amount * amount * ((s + 1) * amount - s));
            }
            return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
        },
    },
    Bounce: {
        In: function (amount) {
            return 1 - Easing.Bounce.Out(1 - amount);
        },
        Out: function (amount) {
            if (amount < 1 / 2.75) {
                return 7.5625 * amount * amount;
            }
            else if (amount < 2 / 2.75) {
                return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
            }
            else if (amount < 2.5 / 2.75) {
                return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
            }
            else {
                return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
            }
        },
        InOut: function (amount) {
            if (amount < 0.5) {
                return Easing.Bounce.In(amount * 2) * 0.5;
            }
            return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
        },
    },
};

var now;
// Include a performance.now polyfill.
// In node.js, use process.hrtime.
// eslint-disable-next-line
// @ts-ignore
if (typeof self === 'undefined' && typeof process !== 'undefined' && process.hrtime) {
    now = function () {
        // eslint-disable-next-line
        // @ts-ignore
        var time = process.hrtime();
        // Convert [seconds, nanoseconds] to milliseconds.
        return time[0] * 1000 + time[1] / 1000000;
    };
}
// In a browser, use self.performance.now if it is available.
else if (typeof self !== 'undefined' && self.performance !== undefined && self.performance.now !== undefined) {
    // This must be bound, because directly assigning this function
    // leads to an invocation exception in Chrome.
    now = self.performance.now.bind(self.performance);
}
// Use Date.now if it is available.
else if (Date.now !== undefined) {
    now = Date.now;
}
// Otherwise, use 'new Date().getTime()'.
else {
    now = function () {
        return new Date().getTime();
    };
}
var now$1 = now;

/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tween
 */
var Group = /** @class */ (function () {
    function Group() {
        this._tweens = {};
        this._tweensAddedDuringUpdate = {};
    }
    Group.prototype.getAll = function () {
        var _this = this;
        return Object.keys(this._tweens).map(function (tweenId) {
            return _this._tweens[tweenId];
        });
    };
    Group.prototype.removeAll = function () {
        this._tweens = {};
    };
    Group.prototype.add = function (tween) {
        this._tweens[tween.getId()] = tween;
        this._tweensAddedDuringUpdate[tween.getId()] = tween;
    };
    Group.prototype.remove = function (tween) {
        delete this._tweens[tween.getId()];
        delete this._tweensAddedDuringUpdate[tween.getId()];
    };
    Group.prototype.update = function (time, preserve) {
        if (time === void 0) { time = now$1(); }
        if (preserve === void 0) { preserve = false; }
        var tweenIds = Object.keys(this._tweens);
        if (tweenIds.length === 0) {
            return false;
        }
        // Tweens are updated in "batches". If you add a new tween during an
        // update, then the new tween will be updated in the next batch.
        // If you remove a tween during an update, it may or may not be updated.
        // However, if the removed tween was added during the current batch,
        // then it will not be updated.
        while (tweenIds.length > 0) {
            this._tweensAddedDuringUpdate = {};
            for (var i = 0; i < tweenIds.length; i++) {
                var tween = this._tweens[tweenIds[i]];
                var autoStart = !preserve;
                if (tween && tween.update(time, autoStart) === false && !preserve) {
                    delete this._tweens[tweenIds[i]];
                }
            }
            tweenIds = Object.keys(this._tweensAddedDuringUpdate);
        }
        return true;
    };
    return Group;
}());

/**
 *
 */
var Interpolation = {
    Linear: function (v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.Linear;
        if (k < 0) {
            return fn(v[0], v[1], f);
        }
        if (k > 1) {
            return fn(v[m], v[m - 1], m - f);
        }
        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    Bezier: function (v, k) {
        var b = 0;
        var n = v.length - 1;
        var pw = Math.pow;
        var bn = Interpolation.Utils.Bernstein;
        for (var i = 0; i <= n; i++) {
            b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
        }
        return b;
    },
    CatmullRom: function (v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.CatmullRom;
        if (v[0] === v[m]) {
            if (k < 0) {
                i = Math.floor((f = m * (1 + k)));
            }
            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
        }
        else {
            if (k < 0) {
                return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
            }
            if (k > 1) {
                return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
            }
            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
        }
    },
    Utils: {
        Linear: function (p0, p1, t) {
            return (p1 - p0) * t + p0;
        },
        Bernstein: function (n, i) {
            var fc = Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: (function () {
            var a = [1];
            return function (n) {
                var s = 1;
                if (a[n]) {
                    return a[n];
                }
                for (var i = n; i > 1; i--) {
                    s *= i;
                }
                a[n] = s;
                return s;
            };
        })(),
        CatmullRom: function (p0, p1, p2, p3, t) {
            var v0 = (p2 - p0) * 0.5;
            var v1 = (p3 - p1) * 0.5;
            var t2 = t * t;
            var t3 = t * t2;
            return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
        },
    },
};

/**
 * Utils
 */
var Sequence = /** @class */ (function () {
    function Sequence() {
    }
    Sequence.nextId = function () {
        return Sequence._nextId++;
    };
    Sequence._nextId = 0;
    return Sequence;
}());

var mainGroup = new Group();

/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */
var Tween = /** @class */ (function () {
    function Tween(_object, _group) {
        if (_group === void 0) { _group = mainGroup; }
        this._object = _object;
        this._group = _group;
        this._isPaused = false;
        this._pauseStart = 0;
        this._valuesStart = {};
        this._valuesEnd = {};
        this._valuesStartRepeat = {};
        this._duration = 1000;
        this._initialRepeat = 0;
        this._repeat = 0;
        this._yoyo = false;
        this._isPlaying = false;
        this._reversed = false;
        this._delayTime = 0;
        this._startTime = 0;
        this._easingFunction = Easing.Linear.None;
        this._interpolationFunction = Interpolation.Linear;
        this._chainedTweens = [];
        this._onStartCallbackFired = false;
        this._id = Sequence.nextId();
        this._isChainStopped = false;
        this._goToEnd = false;
    }
    Tween.prototype.getId = function () {
        return this._id;
    };
    Tween.prototype.isPlaying = function () {
        return this._isPlaying;
    };
    Tween.prototype.isPaused = function () {
        return this._isPaused;
    };
    Tween.prototype.to = function (properties, duration) {
        // TODO? restore this, then update the 07_dynamic_to example to set fox
        // tween's to on each update. That way the behavior is opt-in (there's
        // currently no opt-out).
        // for (const prop in properties) this._valuesEnd[prop] = properties[prop]
        this._valuesEnd = Object.create(properties);
        if (duration !== undefined) {
            this._duration = duration;
        }
        return this;
    };
    Tween.prototype.duration = function (d) {
        this._duration = d;
        return this;
    };
    Tween.prototype.start = function (time) {
        if (this._isPlaying) {
            return this;
        }
        // eslint-disable-next-line
        this._group && this._group.add(this);
        this._repeat = this._initialRepeat;
        if (this._reversed) {
            // If we were reversed (f.e. using the yoyo feature) then we need to
            // flip the tween direction back to forward.
            this._reversed = false;
            for (var property in this._valuesStartRepeat) {
                this._swapEndStartRepeatValues(property);
                this._valuesStart[property] = this._valuesStartRepeat[property];
            }
        }
        this._isPlaying = true;
        this._isPaused = false;
        this._onStartCallbackFired = false;
        this._isChainStopped = false;
        this._startTime = time !== undefined ? (typeof time === 'string' ? now$1() + parseFloat(time) : time) : now$1();
        this._startTime += this._delayTime;
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat);
        return this;
    };
    Tween.prototype._setupProperties = function (_object, _valuesStart, _valuesEnd, _valuesStartRepeat) {
        for (var property in _valuesEnd) {
            var startValue = _object[property];
            var startValueIsArray = Array.isArray(startValue);
            var propType = startValueIsArray ? 'array' : typeof startValue;
            var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
            // If `to()` specifies a property that doesn't exist in the source object,
            // we should not set that property in the object
            if (propType === 'undefined' || propType === 'function') {
                continue;
            }
            // Check if an Array was provided as property value
            if (isInterpolationList) {
                var endValues = _valuesEnd[property];
                if (endValues.length === 0) {
                    continue;
                }
                // handle an array of relative values
                endValues = endValues.map(this._handleRelativeValue.bind(this, startValue));
                // Create a local copy of the Array with the start value at the front
                _valuesEnd[property] = [startValue].concat(endValues);
            }
            // handle the deepness of the values
            if ((propType === 'object' || startValueIsArray) && startValue && !isInterpolationList) {
                _valuesStart[property] = startValueIsArray ? [] : {};
                // eslint-disable-next-line
                for (var prop in startValue) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property][prop] = startValue[prop];
                }
                _valuesStartRepeat[property] = startValueIsArray ? [] : {}; // TODO? repeat nested values? And yoyo? And array values?
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._setupProperties(startValue, _valuesStart[property], _valuesEnd[property], _valuesStartRepeat[property]);
            }
            else {
                // Save the starting value, but only once.
                if (typeof _valuesStart[property] === 'undefined') {
                    _valuesStart[property] = startValue;
                }
                if (!startValueIsArray) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
                }
                if (isInterpolationList) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
                }
                else {
                    _valuesStartRepeat[property] = _valuesStart[property] || 0;
                }
            }
        }
    };
    Tween.prototype.stop = function () {
        if (!this._isChainStopped) {
            this._isChainStopped = true;
            this.stopChainedTweens();
        }
        if (!this._isPlaying) {
            return this;
        }
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        this._isPlaying = false;
        this._isPaused = false;
        if (this._onStopCallback) {
            this._onStopCallback(this._object);
        }
        return this;
    };
    Tween.prototype.end = function () {
        this._goToEnd = true;
        this.update(Infinity);
        return this;
    };
    Tween.prototype.pause = function (time) {
        if (time === void 0) { time = now$1(); }
        if (this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = true;
        this._pauseStart = time;
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        return this;
    };
    Tween.prototype.resume = function (time) {
        if (time === void 0) { time = now$1(); }
        if (!this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = false;
        this._startTime += time - this._pauseStart;
        this._pauseStart = 0;
        // eslint-disable-next-line
        this._group && this._group.add(this);
        return this;
    };
    Tween.prototype.stopChainedTweens = function () {
        for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            this._chainedTweens[i].stop();
        }
        return this;
    };
    Tween.prototype.group = function (group) {
        this._group = group;
        return this;
    };
    Tween.prototype.delay = function (amount) {
        this._delayTime = amount;
        return this;
    };
    Tween.prototype.repeat = function (times) {
        this._initialRepeat = times;
        this._repeat = times;
        return this;
    };
    Tween.prototype.repeatDelay = function (amount) {
        this._repeatDelayTime = amount;
        return this;
    };
    Tween.prototype.yoyo = function (yoyo) {
        this._yoyo = yoyo;
        return this;
    };
    Tween.prototype.easing = function (easingFunction) {
        this._easingFunction = easingFunction;
        return this;
    };
    Tween.prototype.interpolation = function (interpolationFunction) {
        this._interpolationFunction = interpolationFunction;
        return this;
    };
    Tween.prototype.chain = function () {
        var tweens = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tweens[_i] = arguments[_i];
        }
        this._chainedTweens = tweens;
        return this;
    };
    Tween.prototype.onStart = function (callback) {
        this._onStartCallback = callback;
        return this;
    };
    Tween.prototype.onUpdate = function (callback) {
        this._onUpdateCallback = callback;
        return this;
    };
    Tween.prototype.onRepeat = function (callback) {
        this._onRepeatCallback = callback;
        return this;
    };
    Tween.prototype.onComplete = function (callback) {
        this._onCompleteCallback = callback;
        return this;
    };
    Tween.prototype.onStop = function (callback) {
        this._onStopCallback = callback;
        return this;
    };
    /**
     * @returns true if the tween is still playing after the update, false
     * otherwise (calling update on a paused tween still returns true because
     * it is still playing, just paused).
     */
    Tween.prototype.update = function (time, autoStart) {
        if (time === void 0) { time = now$1(); }
        if (autoStart === void 0) { autoStart = true; }
        if (this._isPaused)
            return true;
        var property;
        var elapsed;
        var endTime = this._startTime + this._duration;
        if (!this._goToEnd && !this._isPlaying) {
            if (time > endTime)
                return false;
            if (autoStart)
                this.start(time);
        }
        this._goToEnd = false;
        if (time < this._startTime) {
            return true;
        }
        if (this._onStartCallbackFired === false) {
            if (this._onStartCallback) {
                this._onStartCallback(this._object);
            }
            this._onStartCallbackFired = true;
        }
        elapsed = (time - this._startTime) / this._duration;
        elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
        var value = this._easingFunction(elapsed);
        // properties transformations
        this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
        if (this._onUpdateCallback) {
            this._onUpdateCallback(this._object, elapsed);
        }
        if (elapsed === 1) {
            if (this._repeat > 0) {
                if (isFinite(this._repeat)) {
                    this._repeat--;
                }
                // Reassign starting values, restart by making startTime = now
                for (property in this._valuesStartRepeat) {
                    if (!this._yoyo && typeof this._valuesEnd[property] === 'string') {
                        this._valuesStartRepeat[property] =
                            // eslint-disable-next-line
                            // @ts-ignore FIXME?
                            this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                    }
                    if (this._yoyo) {
                        this._swapEndStartRepeatValues(property);
                    }
                    this._valuesStart[property] = this._valuesStartRepeat[property];
                }
                if (this._yoyo) {
                    this._reversed = !this._reversed;
                }
                if (this._repeatDelayTime !== undefined) {
                    this._startTime = time + this._repeatDelayTime;
                }
                else {
                    this._startTime = time + this._delayTime;
                }
                if (this._onRepeatCallback) {
                    this._onRepeatCallback(this._object);
                }
                return true;
            }
            else {
                if (this._onCompleteCallback) {
                    this._onCompleteCallback(this._object);
                }
                for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                    // Make the chained tweens start exactly at the time they should,
                    // even if the `update()` method was called way past the duration of the tween
                    this._chainedTweens[i].start(this._startTime + this._duration);
                }
                this._isPlaying = false;
                return false;
            }
        }
        return true;
    };
    Tween.prototype._updateProperties = function (_object, _valuesStart, _valuesEnd, value) {
        for (var property in _valuesEnd) {
            // Don't update properties that do not exist in the source object
            if (_valuesStart[property] === undefined) {
                continue;
            }
            var start = _valuesStart[property] || 0;
            var end = _valuesEnd[property];
            var startIsArray = Array.isArray(_object[property]);
            var endIsArray = Array.isArray(end);
            var isInterpolationList = !startIsArray && endIsArray;
            if (isInterpolationList) {
                _object[property] = this._interpolationFunction(end, value);
            }
            else if (typeof end === 'object' && end) {
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._updateProperties(_object[property], start, end, value);
            }
            else {
                // Parses relative end values with start as base (e.g.: +10, -3)
                end = this._handleRelativeValue(start, end);
                // Protect against non numeric properties.
                if (typeof end === 'number') {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _object[property] = start + (end - start) * value;
                }
            }
        }
    };
    Tween.prototype._handleRelativeValue = function (start, end) {
        if (typeof end !== 'string') {
            return end;
        }
        if (end.charAt(0) === '+' || end.charAt(0) === '-') {
            return start + parseFloat(end);
        }
        else {
            return parseFloat(end);
        }
    };
    Tween.prototype._swapEndStartRepeatValues = function (property) {
        var tmp = this._valuesStartRepeat[property];
        var endValue = this._valuesEnd[property];
        if (typeof endValue === 'string') {
            this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
        }
        else {
            this._valuesStartRepeat[property] = this._valuesEnd[property];
        }
        this._valuesEnd[property] = tmp;
    };
    return Tween;
}());

var VERSION = '18.6.4';

/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */
var nextId = Sequence.nextId;
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tweens.
 */
var TWEEN = mainGroup;
// This is the best way to export things in a way that's compatible with both ES
// Modules and CommonJS, without build hacks, and so as not to break the
// existing API.
// https://github.com/rollup/rollup/issues/1961#issuecomment-423037881
var getAll = TWEEN.getAll.bind(TWEEN);
var removeAll = TWEEN.removeAll.bind(TWEEN);
var add = TWEEN.add.bind(TWEEN);
var remove = TWEEN.remove.bind(TWEEN);
var update = TWEEN.update.bind(TWEEN);
var exports$1 = {
    Easing: Easing,
    Group: Group,
    Interpolation: Interpolation,
    now: now$1,
    Sequence: Sequence,
    nextId: nextId,
    Tween: Tween,
    VERSION: VERSION,
    getAll: getAll,
    removeAll: removeAll,
    add: add,
    remove: remove,
    update: update,
};

exports.Easing = Easing;
exports.Group = Group;
exports.Interpolation = Interpolation;
exports.Sequence = Sequence;
exports.Tween = Tween;
exports.VERSION = VERSION;
exports.add = add;
exports.default = exports$1;
exports.getAll = getAll;
exports.nextId = nextId;
exports.now = now$1;
exports.remove = remove;
exports.removeAll = removeAll;
exports.update = update;

}).call(this)}).call(this,require('_process'))
},{"_process":135}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":17}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":18}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":19}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":20}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":21}],7:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":3}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, descs) {
  for (var key in descs) {
    var desc = descs[key];
    desc.configurable = desc.enumerable = true;
    if ("value" in desc) desc.writable = true;
    (0, _defineProperty2.default)(obj, key, desc);
  }

  return obj;
};
},{"../core-js/object/define-property":3}],10:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":2,"../core-js/object/set-prototype-of":4,"../helpers/typeof":12}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":12}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":5,"../core-js/symbol/iterator":6}],13:[function(require,module,exports){
/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  if (mX1 !== mY1 || mX2 !== mY2) {
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x; // linear
    }
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};

},{}],14:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var objectCreate = Object.create || objectCreatePolyfill
var objectKeys = Object.keys || objectKeysPolyfill
var bind = Function.prototype.bind || functionBindPolyfill

function EventEmitter() {
  if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
    this._events = objectCreate(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

var hasDefineProperty;
try {
  var o = {};
  if (Object.defineProperty) Object.defineProperty(o, 'x', { value: 0 });
  hasDefineProperty = o.x === 0;
} catch (err) { hasDefineProperty = false }
if (hasDefineProperty) {
  Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      // check whether the input is a positive number (whose value is zero or
      // greater and not a NaN).
      if (typeof arg !== 'number' || arg < 0 || arg !== arg)
        throw new TypeError('"defaultMaxListeners" must be a positive number');
      defaultMaxListeners = arg;
    }
  });
} else {
  EventEmitter.defaultMaxListeners = defaultMaxListeners;
}

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2, arg3);
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].apply(self, args);
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    doError = (doError && events.error == null);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    if (arguments.length > 1)
      er = arguments[1];
    if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Unhandled "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    return false;

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
      // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
      // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');

  events = target._events;
  if (!events) {
    events = target._events = objectCreate(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
          listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
          prepend ? [listener, existing] : [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
            existing.length + ' "' + String(type) + '" listeners ' +
            'added. Use emitter.setMaxListeners() to ' +
            'increase limit.');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        if (typeof console === 'object' && console.warn) {
          console.warn('%s: %s', w.name, w.message);
        }
      }
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    switch (arguments.length) {
      case 0:
        return this.listener.call(this.target);
      case 1:
        return this.listener.call(this.target, arguments[0]);
      case 2:
        return this.listener.call(this.target, arguments[0], arguments[1]);
      case 3:
        return this.listener.call(this.target, arguments[0], arguments[1],
            arguments[2]);
      default:
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; ++i)
          args[i] = arguments[i];
        this.listener.apply(this.target, args);
    }
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = bind.call(onceWrapper, state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = this._events;
      if (!events)
        return this;

      list = events[type];
      if (!list)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = objectCreate(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else
          spliceOne(list, position);

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (!events)
        return this;

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = objectCreate(null);
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = objectCreate(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = objectKeys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = objectCreate(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (!events)
    return [];

  var evlistener = events[type];
  if (!evlistener)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function objectCreatePolyfill(proto) {
  var F = function() {};
  F.prototype = proto;
  return new F;
}
function objectKeysPolyfill(obj) {
  var keys = [];
  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) {
    keys.push(k);
  }
  return k;
}
function functionBindPolyfill(context) {
  var fn = this;
  return function () {
    return fn.apply(context, arguments);
  };
}

},{}],15:[function(require,module,exports){
'use strict';

/**
 * Module dependenices
 */

var isObject = require('is-plain-object');
var clone = require('shallow-clone');
var typeOf = require('kind-of');
var forOwn = require('for-own');

/**
 * Recursively clone native types.
 */

function cloneDeep(val, instanceClone) {
  switch (typeOf(val)) {
    case 'object':
      return cloneObjectDeep(val, instanceClone);
    case 'array':
      return cloneArrayDeep(val, instanceClone);
    default: {
      return clone(val);
    }
  }
}

function cloneObjectDeep(obj, instanceClone) {
  if (isObject(obj)) {
    var res = {};
    forOwn(obj, function(obj, key) {
      this[key] = cloneDeep(obj, instanceClone);
    }, res);
    return res;
  } else if (instanceClone) {
    return instanceClone(obj);
  } else {
    return obj;
  }
}

function cloneArrayDeep(arr, instanceClone) {
  var len = arr.length, res = [];
  var i = -1;
  while (++i < len) {
    res[i] = cloneDeep(arr[i], instanceClone);
  }
  return res;
}

/**
 * Expose `cloneDeep`
 */

module.exports = cloneDeep;

},{"for-own":128,"is-plain-object":130,"kind-of":132,"shallow-clone":143}],16:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;

},{"../../modules/_core":92,"../../modules/es6.object.assign":125}],17:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

},{"../../modules/_core":27,"../../modules/es6.object.create":79}],18:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":27,"../../modules/es6.object.define-property":80}],19:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;

},{"../../modules/_core":27,"../../modules/es6.object.set-prototype-of":81}],20:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;

},{"../../modules/_core":27,"../../modules/es6.object.to-string":82,"../../modules/es6.symbol":84,"../../modules/es7.symbol.async-iterator":85,"../../modules/es7.symbol.observable":86}],21:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');

},{"../../modules/_wks-ext":76,"../../modules/es6.string.iterator":83,"../../modules/web.dom.iterable":87}],22:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],23:[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],24:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":43}],25:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":68,"./_to-iobject":70,"./_to-length":71}],26:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],27:[function(require,module,exports){
var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],28:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":22}],29:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],30:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":35}],31:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":36,"./_is-object":43}],32:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],33:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":56,"./_object-keys":59,"./_object-pie":60}],34:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var has = require('./_has');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":27,"./_ctx":28,"./_global":36,"./_has":37,"./_hide":38}],35:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],36:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],37:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],38:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":30,"./_object-dp":51,"./_property-desc":61}],39:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":36}],40:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":30,"./_dom-create":31,"./_fails":35}],41:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":26}],42:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":26}],43:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],44:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":38,"./_object-create":50,"./_property-desc":61,"./_set-to-string-tag":64,"./_wks":77}],45:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":34,"./_hide":38,"./_iter-create":44,"./_iterators":47,"./_library":48,"./_object-gpo":57,"./_redefine":62,"./_set-to-string-tag":64,"./_wks":77}],46:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],47:[function(require,module,exports){
module.exports = {};

},{}],48:[function(require,module,exports){
module.exports = true;

},{}],49:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":35,"./_has":37,"./_is-object":43,"./_object-dp":51,"./_uid":74}],50:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":24,"./_dom-create":31,"./_enum-bug-keys":32,"./_html":39,"./_object-dps":52,"./_shared-key":65}],51:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":24,"./_descriptors":30,"./_ie8-dom-define":40,"./_to-primitive":73}],52:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":24,"./_descriptors":30,"./_object-dp":51,"./_object-keys":59}],53:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":30,"./_has":37,"./_ie8-dom-define":40,"./_object-pie":60,"./_property-desc":61,"./_to-iobject":70,"./_to-primitive":73}],54:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":55,"./_to-iobject":70}],55:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":32,"./_object-keys-internal":58}],56:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],57:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":37,"./_shared-key":65,"./_to-object":72}],58:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":25,"./_has":37,"./_shared-key":65,"./_to-iobject":70}],59:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":32,"./_object-keys-internal":58}],60:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],61:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],62:[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":38}],63:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":24,"./_ctx":28,"./_is-object":43,"./_object-gopd":53}],64:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":37,"./_object-dp":51,"./_wks":77}],65:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":66,"./_uid":74}],66:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":27,"./_global":36,"./_library":48}],67:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":29,"./_to-integer":69}],68:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":69}],69:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],70:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":29,"./_iobject":41}],71:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":69}],72:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":29}],73:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":43}],74:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],75:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":27,"./_global":36,"./_library":48,"./_object-dp":51,"./_wks-ext":76}],76:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":77}],77:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":36,"./_shared":66,"./_uid":74}],78:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":23,"./_iter-define":45,"./_iter-step":46,"./_iterators":47,"./_to-iobject":70}],79:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":34,"./_object-create":50}],80:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":30,"./_export":34,"./_object-dp":51}],81:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":34,"./_set-proto":63}],82:[function(require,module,exports){

},{}],83:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":45,"./_string-at":67}],84:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toObject = require('./_to-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $GOPS = require('./_object-gops');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":24,"./_descriptors":30,"./_enum-keys":33,"./_export":34,"./_fails":35,"./_global":36,"./_has":37,"./_hide":38,"./_is-array":42,"./_is-object":43,"./_library":48,"./_meta":49,"./_object-create":50,"./_object-dp":51,"./_object-gopd":53,"./_object-gopn":55,"./_object-gopn-ext":54,"./_object-gops":56,"./_object-keys":59,"./_object-pie":60,"./_property-desc":61,"./_redefine":62,"./_set-to-string-tag":64,"./_shared":66,"./_to-iobject":70,"./_to-object":72,"./_to-primitive":73,"./_uid":74,"./_wks":77,"./_wks-define":75,"./_wks-ext":76}],85:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":75}],86:[function(require,module,exports){
require('./_wks-define')('observable');

},{"./_wks-define":75}],87:[function(require,module,exports){
require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./_global":36,"./_hide":38,"./_iterators":47,"./_wks":77,"./es6.array.iterator":78}],88:[function(require,module,exports){
arguments[4][22][0].apply(exports,arguments)
},{"dup":22}],89:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"./_is-object":106,"dup":24}],90:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"./_to-absolute-index":118,"./_to-iobject":120,"./_to-length":121,"dup":25}],91:[function(require,module,exports){
arguments[4][26][0].apply(exports,arguments)
},{"dup":26}],92:[function(require,module,exports){
arguments[4][27][0].apply(exports,arguments)
},{"dup":27}],93:[function(require,module,exports){
arguments[4][28][0].apply(exports,arguments)
},{"./_a-function":88,"dup":28}],94:[function(require,module,exports){
arguments[4][29][0].apply(exports,arguments)
},{"dup":29}],95:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"./_fails":99,"dup":30}],96:[function(require,module,exports){
arguments[4][31][0].apply(exports,arguments)
},{"./_global":101,"./_is-object":106,"dup":31}],97:[function(require,module,exports){
arguments[4][32][0].apply(exports,arguments)
},{"dup":32}],98:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":92,"./_ctx":93,"./_global":101,"./_hide":103,"./_redefine":115}],99:[function(require,module,exports){
arguments[4][35][0].apply(exports,arguments)
},{"dup":35}],100:[function(require,module,exports){
module.exports = require('./_shared')('native-function-to-string', Function.toString);

},{"./_shared":117}],101:[function(require,module,exports){
arguments[4][36][0].apply(exports,arguments)
},{"dup":36}],102:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"dup":37}],103:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"./_descriptors":95,"./_object-dp":109,"./_property-desc":114,"dup":38}],104:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"./_descriptors":95,"./_dom-create":96,"./_fails":99,"dup":40}],105:[function(require,module,exports){
arguments[4][41][0].apply(exports,arguments)
},{"./_cof":91,"dup":41}],106:[function(require,module,exports){
arguments[4][43][0].apply(exports,arguments)
},{"dup":43}],107:[function(require,module,exports){
module.exports = false;

},{}],108:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = require('./_descriptors');
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

},{"./_descriptors":95,"./_fails":99,"./_iobject":105,"./_object-gops":110,"./_object-keys":112,"./_object-pie":113,"./_to-object":122}],109:[function(require,module,exports){
arguments[4][51][0].apply(exports,arguments)
},{"./_an-object":89,"./_descriptors":95,"./_ie8-dom-define":104,"./_to-primitive":123,"dup":51}],110:[function(require,module,exports){
arguments[4][56][0].apply(exports,arguments)
},{"dup":56}],111:[function(require,module,exports){
arguments[4][58][0].apply(exports,arguments)
},{"./_array-includes":90,"./_has":102,"./_shared-key":116,"./_to-iobject":120,"dup":58}],112:[function(require,module,exports){
arguments[4][59][0].apply(exports,arguments)
},{"./_enum-bug-keys":97,"./_object-keys-internal":111,"dup":59}],113:[function(require,module,exports){
arguments[4][60][0].apply(exports,arguments)
},{"dup":60}],114:[function(require,module,exports){
arguments[4][61][0].apply(exports,arguments)
},{"dup":61}],115:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var $toString = require('./_function-to-string');
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_core":92,"./_function-to-string":100,"./_global":101,"./_has":102,"./_hide":103,"./_uid":124}],116:[function(require,module,exports){
arguments[4][65][0].apply(exports,arguments)
},{"./_shared":117,"./_uid":124,"dup":65}],117:[function(require,module,exports){
arguments[4][66][0].apply(exports,arguments)
},{"./_core":92,"./_global":101,"./_library":107,"dup":66}],118:[function(require,module,exports){
arguments[4][68][0].apply(exports,arguments)
},{"./_to-integer":119,"dup":68}],119:[function(require,module,exports){
arguments[4][69][0].apply(exports,arguments)
},{"dup":69}],120:[function(require,module,exports){
arguments[4][70][0].apply(exports,arguments)
},{"./_defined":94,"./_iobject":105,"dup":70}],121:[function(require,module,exports){
arguments[4][71][0].apply(exports,arguments)
},{"./_to-integer":119,"dup":71}],122:[function(require,module,exports){
arguments[4][72][0].apply(exports,arguments)
},{"./_defined":94,"dup":72}],123:[function(require,module,exports){
arguments[4][73][0].apply(exports,arguments)
},{"./_is-object":106,"dup":73}],124:[function(require,module,exports){
arguments[4][74][0].apply(exports,arguments)
},{"dup":74}],125:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":98,"./_object-assign":108}],126:[function(require,module,exports){
'use strict';

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = EventEmitter;
}

},{}],127:[function(require,module,exports){
/*!
 * for-in <https://github.com/jonschlinkert/for-in>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function forIn(obj, fn, thisArg) {
  for (var key in obj) {
    if (fn.call(thisArg, obj[key], key, obj) === false) {
      break;
    }
  }
};

},{}],128:[function(require,module,exports){
/*!
 * for-own <https://github.com/jonschlinkert/for-own>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var forIn = require('for-in');
var hasOwn = Object.prototype.hasOwnProperty;

module.exports = function forOwn(obj, fn, thisArg) {
  forIn(obj, function(val, key) {
    if (hasOwn.call(obj, key)) {
      return fn.call(thisArg, obj[key], key, obj);
    }
  });
};

},{"for-in":127}],129:[function(require,module,exports){
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function isExtendable(val) {
  return typeof val !== 'undefined' && val !== null
    && (typeof val === 'object' || typeof val === 'function');
};

},{}],130:[function(require,module,exports){
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var isObject = require('isobject');

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};

},{"isobject":131}],131:[function(require,module,exports){
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

},{}],132:[function(require,module,exports){
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  var type = typeof val;

  // primitivies
  if (type === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (type === 'string' || val instanceof String) {
    return 'string';
  }
  if (type === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (type === 'function' || val instanceof Function) {
    if (typeof val.constructor.name !== 'undefined' && val.constructor.name.slice(0, 9) === 'Generator') {
      return 'generatorfunction';
    }
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }
  if (type === '[object Promise]') {
    return 'promise';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }
  
  if (type === '[object Map Iterator]') {
    return 'mapiterator';
  }
  if (type === '[object Set Iterator]') {
    return 'setiterator';
  }
  if (type === '[object String Iterator]') {
    return 'stringiterator';
  }
  if (type === '[object Array Iterator]') {
    return 'arrayiterator';
  }
  
  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  return val.constructor
    && typeof val.constructor.isBuffer === 'function'
    && val.constructor.isBuffer(val);
}

},{}],133:[function(require,module,exports){
'use strict';

var isObject = require('is-extendable');
var forIn = require('for-in');

function mixin(target, objects) {
  if (!isObject(target)) {
    throw new TypeError('mixin-object expects the first argument to be an object.');
  }
  var len = arguments.length, i = 0;
  while (++i < len) {
    var obj = arguments[i];
    if (isObject(obj)) {
      forIn(obj, copy, target);
    }
  }
  return target;
}

/**
 * copy properties from the source object to the
 * target object.
 *
 * @param  {*} `value`
 * @param  {String} `key`
 */

function copy(value, key) {
  this[key] = value;
}

/**
 * Expose `mixin`
 */

module.exports = mixin;
},{"for-in":134,"is-extendable":129}],134:[function(require,module,exports){
arguments[4][127][0].apply(exports,arguments)
},{"dup":127}],135:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],136:[function(require,module,exports){
(function (setImmediate){(function (){
(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}
  
  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function() {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    var args = Array.prototype.slice.call(arr);

    return new Promise(function (resolve, reject) {
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);

}).call(this)}).call(this,require("timers").setImmediate)
},{"timers":167}],137:[function(require,module,exports){
'use strict';

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

},{}],138:[function(require,module,exports){
'use strict';

var stringify = require('./stringify');
var parse = require('./parse');
var formats = require('./formats');

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

},{"./formats":137,"./parse":139,"./stringify":140}],139:[function(require,module,exports){
'use strict';

var utils = require('./utils');

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos));
            val = options.decoder(part.slice(pos + 1));
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function parseObjectRecursive(chain, val, options) {
    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj;
    if (root === '[]') {
        obj = [];
        obj = obj.concat(parseObject(chain, val, options));
    } else {
        obj = options.plainObjects ? Object.create(null) : {};
        var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
        var index = parseInt(cleanRoot, 10);
        if (
            !isNaN(index) &&
            root !== cleanRoot &&
            String(index) === cleanRoot &&
            index >= 0 &&
            (options.parseArrays && index <= options.arrayLimit)
        ) {
            obj = [];
            obj[index] = parseObject(chain, val, options);
        } else {
            obj[cleanRoot] = parseObject(chain, val, options);
        }
    }

    return obj;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts || {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};

},{"./utils":141}],140:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var formats = require('./formats');

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix);
            return [formatter(keyValue) + '=' + formatter(encoder(obj))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts || {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats.default;
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    return keys.join(delimiter);
};

},{"./formats":137,"./utils":141}],141:[function(require,module,exports){
'use strict';

var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

exports.arrayToObject = function (source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function (target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (Object.prototype.hasOwnProperty.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function (str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D || // -
            c === 0x2E || // .
            c === 0x5F || // _
            c === 0x7E || // ~
            (c >= 0x30 && c <= 0x39) || // 0-9
            (c >= 0x41 && c <= 0x5A) || // a-z
            (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]; // eslint-disable-line max-len
    }

    return out;
};

exports.compact = function (obj, references) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    var refs = references || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if (Array.isArray(obj)) {
        var compacted = [];

        for (var i = 0; i < obj.length; ++i) {
            if (obj[i] && typeof obj[i] === 'object') {
                compacted.push(exports.compact(obj[i], refs));
            } else if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = Object.keys(obj);
    keys.forEach(function (key) {
        obj[key] = exports.compact(obj[key], refs);
    });

    return obj;
};

exports.isRegExp = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function (obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

},{}],142:[function(require,module,exports){
/*!
* screenfull
* v3.3.3 - 2018-09-04
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs = typeof module !== 'undefined' && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (elem) {
			var request = fn.requestFullscreen;

			elem = elem || document.documentElement;

			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed ? Element.ALLOW_KEYBOARD_INPUT : {});
			}
		},
		exit: function () {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();

},{}],143:[function(require,module,exports){
/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var isObject = require('is-extendable');
var mixin = require('mixin-object');
var typeOf = require('kind-of');

/**
 * Shallow copy an object, array or primitive.
 *
 * @param  {any} `val`
 * @return {any}
 */

function clone(val) {
  var type = typeOf(val);
  if (clone.hasOwnProperty(type)) {
    return clone[type](val);
  }
  return val;
}

clone.array = function cloneArray(arr) {
  return arr.slice();
};

clone.date = function cloneDate(date) {
  return new Date(+date);
};

clone.object = function cloneObject(obj) {
  if (isObject(obj)) {
    return mixin({}, obj);
  } else {
    return obj;
  }
};

clone.regexp = function cloneRegExp(re) {
  var flags = '';
  flags += re.multiline ? 'm' : '';
  flags += re.global ? 'g' : '';
  flags += re.ignorecase ? 'i' : '';
  return new RegExp(re.source, flags);
};

/**
 * Expose `clone`
 */

module.exports = clone;

},{"is-extendable":129,"kind-of":132,"mixin-object":133}],144:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _dummy = require('./utils/dummy');

var _dummy2 = _interopRequireDefault(_dummy);

var _fakeContext = require('./utils/fake-context');

var _fakeContext2 = _interopRequireDefault(_fakeContext);

var _iOS = require('./utils/iOS');

var _iOS2 = _interopRequireDefault(_iOS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var desiredSampleRate = 44100;

var Ctx = window.AudioContext || window.webkitAudioContext || _fakeContext2.default;

var context = new Ctx();

if (!context) {
    context = new _fakeContext2.default();
}

// Check if hack is necessary. Only occurs in iOS6+ devices
// and only when you first boot the iPhone, or play a audio/video
// with a different sample rate
// https://github.com/Jam3/ios-safe-audio-context/blob/master/index.js
if (_iOS2.default && context.sampleRate !== desiredSampleRate) {
    (0, _dummy2.default)(context);
    context.close(); // dispose old context
    context = new Ctx();
}

// Handles bug in Safari 9 OSX where AudioContext instance starts in 'suspended' state
if (context.state === 'suspended' && typeof context.resume === 'function') {
    window.setTimeout(function () {
        return context.resume();
    }, 1000);
}

exports.default = context;
},{"./utils/dummy":154,"./utils/fake-context":156,"./utils/iOS":159}],145:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Effects = function () {
    function Effects(context) {
        var _this = this;

        (0, _classCallCheck3.default)(this, Effects);

        this.context = context;
        this._destination = null;
        this._source = null;

        this._nodes = [];
        this._nodes.has = function (node) {
            return _this.has(node);
        };
        this._nodes.add = function (node) {
            return _this.add(node);
        };
        this._nodes.remove = function (node) {
            return _this.remove(node);
        };
        this._nodes.toggle = function (node, force) {
            return _this.toggle(node, force);
        };
        this._nodes.removeAll = function () {
            return _this.removeAll();
        };

        Object.keys(Effects.prototype).forEach(function (key) {
            if (!_this._nodes.hasOwnProperty(key) && typeof Effects.prototype[key] === 'function') {
                _this._nodes[key] = _this[key].bind(_this);
            }
        });
    }

    Effects.prototype.setSource = function setSource(node) {
        this._source = node;
        this._updateConnections();
        return node;
    };

    Effects.prototype.setDestination = function setDestination(node) {
        this._connectToDestination(node);
        return node;
    };

    Effects.prototype.has = function has(node) {
        if (!node) {
            return false;
        }
        return this._nodes.indexOf(node) > -1;
    };

    Effects.prototype.add = function add(node) {
        if (!node) {
            return null;
        }
        if (this.has(node)) {
            return node;
        }
        if (Array.isArray(node)) {
            var n = void 0;
            for (var i = 0; i < node.length; i++) {
                n = this.add(node[i]);
            }
            return n;
        }
        this._nodes.push(node);
        this._updateConnections();
        return node;
    };

    Effects.prototype.remove = function remove(node) {
        if (!node) {
            return null;
        }
        if (!this.has(node)) {
            return node;
        }
        var l = this._nodes.length;
        for (var i = 0; i < l; i++) {
            if (node === this._nodes[i]) {
                this._nodes.splice(i, 1);
                break;
            }
        }
        node.disconnect();
        this._updateConnections();
        return node;
    };

    Effects.prototype.toggle = function toggle(node, force) {
        force = !!force;
        var hasNode = this.has(node);
        if (arguments.length > 1 && hasNode === force) {
            return this;
        }
        if (hasNode) {
            this.remove(node);
        } else {
            this.add(node);
        }
        return this;
    };

    Effects.prototype.removeAll = function removeAll() {
        while (this._nodes.length) {
            var node = this._nodes.pop();
            node.disconnect();
        }
        this._updateConnections();
        return this;
    };

    Effects.prototype.destroy = function destroy() {
        this.removeAll();
        this.context = null;
        this._destination = null;
        if (this._source) {
            this._source.disconnect();
        }
        this._source = null;
    };

    Effects.prototype._connect = function _connect(a, b) {
        a.disconnect();
        // console.log('> connect output', (a.name || a.constructor.name), 'to input', (b.name || b.constructor.name));
        a.connect(b._in || b);
    };

    Effects.prototype._connectToDestination = function _connectToDestination(node) {
        var lastNode = this._nodes[this._nodes.length - 1] || this._source;

        if (lastNode) {
            this._connect(lastNode, node);
        }

        this._destination = node;
    };

    Effects.prototype._updateConnections = function _updateConnections() {
        if (!this._source) {
            return;
        }

        // console.log('updateConnections');

        var node = void 0,
            prev = void 0;

        for (var i = 0; i < this._nodes.length; i++) {
            node = this._nodes[i];
            prev = i === 0 ? this._source : this._nodes[i - 1];
            this._connect(prev, node);
        }

        if (this._destination) {
            this._connectToDestination(this._destination);
        }
    };

    return Effects;
}();

exports.default = Effects;
},{"babel-runtime/helpers/classCallCheck":7}],146:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = Group;

var _effects = require('./effects');

var _effects2 = _interopRequireDefault(_effects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Group(context, destination) {
    var sounds = [];
    var effects = new _effects2.default(context);
    var gain = context.createGain();
    var preMuteVolume = 1;
    var group = null;

    if (context) {
        effects.setSource(gain);
        effects.setDestination(destination || context.destination);
    }

    /*
     * Add / remove
     */

    function find(soundOrId, callback) {
        var found = void 0;

        if (!soundOrId && soundOrId !== 0) {
            return found;
        }

        sounds.some(function (sound) {
            if (sound === soundOrId || sound.id === soundOrId) {
                found = sound;
                return true;
            }
            return false;
        });

        if (found && callback) {
            return callback(found);
        }

        return found;
    }

    function remove(soundOrId) {
        find(soundOrId, function (sound) {
            return sounds.splice(sounds.indexOf(sound), 1);
        });
        return group;
    }

    function add(sound) {
        sound.gain.disconnect();
        sound.gain.connect(gain);

        sounds.push(sound);

        sound.once('destroy', remove);

        return group;
    }

    /*
     * Controls
     */

    function play(delay, offset) {
        sounds.forEach(function (sound) {
            return sound.play(delay, offset);
        });
        return group;
    }

    function pause() {
        sounds.forEach(function (sound) {
            if (sound.playing) {
                sound.pause();
            }
        });
        return group;
    }

    function resume() {
        sounds.forEach(function (sound) {
            if (sound.paused) {
                sound.play();
            }
        });
        return group;
    }

    function stop() {
        sounds.forEach(function (sound) {
            return sound.stop();
        });
        return group;
    }

    function seek(percent) {
        sounds.forEach(function (sound) {
            return sound.seek(percent);
        });
        return group;
    }

    function mute() {
        preMuteVolume = group.volume;
        group.volume = 0;
        return group;
    }

    function unMute() {
        group.volume = preMuteVolume || 1;
        return group;
    }

    function setVolume(value) {
        group.volume = value;
        return group;
    }

    function fade(volume, duration) {
        if (context) {
            var param = gain.gain;
            var time = context.currentTime;

            param.cancelScheduledValues(time);
            param.setValueAtTime(param.value, time);
            // param.setValueAtTime(volume, time + duration);
            param.linearRampToValueAtTime(volume, time + duration);
            // param.setTargetAtTime(volume, time, duration);
            // param.exponentialRampToValueAtTime(Math.max(volume, 0.0001), time + duration);
        } else {
            sounds.forEach(function (sound) {
                return sound.fade(volume, duration);
            });
        }

        return group;
    }

    /*
     * Load
     */

    function load() {
        sounds.forEach(function (sound) {
            return sound.load();
        });
    }

    /*
     * Unload
     */

    function unload() {
        sounds.forEach(function (sound) {
            return sound.unload();
        });
    }

    /*
     * Destroy
     */

    function destroy() {
        while (sounds.length) {
            sounds.pop().destroy();
        }
    }

    /*
     * Api
     */

    group = {
        add: add,
        find: find,
        remove: remove,
        play: play,
        pause: pause,
        resume: resume,
        stop: stop,
        seek: seek,
        setVolume: setVolume,
        mute: mute,
        unMute: unMute,
        fade: fade,
        load: load,
        unload: unload,
        destroy: destroy,
        gain: gain,
        get effects() {
            return effects._nodes;
        },
        set effects(value) {
            effects.removeAll().add(value);
        },
        get fx() {
            return this.effects;
        },
        set fx(value) {
            this.effects = value;
        },
        get sounds() {
            return sounds;
        },
        get volume() {
            return gain.gain.value;
        },
        set volume(value) {
            if (isNaN(value)) {
                return;
            }

            value = Math.min(Math.max(value, 0), 1);

            if (context) {
                gain.gain.cancelScheduledValues(context.currentTime);
                gain.gain.value = value;
                gain.gain.setValueAtTime(value, context.currentTime);
            } else {
                gain.gain.value = value;
            }
            sounds.forEach(function (sound) {
                if (!sound.context) {
                    sound.groupVolume = value;
                }
            });
        }
    };

    return group;
}

Group.Effects = _effects2.default;
},{"./effects":145}],147:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _defineEnumerableProperties2 = require('babel-runtime/helpers/defineEnumerableProperties');

var _defineEnumerableProperties3 = _interopRequireDefault(_defineEnumerableProperties2);

var _effects, _effects2, _fx, _fx2, _isTouchLocked, _playInBackground, _playInBackground2, _sounds, _volume, _volume2, _sono, _mutatorMap;

require('core-js/fn/object/assign');

var _context = require('./context');

var _context2 = _interopRequireDefault(_context);

var _effects3 = require('./effects');

var _effects4 = _interopRequireDefault(_effects3);

var _file = require('./utils/file');

var _file2 = _interopRequireDefault(_file);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

var _loader = require('./utils/loader');

var _loader2 = _interopRequireDefault(_loader);

var _log2 = require('./utils/log');

var _log3 = _interopRequireDefault(_log2);

var _pageVisibility = require('./utils/pageVisibility');

var _pageVisibility2 = _interopRequireDefault(_pageVisibility);

var _sound = require('./sound');

var _sound2 = _interopRequireDefault(_sound);

var _soundGroup = require('./utils/sound-group');

var _soundGroup2 = _interopRequireDefault(_soundGroup);

var _touchLock = require('./utils/touchLock');

var _touchLock2 = _interopRequireDefault(_touchLock);

var _utils = require('./utils/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VERSION = '2.1.6';
var bus = new _group2.default(_context2.default, _context2.default.destination);

/*
* Get Sound by id
*/

function get(id) {
    return bus.find(id);
}

/*
* Create group
*/

function group(sounds) {
    var soundGroup = new _soundGroup2.default(_context2.default, bus.gain);
    if (sounds) {
        sounds.forEach(function (sound) {
            return soundGroup.add(sound);
        });
    }
    return soundGroup;
}

/*
* Loading
*/

function add(config) {
    var src = _file2.default.getSupportedFile(config.src || config.url || config.data || config);
    var sound = new _sound2.default(Object.assign({}, config || {}, {
        src: src,
        context: _context2.default,
        destination: bus.gain
    }));
    sound.isTouchLocked = isTouchLocked;
    if (config) {
        sound.id = config.id || config.name || '';
        sound.loop = !!config.loop;
        sound.volume = config.volume;
        sound.effects = config.effects || [];
    }
    bus.add(sound);
    return sound;
}

function queue(config, loaderGroup) {
    var sound = add(config).prepare();

    if (loaderGroup) {
        loaderGroup.add(sound.loader);
    }
    return sound;
}

function load(config) {
    var src = config.src || config.url || config.data || config;
    var sound = void 0,
        loader = void 0;

    if (_file2.default.containsURL(src)) {
        sound = queue(config);
        loader = sound.loader;
    } else if (Array.isArray(src) && _file2.default.containsURL(src[0].src || src[0].url)) {
        sound = [];
        loader = new _loader2.default.Group();
        src.forEach(function (url) {
            return sound.push(queue(url, loader));
        });
    } else {
        var errorMessage = 'sono.load: No audio file URLs found in config.';
        if (config.onError) {
            config.onError('[ERROR] ' + errorMessage);
        } else {
            throw new Error(errorMessage);
        }
        return null;
    }
    if (config.onProgress) {
        loader.on('progress', function (progress) {
            return config.onProgress(progress);
        });
    }
    if (config.onComplete) {
        loader.once('complete', function () {
            loader.off('progress');
            config.onComplete(sound);
        });
    }
    loader.once('error', function (err) {
        loader.off('error');
        if (config.onError) {
            config.onError(err);
        } else {
            console.error(err);
        }
    });
    loader.start();

    return sound;
}

/*
* Create Sound
*
* Accepted values for param config:
* Object config e.g. { id:'foo', url:['foo.ogg', 'foo.mp3'] }
* Array (of files e.g. ['foo.ogg', 'foo.mp3'])
* ArrayBuffer
* HTMLMediaElement
* Filename string (e.g. 'foo.ogg')
* Oscillator type string (i.e. 'sine', 'square', 'sawtooth', 'triangle')
*/

function create(config) {
    // try to load if config contains URLs
    if (_file2.default.containsURL(config)) {
        return load(config);
    }

    var sound = add(config);
    sound.data = config.data || config;

    return sound;
}

/*
* Destroy
*/

function destroy(soundOrId) {
    bus.find(soundOrId, function (sound) {
        return sound.destroy();
    });
    return sono;
}

function destroyAll() {
    bus.destroy();
    return sono;
}

/*
* Controls
*/

function mute() {
    bus.mute();
    return sono;
}

function unMute() {
    bus.unMute();
    return sono;
}

function fade(volume, duration) {
    bus.fade(volume, duration);
    return sono;
}

function pauseAll() {
    bus.pause();
    return sono;
}

function resumeAll() {
    bus.resume();
    return sono;
}

function stopAll() {
    bus.stop();
    return sono;
}

function play(id, delay, offset) {
    bus.find(id, function (sound) {
        return sound.play(delay, offset);
    });
    return sono;
}

function pause(id) {
    bus.find(id, function (sound) {
        return sound.pause();
    });
    return sono;
}

function stop(id) {
    bus.find(id, function (sound) {
        return sound.stop();
    });
    return sono;
}

/*
* Mobile touch lock
*/

var isTouchLocked = (0, _touchLock2.default)(_context2.default, function () {
    isTouchLocked = false;
    bus.sounds.forEach(function (sound) {
        return sound.isTouchLocked = false;
    });
});

/*
* Page visibility events
*/

var pageHiddenPaused = [];

// pause currently playing sounds and store refs
function onHidden() {
    bus.sounds.forEach(function (sound) {
        if (sound.playing) {
            sound.pause();
            pageHiddenPaused.push(sound);
        }
    });
}

// play sounds that got paused when page was hidden
function onShown() {
    while (pageHiddenPaused.length) {
        pageHiddenPaused.pop().play();
    }
}

var pageVis = (0, _pageVisibility2.default)(onHidden, onShown);

function register(name, fn) {
    var attachTo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _effects4.default.prototype;

    attachTo[name] = fn;
    sono[name] = fn;

    return fn;
}

var sono = (_sono = {
    canPlay: _file2.default.canPlay,
    context: _context2.default,
    create: create,
    createGroup: group,
    createSound: create,
    destroyAll: destroyAll,
    destroy: destroy,
    effects: bus.effects,
    extensions: _file2.default.extensions,
    fade: fade,
    file: _file2.default,
    gain: bus.gain,
    getOfflineContext: _utils2.default.getOfflineContext,
    get: get,
    getSound: get,
    group: group,
    hasWebAudio: !_context2.default.isFake,
    isSupported: _file2.default.extensions.length > 0,
    load: load,
    log: function log() {
        return (0, _log3.default)(sono);
    },
    mute: mute,
    pause: pause,
    pauseAll: pauseAll,
    play: play,
    register: register,
    resumeAll: resumeAll,
    stop: stop,
    stopAll: stopAll,
    unMute: unMute,
    utils: _utils2.default,
    VERSION: VERSION
}, _effects = 'effects', _mutatorMap = {}, _mutatorMap[_effects] = _mutatorMap[_effects] || {}, _mutatorMap[_effects].get = function () {
    return bus.effects;
}, _effects2 = 'effects', _mutatorMap[_effects2] = _mutatorMap[_effects2] || {}, _mutatorMap[_effects2].set = function (value) {
    bus.effects.removeAll().add(value);
}, _fx = 'fx', _mutatorMap[_fx] = _mutatorMap[_fx] || {}, _mutatorMap[_fx].get = function () {
    return this.effects;
}, _fx2 = 'fx', _mutatorMap[_fx2] = _mutatorMap[_fx2] || {}, _mutatorMap[_fx2].set = function (value) {
    this.effects = value;
}, _isTouchLocked = 'isTouchLocked', _mutatorMap[_isTouchLocked] = _mutatorMap[_isTouchLocked] || {}, _mutatorMap[_isTouchLocked].get = function () {
    return isTouchLocked;
}, _playInBackground = 'playInBackground', _mutatorMap[_playInBackground] = _mutatorMap[_playInBackground] || {}, _mutatorMap[_playInBackground].get = function () {
    return !pageVis.enabled;
}, _playInBackground2 = 'playInBackground', _mutatorMap[_playInBackground2] = _mutatorMap[_playInBackground2] || {}, _mutatorMap[_playInBackground2].set = function (value) {
    pageVis.enabled = !value;

    if (!value) {
        onShown();
    }
}, _sounds = 'sounds', _mutatorMap[_sounds] = _mutatorMap[_sounds] || {}, _mutatorMap[_sounds].get = function () {
    return bus.sounds.slice(0);
}, _volume = 'volume', _mutatorMap[_volume] = _mutatorMap[_volume] || {}, _mutatorMap[_volume].get = function () {
    return bus.volume;
}, _volume2 = 'volume', _mutatorMap[_volume2] = _mutatorMap[_volume2] || {}, _mutatorMap[_volume2].set = function (value) {
    bus.volume = value;
}, _sono.__test = {
    Effects: _effects4.default,
    Group: _group2.default,
    Sound: _sound2.default
}, (0, _defineEnumerableProperties3.default)(_sono, _mutatorMap), _sono);

exports.default = sono;
},{"./context":144,"./effects":145,"./group":146,"./sound":148,"./utils/file":157,"./utils/loader":161,"./utils/log":162,"./utils/pageVisibility":163,"./utils/sound-group":164,"./utils/touchLock":165,"./utils/utils":166,"babel-runtime/helpers/defineEnumerableProperties":9,"core-js/fn/object/assign":16}],148:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _context = require('./context');

var _context2 = _interopRequireDefault(_context);

var _bufferSource = require('./source/buffer-source');

var _bufferSource2 = _interopRequireDefault(_bufferSource);

var _effects = require('./effects');

var _effects2 = _interopRequireDefault(_effects);

var _emitter = require('./utils/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _file = require('./utils/file');

var _file2 = _interopRequireDefault(_file);

var _firefox = require('./utils/firefox');

var _firefox2 = _interopRequireDefault(_firefox);

var _utils = require('./utils/utils');

var _utils2 = _interopRequireDefault(_utils);

var _isSafeNumber = require('./utils/isSafeNumber');

var _isSafeNumber2 = _interopRequireDefault(_isSafeNumber);

var _loader = require('./utils/loader');

var _loader2 = _interopRequireDefault(_loader);

var _audioSource = require('./source/audio-source');

var _audioSource2 = _interopRequireDefault(_audioSource);

var _mediaSource = require('./source/media-source');

var _mediaSource2 = _interopRequireDefault(_mediaSource);

var _microphoneSource = require('./source/microphone-source');

var _microphoneSource2 = _interopRequireDefault(_microphoneSource);

var _oscillatorSource = require('./source/oscillator-source');

var _oscillatorSource2 = _interopRequireDefault(_oscillatorSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sound = function (_Emitter) {
    (0, _inherits3.default)(Sound, _Emitter);

    function Sound(config) {
        (0, _classCallCheck3.default)(this, Sound);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Emitter.call(this));

        _this.id = config.id || null;

        _this._context = config.context || _context2.default;
        _this._destination = config.destination || _this._context.destination;
        _this._effects = new _effects2.default(_this._context);
        _this._gain = _this._context.createGain();
        _this._config = config;

        _this._data = null;
        _this._fadeTimeout = null;
        _this._isTouchLocked = false;
        _this._loader = null;
        _this._loop = false;
        _this._offset = 0;
        _this._playbackRate = 1;
        _this._playWhenReady = null;
        _this._source = null;
        _this._wave = null;
        _this._userData = {};

        _this._effects.setDestination(_this._gain);
        _this._gain.connect(_this._destination);

        _this._onEnded = _this._onEnded.bind(_this);
        _this._onLoad = _this._onLoad.bind(_this);
        _this._onLoadError = _this._onLoadError.bind(_this);
        return _this;
    }

    Sound.prototype.prepare = function prepare() {
        var newConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var skipLoad = !force && !this._source && !!this._config.deferLoad;

        if (newConfig) {
            var configSrc = _file2.default.getSrc(newConfig);
            var src = _file2.default.getSupportedFile(configSrc) || this._config.src;
            this._config = Object.assign(this._config, newConfig, { src: src });
        }

        if (this._source && this._data && this._data.tagName) {
            this._source.load(this._config.src);
        } else {
            this._loader = new _loader2.default(this._config.src, skipLoad);
            this._loader.audioContext = !!this._config.asMediaElement || this._context.isFake ? null : this._context;
            this._loader.isTouchLocked = this._isTouchLocked;
            this._loader.once('loaded', this._onLoad);
            this._loader.once('error', this._onLoadError);
        }
        return this;
    };

    Sound.prototype.load = function load() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        this.stop();
        this._source = null;

        if (!config || _file2.default.containsURL(config)) {
            if (this._loader) {
                this._loader.destroy();
            }
            this.prepare(config, true);
            this._loader.start();
        } else {
            this.data = config.data || config;
        }

        return this;
    };

    Sound.prototype.play = function play(delay, offset) {
        var _this2 = this;

        if (!this._source || this._isTouchLocked) {
            this._playWhenReady = function () {
                if (_this2._source) {
                    _this2.play(delay, offset);
                }
            };
            if (!!this._config.deferLoad) {
                if (!this._loader) {
                    this.prepare(null, true);
                }
                this._loader.start(true);
            }
            return this;
        }
        this._playWhenReady = null;
        this._effects.setSource(this._source.sourceNode);

        if (this._offset && typeof offset === 'undefined') {
            offset = this._offset;
            this._offset = 0;
        }

        this._source.play(delay, offset);

        if (this._source.hasOwnProperty('volume')) {
            this._source.volume = this._gain.gain.value;
        }

        if (this._source.hasOwnProperty('loop')) {
            this._source.loop = this._loop;
        }

        this.emit('play', this);

        return this;
    };

    Sound.prototype.pause = function pause() {
        this._source && this._source.pause();
        this.emit('pause', this);
        return this;
    };

    Sound.prototype.stop = function stop(delay) {
        this._source && this._source.stop(delay || 0);
        this.emit('stop', this);
        return this;
    };

    Sound.prototype.seek = function seek(value) {
        this.currentTime = value;
        return this;
    };

    Sound.prototype.fade = function fade(volume) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        if (!this._source) {
            return this;
        }

        var param = this._gain.gain;

        if (this._context && !this._context.isFake && !_firefox2.default) {
            var time = this._context.currentTime;
            param.cancelScheduledValues(time);
            param.setValueAtTime(param.value, time);
            param.linearRampToValueAtTime(volume, time + duration);
        } else {
            this._fadePolyfill(volume, duration);
        }

        this.emit('fade', this, volume);

        return this;
    };

    Sound.prototype._fadePolyfill = function _fadePolyfill(toVolume, duration) {
        var _this3 = this;

        var ramp = function ramp(value, step) {
            _this3._fadeTimeout = window.setTimeout(function () {
                _this3.volume = _this3.volume + (value - _this3.volume) * 0.2;
                if (Math.abs(_this3.volume - value) > 0.05) {
                    ramp(value, step);
                    return;
                }
                _this3.volume = value;
            }, step * 1000);
        };

        window.clearTimeout(this._fadeTimeout);
        ramp(toVolume, duration / 10);

        return this;
    };

    Sound.prototype.unload = function unload() {
        this._source && this._source.destroy();
        this._loader && this._loader.destroy();
        this._data = null;
        this._playWhenReady = null;
        this._source = null;
        this._loader = null;
        this._config.deferLoad = true;
        this.emit('unload', this);
    };

    Sound.prototype.reload = function reload() {
        return this.load(null, true);
    };

    Sound.prototype.destroy = function destroy() {
        this._source && this._source.destroy();
        this._effects && this._effects.destroy();
        this._gain && this._gain.disconnect();
        if (this._loader) {
            this._loader.off('loaded');
            this._loader.off('error');
            this._loader.destroy();
        }
        this._gain = null;
        this._context = null;
        this._destination = null;
        this._data = null;
        this._playWhenReady = null;
        this._source = null;
        this._effects = null;
        this._loader = null;
        this._config = null;
        this.emit('destroy', this);
        this.off();
    };

    Sound.prototype.waveform = function waveform(length) {
        var _this4 = this;

        if (!this._wave) {
            this._wave = _utils2.default.waveform();
        }
        if (!this._data) {
            this.once('ready', function () {
                return _this4._wave(_this4._data, length);
            });
        }
        return this._wave(this._data, length);
    };

    Sound.prototype._createSource = function _createSource(data) {
        var isAudioBuffer = _file2.default.isAudioBuffer(data);
        if (isAudioBuffer || _file2.default.isMediaElement(data)) {
            var Fn = isAudioBuffer ? _bufferSource2.default : _mediaSource2.default;
            this._source = new _audioSource2.default(Fn, data, this._context, this._onEnded);
            this._source.singlePlay = !!this._config.singlePlay;
            this._source.playbackRate = this._playbackRate;
            this._source.currentTime = this._offset;
        } else if (_file2.default.isMediaStream(data)) {
            this._source = new _microphoneSource2.default(data, this._context);
        } else if (_file2.default.isOscillatorType(data && data.type || data)) {
            this._source = new _oscillatorSource2.default(data.type || data, this._context);
        } else {
            throw new Error('Cannot detect data type: ' + data);
        }

        this._effects.setSource(this._source.sourceNode);

        this.emit('ready', this);

        if (this._playWhenReady) {
            this._playWhenReady();
        }
    };

    Sound.prototype._onEnded = function _onEnded() {
        this.emit('ended', this);
    };

    Sound.prototype._onLoad = function _onLoad(data) {
        this._data = data;
        this.emit('loaded', this);
        this._createSource(data);
    };

    Sound.prototype._onLoadError = function _onLoadError(err) {
        if (this.listenerCount('error')) {
            this.emit('error', this, err);
            return;
        }
        console.error('Sound load error', this._loader.url);
    };

    (0, _createClass3.default)(Sound, [{
        key: 'context',
        get: function get() {
            return this._context;
        }
    }, {
        key: 'currentTime',
        get: function get() {
            return this._source ? this._source.currentTime : this._offset;
        },
        set: function set(value) {
            if (this._source) {
                var playing = this._source.playing;
                this._source.stop();
                this._source.currentTime = value;
                if (playing) {
                    this.play(0, value);
                }
            } else {
                this._offset = value;
            }
        }
    }, {
        key: 'data',
        get: function get() {
            return this._data;
        },
        set: function set(value) {
            if (!value) {
                return;
            }
            this._data = value;
            this._createSource(value);
        }
    }, {
        key: 'duration',
        get: function get() {
            return this._source ? this._source.duration : 0;
        }
    }, {
        key: 'effects',
        get: function get() {
            return this._effects._nodes;
        },
        set: function set(value) {
            this._effects.removeAll().add(value);
        }
    }, {
        key: 'fx',
        get: function get() {
            return this.effects;
        },
        set: function set(value) {
            this.effects = value;
        }
    }, {
        key: 'ended',
        get: function get() {
            return !!this._source && this._source.ended;
        }
    }, {
        key: 'frequency',
        get: function get() {
            return this._source ? this._source.frequency : 0;
        },
        set: function set(value) {
            if (this._source && this._source.hasOwnProperty('frequency')) {
                this._source.frequency = value;
            }
        }
    }, {
        key: 'gain',
        get: function get() {
            return this._gain;
        }

        // for media element source

    }, {
        key: 'groupVolume',
        get: function get() {
            return this._source.groupVolume;
        },
        set: function set(value) {
            if (this._source && this._source.hasOwnProperty('groupVolume')) {
                this._source.groupVolume = value;
            }
        }
    }, {
        key: 'isTouchLocked',
        set: function set(value) {
            this._isTouchLocked = value;
            if (this._loader) {
                this._loader.isTouchLocked = value;
            }
            if (!value && this._playWhenReady) {
                this._playWhenReady();
            }
        }
    }, {
        key: 'loader',
        get: function get() {
            return this._loader;
        }
    }, {
        key: 'loop',
        get: function get() {
            return this._loop;
        },
        set: function set(value) {
            this._loop = !!value;

            if (this._source && this._source.hasOwnProperty('loop') && this._source.loop !== this._loop) {
                this._source.loop = this._loop;
            }
        }
    }, {
        key: 'singlePlay',
        get: function get() {
            return this._config.singlePlay;
        },
        set: function set(value) {
            this._config.singlePlay = value;
            this._source.singlePlay = value;
        }
    }, {
        key: 'config',
        get: function get() {
            return this._config;
        }
    }, {
        key: 'paused',
        get: function get() {
            return !!this._source && this._source.paused;
        }
    }, {
        key: 'playing',
        get: function get() {
            return !!this._source && this._source.playing;
        }
    }, {
        key: 'playbackRate',
        get: function get() {
            return this._playbackRate;
        },
        set: function set(value) {
            this._playbackRate = value;
            if (this._source) {
                this._source.playbackRate = value;
            }
        }
    }, {
        key: 'progress',
        get: function get() {
            return this._source ? this._source.progress || 0 : 0;
        }
    }, {
        key: 'sourceInfo',
        get: function get() {
            return this._source && this._source.info ? this._source.info : {};
        }
    }, {
        key: 'sourceNode',
        get: function get() {
            return this._source ? this._source.sourceNode : null;
        }
    }, {
        key: 'volume',
        get: function get() {
            return this._gain.gain.value;
        },
        set: function set(value) {
            if (!(0, _isSafeNumber2.default)(value)) {
                return;
            }

            window.clearTimeout(this._fadeTimeout);

            value = Math.min(Math.max(value, 0), 1);

            var param = this._gain.gain;
            var time = this._context.currentTime;
            param.cancelScheduledValues(time);
            param.value = value;
            if (!_firefox2.default) {
                param.setValueAtTime(value, time);
            }

            if (this._source && this._source.hasOwnProperty('volume')) {
                this._source.volume = value;
            }
        }
    }, {
        key: 'userData',
        get: function get() {
            return this._userData;
        }
    }]);
    return Sound;
}(_emitter2.default);

// expose for unit tests


exports.default = Sound;
Sound.__source = {
    BufferSource: _bufferSource2.default,
    MediaSource: _mediaSource2.default,
    MicrophoneSource: _microphoneSource2.default,
    OscillatorSource: _oscillatorSource2.default
};
},{"./context":144,"./effects":145,"./source/audio-source":149,"./source/buffer-source":150,"./source/media-source":151,"./source/microphone-source":152,"./source/oscillator-source":153,"./utils/emitter":155,"./utils/file":157,"./utils/firefox":158,"./utils/isSafeNumber":160,"./utils/loader":161,"./utils/utils":166,"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/createClass":8,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/possibleConstructorReturn":11}],149:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = AudioSource;
function AudioSource(Type, data, context, onEnded) {
    var sourceNode = context.createGain();
    var source = create(data);
    var api = {};
    var pool = [];
    var clones = [];
    var numCreated = 0;
    var singlePlay = false;

    function createSourceNode() {
        return sourceNode;
    }

    function disposeSource(src) {
        src.stop();
        if (!singlePlay) {
            pool.push(src);
        }
    }

    function onSourceEnded(src) {
        if (src !== source && clones.length) {
            var index = clones.indexOf(src);
            clones.splice(index, 1);
            disposeSource(src);
        }
        onEnded();
    }

    function create(buffer) {
        return new Type(buffer, context, onSourceEnded);
    }

    function getSource() {
        if (singlePlay || !source.playing) {
            return source;
        }

        if (pool.length > 0) {
            return pool.pop();
        }

        numCreated++;
        if (data.tagName) {
            return create(data.cloneNode());
        }
        return create(data);
    }

    function play(delay, offset) {
        var src = getSource();
        if (sourceNode) {
            src.sourceNode.connect(sourceNode);
        }
        if (src !== source) {
            clones.push(src);
        }
        src.play(delay, offset);
    }

    function stop() {
        source.stop();
        while (clones.length) {
            disposeSource(clones.pop());
        }
    }

    function pause() {
        source.pause();
        clones.forEach(function (src) {
            return src.pause();
        });
    }

    function load(url) {
        stop();
        pool.length = 0;
        source.load(url);
    }

    function destroy() {
        source.destroy();
        while (clones.length) {
            clones.pop().destroy();
        }
        while (pool.length) {
            pool.pop().destroy();
        }
        sourceNode.disconnect();
    }

    /*
     * Getters & Setters
     */

    Object.defineProperties(api, {
        play: {
            value: play
        },
        pause: {
            value: pause
        },
        stop: {
            value: stop
        },
        load: {
            value: load
        },
        destroy: {
            value: destroy
        },
        currentTime: {
            get: function get() {
                return source.currentTime || 0;
            },
            set: function set(value) {
                source.currentTime = value;
                clones.forEach(function (src) {
                    return src.currentTime = value;
                });
            }
        },
        duration: {
            get: function get() {
                return source.duration || 0;
            }
        },
        ended: {
            get: function get() {
                return source.ended && clones.every(function (src) {
                    return src.ended;
                });
            }
        },
        info: {
            get: function get() {
                return {
                    pooled: pool.length,
                    active: clones.length + 1,
                    created: numCreated + 1
                };
            }
        },
        loop: {
            get: function get() {
                return source.loop;
            },
            set: function set(value) {
                source.loop = !!value;
                clones.forEach(function (src) {
                    return src.loop = !!value;
                });
            }
        },
        paused: {
            get: function get() {
                return source.paused;
            }
        },
        playbackRate: {
            get: function get() {
                return source.playbackRate;
            },
            set: function set(value) {
                source.playbackRate = value;
                clones.forEach(function (src) {
                    return src.playbackRate = value;
                });
            }
        },
        playing: {
            get: function get() {
                return source.playing;
            }
        },
        progress: {
            get: function get() {
                return source.progress;
            }
        },
        singlePlay: {
            get: function get() {
                return singlePlay;
            },
            set: function set(value) {
                singlePlay = value;
            }
        },
        sourceNode: {
            get: function get() {
                return createSourceNode();
            }
        },
        volume: {
            get: function get() {
                return source.volume;
            },
            set: function set(value) {
                if (source.hasOwnProperty('volume')) {
                    source.volume = value;
                    clones.forEach(function (src) {
                        return src.volume = value;
                    });
                }
            }
        },
        groupVolume: {
            get: function get() {
                return source.groupVolume;
            },
            set: function set(value) {
                if (!source.hasOwnProperty('groupVolume')) {
                    return;
                }
                source.groupVolume = value;
                clones.forEach(function (src) {
                    return src.groupVolume = value;
                });
            }
        }
    });

    return Object.freeze(api);
}
},{}],150:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = BufferSource;
function BufferSource(buffer, context, endedCallback) {
    var api = {};
    var ended = false;
    var loop = false;
    var paused = false;
    var cuedAt = 0;
    var playbackRate = 1;
    var playing = false;
    var sourceNode = null;
    var startedAt = 0;

    function createSourceNode() {
        if (!sourceNode && context) {
            sourceNode = context.createBufferSource();
            sourceNode.buffer = buffer;
        }
        return sourceNode;
    }

    /*
     * Controls
     */

    function stop() {
        if (sourceNode) {
            sourceNode.onended = null;
            try {
                sourceNode.disconnect();
                sourceNode.stop(0);
            } catch (e) {}
            sourceNode = null;
        }

        paused = false;
        cuedAt = 0;
        playing = false;
        startedAt = 0;
    }

    function pause() {
        var elapsed = context.currentTime - startedAt;
        stop();
        cuedAt = elapsed;
        playing = false;
        paused = true;
    }

    function endedHandler() {
        stop();
        ended = true;
        if (typeof endedCallback === 'function') {
            endedCallback(api);
        }
    }

    function play() {
        var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if (playing) {
            return;
        }

        delay = delay ? context.currentTime + delay : 0;

        if (offset) {
            cuedAt = 0;
        }

        if (cuedAt) {
            offset = cuedAt;
        }

        while (offset > api.duration) {
            offset = offset % api.duration;
        }

        createSourceNode();
        sourceNode.onended = endedHandler;
        sourceNode.start(delay, offset);

        sourceNode.loop = loop;
        sourceNode.playbackRate.value = playbackRate;

        startedAt = context.currentTime - offset;
        ended = false;
        paused = false;
        cuedAt = 0;
        playing = true;
    }

    /*
     * Destroy
     */

    function destroy() {
        stop();
        buffer = null;
        context = null;
        endedCallback = null;
        sourceNode = null;
    }

    /*
     * Getters & Setters
     */

    Object.defineProperties(api, {
        play: {
            value: play
        },
        pause: {
            value: pause
        },
        stop: {
            value: stop
        },
        destroy: {
            value: destroy
        },
        currentTime: {
            get: function get() {
                if (cuedAt) {
                    return cuedAt;
                }
                if (startedAt) {
                    var time = context.currentTime - startedAt;
                    while (time > api.duration) {
                        time = time % api.duration;
                    }
                    return time;
                }
                return 0;
            },
            set: function set(value) {
                cuedAt = value;
            }
        },
        duration: {
            get: function get() {
                return buffer ? buffer.duration : 0;
            }
        },
        ended: {
            get: function get() {
                return ended;
            }
        },
        loop: {
            get: function get() {
                return loop;
            },
            set: function set(value) {
                loop = !!value;
                if (sourceNode) {
                    sourceNode.loop = loop;
                }
            }
        },
        paused: {
            get: function get() {
                return paused;
            }
        },
        playbackRate: {
            get: function get() {
                return playbackRate;
            },
            set: function set(value) {
                playbackRate = value;
                if (sourceNode) {
                    sourceNode.playbackRate.value = playbackRate;
                }
            }
        },
        playing: {
            get: function get() {
                return playing;
            }
        },
        progress: {
            get: function get() {
                return api.duration ? api.currentTime / api.duration : 0;
            }
        },
        sourceNode: {
            get: function get() {
                return createSourceNode();
            }
        }
    });

    return Object.freeze(api);
}
},{}],151:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = MediaSource;
function MediaSource(el, context, onEnded) {
    var api = {};
    var ended = false;
    var endedCallback = onEnded;
    var delayTimeout = null;
    var loop = false;
    var paused = false;
    var playbackRate = 1;
    var playing = false;
    var sourceNode = null;
    var groupVolume = 1;
    var volume = 1;

    function createSourceNode() {
        if (!sourceNode && context) {
            sourceNode = context.createMediaElementSource(el);
        }
        return sourceNode;
    }

    /*
     * Load
     */

    function load(url) {
        el.src = url;
        el.load();
        ended = false;
        paused = false;
        playing = false;
    }

    /*
     * Controls
     */

    function readyHandler() {
        el.removeEventListener('canplaythrough', readyHandler);
        if (playing) {
            el.play();
        }
    }

    /*
     * Ended handler
     */

    function endedHandler() {

        if (loop) {
            el.currentTime = 0;
            // fixes bug where server doesn't support seek:
            if (el.currentTime > 0) {
                el.load();
            }
            el.play();

            return;
        }

        ended = true;
        paused = false;
        playing = false;

        if (typeof endedCallback === 'function') {
            endedCallback(api);
        }
    }

    function play(delay, offset) {
        clearTimeout(delayTimeout);

        el.volume = volume * groupVolume;
        el.playbackRate = playbackRate;

        if (offset) {
            el.currentTime = offset;
        }

        if (delay) {
            delayTimeout = setTimeout(play, delay);
        } else {
            // el.load();
            el.play();
        }

        ended = false;
        paused = false;
        playing = true;

        el.removeEventListener('ended', endedHandler);
        el.addEventListener('ended', endedHandler, false);

        if (el.readyState < 1) {
            el.removeEventListener('canplaythrough', readyHandler);
            el.addEventListener('canplaythrough', readyHandler, false);
            // el.load();
            el.play();
        }
    }

    function pause() {
        clearTimeout(delayTimeout);

        if (!el) {
            return;
        }

        el.pause();
        playing = false;
        paused = true;
    }

    function stop() {
        clearTimeout(delayTimeout);

        if (!el) {
            return;
        }

        el.pause();

        try {
            el.currentTime = 0;
            // fixes bug where server doesn't support seek:
            if (el.currentTime > 0) {
                el.load();
            }
        } catch (e) {}

        playing = false;
        paused = false;
    }

    /*
     * Destroy
     */

    function destroy() {
        el.removeEventListener('ended', endedHandler);
        el.removeEventListener('canplaythrough', readyHandler);
        stop();
        el = null;
        context = null;
        endedCallback = null;
        sourceNode = null;
    }

    /*
     * Getters & Setters
     */

    Object.defineProperties(api, {
        play: {
            value: play
        },
        pause: {
            value: pause
        },
        stop: {
            value: stop
        },
        load: {
            value: load
        },
        destroy: {
            value: destroy
        },
        currentTime: {
            get: function get() {
                return el ? el.currentTime : 0;
            },
            set: function set(value) {
                if (el) {
                    el.currentTime = value;
                }
            }
        },
        duration: {
            get: function get() {
                return el ? el.duration : 0;
            }
        },
        ended: {
            get: function get() {
                return ended;
            }
        },
        loop: {
            get: function get() {
                return loop;
            },
            set: function set(value) {
                loop = !!value;
            }
        },
        paused: {
            get: function get() {
                return paused;
            }
        },
        playbackRate: {
            get: function get() {
                return playbackRate;
            },
            set: function set(value) {
                playbackRate = value;
                if (el) {
                    el.playbackRate = playbackRate;
                }
            }
        },
        playing: {
            get: function get() {
                return playing;
            }
        },
        progress: {
            get: function get() {
                return el && el.duration ? el.currentTime / el.duration : 0;
            }
        },
        sourceNode: {
            get: function get() {
                return createSourceNode();
            }
        },
        volume: {
            get: function get() {
                return volume;
            },
            set: function set(value) {
                volume = value;
                if (el) {
                    el.volume = volume * groupVolume;
                }
            }
        },
        groupVolume: {
            get: function get() {
                return groupVolume;
            },
            set: function set(value) {
                groupVolume = value;
                if (el) {
                    el.volume = volume * groupVolume;
                }
            }
        }
    });

    return Object.freeze(api);
}
},{}],152:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = MicrophoneSource;
function MicrophoneSource(stream, context) {
    var ended = false,
        paused = false,
        cuedAt = 0,
        playing = false,
        sourceNode = null,
        // MicrophoneSourceNode
    startedAt = 0;

    function createSourceNode() {
        if (!sourceNode && context) {
            sourceNode = context.createMediaStreamSource(stream);
            // HACK: stops moz garbage collection killing the stream
            // see https://support.mozilla.org/en-US/questions/984179
            if (navigator.mozGetUserMedia) {
                window.mozHack = sourceNode;
            }
        }
        return sourceNode;
    }

    /*
     * Controls
     */

    function play(delay) {
        delay = delay ? context.currentTime + delay : 0;

        createSourceNode();
        sourceNode.start(delay);

        startedAt = context.currentTime - cuedAt;
        ended = false;
        playing = true;
        paused = false;
        cuedAt = 0;
    }

    function stop() {
        if (sourceNode) {
            try {
                sourceNode.stop(0);
            } catch (e) {}
            sourceNode = null;
        }
        ended = true;
        paused = false;
        cuedAt = 0;
        playing = false;
        startedAt = 0;
    }

    function pause() {
        var elapsed = context.currentTime - startedAt;
        stop();
        cuedAt = elapsed;
        playing = false;
        paused = true;
    }

    /*
     * Destroy
     */

    function destroy() {
        stop();
        context = null;
        sourceNode = null;
        stream = null;
        window.mozHack = null;
    }

    /*
     * Api
     */

    var api = {
        play: play,
        pause: pause,
        stop: stop,
        destroy: destroy,

        duration: 0,
        progress: 0
    };

    /*
     * Getters & Setters
     */

    Object.defineProperties(api, {
        currentTime: {
            get: function get() {
                if (cuedAt) {
                    return cuedAt;
                }
                if (startedAt) {
                    return context.currentTime - startedAt;
                }
                return 0;
            },
            set: function set(value) {
                cuedAt = value;
            }
        },
        ended: {
            get: function get() {
                return ended;
            }
        },
        paused: {
            get: function get() {
                return paused;
            }
        },
        playing: {
            get: function get() {
                return playing;
            }
        },
        sourceNode: {
            get: function get() {
                return createSourceNode();
            }
        }
    });

    return Object.freeze(api);
}
},{}],153:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = OscillatorSource;
function OscillatorSource(type, context) {
    var ended = false,
        paused = false,
        cuedAt = 0,
        playing = false,
        sourceNode = null,
        // OscillatorSourceNode
    startedAt = 0,
        frequency = 200,
        api = null;

    function createSourceNode() {
        if (!sourceNode && context) {
            sourceNode = context.createOscillator();
            sourceNode.type = type;
            sourceNode.frequency.value = frequency;
        }
        return sourceNode;
    }

    /*
     * Controls
     */

    function play(delay) {
        delay = delay || 0;
        if (delay) {
            delay = context.currentTime + delay;
        }

        createSourceNode();
        sourceNode.start(delay);

        if (cuedAt) {
            startedAt = context.currentTime - cuedAt;
        } else {
            startedAt = context.currentTime;
        }

        ended = false;
        playing = true;
        paused = false;
        cuedAt = 0;
    }

    function stop() {
        if (sourceNode) {
            try {
                sourceNode.stop(0);
            } catch (e) {}
            sourceNode = null;
        }
        ended = true;
        paused = false;
        cuedAt = 0;
        playing = false;
        startedAt = 0;
    }

    function pause() {
        var elapsed = context.currentTime - startedAt;
        stop();
        cuedAt = elapsed;
        playing = false;
        paused = true;
    }

    /*
     * Destroy
     */

    function destroy() {
        stop();
        context = null;
        sourceNode = null;
    }

    /*
     * Api
     */

    api = {
        play: play,
        pause: pause,
        stop: stop,
        destroy: destroy
    };

    /*
     * Getters & Setters
     */

    Object.defineProperties(api, {
        currentTime: {
            get: function get() {
                if (cuedAt) {
                    return cuedAt;
                }
                if (startedAt) {
                    return context.currentTime - startedAt;
                }
                return 0;
            },
            set: function set(value) {
                cuedAt = value;
            }
        },
        duration: {
            value: 0
        },
        ended: {
            get: function get() {
                return ended;
            }
        },
        frequency: {
            get: function get() {
                return frequency;
            },
            set: function set(value) {
                frequency = value;
                if (sourceNode) {
                    sourceNode.frequency.value = value;
                }
            }
        },
        paused: {
            get: function get() {
                return paused;
            }
        },
        playing: {
            get: function get() {
                return playing;
            }
        },
        progress: {
            value: 0
        },
        sourceNode: {
            get: function get() {
                return createSourceNode();
            }
        }
    });

    return Object.freeze(api);
}
},{}],154:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = dummy;
function dummy(context) {
    var buffer = context.createBuffer(1, 1, context.sampleRate);
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(0);
    source.stop(0);
    source.disconnect();
}
},{}],155:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _events2.default.EventEmitter;

var Emitter = function (_EventEmitter) {
    (0, _inherits3.default)(Emitter, _EventEmitter);

    function Emitter() {
        (0, _classCallCheck3.default)(this, Emitter);
        return (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));
    }

    Emitter.prototype.off = function off(type, listener) {
        if (listener) {
            return this.removeListener(type, listener);
        }
        if (type) {
            return this.removeAllListeners(type);
        }
        return this.removeAllListeners();
    };

    return Emitter;
}(EventEmitter);

exports.default = Emitter;
},{"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/possibleConstructorReturn":11,"events":14}],156:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = FakeContext;
function FakeContext() {

    var startTime = Date.now();

    function fn() {}

    function param() {
        return {
            value: 1,
            defaultValue: 1,
            linearRampToValueAtTime: fn,
            setValueAtTime: fn,
            exponentialRampToValueAtTime: fn,
            setTargetAtTime: fn,
            setValueCurveAtTime: fn,
            cancelScheduledValues: fn
        };
    }

    function fakeNode() {
        return {
            connect: fn,
            disconnect: fn,
            // analyser
            frequencyBinCount: 0,
            smoothingTimeConstant: 0,
            fftSize: 0,
            minDecibels: 0,
            maxDecibels: 0,
            getByteTimeDomainData: fn,
            getByteFrequencyData: fn,
            getFloatTimeDomainData: fn,
            getFloatFrequencyData: fn,
            // gain
            gain: param(),
            // panner
            panningModel: 0,
            setPosition: fn,
            setOrientation: fn,
            setVelocity: fn,
            distanceModel: 0,
            refDistance: 0,
            maxDistance: 0,
            rolloffFactor: 0,
            coneInnerAngle: 360,
            coneOuterAngle: 360,
            coneOuterGain: 0,
            // filter:
            type: 0,
            frequency: param(),
            Q: param(),
            detune: param(),
            // delay
            delayTime: param(),
            // convolver
            buffer: 0,
            // compressor
            threshold: param(),
            knee: param(),
            ratio: param(),
            attack: param(),
            release: param(),
            reduction: param(),
            // distortion
            oversample: 0,
            curve: 0,
            // buffer
            sampleRate: 1,
            length: 0,
            duration: 0,
            numberOfChannels: 0,
            getChannelData: function getChannelData() {
                return [];
            },
            copyFromChannel: fn,
            copyToChannel: fn,
            // listener
            dopplerFactor: 0,
            speedOfSound: 0,
            // osc
            start: fn
        };
    }

    // ie9
    if (!window.Uint8Array) {
        window.Uint8Array = window.Float32Array = Array;
    }

    return {
        isFake: true,
        activeSourceCount: 0,
        createAnalyser: fakeNode,
        createBuffer: fakeNode,
        createBufferSource: fakeNode,
        createMediaElementSource: fakeNode,
        createMediaStreamSource: fakeNode,
        createBiquadFilter: fakeNode,
        createChannelMerger: fakeNode,
        createChannelSplitter: fakeNode,
        createDynamicsCompressor: fakeNode,
        createConvolver: fakeNode,
        createDelay: fakeNode,
        createGain: fakeNode,
        createOscillator: fakeNode,
        createPanner: fakeNode,
        createScriptProcessor: fakeNode,
        createWaveShaper: fakeNode,
        decodeAudioData: fn,
        destination: fakeNode,
        listener: fakeNode(),
        sampleRate: 44100,
        state: '',
        get currentTime() {
            return (Date.now() - startTime) / 1000;
        }
    };
}
},{}],157:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extensions = [];
var canPlay = {};

/*
 * Initial tests
 */

var tests = [{
    ext: 'ogg',
    type: 'audio/ogg; codecs="vorbis"'
}, {
    ext: 'mp3',
    type: 'audio/mpeg;'
}, {
    ext: 'opus',
    type: 'audio/ogg; codecs="opus"'
}, {
    ext: 'wav',
    type: 'audio/wav; codecs="1"'
}, {
    ext: 'm4a',
    type: 'audio/x-m4a;'
}, {
    ext: 'm4a',
    type: 'audio/aac;'
}];

var el = document.createElement('audio');
if (el) {
    tests.forEach(function (test) {
        var canPlayType = !!el.canPlayType(test.type);
        if (canPlayType && extensions.indexOf(test.ext) === -1) {
            extensions.push(test.ext);
        }
        canPlay[test.ext] = canPlayType;
    });
    el = null;
}

/*
 * find a supported file
 */

function getFileExtension(url) {
    if (typeof url !== 'string') {
        return '';
    }
    // from DataURL
    if (url.slice(0, 5) === 'data:') {
        var match = url.match(/data:audio\/(ogg|mp3|opus|wav|m4a)/i);
        if (match && match.length > 1) {
            return match[1].toLowerCase();
        }
    }
    // from Standard URL
    url = url.split('?')[0];
    url = url.slice(url.lastIndexOf('/') + 1);

    var a = url.split('.');
    if (a.length === 1 || a[0] === '' && a.length === 2) {
        return '';
    }
    return a.pop().toLowerCase();
}

function getSupportedFile(fileNames) {
    var name = void 0;

    if (Array.isArray(fileNames)) {
        // if array get the first one that works
        for (var i = 0; i < fileNames.length; i++) {
            name = fileNames[i];
            var ext = getFileExtension(name);
            if (extensions.indexOf(ext) > -1) {
                break;
            }
        }
    } else if ((typeof fileNames === 'undefined' ? 'undefined' : (0, _typeof3.default)(fileNames)) === 'object') {
        // if not array and is object
        Object.keys(fileNames).some(function (key) {
            name = fileNames[key];
            var ext = getFileExtension(name);
            return extensions.indexOf(ext) > -1;
        });
    }
    // if string just return
    return name || fileNames;
}

/*
 * infer file types
 */

function isAudioBuffer(data) {
    return !!(data && window.AudioBuffer && data instanceof window.AudioBuffer);
}

function isArrayBuffer(data) {
    return !!(data && window.ArrayBuffer && data instanceof window.ArrayBuffer);
}

function isMediaElement(data) {
    return !!(data && window.HTMLMediaElement && data instanceof window.HTMLMediaElement);
}

function isMediaStream(data) {
    return !!(data && typeof data.getAudioTracks === 'function' && data.getAudioTracks().length && window.MediaStreamTrack && data.getAudioTracks()[0] instanceof window.MediaStreamTrack);
}

function isOscillatorType(data) {
    return !!(data && typeof data === 'string' && (data === 'sine' || data === 'square' || data === 'sawtooth' || data === 'triangle'));
}

function isURL(data) {
    return !!(data && typeof data === 'string' && (data.indexOf('.') > -1 || data.slice(0, 5) === 'data:'));
}

function containsURL(config) {
    if (!config || isMediaElement(config)) {
        return false;
    }
    // string, array or object with src/url/data property that is string, array or arraybuffer
    var src = getSrc(config);
    return isURL(src) || isArrayBuffer(src) || Array.isArray(src) && isURL(src[0]);
}

function getSrc(config) {
    return config.src || config.url || config.data || config;
}

exports.default = {
    canPlay: canPlay,
    containsURL: containsURL,
    extensions: extensions,
    getFileExtension: getFileExtension,
    getSrc: getSrc,
    getSupportedFile: getSupportedFile,
    isAudioBuffer: isAudioBuffer,
    isArrayBuffer: isArrayBuffer,
    isMediaElement: isMediaElement,
    isMediaStream: isMediaStream,
    isOscillatorType: isOscillatorType,
    isURL: isURL
};
},{"babel-runtime/helpers/typeof":12}],158:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = navigator && /Firefox/i.test(navigator.userAgent);
},{}],159:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = navigator && /(iPhone|iPad|iPod)/i.test(navigator.userAgent);
},{}],160:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = isSafeNumber;
function isSafeNumber(value) {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}
},{}],161:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = Loader;

var _emitter = require('./emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ERROR_STATE = ['', 'ABORTED', 'NETWORK', 'DECODE', 'SRC_NOT_SUPPORTED'];

function Loader(url, deferLoad) {
    var emitter = new _emitter2.default();

    var audioContext = null;
    var data = null;
    var isTouchLocked = false;
    var progress = 0;
    var request = null;
    var timeout = null;

    function removeListeners() {
        emitter.off();

        if (data && typeof data.removeEventListener === 'function') {
            data.removeEventListener('load', readyHandler);
            data.removeEventListener('canplaythrough', readyHandler);
            data.removeEventListener('error', errorHandler);
            data.onerror = null;
        }

        if (request) {
            request.removeEventListener('progress', progressHandler);
            request.removeEventListener('load', loadHandler);
            request.removeEventListener('error', errorHandler);
        }
    }

    function dispatchComplete(buffer) {
        emitter.emit('progress', 1);
        emitter.emit('loaded', buffer);
        emitter.emit('complete', buffer);

        removeListeners();
    }

    function progressHandler(event) {
        if (event.lengthComputable) {
            progress = event.loaded / event.total;
            emitter.emit('progress', progress);
        }
    }

    function errorHandler() {
        cancelTimeout();

        var status = '';

        if (request) {
            status = request.status + ' ' + request.statusText;
        } else if (data && data.error) {
            status = ERROR_STATE[data.error.code];
        }

        if (emitter.listenerCount('error')) {
            emitter.emit('error', new Error('Load Error: ' + status + ' ' + url));
        }

        removeListeners();
    }

    function cancelTimeout() {
        window.clearTimeout(timeout);
    }

    function decodeArrayBuffer(arraybuffer) {
        audioContext.decodeAudioData(arraybuffer, function (buffer) {
            data = buffer;
            request = null;
            progress = 1;
            dispatchComplete(buffer);
        }, errorHandler);
    }

    function loadHandler() {
        if (request.status >= 400) {
            errorHandler();
            return;
        }
        decodeArrayBuffer(request.response);
    }

    function readyHandler() {
        cancelTimeout();
        if (!data) {
            return;
        }
        if (!data.readyState) {
            errorHandler();
            return;
        }
        progress = 1;
        dispatchComplete(data);
    }

    function cancel() {
        cancelTimeout();
        removeListeners();

        if (request && request.readyState !== 4) {
            request.abort();
        }
        request = null;
    }

    function destroy() {
        cancel();
        request = null;
        data = null;
        audioContext = null;
    }

    // audio buffer

    function loadArrayBuffer() {
        if (url instanceof window.ArrayBuffer) {
            decodeArrayBuffer(url);
            return;
        }
        request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';
        request.addEventListener('progress', progressHandler);
        request.addEventListener('load', loadHandler);
        request.addEventListener('error', errorHandler);
        request.send();
    }

    // audio element

    function loadAudioElement() {
        if (!data || !data.tagName) {
            data = document.createElement('audio');
        }

        if (!isTouchLocked) {
            cancelTimeout();
            timeout = window.setTimeout(readyHandler, 3000);
            data.addEventListener('canplaythrough', readyHandler, false);
            data.addEventListener('load', readyHandler, false);
        }

        data.addEventListener('error', errorHandler, false);
        data.preload = 'auto';
        data.onerror = errorHandler;
        data.src = url;
        data.load();

        if (isTouchLocked) {
            dispatchComplete(data);
        }
    }

    function start() {
        var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!url || deferLoad && !force) {
            return;
        }
        if (audioContext) {
            loadArrayBuffer();
        } else {
            loadAudioElement();
        }
    }

    // reload

    function load(newUrl) {
        url = newUrl;
        start();
    }

    var api = {
        on: emitter.on.bind(emitter),
        once: emitter.once.bind(emitter),
        off: emitter.off.bind(emitter),
        load: load,
        start: start,
        cancel: cancel,
        destroy: destroy
    };

    Object.defineProperties(api, {
        data: {
            get: function get() {
                return data;
            }
        },
        progress: {
            get: function get() {
                return progress;
            }
        },
        audioContext: {
            set: function set(value) {
                audioContext = value;
            }
        },
        isTouchLocked: {
            set: function set(value) {
                isTouchLocked = value;
            }
        },
        url: {
            get: function get() {
                return url;
            }
        }
    });

    return Object.freeze(api);
}

Loader.Group = function () {
    var emitter = new _emitter2.default();
    var queue = [];
    var numLoaded = 0;
    var numTotal = 0;
    var currentLoader = null;

    function progressHandler(progress) {
        var loaded = numLoaded + progress;
        emitter.emit('progress', loaded / numTotal);
    }

    function completeHandler() {
        numLoaded++;
        removeListeners();
        emitter.emit('progress', numLoaded / numTotal);
        next();
    }

    function errorHandler(e) {
        removeListeners();
        if (emitter.listenerCount('error')) {
            emitter.emit('error', e);
        }
        next();
    }

    function next() {
        if (queue.length === 0) {
            currentLoader = null;
            emitter.emit('complete');
            return;
        }

        currentLoader = queue.pop();
        currentLoader.on('progress', progressHandler);
        currentLoader.once('loaded', completeHandler);
        currentLoader.once('error', errorHandler);
        currentLoader.start();
    }

    function removeListeners() {
        currentLoader.off('progress', progressHandler);
        currentLoader.off('loaded', completeHandler);
        currentLoader.off('error', errorHandler);
    }

    function add(loader) {
        queue.push(loader);
        numTotal++;
        return loader;
    }

    function start() {
        numTotal = queue.length;
        next();
    }

    return Object.freeze({
        on: emitter.on.bind(emitter),
        once: emitter.once.bind(emitter),
        off: emitter.off.bind(emitter),
        add: add,
        start: start
    });
};
},{"./emitter":155}],162:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = log;
function log(api) {
    var title = 'sono ' + api.VERSION,
        info = 'Supported:' + api.isSupported + ' WebAudioAPI:' + api.hasWebAudio + ' TouchLocked:' + api.isTouchLocked + ' State:' + (api.context && api.context.state) + ' Extensions:' + api.file.extensions;

    if (navigator.userAgent.indexOf('Chrome') > -1) {
        var args = ['%c ♫ ' + title + ' ♫ %c ' + info + ' ', 'color: #FFFFFF; background: #379F7A', 'color: #1F1C0D; background: #E0FBAC'];
        console.log.apply(console, args);
    } else if (window.console && window.console.log.call) {
        console.log.call(console, title + ' ' + info);
    }
}
},{}],163:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = pageVisibility;
function pageVisibility(onHidden, onShown) {
    var enabled = false;
    var hidden = null;
    var visibilityChange = null;

    if (typeof document.hidden !== 'undefined') {
        hidden = 'hidden';
        visibilityChange = 'visibilitychange';
    } else if (typeof document.mozHidden !== 'undefined') {
        hidden = 'mozHidden';
        visibilityChange = 'mozvisibilitychange';
    } else if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden';
        visibilityChange = 'msvisibilitychange';
    } else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden';
        visibilityChange = 'webkitvisibilitychange';
    }

    function onChange() {
        if (document[hidden]) {
            onHidden();
        } else {
            onShown();
        }
    }

    function enable(value) {
        enabled = value;

        if (enabled) {
            document.addEventListener(visibilityChange, onChange, false);
        } else {
            document.removeEventListener(visibilityChange, onChange);
        }
    }

    if (typeof visibilityChange !== 'undefined') {
        enable(true);
    }

    return {
        get enabled() {
            return enabled;
        },
        set enabled(value) {
            enable(value);
        }
    };
}
},{}],164:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = SoundGroup;

var _group = require('../group');

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SoundGroup(context, destination) {
    var group = new _group2.default(context, destination);
    var sounds = group.sounds;
    var playbackRate = 1,
        loop = false,
        src = void 0;

    function getSource() {
        if (!sounds.length) {
            return;
        }

        src = sounds.slice(0).sort(function (a, b) {
            return b.duration - a.duration;
        })[0];
    }

    var add = group.add;
    group.add = function (sound) {
        add(sound);
        getSource();
        return group;
    };

    var remove = group.remove;
    group.remove = function (soundOrId) {
        remove(soundOrId);
        getSource();
        return group;
    };

    Object.defineProperties(group, {
        currentTime: {
            get: function get() {
                return src ? src.currentTime : 0;
            },
            set: function set(value) {
                this.stop();
                this.play(0, value);
            }
        },
        duration: {
            get: function get() {
                return src ? src.duration : 0;
            }
        },
        // ended: {
        //     get: function() {
        //         return src ? src.ended : false;
        //     }
        // },
        loop: {
            get: function get() {
                return loop;
            },
            set: function set(value) {
                loop = !!value;
                sounds.forEach(function (sound) {
                    sound.loop = loop;
                });
            }
        },
        paused: {
            get: function get() {
                // return src ? src.paused : false;
                return !!src && src.paused;
            }
        },
        progress: {
            get: function get() {
                return src ? src.progress : 0;
            }
        },
        playbackRate: {
            get: function get() {
                return playbackRate;
            },
            set: function set(value) {
                playbackRate = value;
                sounds.forEach(function (sound) {
                    sound.playbackRate = playbackRate;
                });
            }
        },
        playing: {
            get: function get() {
                // return src ? src.playing : false;
                return !!src && src.playing;
            }
        }
    });

    return group;
}
},{"../group":146}],165:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = touchLock;

var _iOS = require('./iOS');

var _iOS2 = _interopRequireDefault(_iOS);

var _dummy = require('./dummy');

var _dummy2 = _interopRequireDefault(_dummy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function touchLock(context, callback) {
    var locked = _iOS2.default;

    function unlock() {
        if (context && context.state === 'suspended') {
            context.resume().then(function () {
                (0, _dummy2.default)(context);
                unlocked();
            });
        } else {
            unlocked();
        }
    }

    function unlocked() {
        document.body.removeEventListener('touchstart', unlock);
        document.body.removeEventListener('touchend', unlock);
        callback();
    }

    function addListeners() {
        document.body.addEventListener('touchstart', unlock, false);
        document.body.addEventListener('touchend', unlock, false);
    }

    if (locked) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', addListeners);
        } else {
            addListeners();
        }
    }

    return locked;
}
},{"./dummy":154,"./iOS":159}],166:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var offlineCtx = void 0;
/*
In contrast with a standard AudioContext, an OfflineAudioContext doesn't render
the audio to the device hardware;
instead, it generates it, as fast as it can, and outputs the result to an AudioBuffer.
*/
function getOfflineContext(numOfChannels, length, sampleRate) {
    if (offlineCtx) {
        return offlineCtx;
    }
    numOfChannels = numOfChannels || 2;
    sampleRate = sampleRate || 44100;
    length = sampleRate || numOfChannels;

    var OfflineCtx = window.OfflineAudioContext || window.webkitOfflineAudioContext;

    offlineCtx = OfflineCtx ? new OfflineCtx(numOfChannels, length, sampleRate) : null;

    return offlineCtx;
}

/*
 * clone audio buffer
 */

function cloneBuffer(buffer) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : buffer.length;

    if (!_context2.default || _context2.default.isFake) {
        return buffer;
    }
    var numChannels = buffer.numberOfChannels;
    var cloned = _context2.default.createBuffer(numChannels, length, buffer.sampleRate);
    for (var i = 0; i < numChannels; i++) {
        cloned.getChannelData(i).set(buffer.getChannelData(i).slice(offset, offset + length));
    }
    return cloned;
}

/*
 * reverse audio buffer
 */

function reverseBuffer(buffer) {
    var numChannels = buffer.numberOfChannels;
    for (var i = 0; i < numChannels; i++) {
        Array.prototype.reverse.call(buffer.getChannelData(i));
    }
    return buffer;
}

/*
 * ramp audio param
 */

function ramp(param, fromValue, toValue, duration, linear) {
    if (_context2.default.isFake) {
        return;
    }

    param.setValueAtTime(fromValue, _context2.default.currentTime);

    if (linear) {
        param.linearRampToValueAtTime(toValue, _context2.default.currentTime + duration);
    } else {
        param.exponentialRampToValueAtTime(toValue, _context2.default.currentTime + duration);
    }
}

/*
 * get frequency from min to max by passing 0 to 1
 */

function getFrequency(value) {
    if (_context2.default.isFake) {
        return 0;
    }
    // get frequency by passing number from 0 to 1
    // Clamp the frequency between the minimum value (40 Hz) and half of the
    // sampling rate.
    var minValue = 40;
    var maxValue = _context2.default.sampleRate / 2;
    // Logarithm (base 2) to compute how many octaves fall in the range.
    var numberOfOctaves = Math.log(maxValue / minValue) / Math.LN2;
    // Compute a multiplier from 0 to 1 based on an exponential scale.
    var multiplier = Math.pow(2, numberOfOctaves * (value - 1.0));
    // Get back to the frequency value between min and max.
    return maxValue * multiplier;
}

/*
 * Format seconds as timecode string
 */

function timeCode(seconds) {
    var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ':';

    // const h = Math.floor(seconds / 3600);
    // const m = Math.floor((seconds % 3600) / 60);
    var m = Math.floor(seconds / 60);
    var s = Math.floor(seconds % 3600 % 60);
    // const hr = (h < 10 ? '0' + h + delim : h + delim);
    var mn = (m < 10 ? '0' + m : m) + delim;
    var sc = s < 10 ? '0' + s : s;
    // return hr + mn + sc;
    return mn + sc;
}

exports.default = {
    getOfflineContext: getOfflineContext,
    cloneBuffer: cloneBuffer,
    reverseBuffer: reverseBuffer,
    ramp: ramp,
    getFrequency: getFrequency,
    timeCode: timeCode
};
},{"../context":144}],167:[function(require,module,exports){
(function (setImmediate,clearImmediate){(function (){
var nextTick = require('process/browser.js').nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
}).call(this)}).call(this,require("timers").setImmediate,require("timers").clearImmediate)
},{"process/browser.js":135,"timers":167}],168:[function(require,module,exports){
(function (global){(function (){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.WHATWGFetch = {})));
}(this, (function (exports) { 'use strict';

  /* eslint-disable no-prototype-builtins */
  var g =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof self !== 'undefined' && self) ||
    // eslint-disable-next-line no-undef
    (typeof global !== 'undefined' && global) ||
    {};

  var support = {
    searchParams: 'URLSearchParams' in g,
    iterable: 'Symbol' in g && 'iterator' in Symbol,
    blob:
      'FileReader' in g &&
      'Blob' in g &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in g,
    arrayBuffer: 'ArrayBuffer' in g
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
      throw new TypeError('Invalid character in header field name: "' + name + '"')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        if (header.length != 2) {
          throw new TypeError('Headers constructor: expected name/value pair to be length 2, found' + header.length)
        }
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body._noBody) return
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
    var encoding = match ? match[1] : 'utf-8';
    reader.readAsText(blob, encoding);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      /*
        fetch-mock wraps the Response object in an ES6 Proxy to
        provide useful test harness features such as flush. However, on
        ES5 browsers without fetch or Proxy support pollyfills must be used;
        the proxy-pollyfill is unable to proxy an attribute unless it exists
        on the object before the Proxy is created. This change ensures
        Response.bodyUsed exists on the instance, while maintaining the
        semantic of setting Request.bodyUsed in the constructor before
        _initBody is called.
      */
      // eslint-disable-next-line no-self-assign
      this.bodyUsed = this.bodyUsed;
      this._bodyInit = body;
      if (!body) {
        this._noBody = true;
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this);
        if (isConsumed) {
          return isConsumed
        } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else if (support.blob) {
        return this.blob().then(readBlobAsArrayBuffer)
      } else {
        throw new Error('could not read as ArrayBuffer')
      }
    };

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    if (!(this instanceof Request)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
    }

    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal || (function () {
      if ('AbortController' in g) {
        var ctrl = new AbortController();
        return ctrl.signal;
      }
    }());
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);

    if (this.method === 'GET' || this.method === 'HEAD') {
      if (options.cache === 'no-store' || options.cache === 'no-cache') {
        // Search for a '_' parameter in the query string
        var reParamSearch = /([?&])_=[^&]*/;
        if (reParamSearch.test(this.url)) {
          // If it already exists then set the value with the current time
          this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
        } else {
          // Otherwise add a new '_' parameter to the end with the current time
          var reQueryString = /\?/;
          this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
        }
      }
    }
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
    // https://github.com/github/fetch/issues/748
    // https://github.com/zloirock/core-js/issues/751
    preProcessedHeaders
      .split('\r')
      .map(function(header) {
        return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
      })
      .forEach(function(line) {
        var parts = line.split(':');
        var key = parts.shift().trim();
        if (key) {
          var value = parts.join(':').trim();
          try {
            headers.append(key, value);
          } catch (error) {
            console.warn('Response ' + error.message);
          }
        }
      });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!(this instanceof Response)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
    }
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    if (this.status < 200 || this.status > 599) {
      throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].")
    }
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 200, statusText: ''});
    response.ok = false;
    response.status = 0;
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = g.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        // This check if specifically for when a user fetches a file locally from the file system
        // Only if the status is out of a normal range
        if (request.url.indexOf('file://') === 0 && (xhr.status < 200 || xhr.status > 599)) {
          options.status = 200;
        } else {
          options.status = xhr.status;
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        setTimeout(function() {
          resolve(new Response(body, options));
        }, 0);
      };

      xhr.onerror = function() {
        setTimeout(function() {
          reject(new TypeError('Network request failed'));
        }, 0);
      };

      xhr.ontimeout = function() {
        setTimeout(function() {
          reject(new TypeError('Network request timed out'));
        }, 0);
      };

      xhr.onabort = function() {
        setTimeout(function() {
          reject(new exports.DOMException('Aborted', 'AbortError'));
        }, 0);
      };

      function fixUrl(url) {
        try {
          return url === '' && g.location.href ? g.location.href : url
        } catch (e) {
          return url
        }
      }

      xhr.open(request.method, fixUrl(request.url), true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr) {
        if (support.blob) {
          xhr.responseType = 'blob';
        } else if (
          support.arrayBuffer
        ) {
          xhr.responseType = 'arraybuffer';
        }
      }

      if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers || (g.Headers && init.headers instanceof g.Headers))) {
        var names = [];
        Object.getOwnPropertyNames(init.headers).forEach(function(name) {
          names.push(normalizeName(name));
          xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
        });
        request.headers.forEach(function(value, name) {
          if (names.indexOf(name) === -1) {
            xhr.setRequestHeader(name, value);
          }
        });
      } else {
        request.headers.forEach(function(value, name) {
          xhr.setRequestHeader(name, value);
        });
      }

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!g.fetch) {
    g.fetch = fetch;
    g.Headers = Headers;
    g.Request = Request;
    g.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],169:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.C4DExportLoader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * C4DExportLoader
 *
 * Class which loads GLTF files exported from Cinema4D and handles
 * per-object metadata added by the COLLADA Export Plus plugin within
 * Cinema4D.
 *
 * (Cinema4D exports COLLADA files, but these are converted to GLTF using 
 * COLLADA2GLTF)
 */

var _gltfLoader = require('../loaders/gltf-loader');

var _c4dMetadata = require('./c4d-metadata');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4DExportLoader = exports.C4DExportLoader = function () {
	function C4DExportLoader() {
		_classCallCheck(this, C4DExportLoader);
	}

	_createClass(C4DExportLoader, [{
		key: 'load',


		/**
   * Loads a given GLTF scene file exported from Cinema4D. 
   * Each node of the scene is checked for metadata in the node name,
   * and any metadata that is found is evaluated. This includes things
   * like shader settings, loading xrefs, etc.
   *
   * Returns a promise which resolves when the scene setup is complete.
   */
		value: function load(src, xrefPath, texPath) {
			return new Promise(function (resolve, reject) {

				_gltfLoader.GLTFLoader.load(src).then(function (data) {

					var promises = [];

					data.gltf.scene.traverse(function (node) {
						if (node.name.length === 0) node.name = node.uuid;
						promises.push(new _c4dMetadata.C4DMetadata(xrefPath, texPath).parse(node));
					});

					Promise.all(promises).then(function (results) {

						var linkObjects = [];
						var hitboxes = [];

						results.filter(function (metadata) {
							return metadata !== null;
						}).forEach(function (metadata) {

							if (metadata.linkObject) {
								linkObjects.push(metadata.linkObject);
							}

							if (metadata.hitbox) {
								hitboxes.push({
									node: metadata.object,
									name: metadata.hitbox,
									target: metadata.target
								});
							}
						});

						resolve({
							scene: data.gltf.scene,
							animations: data.gltf.animations,
							linkObjects: linkObjects,
							hitboxes: hitboxes
						});
					});
				}).catch(function (error) {
					console.error(error);
					reject(error);
				});
			});
		}
	}]);

	return C4DExportLoader;
}();

},{"../loaders/gltf-loader":214,"./c4d-metadata":171}],170:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.C4DLinkObject = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

/**
 * C4DLinkObject
 *
 * Class for handling the linking of animated properties between objects.
 * 
 * Because many animatable properties cannot be exported directly from
 * Cinema4D, these properties are represented instead by null objects. 
 * The world-space x position of the null object is then animated and
 * exported, and this class links that animation to the property
 * specified in the object's metadata information.
 */

var _c4dUtils = require('./c4d-utils');

var _c4dMetadata = require('./c4d-metadata');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cloneDeep = require('clone-deep');

var C4DLinkObject = exports.C4DLinkObject = function () {
	function C4DLinkObject(obj) {
		_classCallCheck(this, C4DLinkObject);

		this.object = obj;
		this.linkTargetName = this.object.metadata.shaderLinkTarget;
		this.linkUniformName = this.object.metadata.shaderLinkUniform;
		this.linkTransformName = this.object.metadata.transformLink;
		this.linkClip = null;
	}

	/**
  * Finds and sets this link object's target object in a given scene
  */


	_createClass(C4DLinkObject, [{
		key: 'setLinkTargetFromScene',
		value: function setLinkTargetFromScene(scene) {
			this.linkTarget = _c4dUtils.C4DUtils.getObjectByShortName(scene, this.linkTargetName);
			this.meshTarget = _c4dUtils.C4DUtils.getChildWithType(this.linkTarget, 'Mesh');
		}

		/**
   * Finds and sets this link object's source animation clip in a given array 
   * of AnimationClips
   */

	}, {
		key: 'setSourceClipFromClipArray',
		value: function setSourceClipFromClipArray(clips) {
			var _this = this;

			if (!this.linkTarget) return;

			// Find all animation clips which use the linkTarget object
			var targetClips = _c4dUtils.C4DUtils.findAnimationClipsForObject(clips, this.linkTarget);

			// Find the one clip that has the property that matches linkUniformName.
			// Only supports the first track, for now.
			this.sourceClip = targetClips.find(function (clip) {
				var track = clip.tracks[0];
				var trackObjectName = track.name.slice(0, track.name.lastIndexOf('.'));
				var trackMetadata = (0, _c4dMetadata.GetMetadataFromName)(trackObjectName);

				return trackMetadata.shaderLinkUniform === _this.linkUniformName;
			});
		}

		/**
   * Returns a copy of a given source AnimationClip, modified to directly animate
   * the linked object's shader uniform.
   */

	}, {
		key: 'getLinkedAnimationClip',
		value: function getLinkedAnimationClip(sourceClip) {
			if (!this.linkTarget) return null;
			if (!this.sourceClip) return null;
			if (!this.meshTarget) return null;
			if (this.linkClip) return this.linkClip;

			// Start with a clone of the original source clip. It will be modified to reflect
			// the changes required to match the animation of the linked shader uniform.
			this.linkClip = cloneDeep(this.sourceClip);

			if (this.linkClip.tracks.length > 1) {
				console.warn('This clip has more than one track. Only the first track will be used.');
			}

			if (this.linkClip.tracks[0].ValueTypeName !== 'vector') {
				console.error('Currently, only tracks of type VectorKeyframeTrack are supported.');
				return;
			}

			// Overwrite the old track in the new clip
			if (this.linkUniformName) {
				this.linkClip.tracks[0] = this.constructUniformTrack();
			} else {
				this.linkClip.tracks[0] = this.constructTransformTrack();
			}

			// Adjust name of the new clip so it doesn't collide with the source clip
			this.linkClip.name += '_linked';

			return this.linkClip;
		}
	}, {
		key: 'constructUniformTrack',
		value: function constructUniformTrack() {
			// Get the string path between the target mesh object and the target linked object
			var meshTargetPath = _c4dUtils.C4DUtils.getStringPathFromParent(this.meshTarget, this.linkTarget);

			// Link a new property on the target mesh to the corresponding shader uniform. The shader uniforms
			// cannot be directly targeted by the threejs animation system, but it can target properties
			// of mesh objects. 
			// 
			// See: https://github.com/mrdoob/three.js/issues/12202
			var meshLinkedPropertyName = 'linkedUniform_' + this.linkUniformName;
			this.meshTarget[meshLinkedPropertyName] = this.meshTarget.material.uniforms[this.linkUniformName];

			// Construct a new track path name so that the track will animate the mesh's property which is
			// linked to the correct shader uniform.
			var shaderUniformPath = meshTargetPath + '.' + meshLinkedPropertyName + '[value]';
			var trackName = this.linkTarget.name + shaderUniformPath;

			// Copy the rest of the track properties directly
			var trackTimes = cloneDeep(this.linkClip.tracks[0].times);
			var trackInterpolation = this.linkClip.tracks[0].getInterpolation();

			// The x coordinate is used for the animated value in the original track. Copy
			// just that coordinate to a new value array. It is the first value of every 3-tuple
			// in the values array.
			var trackValues = this.linkClip.tracks[0].values.filter(function (n, i) {
				return i % 3 === 0;
			});

			// Construct a new NumberKeyframeTrack using the values and timings modified above
			return new THREE.NumberKeyframeTrack(trackName, trackTimes, trackValues, trackInterpolation);
		}
	}, {
		key: 'constructTransformTrack',
		value: function constructTransformTrack() {
			// Construct a new track path name so that the track will animate the target transform parameter
			var trackName = this.linkTarget.name + '.' + this.linkTransformName;

			// Copy the rest of the track properties directly
			var trackValues = cloneDeep(this.linkClip.tracks[0].values);
			var trackTimes = cloneDeep(this.linkClip.tracks[0].times);
			var trackInterpolation = this.linkClip.tracks[0].getInterpolation();

			// Construct a new VectorKeyframeTrack using the values and timings modified above
			return new THREE.VectorKeyframeTrack(trackName, trackTimes, trackValues, trackInterpolation);
		}
	}]);

	return C4DLinkObject;
}();

},{"./c4d-metadata":171,"./c4d-utils":173,"clone-deep":15}],171:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GetMetadataFromName = exports.C4DMetadata = exports.DATUM_ID = exports.DATUM_LARGE = exports.DATUM_MEDIUM = exports.DATUM_SMALL = exports.DATUM_XSMALL = exports.DATUM_SIZE = exports.DATUM_HIGHLIGHTMAP = exports.DATUM_HIGHLIGHT = exports.DATUM_TARGET = exports.DATUM_LINKOBJ = exports.DATUM_TRANSFORM = exports.DATUM_UNIFORM = exports.DATUM_OPACITY = exports.DATUM_HITBOX = exports.DATUM_TYPE = exports.DATUM_XREF = exports.DATUM_COLOR = exports.DATUM_SHADER = exports.DATUM_TEXTURE = exports.PARAM_SEPARATOR = exports.DATUM_SEPARATOR = exports.METADATA_TAG = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * C4DMetadata
 *
 * Class for parsing and handling metadata stored in GLTF models exported
 * from Cinema 4D. The metadata for a given object is stored in the object's
 * name, and is generated by the COLLADA Export Plus plugin within Cinema4D.
 *
 * The plugin allows an artist to attach shaders properties, xrefs, and custom
 * data to an object within Cinema4D. These properties are parsed and applied by 
 * this class.
 */

var _c4dExportLoader = require('./c4d-export-loader');

var _c4dLinkObject = require('./c4d-link-object');

var _c4dUtils = require('./c4d-utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColorShader = require('../shaders/color-shader');
var ColorAlphaShader = require('../shaders/color-alpha-shader');
var LambertShader = require('../shaders/rover-lambert-shader');
var UnlitMapShader = require('../shaders/unlit-map-shader');
var FXLineShader = require('../shaders/flashline-shader');

var METADATA_TAG = exports.METADATA_TAG = 'METADATA';
var DATUM_SEPARATOR = exports.DATUM_SEPARATOR = '___';
var PARAM_SEPARATOR = exports.PARAM_SEPARATOR = '_';

var DATUM_TEXTURE = exports.DATUM_TEXTURE = 'TEX';
var DATUM_SHADER = exports.DATUM_SHADER = 'SHADER';
var DATUM_COLOR = exports.DATUM_COLOR = 'MATCOLOR';
var DATUM_XREF = exports.DATUM_XREF = 'XREF';
var DATUM_TYPE = exports.DATUM_TYPE = 'TYPE';
var DATUM_HITBOX = exports.DATUM_HITBOX = 'HITBOX';
var DATUM_OPACITY = exports.DATUM_OPACITY = 'OPACITY';
var DATUM_UNIFORM = exports.DATUM_UNIFORM = 'UNIFORM';
var DATUM_TRANSFORM = exports.DATUM_TRANSFORM = 'TRANSFORM';
var DATUM_LINKOBJ = exports.DATUM_LINKOBJ = 'LINKOBJ';
var DATUM_TARGET = exports.DATUM_TARGET = 'TARGET';
var DATUM_HIGHLIGHT = exports.DATUM_HIGHLIGHT = 'HIGHLIGHT';
var DATUM_HIGHLIGHTMAP = exports.DATUM_HIGHLIGHTMAP = 'HIGHLIGHTMAP';
var DATUM_SIZE = exports.DATUM_SIZE = 'SIZE';
var DATUM_XSMALL = exports.DATUM_XSMALL = 'XSM';
var DATUM_SMALL = exports.DATUM_SMALL = 'SM';
var DATUM_MEDIUM = exports.DATUM_MEDIUM = 'MD';
var DATUM_LARGE = exports.DATUM_LARGE = 'LG';
var DATUM_ID = exports.DATUM_ID = 'ID';

var SHADER_NAME_BASIC = 'BASIC';
var SHADER_NAME_LAMBERT = 'LAMBERT';
var SHADER_NAME_FX_LINES = 'FXLINES';
var SHADER_NAME_UNLIT_MAP = 'UNLITMAP';

var C4DMetadata = exports.C4DMetadata = function () {
	function C4DMetadata(xrefPath, texPath) {
		_classCallCheck(this, C4DMetadata);

		this.xrefPath = xrefPath || '';
		this.texPath = texPath || '';
	}

	/**
  * Parses and applies any metadata found in a given object.
  * Returns a promise which resolves when the parsing is complete.
  */


	_createClass(C4DMetadata, [{
		key: 'parse',
		value: function parse(obj) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				if (!obj.name.includes(METADATA_TAG)) {
					resolve(null);return;
				}

				_this.obj = obj;
				_this.mesh = _c4dUtils.C4DUtils.getChildWithType(_this.obj, 'Mesh');
				_this.material = null;

				_this.obj.metadata = GetMetadataFromName(_this.obj.name);
				_this.obj.metadata.object = _this.obj;
				_this.obj.metadata.mesh = _this.mesh;

				var promises = [];

				promises.push(_this.handleTextureDatum());
				promises.push(_this.handleHighlightMapDatum());
				promises.push(_this.handleXRefDatum());

				Promise.all(promises).then(function (results) {
					_this.applyMaterial();
					_this.getLinkObject();

					resolve(_this.obj.metadata);
				});
			});
		}

		/**
   * Loads any relevant textures specified in the metadata.
   * Returns a promise which resolves when the texture is loaded.
   */

	}, {
		key: 'handleTextureDatum',
		value: function handleTextureDatum() {
			var _this2 = this;

			return new Promise(function (resolve, reject) {
				if (!_this2.obj.metadata.texture) {
					resolve();return;
				}

				var src = _this2.texPath + _this2.obj.metadata.texture;
				var texLoader = new THREE.TextureLoader();

				_this2.obj.metadata.texture = texLoader.load(src, function (texture) {
					resolve();
				}, function (progress) {}, function (error) {
					reject(error);
				});
			});
		}

		/**
   * Loads any relevant highlight map images specified in the metadata.
   * Returns a promise which resolves when the image is loaded.
   */

	}, {
		key: 'handleHighlightMapDatum',
		value: function handleHighlightMapDatum() {
			var _this3 = this;

			return new Promise(function (resolve, reject) {
				if (!_this3.obj.metadata.highlightMap) {
					resolve();return;
				}

				var src = _this3.texPath + _this3.obj.metadata.highlightMap;
				var texLoader = new THREE.TextureLoader();

				_this3.obj.metadata.highlightMap = texLoader.load(src, function (texture) {
					resolve();
				}, function (progress) {}, function (error) {
					reject(error);
				});
			});
		}

		/**
   * Loads any external xref'd models specified in the metadata.
   * Returns a promise which resolves when the model is loaded.
   */

	}, {
		key: 'handleXRefDatum',
		value: function handleXRefDatum() {
			var _this4 = this;

			return new Promise(function (resolve, reject) {
				if (!_this4.obj.metadata.xref) {
					resolve();return;
				}

				var src = _this4.xrefPath + _this4.obj.metadata.xref + '.glb';
				var xrefLoader = new _c4dExportLoader.C4DExportLoader();

				xrefLoader.load(src, _this4.xrefPath, _this4.texPath).then(function (response) {
					response.scene.scale.copy(new THREE.Vector3(100, 100, 100));
					_this4.obj.add(response.scene);
					resolve();
				});
			});
		}

		/**
   * Creates any C4DLinkObjects specified in the metadata.
   * A C4DLinkObject binds an object's animated position parameter
   * to a shader parameter of a target object. This allows an artist
   * to animate THREEJS shader parameters within Cinema4D.
   */

	}, {
		key: 'getLinkObject',
		value: function getLinkObject() {
			if (!this.obj) return;
			if (!this.obj.metadata) return;
			if (!this.obj.metadata.shaderLinkTarget) return;
			if (!this.obj.metadata.shaderLinkUniform && !this.obj.metadata.transformLink) return;

			this.obj.metadata.linkObject = new _c4dLinkObject.C4DLinkObject(this.obj);
		}

		/**
   * Creates and applies a new material based on any relevant parameters 
   * specified in the metadata.
   */

	}, {
		key: 'applyMaterial',
		value: function applyMaterial() {
			if (!this.obj) return;
			if (!this.mesh) return;
			if (this.obj.metadata.type === 'TILE') return;

			var shader = null;

			// Get the correct shader for the given object's shader name
			switch (this.obj.metadata.shaderName) {
				case SHADER_NAME_BASIC:
					shader = this.obj.metadata.transparent ? ColorAlphaShader : ColorShader;break;
				case SHADER_NAME_LAMBERT:
					shader = LambertShader;break;
				case SHADER_NAME_UNLIT_MAP:
					shader = UnlitMapShader;break;
				case SHADER_NAME_FX_LINES:
					shader = FXLineShader;break;
			}

			// Create uniforms object from the correct shader
			var uniforms = THREE.UniformsUtils.clone(shader.uniforms);

			// Set map uniform if a texture exists
			if (this.obj.metadata.texture && uniforms.hasOwnProperty('map')) {
				uniforms.map.value = this.obj.metadata.texture;
			}

			// Set highlight map uniform if it exists
			if (this.obj.metadata.highlightMap && uniforms.hasOwnProperty('highlightMap')) {
				uniforms.highlightMap.value = this.obj.metadata.highlightMap;
			}

			// Set opacity uniform if it exists
			if (this.obj.metadata.transparent && uniforms.hasOwnProperty('opacity')) {
				uniforms.opacity.value = this.obj.metadata.opacity;
			}

			// Set color uniform if it exists
			if (this.obj.metadata.color && uniforms.hasOwnProperty('color')) {
				uniforms.color.value = this.obj.metadata.color;
			}

			// Create and apply a new ShaderMaterial
			this.mesh.material = new THREE.ShaderMaterial({
				uniforms: uniforms,
				vertexShader: shader.vertexShader,
				fragmentShader: shader.fragmentShader,
				transparent: this.obj.metadata.transparent,
				side: THREE.DoubleSide
			});

			this.obj.metadata.material = this.mesh.material;
		}
	}]);

	return C4DMetadata;
}();

/**
 * Static function for parsing the metadata stored in an object's name string.
 * Returns an object with the parsed metadata.
 */


var GetMetadataFromName = exports.GetMetadataFromName = function GetMetadataFromName(name) {

	// Set defaults
	var result = {
		type: null,
		color: new THREE.Color(0xFFFFFF),
		opacity: 1,
		shaderName: SHADER_NAME_BASIC,
		shaderLinkTarget: null,
		shaderLinkUniform: null,
		transformLink: null,
		transparent: false,
		highlightMap: null,
		highlight: null,
		texture: null,
		hitbox: null,
		target: null,
		xref: null,
		size: 64,
		id: null,
		xsmallPrefix: '_xsm',
		smallPrefix: '_sm',
		hasMediumSize: false,
		hasLargeSize: false,
		material: null,
		object: null,
		mesh: null
	};

	name.split(METADATA_TAG).pop().split(DATUM_SEPARATOR).forEach(function (d) {
		if (!d.length) return;

		var i = d.indexOf(PARAM_SEPARATOR);
		var datumType = d.slice(0, i === -1 ? undefined : i);
		var datumParam = d.slice(i + 1);

		switch (datumType) {

			case DATUM_TEXTURE:
				result.texture = datumParam;
				break;

			case DATUM_COLOR:
				result.color = new THREE.Color('#' + datumParam);
				break;

			case DATUM_OPACITY:
				result.opacity = parseFloat(datumParam) * 100;
				result.transparent = true;
				break;

			case DATUM_SHADER:
				result.shaderName = datumParam;
				break;

			case DATUM_TYPE:
				result.type = datumParam;
				break;

			case DATUM_XREF:
				result.xref = datumParam;
				break;

			case DATUM_HITBOX:
				result.hitbox = datumParam;
				break;

			case DATUM_TARGET:
				result.target = datumParam;
				break;

			case DATUM_LINKOBJ:
				result.shaderLinkTarget = datumParam;
				break;

			case DATUM_UNIFORM:
				result.shaderLinkUniform = datumParam;
				break;

			case DATUM_TRANSFORM:
				result.transformLink = datumParam;
				break;

			case DATUM_HIGHLIGHT:
				result.highlight = datumParam;
				break;

			case DATUM_HIGHLIGHTMAP:
				result.highlightMap = datumParam;
				break;

			case DATUM_SIZE:
				result.size = parseFloat(datumParam);
				break;

			case DATUM_XSMALL:
				result.xsmallPrefix = '_' + datumParam;
				break;

			case DATUM_SMALL:
				result.smallPrefix = '_' + datumParam;
				break;

			case DATUM_MEDIUM:
				result.hasMediumSize = datumParam === '1';
				break;

			case DATUM_LARGE:
				result.hasLargeSize = datumParam === '1';
				break;

			case DATUM_ID:
				result.id = datumParam;
				break;
		}
	});

	return result;
};

},{"../shaders/color-alpha-shader":219,"../shaders/color-shader":221,"../shaders/flashline-shader":225,"../shaders/rover-lambert-shader":229,"../shaders/unlit-map-shader":233,"./c4d-export-loader":169,"./c4d-link-object":170,"./c4d-utils":173}],172:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.C4DSceneManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = require('eventemitter3');

var _c4dUtils = require('./c4d-utils');

var _c4dExportLoader = require('./c4d-export-loader');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * C4DSceneManager
 *
 * Class which loads and manages THREE.AnimationClip playback for an entire 
 * scene file exported using the COLLADA Export Plus plugin in Cinema4D.
 */

var C4DSceneManager = exports.C4DSceneManager = function (_EventEmitter) {
	_inherits(C4DSceneManager, _EventEmitter);

	function C4DSceneManager() {
		_classCallCheck(this, C4DSceneManager);

		var _this = _possibleConstructorReturn(this, (C4DSceneManager.__proto__ || Object.getPrototypeOf(C4DSceneManager)).call(this));

		_this.isPlaying = false;
		_this.duration = 0;
		return _this;
	}

	/**
  * Loads a given GLTF scene file exported from Cinema4D. 
  * Animations and LinkObjects are set up and added to an 
  * AnimationMixer for playback.
  *
  * Returns a promise which resolves when both the scene and 
  * animation setups are complete.
  */


	_createClass(C4DSceneManager, [{
		key: 'load',
		value: function load(src, xrefPath, texPath) {
			var _this2 = this;

			return new Promise(function (resolve, reject) {

				_this2.loader = new _c4dExportLoader.C4DExportLoader();
				_this2.loader.load(src, xrefPath, texPath).then(function (response) {

					_this2.scene = response.scene;
					_this2.animClips = response.animations;
					_this2.linkObjects = response.linkObjects;
					_this2.hitboxes = response.hitboxes;
					_this2.highlights = {};

					_this2.initHitboxes();
					_this2.initAnimation();
					_this2.sortObjectsByType();

					resolve(response.scene);
				}).catch(function (error) {
					return reject(error);
				});
			});
		}

		/**
   * Match hitbox meshes to their corresponding rover-poi entities
   */

	}, {
		key: 'initHitboxes',
		value: function initHitboxes() {
			var _this3 = this;

			this.scene.traverse(function (node) {
				if (!node.metadata) return;
				if (!node.metadata.highlight) return;

				if (!_this3.highlights.hasOwnProperty(node.metadata.highlight)) {
					_this3.highlights[node.metadata.highlight] = [];
				}

				_this3.highlights[node.metadata.highlight].push(node.metadata.mesh);
			});

			// Add hitboxes to their corresponding POI objects
			this.hitboxes.forEach(function (hitbox) {
				var marker = document.getElementById('rover_poi_' + hitbox.name);
				var target = marker.getAttribute('rover-poi').target;
				marker.emit('mesh-added', hitbox.node, false);
				marker.emit('materials-added', _this3.highlights[target], false);
			});
		}

		/**
   * Creates and initializes animation playback for the loaded scene
   */

	}, {
		key: 'initAnimation',
		value: function initAnimation() {
			var _this4 = this;

			// Create new AnimationMixer for clip playback
			this.animMixer = new THREE.AnimationMixer(this.scene);

			// Create AnimationClips for each C4DLinkObject.
			this.linkObjects.forEach(function (linkObject) {
				linkObject.setLinkTargetFromScene(_this4.scene);
				linkObject.setSourceClipFromClipArray(_this4.animClips);

				var linkedClip = linkObject.getLinkedAnimationClip();
				if (linkedClip) _this4.animClips.push(linkedClip);
			});

			// Get the duration of the entire animation, which is the duration of the longest clip
			this.animClips.forEach(function (clip) {
				_this4.duration = Math.max(_this4.duration, clip.duration);
			});

			// Create AnimationActions for each clip
			this.animActions = this.animClips.map(function (clip) {
				return _this4.animMixer.clipAction(clip);
			});

			// Configure AnimationAction playback properties
			this.animActions.forEach(function (action) {
				action.clampWhenFinished = true;
				action.loop = THREE.LoopOnce;
				action.play();
			});

			// Tick the mixer forward one frame, then reset immediately.
			// This ensures that the animation will pause at the first frame
			// until the play() function is called.
			this.animMixer.update(1 / 60);
			this.animMixer.stopAllAction();
		}

		/**
   * Sorts all scene objects by metadata types. This is used only for
   * the rover scene, so the type names are hardcoded.
   */

	}, {
		key: 'sortObjectsByType',
		value: function sortObjectsByType() {
			var _this5 = this;

			this.objectsByType = { LINES: [], PART: [], SKYCRANE: [], IMAGEPLANE: [] };

			this.scene.traverse(function (node) {
				if (!node.metadata) return;
				if (!node.metadata.type) return;
				_this5.objectsByType[node.metadata.type].push(node);
			});
		}

		/**
   * Disables textures on all objects with type PART
   */

	}, {
		key: 'hidePartTextures',
		value: function hidePartTextures() {
			this.objectsByType.PART.forEach(function (part) {
				var mesh = _c4dUtils.C4DUtils.getChildWithType(part, 'Mesh');
				mesh.material.uniforms.color.value = new THREE.Color(0);
			});
		}

		/**
   * Enables textures on all objects with the type PART
   */

	}, {
		key: 'showPartTextures',
		value: function showPartTextures() {
			this.objectsByType.PART.forEach(function (part) {
				var mesh = _c4dUtils.C4DUtils.getChildWithType(part, 'Mesh');
				mesh.material.uniforms.color.value = new THREE.Color(0xFFFFFF);
			});
		}

		/**
   * Removes all objects of a given type from the scene
   */

	}, {
		key: 'removeObjectsWithType',
		value: function removeObjectsWithType(type) {
			this.objectsByType[type].forEach(function (obj) {
				var mesh = _c4dUtils.C4DUtils.getChildWithType(obj, 'Mesh');
				obj.remove(mesh);
			});
		}

		/**
   * Starts playback for all AnimationActions in the scene
   */

	}, {
		key: 'play',
		value: function play() {
			this.animActions.forEach(function (action) {
				return action.play();
			});
			this.isPlaying = true;
		}

		/**
   * Updates the master AnimationMixer timeline to the last frame.
   */

	}, {
		key: 'stopAtLastFrame',
		value: function stopAtLastFrame() {
			this.animActions.forEach(function (action) {
				return action.play();
			});
			this.animMixer.update(this.duration);
			this.animMixer.stopAllAction();
		}

		/** 
   * Updates the master AnimationMixer timeline with a given delta time
   */

	}, {
		key: 'tick',
		value: function tick(t, dt) {
			if (!this.isPlaying) return;
			this.animMixer.update(dt);
		}
	}]);

	return C4DSceneManager;
}(_eventemitter.EventEmitter);

},{"./c4d-export-loader":169,"./c4d-utils":173,"eventemitter3":126}],173:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.C4DUtils = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * C4DUtils
 *
 * Singleton class containing various utility functions used by the 
 * Cinema4D scene animation / management system.
 */

var _c4dMetadata = require('./c4d-metadata');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StaticC4DUtils = function () {
	function StaticC4DUtils() {
		_classCallCheck(this, StaticC4DUtils);
	}

	_createClass(StaticC4DUtils, [{
		key: 'getShortName',


		/**
   * Returns an object's name, stripped of metadata
   */
		value: function getShortName(obj) {
			var name = obj;
			if (typeof obj !== 'string') name = obj.name;
			if (!name.includes(_c4dMetadata.METADATA_TAG)) return name;
			return name.split(_c4dMetadata.METADATA_TAG).shift();
		}

		/**
   * Searches a given object's children and returns the first object which
   * matches a given short name
   */

	}, {
		key: 'getObjectByShortName',
		value: function getObjectByShortName(searchObject, name) {

			if (this.getShortName(searchObject) === name) return searchObject;

			for (var i = 0, l = searchObject.children.length; i < l; i++) {
				var child = searchObject.children[i];
				var object = this.getObjectByShortName(child, name);

				if (object !== undefined) return object;
			}

			return undefined;
		}

		/**
   * Searches a given object's hierarchy and returns the first child 
   * which matches a given type
   */

	}, {
		key: 'getChildWithType',
		value: function getChildWithType(searchObject, type) {
			if (!searchObject) return null;
			if (searchObject.type === type) return searchObject;

			for (var i = 0, l = searchObject.children.length; i < l; i++) {
				var child = searchObject.children[i];
				var object = this.getChildWithType(child, type);

				if (object !== undefined) return object;
			}

			return undefined;
		}

		/**
   * Returns a directory-style path string leading from a given
   * parent object to a given target object.
   */

	}, {
		key: 'getStringPathFromParent',
		value: function getStringPathFromParent(target, parent, path) {

			var pathToString = function pathToString() {
				var result = '';
				path.reverse();
				path.shift();
				path.forEach(function (entry) {
					return result += '/' + entry;
				});
				return result;
			};

			if (path === undefined) path = [target.name];
			if (target === parent) return pathToString();
			if (!target.parent) return pathToString();

			path.push(target.parent.name);

			return this.getStringPathFromParent(target.parent, parent, path);
		}

		/**
   * Searches a given array of AnimationClip objects and returns all clips
   * that have keyframe tracks for a given object.
   */

	}, {
		key: 'findAnimationClipsForObject',
		value: function findAnimationClipsForObject(clips, obj) {
			var name = this.getShortName(obj);

			return clips.filter(function (clip) {

				for (var i = 0, l = clip.tracks.length; i < l; i++) {

					var track = clip.tracks[i];
					var trackObjectName = track.name.slice(0, track.name.lastIndexOf('.'));
					var trackMetadata = (0, _c4dMetadata.GetMetadataFromName)(trackObjectName);

					if (trackMetadata.shaderLinkTarget === name) return true;
				}

				return false;
			});
		}
	}]);

	return StaticC4DUtils;
}();

var C4DUtils = exports.C4DUtils = new StaticC4DUtils();

},{"./c4d-metadata":171}],174:[function(require,module,exports){
'use strict';

var _scene = require('../core/scene');

var _eventemitter = require('eventemitter3');

var _parabolicPointer = require('../third_party/biagioli/parabolic-pointer');

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * better-raycaster
 *
 * An extension of AFRAME's raycaster, which implements a sort of
 * event bubbling mechanism for collision events.
 *
 * Events are sorted by an event-priority component, then by distance
 * to the raycaster origin. If multiple objects are intersected, the
 * event is emitted on all intersected objects, unless an object has
 * the 'consume-click' attribute set, which will stop the event
 * from being emitted on any objects further down the intersection
 * stack.
 *
 * If the user is using a VR hand controller and the terrain is intersected,
 * a parabola teleporation arc is calculated while the controller button is
 * pressed. This provides a nice intuitive way of selecting a teleportation
 * spot, which avoids the pitfalls of pointer precision decreasing as
 * the terrain falls away from the camera.
 */
var scaleDummy = new THREE.Vector3();

var FWD_VECTOR = new THREE.Vector3(0, 0, -1);
var UP_VECTOR = new THREE.Vector3(0, 1, 0);

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('better-raycaster', {

		isRaycaster: true,

		schema: {
			far: { default: Infinity },
			interval: { default: 0 },
			near: { default: 0 },
			objects: { default: '' },
			recursive: { default: true },
			useCursor: { default: false },
			initialVelocity: { type: 'vec3', default: new THREE.Vector3(0, 0, -12) },
			acceleration: { type: 'vec3', default: new THREE.Vector3(0, -9.8, 0) },
			numArcPoints: { default: 50 },
			arcPointSpacing: { default: 0.5 },
			controllerType: { default: 'mouse-touch' }
		},

		init: function init() {
			var _this = this;

			this.direction = new THREE.Vector3();
			this.mouse = new THREE.Vector2();
			this.isButtonDown = false;
			this.isTouchActive = false;
			this.intersectedEls = [];
			this.objects = null;
			this.raycaster = new THREE.Raycaster();
			this.buttonHoldTime = 0;

			this.origin = new THREE.Vector3();
			this.parabolaPoints = [];
			this.parabolicPointer = new _parabolicPointer.ParabolicPointer();
			this.terrainIntersection = new THREE.Vector3();
			this.lastTerrainIntersection = new THREE.Vector3();

			this.tryAddingInteraction();

			this.parent = document.getElementById('daydream-debug') || this.el;

			this.el.sceneEl.addEventListener('terrain-intersected', function (event) {
				_this.lastTerrainIntersection.copy(event.detail.point);
			});

			// event for exiting vr
			_scene.Scene.on('on-controls-ready', this.checkForVisibility.bind(this));

			// used to throttle tick method on slower devices
			this.tickCount = 0;
			this.tickIncrement = AFRAME.utils.device.isMobile() ? 3 : 1;
		},

		/*
  	 * Interaction models are attatched based on controller and device type
   */
		tryAddingInteraction: function tryAddingInteraction() {

			var isMouseTouch = this.data.controllerType === 'mouse-touch';
			var isMobile = AFRAME.utils.device.isMobile();

			// mobile touch and cardboard
			if (isMouseTouch && isMobile) {
				this.el.sceneEl.addEventListener('touchstart', this.onTouch.bind(this));
				this.el.sceneEl.addEventListener('touchend', this.onTouch.bind(this));

				// desktop
			} else if (isMouseTouch) {
				this.el.sceneEl.addEventListener('mousemove', this.onMouseMove.bind(this));
				this.el.sceneEl.addEventListener('mousedown', this.onMouseDown.bind(this));
				this.el.sceneEl.addEventListener('mouseup', this.onMouseUp.bind(this));

				// vr controllers
			} else {
				this.controller = document.getElementById('right-hand');
				this.controller.addEventListener('buttonchanged', this.onControllerChanged.bind(this));
			}
		},
		checkForVisibility: function checkForVisibility() {
			this.el.setAttribute('visible', !this.isRaycasterDeactivated());
		},


		play: function play() {
			this.el.sceneEl.addEventListener('child-attached', this.refreshObjects.bind(this));
			this.el.sceneEl.addEventListener('child-detached', this.refreshObjects.bind(this));
			this.el.sceneEl.addEventListener('mesh-added', this.refreshObjects.bind(this));
			_scene.Scene.on('force-added', this.refreshObjects.bind(this));
		},

		/**
   * Create or update raycaster object.
   */
		update: function update() {
			if (this.isRaycasterDeactivated()) return;

			this.raycaster.far = this.data.far;
			this.raycaster.near = this.data.near;
			this.tryGetCamera();
			this.refreshObjects();
		},

		tryGetCamera: function tryGetCamera() {
			if (this.camera) return;

			var cameraEl = document.getElementById('camera');

			// This component can exist before the camera is fully set up,
			// so these checks are required to prevent null references.
			// This could probably be replaced with a try/catch block.
			if (!cameraEl) return;
			if (!cameraEl.components) return;
			if (!cameraEl.components.camera) return;
			if (!cameraEl.components.camera.camera) return;

			this.camera = cameraEl.components.camera.camera;
		},

		/**
   * Update list of objects to test for intersection.
   */
		refreshObjects: function refreshObjects() {
			// Push meshes onto list of objects to intersect.
			if (this.data.objects) {

				var objectEls = this.el.sceneEl.querySelectorAll(this.data.objects);

				this.objects = [];
				for (var i = 0; i < objectEls.length; i++) {
					this.objects.push(objectEls[i].object3D);
				}
			} else {
				// If objects not defined, intersect with everything.
				this.objects = this.el.sceneEl.object3D.children;
			}
		},

		onControllerChanged: function onControllerChanged(event) {
			if (this.isRaycasterDeactivated()) return;

			if (!this.controller.getAttribute('visible')) {
				this.controller.setAttribute('visible', true);
			}
			if (event.detail.state.pressed) {
				this.onControllerButtonDown();
			} else {
				this.onControllerButtonUp();
			}
		},

		onControllerButtonDown: function onControllerButtonDown() {
			if (this.isButtonDown) return;
			this.onMouseDown();
		},

		onControllerButtonUp: function onControllerButtonUp() {
			if (!this.isButtonDown) return;
			this.onMouseUp();
		},

		onTouch: function onTouch(event) {
			if (this.isRaycasterDeactivated()) return;

			if (_scene.Scene.controllerType === 'mouse-touch') {
				this.mouse.x = event.changedTouches[0].clientX / window.innerWidth * 2 - 1;
				this.mouse.y = -(event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
			} else {
				this.mouse.x = 0;
				this.mouse.y = 0;
			}

			var intersections = this.checkIntersections();

			var isTouchOverTerrain = intersections === 'collision';
			var isTouchOverSky = intersections === 'boundary-sphere';

			if (isTouchOverTerrain || isTouchOverSky || _scene.Scene.modeType === 'vr') {
				this.mouse.x = 0;
				this.mouse.y = 0;
				this.checkIntersections();
			}

			switch (event.type) {
				case 'touchstart':
					this.isTouchActive = true;
					this.onMouseDown();
					break;
				case 'touchend':
					this.isTouchActive = true;
					this.onMouseUp();
					break;
			}
		},

		onMouseDown: function onMouseDown(event) {
			var _this2 = this;

			if (this.isRaycasterDeactivated()) return;
			if (this.isButtonDown) return;

			var clickConsumed = false;
			this.buttonHoldTime = 0;
			this.isButtonDown = true;

			this.el.emit('raycaster-cursor-down', this.intersectedEls, false);

			this.intersectedEls.forEach(function (intersectedEl) {
				if (!clickConsumed) {
					intersectedEl.emit('raycaster-cursor-down', {
						el: _this2.el,
						buttonHoldTime: _this2.buttonHoldTime
					});

					if (intersectedEl.hasAttribute('consume-click')) {
						clickConsumed = true;
					}
				}
			});
		},

		onMouseUp: function onMouseUp(event) {
			var _this3 = this;

			if (this.isRaycasterDeactivated()) return;

			var clickConsumed = false;
			this.isButtonDown = false;

			this.el.emit('raycaster-cursor-up', {
				buttonHoldTime: this.buttonHoldTime
			}, false);

			this.intersectedEls.forEach(function (intersectedEl) {

				if (!clickConsumed && intersectedEl.parentNode) {
					var name = intersectedEl.id === '' ? intersectedEl.parentNode.id : intersectedEl.id;
					intersectedEl.emit('raycaster-cursor-up', {
						el: _this3.el,
						buttonHoldTime: _this3.buttonHoldTime
					});

					if (intersectedEl.hasAttribute('consume-click')) {
						clickConsumed = true;
					}
				}
			});

			this.buttonHoldTime = 0;
		},

		onMouseMove: function onMouseMove(event) {
			this.mouse.x = event.clientX / window.innerWidth * 2 - 1;
			this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
			this.checkIntersections();
		},

		tick: function tick(t, dt) {
			if (this.isRaycasterDeactivated()) return;
			if (this.isTickThrottled()) return;

			this.tryGetCamera();

			if (this.isTouchActive) {
				this.isTouchActive = false;
				return;
			}

			if (this.isButtonDown) {
				this.buttonHoldTime += dt / 1000;
			}

			if (AFRAME.utils.device.isMobile()) {
				this.mouse.x = 0;
				this.mouse.y = 0;
			}

			this.checkIntersections();
		},

		sortIntersections: function sortIntersections() {
			var _this4 = this;

			// Get all elements which do not have the event-priority attribute
			var elsWithoutPriority = this.intersectedEls.filter(function (el) {
				return !el.hasAttribute('event-priority');
			});

			// Get all elements which have the event-priority attribute
			var elsWithPriority = this.intersectedEls.filter(function (el) {
				return el.hasAttribute('event-priority');
			});

			// Sort priority elements by their priority value
			elsWithPriority.sort(function (a, b) {
				var priorityA = a.getAttribute('event-priority');
				var priorityB = b.getAttribute('event-priority');
				return priorityB - priorityA;
			});

			// Create new array from sorted priority elements
			this.intersectedEls = Array.from(elsWithPriority);

			// Add the unsorted elements without priority to the end
			elsWithoutPriority.forEach(function (el) {
				_this4.intersectedEls.push(el);
			});

			return this.intersectedEls;
		},

		checkIntersections: function checkIntersections() {
			var _this5 = this;

			if (this.isRaycasterDeactivated()) return;
			if (!this.el.sceneEl.is('interactive')) return;

			var currentIntersectedEl = 'none';

			this.calcParabolaArc();
			this.updateOriginDirection();

			var intersections = this.raycaster.intersectObjects(this.objects, this.data.recursive);

			// Store old previously intersected entities.
			var prevIntersectedEls = Array.from(this.intersectedEls);

			// Only keep intersections against objects that have a reference to an entity.
			intersections = intersections.filter(function (intersection) {
				return !!intersection.object.el;
			});

			// Only keep intersections against objects that are visible
			intersections = intersections.filter(function (intersection) {
				return _this5.isParentVisible(intersection.object);
			});

			// Update intersectedEls
			this.intersectedEls = intersections.map(function (intersection) {
				return intersection.object.el;
			});

			this.intersectedEls = this.sortIntersections();

			var clickConsumed = false;
			// Emit intersected on intersected entity per intersected entity.
			intersections.forEach(function (intersection) {
				var intersectedEl = intersection.object.el;
				intersectedEl.intersection = intersection;

				if (!clickConsumed) {
					currentIntersectedEl = intersectedEl.id;
					intersectedEl.emit('raycaster-intersected', { el: _this5.el, intersection: intersection });
					if (intersectedEl.hasAttribute('consume-click')) {
						clickConsumed = true;
					}
				} else {
					var index = _this5.intersectedEls.indexOf(intersectedEl);
					if (index > -1) {
						_this5.intersectedEls.splice(index, 1);
					}
				}
			});

			// Emit all intersections at once on raycasting entity.
			if (intersections.length) {
				this.el.emit('raycaster-intersection', {
					els: Array.from(this.intersectedEls),
					intersections: intersections
				});
			}

			// Emit intersection cleared on both entities per formerly intersected entity.
			prevIntersectedEls.forEach(function (intersectedEl) {
				if (_this5.intersectedEls.indexOf(intersectedEl) !== -1) return;
				_this5.el.emit('raycaster-intersection-cleared', { el: intersectedEl });
				intersectedEl.emit('raycaster-intersected-cleared', { el: _this5.el });
			});

			return currentIntersectedEl;
		},

		isParentVisible: function isParentVisible(obj) {
			if (!obj.parent) return obj.visible;
			if (obj.parent.visible) return this.isParentVisible(obj.parent);
			return false;
		},

		calcParabolaArc: function calcParabolaArc() {
			if (_scene.Scene.controllerType !== 'controller') return;
			if (!this.el) return;
			if (!this.parent) return;

			this.el.object3D.updateMatrixWorld();
			this.el.object3D.getWorldPosition(this.origin);

			if (this.lastTerrainIntersection !== undefined) {
				this.parabolaPoints = [];
				this.parabolicPointer.calcCurve(this.origin, this.lastTerrainIntersection, this.parabolaPoints);
				this.el.emit('raycaster-parabola-updated', this.parabolaPoints, false);
			}
		},

		/**
   * Set origin and direction of raycaster using entity position and rotation.
   */
		updateOriginDirection: function () {
			var directionHelper = new THREE.Quaternion();
			var originVec3 = new THREE.Vector3();

			// Closure to make quaternion/vector3 objects private.
			return function updateOriginDirection() {

				this.tryGetCamera();

				this.camera.updateMatrixWorld(true);
				this.el.object3D.updateMatrixWorld(true);

				this.el.object3D.matrixWorld.decompose(originVec3, directionHelper, scaleDummy);

				// If the controller type is a mouse or touch device, calculate the ray direction
				// using the camera's projection matrix and the mouse location. Otherwise, use the
				// forward vector.
				if (_scene.Scene.controllerType === 'mouse-touch') {
					this.direction.set(this.mouse.x, this.mouse.y, 0.5).unproject(this.camera).sub(originVec3).normalize();
				} else {
					this.direction.copy(FWD_VECTOR);
					this.direction.applyQuaternion(directionHelper);
				}

				this.raycaster.set(originVec3, this.direction);
			};
		}(),

		isTickThrottled: function isTickThrottled() {
			return ++this.tickCount % this.tickIncrement != 0;
		},

		isRaycasterDeactivated: function isRaycasterDeactivated() {
			return this.data.controllerType !== _scene.Scene.controllerType;
		}
	});
}

},{"../core/scene":212,"../third_party/biagioli/parabolic-pointer":237,"eventemitter3":126}],175:[function(require,module,exports){
'use strict';

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * boundary-sphere
 *
 * An invisible sphere which encloses the entire scene.
 *
 * This is used to hit-test against instead of the skybox so
 * the user can see a cursor point if they're pointing at the sky.
 * Otherwise the cursor would disappear over the sky, which prevents
 * the user from being able to orient their hand controller easily.
 */

var VECTOR_ONE = new THREE.Vector3(1, 1, 1);

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('boundary-sphere', {

		init: function init() {
			var _this = this;

			this.geometry = new THREE.SphereGeometry(0.5, 16, 16);
			this.material = new THREE.MeshBasicMaterial({
				side: THREE.DoubleSide,
				visible: false
			});

			this.mesh = new THREE.Mesh(this.geometry, this.material);
			this.el.setObject3D('mesh', this.mesh);

			this.elWorldPosition = new THREE.Vector3();
			this.worldPosition = new THREE.Vector3();
			this.cameraPosition = new THREE.Vector3();
			this.camera = document.getElementById('camera');

			this.el.addEventListener('raycaster-cursor-up', function (event) {
				if (!_this.el.sceneEl.is('interactive')) return;
				if (_this.el.sceneEl.is('modal')) return;

				_this.el.emit('clicked', _this.el.intersection, null);
			});

			this.el.sceneEl.addEventListener('child-attached', this.calcBounds.bind(this));
			this.el.sceneEl.addEventListener('child-detached', this.calcBounds.bind(this));
			this.el.sceneEl.addEventListener('mesh-added', this.calcBounds.bind(this));
		},

		/**
   * Calculates the sphere scale such that it encompasses every clickable object in the scene
   */
		calcBounds: function calcBounds() {
			var _this2 = this;

			var maxDistance = 0;
			var els = Array.from(document.querySelectorAll('.clickable:not(.ignoreBounds):not([boundary-sphere])'));

			els.forEach(function (el) {
				if (el.object3D) {
					el.object3D.getWorldPosition(_this2.elWorldPosition);
					maxDistance = Math.max(maxDistance, _this2.elWorldPosition.length());
				}
			});

			// Make the radius a bit bigger than the farthest-away object,
			// otherwise if the user is close to that object, the cursor will
			// hit very close to it and will look big and weird.
			this.el.object3D.scale.copy(VECTOR_ONE);
			this.el.object3D.scale.multiplyScalar(maxDistance / 1.75);
		}
	});
}

},{}],176:[function(require,module,exports){
'use strict';

var _scene = require('../core/scene');

var _mathUtils = require('../utils/math-utils');

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

var BezierEasing = require('bezier-easing');
var ControllerRayShader = require('../shaders/controller-ray-shader');

var DASH_SPEED = 2.5;
var ANIM_IN_DURATION = 0.75;
var NEAR_DISTANCE_THRESHOLD = 2;
var EASING = BezierEasing(0.66, 0, 0.33, 1);

if (typeof AFRAME !== 'undefined' && AFRAME) {
			AFRAME.registerComponent('controller-arc', {

						schema: {
									width: { type: 'number', default: 0.02 }
						},

						init: function init() {
									var _this = this;

									this.parentPosition = new THREE.Vector3();
									this.parentVelocity = new THREE.Vector3();
									this.cursorPosition = new THREE.Vector3();
									this.cursorVelocity = new THREE.Vector3();
									this.targetPosition = new THREE.Vector3();
									this.distance = 0;
									this.outOfBounds = 0;
									this.animIn = 1;

									var geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 64, 1, true, Math.PI * 1.5, Math.PI);
									geometry.rotateX(Math.PI / -2);
									geometry.rotateY(Math.PI / -2);
									geometry.translate(0, 0, 0.5);

									this.material = new THREE.ShaderMaterial({
												uniforms: THREE.UniformsUtils.clone(ControllerRayShader.uniforms),
												fragmentShader: ControllerRayShader.fragmentShader,
												vertexShader: ControllerRayShader.vertexShader,
												side: THREE.DoubleSide
									});

									// Set up dash material uniforms
									this.material.uniforms.axis.value = new THREE.Vector2(1, 0);
									this.material.uniforms.dashSpacing.value = 0.05;

									this.mesh = new THREE.Mesh(geometry, this.material);
									this.mesh.visible = false;

									this.group = new THREE.Group();
									this.group.add(this.mesh);
									this.el.setObject3D('mesh', this.group);

									// Listen for intersection events
									this.el.sceneEl.addEventListener('terrain-intersected', this.onIntersected.bind(this));
									this.el.sceneEl.addEventListener('terrain-intersected-cleared', this.onIntersectClearered.bind(this));

									document.addEventListener('mousemove', this.onMoved.bind(this));

									this.el.sceneEl.addEventListener('stateremoved', function (event) {
												if (event.target !== _this.el.sceneEl) return;
												if (event.detail.state !== 'interactive') return;

												_this.mesh.visible = false;
									});

									this.el.sceneEl.addEventListener('stateadded', function (event) {
												if (event.target !== _this.el.sceneEl) return;
												if (event.detail.state !== 'interactive') return;

												_this.mesh.visible = true;
									});

									// event for exiting vr
									_scene.Scene.on('on-controls-ready', this.checkForVisibility.bind(this));
						},

						checkForVisibility: function checkForVisibility() {
									this.el.setAttribute('visible', _scene.Scene.controllerType === 'mouse-touch');
						},


						update: function update() {
									this.parent = document.getElementById('arc-dummy');
						},

						onIntersected: function onIntersected(event) {
									if (this.controllerType === 'controller') return;

									this.targetPosition = event.detail.point;
									// this.updateArcPosition( event.detail.point );
									this.outOfBounds = 2;
						},

						onIntersectClearered: function onIntersectClearered(event) {
									this.outOfBounds = -1;
						},

						onMoved: function onMoved(event) {
									this.outOfBounds--;
						},

						tick: function tick(t, dt) {
									if (!this.parent) return;
									if (!this.mesh.visible) return;

									dt = dt / 1000;

									// Move mesh to parent's world position
									this.parent.object3D.getWorldPosition(this.parentPosition);

									// Compensate for camera height
									this.parentPosition.y -= 1.6;

									// Smooth the cursor and mesh position to remove jitter caused by the tick loop and the cursor
									// update loop being out of sync.
									_mathUtils.MathUtils.smooth3D(this.cursorPosition, this.targetPosition, this.cursorVelocity, dt, 0.05, 500);
									_mathUtils.MathUtils.smooth3D(this.mesh.position, this.parentPosition, this.parentVelocity, dt, 0.05, 500);

									// Update the distanace from the arc to the cursor
									this.distance = this.parentPosition.distanceTo(this.cursorPosition);

									// As the cursor position gets further away from the camera, the arc becomes taller
									var height = _mathUtils.MathUtils.clamp(this.distance * 0.75, 1, 10);

									// Set the cylinder's scale and rotation so that it intersects with the cursor point
									this.mesh.scale.copy(new THREE.Vector3(this.data.width, height, this.distance));
									this.mesh.lookAt(this.cursorPosition);

									// Only show the cursor if it is inside the valid boundaries
									if (this.distance > NEAR_DISTANCE_THRESHOLD && this.outOfBounds > 0) {
												this.animIn = _mathUtils.MathUtils.clamp(this.animIn + dt * (1 / ANIM_IN_DURATION), 0, 1);
									} else {
												this.animIn = 0;
									}

									// Update uniform values
									this.material.uniforms.dashSpacing.value = 0.5 / this.distance / 2;
									this.material.uniforms.t.value = t / 1000 * DASH_SPEED;
									this.material.uniforms.show.value = EASING(this.animIn);
						}
			});
}

},{"../core/scene":212,"../shaders/controller-ray-shader":223,"../utils/math-utils":243,"bezier-easing":13}],177:[function(require,module,exports){
'use strict';

var _scene = require('../core/scene');

var _platformUtils = require('../utils/platform-utils');

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * controller-dot
 *
 * A dot which serves as the user's cursor pointer.
 * The dot is drawn by a shader on a small plane mesh.
 */

var ControllerDotShader = require('../shaders/controller-dot-shader');

var VECTOR_ONE = new THREE.Vector3(1, 1, 1);

if (typeof AFRAME !== 'undefined' && AFRAME) {
			AFRAME.registerComponent('controller-dot', {

						schema: {
									color: { type: 'color', default: '#FFF' },
									size: { type: 'number', default: 25 },
									scale: { type: 'number', default: 1 }
						},

						init: function init() {
									var _this = this;

									this.scale = this.data.scale;

									this.cameraPosition = new THREE.Vector3();
									this.geometry = new THREE.PlaneGeometry(1, 1);

									this.material = new THREE.ShaderMaterial({
												uniforms: ControllerDotShader.uniforms,
												fragmentShader: ControllerDotShader.fragmentShader,
												vertexShader: ControllerDotShader.vertexShader,
												depthTest: false,
												transparent: true
									});

									this.mesh = new THREE.Mesh(this.geometry, this.material);
									this.el.setObject3D('mesh', this.mesh);
									this.el.setAttribute('visible', false);

									this.el.object3D.scale.copy(VECTOR_ONE);
									this.el.object3D.scale.multiplyScalar(0.0001);

									this.onIntersectedRef = this.onIntersected.bind(this);

									this.tryAddingRaycaster();

									this.el.sceneEl.addEventListener('terrain-intersected', function () {
												_this.el.setAttribute('visible', false);
									});

									this.el.sceneEl.addEventListener('terrain-intersected-cleared', function () {
												_this.el.setAttribute('visible', true);
									});

									this.camera = document.getElementById('camera');

									this.el.setAttribute('look-at-target', {
												axis: 'xyz',
												target: '#camera',
												alwaysUpdate: true,
												offset: new THREE.Vector3(0, Math.PI, 0)
									});

									_scene.Scene.on('on-controls-ready', this.tryAddingRaycaster.bind(this));
						},

						tryAddingRaycaster: function tryAddingRaycaster() {
									if (this.raycaster) {
												this.raycaster.removeEventListener('raycaster-intersection', this.onIntersectedRef);
									}

									if (_scene.Scene.controllerType === 'mouse-touch') {
												this.raycaster = document.getElementById('mouse-touch-controller');
									} else {
												this.raycaster = document.getElementById('right-hand');
									}

									this.raycaster.addEventListener('raycaster-intersection', this.onIntersectedRef.bind(this));
						},


						onIntersected: function onIntersected(event) {
									if (!this.el.getAttribute('visible')) return;

									// Don't update the cursor on in desktop 360 mode. The mouse cursor will change
									// state when appropriate, which is the expected behavior during normal desktop browsing.
									if (_scene.Scene.modeType === '360' && !AFRAME.utils.device.isMobile()) return;

									var intersectionPoint = event.detail.intersections[0].point;
									this.camera.object3D.getWorldPosition(this.cameraPosition);

									// Move the reticle closer to camera to prevent intersections
									this.el.object3D.position.subVectors(this.cameraPosition, intersectionPoint);
									this.el.object3D.position.multiplyScalar(0.05).add(intersectionPoint);

									// Calculate the distance between the dot and the camera
									var d = this.el.object3D.position.distanceTo(this.cameraPosition);

									// Minimize scaling based on distance from the camera.
									// A bit of scaling is OK, as it helps establish scale, but the dot
									// still needs to be large enough to be visible at all times.
									this.el.object3D.scale.copy(VECTOR_ONE);
									this.el.object3D.scale.multiplyScalar(d / this.data.size);
									this.el.object3D.scale.multiplyScalar(this.data.scale);
									this.el.object3D.scale.divideScalar(Math.min(d, 8) / 5);
						},

						update: function update() {
									this.material.uniforms.color.value = new THREE.Color(this.data.color);
									this.material.needsUpdate = true;
						}
			});
}

},{"../core/scene":212,"../shaders/controller-dot-shader":222,"../utils/platform-utils":244}],178:[function(require,module,exports){
'use strict';

var _scene = require('../core/scene');

var _meshLineMaterial = require('../third_party/spite/mesh-line-material');

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * controller-parabola
 *
 * Parabola arc for teleportation aiming on mobile devices.
 *
 * This handles the display of the parabola arc in the scene;
 * better-raycaster emits parabola update events which are calculated
 * by the ParabolicPointer class: third_party/biagoioli/parabolic-pointer
 */

var BezierEasing = require('bezier-easing');
var MeshLine = require('../third_party/spite/mesh-line').MeshLine;

var DASH_SPEED = 2.5;
var SHOW_SPEED = 0.2;
var SHOW_EASING = BezierEasing(0.66, 0, 0.33, 1);

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('controller-parabola', {

		schema: {
			width: { default: 0.015 }
		},

		init: function init() {
			var _this = this;

			this.parabolaPoints = [];
			this.show = 1;
			this.isOverTerrain = false;
			this.resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);

			this.raycasterEl = document.getElementById('right-hand');

			// Grab arc point updates from the raycaster
			this.raycasterEl.addEventListener('raycaster-parabola-updated', function (event) {
				_this.parabolaPoints = event.detail;
			});

			// Show the arc when the user presses the controller button
			this.raycasterEl.addEventListener('raycaster-cursor-down', function (event) {
				if (_scene.Scene.controllerType !== 'controller') return;
				if (!_this.el.sceneEl.is('interactive')) return;
				if (_this.el.sceneEl.is('modal')) return;
				if (!event.detail) return;
				if (event.detail[0].id !== 'collider') return;

				_this.mesh.visible = true;
			});

			// Listen for intersection events
			this.el.sceneEl.addEventListener('terrain-intersected', function () {
				if (_scene.Scene.controllerType !== 'controller') return;
				if (!_this.el.sceneEl.is('interactive')) return;
				_this.isOverTerrain = true;
				_this.mesh.visible = true;
			});

			this.el.sceneEl.addEventListener('terrain-intersected-cleared', function () {
				_this.isOverTerrain = false;
				_this.mesh.visible = false;
			});

			// Hide the arc whenever the scene is not interactive
			this.el.sceneEl.addEventListener('stateremoved', function (event) {
				if (event.target !== _this.el.sceneEl) return;
				if (event.detail.state === 'interactive') _this.mesh.visible = false;
			});

			// event for exiting vr
			_scene.Scene.on('on-controls-ready', this.checkForVisibility.bind(this));
		},

		checkForVisibility: function checkForVisibility() {
			this.el.setAttribute('visible', _scene.Scene.controllerType === 'controller');
		},


		play: function play() {
			this.numPoints = this.raycasterEl.getAttribute('better-raycaster').numArcPoints;

			// Populate mesh positions with zero vectors. It will be filled with
			// actual vectors when the cursor is updated
			this.geometry = new THREE.BufferGeometry();
			var positions = new Float32Array((this.numPoints + 1) * 3);
			this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

			this.line = new MeshLine();
			this.line.setGeometry(this.geometry);

			this.material = new _meshLineMaterial.MeshLineMaterial({
				color: new THREE.Color(0xFFFFFF),
				lineWidth: this.data.width,
				resolution: this.resolution
			});

			this.mesh = new THREE.Mesh(this.line.geometry, this.material);
			this.mesh.frustumCulled = false;
			this.mesh.visible = false;
			this.el.setObject3D('mesh', this.mesh);

			window.addEventListener('resize', this.onResize.bind(this));
		},

		onResize: function onResize() {
			// Update the resolution material property required by MeshLine
			this.resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);
			this.material.uniforms.resolution.value = this.resolution;
			this.material.needsUpdate = true;
		},

		tick: function tick(t, dt) {
			if (_scene.Scene.controllerType !== 'controller') return;
			if (!this.mesh) return;
			if (!this.mesh.visible) return;
			if (!this.parabolaPoints.length) return;
			if (!this.isOverTerrain) return;

			// Transfer updated parabola points to the mesh positions
			var posAttr = this.geometry.attributes.position;
			for (var i = 0; i < this.parabolaPoints.length; i++) {
				var p = this.parabolaPoints[i];
				posAttr.array[i * 3] = p.x;
				posAttr.array[i * 3 + 1] = p.y;
				posAttr.array[i * 3 + 2] = p.z;
			}
			posAttr.needsUpdate = true;

			this.line.setGeometry(this.geometry);

			// Update material
			this.material.uniforms.visibility.value = SHOW_EASING(this.show);
			this.material.uniforms.t.value = t / 1000 * DASH_SPEED;
			this.material.needsUpdate = true;
		}
	});
}

},{"../core/scene":212,"../third_party/spite/mesh-line":239,"../third_party/spite/mesh-line-material":238,"bezier-easing":13}],179:[function(require,module,exports){
'use strict';

var _scene = require('../core/scene');

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('controller-ray', {

		schema: {
			width: { default: 0.005 },
			length: { default: 1 }
		},

		init: function init() {
			var _this = this;

			this.isInteractive = false;

			this.geometry = new THREE.PlaneGeometry(this.data.width, this.data.length);
			this.geometry.rotateX(Math.PI / -2);
			this.geometry.translate(0, 0, this.data.length / -2);

			this.material = new THREE.MeshBasicMaterial();
			this.mesh = new THREE.Mesh(this.geometry, this.material);
			this.el.setObject3D('mesh', this.mesh);
			this.el.setAttribute('visible', false);
			this.el.sceneEl.addEventListener('terrain-intersected-cleared', function () {
				if (!_this.isInteractive) return;
				if (_scene.Scene.controllerType === 'mouse-touch') return;
				_this.el.setAttribute('visible', true);
			});

			this.el.sceneEl.addEventListener('terrain-intersected', function () {
				if (!_this.isInteractive) return;
				if (_scene.Scene.controllerType === 'mouse-touch') return;
				_this.el.setAttribute('visible', false);
			});

			this.el.sceneEl.addEventListener('stateadded', function (event) {
				if (event.detail.state === 'interactive') _this.isInteractive = true;
				if (event.target !== _this.el.sceneEl) return;
			});

			this.el.sceneEl.addEventListener('stateremoved', function (event) {
				if (event.detail.state === 'interactive') _this.isInteractive = false;
				if (event.target !== _this.el.sceneEl) return;
			});
		},

		play: function play() {}
	});
} // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * controller-ray
 *
 * Ray line indicator for VR hand controllers.
 *
 * This replaces the parabola arc whenever the user is not holding the
 * controller button down.
 */

},{"../core/scene":212}],180:[function(require,module,exports){
'use strict';

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * debug-trace
 *
 * Prints position and rotation info to the console.
 */

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('debug-trace', {

		init: function init() {
			this.position = new THREE.Vector3();
			this.rotation = new THREE.Euler();
		},

		tick: function tick(t, dt) {

			this.position.copy(this.el.object3D.position);
			this.rotation.copy(this.el.object3D.rotation);

			console.log('Position: [ ' + this.position.x + ', ' + this.position.y + ', ' + this.position.z + ' ]\n' + 'Rotation: [ ' + this.rotation.x + ', ' + this.rotation.y + ', ' + this.rotation.z + ' ]');
		}

	});
}

},{}],181:[function(require,module,exports){
'use strict';

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * fade-to-black
 *
 * A black sphere which encloses the camera and can
 * be faded in and out during scene transitions.
 *
 * It is triggered automatically by the 'visible' state
 * of the AFRAME scene
 */

// Duration of the fade transition, in seconds
var FADE_DURATION = 1.25;

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('fade-to-black', {

		dependencies: ['visible'],

		init: function init() {
			var _this = this;

			this.opacity = 1;
			this.geometry = new THREE.SphereGeometry(1.5);
			this.material = new THREE.MeshBasicMaterial({
				color: new THREE.Color(0),
				opacity: this.opacity,
				side: THREE.BackSide,
				transparent: true
			});

			this.mesh = new THREE.Mesh(this.geometry, this.material);
			this.mesh.renderOrder = 8;
			this.el.setObject3D('mesh', this.mesh);

			// When the scene's visible state is ADDED, fade the sphere out
			this.el.addEventListener('stateadded', function (event) {
				if (event.detail !== 'visible') return;
				_this.el.emit('transition-in-begin', null, false);
			});

			// When the scene's visible state is REMOVED, fade the sphere in
			this.el.addEventListener('stateremoved', function (event) {
				if (event.detail == 'visible') return;
				_this.el.emit('transition-out-begin', null, false);
			});
		},

		tick: function tick(t, dt) {
			dt = dt / 1000 * (1 / FADE_DURATION);
			var updateTransition = false;
			var deltaOpacity = 0;

			if (this.el.is('visible')) {
				updateTransition = this.opacity < 1;
				deltaOpacity = +dt;
			} else {
				updateTransition = this.opacity > 0;
				deltaOpacity = -dt;
			}

			// Hide the mesh itself if it's at 0 opacity, so it doesn't
			// get rendered while it's invisible.
			if (this.opacity <= 0) {
				this.el.setAttribute('visible', false);
			} else {
				this.el.setAttribute('visible', true);
			}

			// Only update the material if the opacity value is being changed
			if (updateTransition) {
				this.opacity = Math.min(Math.max(this.opacity + deltaOpacity, 0), 1);
				this.material.opacity = this.opacity;
				this.material.needsUpdate = true;

				if (this.opacity <= 0) {
					this.el.emit('transition-out-complete', null, false);
					return;
				}

				if (this.opacity >= 1) {
					this.el.emit('transition-in-complete', null, false);
				}
			}
		}
	});
}

},{}],182:[function(require,module,exports){
'use strict';

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * frustum
 *
 * Calculates the frustum of the element's camera component and
 * throws a 'frustum-updated' event every frame with the updated 
 * frustum object.
 *
 * Used for determining which POI markers are in view of the camera.
 */

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('frustum', {

		init: function init() {
			this.matrix = new THREE.Matrix4();
			this.frustum = new THREE.Frustum();
		},

		tick: function tick() {
			if (!this.camera) {
				this.camera = this.el.components.camera.camera;
			}

			if (!this.camera) return;

			this.camera.matrixWorldInverse.getInverse(this.camera.matrixWorld);
			this.matrix.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse);
			this.frustum.setFromMatrix(this.matrix);

			this.el.emit('frustum-updated', { frustum: this.frustum }, false);
		}
	});
}

},{}],183:[function(require,module,exports){
'use strict';

var _colors = require('../core/colors');

var _scene = require('../core/scene');

var _platformUtils = require('../utils/platform-utils');

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * hitbox
 *
 * A box collision component which acts as a single mesh
 * for hit-testing against scene elements with multiple
 * children. This simplifies collision detection, as an
 * element will only need to listen for collision events
 * from its hitbox, rather than from each of its child
 * elements.
 *
 * The size of the box is calculated from the bounding box
 * of the element it is attached to, with an added expansion
 * parameter.
 *
 * The box can also change the controller-dot color and size
 * on intersection. TODO: maybe a separate component should
 * do this.
 */

var HITBOX_GEOMETRY = new THREE.PlaneGeometry(1, 1);
// const HITBOX_MATERIAL = new THREE.MeshBasicMaterial( { color: 0xFF00FF, side: THREE.DoubleSide, transparent: true, opacity: 0.25 } );
var HITBOX_MATERIAL = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, visible: false });

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('hitbox', {

		dependencies: ['event-priority'],

		schema: {
			expansion: { default: 20 },
			cursorScale: { default: 1 },
			desktopCursorPointer: { default: true }
		},

		init: function init() {

			this.el.classList.add('clickable');
			this.el.setAttribute('consume-click', '');

			// Route intersection events to their functions
			this.el.addEventListener('raycaster-intersected', this.onIntersect.bind(this));
			this.el.addEventListener('raycaster-intersected-cleared', this.onIntersectionCleared.bind(this));

			// Update the bounding box if any children are added to the parent element
			this.el.addEventListener('child-attached', this.updateBoundingBox.bind(this));
			this.el.addEventListener('child-detached', this.updateBoundingBox.bind(this));

			this.cursor = document.getElementById('controller-dot');
		},

		/**
   * Calculate the new box scale from the parent element's bounding box
   */
		updateBoundingBox: function updateBoundingBox() {
			// Calculate the new box scale from the parent element's bounding box
			this.resizeToThis(this.el.parentNode);
		},

		resizeToThis: function resizeToThis(el) {
			var obj = el.getObject3D('mesh');
			if (!obj) return;
			this.bounds = new THREE.Box3().setFromObject(obj);
			this.bounds.expandByScalar(this.data.expansion);
			this.updateHitboxMesh();
		},

		updateHitboxMesh: function updateHitboxMesh() {
			if (!this.bounds) return;
			this.mesh = new THREE.Mesh(HITBOX_GEOMETRY, HITBOX_MATERIAL);
			this.mesh.position.copy(this.bounds.getCenter());
			this.mesh.position.setZ(this.mesh.position.z + 0.02);
			this.mesh.scale.copy(this.bounds.getSize());
			this.mesh.scale.setZ(1);

			this.el.setObject3D('mesh', this.mesh);

			// raycaster usually updates when hittests are added
			// doesn't work on certain objects like info-card
			_scene.Scene.emit('force-added', null, false);
		},

		update: function update() {
			this.updateBoundingBox();
		},

		onIntersect: function onIntersect() {
			if (this.data.desktopCursorPointer) {
				document.body.classList.add('pointer');
			}

			if (!this.cursor) return;
			this.cursor.setAttribute('controller-dot', {
				color: _colors.TextColor,
				scale: this.data.cursorScale
			});
		},

		onIntersectionCleared: function onIntersectionCleared() {
			document.body.classList.remove('pointer');
			this.cursor.setAttribute('controller-dot', {
				color: _colors.WhiteColor,
				scale: 1
			});
		},

		remove: function remove() {
			this.el.removeObject3D('mesh');
			document.body.classList.remove('pointer');
			this.cursor.removeAttribute('controller-dot', 'color');
			this.cursor.removeAttribute('controller-dot', 'scale');
		}
	});
}

},{"../core/colors":210,"../core/scene":212,"../utils/platform-utils":244}],184:[function(require,module,exports){
'use strict';

var _scene = require('../core/scene');

var _colors = require('../core/colors');

var _audioManager = require('../core/audio-manager');

var GradientShader = require('../shaders/gradient-shader'); // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * horizon-marker
 *
 * UI component for marking site locations on the horizon.
 * It is built out of several pieces of simple geometry.
 *
 * Position of the marker is specified in spherical coordinates:
 * azimuth and elevation, as it was provided by JPL.
 *
 * Clicking on it transitions the user to the specified location.
 */

var ColorMaskShader = require('../shaders/color-mask-shader');

var FLAG_Z = 1;
var POLE_H = 120;
var DISTANCE = 75;
var MARKER_DIAMETER = 40;
var FLAG_Y_OFFSET = 54;
var FLAG_Y_CENTER = FLAG_Y_OFFSET + MARKER_DIAMETER / 2;
var DEG2RAD = Math.PI / 180;

var FLAG_GEOMETRY = new THREE.PlaneGeometry(MARKER_DIAMETER, MARKER_DIAMETER);
var POLE_GEOMETRY = new THREE.PlaneGeometry(MARKER_DIAMETER, 1);
POLE_GEOMETRY.translate(0, -0.5, 0);

var POLE_MATERIAL = new THREE.ShaderMaterial({
	uniforms: GradientShader.uniforms,
	vertexShader: GradientShader.vertexShader,
	fragmentShader: GradientShader.fragmentShader,
	transparent: true
});

var ICON_MATERIAL = new THREE.ShaderMaterial({
	uniforms: THREE.UniformsUtils.clone(ColorMaskShader.uniforms),
	vertexShader: ColorMaskShader.vertexShader,
	fragmentShader: ColorMaskShader.fragmentShader
});

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('horizon-marker', {

		dependencies: ['visible', 'look-at-target'],

		schema: {
			azimuth: { default: 0 },
			elevation: { default: 0 },
			site: { type: 'string' },
			size: { type: 'number', default: 0.1 }
		},

		init: function init() {
			var _this = this;

			this.mapCard = document.getElementById('map-card');

			this.el.addState('interactive');

			this.isIntersected = false;

			this.group = new THREE.Group();
			this.el.setObject3D('mesh', this.group);

			this.iconMesh = new THREE.Mesh(FLAG_GEOMETRY, ICON_MATERIAL);
			this.iconMesh.scale.multiplyScalar(1.2);
			this.iconMesh.position.y = FLAG_Y_CENTER;
			this.iconMesh.position.z = 0.1;

			this.textureLoader = new THREE.TextureLoader();
			this.textureLoader.load('img/teleport.png', function (texture) {
				_this.iconMesh.material.uniforms.map.value = texture;
				_this.iconMesh.material.uniforms.color.value = new THREE.Color(0xFFFFFF);
				_this.iconMesh.material.needsUpdate = true;
			});

			this.poleMesh = new THREE.Mesh(POLE_GEOMETRY, POLE_MATERIAL);
			this.poleMesh.position.z = FLAG_Z;
			this.poleMesh.position.y = FLAG_Y_CENTER;
			this.poleMesh.scale.y = POLE_H + 100;

			this.group.add(this.iconMesh);
			this.group.add(this.poleMesh);

			this.titleLabel = document.createElement('a-entity');
			this.titleLabel.setAttribute('poi-title-text', {
				value: 'MAP',
				yOffset: FLAG_Y_CENTER + MARKER_DIAMETER / 2
			});

			// Create hitbox
			this.hitbox = document.createElement('a-entity');
			this.hitbox.setAttribute('hitbox', '');
			this.hitbox.setAttribute('event-priority', 100);

			// Add 'em up
			this.el.appendChild(this.titleLabel);
			this.el.appendChild(this.hitbox);

			this.el.setAttribute('scale', new THREE.Vector3(-this.data.size, this.data.size, this.data.size));

			// Calculate the marker position from JPL's azimuth and elevation data
			this.el.setAttribute('position', new THREE.Vector3(Math.sin(this.data.azimuth * DEG2RAD) * DISTANCE, this.data.elevation + 5, Math.cos(this.data.azimuth * DEG2RAD) * DISTANCE));

			// Route raycaster events to their functions
			this.el.addEventListener('raycaster-intersected', this.onIntersect.bind(this));
			this.el.addEventListener('raycaster-intersected-cleared', this.onIntersectionCleared.bind(this));
			this.el.addEventListener('raycaster-cursor-up', this.onClick.bind(this));
		},

		onClick: function onClick() {
			if (!this.el.is('interactive')) return;
			if (!this.el.sceneEl.is('interactive')) return;
			if (this.el.sceneEl.is('modal')) return;
			this.el.removeState('visible');
			this.el.removeState('hover');

			// Open the map card
			this.mapCard.addState('visible');
		},

		onIntersect: function onIntersect(event) {
			if (this.isIntersected) return;
			if (!this.el.is('interactive')) return;

			if (!this.isIntersected) {
				_audioManager.AudioManager.playSFX('boop');
			}

			// Show the label text
			this.isIntersected = true;
			this.el.addState('hover');
			this.titleLabel.setAttribute('poi-title-text', { show: true });
		},

		onIntersectionCleared: function onIntersectionCleared(event) {
			// Hide the label text
			this.isIntersected = false;
			this.el.removeState('hover');
			this.titleLabel.setAttribute('poi-title-text', { show: false });
		}
	});
}

},{"../core/audio-manager":209,"../core/colors":210,"../core/scene":212,"../shaders/color-mask-shader":220,"../shaders/gradient-shader":226}],185:[function(require,module,exports){
'use strict';

var _colors = require('../core/colors');

var _mathUtils = require('../utils/math-utils');

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * info-card-text
 *
 * UI component for displaying the text on info cards.
 *
 * Because the text takes a frame for layout, its size
 * cannot be absolutely known at construction time.
 * In order to size the parent info card correctly,
 * the text's bounding box is emitted once layout
 * is complete.
 *
 * The text has an animated fade-in/out animation
 * which is triggered when the 'visible' attribute
 * is changed.
 */

function parseText(text) {
	return text.replace(new RegExp('@s', 'g'), ';');
}

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('info-card-text', {

		schema: {
			align: { default: 'left' },
			antialiasing: { default: 0.25 },
			baseline: { default: 'top' },
			color: { type: 'number', default: _colors.TextColorHex },
			font: { type: 'string' },
			letterSpacing: { default: 1 },
			lineHeight: { default: 80 },
			show: { default: true },
			transitionInDelay: { default: 0.05 },
			transitionInDuration: { default: 0.25 },
			transitionInSpeed: { default: 1 },
			transitionOutSpeed: { default: 2 },
			value: { type: 'string' },
			width: { default: 0.85 },
			wrapCount: { default: 32 }
		},

		init: function init() {
			var _this = this;

			this.boundingBox = new THREE.Box3();
			this.textGeometry = null;
			this.size = new THREE.Vector3();
			this.updateTransition = false;
			this.geometryUpdated = false;
			this.opacity = 0;
			this.multiplier = 1;
			this.delayCounter = 0;

			this.el.setAttribute('text', {
				align: this.data.align,
				anchor: this.data.align,
				baseline: this.data.baseline,
				color: new THREE.Color(this.data.color),
				font: this.data.font,
				letterSpacing: this.data.letterSpacing,
				lineHeight: this.data.lineHeight,
				opacity: 0,
				shader: 'msdf',
				value: parseText(this.data.value),
				width: this.data.width,
				wrapCount: this.data.wrapCount
			});

			this.el.addEventListener('stateadded', function (event) {
				if (event.detail.state !== 'visible') return;
				if (_this.transitionInDelay <= 0) return;
				_this.delayCounter = 1;
			});

			this.el.addEventListener('stateremoved', function (event) {
				if (event.detail.state !== 'visible') return;
				_this.delayCounter = 0;
			});
		},

		update: function update() {
			this.el.setAttribute('text', 'letterSpacing', this.data.letterSpacing);
			this.el.setAttribute('text', 'lineHeight', this.data.lineHeight);
			this.el.setAttribute('text', 'wrapCount', this.data.wrapCount);
			this.el.setAttribute('text', 'width', this.data.width);
			this.el.setAttribute('text', 'value', parseText(this.data.value));
			this.el.setAttribute('text', 'opacity', Math.max(0, this.opacity));
			this.size = new THREE.Vector3();
			this.geometryUpdated = false;
			this.opacity = 0;

			// Force the text to always be render in front
			this.text = this.el.object3D.children[0];
			if (this.text) {
				this.text.material.depthTest = false;
				this.text.material.transparent = true;
				this.text.material.needsUpdate = true;
			}
		},

		tick: function tick(t, dt) {
			if (this.delayCounter > 0) {
				dt = dt / 1000 * (1 / this.data.transitionInDelay);
			} else {
				dt = dt / 1000 * (1 / this.data.transitionInDuration);
			}

			if (this.delayCounter > 0) {
				this.delayCounter -= dt;
				return;
			}

			// Update the fade-in transition animation
			if (this.el.is('visible')) {
				this.updateTransition = this.opacity < 1;
				this.opacity += dt * this.data.transitionInSpeed;
			} else {
				this.updateTransition = this.opacity > 0;
				this.opacity -= dt * this.data.transitionOutSpeed;
			}

			this.opacity = _mathUtils.MathUtils.clamp(this.opacity, 0, 1);

			if (this.updateTransition) {
				this.el.setAttribute('text', 'opacity', this.opacity);
			}

			// Wait until the text's geometry has a valid bounding box, which
			// means the text layout is complete and the dimensions are known.
			// Emit an event with the dimensions so that the parent info card's
			// size and the position of other elements can be set correctly.
			if (!this.geometryUpdated) {
				if (this.el.object3D.children[0]) {
					this.textGeometry = this.el.object3D.children[0].geometry;

					if (this.textGeometry.attributes.position) {
						if (this.textGeometry.attributes.position) {
							this.textGeometry.computeBoundingBox();
							this.textGeometry.boundingBox.getSize(this.size);
							this.size.multiply(this.el.object3D.children[0].scale);
						}
					}
				}

				if (!isNaN(this.size.x) && !isNaN(this.size.y)) {
					this.geometryUpdated = true;
					this.el.emit('geometry-updated', {
						width: this.size.x,
						height: this.size.y
					});
				}
			}
		}
	});
}

},{"../core/colors":210,"../utils/math-utils":243}],186:[function(require,module,exports){
'use strict';

var _colors = require('../core/colors');

var _scene = require('../core/scene');

var _platformUtils = require('../utils/platform-utils');

var _cardMesh = require('../meshes/card-mesh');

var _cardMeshImage = require('../meshes/card-mesh-image');

var MARGIN = 0.075; // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * info-card
 *
 * UI component for displaying the info cards which are shown
 * when the user clicks on a point-of-interest.
 *
 * Only one card exists in the scene, and its contents change
 * depending on which point-of-interest has been selected.
 *
 * The card can contain an image, a title, and body copy.
 * Size of the card is calculated automatically from the text
 * it needs to contain.
 *
 * The card will position itself towards the camera when shown.
 */

if (typeof AFRAME !== 'undefined' && AFRAME) {
			AFRAME.registerComponent('info-card', {

						dependencies: ['visible', 'look-at-target'],

						schema: {
									url: { type: 'string' },
									width: { type: 'number', default: 1 },
									title: { type: 'string' },
									type: { type: 'string', default: 'poi' },
									text: { type: 'string' },
									index: { type: 'string', default: '' },
									poi: { type: 'selector' }
						},

						init: function init() {
									var _this = this;

									this.headerTextSize = new THREE.Vector2();
									this.bodyTextSize = new THREE.Vector2();
									this.indexTextSize = new THREE.Vector2();

									this.positionDummy = document.getElementById('ui-dummy');
									this.camera = document.getElementById('camera');
									this.player = document.getElementById('player');

									// Set up look-at-target component so that the card faces the camera directly.
									this.el.setAttribute('look-at-target', {
												axis: 'xyz',
												target: '#camera',
												alwaysUpdate: false,
												offset: new THREE.Vector3(0, Math.PI, 0)
									});

									// This group is used to hold the various meshes that aren't represented
									// by separate entity DOM elements. This includes the background plane,
									// the image plane, and the close + divider icons.
									this.group = new THREE.Group();
									this.el.setObject3D('mesh', this.group);

									// Creat the header text entity
									this.textHeader = document.createElement('a-entity');
									this.textHeader.setAttribute('info-card-text', 'font', 'fonts/NowAlt-Bold.json');
									this.textHeader.setAttribute('info-card-text', 'letterSpacing', 12);
									this.textHeader.setAttribute('info-card-text', 'wrapCount', 28);

									// Thicken up the body text on mobile so that it's easier to read
									var bodyFontWeight = AFRAME.utils.device.isMobile() ? 'Bold' : 'Medium';

									// Create the body copy entity
									this.textBody = document.createElement('a-entity');
									this.textBody.setAttribute('info-card-text', 'font', 'fonts/NowAlt-Medium.json');
									this.textBody.setAttribute('info-card-text', 'wrapCount', 32);

									// Create the index number text entity
									this.textIndex = document.createElement('a-entity');
									this.textIndex.setAttribute('info-card-text', 'font', 'fonts/NowAlt-Bold.json');
									this.textIndex.setAttribute('info-card-text', 'wrapCount', 7);

									// Create the background card mesh
									this.background = new _cardMesh.CardMesh(this.data.width);
									this.background.setPosition(-0.5, 0);

									// Create the image card mesh
									this.image = new _cardMeshImage.CardMeshImage(this.data.width);
									this.image.setPosition(0.5, 0);
									this.image.setDepth(0.001);

									// Create the close icon mesh
									this.closeIcon = new _cardMeshImage.CardMeshImage(0.05, 0.05, 'cards/closeIcon.jpg');
									this.closeIcon.setDepth(0.001);

									// Create the dividing line squiggle mesh
									this.divider = new _cardMeshImage.CardMeshImage(0.09, 0.02, 'cards/squiggle.jpg');
									this.divider.setDepth(0.001);

									// Create the hitbox
									this.hitbox = document.createElement('a-entity');
									this.hitbox.setAttribute('event-priority', 10);
									this.hitbox.setAttribute('hitbox', {
												expansion: 20,
												cursorScale: 0.4
									});

									// Add 'em up
									this.el.appendChild(this.textHeader);
									this.el.appendChild(this.textBody);
									this.el.appendChild(this.textIndex);
									this.el.appendChild(this.hitbox);
									this.group.add(this.background.mesh);
									this.group.add(this.image.mesh);
									this.group.add(this.closeIcon.mesh);
									this.group.add(this.divider.mesh);

									// Close the card if the user clicks on it
									this.el.addEventListener('raycaster-cursor-up', function (event) {
												ga('send', 'event', 'info-card', 'dismissed', '');
												_this.el.removeState('visible');
									});

									// Show everything when the 'visible' state is added
									this.el.addEventListener('stateadded', function (event) {
												if (event.detail.state !== 'visible') return;

												// Send analytics
												if (event.target.id === 'info-card') {
															var prefix = _this.data.type === 'rover' ? 'rover-' : 'poi-';
															ga('send', 'event', 'info-card', 'opened', _scene.Scene.currentSite + '/' + prefix + _this.data.title.replace(/\s/g, ''));
												}

												_this.el.sceneEl.addState('modal');
												_this.textHeader.addState('visible');
												_this.textBody.addState('visible');
												_this.textIndex.addState('visible');

												_this.closeIcon.show();
												_this.divider.show(0.25, 0.2);
												_this.background.show();
												_this.image.show();
									});

									// Hide everything when the 'visible' state is removed
									this.el.addEventListener('stateremoved', function (event) {
												if (event.detail.state !== 'visible') return;

												_this.el.sceneEl.removeState('modal');
												_this.textHeader.removeState('visible');
												_this.textBody.removeState('visible');
												_this.textIndex.removeState('visible');

												_this.closeIcon.hide();
												_this.divider.hide(0.15);
												_this.background.hide();
												_this.image.hide();
									});

									// Bubble the hide-complete event from the background mesh up thru the entity element.
									this.background.on('hide-complete', function (event) {
												_this.el.emit('hide-complete', null, false);
									});

									// Update header text size + entity positions when the header text's text geometry is updated.
									this.textHeader.addEventListener('geometry-updated', function (event) {
												_this.headerTextSize.set(event.detail.width, event.detail.height);
												_this.updateElements();
									});

									// Update body copy size + entity positions when the body copy's text geometry is updated.
									this.textBody.addEventListener('geometry-updated', function (event) {
												_this.bodyTextSize.set(event.detail.width, event.detail.height);
												_this.updateElements();
									});

									// Update index number text size + entity positions when the index number text's geometry is updated.
									this.textIndex.addEventListener('geometry-updated', function (event) {
												_this.indexTextSize.set(event.detail.width, event.detail.height);
												_this.updateElements();
									});
						},

						update: function update() {
									var _this2 = this;

									// Apply platform-specific z offset
									this.positionDummy.setAttribute('position', {
												x: 0, y: 0, z: _platformUtils.PlatformUtils.getCardZOffset()
									});

									// Update position and look-at rotation to match the current camera location
									var uiPosition = this.positionDummy.object3D.getWorldPosition();
									this.el.setAttribute('position', { x: uiPosition.x, y: uiPosition.y, z: uiPosition.z });
									this.el.components['look-at-target'].update();

									// Unload the previous image
									this.image.unloadImage();

									// Load the new image
									if (this.data.url) {
												this.image.loadImage(this.data.url).then(function () {
															_this2.el.emit('load-complete', null, false);
												});
									}

									// Set text contents
									this.textHeader.setAttribute('info-card-text', {
												value: this.data.title.toUpperCase()
									});

									this.textBody.setAttribute('info-card-text', {
												value: this.data.text
									});

									this.textIndex.setAttribute('info-card-text', {
												value: this.data.type === 'rover' ? '' : '0' + this.data.index
									});
						},

						tick: function tick(t, dt) {
									this.closeIcon.tick(dt);
									this.divider.tick(dt);
									this.background.tick(dt);
									this.image.tick(dt);

									this.el.setAttribute('visible', this.background.animIn > 0);
						},

						updateElements: function updateElements() {
									var margin = MARGIN * this.data.width;

									// Set X icon position
									this.closeIcon.setPosition(-1.0 + this.closeIcon.mesh.scale.x / 2 + margin, 0.5 - this.closeIcon.mesh.scale.x / 2 - margin);

									// Set body copy position
									this.textBody.setAttribute('position', {
												x: -this.data.width + MARGIN,
												y: -0.5 + Math.abs(this.bodyTextSize.y) + 0.02
									});

									// Set index position
									this.textIndex.setAttribute('position', {
												x: -Math.abs(this.indexTextSize.x) - margin / 2,
												y: 0.5 - Math.abs(this.indexTextSize.y) - margin / 2
									});

									// Set squiggle position
									this.divider.setPosition(-1 + this.divider.mesh.scale.x / 2 + margin, this.textBody.getAttribute('position').y + this.divider.mesh.scale.y / 2 + margin);

									// Set header position
									this.textHeader.setAttribute('position', {
												x: -this.data.width + MARGIN,
												y: this.divider.mesh.position.y + Math.abs(this.headerTextSize.y)
									});
						}
			});
}

},{"../core/colors":210,"../core/scene":212,"../meshes/card-mesh":217,"../meshes/card-mesh-image":216,"../utils/platform-utils":244}],187:[function(require,module,exports){
'use strict';

var _scene = require('../core/scene');

var _eventemitter = require('eventemitter3');

var _platformUtils = require('../utils/platform-utils');

var PRESS_AND_HOLD_TIMER = 1000; // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * intro-player
 *
 * Intro sequencer. Waits for all the intro components to be loaded
 * and ready, then triggers the animation.
 *
 * When the animation is complete, the intro components are removed.
 *
 * Tapping on video brings up skip intro button
 * Tapping on skip intro jumps to rover landing
 *
 * All 3D objects are hidden until video is displayed
 */


if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('intro-player', {

		init: function init() {
			var _this = this;

			this.isVR = false;
			this.isVideoSkipped = false;
			this.animLoaded = false;
			this.introComplete = false;
			this.terrainLoaded = false;
			this.videoComplete = false;
			this.isControllerPressed = false;

			this.camera = document.getElementById('camera');
			this.mapMarkers = document.getElementById('horizMarkers');
			this.markers = document.getElementById('markers');

			this.rover = _scene.Scene.createRover();

			// HACK
			// can't inject the video div so both video objects are added.
			// Removed the unsupported one
			if (_platformUtils.PlatformUtils.isMp4Supported()) {
				var webmVideo = document.querySelector('#intro-video-webm');
				webmVideo.parentNode.removeChild(webmVideo);
				this.srcVideoId = 'intro-video-mp4';
			} else {
				var mp4Video = document.querySelector('#intro-video-mp4');
				mp4Video.parentNode.removeChild(mp4Video);
				this.srcVideoId = 'intro-video-webm';
			}

			this.video = document.createElement('a-entity');
			this.video.setAttribute('intro-video', { src: this.srcVideoId });
			this.video.setAttribute('geometry', { primitive: 'plane', width: 16 * 1, height: 9 * 1 });
			this.video.setAttribute('position', '5.00 1.6 0.0');
			this.video.setAttribute('material', {
				color: '#FFF',
				src: "#" + this.srcVideoId,
				shader: 'flat',
				side: 'double'
			});

			this.skipintroHTML = document.querySelector('#skip-intro');
			this.holdToSkip = document.createElement('a-entity');
			this.holdToSkip.setAttribute('position', '0.00 -0.6 -1.25 ');
			this.holdToSkip.setAttribute('visible', 'false');
			this.holdToSkip.setAttribute('text', {
				align: 'center',
				anchor: 'center',
				baseline: 'bottom',
				color: '#999',
				font: 'fonts/NowAlt-Medium.json',
				shader: 'msdf',
				value: 'H O L D  T O  S K I P'
			});

			this.holdToSkipBar = document.createElement('a-entity');
			this.holdToSkipBar.setAttribute('geometry', 'primitive: plane; height: 0.005; width: 0.39;');
			this.holdToSkipBar.setAttribute('material', 'color: #999;');
			this.holdToSkipBar.setAttribute('position', '0.00 -0.6 -1.25 ');
			this.holdToSkipBar.setAttribute('scale', { x: 0.0 });

			if (!AFRAME.utils.device.isMobile()) {
				var videoEl = document.getElementById(this.srcVideoId);
				videoEl.muted = false;
			}

			_scene.Scene.on('terrain-loaded', function (event) {
				_this.terrainLoaded = true;
				_this.tryPlayAnimation();
			});

			this.video.addEventListener('video-ended', function (event) {
				_this.videoComplete = true;
				_this.tryPlayAnimation();
			});

			this.rover.addEventListener('load-complete', function (event) {
				_this.animLoaded = true;
				_this.tryPlayAnimation();
			});

			this.rover.addEventListener('complete', function (event) {
				_this.el.removeState('playing-intro');
				_this.el.emit('intro-complete', null, false);
			});

			_scene.Scene.on('on-controls-ready', function (event) {
				if (_this.introComplete) return;

				if (_scene.Scene.modeType === 'vr') {
					if (_this.isVR) {
						return;
					}
					_this.skipintroHTML.setAttribute('class', 'invisible');
					_this.holdToSkip.setAttribute('visible', 'true');
					_this.isVR = true;
					_this.tryAddingControllerListeners();
				} else if (_scene.Scene.modeType === '360') {
					if (!_this.isVR) {
						return;
					}
					_this.skipintroHTML.removeAttribute('class');
					_this.holdToSkip.setAttribute('visible', 'false');
					_this.isVR = false;
					_this.tryRemovingControllerListeners();
				}
			});

			this.skipintroHTML.addEventListener('click', this.onVideoClick.bind(this));

			this.camera.appendChild(this.holdToSkip);
			this.camera.appendChild(this.holdToSkipBar);
			this.el.appendChild(this.video);

			_scene.Scene.hideElements();

			this.el.addState('playing-intro');
		},

		onVideoClick: function onVideoClick() {
			this.videoComplete = true;
			this.tryPlayAnimation();
			ga('send', 'event', 'video-intro', 'skipped', '');

			if (_scene.Scene.controllerType === 'mouse-touch') {
				this.skipintroHTML.removeAttribute('class');
			} else {
				this.holdToSkip.setAttribute('visible', 'true');
			}

			this.isVideoSkipped = true;
		},

		tryPlayAnimation: function tryPlayAnimation() {
			if (!this.animLoaded) return;
			if (!this.videoComplete) return;
			if (!this.terrainLoaded) return;

			if (this.introComplete) return;
			this.introComplete = true;

			// Remove the video element
			var videoEl = document.getElementById(this.srcVideoId);
			videoEl.parentNode.removeChild(videoEl);
			this.el.removeChild(this.video);

			// Remove skip UI elements
			this.camera.removeChild(this.holdToSkip);
			this.camera.removeChild(this.holdToSkipBar);
			this.skipintroHTML.parentNode.removeChild(this.skipintroHTML);

			this.tryRemovingControllerListeners();

			this.el.emit('video-complete');

			// Show the rover and start the animation
			this.rover.setAttribute('visible', true);
			this.rover.addState('animate');
		},

		remove: function remove() {
			this.el.removeState('playing-intro');
			_scene.Scene.hideRover();
		},

		tryAddingControllerListeners: function tryAddingControllerListeners() {
			this.onControllerChangedRef = this.onControllerChanged.bind(this);
			var controller = document.getElementById('right-hand');
			controller.addEventListener('buttonchanged', this.onControllerChangedRef);

			this.onTouchRef = this.onTouch.bind(this);

			if (AFRAME.utils.device.isMobile()) {
				this.el.sceneEl.addEventListener('touchstart', this.onTouchRef);
				this.el.sceneEl.addEventListener('touchend', this.onTouchRef);
			}
		},

		tryRemovingControllerListeners: function tryRemovingControllerListeners() {
			var controller = document.getElementById('right-hand');
			controller.removeEventListener('buttonchanged', this.onControllerChangedRef);

			if (AFRAME.utils.device.isMobile()) {
				this.el.sceneEl.removeEventListener('touchstart', this.onTouchRef);
				this.el.sceneEl.removeEventListener('touchend', this.onTouchRef);
			}
		},

		onControllerDown: function onControllerDown(event) {
			if (this.isControllerPressed) return;
			this.startTime = Date.now();
			this.isControllerPressed = true;
			this.timeCheck();
		},

		onControllerUp: function onControllerUp(event) {
			if (!this.isControllerPressed) return;
			this.isControllerPressed = false;
			this.holdToSkipBar.setAttribute('scale', { x: 0 });
		},

		onControllerChanged: function onControllerChanged(event) {
			if (this.introComplete) return;
			if (event.detail.state.pressed) {
				this.onControllerDown();
			} else {
				this.onControllerUp();
				var videoEl = document.getElementById(this.srcVideoId);
				if (videoEl.paused) {
					videoEl.play();
				}
			}
		},

		onTouch: function onTouch(event) {
			if (this.introComplete) return;
			switch (event.type) {
				case "touchstart":
					this.onControllerDown();
					break;
				case "touchend":
					this.onControllerUp();
					var videoEl = document.getElementById(this.srcVideoId);
					if (videoEl.paused) {
						videoEl.play();
					}
					break;
			}
		},

		timeCheck: function timeCheck() {
			var _this2 = this;

			this.currentTime = Date.now();
			var deltaTime = this.currentTime - this.startTime;
			var scale = this.isControllerPressed ? deltaTime / PRESS_AND_HOLD_TIMER : 0;
			this.holdToSkipBar.setAttribute('scale', { x: scale });
			if (deltaTime > PRESS_AND_HOLD_TIMER) {
				this.isControllerPressed = false;
				this.onVideoClick();
				return;
			};

			requestAnimationFrame(function () {
				if (!_this2.isControllerPressed) return;
				_this2.timeCheck();
			});
		}
	});
}

},{"../core/scene":212,"../utils/platform-utils":244,"eventemitter3":126}],188:[function(require,module,exports){
'use strict';

var _scene = require('../core/scene');

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('intro-video', {

		schema: {
			src: { type: 'string', default: 'intro-video-mp4' }
		},

		init: function init() {
			var _this = this;

			this.video = document.querySelector('#' + this.data.src);
			this.video.setAttribute('crossOrigin', 'anonymous');

			this.video.addEventListener('ended', function (event) {
				_this.el.emit('video-ended', null, false);
			});

			if (_scene.Scene.flags.skip_intro) {
				this.video.pause();
				this.el.emit('video-ended', null, false);
			}

			// // force plays video if not already playing
			// this.video.play();
			// this.tryPlayingRef = this.tryPlaying.bind(this);
			// document.addEventListener( 'click', this.tryPlayingRef );
		}

		// tryPlaying() {
		// 	this.video.play();
		// 	document.removeEventListener( 'click', this.tryPlayingRef );
		// }

	});
} // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * intro-video
 *
 * Simple wrapper interface for playback of the intro video
 * in a video material.
 *
 * Video materials are not fully exposed to AFRAME, but the
 * 'materialvideoloadeddata' event provides an entry point
 * to grab the video object and set any required parameters.
 */

},{"../core/scene":212}],189:[function(require,module,exports){
'use strict';

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * look-at-target
 *
 * Camera- and parent-independent look-at component.
 * Target is an element selector.
 *
 * Can limit rotation to a given axis, specified by a string: 
 * 'xyz', 'xy', 'z', etc. Defaults to 'y'.
 */

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('look-at-target', {

		schema: {
			axis: { type: 'string', default: 'y' },
			offset: { type: 'vec3', default: new THREE.Vector3() },
			target: { type: 'string', default: '#camera' },
			alwaysUpdate: { type: 'boolean', default: true }
		},

		init: function init() {
			this.lookAtMatrix = new THREE.Matrix4();
			this.lookAtEyeVector = new THREE.Vector3();
			this.lookAtTargetVector = new THREE.Vector3();
			this.previousEuler = new THREE.Euler();
			this.euler = new THREE.Euler();
			this.needsUpdate = true;
			this.target = null;
			this.updateTimer = 0;
		},

		update: function update() {
			this.target = document.querySelector(this.data.target);
			this.needsUpdate = true;
			this.updateTimer = 1;
		},

		tick: function tick(t, dt) {
			if (!this.el.object3D) return;
			if (!this.target.object3D) return;
			if (!this.data.alwaysUpdate && !this.needsUpdate) return;

			if (this.data.axis === 'y') {

				//Calculate world absolute rotation matrix
				this.lookAtEyeVector.setFromMatrixPosition(this.el.object3D.matrixWorld);
				this.lookAtTargetVector.setFromMatrixPosition(this.target.object3D.matrixWorld);
				this.lookAtMatrix.lookAt(this.lookAtEyeVector, this.lookAtTargetVector, this.el.object3D.up);

				this.el.object3D.quaternion.setFromRotationMatrix(this.lookAtMatrix);

				this.euler.x = this.data.offset.x + (this.data.axis.includes('x') ? this.el.object3D.rotation.x : 0);
				this.euler.y = this.data.offset.y + (this.data.axis.includes('y') ? this.el.object3D.rotation.y : 0);
				this.euler.z = this.data.offset.z + (this.data.axis.includes('z') ? this.el.object3D.rotation.z : 0);
				this.el.object3D.setRotationFromEuler(this.euler);
			} else {
				this.el.object3D.lookAt(this.target.object3D.getWorldPosition());
			}

			this.updateTimer = Math.max(0, this.updateTimer - dt / 1000);

			if (this.updateTimer <= 0) {
				this.needsUpdate = false;
			}
		}
	});
}

},{}],190:[function(require,module,exports){
'use strict';

var _colors = require('../core/colors');

var _c4dUtils = require('../c4d/c4d-utils');

var _gltfLoader = require('../loaders/gltf-loader');

var ColorAlphaShader = require('../shaders/color-alpha-shader'); // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * map-background
 *
 * UI component for displaying the background map geometry 
 * on the map card. The geometry itself is loaded from a GLTF file.
 */

var ANIM_IN_DURATION = 0.25;
var DELAY_DURATION = 0.18;

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('map-background', {

		schema: {
			width: { type: 'number', default: 2 }
		},

		init: function init() {
			var _this = this;

			this.animIn = 0;
			this.delayCounter = 0;

			// Create a ColorAlphaShader material
			this.material = new THREE.ShaderMaterial({
				uniforms: THREE.UniformsUtils.clone(ColorAlphaShader.uniforms),
				vertexShader: ColorAlphaShader.vertexShader,
				fragmentShader: ColorAlphaShader.fragmentShader,
				transparent: true,
				depthTest: false
			});

			// Set material uniforms
			this.material.uniforms.opacity.value = 0;
			this.material.uniforms.color.value = _colors.BGColor;

			// Load and set up the map path mesh
			_gltfLoader.GLTFLoader.load('map/map-bg.glb').then(function (result) {
				_this.mesh = _c4dUtils.C4DUtils.getChildWithType(result.gltf.scene, 'Mesh');
				_this.mesh.scale.multiplyScalar(_this.data.width / 10);
				_this.mesh.position.setZ(0.001);
				_this.mesh.material = _this.material;
				_this.el.setObject3D('mesh', _this.mesh);
			});

			// Reset the delay counter when the 'visible' state is added
			this.el.addEventListener('stateadded', function (event) {
				if (event.detail.state !== 'visible') return;
				_this.delayCounter = 1;
			});
		},

		tick: function tick(t, dt) {
			if (this.delayCounter > 0) {
				dt = dt / 1000 * (1 / DELAY_DURATION);
			} else {
				dt = dt / 1000 * (1 / ANIM_IN_DURATION);
			}

			if (this.delayCounter > 0) {
				this.delayCounter -= dt;
				return;
			}

			if (this.el.is('visible')) {
				this.animIn = Math.min(1, this.animIn + dt);
			} else {
				this.animIn = Math.max(0, this.animIn - dt * 2);
			}

			this.material.uniforms.opacity.value = this.animIn * 100;
		}
	});
}

},{"../c4d/c4d-utils":173,"../core/colors":210,"../loaders/gltf-loader":214,"../shaders/color-alpha-shader":219}],191:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
			value: true
});
exports.ASPECT_RATIO = undefined;

var _scene = require('../core/scene');

var _cardMesh = require('../meshes/card-mesh');

var _audioManager = require('../core/audio-manager');

var _platformUtils = require('../utils/platform-utils');

var _colors = require('../core/colors');

var ASPECT_RATIO = exports.ASPECT_RATIO = 0.381714; // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
////   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * map-card
 *
 * UI component for displaying the map teleportation interface when
 * the user clicks on the horizon marker.
 *
 * The card will position itself towards the camera when shown.
 */

var DESKTOP_Y_OFFSET = 0.3;
var TEXT_LEFT_PADDING = 0.025;

if (typeof AFRAME !== 'undefined' && AFRAME) {
			AFRAME.registerComponent('map-card', {

						dependencies: ['visible', 'look-at-target'],

						schema: {
									width: { type: 'number', default: 2 }
						},

						init: function init() {
									var _this = this;

									// Set up look-at-target component so that the card faces the camera directly.
									this.el.setAttribute('look-at-target', {
												axis: 'xyz',
												target: '#camera',
												alwaysUpdate: false,
												offset: new THREE.Vector3(0, Math.PI, 0)
									});

									// This group is used to hold the various meshes that aren't represented
									// by separate entity DOM elements. This includes the background plane
									// and the header plane. This group is assigned to the back-meshes element
									// so that the background elements are drawn behind the foreground elements
									// correctly.
									this.group = new THREE.Group();
									this.player = document.getElementById('player');
									this.backEl = document.getElementById('back-meshes');
									this.backEl.setObject3D('mesh', this.group);

									// Create the background plane mesh
									this.background = new _cardMesh.CardMesh(this.data.width, this.data.width * ASPECT_RATIO);

									// Create the header plane mesh
									this.header = new _cardMesh.CardMesh(this.data.width, 0.1);
									this.header.setPosition(0, 0.445);

									// Create and set up the hitbox
									this.hitbox = document.createElement('a-entity');
									this.hitbox.setAttribute('position', { z: -1 });
									this.hitbox.setAttribute('event-priority', 100);
									this.hitbox.setAttribute('hitbox', {
												expansion: 20,
												cursorScale: 0.3
									});

									this.backgroundMesh = document.createElement('a-entity');
									this.backgroundMesh.setAttribute('map-background', '');

									this.path = document.createElement('a-entity');
									this.path.setAttribute('map-path', '');

									// Create and position the header text entity
									this.headerEl = document.createElement('a-entity');
									this.headerEl.setAttribute('position', {
												x: -this.data.width / 2 + TEXT_LEFT_PADDING,
												y: 0.445 - 0.1 / 2 + 0.025,
												z: 0
									});

									// Create the header number text entity
									this.numberLabel = document.createElement('a-entity');
									this.numberLabel.setAttribute('info-card-text', {
												color: _colors.TextLightColorHex,
												font: 'fonts/NowAlt-Bold.json',
												width: this.data.width,
												wrapCount: 64
									});

									// Create the headersite name text entity
									this.siteLabel = document.createElement('a-entity');
									this.siteLabel.setAttribute('position', { x: 0.09, y: 0, z: 0 });
									this.siteLabel.setAttribute('info-card-text', {
												color: _colors.TextColorHex,
												font: 'fonts/NowAlt-Bold.json',
												letterSpacing: 6,
												width: this.data.width,
												wrapCount: 64
									});

									this.backEl.appendChild(this.hitbox);
									this.backEl.appendChild(this.headerEl);
									this.backEl.appendChild(this.path);
									this.backEl.appendChild(this.backgroundMesh);
									this.headerEl.appendChild(this.numberLabel);
									this.headerEl.appendChild(this.siteLabel);
									this.group.add(this.background.mesh);
									this.group.add(this.header.mesh);

									this.positionDummy = document.getElementById('ui-dummy');
									this.offsetDummy = document.getElementById('map-card-offset');
									this.camera = document.getElementById('camera');

									// Show the card when the 'visible' state is added
									this.el.addEventListener('stateadded', function (event) {
												if (event.detail.state !== 'visible') return;
												ga('send', 'event', 'map-card', 'opened', '');
												_this.onShow();
									});

									// Dismiss the card when the 'visible' state is removed
									this.el.addEventListener('stateremoved', function (event) {
												if (event.detail.state !== 'visible') return;
												_this.onHide();
									});

									// Dismiss the card if the hitbox is clicked
									this.backEl.addEventListener('raycaster-cursor-up', function (event) {
												ga('send', 'event', 'map-card', 'dismissed', '');
												_this.onHide();
									});

									// Set the path's site parameter when site card has been hovered over
									this.el.addEventListener('site-hover', function (event) {
												_this.path.setAttribute('map-path', {
															site: event.detail
												});
									});

									// Bubble the hide-complete event from the header mesh up thru the entity element.
									// The header mesh is the last of the meshes to play the transition animation.
									this.header.on('hide-complete', function (event) {
												_this.el.emit('hide-complete', null, false);
									});
						},

						onShow: function onShow() {
									// Set visible states for all relevant child entities
									this.el.sceneEl.addState('modal');
									this.numberLabel.addState('visible');
									this.siteLabel.addState('visible');
									this.path.addState('visible');
									this.backgroundMesh.addState('visible');

									// Show the background and header meshes. Delay the background mesh
									// so that the transition feels natural.
									this.background.show(0.25, 0.05);
									this.header.show(0.05);

									// Adjust the panel's position depending on platform. On desktop, the
									// panel needs to be moved closer to the camera and centered
									var yOffset = AFRAME.utils.device.isMobile() ? 0 : DESKTOP_Y_OFFSET;

									// const zOffset = AFRAME.utils.device.isMobile() ? -2 : -1.75;
									// this.positionDummy.setAttribute( 'position', { x: 0, y: 0, z: zOffset } );

									this.positionDummy.setAttribute('position', {
												x: 0, y: 0, z: _platformUtils.PlatformUtils.getCardZOffset()
									});

									this.offsetDummy.setAttribute('position', { x: 0, y: yOffset, z: 0 });

									// Update position and look-at rotation to match the current camera location
									var uiPosition = this.positionDummy.object3D.getWorldPosition();
									this.el.setAttribute('position', { x: uiPosition.x, y: uiPosition.y, z: uiPosition.z });
									this.el.components['look-at-target'].update();

									// Update the header text with the current scene's name and index number
									var mapSiteCardData = document.getElementById('map-' + _scene.Scene.currentSite).getAttribute('map-site-card');

									this.siteLabel.setAttribute('info-card-text', {
												value: mapSiteCardData.title.toUpperCase()
									});

									this.numberLabel.setAttribute('info-card-text', {
												value: '0' + mapSiteCardData.index
									});
						},

						onHide: function onHide() {
									// Remove visible states for all relevant child entities
									this.el.sceneEl.removeState('modal');
									this.el.removeState('visible');
									this.numberLabel.removeState('visible');
									this.siteLabel.removeState('visible');
									this.path.removeState('visible');
									this.backgroundMesh.removeState('visible');

									// Hide the background and header meshes. Delay the header
									// mesh animation so that the transition feels natural.
									this.background.hide();
									this.header.hide(0.05, 0.25);
						},

						tick: function tick(t, dt) {
									this.background.tick(dt);
									this.header.tick(dt);

									// Set this element's visiblity property based on the header mesh's
									// animIn value.
									this.el.setAttribute('visible', this.header.animIn > 0);
						}
			});
}

},{"../core/audio-manager":209,"../core/colors":210,"../core/scene":212,"../meshes/card-mesh":217,"../utils/platform-utils":244}],192:[function(require,module,exports){
'use strict';

var _colors = require('../core/colors');

var ColorMaskShader = require('../shaders/color-mask-shader'); // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * map-marker
 *
 * UI component for a single pin-point marker. Used by map-card
 * to mark the location of each terrain site on the rover path.
 */

var BezierEasing = require('bezier-easing');

var PLANE_GEO = new THREE.PlaneGeometry(1, 1);
var EASING = BezierEasing(0.66, 0, 0.33, 1);
var XFADE_DURATION = 0.4;

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('map-marker', {

		schema: {
			index: { default: 1 },
			site: { type: 'string' }
		},

		init: function init() {
			var _this = this;

			this.animIn = 0;
			this.crossfade = 0;
			this.color = _colors.TextLightColor.clone();
			this.parentCard = document.getElementById('map-card');

			// Create the material for the marker icon
			this.material = new THREE.ShaderMaterial({
				uniforms: THREE.UniformsUtils.clone(ColorMaskShader.uniforms),
				vertexShader: ColorMaskShader.vertexShader,
				fragmentShader: ColorMaskShader.fragmentShader,
				transparent: true,
				depthTest: false
			});

			// Load the marker icon texture
			var textureLoader = new THREE.TextureLoader();
			textureLoader.load('img/go-icon.png', function (texture) {
				_this.material.uniforms.map.value = texture;
				_this.material.uniforms.color.value = _this.color;
				_this.material.needsUpdate = true;
			});

			// Create the marker icon mesh
			this.mesh = new THREE.Mesh(PLANE_GEO, this.material);
			this.mesh.scale.multiplyScalar(0.075);
			this.el.setObject3D('mesh', this.mesh);

			// Create number text entity
			this.numberLabel = document.createElement('a-entity');
			this.numberLabel.setAttribute('position', { x: 0, y: 0.01, z: 0 });
			this.numberLabel.setAttribute('info-card-text', {
				align: 'center',
				baseline: 'bottom',
				color: _colors.TextLightColorHex,
				font: 'fonts/NowAlt-Medium.json',
				letterSpacing: 3,
				value: '0' + this.data.index,
				width: 0.32,
				wrapCount: 8
			});

			this.el.appendChild(this.numberLabel);

			// Add the 'visible' state to the child entities whenever the parent card adds it.
			this.parentCard.addEventListener('stateadded', function (event) {
				if (event.detail.state !== 'visible') return;
				_this.numberLabel.addState('visible');
			});

			// Remove the 'visible' state to the child entities whenever the parent card removes it.
			this.parentCard.addEventListener('stateremoved', function (event) {
				if (event.detail.state !== 'visible') return;
				_this.numberLabel.removeState('visible');
			});

			// Listen for site-hover events from the map-card component and set the selected
			// state if the matching map-site-card has been hovered over.
			this.parentCard.addEventListener('site-hover', function (event) {
				if (event.detail === _this.data.site) {
					_this.el.addState('selected');
				} else {
					_this.el.removeState('selected');
				}
			});
		},

		update: function update() {
			// Update the number label's value
			this.numberLabel.setAttribute('text', {
				value: '0' + this.data.index
			});
		},

		tick: function tick(t, dt) {
			dt = dt / 1000 * (1 / XFADE_DURATION);

			if (this.el.is('selected')) {
				this.crossfade = Math.min(1, this.crossfade + dt);
			} else {
				this.crossfade = Math.max(0, this.crossfade - dt * 2);
			}

			if (this.parentCard.is('visible')) {
				this.animIn = Math.min(1, this.animIn + dt);
			} else {
				this.animIn = Math.max(0, this.animIn - dt * 2);
			}

			this.color = _colors.TextLightColor.clone();
			this.color.lerp(_colors.TextColor, EASING(this.crossfade));

			this.material.uniforms.color.value = this.color;
			this.material.uniforms.opacity.value = EASING(this.animIn);
		}
	});
}

},{"../core/colors":210,"../shaders/color-mask-shader":220,"bezier-easing":13}],193:[function(require,module,exports){
'use strict';

var _colors = require('../core/colors');

var _gltfLoader = require('../loaders/gltf-loader');

var _mathUtils = require('../utils/math-utils');

var _c4dUtils = require('../c4d/c4d-utils');

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * map-path
 *
 * UI component for displaying the animated path line on the map card. 
 * 
 * The path line is filled in based on what site marker the 
 * user has selected.
 *
 * The path mesh is loaded from a GLTF file, and the path
 * fill animation is smoothed using a cubic easing curve.
 */

var BezierEasing = require('bezier-easing');
var MapPathShader = require('../shaders/map-path-shader');

// Line fill percentages for each terrain site
var SITE_FILLS = {
	'landing_site': 0,
	'pahrump_hills': 0.67,
	'marias_pass': 0.765,
	'murray_buttes': 0.88,
	'live_site': 1
};

var SMOOTH_TIME = 0.25;
var MAX_SMOOTH_SPEED = 500;
var ANIM_IN_DURATION = 0.25;
var EASING = BezierEasing(0.66, 0, 0.33, 1);

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('map-path', {

		schema: {
			site: { type: 'string', default: 'landing_site' },
			width: { type: 'number', default: 2 }
		},

		init: function init() {
			var _this = this;

			this.currentSite = this.data.site;
			this.currentFillValue = 0;
			this.targetFillValue = 0;
			this.fillVelocity = 0;
			this.animIn = 0;

			// Create a MapPathShader material
			this.material = new THREE.ShaderMaterial({
				uniforms: THREE.UniformsUtils.clone(MapPathShader.uniforms),
				vertexShader: MapPathShader.vertexShader,
				fragmentShader: MapPathShader.fragmentShader,
				transparent: true,
				depthTest: false
			});

			// Set material uniforms
			this.material.uniforms.colorA.value = _colors.TextLightColor;
			this.material.uniforms.colorB.value = _colors.TextColor;
			this.material.uniforms.opacity.value = 0;

			// Load and set up the map path mesh
			_gltfLoader.GLTFLoader.load('map/map-path.glb').then(function (result) {
				_this.mesh = _c4dUtils.C4DUtils.getChildWithType(result.gltf.scene, 'Mesh');
				_this.mesh.scale.multiplyScalar(_this.data.width / 10);
				_this.mesh.position.setZ(0.002);
				_this.mesh.material = _this.material;
				_this.el.setObject3D('mesh', _this.mesh);
			});
		},

		update: function update() {
			if (this.data.site !== 'current') this.currentSite = this.data.site;
			this.targetFillValue = SITE_FILLS[this.currentSite];
		},

		tick: function tick(t, dt) {
			dt = dt / 1000;

			var dtAnimIn = dt * (1 / ANIM_IN_DURATION);

			if (this.el.is('visible')) {
				this.animIn = Math.min(1, this.animIn + dtAnimIn);
			} else {
				this.animIn = Math.max(0, this.animIn - dtAnimIn * 2);
			}

			this.material.uniforms.opacity.value = EASING(this.animIn);

			if (this.currentFillValue != this.data.fill) {

				// Calculate a smoothed value for the line stroke length using a cubic polynomial curve.
				// This allows the user to flip between any of the sites while having the line stroke length
				// smoothly adjust without having to maintain any delays or time state information.
				var smooth = _mathUtils.MathUtils.smooth1D(this.currentFillValue, this.targetFillValue, this.fillVelocity, dt, 0.25, 500);
				this.fillVelocity = smooth.velocity;
				this.currentFillValue = smooth.value;

				// current, target, velocity, dt, smoothTime smoothMax ) {
				// const t = 2 / SMOOTH_TIME;
				// const t2 = t * dt;
				// const cubic = 1 / ( 1 + t2 + 0.48 * t2 * t2 + 0.235 * t2 * t2 * t2 );
				// const limit = MAX_SMOOTH_SPEED * SMOOTH_TIME;
				// const delta = this.currentFillValue - this.targetFillValue;
				// const error = MathUtils.clamp( delta, -limit, limit );
				// const d = ( this.fillVelocity + t * error ) * dt;
				// this.fillVelocity = ( this.fillVelocity - t * d ) * cubic;
				// this.currentFillValue = ( this.currentFillValue - error ) + ( d + error ) * cubic;

				this.material.uniforms.fill.value = 1.0 - this.currentFillValue;
			}
		}
	});
}

},{"../c4d/c4d-utils":173,"../core/colors":210,"../loaders/gltf-loader":214,"../shaders/map-path-shader":228,"../utils/math-utils":243,"bezier-easing":13}],194:[function(require,module,exports){
'use strict';

var _colors = require('../core/colors');

var _mapCard = require('./map-card');

var _audioManager = require('../core/audio-manager');

var _scene = require('../core/scene');

var _cardMesh = require('../meshes/card-mesh');

var _cardMeshBorder = require('../meshes/card-mesh-border');

var _cardMeshImage = require('../meshes/card-mesh-image');

var MARGIN = 0.015; // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * map-site-card
 *
 * UI component which represents a single terrain site info card
 * shown at the bottom of the map-card.
 *
 * Clicking on this card will send the user to the terrain site
 * specified on the card.
 */

var TEXT_PADDING = 0.042;

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('map-site-card', {

		schema: {
			index: { type: 'string' },
			title: { type: 'string' },
			site: { type: 'string' },
			distance: { type: 'string' },
			height: { type: 'number', default: 0.42 }
		},

		init: function init() {
			var _this = this;

			// this.hoverAmount = 0;
			this.mapCard = document.getElementById('map-card');
			this.index = Array.from(this.el.parentNode.children).indexOf(this.el);

			// Create the background card mesh
			this.background = new _cardMeshBorder.CardMeshBorder();

			// Create and set up the hitbox
			this.hitbox = document.createElement('a-entity');
			this.hitbox.setAttribute('event-priority', 100);
			this.hitbox.setAttribute('hitbox', {
				expansion: 0,
				cursorScale: 0.3
			});

			// Create the title label text entity
			this.siteLabel = document.createElement('a-entity');
			this.siteLabel.setAttribute('info-card-text', {
				color: _colors.TextColorHex,
				font: 'fonts/NowAlt-Bold.json',
				letterSpacing: 3,
				transitionInDelay: 0.2,
				transitionOutSpeed: 3,
				value: this.data.title.toUpperCase(),
				width: 0.32,
				wrapCount: 10
			});

			// Create the distance label text entity
			this.distanceLabel = document.createElement('a-entity');
			this.distanceLabel.setAttribute('info-card-text', {
				baseline: 'bottom',
				color: _colors.TextColorHex,
				font: 'fonts/NowAlt-Bold.json',
				letterSpacing: 3,
				transitionInDelay: 0.2,
				transitionOutSpeed: 3,
				value: this.data.distance,
				width: 0.32,
				wrapCount: 10
			});

			// Create the index number label text entity
			this.numberLabel = document.createElement('a-entity');
			this.numberLabel.setAttribute('info-card-text', {
				align: 'right',
				color: _colors.TextLightColorHex,
				font: 'fonts/NowAlt-Bold.json',
				letterSpacing: 3,
				transitionInDelay: 0.2,
				transitionOutSpeed: 3,
				value: '0' + (this.index + 1),
				width: 0.32,
				wrapCount: 10
			});

			// Create the squiggle divider mesh
			this.divider = new _cardMeshImage.CardMeshImage(0.225, 0.06, 'cards/squiggle.jpg');
			this.divider.setPosition(-0.5 + 0.2 + TEXT_PADDING, -0.5 + 0.3);
			this.divider.setDepth(0.001);

			// Create the background card mesh
			this.background.mesh.add(this.divider.mesh);

			// Create an entity to contain the card's text content and add the text entities to it.
			this.contentEl = document.createElement('a-entity');
			this.contentEl.appendChild(this.distanceLabel);
			this.contentEl.appendChild(this.numberLabel);
			this.contentEl.appendChild(this.siteLabel);

			// Create an entity to contain the card's background mesh. This ensures that background mesh
			// is behind the content so that the render order is correct.
			this.backEl = document.createElement('a-entity');
			this.backEl.setObject3D('mesh', this.background.mesh);
			this.backEl.appendChild(this.hitbox);

			// Add 'em up
			this.el.appendChild(this.backEl);
			this.el.appendChild(this.contentEl);

			// Bind raycaster events
			this.el.addEventListener('raycaster-intersected', this.onIntersect.bind(this));
			this.el.addEventListener('raycaster-intersected-cleared', this.onIntersectionCleared.bind(this));
			this.el.addEventListener('raycaster-cursor-up', this.onClick.bind(this));

			// Bubble the visible state up to all child entities when it is added to the map card
			this.mapCard.addEventListener('stateadded', function (event) {
				if (event.detail.state !== 'visible') return;
				_this.distanceLabel.addState('visible');
				_this.numberLabel.addState('visible');
				_this.siteLabel.addState('visible');
				_this.background.show(0.1, 0.2);
				_this.divider.show(0.05, 0.25);
			});

			// Bubble the visible state up to all child entities when it is removed from the map card
			this.mapCard.addEventListener('stateremoved', function (event) {
				if (event.detail.state !== 'visible') return;
				_this.distanceLabel.removeState('visible');
				_this.numberLabel.removeState('visible');
				_this.siteLabel.removeState('visible');
				_this.el.removeState('hover');
				_this.background.hide(0.1);
				_this.divider.hide(0.05);
			});

			this.el.addEventListener('selected', function (event) {
				_this.el.addState('hover');
				_this.mapCard.emit('site-hover', _this.data.site, false);
			});
		},

		onIntersect: function onIntersect() {
			// Prevent the boop sound from retriggering every time the cursor moves over the hitbox.
			if (!this.el.is('hover')) _audioManager.AudioManager.playSFX('boop');

			this.el.addState('hover');
			this.background.hover = true;
			this.mapCard.emit('site-hover', this.data.site, false);
		},

		onIntersectionCleared: function onIntersectionCleared() {
			this.el.removeState('hover');
			this.background.hover = false;
		},

		onClick: function onClick(event) {
			_audioManager.AudioManager.playSFX('map');

			// No need to jump if the same scene is selected
			if (this.data.site === _scene.Scene.nextSite) {
				event.stopPropagation();
				event.preventDefault();
				return;
			}

			// Tell the scene that the user wants to load the site specified by this card
			this.el.sceneEl.emit('on-map-clicked', this.data.site, false);
		},

		update: function update() {
			var parentWidth = this.mapCard.getAttribute('map-card').width;
			var nChildren = this.el.parentNode.childElementCount;
			var cardWidth = parentWidth / nChildren - (MARGIN - MARGIN / nChildren);
			var halfCardWidth = cardWidth / 2;
			var startX = -1 + halfCardWidth;
			var halfHeight = this.data.height / 2;
			var textXAnchor = -halfCardWidth + TEXT_PADDING;

			this.background.setSize(cardWidth, this.data.height);

			this.el.setAttribute('position', {
				x: startX + (cardWidth + MARGIN) * this.index,
				y: -_mapCard.ASPECT_RATIO - halfHeight - MARGIN,
				z: 0
			});

			this.siteLabel.setAttribute('position', {
				x: textXAnchor,
				y: halfHeight / 12,
				z: 0
			});

			this.numberLabel.setAttribute('position', {
				x: halfCardWidth - TEXT_PADDING,
				y: halfHeight - 0.095,
				z: 0
			});

			this.distanceLabel.setAttribute('position', {
				x: textXAnchor,
				y: -halfHeight,
				z: 0
			});
		},

		tick: function tick(t, dt) {
			this.background.tick(dt);
			this.divider.tick(dt);
		}
	});
}

},{"../core/audio-manager":209,"../core/colors":210,"../core/scene":212,"../meshes/card-mesh":217,"../meshes/card-mesh-border":215,"../meshes/card-mesh-image":216,"./map-card":191}],195:[function(require,module,exports){
'use strict';

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * opacity
 * 
 * Sets opacity of all child elements
 */

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('opacity', {

		schema: { type: 'number', default: 1.0 },

		update: function update() {
			var _this = this;

			this.el.object3D.children.forEach(function (child) {
				child.material.opacity = _this.data;
				child.material.transparent = true;
				child.material.needsUpdate = true;
			});
		}
	});
}

},{}],196:[function(require,module,exports){
'use strict';

var _cardMeshImage = require('../meshes/card-mesh-image');

var _colors = require('../core/colors');

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
////   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * map-card
 *
 * UI component for displaying the map teleportation interface when
 * the user clicks on the horizon marker.
 *
 * The card will position itself towards the camera when shown.
 */

var MARGIN = 0.075;
var IMAGE_ASPECT_RATIO = 1 / 1.2;

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('orientation-card-column', {

		dependencies: ['visible'],

		schema: {
			title: { type: 'string' },
			img: { type: 'string' },
			text: { type: 'string' },
			width: { type: 'number', default: 2 * (1 / 3) }
		},

		init: function init() {
			var _this = this;

			this.index = Array.from(this.el.parentNode.children).indexOf(this.el) - 1;

			this.group = new THREE.Group();
			this.el.setObject3D('mesh', this.group);

			// Create the image mesh
			this.imageMesh = new _cardMeshImage.CardMeshImage(1, 1, 'cards/' + this.data.img + '.jpg');
			this.imageMesh.setDepth(0.001);

			// Create the squiggle divider mesh
			this.divider = new _cardMeshImage.CardMeshImage(0.07, 0.025, 'cards/squiggle.jpg');
			this.divider.setDepth(0.001);

			// Create the title text entity
			this.headerText = document.createElement('a-entity');
			this.headerText.setAttribute('info-card-text', {
				color: _colors.TextColorHex,
				font: 'fonts/NowAlt-Bold.json',
				letterSpacing: 12,
				value: this.data.title.toUpperCase(),
				width: this.data.width - MARGIN,
				wrapCount: 18
			});

			// Create the body text entity
			this.bodyText = document.createElement('a-entity');
			this.bodyText.setAttribute('info-card-text', {
				color: _colors.TextColorHex,
				font: 'fonts/NowAlt-Medium.json',
				letterSpacing: 6,
				lineHeight: 90,
				value: this.data.text,
				width: this.data.width - MARGIN * 2,
				wrapCount: 26
			});

			// Add 'em up
			this.group.add(this.imageMesh.mesh);
			this.group.add(this.divider.mesh);
			this.el.appendChild(this.headerText);
			this.el.appendChild(this.bodyText);

			this.el.parentNode.addEventListener('stateadded', function (event) {
				if (event.detail.state === 'visible') _this.onShow();
			});

			this.el.parentNode.addEventListener('stateremoved', function (event) {
				if (event.detail.state === 'visible') _this.onHide();
			});
		},

		update: function update() {
			var parentWidth = this.el.parentNode.getAttribute('orientation-card').width;
			var parentHeight = this.el.parentNode.getAttribute('orientation-card').height;

			var startX = parentWidth / -2;
			var columnWidth = parentWidth / 3;
			var imageWidth = columnWidth - MARGIN * 2;
			var imageHeight = imageWidth * IMAGE_ASPECT_RATIO;
			var halfImageHeight = imageHeight / 2;
			var headerHeight = 0.05;

			// Set the parent element's position
			this.el.setAttribute('position', {
				x: startX + columnWidth * this.index,
				y: 0,
				z: 0
			});

			// Set the image mesh's size
			this.imageMesh.setSize(imageWidth, imageHeight);

			// Set the image mesh's position
			this.imageMesh.setPosition(imageWidth / 2 + MARGIN, parentHeight / 2 - halfImageHeight - MARGIN);

			var textStartY = this.imageMesh.getY() - halfImageHeight - headerHeight - MARGIN;

			// Set the divider mesh's position
			this.divider.setPosition(MARGIN + 0.03 + 0.007, textStartY - 0.015 - 0.02);

			// Set the header text's position
			this.headerText.setAttribute('position', {
				x: MARGIN,
				y: textStartY,
				z: 0
			});

			// Set the body text's position
			this.bodyText.setAttribute('position', {
				x: MARGIN,
				y: textStartY - 0.04 - MARGIN,
				z: 0
			});
		},

		onShow: function onShow() {
			this.headerText.addState('visible');
			this.bodyText.addState('visible');
			this.imageMesh.show(0.15, 0.1);
			this.divider.show(0.05, 0.25);
		},

		onHide: function onHide() {
			this.headerText.removeState('visible');
			this.bodyText.removeState('visible');
			this.imageMesh.hide(0.15, 0.1);
			this.divider.hide(0.05);
		},

		tick: function tick(t, dt) {
			this.imageMesh.tick(dt);
			this.divider.tick(dt);
		}
	});
}

},{"../core/colors":210,"../meshes/card-mesh-image":216}],197:[function(require,module,exports){
'use strict';

var _scene = require('../core/scene');

var _cardMesh = require('../meshes/card-mesh');

var _colors = require('../core/colors');

var _platformUtils = require('../utils/platform-utils');

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
////   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * map-card
 *
 * UI component for displaying the map teleportation interface when
 * the user clicks on the horizon marker.
 *
 * The card will position itself towards the camera when shown.
 */

var DESKTOP_Y_OFFSET = 0.3;
var HEADER_HEIGHT = 0.1;
var HEADER_Y_OFFSET = 0.566;
var TEXT_LEFT_PADDING = 0.025;

if (typeof AFRAME !== 'undefined' && AFRAME) {
			AFRAME.registerComponent('orientation-card', {

						dependencies: ['visible', 'look-at-target'],

						schema: {
									height: { type: 'number', default: 1 },
									width: { type: 'number', default: 2 },
									title: { type: 'string' }
						},

						init: function init() {
									var _this = this;

									this.positionDummy = document.getElementById('ui-dummy');
									this.offsetDummy = document.getElementById('map-card-offset');
									this.camera = document.getElementById('camera');

									// Set up look-at-target component so that the card faces the camera directly.
									this.el.setAttribute('look-at-target', {
												axis: 'xyz',
												target: '#camera',
												alwaysUpdate: false,
												offset: new THREE.Vector3(0, Math.PI, 0)
									});

									// This group is used to hold the various meshes that aren't represented
									// by separate entity DOM elements. This includes the background plane
									// and the header plane. This group is assigned to the back-meshes element
									// so that the background elements are drawn behind the foreground elements
									// correctly.
									this.group = new THREE.Group();
									this.backEl = document.getElementById('orientation-back-meshes');
									this.backEl.setObject3D('mesh', this.group);

									// Create the background plane mesh
									this.background = new _cardMesh.CardMesh(this.data.width, this.data.height);

									// Create the header plane mesh
									this.header = new _cardMesh.CardMesh(this.data.width, HEADER_HEIGHT);
									this.header.setPosition(0, HEADER_Y_OFFSET);

									// Create and set up the hitbox
									this.hitbox = document.createElement('a-entity');
									this.hitbox.setAttribute('position', { z: -1 });
									this.hitbox.setAttribute('event-priority', 100);
									this.hitbox.setAttribute('hitbox', {
												expansion: 20,
												cursorScale: 0.3
									});

									// Create and position the header text entity
									this.headerEl = document.createElement('a-entity');
									this.headerEl.setAttribute('position', {
												x: -this.data.width / 2 + TEXT_LEFT_PADDING,
												y: HEADER_Y_OFFSET - HEADER_HEIGHT / 2 + 0.025,
												z: 0
									});

									// Create the title text entity
									this.headerText = document.createElement('a-entity');
									this.headerText.setAttribute('info-card-text', {
												color: _colors.TextColorHex,
												font: 'fonts/NowAlt-Bold.json',
												letterSpacing: 6,
												value: this.data.title.toUpperCase(),
												width: this.data.width,
												wrapCount: 64
									});

									// Add 'em up
									this.backEl.appendChild(this.hitbox);
									this.backEl.appendChild(this.headerEl);
									this.headerEl.appendChild(this.headerText);
									this.group.add(this.background.mesh);
									this.group.add(this.header.mesh);

									// Show the card when the 'visible' state is added
									this.el.addEventListener('stateadded', function (event) {
												if (event.detail.state !== 'visible') return;
												ga('send', 'event', 'orientation-card', 'opened', '');
												_this.onShow();
									});

									// Dismiss the card when the 'visible' state is removed
									this.el.addEventListener('stateremoved', function (event) {
												if (event.detail.state !== 'visible') return;
												_this.onHide();
									});

									// Dismiss the card if the hitbox is clicked
									this.backEl.addEventListener('raycaster-cursor-up', function (event) {
												ga('send', 'event', 'orientation-card', 'dismissed', '');
												_this.onHide();
									});

									// Bubble the hide-complete event from the header mesh up thru the entity element.
									// The header mesh is the last of the meshes to play the transition animation.
									this.header.on('hide-complete', function (event) {
												_this.el.emit('hide-complete', null, false);
									});
						},

						onShow: function onShow() {
									// Set visible states for all relevant child entities
									this.el.sceneEl.addState('modal');
									this.headerText.addState('visible');

									// Show the background and header meshes. Delay the background mesh
									// so that the transition feels natural.
									this.background.show(0.25, 0.05);
									this.header.show(0.05);

									// Apply platform-specific z offset
									this.positionDummy.setAttribute('position', { x: 0, y: 0, z: _platformUtils.PlatformUtils.getCardZOffset() });

									// Update position and look-at rotation to match the current camera location
									var uiPosition = this.positionDummy.object3D.getWorldPosition();
									this.el.setAttribute('position', { x: uiPosition.x, y: uiPosition.y, z: uiPosition.z });
									this.el.components['look-at-target'].update();
						},

						onHide: function onHide() {
									// Remove visible states for all relevant child entities
									this.el.sceneEl.removeState('modal');
									this.el.removeState('visible');
									this.headerText.removeState('visible');

									// Hide the background and header meshes. Delay the header
									// mesh animation so that the transition feels natural.
									this.background.hide();
									this.header.hide(0.05, 0.25);
						},

						tick: function tick(t, dt) {
									this.background.tick(dt);
									this.header.tick(dt);

									// Set this element's visiblity property based on the header mesh's
									// animIn value. 
									this.el.setAttribute('visible', this.header.animIn > 0);
						}
			});
}

},{"../core/colors":210,"../core/scene":212,"../meshes/card-mesh":217,"../utils/platform-utils":244}],198:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
			value: true
});
exports.POIAnimInDelay = undefined;

var _scene = require('../core/scene');

var _colors = require('../core/colors');

var _audioManager = require('../core/audio-manager');

var MARKER_DIAMETER = 30; // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * poi-marker
 *
 * Point-of-interest marker. Placed in the scene at certain locations.
 *
 * Clicking on one will open the info-card and populate it with the text
 * and image specified in the attributes.
 */

var FLAG_Y_OFFSET = 100;
var FLAG_Y_CENTER = FLAG_Y_OFFSET + MARKER_DIAMETER / 2;

var POIAnimInDelay = exports.POIAnimInDelay = 0.5;

if (typeof AFRAME !== 'undefined' && AFRAME) {
			AFRAME.registerComponent('poi-marker', {

						dependencies: ['visible'],

						schema: {
									label: { type: 'string' },
									img: { type: 'string' },
									vo: { type: 'string' },
									title: { type: 'string' },
									text: { type: 'string' },
									size: { type: 'number', default: 0.03 }
						},

						init: function init() {
									var _this = this;

									// Get the site name from the parent node's ID
									this.site = this.el.parentNode.id.split('_markers')[0];

									this.titleOpacity = 0;
									this.updateTitleOpacity = false;
									this.isIntersected = false;

									this.camera = document.getElementById('camera');

									this.el.addState('interactive');

									this.group = new THREE.Group();
									this.el.setObject3D('mesh', this.group);

									this.childIndex = Array.from(this.el.parentNode.children).indexOf(this.el) + 1;

									// Create spin widget mesh
									this.spinWidget = document.createElement('a-entity');
									this.spinWidget.setAttribute('position', new THREE.Vector3(0, FLAG_Y_CENTER, 0));
									this.spinWidget.setAttribute('poi-spin-widget', this.site);
									this.spinWidget.setAttribute('scale', { x: MARKER_DIAMETER, y: MARKER_DIAMETER, z: MARKER_DIAMETER });

									// Create pole mesh
									this.pole = document.createElement('a-entity');
									this.pole.setAttribute('position', new THREE.Vector3(0, FLAG_Y_CENTER, 0));
									this.pole.setAttribute('poi-pole', '');
									this.pole.setAttribute('scale', { x: MARKER_DIAMETER, y: MARKER_DIAMETER, z: MARKER_DIAMETER });

									// Create title label text
									this.titleLabel = document.createElement('a-entity');
									this.titleLabel.setAttribute('poi-title-text', {
												value: this.data.title.toUpperCase(),
												yOffset: FLAG_Y_CENTER + MARKER_DIAMETER * 2 + 16
									});

									// Add 'em up
									this.el.appendChild(this.titleLabel);
									this.el.appendChild(this.spinWidget);
									this.el.appendChild(this.pole);

									// Wait for the pole element to be loaded before the hitbox is added. 
									// Otherwise, the hitbox will have an incorrect size.
									this.pole.addEventListener('load-complete', function (event) {
												_this.group.add(_this.pole.object3D);

												_this.hitbox = document.createElement('a-entity');
												_this.hitbox.setAttribute('hitbox', { expansion: 10 });
												_this.hitbox.setAttribute('event-priority', 100);

												_this.el.appendChild(_this.hitbox);
												_this.el.setAttribute('scale', new THREE.Vector3(-_this.data.size, _this.data.size, _this.data.size));

												// Postpone adding the look-at-target dependency until after the hitbox is generated.
												// Otherwise the hitbox generation will not work properly.
												_this.el.setAttribute('look-at-target', '');

												// Now that the hitbox is sized correctly, give the pole meshes back to the pole mesh entity.
												_this.pole.emit('reassign-meshes', {
															ringMesh: _this.pole.ringMesh,
															poleMesh: _this.pole.poleMesh
												}, false);
									});

									// Show the pole and spin widget when the scene is done loading
									this.el.sceneEl.addEventListener('initial-load-complete', function (event) {

												// Set the pole and spin widget as visible only when they're within the camera's view frustum.
												// This allows the transition animation to play out so the user can see the POIs being added.
												var onFrustumUpdated = function onFrustumUpdated(event) {
															if (event.detail.frustum.containsPoint(_this.el.object3D.getWorldPosition())) {
																		_this.pole.addState('visible');
																		_this.spinWidget.addState('visible');
																		_this.camera.removeEventListener('frustum-updated', onFrustumUpdated);
															}
												};

												if (_this.el.parentNode.getAttribute('visible')) {
															_this.camera.addEventListener('frustum-updated', onFrustumUpdated);
												} else {
															_this.pole.removeState('visible');
															_this.spinWidget.removeState('visible');
												}
									});

									this.el.addEventListener('raycaster-intersected', this.onIntersect.bind(this));
									this.el.addEventListener('raycaster-intersected-cleared', this.onIntersectionCleared.bind(this));
									this.el.addEventListener('raycaster-cursor-up', this.onClick.bind(this));
						},

						onClick: function onClick() {
									if (!this.el.is('interactive')) return;
									if (!this.el.sceneEl.is('interactive')) return;

									this.onClickShowCard();
						},

						onIntersect: function onIntersect(event) {
									if (this.isIntersected) return;
									if (!this.el.is('interactive')) return;
									if (!this.el.sceneEl.is('interactive')) return;

									if (!this.isIntersected) {
												_audioManager.AudioManager.playSFX('boop');
									}

									this.isIntersected = true;

									this.spinWidget.addState('hover');
									this.el.addState('hover');

									this.titleLabel.setAttribute('poi-title-text', { show: true });
						},

						onIntersectionCleared: function onIntersectionCleared(event) {
									this.isIntersected = false;

									this.spinWidget.removeState('hover');
									this.el.removeState('hover');

									this.titleLabel.setAttribute('poi-title-text', { show: false });
						},

						onClickShowCard: function onClickShowCard() {
									var _this2 = this;

									this.el.removeState('interactive');
									this.titleLabel.setAttribute('poi-title-text', { show: false });
									_audioManager.AudioManager.playSFX('ui-click');

									_audioManager.AudioManager.playVO(this.data.vo);

									this.infoCard = document.getElementById('info-card');
									this.infoCard.setAttribute('info-card', {
												url: this.data.img,
												title: this.data.title,
												text: this.el.textContent,
												type: 'poi',
												// text: this.data.text,
												index: this.childIndex.toString()
									});
									this.infoCard.addState('visible');
									this.infoCard.components['info-card'].update(); // forces info card to update even if clicking on the same marker

									// Restore the scene's interactive state when the child info card is hidden
									var onInfoCardHideComplete = function onInfoCardHideComplete(event) {
												_this2.infoCard.removeEventListener('hide-complete', onInfoCardHideComplete);
												// this.numberLabel.setAttribute( 'visible', true );
												_this2.el.addState('interactive');
												_audioManager.AudioManager.stopVO();
									};

									this.infoCard.addEventListener('hide-complete', onInfoCardHideComplete);
						}
			});
}

},{"../core/audio-manager":209,"../core/colors":210,"../core/scene":212}],199:[function(require,module,exports){
'use strict';

var _c4dExportLoader = require('../c4d/c4d-export-loader');

var _c4dUtils = require('../c4d/c4d-utils');

var _mathUtils = require('../utils/math-utils');

var _poiMarker = require('./poi-marker');

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * poi-pole
 *
 * Pole & Ring mesh for the POI markers. Handles loading the mesh
 * and updating the animated transitions
 */

var BezierEasing = require('bezier-easing');
var UVHighpassShader = require('../shaders/uv-highpass-shader');

var POLE_ANIM_IN_DURATION = 0.5;
var RING_ANIM_IN_DURATION = 0.65;
var RING_ANIM_IN_DELAY = 0.2;
var POLE_ANIM_IN_EASING = BezierEasing(0.3, 0, 0.6, 1);
var RING_ANIM_IN_EASING = BezierEasing(0.7, 0, 0.2, 1);

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('poi-pole', {

		init: function init() {
			var _this = this;

			this.poleAnimIn = 0;
			this.ringAnimIn = 0;

			// Listen for a special event which is triggered by poi-marker. 
			// The poleMesh and ringMesh are reassigned as direct children of 
			// their parent poi-marker element such that the auto-generated
			// hitbox generation can work correctly. This element still needs
			// a reference to them though, in order to animate them. This event
			// reassigns that reference.
			this.el.addEventListener('reassign-meshes', function (event) {
				_this.el.ringMesh = event.detail.ringMesh;
				_this.el.poleMesh = event.detail.poleMesh;
			});

			var loader = new _c4dExportLoader.C4DExportLoader();
			loader.load('markers/pole.glb').then(function (response) {

				_this.scene = response.scene;
				_this.el.setObject3D('mesh', _this.scene);

				_this.scene.traverse(function (node) {

					if (!node.metadata) return;

					// Get the ring mesh out of the scene
					if (node.metadata.type === 'RING') {
						_this.el.ringMesh = _c4dUtils.C4DUtils.getChildWithType(node, 'Mesh');
						return;
					}

					// Get the pole mesh out of the ring
					if (node.metadata.type === 'POLE') {
						_this.el.poleMesh = _c4dUtils.C4DUtils.getChildWithType(node, 'Mesh');
						return;
					}
				});

				// Set up ring material
				_this.el.ringMesh.material = new THREE.ShaderMaterial({
					uniforms: THREE.UniformsUtils.clone(UVHighpassShader.uniforms),
					vertexShader: UVHighpassShader.vertexShader,
					fragmentShader: UVHighpassShader.fragmentShader
				});

				// Set up pole material
				_this.el.poleMesh.material = new THREE.ShaderMaterial({
					uniforms: THREE.UniformsUtils.clone(UVHighpassShader.uniforms),
					vertexShader: UVHighpassShader.vertexShader,
					fragmentShader: UVHighpassShader.fragmentShader
				});

				_this.reset();

				_this.el.emit('load-complete', null, false);
			});

			// Offset the ring's "timeline" by the delay constant
			this.el.addEventListener('stateadded', function (event) {
				if (event.detail.state !== 'visible') return;
				_this.reset();
			});
		},

		reset: function reset() {
			this.ringAnimIn = -(RING_ANIM_IN_DELAY + _poiMarker.POIAnimInDelay);
			this.poleAnimIn = -_poiMarker.POIAnimInDelay;
		},

		/**
   * Update the transition animation state
   */
		tick: function tick(t, dt) {
			// Adjust delta time so that it is 0..1 over ANIM_IN_DURATION seconds
			var dtRing = dt / 1000 * (1 / RING_ANIM_IN_DURATION);
			var dtPole = dt / 1000 * (1 / POLE_ANIM_IN_DURATION);

			// Roll the transition animation forward to 1 if this element is visible,
			// otherwise roll it back to 0.
			if (this.el.is('visible')) {
				this.poleAnimIn += dtPole;
				this.ringAnimIn += dtRing;
			} else {
				this.poleAnimIn -= dtPole;
				this.ringAnimIn -= dtRing;
			}

			this.updateRingMeshMaterial();
			this.updatePoleMeshMaterial();
		},

		/**
   * Update the ring mesh's material with the value from ringAnimIn
   */
		updateRingMeshMaterial: function updateRingMeshMaterial() {
			if (!this.el.ringMesh) return;
			if (!this.el.ringMesh.material) return;

			var clampedRingAnimIn = _mathUtils.MathUtils.clamp(this.ringAnimIn, 0, 1);
			this.el.ringMesh.material.uniforms.cutoff.value = RING_ANIM_IN_EASING(clampedRingAnimIn);
		},

		/**
   * Update the pole mesh's material with the value from poleAnimIn
   */
		updatePoleMeshMaterial: function updatePoleMeshMaterial() {
			if (!this.el.poleMesh) return;
			if (!this.el.poleMesh.material) return;

			var clampedPoleAnimIn = _mathUtils.MathUtils.clamp(this.poleAnimIn * 1.75, 0, 1);
			this.el.poleMesh.material.uniforms.cutoff.value = clampedPoleAnimIn;
		}
	});
}

},{"../c4d/c4d-export-loader":169,"../c4d/c4d-utils":173,"../shaders/uv-highpass-shader":234,"../utils/math-utils":243,"./poi-marker":198,"bezier-easing":13}],200:[function(require,module,exports){
'use strict';

var _scene = require('../core/scene');

var _c4dExportLoader = require('../c4d/c4d-export-loader');

var _c4dUtils = require('../c4d/c4d-utils');

var _mathUtils = require('../utils/math-utils');

var _poiMarker = require('./poi-marker');

var BezierEasing = require('bezier-easing'); // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * poi-spin-widget
 *
 * Spinning icon mesh used by the POI markers. Handles loading
 * the icon model and any animation.
 */

var FLIP_X_VECTOR = new THREE.Vector3(-1, 1, 1);

var ANIM_IN_DURATION = 0.7;
var ANIM_IN_DELAY = 0.25;
var ANIM_IN_EASING = BezierEasing(0.6, 0, 0.3, 1);

var START_Y_OFFSET = -1.5;
var BASE_ROT_SPEED = 0.01;

var HOVER_ROT = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI + Math.PI / 4, 0));

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('poi-spin-widget', {

		schema: { type: 'string' },

		init: function init() {
			var _this = this;

			this.animIn = 0;
			this.prevAnimIn = 0;
			this.hoverIn = 0;
			this.prevHoverIn = 0;
			this.rotSpeed = 0.01;

			var loader = new _c4dExportLoader.C4DExportLoader();
			loader.load('markers/' + this.data + '.glb').then(function (response) {

				_this.iconObject = response.scene;
				_this.iconObject.scale.copy(FLIP_X_VECTOR);
				_this.el.setObject3D('mesh', _this.iconObject);
				_this.el.emit('load-complete', null, false);

				// Save the icon's initial scale, which is used later during animation.
				_this.initialScale = _this.iconObject.children[0].scale.clone();

				_this.reset();
			});

			this.el.addEventListener('stateadded', function (event) {
				if (event.detail.state === 'visible') {
					_this.reset();
				}

				if (event.detail.state === 'hover') {
					_this.initialRot = _this.iconObject.quaternion;
				}
			});
		},

		/**
   * Reset mesh's scale and position to the offset values. Epsilon is used here
   * to prevent a scale of zero while still being too small to see from reasonable
   * camera distances.
   */
		reset: function reset() {
			if (!this.iconObject) return;
			this.animIn = -(ANIM_IN_DELAY + _poiMarker.POIAnimInDelay);
			this.iconObject.children[0].scale.set(1, 1, 1).multiplyScalar(Number.EPSILON);
			this.iconObject.children[0].position.set(0, START_Y_OFFSET, 0);
		},

		tick: function tick(t, dt) {
			if (!this.el.parentNode.parentNode.getAttribute('visible')) return;
			if (!this.el.is('visible')) return;
			if (!this.iconObject) return;

			// Adjust delta time so that it is 0..1 over ANIM_IN_DURATION seconds
			dt = dt / 1000 * (1 / ANIM_IN_DURATION);

			// Roll the transition animation forward to 1 if this element is visible,
			// otherwise roll it back to 0.
			if (this.el.is('visible')) {
				this.animIn += dt;
			} else {
				this.animIn -= dt;
			}

			// Roll the hover animation forward to 1 if this element is hovered,
			// otherwise reset it to zero immediately.
			if (this.el.is('hover')) {
				this.hoverIn += dt;
			} else {
				this.hoverIn = 0;
			}

			// Clamp and apply easing to the animIn and hoverIn value
			var easedAnimIn = ANIM_IN_EASING(_mathUtils.MathUtils.clamp(this.animIn, 0, 1));
			var easedHoverIn = ANIM_IN_EASING(_mathUtils.MathUtils.clamp(this.hoverIn, 0, 1));

			// Update object's animated scale. Again, epsilon is added here to prevent a scale of zero.
			var scale = Number.EPSILON + easedAnimIn;
			this.iconObject.children[0].scale.copy(this.initialScale).multiplyScalar(scale);

			// Update object's animated position on the y-axis. 
			// This is interpolated between the offset constant and 0.
			this.iconObject.children[0].position.set(0, _mathUtils.MathUtils.lerp(START_Y_OFFSET, 0, easedAnimIn), 0);

			// Update the object's rotation speed. Use a sine to get a curve that starts at 0, ramps to 1, 
			// and ramps down to 0 again, between easedAnimIn = 0..1. That curve is multiplied by a 
			// factor of the BASE_ROT_SPEED to give a nice acceleration and deceleration.
			this.rotSpeed = BASE_ROT_SPEED + 20 * BASE_ROT_SPEED * Math.sin(Math.PI * easedAnimIn);

			// Spin it right round, but ease it out on hover
			this.iconObject.rotateY(this.rotSpeed * (1 - easedHoverIn));

			// Slerp the rotation to a static 45º rotation on hover
			if (this.hoverIn > 0) {
				THREE.Quaternion.slerp(this.initialRot, HOVER_ROT, this.iconObject.quaternion, easedHoverIn);
			}
		}
	});
}

},{"../c4d/c4d-export-loader":169,"../c4d/c4d-utils":173,"../core/scene":212,"../utils/math-utils":243,"./poi-marker":198,"bezier-easing":13}],201:[function(require,module,exports){
'use strict';

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * poi-title-text
 *
 * UI component for displaying point-of-interest title text.
 *
 * The text has an animated fade-in/out animation which is triggered
 * when the 'visible' attribute is changed.
 */

var BezierEasing = require('bezier-easing');

var ACTIVE_TIME = 0.5;
var ACTIVE_Y = 10;
var EASING = BezierEasing(0.7, 0, 0.2, 1);

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('poi-title-text', {

		schema: {
			align: { default: 'center' },
			anchor: { default: 'center' },
			letterSpacing: { default: 12 },
			value: { type: 'string' },
			yOffset: { type: 'number' },
			show: { default: false },
			showTime: { default: ACTIVE_TIME },
			width: { default: 750 },
			wrapCount: { default: 40 }
		},

		init: function init() {
			this.opacity = 0;
			this.yOffset = 0;
			this.updateOpacity = false;
			this.updateYOffset = false;

			this.el.setAttribute('text', {
				align: this.data.align,
				alphaTest: 0.5,
				anchor: this.data.anchor,
				color: new THREE.Color(0xFFFFFF),
				font: 'fonts/NowAlt-Bold.json',
				letterSpacing: this.data.letterSpacing,
				shader: 'msdf',
				transparent: true,
				opacity: this.opacity,
				value: this.data.value,
				width: this.data.width,
				wrapCount: this.data.wrapCount
			});
		},

		update: function update() {
			this.el.setAttribute('text', {
				align: this.data.align,
				alphaTest: 0.5,
				anchor: this.data.anchor,
				letterSpacing: this.data.letterSpacing,
				value: this.data.value,
				width: this.data.width,
				wrapCount: this.data.wrapCount
			});

			this.el.setAttribute('position', {
				y: this.data.yOffset - ACTIVE_Y
			});
		},

		tick: function tick(t, dt) {
			dt = dt / 1000 * (1 / this.data.showTime);

			if (this.data.show) {
				this.updateOpacity = this.opacity < 1;
				this.updateYOffset = this.yOffset < 1;
				this.opacity = Math.min(1, this.opacity + dt);
				this.yOffset = Math.min(1, this.yOffset + dt);
			} else {
				this.updateOpacity = this.opacity > 0;
				this.updateYOffset = this.yOffset > 0;
				this.opacity = Math.max(0, this.opacity - dt);
				this.yOffset = Math.max(0, this.yOffset - dt);
			}

			this.el.setAttribute('visible', this.opacity > 0);

			if (this.updateOpacity) {
				this.el.setAttribute('text', {
					opacity: EASING(this.opacity)
				});
			}

			if (this.updateYOffset) {
				this.el.setAttribute('position', {
					y: this.data.yOffset - (ACTIVE_Y - EASING(this.yOffset) * ACTIVE_Y)
				});
			}
		}
	});
}

},{"bezier-easing":13}],202:[function(require,module,exports){
'use strict';

var _audioManager = require('../core/audio-manager');

var _scene = require('../core/scene');

var _colors = require('../core/colors');

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('rover-poi', {

		dependencies: ['visible'],

		schema: {
			vo: { type: 'string' },
			img: { type: 'string' },
			title: { type: 'string' },
			text: { type: 'string' },
			target: { type: 'string' },
			channel: { type: 'string' }
		},

		init: function init() {
			var _this = this;

			this.titleOpacity = 0;
			this.updateTitleOpacity = false;
			this.isIntersected = false;
			this.targetMaterials = [];

			// The POI's hitbox is added thru a mesh-added event which 
			// passes in the relevant hitbox mesh from the rover scene.
			this.el.addEventListener('mesh-added', function (event) {
				_this.metadata = event.detail.metadata;
				_this.mesh = event.detail.children[0];
				_this.mesh.material.visible = false;

				_this.el.setObject3D('mesh', _this.mesh);

				// Apply scale and rotation to match the rover mesh
				_this.el.object3D.scale.multiplyScalar(0.01);
				_this.el.object3D.rotation.y += Math.PI / 2.0;

				_this.el.classList.add('clickable');
				_this.el.addState('interactive');
				_this.el.setAttribute('consume-click', '');
				_this.el.sceneEl.emit('mesh-added', null, false);
			});

			this.el.addEventListener('materials-added', function (event) {
				_this.targetMaterials = Array.from(event.detail);
			});

			this.el.addEventListener('raycaster-intersected', this.onIntersect.bind(this));
			this.el.addEventListener('raycaster-intersected-cleared', this.onIntersectionCleared.bind(this));
			this.el.addEventListener('raycaster-cursor-up', this.onClick.bind(this));

			this.childIndex = Array.from(this.el.parentNode.children).indexOf(this.el) + 1;
			this.cursor = document.getElementById('controller-dot');
		},

		update: function update() {
			switch (this.data.channel) {
				case 'r':
					this.channelSelect = new THREE.Vector3(1, 0, 0);break;
				case 'g':
					this.channelSelect = new THREE.Vector3(0, 1, 0);break;
				case 'b':
					this.channelSelect = new THREE.Vector3(0, 0, 1);break;
				default:
					this.channelSelect = new THREE.Vector3(1, 1, 1);break;
			}
		},

		onClick: function onClick() {
			if (!this.el.is('interactive')) return;
			if (!this.el.sceneEl.is('interactive')) return;

			this.onClickShowCard();
		},

		onIntersect: function onIntersect(event) {
			var _this2 = this;

			if (this.isIntersected) return;
			if (!this.el.is('interactive')) return;
			if (!this.el.sceneEl.is('interactive')) return;
			if (!this.cursor) return;

			// Delay the highlight state by a frame. The rover chassis part has multiple
			// highlight zones which all share a material. If the user hovers over one, then
			// moves to another without selecting a non-chassis part in-between, the highlight
			// state will not be applied correctly. This delay allows the chassis material
			// to update before changing the highlight state.
			setTimeout(function () {
				document.body.classList.add('pointer');

				_this2.cursor.setAttribute('controller-dot', {
					color: _colors.TextColor
				});

				if (!_this2.isIntersected) {
					_audioManager.AudioManager.playSFX('boop');
				}

				_this2.isIntersected = true;
				_this2.el.addState('hover');

				_this2.targetMaterials.forEach(function (mesh) {
					mesh.material.uniforms.activeHighlightColor.value = _this2.channelSelect;
					mesh.material.uniforms.activeHighlightOpacity.value = 1;
					mesh.material.needsUpdate = true;
				});
			}, 5);
		},

		onIntersectionCleared: function onIntersectionCleared(event) {
			document.body.classList.remove('pointer');

			this.isIntersected = false;
			this.el.removeState('hover');

			// Reset the cursor color
			this.cursor.setAttribute('controller-dot', {
				color: _colors.WhiteColor
			});

			// Clear the highlight opacity for all target materials
			this.targetMaterials.forEach(function (mesh) {
				mesh.material.uniforms.activeHighlightOpacity.value = 0;
				mesh.material.needsUpdate = true;
			});
		},

		onClickShowCard: function onClickShowCard() {
			var _this3 = this;

			this.el.removeState('interactive');

			_audioManager.AudioManager.playVO(this.data.vo);

			this.infoCard = document.getElementById('info-card');
			this.infoCard.setAttribute('info-card', {
				url: this.data.img,
				title: this.data.title,
				text: this.el.textContent,
				type: 'rover',
				index: this.childIndex.toString()
			});

			this.infoCard.addState('visible');

			// Forces info card to update even if the user clicks on the same marker. This
			// allows the transition to reset correctly.
			this.infoCard.components['info-card'].update();

			// Set up event listener to restore the interactive state when the card
			// is closed.
			var onInfoCardHideComplete = function onInfoCardHideComplete(event) {
				_this3.infoCard.removeEventListener('hide-complete', onInfoCardHideComplete);
				_this3.el.addState('interactive');
				_audioManager.AudioManager.stopVO();
			};

			this.infoCard.addEventListener('hide-complete', onInfoCardHideComplete);
		}
	});
} // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * rover-poi
 *
 * Point-of-interest component for rover parts. Specified
 * in the scene with a given set of target mesh names,
 * and info similar to the poi-marker component.
 *
 * Clicking on one will populate the info-card with the
 * given header text, body copy, and image, if any.
 *
 * Hitbox meshes are provided by the rover component from the
 * rover scene file.
 *
 * Rover parts with POI's are given an RGB selection mask
 * texture, which segements texture areas with various
 * colored masks. The rover-poi's "channel" attribute is used
 * to determine which color should be used as a mask for
 * highlighting the appropriate part on the rover when
 * the POI is selected with the raycaster.
 */

},{"../core/audio-manager":209,"../core/colors":210,"../core/scene":212}],203:[function(require,module,exports){
'use strict';

var _c4dSceneManager = require('../c4d/c4d-scene-manager');

var _audioManager = require('../core/audio-manager');

var _scene = require('../core/scene');

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('rover', {

		dependencies: ['visible'],

		init: function init() {
			var _this = this;

			this.scene = new _c4dSceneManager.C4DSceneManager();
			this.scene.load('rover/scene.glb', 'rover/xref/', 'rover/tex/').then(function (sceneObject) {
				_this.el.setObject3D('mesh', sceneObject);

				// Listen for the animate state and begin playback
				_this.el.addEventListener('stateadded', function (event) {
					if (event.detail.state === 'animate') {
						_this.startAnimation();
					}

					if (event.detail.state === 'complete') {
						_this.jumpToEndAnimation();
					}
				});

				// If the rover is marked as being complete, jump to the end of the animation
				// once the rover is loaded.
				if (_this.el.is('complete')) {
					_this.jumpToEndAnimation();
				}

				_this.el.emit('load-complete', null, false);
			});

			this.progress = 0;
			this.playingArmUpSound = false;
			this.playingCamClickSound = false;
			this.playingCamRotateSound = false;
			this.playingJetsSound = false;
		},

		startAnimation: function startAnimation() {
			this.scene.play();
			this.scene.hidePartTextures();
		},
		jumpToEndAnimation: function jumpToEndAnimation() {
			this.scene.stopAtLastFrame();
			this.onSceneComplete();
		},


		tick: function tick(t, dt) {
			if (!this.el.is('animate')) return;

			// Skip to the last frame if the skip_intro flag is set
			if (_scene.Scene.flags.skip_intro) {
				this.scene.tick(this.scene.duration, this.scene.duration);
				this.progress = this.scene.duration;
			} else {
				this.scene.tick(t / 1000, dt / 1000);
			}

			// If we are skipping the intro animation, no need to play the sounds below
			if (_scene.Scene.flags.skip_intro) {
				this.onSceneComplete();
				return;
			}

			// SFX event: jets
			if (this.progress > 0.1 && !this.playingJetsSound) {
				_audioManager.AudioManager.playSFX('jets');
				this.playingJetsSound = true;
			}

			// SFX event: arm up
			if (this.progress > 11 && !this.playingArmUpSound) {
				_audioManager.AudioManager.playSFX('arm_up');
				this.playingArmUpSound = true;
			}

			// SFX event: camera click
			if (this.progress > 17.7 && !this.playingCamClickSound) {
				_audioManager.AudioManager.playSFX('camera');
				this.playingCamClickSound = true;
			}

			// SFX event: camera rotate
			// if ( this.progress > 20.3 && !this.playingCamRotateSound ) {
			// 	AudioManager.playSFX( 'cam_rotate' );
			// 	this.playingCamRotateSound = true;
			// }

			// Update and check progress
			this.progress += dt / 1000;
			if (this.progress >= this.scene.duration) {
				this.onSceneComplete();
			}
		},

		onSceneComplete: function onSceneComplete() {
			this.scene.showPartTextures();
			this.scene.removeObjectsWithType('LINES');
			this.scene.removeObjectsWithType('SKYCRANE');
			this.scene.removeObjectsWithType('IMAGEPLANE');

			this.el.removeState('animate');
			this.el.emit('complete', null, false);
		}
	});
} // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * rover
 *
 * Rover host component. Loads and controls the timeline for the rover
 * intro animation.
 */

},{"../c4d/c4d-scene-manager":172,"../core/audio-manager":209,"../core/scene":212}],204:[function(require,module,exports){
'use strict';

var _audioManager = require('../core/audio-manager');

var _colors = require('../core/colors');

var _scene = require('../core/scene');

var _eventemitter = require('eventemitter3');

var _tween = require('@tweenjs/tween.js');

var _tween2 = _interopRequireDefault(_tween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

/**
 * scene-intro-labels
 *
 * interstitial between terrain loading
 */

{

	var loadingText = "LOADING:";
	var buildingText = "Building Terrain Geometry...";
	var fontName = 'fonts/NowAlt-Bold.json';

	var labels = void 0;

	var createLabel = function createLabel(params) {
		var label = document.createElement('a-entity');

		params.align = params.align || "left";
		params.anchor = params.anchor || "left";
		params.baseline = params.baseline || "bottom";
		params.color = params.color || new THREE.Color(0xFFFFFF);
		params.font = fontName;

		params.shader = 'msdf';

		label.setAttribute('text', params);
		return label;
	};

	var progress = 0;
	var progressBarWidth = 32;

	if (typeof AFRAME !== 'undefined' && AFRAME) {
		AFRAME.registerComponent('scene-intro-label', {

			init: function init() {
				var _this = this;

				if (!labels) {

					labels = {};

					var labelsEl = [].concat(_toConsumableArray(document.querySelectorAll('.scene-intro-labels li')));
					labelsEl.forEach(function (l) {
						var site = l.getAttribute("data-site");
						var text = l.innerHTML.trim().split("; ");
						var index = text[0];
						var name = text[1];
						var credit = text[2];
						var date = text[3];

						labels[site] = { index: index, name: name, credit: credit, date: date };
					});
				}
				this.progress = 0;
				this.targetOpacity = 0;
				this.opacity = 0;

				this.progressBg = this.el.querySelector('.progress-bg');
				this.progressBar = this.el.querySelector('.progress');

				this.loadingLabel = createLabel({
					letterSpacing: 20,
					value: loadingText,
					width: 60,
					wrapCount: 100
				});

				this.siteNameLabel = createLabel({
					letterSpacing: 8,
					width: 200,
					wrapCount: 150
				});

				this.creditLabel = createLabel({
					letterSpacing: 4,
					width: 50,
					wrapCount: 74
				});

				this.buildingLabel = createLabel({
					letterSpacing: 4,
					value: buildingText,
					width: 50,
					wrapCount: 74
				});

				this.loadingLabel.setAttribute("position", { y: 4 });
				this.siteNameLabel.setAttribute("position", { x: -0.25, y: 0 });
				this.creditLabel.setAttribute("position", { y: -1.1 });
				this.buildingLabel.setAttribute("position", { y: -7.0 });
				this.siteNameLabel.setAttribute('text', { value: '00 SITE NAME LABEL' });
				this.creditLabel.setAttribute('text', { value: 'CREDIT LABEL' });

				this.groupEl = document.createElement('a-entity');
				this.groupEl.setAttribute("position", { x: -progressBarWidth / 2 });
				this.el.appendChild(this.groupEl);
				if (!AFRAME.utils.device.isMobile()) {
					this.el.setAttribute('position', '0, 0, -1');
				} else {
					this.el.setAttribute('position', '0, 0, -1.25');
				}

				this.groupEl.appendChild(this.loadingLabel);
				this.groupEl.appendChild(this.siteNameLabel);
				this.groupEl.appendChild(this.creditLabel);
				this.groupEl.appendChild(this.buildingLabel);

				_scene.Scene.on('site-changed', function (site) {
					_this.targetOpacity = _scene.Scene.hasSeenIntro ? 1 : 0;
					_this.setProgress(0);
					var opacity = { value: _this.opacity };
					_this.opacityTween = new _tween2.default.Tween(opacity).to({ value: _this.targetOpacity }, 1000).easing(_tween2.default.Easing.Linear.None).onUpdate(function () {
						_this.setOpacity(opacity.value);
					}).start();

					_this.siteNameLabel.setAttribute('text', { value: labels[site].index + ' ' + labels[site].name.toUpperCase() });
					_this.creditLabel.setAttribute('text', { value: labels[site].credit + ' ' + labels[site].date });
					_this.progressBar.setAttribute('scale', { x: 0 });
					_this.isLoading = true;
				});

				_scene.Scene.on('site-load-progress', function (progress) {
					_this.progress = progress;
				});

				_scene.Scene.on('site-loaded', function () {
					var opacity = { value: _this.opacity };
					_this.opacityTween = new _tween2.default.Tween(opacity).to({ value: 0 }, 500).easing(_tween2.default.Easing.Linear.None).onUpdate(function () {
						_this.setOpacity(opacity.value);
					}).start();
				});

				this.setOpacity(0);
			},

			setOpacity: function setOpacity(v) {
				this.opacity = v;
				this.loadingLabel.setAttribute('text', { opacity: v });
				this.siteNameLabel.setAttribute('text', { opacity: v });
				this.creditLabel.setAttribute('text', { opacity: v });
				this.buildingLabel.setAttribute('text', { opacity: v });

				this.progressBar.setAttribute('material', { opacity: v });
				this.progressBg.setAttribute('material', { opacity: v });

				this.el.setAttribute('visible', v < 0.05 ? false : true);
			},
			tick: function tick() {
				if (!this.isLoading) return;
				this.setProgress(this.progress);
			},
			setProgress: function setProgress(p) {
				var x = progressBarWidth * 0.5 * (1 - p) * -1;

				this.progressBar.setAttribute('position', { x: x });
				this.progressBar.setAttribute('scale', { x: p });
			}
		});
	}
};

function tweenUpdate() {
	requestAnimationFrame(tweenUpdate);
	_tween2.default.update();
}
tweenUpdate();

},{"../core/audio-manager":209,"../core/colors":210,"../core/scene":212,"@tweenjs/tween.js":1,"eventemitter3":126}],205:[function(require,module,exports){
'use strict';

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

/**
 * sky-shader
 */

var R = 6000 * 2;
var BLACKOUT_SKY_GEO = new THREE.SphereGeometry(6000, 64, 20);

var SkyShader = require('../shaders/sky-shader');

if (typeof AFRAME !== 'undefined' && AFRAME) {}

},{"../shaders/sky-shader":231}],206:[function(require,module,exports){
'use strict';

var _scene = require('../core/scene');

var _colors = require('../core/colors');

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * sky-gradient
 *
 * Simple skybox component with a two-color gradient shader
 * and an animated transition mask effect.
 */

var BezierEasing = require('bezier-easing');
var SkyShader = require('../shaders/sky-shader');

var ANIM_DURATION = 1.5;
var SKY_GEO = new THREE.SphereGeometry(5000, 64, 20);
var EASING = BezierEasing(0.66, 0, 0.33, 1);

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('sky-gradient', {

		dependencies: ['visible'],

		schema: {
			animIn: { default: 0 }
		},

		init: function init() {
			var _this = this;

			this.animIn = this.data.animIn;
			this.material = new THREE.ShaderMaterial({
				uniforms: SkyShader.uniforms,
				vertexShader: SkyShader.vertexShader,
				fragmentShader: SkyShader.fragmentShader,
				side: THREE.DoubleSide,
				fog: false
			});

			this.mesh = new THREE.Mesh(SKY_GEO, this.material);
			this.el.setObject3D('mesh', this.mesh);

			_scene.Scene.on('initial-load-complete', function (event) {
				_this.el.addState('visible');
			});
		},

		update: function update() {
			this.material.uniforms.animIn.value = 0.5 + this.data.animIn / 2;
			this.material.needsUpdate = true;
		},

		tick: function tick(t, dt) {
			dt = dt / 1000 * (1 / ANIM_DURATION);
			var updateTransition = false;
			var deltaTransition = 0;

			// Calculate transition delta amount
			if (this.el.is('visible')) {
				updateTransition = this.animIn < 1;
				deltaTransition = +dt;
			} else {
				updateTransition = this.animIn > 0;
				deltaTransition = -1;
			}

			if (this.animIn <= 0) {
				this.el.setAttribute('visible', false);
			} else {
				this.el.setAttribute('visible', true);
			}

			if (updateTransition) {
				this.animIn = Math.min(Math.max(this.animIn + deltaTransition, 0), 1);
				this.el.setAttribute('sky-gradient', {
					animIn: this.animIn
				});
			}
		}
	});
}

},{"../core/colors":210,"../core/scene":212,"../shaders/sky-shader":231,"bezier-easing":13}],207:[function(require,module,exports){
'use strict';

var _colors = require('../core/colors');

var WIRE_SKY_GEO = new THREE.IcosahedronBufferGeometry(5400, 2); // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * sky-wireframe
 *
 * A skybox sphere rendered in wireframe, used as a 
 * "pallate cleanser" skybox during site transitions.
 */

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('sky-wireframe', {

		dependencies: ['visible'],

		init: function init() {
			this.material = new THREE.MeshBasicMaterial({
				color: _colors.FogColor,
				wireframe: true
			});

			this.mesh = new THREE.Mesh(WIRE_SKY_GEO, this.material);
			this.el.setObject3D('mesh', this.mesh);
		}
	});
}

},{"../core/colors":210}],208:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

var _scene = require('../core/scene');

var _commonTex = require('../core/common-tex');

var _c4dUtils = require('../c4d/c4d-utils');

var _c4dExportLoader = require('../c4d/c4d-export-loader');

var _jpegWorker = require('../workers/jpeg-worker');

var _mathUtils = require('../utils/math-utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerrainShader = require('../shaders/terrain-shader');
var EdgeShader = require('../shaders/edge-shader');

var EDGE_VECTORS = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1)];

var ZERO_VECTOR = new THREE.Vector3(0, 0, 0);

// Named texture sizes and their corresponding filename suffixes
var TEXTURE_SIZES = ['small', 'base', 'large'];
var TEXTURE_SUFFIXES = {
	xsmall: '_xsm',
	small: '_sm',
	base: '',
	large: '_lg'
};

// On mobile platforms, only the four center tiles are allowed to load the medium
// resolution texture, in order to save memory. The four center tile IDs are
// specified here.
var CENTER_TILE_IDS = ['03333333', '12222222', '21111111', '30000000'];

var TERRAIN_DIR = 'terrain/';
var LOAD_PROXY_GEO = new THREE.PlaneGeometry(0.01, 0.01);
var ANIM_IN_DURATION = 1.0;

if (typeof AFRAME !== 'undefined' && AFRAME) {
	AFRAME.registerComponent('terrain', {

		dependencies: ['visible'],

		init: function init() {
			var _this = this;

			this.tileMeshes = [];
			this.tileMeshesByID = {};

			this.background = null;
			this.collision = null;

			this.animIn = 0;
			this.gridState = 1;
			this.isSimpleVisible = false;
			this.isTerrainVisible = false;

			this.el.sceneEl.addEventListener('terrain-intersected', this.onIntersected.bind(this));
			this.el.sceneEl.addEventListener('terrain-intersected-cleared', this.onControllerMoved.bind(this));
			document.addEventListener('mousemove', this.onMouseMoved.bind(this));

			this.el.setAttribute('event-priority', 50);

			// Listen for stateremoved event for showing the collision or terrain meshes
			this.el.addEventListener('stateadded', function (event) {

				if (event.detail.state === 'show-simple') {
					_this.isSimpleVisible = true;
					if (_this.collision) _this.collision.setVisible(_this.isSimpleVisible);
				}

				if (event.detail.state === 'show-terrain') {
					_this.isTerrainVisible = true;
					_this.setVisible(_this.isTerrainVisible);
				}
			});

			// Listen for stateremoved event for hiding the collision or terrain meshes
			this.el.addEventListener('stateremoved', function (event) {

				if (event.detail.state === 'show-simple') {
					_this.isSimpleVisible = false;
					if (_this.collision) _this.collision.setVisible(_this.isSimpleVisible);
				}

				if (event.detail.state === 'show-terrain') {
					_this.isTerrainVisible = false;
					_this.setVisible(_this.isTerrainVisible);
				}
			});
		},

		/**
   * Loads everything required to render the terrain:
   * common textures, scene file, and initial detail textures.
   * Returns a promise which resolves when the loading is complete.
   */
		loadTerrain: function loadTerrain() {
			var _this2 = this;

			return new Promise(function (resolve, reject) {
				_commonTex.CommonTex.load().then(function () {
					return _this2.loadMeshes();
				}).then(function () {
					return _this2.loadInitialTextures();
				}).then(function () {
					return resolve(_this2.tileMeshes);
				});
			});
		},

		/**
   * Loads the terrain mesh for the current site.
   * Returns a promise which resolves when the terrain meshes are loaded
   */
		loadMeshes: function loadMeshes() {
			var _this3 = this;

			var rootPath = TERRAIN_DIR + _scene.Scene.baseFilename + '/' + _scene.Scene.baseFilename;
			var loader = new _c4dExportLoader.C4DExportLoader();

			return new Promise(function (resolve, reject) {

				loader.load(TERRAIN_DIR + _scene.Scene.baseFilename + '/terrain.glb').then(function (response) {

					_this3.terrain = response.scene;
					_this3.terrain.scale.multiplyScalar(100);
					_this3.el.setObject3D('mesh', _this3.terrain);

					// Loop through each node in the scene and separate out the tiles
					// from the background and collision meshes.
					_this3.terrain.traverse(function (node) {
						if (!node.metadata) return;

						if (node.metadata.type === 'SIMPLE') {
							_this3.collision = new SimpleTerrain(node);
							_this3.collision.setVisible(_this3.isSimpleVisible);
							return;
						}

						if (node.metadata.type === 'BACKGROUND') {
							_this3.background = new BackgroundTerrain(node);
							_this3.background.setVisible(_this3.isTerrainVisible);
							return;
						}

						if (node.metadata.type === 'TILE') {
							var mesh = new TileMesh(node);
							_this3.tileMeshes.push(mesh);
							_this3.tileMeshesByID[mesh.id] = mesh;
						}
					});

					// Set up the simplified collision mesh
					_this3.el.appendChild(_this3.collision.el);
					_this3.collision.setupMesh();
					_this3.collision.bindEvents();

					// Load the background terrain's texture, then resolve the promise
					_this3.background.loadTexture().then(function () {
						return resolve();
					});
				});
			});
		},

		/**
   * Loads each tile's initial textures.
   * Returns a promise which resolves when all initial textures are loaded
   */
		loadInitialTextures: function loadInitialTextures() {
			var _this4 = this;

			return new Promise(function (resolve, reject) {

				if (!_this4.tileMeshes.length) return reject();

				// Get array of promises for loading the initial set of textures
				var initialLoadPromises = _this4.tileMeshes.map(function (tilemesh) {
					return tilemesh.loadNextTextureSize();
				});

				// Execuse all promises and resolve when complete
				Promise.all(initialLoadPromises).then(function () {
					resolve();
				});
			});
		},

		/**
   * Update the transition animation state
   */
		tick: function tick(t, dt) {
			var _this5 = this;

			// Adjust delta time so that it is 0..1 over ANIM_IN_DURATION seconds
			dt = dt / 1000 * (1 / ANIM_IN_DURATION);

			// Roll the transition animation forward to 1 if the scene is visible and loaded,
			// otherwise roll it back to 0.
			if (this.el.is('visible') && this.isTerrainVisible && this.el.sceneEl.is('intro-complete')) {
				this.animIn += dt;
			} else {
				this.animIn -= dt;
			}

			this.animIn = _mathUtils.MathUtils.clamp(this.animIn, 0, 1);

			// Update all tile meshes with new the animIn value
			this.tileMeshes.forEach(function (mesh) {
				mesh.updateMaterialAnimIn(_this5.animIn);
			});
		},

		onIntersected: function onIntersected(event) {
			this.gridState = this.el.sceneEl.is('interactive') ? 2 : 0;
			this.updateGrid(event.detail.point);
		},

		onMouseMoved: function onMouseMoved() {
			this.gridState--;
			this.updateGrid(ZERO_VECTOR);
		},

		onControllerMoved: function onControllerMoved() {
			this.gridState = 0;
			this.updateGrid(ZERO_VECTOR);
		},

		/**
   * Update the grid overlay's position to match the cursor ray
   * position. Some extra math is required to compensate for
   * the variable size of the grid overlay.
   *
   * TODO: this could be optimized. Instead of every tile calculating the
   * scaled grid position, it should only be done once.
   */
		updateGrid: function updateGrid(point) {
			var _this6 = this;

			var gridPosition = point.clone().subScalar(_scene.GridSize / 2).multiplyScalar(1 / _scene.GridSize);

			this.tileMeshes.forEach(function (mesh) {
				mesh.updateMaterialGrid(gridPosition, _this6.gridState);
			});
		},


		setVisible: function setVisible(visible) {
			this.background.setVisible(visible);
		},

		loadNextTextureSizeForID: function loadNextTextureSizeForID(id) {
			return this.tileMeshesByID[id].loadNextTextureSize();
		},

		remove: function remove() {
			this.tileMeshes.forEach(function (mesh) {
				return mesh.destroy();
			});
			this.collision.destroy();
			this.background.destroy();

			this.tileMeshes = [];
			this.tileMeshesByID = {};

			this.el.removeObject3D('mesh');
		}
	});
}

/**
 * TileMesh
 *
 * Class which contains a single terrain tile mesh, and handles loading and
 * initialization of its multi-size textures.
 */

var TileMesh = function () {
	function TileMesh(node) {
		_classCallCheck(this, TileMesh);

		this.node = node;
		this.id = this.node.metadata.id;
		this.mesh = _c4dUtils.C4DUtils.getChildWithType(node, 'Mesh');
		this.animIn = 0;

		// Remove unused color geometry attribute
		this.mesh.geometry.removeAttribute('color');

		// Get the center coordinate of the tile by calculating the tile's bounding box.
		// The center coordinate is used to sort tiles by distance from the player so that
		// closer tiles load their higher-resolution textures first.
		this.box = new THREE.Box3();
		this.box.setFromObject(this.mesh);
		this.center = this.box.getCenter();

		this.textureLoader = new THREE.TextureLoader();
		this.texturesBySize = {};
		this.textureSizePrefixes = [];
		this.currentTexture = undefined;
		this.currentSize = undefined;

		var isMobile = AFRAME.utils.device.isMobile();
		var isCenterTile = CENTER_TILE_IDS.indexOf(this.id) !== -1;

		this.hasMediumSize = this.node.metadata.hasMediumSize;

		// On mobile platforms, do not load the large size textures
		this.hasLargeSize = this.node.metadata.hasLargeSize && !isMobile;

		// On mobile platforms, only the four center tiles are allowed to load the medium
		// resolution texture, in order to save memory.
		if (isMobile && !isCenterTile) {
			this.hasMediumSize = false;
		}

		// Adjust texture size prefixes depending on what platform the user is on.
		//
		// Mobile platforms load only the xsmall and medium sizes.
		// Desktop platforms load the xsmall, then medium, then large sizes.
		if (isMobile) {
			this.textureSizePrefixes = [this.node.metadata.xsmallPrefix, TEXTURE_SUFFIXES.base];
		} else {
			this.textureSizePrefixes = [this.node.metadata.xsmallPrefix, TEXTURE_SUFFIXES.base, TEXTURE_SUFFIXES.large];
		}

		// The small texture size is a normal THREE.Texture object. It is displayed
		// normally and is the first texture the user will see when the terrain is
		// visible. Until this texture is loaded, the terrain will not be displayed
		// and a loading bar will be displayed to the user.
		this.texturesBySize.small = new THREE.Texture();

		// The base size texture is a special ProgressiveTexture object which uses a
		// progressive loading technique to load JPEG data onto the GPU without causing
		// framerate stutters.
		//
		// This allows us to load the small texture size initially before the user sees anything,
		// and then as the user explores the environment, these higher resolution images will be
		// loaded in the background without disrupting the overall experience.
		//
		// This gives us a fast initial load, but also allows for the gradual loading of higher
		// resolution textures without interruption.
		if (this.hasMediumSize) {
			this.texturesBySize.base = new THREE.ProgressiveTexture(this.node.metadata.size);
		}

		// Some tiles have a large size texture, which is 2x the base texture size. This texture
		// is also progressively loaded.
		if (this.hasLargeSize && !isMobile) {
			this.texturesBySize.large = new THREE.ProgressiveTexture(this.node.metadata.size * 2);
		}

		// Create a load proxy material. Because of the way the ProgressiveTexture loads
		// images, it will display garbage data until the loading is complete. We don't
		// want to show this garbage data, so the ProgressiveTexture is loaded into this
		// proxy material onto the proxy mesh, which is a small plane placed out of view.
		// Once the load is complete, the texture will be swapped onto the main tile mesh.
		//
		// The proxy material is set to use the base size texture, since that is the first
		// size which will be loaded using the progressive loader.
		if (this.hasMediumSize) {
			this.loadProxyMaterial = new THREE.MeshBasicMaterial();
			this.loadProxyMaterial.map = this.texturesBySize.base;
			this.loadProxyMesh = new THREE.Mesh(LOAD_PROXY_GEO, this.loadProxyMaterial);

			// Prevent the proxy mesh from being culled. Because the transfer of texture data
			// from the progressive JPEG loader to the GPU is done in the render thread, if
			// the proxy mesh is culled from the render queue, it will not update and
			// the progressive loading will stall.
			this.loadProxyMesh.frustumCulled = false;
			this.node.add(this.loadProxyMesh);
		}

		// Create a standard terrain tile material. The texture map stored in loadProxyMaterial
		// will be swapped into this material once the progressive loading is complete.
		this.mesh.material = new THREE.ShaderMaterial({
			uniforms: THREE.UniformsUtils.clone(TerrainShader.uniforms),
			vertexShader: TerrainShader.vertexShader,
			fragmentShader: TerrainShader.fragmentShader
		});

		// Enable wireframe mode if the scene flag is set
		this.mesh.material.wireframe = _scene.Scene.wireframe;

		// Set initial shader uniforms
		this.mesh.material.uniforms.gridTex.value = _commonTex.CommonTex.textures.grid;
		this.mesh.material.uniforms.triangleTex.value = _commonTex.CommonTex.textures.triangles;
	}

	/**
  * Loads the next texture size up in the texture size list.
  * Starts at size 0 if currentSize is undefined.
  *
  * Returns a promise which resolves when the texture is loaded.
  */


	_createClass(TileMesh, [{
		key: 'loadNextTextureSize',
		value: function loadNextTextureSize() {
			var _this7 = this;

			return new Promise(function (resolve, reject) {

				// Set initial size to load or increment the current size
				if (_this7.currentSize === undefined) {
					_this7.currentSize = 0;
				} else {
					_this7.currentSize++;
				}

				// Requested a texture, but it doesn't exist; exit
				if (_this7.currentSize > 2) return resolve('maximum size reached');
				if (_this7.currentSize === 1 && !_this7.hasMediumSize) return resolve('medium size doesn\'t exist');
				if (_this7.currentSize === 2 && !_this7.hasLargeSize) return resolve('large size doesn\'t exist');

				// Get the previous texture so it can be disposed of properly once the current
				// texture is loaded.
				if (_this7.currentSize > 0) {
					_this7.previousTexture = _this7.texturesBySize[TEXTURE_SIZES[_this7.currentSize - 1]];
				} else {
					_this7.previousTexture = null;
				}

				// Grab the current texture object from the size list
				_this7.currentTexture = _this7.texturesBySize[TEXTURE_SIZES[_this7.currentSize]];

				var url = _scene.Scene.rootDirectory + 'tiles/' + _this7.id + _this7.textureSizePrefixes[_this7.currentSize] + '.jpg';

				// Only ProgressiveTextures need to be loaded with the JPEG worker.
				// Normal textures can be loaded with the standard TextureLoader.
				if (_this7.currentTexture.isProgressiveTexture) {

					// Texture doesn't exist, exit
					if (!_this7.currentTexture) return resolve('size doesn\'t exist');

					// Texture is already loaded, exit
					if (_this7.currentTexture.displayed) return resolve('texture is already loaded');

					// Set texture URL
					_this7.currentTexture.url = url;

					// Set jpeg worker host to the current texture
					_jpegWorker.JPEGWorker.host = _this7.currentTexture;

					// Release the jpeg worker host and update the material when
					// the current texture is displayed
					_this7.currentTexture.onDisplayComplete(function () {
						_jpegWorker.JPEGWorker.host = null;
						_this7.updateMaterialTexture();
						_this7.destroyPreviousTexture();
						return resolve('success: size = ' + TEXTURE_SIZES[_this7.currentSize]);
					});

					// Load using the static jpeg worker
					_this7.currentTexture.loadWithWorker(_jpegWorker.JPEGWorker.worker);
					_this7.loadProxyMaterial.map = _this7.currentTexture;
					_this7.loadProxyMaterial.needsUpdate = true;
				} else {

					// Texture is already loaded, exit
					if (_this7.currentTexture.image) return resolve('texture is already loaded');

					// Load using the normal texture loader
					_this7.textureLoader.load(url, function (texture) {
						_this7.currentTexture = texture;
						_this7.updateMaterialTexture();
						_this7.destroyPreviousTexture();
						return resolve('success: size = ' + TEXTURE_SIZES[_this7.currentSize]);
					});
				}
			});
		}

		/**
   * Updates the animIn value to a given number
   */

	}, {
		key: 'updateMaterialAnimIn',
		value: function updateMaterialAnimIn(animIn) {
			if (!this.mesh) return;
			if (this.mesh.material.uniforms.animIn.value === animIn) return;
			this.mesh.material.uniforms.animIn.value = animIn;
		}

		/**
   * Updates the terrain texture map to the current texture
   */

	}, {
		key: 'updateMaterialTexture',
		value: function updateMaterialTexture() {
			if (!this.mesh) return;
			this.mesh.material.uniforms.terrainTex.value = this.currentTexture;
			this.mesh.material.needsUpdate = true;
		}

		/**
   * Updates the grid overlay's position and opacity state
   */

	}, {
		key: 'updateMaterialGrid',
		value: function updateMaterialGrid(position, gridState) {
			if (!this.mesh) return;
			this.mesh.material.uniforms.gridOpacity.value = gridState > 0 ? 1 : 0;
			this.mesh.material.uniforms.gridPosition.value = position.clone();
		}

		/**
   * Dispose of the previously-loaded texture
   */

	}, {
		key: 'destroyPreviousTexture',
		value: function destroyPreviousTexture() {
			if (!this.previousTexture) return;
			this.previousTexture.dispose();
			this.previousTexture = null;
			this.loadProxyMaterial.map = null;
			this.texturesBySize[TEXTURE_SIZES[this.currentSize - 1]] = null;
		}

		/**
   * Attempts to dispose of (almost) every piece of memory this object references
   */

	}, {
		key: 'destroy',
		value: function destroy() {
			if (this.mesh) {
				this.mesh.material.uniforms.terrainTex.value = null;
				this.mesh.material.dispose();
				this.mesh.geometry.dispose();
				this.mesh.geometry = null;
			}

			if (this.loadProxyMaterial) this.loadProxyMaterial.dispose();
			if (this.texturesBySize.base) this.texturesBySize.base.dispose();
			if (this.texturesBySize.small) this.texturesBySize.small.dispose();
			if (this.texturesBySize.large) this.texturesBySize.large.dispose();
			if (this.currentTexture) this.currentTexture.dispose();
			if (this.loadProxyMesh) this.node.remove(this.loadProxyMesh);

			this.texturesBySize = null;
			this.loadProxyMaterial = null;
			this.currentTexture = null;
			this.loadProxyMaterial = null;
			this.loadProxyMesh = null;
			this.mesh = null;
			this.node = null;
		}
	}]);

	return TileMesh;
}();

/**
 * BackgroundTerrain
 *
 * Class which contains the low-res unwalkable background terrain mesh and loader
 * for the background mesh's texture.
 */


var BackgroundTerrain = function () {
	function BackgroundTerrain(node) {
		_classCallCheck(this, BackgroundTerrain);

		this.node = node;
		this.mesh = _c4dUtils.C4DUtils.getChildWithType(this.node, 'Mesh');
		this.loader = new THREE.TextureLoader();
		this.visible = false;

		// Remove unused color geometry attribute
		this.mesh.geometry.removeAttribute('color');
	}

	_createClass(BackgroundTerrain, [{
		key: 'loadTexture',
		value: function loadTexture() {
			var _this8 = this;

			return new Promise(function (resolve, reject) {

				var path = TERRAIN_DIR + _scene.Scene.baseFilename + '/background.jpg';

				_this8.loader.load(path, function (texture) {

					_this8.uniforms = THREE.UniformsUtils.clone(TerrainShader.uniforms);
					_this8.uniforms.terrainTex.value = texture;

					_this8.mesh.material = new THREE.ShaderMaterial({
						uniforms: _this8.uniforms,
						fragmentShader: TerrainShader.fragmentShader,
						vertexShader: TerrainShader.vertexShader,
						visible: _this8.visible
					});

					// Listen for initial-load-complete event from Scene, and show
					// the background terrain when it is thrown.
					_scene.Scene.on('initial-load-complete', function (event) {
						if (!_this8.mesh) return;
						_this8.mesh.material.uniforms.animIn.value = 1;
						_this8.mesh.material.needsUpdate = true;
					});

					resolve();
				});
			});
		}
	}, {
		key: 'setVisible',
		value: function setVisible(visible) {
			this.visible = visible;
			if (this.mesh.material) {
				this.mesh.material.visible = this.visible;
			}
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			if (this.mesh.material) {
				this.mesh.material.uniforms.terrainTex.value = null;
				this.mesh.material.dispose();
			}

			this.mesh.geometry.dispose();
			this.mesh.geometry = null;

			this.mesh = null;
			this.node = null;
		}
	}]);

	return BackgroundTerrain;
}();

/**
 * SimpleTerrain
 *
 * Class which contains the simplified terrain mesh, used for collision
 * detection and for displaying as a wireframe during scene loading.
 */


var SimpleTerrain = function () {
	function SimpleTerrain(node) {
		_classCallCheck(this, SimpleTerrain);

		this.node = node;
		this.mesh = _c4dUtils.C4DUtils.getChildWithType(this.node, 'Mesh');
		this.visible = false;

		this.el = document.createElement('a-entity');
		this.el.classList.add('clickable');
		this.el.classList.add('ignoreBounds');
		this.el.setAttribute('consume-click', '');
		this.el.setObject3D('mesh', this.mesh);
		this.el.id = 'collision';

		this.cursorPosition = new THREE.Vector3();
		this.cursorStart = new THREE.Vector3();
	}

	_createClass(SimpleTerrain, [{
		key: 'setupMesh',
		value: function setupMesh() {
			var terrainGeometry = this.mesh.geometry;

			// Merge duplicate vertices left over from the mesh simplification process.
			// In Three.js r125+, BufferGeometry.mergeVertices() replaces the old
			// Geometry.fromBufferGeometry() / BufferGeometry.fromGeometry() round-trip.
			terrainGeometry.mergeVertices();

			// Generate barycentric coordinates for each triangle vertex. This is used by the edge-shader
			// to generate a wireframe effect.
			//
			// Based on http://codeflow.org/entries/2012/aug/02/easy-wireframe-display-with-barycentric-coordinates/
			var position = terrainGeometry.attributes.position;
			var centers = new Float32Array(position.count * 3);
			for (var i = 0, l = position.count; i < l; i++) {
				EDGE_VECTORS[i % 3].toArray(centers, i * 3);
			}

			// Add the barycentric coordinate array to the terrain geometry as a vertex attribute
			terrainGeometry.setAttribute('center', new THREE.BufferAttribute(centers, 3));

			// Remove unused geometry attributes
			terrainGeometry.removeAttribute('uv');
			terrainGeometry.removeAttribute('color');

			this.material = new THREE.ShaderMaterial({
				uniforms: EdgeShader.uniforms,
				vertexShader: EdgeShader.vertexShader,
				fragmentShader: EdgeShader.fragmentShader,
				visible: this.visible
			});

			// Set uniforms
			this.material.uniforms.lineColor.value = new THREE.Color(0x9b9087);
			this.material.uniforms.fillColor.value = new THREE.Color(0x141312);
			this.material.uniforms.fogColor.value = new THREE.Color(0x141312);
			this.material.extensions.derivatives = true;

			this.mesh = new THREE.Mesh(terrainGeometry, this.material);
			this.el.setObject3D('mesh', this.mesh);
		}
	}, {
		key: 'setVisible',
		value: function setVisible(visible) {
			this.visible = visible;
			if (this.material) {
				this.material.visible = this.visible;
			}
		}
	}, {
		key: 'bindEvents',
		value: function bindEvents() {
			var _this9 = this;

			this.el.addEventListener('raycaster-intersected', function (event) {
				if (_this9.el.sceneEl.is('modal')) return;

				_this9.cursorPosition.copy(event.detail.intersection.point);

				_this9.el.sceneEl.emit('terrain-intersected', event.detail.intersection, false);
			});

			this.el.addEventListener('raycaster-intersected-cleared', function (event) {
				_this9.el.sceneEl.emit('terrain-intersected-cleared', null, false);
			});

			this.el.addEventListener('raycaster-cursor-down', function (event) {
				if (_this9.el.sceneEl.is('modal')) return;

				_this9.cursorStart.copy(_this9.cursorPosition);

				_this9.el.sceneEl.emit('terrain-cursor-down', {
					point: _this9.cursorPosition
				}, false);
			});

			this.el.addEventListener('raycaster-cursor-up', function (event) {
				if (_this9.el.sceneEl.is('modal')) {
					_this9.el.sceneEl.emit('modal-up', null, false);
					return;
				}

				_this9.cursorStart.sub(_this9.cursorPosition);

				_this9.el.sceneEl.emit('terrain-cursor-up', {
					point: _this9.cursorPosition,
					buttonHoldTime: event.detail.buttonHoldTime,
					deltaSquared: _this9.cursorStart.lengthSq()
				}, false);
			});
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.mesh.geometry.dispose();
			this.mesh.geometry = null;
			this.mesh = null;
			this.node = null;
		}
	}]);

	return SimpleTerrain;
}();

},{"../c4d/c4d-export-loader":169,"../c4d/c4d-utils":173,"../core/common-tex":211,"../core/scene":212,"../shaders/edge-shader":224,"../shaders/terrain-shader":232,"../utils/math-utils":243,"../workers/jpeg-worker":246}],209:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AudioManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * AudioManager
 *
 * Singleton class which handles voice-over and sound fx playback.
 */

var _sono = require('sono');

var _sono2 = _interopRequireDefault(_sono);

var _scene = require('./scene');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StaticAudioManager = function () {
	function StaticAudioManager() {
		_classCallCheck(this, StaticAudioManager);

		this.currentVO = null;
		this.disableVO = false;
		this.disableSFX = false;

		var audio = document.createElement('audio');
		var status = !!(audio.canPlayType && audio.canPlayType('audio/mpeg;').replace(/no/, ''));
		this.format = status ? '.mp3' : '.ogg';
	}

	_createClass(StaticAudioManager, [{
		key: 'playVO',
		value: function playVO(name) {
			var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

			this.stopVO();

			if (this.disableVO) return;

			this.currentVO = _sono2.default.create('vo/' + name + this.format);

			// Play the VO with a given delay
			this.currentVO.play(delay);

			return this.currentVO;
		}
	}, {
		key: 'stopVO',
		value: function stopVO() {
			if (this.currentVO) {
				this.currentVO.stop();
			}
		}
	}, {
		key: 'playSFX',
		value: function playSFX(name, isByPassed) {
			this.currentSFX = _sono2.default.create('sfx/' + name + this.format);

			if (!this.disableSFX || isByPassed) {
				this.currentSFX.play();
			}

			return this.currentSFX;
		}
	}, {
		key: 'playAtmosphere',
		value: function playAtmosphere(name) {
			if (this.disableAtmosphere) return;
			this.currentAtmosphere = _sono2.default.create('sfx/atmosphere' + this.format);
			this.currentAtmosphere.loop = true;
			this.currentAtmosphere.volume = 0.4;
			this.currentAtmosphere.play();
		}
	}]);

	return StaticAudioManager;
}();

var AudioManager = exports.AudioManager = new StaticAudioManager();

},{"./scene":212,"sono":147}],210:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * Common color constants
 */

var BGColorHex = exports.BGColorHex = 0xF7F5F4;
var FogColorHex = exports.FogColorHex = 0xE1CBB2;
var TextColorHex = exports.TextColorHex = 0x133754;
var TextLightColorHex = exports.TextLightColorHex = 0xA3A3A3;
var WhiteColorHex = exports.WhiteColorHex = 0xFFFFFF;

var BGColor = exports.BGColor = new THREE.Color(BGColorHex);
var FogColor = exports.FogColor = new THREE.Color(FogColorHex);
var TextColor = exports.TextColor = new THREE.Color(TextColorHex);
var TextLightColor = exports.TextLightColor = new THREE.Color(TextLightColorHex);
var WhiteColor = exports.WhiteColor = new THREE.Color(WhiteColorHex);

},{}],211:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * CommonTex
 *
 * Singleton loader and cache container for a few common textures used by
 * the terrain component.
 */

var StaticCommonTex = function () {
	function StaticCommonTex() {
		_classCallCheck(this, StaticCommonTex);

		this.textures = {};
		this.textureURLs = {
			grid: 'img/grid.png',
			triangles: 'img/triangles.png'
		};

		this.isLoaded = false;
	}

	_createClass(StaticCommonTex, [{
		key: 'load',
		value: function load() {
			var _this = this;

			return new Promise(function (resolve, reject) {

				if (_this.isLoaded) return resolve();

				var promises = Object.keys(_this.textureURLs).map(function (key) {
					return loadTexture(key, _this.textureURLs[key]);
				});

				Promise.all(promises).then(function (results) {
					results.forEach(function (result) {
						_this.textures[result.name] = result.texture;
					});

					_this.isLoaded = true;
					resolve();
				});
			});
		}
	}]);

	return StaticCommonTex;
}();

function loadTexture(name, url) {
	return new Promise(function (resolve, reject) {
		var loader = new THREE.TextureLoader();
		loader.load(url, function (texture) {
			resolve({
				name: name,
				texture: texture
			});
		});
	});
}

var CommonTex = exports.CommonTex = new StaticCommonTex();

},{}],212:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Scene = exports.GridSize = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = require('eventemitter3');

var _tileManager = require('./tile-manager');

var _audioManager = require('./audio-manager');

var _platformUtils = require('../utils/platform-utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * Scene
 *
 * Singleton scene management class. Controls loading,
 * display, and transitions between scene terrain sites.
 *
 * Also serves as a distributor for general scene state info,
 * like whether or not interactions are allowed or if a modal
 * card is showing.
 *
 * The app starts here: index.js calls init() and loadSite()
 * to load the requested terrain site.
 */

var TELEPORT_HOLD_THRESHOLD = 0.5;
var TELEPORT_DELTASQUARED_THRESHOLD = 1.0;

var GridSize = exports.GridSize = 4;

var StaticScene = function (_EventEmitter) {
	_inherits(StaticScene, _EventEmitter);

	function StaticScene() {
		_classCallCheck(this, StaticScene);

		var _this = _possibleConstructorReturn(this, (StaticScene.__proto__ || Object.getPrototypeOf(StaticScene)).call(this));

		_this.rootDirectory = null;
		_this.baseFilename = null;
		_this.enableTeleport = false;
		_this.isShowingInfoCard = false;
		_this.nextSite = 'landing_site';
		_this.firstLoad = true;
		_this.hasSeenIntro = false;
		_this.hasSeenOrientation = false;
		_this.firstVOPlayed = false;
		_this.isPageRefresh = false;
		_this.wireframe = false;
		_this.iOSSafari = false;
		_this.controllerType = 'mouse-touch'; // options are ['mouse-touch', 'controller']
		_this.modeType = '360'; // options are ['360', 'vr']
		return _this;
	}

	_createClass(StaticScene, [{
		key: 'init',
		value: function init(flags) {
			var _this2 = this;

			this.flags = flags;
			// console.log( 'flags', this.flags );
			this.playerStartPos = new THREE.Vector3(4.25, 0.00, 4.39);
			this.playerStartRot = new THREE.Vector3(0.34, 55.4, 0.00);

			this.orientationCard = document.getElementById('orientation-card');
			this.infoCard = document.getElementById('info-card');
			this.mapCard = document.getElementById('map-card');
			this.mapMarkers = document.getElementById('horizMarkers');
			this.markers = document.getElementById('markers');
			this.player = document.getElementById('player');
			this.camera = document.getElementById('camera');
			this.fader = document.getElementById('fader');
			this.scene = document.getElementById('scene');
			this.sky = document.getElementById('sky');
			this.controllerRay = document.getElementById('controller-ray');
			this.controllerDot = document.getElementById('controller-dot');
			this.controllerArc = document.getElementById('controller-arc');
			this.roverMarkers = document.getElementById('rover-markers');
			this.terrainContainer = document.getElementById('terrain-container');

			// flags
			_audioManager.AudioManager.disableAudio = !!this.flags.disableAudio;
			_audioManager.AudioManager.disableVO = !!this.flags.disableVO || _audioManager.AudioManager.disableAudio;
			_audioManager.AudioManager.disableSFX = !!this.flags.disableSFX || _audioManager.AudioManager.disableAudio;
			_audioManager.AudioManager.disableAtmosphere = !!this.flags.disableAtmosphere || _audioManager.AudioManager.disableAudio;
			_audioManager.AudioManager.disableIntroVO = !!this.flags.disableIntroVO || _audioManager.AudioManager.disableAudio;
			this.wireframe = !!this.flags.wireframe || this.wireframe;
			this.nextSite = this.flags.site || this.nextSite;
			this.hasSeenOrientation = !!this.flags.hasSeenOrientation || this.hasSeenOrientation;
			this.isLinkFromiOS = !!this.flags.site;

			// The site flag is used for page refreshes on ios
			if (this.isLinkFromiOS) {

				this.firstVOPlayed = true;
				this.hasSeenIntro = true;
				this.isPageRefresh = true;

				// TODO: remove this check after debugging
				if (_platformUtils.PlatformUtils.isMobile()) {
					this.hasSeenOrientation = true;
				}

				// Remove the elements associated with the intro video, since it won't be played
				['skip-intro', 'intro-video-webm', 'intro-video-mp4'].forEach(function (id) {
					var el = document.getElementById(id);
					el.parentNode.removeChild(el);
				});
			}

			// Teleport the user if the hand controller button has been
			// held down and released.
			this.teleportCoolDownActive = false;
			this.scene.addEventListener('terrain-cursor-up', function (event) {

				if (_this2.teleportCoolDownActive) return;
				_this2.teleportCoolDownActive = true;
				setTimeout(function () {
					_this2.teleportCoolDownActive = false;
				}, 200);

				// If press and release is close to each other. Only used for non-controllers.
				var isCloseEnough = _this2.controllerType === 'mouse-touch' && event.detail.deltaSquared < TELEPORT_DELTASQUARED_THRESHOLD;

				var isHandHeldController = _this2.controllerType === 'controller';

				if (isCloseEnough || isHandHeldController) {
					_this2.teleportToPoint(event.detail.point);
				}
			});

			// Play a sound when opening a modal window
			this.scene.addEventListener('stateadded', function (event) {
				if (event.target !== _this2.scene) return;
				if (event.detail.state !== 'modal') return;
				_audioManager.AudioManager.playSFX('ui-click');
			});

			// Play a sound when closing a modal window
			this.scene.addEventListener('stateremoved', function (event) {
				if (event.target !== _this2.scene) return;
				if (event.detail.state !== 'modal') return;
				_audioManager.AudioManager.playSFX('ui-close');
			});

			// Hide the modal cards when they are clicked
			this.scene.addEventListener('modal-up', function (event) {
				if (!_this2.scene.is('modal')) return;
				_this2.infoCard.removeState('visible');
				_this2.mapCard.removeState('visible');
			});

			// Hide the map and load a new scene when the map is clicked
			this.scene.addEventListener('on-map-clicked', function (event) {
				_this2.mapCard.removeState('visible');
				_this2.onClickScene(event.detail);
			});

			// Set info card state flag
			this.infoCard.addEventListener('stateadded', function (event) {
				if (event.detail === 'visible') _this2.isShowingInfoCard = true;
			});

			// Clear info card state flag
			this.infoCard.addEventListener('stateremoved', function (event) {
				if (event.detail === 'visible') _this2.isShowingInfoCard = false;
			});
		}

		// set mode type

	}, {
		key: 'setModeType',
		value: function setModeType(modeType) {
			this.modeType = modeType;
		}

		// set mode type

	}, {
		key: 'setControllerType',
		value: function setControllerType(clientType, info) {
			this.controllerType = clientType;
		}

		/**
   * You can only have 1 controller at a time
   * Controller is added after enter-vr event
   * Controllers are based on getControllerType's info param
   */

	}, {
		key: 'tryAddingController',
		value: function tryAddingController(info) {

			var controllers = [{ label: 'GearVR', attribute: 'gearvr-controls' }, { label: 'Daydream', attribute: 'daydream-controller' }, { label: 'Oculus', attribute: 'oculus-touch-controls' }, { label: 'Vive', attribute: 'vive-controls' }, { label: 'OpenVR', attribute: 'vive-controls' }];

			var righthandEl = document.getElementById('right-hand');
			controllers.forEach(function (controller) {
				if (info.indexOf(controller.label) >= 0) {
					righthandEl.setAttribute(controller.attribute, 'hand', 'right');
				}
			});

			// checks visibility of controls
			this.emit('on-controls-ready');
		}
	}, {
		key: 'onClickScene',
		value: function onClickScene(siteName) {

			// stops all voiceovers before moving to the next scene
			_audioManager.AudioManager.stopVO();

			// Hide the controller entities
			this.controllerRay.setAttribute('visible', false);
			this.controllerDot.setAttribute('visible', false);
			this.controllerArc.setAttribute('visible', false);

			// On mobile safari (iOS 10 specifically), the experience can crash after jumping to a different
			// scene due to memory issues. A page refresh is used instead on this platform, which frees up
			// memory to load a new site smoothly.
			if (_platformUtils.PlatformUtils.isIOSSafari()) {

				// Get any existing url params and passes them back to url before page refresh
				var urlArray = window.location.href.split('?');
				var url = urlArray[0];
				var params = urlArray[1];
				var paramString = '';
				if (params) {
					var paramList = ['disableAudio', 'disableVO', 'disableSFX', 'disableAtmosphere', 'disableIntroVO'];
					paramList.forEach(function (param) {
						if (params.indexOf(param) > -1) paramString += '&' + param + '=true';
					});
				}

				paramString += '&modeType=' + this.modeType;
				window.location.href = url + '?site=' + siteName + paramString;
			} else {
				// Load the next site and fade to black
				this.nextSite = siteName;
				this.fader.addState('visible');
			}
		}
	}, {
		key: 'loadSite',
		value: function loadSite(site) {
			var _this3 = this;

			if (site === this.currentSite) return;

			// console.log( 'scene', 'loadSite', site );

			this.emit('site-changed', site);

			// Get terrain folder info
			this.currentSite = site;
			this.baseFilename = site;
			this.rootDirectory = 'terrain/' + this.baseFilename + '/';
			this.terrainDirectory = this.rootDirectory + '/' + this.baseFilename;

			ga('send', 'event', 'site', 'loaded', this.currentSite);

			// Get site POI and horizon markers for the current site
			this.poiMarkers = document.getElementById(this.currentSite + '_markers');
			this.horizMarkers = document.getElementById(this.currentSite + '_horizMarkers');

			// Only show rover markers in the landing site
			this.roverMarkers.setAttribute('visible', site === 'landing_site');

			this.scene.object3D.background = new THREE.Color('#000');

			// Special handling for the landing site to accommodate the intro sequence
			if (site === 'landing_site' && !this.hasSeenIntro) {
				this.hideElements();

				// Adjust the player position so they can see the intro
				this.player.setAttribute('position', new THREE.Vector3(5.00, 0.00, 5.00));
				this.player.setAttribute('rotation', new THREE.Vector3(0.00, 0.00, 0.00));

				// Prepare the intro
				this.scene.setAttribute('intro-player', '');

				// Show the scene once the intro video is complete
				this.scene.addEventListener('video-complete', function (event) {
					_this3.onDisplayReady();
					_this3.terrain.addState('visible');
					_this3.terrain.addState('show-simple');
					_this3.terrain.setAttribute('visible', true);
					_this3.player.setAttribute('position', _this3.playerStartPos);
					_this3.player.setAttribute('rotation', _this3.playerStartRot);
				});

				// Enable interaction and play intro VO after the intro is done
				this.scene.addEventListener('intro-complete', function (event) {

					// Set a flag to skip the intro if the user returns to the landing site during
					// the current session.
					_this3.hasSeenIntro = true;
					_this3.tryEnablingInteraction();
					_this3.tryPlayingAudio();

					if (_this3.firstLoad) {
						_this3.showMarkers();
						_this3.firstLoad = false;
					}
				});

				// Loading of Landing Site
			} else if (site === 'landing_site' && this.hasSeenIntro) {
				this.onDisplayReady();
				this.player.setAttribute('position', this.playerStartPos);
				this.player.setAttribute('rotation', this.playerStartRot);

				this.createRover();
				this.tryEnablingInteraction();
				this.tryPlayingAudio();

				// Loading of sites: Pahrump Hills, Murray Buttes and Marias Pass
			} else {
				// Set a flag to skip the intro if the user returns to the landing site during
				// the current session.
				this.hasSeenIntro = true;

				// Reset player position to origin
				this.player.setAttribute('position', '0 0 0');
				this.player.setAttribute('rotation', '0 0 0');

				// Remove the intro video, it's not used on the other terrain sites.
				if (this.scene.components['intro-player']) {
					this.scene.removeAttribute('intro-player');
				}
			}

			// Create a new terrain entity
			this.terrain = document.createElement('a-entity');
			this.terrain.setAttribute('terrain', '');
			this.terrain.id = 'terrain_' + site;

			// Wait for the terrain element to be fully loaded as far as AFRAME is
			// concerned. Until then, it's not safe to touch the terrain component.
			this.terrain.addEventListener('loaded', function (event) {
				_this3.terrain.components['terrain'].loadTerrain().then(function (tiles) {
					_this3.tileManager = new _tileManager.TileManager(tiles);
				}).then(function () {
					return new Promise(function (resolve) {

						// If the intro is playing, then onDisplayReady is called later
						// by the video-complete event which is defined above.
						if (!_this3.scene.is('playing-intro')) {
							_this3.onDisplayReady();
						}

						_this3.scene.addState('loaded');

						// Let others know the scene is displayed
						_this3.emit('terrain-loaded');
						_this3.emit('site-loaded');

						// Enable interaction, audio, and rover display
						_this3.tryEnablingInteraction();
						_this3.tryPlayingAudio();
						_this3.tryShowRover();

						resolve();
					});
				});
			});

			// Add the terrain to the scene
			this.terrainContainer.appendChild(this.terrain);
		}

		/**
   * Enable interaction flags if loading and the intro are done
   */

	}, {
		key: 'tryEnablingInteraction',
		value: function tryEnablingInteraction() {

			if (!this.scene.is('loaded')) return;
			if (this.scene.is('playing-intro')) return;

			// Play the tile loading sound
			if (!this.isLinkFromiOS) {
				_audioManager.AudioManager.playSFX('tile-loadD');
			}

			// Show orientation card if the user hasn't seen it yet
			if (!this.hasSeenOrientation) {
				this.hasSeenOrientation = true;
				this.orientationCard.addState('visible');
				this.orientationCard.components['orientation-card'].update();
			}

			// Hide the simplified terrain and show the full terrain
			this.terrain.removeState('show-simple');
			this.terrain.addState('show-terrain');
			this.terrain.addState('visible');
			this.terrain.setAttribute('visible', true);

			// Display POI and Horizon markers
			if (this.poiMarkers) this.poiMarkers.setAttribute('visible', true);
			if (this.horizMarkers) this.horizMarkers.setAttribute('visible', true);

			this.scene.addState('intro-complete');
			this.scene.emit('initial-load-complete');
			this.emit('initial-load-complete');

			this.scene.addState('interactive');

			this.showMarkers();
			this.enableTeleport = true;

			// checks visibility of controls
			this.emit('on-controls-ready');
		}
	}, {
		key: 'tryPlayingAudio',
		value: function tryPlayingAudio() {

			if (!this.scene.is('loaded')) return;
			if (this.scene.is('playing-intro')) return;

			// Manny: is this required? It's a weird place for it since this function is about playing audio.
			// This is related to ios Mobile Page refresh. I didn't have time to move it last night.
			if (this.isLinkFromiOS) {
				this.tryEnablingInteraction();
				return;
			}

			// If any of the audio is disabled thru any of the debug flags, _onEnded won't
			// exist and these calls will error out, so those errors are caught here.
			try {
				if (this.firstVOPlayed) return;
				this.firstVOPlayed = true;

				_audioManager.AudioManager.playVO('intro1', 0.5)._onEnded = function () {
					_audioManager.AudioManager.playVO('intro2', 0.25);
				};
			} catch (error) {
				this.firstVOPlayed = true;
			}
		}
	}, {
		key: 'onDisplayReady',
		value: function onDisplayReady() {
			var _this4 = this;

			if (!_audioManager.AudioManager.disableAtmosphere) {
				_audioManager.AudioManager.playAtmosphere();
			}

			// Disable interaction when the fade-out begins
			this.fader.addEventListener('transition-in-begin', function (event) {
				_this4.scene.removeState('interactive');
			});

			// Load the next site when the fade-out is finished
			this.fader.addEventListener('transition-in-complete', function (event) {
				_this4.unload();
				_this4.loadSite(_this4.nextSite);
				_this4.sky.removeState('visible');
			});

			// Trigger fade-in
			this.fader.removeState('visible');
		}

		/**
   * Unloads all terrain tiles, textures, colliders, and disables all site-specific markers. Used
   * during site transitions.
   */

	}, {
		key: 'unload',
		value: function unload() {
			if (!this.tileManager) return;
			if (!this.terrain) return;

			this.tileManager.unload();
			this.tileManager = null;

			this.hideRover();

			this.terrain.parentNode.removeChild(this.terrain);
			this.terrain = null;

			this.scene.removeState('interactive');
			this.scene.removeState('loaded');
			this.enableTeleport = false;

			if (this.poiMarkers) this.poiMarkers.setAttribute('visible', false);
			if (this.horizMarkers) this.horizMarkers.setAttribute('visible', false);
		}

		/**
   * Teleports the user to a given point, typically
   * provided by the cursor raycaster. Progressive
   * terrain tile loading is resorted by distance
   * to the user.
   */

	}, {
		key: 'teleportToPoint',
		value: function teleportToPoint(point) {
			if (!this.enableTeleport) return;
			if (this.scene.is('modal')) return;
			if (this.isShowingInfoCard) return;

			// Set the player position to the cursor position
			this.player.setAttribute('position', point);
			ga('send', 'event', 'position', 'teleport', this.currentSite + '/' + point.x.toFixed(5) + ' ' + point.y.toFixed(5) + ' ' + point.z.toFixed(5));

			// Play teleport sound
			_audioManager.AudioManager.playSFX('teleportG');

			// Sort tile update order by proximity to the player.
			// Closer tiles get updated first.
			this.tileManager.updatePlayerPosition(point);
		}
	}, {
		key: 'createRover',
		value: function createRover() {
			if (this.rover) return this.rover;

			this.rover = document.createElement('a-entity');
			this.rover.setAttribute('rover', '');
			this.rover.setAttribute('rotation', { x: 0, y: 90, z: 0 });
			this.rover.id = 'rover';

			this.terrainContainer.appendChild(this.rover);

			return this.rover;
		}
	}, {
		key: 'tryShowRover',
		value: function tryShowRover() {
			if (!this.rover) return;
			if (!this.isPageRefresh && !this.hasSeenIntro) return;

			// The rover should only be visible on the landing site. Since this function
			// is only called when returning to the landing site after having seen the intro,
			// set the rover's complete state so that it shows up already in position.
			if (this.currentSite === 'landing_site') {
				this.rover.setAttribute('visible', true);
				this.rover.addState('complete');
			} else {
				this.hideRover();
			}
		}
	}, {
		key: 'hideRover',
		value: function hideRover() {
			if (!this.rover) return;
			this.rover.setAttribute('visible', false);
		}
	}, {
		key: 'showMarkers',
		value: function showMarkers() {
			this.mapMarkers.setAttribute('visible', true);
			this.markers.setAttribute('visible', true);
		}
	}, {
		key: 'hideElements',
		value: function hideElements() {
			if (this.terrain) this.terrain.setAttribute('visible', false);
			this.mapMarkers.setAttribute('visible', false);
			this.markers.setAttribute('visible', false);
		}
	}]);

	return StaticScene;
}(_eventemitter.EventEmitter);

var Scene = exports.Scene = new StaticScene();

},{"../utils/platform-utils":244,"./audio-manager":209,"./tile-manager":213,"eventemitter3":126}],213:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * TileManager
 *
 * Manager for loading progressively-higher-res terrain tile textures.
 *
 * Terrain tile texture load order is determined by distance from the
 * player. The closest tiles load first. The load order is updated
 * whenever the player moves.
 */

var TileManager = exports.TileManager = function () {
	function TileManager(tiles) {
		_classCallCheck(this, TileManager);

		this.tiles = Array.from(tiles);
		this.size = 0;

		// Do initial tile sort by center distance from (0, 0, 0) outwards
		this.tiles = this.tiles.sort(function (a, b) {
			return a.center.lengthSq() - b.center.lengthSq();
		});

		// Set up initial tile list for pending texture updates
		this.tilesForTextureUpdate = Array.from(this.tiles);

		// Start the update loop
		this.updateNextTile();
	}

	_createClass(TileManager, [{
		key: "updateNextTile",
		value: function updateNextTile() {
			var _this = this;

			this.currentlyUpdatingTile = this.tilesForTextureUpdate.shift();

			if (this.currentlyUpdatingTile !== undefined) {

				this.currentlyUpdatingTile.loadNextTextureSize().then(function (response) {
					// console.log( this.currentlyUpdatingTile.id, response );
					_this.updateNextTile();
				}, function (error) {
					// console.log( this.currentlyUpdatingTile.id, error );
					_this.updateNextTile();
				});
			} else if (++this.size < 2) {
				// If the largest size hasn't been reached yet, reset the list and load
				// the next size up.
				this.reset();
			}
		}

		/**
   * Sort the tile update order by proximity to the given THREE.Vector3.
   * Closer tiles will get updated first.
   */

	}, {
		key: "updatePlayerPosition",
		value: function updatePlayerPosition(pos) {
			this.tilesForTextureUpdate.sort(function (a, b) {
				var da = pos.distanceToSquared(a.center);
				var db = pos.distanceToSquared(b.center);
				return da - db;
			});
		}

		/**
   * Resets the tile update list and starts a new update cycle.
   * Used for updating all tiles to the next size value.
   */

	}, {
		key: "reset",
		value: function reset() {
			this.tilesForTextureUpdate = Array.from(this.tiles);
			this.updateNextTile();
		}

		/**
   * Clears the tile update list.
   */

	}, {
		key: "unload",
		value: function unload() {
			this.currentlyUpdatingTile = null;
			this.tilesForTextureUpdate = [];
			this.tiles = [];
		}
	}]);

	return TileManager;
}();

},{}],214:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GLTFLoader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = require('eventemitter3');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * GLTFLoader
 *
 * Singleton class for loading and parsing compressed
 * GLTF model files.
 */

var StaticGLTFLoader = function (_EventEmitter) {
	_inherits(StaticGLTFLoader, _EventEmitter);

	function StaticGLTFLoader() {
		_classCallCheck(this, StaticGLTFLoader);

		return _possibleConstructorReturn(this, (StaticGLTFLoader.__proto__ || Object.getPrototypeOf(StaticGLTFLoader)).apply(this, arguments));
	}

	_createClass(StaticGLTFLoader, [{
		key: 'load',


		/**
   * Loads a single gltf file from a given url.
   * Returns a promise that resolves when the file is loaded and parsed.
   */
		value: function load(url) {
			var _this2 = this;

			if (!this.gltfLoader) {
				this.gltfLoader = new THREE.GLTF2Loader();
			}

			return new Promise(function (resolve, reject) {
				_this2.gltfLoader.load(url, function (gltf) {
					resolve({ gltf: gltf, url: url });
				}, function (progress) {
					_this2.emit('progress', progress);
				}, function (error) {
					reject(error);
				});
			});
		}

		/**
   * Loads multiple files from a given array of URLs.
   * Returns a promise which resolves once all files are loaded.
   */

	}, {
		key: 'loadMultiple',
		value: function loadMultiple(urls) {
			var _this3 = this;

			return new Promise(function (resolve, reject) {
				var promises = urls.map(function (url) {
					return _this3.load(url);
				});

				Promise.all(promises).then(function (results) {
					var resultsByURL = {};
					results.forEach(function (result) {
						resultsByURL[result.url] = result.scene;
					});
					resolve(resultsByURL);
				});
			});
		}
	}]);

	return StaticGLTFLoader;
}(_eventemitter.EventEmitter);

var GLTFLoader = exports.GLTFLoader = new StaticGLTFLoader();

},{"eventemitter3":126}],215:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.CardMeshBorder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _cardMesh = require('./card-mesh');

var _colors = require('../core/colors');

var _mathUtils = require('../utils/math-utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * CardMeshBorder
 *
 * Same as CardMesh, but with a extra border mesh which animates in 
 * when the hover variable is set.
 */

var CardMeshBorderShader = require('../shaders/card-mesh-border-shader');

var HOVER_DURATION = 0.3;

var CardMeshBorder = exports.CardMeshBorder = function (_CardMesh) {
		_inherits(CardMeshBorder, _CardMesh);

		function CardMeshBorder(width, height, depthTest) {
				_classCallCheck(this, CardMeshBorder);

				var _this = _possibleConstructorReturn(this, (CardMeshBorder.__proto__ || Object.getPrototypeOf(CardMeshBorder)).call(this, width, height, depthTest));

				_this.hoverIn = 0;

				// Creat the border material
				_this.borderMaterial = new THREE.ShaderMaterial({
						uniforms: THREE.UniformsUtils.clone(CardMeshBorderShader.uniforms),
						vertexShader: CardMeshBorderShader.vertexShader,
						fragmentShader: CardMeshBorderShader.fragmentShader
				});

				// Disable depth test if required
				if (depthTest === false || depthTest === undefined) {
						_this.borderMaterial.depthTest = false;
						_this.borderMaterial.transparent = true;
				}

				// Set border color
				_this.borderMaterial.uniforms.color.value = _colors.TextColor;

				// Create border mesh with empty geometry. The geometry will be created
				// in the setSize() function.	
				_this.borderGeometry = new THREE.BufferGeometry();
				_this.borderMesh = new THREE.Mesh(_this.borderGeometry, _this.borderMaterial);
				_this.mesh.add(_this.borderMesh);
				return _this;
		}

		_createClass(CardMeshBorder, [{
				key: 'setSize',
				value: function setSize(width, height) {
						_get(CardMeshBorder.prototype.__proto__ || Object.getPrototypeOf(CardMeshBorder.prototype), 'setSize', this).call(this, width, height);

						var w = width;
						var h = height;
						var d = 0.001; // z offset
						var t = 0.04; // border thickness

						var normals = [];

						var vertices = [-w, -h, d, -w, h, d, w, -h, d, w, h, d, -w + t, -h + t, d, -w + t, h - t, d, w - t, -h + t, d, w - t, h - t, d];

						var indices = [4, 5, 1, 6, 4, 0, 7, 6, 2, 5, 7, 3, 0, 4, 1, 2, 6, 0, 3, 7, 2, 1, 5, 3];

						// The X coordinate of the UVs is used for the animIn mask effect.
						// The Y coordinate is used to animate the thickness of the border.
						var uvs = [1, 0.03, 0, 0.03, 1, 0.03, 0, 0.03, 1 - t, 0.99, 0 + t, 0.99, 1 - t, 0.99, 0 + t, 0.99];

						// Normals are constant for each vertex
						for (var i = 0; i < 8; i++) {
								normals.push(0, 0, 1);
						}

						// Create a new BufferGeometry object and add the required attributes to it
						this.borderGeometry = new THREE.BufferGeometry();
						this.borderGeometry.setIndex(indices);
						this.borderGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
						this.borderGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
						this.borderGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

						// Update the border mesh geometry
						this.borderMesh.geometry = this.borderGeometry;

						// Counteract the parent mesh's scaling
						this.borderMesh.scale.setX(1 / this.mesh.scale.x / 2);
						this.borderMesh.scale.setY(1 / this.mesh.scale.y / 2);
				}
		}, {
				key: 'tick',
				value: function tick(dt) {
						_get(CardMeshBorder.prototype.__proto__ || Object.getPrototypeOf(CardMeshBorder.prototype), 'tick', this).call(this, dt);

						dt = dt / 1000 * (1 / HOVER_DURATION);

						if (this.hover) {
								this.hoverIn += dt;
						} else {
								this.hoverIn -= dt;
						}

						this.hoverIn = _mathUtils.MathUtils.clamp(this.hoverIn, 0, 1);

						this.borderMaterial.uniforms.animIn.value = this.easing(this.animIn);
						this.borderMaterial.uniforms.hoverIn.value = this.easing(this.hoverIn);
				}
		}]);

		return CardMeshBorder;
}(_cardMesh.CardMesh);

},{"../core/colors":210,"../shaders/card-mesh-border-shader":218,"../utils/math-utils":243,"./card-mesh":217}],216:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CardMeshImage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _colors = require('../core/colors');

var _cardMesh = require('./card-mesh');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * CardMeshImage
 *
 * Same as CardMesh, except it can load and display an image.
 */

var CardMeshImage = exports.CardMeshImage = function (_CardMesh) {
	_inherits(CardMeshImage, _CardMesh);

	function CardMeshImage(width, height, imageURL, depthTest) {
		_classCallCheck(this, CardMeshImage);

		var _this = _possibleConstructorReturn(this, (CardMeshImage.__proto__ || Object.getPrototypeOf(CardMeshImage)).call(this, width, height, depthTest));

		_this.material.uniforms.color.value = _colors.BGColor;

		_this.textureLoader = new THREE.TextureLoader();

		if (imageURL) {
			_this.loadImage(imageURL);
		}
		return _this;
	}

	/**
  * Loads and displays an image at a given URL.
  * Returns a promise which resolves when the image is loaded.
  */


	_createClass(CardMeshImage, [{
		key: 'loadImage',
		value: function loadImage(imageURL) {
			var _this2 = this;

			return new Promise(function (resolve, reject) {
				_this2.textureLoader.load('img/' + imageURL, function (texture) {
					_this2.texture = texture;
					_this2.texture.minFilter = THREE.LinearMipMapNearestFilter;

					// Set image texture
					_this2.material.uniforms.map.value = _this2.texture;
					_this2.material.uniforms.color.value = new THREE.Color(0);
					_this2.material.needsUpdate = true;

					resolve();
				});
			});
		}

		/**
   * Unloads the card image and resets the material color.
   */

	}, {
		key: 'unloadImage',
		value: function unloadImage() {
			this.material.uniforms.color.value = _colors.BGColor;
			this.material.uniforms.map.value = null;
			this.material.needsUpdate = true;
			this.texture = null;
		}
	}]);

	return CardMeshImage;
}(_cardMesh.CardMesh);

},{"../core/colors":210,"./card-mesh":217}],217:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CardMesh = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = require('eventemitter3');

var _mathUtils = require('../utils/math-utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * CardMesh
 *
 * Class which contains the backing mesh used by the info-card and map-card components.
 * Encapsulates mesh setup and management of transition animations.
 */

var BezierEasing = require('bezier-easing');
var InfoCardShader = require('../shaders/info-card-flat-shader');

var PLANE_GEO = new THREE.PlaneGeometry(1, 1);

var CardMesh = exports.CardMesh = function (_EventEmitter) {
	_inherits(CardMesh, _EventEmitter);

	function CardMesh(width, height, depthTest) {
		_classCallCheck(this, CardMesh);

		var _this = _possibleConstructorReturn(this, (CardMesh.__proto__ || Object.getPrototypeOf(CardMesh)).call(this));

		_this.easing = BezierEasing(0.66, 0, 0.33, 1);
		_this.animIn = 0;
		_this.delay = 0;
		_this.delayCounter = 0;

		_this.visible = false;
		_this.hideComplete = false;

		// Create InfoCardShader material
		_this.material = new THREE.ShaderMaterial({
			uniforms: THREE.UniformsUtils.clone(InfoCardShader.uniforms),
			vertexShader: InfoCardShader.vertexShader,
			fragmentShader: InfoCardShader.fragmentShader
		});

		// Disable depth test if required
		if (depthTest === false || depthTest === undefined) {
			_this.material.depthTest = false;
			_this.material.transparent = true;
		}

		// Set material uniforms
		_this.material.uniforms.animIn.value = _this.animIn;
		_this.material.uniforms.color.value = new THREE.Color(0xFFFFFF);

		// Create and scale the plane mesh
		_this.mesh = new THREE.Mesh(PLANE_GEO, _this.material);
		_this.mesh.scale.setX(width);
		_this.mesh.scale.setY(height || width);
		return _this;
	}

	_createClass(CardMesh, [{
		key: 'setVisibility',
		value: function setVisibility(visibility, duration, delay) {
			if (visibility) {
				this.show(duration, delay);
			} else {
				this.hide(duration);
			}
		}
	}, {
		key: 'show',
		value: function show(duration, delay) {
			if (this.visible) return;
			this.setTimings(duration, delay);
			this.animIn = 0;
			this.visible = true;
		}
	}, {
		key: 'hide',
		value: function hide(duration, delay) {
			if (!this.visible) return;
			this.setTimings(duration, delay);
			this.visible = false;
			this.hideComplete = false;
		}
	}, {
		key: 'setTimings',
		value: function setTimings(duration, delay) {
			this.transitionDuration = duration === undefined ? 0.25 : duration;
			this.delay = delay === undefined ? 0 : delay;
			this.delayCounter = this.delay ? 1 : 0;
		}
	}, {
		key: 'setSize',
		value: function setSize(width, height) {
			this.mesh.scale.setX(width);
			this.mesh.scale.setY(height || width);
		}
	}, {
		key: 'setPosition',
		value: function setPosition(x, y) {
			this.mesh.position.setX(x);
			this.mesh.position.setY(y);
		}
	}, {
		key: 'setDepth',
		value: function setDepth(depth) {
			this.mesh.position.setZ(depth);
		}
	}, {
		key: 'getX',
		value: function getX() {
			return this.mesh.position.x;
		}
	}, {
		key: 'getY',
		value: function getY() {
			return this.mesh.position.y;
		}
	}, {
		key: 'tick',
		value: function tick(dt) {
			// Scale delta-time so that it is a number from 0..1 over the 
			// number of seconds set by transitionDuration.
			if (this.delayCounter > 0) {
				dt = dt / 1000 * (1 / this.delay);
			} else {
				dt = dt / 1000 * (1 / this.transitionDuration);
			}

			if (this.delayCounter > 0) {
				this.delayCounter -= dt;
				return;
			}

			if (this.visible) {
				this.animIn += dt;
			} else {
				this.animIn -= dt;
			}

			this.animIn = _mathUtils.MathUtils.clamp(this.animIn, 0, 1);
			this.material.uniforms.animIn.value = this.easing(this.animIn);

			// Emit hide-complete event when the out animation is completed
			if (!this.hideComplete && this.animIn <= 0) {
				this.hideComplete = true;
				this.emit('hide-complete');
			}
		}
	}]);

	return CardMesh;
}(_eventemitter.EventEmitter);

},{"../shaders/info-card-flat-shader":227,"../utils/math-utils":243,"bezier-easing":13,"eventemitter3":126}],218:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * card-mesh-border-shader
 * 
 */

var uniforms = exports.uniforms = {
	color: { value: new THREE.Color() },
	animIn: { value: 1 },
	hoverIn: { value: 1 }
};

var vertexShader = exports.vertexShader = ['varying vec2 vUV;', 'void main() {', 'vUV = uv;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n');

var fragmentShader = exports.fragmentShader = ['uniform vec3 color;', 'uniform float animIn;', 'uniform float hoverIn;', 'varying vec2 vUV;', 'void main() {', 'if ( vUV.y >= hoverIn || vUV.x >= animIn ) discard;', 'gl_FragColor = vec4( color, 1.0 );', '}'].join('\n');

},{}],219:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * color-alpha-shader
 *
 * Flat single-color shader with opacity 
 */

var uniforms = exports.uniforms = {
	color: { type: 'c', value: new THREE.Color(0xFFFFFF) },
	opacity: { type: '1f', value: 100 }
};

var vertexShader = exports.vertexShader = ['void main() {', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n');

var fragmentShader = exports.fragmentShader = ['uniform float opacity;', 'uniform vec3 color;', 'void main() {', 'gl_FragColor = vec4( color, opacity / 100.0 );', '}'].join('\n');

},{}],220:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * color-mask-shader
 *
 * Uses a given texture as an alpha mask with a given color 
 * and opacity. Used by the icon components.
 */

var uniforms = exports.uniforms = {
	map: { type: 't' },
	color: { value: new THREE.Color() },
	opacity: { value: 1 }
};

var vertexShader = exports.vertexShader = ['varying vec2 vUV;', 'void main() {', 'vUV = uv;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n');

var fragmentShader = exports.fragmentShader = ['uniform sampler2D map;', 'uniform vec3 color;', 'uniform float opacity;', 'varying vec2 vUV;', 'void main() {', 'vec4 t = texture2D( map, vUV );', 'if ( t.a < 0.5 ) discard;', 'gl_FragColor = vec4( color * t.rgb, t.a * opacity );', '}'].join('\n');

},{}],221:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * color-shader
 *
 * Flat single-color shader
 */

var uniforms = exports.uniforms = {
	color: { type: 'c', value: new THREE.Color(0xFFFFFF) }
};

var vertexShader = exports.vertexShader = ['void main() {', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n');

var fragmentShader = exports.fragmentShader = ['uniform vec3 color;', 'void main() {', 'gl_FragColor = vec4( color, 1.0 );', '}'].join('\n');

},{}],222:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * controller-dot-shader
 *
 * Draws a colored ring of a given radius. 
 * Used by controller-dot. 
 */

var uniforms = exports.uniforms = {
	color: { value: new THREE.Color(0xFFFFFF) },
	innerRadius: { value: 0.30 }
};

var vertexShader = exports.vertexShader = ['varying vec2 vUV;', 'void main() {', 'vUV = uv;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n');

var fragmentShader = exports.fragmentShader = ['uniform vec3 color;', 'uniform float innerRadius;', 'varying vec2 vUV;', 'void main() {', 'float d = length( vUV - 0.5 );', 'if ( d > 0.5 || d < innerRadius ) discard;', 'gl_FragColor = vec4( color, 1.0 );', '}'].join('\n');

},{}],223:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

/**
 * controller-ray-shader
 *
 */

var uniforms = exports.uniforms = {
	dashSpacing: { value: 0.3 },
	dashSize: { value: 0.5 },
	t: { value: 0.0 },
	axis: { value: new THREE.Vector2(0, 1) },
	show: { value: 1.0 }
};

var vertexShader = exports.vertexShader = ['varying vec2 vUV;', 'void main() {', 'vUV = uv;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n');

var fragmentShader = exports.fragmentShader = ['uniform float rayLength;', 'uniform float dashSpacing;', 'uniform float dashSize;', 'uniform float t;', 'uniform float show;', 'uniform vec2 axis;', 'varying vec2 vUV;', 'void main() {', 'float uv = length( vUV * axis );', 'if ( uv > show ) discard;', 'float d = fract( uv * ( 1.0 / dashSpacing ) - t );', 'if ( d < 1.0 - dashSize ) discard;', 'gl_FragColor = vec4( 1.0 );', '}'].join('\n');

},{}],224:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fragmentShader = exports.vertexShader = exports.uniforms = undefined;

var _shaderChunks = require('./shader-chunks');

var uniforms = exports.uniforms = {
	lineColor: { type: 'c', value: new THREE.Color(0xFFFFFF) },
	fillColor: { type: 'c', value: new THREE.Color(0) },
	thickness: { value: 1.5 },
	fogColor: { type: 'c', value: new THREE.Color(0) },
	fogDensity: { type: '1f', value: 0.05 }
}; // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * edge-shader
 *
 * Shader which simulates a wireframe effect. Used by terrain-simple.js for
 * showing simplified terrain during scene preloading. 
 *
 * The wireframe effect is generated using the fwidth function which requires
 * the oes_standard_derivatives extension to be enabled.
 *
 * Based on http://codeflow.org/entries/2012/aug/02/easy-wireframe-display-with-barycentric-coordinates/
 */

var vertexShader = exports.vertexShader = ['attribute vec3 center;', _shaderChunks.FogParamsVertex, 'varying vec3 vCenter;', 'void main() {', _shaderChunks.FogVertex, 'vCenter = center;', 'gl_Position = projectionMatrix * mvPosition;', '}'].join('\n');

var fragmentShader = exports.fragmentShader = ['uniform vec3 lineColor;', 'uniform vec3 fillColor;', 'uniform float thickness;', _shaderChunks.FogParamsFrag, 'varying vec3 vCenter;', 'void main() {', 'vec3 a3 = smoothstep( vec3( 0.0 ), fwidth( vCenter.xyz ) * thickness, vCenter.xyz );', 'float edgeFactor = min( min( a3.x, a3.y ), a3.z );', 'gl_FragColor = vec4( mix( lineColor, fillColor, edgeFactor ), 1.0 );', _shaderChunks.FogFrag, '}'].join('\n');

},{"./shader-chunks":230}],225:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * flashline-shader
 *
 * Solid color shader for lines with a start and end UV value.
 * Used by the rover camera flash FX.
 */

var uniforms = exports.uniforms = {
	start: { value: 100 },
	end: { value: 100 },
	color: { value: new THREE.Color(0xFFFFFF) },
	opacity: { value: 100 }
};

var vertexShader = exports.vertexShader = ['varying float vUVY;', 'void main() {', 'vUVY = uv.y;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n');

var fragmentShader = exports.fragmentShader = ['uniform float start;', 'uniform float end;', 'uniform float opacity;', 'uniform vec3 color;', 'varying float vUVY;', 'void main() {', 'bool discardStart = (  vUVY ) < ( start / 100.0 );', 'bool discardEnd = ( 1.0 - vUVY ) < 1.0 - ( end / 100.0 );', 'if ( discardStart || discardEnd ) discard;', 'gl_FragColor = vec4( color, opacity / 100.0 );', '}'].join('\n');

},{}],226:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * gradient-shader
 *
 * Draws a one-color alpha gradient along the UV.y axis.
 * Used for the base of the horizon-markers.
 */

var uniforms = exports.uniforms = {
	color: { type: 'c', value: new THREE.Color(0xFFFFFF) },
	alpha: { type: '1f', value: 0.5 }
};

var vertexShader = exports.vertexShader = ['varying float vUVy;', 'void main() {', 'vUVy = uv.y;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n');

var fragmentShader = exports.fragmentShader = ['uniform float alpha;', 'uniform vec3 color;', 'varying float vUVy;', 'void main() {', 'gl_FragColor = vec4( color, mix( 0.0, alpha, 1.0 - vUVy ) );', '}'].join('\n');

},{}],227:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * info-card-flat-shader
 *
 * Flat color shader used for the background of info-cards.
 *
 * Has an 'animIn' parameter for controlling a mask-in transition 
 * animation.
 */

var uniforms = exports.uniforms = {
	map: { type: 't' },
	animIn: { value: 1 },
	color: { value: new THREE.Color(0) }
};

var vertexShader = exports.vertexShader = ['varying vec2 vUV;', 'void main() {', 'vUV = uv;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n');

var fragmentShader = exports.fragmentShader = ['uniform float animIn;', 'uniform vec3 color;', 'uniform sampler2D map;', 'varying vec2 vUV;', 'void main() {', 'float d = length( vUV - 0.5 );', 'if ( vUV.y < 1.0 - animIn ) discard;', 'gl_FragColor = vec4( texture2D( map, vUV ).rgb + color, 1.0 );', '}'].join('\n');

},{}],228:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * map-path-shader
 *
 * Flat color shader which masks two colors along the UV.x axis,
 * based on a fill parameter. Used by map-path.
 */

var uniforms = exports.uniforms = {
	fill: { value: 0.5 },
	colorA: { value: new THREE.Color() },
	colorB: { value: new THREE.Color(0xFF00FF) },
	opacity: { value: 1 }
};

var vertexShader = exports.vertexShader = ['varying float xUV;', 'void main() {', 'xUV = uv.x;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n');

var fragmentShader = exports.fragmentShader = ['uniform float fill;', 'uniform vec3 colorA;', 'uniform vec3 colorB;', 'uniform float opacity;', 'varying float xUV;', 'void main() {', 'gl_FragColor.rgb = mix( colorA, colorB, step( fill, xUV ) );', 'gl_FragColor.a = opacity;', '}'].join('\n');

},{}],229:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fragmentShader = exports.vertexShader = exports.uniforms = undefined;

var _colors = require('../core/colors');

var _shaderChunks = require('./shader-chunks');

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * rover-lambert-shader
 *
 * Simple lambertian shader, used by the rover model.
 * Supports one light, passed via shader parameters.
 *
 * Uses a RGB "highlight map" image to segment texture areas
 * for highlighting when the user selects a part of the rover.
 */

var uniforms = exports.uniforms = {
	map: { type: 't' },
	highlightMap: { type: 't' },
	color: { value: new THREE.Color(0) },
	activeHighlightColor: { value: new THREE.Vector3(1, 1, 1) },
	activeHighlightOpacity: { type: '1f', value: 0 },
	lightPosition: { value: new THREE.Vector3(3, 10, 1) },
	lightIntensity: { value: 1.15 },
	fogColor: { type: 'c', value: _colors.FogColor },
	fogDensity: { type: '1f', value: 0.01 }
};

var vertexShader = exports.vertexShader = [_shaderChunks.FogParamsVertex, 'varying vec3 vNormal;', 'varying vec2 vUV;', 'void main() {', _shaderChunks.FogVertex, 'vUV = uv;', 'vNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n');

var fragmentShader = exports.fragmentShader = ['#define HIGHLIGHT_COLOR vec3( 0.35 )', 'uniform vec3 color;', 'uniform float lightIntensity;', 'uniform vec3 lightPosition;', 'uniform sampler2D map;', 'uniform sampler2D highlightMap;', 'uniform vec3 activeHighlightColor;', 'uniform float activeHighlightOpacity;', _shaderChunks.FogParamsFrag, 'varying vec3 vNormal;', 'varying vec2 vUV;', 'void main() {',

// Basic Lambertian shading using a single infinite light
// See: https://en.wikipedia.org/wiki/Lambertian_reflectance
'vec3 lightDirection = normalize( lightPosition );', 'float dotNL = dot( vNormal, lightDirection ) * 0.5 + 0.5;', 'float irradience = dotNL * lightIntensity;',

// Cinema4D's COLLADA exporter flips the y-axis of the UV coordinates...
'vec2 uv = vec2( vUV.x, 1.0 + -vUV.y );', 'float highlight = length( texture2D( highlightMap, uv ).rgb * activeHighlightColor );', 'gl_FragColor.rgb = texture2D( map, uv ).rgb * irradience;', 'gl_FragColor.rgb += HIGHLIGHT_COLOR * activeHighlightOpacity * highlight;', 'gl_FragColor.rgb *= color;', 'gl_FragColor.a = 1.0;', _shaderChunks.FogFrag, '}'].join('\n');

},{"../core/colors":210,"./shader-chunks":230}],230:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * Common bits of reused shader code.
 */

// Fog vertex shader parameters
var FogParamsVertex = exports.FogParamsVertex = ['varying float fogDepth;'].join('\n');

// Fog vertex shader calculations
var FogVertex = exports.FogVertex = ['vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );', 'fogDepth = -mvPosition.z;'].join('\n');

// Fog fragment shader parameters
var FogParamsFrag = exports.FogParamsFrag = ['#define LOG2 1.442695', 'uniform vec3 fogColor;', 'uniform float fogDensity;', 'varying float fogDepth;'].join('\n');

// Fog fragment shader calculations
var FogFrag = exports.FogFrag = ['float fogFactor = 1.0 - saturate( exp2( -fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );', 'gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );'].join('\n');

},{}],231:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * sky-shader
 *
 * A flat two-color gradient with an animated mask parameter.
 * Used by sky-gradient. Default color values provided by JPL.
 */

var uniforms = exports.uniforms = {
	startColor: { type: 'c', value: new THREE.Color(0xFFF9E8) },
	endColor: { type: 'c', value: new THREE.Color(0xE1CBB2) },
	animIn: { type: '1f', value: 1 }
};

var vertexShader = exports.vertexShader = ['varying vec2 vUVa;', 'varying vec2 vUVb;', 'void main() {', 'vUVa = min( ( 1.0 - uv ) + 0.5, 1.0 );', 'vUVb = uv;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n');

var fragmentShader = exports.fragmentShader = ['uniform vec3 startColor;', 'uniform vec3 endColor;', 'uniform float animIn;', 'varying vec2 vUVa;', 'varying vec2 vUVb;', 'void main() {', 'if ( vUVb.y > animIn ) discard;', 'gl_FragColor = vec4( mix( startColor, endColor, vUVa.y ), 1.0 );', '}'].join('\n');

},{}],232:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fragmentShader = exports.vertexShader = exports.uniforms = undefined;

var _colors = require('../core/colors');

var _shaderChunks = require('./shader-chunks');

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * terrain-shader
 *
 * Flat textured shader used by the terrain geometry.
 *
 * Can overlay a world-positioned grid graphic during VR teleporation,
 * and supports a goofy triangle transition animation.
 */

var uniforms = exports.uniforms = {
	terrainTex: { type: 't' },
	gridTex: { type: 't' },
	triangleTex: { type: 't' },
	gridPosition: { value: new THREE.Vector3() },
	tileCenter: { value: new THREE.Vector2() },
	gridOpacity: { type: '1f', value: 1 },
	fogColor: { type: 'c', value: _colors.FogColor },
	fogDensity: { type: '1f', value: 0.01 },
	animIn: { type: '1f', value: 0 }
};

var vertexShader = exports.vertexShader = ['uniform vec3 gridPosition;', 'uniform vec2 tileCenter;', 'varying vec2 vUV;', 'varying vec2 gridUV;', 'varying vec2 vLocalUV;', _shaderChunks.FogParamsVertex, 'void main() {', _shaderChunks.FogVertex, 'vUV = uv;', 'vLocalUV = ( ( position.xz + 16.0 ) / 32.0 );', 'vec3 worldPosition = ( ( position / 16.0 ) * 4.0 ) - gridPosition;', 'gridUV = clamp( worldPosition.xz, 0.0, 1.0 );', 'gl_Position = projectionMatrix * mvPosition;', '}'].join('\n');

var fragmentShader = exports.fragmentShader = ['uniform sampler2D terrainTex;', 'uniform sampler2D triangleTex;', 'uniform sampler2D gridTex;', 'uniform float gridOpacity;', 'uniform float animIn;', _shaderChunks.FogParamsFrag, 'varying vec2 vUV;', 'varying vec2 gridUV;', 'varying vec2 vLocalUV;', 'void main() {',
// Cinema4D's COLLADA exporter flips the y-axis of the UV coordinates...
'vec2 uv = vec2( vUV.x, 1.0 + -vUV.y );', 'float triangle = texture2D( triangleTex, fract( vLocalUV ) ).r;', 'if ( triangle >= animIn ) discard;', 'gl_FragColor = vec4( texture2D( terrainTex, uv ).rgb + ( texture2D( gridTex, gridUV ).rgb ) * gridOpacity, 1.0 );', _shaderChunks.FogFrag, '}'].join('\n');

},{"../core/colors":210,"./shader-chunks":230}],233:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * unlit-map-shader
 *
 * A basic shader that draws a single texture with no lighting. 
 * Used by the "first image" card in the rover introduction scene.
 */

var uniforms = exports.uniforms = {
	map: { type: 't' }
};

var vertexShader = exports.vertexShader = ['varying vec2 vUV;', 'void main() {', 'vUV = uv;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n');

var fragmentShader = exports.fragmentShader = ['uniform sampler2D map;', 'varying vec2 vUV;', 'void main() {', 'gl_FragColor = vec4( texture2D( map, vUV ).rgb, 1.0 );', '}'].join('\n');

},{}],234:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * uv-highpass-shader
 *
 * Solid color shader which discards all fragments below a given
 * uv.y value. Used by the POI marker rings.
 */

var uniforms = exports.uniforms = {
	cutoff: { value: 1 },
	color: { value: new THREE.Color(0xFFFFFF) }
};

var vertexShader = exports.vertexShader = ['varying float vUVY;', 'void main() {', 'vUVY = uv.y;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n');

var fragmentShader = exports.fragmentShader = ['uniform float cutoff;', 'uniform vec3 color;', 'varying float vUVY;', 'void main() {', 'if ( vUVY < 1.0 - cutoff ) discard;', 'gl_FragColor = vec4( color, 1.0 );', '}'].join('\n');

},{}],235:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ExitButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the 'License');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an 'AS IS' BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/**
 * exit-button
 *
 */

var _platformUtils = require('../utils/platform-utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var screenfull = require('screenfull');

var SHOW_DELAY_MS = 10;

var ExitButton = exports.ExitButton = function () {
	function ExitButton() {
		var _this = this;

		_classCallCheck(this, ExitButton);

		this.el = document.querySelector('#exitButton');

		// Reload the page when the exit button is clicked. This will
		// return the user to the splash page.
		this.el.addEventListener('click', function () {
			_this.hide();
		});

		this.scene = document.querySelector('a-scene');
		this.scene.addEventListener('enter-360', function () {
			return _this.show();
		});
		this.scene.addEventListener('enter-vr', function () {
			return _this.show();
		});

		// Hide the button when VR is exited
		this.scene.addEventListener('exit-vr', function () {
			return _this.hide();
		});
	}

	_createClass(ExitButton, [{
		key: 'show',
		value: function show() {
			var _this2 = this;

			setTimeout(function () {
				var isMobile = _platformUtils.PlatformUtils.isMobile();
				var is360 = _platformUtils.PlatformUtils.is360();

				if (!isMobile || isMobile && is360) {
					_this2.el.classList.add('visible');
				}
			}, SHOW_DELAY_MS);
		}
	}, {
		key: 'hide',
		value: function hide() {

			var windowRef = window.location.href.split('?')[0];
			if (window.location !== windowRef) {
				window.location.href = windowRef;
			} else {
				window.location.reload(false);
			}
			this.el.classList.remove('visible');
		}
	}]);

	return ExitButton;
}();

},{"../utils/platform-utils":244,"screenfull":142}],236:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initSplash = initSplash;

var _scene = require('../core/scene');

var _platformUtils = require('../utils/platform-utils');

var _exitButton = require('./exit-button');

var screenfull = require('screenfull'); // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

/**
 * splash
 *
 */

var qs = require('qs');

var SVG_360 = '<svg class="svg360" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><style type="text/css"> .icon360{fill:#846852;}.st1{fill:none;}</style><path class="icon360" d="M12,7C6.5,7,2,9.2,2,12c0,2.2,2.9,4.1,7,4.8V20l4-4l-4-4v2.7c-3.2-0.6-5-1.9-5-2.7c0-1.1,3-3,8-3s8,1.9,8,3c0,0.7-1.5,1.9-4,2.5v2.1c3.5-0.8,6-2.5,6-4.6C22,9.2,17.5,7,12,7z"/><path class="st1" d="M0,0h24v24H0V0z"/></svg>';

function initSplash() {

    var container = document.body;
    var aScene = container.querySelector('a-scene');
    var about = document.querySelector('.about');
    var footer = document.querySelector('.footer');
    var splash = document.querySelector('.splash');

    var parsedQueryString = qs.parse(location.search.slice(1));

    // Button for when VR is available but user might want 360 instead
    var tryItIn360 = document.getElementById('try-it-in-360');

    // Container for the buttons
    var enterVRContainer = splash.querySelector('#enter-vr-container');

    // scene loaded is automatically resolved after a setTimeout
    var aSceneLoaded = new Promise(function (resolve) {
        return setTimeout(function () {
            return resolve();
        });
    });

    var enterVR = document.createElement('button');
    enterVR.classList.add('webvr-ui-button');
    enterVR.innerHTML = '<div class="webvr-ui-title" style="display: initial;">TEST</div>';

    // create the Enter 360 Button that is full-size and replaces Enter VR
    function createEnter360Button() {
        enterVRContainer.innerHTML = '';
        var enter360 = document.createElement('button');
        enter360.classList.add('webvr-ui-button');
        enter360.innerHTML = '<div class="webvr-ui-title" style="padding: 0;">LOADING</div>';
        enterVRContainer.appendChild(enter360);
        enter360.addEventListener('click', function () {
            playVideo();
            hideSplash();
            onEnter360();
        });
        tryItIn360.style.display = 'none';
        return enter360;
    }

    function hideSplash() {
        [splash, footer, about].forEach(function (el) {
            return el.classList.add('invisible');
        });
    }

    function showSplash() {
        [splash, footer, about].forEach(function (el) {
            return el.classList.remove('invisible');
        });
    }

    function playVideo() {
        var name = _platformUtils.PlatformUtils.isMp4Supported() ? 'intro-video-mp4' : 'intro-video-webm';
        var el = document.getElementById(name);
        if (el) el.play();
    }

    // this can happen by "Enter 360" or "Try it in 360"
    function onEnter360() {
        aScene.play();
        aScene.emit('enter-360');
        sceneEntered('360');
    }

    function onEnterVR() {
        aScene.play();
        aScene.enterVR();
        sceneEntered('vr');
    }

    if (_platformUtils.PlatformUtils.isTablet()) {
        createEnter360Button();
    }

    // Check WebXR support to determine VR availability
    function checkWebXRSupport() {
        if (navigator.xr) {
            return navigator.xr.isSessionSupported('immersive-vr');
        }
        return Promise.resolve(false);
    }

    // Insert the VR button (shows "LOADING" until we know support)
    if (!_platformUtils.PlatformUtils.isTablet()) {
        enterVRContainer.insertBefore(enterVR, enterVRContainer.firstChild);
    }

    // Attach click handler for VR entry
    enterVR.addEventListener('click', function () {
        playVideo();
        enterVR.innerHTML = '<div class="webvr-ui-title" style="display: initial;">WAITING</div>';
    }, true);

    function tryToMakeFullScreen() {
        if (screenfull.enabled) {
            screenfull.request();
        }
    }

    aSceneLoaded
    //load the scene, say "loading"
    .then(function () {

        // dont run the aScene in the background
        var isLinkFromiOS = parsedQueryString.site;
        if (!isLinkFromiOS) aScene.pause();

        // add the loaded events
        tryItIn360.addEventListener('click', function () {
            // tryToMakeFullScreen();
            playVideo();
            hideSplash();
            onEnter360();
        });
    })

    // change text to "Enter **"
    .then(function () {
        // audio and everything is loaded now
        enterVRContainer.classList.add('ready');
        var always = function always() {
            // if WebXR is available and its not polyfill on a tablet
            if (vrSupported && !(_platformUtils.PlatformUtils.isMobile() && _platformUtils.PlatformUtils.isTablet())) {
                enterVR.innerHTML = '<div class="webvr-ui-title" style="display: initial;">ENTER VR</div>';
                enterVR.onclick = function () {
                    playVideo();
                    hideSplash();
                    onEnterVR();
                };
            } else if (_platformUtils.PlatformUtils.isTablet() || !vrSupported) {
                document.querySelector('.webvr-ui-title').innerHTML = SVG_360 + '<span>ENTER 360</span>';
                document.querySelector('.webvr-ui-title').classList.add('mode360');
            }
        };
        var vrSupported = false;
        return checkWebXRSupport().then(function (supported) {
            vrSupported = supported;
            if (!supported && !_platformUtils.PlatformUtils.isTablet()) {
                // VR not available on non-tablet — show 360 fallback
                enterVRContainer.innerHTML = '';
                createEnter360Button();
            }
        }, always).then(always);
    }).catch(console.error.bind(console));

    function sceneEntered(modeType) {

        // HACK to get the scene ready AFTER dom is ready on Mozilla
        setTimeout(function () {
            // Pulls site information from query string.
            // Defaults to landing_site.
            var site = parsedQueryString.site ? parsedQueryString.site : 'landing_site';

            _scene.Scene.init(parsedQueryString);
            _scene.Scene.setModeType(modeType);
            _scene.Scene.loadSite(site);

            // gets controller type using
            _platformUtils.PlatformUtils.getControllerType(function (clientType, info) {
                _scene.Scene.setControllerType(clientType, info);
                _scene.Scene.tryAddingController(info);
            });

            ga('send', 'event', 'UI', 'enter', modeType);
        });
    }

    /*
     * If in mobile ios, site param is added to url when clicking on the map
     * the below code bypasses the splash screen
     */
    var isLinkFromiOS = parsedQueryString.site;
    if (isLinkFromiOS && parsedQueryString.modeType === 'vr') {
        hideSplash();

        var overlay = document.createElement('div');
        overlay.setAttribute('style', 'z-index:1000; background-color:#black; position: absolute; top:0px; left:0px; width:100%; height:100%;');
        document.body.appendChild(overlay);
        overlay.addEventListener('click', function () {
            onEnterVR();
            overlay.parentNode.removeChild(overlay);
        });
    } else if (isLinkFromiOS && parsedQueryString.modeType === '360') {
        hideSplash();
        onEnter360();
    }

    new _exitButton.ExitButton();
    return splash;
}

},{"../core/scene":212,"../utils/platform-utils":244,"./exit-button":235,"qs":138,"screenfull":142}],237:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Modified from https://github.com/Flafla2/Vive-Teleporter
 */

var UP_VECTOR = new THREE.Vector3(0, 1, 0);
var RAD_45 = Math.PI / 4;

var BezierEasing = require('bezier-easing');
var SHOW_EASING = BezierEasing(0.66, 0, 0.33, 1);

var ParabolicPointer = exports.ParabolicPointer = function () {
	function ParabolicPointer() {
		_classCallCheck(this, ParabolicPointer);

		this.velocityFwd = new THREE.Vector3();
		this.vectorRight = new THREE.Vector3();
		this.vectorCross = new THREE.Vector3();
		this.tempVectorA = new THREE.Vector3();
		this.normal = new THREE.Vector3();
		this.deriv = new THREE.Vector3();
		this.next = new THREE.Vector3();
		this.last = new THREE.Vector3();
		this.hit = new THREE.Vector3();

		this.raycaster = new THREE.Raycaster();
		this.direction = new THREE.Vector3();
	}

	_createClass(ParabolicPointer, [{
		key: 'parabola1D',
		value: function parabola1D(p, v, a, t) {
			return p + v * t + 0.5 * a * t * t;
		}
	}, {
		key: 'parabolaDeriv1D',
		value: function parabolaDeriv1D(v, a, t) {
			return v + a * t;
		}
	}, {
		key: 'parabola3D',
		value: function parabola3D(p, v, a, t, result) {
			result = result || new THREE.Vector3();
			result.x = this.parabola1D(p.x, v.x, a.x, t);
			result.y = this.parabola1D(p.y, v.y, a.y, t);
			result.z = this.parabola1D(p.z, v.z, a.z, t);
			return result;
		}
	}, {
		key: 'parabolaDeriv3D',
		value: function parabolaDeriv3D(v, a, t, result) {
			result = result || new THREE.Vector3();
			result.x = this.parabolaDeriv1D(v.x, a.x, t);
			result.y = this.parabolaDeriv1D(v.y, a.y, t);
			result.z = this.parabolaDeriv1D(v.z, a.z, t);
			return result;
		}
	}, {
		key: 'getInitialVelocity1D',
		value: function getInitialVelocity1D(th, y, a, x) {
			// var yxtan = y - x * Math.tan( th );
			// var b = x * Math.sqrt( -a * yxtan );
			// var c = Math.sqrt( 2 ) * Math.cos( th ) * yxtan;
			// return b / c;
			// var b = 0.5 * a * d * d;
			// var c = d * Math.tan( th ) + y;
			// return ( 1 / Math.cos( th ) ) * Math.sqrt( b / c );
			var ct = Math.cos(th);
			var st = Math.sin(th);
			var b = 2 * y * a * ct * ct;
			var c = 2 * a * x * ct * st;
			return a * x / Math.sqrt(Math.abs(b + c));
		}
	}, {
		key: 'calcCurve',
		value: function calcCurve(start, end, pts) {
			pts.push(start.clone());

			var midpoint = new THREE.Vector3();
			var d = start.distanceTo(end);
			var y = 0.2 + d / 35;
			var ease = BezierEasing(0, 0, 1 - Math.min(d / 35, 0.7), 1);

			for (var i = 0, t = 0; i < 50; i++) {
				t = i / 50;
				midpoint.lerpVectors(start, end, t);
				midpoint.y += Math.sin(ease(t) * Math.PI) * y;
				pts.push(midpoint.clone());
			}
		}
	}, {
		key: 'calcParabolicCurve',
		value: function calcParabolicCurve(p, v, a, dist, n, mesh, pts) {
			pts.push(p.clone());

			this.last.copy(p);

			for (var i = 0, t = 0; i < n; i++) {
				this.parabolaDeriv3D(v, a, t, this.deriv);
				t += dist / this.deriv.length();
				this.parabola3D(p, v, a, t, this.next);

				this.direction.subVectors(this.next, this.last);
				this.direction.normalize();

				this.raycaster.far = this.next.distanceTo(this.last);
				this.raycaster.set(this.last, this.direction);

				var intersections = this.raycaster.intersectObject(mesh, true);

				if (intersections.length) {
					var intersection = intersections[0];
					pts.push(intersection.point.clone());
					return intersection;
				} else {
					pts.push(this.next.clone());
				}

				this.last.copy(this.next);
			}

			return null;
		}
	}, {
		key: 'calcParabolaParameters',
		value: function calcParabolaParameters(velocity) {
			this.velocityFwd.copy(velocity);
			this.velocityFwd.projectOnPlane(UP_VECTOR);

			var angle = this.velocityFwd.angleTo(velocity);

			this.vectorRight.crossVectors(UP_VECTOR, this.velocityFwd);
			this.vectorCross.crossVectors(this.velocityFwd, velocity);

			if (this.vectorRight.dot(this.vectorCross) > 0) {
				angle *= -1;
			}

			return angle;
		}
	}]);

	return ParabolicPointer;
}();

},{"bezier-easing":13}],238:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Modified to allow animated dashed line rendering

var MeshLineMaterial = exports.MeshLineMaterial = function MeshLineMaterial(parameters) {

	var vertexShaderSource = ['precision mediump float;', '', 'attribute vec3 position;', 'attribute vec3 previous;', 'attribute vec3 next;', 'attribute float side;', 'attribute float width;', 'attribute vec2 uv;', 'attribute float counters;', '', 'uniform mat4 projectionMatrix;', 'uniform mat4 modelViewMatrix;', 'uniform vec2 resolution;', 'uniform float lineWidth;', 'uniform vec3 color;', 'uniform float opacity;', 'uniform float sizeAttenuation;', '', 'varying vec2 vUV;', 'varying vec4 vColor;', 'varying float vCounters;', '', 'vec2 fix( vec4 i, float aspect ) {', '', '    vec2 res = i.xy / i.w;', '    res.x *= aspect;', '	 vCounters = counters;', '    return res;', '', '}', '', 'void main() {', '', '    float aspect = resolution.x / resolution.y;', '	 float pixelWidthRatio = 1. / (resolution.x * projectionMatrix[0][0]);', '', '    vColor = vec4( color, opacity );', '    vUV = uv;', '', '    mat4 m = projectionMatrix * modelViewMatrix;', '    vec4 finalPosition = m * vec4( position, 1.0 );', '    vec4 prevPos = m * vec4( previous, 1.0 );', '    vec4 nextPos = m * vec4( next, 1.0 );', '', '    vec2 currentP = fix( finalPosition, aspect );', '    vec2 prevP = fix( prevPos, aspect );', '    vec2 nextP = fix( nextPos, aspect );', '', '	 float pixelWidth = finalPosition.w * pixelWidthRatio;', '    float w = 1.8 * pixelWidth * lineWidth * width;', '', '    if( sizeAttenuation == 1. ) {', '        w = 1.8 * lineWidth * width;', '    }', '', '    vec2 dir;', '    if( nextP == currentP ) dir = normalize( currentP - prevP );', '    else if( prevP == currentP ) dir = normalize( nextP - currentP );', '    else {', '        vec2 dir1 = normalize( currentP - prevP );', '        vec2 dir2 = normalize( nextP - currentP );', '        dir = normalize( dir1 + dir2 );', '', '        vec2 perp = vec2( -dir1.y, dir1.x );', '        vec2 miter = vec2( -dir.y, dir.x );', '        //w = clamp( w / dot( miter, perp ), 0., 4. * lineWidth * width );', '', '    }', '', '    vec2 normal = vec2( -dir.y, dir.x );', '    normal.x /= aspect;', '    normal *= 0.5 * w;', '', '    vec4 offset = vec4( normal * side, 0.0, 1.0 );', '    finalPosition.xy += offset.xy;', '', '    gl_Position = finalPosition;', '', '}'];

	var fragmentShaderSource = ['#extension GL_OES_standard_derivatives : enable', '', 'precision mediump float;', '', 'uniform float visibility;', 'uniform float alphaTest;', 'uniform vec2 repeat;', 'uniform float dashSpacing;', 'uniform float dashSize;', 'uniform vec2 dashAxis;', 'uniform float t;', '', 'varying vec2 vUV;', 'varying vec4 vColor;', 'varying float vCounters;', '', 'void main() {', '', '    vec4 c = vColor;', '	 if( c.a < alphaTest ) discard;', '	 float uv = length( vUV * dashAxis );', '	 float d = fract( uv * ( 1.0 / dashSpacing ) - t );', ' 	 if ( d < 1.0 - dashSize ) discard;', '    gl_FragColor = vec4( c.rgb, 1.0 );', '	 gl_FragColor.a *= step(vCounters,visibility);', '}'];

	function check(v, d) {
		if (v === undefined) return d;
		return v;
	}

	THREE.Material.call(this);

	parameters = parameters || {};

	this.lineWidth = check(parameters.lineWidth, 1);
	this.color = check(parameters.color, new THREE.Color(0xffffff));
	this.opacity = check(parameters.opacity, 1);
	this.resolution = check(parameters.resolution, new THREE.Vector2(1, 1));
	this.sizeAttenuation = check(parameters.sizeAttenuation, 1);
	this.visibility = check(parameters.visibility, 1);
	this.alphaTest = check(parameters.alphaTest, 0);
	this.repeat = check(parameters.repeat, new THREE.Vector2(1, 1));
	this.dashSpacing = check(parameters.dashSpacing, 0.05);
	this.dashSize = check(parameters.dashSize, 0.5);
	this.dashAxis = check(parameters.dashAxis, new THREE.Vector2(1, 0));
	this.t = check(parameters.t, 0);

	var material = new THREE.RawShaderMaterial({
		uniforms: {
			lineWidth: { type: 'f', value: this.lineWidth },
			color: { type: 'c', value: this.color },
			opacity: { type: 'f', value: this.opacity },
			resolution: { type: 'v2', value: this.resolution },
			sizeAttenuation: { type: 'f', value: this.sizeAttenuation },
			visibility: { type: 'f', value: this.visibility },
			alphaTest: { type: 'f', value: this.alphaTest },
			repeat: { type: 'v2', value: this.repeat },
			dashSpacing: { type: 'f', value: this.dashSpacing },
			dashSize: { type: 'f', value: this.dashSize },
			dashAxis: { type: 'v2', value: this.dashAxis },
			t: { type: 'f', value: this.t }
		},
		vertexShader: vertexShaderSource.join('\r\n'),
		fragmentShader: fragmentShaderSource.join('\r\n')
	});

	delete parameters.lineWidth;
	delete parameters.color;
	delete parameters.opacity;
	delete parameters.resolution;
	delete parameters.sizeAttenuation;
	delete parameters.alphaTest;
	delete parameters.repeat;
	delete parameters.dashSpacing;
	delete parameters.dashSize;
	delete parameters.dashAxis;
	delete parameters.t;

	material.type = 'MeshLineMaterial';

	material.setValues(parameters);

	return material;
};

MeshLineMaterial.prototype = Object.create(THREE.Material.prototype);
MeshLineMaterial.prototype.constructor = MeshLineMaterial;

MeshLineMaterial.prototype.copy = function (source) {

	THREE.Material.prototype.copy.call(this, source);

	this.lineWidth = source.lineWidth;
	this.color.copy(source.color);
	this.opacity = source.opacity;
	this.resolution.copy(source.resolution);
	this.sizeAttenuation = source.sizeAttenuation;
	this.visibility = source.visibility;
	this.alphaTest = source.alphaTest;
	this.repeat.copy(source.repeat);
	this.dashSpacing = source.dashSpacing;
	this.dashSize = source.dashSize;
	this.dashAxis.copy(source.dashAxis);
	this.t = source.t;

	return this;
};

},{}],239:[function(require,module,exports){
'use strict';

;(function () {

	"use strict";

	var root = window;

	var has_require = typeof require !== 'undefined';

	var THREE = root.THREE; // || has_require && require('three')
	if (!THREE) throw new Error('MeshLine requires three.js');

	function MeshLine() {

		this.positions = [];

		this.previous = [];
		this.next = [];
		this.side = [];
		this.width = [];
		this.indices_array = [];
		this.uvs = [];
		this.counters = [];
		this.geometry = new THREE.BufferGeometry();

		this.widthCallback = null;
	}

	MeshLine.prototype.setGeometry = function (g, c) {

		this.widthCallback = c;

		this.positions = [];
		this.counters = [];

		if (typeof THREE.Geometry !== 'undefined' && g instanceof THREE.Geometry) {
			for (var j = 0; j < g.vertices.length; j++) {
				var v = g.vertices[j];
				var c = j / g.vertices.length;
				this.positions.push(v.x, v.y, v.z);
				this.positions.push(v.x, v.y, v.z);
				this.counters.push(c);
				this.counters.push(c);
			}
		}

		if (g instanceof THREE.BufferGeometry) {
			var pos = g.attributes.position;
			if (pos) {
				var l = pos.array.length / 3;
				for (var j = 0; j < l; j++) {
					var c = j / l;
					this.positions.push(pos.array[j * 3], pos.array[j * 3 + 1], pos.array[j * 3 + 2]);
					this.positions.push(pos.array[j * 3], pos.array[j * 3 + 1], pos.array[j * 3 + 2]);
					this.counters.push(c);
					this.counters.push(c);
				}
			}
		}

		if (g instanceof Float32Array || g instanceof Array) {
			for (var j = 0; j < g.length; j += 3) {
				var c = j / g.length;
				this.positions.push(g[j], g[j + 1], g[j + 2]);
				this.positions.push(g[j], g[j + 1], g[j + 2]);
				this.counters.push(c);
				this.counters.push(c);
			}
		}

		this.process();
	};

	MeshLine.prototype.compareV3 = function (a, b) {

		var aa = a * 6;
		var ab = b * 6;
		return this.positions[aa] === this.positions[ab] && this.positions[aa + 1] === this.positions[ab + 1] && this.positions[aa + 2] === this.positions[ab + 2];
	};

	MeshLine.prototype.copyV3 = function (a) {

		var aa = a * 6;
		return [this.positions[aa], this.positions[aa + 1], this.positions[aa + 2]];
	};

	MeshLine.prototype.process = function () {

		var l = this.positions.length / 6;

		this.previous = [];
		this.next = [];
		this.side = [];
		this.width = [];
		this.indices_array = [];
		this.uvs = [];

		for (var j = 0; j < l; j++) {
			this.side.push(1);
			this.side.push(-1);
		}

		var w;
		for (var j = 0; j < l; j++) {
			if (this.widthCallback) w = this.widthCallback(j / (l - 1));else w = 1;
			this.width.push(w);
			this.width.push(w);
		}

		for (var j = 0; j < l; j++) {
			this.uvs.push(j / (l - 1), 0);
			this.uvs.push(j / (l - 1), 1);
		}

		var v;

		if (this.compareV3(0, l - 1)) {
			v = this.copyV3(l - 2);
		} else {
			v = this.copyV3(0);
		}
		this.previous.push(v[0], v[1], v[2]);
		this.previous.push(v[0], v[1], v[2]);
		for (var j = 0; j < l - 1; j++) {
			v = this.copyV3(j);
			this.previous.push(v[0], v[1], v[2]);
			this.previous.push(v[0], v[1], v[2]);
		}

		for (var j = 1; j < l; j++) {
			v = this.copyV3(j);
			this.next.push(v[0], v[1], v[2]);
			this.next.push(v[0], v[1], v[2]);
		}

		if (this.compareV3(l - 1, 0)) {
			v = this.copyV3(1);
		} else {
			v = this.copyV3(l - 1);
		}
		this.next.push(v[0], v[1], v[2]);
		this.next.push(v[0], v[1], v[2]);

		for (var j = 0; j < l - 1; j++) {
			var n = j * 2;
			this.indices_array.push(n, n + 1, n + 2);
			this.indices_array.push(n + 2, n + 1, n + 3);
		}

		if (!this.attributes) {
			this.attributes = {
				position: new THREE.BufferAttribute(new Float32Array(this.positions), 3),
				previous: new THREE.BufferAttribute(new Float32Array(this.previous), 3),
				next: new THREE.BufferAttribute(new Float32Array(this.next), 3),
				side: new THREE.BufferAttribute(new Float32Array(this.side), 1),
				width: new THREE.BufferAttribute(new Float32Array(this.width), 1),
				uv: new THREE.BufferAttribute(new Float32Array(this.uvs), 2),
				index: new THREE.BufferAttribute(new Uint16Array(this.indices_array), 1),
				counters: new THREE.BufferAttribute(new Float32Array(this.counters), 1)
			};
		} else {
			this.attributes.position.copyArray(new Float32Array(this.positions));
			this.attributes.position.needsUpdate = true;
			this.attributes.previous.copyArray(new Float32Array(this.previous));
			this.attributes.previous.needsUpdate = true;
			this.attributes.next.copyArray(new Float32Array(this.next));
			this.attributes.next.needsUpdate = true;
			this.attributes.side.copyArray(new Float32Array(this.side));
			this.attributes.side.needsUpdate = true;
			this.attributes.width.copyArray(new Float32Array(this.width));
			this.attributes.width.needsUpdate = true;
			this.attributes.uv.copyArray(new Float32Array(this.uvs));
			this.attributes.uv.needsUpdate = true;
			this.attributes.index.copyArray(new Uint16Array(this.indices_array));
			this.attributes.index.needsUpdate = true;
		}

		this.geometry.setAttribute('position', this.attributes.position);
		this.geometry.setAttribute('previous', this.attributes.previous);
		this.geometry.setAttribute('next', this.attributes.next);
		this.geometry.setAttribute('side', this.attributes.side);
		this.geometry.setAttribute('width', this.attributes.width);
		this.geometry.setAttribute('uv', this.attributes.uv);
		this.geometry.setAttribute('counters', this.attributes.counters);

		this.geometry.setIndex(this.attributes.index);
	};

	function memcpy(src, srcOffset, dst, dstOffset, length) {
		var i;

		src = src.subarray || src.slice ? src : src.buffer;
		dst = dst.subarray || dst.slice ? dst : dst.buffer;

		src = srcOffset ? src.subarray ? src.subarray(srcOffset, length && srcOffset + length) : src.slice(srcOffset, length && srcOffset + length) : src;

		if (dst.set) {
			dst.set(src, dstOffset);
		} else {
			for (i = 0; i < src.length; i++) {
				dst[i + dstOffset] = src[i];
			}
		}

		return dst;
	}

	/**
  * Fast method to advance the line by one position.  The oldest position is removed.
  * @param position
  */
	MeshLine.prototype.advance = function (position) {

		var positions = this.attributes.position.array;
		var previous = this.attributes.previous.array;
		var next = this.attributes.next.array;
		var l = positions.length;

		// PREVIOUS
		memcpy(positions, 0, previous, 0, l);

		// POSITIONS
		memcpy(positions, 6, positions, 0, l - 6);

		positions[l - 6] = position.x;
		positions[l - 5] = position.y;
		positions[l - 4] = position.z;
		positions[l - 3] = position.x;
		positions[l - 2] = position.y;
		positions[l - 1] = position.z;

		// NEXT
		memcpy(positions, 6, next, 0, l - 6);

		next[l - 6] = position.x;
		next[l - 5] = position.y;
		next[l - 4] = position.z;
		next[l - 3] = position.x;
		next[l - 2] = position.y;
		next[l - 1] = position.z;

		this.attributes.position.needsUpdate = true;
		this.attributes.previous.needsUpdate = true;
		this.attributes.next.needsUpdate = true;
	};

	function MeshLineMaterial(parameters) {

		var vertexShaderSource = ['precision highp float;', '', 'attribute vec3 position;', 'attribute vec3 previous;', 'attribute vec3 next;', 'attribute float side;', 'attribute float width;', 'attribute vec2 uv;', 'attribute float counters;', '', 'uniform mat4 projectionMatrix;', 'uniform mat4 modelViewMatrix;', 'uniform vec2 resolution;', 'uniform float lineWidth;', 'uniform vec3 color;', 'uniform float opacity;', 'uniform float near;', 'uniform float far;', 'uniform float sizeAttenuation;', '', 'varying vec2 vUV;', 'varying vec4 vColor;', 'varying float vCounters;', '', 'vec2 fix( vec4 i, float aspect ) {', '', '    vec2 res = i.xy / i.w;', '    res.x *= aspect;', '	 vCounters = counters;', '    return res;', '', '}', '', 'void main() {', '', '    float aspect = resolution.x / resolution.y;', '	 float pixelWidthRatio = 1. / (resolution.x * projectionMatrix[0][0]);', '', '    vColor = vec4( color, opacity );', '    vUV = uv;', '', '    mat4 m = projectionMatrix * modelViewMatrix;', '    vec4 finalPosition = m * vec4( position, 1.0 );', '    vec4 prevPos = m * vec4( previous, 1.0 );', '    vec4 nextPos = m * vec4( next, 1.0 );', '', '    vec2 currentP = fix( finalPosition, aspect );', '    vec2 prevP = fix( prevPos, aspect );', '    vec2 nextP = fix( nextPos, aspect );', '', '	 float pixelWidth = finalPosition.w * pixelWidthRatio;', '    float w = 1.8 * pixelWidth * lineWidth * width;', '', '    if( sizeAttenuation == 1. ) {', '        w = 1.8 * lineWidth * width;', '    }', '', '    vec2 dir;', '    if( nextP == currentP ) dir = normalize( currentP - prevP );', '    else if( prevP == currentP ) dir = normalize( nextP - currentP );', '    else {', '        vec2 dir1 = normalize( currentP - prevP );', '        vec2 dir2 = normalize( nextP - currentP );', '        dir = normalize( dir1 + dir2 );', '', '        vec2 perp = vec2( -dir1.y, dir1.x );', '        vec2 miter = vec2( -dir.y, dir.x );', '        //w = clamp( w / dot( miter, perp ), 0., 4. * lineWidth * width );', '', '    }', '', '    //vec2 normal = ( cross( vec3( dir, 0. ), vec3( 0., 0., 1. ) ) ).xy;', '    vec2 normal = vec2( -dir.y, dir.x );', '    normal.x /= aspect;', '    normal *= .5 * w;', '', '    vec4 offset = vec4( normal * side, 0.0, 1.0 );', '    finalPosition.xy += offset.xy;', '', '    gl_Position = finalPosition;', '', '}'];

		var fragmentShaderSource = ['#extension GL_OES_standard_derivatives : enable', 'precision mediump float;', '', 'uniform sampler2D map;', 'uniform sampler2D alphaMap;', 'uniform float useMap;', 'uniform float useAlphaMap;', 'uniform float useDash;', 'uniform vec2 dashArray;', 'uniform float visibility;', 'uniform float alphaTest;', 'uniform vec2 repeat;', '', 'varying vec2 vUV;', 'varying vec4 vColor;', 'varying float vCounters;', '', 'void main() {', '', '    vec4 c = vColor;', '    if( useMap == 1. ) c *= texture2D( map, vUV * repeat );', '    if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV * repeat ).a;', '	 if( c.a < alphaTest ) discard;', '	 if( useDash == 1. ){', '	 	 ', '	 }', '    gl_FragColor = c;', '	 gl_FragColor.a *= step(vCounters,visibility);', '}'];

		function check(v, d) {
			if (v === undefined) return d;
			return v;
		}

		THREE.Material.call(this);

		parameters = parameters || {};

		this.lineWidth = check(parameters.lineWidth, 1);
		this.map = check(parameters.map, null);
		this.useMap = check(parameters.useMap, 0);
		this.alphaMap = check(parameters.alphaMap, null);
		this.useAlphaMap = check(parameters.useAlphaMap, 0);
		this.color = check(parameters.color, new THREE.Color(0xffffff));
		this.opacity = check(parameters.opacity, 1);
		this.resolution = check(parameters.resolution, new THREE.Vector2(1, 1));
		this.sizeAttenuation = check(parameters.sizeAttenuation, 1);
		this.near = check(parameters.near, 1);
		this.far = check(parameters.far, 1);
		this.dashArray = check(parameters.dashArray, []);
		this.useDash = this.dashArray !== [] ? 1 : 0;
		this.visibility = check(parameters.visibility, 1);
		this.alphaTest = check(parameters.alphaTest, 0);
		this.repeat = check(parameters.repeat, new THREE.Vector2(1, 1));

		var material = new THREE.RawShaderMaterial({
			uniforms: {
				lineWidth: { type: 'f', value: this.lineWidth },
				map: { type: 't', value: this.map },
				useMap: { type: 'f', value: this.useMap },
				alphaMap: { type: 't', value: this.alphaMap },
				useAlphaMap: { type: 'f', value: this.useAlphaMap },
				color: { type: 'c', value: this.color },
				opacity: { type: 'f', value: this.opacity },
				resolution: { type: 'v2', value: this.resolution },
				sizeAttenuation: { type: 'f', value: this.sizeAttenuation },
				near: { type: 'f', value: this.near },
				far: { type: 'f', value: this.far },
				dashArray: { type: 'v2', value: new THREE.Vector2(this.dashArray[0], this.dashArray[1]) },
				useDash: { type: 'f', value: this.useDash },
				visibility: { type: 'f', value: this.visibility },
				alphaTest: { type: 'f', value: this.alphaTest },
				repeat: { type: 'v2', value: this.repeat }
			},
			vertexShader: vertexShaderSource.join('\r\n'),
			fragmentShader: fragmentShaderSource.join('\r\n')
		});

		delete parameters.lineWidth;
		delete parameters.map;
		delete parameters.useMap;
		delete parameters.alphaMap;
		delete parameters.useAlphaMap;
		delete parameters.color;
		delete parameters.opacity;
		delete parameters.resolution;
		delete parameters.sizeAttenuation;
		delete parameters.near;
		delete parameters.far;
		delete parameters.dashArray;
		delete parameters.visibility;
		delete parameters.alphaTest;
		delete parameters.repeat;

		material.type = 'MeshLineMaterial';

		material.setValues(parameters);

		return material;
	};

	MeshLineMaterial.prototype = Object.create(THREE.Material.prototype);
	MeshLineMaterial.prototype.constructor = MeshLineMaterial;

	MeshLineMaterial.prototype.copy = function (source) {

		THREE.Material.prototype.copy.call(this, source);

		this.lineWidth = source.lineWidth;
		this.map = source.map;
		this.useMap = source.useMap;
		this.alphaMap = source.alphaMap;
		this.useAlphaMap = source.useAlphaMap;
		this.color.copy(source.color);
		this.opacity = source.opacity;
		this.resolution.copy(source.resolution);
		this.sizeAttenuation = source.sizeAttenuation;
		this.near = source.near;
		this.far = source.far;
		this.dashArray.copy(source.dashArray);
		this.useDash = source.useDash;
		this.visibility = source.visibility;
		this.alphaTest = source.alphaTest;
		this.repeat.copy(source.repeat);

		return this;
	};

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = { MeshLine: MeshLine, MeshLineMaterial: MeshLineMaterial };
		}
		exports.MeshLine = MeshLine;
		exports.MeshLineMaterial = MeshLineMaterial;
	} else {
		root.MeshLine = MeshLine;
		root.MeshLineMaterial = MeshLineMaterial;
	}
}).call(undefined);

},{}],240:[function(require,module,exports){
// Copyright 2016 The Draco Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';

// |dracoPath| sets the path for the Draco decoder source files. The default
// path is "./". If |dracoDecoderType|.type is set to "js", then DRACOLoader
// will load the Draco JavaScript decoder.

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

THREE.DRACOLoader = function (dracoPath, dracoDecoderType, manager) {
  this.timeLoaded = 0;
  this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
  this.materials = null;
  this.verbosity = 0;
  this.attributeOptions = {};
  this.dracoDecoderType = dracoDecoderType !== undefined ? dracoDecoderType : {};
  this.drawMode = 0; // THREE.TrianglesDrawMode (deprecated/removed in r125+)
  this.dracoSrcPath = 'third_party/draco/';
  THREE.DRACOLoader.loadDracoDecoder(this);
};

THREE.DRACOLoader.prototype = {

  constructor: THREE.DRACOLoader,

  load: function load(url, onLoad, onProgress, onError) {
    var scope = this;
    var loader = new THREE.FileLoader(scope.manager);
    loader.setPath(this.path);
    loader.setResponseType('arraybuffer');
    if (this.crossOrigin !== undefined) {
      loader.crossOrigin = this.crossOrigin;
    }
    loader.load(url, function (blob) {
      scope.decodeDracoFile(blob, onLoad);
    }, onProgress, onError);
  },

  setPath: function setPath(value) {
    this.path = value;
  },

  setCrossOrigin: function setCrossOrigin(value) {
    this.crossOrigin = value;
  },

  setVerbosity: function setVerbosity(level) {
    this.verbosity = level;
  },

  /**
   *  Sets desired mode for generated geometry indices.
   *  Can be either:
   *      THREE.TrianglesDrawMode
   *      THREE.TriangleStripDrawMode
   */
  setDrawMode: function setDrawMode(drawMode) {
    this.drawMode = drawMode;
  },

  /**
   * Skips dequantization for a specific attribute.
   * |attributeName| is the THREE.js name of the given attribute type.
   * The only currently supported |attributeName| is 'position', more may be
   * added in future.
   */
  setSkipDequantization: function setSkipDequantization(attributeName, skip) {
    var skipDequantization = true;
    if (typeof skip !== 'undefined') skipDequantization = skip;
    this.getAttributeOptions(attributeName).skipDequantization = skipDequantization;
  },

  decodeDracoFile: function decodeDracoFile(rawBuffer, callback) {
    var scope = this;
    THREE.DRACOLoader.getDecoder(this, function (dracoDecoder) {
      scope.decodeDracoFileInternal(rawBuffer, dracoDecoder, callback);
    });
  },

  decodeDracoFileInternal: function decodeDracoFileInternal(rawBuffer, dracoDecoder, callback) {
    /*
     * Here is how to use Draco Javascript decoder and get the geometry.
     */
    var buffer = new dracoDecoder.DecoderBuffer();
    buffer.Init(new Int8Array(rawBuffer), rawBuffer.byteLength);
    var decoder = new dracoDecoder.Decoder();

    /*
     * Determine what type is this file: mesh or point cloud.
     */
    var geometryType = decoder.GetEncodedGeometryType(buffer);
    if (geometryType == dracoDecoder.TRIANGULAR_MESH) {
      if (this.verbosity > 0) {
        console.log('Loaded a mesh.');
      }
    } else if (geometryType == dracoDecoder.POINT_CLOUD) {
      if (this.verbosity > 0) {
        console.log('Loaded a point cloud.');
      }
    } else {
      var errorMsg = 'THREE.DRACOLoader: Unknown geometry type.';
      console.error(errorMsg);
      throw new Error(errorMsg);
    }
    callback(this.convertDracoGeometryTo3JS(dracoDecoder, decoder, geometryType, buffer));
  },

  convertDracoGeometryTo3JS: function convertDracoGeometryTo3JS(dracoDecoder, decoder, geometryType, buffer) {
    if (this.getAttributeOptions('position').skipDequantization === true) {
      decoder.SkipAttributeTransform(dracoDecoder.POSITION);
    }
    var dracoGeometry;
    var decodingStatus;
    var start_time = performance.now();
    if (geometryType === dracoDecoder.TRIANGULAR_MESH) {
      dracoGeometry = new dracoDecoder.Mesh();
      decodingStatus = decoder.DecodeBufferToMesh(buffer, dracoGeometry);
    } else {
      dracoGeometry = new dracoDecoder.PointCloud();
      decodingStatus = decoder.DecodeBufferToPointCloud(buffer, dracoGeometry);
    }
    if (!decodingStatus.ok() || dracoGeometry.ptr == 0) {
      var errorMsg = 'THREE.DRACOLoader: Decoding failed: ';
      errorMsg += decodingStatus.error_msg();
      console.error(errorMsg);
      dracoDecoder.destroy(decoder);
      dracoDecoder.destroy(dracoGeometry);
      throw new Error(errorMsg);
    }

    var decode_end = performance.now();
    dracoDecoder.destroy(buffer);
    /*
     * Example on how to retrieve mesh and attributes.
     */
    var numFaces, numPoints;
    var numVertexCoordinates, numTextureCoordinates, numColorCoordinates;
    var numAttributes;
    var numColorCoordinateComponents = 3;
    // For output basic geometry information.
    var geometryInfoStr;
    if (geometryType == dracoDecoder.TRIANGULAR_MESH) {
      numFaces = dracoGeometry.num_faces();
      if (this.verbosity > 0) {
        console.log('Number of faces loaded: ' + numFaces.toString());
      }
    } else {
      numFaces = 0;
    }
    numPoints = dracoGeometry.num_points();
    numVertexCoordinates = numPoints * 3;
    numTextureCoordinates = numPoints * 2;
    numColorCoordinates = numPoints * 3;
    numAttributes = dracoGeometry.num_attributes();
    if (this.verbosity > 0) {
      console.log('Number of points loaded: ' + numPoints.toString());
      console.log('Number of attributes loaded: ' + numAttributes.toString());
    }

    // Get position attribute. Must exists.
    var posAttId = decoder.GetAttributeId(dracoGeometry, dracoDecoder.POSITION);
    if (posAttId == -1) {
      var errorMsg = 'THREE.DRACOLoader: No position attribute found.';
      console.error(errorMsg);
      dracoDecoder.destroy(decoder);
      dracoDecoder.destroy(dracoGeometry);
      throw new Error(errorMsg);
    }
    var posAttribute = decoder.GetAttribute(dracoGeometry, posAttId);
    var posAttributeData = new dracoDecoder.DracoFloat32Array();
    decoder.GetAttributeFloatForAllPoints(dracoGeometry, posAttribute, posAttributeData);
    // Get color attributes if exists.
    var colorAttId = decoder.GetAttributeId(dracoGeometry, dracoDecoder.COLOR);
    var colAttributeData;
    if (colorAttId != -1) {
      if (this.verbosity > 0) {
        console.log('Loaded color attribute.');
      }
      var colAttribute = decoder.GetAttribute(dracoGeometry, colorAttId);
      if (colAttribute.num_components() === 4) {
        numColorCoordinates = numPoints * 4;
        numColorCoordinateComponents = 4;
      }
      colAttributeData = new dracoDecoder.DracoFloat32Array();
      decoder.GetAttributeFloatForAllPoints(dracoGeometry, colAttribute, colAttributeData);
    }

    // Get normal attributes if exists.
    var normalAttId = decoder.GetAttributeId(dracoGeometry, dracoDecoder.NORMAL);
    var norAttributeData;
    if (normalAttId != -1) {
      if (this.verbosity > 0) {
        console.log('Loaded normal attribute.');
      }
      var norAttribute = decoder.GetAttribute(dracoGeometry, normalAttId);
      norAttributeData = new dracoDecoder.DracoFloat32Array();
      decoder.GetAttributeFloatForAllPoints(dracoGeometry, norAttribute, norAttributeData);
    }

    // Get texture coord attributes if exists.
    var texCoordAttId = decoder.GetAttributeId(dracoGeometry, dracoDecoder.TEX_COORD);
    var textCoordAttributeData;
    if (texCoordAttId != -1) {
      if (this.verbosity > 0) {
        console.log('Loaded texture coordinate attribute.');
      }
      var texCoordAttribute = decoder.GetAttribute(dracoGeometry, texCoordAttId);
      textCoordAttributeData = new dracoDecoder.DracoFloat32Array();
      decoder.GetAttributeFloatForAllPoints(dracoGeometry, texCoordAttribute, textCoordAttributeData);
    }

    // Structure for converting to THREEJS geometry later.
    var geometryBuffer = {
      vertices: new Float32Array(numVertexCoordinates),
      normals: new Float32Array(numVertexCoordinates),
      uvs: new Float32Array(numTextureCoordinates),
      colors: new Float32Array(numColorCoordinates)
    };

    for (var i = 0; i < numVertexCoordinates; i += 3) {
      geometryBuffer.vertices[i] = posAttributeData.GetValue(i);
      geometryBuffer.vertices[i + 1] = posAttributeData.GetValue(i + 1);
      geometryBuffer.vertices[i + 2] = posAttributeData.GetValue(i + 2);
      // Add normal.
      if (normalAttId != -1) {
        geometryBuffer.normals[i] = norAttributeData.GetValue(i);
        geometryBuffer.normals[i + 1] = norAttributeData.GetValue(i + 1);
        geometryBuffer.normals[i + 2] = norAttributeData.GetValue(i + 2);
      }
    }

    // Add color.
    for (var i = 0; i < numColorCoordinates; i += 1) {
      if (colorAttId != -1) {
        // Draco colors are already normalized.
        geometryBuffer.colors[i] = colAttributeData.GetValue(i);
      } else {
        // Default is white. This is faster than TypedArray.fill().
        geometryBuffer.colors[i] = 1.0;
      }
    }

    // Add texture coordinates.
    if (texCoordAttId != -1) {
      for (var i = 0; i < numTextureCoordinates; i += 2) {
        geometryBuffer.uvs[i] = textCoordAttributeData.GetValue(i);
        geometryBuffer.uvs[i + 1] = textCoordAttributeData.GetValue(i + 1);
      }
    }

    dracoDecoder.destroy(posAttributeData);
    if (colorAttId != -1) dracoDecoder.destroy(colAttributeData);
    if (normalAttId != -1) dracoDecoder.destroy(norAttributeData);
    if (texCoordAttId != -1) dracoDecoder.destroy(textCoordAttributeData);

    // For mesh, we need to generate the faces.
    if (geometryType == dracoDecoder.TRIANGULAR_MESH) {
      if (this.drawMode === 1) {
        // THREE.TriangleStripDrawMode (deprecated)
        var stripsArray = new dracoDecoder.DracoInt32Array();
        var numStrips = decoder.GetTriangleStripsFromMesh(dracoGeometry, stripsArray);
        geometryBuffer.indices = new Uint32Array(stripsArray.size());
        for (var i = 0; i < stripsArray.size(); ++i) {
          geometryBuffer.indices[i] = stripsArray.GetValue(i);
        }
        dracoDecoder.destroy(stripsArray);
      } else {
        var numIndices = numFaces * 3;
        geometryBuffer.indices = new Uint32Array(numIndices);
        var ia = new dracoDecoder.DracoInt32Array();
        for (var i = 0; i < numFaces; ++i) {
          decoder.GetFaceFromMesh(dracoGeometry, i, ia);
          var index = i * 3;
          geometryBuffer.indices[index] = ia.GetValue(0);
          geometryBuffer.indices[index + 1] = ia.GetValue(1);
          geometryBuffer.indices[index + 2] = ia.GetValue(2);
        }
        dracoDecoder.destroy(ia);
      }
    }

    // Import data to Three JS geometry.
    var geometry = new THREE.BufferGeometry();
    // drawMode was removed from BufferGeometry in Three.js r125+.
    // The renderer now handles draw mode via material settings.
    if (geometryType == dracoDecoder.TRIANGULAR_MESH) {
      geometry.setIndex(new THREE.BufferAttribute(geometryBuffer.indices.length > 65535 ? new Uint32Array(geometryBuffer.indices) : new Uint16Array(geometryBuffer.indices), 1));
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(geometryBuffer.vertices, 3));
    var posTransform = new dracoDecoder.AttributeQuantizationTransform();
    if (posTransform.InitFromAttribute(posAttribute)) {
      // Quantized attribute. Store the quantization parameters into the
      // THREE.js attribute.
      geometry.attributes['position'].isQuantized = true;
      geometry.attributes['position'].maxRange = posTransform.range();
      geometry.attributes['position'].numQuantizationBits = posTransform.quantization_bits();
      geometry.attributes['position'].minValues = new Float32Array(3);
      for (var i = 0; i < 3; ++i) {
        geometry.attributes['position'].minValues[i] = posTransform.min_value(i);
      }
    }
    dracoDecoder.destroy(posTransform);
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(geometryBuffer.colors, numColorCoordinateComponents));
    if (normalAttId != -1) {
      geometry.setAttribute('normal', new THREE.Float32BufferAttribute(geometryBuffer.normals, 3));
    }
    if (texCoordAttId != -1) {
      geometry.setAttribute('uv', new THREE.Float32BufferAttribute(geometryBuffer.uvs, 2));
    }

    dracoDecoder.destroy(decoder);
    dracoDecoder.destroy(dracoGeometry);

    this.decode_time = decode_end - start_time;
    this.import_time = performance.now() - decode_end;

    if (this.verbosity > 0) {
      console.log('Decode time: ' + this.decode_time);
      console.log('Import time: ' + this.import_time);
    }
    return geometry;
  },

  isVersionSupported: function isVersionSupported(version, callback) {
    THREE.DRACOLoader.getDecoder(this, function (decoder) {
      callback(decoder.isVersionSupported(version));
    });
  },

  getAttributeOptions: function getAttributeOptions(attributeName) {
    if (typeof this.attributeOptions[attributeName] === 'undefined') this.attributeOptions[attributeName] = {};
    return this.attributeOptions[attributeName];
  }
};

// This function loads a JavaScript file and adds it to the page. "path"
// is the path to the JavaScript file. "onLoadFunc" is the function to be
// called when the JavaScript file has been loaded.
THREE.DRACOLoader.loadJavaScriptFile = function (path, onLoadFunc, dracoDecoder) {
  var head = document.getElementsByTagName('head')[0];
  var element = document.createElement('script');
  element.id = "decoder_script";
  element.type = 'text/javascript';
  element.src = path;
  if (onLoadFunc !== null) {
    element.onload = onLoadFunc(dracoDecoder);
  } else {
    element.onload = function (dracoDecoder) {
      dracoDecoder.timeLoaded = performance.now();
    };
  }

  var previous_decoder_script = document.getElementById("decoder_script");
  if (previous_decoder_script !== null) {
    previous_decoder_script.parentNode.removeChild(previous_decoder_script);
  }

  head.appendChild(element);
};

THREE.DRACOLoader.loadWebAssemblyDecoder = function (dracoDecoder) {
  dracoDecoder.dracoDecoderType['wasmBinaryFile'] = dracoDecoder.dracoSrcPath + 'draco_decoder.wasm';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', dracoDecoder.dracoSrcPath + 'draco_decoder.wasm', true);
  xhr.responseType = 'arraybuffer';
  xhr.onload = function () {
    // draco_wasm_wrapper.js must be loaded before DracoDecoderModule is
    // created. The object passed into DracoDecoderModule() must contain a
    // property with the name of wasmBinary and the value must be an
    // ArrayBuffer containing the contents of the .wasm file.
    dracoDecoder.dracoDecoderType['wasmBinary'] = xhr.response;
    dracoDecoder.timeLoaded = performance.now();
  };
  xhr.send(null);
};

// This function will test if the browser has support for WebAssembly. If
// it does it will download the WebAssembly Draco decoder, if not it will
// download the asmjs Draco decoder.
THREE.DRACOLoader.loadDracoDecoder = function (dracoDecoder) {
  if ((typeof WebAssembly === 'undefined' ? 'undefined' : _typeof(WebAssembly)) !== 'object' || dracoDecoder.dracoDecoderType.type === 'js') {
    // No WebAssembly support
    THREE.DRACOLoader.loadJavaScriptFile(dracoDecoder.dracoSrcPath + 'draco-decoder.js', null, dracoDecoder);
  } else {
    THREE.DRACOLoader.loadJavaScriptFile(dracoDecoder.dracoSrcPath + 'draco_wasm_wrapper.js', function (dracoDecoder) {
      THREE.DRACOLoader.loadWebAssemblyDecoder(dracoDecoder);
    }, dracoDecoder);
  }
};

/**
 * Creates and returns a singleton instance of the DracoDecoderModule.
 * The module loading is done asynchronously for WebAssembly. Initialized module
 * can be accessed through the callback function
 * |onDracoDecoderModuleLoadedCallback|.
 */
THREE.DRACOLoader.getDecoder = function () {
  var decoder;
  var decoderCreationCalled = false;

  return function (dracoDecoder, onDracoDecoderModuleLoadedCallback) {
    if (typeof decoder !== 'undefined') {
      // Module already initialized.
      if (typeof onDracoDecoderModuleLoadedCallback !== 'undefined') {
        onDracoDecoderModuleLoadedCallback(decoder);
      }
    } else {
      if (typeof DracoDecoderModule === 'undefined') {
        // Wait until the Draco decoder is loaded before starting the error
        // timer.
        if (dracoDecoder.timeLoaded > 0) {
          var waitMs = performance.now() - dracoDecoder.timeLoaded;

          // After loading the Draco JavaScript decoder file, there is still
          // some time before the DracoDecoderModule is defined. So start a
          // loop to check when the DracoDecoderModule gets defined. If the
          // time is hit throw an error.
          if (waitMs > 5000) {
            throw new Error('THREE.DRACOLoader: DracoDecoderModule not found.');
          }
        }
      } else {
        if (!decoderCreationCalled) {
          decoderCreationCalled = true;
          dracoDecoder.dracoDecoderType['onModuleLoaded'] = function (module) {
            if (typeof onDracoDecoderModuleLoadedCallback === 'function') {
              decoder = module;
            }
          };
          DracoDecoderModule(dracoDecoder.dracoDecoderType);
        }
      }

      // Either the DracoDecoderModule has not been defined or the decoder
      // has not been created yet. Call getDecoder() again.
      setTimeout(function () {
        THREE.DRACOLoader.getDecoder(dracoDecoder, onDracoDecoderModuleLoadedCallback);
      }, 10);
    }
  };
}();

},{}],241:[function(require,module,exports){
'use strict';

/**
 * @author Rich Tibbett / https://github.com/richtr
 * @author mrdoob / http://mrdoob.com/
 * @author Tony Parisi / http://www.tonyparisi.com/
 * @author Takahiro / https://github.com/takahirox
 * @author Don McCurdy / https://www.donmccurdy.com
 */

THREE.GLTF2Loader = function () {

				function GLTF2Loader(manager) {

								this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
				}

				GLTF2Loader.prototype = {

								constructor: GLTF2Loader,

								load: function load(url, onLoad, onProgress, onError) {

												var scope = this;

												var path = this.path && typeof this.path === "string" ? this.path : url.substring(0, url.lastIndexOf('/') + 1);

												var loader = new THREE.FileLoader(scope.manager);

												loader.setResponseType('arraybuffer');

												loader.load(url, function (data) {

																scope.parse(data, onLoad, path);
												}, onProgress, onError);
								},

								setCrossOrigin: function setCrossOrigin(value) {

												this.crossOrigin = value;
								},

								setPath: function setPath(value) {

												this.path = value;
								},

								parse: function parse(data, callback, path) {

												var content;
												var extensions = {};

												var magic = convertUint8ArrayToString(new Uint8Array(data, 0, 4));

												if (magic === BINARY_EXTENSION_HEADER_MAGIC) {

																extensions[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(data);
																content = extensions[EXTENSIONS.KHR_BINARY_GLTF].content;
												} else {

																content = convertUint8ArrayToString(new Uint8Array(data));
												}

												var json = JSON.parse(content);

												if (json.extensionsUsed) {

																if (json.extensionsUsed.indexOf(EXTENSIONS.KHR_LIGHTS) >= 0) {

																				extensions[EXTENSIONS.KHR_LIGHTS] = new GLTFLightsExtension(json);
																}

																if (json.extensionsUsed.indexOf(EXTENSIONS.KHR_MATERIALS_COMMON) >= 0) {

																				extensions[EXTENSIONS.KHR_MATERIALS_COMMON] = new GLTFMaterialsCommonExtension(json);
																}

																if (json.extensionsUsed.indexOf(EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS) >= 0) {

																				extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS] = new GLTFMaterialsPbrSpecularGlossinessExtension();
																}

																if (json.extensionsUsed.indexOf(EXTENSIONS.KHR_TECHNIQUE_WEBGL) >= 0) {

																				extensions[EXTENSIONS.KHR_TECHNIQUE_WEBGL] = new GLTFTechniqueWebglExtension(json);
																}
												}

												if (json.extensionsUsed && json.extensionsUsed.indexOf(EXTENSIONS.KHR_DRACO_MESH_COMPRESSION) >= 0) {

																extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION] = new GLTFDracoMeshCompressionExtension();
												}

												console.time('GLTF2Loader');

												var parser = new GLTFParser(json, extensions, {

																path: path || this.path,
																crossOrigin: this.crossOrigin

												});

												parser.parse(function (scene, scenes, cameras, animations) {

																// console.timeEnd( 'GLTF2Loader' );

																var glTF = {
																				"scene": scene,
																				"scenes": scenes,
																				"cameras": cameras,
																				"animations": animations
																};

																callback(glTF);
												});
								}

				};

				/* GLTFREGISTRY */

				function GLTFRegistry() {

								var objects = {};

								return {

												get: function get(key) {

																return objects[key];
												},

												add: function add(key, object) {

																objects[key] = object;
												},

												remove: function remove(key) {

																delete objects[key];
												},

												removeAll: function removeAll() {

																objects = {};
												},

												update: function update(scene, camera) {

																for (var name in objects) {

																				var object = objects[name];

																				if (object.update) {

																								object.update(scene, camera);
																				}
																}
												}

								};
				}

				/* GLTFSHADER */

				function GLTFShader(targetNode, allNodes) {

								var boundUniforms = {};

								// bind each uniform to its source node

								var uniforms = targetNode.material.uniforms;

								for (var uniformId in uniforms) {

												var uniform = uniforms[uniformId];

												if (uniform.semantic) {

																var sourceNodeRef = uniform.node;

																var sourceNode = targetNode;

																if (sourceNodeRef) {

																				sourceNode = allNodes[sourceNodeRef];
																}

																boundUniforms[uniformId] = {
																				semantic: uniform.semantic,
																				sourceNode: sourceNode,
																				targetNode: targetNode,
																				uniform: uniform
																};
												}
								}

								this.boundUniforms = boundUniforms;
								this._m4 = new THREE.Matrix4();
				}

				// Update - update all the uniform values
				GLTFShader.prototype.update = function (scene, camera) {

								var boundUniforms = this.boundUniforms;

								for (var name in boundUniforms) {

												var boundUniform = boundUniforms[name];

												switch (boundUniform.semantic) {

																case "MODELVIEW":

																				var m4 = boundUniform.uniform.value;
																				m4.multiplyMatrices(camera.matrixWorldInverse, boundUniform.sourceNode.matrixWorld);
																				break;

																case "MODELVIEWINVERSETRANSPOSE":

																				var m3 = boundUniform.uniform.value;
																				this._m4.multiplyMatrices(camera.matrixWorldInverse, boundUniform.sourceNode.matrixWorld);
																				m3.getNormalMatrix(this._m4);
																				break;

																case "PROJECTION":

																				var m4 = boundUniform.uniform.value;
																				m4.copy(camera.projectionMatrix);
																				break;

																case "JOINTMATRIX":

																				var m4v = boundUniform.uniform.value;

																				for (var mi = 0; mi < m4v.length; mi++) {

																								// So it goes like this:
																								// SkinnedMesh world matrix is already baked into MODELVIEW;
																								// transform joints to local space,
																								// then transform using joint's inverse
																								m4v[mi].getInverse(boundUniform.sourceNode.matrixWorld).multiply(boundUniform.targetNode.skeleton.bones[mi].matrixWorld).multiply(boundUniform.targetNode.skeleton.boneInverses[mi]).multiply(boundUniform.targetNode.bindMatrix);
																				}

																				break;

																default:

																				console.warn("Unhandled shader semantic: " + boundUniform.semantic);
																				break;

												}
								}
				};

				/*********************************/
				/********** EXTENSIONS ***********/
				/*********************************/

				var EXTENSIONS = {
								KHR_BINARY_GLTF: 'KHR_binary_glTF',
								KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
								KHR_LIGHTS: 'KHR_lights',
								KHR_MATERIALS_COMMON: 'KHR_materials_common',
								KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness',
								KHR_TECHNIQUE_WEBGL: 'KHR_technique_webgl'
				};

				/**
     * Lights Extension
     *
     * Specification: PENDING
     */
				function GLTFLightsExtension(json) {

								this.name = EXTENSIONS.KHR_LIGHTS;

								this.lights = {};

								var extension = json.extensions && json.extensions[EXTENSIONS.KHR_LIGHTS] || {};
								var lights = extension.lights || {};

								for (var lightId in lights) {

												var light = lights[lightId];
												var lightNode;

												var color = new THREE.Color().fromArray(light.color);

												switch (light.type) {

																case 'directional':
																				lightNode = new THREE.DirectionalLight(color);
																				lightNode.position.set(0, 0, 1);
																				break;

																case 'point':
																				lightNode = new THREE.PointLight(color);
																				break;

																case 'spot':
																				lightNode = new THREE.SpotLight(color);
																				lightNode.position.set(0, 0, 1);
																				break;

																case 'ambient':
																				lightNode = new THREE.AmbientLight(color);
																				break;

												}

												if (lightNode) {

																if (light.constantAttenuation !== undefined) {

																				lightNode.intensity = light.constantAttenuation;
																}

																if (light.linearAttenuation !== undefined) {

																				lightNode.distance = 1 / light.linearAttenuation;
																}

																if (light.quadraticAttenuation !== undefined) {

																				lightNode.decay = light.quadraticAttenuation;
																}

																if (light.fallOffAngle !== undefined) {

																				lightNode.angle = light.fallOffAngle;
																}

																if (light.fallOffExponent !== undefined) {

																				console.warn('GLTF2Loader: light.fallOffExponent not currently supported.');
																}

																lightNode.name = light.name || 'light_' + lightId;
																this.lights[lightId] = lightNode;
												}
								}
				}

				/**
     * Common Materials Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/Khronos/KHR_materials_common
     */
				function GLTFMaterialsCommonExtension(json) {

								this.name = EXTENSIONS.KHR_MATERIALS_COMMON;
				}

				GLTFMaterialsCommonExtension.prototype.getMaterialType = function (material) {

								var khrMaterial = material.extensions[this.name];

								switch (khrMaterial.type) {

												case 'commonBlinn':
												case 'commonPhong':
																return THREE.MeshPhongMaterial;

												case 'commonLambert':
																return THREE.MeshLambertMaterial;

												case 'commonConstant':
												default:
																return THREE.MeshBasicMaterial;

								}
				};

				GLTFMaterialsCommonExtension.prototype.extendParams = function (materialParams, material, dependencies) {

								var khrMaterial = material.extensions[this.name];

								var keys = [];

								// TODO: Currently ignored: 'ambientFactor', 'ambientTexture'
								switch (khrMaterial.type) {

												case 'commonBlinn':
												case 'commonPhong':
																keys.push('diffuseFactor', 'diffuseTexture', 'specularFactor', 'specularTexture', 'shininessFactor');
																break;

												case 'commonLambert':
																keys.push('diffuseFactor', 'diffuseTexture');
																break;

												case 'commonConstant':
												default:
																break;

								}

								var materialValues = {};

								keys.forEach(function (v) {

												if (khrMaterial[v] !== undefined) materialValues[v] = khrMaterial[v];
								});

								if (materialValues.diffuseFactor !== undefined) {

												materialParams.color = new THREE.Color().fromArray(materialValues.diffuseFactor);
												materialParams.opacity = materialValues.diffuseFactor[3];
								}

								if (materialValues.diffuseTexture !== undefined) {

												materialParams.map = dependencies.textures[materialValues.diffuseTexture.index];
								}

								if (materialValues.specularFactor !== undefined) {

												materialParams.specular = new THREE.Color().fromArray(materialValues.specularFactor);
								}

								if (materialValues.specularTexture !== undefined) {

												materialParams.specularMap = dependencies.textures[materialValues.specularTexture.index];
								}

								if (materialValues.shininessFactor !== undefined) {

												materialParams.shininess = materialValues.shininessFactor;
								}
				};

				/* BINARY EXTENSION */

				var BINARY_EXTENSION_BUFFER_NAME = 'binary_glTF';
				var BINARY_EXTENSION_HEADER_MAGIC = 'glTF';
				var BINARY_EXTENSION_HEADER_LENGTH = 12;
				var BINARY_EXTENSION_CHUNK_TYPES = { JSON: 0x4E4F534A, BIN: 0x004E4942 };

				function GLTFBinaryExtension(data) {

								this.name = EXTENSIONS.KHR_BINARY_GLTF;
								this.content = null;
								this.body = null;

								var headerView = new DataView(data, 0, BINARY_EXTENSION_HEADER_LENGTH);

								this.header = {
												magic: convertUint8ArrayToString(new Uint8Array(data.slice(0, 4))),
												version: headerView.getUint32(4, true),
												length: headerView.getUint32(8, true)
								};

								if (this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC) {

												throw new Error('GLTF2Loader: Unsupported glTF-Binary header.');
								} else if (this.header.version < 2.0) {

												throw new Error('GLTF2Loader: Legacy binary file detected. Use GLTFLoader instead.');
								}

								var chunkView = new DataView(data, BINARY_EXTENSION_HEADER_LENGTH);
								var chunkIndex = 0;

								while (chunkIndex < chunkView.byteLength) {

												var chunkLength = chunkView.getUint32(chunkIndex, true);
												chunkIndex += 4;

												var chunkType = chunkView.getUint32(chunkIndex, true);
												chunkIndex += 4;

												if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON) {

																var contentArray = new Uint8Array(data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength);
																this.content = convertUint8ArrayToString(contentArray);
												} else if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN) {

																var byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
																this.body = data.slice(byteOffset, byteOffset + chunkLength);
												}

												// Clients must ignore chunks with unknown types.

												chunkIndex += chunkLength;
								}

								if (this.content === null) {

												throw new Error('GLTF2Loader: JSON content not found.');
								}
				}

				/**
     * DRACO Mesh Compression Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/pull/874
     */
				function GLTFDracoMeshCompressionExtension() {

								this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;

								this.dracoLoader = new THREE.DRACOLoader();
								// this.dracoLoader.setDracoDecoderType( {} );
				}

				GLTFDracoMeshCompressionExtension.prototype.decodePrimitive = function (primitive, dependencies, onDecode) {

								var bufferViewID = primitive.extensions[this.name].bufferView;
								var bufferView = dependencies.bufferViews[bufferViewID];

								var dracoLoader = this.dracoLoader;

								dracoLoader.decodeDracoFile(bufferView, onDecode);

								// dracoLoader.isVersionSupported( primitive.extensions[ this.name ], function ( isSupported ) {

								// 	if ( isSupported ) {

								// 		dracoLoader.decodeDracoFile( bufferView, onDecode );

								// 	} else {

								// 		throw new Error( 'GLTF2Loader: Incompatible Draco asset version: ' + extension.version + '.' );

								// 	}

								// } );
				};

				/**
     * WebGL Technique Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/Khronos/KHR_technique_webgl
     */
				function GLTFTechniqueWebglExtension(json) {

								this.name = EXTENSIONS.KHR_TECHNIQUE_WEBGL;

								var extension = json.extensions && json.extensions[EXTENSIONS.KHR_TECHNIQUE_WEBGL] || {};

								this.techniques = extension.techniques || {};
								this.programs = extension.programs || {};
								this.shaders = extension.shaders || {};
				}

				GLTFTechniqueWebglExtension.prototype.getMaterialType = function () {

								return DeferredShaderMaterial;
				};

				GLTFTechniqueWebglExtension.prototype.extendParams = function (materialParams, material, dependencies) {

								var extension = material[EXTENSIONS.KHR_TECHNIQUE_WEBGL];
								var technique = dependencies.techniques[extension.technique];

								materialParams.uniforms = {};

								var program = dependencies.programs[technique.program];

								if (program === undefined) {

												return;
								}

								materialParams.fragmentShader = dependencies.shaders[program.fragmentShader];

								if (!materialParams.fragmentShader) {

												throw new Error('ERROR: Missing fragment shader definition:', program.fragmentShader);
								}

								var vertexShader = dependencies.shaders[program.vertexShader];

								if (!vertexShader) {

												throw new Error('ERROR: Missing vertex shader definition:', program.vertexShader);
								}

								// IMPORTANT: FIX VERTEX SHADER ATTRIBUTE DEFINITIONS
								materialParams.vertexShader = replaceTHREEShaderAttributes(vertexShader, technique);

								var uniforms = technique.uniforms;

								for (var uniformId in uniforms) {

												var pname = uniforms[uniformId];
												var shaderParam = technique.parameters[pname];

												var ptype = shaderParam.type;

												if (WEBGL_TYPE[ptype]) {

																var pcount = shaderParam.count;
																var value;

																if (material.values !== undefined) value = material.values[pname];

																var uvalue = new WEBGL_TYPE[ptype]();
																var usemantic = shaderParam.semantic;
																var unode = shaderParam.node;

																switch (ptype) {

																				case WEBGL_CONSTANTS.FLOAT:

																								uvalue = shaderParam.value;

																								if (pname === 'transparency') {

																												materialParams.transparent = true;
																								}

																								if (value !== undefined) {

																												uvalue = value;
																								}

																								break;

																				case WEBGL_CONSTANTS.FLOAT_VEC2:
																				case WEBGL_CONSTANTS.FLOAT_VEC3:
																				case WEBGL_CONSTANTS.FLOAT_VEC4:
																				case WEBGL_CONSTANTS.FLOAT_MAT3:

																								if (shaderParam && shaderParam.value) {

																												uvalue.fromArray(shaderParam.value);
																								}

																								if (value) {

																												uvalue.fromArray(value);
																								}

																								break;

																				case WEBGL_CONSTANTS.FLOAT_MAT2:

																								// what to do?
																								console.warn('FLOAT_MAT2 is not a supported uniform type');
																								break;

																				case WEBGL_CONSTANTS.FLOAT_MAT4:

																								if (pcount) {

																												uvalue = new Array(pcount);

																												for (var mi = 0; mi < pcount; mi++) {

																																uvalue[mi] = new WEBGL_TYPE[ptype]();
																												}

																												if (shaderParam && shaderParam.value) {

																																var m4v = shaderParam.value;
																																uvalue.fromArray(m4v);
																												}

																												if (value) {

																																uvalue.fromArray(value);
																												}
																								} else {

																												if (shaderParam && shaderParam.value) {

																																var m4 = shaderParam.value;
																																uvalue.fromArray(m4);
																												}

																												if (value) {

																																uvalue.fromArray(value);
																												}
																								}

																								break;

																				case WEBGL_CONSTANTS.SAMPLER_2D:

																								if (value !== undefined) {

																												uvalue = dependencies.textures[value];
																								} else if (shaderParam.value !== undefined) {

																												uvalue = dependencies.textures[shaderParam.value];
																								} else {

																												uvalue = null;
																								}

																								break;

																}

																materialParams.uniforms[uniformId] = {
																				value: uvalue,
																				semantic: usemantic,
																				node: unode
																};
												} else {

																throw new Error('Unknown shader uniform param type: ' + ptype);
												}
								}

								var states = technique.states || {};
								var enables = states.enable || [];
								var functions = states.functions || {};

								var enableCullFace = false;
								var enableDepthTest = false;
								var enableBlend = false;

								for (var i = 0, il = enables.length; i < il; i++) {

												var enable = enables[i];

												switch (STATES_ENABLES[enable]) {

																case 'CULL_FACE':

																				enableCullFace = true;

																				break;

																case 'DEPTH_TEST':

																				enableDepthTest = true;

																				break;

																case 'BLEND':

																				enableBlend = true;

																				break;

																// TODO: implement
																case 'SCISSOR_TEST':
																case 'POLYGON_OFFSET_FILL':
																case 'SAMPLE_ALPHA_TO_COVERAGE':

																				break;

																default:

																				throw new Error("Unknown technique.states.enable: " + enable);

												}
								}

								if (enableCullFace) {

												materialParams.side = functions.cullFace !== undefined ? WEBGL_SIDES[functions.cullFace] : THREE.FrontSide;
								} else {

												materialParams.side = THREE.DoubleSide;
								}

								materialParams.depthTest = enableDepthTest;
								materialParams.depthFunc = functions.depthFunc !== undefined ? WEBGL_DEPTH_FUNCS[functions.depthFunc] : THREE.LessDepth;
								materialParams.depthWrite = functions.depthMask !== undefined ? functions.depthMask[0] : true;

								materialParams.blending = enableBlend ? THREE.CustomBlending : THREE.NoBlending;
								materialParams.transparent = enableBlend;

								var blendEquationSeparate = functions.blendEquationSeparate;

								if (blendEquationSeparate !== undefined) {

												materialParams.blendEquation = WEBGL_BLEND_EQUATIONS[blendEquationSeparate[0]];
												materialParams.blendEquationAlpha = WEBGL_BLEND_EQUATIONS[blendEquationSeparate[1]];
								} else {

												materialParams.blendEquation = THREE.AddEquation;
												materialParams.blendEquationAlpha = THREE.AddEquation;
								}

								var blendFuncSeparate = functions.blendFuncSeparate;

								if (blendFuncSeparate !== undefined) {

												materialParams.blendSrc = WEBGL_BLEND_FUNCS[blendFuncSeparate[0]];
												materialParams.blendDst = WEBGL_BLEND_FUNCS[blendFuncSeparate[1]];
												materialParams.blendSrcAlpha = WEBGL_BLEND_FUNCS[blendFuncSeparate[2]];
												materialParams.blendDstAlpha = WEBGL_BLEND_FUNCS[blendFuncSeparate[3]];
								} else {

												materialParams.blendSrc = THREE.OneFactor;
												materialParams.blendDst = THREE.ZeroFactor;
												materialParams.blendSrcAlpha = THREE.OneFactor;
												materialParams.blendDstAlpha = THREE.ZeroFactor;
								}
				};

				/**
     * Specular-Glossiness Extension
     *
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/Khronos/KHR_materials_pbrSpecularGlossiness
     */
				function GLTFMaterialsPbrSpecularGlossinessExtension() {

								return {

												name: EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,

												getMaterialType: function getMaterialType() {

																return THREE.ShaderMaterial;
												},

												extendParams: function extendParams(params, material, dependencies) {

																// specification
																// https://github.com/sbtron/glTF/tree/KHRpbrSpecGloss/extensions/Khronos/KHR_materials_pbrSpecularGlossiness

																var pbrSpecularGlossiness = material.extensions[this.name];

																var shader = THREE.ShaderLib['standard'];

																var uniforms = THREE.UniformsUtils.clone(shader.uniforms);

																var specularMapParsFragmentChunk = ['#ifdef USE_SPECULARMAP', '	uniform sampler2D specularMap;', '#endif'].join('\n');

																var glossinessMapParsFragmentChunk = ['#ifdef USE_GLOSSINESSMAP', '	uniform sampler2D glossinessMap;', '#endif'].join('\n');

																var specularMapFragmentChunk = ['vec3 specularFactor = specular;', '#ifdef USE_SPECULARMAP', '	vec4 texelSpecular = texture2D( specularMap, vUv );', '	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture', '	specularFactor *= texelSpecular.rgb;', '#endif'].join('\n');

																var glossinessMapFragmentChunk = ['float glossinessFactor = glossiness;', '#ifdef USE_GLOSSINESSMAP', '	vec4 texelGlossiness = texture2D( glossinessMap, vUv );', '	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture', '	glossinessFactor *= texelGlossiness.a;', '#endif'].join('\n');

																var lightPhysicalFragmentChunk = ['PhysicalMaterial material;', 'material.diffuseColor = diffuseColor.rgb;', 'material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );', 'material.specularColor = specularFactor.rgb;'].join('\n');

																var fragmentShader = shader.fragmentShader.replace('#include <specularmap_fragment>', '').replace('uniform float roughness;', 'uniform vec3 specular;').replace('uniform float metalness;', 'uniform float glossiness;').replace('#include <roughnessmap_pars_fragment>', specularMapParsFragmentChunk).replace('#include <metalnessmap_pars_fragment>', glossinessMapParsFragmentChunk).replace('#include <roughnessmap_fragment>', specularMapFragmentChunk).replace('#include <metalnessmap_fragment>', glossinessMapFragmentChunk).replace('#include <lights_physical_fragment>', lightPhysicalFragmentChunk);

																delete uniforms.roughness;
																delete uniforms.metalness;
																delete uniforms.roughnessMap;
																delete uniforms.metalnessMap;

																uniforms.specular = { value: new THREE.Color().setHex(0x111111) };
																uniforms.glossiness = { value: 0.5 };
																uniforms.specularMap = { value: null };
																uniforms.glossinessMap = { value: null };

																params.vertexShader = shader.vertexShader;
																params.fragmentShader = fragmentShader;
																params.uniforms = uniforms;
																params.defines = { 'STANDARD': '' };

																params.color = new THREE.Color(1.0, 1.0, 1.0);
																params.opacity = 1.0;

																if (Array.isArray(pbrSpecularGlossiness.diffuseFactor)) {

																				var array = pbrSpecularGlossiness.diffuseFactor;

																				params.color.fromArray(array);
																				params.opacity = array[3];
																}

																if (pbrSpecularGlossiness.diffuseTexture !== undefined) {

																				params.map = dependencies.textures[pbrSpecularGlossiness.diffuseTexture.index];
																}

																params.emissive = new THREE.Color(0.0, 0.0, 0.0);
																params.glossiness = pbrSpecularGlossiness.glossinessFactor !== undefined ? pbrSpecularGlossiness.glossinessFactor : 1.0;
																params.specular = new THREE.Color(1.0, 1.0, 1.0);

																if (Array.isArray(pbrSpecularGlossiness.specularFactor)) {

																				params.specular.fromArray(pbrSpecularGlossiness.specularFactor);
																}

																if (pbrSpecularGlossiness.specularGlossinessTexture !== undefined) {

																				params.glossinessMap = dependencies.textures[pbrSpecularGlossiness.specularGlossinessTexture.index];
																				params.specularMap = dependencies.textures[pbrSpecularGlossiness.specularGlossinessTexture.index];
																}
												},

												createMaterial: function createMaterial(params) {

																// setup material properties based on MeshStandardMaterial for Specular-Glossiness

																var material = new THREE.ShaderMaterial({
																				defines: params.defines,
																				vertexShader: params.vertexShader,
																				fragmentShader: params.fragmentShader,
																				uniforms: params.uniforms,
																				fog: true,
																				lights: true,
																				opacity: params.opacity,
																				transparent: params.transparent
																});

																material.color = params.color;

																material.map = params.map === undefined ? null : params.map;

																material.lightMap = null;
																material.lightMapIntensity = 1.0;

																material.aoMap = params.aoMap === undefined ? null : params.aoMap;
																material.aoMapIntensity = 1.0;

																material.emissive = params.emissive;
																material.emissiveIntensity = 1.0;
																material.emissiveMap = params.emissiveMap === undefined ? null : params.emissiveMap;

																material.bumpMap = params.bumpMap === undefined ? null : params.bumpMap;
																material.bumpScale = 1;

																material.normalMap = params.normalMap === undefined ? null : params.normalMap;
																material.normalScale = new THREE.Vector2(1, 1);

																material.displacementMap = null;
																material.displacementScale = 1;
																material.displacementBias = 0;

																material.specularMap = params.specularMap === undefined ? null : params.specularMap;
																material.specular = params.specular;

																material.glossinessMap = params.glossinessMap === undefined ? null : params.glossinessMap;
																material.glossiness = params.glossiness;

																material.alphaMap = null;

																material.envMap = params.envMap === undefined ? null : params.envMap;
																material.envMapIntensity = 1.0;

																material.refractionRatio = 0.98;

																material.extensions.derivatives = true;

																return material;
												},

												// Here's based on refreshUniformsCommon() and refreshUniformsStandard() in WebGLRenderer.
												refreshUniforms: function refreshUniforms(renderer, scene, camera, geometry, material, group) {

																var uniforms = material.uniforms;
																var defines = material.defines;

																uniforms.opacity.value = material.opacity;

																uniforms.diffuse.value.copy(material.color);
																uniforms.emissive.value.copy(material.emissive).multiplyScalar(material.emissiveIntensity);

																uniforms.map.value = material.map;
																uniforms.specularMap.value = material.specularMap;
																uniforms.alphaMap.value = material.alphaMap;

																uniforms.lightMap.value = material.lightMap;
																uniforms.lightMapIntensity.value = material.lightMapIntensity;

																uniforms.aoMap.value = material.aoMap;
																uniforms.aoMapIntensity.value = material.aoMapIntensity;

																// uv repeat and offset setting priorities
																// 1. color map
																// 2. specular map
																// 3. normal map
																// 4. bump map
																// 5. alpha map
																// 6. emissive map

																var uvScaleMap;

																if (material.map) {

																				uvScaleMap = material.map;
																} else if (material.specularMap) {

																				uvScaleMap = material.specularMap;
																} else if (material.displacementMap) {

																				uvScaleMap = material.displacementMap;
																} else if (material.normalMap) {

																				uvScaleMap = material.normalMap;
																} else if (material.bumpMap) {

																				uvScaleMap = material.bumpMap;
																} else if (material.glossinessMap) {

																				uvScaleMap = material.glossinessMap;
																} else if (material.alphaMap) {

																				uvScaleMap = material.alphaMap;
																} else if (material.emissiveMap) {

																				uvScaleMap = material.emissiveMap;
																}

																if (uvScaleMap !== undefined) {

																				// backwards compatibility
																				if (uvScaleMap.isWebGLRenderTarget) {

																								uvScaleMap = uvScaleMap.texture;
																				}

																				var offset = uvScaleMap.offset;
																				var repeat = uvScaleMap.repeat;

																				uniforms.offsetRepeat.value.set(offset.x, offset.y, repeat.x, repeat.y);
																}

																uniforms.envMap.value = material.envMap;
																uniforms.envMapIntensity.value = material.envMapIntensity;
																uniforms.flipEnvMap.value = material.envMap && material.envMap.isCubeTexture ? -1 : 1;

																uniforms.refractionRatio.value = material.refractionRatio;

																uniforms.specular.value.copy(material.specular);
																uniforms.glossiness.value = material.glossiness;

																uniforms.glossinessMap.value = material.glossinessMap;

																uniforms.emissiveMap.value = material.emissiveMap;
																uniforms.bumpMap.value = material.bumpMap;
																uniforms.normalMap.value = material.normalMap;

																uniforms.displacementMap.value = material.displacementMap;
																uniforms.displacementScale.value = material.displacementScale;
																uniforms.displacementBias.value = material.displacementBias;

																if (uniforms.glossinessMap.value !== null && defines.USE_GLOSSINESSMAP === undefined) {

																				defines.USE_GLOSSINESSMAP = '';
																				// set USE_ROUGHNESSMAP to enable vUv
																				defines.USE_ROUGHNESSMAP = '';
																}

																if (uniforms.glossinessMap.value === null && defines.USE_GLOSSINESSMAP !== undefined) {

																				delete defines.USE_GLOSSINESSMAP;
																				delete defines.USE_ROUGHNESSMAP;
																}
												}

								};
				}

				/*********************************/
				/********** INTERNALS ************/
				/*********************************/

				/* CONSTANTS */

				var WEBGL_CONSTANTS = {
								FLOAT: 5126,
								//FLOAT_MAT2: 35674,
								FLOAT_MAT3: 35675,
								FLOAT_MAT4: 35676,
								FLOAT_VEC2: 35664,
								FLOAT_VEC3: 35665,
								FLOAT_VEC4: 35666,
								LINEAR: 9729,
								REPEAT: 10497,
								SAMPLER_2D: 35678,
								TRIANGLES: 4,
								LINES: 1,
								UNSIGNED_BYTE: 5121,
								UNSIGNED_SHORT: 5123,

								VERTEX_SHADER: 35633,
								FRAGMENT_SHADER: 35632
				};

				var WEBGL_TYPE = {
								5126: Number,
								//35674: THREE.Matrix2,
								35675: THREE.Matrix3,
								35676: THREE.Matrix4,
								35664: THREE.Vector2,
								35665: THREE.Vector3,
								35666: THREE.Vector4,
								35678: THREE.Texture
				};

				var WEBGL_COMPONENT_TYPES = {
								5120: Int8Array,
								5121: Uint8Array,
								5122: Int16Array,
								5123: Uint16Array,
								5125: Uint32Array,
								5126: Float32Array
				};

				var WEBGL_FILTERS = {
								9728: THREE.NearestFilter,
								9729: THREE.LinearFilter,
								9984: THREE.NearestMipMapNearestFilter,
								9985: THREE.LinearMipMapNearestFilter,
								9986: THREE.NearestMipMapLinearFilter,
								9987: THREE.LinearMipMapLinearFilter
				};

				var WEBGL_WRAPPINGS = {
								33071: THREE.ClampToEdgeWrapping,
								33648: THREE.MirroredRepeatWrapping,
								10497: THREE.RepeatWrapping
				};

				var WEBGL_TEXTURE_FORMATS = {
								6406: THREE.AlphaFormat,
								6407: THREE.RGBFormat,
								6408: THREE.RGBAFormat,
								6409: THREE.LuminanceFormat,
								6410: THREE.LuminanceAlphaFormat
				};

				var WEBGL_TEXTURE_DATATYPES = {
								5121: THREE.UnsignedByteType,
								32819: THREE.UnsignedShort4444Type,
								32820: THREE.UnsignedShort5551Type,
								33635: THREE.UnsignedShort565Type
				};

				var WEBGL_SIDES = {
								1028: THREE.BackSide, // Culling front
								1029: THREE.FrontSide // Culling back
								//1032: THREE.NoSide   // Culling front and back, what to do?
				};

				var WEBGL_DEPTH_FUNCS = {
								512: THREE.NeverDepth,
								513: THREE.LessDepth,
								514: THREE.EqualDepth,
								515: THREE.LessEqualDepth,
								516: THREE.GreaterEqualDepth,
								517: THREE.NotEqualDepth,
								518: THREE.GreaterEqualDepth,
								519: THREE.AlwaysDepth
				};

				var WEBGL_BLEND_EQUATIONS = {
								32774: THREE.AddEquation,
								32778: THREE.SubtractEquation,
								32779: THREE.ReverseSubtractEquation
				};

				var WEBGL_BLEND_FUNCS = {
								0: THREE.ZeroFactor,
								1: THREE.OneFactor,
								768: THREE.SrcColorFactor,
								769: THREE.OneMinusSrcColorFactor,
								770: THREE.SrcAlphaFactor,
								771: THREE.OneMinusSrcAlphaFactor,
								772: THREE.DstAlphaFactor,
								773: THREE.OneMinusDstAlphaFactor,
								774: THREE.DstColorFactor,
								775: THREE.OneMinusDstColorFactor,
								776: THREE.SrcAlphaSaturateFactor
								// The followings are not supported by Three.js yet
								//32769: CONSTANT_COLOR,
								//32770: ONE_MINUS_CONSTANT_COLOR,
								//32771: CONSTANT_ALPHA,
								//32772: ONE_MINUS_CONSTANT_COLOR
				};

				var WEBGL_TYPE_SIZES = {
								'SCALAR': 1,
								'VEC2': 2,
								'VEC3': 3,
								'VEC4': 4,
								'MAT2': 4,
								'MAT3': 9,
								'MAT4': 16
				};

				var PATH_PROPERTIES = {
								scale: 'scale',
								translation: 'position',
								rotation: 'quaternion',
								weights: 'morphTargetInfluences'
				};

				var INTERPOLATION = {
								LINEAR: THREE.InterpolateLinear,
								STEP: THREE.InterpolateDiscrete
				};

				var STATES_ENABLES = {
								2884: 'CULL_FACE',
								2929: 'DEPTH_TEST',
								3042: 'BLEND',
								3089: 'SCISSOR_TEST',
								32823: 'POLYGON_OFFSET_FILL',
								32926: 'SAMPLE_ALPHA_TO_COVERAGE'
				};

				var ALPHA_MODES = {
								OPAQUE: 'OPAQUE',
								MASK: 'MASK',
								BLEND: 'BLEND'
				};

				/* UTILITY FUNCTIONS */

				function _each(object, callback, thisObj) {

								if (!object) {
												return Promise.resolve();
								}

								var results;
								var fns = [];

								if (Object.prototype.toString.call(object) === '[object Array]') {

												results = [];

												var length = object.length;

												for (var idx = 0; idx < length; idx++) {

																var value = callback.call(thisObj || this, object[idx], idx);

																if (value) {

																				fns.push(value);

																				if (value instanceof Promise) {

																								value.then(function (key, value) {

																												results[key] = value;
																								}.bind(this, idx));
																				} else {

																								results[idx] = value;
																				}
																}
												}
								} else {

												results = {};

												for (var key in object) {

																if (object.hasOwnProperty(key)) {

																				var value = callback.call(thisObj || this, object[key], key);

																				if (value) {

																								fns.push(value);

																								if (value instanceof Promise) {

																												value.then(function (key, value) {

																																results[key] = value;
																												}.bind(this, key));
																								} else {

																												results[key] = value;
																								}
																				}
																}
												}
								}

								return Promise.all(fns).then(function () {

												return results;
								});
				}

				function resolveURL(url, path) {

								// Invalid URL
								if (typeof url !== 'string' || url === '') return '';

								// Absolute URL http://,https://,//
								if (/^(https?:)?\/\//i.test(url)) {

												return url;
								}

								// Data URI
								if (/^data:.*,.*$/i.test(url)) {

												return url;
								}

								// Blob URL
								if (/^blob:.*$/i.test(url)) {

												return url;
								}

								// Relative URL
								return (path || '') + url;
				}

				function convertUint8ArrayToString(array) {

								if (window.TextDecoder !== undefined) {

												return new TextDecoder().decode(array);
								}

								// Avoid the String.fromCharCode.apply(null, array) shortcut, which
								// throws a "maximum call stack size exceeded" error for large arrays.

								var s = '';

								for (var i = 0, il = array.length; i < il; i++) {

												s += String.fromCharCode(array[i]);
								}

								return s;
				}

				// Three.js seems too dependent on attribute names so globally
				// replace those in the shader code
				function replaceTHREEShaderAttributes(shaderText, technique) {

								// Expected technique attributes
								var attributes = {};

								for (var attributeId in technique.attributes) {

												var pname = technique.attributes[attributeId];

												var param = technique.parameters[pname];
												var atype = param.type;
												var semantic = param.semantic;

												attributes[attributeId] = {
																type: atype,
																semantic: semantic
												};
								}

								// Figure out which attributes to change in technique

								var shaderParams = technique.parameters;
								var shaderAttributes = technique.attributes;
								var params = {};

								for (var attributeId in attributes) {

												var pname = shaderAttributes[attributeId];
												var shaderParam = shaderParams[pname];
												var semantic = shaderParam.semantic;
												if (semantic) {

																params[attributeId] = shaderParam;
												}
								}

								for (var pname in params) {

												var param = params[pname];
												var semantic = param.semantic;

												var regEx = new RegExp("\\b" + pname + "\\b", "g");

												switch (semantic) {

																case 'POSITION':

																				shaderText = shaderText.replace(regEx, 'position');
																				break;

																case 'NORMAL':

																				shaderText = shaderText.replace(regEx, 'normal');
																				break;

																case 'TEXCOORD_0':
																case 'TEXCOORD0':
																case 'TEXCOORD':

																				shaderText = shaderText.replace(regEx, 'uv');
																				break;

																case 'TEXCOORD_1':

																				shaderText = shaderText.replace(regEx, 'uv2');
																				break;

																case 'COLOR_0':
																case 'COLOR0':
																case 'COLOR':

																				shaderText = shaderText.replace(regEx, 'color');
																				break;

																case 'WEIGHTS_0':
																case 'WEIGHT':
																				// WEIGHT semantic deprecated.

																				shaderText = shaderText.replace(regEx, 'skinWeight');
																				break;

																case 'JOINTS_0':
																case 'JOINT':
																				// JOINT semantic deprecated.

																				shaderText = shaderText.replace(regEx, 'skinIndex');
																				break;

												}
								}

								return shaderText;
				}

				function createDefaultMaterial() {

								return new THREE.MeshPhongMaterial({
												color: 0x00000,
												emissive: 0x888888,
												specular: 0x000000,
												shininess: 0,
												transparent: false,
												depthTest: true,
												side: THREE.FrontSide
								});
				}

				function addMorphTargets(meshNode, primitive, dependencies) {

								var geometry = meshNode.geometry;
								var material = meshNode.material;

								var targets = primitive.targets;
								var morphAttributes = geometry.morphAttributes;

								morphAttributes.position = [];
								morphAttributes.normal = [];

								material.morphTargets = true;

								for (var i = 0, il = targets.length; i < il; i++) {

												var target = targets[i];
												var attributeName = 'morphTarget' + i;

												var positionAttribute, normalAttribute;

												if (target.POSITION !== undefined) {

																// Three.js morph formula is
																//   position
																//     + weight0 * ( morphTarget0 - position )
																//     + weight1 * ( morphTarget1 - position )
																//     ...
																// while the glTF one is
																//   position
																//     + weight0 * morphTarget0
																//     + weight1 * morphTarget1
																//     ...
																// then adding position to morphTarget.
																// So morphTarget value will depend on mesh's position, then cloning attribute
																// for the case if attribute is shared among two or more meshes.

																positionAttribute = dependencies.accessors[target.POSITION].clone();
																var position = geometry.attributes.position;

																for (var j = 0, jl = positionAttribute.array.length; j < jl; j++) {

																				positionAttribute.array[j] += position.array[j];
																}
												} else {

																// Copying the original position not to affect the final position.
																// See the formula above.
																positionAttribute = geometry.attributes.position.clone();
												}

												if (target.NORMAL !== undefined) {

																material.morphNormals = true;

																// see target.POSITION's comment

																normalAttribute = dependencies.accessors[target.NORMAL].clone();
																var normal = geometry.attributes.normal;

																for (var j = 0, jl = normalAttribute.array.length; j < jl; j++) {

																				normalAttribute.array[j] += normal.array[j];
																}
												} else {

																normalAttribute = geometry.attributes.normal.clone();
												}

												// TODO: implement
												if (target.TANGENT !== undefined) {}

												positionAttribute.name = attributeName;
												normalAttribute.name = attributeName;

												morphAttributes.position.push(positionAttribute);
												morphAttributes.normal.push(normalAttribute);
								}

								meshNode.updateMorphTargets();

								if (mesh.weights !== undefined) {

												for (var i = 0, il = mesh.weights.length; i < il; i++) {

																meshNode.morphTargetInfluences[i] = mesh.weights[i];
												}
								}
				};

				// Deferred constructor for RawShaderMaterial types
				function DeferredShaderMaterial(params) {

								this.isDeferredShaderMaterial = true;

								this.params = params;
				}

				DeferredShaderMaterial.prototype.create = function () {

								var uniforms = THREE.UniformsUtils.clone(this.params.uniforms);

								for (var uniformId in this.params.uniforms) {

												var originalUniform = this.params.uniforms[uniformId];

												if (originalUniform.value instanceof THREE.Texture) {

																uniforms[uniformId].value = originalUniform.value;
																uniforms[uniformId].value.needsUpdate = true;
												}

												uniforms[uniformId].semantic = originalUniform.semantic;
												uniforms[uniformId].node = originalUniform.node;
								}

								this.params.uniforms = uniforms;

								return new THREE.RawShaderMaterial(this.params);
				};

				/* GLTF PARSER */

				function GLTFParser(json, extensions, options) {

								this.json = json || {};
								this.extensions = extensions || {};
								this.options = options || {};

								// loader object cache
								this.cache = new GLTFRegistry();
				}

				GLTFParser.prototype._withDependencies = function (dependencies) {

								var _dependencies = {};

								for (var i = 0; i < dependencies.length; i++) {

												var dependency = dependencies[i];
												var fnName = "load" + dependency.charAt(0).toUpperCase() + dependency.slice(1);

												var cached = this.cache.get(dependency);

												if (cached !== undefined) {

																_dependencies[dependency] = cached;
												} else if (this[fnName]) {

																var fn = this[fnName]();
																this.cache.add(dependency, fn);

																_dependencies[dependency] = fn;
												}
								}

								return _each(_dependencies, function (dependency) {

												return dependency;
								});
				};

				GLTFParser.prototype.parse = function (callback) {

								var json = this.json;

								// Clear the loader cache
								this.cache.removeAll();

								// Fire the callback on complete
								this._withDependencies(["scenes", "cameras", "animations"]).then(function (dependencies) {

												var scenes = [];

												for (var name in dependencies.scenes) {

																scenes.push(dependencies.scenes[name]);
												}

												var scene = json.scene !== undefined ? dependencies.scenes[json.scene] : scenes[0];

												var cameras = [];

												for (var name in dependencies.cameras) {

																var camera = dependencies.cameras[name];
																cameras.push(camera);
												}

												var animations = [];

												for (var name in dependencies.animations) {

																animations.push(dependencies.animations[name]);
												}

												callback(scene, scenes, cameras, animations);
								});
				};

				GLTFParser.prototype.loadShaders = function () {

								var json = this.json;
								var options = this.options;
								var extensions = this.extensions;

								return this._withDependencies(["bufferViews"]).then(function (dependencies) {

												var shaders = extensions[EXTENSIONS.KHR_TECHNIQUE_WEBGL] !== undefined ? extensions[EXTENSIONS.KHR_TECHNIQUE_WEBGL].shaders : json.shaders;

												if (shaders === undefined) shaders = {};

												return _each(shaders, function (shader) {

																if (shader.bufferView !== undefined) {

																				var bufferView = dependencies.bufferViews[shader.bufferView];
																				var array = new Uint8Array(bufferView);
																				return convertUint8ArrayToString(array);
																}

																return new Promise(function (resolve) {

																				var loader = new THREE.FileLoader();
																				loader.setResponseType('text');
																				loader.load(resolveURL(shader.uri, options.path), function (shaderText) {

																								resolve(shaderText);
																				});
																});
												});
								});
				};

				GLTFParser.prototype.loadBuffers = function () {

								var json = this.json;
								var extensions = this.extensions;
								var options = this.options;

								return _each(json.buffers, function (buffer, name) {

												if (buffer.type === 'arraybuffer' || buffer.type === undefined) {

																// If present, GLB container is required to be the first buffer.
																if (buffer.uri === undefined && name === 0) {

																				return extensions[EXTENSIONS.KHR_BINARY_GLTF].body;
																}

																return new Promise(function (resolve) {

																				var loader = new THREE.FileLoader();
																				loader.setResponseType('arraybuffer');
																				loader.load(resolveURL(buffer.uri, options.path), function (buffer) {

																								resolve(buffer);
																				});
																});
												} else {

																console.warn('THREE.GLTF2Loader: ' + buffer.type + ' buffer type is not supported');
												}
								});
				};

				GLTFParser.prototype.loadBufferViews = function () {

								var json = this.json;

								return this._withDependencies(["buffers"]).then(function (dependencies) {

												return _each(json.bufferViews, function (bufferView) {

																var arraybuffer = dependencies.buffers[bufferView.buffer];

																var byteLength = bufferView.byteLength || 0;
																var byteOffset = bufferView.byteOffset || 0;

																return arraybuffer.slice(byteOffset, byteOffset + byteLength);
												});
								});
				};

				GLTFParser.prototype.loadAccessors = function () {

								var json = this.json;

								return this._withDependencies(["bufferViews"]).then(function (dependencies) {

												return _each(json.accessors, function (accessor) {

																if (accessor.bufferView === undefined) {

																				// Ignore accessors without a bufferView, which may be used to declare
																				// runtime information about attributes coming from another source
																				// (e.g. Draco compression extension).
																				return accessor;
																}

																var arraybuffer = dependencies.bufferViews[accessor.bufferView];
																var itemSize = WEBGL_TYPE_SIZES[accessor.type];
																var TypedArray = WEBGL_COMPONENT_TYPES[accessor.componentType];

																// For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
																var elementBytes = TypedArray.BYTES_PER_ELEMENT;
																var itemBytes = elementBytes * itemSize;
																var byteStride = json.bufferViews[accessor.bufferView].byteStride;
																var array;

																// The buffer is not interleaved if the stride is the item size in bytes.
																if (byteStride && byteStride !== itemBytes) {

																				// Use the full buffer if it's interleaved.
																				array = new TypedArray(arraybuffer);

																				// Integer parameters to IB/IBA are in array elements, not bytes.
																				var ib = new THREE.InterleavedBuffer(array, byteStride / elementBytes);

																				return new THREE.InterleavedBufferAttribute(ib, itemSize, accessor.byteOffset / elementBytes);
																} else {

																				array = new TypedArray(arraybuffer, accessor.byteOffset, accessor.count * itemSize);

																				return new THREE.BufferAttribute(array, itemSize);
																}
												});
								});
				};

				GLTFParser.prototype.loadTextures = function () {

								var json = this.json;
								var options = this.options;

								return this._withDependencies(["bufferViews"]).then(function (dependencies) {

												return _each(json.textures, function (texture) {

																if (texture.source !== undefined) {

																				return new Promise(function (resolve) {

																								var source = json.images[texture.source];
																								var sourceUri = source.uri;

																								var urlCreator;

																								if (source.bufferView !== undefined) {

																												var bufferView = dependencies.bufferViews[source.bufferView];
																												var blob = new Blob([bufferView], { type: source.mimeType });
																												urlCreator = window.URL || window.webkitURL;
																												sourceUri = urlCreator.createObjectURL(blob);
																								}

																								var textureLoader = THREE.Loader.Handlers.get(sourceUri);

																								if (textureLoader === null) {

																												textureLoader = new THREE.TextureLoader();
																								}

																								textureLoader.setCrossOrigin(options.crossOrigin);

																								textureLoader.load(resolveURL(sourceUri, options.path), function (_texture) {

																												if (urlCreator !== undefined) {

																																urlCreator.revokeObjectURL(sourceUri);
																												}

																												_texture.flipY = false;

																												if (texture.name !== undefined) _texture.name = texture.name;

																												_texture.format = texture.format !== undefined ? WEBGL_TEXTURE_FORMATS[texture.format] : THREE.RGBAFormat;

																												if (texture.internalFormat !== undefined && _texture.format !== WEBGL_TEXTURE_FORMATS[texture.internalFormat]) {

																																console.warn('THREE.GLTF2Loader: Three.js doesn\'t support texture internalFormat which is different from texture format. ' + 'internalFormat will be forced to be the same value as format.');
																												}

																												_texture.type = texture.type !== undefined ? WEBGL_TEXTURE_DATATYPES[texture.type] : THREE.UnsignedByteType;

																												var samplers = json.samplers || {};
																												var sampler = samplers[texture.sampler] || {};

																												_texture.magFilter = WEBGL_FILTERS[sampler.magFilter] || THREE.LinearFilter;
																												_texture.minFilter = WEBGL_FILTERS[sampler.minFilter] || THREE.NearestMipMapLinearFilter;
																												_texture.wrapS = WEBGL_WRAPPINGS[sampler.wrapS] || THREE.RepeatWrapping;
																												_texture.wrapT = WEBGL_WRAPPINGS[sampler.wrapT] || THREE.RepeatWrapping;

																												resolve(_texture);
																								}, undefined, function () {

																												resolve();
																								});
																				});
																}
												});
								});
				};

				GLTFParser.prototype.loadMaterials = function () {

								var json = this.json;
								var extensions = this.extensions;

								return this._withDependencies(['shaders', 'textures']).then(function (dependencies) {

												return _each(json.materials, function (material) {

																var materialType;
																var materialParams = {};
																var materialExtensions = material.extensions || {};

																if (materialExtensions[EXTENSIONS.KHR_MATERIALS_COMMON]) {

																				materialType = extensions[EXTENSIONS.KHR_MATERIALS_COMMON].getMaterialType(material);
																				extensions[EXTENSIONS.KHR_MATERIALS_COMMON].extendParams(materialParams, material, dependencies);
																} else if (materialExtensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {

																				materialType = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].getMaterialType(material);
																				extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].extendParams(materialParams, material, dependencies);
																} else if (materialExtensions[EXTENSIONS.KHR_TECHNIQUE_WEBGL]) {

																				materialType = extensions[EXTENSIONS.KHR_TECHNIQUE_WEBGL].getMaterialType(material);
																				extensions[EXTENSIONS.KHR_TECHNIQUE_WEBGL].extendParams(materialParams, material, dependencies);
																} else if (material.pbrMetallicRoughness !== undefined) {

																				// Specification:
																				// https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material

																				materialType = THREE.MeshStandardMaterial;

																				var metallicRoughness = material.pbrMetallicRoughness;

																				materialParams.color = new THREE.Color(1.0, 1.0, 1.0);
																				materialParams.opacity = 1.0;

																				if (Array.isArray(metallicRoughness.baseColorFactor)) {

																								var array = metallicRoughness.baseColorFactor;

																								materialParams.color.fromArray(array);
																								materialParams.opacity = array[3];
																				}

																				if (metallicRoughness.baseColorTexture !== undefined) {

																								materialParams.map = dependencies.textures[metallicRoughness.baseColorTexture.index];
																				}

																				materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
																				materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;

																				if (metallicRoughness.metallicRoughnessTexture !== undefined) {

																								var textureIndex = metallicRoughness.metallicRoughnessTexture.index;
																								materialParams.metalnessMap = dependencies.textures[textureIndex];
																								materialParams.roughnessMap = dependencies.textures[textureIndex];
																				}
																} else {

																				materialType = THREE.MeshPhongMaterial;
																}

																if (material.doubleSided === true) {

																				materialParams.side = THREE.DoubleSide;
																}

																var alphaMode = material.alphaMode || ALPHA_MODES.OPAQUE;

																if (alphaMode !== ALPHA_MODES.OPAQUE) {

																				materialParams.transparent = true;
																} else {

																				materialParams.transparent = false;
																}

																if (material.normalTexture !== undefined) {

																				materialParams.normalMap = dependencies.textures[material.normalTexture.index];
																}

																if (material.occlusionTexture !== undefined) {

																				materialParams.aoMap = dependencies.textures[material.occlusionTexture.index];
																}

																if (material.emissiveFactor !== undefined) {

																				if (materialType === THREE.MeshBasicMaterial) {

																								materialParams.color = new THREE.Color().fromArray(material.emissiveFactor);
																				} else {

																								materialParams.emissive = new THREE.Color().fromArray(material.emissiveFactor);
																				}
																}

																if (material.emissiveTexture !== undefined) {

																				if (materialType === THREE.MeshBasicMaterial) {

																								materialParams.map = dependencies.textures[material.emissiveTexture.index];
																				} else {

																								materialParams.emissiveMap = dependencies.textures[material.emissiveTexture.index];
																				}
																}

																var _material;

																if (materialType === THREE.ShaderMaterial) {

																				_material = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(materialParams);
																} else {

																				_material = new materialType(materialParams);
																}

																if (material.name !== undefined) _material.name = material.name;

																return _material;
												});
								});
				};

				GLTFParser.prototype.loadGeometries = function (primitives) {

								var extensions = this.extensions;

								return this._withDependencies(['accessors', 'bufferViews']).then(function (dependencies) {

												return _each(primitives, function (primitive) {

																if (primitive.extensions && primitive.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION]) {

																				var dracoExtension = extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];

																				return new Promise(function (resolve) {

																								dracoExtension.decodePrimitive(primitive, dependencies, resolve);
																				});
																}

																geometry = new THREE.BufferGeometry();

																var attributes = primitive.attributes;

																for (var attributeId in attributes) {

																				var attributeEntry = attributes[attributeId];

																				if (attributeEntry === undefined) return;

																				var bufferAttribute = dependencies.accessors[attributeEntry];

																				switch (attributeId) {

																								case 'POSITION':

																												geometry.setAttribute('position', bufferAttribute);
																												break;

																								case 'NORMAL':

																												geometry.setAttribute('normal', bufferAttribute);
																												break;

																								case 'TEXCOORD_0':
																								case 'TEXCOORD0':
																								case 'TEXCOORD':

																												geometry.setAttribute('uv', bufferAttribute);
																												break;

																								case 'TEXCOORD_1':

																												geometry.setAttribute('uv2', bufferAttribute);
																												break;

																								case 'COLOR_0':
																								case 'COLOR0':
																								case 'COLOR':

																												geometry.setAttribute('color', bufferAttribute);
																												break;

																								case 'WEIGHTS_0':
																								case 'WEIGHT':
																												// WEIGHT semantic deprecated.

																												geometry.setAttribute('skinWeight', bufferAttribute);
																												break;

																								case 'JOINTS_0':
																								case 'JOINT':
																												// JOINT semantic deprecated.

																												geometry.setAttribute('skinIndex', bufferAttribute);
																												break;

																				}
																}

																if (primitive.indices !== undefined) {

																				geometry.setIndex(dependencies.accessors[primitive.indices]);
																}

																return geometry;
												});
								});
				};

				GLTFParser.prototype.loadMeshes = function () {

								var scope = this;
								var json = this.json;
								var extensions = this.extensions;

								return this._withDependencies(['materials']).then(function (dependencies) {

												return _each(json.meshes, function (mesh) {

																var group = new THREE.Group();

																if (mesh.name !== undefined) group.name = mesh.name;
																if (mesh.extras) group.userData = mesh.extras;

																var primitives = mesh.primitives || [];

																return scope.loadGeometries(primitives).then(function (geometries) {

																				for (var name in primitives) {

																								var primitive = primitives[name];
																								var geometry = geometries[name];

																								var material = primitive.material === undefined ? createDefaultMaterial() : dependencies.materials[primitive.material];

																								if (material.aoMap && geometry.attributes.uv2 === undefined && geometry.attributes.uv !== undefined) {

																												console.log('GLTF2Loader: Duplicating UVs to support aoMap.');
																												geometry.setAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2));
																								}

																								if (geometry.attributes.color !== undefined) {

																												material.vertexColors = THREE.VertexColors;
																												material.needsUpdate = true;
																								}

																								var mesh;

																								if (primitive.mode === WEBGL_CONSTANTS.TRIANGLES || primitive.mode === undefined) {

																												mesh = new THREE.Mesh(geometry, material);
																								} else if (primitive.mode === WEBGL_CONSTANTS.LINES) {

																												mesh = new THREE.LineSegments(geometry, material);
																								} else {

																												throw new Error('GLTF2Loader: Only TRIANGLE and LINE primitives are supported.');
																								}

																								mesh.name = name === '0' ? group.name : group.name + name;

																								if (primitive.targets !== undefined) {

																												addMorphTargets(mesh, primitive, dependencies);
																								}

																								if (primitive.extras) mesh.userData = primitive.extras;

																								group.add(mesh);
																				}

																				return group;
																});
												});
								});
				};

				/**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
     */
				GLTFParser.prototype.loadCameras = function () {

								var json = this.json;

								return _each(json.cameras, function (camera) {

												var _camera;

												var params = camera[camera.type];

												if (!params) {

																console.warn('GLTF2Loader: Missing camera parameters.');
																return;
												}

												if (camera.type === 'perspective') {

																var aspectRatio = params.aspectRatio || 1;
																var xfov = params.yfov * aspectRatio;

																_camera = new THREE.PerspectiveCamera(THREE.Math.radToDeg(xfov), aspectRatio, params.znear || 1, params.zfar || 2e6);
												} else if (camera.type === 'orthographic') {

																_camera = new THREE.OrthographicCamera(params.xmag / -2, params.xmag / 2, params.ymag / 2, params.ymag / -2, params.znear, params.zfar);
												}

												if (camera.name !== undefined) _camera.name = camera.name;
												if (camera.extras) _camera.userData = camera.extras;

												return _camera;
								});
				};

				GLTFParser.prototype.loadSkins = function () {

								var json = this.json;

								return this._withDependencies(["accessors"]).then(function (dependencies) {

												return _each(json.skins, function (skin) {

																var _skin = {
																				joints: skin.joints,
																				inverseBindMatrices: dependencies.accessors[skin.inverseBindMatrices]
																};

																return _skin;
												});
								});
				};

				GLTFParser.prototype.loadAnimations = function () {

								var json = this.json;

								return this._withDependencies(["accessors", "nodes"]).then(function (dependencies) {

												return _each(json.animations, function (animation, animationId) {

																var tracks = [];

																for (var channelId in animation.channels) {

																				var channel = animation.channels[channelId];
																				var sampler = animation.samplers[channel.sampler];

																				if (sampler) {

																								var target = channel.target;
																								var name = target.node !== undefined ? target.node : target.id; // NOTE: target.id is deprecated.
																								var input = animation.parameters !== undefined ? animation.parameters[sampler.input] : sampler.input;
																								var output = animation.parameters !== undefined ? animation.parameters[sampler.output] : sampler.output;

																								var inputAccessor = dependencies.accessors[input];
																								var outputAccessor = dependencies.accessors[output];

																								var node = dependencies.nodes[name];

																								if (node) {

																												node.updateMatrix();
																												node.matrixAutoUpdate = true;

																												var TypedKeyframeTrack;

																												switch (PATH_PROPERTIES[target.path]) {

																																case PATH_PROPERTIES.weights:

																																				TypedKeyframeTrack = THREE.NumberKeyframeTrack;
																																				break;

																																case PATH_PROPERTIES.rotation:

																																				TypedKeyframeTrack = THREE.QuaternionKeyframeTrack;
																																				break;

																																case PATH_PROPERTIES.position:
																																case PATH_PROPERTIES.scale:
																																default:

																																				TypedKeyframeTrack = THREE.VectorKeyframeTrack;
																																				break;

																												}

																												var targetName = node.name ? node.name : node.uuid;
																												var interpolation = sampler.interpolation !== undefined ? INTERPOLATION[sampler.interpolation] : THREE.InterpolateLinear;

																												var targetNames = [];

																												if (PATH_PROPERTIES[target.path] === PATH_PROPERTIES.weights) {

																																// node should be THREE.Group here but
																																// PATH_PROPERTIES.weights(morphTargetInfluences) should be
																																// the property of a mesh object under node.
																																// So finding targets here.

																																node.traverse(function (object) {

																																				if (object.isMesh === true && object.material.morphTargets === true) {

																																								targetNames.push(object.name ? object.name : object.uuid);
																																				}
																																});
																												} else {

																																targetNames.push(targetName);
																												}

																												// KeyframeTrack.optimize() will modify given 'times' and 'values'
																												// buffers before creating a truncated copy to keep. Because buffers may
																												// be reused by other tracks, make copies here.
																												for (var i = 0, il = targetNames.length; i < il; i++) {

																																tracks.push(new TypedKeyframeTrack(targetNames[i] + '.' + PATH_PROPERTIES[target.path], THREE.AnimationUtils.arraySlice(inputAccessor.array, 0), THREE.AnimationUtils.arraySlice(outputAccessor.array, 0), interpolation));
																												}
																								}
																				}
																}

																var name = animation.name !== undefined ? animation.name : "animation_" + animationId;

																return new THREE.AnimationClip(name, undefined, tracks);
												});
								});
				};

				GLTFParser.prototype.loadNodes = function () {

								var json = this.json;
								var extensions = this.extensions;
								var scope = this;

								var nodes = json.nodes || [];
								var skins = json.skins || [];

								// Nothing in the node definition indicates whether it is a Bone or an
								// Object3D. Use the skins' joint references to mark bones.
								skins.forEach(function (skin) {

												skin.joints.forEach(function (id) {

																nodes[id].isBone = true;
												});
								});

								return _each(json.nodes, function (node) {

												var matrix = new THREE.Matrix4();

												var _node = node.isBone === true ? new THREE.Bone() : new THREE.Object3D();

												if (node.name !== undefined) {

																_node.name = node.name; //THREE.PropertyBinding.sanitizeNodeName( node.name );
												}

												if (node.extras) _node.userData = node.extras;

												if (node.matrix !== undefined) {

																matrix.fromArray(node.matrix);
																_node.applyMatrix(matrix);
												} else {

																if (node.translation !== undefined) {

																				_node.position.fromArray(node.translation);
																}

																if (node.rotation !== undefined) {

																				_node.quaternion.fromArray(node.rotation);
																}

																if (node.scale !== undefined) {

																				_node.scale.fromArray(node.scale);
																}
												}

												return _node;
								}).then(function (__nodes) {

												return scope._withDependencies(["meshes", "skins", "cameras"]).then(function (dependencies) {

																return _each(__nodes, function (_node, nodeId) {

																				var node = json.nodes[nodeId];

																				var meshes;

																				if (node.mesh !== undefined) {

																								meshes = [node.mesh];
																				} else if (node.meshes !== undefined) {

																								console.warn('GLTF2Loader: Legacy glTF file detected. Nodes may have no more than 1 mesh.');

																								meshes = node.meshes;
																				}

																				if (meshes !== undefined) {

																								for (var meshId in meshes) {

																												var mesh = meshes[meshId];
																												var group = dependencies.meshes[mesh];

																												if (group === undefined) {

																																console.warn('GLTF2Loader: Couldn\'t find node "' + mesh + '".');
																																continue;
																												}

																												for (var childrenId in group.children) {

																																var child = group.children[childrenId];

																																// clone Mesh to add to _node

																																var originalMaterial = child.material;
																																var originalGeometry = child.geometry;
																																var originalUserData = child.userData;
																																var originalName = child.name;

																																var material;

																																if (originalMaterial.isDeferredShaderMaterial) {

																																				originalMaterial = material = originalMaterial.create();
																																} else {

																																				material = originalMaterial;
																																}

																																switch (child.type) {

																																				case 'LineSegments':
																																								child = new THREE.LineSegments(originalGeometry, material);
																																								break;

																																				case 'LineLoop':
																																								child = new THREE.LineLoop(originalGeometry, material);
																																								break;

																																				case 'Line':
																																								child = new THREE.Line(originalGeometry, material);
																																								break;

																																				default:
																																								child = new THREE.Mesh(originalGeometry, material);

																																}

																																child.castShadow = true;
																																child.userData = originalUserData;
																																child.name = originalName;

																																var skinEntry;

																																if (node.skin !== undefined) {

																																				skinEntry = dependencies.skins[node.skin];
																																}

																																// Replace Mesh with SkinnedMesh in library
																																if (skinEntry) {

																																				var geometry = originalGeometry;
																																				material = originalMaterial;
																																				material.skinning = true;

																																				child = new THREE.SkinnedMesh(geometry, material);
																																				child.castShadow = true;
																																				child.userData = originalUserData;
																																				child.name = originalName;

																																				var bones = [];
																																				var boneInverses = [];

																																				for (var i = 0, l = skinEntry.joints.length; i < l; i++) {

																																								var jointId = skinEntry.joints[i];
																																								var jointNode = __nodes[jointId];

																																								if (jointNode) {

																																												bones.push(jointNode);

																																												var m = skinEntry.inverseBindMatrices.array;
																																												var mat = new THREE.Matrix4().fromArray(m, i * 16);
																																												boneInverses.push(mat);
																																								} else {

																																												console.warn("WARNING: joint: '" + jointId + "' could not be found");
																																								}
																																				}

																																				child.bind(new THREE.Skeleton(bones, boneInverses), child.matrixWorld);
																																}

																																_node.add(child);
																												}
																								}
																				}

																				if (node.camera !== undefined) {

																								var camera = dependencies.cameras[node.camera];

																								_node.add(camera);
																				}

																				if (node.extensions && node.extensions[EXTENSIONS.KHR_LIGHTS] && node.extensions[EXTENSIONS.KHR_LIGHTS].light !== undefined) {

																								var lights = extensions[EXTENSIONS.KHR_LIGHTS].lights;
																								_node.add(lights[node.extensions[EXTENSIONS.KHR_LIGHTS].light]);
																				}

																				return _node;
																});
												});
								});
				};

				GLTFParser.prototype.loadScenes = function () {

								var json = this.json;
								var extensions = this.extensions;

								// scene node hierachy builder

								function buildNodeHierachy(nodeId, parentObject, allNodes) {

												var _node = allNodes[nodeId];
												parentObject.add(_node);

												var node = json.nodes[nodeId];

												if (node.children) {

																var children = node.children;

																for (var i = 0, l = children.length; i < l; i++) {

																				var child = children[i];
																				buildNodeHierachy(child, _node, allNodes);
																}
												}
								}

								return this._withDependencies(["nodes"]).then(function (dependencies) {

												return _each(json.scenes, function (scene) {

																var _scene = new THREE.Scene();
																if (scene.name !== undefined) _scene.name = scene.name;

																if (scene.extras) _scene.userData = scene.extras;

																var nodes = scene.nodes || [];

																for (var i = 0, l = nodes.length; i < l; i++) {

																				var nodeId = nodes[i];
																				buildNodeHierachy(nodeId, _scene, dependencies.nodes);
																}

																_scene.traverse(function (child) {

																				// Register raw material meshes with GLTF2Loader.Shaders
																				if (child.material && child.material.isRawShaderMaterial) {

																								child.gltfShader = new GLTFShader(child, dependencies.nodes);
																								child.onBeforeRender = function (renderer, scene, camera) {
																												this.gltfShader.update(scene, camera);
																								};
																				}

																				// for Specular-Glossiness.
																				if (child.material && child.material.type === 'ShaderMaterial') {

																								child.onBeforeRender = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].refreshUniforms;
																				}
																});

																// Ambient lighting, if present, is always attached to the scene root.
																if (scene.extensions && scene.extensions[EXTENSIONS.KHR_LIGHTS] && scene.extensions[EXTENSIONS.KHR_LIGHTS].light !== undefined) {

																				var lights = extensions[EXTENSIONS.KHR_LIGHTS].lights;
																				_scene.add(lights[scene.extensions[EXTENSIONS.KHR_LIGHTS].light]);
																}

																return _scene;
												});
								});
				};

				return GLTF2Loader;
}();

},{}],242:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.testCompatibility = testCompatibility;

var _platformUtils = require('../utils/platform-utils');

function testCompatibility() {

	// headset controller
	_platformUtils.PlatformUtils.getControllerType(function (clientType, info) {
		ga('send', 'event', 'VRPage', 'HeadsetCheck', info);
	});

	// controller
	window.addEventListener('gamepadconnected', function (e) {
		var gamepads = navigator.getGamepads();
		for (var i = 0; i < gamepads.length; ++i) {
			if (gamepads[i]) {
				ga('send', 'event', 'VRPage', 'ControllerCheck', gamepads[i].id);
			}
		}
	});

	// audio context
	try {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		var context = new AudioContext();
		ga('send', 'event', 'init', 'supported', 'web-audio');
	} catch (e) {
		ga('send', 'event', 'init', 'unsupported', 'web-audio');
	}
} // Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

/**
 * tests compatibility for analytics
 *
 */

},{"../utils/platform-utils":244}],243:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * MathUtils
 * 
 * Simple singleton math utility class.
 */

var StaticMathUtils = function () {
	function StaticMathUtils() {
		_classCallCheck(this, StaticMathUtils);
	}

	_createClass(StaticMathUtils, [{
		key: "clamp",


		/**
   * Clamps a given value between min and max
   */
		value: function clamp(value, min, max) {
			return Math.min(Math.max(value, min), max);
		}

		/**
   * Linearly interpolates between two given values
   */

	}, {
		key: "lerp",
		value: function lerp(a, b, t) {
			return a * (1 - t) + b * t;
		}
	}, {
		key: "smooth1D",
		value: function smooth1D(current, target, velocity, dt, smoothTime, smoothMax) {
			var t = 2 / smoothTime;
			var t2 = t * dt;
			var cubic = 1 / (1 + t2 + 0.5 * t2 * t2 + 0.25 * t2 * t2 * t2);
			var limit = smoothMax * smoothTime;
			var delta = current - target;
			var error = MathUtils.clamp(delta, -limit, limit);
			var d = (velocity + t * error) * dt;

			return {
				velocity: (velocity - t * d) * cubic,
				value: current - error + (d + error) * cubic
			};
		}

		/**
   * Same as smooth1D(), but for THREE.Vector3s
   */

	}, {
		key: "smooth3D",
		value: function smooth3D(current, target, velocity, dt, smoothTime, smoothMax) {
			var smooth = {
				x: this.smooth1D(current.x, target.x, velocity.x, dt, smoothTime, smoothMax),
				y: this.smooth1D(current.y, target.y, velocity.y, dt, smoothTime, smoothMax),
				z: this.smooth1D(current.z, target.z, velocity.z, dt, smoothTime, smoothMax)
			};

			velocity.x = smooth.x.velocity;
			velocity.y = smooth.y.velocity;
			velocity.z = smooth.z.velocity;

			current.x = smooth.x.value;
			current.y = smooth.y.value;
			current.z = smooth.z.value;
		}
	}]);

	return StaticMathUtils;
}();

var MathUtils = exports.MathUtils = new StaticMathUtils();

},{}],244:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlatformUtils = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the 'License');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an 'AS IS' BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/**
 * StaticPlatformUtils
 *
 * Singleton class which contains various platform-checking functions.
 */


var _scene = require('../core/scene');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StaticPlatformUtils = function () {
  function StaticPlatformUtils() {
    _classCallCheck(this, StaticPlatformUtils);
  }

  _createClass(StaticPlatformUtils, [{
    key: 'isMobile',


    /**
     * Returns true if the user is on a mobile device
     */
    value: function isMobile() {
      return AFRAME.utils.device.isMobile();
    }

    /**
     * Returns true if the user is on a gear vr device
     * Note: isGearVR was removed in A-Frame 1.x; GearVR is discontinued
     */

  }, {
    key: 'isGearVR',
    value: function isGearVR() {
      return false;
    }

    /**
     * Returns true if the device is a tablet.
     * Checks the aspect ratio and userAgent for confirmation.
     */

  }, {
    key: 'isTablet',
    value: function isTablet() {
      return Math.max(window.screen.width, window.screen.height) / Math.min(window.screen.width, window.screen.height) < 1.35 && !/(Oculus|Gear)/.test(navigator.userAgent);
    }

    /**
     * Returns true if the user is in 360 mode
     */

  }, {
    key: 'is360',
    value: function is360() {
      return _scene.Scene.modeType === '360';
    }
  }, {
    key: 'isIOSSafari',
    value: function isIOSSafari() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      return (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream
      );
    }

    /**
     * Returns true if the given component is enabled for the current platform
     */

  }, {
    key: 'isEnabledOnPlatform',
    value: function isEnabledOnPlatform(component) {
      if (component.el.hasAttribute('mobile-only')) {
        return AFRAME.utils.device.isMobile();
      }

      if (component.el.hasAttribute('desktop-only')) {
        return !AFRAME.utils.device.isMobile();
      }

      return true;
    }

    /**
        * Returns true if MP4 is supported
        */

  }, {
    key: 'isMp4Supported',
    value: function isMp4Supported() {
      return !!document.createElement('video').canPlayType('video/mp4; codecs=avc1.42E01E,mp4a.40.2');
    }

    /**
     * Async function which calls a given callback with either 'mouse-touch' or 'controller',
     * depending on the user's controller type. The controller type is derived from the VR display
     * name, if any are found.
     */

  }, {
    key: 'getControllerType',
    value: function getControllerType(callBack) {
      // Use WebXR to detect VR support instead of deprecated navigator.getVRDisplays()
      if (navigator.xr) {
        navigator.xr.isSessionSupported('immersive-vr').then(function (supported) {
          if (supported) {
            // WebXR is available — use controller mode (A-Frame 1.x auto-detects controller type)
            callBack('controller', 'webxr');
          } else {
            callBack('mouse-touch', 'other');
          }
        }).catch(function () {
          callBack('mouse-touch', 'other');
        });
      } else {
        callBack('mouse-touch', 'other');
      }
    }

    /**
     * Adjust the panel's position depending on platform. On desktop, the
     * panel needs to be moved closer to the camera
     */

  }, {
    key: 'getCardZOffset',
    value: function getCardZOffset() {
      var isPortrait = window.innerHeight > window.innerWidth;
      var isMobile = AFRAME.utils.device.isMobile();
      var is360 = _scene.Scene.modeType === '360';
      var z = -1.75; // all vr
      z = is360 && !isMobile ? -1.25 : z; // 360 , desktop
      z = is360 && isMobile && isPortrait ? -2 : z; // 360, mobile, portrait
      z = is360 && isMobile && !isPortrait ? -1 : z; // 360, mobile, landscape
      return z;
    }
  }]);

  return StaticPlatformUtils;
}();

var PlatformUtils = exports.PlatformUtils = new StaticPlatformUtils();

},{"../core/scene":212}],245:[function(require,module,exports){
'use strict';

require('whatwg-fetch');

var _promisePolyfill = require('promise-polyfill');

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

var _splash = require('./splash/splash');

var _compatibility = require('./utils/compatibility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.

// Fetch polyfill
if (!window.Promise) window.Promise = _promisePolyfill2.default;

// Promise polyfill


require('./third_party/three/gltf-loader');
require('./third_party/three/draco-loader');

require('./components/boundary-sphere');
require('./components/intro-player');
require('./components/rover');
require('./components/intro-video');
require('./components/terrain');
require('./components/rover-poi');
require('./components/debug-trace');
require('./components/look-at-target');
require('./components/better-raycaster');
require('./components/controller-dot');
require('./components/controller-ray');
require('./components/controller-arc');
require('./components/controller-parabola');
require('./components/poi-title-text');
require('./components/poi-spin-widget');
require('./components/poi-pole');
require('./components/poi-marker');
require('./components/scene-intro-label');
require('./components/horizon-marker');
require('./components/map-card');
require('./components/map-path');
require('./components/map-marker');
require('./components/map-site-card');
require('./components/map-background');
require('./components/info-card');
require('./components/info-card-text');
require('./components/orientation-card');
require('./components/orientation-card-column');
require('./components/frustum');
require('./components/hitbox');
require('./components/opacity');
require('./components/fade-to-black');
require('./components/sky-wireframe');
require('./components/sky-gradient');
require('./components/sky-blackout');
require('./utils/compatibility');

// Restore the crossOrigin property to its default value.
// AFRAME modifies it and breaks CORS in some versions of Safari.
THREE.TextureLoader.prototype.crossOrigin = undefined;
THREE.ImageLoader.prototype.crossOrigin = undefined;

document.addEventListener("DOMContentLoaded", function () {
	(0, _compatibility.testCompatibility)();
	(0, _splash.initSplash)();
});

},{"./components/better-raycaster":174,"./components/boundary-sphere":175,"./components/controller-arc":176,"./components/controller-dot":177,"./components/controller-parabola":178,"./components/controller-ray":179,"./components/debug-trace":180,"./components/fade-to-black":181,"./components/frustum":182,"./components/hitbox":183,"./components/horizon-marker":184,"./components/info-card":186,"./components/info-card-text":185,"./components/intro-player":187,"./components/intro-video":188,"./components/look-at-target":189,"./components/map-background":190,"./components/map-card":191,"./components/map-marker":192,"./components/map-path":193,"./components/map-site-card":194,"./components/opacity":195,"./components/orientation-card":197,"./components/orientation-card-column":196,"./components/poi-marker":198,"./components/poi-pole":199,"./components/poi-spin-widget":200,"./components/poi-title-text":201,"./components/rover":203,"./components/rover-poi":202,"./components/scene-intro-label":204,"./components/sky-blackout":205,"./components/sky-gradient":206,"./components/sky-wireframe":207,"./components/terrain":208,"./splash/splash":236,"./third_party/three/draco-loader":240,"./third_party/three/gltf-loader":241,"./utils/compatibility":242,"promise-polyfill":136,"whatwg-fetch":168}],246:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * JPEGWorker
 *
 * Singleton container for the jpeg decoder worker used by the terrain component
 * for decoding jpeg textures outside of the render thread.
 */

var StaticJPEGWorker = function StaticJPEGWorker() {
	var _this = this;

	_classCallCheck(this, StaticJPEGWorker);

	// Initialize jpeg worker, which is used by the ProgressiveTexture loader.
	this.worker = new Worker('third_party/bompo/jpeg-worker.js');
	this.host = null;

	// Pass jpegWorker events to whatever object happens to be
	// set to the jpegWorkerHost variable. This is done to limit
	// the number of objects that can listen to events from the
	// jpeg worker, since only one object can be using the worker
	// at once.
	this.worker.onmessage = function (event) {
		if (_this.host) {
			_this.host.onWorkerMessage(event);
		}
	};
};

var JPEGWorker = exports.JPEGWorker = new StaticJPEGWorker();

},{}]},{},[245]);
