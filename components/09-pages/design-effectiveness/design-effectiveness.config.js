const faker = require('faker');

// let quotes      = [];

// for (var i = 0; i < 6; i++) {
//     quotes.push({
//         quote: faker.lorem.sentence(12),
//         authorImage: "/assets/img/authors/sm/edv.png",
//         authorName: "Ellen DeVries",
//         datePosted: 'Sep 21'
//     });
// }

module.exports = {
    "status": "wip",
    "context": {
        /*Header*/
        "primaryNavlinks": "@primary-navigation.primaryNavlinks",
        "primaryNavModifiers": ["--lapis-lazuli-blue", "--inverted"],
        "logoModifiers": ["--lapis-lazuli-blue", "--inverted"],

        /* Home Splash */
        "homeHeader": "We help design leaders get the most from their products, services &amp; teams.",
        "homeSubheader": "Find out <a href=\"#\">who we are</a> or <a href=\"#\">how we can help</a>",


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
