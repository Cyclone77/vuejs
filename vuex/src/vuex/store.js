import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
    // TODO: 放置初始状态
    // 应用启动时，count 置为0
    count: 0,
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
    ]
}

//创建一个getter对象，state的计算属性
const getters = {
    doneTodos: state => {
        return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, gettersother) => {
        return getters.doneTodos.length;
    }
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
// mutation 都是同步事务：
const mutations = {
    // TODO: 放置我们的状态变更函数
    // mutation 的第一个参数是当前的 state
    // 你可以在函数里修改 state
    INCREMENT(state, payload) {
        state.count = state.count + payload.amount;
    },
    INCREMENTONE(state) {
        state.count++;
    }
}

// 创建一个对象存在 Action 函数
// 接受异步事物
const actions = {
    //提交 mutation 的另一种方式是直接使用包含 type 属性的对象：
    increment(context, amount) {
        context.commit({
            type: 'INCREMENT',
            amount: amount
        });
    },
    incrementAsync(context) {
        setTimeout(() => {
            context.commit('INCREMENTONE')
        }, 1000)
    }
}

const moduleA = {
    state: {
        msg: "hello module"
    },
    mutations: {
        showMsg(text) {
            this.state.msg = text;
            console.log(this.state.msg);
        }
    }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        text: moduleA
    }
})