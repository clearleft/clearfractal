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
                "breadcrumbModifier": false,
                "segmentOne": "About us",
                "segmentTwo": "Values"
            }
        },
        {
            "name": "inverted",
            "context": {
                "mastheadHeadingModifer": "--inverted",
                "mastheadContext": true,
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
