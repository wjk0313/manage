<template>
	<div class="syxt">
		<div class="sy1d">
			<div class="sy1dleft">
				<span>快速创建</span>
			</div>
			<div class="sy1dright">
				<div class="sy1drightz">
					<span><img src="../../assets/s1.svg"></span>
					<p>新建客户</p>
				</div>
				<div class="sy1drightz">
					<span><img src="../../assets/s2.svg"></span>
					<p>新建线索</p>
				</div>
				<div class="sy1drightz">
					<span><img src="../../assets/s3.svg"></span>
					<p>新建商机</p>
				</div>
				<div class="sy1drightz">
					<span><img src="../../assets/s4.svg"></span>
					<p>新建订单</p>
				</div>
				<div class="sy1drightz">
					<span><img src="../../assets/s5.svg"></span>
					<p>新建联系人</p>
				</div>
				<div class="sy1drightz">
					<span><img src="../../assets/s6.svg"></span>
					<p>写新跟进</p>
				</div>
				<div class="sy1drightz">
					<span><img src="../../assets/s7.svg"></span>
					<p>新建任务</p>
				</div>
				<div class="sy1drightz">
					<span><img src="../../assets/s8.svg"></span>
					<p>新建工单</p>
				</div>
				<div class="sy1drightz">
					<span><img src="../../assets/s9.svg"></span>
					<p>新建回款单</p>
				</div>
				<div class="sy1drightz">
					<span><img src="../../assets/s10.svg"></span>
					<p>回款计划</p>
				</div>
			</div>

		</div>
		<div class="sy1">
			<div class="sy1z">
				<div class="sy1zd">
					<span class="zuo">快速创建</span>
					<div class="you">
						<!--<el-input placeholder="请选择日期" v-model="input1">
							<i slot="suffix" class="el-input__icon el-icon-date"></i>
						</el-input>
						<el-input placeholder="请选择日期" v-model="input2">
							<i slot="suffix" class="el-input__icon el-icon-date"></i>
						</el-input>-->
					</div>
				</div>
				<div class="sy1zde">

					<div class="sy1drightz2">
						<p>新增客户</p>
						<p class="sy1z2">200</p>
					</div>
					<div class="sy1drightz2">
						<p>新增客户</p>
						<p class="sy1z2">200</p>
					</div>
					<div class="sy1drightz2">
						<p>新增客户</p>
						<p class="sy1z2">200</p>
					</div>
					<div class="sy1drightz2">
						<p>新增客户</p>
						<p class="sy1z2">200</p>
					</div><br />
					<div class="sy1drightz2">
						<p>新增客户</p>
						<p class="sy1z2">200</p>
					</div>
					<div class="sy1drightz2">
						<p>新增客户</p>
						<p class="sy1z2">200</p>
					</div>
					<div class="sy1drightz2">
						<p>新增客户</p>
						<p class="sy1z2">200</p>
					</div>
					<div class="sy1drightz2">
						<p>新增客户</p>
						<p class="sy1z2">200</p>
					</div>
				</div>
			</div>
			<div class="sy1y">
				<div class="sy1z">
					<div class="sy1zd">
						<span class="zuo">系统公告</span>
						<div class="you">
							<!--<el-input placeholder="请选择日期" v-model="input1">
							<i slot="suffix" class="el-input__icon el-icon-date"></i>
						</el-input>
						<el-input placeholder="请选择日期" v-model="input2">
							<i slot="suffix" class="el-input__icon el-icon-date"></i>
						</el-input>-->
						</div>
					</div>
					<div class="sy1zde">

						<div class="sy1drightz2">
							<p>新增客户</p>
							<p class="sy1z2">200</p>
						</div>
						<div class="sy1drightz2">
							<p>新增客户</p>
							<p class="sy1z2">200</p>
						</div>
						<div class="sy1drightz2">
							<p>新增客户</p>
							<p class="sy1z2">200</p>
						</div>
						<div class="sy1drightz2">
							<p>新增客户</p>
							<p class="sy1z2">200</p>
						</div><br />
						<div class="sy1drightz2">
							<p>新增客户</p>
							<p class="sy1z2">200</p>
						</div>
						<div class="sy1drightz2">
							<p>新增客户</p>
							<p class="sy1z2">200</p>
						</div>
						<div class="sy1drightz2">
							<p>新增客户</p>
							<p class="sy1z2">200</p>
						</div>
						<div class="sy1drightz2">
							<p>新增客户</p>
							<p class="sy1z2">200</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="sy1">
			<div class="sy1z">
				<div class="sy1zd">
					<span class="zuo">快速创建</span>
					<div class="you">
					</div>
				</div>
				<div class="sy1zde">
					<div id="myCharte" :style="{width: '550px', height: '300px'}"></div>
				</div>
			</div>
			<div class="sy1y">
				<div class="sy1z">
					<div class="sy1zd">
						<span class="zuo">系统公告</span>
						<div class="you">
						</div>
					</div>
					<div class="sy1zde">
						<div id="myChart" :style="{width: '550px', height: '300px'}"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				input1: '公司简报',
				input2: '本周'
			}
		},
		mounted() {
			this.drawLine();
			this.drawLiner();
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				// 绘制图表
				myChart.setOption({
					title: {
						text: '成交金额'
					},
					tooltip: {},
					xAxis: {
						data: ["8-1", "8-2", "8-3", "8-4", "8-5", "8-6"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20, 15, 55]
					}]
				});
			},
			drawLiner() {
				// 基于准备好的dom，初始化echarts实例
				let myCharte = this.$echarts.init(document.getElementById('myCharte'))
				// 绘制图表
				myCharte.setOption({
					title: {
						text: '成交金额'
					},
					tooltip: {},
					xAxis: {
						data: ["8-1", "8-2", "8-3", "8-4", "8-5", "8-6"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20, 15, 55]
					}]
				});
			},

		}
	}
</script>

<style scoped>
	.sy1zde {
		height: 260px;
		background: white;
	}
	
	.sy1z2 {
		margin-top: 10px;
		font-size: 50px;
		text-align: center;
		color: rgb(153, 153, 153)
	}
	
	.zuo {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.syxt {
		width: 1520px;
		height: 800px;
	}
	
	.sy1d {
		width: 100%;
		height: 180px;
	}
	
	.sy1 {
		margin-top: 10px;
		height: 310px;
		text-align: left;
	}
	
	.sy1z {
		width: 755px;
		height: 310px;
		float: left;
	}
	
	.sy1y {
		width: 755px;
		height: 310px;
		float: right;
		background: saddlebrown;
	}
	
	.sy1zd {
		padding-top: 15px;
		width: 735px;
		height: 35px;
		text-align: left;
		padding-left: 20px;
		background: #F9F9F9;
		border-bottom: 1px solid gainsboro;
	}
	
	.sy1dleft {
		padding-top: 15px;
		width: 1500px;
		height: 35px;
		text-align: left;
		padding-left: 20px;
		border-bottom: 1px solid gainsboro;
		background: #F9F9F9;
	}
	
	.sy1dright {
		
		width: 1520px;
		height: 125px;
		text-align: left;
		background: white;
	}
	
	.sy1drightz2 {
		float: left;
		padding-top: 25px;
		width: 176px;
		height: 100px;
		margin-right: 6px;
		margin-left: 6px;
	}
	
	.sy1drightz {
		float: left;
		padding-top: 15px;
		width: 140px;
		height: 100px;
		margin-right: 6px;
		margin-left: 6px;
	}
	
	p {
		text-align: center;
	}
	
	img {
		margin-bottom: 15px;
		margin-right: 45px;
		margin-left: 45px;
	}
</style>