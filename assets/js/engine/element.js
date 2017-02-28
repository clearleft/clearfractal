/*
    (class) Element.

    Provides an abstraction around a DOM element.
    Allows for maintaining styles and manipulating them in a performant manner.

    e.g.
    let elm = Object.create(Element);
    elm.init( document.querySelector('.MyClass') );
*/

let Element = {

    init(elm) {
        this._elm   = elm;
        this.x      = 0;
        this.y      = 0;
        this.styles = [];
        this.keys   = [];
    },

    getStyles() {
        let styleAttribute = this._elm.getAttribute('style');

        if( styleAttribute ) {
            let setStyles   = styleAttribute.replace(/\s*/g, ''); // remove all spaces
            let stylesArray = setStyles ? setStyles.split(';') : []; // split the syles into their property:value pairs

            for (var style of stylesArray) {
                if( style.trim() != '' ) {
                    let [key, value] = style.split(':');
                    this.styles[key] = value;
                }
            }
        }

        this.keys = Object.keys(this.styles);
    },

    render() {

        let str = '';

        for(let i = 0; i < this.keys.length; i++) {
            let key = this.keys[i];
            let val = this.styles[key];

            let k = key;
            let v = val;

            if( key == 'x' ) {
                this.x = val;
                k = 'transform';
                v = 'translate3d('+this.x+'px,'+this.y+'px,0)';
            }
            if( key == 'y' ) {
                this.y = val;
                k = 'transform';
                v = 'translate3d('+this.x+'px,'+this.y+'px,0)';
            }
            if( key == 'height' ) {
                v += 'px';
            }

            str += k + ':' + v + ';';
        }

        this._elm.setAttribute('style', str);
    }
}


let ElementPool = {
    ElementPool:    [],
    ObjectPool:     [],

    getElement(elm) {
        let idx = this.ElementPool.indexOf(elm);

        if( idx === -1 ) {
            let obj = Object.create(Element);

            obj.init(elm);
            obj.getStyles();

            this.ElementPool.push(elm);
            this.ObjectPool.push(obj);

            return obj;
        }
        else {
            return this.ObjectPool[idx];
        }

    }
}

export Element;
export ElementPool;
