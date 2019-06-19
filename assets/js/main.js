
// engine
import ClearCore from './engine/clearcore.js';

// components
import PrimaryNavigation from './components/primary-navigation.js';
import LoadLsOnly from './components/load-ls-only.js';

(function () {

    // cut the mustard
    if (!('classList' in Element.prototype)) {
        return;
    }


    if ("performance" in window) {
        ClearCore.init();
    }

    /**************************
        Load components
    **************************/

    if ('content' in document.createElement('template')) {
        new PrimaryNavigation(document.querySelector('.PrimaryNavigation'));
    }


    new LoadLsOnly();

    // Code Highlighting
    hljs.initHighlightingOnLoad();

})(window);
