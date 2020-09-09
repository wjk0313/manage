<template>
	<div class="home">
		<div>

			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="courseDesc" label="courseDesc" sortable>
				</el-table-column>
				<el-table-column prop="courseName" label="courseName" sortable>
				</el-table-column>
				<el-table-column prop="id" label="id" sortable>
				</el-table-column>
				<el-table-column prop="professionalName" label="professionalName" sortable>
					<template #default='{row}'>
						{{row.professionalName}}
					</template>
				</el-table-column>
			</el-table>
		</div>

		<div>{{htmlbody}}</div>

		<button class='add' @click='add'>
      添加
    </button>
		<button class='add' @click='remove'>
      删除
    </button>
		<button class='add' @click='update'>
      修改
    </button>
		<button class='add' @click='getAll'>
      查询
    </button>
	</div>
</template>

<script>
	import axios from 'axios'
	import qs from 'qs'
	export default {
		data() {
			return {
				htmlbody: '',
				tableData: [{
					id: 1,
					date: '2016-05-02',
					name: '哈哈',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					id: 2,
					date: '2016-05-04',
					name: '哈哈',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					id: 3,
					date: '2016-05-01',
					name: '哈哈',
					address: '上海市普陀区金沙江路 1519 弄',
					children: [{
						id: 31,
						date: '2016-05-01',
						name: '哈哈',
						address: '上海市普陀区金沙江路 1519 弄'
					}, {
						id: 32,
						date: '2016-05-01',
						name: '哈哈',
						address: '上海市普陀区金沙江路 1519 弄'
					}]
				}, {
					id: 4,
					date: '2016-05-03',
					name: '哈哈',
					address: '上海市普陀区金沙江路 1516 弄'
				}],

			}
		},
		mounted() {
			this.getAll()
		},
		methods: {
			//修改
			update() {
				axios({
						url: "http://139.9.169.87:8081/examsystem/updateCourse",
						method: 'post',
						params: {
							"professional.id": '1',
							"professional.professionalName": 'hehhe',
							" professional.professionalDesc": 'xixiixi',
							"id": '1',
							"courseName": '哈哈哈哈哈哈哈',
							"courseDesc": '哈哈哈'
						},
						data: qs.stringify({
							"professionalId": '2222'
						})
					})
					.then(mm => {
						this.htmlbody = mm.data
					})
			},
			//删除
			remove() {
				axios({
						url: "http://139.9.169.87:8081/examsystem/deleteCourse",
						method: 'get',
						params: {
							"id": "831"
						}
					})
					.then(ss => {
						this.htmlbody = ss.data
					})
			},
			///添加
			add() {

				axios({
						url: "http://139.9.169.87:8081/examsystem/addCourse",
						method: 'post',
						params: {
							"professional.id": '1',
							"professional.professionalName": 'hehhe',
							" professional.professionalDesc": 'xixiixi',
							"id": '1',
							"courseName": 'nnnn',
							"courseDesc": 'nnnnn'
						},
						data: qs.stringify({
							"professionalId": '130'
						})
					})
					.then(ff => {
						this.htmlbody = ff.data
					})

			},
			//查询
			getAll() {
				axios({
						url: "http://139.9.169.87:8081/examsystem/getAllCourse",
						method: 'get'
					})
					.then(nn => {
						this.htmlbody = nn.data
						this.tableData = nn.data.data
					})
			}
		}
	};
</script>
<style scoped>
	.home {
		width: 83%;
	}
	
	.add {
		margin-left: 30px;
		margin-top: 30px;
	}
</style>