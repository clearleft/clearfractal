module.exports = {
    status: "wip",
    collated: true,
    preview: "@preview-scroll",
    variants: [
        {
            name: "default",
            context: {
                pointHeading: "No number",
                pointBody:
                    "The physical working environment supports collaborative design activities"
            }
        },
        {
            name: "one",
            context: {
                pointModifiers: "1",
                pointHeading: "Empowerment",
                pointBody:
                    "The physical working environment supports collaborative design activities"
            }
        },
        {
            name: "two",
            context: {
                pointModifiers: "2",
                pointHeading: "Environment",
                pointBody:
                    "The physical working environment supports collaborative design activities"
            }
        },
        {
            name: "three",
            context: {
                pointModifiers: "3",
                pointHeading: "Research",
                pointBody:
                    "The physical working environment supports collaborative design activities"
            }
        }
    ]
};
