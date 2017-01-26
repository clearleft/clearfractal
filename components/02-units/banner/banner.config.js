module.exports = {
    "status": "ready",
    "context": {
        "bannerCaption": "Take a peek into Middle Street",
        "bannerHeadline": "Our Studio",
        "bannerBody": ""
    },
    "variants": [{
        "name": "notice",
        "context": {
            "bannerModifier": "--notice",
            "bannerCaption": "Fancy a change?",
            "bannerHeadline": "Come grow with us",
            "bannerBody" :"We care deeply about our work and always aim to do the right thing. If that sounds up your street then let’s chat."
        }
    },
    {
        "name": "inverted",
        "context": {
            "bannerModifier": "--inverted"
        }
    },
    {
        "name": "decoration",
        "context": {
            "bannerModifier": "--decorated",
            "bannerBody":`<p>We're a team of makers, thinkers, organisers and digital explorers.<br>We're always actively seeking out new skills, challenges and opportunities.</p>
            `,
            "bannerLink": "Check out our open vacancies"
        }
    }]
}
