'use strict';

let image = "/assets/img/team/andy-t-lg.jpg";

module.exports = {
    "title": "Team Member",
    "status": "wip",
    "context": {
        /*Heading*/
        "primaryNavlinks": "@primary-navigation.primaryNavlinks",
        "primaryNavModifier": "--blue",
        "logoModifier": "--blue",

        /*Masthead*/
        "mastheadTitle": "What we stand for &amp; believe in",
        "mastheadBreadcrumb": true,
        "breadcrumbModifier": false,
        "segmentOne": "About us",
        "segmentTwo": "Values",
        
        /*Lead*/
        "pageLeadModifier": "--pinch",
        "leadText": "Every team has a distinct culture, whether it’s clearly defined or not. As we grow and change, our values help us maintain the essence of that culture. They are what we strive for and guide us in our work. If you’re new to us, they give you an insight into the work we’ll do together.",
        "chapters": "@chapters-values.chapters",
        "chapterModifier": "@chapters-values.chapterModifier",
        
        /*Footer*/
        "footerLinks": "@site-footer.footerLinks",
        "socialLinks": "@site-footer.socialLinks",
        "inputGroupLabel": "@site-footer.inputGroupLabel",
        "inputGroupSubmit": "@site-footer.inputGroupSubmit",
        "inputModifier": '--combo',
        "siteFooterSmall": "@site-footer.siteFooterSmall"
    }
};