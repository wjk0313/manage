<template>
	<div id="qyxx">
		<p style=" text-align: left;font-size:18px; border-bottom: 1px solid #ccc;padding:10px 0 20px 0;margin-left:30px;">企业信息</p>
		<div class="dx">
			<el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">

				<el-form-item label="名称" prop="pass">
					<el-input v-model="from.id"></el-input>
				</el-form-item>
				<el-form-item label="id" prop="name">
					<el-input v-model="from.courseName"></el-input>
				</el-form-item>
				<el-form-item label="id" prop="name">
					<el-input v-model="from.courseDesc"></el-input>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="dianji">修改</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				from: {

				}
			};
		},

		created() {
			console.log(this.$route.query.cc)
			this.from = this.$route.query.cc

		},
		methods: {
			dianji() {
			  
				this.axios
					.post(
						"http://139.9.169.87:8081/examsystem/updateCourse?professional.id=161&id="+this.from.id+"&courseName="+this.from.courseName+"&courseDesc="+this.from.courseDesc, {}, {
							headers: {
								Accept: "application/json",
								"Content-Type": "application/x-www-form-urlencoded"
							}
						}
					)

					.then(res => {
						console.log(this.from.id + "qweqweqwe" + this.from.courseName + "qweqweqwe" + this.from.courseDesc);
						console.log(res.data.msg);
						this.$router.push({
							path: "/sy/tw"
						});
					});
			}
		}
	};
</script>

<style scoped>
	el-form {
		text-align: left;
	}
	
	.dx {
		width: 500px;
		margin-left: 50px;
	}
	
	#qyxx {
		width: 1000px;
		height: 95%;
		background-color: white;
	}
</style>