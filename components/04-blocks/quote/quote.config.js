module.exports = {
    status: 'wip',
    variants: [{
            name: 'default',
            context: {
                quoteAvatarSrc: '/assets/img/work/ch4/anna-doble.jpg',
                quoteAvatarAlt: 'James Bates',
                quoteText: 'I remember a really good sense of collaboration. There were a lot of moving parts—us at Clearleft, the team at Channel 4, but also the team at ITN. I think we had a really good working relationship between all of those people.',
                quoteAuthor: 'James Bates'
            }
        },
        {
            name: 'no-avatar',
            context: {
                quoteText: 'I remember a really good sense of collaboration. There were a lot of moving parts—us at Clearleft, the team at Channel 4, but also the team at ITN. I think we had a really good working relationship between all of those people.',
                quoteAuthor: 'James Bates'
            }
        },
        {
            name: 'event',
            context: {
                quoteModifiers: 'event',
                quoteAvatarSrc: '/assets/img/work/ch4/anna-doble.jpg',
                quoteAvatarAlt: 'Don Norman',
                quoteText: 'I came. I listened. I stayed. Great event, great speakers, great crowd, great venue. Learn, network. enjoy',
                quoteAuthor: 'Don Norman',
                quoteAuthorRole: 'Speaker at UX London 2009'
            }
        },
        {
            name: 'event-no-avatar',
            context: {
                quoteModifiers: 'event',
                quoteText: 'I came. I listened. I stayed. Great event, great speakers, great crowd, great venue. Learn, network. enjoy',
                quoteAuthor: 'Don Norman',
                quoteAuthorRole: 'Speaker at UX London 2009'
            }
        }
    ]
}