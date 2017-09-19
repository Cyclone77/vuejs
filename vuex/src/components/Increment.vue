<template>
  <div>
    <button @click='increment'>Increment +1</button>
  </div>
</template>

<script>
import { incrementCounter } from '../vuex/actions'
export default {
    methods: {
        increment: incrementCounter
    }
//   vuex: {
//     actions: {
//       increment: incrementCounter
//     }
//   }
}
</script>