# TailwindCSS scoped groups

This plugins adds the `group-scoped` utility. You can use it just like `group` with all it's features like `group-hover`, `group-focus-within` and all others, but the groups are scoped.

This allows you to nest groups - you just have to rename `group` to `group-scoped`!

## Compatibility

I've tested this plugin with TailwindCSS version 2 and the JIT Compiler.

## Example

```html
<button class="border rounded-lg p-2 group hover:bg-black">
   <span class="font-bold group-hover:text-white">Hello world</span>
   <span class="relative group-hover:text-white group-scoped">
      <span>[Info]</span>
      <span class="hidden group-scoped-hover:block p-1 border bg-white text-xs rounded absolute top-full left-0 text-black whitespace-nowrap">I am a text</span>
   </span>
</button>
```

If you want to compare it to "normal" TailwindCSS, here is an example without scoped groups:
```html
<button class="border rounded-lg p-2 group hover:bg-black">
   <span class="font-bold group-hover:text-white">Hello world</span>
   <span class="relative group-hover:text-white group">
      <span>[Info]</span>
      <span class="hidden group-hover:block p-1 border bg-white text-xs rounded absolute top-full left-0 text-black whitespace-nowrap">I am a text</span>
   </span>
</button>
```
_https://play.tailwindcss.com/Ti828DAb1Q_