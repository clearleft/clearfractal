
import ClearCore from './engine/clearcore.js';

import BlogFilter from './components/blog-filter.js';
import Jobs from './components/jobs.js';
import PrimaryNavigation from './components/primary-navigation.js';

ClearCore.init();

/**************************
    Load components
**************************/

for (var selector of document.querySelectorAll('.Selector')) {
    new BlogFilter( selector );
}
// for (var card of document.querySelectorAll('.FeaturedCard')) {
//     new Peek( card );
// }
// for (var lead of document.querySelectorAll('.Lead')) {
//     new Lead( lead );
// }

new Jobs( document.querySelector('.Jobs') );
new PrimaryNavigation( document.querySelector('.PrimaryNavigation') );
