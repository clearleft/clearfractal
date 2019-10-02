module.exports = {
    status: 'wip',
    context: {
        primaryNavlinks: '@primary-navigation.primaryNavlinks',
        primaryNavModifiers: ['--crayola-red'],
        logoModifiers: ['--crayola-red'],

        /*Masthead*/
        mastheadTitle: 'Our<br>Events.',
        mastheadDescription: 'Whether a digital leader, designer or developer we have events to inspire you and your team, give you new skills, and bring you the latest digital thinking from globally renowned speakers.',
        mastheadModifier: '--chimney Texture',

        eventsSubHead: {
            headerText: 'World-renowned events',
            headerStrapLinkURL: '#',
            headerStrapLinkText: 'View our past events'
        },

        /* Events */
        events: '@event-current-grid.events',

        /* Stats */
        stats: '@stats.stats',

        /* Quotes */
        quotes: [{
            quoteAvatarSrc: '/assets/img/work/ch4/anna-doble.jpg',
            quoteAvatarAlt: 'James Bates',
            quoteText: 'I remember a really good sense of collaboration. There were a lot of moving parts—us at Clearleft, the team at Channel 4, but also the team at ITN. I think we had a really good working relationship between all of those people.',
            quoteAuthor: 'James Bates',
            quoteAuthorRole: 'Speaker at UX London 2009'
        },
        {
            quoteAvatarSrc: '/assets/img/work/ch4/anna-doble.jpg',
            quoteAvatarAlt: 'James Bates',
            quoteText: 'I remember a really good sense of collaboration. There were a lot of moving parts—us at Clearleft, the team at Channel 4, but also the team at ITN. I think we had a really good working relationship between all of those people.',
            quoteAuthor: 'James Bates'
        },
        {
            quoteAvatarSrc: '/assets/img/work/ch4/anna-doble.jpg',
            quoteAvatarAlt: 'Don Norman',
            quoteText: 'I came. I listened. I stayed. Great event, great speakers, great crowd, great venue. Learn, network. enjoy',
            quoteAuthor: 'Don Norman',
            quoteAuthorRole: 'Speaker at UX London 2009'
        },
        {
            quoteAvatarSrc: '/assets/img/work/ch4/anna-doble.jpg',
            quoteAvatarAlt: 'James Bates',
            quoteText: 'I came. I listened. I stayed. Great event, great speakers, great crowd, great venue. Learn, network. enjoy',
            quoteAuthor: 'Don Norman',
            quoteAuthorRole: 'Speaker at UX London 2009'
        }
        ],

        /* Input group */
        mailingList: {
            inputGroupURL: '#',
            inputGroupLabel: 'Get notified with updates',
            inputGroupSubmit: 'Join the mailing list',
            inputGroupID: 'ID2',
            inputGroupPlaceholder: 'Enter email address',
            inputGroupMicrocopy: 'Low volume mailing list. Just for events & conference updates. <a href="#">See an example</a>',

        },

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
            inputGroupID: '@site-footer.inputGroupID',
            inputGroupPlaceholder: '@site-footer.inputGroupPlaceholder',
            inputGroupMicrocopy: '@site-footer.inputGroupMicrocopy',
            inputGroupModifiers: '@site-footer.inputGroupModifiers',
            siteFooterSmall: '@site-footer.siteFooterSmall'
        }
    }
};