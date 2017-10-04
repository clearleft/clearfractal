module.exports = {
    "status": "wip",
    "context": {
        "mastheadTitle": "Dedicated to advancing the practice of design"
    },
    "variants": [
        {
            "name": "arrows",
            "context": {
                "mastheadModifier": "--arrows"
            }
        },
        {
            "name": "combo",
            "context": {
                "mastheadModifier": "--combo",
                "mastheadTitle": "Graham Smith",
                "mastheadThirdHeading": 'Catch Andy speaking at:',
                "mastheadThird": `<a href="#">Beyond Tellerrand, 2016</a>`
            }
        },
        {
            "name": "chimney",
            "context": {
                "mastheadModifier": "--chimney"
            }
        },
        {
            "name": "breadcrumb",
            "context": {
                "mastheadBreadcrumb": true,
                "breadcrumbModifier": false,
                "segmentOne": "About us",
                "segmentTwo": "Values"
            }
        },
        {
            "name": "context heading",
            "context": {
                "mastheadContext": "topic",
                "breadcrumbModifier": false
            }
        },
        {
            "name": "inverted",
            "preview": "@preview-dark",
            "context": {
                "mastheadHeadingModifer": "--inverted",
                "mastheadContext": "topic",
                "breadcrumbModifier": false,
                "segmentOne": "About us",
                "segmentTwo": "Values"
            }
        },
        {
            "name": "full",
            "context": {
                "mastheadModifier": "--full"
            }
        }
    ]
};
