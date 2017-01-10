var items = [];
const faker = require('faker');
for(var i = 1; i < 5; i++){
    items.push({
        metadata: faker.name.findName() + ", " + faker.name.jobTitle()
    });
}

module.exports = {
    "status": "wip",
    "context": {
        "metadataHeading": "Our team",
        "items": items
    },
    "variants": [{
        "name": "pill style",
        "context": {
            "metadataPill": true
        }
    }]
}