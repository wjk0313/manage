<template>
	<div class="app">
		<div class="app-1">
			<div class="div-0">
				<el-input v-model="input" style="width:220px" placeholder="模糊搜索"></el-input>
				<el-button style="margin-left: 10px;" type="primary">搜索</el-button>

				<el-button style="margin-left: 10px;margin-bottom: 15px;" type="primary" @click="add()">新增</el-button>
			</div>

			<div class="div-1">

				<el-table border :cell-style="rowClass" :header-cell-style="{background:'#EEF7FE',color:'#2DA9FA'}" style="width: 100%" ref="multipleTable" :data="tableData" tooltip-effect="dark">
					<el-table-column type="selection" width="50" align="center"></el-table-column>
					<el-table-column type="index" width="50" label="序号" align="center"></el-table-column>
					<el-table-column align="center" prop="id" label="id" width="120"></el-table-column>
					<el-table-column align="center" prop="courseName" label="职业" width="120"></el-table-column>
					<el-table-column align="center" prop="courseDesc" label="名称" show-overflow-tooltip></el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
							<el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				input: "",
				tableData: [],
				multipleSelection: [],
			};
		},
		mounted() {
			this.axios
				.get('http://139.9.169.87:8081/examsystem/getAllCourse')
				
				.then((res) => {
					const shuj = res.data.data;
					console.log(res.data.data);
					this.tableData = shuj;
					console.log(this.tableData);
				});
		},
		methods: {
			handleDelete(ids) {
				alert(ids)

				this.$http
					.get("http://139.9.169.87:8081/examsystem/deleteCourse?id=" + ids, {
						

						Headers: {
							Accept: "application/json",

							"Content-Type": "application/x-www-form-urlencoded"
						}
					})
					.then(res => {
						console.log(res);
					});
			},
			rowClass() {
				return "text-align: center;";
			},
			add() {
				this.$router.push({
					path: "/sy/add",
				});
			},
			handleEdit(row) {
				console.log(row)
				this.$router.push({
					path: "/sy/update",
					query: {
						cc: row
						
					},
				});
			},
		},
	};
</script>
<style scoped>
	.app-1 {
		width: 1030px;
		background: white;
		margin: 10px auto;
		border-radius: 10px;
	}
	
	.app {
		display: flex;
	}
	
	.div-0 {
		margin: 15px;
	}
	
	.div-1 {
		margin: 15px;
	}
</style>