> cases with ✅ will be converted to wikilink

|     | case                                               | example                                                                |
| --- | -------------------------------------------------- | ---------------------------------------------------------------------- |
| ✅  | markdown link without anchor                       | [directly write render functions](/guide/extras/render-function.html)  |
| ✅  | markdown link with anchor                          | [directly write render functions](/guide/extras/render-function.html#) |
| ✅  | markdown link with relative path                   | [](../a/c.html) <br> [](../../a/c.html)                                |
|     | markdown link point to an asset in `images` folder | ![Component lifecycle diagram](./images/lifecycle.png)                 |
|     | markdown link point to an asset in `assets` folder | [image](/assets/image.png)                                             |
|     | markdown link point to a web page                  | [http](https://assets/image.png)                                       |
|     | plain link                                         | https://assets/image.png                                               |
