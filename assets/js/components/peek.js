
'use strict';

function Peek(elm) {

    this.component  = elm;
    this.headline   = this.component.getAttribute('data-componentAttributes') || 'Featured';

    // create the 'peek' text
    this.peek       = document.createElement('div');
    this.peek.appendChild( document.createTextNode(this.headline) );

    // set up the component
    this.component.style.position   = 'relative';
    this.component.style.overflow   = 'hidden';
    this.component.style.zIndex     = 1;

    this.peek.setAttribute('style', `
        position: absolute;
        color: #e2e2e2;
        font-family: "Gilroy", "Helvetica Neue", sans-serif;
        font-size: 140px;
        font-weight: 700;
        margin: 0;
        padding: 0;
        line-height: 1;
        z-index: -1;
    `);

    this.component.appendChild(this.peek);

    // Total distance to move the 'peek' - half the distance of the containing block
    this.dimensions         = {};
    this.dimensions.top     = this.component.offsetTop;
    this.dimensions.height  = this.component.offsetHeight;
    this.dimensions.bottom  = this.dimensions.top + this.dimensions.height;

    this.totalDistance      = this.component.offsetHeight / 2;

    this.tween = new Tween( this.peek, { y: 20 }, { y: -20 }, this.totalDistance, {
        easing: 'linear',
        type: 'scroll',
        paused: true
    });

    window.addEventListener('scroll', this.update.bind(this));
    this.update();
    // console.log( this.dimensions.top, this.dimensions.bottom, ClearCore.scrollTop, ClearCore.scrollBottom );
}

Peek.prototype = {

    update() {
        if( ClearCore.scrollBottom > this.dimensions.top &&
            ClearCore.scrollTop < this.dimensions.bottom ) {

            let percentage = (( ClearCore.scrollBottom - this.dimensions.top ) / (ClearCore.screenDimensions.height + this.dimensions.height)  ) * 100;

            // console.log('updating... ' + percentage);

            this.tween.setPosition( percentage );
            this.tween.update();
            this.tween.render();
        }
    }

}
