<template>
	<div class="qbdd">
		<div class="ding">
			<div class="left">
				<span><i class="el-icon-circle-plus"></i>快速创建</span>
			</div>
			<div class="right">
				<!--<span><el-input v-model="input" placeholder="请输入内容" ></el-input></span>-->
				<span><i class="el-icon-s-claim"></i>事项</span>
				<span><i class="el-icon-s-claim"></i>日程</span>
				<span><i class="el-icon-message-solid"></i>消息</span>
				<span><i class="el-icon-s-tools"></i>管理</span>
				<span><i class="el-icon-s-custom"></i>admin</span>
				<span><i class="el-icon-arrow-down"></i></span>
			</div>
		</div>
		<div class="ding2">
			<div class="dleft">
				<span><i class="el-icon-s-home"></i></span>
				<span>></span>
				<span>一级分类</span>
				<span>></span>
				<span>全部订单</span>
			</div>
			<div class="dright">
			</div>
		</div>
		<div class="xia">
			<ddqb></ddqb>

		</div>
	</div>
</template>

<script>
	import ddqb from "@/components/level2/ddqb3.vue";
	export default {
		components: {
        ddqb,
        
    },
    props: ["type"],
    data() {
        return {};
    },
	}
</script>

<style scoped>
	.xtsy{
		height: 930px;
		box-sizing:border-box;
	}
	.ding {
		background: white;
		width: 100%;
		height: 50px;
		border-bottom: 1px solid gainsboro;
	}
	
	.ding2 {
		background: white;
		width: 100%;
		height: 50px;
		border-bottom: 1px solid gainsboro;
	}
	
	.left {
		padding-top: 15px;
		width: 150px;
		height: 35px;
		text-align: center;
		float: left;
	}
	
	.dleft {
		padding-top: 15px;
		width: 270px;
		height: 35px;
		text-align: center;
		float: left;
	}
	
	.right {
		padding-top: 15px;
		width: 600px;
		height: 35px;
		float: right;
	}
	
	.right>span {
		color: #999999;
		margin-right: 15px;
	}
	
	.dleft>span {
		color: #999999;
		margin-right: 5px;
	}
	
	i {
		margin-right: 10px;
	}
	
	.xia {
		margin: 10px 45px 10px 45px;
		width: 1520px;
		height: 800px;
		
	}
</style>