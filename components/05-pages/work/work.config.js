const faker = require('faker');

let posts = [];

for (var i = 0; i < 4; i++) {
    posts.push({
        cardTitle: faker.lorem.words()
    });
}

module.exports = {
    "status": "wip",
    "context": {
        "primaryNavlinks": "@primary-navigation.primaryNavlinks",
        "primaryNavModifier": "--lightBlue",
        "logoModifier": "--lightBlue",
        "mastheadTitle": "Advancing the practice of design",
        "mastheadModifier": "--chimney",
        
        /*Penguin feature*/
        "penguinModifier": "--tall",
        "penguinContext": "Penguin random house publishing company",
        "penguinTitle": "Create a new universe.",
        "penguinLink": "How do you bring more than 700 brands together into one website?",
        "penguinLinkUrl": "#",

        /*Ch4 Project feature*/
        "ch4Modifier": "--tall",
        "ch4Context": "ch4 random house publishing company",
        "ch4Title": "Create a new universe.",
        "ch4Link": "How do you bring more than 700 brands together into one website?",
        "ch4LinkUrl": "#",
        "ch4MainSrc": "/assets/img/work/ch4/c4-mag-glass.png",

        /*Evo project feature*/
        "evoContext": "Evo random house publishing company",
        "evoTitle": "@evo-project.evoTitle",
        "evoLink": "How do you reimagine a physical magazine?",
        "evoLinkUrl": "#",
        "evoModifier": "--tall",
        "evoMainSrc": "/assets/img/work/evo/evo-mag-stack.png",
        "evoLogoSrc": "/assets/img/work/evo/evo-logo.svg",
        "evoLogoAlt": "evo logo",

        "posts": posts,
        "megaLinkText": "@mega-link.megaLinkText",
        "megaLinkModifier": "@mega-link--super.megaLinkModifier",
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