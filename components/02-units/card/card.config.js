'use strict';
module.exports = {
    "status": "wip",
    "context": {
        "imageSrc": "@index-card.imageSrc",
        "cardTitle": "Article Title Goes here",
        "openContext": "Category",
        "cardDescription": "In my previous article, I wrote about some of the misconceptions with “agile” that I see in organisations. This article will focus on one of them specifically – the common (mis)understanding that agile—and more recently lean start-up methods—are seen as operational [...]"
    },
    "variants": [{
        "name": "Card header modifier",
        "context": {
            "cardModifier": "",
            "openContext": "Tiny Lesson",
            "cardTitle": "Article Title Goes here",
            "indexCard": true,
            "secondContext": "Visual design, 2 hours",
            "cardDescription": false
        }
    },
    {
        "name": "A card with an index card and no description",
        "context": {
            "openContext": "Tiny Lesson",
            "cardTitle": "The 20 second gut test",
            "indexCard": true,
            "secondContext": "Visual design, 2 hours",
            "cardDescription": false
        }
    }]
}