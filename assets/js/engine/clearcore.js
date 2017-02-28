
let ClearCore = {

    init() {
        this._windowLoaded          = false;
        this._lastTime              = window.performance.now();

        // calculate and store initial measurements of STUFF.
        this.screenDimensions       = { width: window.innerWidth, height: window.innerHeight };

        let scrollOffset            = window.pageYOffset;

        // scrolling
        this.scrollTop              = scrollOffset |0;
        this.scrollBottom           = (scrollOffset + this.screenDimensions.height) |0;
        this.previousScrollTop      = this.scrollTop;
        this.scrollDirection;
        this.isScrolling            = false;

        // resize
        this._resizeTimer           = 0;
        this._resizeTimerDuration   = 300;
        this._resizeQueue           = [];   // List of objects. Variable length.
        this._resizeTriggered       = true; // set to true now to stop the resize triggering on page load.
        this.isResizing             = false;

        // animations
        this._tweens                = [];  // List of objects. Variable length.

        // triggers
        this._triggerList           = [];  // List of objects. Variable length.

        // For custom objects, we will call them 'particles'. They take care of themselves but all get 'updated' all the time, instead of getting removed from a queue.
        this._particles             = [];

        this.isIdling               = true;

        // initial setup
        this.setup();

        // handle window events
        window.addEventListener('scroll', this.onScroll.bind(this));
        window.addEventListener('resize', this.onResize.bind(this));
        window.addEventListener('load', this.onLoad.bind(this));

        // start the loop
        window.requestAnimationFrame(this.loop.bind(this));
    },

    /***********************************
     * Event Handlers
     **********************************/

    onScroll(e) {
        let scrollOffset    = window.pageYOffset;

        this.scrollTop      = scrollOffset |0;
        this.scrollBottom   = (scrollOffset + this.screenDimensions.height) |0;

        this.isScrolling    = true;
    },

    onResize(e) {
        this._resizeTimer       = 0;
        this._resizeTriggered   = false;
        this.isResizing         = true;
    },

    onLoad(e) {
        console.info('window loaded');
        this._windowLoaded = true;

        // second round of calculations. Deals with elements which have changed dimension due to later loading assets (images)
        this.setup();
    },

    /***********************************
     * Grouped and Batched Operations
     **********************************/

    setup() {
        for (var i = 0; i < this._triggerList.length; i++) {
            this._triggerList[i].calculateTriggerPoints();
        }
    },


    /***********************************
     * The One loop
     **********************************/

    loop() {
        let now             = window.performance.now();
        let elapsed         = now - this._lastTime;
        let scrollPerFrame  = this.scrollTop - this.previousScrollTop;
        let velocity        = Math.abs(scrollPerFrame) / elapsed;

        this.scrollDirection    = scrollPerFrame < 0 ? 'UP' : 'DOWN';
        this._lastTime          = now;

        // Handle animations
        if( this._tweens.length ) {

            // loop through all currently running animations
            for (var i = 0; i < this._tweens.length; i++) {

                // if the animation has not finished, update it
                if( this._tweens[i].isAnimating() ) {

                    // if the animation/tween is a controlled via scrolling instead of time, then pass in the amount
                    // scrolled since the last frame instead of time passed since last frame.
                    if( this._tweens[i].type == 'scroll' ) {
                        if( scrollPerFrame != 0 ) {
                            this._tweens[i].update(scrollPerFrame);
                        }
                    }
                    else {
                        this._tweens[i].update(elapsed);
                    }

                    // now render the animation.
                    this._tweens[i].render();
                }
                // otherwise, remove it from the animation queue
                else {
                    // fast splice
                    let len = this._tweens.length;
                    let idx = i;
                    while (idx < len) {
                        this._tweens[idx] = this._tweens[idx+1];
                        idx++;
                    }
                    this._tweens.length--;
                }
            }

            this.isIdling = false;
        }

        // collisions/triggers
        if( this._triggerList.length ) {

            let offset;
            let triggerTop;
            let triggerBottom;

            for(var i = 0; i < this._triggerList.length; i++) {

                offset = 0;

                // calculate offsets
                if( this._triggerList[i].triggerPosition && this._triggerList[i].triggerPosition == 'middle' ) {
                    offset = (this.screenDimensions.height >> 1);
                }
                else if( this._triggerList[i].triggerPosition && this._triggerList[i].triggerPosition == 'bottom' ) {
                    offset = this.screenDimensions.height;
                }

                triggerTop     = this._triggerList[i].top - offset;
                triggerBottom  = triggerTop + this._triggerList[i].height;

                if( this._triggerList[i].type == 'trigger' ) {

                    if( this.scrollTop >= triggerTop ) {
                        this._triggerList[i].trigger(i);
                    }
                }

                if( this._triggerList[i].type == 'triggerBox') {

                    if( this.scrollTop < triggerTop ) {
                        this._triggerList[i].state = 'BEFORE';
                        this._triggerList[i].untrigger();
                    }
                    else if( this.scrollTop >= triggerTop && this.scrollTop < triggerBottom ) {
                        this._triggerList[i].state = 'INSIDE';
                        this._triggerList[i].trigger();
                    }
                    else {
                        this._triggerList[i].state = 'AFTER';
                        this._triggerList[i].untrigger();
                    }
                }
            }
        }

        /****************/

        // resize debounce
        if( this._resizeTimer < this._resizeTimerDuration ) {
            this._resizeTimer += elapsed;
        }
        else if( !this._resizeTriggered ) {
            // timer reached?
            this.screenDimensions = { width: window.innerWidth, height: window.innerHeight };
            this.setup();

            for (var i = 0; i < this._resizeQueue.length; i++) {
                this._resizeQueue[i]();
            }

            this._resizeTriggered = true;
        }

        // cleanup
        this.isScrolling        = false;
        this.isResizing         = false;
        this.isIdling           = true;
        this.previousScrollTop  = this.scrollTop;

        // loop this!
        window.requestAnimationFrame(this.loop.bind(this));
    },

    /***********************************
     * Public Functions
     **********************************/

    addTween(tween) {
        this._tweens.push(tween);
    },

    addTimeline(timeline) {
        this._timelines.push(timeline);
    },

    addTrigger(trigger) {
        this._triggerList.push(trigger);
        trigger.calculateTriggerPoints();
    },

    resizeQueue(cb) {
        this._resizeQueue.push(cb);
    }
}

export default ClearCore;
