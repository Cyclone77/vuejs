<template>
  <div>
      <button class="button" @click="increment">Increment +1</button>
  </div>
</template>
<script>
import {incrementCounter} from '@/store/actions'
export default {
    methods:{
        increment: incrementCounter
    }
//   vuex:{
//       actions:{
//           increment: incrementCounter
//       }
//   }
}
</script>
