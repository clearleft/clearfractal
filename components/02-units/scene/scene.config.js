
module.exports = {
    "status": "wip",
    "context": {
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
        "name": "Shuffle",
        "context": {
            "sceneModifier": "--shuffle"
        }
    },
    {
        "name": "Featured",
        "context": {
            "sceneModifier": "--featured"
        }
    },
    {
        "name": "Wide",
        "context": {
            "sceneModifier": "--wide"
        }
    }]
}