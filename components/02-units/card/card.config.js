'use strict';

module.exports = {
    "status": "ready",
    "context": {
        "cardBar": true,
        "cardTitle": "Article Title Goes here",
        "cardCategory": "Opinion",
        "cardMeta": "2 weeks ago",
        "cardDescription": "In my previous article, I wrote about some of the misconceptions with “agile” that I see in organisations.",
        "cardUrl": "#"
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
                "cardBar": true,
                "cardTitle": "Royal Borough of Kensington and Chelsea",
                "cardCategory": false,
                "cardDescription": false,
                "cardUrl": "#",
                "cardLink": true,
            }
        },
        {
            "name": "With logo",
            "context": {
                "cardModifiers": ["--logo"],
                "cardBar": false,
                "cardLogoSrc": 'http://clearleft-v5.s3.amazonaws.com/rb-kensington-chelsea-2x.png',
                "cardLogoAlt": 'Royal Borough of Kensington and Chelsea',
                "cardTitle": "Royal Borough of Kensington and Chelsea",
                "authorImage": "/assets/img/authors/sm/edv.png",
                "authorName": "Ellen DeVries"
            }
        },
        {
            "name": "With author",
            "context": {
                "cardModifiers": ["--image"],
                "cardBar": true,
                "cardTitle": "Royal Borough of Kensington and Chelsea",
                "authorImage": "/assets/img/authors/sm/edv.png",
                "authorName": "Ellen DeVries"
            }
        }
    ]
}
