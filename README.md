# React 示例项目 · cnodejs.org论坛客户端

> ###写在前面  
> 基于[Yeoman React Webpack Generators][yeoman-generator] 构建

## 目录
#### &sect; [技术栈](#features)
#### &sect; [快速开始](#getting-started)
  * [安装](#installation)
  * [启动](#start)

#### &sect; [项目架构](#architecture)
  * [目录结构](#tree)

****

## <a name="features">&sect; 技术栈</a>
> 详情可参阅 `package.json`

* React 15.3.1
* Redux
* react-router
* react-router-redux
* isomorphic-fetch
* Webpack
* ES6 + Babel
* Material UI

***

## <a name="getting-started">&sect; 快速开始</a>
在开始前，希望您已通读如下资料

* [React 文档][react-doc]
* [Redux 文档][redux-doc]（看完后懵逼的请转看 [Redux 简明教程][simple-tutorial]）
* [React Router 文档][react-router-doc]
* [Google Material Design UI库][Material UI]

同时您还需要熟悉 ES6
* [ES6 入门教程][learning-es6]

### <a name="installation">⊙ 安装</a>
> 建议升级到 node 6.x + npm 3.x 环境
> 推荐使用 `cnpm` 或手动切换到淘宝 npm 源
> `npm set registry https://registry.npm.taobao.org/`

本示例项目需要结合 [cnodejs.org论坛 RESTful API](https://cnodejs.org/api)  
模拟前后端分离开发 
`git clone`后，打开cmd命令窗口切换到目录下  
敲下 `npm install` 安装依赖，npm安装如若失败，建议使用cnpm替代

### <a name="start">⊙ 启动</a>
在命令窗口敲下 `npm start`  
如无意外，默认浏览器就会自动打开 `localhost:8000`，您立即可以看到效果  
若浏览器没有自动弹出，则请自行手动访问  
> 开发过程中，通过 Webpack 处理的静态资源都由基于内存的 `webpack-dev-server` 提供  

***

## <a name="architecture">&sect; 项目架构</a>
### <a name="tree">⊙ 目录结构</a>
```
.
├─ cfg/              # Webpack 配置目录
├─ dist/             # build 生成的生产环境下的项目
├─ src/              # 源码目录（开发都在这里进行）
│   ├─ components/     # 组件（COMPONENT）
│   ├─ containers/     # 容器（Dump COMPONENT）
│   ├─ actions/        # （Redux ACTION）
│   ├─ reducers/       # （Redux REDUCER）
│   ├─ store/          # （Redux STORE）
│   ├─ routes/         # 路由（ROUTE）
│   ├─ constants/      # 常量
│   ├─ utils/          # 工具库（UTIL）
│   ├─ images/         # 图片
│   ├─ styles/         # 样式
│   ├─ index.js        # 启动文件
│   ├─ index.html      # 静态主页
├── test/           # 测试相关
├── .babelrc         # Babel 转码配置
├── .eslintrc        # ESLint 配置
├── .gitignore       # （配置）需被 Git 忽略的文件（夹）
├── package.json     # （不多解释）
```

[yeoman-generator]: https://github.com/react-webpack-generators/generator-react-webpack
[learning-es6]: http://es6.ruanyifeng.com/
[Material UI]: http://www.material-ui.com/
[react-doc]: http://reactjs.cn/react/docs/getting-started-zh-CN.html
[redux-doc]: http://camsong.github.io/redux-in-chinese/index.html
[simple-tutorial]: https://github.com/kenberkeley/redux-simple-tutorial
[react-router-doc]: http://react-guide.github.io/react-router-cn/
[babel-repl]: http://babeljs.io/repl/
[react-optimize]: https://github.com/thejameskyle/babel-react-optimize
[history]: https://github.com/ReactTraining/history
[proptypes]: https://facebook.github.io/react/docs/reusable-components-zh-CN.html#prop-验证