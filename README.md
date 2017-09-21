### 环境配置

1. node版本 6.11.3
2. npm install -g react-native-cli //具体参考RN官网
3. react-native run-ios //运行项目

#### 主要使用的技术

##### react native 

1. ListView
2. View
3. Text
4. TouchableHighlight

##### react
1. PropTypes
2. Component

##### 辅助工具

1. [underscore](http://underscorejs.org/)

##### 布局

                                                                             
                                           │                                                   │          
                                           │              ┌─────────────────┐                  │          
                                           │              │   watch face    │                  │          
                                           │              └─────────────────┘                  │          
                                           │                                                   │          
                                           │                                                   │          
                                           ├───────────────────────────────────────────────────┤          
                                           │                                                   │          
                                           │                                                   │          
                                           │            ┌──────────────────────┐               │          
                                           │            │                      │               │          
                                           │            │  watch face control  │               │          
                                           │            │                      │               │          
                                           │            └──────────────────────┘               │          
                                           │                                                   │          
                                           │                                                   │          
                                           ├───────────────────────────────────────────────────┤          
                                           │                                                   │          
                                           │                                                   │          
                                           │                                                   │         *
                                           │                                                   │          
                                           │                                                   │          
                                           │             ┌─────────────────────────┐           │          
                                           │             │                         │           │          
                                           │             │      watch record       │           │          
                                           │             │                         │           │          
                                           │             └─────────────────────────┘           │          
                                           │                                                   │          
                                           │                                                   │          
                                           │                                                   │          
                                           │                                                   │          
                                           └───────────────────────────────────────────────────┘          



###### [完整代码地址](https://github.com/zhangyifei000/Rn-WatchFace)

1. git clone https://github.com/zhangyifei000/Rn-WatchFace watch-face
2. cd watch-face
3. cd watchface
4. npm install //node -v 0.6.13 不知道其他版本是否有问题
5. react-native run-ios //要安装有xcode

###### 直接用xcode运行

1 . npm install

2.进入 ios目录 用xcode打开

