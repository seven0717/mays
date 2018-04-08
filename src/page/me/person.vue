<template>
  <div class="person">
    <!--设置-->
    <router-link tag="a" to="/me/set" class="set"><i class="iconfont">&#xe65c;</i></router-link>
    <div class="personal">
      <div class="wrap">
        <!--头像-->
        <div class="icon"><img src="../../../img/me/icon.png" alt=""></div>
        <div class="text">
          <!--用户名-->
          <p class="username">七月上</p>
          <!--用户签名-->
          <p class="describe">汗水的魅力永远大于香水</p>
        </div>
        <div class="right">
          <!--个人资料-->
          <router-link tag="i" to="/me/information" class="iconfont">&#xe727;</router-link>
        </div>
      </div>
    </div>
    <!--消息通知-->
    <router-link tag="div" to="" class="tab message">
      消息通知
    </router-link>
    <div class="tabCard">
      <ul>
        <router-link tag="li" to="" class="tab data">
          数据中心
        </router-link>
        <router-link tag="li" to="" class="tab target">
          我的目标
        </router-link>
        <router-link tag="li" to="" class="tab step">
          步数记录
        </router-link>
        <router-link tag="li" to="" class="tab clock">
          打卡记录
        </router-link>
      </ul>
    </div>
    <div class="tabCard">
      <ul>
        <router-link tag="li" to="" class="tab history">
          健身历史
        </router-link>
        <router-link tag="li" to="" class="tab sport">
          运动路线
        </router-link>
        <router-link tag="li" to="" class="tab love">
          收藏
        </router-link>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: "person",
    data(){
      return{}
    }
  }
</script>

<style scoped lang="less">
  .set {
    position: absolute;
    top: 20/16rem;
    right: 20/16rem;
  }

  .iconfont {
    color: #ffffff;
  }

  .personal {
    width: 100%;
    height: 140/16rem;
    background: #FED906;
  }

  .wrap {
    position: relative;
    padding: 34/16rem 10/16rem;
    box-sizing: border-box;
    overflow: hidden;
  }

  .icon {
    width: 72/16rem;
    height: 72/16rem;
    float: left;
  }

  .icon img {
    width: 100%;
    height: 100%;
  }

  .text {
    margin-left: 82/16rem;
  }

  .username {
    color: #171818;
    font-size: 20/16rem;
    margin-top: 10/16rem;
  }

  .describe {
    color: #171818;
    font-size: 15/16rem;
    margin-top: 12/16rem;
  }

  .right .iconfont {
    position: absolute;
    top: 60/16rem;
    right: 20/16rem;
    font-size: 20/16rem;
    color: #171818;
  }

  .tab {
    width: 100%;
    height: 50/16rem;
    line-height: 50/16rem;
    background: #fff;
    color: #171818;
    padding-left: 10/16rem;
    border-bottom: 1px solid #EFEFEF;
  }

  .message {
    border-bottom: none;
  }

  .tabCard {
    margin-top: 10/16rem;
  }

  .love {
    margin-bottom: 60/16rem;
  }
</style>
