'use strict';
module.exports = {
    "status": "wip",
    "context": {
        "leadText": "@lead.leadText"
    },
    "variants": [
        {
            "name": "pinch",
            "context": {
                "pageLeadModifier": "--pinch"
            }
        },
        {
            "name": "secondary",
            "context": {
                "pageLeadSecondary": true,
                listItems: [{
                    "listItem": `<a href="#">11 yrs old and growing. What’s our story?</a>`
                },
                {
                    "listItem": `<a href="#">11 yrs old and growing. What’s our story?</a>`
                },
                {
                    "listItem": `<a href="#">11 yrs old and growing. What’s our story?</a>`
                }]
            }
        },
        {
            "name": "image",
            "context": {
                "pageLeadModifier": "--image",
                "pageLeadAlt": "Ideas",
                "pageLeadSrc": "/assets/img/blog-header.jpg"
            }
        }
    ]
};