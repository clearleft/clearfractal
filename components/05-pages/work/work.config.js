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
        "mastheadTitle": "Advancing the practice of design",
        "mastheadModifier": "--tall",
        
        /*Penguin feature*/
        "penguinModifier": "--stage",
        "penguinContext": "Penguin random house publishing company",
        "penguinTitle": "Create a new universe.",
        "penguinLink": "How do you bring more than 700 brands together into one website?",
        "penguinLinkUrl": "#",

        /*Ch4 Project feature*/
        "ch4Modifier": "--stage",
        "ch4Context": "ch4 random house publishing company",
        "ch4Title": "Create a new universe.",
        "ch4Link": "How do you bring more than 700 brands together into one website?",
        "ch4LinkUrl": "#",
        "ch4MainSrc": "/assets/img/work/ch4/sling.png",

        "posts": posts,
        "megaLinkText": "@mega-link.megaLinkText",
        "megaLinkModifier": "@mega-link--super.megaLinkModifier",
        "helloHeading": "@hello.helloHeading",
        "helloBody": "@hello.helloBody",
        "inputLabel": "Feed your curiosity.",
        "siteFooterSmall": "&copy; 2005‑now Clearleft Ltd. All rights reserved.",
        "socialLinks": "@social-media.socialLinks"
    }
}