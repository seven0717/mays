<template lang="html">
  <div class="runhis">
    <div class="tops">
      <router-link tag="a" to="/runset/runing"><i class="el-icon-back"></i></router-link>
      我的跑步记录
    </div>
    <div class="his">
      <ul class="list">
        <li v-for="(item,index) in data">
          <p>{{ item.date }}<span>{{ item.time }}</span></p>
          <p class="names">户外跑步{{ item.UP }}公里</p>
          <p>时速：{{ item.UP }}<span>用时：{{ item.tim }}</span> <span>消耗：{{ item.UP }}千卡</span> </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"runhis",
  data(){
    return{
      data:[]
    }
  },
  mounted(){
    this.$axios.get('http://msi.cn')
      .then(res => {
        this.data = res.data
      })
  },
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

.list li:first-child{
    margin: 70/16rem auto 15/2/16rem;;
}
.list li{
  width: 710/2/16rem;
  height: 180/2/16rem;
  background: #fff;
  margin: 10/16rem auto 15/2/16rem;
}

.list li p{
  padding: 15/2/16rem 0 0 30/2/16rem;
}

.list li p span{
  padding-left: 10px;
}

.list li p.names{
  font-weight: 900;
}
</style>
