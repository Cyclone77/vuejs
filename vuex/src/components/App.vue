<template>
  <div>
    <Display></Display>
    <Increment></Increment>
  </div>
</template>
<script>
import Display from './Display'
import Increment from './Increment'

import store from '../vuex/store' // import 我们刚刚创建的 store
export default {
  components:{
      Display,
      Increment
  },
  store
}
</script>
