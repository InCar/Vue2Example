# vuetpl

> vue2.0

## 使用前注意事项

1、直接使用 `cnpm`可能会导致依赖不正确。强烈建议给 `npm` 设置 taobao 的 registry。

`npm install --registry=https://registry.npm.taobao.org`

2、如果你遇到 `$t` 报错问题，先删除 `node_modules`文件夹后再重装依赖。

3、新建页面，需重新`npm run dev`才可以正常访问新建的页面。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 技术栈
    vue2 + vue-router + axios + mockjs + sass
## 目录结构
``` 
webpack
 |---build
 |---config
 |---static          #静态资源 images, styles, fonts
 |---src
    |---js       #全局公共libs
        |---directives    #全局指令配置   调用方法 略
        |---filters       #全局过滤配置   调用方法 略
        |---utils         #全局libs配置   调用方法 同常量
            |---baseService.js         #全局service配置   调用方法 略
            |---dom.js                 #全局dom方法    调用方法 Vue(this)._hyDom[名称]
            |---event.js               #全局events兼容 调用方法 Vue(this)._hyEvent[名称]
            |---tool.js                #全局tool配置   调用方法 Vue(this)._hyTool[名称]
        |---index.js      #libs对外api
 |---components  #组件
 	|---common     		#全局公共组件
 |---page        #主view
 |---router      #路由文件
 |---service     #service	
 	 |---baseService     #基于service的封装	
......

  ```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
