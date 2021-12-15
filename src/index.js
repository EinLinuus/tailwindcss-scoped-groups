const plugin = require("tailwindcss/plugin")

let pseudoVariants = [
    // Positional
    ["first", ":first-child"],
    ["last", ":last-child"],
    ["only", ":only-child"],
    ["odd", ":nth-child(odd)"],
    ["even", ":nth-child(even)"],
    "first-of-type",
    "last-of-type",
    "only-of-type",

    // State
    "visited",
    "target",
    ["open", "[open]"],

    // Forms
    "default",
    "checked",
    "indeterminate",
    "placeholder-shown",
    "autofill",
    "required",
    "valid",
    "invalid",
    "in-range",
    "out-of-range",
    "read-only",

    // Content
    "empty",

    // Interactive
    "focus-within",
    "hover",
    "focus",
    "focus-visible",
    "active",
    "disabled",
].map((variant) => (Array.isArray(variant) ? variant : [variant, `:${variant}`]))

module.exports = plugin.withOptions(function (options) {
    const customGroups = options?.groups || ["one", "two", "three"]
    const groupPrefix = options?.prefix || "group-"
    return function ({ addVariant, e }) {
        for (let [variantName, state] of pseudoVariants) {
            customGroups.forEach((customGroup) => addIt(customGroup))
            function addIt(groupName) {
                addVariant(
                    `${groupPrefix}${groupName}-${variantName}`,
                    `.${groupPrefix}${groupName}${state} &`
                )
            }
        }
    }
})
