<template>
  <div class="bookdetailbox">
    <div class="borrow" v-if="isborrow==true">
      <div class="inner">
        <div class="block">
          <div class="dete_top">
            <h3>当前书籍：{{nowtitle}}</h3>
            <span class="demonstration">请选择预计归还时间</span>
          </div>
          <el-date-picker
            v-model="value7"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2"
          ></el-date-picker>
        </div>
        <div class="datebutton">
          <el-button type="primary" @click="yes">确定</el-button>
          <el-button type="primary" @click="no">取消</el-button>
        </div>
      </div>
    </div>
    <!--导航栏部分-->
    <div class="nb_top">
      <div class="mycontainer">
        <div class="left">
          <img class="nbmylogo" src="http://127.0.0.1:3000/img/logo.png" alt>
          <span>· 新书通报</span>
        </div>
        <div class="right">
          <router-link to="/Bulletin">新手通报</router-link>
          <router-link to="/HotBook">热门浏览</router-link>
          <router-link to="/">图书馆首页</router-link>
        </div>
      </div>
    </div>
    <div class="mycontainer">
      <!-- 左边 新书 -->
      <div class="left_detail">
        <h1>{{detail.title}}</h1>
        <div class="detail_book">
          <img :src="'http://127.0.0.1:3000/'+detail.pic">
          <ul>
            <li>作者：{{detail.author}}</li>
            <li>出版社：{{detail.press}}</li>
            <li>页数：{{detail.page}}</li>
            <li>索书号：{{detail.searchid}}</li>
            <li>ISBN：{{detail.ISBN}}</li>
            <li>浏览次数：{{this.count}}</li>
            <li>
              <button @click="borrow(detail.title)">我要借阅</button>
            </li>
          </ul>
        </div>
        <div class="info">
          <div class="short_cont">
            <div class="detail_label">内容简介</div>
            <div>{{detail.content_intro}}</div>
            <div class="detail_label">作者简介</div>
            <div>{{detail.author_intro}}</div>
            <div class="detail_label">目录</div>
            <div></div>
          </div>
        </div>
      </div>

      <!-- 右边热门关注图书榜 -->
      <div class="hot_follow">
        <div class="follow_title">
          <a href="javascript:;">热门关注图书榜</a>
        </div>
        <div class="contents">
          <!-- 第一本书 -->
          <div class="content">
            <div class="bookimg">
              <img src="http://127.0.0.1:3000/img/book/yuejingdeliliang.png" alt>
            </div>
            <div class="newbook">
              <ul>
                <li>
                  <a href="javascript:;">越境的力量 历史与思想论集 盛嘉著</a>
                </li>
                <li>作者：盛嘉 著</li>
                <li>浏览次数：11</li>
              </ul>
            </div>
          </div>
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
      detail: {},
      nid: this.$route.query.nid,
      count: 0,
      isborrow: false,
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value7: ""
    };
  },
  created() {
    this.bookDetail();
  },
  methods: {
    borrow(title) {
      this.isborrow = true;
      this.nowtitle = title;
    },
    bookDetail() {
      var url = "http://127.0.0.1:3000/Bookdetail?nid=" + this.nid;
      this.axios.get(url).then(result => {
        this.detail = result.data.data[0];
      });
    },
    /* 中国标准时间转 年月日 */
    parseTime(str) {
      if ((str + "").indexOf("-") != -1) {
        str = str.replace(new RegExp(/-/gm), "/");
      }
      let d = new Date(str);
      let newDateYear = d.getFullYear();
      let newDateMonth =
        d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
      let newDateDay =
        d.getDate() + "" < 10 ? "0" + d.getDate() + "" : d.getDate() + "";
      return newDateYear + "-" + newDateMonth + "-" + newDateDay;
    },
    yes() {
      this.start = this.parseTime(this.value7[0]);
      this.end = this.parseTime(this.value7[1]);
      var uid = sessionStorage.getItem("uid");
      var postData = qs.stringify({
        bookname: this.nowtitle,
        borrowdate: this.start,
        Ereturndate: this.end
      });
      var url = "http://127.0.0.1:3000/Borrow?bookname=" + this.nowtitle;
      url += "&borrowdate=" + this.start;
      url += "&Ereturndate=" + this.end;
      url += "&uid=" + uid;
      this.axios.post(url, postData).then(result => {
        console.log(result.data);
        if (uid) {
          alert("添加成功！");
        } else {
          alert("登录后才能借阅哦！");
        }
      });
      this.isborrow = false;
    },
    no() {
      this.isborrow = false;
    }
  }
};
</script>
<style scoped>
.mycontainer{
  width: 1000px;
  margin: 0 auto; 
}
.el-date-editor--daterange.el-input,
.el-date-editor--daterange.el-input__inner,
.el-date-editor--timerange.el-input,
.el-date-editor--timerange.el-input__inner {
  width: 420px;
}
.datebutton {
  margin: 20px 30px;
}
.dete_top {
  margin-bottom: 30px;
}
.dete_top h3{
  margin-top: 15px;
  margin-bottom: 15px;
}
.inner {
  padding: 20px;
  width: 50%;
  margin: 20% 25%;
  background: #ff7f38;
  opacity: 1;
  text-align: center;
}
.bookdetailbox {
  position: relative;
}
.borrow {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;
}
body,
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.nb_top a,
.nb_top a:hover {
  text-decoration: none;
  color: white;
}
.mycontainer {
  width: 960px;
  margin: 0 auto;
}
.nb_top {
  position: relative;
  width: 100%;
  height: 80px;
  background: #242d3c;
}
div.left {
  float: left;
}
.nbmylogo {
  position: absolute;
  top: -11px;
  height: 100px;
}
.left > span {
  display: inline-block;
  color: white;
  font-size: 23px;
  font-family: "楷体";
  margin-left: 295px;
  margin-top: 25px;
}
.right {
  float: right;
}
.right > a {
  float: left;
  color: white;
  list-style: none;
  margin: 35px 10px 0 20px;
}
.right > a:hover {
  color: #ff7f38;
}
.follow_title {
  border-bottom: 1px solid #a4a4a4;
  font-family: "楷体";
  font-size: 18px;
  padding: 20px 0 5px 0;
}
.follow_title a {
  color: #005b8c !important;
  text-decoration: none;
}
/* 左边详情部分 */
.left_detail {
  float: left;
  width: 600px;
  padding-top: 12px;
}
.left_detail h1 {
  color: #005b8c;
  font-size: 24px;
  font-family: 宋体;
  padding: 22px 0;
}
.detail_book {
  float: left;
}
.detail_book img {
  float: left;
  width: 230px;
  height: 300px;
  margin-right: 20px;
  margin-bottom: 50px;
}
.detail_book ul {
  margin-top: 20px;
  float: left;
  list-style: none;
  padding-left: 0;
  line-height: 30px;
  min-height: 180px;
  font-size: 20px;
  font-family: 宋体;
  width: 350px;
}
.detail_book li > button {
  margin-top: 20px;
  background: #e26b2f;
  padding: 8px;
  color: white;
  border: 0;
}
.info {
  clear: both;
  border-top: 2px solid #e26b2f;
  margin-top: 50px;
  display: block;
}
.detail_label {
  font-size: 18px;
  color: #005b8c;
  padding-top: 32px;
  padding-bottom: 28px;
}
/* 右边热门浏览 */
.hot_follow {
  float: left;
  width: 255px;
  margin-left: 70px;
  padding-top: 12px;
}
.content {
  float: left;
  width: 255px;
  list-style: none;
  margin-top: 20px;
}
.newbook {
  float: left;
  font-size: 14px;
  font-family: "Microsoft Yahei";
  line-height: 20px;
  width: 125px;
}
.newbook a {
  display: block;
  color: #005b8c;
  text-decoration: none;
}
.nbook a:hover {
  background: #005b8c;
  color: #fff;
  font-weight: normal;
}
.newbook > ul {
  margin: 0;
  list-style: none;
  /* float: left; */
}
.newbook ul > li {
  margin: 0;
  font-size: 16px;
  margin-bottom: 20px;
}
.bookimg img {
  float: left;
  width: 125px;
  height: 160px;
}
</style>

