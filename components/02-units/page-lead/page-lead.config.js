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
                "listModifier": '--tall',
                "listItems": [
                    `<a href="#">11 yrs old and growing. What’s our story?</a>`,
                    `<a href="#">11 yrs old and growing. What’s our story?</a>`,
                    `<a href="#">11 yrs old and growing. What’s our story?</a>`
                ]
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
