
module.exports = {
    "status": "ready",
    "context": {
        "sceneProse": `
            <p>We had worked with Channel 4 News before, designing their mobile apps and refreshing their website, but this was the biggest challenge yet.  We needed to find tiny ways to make big changes to a vast eco-system of content production to make it more suitable for mobile consumption. Not only did the new website need to adapt to many devices and screen sizes, it needed to adapt to the fast-paced way the news itself gets produced.</p>
            <p>Channel 4 and ITN work together to deliver the news, which means there are lots of people involved at each stage. They have an enormous responsibility to the public but their online strategy didn’t reflect the many ways in which news is captured and consumed. The Channel 4 news team have a passion for the power of journalism, so together we set out to design a way to convey that passion on the web.</p>
        `,
        "sceneHeading": "The challenge for the Channel 4 News Room",
        metas: [
            {
                "metadataHeading": "What we did",
                "metadataPill": true,
                items: [
                    {
                        metadata: 'Strategy'
                    },
                    {
                        metadata: 'UX Design'
                    },
                    {
                        metadata: 'Visual Design'
                    }
               ],
            },
            '@metadata',
            {
                "metadataHeading": "something",
                items: [
                    {
                        metadata: 'aasdasd'
                    },
                    {
                        metadata: 'baasdr'
                    }
               ],
            }
        ]
    },

    "variants": [{
        "name": "Basic",
        "context": {
            "sceneModifier": "--basic"
        }
    }]
}
