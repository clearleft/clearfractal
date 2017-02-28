
import ClearCore from './clearcore.js';

/******
    Trigger()

    A trigger is a one-use collision detection for a point somewhere on the screen: bottom, middle or top.
    Using the Core library, we determine when the top of the trigger box hits either the bottom, middle or top of the screen, then run a function which will do up to two things:
    It'll run a custom function, if one is provided, or run a Tween, if one is provided.

    Examples:
        - we could play a video when its element or its container reaches the middle of the screen.


    # usage:

    new Trigger(elm, {
        triggerPosition: 'middle',
        onTrigger: function() { updateStuffHere(); }
    })
    .setTween( new Tween() )
 ******/

function Trigger(elm, options={}) {
    this.type       = 'trigger';
    this._elm       = elm;
    this._triggered = false;
    this._state     = 'BEFORE';

    this.top        = 0;

    // options
    this.onTrigger          = options.onTrigger || function() {};
    this.triggerPosition    = options.triggerPosition || 'top'; // top, middle, bottom (what part of the viewport the trigger needs to reach)

    ClearCore.addTrigger(this);
}
Trigger.prototype = {
    calculateTriggerPoints() {
        this.top = (this._elm.getBoundingClientRect().top + ClearCore.scrollTop) |0;
    },

    setTween(tween) {
        this._tween = tween;
    },

    trigger(triggerNum) {
        if( !this._triggered ) {
            this.onTrigger(triggerNum);

            if( this._tween ) {
                this._tween.play();
            }

            this._triggered = true;
        }
    }

}

export Trigger;

/******
    TriggerBox()

    A TriggerBox is, at its core, a bounding box collision detection for a point somewhere on the screen: bottom, middle or top.
    Using the Core library, we determine when the top of the trigger box hits either the bottom, middle or top of the screen, then run a function which will do up to two things:
    It'll run a custom function, if one is provided, or run a Tween, if one is provided.

    Examples:
        - we could play a video when its element or its container reaches the middle of the screen.


    # usage:

    new TriggerBox(elm, {
        triggerPosition: 'bottom',
        onEnter: function() { enterCode(); },
        onExit: function() { exitCode(); }
    })
    .setTween( new Tween() )
 ******/

function TriggerBox(elm, options={}) {

    this.type       = 'triggerBox';
    this._elm       = elm;
    this._triggered = false;
    this.top        = 0;
    this._oldState  = 'BEFORE';
    this.state      = 'BEFORE';

    this.onEnter            = options.onEnter || function() {};
    this.onExit             = options.onExit || function() {};
    this.triggerPosition    = options.triggerPosition || 'top'; // top, middle, bottom (what part of the viewport the trigger needs to reach)
    this.duration           = options.duration || 0;

    console.log('adding triggerBox');
    ClearCore.addTrigger(this);
    // return this;
}

TriggerBox.prototype = {

    calculateTriggerPoints() {
        let rect    = this._elm.getBoundingClientRect(); // only call once for fewer reflows
        this.top    = (rect.top + ClearCore.scrollTop) |0;
        this.height = this.duration && this.duration > 0 ? this.duration : rect.height |0;
        this.bottom = this.top + this.height;
    },

    setTween(tween) {
        this._tween = tween;
    },

    trigger() {
        // runs more like an update function
        // only fires if whole area is in view.
        if( !this._triggered ) {
            console.log('triggering');

            this._triggered = true;
            this._oldState = this.state;
            this.onEnter();

            // reset tween
            if( this._tween ) {
                this._tween._animationState = 1;
                ClearCore.addTween(this._tween);
            }
        }
    },

    untrigger() {
        if( this.state != this._oldState ) {
            console.log('untriggering - ' + this.state);

            this._triggered = false;
            this._oldState  = this.state;
            this.onExit(this);
        }
    }

}

export TriggerBox;
