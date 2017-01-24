
'use strict';

function Lead(elm) {

    this.component  = elm;

    // Total distance to move the 'peek' - half the distance of the containing block
    this.dimensions         = {};
    this.dimensions.top     = this.component.offsetTop;
    this.dimensions.height  = this.component.offsetHeight;
    this.dimensions.bottom  = this.dimensions.top + this.dimensions.height;

    this.tween = new Tween( this.component, { y: 20 }, { y: -20 }, ClearCore.screenDimensions.height, {
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

        // console.log('updating... ' + percentage);

        this.tween.setPosition( percentage );
        this.tween.update();
        this.tween.render();
    }
}
