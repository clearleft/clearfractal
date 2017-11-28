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

const context = {
    eventCard: {
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
    },
    eventPictures: [pic, pic, pic]
};

module.exports = {
    status: 'wip',
    preview: '@preview-cols',
    default: 'left',
    variants: [
        {
            name: 'right',
            context: {
                eventCardSide: 'right',
                eventCard: {
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
                },
                eventPictures: [pic, pic, pic]
            }
        },
        {
            name: 'left',
            context:{
                eventCardSide: 'left',
                eventCard: {
                    eventCardSrc: '/assets/img/logos/clearleft-presents-med.svg',
                    eventCardAlt: 'Clearleft presents: Blair Enns The Four Conversations',
                    eventCardDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`,
                    eventCardListTitle: 'Who',
                    pastVersions: [{
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
                },
                eventPictures: [pic, pic, pic]
            }
        }
    ]
}