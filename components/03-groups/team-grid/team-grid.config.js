'use strict';
var faker = require('faker');
var persons = [];
for(var i = 0; i < 25; i++){
    persons.push({
        indexCardName: faker.name.findName(),
        indexCardInfo: faker.name.jobTitle(),
        imageSrc: faker.image.avatar()
    });
}
module.exports = {
    "status": "wip",
    "context": {
        "persons": persons,
        "imageSrc": "@index-card.imageSrc",
        "modifier": "--tile"
    }
};