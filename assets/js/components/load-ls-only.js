import ClearCore from '../engine/clearcore.js';

const attrsMap = {
    src: 'data-src',
    srcset: 'data-srcset'
};

function LoadLsOnly({
    selector = 'img[data-src], source[data-srcset]',
    resolution = 520
} = {}) {

    // On small devices, don't load this script - and so don't load the images 
    // that match the specified selectors.    
    if (window.screen.width < resolution) {
        return;
    }
    this.selector = selector;

    window.addEventListener('load', this.load.bind(this));
}

LoadLsOnly.prototype.load = function () {
    const elemList = document.querySelectorAll(this.selector);
    const elems = Array.prototype.slice.apply(elemList);

    elems.forEach(element => {
        Object.keys(attrsMap).forEach(attr => {
            const attrSub = attrsMap[attr];
            if (element.getAttribute(attrSub)) {
                element.setAttribute(attr, element.getAttribute(attrSub));
                element.removeAttribute(attrSub);
            }
        })
    });
}

export default LoadLsOnly;