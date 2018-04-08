<template lang="html">
  <div class="total">
    <!-- 签到 -->
    <div class="tops">
      <p class="day">今日打卡</p>
      <p class="heads">
        <img src="../../../img/nc.png" alt="">
      </p>
      <p class="names">MG.3</p>
      <div class="rate" ref="mybox">
        <p class="whites" ref="box"></p>
      </div>
      <div class="sums">
        再锻炼{{ tiems }}分钟可升级为MG.4
      </div>
    </div>
    <!-- total -->
    <div class="cont">
      <div class="cont_s">
        <p>总运动</p>
        <p>分享</p>
      </div>
      <div class="cont_z">
        <el-progress type="circle" :percentage="elem.percentage" :color="elem.color"></el-progress>
      </div>
      <div class="cont_x">
        <div>
          本周运动(分钟)
          <p>85</p>
        </div>
        <div>
          本周好友运动排名
          <p>16</p>
        </div>
      </div>
    </div>
    <!-- list -->
    <div class="bot">
      <h4>推荐活动</h4>
      <ul class="imgs">
        <li>
          <img src="../../../img/winnoe-2.gif" alt="">
        </li>
        <li>
          <img src="../../../img/winnoe-3.gif" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"total",
  data(){
    return{
      tiems:'200',
      elem:{
        color:'#feda05',
        percentage:28
      },
      da:[]
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init() {
      this.$refs.box.style.width = parseInt(Math.random() * 100) + "%";
      this.tiems = this.$refs.box.style.width;
      this.elem.percentage = parseInt(this.tiems.replace(/%/,''));
      if(this.tiems){
        this.tiems = 100 - this.tiems.replace(/%/,'');
      }
    }
  }
}
</script>

<style scoped lang="less">
// 签到
@lefts:10/2/16rem;
img{border:none;max-width:100%;vertical-align:middle;}
.tops{
  width: 100%;
  height: 130/2/16rem;
  background: #feda05;
  display: flex;
  line-height: 130/2/16rem;
}

.tops .day{
  font-size: 14/16rem;
  margin-left: @lefts;
  height: 30/2/16rem;
  line-height: 30/2/16rem;
  margin-top: 40/2/16rem;
  background: #000;
  color: #feda05;
  padding:@lefts;
  border-radius: 30/16rem;
}

.heads{
  margin-left: @lefts;
  width: 82/2/16rem;
}

.heads img{
  width: 100%;
}

.names{
  margin-left: @lefts;
  font-weight: 900;
  color: #000;
}

.rate{
  width: 175/16rem;
  height: 4/16rem;
  background: #fff;
  margin-top: 55/2/16rem;
  margin-left: @lefts;
  border-radius: 50/2/16rem;
}

.rate .whites{
  height: 100%;
  background: #000;
  // float: left;
  width: 10%;
  border-radius: 50/16rem;
}

.sums{
  position: absolute;
  right: 30/16rem;
  top: 70/16rem;
  font-size: 14/16rem;
  color: #000;
}

// tatal
.cont{
  width: 100%;
  height:487/2/16rem;
  background: #fff;
}

.cont_s,.cont_x{
  width: 90%;
  margin: 0 auto;
  display: flex;
  padding-top: 20/2/16rem;
  font-weight: 900;
  justify-content: space-between;
  color: #000;
}

.cont_z{
  width: 100%;
  height: 300/2/16rem;
  text-align: center;
}

.cont_x{
  padding-top: 0;
  font-weight: 400;
  text-align: center;
}

.cont_x p{
  margin-top: 10/2/16rem;
  font-weight: 800;
}

// list
.bot{
  margin-top: 15/2/16rem;
  width: 100%;
  height: 200px;
  background: #fff;
}

h4{
  padding-top: 10/2/16rem;
}

.imgs{
  width: 708/2/16rem;
  margin: 10/2/16rem auto;
}

.imgs li{
  margin-top: 10/2/16rem;
}
</style>
