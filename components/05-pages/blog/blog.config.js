
const faker = require('faker');

let posts = [];

for (var i = 0; i < 12; i++) {
    posts.push({
        cardTitle: "Article name here",
        cardCategory: 'Opinion',
        cardDescription: faker.lorem.paragraph()
    });
}

module.exports = {
    "title": "Blog",
    "status": "wip",
    "context": {
        /*Header*/
        "primaryNavlinks": "@primary-navigation.primaryNavlinks",
        "mastheadTitle": "Show me every post",
        "mastheadModifier": "--chimney",

        /*Featured*/
        "featuredCardTitle": "Jon smells like cabbages",
        "featuredCardCategory": "Process",
        "authorImage": "@author.authorImage",
        "authorName": "@author.authorName",

        /*Blog posts*/
        "posts": posts,
        "cardTitle": "@card.cardTitle",
        "cardCategory": "@card.cardCategory",
        "cardDescription": "@card.cardDescription",
        "cardModifier": "--image",

        /*Pagination*/
        "items": "@pagination.items",

        /*Footer*/
        "footerLinks": "@site-footer.footerLinks",
        "socialLinks": "@site-footer.socialLinks",
        "inputGroupLabel": "@site-footer.inputGroupLabel",
        "inputGroupSubmit": "@site-footer.inputGroupSubmit",
        "inputModifier": '--combo',
        "siteFooterSmall": "@site-footer.siteFooterSmall"
    }
}
