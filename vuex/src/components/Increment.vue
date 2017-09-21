<template>
    <div>
        <button @click='incrementone'>Increment +1</button>
        <button @click='increment'>Increment +5</button>
        <button @click='add'>add +1</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    methods: {
        incrementone() {
            //Action 通过 store.dispatch 方法触发
            this.$store.dispatch("incrementAsync");
            this.$store.commit("showMsg", +new Date());
            console.log(this.$store.getters.doneTodos);
            // console.log(this.$store.getters.doneTodosCount);
        },
        increment() {
            this.$store.dispatch("increment", 5);

            this.$store.commit("SOME_MUTATION");
        },
        //使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。
        ...mapMutations({
            add: 'INCREMENTONE' // 映射 this.increment() 为 this.$store.commit('increment')
        }),
    }
    //   vuex: {
    //     actions: {
    //       increment: incrementCounter
    //     }
    //   }
}
</script>