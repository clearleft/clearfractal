'use strict';
const faker = require('faker');
module.exports = {
    "status": "wip",
    "context": {
        "textBlockText": faker.lorem.paragraphs(),
        "textBlockTitle": faker.lorem.sentence()
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