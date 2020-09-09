<template>
	<div class="zsgc">
		<el-dialog title="新增" :visible.sync="addFormVisible">
			<el-form :model="addForm" ref="addForm">
				<el-form-item label="姓名" :label-width="formLabelWidth">
					<el-input v-model="addForm.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="日期" :label-width="formLabelWidth">
					<el-date-picker v-model="addForm.date" type="date" placeholder="选择日期" format="MM 月 dd 日" value-format="MM-dd">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="地址" :label-width="formLabelWidth">
					<el-input type="textarea" v-model="addForm.address" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div>
				<el-button @click="cancel()">取消</el-button>
				<el-button type="primary" @click="sumbitAddRow()" :loading="addLoading">确定</el-button>
			</div>

		</el-dialog>
	</div>
</template>

<script>
	
	export default {
		methods: {
			addRow: function() {
				this.addFormVisible = true;
				this.addForm = {
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
				})
				this.addFormVisible = false
			},
			cancel: function() {
				this.addFormVisible = false;
				this.editFormVisible = false;
			},
		}
	}
</script>

<style scoped>

</style>