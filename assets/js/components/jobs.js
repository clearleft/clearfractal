
'use strict';

function Jobs(elm) {

    if( !elm ) {
        return;
    }

    this.elm        = elm;
    this.jobs       = elm.querySelectorAll('.Job');
    this.jobLinks   = elm.querySelectorAll('.Jobs-section--side a');
    this.hash       = window.location.hash;

    // hide all jobs
    this.hideAll();

    if( this.jobs.length ) {
        // if a has is provided, show that job
        if( this.hash ) {
            this.highlightLink(this.hash.replace('#', ''));
            this.show( this.elm.querySelector(this.hash) );
        }
        // otherwise show the first job in the list
        else {
            this.show(this.jobs[0]);
        }
    }

    // events
    for (var link of this.jobLinks) {
        link.addEventListener('click', e => {
            e.preventDefault();

            this.hideAll();
            let [link, id] = e.currentTarget.href.split('#');

            if( id ) {
                this.highlightLink(id);
                this.show( this.elm.querySelector('#'+id) );
            }
        });
    }
}

Jobs.prototype = {

    show(elm) {
        elm.style.display = 'block';
    },

    hideAll() {
        for(var job of this.jobs) {
            job.style.display = 'none';
        }
    },

    highlightLink(id) {
        for (var item of this.jobLinks) {

            let [link, jobID] = item.href.split('#');

            if( jobID === id ) {
                item.classList.add('Menu-item--current');
            }
            else {
                item.classList.remove('Menu-item--current');
            }
        }
    }
}
