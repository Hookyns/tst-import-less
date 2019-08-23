# TypeScript Transformer Plugin
Transformer transpiling extensions of imported styles from less to css.
Eg.  `import "./someStyleFile.less"` to `import "./someStyleFile.css"`

This transformer is compatible with [ttypescript](https://github.com/cevek/ttypescript).
Add transformer to tsconfig.json
```json5
{
  "compilerOptions": {
    // ...
    "plugins": [
      { "transform": "tst-import-less", "after": false }
    ]
  }
}
```