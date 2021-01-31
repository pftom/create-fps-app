# create-fps-app

## 目的

此项目是一个类似 `create-react-app` 的脚手架，用于生成一个完整的项目，目前暂时只支持 `react-typescript`，未来考虑支持如下模板：

- 纯 `react` 模板 Snowpack 版本
- `react-typescript` 模板 Snowpack 版本
- 纯 `Vue` 模板 Webpack 版本
- 纯 `Vue` 模板 Vite 版本
- `vue-typescript` 模板 Webpack 版本
- `vue-typescript` 模板 Vite 版本

项目仅用于学习前端工程化中，脚手架的搭建以及使用 CLI 来初始化脚手架，会随着学习的深入不断的完善。

## 如何使用

确保你安装了 Node.js (`>= v14.15.0`)，然后在命令行运行如下命令：

```bash
$ npx create-fps-app appName --typescript
```

当脚手架运行时会在命令行给出运行过程提示，当初始项目成功之后，你可以通过如下命令开启项目：

```bash
$ cd appName && npm start
```

> 注意：在脚手架初始化时就已经安装了依赖了，所以不需要再次安装依赖。

## ❤️致谢

此项目搭建吸收了来自诸多优秀项目的想法：

- [create-ink-app](https://github.com/vadimdemedes/create-ink-app) ：脚手架的搭建大量参考了此项目
- [ink](https://github.com/vadimdemedes/ink) & [pastel](https://github.com/vadimdemedes/pastel) ：搭建脚手架的想法在于偶尔发现这两个项目
- [create-react-app](https://github.com/facebook/create-react-app)：脚手架中关于文件处理与依赖安装的代码参考了此项目