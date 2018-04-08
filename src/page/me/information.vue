<template>
    <div class="information">
      <router-link tag="a" to="/me/person" class="back"><i class="iconfont">&#xe616;</i></router-link>
      <p class="title">个人资料</p>
      <div class="tabCard">
        <ul>
          <router-link tag="li" to="" class="tab icon">
            <p>头像</p>
            <div class="t_right"><img src="../../../img/me/icon.png" alt=""></div>
          </router-link>
          <router-link tag="li" to="" class="tab nickname">
            <p>昵称</p>
            <div class="t_right"><p>七月上</p></div>
          </router-link>
          <router-link tag="li" to="" class="tab sex">
            <p>性别</p>
            <div class="t_right"><p>女</p></div>
          </router-link>
          <router-link tag="li" to="" class="tab describe">
            <p>签名</p>
            <div class="t_right"><p>汗水的魅力永远大于香水</p></div>
          </router-link>
        </ul>
      </div>
      <div class="tabCard">
        <ul>
          <router-link tag="li" to="" class="tab birthday">
            <p>生日</p>
            <div class="t_right"><p>1997.12.28</p></div>
          </router-link>
          <router-link tag="li" to="" class="tab city">
            <p>所在城市</p>
            <div class="t_right"><p>北京-海淀区</p></div>
          </router-link>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "information",
      data(){
        return{}
      }
    }
</script>

<style scoped lang="less">
  .back{
    color: #fff;
    position: absolute;
    top: 22/16rem;
    left: 10/16rem;
  }
  .title{
    position: absolute;
    top: 18/16rem;
    left: -32/16rem;
    margin-left: 50%;
    color: #fff;
  }
  .tabCard {
    margin-top: 10/16rem;
  }
  .tab {
    width: 100%;
    height: 50/16rem;
    line-height: 50/16rem;
    background: #fff;
    color: #171818;
    padding: 0 10/16rem;
    box-sizing: border-box;
    border-bottom: 1px solid #EFEFEF;
  }
  .tab p{
    float: left;
  }
  .tab .t_right{
    float: right;
  }
  .icon{
    height: 75/16rem;
    line-height: 75/16rem;
  }
  .icon img{
    width: 48/16rem;
    height: 48/16rem;
  }
  ul.nav{
    display: none;
  }
</style>
