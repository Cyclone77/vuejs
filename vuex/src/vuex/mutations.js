import { SOME_MUTATION } from './mutation-types'
// 创建一个对象存储一系列我们接下来要写的 mutation 函数
// mutation 必须是同步函数
export const mutations = {
    // TODO: 放置我们的状态变更函数
    // mutation 的第一个参数是当前的 state
    // 你可以在函数里修改 state
    INCREMENT(state, payload) {
        state.count = state.count + payload.amount;
    },
    INCREMENTONE(state) {
        state.count++;
    },
    [SOME_MUTATION](state) {
        // mutate state
        // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
        console.log("常量作为函数名");
        console.log(state.count);
    }
}