'use strict';

const faker     = require('faker');
const persons   = [];

for(var i = 0; i < 20; i++){
    persons.push({
        indexCardName: faker.name.findName(),
        indexCardInfo: faker.name.jobTitle(),
        imageSrc: faker.image.avatar()
    });
}

module.exports = {
    "status": "wip",
    "context": {
        "links": [{ title: "Home", url: "#" }],
        "mastheadTitle": "Meet the Clearlefties",
        "persons": persons,
        "imageSrc": "@index-card.imageSrc",
        "modifier": "--tile",
        "message": "Lovingly crafted by Clearleft in Brighton, England",
        "small": "&copy; 2005‑now Clearleft Ltd. All rights reserved."
    }
};
