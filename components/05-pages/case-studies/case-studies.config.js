const faker = require('faker');

let posts = [];

for (var i = 0; i < 4; i++) {
    posts.push({
        cardTitle: faker.lorem.words(),
        cardDescription: faker.lorem.paragraph(),
        cardId: 'card-'+i
    });
}

module.exports = {
    "status": "wip",
    "context": {
        "primaryNavlinks": "@primary-navigation.primaryNavlinks",
        "primaryNavModifiers": ["--sea-serpent-blue"],
        "logoModifiers": ["--sea-serpent-blue"],
        "mastheadTitle": "Case<br>studies.",
        "mastheadModifier": "--chimney",

        /*Penguin feature*/
        "penguinModifier": '--tall',
        "penguinQuestion": "How do you bring more than 700 brands together into one website?",
        "penguinTitle": "Create a new universe.",
        "penguinLinkUrl": "#",
        "penguinLogoSrc": "/assets/img/work/penguin/penguin-logo.svg",
        "penguinLogoAlt": "Penguin logo",

        /*Ch4 Project feature*/
        "ch4Modifier": '--tall',
        "ch4Question": "How do you create a new kind of news service?",
        "ch4Title": "Focus on the intelligent story.",
        "ch4LinkUrl": "#",
        "ch4LogoSrc": "/assets/img/work/ch4/ch4-logo.svg",
        "ch4LogoAlt": "ch4 logo",

        /*Evo Project feature*/
        "evoModifier": '--tall',
        "evoQuestion": "How do you reimagine a physical magazine?",
        "evoTitle": "Drive reader engagement.",
        "evoLinkUrl": "#",
        "evoLogoSrc": "/assets/img/work/evo/evo-logo.svg",
        "evoLogoAlt": "evo logo",

        "posts": posts,

        /* Hello */
        "helloImgSrc": '@hello.helloImgSrc',
        "helloImgAlt": '@hello.helloImgAlt',
        "helloImgText": '@hello.helloImgText',
        "helloHeading": "@hello.helloHeading",
        "helloBody": "@hello.helloBody",

        /*Footer*/
        "footerLinks": "@site-footer.footerLinks",
        "socialLinks": "@site-footer.socialLinks",
        "inputGroupLabel": "@site-footer.inputGroupLabel",
        "inputGroupSubmit": "@site-footer.inputGroupSubmit",
        "inputModifier": '--combo',
        "siteFooterSmall": "@site-footer.siteFooterSmall"
    }
}
