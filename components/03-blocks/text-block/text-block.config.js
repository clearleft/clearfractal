'use strict';
const faker = require('faker');
module.exports = {
    "status": "ready",
    "context": {
        "textBlockProse": `
            <h2>Misconception 1: Transitioning to “Agile” will solve our problems.</h2>
            <p>The agile manifesto was born out of a frustration with traditionally managed projects. But I don’t think it solved the problem. It actually created another one. I’ve seen teams and organisations go from waterfall, which reduces their ability to compete in the market and deliver value, to dysfunction and paralysis when implementing agile.</p>
            <p>That’s largely due to the various interpretations of the manifesto borne of misunderstanding. Bottom-up as well as top-down support is needed in order for a successful agile transformation to take place in any organisation.</p>
        `
    },
    "variants": [
        {
            "name": "Author",
            "context": {
                "textBlockModifier": "--author",
                "authorImage": "@author.authorImage",
                "authorName": "@author.authorName"
            }
        },
        {
            "name": "Author and Lead",
            "context": {
                "textBlockModifier": "--author Bar Lead",
                "authorImage": "@author.authorImage",
                "authorName": "@author.authorName",
                "textBlockProse": `<p>The agile manifesto was born out of a frustration with traditionally managed projects. But I don’t think it solved the problem. It actually created another one. I’ve seen teams and organisations go from waterfall, which reduces their ability to compete in the market and deliver value, to dysfunction and paralysis when implementing agile.</p>`
            }
        },
        {
            "name": "Brushed background",
            "context": {
                "textBlockModifier": "--brush",
                "textBlockProse": `<p>The agile manifesto was born out of a frustration with traditionally managed projects. But I don’t think it solved the problem. It actually created another one. I’ve seen teams and organisations go from waterfall, which reduces their ability to compete in the market and deliver value, to dysfunction and paralysis when implementing agile.</p>`
            }
        },
        {
            "name": "Connected",
            "context": {
                "textBlockModifier": "--connected",
                "textBlockProse": `<p>The agile manifesto was born out of a frustration with traditionally managed projects. But I don’t think it solved the problem. It actually created another one. I’ve seen teams and organisations go from waterfall, which reduces their ability to compete in the market and deliver value, to dysfunction and paralysis when implementing agile.</p>`
            }
        },
        {
            "name": "Brushed background connected",
            "context": {
                "textBlockModifier": "--brush TextBlock--connected",
                "textBlockProse": `<p>The agile manifesto was born out of a frustration with traditionally managed projects. But I don’t think it solved the problem. It actually created another one. I’ve seen teams and organisations go from waterfall, which reduces their ability to compete in the market and deliver value, to dysfunction and paralysis when implementing agile.</p>`
            }
        },
        {
            "name": "With image",
            "context": {
                "textBlockModifier": "--image",
                "textBlockImageDirection": "right",
                "textBlockImage": "http://placekitten.com/420/420",
                "textBlockProse": `<p>The agile manifesto was born out of a frustration with traditionally managed projects. But I don’t think it solved the problem. It actually created another one. I’ve seen teams and organisations go from waterfall, which reduces their ability to compete in the market and deliver value, to dysfunction and paralysis when implementing agile.</p>`
            }
        }
    ]
}
