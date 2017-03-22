/*
    (class) CustomElement.

    Provides an abstraction around a DOM element.
    Allows for maintaining styles and manipulating them in a performant manner.

    e.g.
    let elm = Object.create(CustomElement);
    elm.init( document.querySelector('.MyClass') );
*/

export default CustomElement = {

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
            let setStyles   = styleAttribute.trim();
            let stylesArray = setStyles ? setStyles.split(';') : []; // split the syles into their property:value pairs

            for (var style of stylesArray) {
                if( style.trim() != '' ) {
                    let [key, value] = style.trim().split(':');
                    this.styles[key.trim()] = value.trim();
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


export const ElementPool = {
    ElementPool:    [],
    ObjectPool:     [],

    getElement(elm) {
        let idx = this.ElementPool.indexOf(elm);

        if( idx === -1 ) {
            let obj = Object.create(CustomElement);

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
