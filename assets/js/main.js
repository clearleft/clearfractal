/*
Show and hide content with aria-controls buttons
*/
(function (win, doc) {
    'use strict';
    if (!win.addEventListener) {
        // doesn't cut the mustard.
        return;
    }
    var toggleID;
    var togglecontent;
    var trigger;
    function toggle(ev) {
        ev = ev || win.event;
        trigger = ev.target;
        if (trigger.hasAttribute('aria-controls')) {
            toggleID = trigger.getAttribute('aria-controls');
            if (doc.getElementById(toggleID)) {
                ev.preventDefault();
                togglecontent = doc.getElementById(toggleID);
                if (togglecontent.getAttribute('aria-hidden') == 'true') {
                    togglecontent.setAttribute('aria-hidden', 'false');
                    trigger.setAttribute('aria-expanded', 'true');
                } else {
                    togglecontent.setAttribute('aria-hidden', 'true');
                    trigger.setAttribute('aria-expanded', 'false');
                }
            }
        }
    }
    doc.addEventListener('click', toggle, false);
}(this, this.document));
