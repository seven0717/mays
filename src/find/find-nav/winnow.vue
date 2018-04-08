<template lang="html">
  <div class="winnow">
 	<img src="../../../img/winnoe-1.gif">
 	<div class="hot">
 		<h1>热门精选</h1>
 		<img src="../../../img/winnoe-2.gif">
 		<img src="../../../img/winnoe-3.gif">
 	</div>
  </div>
</template>

<script>
export default {
	name:'winnow',
	data(){
		return{}
	}

}
</script>

<style lang="css">

.winnow .hot{
	width:96%;
}
.winnow .hot h1{
	margin-top:20/16rem;
	margin-left:3%;

}
.winnow .hot img{
	margin-left:2%;
	margin-top:20/16rem;
}
</style>
