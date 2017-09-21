// 创建一个对象存在 Action 函数
// 接受异步事物
export const actions = {
    // 提交 mutation 的另一种方式是直接使用包含 type 属性的对象：
    // action 会收到 store 作为它的第一个参数
    // Action 通过 store.dispatch 方法触发
    increment(context, amount) {
        context.commit({
            type: 'INCREMENT',
            amount: amount
        });
    },
    incrementAsync({ commit }) {
        setTimeout(() => {
            commit('INCREMENTONE')
        }, 1000)
    }
}