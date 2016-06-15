<style >
	.abg{background: url("http://scimg.jb51.net/allimg/160428/77-16042Q4395Y23.jpg") no-repeat;}
</style>
<template>
	<div class="abg">
		<Display></Display>
		<Increment></Increment>
		<router-view></router-view>
	</div>
</template>
<script>
import Display from './Display.vue'
import Increment from './Increment.vue'


export default{
	components:{
		Display,Increment
	}
}
</script>
