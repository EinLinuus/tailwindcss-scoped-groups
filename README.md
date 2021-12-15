# TailwindCSS scoped groups

This plugin allows you to create custom groups so you can nest them.

## Custom names

Just create the names in your config file:

```js
// tailwind.config.js
module.exports = {
    mode: "jit",
    // ...
    plugins: [
        require("tailwindcss-scoped-groups")({
            groups: ["one", "two"],
        }),
    ],
}
```

With this config, you can use `group-one` and `group-two` just like you'd use the normal `group`.

## Compatibility

This plugin is compatible with TailwindCSS version **3** and the **JIT** compiler.

If you want to use this plugin with TailwindCSS 2, take a look at older versions (1.2.0).
