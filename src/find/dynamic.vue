<template lang="html">
  <div class="dynamic">
 	<ul>
  		<li>
  			<router-link tag="a" to="/find/dynamic/hoop">健身圈</router-link>
  		</li>
  		<li>
  			<router-link tag="a" to="/find/dynamic/attention">关注</router-link>
  		</li>
  		<li>
  			<router-link tag="a" to="/find/dynamic/nearby">附近</router-link>
  		</li>
  	</ul>
  	<router-view></router-view >
  </div>
</template>

<script>
export default {
	name:'dynamic',
	data(){
		return{}
	}

}
</script>

<style lang="less">
.dynamic{	
  height:50/16rem;  
	background: white;
}
.dynamic ul{
  display: inline-block;
  display:flex;
	text-align: center;
	line-height:50/16rem;
  height:50/16rem;	
}
.dynamic ul li{
	flex: 1;
}
.dynamic ul li a{
  display: inline-block;
	color:black;
}

</style>
