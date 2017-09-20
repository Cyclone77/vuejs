<template>
  <div>
    <button @click='increment'>Increment +1</button>
  </div>
</template>

<script>
export default {
    methods: {
        increment(){
            this.$store.dispatch("incrementAsync", 2);
            this.$store.commit("showMsg", "hello commit");
        }
    }
//   vuex: {
//     actions: {
//       increment: incrementCounter
//     }
//   }
}
</script>