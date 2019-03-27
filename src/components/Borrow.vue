<template>
  <div class="borrowbox">
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
                  <a @click="jumpAdvise" class="nav-link">提出意见</a>
                </li>
                <li class="nav-item">
                  <a @click="jumpnewStu" class="nav-link">新生须知</a>
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
      <div class="borrow">
        <h1>我的借阅记录</h1>
        <table>
          <thead>
            <tr>
              <th>序号</th>
              <th>图书名称</th>
              <th>借阅时间</th>
              <th>预计归还时间</th>
              <th>归还时间</th>
              <th>管理员消息</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item of list" :key="item.id">
              <td>{{item.id}}</td>
              <td>{{item.bookname}}</td>
              <td>{{item.borrowdate}}</td>
              <td>{{item.Ereturndate}}</td>
              <td>{{item.returndate}}</td>
              <td>{{item.Manmessage}}</td>
              <td v-if="item">
                <myreturn-box :id="item.id" :Ereturndate="item.Ereturndate" :returndate="item.returndate"></myreturn-box>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
import myreturn from './template/myreturn'
export default {
  components:{
    "myreturn-box":myreturn
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getdate();
  },
  methods: {
    jumpnewStu() {
      this.$router.push("/newstudent");
    },
    jumpAdvise() {
      this.$router.push("/advise");
    },
    jumpIndex() {
      this.$router.push("/");
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
    getdate() {
      var uid = sessionStorage.getItem("uid");
      console.log(uid);
      var url = "http://127.0.0.1:3000/getBorrow?uid=" + uid;
      this.axios.get(url).then(result => {
        this.list = result.data.data;
        // console.log(result);
      });
    }
  }
};
</script>
<style scoped>
.navbar-toggler {
  margin: 0 auto;
}
.borrow {
  text-align: center;
  margin: 40px auto;
}
table tbody tr {
  text-align: center;
  line-height: 60px;
  height: 60px;
}
table tbody > tr > td:last-child {
  padding: 5px 0;
  text-align: center;
}
.borrow h1 {
  color: #c7551c;
}
.borrow table {
  margin-top: 30px;
  font-size: 20px;
}
.borrow table th {
  width: 960px;
  background: #ddd;
  height: 60px;
  line-height: 60px;
  color: white;
  font-weight: normal;
}
table tr:nth-child(even) {
  background: #f4f4f4;
}
header {
  background: url("http://127.0.0.1:3000/img/index/books.jpg") no-repeat top
    center;
  background-size: cover;
  min-height: 400px;
}
.mycontainer {
  width: 960px;
  margin: 0 auto;
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
