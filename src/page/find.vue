<template lang="html">
  <div class="find">
	<ul>
  		<li>
  			<router-link tag="a" to="/find/discover">发现</router-link>
  		</li>
  		<li>
  			<router-link tag="a" to="/find/dynamic">动态</router-link>
  		</li>
  	</ul>
  	<router-view></router-view >
  </div>
</template>

<script>
export default {
}
</script>

<style scoped >
.find{
	background: white;
}
.find ul{
  display: flex;
  position: absolute;
  top:  1.266667rem;
  width: 23.4375rem;
}

a{
  color: #fff;
}

a.active{
  color: #feda05;
}
.find ul li{
  text-align: center;
  flex: 1;
  margin-right: 0.133333rem;
}
</style>
