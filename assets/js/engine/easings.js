
let Easings = {

    linear(time, begin, change, duration) {
        return change*(time/=duration) + begin;
    },

    easeInQuad(time, begin, change, duration) {
        return change*(time/=duration)*time + begin;
    },

    easeOutQuad(time, begin, change, duration) {
        return -change *(time/=duration)*(time-2) + begin;
    },

    easeInOutQuad(time, begin, change, duration) {
        if( (time /= duration/2) < 1 ) {
            return change/2*time*time + begin;
        }
        return -change/2 * ( (--time)*(time-2) - 1 ) + begin;
    }
}

export default Easings;
