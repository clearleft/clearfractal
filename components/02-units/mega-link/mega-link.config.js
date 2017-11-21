module.exports = {
    "status": "wip",
    "context": {
        "megaLinkURL": "",
        "megaLinkText": "A link to somewhere"
    },
    "variants": [
        {
            "name": "Super",
            "context": {
                "megaLinkModifier": "--super"
            }
        },
        {
            "name": "Inverted",
            "preview": "@preview-dark",
            "context": {
                "megaLinkModifier": "--inverted"
            }
        },
        {
            "name": "Block",
            "context": {
                "megaLinkModifier": "--block"
            }
        },
        {
            "name": "BlockAlt",
            "context": {
                "megaLinkModifier": "--block-alt"
            }
        }
    ]
}
