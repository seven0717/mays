<template lang="html">
  <div class="diet">
  	<img src="../../../img/store-1.gif" >
  	<h1>健身美食餐</h1>
 	<div class="hot">	
 		<div class="hot-left">
 			<img src="../../../img/store-2.gif">
 			<p><span><img src="../../../img/store-4.gif" class="img-there"></span><span>你眼里的我</span></p>
 			<span>健身美食餐，健康的...菌类更有用营养和美味</span>
 			<p>
 				<span><i class="iconfont">&#xe627;</i> <span>123</span></span>
 				<span class="pinlun"><i class="iconfont">&#xe7bf;</i> <span>123</span></span>
 			</p>
 		</div>	
 		<div class="hot-right">
 			<img src="../../../img/store-3.gif">
 			<p><span><img src="../../../img/store-4.gif" class="img-there"></span><span>我眼里的你</span></p>
 			<span>健身美食餐，健康的身体，需要一个好的饮食</span>
 			<p>
 				<span><i class="iconfont">&#xe627;</i> <span>123</span></span>
 				<span class="pinlun"><i class="iconfont">&#xe7bf;</i> <span>123</span></span>
 			</p>
 		</div>	
 		
 	</div>
  </div>
</template>

<script>

import "../../assets/font/iconfont.css"

export default {
	name:'diet',
	data(){
		return{}
	}

}
</script>

<style lang="less">
.diet .hot {
	width:100%;
	margin-left:2%;
	margin-top:20/16rem;
	// margin-bottom: 100/16rem;
}
.diet h1{
	margin-top:20/16rem;
	margin-left:3%;	
}
.diet .hot  .hot-left,.diet .hot  .hot-right{
	float:left;
	width:47%;
}
.diet .hot  .hot-left p .pinlun,.diet .hot  .hot-right p .pinlun{
	margin-left:50/16rem;
}
.diet .hot  .hot-right{
	margin-left:2%;
}
.diet .hot  p{
	margin-top:10/16rem;
}
// .diet .hot  p span{
// 	margin-left:30/16rem;
// }
.diet .hot .img-there{
	margin-right:15/16rem;
	width:20/16rem;
	height:20/16rem;
}
</style>
