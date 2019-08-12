module.exports = {
    status: 'ready',
    context: {
        dropdownButtonText: 'Choose an option',
        dropdownLabel: 'show',
        items: [
            {
                url: '#',
                text: 'option one'
            },
            {
                url: '#',
                text: 'option two',
                active: true
            },
            {
                url: '#',
                text: 'option three'
            },
            {
                url: '#',
                text: 'option four'
            },
            {
                url: '#',
                text: 'option five'
            },
            {
                url: '#',
                text: 'option six'
            },]
    },
    variants: [{
        name: 'constrained',
        context: {
            dropdownModifier: '--constrained'
        }
    }]
}
