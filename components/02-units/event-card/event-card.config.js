module.exports = {
    status: 'ready',
    default: 'current',
    variants: [{
            name: 'current',
            context: {                
                eventCardSrc: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/ux-london-logo.svg',
                eventCardAlt: 'UX London',
                eventCardUrl: '#',
                eventCardLink: 'Full event details & tickets',
                eventCardInfo: {
                    location: 'Laban, London',
                    date: 'May 24-26 2017'
                },
                eventCardDescription: `We bring engaging industry leaders from around the world to present a combination of inspirational talks and lively, hands-on workshops.`,
                eventCardTicketTiers: [{
                        tierName: 'Super Early Bird tickets',
                        tierPrice: '£445 + VAT',
                        tierSoldOut: true
                    },
                    {
                        tierName: 'Early Bird tickets',
                        tierPrice: '£495 + VAT'
                    },
                    {
                        tierName: 'Standard tickets',
                        tierPrice: '£595 + VAT'
                    }
                ]
            }
        },
        {
            name: 'presents',
            context: {
                eventCardSrc: '/assets/img/logos/clearleft-presents.svg',
                eventCardAlt: 'Clearleft presents: Jake Knapp Design Sprint Workshop',
                eventCardName: 'Jake Knapp Design Sprint Workshop',
                eventCardDescription: `Learn the Design Sprint process from its creator, Jake Knapp. The Design Sprint is a method for answering big questions quickly. It’s a greatest hits of design thinking, Lean Startup-style business strategy, innovation, behavioural science, and more.`,
                eventCardUrl: '#',
                eventCardLink: 'Full event details & tickets',
                eventCardInfo: {
                    location: 'Hoxton Hotel, Shoreditch, London',
                    date: 'Thursday 7th September, 2016'
                },
                eventCardTicketTiers: [{
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
                ]
            }
        },
        {
            name: 'past',
            context: {
                eventName: 'UX London',
                eventCardSrc: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/ux-london-logo.svg',
                eventCardAlt: 'UX London',
                eventCardDescription: `3 days of inspiration for UX designers. We bring engaging industry leaders from around the world to present a combination of inspirational talks and lively, hands-on workshops.`,
                eventCardListTitle: 'WHEN',
                pastVersions: [{
                        item: '2016',
                        itemUrl: '#'
                    },
                    {
                        item: '2015',
                        itemUrl: '#'
                    },
                    {
                        item: '2014',
                        itemUrl: '#'
                    },
                    {
                        item: '2013',
                        itemUrl: '#'
                    }
                ]
            }
        },
        {
            name: 'presents-past',
            context: {
                eventCardName: 'Blair Enns The Four Conversations',
                eventCardSrc: '/assets/img/logos/clearleft-presents.svg',
                eventCardAlt: 'Clearleft presents: Blair Enns The Four Conversations',
                eventCardDescription: `To launch the Clearleft Presents series, we’re pleased as punch to welcome Blair Enns, founder of Win Without Pitching. After Blair’s acclaimed presentation last year at our Founders Assembly event … `,
                eventCardUrl: '#',
                eventCardLink: 'Full event details',
                eventCardInfo: {
                    location: 'Hoxton Hotel, Shoreditch, London',
                    date: 'Thursday 7th September, 2016'
                }
            }
        }
    ]
}