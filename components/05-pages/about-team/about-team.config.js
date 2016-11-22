'use strict';
const faker     = require('faker');
const persons   = [];
var imageSrc = ["/assets/img/team/james-g.jpg", "/assets/img/team/ben-w.jpg", "/assets/img/team/ellen.jpg", "/assets/img/team/hana.jpg", "/assets/img/team/charlotte.jpg", "/assets/img/team/andy-t.jpg"];
for(var i = 0; i < 26; i++){
    var number = Math.floor((Math.random() * 5) + 1);
    persons.push({
        indexCardName: faker.name.findName(),
        indexCardInfo: faker.name.jobTitle(),
        imageSrc: imageSrc[number]
    });
}

module.exports = {
    "status": "wip",
    "context": {
        "links": [{ title: "Home", url: "#" }],
        "mastheadTitle": "Advancing the practice of design",
        "leadText": "@lead.leadText",
        "persons": persons,
        "message": "Lovingly crafted by Clearleft in Brighton, England",
        "small": "&copy; 2005‑now Clearleft Ltd. All rights reserved."
    }
};