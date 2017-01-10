'use strict';

let image = "/assets/img/team/andy-t-lg.jpg";

module.exports = {
    "title": "Team Member",
    "status": "wip",
    "context": {
        /*Header and masthead*/
        "primaryNavlinks": "@primary-navigation.primaryNavlinks",
        "mastheadSecondary": "true",
        "mastheadModifier": "--combo Masthead--tall",
        "mastheadTitle": "Andy Thornton",
        "mastheadSecondaryHeading": "Catch Andy speaking at:",
        "mastheadSecondaryLink": "Beyond Tellerrand 2016",
        "nextPrev": true,

        /*Lead*/
        "leadText": "Andy has been involved in digital in one form or another since 1999. Originally a front-end developer and visual designer, he naturally migrated towards the world of UX with a covert desire to seed the importance of design (with a big D) earlier in the conception and planning of projects.",
        "openContext": "@card.openContext",
        "cardTitle": "@card.cardTitle",
        "secondContext": "Visual design, 2 hours",
        "cardDescription": "In my previous article, I wrote about some of the misconceptions with “agile” that I see in organisations. This article will focus on one of them specifically – the common (mis)understanding that [...]",
        
        /*Info-blocks for more about the team member*/
        books: "@info-blocks.books",
        talks: "@info-blocks.talks",
        
        /*Footer*/
        "footerLinks": "@site-footer.footerLinks",
        "socialLinks": "@site-footer.socialLinks",
        "inputGroupLabel": "@site-footer.inputGroupLabel",
        "inputGroupSubmit": "@site-footer.inputGroupSubmit",
        "inputModifier": '--combo',
        "siteFooterSmall": "@site-footer.siteFooterSmall"
    }
};
