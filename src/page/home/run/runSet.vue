<template lang="html">
  <div class="runset">
    <div class="tops">
      <router-link tag="a" :to="'/home/'+runs"><i class="el-icon-back"></i></router-link>
      跑步设置
    </div>
    <div class="list">
      <ul>
        <li>
          语音播报
          <el-switch class="on"
            v-model="value1"
            active-color="#feda05"
            inactive-color="#C0CCDA"
            inactive-value="0">
        </el-switch>
        </li>
        <li>语音包</li>
        <li>
          自动暂停
          <el-switch class="on"
            v-model="value2"
            active-color="#feda05"
            inactive-color="#C0CCDA"
            inactive-value="0">
        </el-switch>
        </li>
        <li>
          屏幕常亮
          <el-switch class="on"
            v-model="value3"
            active-color="#feda05"
            inactive-color="#C0CCDA"
            inactive-value="0">
        </el-switch>
        </li>
        <li>
          <router-link to="/runhis">我的跑步记录</router-link>
        </li>
        <li>发现路线</li>
        <li>
          自动匹配路线
          <el-switch class="on"
            v-model="value4"
            active-color="#feda05"
            inactive-color="#C0CCDA"
            inactive-value="0">
        </el-switch>
        </li>
        <li>
          锁屏显示运动路线
          <el-switch class="on"
            v-model="value5"
            active-color="#feda05"
            inactive-color="#C0CCDA"
            inactive-value="0">
        </el-switch>
        </li>
        <li>离线地图</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      value1: true,
      value2: true,
      value3: false,
      value4: true,
      value5: true,
      runs:this.$route.params.id
    }
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
}

.tops i{
  left: 20/2/16rem;
  position: absolute;
  color: white;
  top: 50/2/16rem;
}

.list{
  padding-top: 60/16rem;
}

.list ul li{
  position: relative;
  height: 100/2/16rem;
  line-height: 100/2/16rem;
  background: #fff;
  margin-top: 5/2/16rem;
  padding-left: 20/2/16rem;
}

.list ul li .on{
  position: absolute;
  right: 10px;
  top: 30/2/16rem;
}
</style>
