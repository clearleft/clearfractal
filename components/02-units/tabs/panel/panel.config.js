module.exports = {
    status: 'wip',
    collated: true,
    context: {
        panelContent: `<p>Panel</p>`,
        panelId: 'panel-01',
    },
    variants: [{
        name: 'selected',
        context: {
            tabIsSelected: true,
            panelId: 'panel-02',
        }
    }]
}