module.exports = {
    status: 'wip',
    collated: true,
    preview: '@preview-table',
    variants: [{
            name: 'default',
            context: {
                tierName: 'Super Early Bird tickets',
                tierPrice: '£445 + VAT'
            }
        },
        {
            name: 'sold-out',
            context: {
                tierName: 'Early Bird tickets',
                tierPrice: '£495 + VAT',
                tierSoldOut: true
            }
        }
    ]
}