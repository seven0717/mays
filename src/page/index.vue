<template lang="html">
  <div>
    <div class="tops">
    </div>
    <div class="zhong">
      <router-view />
    </div>
    <ul class="nav">
      <li>
        <router-link tag="a" to="/home">首页</router-link>
      </li>
      <li>
        <router-link tag="a" to="/fitness">健身</router-link>
      </li>
      <li>
        <router-link tag="a" to="/find">发现</router-link>
      </li>
      <li>
        <router-link tag="a" to="/me">我的</router-link>
      </li>
    </ul>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.tops{
  height: 60/16rem;
  background: #181818;
  width: 100%;
  text-align: center;
  color: white;
  display: flex;
  line-height: 60/16rem;
}

.nav{
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 60/16rem;
  background: #181818;
  align-items: center;
  display: flex;
  justify-content: space-around;
}

a{
  color: #fff;
}

a.active{
  color: #feda05;
}

.nav ul li{
  flex: 1;
}

</style>
