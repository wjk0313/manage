<template>
<div>
    <el-collapse-transition name="el-fade-in-linear">
        <div v-if="type == null || type==1" class="box transition-box">
            <xtsy></xtsy>
        </div>
    </el-collapse-transition>

</div>
</template>

<script>
import xtsy from "./xtsy3";
export default {
    components: {
        xtsy,
        
    },
    props: ["type"],
    data() {
        return {};
    },
};
</script>

<style scoped>

</style>
