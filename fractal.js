'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const twig      = require('@frctl/twig');
const fractal   = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'ClearFractal');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', `${__dirname}/components`);
fractal.components.set('ext', '.twig');

fractal.components.engine(twig({
    // importContext: true
}));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', `${__dirname}/public/assets`);

fractal.web.set('builder.dest',  __dirname + '/build');


const theme = require('@frctl/mandelbrot')();
fractal.web.theme(theme);
