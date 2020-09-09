<template>
	<div>
		<div>
			<div>
				<el-row>
					<el-col :span="2" class="level1">
						<el-menu default-active="0" class="el-menu-vertical-demo" background-color="#333744" text-color="ghostwhite" active-text-color="#ffd04b">
							<img src="../assets/dl3.png" class="img" />
							<el-menu-item v-for="(item, index) in title1" :key="index" @click="type=index+1" :index="index.toString()">
								<span slot="title" id="syan">{{item}}</span>
							</el-menu-item>

							<div class="xiaoxi mgtop">
								<i class="el-icon-message-solid col-hui mg10"></i>
								<el-badge :value="100" :max="50" class="item">
									<span class="col-hui2 mg5">消息</span>
								</el-badge>
							</div>
							<div class="xiaoxi" @click="open">
								<i class="el-icon-switch-button col-hui mg3 mg210"></i>
								<span class="col-hui2">退出</span>
							</div>
							<div class="xiaoxi">
								<i class="el-icon-s-custom col-hui mg3 mg210"></i>
								<span class="col-hui2">admin</span>
							</div>
						</el-menu>
					</el-col>
					<el-col :span="2" class="level2">
						<level2 :type="type"></level2>
					</el-col>
					<el-col :span="20" class="level3">
						<!--<xtsy :type="type"></xtsy>-->
						<router-view></router-view>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
//	import xtsy from "@/components/level2/xtsy3.vue";
	import level2 from "@/components/level2/level2.vue";
	export default {
		data() {
			return {
				tabPosition: "left",
				type: "",
				con: true,
				title1: ['快捷菜单', '客户管理', '商机管理', '订单管理', '审批管理', '统计报表', '工单管理',]
			};
		},
		created() {
			this.type = this.$route.query.type;
		},
		components: {
			level2,
//			xtsy,
		},
		methods: {
			open() {
				this.$confirm("确定要退出登录吗？", "确认提示", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "warning",
					})
					.then(() => {
						this.$message({
							type: "success",
							message: "退出成功!",
						});
						this.$router.push({
							path: "/dl",
						});
					})
					.catch(() => {
						this.$message({
							type: "info",
							message: "已取消退出",
						});
					});
			},
		},
	};
</script>

<style scoped>
	
	#syan{
		padding-right: 10px;
	}
	.mgtop {
		margin-top: 300px;
	}
	
	.mg5 {
		margin-left: 5px;
	}
	
	.mg10 {
		margin-left: 40px;
	}
	
	.mg210 {
		margin-right: 5px;
	}
	
	.mg3 {
		margin-left: 40px;
	}
	
	.col-hui2 {
		color: gainsboro;
	}
	
	.ft-15 {
		font-size: 15px;
	}
	
	.xiaoxi {
		display: flex;
		align-items: center;
		padding: 10px 0;
		background-color:#333744;
	}
	
	.col-hui {
		color: gainsboro;
		font-size: 20px;
	}
	
	.item {
		margin-top: 10px;
		margin-right: 40px;
		width: 40px;
	}
	
	.level1 {
		height: 947px;
		background-color: #333744;
		box-sizing: border-box;
	}
	
	.level3 {
		
		background: #F0F2F5;
		height: 930px;
		box-sizing: border-box;
	}
	
	.level2 {
		height: 930px;
		background-color: #FCFCFC;
		box-sizing: border-box;
		border-right: 1px solid #E6E6E6;
	}
	
	.img {
		width: 50%;
		height: 70%;
		padding-top: 20px;
	}
	
	.el-menu-item {
		text-align: right;
		padding: 0 40px;
	}
	
	.is-active {
		font-weight: bolder;
		color: white !important;
		text-shadow: 0px 0px 5px white;
		background-color: #202020be !important;
	}
	
	.el-button {
		background-color: #545c64 !important;
		color: gainsboro;
		border: 0;
	}
</style>