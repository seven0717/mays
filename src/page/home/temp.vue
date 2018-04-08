<template lang="html">
  <div class="record">
    <div class="tops">
      <div class="tops_s">
        <p>{{ tops_l }}</p>
        <p>
          <router-link :to="{name:'runmap',params:{id:this.run}}">
            <i class="el-icon-location-outline"></i>
          </router-link>
          
          <router-link :to="{name:'runset',params:{id:this.run}}">
            <span><i class="el-icon-setting set"></i></span>
          </router-link>
        </p>
      </div>

      <div class="tops_z">
        <el-progress type="circle" :percentage="elem.percentage" :color="elem.color"></el-progress>
        <div class="">
          目标：<span>{{ target }}{{ route }}</span>
        </div>
        <div class="tops_t">
          <div class="tops_z_z">
            大卡
            <p>192</p>
          </div>
          <div class="tops_z_y">
            {{ tops_z_y_top }}
            <p>3.6</p>
          </div>
        </div>
      </div>

      <div class="tops_x">
        <a type="button" name="button" @click="dian">{{ on ? "暂停": "开始" }}</a>
      </div>
    </div>
    <div class="bott">
      <h4>周好友{{ tops_l }}排名</h4>
      <ul class="friend">
        <li v-for="(item,index) in data">
          <span>{{ index+1 }}</span>
          <p>
            <img :src="item.img" alt="">
          </p>
          <p>{{ item.name }}</p>
          <p class="rights">{{ item.step }}{{ route }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import Temp from './temp'

export default {
  name:"temp",
  data(){
    return{
      elem:{
        color:'#feda05',
        percentage:52,
        size:500 + 'px'
      },
      target:100,
      on:false,
    }
  },
  props:{
    tops_l:{
      type:[String],
      default:''
    },
    tops_z_y_top:{
      type:[String],
      default:''
    },
    route:{
      type:[String],
      default:''
    },
    run:{
      type:[String],
      default:''
    },
    data:{
      type:[Array],
      default:''
    }
  },
  methods:{
    dian:function(){
      if(this.on){
        this.on = false
      }else{
        this.on = true
      }
    }
  }
}
</script>

<style scoped lang="less">
// tops
@width:100%;

.tops{
  width: @width;
  height: 620/2/16rem;
  background: #fff;
}

.tops_s{
  width: 90%;
  margin: 0 auto;
  display: flex;
  padding-top: 20/2/16rem;
  font-weight: 900;
  justify-content: space-between;
  color: #000;
}

.tops_z{
  width: 100%;
  height: 300/2/16rem;
  text-align: center;
}

.tops_t{
  display: flex;
  justify-content: space-around;
}

.tops_x{

  text-align: center;
  margin-top: 150/2/16rem;
}

.tops_x a{
  margin: 0 auto;
  width: 400/2/16rem;
  height: 80/2/16rem;
  border-radius: 50px;
  background: #fed906;
  outline: inherit;
  border: none;
  color: #000;
  line-height: 80/2/16rem;
  display: block;
}

// list-friend
.bott{
  background: #fff;
  margin-top: 15/2/16rem;
  padding-left: 20/2/16rem;
  font-size: 30/2/16rem;
  color: #000;
}

h4{
  padding-top: 20/2/16rem;
}
.bott .friend li{
  display: flex;
  margin: 20/2/16rem 0;

}

.bott .friend li span{
  display: block;
  line-height: 100/2/16rem;
}
.friend li p{
  height: 100/2/16rem;
  line-height: 100/2/16rem;
  margin-left: 20/2/16rem;;
    justify-content: flex-end;
}

.rights{
  position: absolute;
  right: 20/2/16rem;
}
.friend li p img{
  // width: 100/2/16rem;
  width: 100%;
  border-radius: 50%;
}


</style>
