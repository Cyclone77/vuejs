<template>
    <div>
        <h3>Count is {{ counterValue }}</h3>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState({
        counterValue() {
            return this.$store.state.count;
        }
    })
    // 使用对象展开运算符将 getters 混入 computed 对象中
    // ...mapGetters([
    //     'doneTodosCount'
    //     // ...
    // ])

    //   vuex: {
    //     getters: {
    //       // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
    //       counterValue: getCount
    //     }
    //   }
}
</script>