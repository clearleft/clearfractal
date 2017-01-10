
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
        "primaryNavlinks": "@primary-navigation.primaryNavlinks",
        "mastheadTitle": "Show me every post",

        "posts": posts,

        "indexCard": true,
        "imageSrc": "/assets/img/team/james-g.jpg",
        "indexCardName": "Tea Ivanova",
        "indexCardInfo": "Project Manager",

        /*Footer*/
        "footerLinks": "@site-footer.footerLinks",
        "socialLinks": "@site-footer.socialLinks",
        "inputGroupLabel": "@site-footer.inputGroupLabel",
        "inputGroupSubmit": "@site-footer.inputGroupSubmit",
        "inputModifier": '--combo',
        "siteFooterSmall": "@site-footer.siteFooterSmall"
    }
}
