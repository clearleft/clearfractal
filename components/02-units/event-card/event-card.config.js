module.exports = {
    status: 'ready',
    default: 'current',
    variants: [{
            name: 'current',
            context: {
                eventSrc: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/ux-london-logo.svg',
                eventAlt: 'UX London',
                eventUrl: '#',
                eventLink: 'Full event details & tickets',
                eventInfo: {
                    location: 'Laban, London',
                    date: 'May 24-26 2017'
                },
                eventDescription: `We bring engaging industry leaders from around the world to present a combination of inspirational talks and lively, hands-on workshops.`,
                eventTicketTiers: [{
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
                eventSrc: '/assets/img/logos/clearleft-presents-sm.svg',
                eventAlt: 'Clearleft presents: Jake Knapp Design Sprint Workshop',
                eventName: 'Jake Knapp Design Sprint Workshop',
                eventDescription: `Learn the Design Sprint process from its creator, Jake Knapp. The Design Sprint is a method for answering big questions quickly. It’s a greatest hits of design thinking, Lean Startup-style business strategy, innovation, behavioural science, and more.`,
                eventUrl: '#',
                eventLink: 'Full event details & tickets',
                eventInfo: {
                    location: 'Hoxton Hotel, Shoreditch, London',
                    date: 'Thursday 7th September, 2016'
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
                ]
            }
        },
        {
            name: 'past',
            context: {
                eventSrc: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/ux-london-logo.svg',
                eventAlt: 'UX London',
                eventDescription: `3 days of inspiration for UX designers. We bring engaging industry leaders from around the world to present a combination of inspirational talks and lively, hands-on workshops.`,
                eventListTitle: 'WHEN',
                eventPastVersions: [{
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
                eventSrc: '/assets/img/logos/clearleft-presents-med.svg',
                eventAlt: 'Clearleft presents: Blair Enns The Four Conversations',
                eventDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`,
                eventListTitle: 'Who',
                eventPastVersions: [{
                        item: 'Jake Knapp',
                        itemUrl: '#'
                    },
                    {
                        item: 'Blair Ennis',
                        itemUrl: '#'
                    },
                    {
                        item: 'Mike Monteiro',
                        itemUrl: '#'
                    },
                    {
                        item: 'Jan Chipchase',
                        itemUrl: '#'
                    }
                ]
            }
        },
        {
            name: 'upcoming',
            context: {
                eventStatus: 'upcoming',
                eventSrc: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/ux-london-logo-white.svg?mtime=20170407111157',
                eventAlt: 'UX London',
                eventDescription: `We bring engaging industry leaders from around the world to present a combination of inspirational talks and lively, hands-on workshops.`,
                eventUrl: '#',
                eventLink: 'Sign up for updates'
            }
        },
        // inverted
        {
            name: 'current-inverted',
            context: {
                eventIsInverted: true,
                eventBackground: '#6F00FF',
                eventSrc: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/ux-london-logo-white.svg?mtime=20170407111157',
                eventAlt: 'UX London',
                eventUrl: '#',
                eventLink: 'Full event details & tickets',
                eventInfo: {
                    location: 'Laban, London',
                    date: 'May 24-26 2017'
                },
                eventDescription: `We bring engaging industry leaders from around the world to present a combination of inspirational talks and lively, hands-on workshops.`,
                eventTicketTiers: [{
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
            name: 'presents-inverted',
            context: {
                eventIsInverted: true,
                eventBackground: '#1F6B9C',
                eventSrc: '/assets/img/logos/clearleft-presents-sm.svg',
                eventAlt: 'Clearleft presents: Jake Knapp Design Sprint Workshop',
                eventName: 'Jake Knapp Design Sprint Workshop',
                eventDescription: `Learn the Design Sprint process from its creator, Jake Knapp. The Design Sprint is a method for answering big questions quickly. It’s a greatest hits of design thinking, Lean Startup-style business strategy, innovation, behavioural science, and more.`,
                eventUrl: '#',
                eventLink: 'Full event details & tickets',
                eventInfo: {
                    location: 'Hoxton Hotel, Shoreditch, London',
                    date: 'Thursday 7th September, 2016'
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
                ]
            }
        },
        {
            name: 'past-inverted',
            context: {
                eventIsInverted: true,
                eventBackground: '#222',
                eventSrc: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/ux-london-logo-white.svg?mtime=20170407111157',
                eventAlt: 'UX London',
                eventDescription: `3 days of inspiration for UX designers. We bring engaging industry leaders from around the world to present a combination of inspirational talks and lively, hands-on workshops.`,
                eventListTitle: 'WHEN',
                eventPastVersions: [{
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
            name: 'presents-past-inverted',
            context: {
                eventIsInverted: true,
                eventBackground: '#6F00FF',
                eventSrc: '/assets/img/logos/clearleft-presents-med.svg',
                eventAlt: 'Clearleft presents: Blair Enns The Four Conversations',
                eventDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`,
                eventListTitle: 'Who',
                eventPastVersions: [{
                    item: 'Jake Knapp',
                    itemUrl: '#'
                },
                {
                    item: 'Blair Ennis',
                    itemUrl: '#'
                },
                {
                    item: 'Mike Monteiro',
                    itemUrl: '#'
                },
                {
                    item: 'Jan Chipchase',
                    itemUrl: '#'
                }
                ]
            }
        },
        {
            name: 'upcoming-inverted',
            context: {
                eventIsInverted: true,
                eventBackground: '#6F00FF',
                eventStatus: 'upcoming',
                eventSrc: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/ux-london-logo-white.svg?mtime=20170407111157',
                eventAlt: 'UX London',
                eventDescription: `We bring engaging industry leaders from around the world to present a combination of inspirational talks and lively, hands-on workshops.`,
                eventUrl: '#',
                eventLink: 'Sign up for updates'
            }
        }
    ]
}