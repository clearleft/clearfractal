'use strict';
var faker = require('faker');
var persons = [];
var imageSrc = ["/assets/img/team/james-g.jpg", "/assets/img/team/ben-w.jpg", "/assets/img/team/ellen.jpg", "/assets/img/team/hana.jpg", "/assets/img/team/charlotte.jpg", "/assets/img/team/andy-t.jpg"];
for(var i = 0; i < 20; i++){
    var number = Math.floor(Math.random() * imageSrc.length);
    persons.push({
        indexCardName: faker.name.findName(),
        indexCardInfo: faker.name.jobTitle(),
        imageSrc: imageSrc[number]
    });
}
module.exports = {
    "status": "wip",
    "context": {
        "persons": persons,
        "imageSrc": "@index-card.imageSrc"
    }
};