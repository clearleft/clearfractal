
import ClearCore from '../engine/clearcore.js';
import Tween from '../engine/tween.js';

function Peek(elm) {

    if( ClearCore.screenDimensions.width < 520 ) {
        return;
    }

    this.component  = elm;
    this.headline   = this.component.getAttribute('data-componentAttributes') || 'Featured';

    // create the 'peek' text
    this.peek       = document.createElement('div');
    this.peek.appendChild( document.createTextNode(this.headline) );

    // set up the component
    this.component.style.position   = 'relative';
    this.component.style.overflow   = 'hidden';
    this.component.style.zIndex     = 0;

    this.peek.setAttribute('style', `
        position: absolute;
        color: #f4f4f4;
        font-family: "Gilroy", "Helvetica Neue", sans-serif;
        font-size: 160px;
        font-weight: 700;
        margin: 0;
        padding: 0;
        line-height: 1;
        z-index: -1;
        left: 5.3125rem;
    `);

    this.component.appendChild(this.peek);

    // Total distance to move the 'peek' - half the distance of the containing block
    this.dimensions = {
        top:    this.component.offsetTop,
        height: this.component.offsetHeight,
        bottom: this.component.offsetTop + this.component.offsetHeight
    }

    this.totalDistance = this.component.offsetHeight / 2;

    this.tween = new Tween( this.peek, { y: 60 }, { y: -30 }, this.totalDistance, {
        easing: 'linear',
        type: 'scroll',
        paused: true
    });

    window.addEventListener('scroll', this.update.bind(this));
    this.update();
}

Peek.prototype = {

    update() {
        if( ClearCore.scrollBottom > this.dimensions.top &&
            ClearCore.scrollTop < this.dimensions.bottom ) {

            let percentage = (( ClearCore.scrollBottom - this.dimensions.top ) / (ClearCore.screenDimensions.height + this.dimensions.height)  ) * 100;

            this.tween.setPosition( percentage );
            this.tween.update();
            this.tween.render();
        }
    }

}


export default Peek;
