module.exports = {
    status: 'wip',
    context: {
        primaryNavlinks: '@primary-navigation.primaryNavlinks',
        primaryNavModifiers: ['--crayola-red'],
        logoModifiers: ['--crayola-red'],

        /*Masthead*/
        mastheadTitle: 'Field Research Masterclass',
        mastheadBreadcrumb: true,
        segmentOne: 'Events',
        segmentTwo: 'Field Research Masterclass',
        breadcrumbUrl: '/components/preview/events',
        breadcrumbModifier: false,
        mastheadSub: 'Jan Chipchase',
        mastheadSubModifer: '--contextLarge',

        lead: {
            leadText: 'High quality, well crafted field research can provide critical competitive advantage for your organisation. Yet today, most corporate field work falls well short of its considerable potential. This Field Research Masterclass is split into two complementary sessions, combining focused talks, hands-on activities and group discussion, with plenty of unique support material.',
            leadModifier: ' Bar'
        },
        eventInfo: {
            eventLocation: 'Hoxton Hotel, Shoreditch, London',
            eventDate: 'Thursday 7th Sep'
        },
        eventTicketTiers: [{
                tierName: 'Super Early Bird tickets',
                tierPrice: '£445 + VAT'
            },
            {
                tierName: 'Early Bird tickets',
                tierPrice: '£495 + VAT'
            },
            {
                tierName: 'Standard tickets',
                tierPrice: '£595 + VAT'
            }
        ],
        workshopTicketLink: '#',
        workshopTicketLinkText: 'Tickets on sale now',
        workshopDescription: `<p><strong>Morning Session: The Art and Science of Understanding</strong><br></p><p>The morning session takes a systematic look at how we make sense of the world, focuses on what <em>you</em> bring to the table, and how this maps to project and organisational needs. </p><p><strong>What you’ll learn:</strong></p><p>Through discussion and exercises, you’ll learn how field studies can inform and inspire your project and provide competitive advantage to your company. Discover how to generate high quality insights, and unpick what it takes to have a lasting influence on your organisation.</p>`,
        workshopHostImage: [{
            url: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/Jan-Chipchase.jpg?mtime=20171007175433',
            title: 'Jan Chipchase',
            altText: 'Jan Chipchase'
        }],
        workshopHostInfoTitle: 'About Jan',
        workshopAboutHost: '<p>Jan is the founder of <a href="https://www.studiodradiodurans.com/">Studio D</a> and has unparalleled experience of running international field work projects, to inform and inspire design, strategy, brand and other corporate operations. He regularly consults Fortune 500 corporations, startups, nonprofits and governments, from product teams in the trenches up to the C-suite. He also wrote, designed and published <a href="https://www.thefieldstudyhandbook.com/">The Field Study Handbook</a>, that has been described as “The canonical classic reference for cross-cultural research”.</p>',
        workshopWhoShouldAttend: '<p>This event is for product teams, designers, researchers, insights teams, in agencies, in-house, local and central government. People who are curious about human interaction, and their place in the world.<br></p>',
        workshopLocation: 'London TBC',
        workshopLocationInfo: '',

        /* Hello */
        helloModifiers: '@hello--alis.helloModifiers',
        helloImgSrc: '@hello--alis.helloImgSrc',
        helloImgAlt: '@hello--alis.helloImgAlt',
        helloImgText: '@hello--alis.helloImgText',
        helloHeading: '@hello--alis.helloHeading',
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