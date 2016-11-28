'use strict';
module.exports = {
    "status": "wip",
    "context": {
        "mastheadTitle": "Dedicated to advancing the practice of design",
        "mastheadSecondary": "",
    },
    "variants": [{
        "name": "Masthead streak",
        "context": {
            "mastheadTitle": "Hana Stevenson",
            "mastheadModifier": "--streak",
            "mastheadSecondaryHeading": "Catch Hana speaking at:"
        }
    },
    {
        "name": "Masthead combo",
        "context": {
            "mastheadTitle": "Hana Stevenson",
            "mastheadSecondary": "true",
            "mastheadModifier": "--combo",
            "mastheadSecondaryHeading": "Catch Hana speaking at:",
            "mastheadSecondaryLink": "Beyond Tellerrand 2016"
        }
    },
    {
        "name": "Masthead tall",
        "context": {
            "mastheadTitle": "Hana Stevenson",
            "mastheadSecondary": "true",
            "mastheadModifier": "--tall",
            "mastheadSecondaryHeading": "Catch Hana speaking at:",
            "mastheadSecondaryLink": "Beyond Tellerrand 2016"
        }
    }]
};