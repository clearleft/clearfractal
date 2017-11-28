module.exports = {
    status: 'wip',
    default: 'dan',
    collated: true,
    variants: [{
            name: 'dan',
            context: {
                helloClasses: 'Hello--dan',
                helloImgSrc: 'https://clearleft-v5.s3.amazonaws.com/uploads/DC.png',
                helloImgAlt: 'Dan Caplin',
                helloImgText: 'This is Dan',
                helloHeading: 'Open the conversation.',
                helloBody: `
            <p> Ask us anything. From basic questions to complex queries about your approach to strategy, research, content and design, Dan is ready to talk to you on + 44(0) 845 838 6163 or <a href ="#"> get in touch </a></p>
        `
            },
        },
        {
            name: 'alis',
            context: {
                helloClasses: 'Hello--alis',
                helloImgSrc: 'https://clearleft-v5.s3.amazonaws.com/uploads/alis-cox-author.png',
                helloImgAlt: 'Alis Cox',
                helloHeading: 'Meet Alis.',
                helloBody: `
            <p> Our conference team are here to help you with any questions about our events.</p>
            <p> Talk to Events Manager Alis Cox on +44 (0)845 838 6163 or
            <a href="#">get in touch </a> about coming to an event or drop her a mail about opportunities
            for event sponsorship. </p>
            `
            },
        }
    ]
}