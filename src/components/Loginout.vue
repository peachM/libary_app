<template>
    <div>
        <h1>退出成功！</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    created() {
        // 1. 清除 sessionStorage uname
        sessionStorage.removeItem("uid")
        // 2. 3s后跳转到 index.html
        alert("退出登录,3s后回到首页");
        setTimeout(function () {
            this.$router.push('/');
        }, 1500);
    },
}
</script>
<style scoped>

</style>
