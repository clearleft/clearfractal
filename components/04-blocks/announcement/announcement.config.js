
module.exports = {
    status: 'ready',
    context: {
        announcementHighlight: 'out now',
        announcementTitle: 'Design Effectiveness Report 2019',
        announcementDescription: 'We surveyed designers from hundreds of organisations to find out how design is currently used and understood in their workplaces. ',
        announcementImage: '/assets/img/illustrations/handsup.png',
        megaLinkURL: '#',
        megaLinkText: 'Download the report',
        inlineImage: false
    },
    variants: [
        {
            name: 'No highlight',
            context: {
                announcementHighlight: ''
            }
        },
        {
            name: 'No image',
            context: {
                announcementImage: ''
            }
        },
        {
            name: 'Inline image',
            context: {
                inlineImage: true,
                announcementImage: '/assets/img/team-gallery/sketching.jpg'
            }
        },
        {
            name: 'Inline image - No highlight',
            context: {
                announcementHighlight: '',
                inlineImage: true,
                announcementImage: '/assets/img/team-gallery/sketching.jpg'
            }
        }
    ],
}
