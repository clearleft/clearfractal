module.exports = {
    "status": "wip",
    "context": {
        "mastheadTitle": "Dedicated to advancing the practice of design"
    },
    "variants": [{
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
            "mastheadThird": `
            <a href="">See Andy speak at Beyond Tellerrand</a>
            `
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
            "mastheadContext": true,
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
        "name": "background image",
        "context": {
            "mastheadModifier": "--arrows Masthead--greenStreak",
            "mastheadImage": true
        }
    }]
};