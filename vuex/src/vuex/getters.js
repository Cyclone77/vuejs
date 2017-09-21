// 创建一个getter对象，state的计算属性
// Getters 接受 state 作为其第一个参数：
export const getters = {
    doneTodos: state => {
        return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, gettersother) => {
        return getters.doneTodos.length;
    }
}