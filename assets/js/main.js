
// engine
import ClearCore            from './engine/clearcore.js';

// components
import PrimaryNavigation    from './components/primary-navigation.js';
import BlogFilter           from './components/blog-filter.js';
import Jobs                 from './components/jobs.js';
import Peek                 from './components/peek.js';
import Tabs                 from './components/tabs.js';
import LoadLsOnly           from './components/load-ls-only.js';

(function() {

    // cut the mustard
    if( !('classList' in Element.prototype) ) {
        return;
    }


    if("performance" in window) {
        ClearCore.init();
    }

    /**************************
        Load components
    **************************/

    if( 'content' in document.createElement('template') ) {
        new PrimaryNavigation( document.querySelector('.PrimaryNavigation') );
    }

    let selectorComponents = document.querySelectorAll('.Selector');

    for(var i=0; i < selectorComponents.length; i++) {
        new BlogFilter( selectorComponents[i] );
    }

    if( 'performance' in window ) {
        let featuredCardComponents = document.querySelectorAll('.FeaturedCard');

        for(var i=0; i < featuredCardComponents.length; i++) {
            new Peek( featuredCardComponents[i] );
        }
    }

    //
    new Jobs( document.querySelector('.Jobs') );

    new Tabs( document.querySelector('.Tabs') );

    new LoadLsOnly();

    // Code Highlighting
    hljs.initHighlightingOnLoad();

})(window);
