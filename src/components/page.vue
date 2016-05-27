<script>
	import pagebar from './pagebar';
	import tablepage from './table';
	import app from './app.vue';
	import store from '../vuex/store.js'

	export default{
		// el:"#page",
		data:function(){
			return {
				all:20,
				cur:1,
				pagedata:[{"fir":"数据0011","sec":"数据002","three":"数据003","four":"数据004","five":"数据005","six":"数据006"},
						 {"fir":"数据0012","sec":"数据002","three":"数据003","four":"数据004","five":"数据005","six":"数据006"},
						 {"fir":"数据0013","sec":"数据002","three":"数据003","four":"数据004","five":"数据005","six":"数据006"},
						 {"fir":"数据0014","sec":"数据002","three":"数据003","four":"数据004","five":"数据005","six":"数据006"}]
			}
		},
		watch:{
			cur:function(){
				this.pagedata = [{"fir":"数据1111","sec":"数据002","three":"数据003","four":"数据004","five":"数据005","six":"数据006"},
						 {"fir":"数据2222","sec":"数据002","three":"数据003","four":"数据004","five":"数据005","six":"数据006"},
						 {"fir":"数据3333","sec":"数据002","three":"数据003","four":"数据004","five":"数据005","six":"数据006"},
						 {"fir":"数据4444","sec":"数据002","three":"数据003","four":"数据004","five":"数据005","six":"数据006"}];
			}
		},
		components:{
			pagebar,tablepage,app
		},
		store
	}
</script>
<template>
	<div class="m-page bg">
		<tablepage :pagedata="pagedata" ></tablepage>
		<pagebar :all="all" :cur.sync="cur" ></pagebar>
		<app></app>
		<a v-link="{ name:'router1' }">test01</a>
		<a v-link="{ name:'router2' }">test02</a>
	</div>
</template>
<style lang="less">
	.m-page{
		padding: 20px;
		border: 1px #dcdcdc solid;
		overflow: hidden;
		background: url("../asset/img/bg.jpg") no-repeat;
	}
	
</style>