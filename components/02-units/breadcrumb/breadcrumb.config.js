module.exports = {
    "status": "ready",
    "context": {
        "segmentOne": "About us",
        "breadcrumbUrl": "#"
    },
    "variants": [{
        "name": "inverted",
        "preview": "@preview-dark",
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
