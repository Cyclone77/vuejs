// 为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。
// 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：
export const moduleA = {
    //namespaced: true,
    state: {
        msg: "hello module"
    },
    mutations: {
        showMsg(state, text) {
            state.msg = text;
        }
    }
}