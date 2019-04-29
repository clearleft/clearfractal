'use strict';
const faker     = require('faker');
const persons   = [];
var imageSrc = ["/assets/img/team/james-g.jpg", "/assets/img/team/ben-w.jpg", "/assets/img/team/ellen.jpg", "/assets/img/team/hana.jpg", "/assets/img/team/charlotte.jpg", "/assets/img/team/andy-t.jpg"];
for(var i = 0; i < 25; i++){
    var number = Math.floor((Math.random() * 5) + 1);
    persons.push({
        indexCardName: faker.name.findName(),
        indexCardInfo: faker.name.jobTitle(),
        imageSrc: imageSrc[number]
    });
}

module.exports = {
    "status": "wip",
    "context": {
        "primaryNavlinks": "@primary-navigation.primaryNavlinks",
        "mastheadTitle": "Know who you’re working with.",
        "mastheadMidifier": "--chimney",
        "leadText": "@lead.leadText",
        "pageLeadSecondary": true,
        "persons": persons,
        "listItems": [
            `<a href="#">11 yrs old and growing. What’s our story?</a>`,
            `<a href="#">We’re hiring. Is there a job for you?</a>`,
            `<a href="#">11 yrs old and growing. What’s our story?</a>`
        ],

        /*Banner*/
        "bannerModifier": "--decorated",
        "bannerCaption": "Are you the one?",
        "bannerHeadline": "Join us",
        "bannerLink": "Check out our open vacancies",
        "bannerBody": "@banner--decoration.bannerBody",

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
};
