<template>
  <div>
    <div class="head">
      <div class="banner">
        <!-- 顶部-->
        <!-- logo-->
        <div class="logo">
          <img src="img/logo.png" alt>
        </div>
        <!-- 右边登录框 -->
        <div class="r_aside">
          <div class="help">
            <a href="javascript:;">
              <p align="right">帮助中心</p>
            </a>
          </div>
          <div class="r_center">
            <div class="login_top">
              <span>图书馆登录</span>
              <a @click="jumppswd" href="#">
                <span>密码说明</span>
              </a>
            </div>

            <hr>
            <form action="#">
              <input class="yym" type="text" name="uid" v-model="uid" placeholder="用户名">
              <input class="mm" type="password" name="upwd" v-model="upwd" placeholder="密码">
              <div class="ckbx">
                <p>
                  <a @click.prevent="jumpManagerlogin">管理登录页</a>
                </p>
                <p>
                  <a href="#">修改密码</a>
                </p>
              </div>
              <button class="btn btn-primary w-100 border-0 pt-2 pb-2" @click="butLogin">登录</button>
            </form>
          </div>
        </div>
        <!--foot-->
        <div class="foot">
          <p>武昌工学院图书馆. &copy; Copyright 2000 - 2018</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uid: "",
      upwd: ""
    };
  },
  methods: {
    jumpManagerlogin() {
      this.$router.push("/Managerlogin");
    },
    jumppswd() {
      this.$router.push("/pswdintro");
    },
    butLogin() {
      // 1.获取用户输入用户名和密码
      console.log(this.uid + "-" + this.upwd);
      // 2. 验证不能为空
      var reg = /^\d{6}$/i;
      if (!reg.test(this.uid)) {
        alert("用户名格式不正确，请检查！");
        return;
      }
      var url =
        "http://127.0.0.1:3000/Login?uid=" + this.uid + "&upwd=" + this.upwd;
      this.axios.get(url).then(result => {
        console.log(result.data.code);
        if (result.data.code == 1) {
          sessionStorage.setItem("uid", this.uid);
              this.$router.push("/");
        } else {
          alert("用户名或密码有误！");
          this.$router.push("/Login");
          this.upwd = "";
        }
      });
    }
  }
};
</script>
<style scoped>
.login_top {
  margin-bottom: 15px;
}
* {
  margin: 0;
  padding: 0;
}
.banner {
  position: relative;
  background: url("http://127.0.0.1:3000/img/login/login.jpg") no-repeat top;
  background-size: cover;
  min-height: 800px;
}
input.yym {
  background: url("http://127.0.0.1:3000/img/login/add.png") no-repeat 5% center;
  background-size: 24px;
  padding-left: 40px;
  margin-top: 20px;
}
input.mm {
  background: url("http://127.0.0.1:3000/img/login/lock.png") no-repeat 5%
    center;
  background-size: 24px;
  padding-left: 40px;
}
/* a{
    color: #ccc;
    text-decoration: none !important;
} */
a:hover {
  color: skyblue;
  cursor: pointer;
}

.r_aside {
  position: absolute;
  top: 0;
  right: 0;
  width: 36%;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  background-size: cover;
  background-position: right bottom;
  /*transition: width 0.3s ease-out;*/
}
/*logo*/
.logo img {
  position: absolute;
  height: 150px;
  margin-left: 50px;
}
/* 右边登录框*/
.help a {
  position: absolute;
  left: 23%;
  top: 40px;
  width: 54%;
  font-size: 13px;
  line-height: 36px;
  color: #d2d8e7;
}
.r_center {
  position: absolute;
  top: 30%;
  left: 23%;
  width: 58%;
  background: #fff;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 4px;
  color: #aaa;
}

.r_center p {
  color: black;
  font-weight: bold;
}

input::-webkit-input-placeholder {
  color: #aaa;
}

input {
  padding: 0 0 0 30px;
  border: 0;
  outline: none;
}

.r_center > div:first-child {
  display: flex;
  justify-content: space-between;
}
.r_center > div:first-child > span,
.r_center > div:first-child > a {
  display: inline-block;
}

.r_center .ckbx {
  margin: 10px 2px 15px 2px;
  display: flex;
  justify-content: space-between;
}
.ckbx p {
  display: inline;
}
.r_center .ckbx > p a {
  color: skyblue;
  font-size: 16px;
  font-weight: normal;
}
.ckbx p a:hover {
  /* text-decoration: none; */
  cursor: pointer;
}

div.foot {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
}
</style>

