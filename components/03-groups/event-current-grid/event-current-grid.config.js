const pic = {
    sources: [{
        srcset: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/_1080x1080_crop_center-center_85/vhols-index.jpg?mtime=20171101102312',
        media: '(min-width: 57.5em)'
    }, {
        srcset: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/_800x800_crop_center-center_85/vhols-index.jpg?mtime=20171101102312',
        media: '(min-width: 42.5em)'
    }],
    img: {
        src: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/_400x400_crop_center-center_85/vhols-index.jpg?mtime=20171101102312',
        style: 'object-position: 0% 50%'
    }
};
const tickets = [{
    tierName: 'Super Early Bird tickets',
    tierPrice: '£445 + VAT',
    tierSoldOut: true
}, {
    tierName: 'Early Bird tickets',
    tierPrice: '£495 + VAT'
}, {
    tierName: 'Standard tickets',
    tierPrice: '£595 + VAT'
}];

module.exports = {
    status: 'wip',
    context: {
        events: [
            {
                eventCard: {
                    eventCardSrc: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/leading-design-logo.svg?mtime=20170407111120',
                    eventCardAlt: 'Leading Design',
                    eventCardUrl: '#',
                    eventCardLink: 'Full event details & tickets',
                    eventCardInfo: {
                        location: 'Laban, London',
                        date: 'May 24-26 2017'
                    },
                    eventCardDescription: `A conference for people leading design teams, overseeing design direction, or instilling a culture of design within their organisations. Listen to leaders from Facebook, Buzzfeed, IBM Design Studio and Vine discuss the challenges of managing design, and becoming a better design leader.`,
                    eventCardTicketTiers: tickets
                },
                eventPicture: pic
            },
            {
                eventCard: '@event-card--presents',
                eventPicture: pic
            },
            {
                eventCard: '@event-card--upcoming',
                eventPicture: pic
            }
        ]
    }
}