<template>
	<div id="dl">
		<div class="bj">
			<div></div>

		</div>
		<div class="dldb">
			<p>Copyright © www.AxureUX.com, All Rights Reserved.</p>
			<p>助你快速打造友好美观的交互原型</p>

		</div>
		<div class="Inp">
			<div>
				<div class="dlt"><img src="../assets/dl2.png"></div>
				<h2>客户关系管理系统</h2>
				<h4> Customer Relationship Management</h4>
				<div class="demo-input-suffix">
					<div class="p">
						<el-input placeholder="请输入用户名称" v-model="username" id="db1">
							<i slot="prefix" class="el-input__icon el-icon-user-solid" id="dlt"></i>
						</el-input>
					</div>
					<div class="p">
						<el-input placeholder="请输入登录密码" v-model="password" type='password' id="db2">
							<i slot="prefix" class="el-input__icon el-icon-key" id="dlt"></i>
						</el-input>
					</div>
					<div class="p" style="position: relative; padding-top: 20px;">
						<el-button class="loginBtn" :class="{'loginBtnDH' : loginBol}" type="success" @click='login()' id="db3">登录</el-button>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import {
		Button,
		Input,
		Notification
	} from 'element-ui'

	export default {
		components: {
			[Button.name]: Button,
			[Input.name]: Input
		},
		data() {
			return {
				
				username: '',
				password: '',
				bgActive: 0,
				loginBol: false,
				userList: [{
					username: '17347515092',
					password: '123123'
				}, {
					username: '17674017907',
					password: '123123'
				},{
					username: '1',
					password: '1'
				}]
			}
		},
		computed: {
			loginBg() {
				return {
					'login-bg1': this.bgActive == 0,
					'login-bg2': this.bgActive == 1,
					'login-bg3': this.bgActive == 2
				}
			}
		},
		methods: {
			bgReplace() {
				this.bgActive++
					if(this.bgActive > 2) {
						this.bgActive = 0
					}
			},
			DHTime() {
				this.loginBol = true;
				setTimeout(() => {
					this.loginBol = false
				}, 1000)
			},
			login() {
				axios.post('http://139.9.169.87:8081/examsystem/login?username=admin&password=admin')
				.then(zxc=>{
					console.log(zxc)	
					this.$router.push({
						path:'/sy'
					})
				})

			}
		}
	}
</script>

<style>
	* {
		margin: 0px;
		padding: 0px;
	}
	
	.bj>div {
		background: url(../assets/dl1.jpg) no-repeat center;
		background-size: 1920px 947px;
		width: 1920px;
		height: 947px;
	}
	
	.dldb {
		position: absolute;
		margin: auto;
		top: 876px;
		width: 1920px;
		height: 50px;
	}
	
	.dldb>p {
		font-family: '微软雅黑';
		font-weight: 400;
		font-style: normal;
		font-size: 12px;
		color: #CCCCCC;
		line-height: 24px;
	}
	
	.Inp {
		border-width: 0px;
		position: absolute;
		left: 700px;
		top: 170px;
		width: 500px;
		height: 580px;
		font-family: '微软雅黑 Bold', '微软雅黑';
		font-weight: 700;
		font-style: normal;
		font-size: 16px;
		color: #999999;
		text-align: left;
		line-height: 20px;
		background: white;
	}
	
	.p {
		margin-bottom: 50px;
		
	}
	
	.loginBtn {
		position: absolute;
		background: #0079FE;
		border: 1px solid #0079FE;
		left: 0;
		width: 100%;
	}
	
	h2 {
		font-family: '微软雅黑 Bold', '微软雅黑';
		font-size: 36px;
		font-weight: 700;
		color: #0079FE;
		text-align: center;
		line-height: 42px;
		text-align: center;
	}
	
	h4 {
		
		font-weight: 700;
		color: #0079FE;
		text-align: center;
		line-height: 42px;
		text-align: center;
		padding-bottom: 30px;
	}
	
	.dlt {
		padding-top: 60px;
		padding-left: 200px;
		padding-bottom: 30px;
	}
	.demo-input-suffix{
		position: absolute;
		left: 60px;
		
		width: 381px;
		height: 150px;
	}
	
	#db1{
		position: absolute;
		
		font-size: 14px;
		width: 381px;
		height: 51px;
		
	}
	
	#db2 {
		position: absolute;
		font-size: 14px;
		width: 381px;
		height: 51px;
		margin-bottom: 20px;
	}
	#db3 {
		position: absolute;
		background: #0079FE;
		font-size: 14px;
		width: 381px;
		height: 51px;
		border: 1px solid #0079FE;
	}
	#dlt {
    height: 100%;
    width: 25px;
    text-align: center;
    transition: all .3s;
    line-height: 53px;
}
</style>