
// components
import PrimaryNavigation from './components/primary-navigation.js';
import LoadLsOnly from './components/load-ls-only.js';

(function () {

    // cut the mustard
    if (!('classList' in Element.prototype)) {
        return;
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
