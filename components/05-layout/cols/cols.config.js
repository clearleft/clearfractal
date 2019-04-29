module.exports = {
    status: 'wip',
    variants: [{
        name: 'half',
        context: {
            colsModifier: 'half'
        }
    }, {
        name: 'one-third',
        context: {
            colsModifier: 'one-third'
        }
    }, {
        name: 'two-thirds',
        context: {
            colsModifier: 'two-thirds'
        }
    }, {
        name: 'half-reverse',
        context: {
            colsModifier: 'half Cols--reverse'
        }
    }, {
        name: 'one-third-reverse',
        context: {
            colsModifier: 'one-third Cols--reverse'
        }
    }, {
        name: 'half-gap',
        context: {
            colsModifier: 'half Cols--gap'
        }
    }, {
        name: 'one-third-gap',
        context: {
            colsModifier: 'one-third Cols--gap'
        }
    }, {
        name: 'half-constrained',
        context: {
            colsModifier: 'half Cols--constrained'
        }
    }]
}