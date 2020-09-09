<template>
<el-menu class="el-menu-vertical-demo" background-color="#FCFCFC" text-color="#757981" active-text-color="#1f89fe">
    <div class="title1">
        <i class="el-icon-notebook-2"></i>&nbsp;
        <span>工单管理</span>
    </div>
    <el-menu-item index="1" class="juzhong">
        <span><router-link to="khgl">全部工单</router-link></span>
    </el-menu-item>
    <el-menu-item index="2" class="juzhong">
        <span slot="title"><router-link to="khgl">我发起的</router-link></span>
    </el-menu-item>
    <el-menu-item index="3" class="juzhong">
        <span slot="title"><router-link to="khgl">我处理的</router-link></span>
    </el-menu-item>
    <el-menu-item index="4" class="juzhong">
        <span slot="title"><router-link to="khgl">抄送给我的</router-link></span>
    </el-menu-item>

</el-menu>
</template>






<script>
export default {

}
</script>

<style scoped>
.box {
    height: 752px;
    box-sizing: border-box;
    background-color: rgba(234, 237, 241, 1);
}

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
