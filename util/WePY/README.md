# WePY 使用

## wepy.config.js

设置 baseUrl :

```js
appConfig: {
  baseUrl: prod ? './' : 'https://ceshi.chsh8j.com',
  ...
}
```

## 将 util 复制到 src 目录下

## 使用 stylus

```bash
yarn add --dev wepy-compiler-stylus
```

在 wepy.config.js 中设置:

```js
compilers: {
  ...
  stylus: {
    compress: true
  },
  ...
}
```

## VS Code 有 WePY 提示

安装插件 minapp

```html
<template lang="wxml" minapp="wepy">
  ...
</template>
```

注意: wxml 中需要输入 `<` 才会触发标签补全, 而 pug 语言只需要写标签开头即能触发标签补全