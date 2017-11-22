module.exports = {
    status: 'wip',
    collated: true,
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
        }
    ]
}