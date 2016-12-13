
'use strict';

const faker = require('faker');

module.exports = {
    "status": "wip",
    "context": {
        "imageSrc": "/assets/img/team/james-g.jpg",
        "indexCardName": faker.name.findName(),
        "indexCardInfo": faker.name.jobTitle()
    },
    "variants": [
        {
            "name": "profile",
            "context": {
                "indexCardModifier": "--profile",
                "imageSrc": "/assets/img/team/james-g-154.jpg",
                "indexCardInfo": false
            }
        }
    ]
}
