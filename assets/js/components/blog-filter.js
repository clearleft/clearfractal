/*
    Show and hide content with aria-controls buttons
*/
'use strict';

function BlogFilter(elm) {

    this.filterButton   = elm.querySelector('[aria-controls]');
    this.filterContent  = elm.querySelector('[aria-hidden]');

    // init
    this.filterContent.style.position = 'absolute';
    this.filterContent.style.display = 'none';
    this.filterContent.setAttribute('aria-hidden', 'true');
    this.filterButton.setAttribute('aria-expanded', 'false');

    // add events
    this.filterButton.addEventListener('click', this.toggle.bind(this));
}

BlogFilter.prototype = {
    toggle(e) {

        if( this.filterButton && this.filterContent ) {
            e.preventDefault();

            // if hidden -> show
            if (this.filterContent.getAttribute('aria-hidden') == 'true') {

                this.filterContent.setAttribute('aria-hidden', 'false');
                this.filterContent.style.display = 'block';
                this.filterButton.setAttribute('aria-expanded', 'true');

            // if shown -> hide
            } else {

                this.filterContent.setAttribute('aria-hidden', 'true');
                this.filterContent.style.display = 'none';
                this.filterButton.setAttribute('aria-expanded', 'false');

            }
        }
    }
}
