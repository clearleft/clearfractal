var items = [];
for(var i = 1; i < 5; i++){
    items.push({
        pageNumber: i
    });
}

module.exports = {
    "status": "wip",
    "context": {
        "items": items,
        "pagePrevUrl": "#",
        "pageNextUrl": "#"
    }
}