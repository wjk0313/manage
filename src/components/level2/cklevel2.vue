<template>
	<div>
		<el-menu class="el-menu-vertical-demo" background-color="#FCFCFC" text-color="#757981" active-text-color="#1f89fe">
			<div class="title1">
				<i class="el-icon-notebook-2"></i>&nbsp;
				<span>客户管理</span>
			</div>
			<el-menu-item index="1" class="juzhong">
				<span><router-link to="khgl">客户列表</router-link></span>
			</el-menu-item>
			<el-menu-item index="5" class="juzhong">
				<span slot="title"><router-link to="khgl">客户筛选</router-link></span>
			</el-menu-item>
			<el-menu-item index="7" class="juzhong">
				<span slot="title"><router-link to="khgl">联系人列表</router-link></span>
			</el-menu-item>
			<el-menu-item index="8" class="juzhong">
				<span slot="title"><router-link to="khgl">跟进记录</router-link></span>
			</el-menu-item>
			
		</el-menu>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.is-active {
		background-color: white !important;
	}
	
	.title1 {
		color: #757981;
		background-color: whitesmoke;
		text-align: center;
		padding: 20px 0;
	}
	
	.juzhong {
		text-align: center;
		border-bottom: 1px solid gainsboro;
	}
</style>