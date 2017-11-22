module.exports = {
    status: 'ready',
    context: {
        eventCardInfo: {
            location: 'Laban, London',
            date: 'May 24-26 2017'
        },
        eventCardSrc: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/ux-london-logo.svg',
        eventCardAlt: 'UX London',
        eventCardUrl: '#',
        eventCardLink: 'Full event details & tickets',
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
    },
    variants: [{
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
    }]
}