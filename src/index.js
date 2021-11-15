const plugin = require("tailwindcss/plugin")

let pseudoVariants = [
    // Positional
    ['first', ':first-child'],
    ['last', ':last-child'],
    ['only', ':only-child'],
    ['odd', ':nth-child(odd)'],
    ['even', ':nth-child(even)'],
    'first-of-type',
    'last-of-type',
    'only-of-type',

    // State
    'visited',
    'target',
    ['open', '[open]'],

    // Forms
    'default',
    'checked',
    'indeterminate',
    'placeholder-shown',
    'autofill',
    'required',
    'valid',
    'invalid',
    'in-range',
    'out-of-range',
    'read-only',

    // Content
    'empty',

    // Interactive
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled',
].map((variant) => (Array.isArray(variant) ? variant : [variant, `:${variant}`]))

const scopedGroupPlugin = plugin(({ addVariant, e, config }) => {

    for (let [variantName, state] of pseudoVariants) {

        // * New addVariant API (TailwindCSS 3.x)
        // addVariant(`group-scoped-${variantName}`, [`:merge(.group-scoped)${state} > &`, `:merge(.group-scoped)${state} *:not(.group-scoped) &`])

        // * Old addVariant API (TailwindCSS 1.x & 2.x)
        addVariant( `group-scoped-${variantName}`, ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                let groupSelector = `group-scoped${state}`
                let itemSelector = e(`group-scoped-${variantName}${separator}${className}`)
                return `.${groupSelector} > .${itemSelector}, .${groupSelector} *:not(.group-scoped) .${itemSelector}`
            })
        })

    }
})

module.exports = scopedGroupPlugin