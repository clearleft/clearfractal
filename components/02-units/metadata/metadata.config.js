var items = [];
const faker = require('faker');
for(var i = 1; i < 5; i++){
    items.push({
        metadata: faker.name.findName() + ", " + faker.name.jobTitle()
    });
}

module.exports = {
    "status": "ready",
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
