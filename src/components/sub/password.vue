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
          <label>新密码</label>
          <input type="password" name="newpwd" v-model="newpwd">
        </div>
        <div>
          <label>确认新密码</label>
          <input type="password" name="renew" @focus="getFocus" @blur="myBlur" v-model="renew">
          <span class="myfade" :class="spanClass">{{text}}</span>
        </div>
        <div class="sure">
          <button @click="updataInfo">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      spanClass: {
        vali_fail: false,
        vali_success: false
      },
      newpwd: "",
      renew: "",
      text: ""
    };
  },
  methods: {
    updataInfo() {
      var postDate = qs.stringify({
        pswd:this.renew
      })
      var url = "http://127.0.0.1:3000/password";
      this.axios.get(url,postDate).then(result=>{
        if(result.data.code==1){
            alert("修改成功！")
          }else{
            alert("修改失败！") 
          }
      })
      this.renew="";
      this.newpwd=""
    },
    getFocus() {
      // 当获得焦点时自动触发，清空span的内容和样式
      this.text = "";
      this.spanClass.vali_success = false;
      this.spanClass.vali_fail = false;
    },
    myBlur() {
      // 当失去焦点时自动触发，验证文本框中的内容
      // 如果验证通过，
      if (this.newpwd == this.renew) {
        this.text = "密码正确";
        this.spanClass.vali_success = true;
        this.spanClass.vali_fail = false;
      } else if (this.renew == "") {
        this.text = "密码不能为空";
        this.spanClass.vali_fail = true;
        this.spanClass.vali_success = false;
        this.renew=""
      } else {
        // 否则修改span的内容和样式为错误的样式
        this.text = "两次密码不一样";
        this.spanClass.vali_fail = true;
        this.spanClass.vali_success = false;
        this.renew=""
      }
    }
  }
};
</script>
<style scoped>
.myfade {
  margin-left: 5px;
  display: none;
}

.vali_success,
.vali_fail {
  font-size: 12px;
  padding: 5px 10px;
  display: inline-block;
}

.vali_success {
  background: green;
  color: lightGreen;
}

.vali_fail {
  background: red;
  color: pink;
}
.sure {
  padding: 45px 80px 0 0;
  text-align: right;
}
label {
  display: inline-block;
  width: 100px;
  text-align: right;
  margin-right: 50px;
}
.inner {
  /* background: #fff; */
  width: 750px;
  height: 400px;
  border: 1px solid #ccc;
  padding: 80px;
  border-radius: 25px;
}
.inner input {
  width: 55%;
}
.top {
  height: 50px;
  line-height: 50px;
  background: #e9edf1;
  margin-bottom: 50px;
}
span {
  color: rgb(162, 162, 196);
  font-size: 16px;
}
</style>
