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
                eventSrc: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/leading-design-logo.svg?mtime=20170407111120',
                eventAlt: 'Leading Design',
                eventUrl: '#',
                eventLink: 'Full event details & tickets',
                eventLocation: 'Laban, London',
                eventDate: 'May 24-26 2017',
                eventStatus: 'current',
                eventDescription: `<p>A conference for people leading design teams, overseeing design direction, or instilling a culture of design within their organisations. Listen to leaders from Facebook, Buzzfeed, IBM Design Studio and Vine discuss the challenges of managing design, and becoming a better design leader.</p>`,
                eventTicketTiers: tickets,
                eventPictures: [pic, pic, pic]                
            },
            {
                eventSrc: '@event-card--presents.eventSrc',
                eventAlt: '@event-card--presents.eventAlt',
                eventName: '@event-card--presents.eventName',
                eventDescription: '@event-card--presents.eventDescription',
                eventUrl: '@event-card--presents.eventUrl',
                eventLink: '@event-card--presents.eventLink',
                eventLocation: '@event-card--presents.eventLocation',
                eventDate: '@event-card--presents.eventDate',
                eventStatus: 'current',
                eventTicketTiers: '@event-card--presents.eventTicketTiers',
                eventPictures: [pic, pic, pic]     
            },
            {
                eventStatus: '@event-card--upcoming.eventStatus',
                eventSrc: '@event-card--upcoming.eventSrc',
                eventAlt: '@event-card--upcoming.eventAlt',
                eventDescription: '@event-card--upcoming.eventDescription',
                eventUrl: '@event-card--upcoming.eventUrl',
                eventLink: '@event-card--upcoming.eventLink',
                eventPictures: [pic,pic,pic]
            }
        ]
    }
}