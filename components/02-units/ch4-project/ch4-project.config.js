module.exports = {
    "status": "wip",
    "context": {
        "ch4Question": "How do you create a new kind of news service?",
        "ch4Title": "Focus on the intelligent story.",
        "ch4LinkUrl": "#",
        "ch4LogoSrc": "/assets/img/work/ch4/ch4-logo.svg",
        "ch4LogoAlt": "ch4 logo",
    },
    "variants": [
        {
            "name": "Home page listing",
            "context": {
                "ch4Modifier": "--short"
            }
        },
        {
            "name": "Work page listing",
            "context": {
                "ch4Modifier": "--tall"
            }
        },
        {
            "name": "Main stage case study",
            "context": {
                "ch4Modifier": "--stage",

                "logoModifiers": ["--inverted"],
                "primaryNavModifiers": ["--inverted"],
                "primaryNavlinks": "@primary-navigation.primaryNavlinks",

                "segmentOne": "Our Work",
                "segmentTwo": "Channel 4",
                "breadcrumbModifier": "--inverted",

                "ch4Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos recusandae eaque cupiditate, ad quia unde porro illo. Minima, ad.",
                "ch4LogoSrc": "/assets/img/work/ch4/ch4-logo.svg",
                "ch4LogoAlt": "ch4 logo",
                "ch4Link": "",
            }
        }
    ]
};
