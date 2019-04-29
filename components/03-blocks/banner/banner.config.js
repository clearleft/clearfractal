module.exports = {
    "status": "ready",
    "context": {
        "bannerCaption": "Take a peek into Middle Street",
        "bannerHeadline": "Our Studio",
        "bannerBody": "",
        "bannerLandmark": "complementary"
    },
    "variants": [
        {
            "name": "notice",
            "context": {
                "bannerModifiers": ["--notice"],
                "bannerCaption": "Fancy a change?",
                "bannerHeadline": "Come grow with us",
                "bannerBody" :"We care deeply about our work and always aim to do the right thing. If that sounds up your street then let’s chat."
            }
        },
        {
            "name": "inverted",
            "preview": "@preview-dark",
            "context": {
                "bannerModifiers": ["--inverted"]
            }
        },
        {
            "name": "decoration",
            "context": {
                "bannerModifiers": ["--decorated"],
                "bannerCaption": "",
                "bannerBody":`<p>We’re a team of makers, thinkers, organisers and digital explorers.<br>We’re always actively seeking out new skills, challenges and opportunities.</p>`,
                "megaLinkURL": "#",
                "megaLinkText": "Check out our open vacancies",
                "megaLinkModifier": "--inverted"
            }
        }
    ]
}
