'use strict';

let image = "/assets/img/team/andy-t-lg.jpg";

module.exports = {
    "title": "Team Member",
    "status": "wip",
    "context": {
        /*Header and masthead*/
        "primaryNavlinks": "@primary-navigation.primaryNavlinks",
        "primaryNavModifier": "--yellow",
        "logoModifier": "--yellow",
        "mastheadSecondary": "true",
        "mastheadModifier": "--chimney Masthead--combo",
        "mastheadTitle": "Andy Thornton",
        "mastheadSecondaryHeading": "Catch Andy speaking at:",
        "mastheadSub": "Senor UX Designer",
        "mastheadSecondaryLink": "Beyond Tellerrand 2016",
        "mastheadThird": `<a href="">See Andy speak at Beyond Tellerrand</a>`,
        "nextPrev": true,

        /*Lead*/
        "leadText": "Andy has been involved in digital in one form or another since 1999. Originally a front-end developer and visual designer, he naturally migrated towards the world of UX with a covert desire to seed the importance of design (with a big D) earlier in the conception and planning of projects.",
        "openContext": "@card.openContext",
        "cardTitle": "@card.cardTitle",
        "secondContext": "Visual design, 2 hours",
        "cardDescription": "In my previous article, I wrote about some of the misconceptions with “agile” that I see in organisations. This article will focus on one of them specifically – the common (mis)understanding that [...]",
        
        /*About team member*/
        "socialLinks": [
            { "src": "http://fillmurray.com/30/30", "url": "#" },
            { "src": "http://fillmurray.com/30/30", "url": "#" },
            { "src": "http://fillmurray.com/30/30", "url": "#" }
        ],

        "personIntroLeft": `
        <p>Before joining Clearleft he worked as a freelance Experience Design Consultant helping Whitbread shape the service design of Hub hotels.</p>
        <p>Prior to that Andy’s career at POSSIBLE and Fortune Cookie saw him providing both strategic UX leadership and hands-on human-centred design skills across a broad range of clients such as British Gas, Pearson, UEFA, Legal &amp; General, Camden Council, Royal Horticultural Society (RHS) and Royal Institution of Chartered Surveyors (RICS).</p>
        <h2>Nurturing customer-centric business culture</h2>
        <p>Andy believes that the age of business disruption has well and truly arrived, and keeping customers happy is more critical to success than ever before. Organisations that fail to satisfy their needs, whether large or small, public or private sector, are at serious risk of failure.</p>
                <p>As a Strategic UX Designer, he has a keen interest in helping businesses become more customer-centric by creating intuitive, immersive and inspiring digital experiences that meet measurable outcomes, along with practical UX mentoring and guidance.</p>
        `,
        "personInterests": `
        <p>Andy describes himself as a bit of a social recluse who enjoys getting away from civilisation as much as feasibly possible. His once deep love of the world of glitchy electronica has faded somewhat with age, but he still tries to get out to a couple of gigs now and again.</p>
        `,

        /*Info-blocks*/
        books: "@info-blocks.books",
        talks: "@info-blocks.talks",

        /*Blog posts*/
        cards: [
        {
            "openContext": "@card.openContext",
            "cardTitle": "@card.cardTitle",
            "secondContext": "Visual design, 2 hours",
            "cardDescription": "In my previous article, I wrote about some of the misconceptions with “agile” that I see in organisations. This article will focus on one of them specifically – the common (mis)understanding that agile—and more recently lean start-up methods—are seen as operational [...]"
        },
        {
            "openContext": "@card.openContext",
            "cardTitle": "@card.cardTitle",
            "secondContext": "Visual design, 2 hours",
            "cardDescription": "In my previous article, I wrote about some of the misconceptions with “agile” that I see in organisations. This article will focus on one of them specifically – the common (mis)understanding that agile—and more recently lean start-up methods—are seen as operational [...]"
        }],
        
        /*Footer*/
        "footerLinks": "@site-footer.footerLinks",
        "socialLinks": "@site-footer.socialLinks",
        "inputGroupLabel": "@site-footer.inputGroupLabel",
        "inputGroupSubmit": "@site-footer.inputGroupSubmit",
        "inputModifier": '--combo',
        "siteFooterSmall": "@site-footer.siteFooterSmall"
    }
};
