import store from '@/vuex/store'
// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：
// export const getCount = state => state.count

export function getCount() {
    return store.state.count
}