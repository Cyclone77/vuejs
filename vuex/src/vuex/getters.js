//创建一个getter对象，state的计算属性
export const getters = {
    doneTodos: state => {
        return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, gettersother) => {
        return getters.doneTodos.length;
    }
}