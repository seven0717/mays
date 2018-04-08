<template lang="html">
  <div class="home">
    <ul>
      <li>
        <router-link tag="a" to="/home/total">总运动</router-link>
      </li>
      <li>
        <router-link tag="a" to="/home/record">健走</router-link>
      </li>
      <li>
        <router-link tag="a" to="/home/runing">跑步</router-link>
      </li>
      <li>
        <router-link tag="a" to="/home/riding">骑行</router-link>
      </li>
    </ul>
    <transition name="bounce">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name:"home",
  data(){
    return{}
  }
}
</script>

<style scoped lang="less">
.home ul{
  display: flex;
  position: absolute;
  top: 16/16rem;
  justify-content: space-around;
  width: 100%;
}

a{
  color: #fff;
}

a.active{
  color: #feda05;
}

// .bounce-enter-active {
//   animation: bounce-in .5s;
// }
// .bounce-leave-active {
//   animation: bounce-in .5s reverse;
// }
// @keyframes bounce-in {
//   0% {
//     transform: scale(0);
//   }
//   50% {
//     transform: scale(0);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
</style>
