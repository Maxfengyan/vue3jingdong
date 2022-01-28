##### project: vue3jingdong
##### desc: 根据京东到家app UI用vue3模仿开发h5页面
##### skill：vue3/vue-router/vuex/mitt/js-cookie/axios/vue-cli

##### 项目目录
```
|— design                            // 设计图ui
|— src                               // 开发源代码
|   |— api                           // 抽离出的各接口地址url
|   |— assets                        // 存放静态资源
|   |— components                    // 开发通用组件
|   |   |— Confirm                   // 弹层确认组件
|   |   |— Loading                   // loading组件
|   |   |— ShopInfo                  // 通用商品列表组件
|   |   |— SvgIcon                   // svg组件
|   |   |— Toast                     // toast组件
|   |— core                          // 项目核心封装库
|   |   |— auth                      // 缓存相关封装
|   |   |— permission                // 权限+路由相关封装
|   |   |— request                   // axios封装
|   |— icons                         // svg存放
|   |— router                        // 路由
|   |— store                         // vuex
|   |— style                         // css相关
|   |   |— base.scss                 // 通用css
|   |   |— index.scss                // 入口css
|   |   |— mixins.scss               // mixins
|   |   |— variable.scss             // css 变量
|   |   |   |— *.scss                // 各个组件css
|   |— views                         // 页面
|   |   |— cartList                  // 购物车相关(未完成)
|   |   |— docker                    // navbar底部组件
|   |   |— home                      // 主页组件
|   |   |— login                     // 登录页面
|   |   |— orderConfirm              // 订单确认组件
|   |   |— orderList                 // 订单列表页面
|   |   |— register                  // 注册组件
|   |   |— shop                      // 店铺组件
|— App.vue                           // 根组件
|— main.js                           // 入口js
|— vue.config.js                     // vuecli配置
|— *略
```