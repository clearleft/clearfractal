
import ClearCore from './clearcore.js';
import Easings from './easings.js';
import Element from './element.js';
import { ElementPool } from './element.js';

/******
    Tween()

    A Tween, short for 'in-between', is the same as interpolation and simply calculates values between two states. To be honest, it's more of an abstraction around an interpolation, but we're just doing both in one here.
    A tween from 0 to 1 can occur over 500ms, 300px, or 100 percent.
    The entire point of the easing function applied to the tween is to take the start state, total duration, amount to change and what the current duration is.
    Whether that's in ms, px or percent is generally up to you.
*/


// Making an assumption that a Tween begins on creation.
function Tween(elm, from, to, duration, options={}) {

    this._animationState    = 0; // 0 = stopped, 1 = playing
    this._counter           = 0;

    this.from       = from              || {};
    this.to         = to                || {};
    this.duration   = duration          || 1; // if time-based, use ms.

    this.type       = options.type      || 'time'; // 'time' or 'scroll'
    this.easing     = options.easing    || 'easeInOutQuad';
    this.delay      = options.delay     || 0;
    this.paused     = options.paused    || false;

    this.easing     = Easings[this.easing] ? Easings[this.easing] : Easings.easeInOutQuad;

    // check the pool of elements first
    this.Element    = ElementPool.getElement(elm);

    // precalculate previously set styles (inlined).
    // This does not account for styles changed either during or after a Tween (not that you should change anything _during_ but re-running a Tween is more likely)
    this.keys        = Object.keys(this.from);
    this.totalKeys   = this.keys.length;

    // **This doesn't seem very elegant.**
    // Here we add any animation keys to the element's list of keys which it may or may not have based on any styles already applied to the element.
    // Then we filter those keys to remove potential duplicates.
    this.Element.keys = this.Element.keys.concat(this.keys).filter( (value, index, self) => self.indexOf(value) === index );

    // queue unless told otherwise
    if( !this.paused ) {
        this.play();
    }
}
Tween.prototype = {

    play() {
        this._animationState = 1;
        ClearCore.addTween(this);
    },

    isAnimating() {
        return this._animationState;
    },

    getPosition() {
        if( this._counter >= this.duration ) {
            return 100;
        }
        if( this._counter <= this.duration ) {
            return 0;
        }

        return (this._counter/this.duration) * 100;
    },

    setPosition(percent) {
        this._counter = (this.duration/100) * percent;
    },

    update(delta=0) {
        this._counter += delta;

        // the easing functions don't spit out the final value unless the total time is exactly the duration. Seems a bit stupid.
        if( this._counter >= (this.duration + this.delay) ) {
            this._animationState = 0;
            this._counter = (this.duration + this.delay);
        }
        else if( this._counter <= 0 ) {
            this._animationState = 0;
            this._counter = 0;
        }

        // do not update tween styles until we've passed any delay which has been set
        if( this.delay && this._totalTime < this.delay ) {
            return;
        }

        for (let i = 0; i < this.totalKeys; i++) {
            let key = this.keys[i];
            this.Element.styles[key] = this.easing((this._counter-this.delay), this.from[key], (this.to[key] - this.from[key]), this.duration);
        }
    },

    render() {

        // if a delay has been set and the total time is less than the delay, do not set any styles.
        // saves on page reflow/style recalcs if we do not set attributes unecessarily.
        if( this.delay && this._totalTime < this.delay ) {
            return;
        }

        this.Element.render();
    }
}

export default Tween;
