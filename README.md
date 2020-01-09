## 区块
### 一、创建项目
```
yarn create umi --type=block
```

### 二、启动项目
```
yarn start
```

### 三、新建区块
```
1.前往项目 blocks 目录下 -> 以区块名称建立目录

2.在新建区块目录下，分别建立：
1).src目录（区块代码目录）
2).package.json（区块描述信息）
3).snapshot.png（预览图片）

3.在上面步骤创建的 src 目录下，编写区块代码

4.在项目 src -> index.tsx 中引用新建的区块文件，启动并预览效果
```

### 四、发布区块
```
1.在项目 umi-block.json 中，按照格式添加相应的区块描述

2.将代码合并到 master 分支，并推送即可
```

### 预览区块
```
1.预览区块
cross-env BLOCK=blocks/demo yarn start

2.区块 layout
1).cross-env BLOCK=blocks/demo LAYOUT=blankLayout yarn start

// 报错，不能使用
2).cross-env BLOCK=blocks/demo LAYOUT=ant-design-pro-user yarn start

3).cross-env BLOCK=blocks/demo LAYOUT=ant-design-pro yarn start
```


