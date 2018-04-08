<template lang="html">
  <div class="store">
 	<img src="../../../img/diet-1.gif" >
	<div class="store-icon">
		<div class="img-icon">
			<img src="../../../img/diet-2.gif" height="60" width="60">
			<p>器材</p>
		</div>
		<div class="img-icon">
			<img src="../../../img/diet-3.gif" height="60" width="60">
			<p>鞋服</p>
		</div>
		<div class="img-icon">
			<img src="../../../img/diet-4.gif" height="60" width="60">
			<p>达人推荐</p>
		</div>
	</div>
	<h1>爆款推荐</h1>
	<div class="store-baokuan">
		<div class="hot-left">
 			<img src="../../../img/diet-5.gif">			
 			<p>健身身体，从一直总</p>
 			<p>￥189</p>
 		</div>	
 		<div class="hot-left">
 			<img src="../../../img/diet-6.gif">			
 			<p>健身身体，从一直总</p>
 			<p>￥189</p>
 		</div>	
 		<div class="hot-left">
 			<img src="../../../img/diet-7.gif">			
 			<p>健身身体，从一直总</p>
 			<p>￥189</p>
 		</div>	
 		<div class="hot-left">
 			<img src="../../../img/diet-8.gif">			
 			<p>健身身体，从一直总</p>
 			<p>￥189</p>
 		</div>	
 		<div class="hot-left">
 			<img src="../../../img/diet-9.gif">			
 			<p>健身身体，从一直总</p>
 			<p>￥189</p>
 		</div>	
 		<div class="hot-left">
 			<img src="../../../img/diet-10.gif">			
 			<p>健身身体，从一直总</p>
 			<p>￥189</p>
 		</div>	
	</div>
  </div>
</template>

<script>
export default {
	name:'store',
	data(){
		return{}
	}

}
</script>


<style lang="less">
.store h1{
	margin-top:20/16rem;
	margin-left:10/16rem;
}

.store-icon{

	margin-top:30/16rem;
	display:flex;
}
.store-icon .img-icon{
	text-align: center;
	flex:1;
}
.store-icon .img-icon p{
	margin-top:10/16rem;
}
.store-baokuan{
	// height:183*2/16rem;
	margin-top:20/16rem;
	// margin-bottom: 100/16rem;
}
.store-baokuan .hot-left{
	margin-top:10/16rem;
	margin-left:1%;
	float:left;
	width:32%;
}

</style>
