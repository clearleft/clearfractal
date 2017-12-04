module.exports = {
    status: 'wip',
    context: {
        info: [
            {
                title: 'Date',
                type: 'date',
                content: '25-27 Oct'
            },
            {
                title: 'Location',
                type: 'location',
                content: 'The Barbican Centre, London'
            },
            {
                title: 'Location',
                content: 'The Barbican Centre, London'
            }
        ]
    },
    variants:[
        {
            name: 'inverted',
            display: {
                'background-color':'#222'
            },
            context: {
                infoListModifiers: 'inverted'
            }
        }
    ]
}