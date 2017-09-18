<template>
  <div>
    <Display></Display>
    <Increment></Increment>
  </div>
</template>
<script>
import Display from './Display'
import Increment from './Increment'

import store from "@/store"
export default {
  components:{
      Display,
      Increment
  },
  store
}
</script>
