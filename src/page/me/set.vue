<template>
  <div class="set">
    <router-link tag="a" to="/me/person" class="back"><i class="iconfont">&#xe616;</i></router-link>
    <p class="title">设置</p>
    <div class="tabCard">
      <router-link tag="div" to="/me/information" class="tab information">
        <p>个人资料</p>
      </router-link>
    </div>
    <div class="tabCard">
      <router-link tag="div" to="/me/account" class="tab account">
        <p>账号管理</p>
      </router-link>
    </div>
    <div class="tabCard">
      <router-link tag="div" to="" class="tab account">
        <p>缓存管理</p>
      </router-link>
    </div>
    <div class="tabCard">
      <router-link tag="div" to="" class="tab account">
        <p>检查更新</p>
      </router-link>
    </div>
    <router-link tag="div" to="" class="exitbtn">退出登录</router-link>
  </div>
</template>

<script>
  export default {
    name: "set",
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .back {
    color: #fff;
    position: absolute;
    top: 22/16rem;
    left: 10/16rem;
  }

  .title {
    position: absolute;
    top: 18/16rem;
    left: -1rem;
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
  .exitbtn{
    position: absolute;
    width: 250/16rem;
    height: 45/16rem;
    text-align: center;
    line-height: 45/16rem;
    border: 1px solid #171818;
    border-radius: 45/16rem;
    color: #171818;
    top: 350/16rem;
    left: -125/16rem;
    margin-left: 50%;
  }

</style>
