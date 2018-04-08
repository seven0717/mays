<template lang="html">
  <div class="riding">
    <Temp :tops_l="riding" :tops_z_y_top="dates" :route="route" :run="run" :data="data"/>
  </div>
</template>

<script>

import Temp from './temp'

export default {
  name:"riding",
  data(){
    return{
      riding:"骑行",
      dates:'用时',
      route:'公里',
      run:'riding',
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
