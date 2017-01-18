'use strict';

/*
* Require some core modules
*/
const path = require('path');
const fs = require('fs');

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
fractal.web.set('static.path', `${__dirname}/public`);

fractal.web.set('builder.dest',  __dirname + '/build');

fractal.set('components.default.preview', '@skeleton');

const theme = require('@frctl/mandelbrot')();
fractal.web.theme(theme);

/*
 * Handle => filesystem path mapping export.
 */

function exportPaths() {
    const map = {};
    for (let item of fractal.components.flatten()) {
        map[`@${item.handle}`] = path.relative(process.cwd(), item.viewPath);
    }
    fs.writeFileSync('components-map.json', JSON.stringify(map, null, 2), 'utf8');
}

fractal.components.on('updated', function(){
    exportPaths();
});

fractal.cli.command('pathmap', function(opts, done){
    exportPaths();
    done();
});


// fractal.js
fractal.components.set('statuses', {
    wip: {
        label: "WIP",
        description: "Still working on it.",
        color: '#F00'
    },
    ready: {
        label: "Ready",
        description: "Ready for use.",
        color: "green"
    },
    removed: {
        label: "Removed",
        description: "A pattern which has been removed from the design, but may come back.",
        color: "green"
    }
});