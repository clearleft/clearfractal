'use strict';
module.exports = {
    "status": "wip",
    "context": {
        "cardTitle": "Article Title Goes here",
        "cardCategory": "Opinion",
        "cardUrl": "card.url",
        "cardDescription": "In my previous article, I wrote about some of the misconceptions with “agile” that I see in organisations.",
        "cardLink": "#"
    },
    "variants": [{
        "name": "Tiny Lesson",
        "context": {
            "cardModifier": "--tiny-lesson",
            "cardTitle": "Article Title Goes here",
            "cardCategory": "Tiny Lesson"
        }
    },
    {
        "name": "Vibrant",
        "context": {
            "cardModifier": "--vibrant",
            "cardTitle": "Royal Borough of Kensington and Chelsea",
            "cardCategory": false,
            "cardDescription": false
        }
    },
    {
        "name": "With author",
        "context": {
            "cardModifier": "--image",
            "cardTitle": "Royal Borough of Kensington and Chelsea",
            "authorImage": "/assets/img/authors/sm/edv.png",
            "authorName": "Ellen DeVries"
        }
    }]
}
