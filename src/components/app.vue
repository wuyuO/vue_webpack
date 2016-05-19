<template>
	<div>
		<Display></Display>
		<Increment></Increment>
		<router-view></router-view>
	</div>
</template>
<script>
import Display from './Display.vue'
import Increment from './Increment.vue'
import store from '../vuex/store.js'

export default{
	components:{
		Display,Increment
	},
	store
}
</script>