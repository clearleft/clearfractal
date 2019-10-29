module.exports = {
    status: "ready",
    preview: "@preview-scroll",
    collated: true,
    default: "one",
    context: {},
    notes: "These are some **notes** about the component",
    variants: [
        {
            name: "one",
            context: {
                number: "1"
            }
        },
        {
            name: "two",
            context: {
                number: "2"
            }
        },
        {
            name: "three",
            context: {
                number: "3"
            }
        }
    ]
};
