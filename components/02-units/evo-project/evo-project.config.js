module.exports = {
    "status": "wip",
    "context": {
        "evoQuestion": "How do you reimagine a physical magazine?",
        "evoTitle": "Inject Energy.",
        "evoLinkUrl": "#",
        "evoLogoSrc": "/assets/img/work/evo/evo-logo.svg",
        "evoLogoAlt": "evo logo",
    },
    "variants": [{
        "name": "Work page listing",
        "context": {
            "evoModifier": "--tall"
        }
    },
    {
        "name": "Main stage case study",
        "context": {
            "evoModifier": "--stage",

            "logoModifiers": ["--inverted"],
            "primaryNavlinks": "@primary-navigation.primaryNavlinks",
            "primaryNavModifiers": ["--inverted"],
            "breadcrumbModifier": "--inverted",
            "segmentOne": "Our Work",
            "segmentTwo": "Channel 4",

            "evoDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos recusandae eaque cupiditate, ad quia unde porro illo. Minima, ad.",
            "evoLogoSrc": "/assets/img/work/evo/evo-logo.svg",
            "evoLogoAlt": "evo logo",
            "evoLink": "",

        }
    }]
};
