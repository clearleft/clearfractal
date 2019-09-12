'use strict';
module.exports = {
    status: 'ready',
    context: {
        imageBlockSrc: '/assets/img/work/ch4/ch4-team.jpg',
        imageBlockAlt: 'Channel 4 Team',
        imageBlockCaption: 'The channel 4 news team. Image courtesy of ITN News'
    },
    variants: [{
            name: 'Right caption',
            context: {
                imageBlockSrc: '/assets/img/work/ch4/sketching-lo-hi.jpg',
                imageBlockModifier: '--rightCaption',
                imageBlockCaption: 'Sketching from lo-fi to hi-fi'
            }
        },
        {
            name: 'Short',
            context: {
                imageBlockSrc: '/assets/img/work/ch4/ch4-team.png',
                imageBlockModifier: '--short',
                imageBlockCaption: false
            }
        },
        {
            name: 'first',
            context: {
                imageBlockSrc: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/Jan-Chipchase.jpg?mtime=20171007175433',
                imageBlockModifier: '--first',
                imageBlockCaption: false
            }
        }
    ]
}