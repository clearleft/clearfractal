const faker = require("faker");

module.exports = {
    status: "wip",
    context: {
        /*Header*/
        primaryNavlinks: "@primary-navigation.primaryNavlinks",
        primaryNavModifiers: ["--lapis-lazuli-blue", "--inverted"],
        logoModifiers: ["--lapis-lazuli-blue", "--inverted"],

        /* Home Splash */
        homeHeader:
            "We help design leaders get the most from their products, services &amp; teams.",
        homeSubheader:
            'Find out <a href="#">who we are</a> or <a href="#">how we can help</a>',

        /*Point group */
        pointItems: [
            {
                pointModifiers: "1",
                pointHeading: "Empowerment",
                pointBody:
                    "The physical working environment supports collaborative design activities"
            },
            {
                pointModifiers: "2",
                pointHeading: "Empowerment",
                pointBody:
                    "The physical working environment supports collaborative design activities"
            },
            {
                pointModifiers: "3",
                pointHeading: "Empowerment",
                pointBody:
                    "The physical working environment supports collaborative design activities"
            }
        ],

        /* Quote */
        quoteModifiers: "standalone",
        quoteText:
            "Clearleft listened, shared, and designed alongside us. Enabling us to evolve from crawling, walking, and finally running at a great pace in the development of our design practice",
        quoteAuthor: "Don Norman",
        quoteAuthorRole: "Speaker at UX London 2009",

        /*Footer*/
        footerLinks: "@site-footer.footerLinks",
        socialLinks: "@site-footer.socialLinks",
        inputGroupLabel: "@site-footer.inputGroupLabel",
        inputGroupSubmit: "@site-footer.inputGroupSubmit",
        inputGroupID: "@site-footer.inputGroupID",
        inputGroupPlaceholder: "@site-footer.inputGroupPlaceholder",
        inputGroupMicrocopy: "@site-footer.inputGroupMicrocopy",
        inputGroupModifiers: "@site-footer.inputGroupModifiers",
        siteFooterSmall: "@site-footer.siteFooterSmall"
    }
};
