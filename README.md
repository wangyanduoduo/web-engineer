<!--
 * @Author: wy
 * @Date: 2023-12-20 16:24:12
 * @LastEditors: wy
 * @LastEditTime: 2023-12-21 14:51:24
 * @FilePath: /笔记/web-engineer/README.md
 * @Description:
-->

## 工程化

### 函数方式

多个模块，容易出现，命名冲突

```js
var fn1 = () => {
  return 1;
};
```

### namespace 方式

可以解决命名冲突，但是变量不私有，可以被外部修改

```js
window.__module = {
  a: 1,
};
```

### 闭包方式

为了解决 namespace 变量不私有的问题，需要使用自执行的函数+闭包的方式，来保护变量。

可以通过传递参数的方式实现，模块之间的引用，但是这种方式需要注意 js 加载的优先级，不好维护。

```js
(function () {
  var x = 1;
  window.__module = {
    getX: () => {
      return x;
    },
    setX: (val) => {
      x = val;
    },
  };
})();
```

### 浏览器中使用 common.js

- common.js 必须在代码运行的时候，才能确定模块之间的依赖关系
- common.js 输出的是值的拷贝
- common.js 导出的值是单个的对象
- common.js 同步加载
- common.js 的 this 指向当前的模块输出的

```js
npm i browserify -g
```

```js
// zsh
browserify currentDirName/currentFilename.js -o targetDirName/targetname.js
```

### ESModule

- ESModule 是在编译的时候，就确定了，模块之间的依赖关系
- ESModule 输出的是值的引用
- ESModule 可以导出多个值
- ESModule 支持异步加载
- ESModule this 指向 undefined

> 模块化的方式，可以拆分代码，利于阅读和维护，但是模块拆分，如果还是使用传统的 javascript 编写代码的方式，一定需要大量的 js 文件，这样就会造成网络请求变多，而且跨项目的时候，也不好复用，所以需要 webpack 来整合资源，npm 来管理资源
