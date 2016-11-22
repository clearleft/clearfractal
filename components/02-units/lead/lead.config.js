'use strict';
module.exports = {
    "status": "wip",
    "context": {
        "leadText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sapiente molestiae sed? Consectetur illo repellat dolorum assumenda, voluptatum explicabo architecto?"
    },
    "variants": [
    {
        "name": "bar",
        "context": {
            "leadModifier": "--bar"  
        }
    },
    {
        "name": "wrapper",
        "context": {
            "leadModifier": "--wrapper"  
        }
    },
    {
        "name": "bar and wrapper",
        "context": {
            "leadModifier": "--bar Lead--wrapper"  
        }
    },
    {
        "name": "overlap",
        "context": {
            "leadModifier": "--overlap Lead--bar Lead--wrapper"  
        }
    }]
}
