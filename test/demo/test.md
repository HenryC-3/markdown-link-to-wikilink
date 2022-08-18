> cases with ✅ will be converted to wikilink

|     | case                                    | example                                                                                                         |
| --- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ✅  | markdown link without anchor            | [[vs.1.7.guide.extras.render-function]]                                           |
| ✅  | markdown link with anchor               | [[vs.1.7.guide.extras.render-function]]                                          |
| ✅  | markdown link with relative path        | [[vs.1.7.a.c]] <br> [[vs.1.7.a.c]]                                                                         |
|     | markdown link point to an assets folder | ![](./images/lifecycle.png), [image](/assets/image.png), [image](./assets/image.png), [image](assets/image.png) |
|     | markdown link point to a web page       | [http](https://assets/image.png)                                                                                |
|     | plain link                              | https://assets/image.png                                                                                        |
