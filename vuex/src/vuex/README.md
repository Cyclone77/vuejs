# Vuex 状态管理

> state状态列表，getters为获取方法，mutations为修改方法，actions为异步调用。

## state 状态列表

## getters 获取状态
- Getters 接受 state 作为其第一个参数。

## mutations 修改状态
- mutation 必须是同步函数
- mutation 的第一个参数是当前的 state
``` html
<button @click='add'>add +1</button>
```
``` javascript
export default {
    ...
    methods: {
        //使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。
        ...mapMutations({
            add: 'INCREMENTONE' // 映射 this.increment() 为 this.$store.commit('increment')
        })
    }
}
```

## actions 

- 提交 mutation 的另一种方式是直接使用包含 type 属性的对象：
- action 会收到 store 作为它的第一个参数
- Action 通过 store.dispatch 方法触发

Action 类似于 mutation，不同在于：
- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

## modules

每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块(modules)