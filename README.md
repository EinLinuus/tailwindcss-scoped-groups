# TailwindCSS scoped groups

This plugins adds the `group-scoped` utility. You can use it just like `group` with all it's features like `group-hover`, `group-focus-within` and all others, but the groups are scoped.

This allows you to nest groups - you just have to rename `group` to `group-scoped`!

## Custom names

It's now also possible to create custom groups! Just create the names in your config file:

```js
// tailwind.config.js
// npx tailwindcss -i demo/style.css -o demo/out.css --watch

module.exports = {
    mode: "jit",
    // ...
    plugins: [
        require("./src/index")({
            groups: ["one", "two"],
        }),
    ],
}
```

With this config, the groups `group-one` and `group-two` are also available.

## Compatibility

This plugin is compatible with TailwindCSS versions **2.x and 3.x** and the JIT compiler.

Currently, this plugin uses the old `addVariant` API that's also supported by version 3 in order to support projects with TailwindCSS version 2.

There's already a version with the new `addVariant` and I'll implement this in the near future.

## Example

Compare the "normal" groups with scoped groups here: https://play.tailwindcss.com/d4W0wTCRnI
