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
            "name": "description",
            "context": {
                "mastheadDescription": "Since 2005, we have applied strategic design, research, and product development to help deliver unprecedented value.",
                "mastheadDescriptionSecondary": [
                    `<a href="#">11 yrs old and growing. What’s our story?</a>`,
                    `<a href="#">11 yrs old and growing. What’s our story?</a>`,
                    `<a href="#">11 yrs old and growing. What’s our story?</a>`
                ]
            }
        },
        {
            "name": "inverted",
            "preview": "@preview-dark",
            "context": {
                "mastheadModifier": "--inverted",
                "mastheadContext": "topic",
                "breadcrumbModifier": false,
                "segmentOne": "About us",
                "segmentTwo": "Values",
                "mastheadDescription": "Since 2005, we have applied strategic design, research, and product development to help deliver unprecedented value.",
            }
        },
        {
            "name": "minimal",
            "context": {
                "mastheadModifier": "--minimal",
                "breadcrumbModifier": false,
                "mastheadDescription": "Since 2005, we have applied strategic design, research, and product development to help deliver unprecedented value.",
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
