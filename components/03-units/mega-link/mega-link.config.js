module.exports = {
    status: 'wip',
    context: {
        megaLinkURL: '#',
        megaLinkText: 'A link to somewhere'
    },
    variants: [
        {
            name: 'Super',
            context: {
                megaLinkModifier: '--super'
            }
        },
        {
            name: 'Inverted',
            preview: '@preview-dark',
            context: {
                megaLinkModifier: '--inverted'
            }
        },
        {
            name: 'Block',
            context: {
                megaLinkModifier: '--block'
            }
        },
        {
            name: 'Block-Inverted',
            display: {
                'background-color': '#333'
            },
            context: {
                megaLinkModifier: '--block MegaLink--inverted'
            }
        },
        {
            name: 'Springboard',
            context: {
                megaLinkModifier: '--springboard'
            }
        },
    ]
}
