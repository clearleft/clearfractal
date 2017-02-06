
'use strict';

function Lead(elm) {

    this.component  = elm;

    // Total distance to move the 'peek' - half the distance of the containing block
    this.dimensions = {
        top:    this.component.offsetTop,
        height: this.component.offsetHeight,
        bottom: this.component.offsetTop + this.component.offsetHeight
    }

    this.tween = new Tween( this.component, { y: 30 }, { y: -30 }, ClearCore.screenDimensions.height, {
        easing: 'linear',
        type: 'scroll',
        paused: true
    });

    window.addEventListener('scroll', this.update.bind(this));
    this.update();

    console.log( this.dimensions.top, this.dimensions.bottom, ClearCore.scrollTop, ClearCore.scrollBottom );
}

Lead.prototype.update = function() {
    if( ClearCore.scrollBottom > this.dimensions.top &&
        ClearCore.scrollTop < this.dimensions.bottom ) {

        let percentage = (( ClearCore.scrollBottom - this.dimensions.top ) / (ClearCore.screenDimensions.height + this.dimensions.height)  ) * 100;

        this.tween.setPosition( percentage );
        this.tween.update();
        this.tween.render();
    }
}
