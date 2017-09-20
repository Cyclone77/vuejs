<template>
  <div>
    <button @click='incrementone'>Increment +1</button>
    <button @click='increment'>Increment +5</button>
  </div>
</template>

<script>
export default {
    methods: {
        incrementone(){
            this.$store.dispatch("incrementAsync");
            this.$store.commit("showMsg", "hello commit");
            // console.log(this.$store.getters.doneTodos);
            // console.log(this.$store.getters.doneTodosCount);
        },
        increment(){
            this.$store.dispatch("increment",5);
        }
    }
//   vuex: {
//     actions: {
//       increment: incrementCounter
//     }
//   }
}
</script>