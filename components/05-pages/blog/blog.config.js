
const faker = require('faker');

let posts = [];

for (var i = 0; i < 12; i++) {
    posts.push({
        cardTitle: "Article name here",
        cardCategory: 'Opinion',
        cardDescription: faker.lorem.paragraph(),
        cardId: 'card-'+i
    });
}

module.exports = {
    "title": "Blog",
    "status": "wip",
    "context": {
        /*Header*/
        "primaryNavlinks": "@primary-navigation.primaryNavlinks",
        "mastheadTitle": "Show me",
        "mastheadModifier": "--chimney",
        "mastheadHasSelector": true,
        "selectorID": "categories",
        "triggerContent": "all posts",
        "triggerClass": "Heading Heading--main",
        "targetClass": "Container Background--carribean-green",
        "listContext": {
            "listClass": "",
            "listItemClass": "Heading Heading--secondary",
            "linkClass": "",
            "listItems": [{
                "url": "#",
                "content": "opinions"
            },
            {
                "url": "#",
                "content": "announcements"
            },
            {
                "url": "#",
                "content": "podcasts"
            },
            {
                "url": "#",
                "content": "tiny lessons"
            },
            {
                "url": "#",
                "content": "all posts"
            }]
        },

        /*Featured*/
        "featuredCardTitle": "Jon smells like cabbages",
        "featuredCardCategory": "Process",
        "authorImage": "@author.authorImage",
        "authorName": "@author.authorName",

        /*Blog posts*/
        "posts": posts,
        "cardTitle": "@card.cardTitle",
        // "cardCategory": "@card.cardCategory",
        // "cardDescription": "@card.cardDescription",
        // "cardModifier": "--image",

        /*Pagination*/
        "items": "@pagination.items",

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
