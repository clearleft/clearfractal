
module.exports = {
    "status": "wip",
    "context": {
        "segmentOne": "About us",
    },
    "variants": [{
        "name": "inverted",
        "context": {
            "breadcrumbModifier": "--inverted"
        }
    },
    {
        "name": "More segments",
        "context": {
            "breadcrumbModifier": false,
            "segmentTwo": "Values"
        }
    }]
}