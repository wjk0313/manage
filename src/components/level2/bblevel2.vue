<template>
<div>
    <el-menu class="el-menu-vertical-demo" background-color="#FCFCFC" text-color="#757981" active-text-color="#1f89fe">
        <div class="title1">
            <i class="el-icon-notebook-2"></i>&nbsp;
            <span>审批管理</span>
        </div>
        <el-menu-item index="1" class="juzhong">
            <span><router-link to="khgl">订单审批</router-link></span>
        </el-menu-item>
        <el-menu-item index="2" class="juzhong">
            <span slot="title"><router-link to="khgl">回款审批</router-link></span>
        </el-menu-item>
        <el-menu-item index="3" class="juzhong">
            <span slot="title"><router-link to="khgl">退款审批</router-link></span>
        </el-menu-item>
        <el-menu-item index="4" class="juzhong">
            <span slot="title"><router-link to="khgl">请假审批</router-link></span>
        </el-menu-item>
        
    </el-menu>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.is-active {
    background-color: white !important;
}

.title1 {
    color: #757981;
    background-color: whitesmoke;
    text-align: center;
    padding: 20px 0;
}

.juzhong {
    text-align: center;
    border-bottom: 1px solid gainsboro;
}
</style>
