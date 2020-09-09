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
			<div class="sosuokun">
				<div class="search-wrap">
					<el-row>
						<el-col :span="1" class="grid label-search">
							<el-span type="success" icon="el-icon-search"></el-span>
						</el-col>
						<el-col :span="6" class="grid">
							<el-input v-model="search" placeholder="请输入内容"></el-input>
						</el-col>
						<el-col :span="17">
							<div class="table-grid-content">
								<el-button class="add" type="primary" @click="addRow()">添加</el-button>
							</div>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
		<div class="baioge">
			<div class="biaoxex">
				<!--表格-->
				<el-table :data="tableData" border style="width: 100%">>
					<el-table-column type="index" align="center" label="序号" width="180">
					</el-table-column>
					<el-table-column prop="namec" align="center" label="客户名称" width="180">
					</el-table-column>
					<el-table-column align="center" prop="zt" label="客户状态" width="180">
					</el-table-column>
					<el-table-column align="center" prop="name" label="客户星级" width="180">
					</el-table-column>
					<el-table-column align="center" prop="address" label="首联系人">
					</el-table-column>
					<el-table-column type="center" prop="shouj" label="手机号码" width="150">
					</el-table-column>
					<el-table-column type="center" prop="date" label="最后跟进" width="180">
					</el-table-column>
					<el-table-column type="center" prop="weij" label="未跟进天数" width="150">
					</el-table-column>
					<el-table-column label="操作" align="center">
						<template slot-scope="scope">
							<el-button size="mini" @click="handleEdit(scope.$index, scope.row)" style="border: 0 !important; color: #007FD1;">编辑</el-button>
							<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" style="background-color: white; color: #007FD1; border: 0;">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
		<!-- 新增窗口 -->
		<el-dialog title="新增" :visible.sync="addFormVisible">
			<el-form :model="addForm" ref="addForm">
				<el-form-item label="客户名称" :label-width="formLabelWidth">
					<el-input v-model="addForm.namec" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="客户状态" :label-width="formLabelWidth">
					<el-input v-model="addForm.zt" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="客户星级" :label-width="formLabelWidth">
					<el-input v-model="addForm.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="首联系人" :label-width="formLabelWidth">
					<el-input v-model="addForm.address" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="手机号码" :label-width="formLabelWidth">
					<el-input v-model="addForm.shouj" autocomplete="off"></el-input>
				</el-form-item>
				
				<el-form-item label="最后跟进" :label-width="formLabelWidth">
					<el-date-picker v-model="addForm.date" type="date" placeholder="选择日期" format="MM 月 dd 日" value-format="MM-dd">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="未跟进天数" :label-width="formLabelWidth">
					<el-input type="textarea" v-model="addForm.weij" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div>
				<el-button @click="cancel()">取消</el-button>
				<el-button type="primary" @click="sumbitAddRow()" :loading="addLoading">确定</el-button>
			</div>
		</el-dialog>
		<!-- 编辑窗口 -->
		<el-dialog title="编辑" :visible.sync="editFormVisible">
			<el-form :model="editForm" ref="editForm">
				<el-form-item label="客户名称" :label-width="formLabelWidth">
					<el-input v-model="editForm.namec" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="客户状态" :label-width="formLabelWidth">
					<el-input v-model="editForm.zt" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="客户星级" :label-width="formLabelWidth">
					<el-input v-model="editForm.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="首联系人" :label-width="formLabelWidth">
					<el-input v-model="editForm.address" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="手机号码" :label-width="formLabelWidth">
					<el-input v-model="editForm.shouj" autocomplete="off"></el-input>
				</el-form-item>
				
				<el-form-item label="最后跟进" :label-width="formLabelWidth">
					<el-date-picker v-model="editForm.date" type="date" placeholder="选择日期" format="MM 月 dd 日" value-format="MM-dd">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="未跟进天数" :label-width="formLabelWidth">
					<el-input type="textarea" v-model="editForm.weij" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div>
				<el-button @click="cancel()">取消</el-button>
				<el-button type="primary" v-on:click="sumbitEditRow()" :loading="addLoading">确定</el-button>
			</div>

		</el-dialog>
	</div>
</template>

<script>
	var _index; //定义全局变量
	export default {
		data() {
			return {
				tableData: [{
					namec:'深圳市亿恩科技有限公司',
					zt:'正在跟进',
					date: '2019-09-01 10:12:11',
					name: '三星级',
					address: '李小红',
					shouj:'18888888888',
					weij:'30'
				}, {
					namec:'深圳市亿恩科技有限公司',
					zt:'正在跟进',
					date: '2019-09-01 10:12:11',
					name: '三星级',
					address: '李小红',
					shouj:'18888888888',
					weij:'30',
				}, {
					namec:'深圳市亿恩科技有限公司',
					zt:'正在跟进',
					date: '2019-09-01 10:12:11',
					name: '三星级',
					address: '李小红',
					shouj:'18888888888',
					weij:'30',
				}, {
					namec:'深圳市亿恩科技有限公司',
					zt:'正在跟进',
					date: '2019-09-01 10:12:11',
					name: '三星级',
					address: '李小红',
					shouj:'18888888888',
					weij:'30',
				},{
					namec:'深圳市亿恩科技有限公司',
					zt:'正在跟进',
					date: '2019-09-01 10:12:11',
					name: '三星级',
					address: '李小红',
					shouj:'18888888888',
					weij:'30'
				},{
					namec:'深圳市亿恩科技有限公司',
					zt:'正在跟进',
					date: '2019-09-01 10:12:11',
					name: '三星级',
					address: '李小红',
					shouj:'18888888888',
					weij:'30'
				},{
					namec:'深圳市亿恩科技有限公司',
					zt:'正在跟进',
					date: '2019-09-01 10:12:11',
					name: '三星级',
					address: '李小红',
					shouj:'18888888888',
					weij:'30'
				},{
					namec:'深圳市亿恩科技有限公司',
					zt:'正在跟进',
					date: '2019-09-01 10:12:11',
					name: '三星级',
					address: '李小红',
					shouj:'18888888888',
					weij:'30'
				},{
					namec:'深圳市亿恩科技有限公司',
					zt:'正在跟进',
					date: '2019-09-01 10:12:11',
					name: '三星级',
					address: '李小红',
					shouj:'18888888888',
					weij:'30'
				},{
					namec:'深圳市亿恩科技有限公司',
					zt:'正在跟进',
					date: '2019-09-01 10:12:11',
					name: '三星级',
					address: '李小红',
					shouj:'18888888888',
					weij:'30'
				},{
					namec:'深圳市亿恩科技有限公司',
					zt:'正在跟进',
					date: '2019-09-01 10:12:11',
					name: '三星级',
					address: '李小红',
					shouj:'18888888888',
					weij:'30'
				},{
					namec:'深圳市亿恩科技有限公司',
					zt:'正在跟进',
					date: '2019-09-01 10:12:11',
					name: '三星级',
					address: '李小红',
					shouj:'18888888888',
					weij:'30'
				},
				],
				formLabelWidth: '120px',
				addFormVisible: false, //是否显示新增窗口
				name: "tableList",
				addForm: [],
				addLoading: false,
				editFormVisible: false, //是否显示编辑窗口
				editForm: [],
				search: '',
			}
		},
		
		methods: {
			tableRowClassName: function({
				row,
				rowIndex
			}) {
				if(rowIndex === 1) {
					return 'warning-row';
				} else if(rowIndex === 3) {
					return 'success-row';
				}
				return '';
			},
			handleEdit: function(index, row) {
				console.log(index, row);
			},
			/*表格删除功能*/
			handleDelete: function(index, row) {
				this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.tableData.splice(index, 1)
					this.$message({
						type: 'success',
						message: '删除成功!',
					})
				}).catch(err => {
					this.$message({
						type: 'error',
						message: err
					})
				})
			},
			//新增数据
			addRow: function() {
				this.addFormVisible = true;
				this.addForm = {
					namec:'',
					zt:'',
					shouj:'',
					weij:'',
					name: '',
					date: '',
					address: ''
				}
			},
			//将新增的数据添加到表格中
			sumbitAddRow: function() {
				this.tableData = this.tableData || []
				this.tableData.push({
					name: this.addForm.name,
					date: this.addForm.date,
					address: this.addForm.address,
					namec:this.addForm.namec,
					zt:this.addForm.zt,
					shouj:this.addForm.shouj,
					weij:this.addForm.weij,
					
					
				})
				this.addFormVisible = false
			},
			cancel: function() {
				this.addFormVisible = false;
				this.editFormVisible = false;
			},
			//编辑数据
			handleEdit(index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
				_index = index;
			},
			//保存编辑
			sumbitEditRow() {
				var editData = _index;
				this.tableData[editData].name = this.editForm.name;
				this.tableData[editData].date = this.editForm.date;
				this.tableData[editData].address = this.editForm.address;
				this.tableData[editData].namec = this.editForm.namec;
				this.tableData[editData].zt = this.editForm.zt;
				this.tableData[editData].shouj = this.editForm.shouj;
				this.tableData[editData].weij = this.editForm.weij;
				this.editFormVisible = false;
			},
		}
	}
</script>

<style scoped>
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
		margin-bottom: 15px;
		border: 0.5px solid #e4e4e4;
		width: 100%;
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
		margin-right: 500px;
		height: 28px;
		line-height: 28px;
		color: white;
		width: 80px;
		margin-left: 25px;
		text-align: center;
		background: #0079FE;
		border: none;
		border-radius: 5px;
	}
	
	.left {
		background: #FFFFFF;
		margin-top: 10px;
		height: 50px;
	}
	
	.left>div {
		float: left;
	}
	
	.shai {
		margin-left: 50px;
		margin-right: 50px;
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