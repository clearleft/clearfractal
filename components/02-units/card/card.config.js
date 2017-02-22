'use strict';

module.exports = {
    "status": "ready",
    "context": {
        "cardTitle": "Article Title Goes here",
        "cardCategory": "Opinion",
        "cardMeta": "2 weeks ago",
        "cardUrl": "card.url",
        "cardDescription": "In my previous article, I wrote about some of the misconceptions with “agile” that I see in organisations.",
        "cardLink": "#"
    },
    "variants": [
        {
            "name": "Tiny Lesson",
            "context": {
                "cardModifiers": ["--tiny-lesson"],
                "cardTitle": "Article Title Goes here",
                "cardCategory": "Tiny Lesson"
            }
        },
        {
            "name": "Vibrant",
            "context": {
                "cardModifiers": ["--vibrant"],
                "cardTitle": "Royal Borough of Kensington and Chelsea",
                "cardCategory": false,
                "cardDescription": false,
                "cardLink": "#"
            }
        },
        {
            "name": "With author",
            "context": {
                "cardModifiers": ["--image"],
                "cardTitle": "Royal Borough of Kensington and Chelsea",
                "authorImage": "/assets/img/authors/sm/edv.png",
                "authorName": "Ellen DeVries"
            }
        }
    ]
}
