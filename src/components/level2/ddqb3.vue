<template>
	<div class="ddqb">
		<div class="one">
			<div class="gray2">
				<div class="shu">全部商机</div>
				<div class="shu">我的商机</div>
				<div class="shu">下属商机</div>
				<div class="shu">我协作的下禹协作</div>
				<div class="shu">成交商机</div>
			</div>
			<div class="left">
				<div class="shai"> <input type="text" placeholder="输入用户名称/接待客服" class="size"></div>
				<div> <input type="button" value="查询结果" class="input2"></div>
				<div>
					<select class="select"></select>
				</div>
			</div>
		</div>
		<div class="two">
			<div class="biao">
				<el-table :data="tableData" border style="width: 1407">
					<el-table-column type="selection" width="140">
					</el-table-column>
					<el-table-column prop="name" label="商机标题 " width="150" color=" #0079FE;">
					</el-table-column>
					<el-table-column prop="address" label="关联客户" width="180">
					</el-table-column>
					<el-table-column prop="lei" label="商机阶段 " width="150">
					</el-table-column>
					<el-table-column prop="xiao" label="报价记录" width="150">
					</el-table-column>
					<el-table-column prop="xiang" label="报价总金额" width="150">
					</el-table-column>
					<el-table-column prop="zai" label="最后跟进" width="150">

					</el-table-column>
					<el-table-column prop="wgj" label="未跟进天数  " width="150">
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="150">
						<template slot-scope="scope">
							<el-button @click="handleClick(scope.row)" type="text" size="small" style="color: #30C2A5;">编辑</el-button>
							<el-button type="text" size="small" style="color: #30C2A5;">删除</el-button>
							<el-button type="text" size="small" style="color: #30C2A5;">置顶</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>

			<div class="float">
				<div class="check">
					<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
				</div>
				<div>
					<select class="select2">
						<option>批量操作</option>
					</select>
				</div>
				<div><input type="button" value="确定" class="input3"></div>
				<div class="block2">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
					</el-pagination>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	
	export default {
		data() {
			
			return {
				handleCheckAllChange:0,
				checkAll:0,
				isIndeterminate :0,
				value: true,
				currentPage4: 4,
				tableData: [{
						date: '游客',
						name: '商机标题',
						address: '深圳市亿恩科技有限公司',
						lei: '初步治谈',
						xiao: '10条',
						xiang: '￥10,000.00',
						zai: '2018-08-25 14:54',
						shi: '满意',
						yf: '查看',
						baby: '43%',
						wgj: '30'
					}, {
						date: '游客',
						name: '商机标题',
						address: '深圳市亿恩科技有限公司',
						lei: '初步治谈',
						xiao: '10条',
						xiang: '￥10,000.00',
						zai: '2018-08-25 14:54',
						shi: '满意',
						yf: '查看',
						baby: '43%',
						wgj: '30'
					}, {
						date: '游客',
						name: '商机标题',
						address: '深圳市亿恩科技有限公司',
						lei: '初步治谈',
						xiao: '10条',
						xiang: '￥10,000.00',
						zai: '2018-08-25 14:54',
						shi: '满意',
						yf: '查看',
						baby: '43%',
						wgj: '30'
					}, {
						date: '游客',
						name: '商机标题',
						address: '深圳市亿恩科技有限公司',
						lei: '初步治谈',
						xiao: '10条',
						xiang: '￥10,000.00',
						zai: '2018-08-25 14:54',
						shi: '满意',
						yf: '查看',
						baby: '43%',
						wgj: '30'
					},
					{
						date: '游客',
						name: '商机标题',
						address: '深圳市亿恩科技有限公司',
						lei: '初步治谈',
						xiao: '10条',
						xiang: '￥10,000.00',
						zai: '2018-08-25 14:54',
						shi: '满意',
						yf: '查看',
						baby: '43%',
						wgj: '30'
					},
					{
						date: '游客',
						name: '商机标题',
						address: '深圳市亿恩科技有限公司',
						lei: '初步治谈',
						xiao: '10条',
						xiang: '￥10,000.00',
						zai: '2018-08-25 14:54',
						shi: '满意',
						yf: '查看',
						baby: '43%',
						wgj: '30'
					},
					{
						date: '游客',
						name: '商机标题',
						address: '深圳市亿恩科技有限公司',
						lei: '初步治谈',
						xiao: '10条',
						xiang: '￥10,000.00',
						zai: '2018-08-25 14:54',
						shi: '满意',
						yf: '查看',
						baby: '43%',
						wgj: '30'
					},
					{
						date: '游客',
						name: '商机标题',
						address: '深圳市亿恩科技有限公司',
						lei: '初步治谈',
						xiao: '10条',
						xiang: '￥10,000.00',
						zai: '2018-08-25 14:54',
						shi: '满意',
						yf: '查看',
						baby: '43%',
						wgj: '30'
					},
					{
						date: '游客',
						name: '商机标题',
						address: '深圳市亿恩科技有限公司',
						lei: '初步治谈',
						xiao: '10条',
						xiang: '￥10,000.00',
						zai: '2018-08-25 14:54',
						shi: '满意',
						yf: '查看',
						baby: '43%',
						wgj: '30'
					},

				]

			}
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		},
		created() { 
			this.axios.get("https://www.fastmock.site/mock/6a55a9ff36b36cbf14f5f024a6816295/db/cww").then((res) => {
				console.log(res)
				this.shuzue = res.data.data.shuzue
			})
		}
	}
</script>

<style scoped="">
	.ddqb {
		width: 100%;
	}
	
	.gray {
		background: #f3f3f3;
		width: 100%;
		height: 25px;
		border-bottom: 0.5px solid #e4e4e4;
		padding-top: 10px;
	}
	
	.xi {
		font-size: 10px;
		border-left: 3px solid #1abc9c;
		margin-left: 10px;
		color: #999;
	}
	
	.xi span {
		margin-left: 5px;
	}
	
	.one {
		background: white;
		margin-top: 20px;
		margin-left: 15px;
		border: 0.5px solid #e4e4e4;
		width: 97%;
		height: 100px;
	}
	
	.gray2 {
		background: #F9F9F9;
		width: 99.9%;
		height: 50px;
		line-height: 35px;
		margin-left: 0.5px;
		border-bottom: 0.5px solid #E4E4E4;
	}
	
	.gray2:active {
		content: "";
		clear: both;
	}
	
	.gray2>div {
		float: left;
	}
	
	.el-icon-search {
		color: #999;
		font-size: 16px;
		margin-top: 12px;
		margin-left: 15px;
	}
	
	.shu {
		line-height: 50px;
		text-align: center;
		font-weight: bold;
		margin-left: 25px;
		margin-right: 35px;
		font-size: 14px;
		color: #666666;
	}
	
	.top {
		margin-top: -3px;
		margin-left: 5px;
	}
	
	.el-icon-question {
		color: orange;
		font-size: 15px;
	}
	
	.size {
		height: 25px;
		color: #ccc;
		width: 150px;
		outline: none;
	}
	
	.home {
		width: 83%;
	}
	
	.flex {
		display: flex;
		width: 100%;
		margin-top: 20px;
	}
	
	.flex>div {
		margin-left: 20px;
		width: 25%;
	}
	
	.first {
		height: 100px;
		border: 0.5px solid #E4E4E4;
	}
	
	.ing {
		margin-left: 80px;
		margin-top: 20px;
	}
	
	.ing>div:nth-child(1) {
		font-size: 16px;
		color: #757981;
	}
	
	.ing>div:nth-child(2) {
		font-size: 20px;
		color: #666666;
		margin-top: 5px;
	}
	
	.dang {
		font-size: 16px;
		color: #757981;
		margin-top: 25px;
		margin-left: 25px;
	}
	
	.dang>span {
		font-size: 20px;
		color: #666666;
		margin-left: 10px;
	}
	
	.today {
		font-size: 16px;
		color: #757981;
		margin-top: 8px;
		margin-left: 25px;
	}
	
	.today>span {
		margin-left: 10px;
	}
	
	.input2 {
		height: 28px;
		line-height: 28px;
		color: #666666;
		width: 80px;
		margin-left: 25px;
		text-align: center;
		background: #FFFFFF;
		border: none;
		border-radius: 5px;
		border: 0.5px solid #999;
	}
	
	.left {
		background: #FFFFFF;
		margin-top: 10px;
	}
	
	.left>div {
		float: left;
	}
	
	.shai {
		margin-left: 50px;
		color: #999;
	}
	
	.select {
		width: 150px;
		height: 28px;
		border-radius: 2px;
		color: #CCCCCC;
		margin-left: 5px;
		margin-left: 80px;
	}
	
	.size {
		width: 150px;
		height: 28px;
		border-radius: 2px;
		color: #ccc;
		margin-left: 15px;
		border: none;
		margin-left: 10px;
		border: 0.5px solid #999;
		padding-left: 5px;
	}
	
	.two {
		margin-top: 20px;
		margin-left: 15px;
		padding-bottom: 55px;
		border: 0.5px solid #e4e4e4;
		width: 97%;
		height: 600px;
		background: white;
	}
	
	.el-icon-s-grid {
		color: #999;
		font-size: 16px;
		margin-top: 12px;
		margin-left: 15px;
	}
	
	.biao {
		margin-top: 20px;
		margin-left: 25px;
		width: 95.5%;
	}
	
	.biao>>>.el-table th {
		background: #f2f2f2;
		font-size: 15px;
	}
	
	.biao>>>.el-table .cell {
		text-align: center;
	}
	
	.block2 {
		float: right!important;
		margin-top: 25px;
		margin-right: 30px;
	}
	
	.float>div {
		float: left;
	}
	
	.check {
		margin-top: 30px;
		margin-left: 80px;
	}
	
	.select2 {
		width: 100px;
		height: 28px;
		border-radius: 2px;
		color: #CCCCCC;
		margin-top: 28px;
		margin-left: 40px;
	}
	
	.input3 {
		height: 28px;
		line-height: 28px;
		color: #666666;
		width: 80px;
		margin-left: 25px;
		margin-top: 28px;
		text-align: center;
		background: #FFFFFF;
		border: none;
		border: 0.5px solid #999;
	}
</style>