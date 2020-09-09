<template>
	<div>
		<el-row>
			<el-col >
				<el-menu class="el-menu-vertical-demo" background-color="#FCFCFC" text-color="#757981" active-text-color="#1f89fe">
					<div class="title1">
						<i class="el-icon-notebook-2"></i>&nbsp;
						<span>快捷功能</span>
					</div>
					<el-menu-item index="1" class="juzhong">
						<span to="xtsy">系统首页</span>
					</el-menu-item>
					<el-menu-item index="2" class="juzhong">
						<span><router-link to="khgl">客户列表</router-link></span>
					</el-menu-item>
					
					
					<el-menu-item index="3" class="juzhong">
						<span><router-link to="khgl">全部商机</router-link></span>
					</el-menu-item>
					<el-menu-item index="4" class="juzhong">
						<span><router-link to="khgl">全部订单</router-link></span>
					</el-menu-item>
					
					<el-menu-item index="5" class="juzhong">
						<span><router-link to="khgl">全部工单</router-link></span>
					</el-menu-item>
					
					
					
				</el-menu>
			</el-col>
			
		</el-row>
		
	</div>
</template>

<script>
	
</script>

<style scoped>
	.box {
		height: 752px;
		box-sizing: border-box;
		background-color: rgba(234, 237, 241, 1);
	}
	
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
	}
</style>