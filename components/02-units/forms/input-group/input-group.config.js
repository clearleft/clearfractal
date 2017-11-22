'use strict';
module.exports = {
    status: 'wip',
    context: {
        inputGroupURL: '#',
        inputGroupLabel: 'Form input label',
        inputGroupSubmit: 'Get the Clearletter',
        inputGroupID: 'ID1',
        inputGroupPlaceholder: 'E.g. example@domain.com'
    },
    variants: [{
            name: 'highlight',
            context: {
                inputGroupModifiers: 'highlight',
                inputGroupURL: '#',
                inputGroupLabel: 'Get notified with updates',
                inputGroupSubmit: 'Join the mailing list',
                inputGroupID: 'ID2',
                inputGroupPlaceholder: 'Enter email address',
                inputGroupMicrocopy: 'Low volume mailing list. Just for events & conference updates. <a href="#">See an example</a>'
            }
        }, {
            name: 'prominent',
            context: {
                inputGroupModifiers: 'prominent'
            }
        }
    ]
};