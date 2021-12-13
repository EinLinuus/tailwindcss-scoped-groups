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

module.exports = plugin.withOptions(function (options) {
    const customGroups = options?.groups || []
    return function({ addVariant, e }) {

        for (let [variantName, state] of pseudoVariants) {
            addIt("scoped")
            customGroups.forEach(customGroup => addIt(customGroup))

            function addIt(groupName) {
                // * New addVariant API (TailwindCSS 3.x)
                // addVariant(`group-${groupName}-${variantName}`, [`:merge(.group-${groupName})${state} > &`, `:merge(.group-${groupName})${state} *:not(.group-${groupName}) &`])

                // * Old addVariant API (TailwindCSS 1.x & 2.x)
                addVariant( `group-${groupName}-${variantName}`, ({ modifySelectors, separator }) => {
                    modifySelectors(({ className }) => {
                        let groupSelector = `group-${groupName}${state}`
                        let itemSelector = e(`group-${groupName}-${variantName}${separator}${className}`)
                        return `.${groupSelector} > .${itemSelector}, .${groupSelector} *:not(.group-${groupName}) .${itemSelector}`
                    })
                })
            }
        }

    }
})