module.exports = {
    status: "wip",
    collated: true,
    preview: "@preview-scroll",
    variants: [
        {
            name: "default",
            context: {
                pointHeading: "Open the conversation.",
                pointBody: `
            <p> Ask us anything. From basic questions to complex queries about your approach to strategy, research, content and design, Dan is ready to talk to you on + 44(0) 845 838 6163 or <a href ="#"> get in touch </a></p>`
            }
        },
        {
            name: "one",
            context: {
                pointModifiers: "1",
                pointHeading: "Open the conversation.",
                pointBody: `
            <p> Ask us anything. From basic questions to complex queries about your approach to strategy, research, content and design, Dan is ready to talk to you on + 44(0) 845 838 6163 or <a href ="#"> get in touch </a></p>`
            }
        },
        {
            name: "two",
            context: {
                pointModifiers: "2",
                pointHeading: "Open the conversation.",
                pointBody: `
            <p> Ask us anything. From basic questions to complex queries about your approach to strategy, research, content and design, Dan is ready to talk to you on + 44(0) 845 838 6163 or <a href ="#"> get in touch </a></p>`
            }
        },
        {
            name: "three",
            context: {
                pointModifiers: "3",
                pointHeading: "Open the conversation.",
                pointBody: `
            <p> Ask us anything. From basic questions to complex queries about your approach to strategy, research, content and design, Dan is ready to talk to you on + 44(0) 845 838 6163 or <a href ="#"> get in touch </a></p>`
            }
        }
    ]
};
