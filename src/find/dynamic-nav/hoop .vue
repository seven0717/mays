<template lang="html">
  <div class="hoop">
  	<router-link tag="div" class="hoop-log" to="">
  		<div class="hopp-nav">
  			<img src="../../../img/hoop-2.gif" class="img">
  			<div class="hoop-tu">
  				<h3>凯文</h3>
  				<span>北京市</span>
  			</div>	
  			<span class="time">12:20</span>
  		</div>
  		<div class="hoop-top">
  			<img src="../../../img/hoop-1.gif" class="hoop-img" >
  			<span class="hoop-span">夜跑的感觉很不错，越跑越慢很累但很快乐，希望以后的每一天度能坚持下来，加油！</span>
  			<div class="dianpin">
 				<div class="pinlun"><i class="iconfont">&#xe627;</i> <span>123</span></div>
 				<div ><i class="iconfont">&#xe7bf;</i> <span>123</span></div>
 			</div>
  		</div>
  	</router-link>
  	<div class="hoop-log hoop-button">
  		<div class="hopp-nav">
  			<img src="../../../img/hoop-4.gif" class="img">
  			<div class="hoop-tu">
  				<h3>约翰</h3>
  				<span>北京市</span>
  			</div>	
  			<span class="time">12:20</span>
  		</div>
  		<div class="hoop-top">
  			<img src="../../../img/hoop-3.gif" class="hoop-img" >
  			<span class="hoop-span">夜跑的感觉很不错，越跑越慢很累但很快乐，希望以后的每一天度能坚持下来，加油！</span>
  			<div class="dianpin">
 				<div class="pinlun"><i class="iconfont">&#xe627;</i> <span>123</span></div>
 				<div ><i class="iconfont">&#xe7bf;</i> <span>123</span></div>
 			</div>
  		</div>
  	</div>		
  </div>

</template>

<script>

export default {
	name:'hoop',
	data(){
		return{}
	}

}
</script>

<style lang="less">
.hoop{
	width:100%;	
}
.hoop-log{
	margin-top:5/16rem;
	width:96%;
	margin:0 auto;
}
.hopp-nav .img{
	float:left;
	margin-top:20/16rem;
	width:40/16rem;
	height:40/16rem;
}
.hopp-nav .hoop-tu{
	margin-left:30/16rem;
	margin-top:20/16rem;
	float:left;
}
.hopp-nav .hoop-tu span{
	font-size: 14/16rem;
}
.hopp-nav .time{
	margin-top:20/16rem;
	float:right;
}
.hoop-img{
	margin-top:20/16rem;
}
.hoop-top .hoop-span{
	margin-top:20/16rem ;
	display:block;
	margin-bottom: 10/16rem;
}
.hoop-top .dianpin{
	border-top: 2/16rem solid white;
}
.hoop-top .dianpin div{
	margin-bottom: 20/16rem;
	text-align:center;
	line-height:30/16rem;
	margin-top:5/16rem;
	width:49%;
	height:30/16rem;
	float:left;

}
.hoop-top .dianpin .pinlun{
	border-right: 2/16rem solid white;
}
.hoop-top .dianpin .pinlun i{
	color:#fb4c4c;	
}
.hoop .hoop-button{
	width:100%;
	overflow: hidden;
	border-top:10/16rem solid white;
	margin-top:20/16rem;
}
.hoop .hoop-button .hopp-nav{
	width:96%;
	margin:0 auto;
}
.hoop .hoop-button .hoop-top{
	width:96%;
	margin:0 auto;
}
</style>
