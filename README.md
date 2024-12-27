# generator-plugin 插件项目脚手架

## Installation

First, install [Yeoman](http://yeoman.io) and generator-plugin using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
[sudo] npm install -g yo
[sudo] npm i -g git+https://gitlab.foxitsoftware.com/foxit/phantom/pluginsdk/generator-plugin.git
```

Then generate your new project:

```bash
yo plugin
```
目录生成成功后，请阅读：[README.md](https://gitlab.foxitsoftware.com/foxit/phantom/pluginsdk/generator-plugin/-/blob/master/generators/app/templates/README.md)


## generator-plugin 支持功能

1. `yo plugin:h`        显示帮助

   ```shell
           .__               .__
    ______ |  |  __ __  ____ |__| ____
    \____ \|  | |  |  \/ ___\|  |/    \
    |  |_> >  |_|  |  / /_/  >  |   |  \
    |   __/|____/____/\___  /|__|___|  /
    |__|             /_____/         \/

   
   需要帮助?  ===>  yo plugin:h
   CMD: generator-plugin
   
   plugin@v1.1.0
   node@v14.13.1
   os@Windows_NT 10.0.18363
   
   Yeoman 命令
      yo plugin         在根目录执行，初始化Project
      yo plugin:h       显示帮助
      yo plugin:lang    设置脚手架语言
      yo plugin:tc      克隆远端模板配置文件到脚手架
      yo plugin:sc      设置远端模板配置文件下载路径
    
    Tool documentation： https://gitlab.foxitsoftware.com/foxit/phantom/pluginsdk/generator-plugin
    author by @biao_liu biao_liu@foxitsoftware.com
   ```

   ![](https://gitlab.foxitsoftware.com/foxit/phantom/pluginsdk/generator-plugin/-/raw/master/assets/images/yo-plugin-h.gif)

   ### 注意!!!
   
   > 如果在使用这些命令: `yo plugin:lang` `yo plugin:tc` `yo plugin:sc`
   
   > 出现权限问题，比如: `Error: EACCES: permission denied, open '/usr/local/lib/node_modules/generator-plugin/generators/tc/config.json'`

   > 请执行命令: `sudo chown -R $USER  /usr/local/lib/node_modules/generator-plugin`
   
   > 其中: $USER 代表你当前电脑名. (此条只有mac会出现，Windows请使用管理员运行终端则不会出现)

2. `yo plugin:lang`  设置脚手架语言,执行此命令可以设置plugin的交互显示语言

   ```
   🌺 欢迎使用 Plugin 脚手架!
            .__               .__
    ______ |  |  __ __  ____ |__| ____
    \____ \|  | |  |  \/ ___\|  |/    \
    |  |_> >  |_|  |  / /_/  >  |   |  \
    |   __/|____/____/\___  /|__|___|  /
    |__|             /_____/         \/
   
   需要帮助?  ===>  yo plugin:h
   CMD: generator-plugin
   
   ? ️‍🌈 请选择您想设置的语言!  (Use arrow keys)
   > 默认(中文)
     en
     zh-CN
   ```

   ![](https://gitlab.foxitsoftware.com/foxit/phantom/pluginsdk/generator-plugin/-/raw/master/assets/images/yo-plugin-lang.gif)

3. `yo plugin:tc`      克隆远端模板配置文件到脚手架

   > 默认连接：`http://10.103.2.86:8081/common/templateConfig.js` (如果要维护远端模板配置文件请替换这个文件即可)

   

   ![](https://gitlab.foxitsoftware.com/foxit/phantom/pluginsdk/generator-plugin/-/raw/master/assets/images/yo-plugin-tc.gif)

4. `yo plugin:sc`      设置远端模板配置文件下载路径

   ```shell
   ? 请选择执行方式:  (Use arrow keys)
   > 自定义路径 (例如: https://xxx.xxx.xxx/templateConfig.js) # 自定义远端模板配置文件下载路径 确认后会要求你输入一个正确的 templateConfig.js 下载路径
     默认配置 # 使用默认，选择此选项可以恢复脚手架默认下载链接
   ```

   `templateConfig.js` 示例：

   ```javascript
   module.exports = [
       {
           name: 'template-vue', // 名称，后续脚手架交互显示
           url: 'https://gitlab.foxitsoftware.com/foxit/phantom/pluginsdk/generator-plugin.git#template-vue2' // 远端维护的模板，必须git [github | gitlab]
       }
   ];
   
   ```

   ![](https://gitlab.foxitsoftware.com/foxit/phantom/pluginsdk/generator-plugin/-/raw/master/assets/images/yo-plugin-sc.gif)

5. `yo plugin`            开始使用`plugin`初始化您的项目

   ![](https://gitlab.foxitsoftware.com/foxit/phantom/pluginsdk/generator-plugin/-/raw/master/assets/images/yo-plugin.gif)

   ![](https://gitlab.foxitsoftware.com/foxit/phantom/pluginsdk/generator-plugin/-/raw/master/assets/images/yo-plugin-tpl.gif)

   ![](https://gitlab.foxitsoftware.com/foxit/phantom/pluginsdk/generator-plugin/-/raw/master/assets/images/yo-plugin-user-defined.gif)
6. 自制模板
    如果有自定义模板请在package.json里加入以下字段，供用户在生成模板时输入内容以填充
    ```json
    {
        "name": "<%= packageName %>",
        "version": "<%= version %>",
        "description": "又一个plugin脚手架 项目",
        "author": {
            "name": "<%= author %>",
            "email": "<%= email %>"
        },
        "keywords": [
            "generator-plugin",
            "plugin",
            "<%= packageName %>"
        ],
        "license": "<%= License %>",
    }
    ```

## 感谢这些开源项目

1. [yeoman](http://yeomanjs.org/)
2. [Vue.js](https://cn.vuejs.org/)
4. [generator-mint](https://github.com/sweet-shop/generator-mint)

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [biao_liu](mailto:biao_liu@foxitsoftware.com)

## Contributors ✨

Thanks goes to these wonderful people

<table>
  <tr>
    <td align="center"><a href="https://gitlab.foxitsoftware.com/biao_liu"><img src="https://gitlab.foxitsoftware.com/uploads/-/system/user/avatar/69/avatar.png" width="100px;" alt=""/><br /><sub><b> biao_liu</b></sub></a><br /><a href="#design-biao_liu" title="Design">🎨</a></td>
  </tr>
</table>

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
