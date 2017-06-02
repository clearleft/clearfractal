
function PrimaryNavigation(elm) {

    if( !elm ) {
        console.warn('No primary navigation element provided!')
        return;
    }

    this.elm            = elm;
    this.button         = this.elm.querySelector('.PrimaryNavigation-menu');
    this.links          = this.elm.querySelector('.PrimaryNavigation-list');
    this.body           = document.querySelector('body');
    this.offCanvas      = document.querySelector('#offcanvas').content.querySelector('.OffCanvas');
    this.canvasClose    = this.offCanvas.querySelector('.OffCanvas-close');

    // states
    this.isOpen         = false;

    // hide the template (for non-supporting browsers)
    document.querySelector('#offcanvas').style.display = 'none';
    this.canvasClose.style.display = 'inline-block';

    // Set various styles on the off-canvas then add it to the document.
    this.offCanvas.style.display    = 'none';
    this.offCanvas.style.position   = 'absolute';
    this.offCanvas.style.top        = 0;

    this.body.appendChild(this.offCanvas);

    // events
    this.button.addEventListener('click', e => {
        e.preventDefault();
        this.toggle();
    });

    this.canvasClose.addEventListener('click', e => {
        this.toggle();
    });

    window.addEventListener('resize', e => {
        if( window.innerWidth > 719 && !this.isOpen ) {
            this.links.style = '';
        }
    });
}

PrimaryNavigation.prototype = {

    toggle() {
        if( this.isOpen ) {
            this.offCanvas.style.opacity    = 0;
            this.body.style.overflow        = '';
            this.isOpen                     = false;

            setTimeout(() => { this.offCanvas.style.display = 'none'; }, 200);
        }
        else {
            this.offCanvas.classList.add('isActive');
            this.offCanvas.style.display    = 'block';
            this.offCanvas.style.opacity    = 0;
            this.body.style.overflow        = 'hidden';
            this.isOpen                     = true;

            setTimeout(() => { this.offCanvas.style.opacity = 1; }, 20);
        }
    }
}

export default PrimaryNavigation;
