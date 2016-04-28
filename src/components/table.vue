<style lang="less">
	.m-table{
		width: 100%;
		background-color: transparent;
		border-spacing: 0;
    	border-collapse: collapse;
    	border: 1px solid #ddd;
    	margin-bottom: 20px
	}
	thead{
		display: table-header-group;
		vertical-align: middle;
		border-color: inherit;
	}
	th,td{border: 1px solid #dcdcdc; padding: 5px 20px}
</style>
<template>
	<table class="m-table">
		<thead>
			<th>第一标题</th>
			<th>第二标题</th>
			<th>第三标题</th>
			<th>第四标题</th>
			<th>第五标题</th>
			<th>第六标题</th>
		</thead>
		<tbody v-for="item in pagedata">
			<tr>
				<td>{{item.fir}}</td>
				<td>{{item.sec}}</td>
				<td>{{item.three}}</td>
				<td>{{item.four}}</td>
				<td>{{item.five}}</td>
				<td>{{item.six}}</td>
			</tr>
		</tbody>
	</table>
</template>
<script>
	export default{
		props:['pagedata']
	}
</script>