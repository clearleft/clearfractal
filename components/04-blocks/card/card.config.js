'use strict';

module.exports = {
    status: 'ready',
    context: {
        cardBar: true,
        cardTitle: 'Article Title Goes here',
        cardCategory: 'Opinion',
        cardMeta: '2 weeks ago',
        cardDescription: 'In my previous article, I wrote about some of the misconceptions with “agile” that I see in organisations.',
        cardUrl: '#',
        cardId: 'card-01'
    },
    variants: [
        {
            name: 'Tiny Lesson',
            context: {
                cardModifiers: ['--tiny-lesson'],
                cardTitle: 'Article Title Goes here',
                cardCategory: 'Tiny Lesson',
                cardId: 'card-02'
            }
        },
        {
            name: 'Vibrant',
            context: {
                cardModifiers: ['--vibrant'],
                cardBar: true,
                cardTitle: 'Royal Borough of Kensington and Chelsea',
                cardCategory: false,
                cardDescription: false,
                cardUrl: '#',
                cardLinkText: 'Read the case study',
                cardLinkLabel: 'Read the Royal Borough case study',
                cardId: 'card-03'
            }
        },
        {
            name: 'With logo',
            context: {
                cardModifiers: ['--logo'],
                cardBar: false,
                cardLogoSrc: 'https://clearleft-v5.s3.amazonaws.com/uploads/rb-kensington-chelsea-2x.png',
                cardLogoAlt: 'Royal Borough of Kensington and Chelsea',
                cardTitle: 'Royal Borough of Kensington and Chelsea',
                authorImage: '/assets/img/authors/sm/edv.png',
                authorName: 'Ellen DeVries',
                cardId: 'card-04'
            }
        },
        {
            name: 'With author',
            context: {
                cardModifiers: ['--image'],
                cardBar: true,
                cardTitle: 'Royal Borough of Kensington and Chelsea',
                authorImage: '/assets/img/authors/sm/edv.png',
                authorName: 'Ellen DeVries',
                cardId: 'card-05'
            }
        },
        {
            name: 'Home',
            context: {
                cardModifiers: ['--home'],
            }
        },
        {
            name: 'Springboard',
            context: {
                cardModifiers: ['--springboard'],
                cardBar: false,
                cardCategory: null,
                cardDescription: '<p>The first phase in any design process is research. Our experienced researchers help you understand your customers, challenge assumptions, and nurture innovation ideas. They excel in</p><ul><li>Stakeholder research</li><li>Generative user research</li><li>Usability testing and heuristic analysis</li><li>Emerging trend, behaviour & market analysis</li><li>Behavioural segmentation and persona creation</li></ul><p>The first phase in any design process is research. Our experienced researchers help you understand your customers, challenge assumptions, and nurture innovation ideas. They excel in</p>',
                cardMeta: null,
                megaLinkURL: '#',
                cardUrl: null,
                megaLinkText: 'A link to somewhere'
            }
        }
    ]
}
