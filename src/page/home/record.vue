<template lang="html">
  <div class="record">
    <Temp :tops_l="record" :tops_z_y_top="dates" :route="route" :run="run" :data="data"/>
  </div>
</template>

<script>

import Temp from './temp'

export default {
  name:"record",
  data(){
    return{
      record:'健走',
      dates:'公里',
      route:'步',
      run:'record',
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

<style scoped lang="less">
</style>
