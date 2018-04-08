<template lang="html">
  <div class="runing">
    <Temp :tops_l="runing" :tops_z_y_top="dates" :route="route" :run="run" :data="data"/>
  </div>
</template>

<script>

import Temp from './temp'

export default {
  name:"runing",
  data(){
    return{
      runing:"跑步",
      dates:"用时",
      route:'公里',
      run:'runing',
      data:[]
    }
  },
  mounted(){
    this.$axios.get('http://msi.cn')
      .then(res => {
        this.data = res.data
      })
  },
  components:{
    Temp
  }
}
</script>

<style scoped>
</style>
