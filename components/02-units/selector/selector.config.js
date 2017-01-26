
module.exports = {
    "status": "ready",
    "context": {
        "selectorID": "fragmentidentifier",
        "triggerContent": "trigger label",
        "targetContent": "<p>Target content.</p>"
    },
    "variants": [{
        "name": "categories",
        "context": {
            "selectorID": "categories",
            "triggerContent": "all posts",
            "triggerClass": "Heading Heading--main",
            "targetClass": "Container BgGreen",
            "listContext": {
                "listClass": "",
                "listItemClass": "Heading Heading--secondary",
                "linkClass": "",
                "listItems": [{
                    "url": "#",
                    "content": "opinions"
                },
                {
                    "url": "#",
                    "content": "announcements"
                },
                {
                    "url": "#",
                    "content": "podcasts"
                },
                {
                    "url": "#",
                    "content": "tiny lessons"
                },
                {
                    "url": "#",
                    "content": "all posts"
                }]
            }
        }
    }]
}
