<template>
  <div class="account">
    <router-link tag="a" to="/me/person" class="back"><i class="iconfont">&#xe616;</i></router-link>
    <p class="title">账号管理</p>
    <div class="t_text">
      <p class="text">你已使用新浪微博登陆迈斯</p>
    </div>
    <div class="tabCard">
      <router-link tag="div" to="" class="tab tel">
        <p>手机号</p>
        <router-link tag="div" to="" class="t_right"><p type="button" name="button" class="binding" @click="cl">{{ tel ? "绑定": "解除绑定" }}</p></router-link>
      </router-link>
    </div>
    <div class="t_text">
      <p class="text">绑定手机号后可以直接使用手机号和密码登录迈斯</p>
    </div>
    <div class="t_text three">
      <p class="text">第三方账号绑定</p>
    </div>
    <div class="tabCard">
      <router-link tag="div" to="" class="tab weixin">
        <p>微信</p>
        <router-link tag="div" to="" class="t_right"><p class="binding">绑定</p></router-link>
      </router-link>
    </div>
    <div class="tabCard">
      <router-link tag="div" to="" class="tab weibo">
        <p>微博</p>
        <router-link tag="div" to="" class="t_right"><p class="binding">解除绑定</p></router-link>
      </router-link>
    </div>
    <div class="tabCard">
      <router-link tag="div" to="" class="tab qq">
        <p>QQ</p>
        <router-link tag="div" to="" class="t_right"><p class="binding">绑定</p></router-link>
      </router-link>
    </div>
    <div class="t_text">
      <p class="text">绑定第三方账号后可以多个账号任意登录迈斯</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: "account",
    data() {
      return {
        tel:true
      }
    },
    methods:{
      cl:function(){
        if(this.tel){
          this.tel = false
        }else{
          this.tel = true
        }
      }
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
    left: -32/16rem;
    margin-left: 50%;
    color: #fff;
  }

  .t_text {
    width: 100%;
    height: 41/16rem;
    line-height: 41/16rem;
    padding-left: 10/16rem;
    box-sizing: border-box;
    color: #171818;
    font-size: 12/16rem;
  }

  .tab {
    position: relative;
    width: 100%;
    height: 50/16rem;
    line-height: 50/16rem;
    background: #fff;
    color: #171818;
    padding: 0 10/16rem;
    box-sizing: border-box;
    border-bottom: 1px solid #EFEFEF;
  }

  .tab p {
    float: left;
  }

  .tab .t_right {
    float: right;
    margin-top: 12/16rem;
  }

  .tab .t_right .binding {
    width: 75/16rem;
    height: 25/16rem;
    line-height: 25/16rem;
    text-align: center;
    border-radius: 12/16rem;
    background: #FEDA05;
    font-size: 12/16rem;
  }

  .three {
    margin-top: 10/16rem;
  }

  .weibo, .qq {
    margin-top: 10/16rem;
  }
</style>
