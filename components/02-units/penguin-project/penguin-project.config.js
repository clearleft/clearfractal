module.exports = {
    "status": "wip",
    "context": {
        "penguinQuestion": "How do you bring more than 700 brands together into one website?",
        "penguinTitle": "Create a new universe.",
        "penguinLinkUrl": "#",
        "penguinLogoSrc": "/assets/img/work/penguin/penguin-logo.svg",
        "penguinLogoAlt": "Penguin logo",
    },
    "variants": [
        {
            "name": "Work page feature",
            "context": {
                "penguinModifier": "--tall"
            }
        },
        {
            "name": "Main stage case study",
            "context": {
                "penguinModifier": "--stage",

                "primaryNavlinks": "@primary-navigation.primaryNavlinks",
                "primaryNavModifiers": ["--inverted"],
                "logoModifiers": ["--inverted"],
                "breadcrumbModifier": "--inverted",
                "segmentOne": "Our Work",
                "segmentTwo": "Channel 4",

                "penguinDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos recusandae eaque cupiditate, ad quia unde porro illo. Minima, ad.",
            }
        }
    ]
};
