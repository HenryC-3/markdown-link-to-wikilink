> WARNING! Make sure to backup your file before conversion. This is a small script with limited [test cases](test/demo.bk/test.md).

## Info

Convert markdown link to dendron wikilink in a directory.

Checkout [test cases](./test/demo.bk/test.md) for more information.

## Usage

1. go to [main.js](src/main.js)
2. modify follow variables
    - `fileNamePrefix`: file name prefix that will added to every file name
    - `fileExtension`: file extension that will be removed after conversion
    - `dir`: absolute path of your target dir
3. `npm run convert`
