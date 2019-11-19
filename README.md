# React-Blog
使用next.js+node.js+ant design搭建个人博客

## 前台环境搭建

1. 安装create-next-app脚手架
   `npm install -g create-next-app`
2. 创建工程目录
   `npx create-next-app blog`
3. 运行项目
   1. `cd blog`
   2. `yarn dev`
4. 安装`@zeit/next-css`代替style-jsx
   `yarn add @zeit/next-css`
5. 配置`next.config.js`文件
   ```js
    const withCss = require('@zeit/next-css')
    if (typeof require !== 'undefined') {
     require.extensions['.css'] = file => { }
    }
    module.exports = withCss({})
   ```
6. 安装`antd`UI库
   `yarn add antd`
7. 安装`babel-plugin-import`，让antd按需加载
   `yarn add babel-plugin-import`
8. 配置`.babelrc`
   ```js
   {
      "presets": [
        "next/babel"
      ], //Next.js的总配置文件，相当于继承了它本身的所有配置
      "plugins": [ //增加新的插件，这个插件就是让antd可以按需引入，包括CSS
        [
          "import",
          {
            "libraryName": "antd"
          }
        ]
      ]
    }
   ```
9. 在`pages/_app.js`里引入`antd`(自定义<App />)
    ```js
    import App from 'next/app'
    import 'antd/dist/antd.css'

    export default App
    ```