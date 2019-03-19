<template>
  <div class="advisebox">
    <header>
      <div class="top">
        <div class="mycontainer">
          <div class="navbar navbar-expand-md navbg navbar-dark">
            <!-- 小屏幕最右侧的小按钮-->
            <button
              class="btn btn-warning border-0 navbar-toggler"
              data-toggle="collapse"
              data-target="#content"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <!-- 导航栏中的菜单，小屏幕隐藏（垂直显示），大屏幕横向现实-->
            <div class="collapse navbar-collapse" id="content">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a @click="jumpIndex" class="nav-link">首页</a>
                </li>
                <li class="nav-item">
                  <a @click="jumpHot" class="nav-link">图书列表</a>
                </li>
                <li class="nav-item">
                  <a @click="jumpBorrow" class="nav-link">我的借阅</a>
                </li>
                <li class="nav-item">
                  <a @click="jumpAdvise" class="nav-link" href="#">提出意见</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">新生须知</a>
                </li>
                <li class="nav-item">
                  <a @click="jumpIntro" class="nav-link">本馆简介</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="mycontainer">
      <div class="title">
        <h1>提出意见</h1>
        <textarea name="advise" v-model="advise" cols="28" rows="10"></textarea>
      </div>
      <div class="musubmit">
        <el-button type="warning" @click="submit">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
        data:new Date(),
        advise:''
    };
  },
  methods: {
    /* 中国标准时间转 年月日 */
    parseTime(str){
      if ((str + "").indexOf("-") != -1) {
        str = str.replace(new RegExp(/-/gm), "/");
      }
      let d = new Date(str);
      let newDateYear = d.getFullYear();
      let newDateMonth = d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
      let newDateDay = d.getDate() + "" < 10 ? "0" + d.getDate() + "" : d.getDate() + "";
      return newDateYear + "-" + newDateMonth + "-" + newDateDay;
    },
    submit(){          
        var content = this.advise;
        var time = this.parseTime(this.data);
        var uid = sessionStorage.getItem('uid');
        // console.log(content,uid,time);
        var postData = qs.stringify({
            uid:uid,
            content:content,
            time:time
        });
        var url = "http://127.0.0.1:3000/Reader?uid="+uid;
        url+="&content="+content;
        url+="&time="+time;
        this.axios.post(url,postData).then(result => {
          console.log(result.data);
          if(result.data.code==1){
              alert("添加成功！");
            }else{
              alert("请登录");
            }
            this.advise='';
        });
    },
    jumpAdvise() {
      this.$router.push("/advise");
    },
    jumpIntro() {
      this.$router.push("/introduction");
    },
    jumpHot() {
      this.$router.push("/Hotbook");
    },
    jumpBorrow() {
      this.$router.push("/Borrow");
    },
    jumpIndex(){
        this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.musubmit {
  text-align: right;
  padding: 0 15px;
  margin-bottom: 50px;
}
.el-button--warning {
  font-size: 16px;
}
textarea {
  border: 1px solid #c7551c;
  margin: 20px 0;
}
.title {
  margin: 85px 0 10px 30px;
}
.title h1 {
  color: #c7551c;
  font-size: 40px;
  font-weight: normal !important;
  font-family: "宋体";
}
.mycontainer {
  width: 960px;
  margin: 0 auto;
}
.navbar-toggler {
  margin: 0 auto;
}
header {
  background: url("http://127.0.0.1:3000/img/index/books.jpg") no-repeat top
    center;
  background-size: cover;
  min-height: 400px;
}
/* 导航栏 */
.navbg {
  background: #ff7f38;
  padding: 0px;
}
.navbar {
  text-align: center;
  padding: 0 !important;
}
.navbg ul {
  width: 100%;
}

.navbg ul > li {
  width: 17%;
  padding: 8px;
}

.navbg ul > li:hover {
  background: #a0431b;
}
</style>
