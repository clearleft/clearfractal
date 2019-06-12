module.exports = {
    status: 'wip',
    context: {
        links: [
            {
                megaLinkURL: '#',
                megaLinkText: 'A link to somewhere'
            },
            {
                megaLinkURL: '#',
                megaLinkText: 'A link to somewhere'
            }]
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
            name: 'Left Aligned',
            context: {
                multiLinkModifier: '--left'
            }
        }
    ]
}
