const faker = require('faker');

let blogPosts = [];
let quotes = [];

for (var i = 0; i < 3; i++) {
    blogPosts.push({
        cardBar: true,
        cardTitle: "Article name here",
        cardCategory: 'Opinion',
        cardId: 'post-' + i,
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
        /* Masthead */
        "mastheadDescription": faker.lorem.paragraph(),
        "mastheadModifier": "--minimal Masthead--inverted",
        "breadcrumbModifier": false,
        "mastheadTitle": "Let’s create better digital experiences together",

        /* Header */
        "primaryNavlinks": "@primary-navigation.primaryNavlinks",
        "primaryNavModifiers": ["--inverted", "--plum"],
        "logoModifiers": ["--inverted", "--plum"],

        /* quote */
        "quoteModifiers": 'standalone',
        "quoteText": 'Clearleft listened, shared, and designed alongside us. Enabling us to evolve from crawling, walking, and finally running at a great pace in the development of our design practice',
        "quoteAuthor": 'Don Norman',
        "quoteAuthorRole": 'Speaker at UX London 2009',

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
        "inputGroupID": "@site-footer.inputGroupID",
        "inputGroupPlaceholder": "@site-footer.inputGroupPlaceholder",
        "inputGroupMicrocopy": "@site-footer.inputGroupMicrocopy",
        "inputGroupModifiers": "@site-footer.inputGroupModifiers",
        "siteFooterSmall": "@site-footer.siteFooterSmall"
    }
}
