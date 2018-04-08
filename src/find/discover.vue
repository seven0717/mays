<template lang="html">
  <div class="discover">
    <ul>
  		<li>
  			<router-link tag="a" to="/find/discover/winnow">精选</router-link>
  		</li>
  		<li>
  			<router-link tag="a" to="/find/discover/diet">饮食</router-link>
  		</li>
  		<li>
  			<router-link tag="a" to="/find/discover/store">商城</router-link>
  		</li>
  	</ul>
  	<router-view></router-view >
  </div>
</template>

<script>



export default {
	name:'discover',
	data(){
		return{}
	},
	
}
</script>

<style lang="less">

.discover{	
  height:50/16rem;  
	background: white;
}
.discover ul{
  display: inline-block;
  display:flex;
	text-align: center;
	line-height:50/16rem;
  height:50/16rem;	
}
.discover ul li{
	flex: 1;
}
.discover ul li a{
  display: inline-block;
	color:black;
}
</style>
