<template>
	<div>
		<p>
			
			 1
			<input type="text" v-model="er" /><br />
			 2
			<input type="text" v-model="sa" /><br />

			<button @click="xinzeng()">新增</button>
		</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
				id:161,
				er: "",
				sa: ""
			};
		},
		methods: {
			xinzeng() {
				this.axios
					.post(
						"http://139.9.169.87:8081/examsystem/addCourse?courseName=" + this.er + "&courseDesc=" + this.sa, {
							data: {
								
								courseName: this.er,
								courseDesc: this.sa
							}
						}, {
							headers: {
								Accept: "application/json",
								"Content-Type": "application/x-www-form-urlencoded"
							}
						}
					)

					.then(res => {

						console.log(this.er + "qweqweqwe" + this.sa );
						console.log(res.data.msg);

						this.$router.push({
							path: "/sy/tw"
						});
					});
			}
		}
	};
</script>

<style>

</style>