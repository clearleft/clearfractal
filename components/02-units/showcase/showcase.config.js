'use strict';
module.exports = {
    "status": "wip",
    "context": {
        /*Header items*/
        "primaryNavlinks": "@primary-navigation.primaryNavlinks",

        /*Breadcrumb*/
        "segmentOne": "Client Stories",
        "segmentTwo": "Royal borough of kensington and chelsea",

        /*Showcase contents*/
        "showcaseTitle": "Changing the approach to digital publishing.",
        "showcaseText": "Clearleft worked with the Royal Borough of Kensington and Chelsea to fundamentally change their approach to digital publishing, resulting in hugely increased user satisfaction and a much easier internal workflow.",
        "showcaseImage": "/assets/img/work/rbkc/landing.png"
    },
    "variants": [{
        "name": "Blue background",
        "context": {
            /*Add class to set background color*/
            "showcaseModifier": "--blue",

            /*Header items*/
            "primaryNavModifier": "@primary-navigation--inverted.primaryNavModifier",
            "logoModifier": "--inverted",
            "breadcrumbModifier": "--inverted",
        }
    }]
};