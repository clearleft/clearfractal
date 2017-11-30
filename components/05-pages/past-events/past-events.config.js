module.exports = {
    status: 'wip',
    context: {
        primaryNavlinks: '@primary-navigation.primaryNavlinks',
        primaryNavModifiers: ['--crayola-red'],
        logoModifiers: ['--crayola-red'],

        /*Masthead*/
        mastheadTitle: 'Our Past<br>Events.',
        mastheadDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .',
        mastheadModifier: '--chimney Texture--home',
        mastheadBreadcrumb: true,
        segmentOne: 'Events',
        breadcrumbUrl: '/components/preview/events',
        breadcrumbModifier: false,

        /* Events */
        events: '@event-past-grid.events',

        /* Hello */
        helloModifiers: '@hello--alis.helloModifiers',
        helloImgSrc: '@hello--alis.helloImgSrc',
        helloImgAlt: '@hello--alis.helloImgAlt',
        helloImgText: '@hello--alis.helloImgText',
        helloHeading: "@hello--alis.helloHeading",
        helloBody: '@hello--alis.helloBody',

        /*Footer*/
        footer: {
            footerLinks: '@site-footer.footerLinks',
            socialLinks: '@site-footer.socialLinks',
            inputGroupLabel: '@site-footer.inputGroupLabel',
            inputGroupSubmit: '@site-footer.inputGroupSubmit',
            inputGroupPlaceholder: 'E.g. example@domain.com',
            inputGroupMicrocopy: 'Every 2 weeks. It’S non-salesy. We never spam.',
            inputModifier: '--combo',
            siteFooterSmall: '@site-footer.siteFooterSmall'
        }
    }
};