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
const pic2 = {
    sources: [{
        srcset: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/_1080x1080_crop_center-center_85/pearson-index.jpg?mtime=20171101102457',
        media: '(min-width: 57.5em)'
    }, {
        srcset: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/_800x800_crop_center-center_85/pearson-index.jpg?mtime=20171101102457',
        media: '(min-width: 42.5em)'
    }],
    img: {
        src: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/_400x400_crop_center-center_85/pearson-index.jpg?mtime=20171101102457',
        style: 'object-position: 50% 50%'
    }
};
const pic3 = {
    sources: [{
        srcset: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/_1080x1080_crop_center-center_85/bhcc-index.jpg?mtime=20171101102133',
        media: '(min-width: 57.5em)'
    }, {
        srcset: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/_800x800_crop_center-center_85/bhcc-index.jpg?mtime=20171101102133',
        media: '(min-width: 42.5em)'
    }],
    img: {
        src: 'https://s3-eu-west-1.amazonaws.com/clearleft-v5/uploads/_400x400_crop_center-center_85/bhcc-index.jpg?mtime=20171101102133',
        style: 'object-position: 0% 50%'
    }
};

module.exports = {
    status: 'wip',
    context: {
        events: [
            {
                eventCard: '@event-card--past',
                eventPictures: [pic, pic3, pic2]
            },
            {
                eventCard: '@event-card--presents-past',
                eventPictures: [pic2, pic, pic3]
            }
        ]
    }
}