const faker = require('faker');

let blogPosts   = [];
let quotes      = [];

for (var i = 0; i < 3; i++) {
    blogPosts.push({
        cardBar: true,
        cardTitle: "Article name here",
        cardCategory: 'Opinion',
        cardId: 'post-'+i,
        cardDescription: faker.lorem.paragraph(),
        authorImage: "/assets/img/authors/sm/edv.png",
        authorName: "Ellen DeVries"
    });
}

for (var i = 0; i < 6; i++) {
    quotes.push({
        quote: faker.lorem.sentence(12),
        authorImage: "/assets/img/authors/sm/edv.png",
        authorName: "Ellen DeVries",
        datePosted: 'Sep 21'
    });
}

module.exports = {
    "status": "wip",
    "context": {
        /*Header*/
        "primaryNavlinks": "@primary-navigation.primaryNavlinks",
        "primaryNavModifiers": ["--inverted", "--plum"],
        "logoModifiers": ["--inverted", "--plum"],

        /* Home Splash */
        "homeHeader": "We help design leaders get the most from their products, services &amp; teams.",
        "homeSubheader": "Find out <a href=\"#\">who we are</a> or <a href=\"#\">how we can help</a>",

        /* Featured case study */
        "homeCardTitle": "Create a new universe.",
        "homeCardDescription": faker.lorem.paragraph(),

        /* Blog posts */
        "homeBlogPosts": blogPosts,

        /* Quotes */
        "homeQuotes": quotes,

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
