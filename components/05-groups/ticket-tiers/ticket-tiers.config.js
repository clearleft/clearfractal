module.exports = {
    status: 'wip',
    collated: false,
    context: {
        ticketTiers: [{
                tierName: 'Super Early Bird tickets',
                tierPrice: '£445 + VAT'
            },
            {
                tierName: 'Early Bird tickets',
                tierPrice: '£495 + VAT',
                tierSoldOut: true
            }
        ]
    },
    variants:[
        {
            name: 'three-quarters',
            context: {
                ticketTiersModifiers: 'three-quarters'
            }
        },
        {
            name: 'full',
            context: {
                ticketTiersModifiers: 'full'
            }
        },
        {
            name: 'inverted',
            display: {
                'background-color': '#333',
            },
            context: {
                ticketTiersModifiers: 'inverted'
            }
        }
    ],
    
}