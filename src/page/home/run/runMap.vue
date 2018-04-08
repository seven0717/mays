<template lang="html">
  <div class="runmap">
    <div class="tops">
      <router-link tag="a" :to="'/home/'+runs"><i class="el-icon-back"></i></router-link>
      地图
    </div>
      <baidu-map class="bm-view" ak="aohF4i4UumKZ91t0GSPnTV8Wnh9iXNGC" :zoom="11" center="北京">
      <bm-geolocation @locationSuccess="getLocation" anchor="BMAP_ANCHOR_TOP_LEFT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-driving :panel="false" :autoViewport="true" :start="{lng: this.start_j, lat: this.start_w}" end="西三旗桥东"></bm-driving>
        <bml-lushu
          :path="path"
          :rotation="true">
        </bml-lushu>
    </baidu-map>
  </div>
</template>

<script>

import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
import {BmGeolocation,BmDriving,BmlLushu} from 'vue-baidu-map'

export default {
  name:"runmap",
  data(){
    return{
     path: [],
     runs:this.$route.params.id,
     start_j:'',
     start_w:''
    }
  },
  methods:{
    getLocation(point){
      this.start_j = point.point.lng;
      this.start_w = point.point.lat;
    }
  },
  components: {
    BaiduMap,
    BmGeolocation,
    BmDriving,
    BmlLushu
  }
}
</script>

<style lang="less" scoped>
.tops{
  height: 60/16rem;
  background: #181818;
  width: 100%;
  text-align: center;
  color: white;
  position: fixed;
  line-height: 60/16rem;
  padding-left: 20/2/16rem;
  border: 1px solid #181818;
}

.tops i{
  left: 20/2/16rem;
  position: absolute;
  color: white;
  top: 50/2/16rem;
}

.bm-view{
  position: absolute;
  width: 750/2/16rem;
  height: 965/2/16rem;
  top: 140/2/16rem;
}
</style>
