'use strict';
const faker = require('faker');
module.exports = {
    "status": "wip",
    "context": {
        "textBlockProse": `
        <h2>Misconception 1: Transitioning to “Agile” will solve our problems.</h2>
        <p>The agile manifesto was born out of a frustration with traditionally managed projects. 
        But I don’t think it solved the problem. It actually created another one. I’ve seen teams and 
        organisations go from waterfall, which reduces their ability to compete in the market and 
        deliver value, to dysfunction and paralysis when implementing agile.</p>
        <p>That’s largely due to the various interpretations of the manifesto borne of misunderstanding. 
        Bottom-up as well as top-down support is needed in order for a successful agile transformation to take 
        place in any organisation.</p>
        `
    },
    "variants": [{
        "name": "Author",
        "context": {
            "textBlockModifier": "--author",
            "authorImage": "@author.authorImage",
            "authorName": "@author.authorName"
        }
    }]
}