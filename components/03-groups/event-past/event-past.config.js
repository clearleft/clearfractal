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
    event: {
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
                eventSide: 'right',
                eventCard: {
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
                    ],
                    eventPictures: [pic, pic, pic]
                }                
            }
        },
        {
            name: 'left',
            context:{
                eventSide: 'left',
                eventCard: {
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
                    ],
                    eventPictures: [pic, pic, pic]
                }                
            }
        }
    ]
}
