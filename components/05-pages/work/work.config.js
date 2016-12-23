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
        "showcaseModifier": "--featuredEvo --workEvo",
        "showcaseTitle": "Inject energy.",
        "showcaseText": "How do you give a magazine a huge boost to increase readership? This is the story of how we made Apple’s “Best Newsstand App” with 97,000 new downloads in 4 months.",
        "showcaseLogo": "/assets/img/work/evo/evo-logo.svg",
        "showcaseImage": "/assets/img/work/evo/evo-landing.png",
        "posts": posts,
        "helloHeading": "@hello.helloHeading",
        "helloBody": "@hello.helloBody",
        "inputLabel": "Feed your curiosity.",
        "siteFooterSmall": "&copy; 2005‑now Clearleft Ltd. All rights reserved.",
        "socialLinks": "@social-media.socialLinks"
    }
}