## Info

Convert markdown link to dendron wikilink.

```md
<!-- before -->

[directly write render functions](/guide/extras/render-function.html#T)

<!-- after -->

[[guide.extras.render-function#T]]
```

## Usage

1. go to [main.js](src/main.js)
2. modify follow variables
    - `fileNamePrefix`: file name prefix that will added to every file name
    - `fileExtension`: file extension that will be removed after conversion
    - `dir`: absolute path of your target dir
3. `npm run convert`
