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
9. 在`pages/_app.js`里引入`antd`(这是在nextjs里使用antd的一个坑)
    ```js
    import App from 'next/app'
    import 'antd/dist/antd.css'

    export default App
    ```

## `使用react-markdown`进行markdown解析

1. 安装
   `yarn add react-markdown`
2. 导入
   `import ReactMarkDown from 'react-markdown'`
3. 使用
   ```js
    <div className="detailed-content" >
      <ReactMarkdown 
        source={markdown} 
        escapeHtml={false}  
      />
    </div>
   ```
4. 使用`markdown-navbar`生成markdown文章目录结构
   1. 安装
      `yarn add markdown-navbar`
   2. 引入
      `import MarkDownNavBar from 'markdown-navbar'`
      `import markdown-navbar/dist/navbar.css`
   3. 使用
      ```js
        <div className="detailed-nav comm-box">
        <div className="nav-title">文章目录</div>
        <MarkNav
          className="article-menu"
          source={markdown}
          ordered={false}
        />
      </div>
      ```
## 中台环境搭建

### 安装`egg.js`开发环境

1. 安装脚手架工具`egg-init`
   `npm install -g egg-init`
2. 在`blog同级目录下`新建文件夹`service`
3. 在`service`文件夹运行命令
   `egg-init --type=simple`  
4. 在`service`文件夹下安装依赖模板
   `npm install` 
5. 在`service`文件夹下运行服务
   `yarn dev`

**egg.js的主要目录结构和约定规范**

app：主要工作目录
config：服务端的配置文件
logs：日志文件
run：系统自动生成的运行时配置文件
test：测试时用到的文件
 
### RESTful接口和路由设计

