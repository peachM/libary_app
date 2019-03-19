<template>
  <div class="passwordbox">
    <div class="top">
      <img style="width:25px;height:25px" src="http://127.0.0.1:3000/img/manager/index.png" alt>
      <span style="color:#528CC6;padding-left:5px;">首页</span>
      <span style="padding:0 15px;">>></span>
      <span>管理员密码修改</span>
    </div>
    <div class="bottom">
        <div class="inner">
            <div>
                <label>原始密码：</label>
                <input type="text" name="init" v-model="init">
            </div>
            <div>
                <label>新密码</label>
                <input type="text" name="newpwd" v-model="newpwd">
            </div>
            <div>
                <label>确认新密码</label>
                <input type="text" name="renew" v-model="renew">
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        init:'',
        newpwd:'',
        renew:''
    };
  },
  methods: {
      
  },
};
</script>
<style scoped>
.top {
  height: 50px;
  line-height: 50px;
  background: #e9edf1;
}
span {
  color: rgb(162, 162, 196);
  font-size: 16px;
}
</style>
