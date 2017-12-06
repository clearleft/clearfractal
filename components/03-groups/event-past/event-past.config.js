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
                        versionText: '2016',
                        versionURL: '#'
                    },
                    {
                        versionText: '2015',
                        versionURL: '#'
                    },
                    {
                        versionText: '2014',
                        versionURL: '#'
                    },
                    {
                        versionText: '2013',
                        versionURL: '#'
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
                        versionText: 'Jake Knapp',
                        versionURL: '#'
                    },
                    {
                        versionText: 'Blair Ennis',
                        versionURL: '#'
                    },
                    {
                        versionText: 'Mike Monteiro',
                        versionURL: '#'
                    },
                    {
                        versionText: 'Jan Chipchase',
                        versionURL: '#'
                    }
                    ],
                    eventPictures: [pic, pic, pic]
                }                
            }
        }
    ]
}
