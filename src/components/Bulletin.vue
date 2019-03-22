<template>
  <div class="book_bulletin">
    <!--导航栏部分-->
    <div class="nb_top">
      <div class="mycontainer">
        <div class="left">
          <img class="nbmylogo" src="img/logo.png" alt>
          <span>· 新书通报</span>
        </div>
        <div class="right">
          <router-link to="/Bulletin">新手通报</router-link>
          <router-link to="/HotBook">热门浏览</router-link>
          <router-link to="/">图书馆首页</router-link>
        </div>
      </div>
    </div>

    <!-- 图片部分-->
    <div class="xxbg">
      <div class="mycontainer">
        <!--           
        <div class="book">
          <span>新书驾到</span>
        </div>
      <div class="input-flex">
          <input class="input" type="text" style="width:750px;height:55px">
          <div class="input">
            <select>
              <option value>书名</option>
              <option value>著者</option>
              <option value>ISBN</option>
              <option value>出版社</option>
            </select>
          </div>
          <div class="input">
            <button>搜索</button>
          </div>
        </div>-->
        <div class="prev_next">
          <div class="prev">
            <img @click="prevbutton" src="http://127.0.0.1:3000/img/nbook/left.png" alt>
          </div>
          <!-- 轮播图 -->
          <div class="tempwrap">
            <!-- 轮播图 -->
            <div class="wrap" :style="styleObj2">
              <img
                v-for="item in mylist"
                :key="item.nid"
                :src="'http://127.0.0.1:3000/'+item.pic"
                @click="jumpdetail"
                :data-nid="item.nid"
              >
            </div>
            <!-- 左箭头 -->
            <!-- 右箭头 -->
            <div class="next">
              <img @click="nextbutton" src="http://127.0.0.1:3000/img/nbook/right.png" alt>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 内容部分 -->
    <div class="mycontainer">
      <!-- 左边分类浏览 -->
      <div class="browsing">
        <div class="browsing_title">分类浏览</div>
        <div class="browsing_label">
          <label>按月浏览</label>
          <select v-model="month">
            <option>all</option>
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
          </select>
          <button @click="monthbutton">按月浏览</button>
        </div>
        <div class="browsing_label">
          <label>按图书分类浏览</label>
          <select id="address" v-model="classify">
            <option disabled>请选择</option>
            <option>中文</option>
            <option>教育学</option>
            <option>经济科学</option>
            <option>英文</option>
            <option>计算机</option>
            <option>小说</option>
          </select>
          <button @click="classifybutton">按图书分类浏览</button>
        </div>
        <div class="browsing_detail">当前显示：馆址(二楼新书阅览室);</div>
        <div class="browing_order">
          排序方式：
          <span>上架时间</span>|
          <span>
            <a href="javascript:;">分类号</a>
          </span>|
          <span>
            <a href="javascript:;">题名</a>
          </span>|
          <span>
            <a href="javascript:;">作者</a>
          </span>|
          <span>
            <a href="javascript:;">关注热门程度</a>
          </span>
        </div>

        <!-- 所有新书列表 -->
        <div class="booklist">
          <ul>
            <li class="bookitem" v-for="item in list" :key="item.nid">
              <div class="book_img">
                <img
                  :src="'http://127.0.0.1:3000/'+item.pic"
                  @click="jumpdetail"
                  :data-nid="item.nid"
                >
              </div>
              <div class="book_intr">
                <a href="javascript;">{{item.title}}</a>
                <p>{{item.author}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 右边热门关注图书榜 -->
      <div class="hot_follow">
        <div class="follow_title">
          <a href="javascript:;">热门关注图书榜</a>
        </div>
        <div class="contents">
          <!-- 第一本书 -->
          <div class="content" v-for="tmp in row" :key="tmp.id">
            <div class="bookimg">
              <img :src="'http://127.0.0.1:3000/'+tmp.pic">
            </div>
            <div class="nbook">
              <ul>
                <li>
                  <a href="javascript:;">{{tmp.title}}</a>
                </li>
                <li>{{tmp.author}}</li>
                <li>浏览次数：76</li>
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
      pno: 0,
      pageSize: 6,
      list: [],
      mylist:[],
      row: [],
      styleObj2: {},
      count: 0,
      month: "all",
      classify:'请选择'
    };
  },
  methods: {
    classifybutton(){
      console.log(this.classify)
      var data = qs.stringify({
        key: this.classify
      })
      var url = "http://127.0.0.1:3000/classifykey";
      this.axios.post(url, data).then(result=>{
        this.list = result.data.data;
      })
    },
    monthbutton() {
      if(this.month=='all'){
        this.month='';
      }
      var url = "http://127.0.0.1:3000/month?key="+this.month
      this.axios.get(url).then(result=>{
        this.list = result.data.data;
      })
    },
    prevbutton() {
      this.styleObj2 = { "margin-left": "0px" };
      this.count = 0;
    },
    nextbutton() {
      if (this.count <= 12) {
        this.count++;
        this.styleObj2 = { "margin-left": -215 * this.count + "px" };
      }
      if (this.count > 12) {
        this.count = 0;
      }
    },
    jumpdetail(e) {
      var nid = e.target.dataset.nid;
      this.$router.push("/BookDetail?nid=" + nid);
    },
    newbooks() {
      // 1.发送ajax请求给服务器
      var url = "http://127.0.0.1:3000/Newbook";
      this.axios.get(url).then(result => {
        this.list = result.data.data;
        // console.log(result);
      });
    },
    lunboList() {
      // 1.发送ajax请求给服务器
      var url = "http://127.0.0.1:3000/Newbook";
      this.axios.get(url).then(result => {
        this.mylist = result.data.data;
        // console.log(result);
      });
    },
    hotbook() {
      this.pno++;
      var url = "http://127.0.0.1:3000";
      url += "/Hotbook?pno=" + this.pno;
      url += "&pageSize=" + this.pageSize;
      this.axios.get(url).then(result => {
        this.row = result.data.data;
      });
    }
  },
  created() {
    this.newbooks();
    this.hotbook();
    this.lunboList();
  }
};
</script>
<style scoped>
body,
ul,
li {
  /*min-width: 1010px;*/
  margin: 0;
  padding: 0;
  list-style: none;
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
div .nbmylogo {
  position: absolute;
  top: -11px;
  height: 100px;
}
.mycontainer > div.left > span {
  display: inline-block;
  color: white;
  font-size: 23px;
  font-family: "楷体";
  margin-left: 295px;
  margin-top: 25px;
}

div.right {
  float: right;
}
div.right > a {
  float: left;
  color: white;
  list-style: none;
  margin: 35px 10px 0 20px;
}
div.right > a:hover {
  color: #ff7f38;
}
div > ul > li > a:visited {
  color: #ff7f38;
}
div.xxbg {
  height: 450px;
  background: url("http://127.0.0.1:3000/img/bjbg.png") no-repeat scroll 0 0
    #ff7f38;
}

/* div.book > span {
  display: inline-block;
  color: white;
  font-size: 28px;
  font-family: "楷体";
  margin-top: 80px;
} */

/* .input-flex {
  display: flex;
}
.input {
  margin-right: 30px;
}

.input select {
  display: inline-block;
  width: 150px;
  height: 55px;
  font-size: 20px;
  padding-left: 5px;
}
.input button {
  display: inline-block;
  width: 125px;
  height: 53px;
  color: white;
  background: skyblue;
  font-size: 18px;
} */
div.bookimg {
  float: left;
}

div.title {
  margin-top: 40px;
  margin-bottom: 32px;
  font-size: 26px;
  font-family: 黑体;
}
div.searchnav {
  border-bottom: 3px solid #a4a4a4;
  padding-bottom: 20px;
  margin-bottom: 30px;
}
div.searchnav > a {
  color: #005b8c;
  margin-right: 80px;
  margin-left: 30px;
  font-size: 18px;
}
.prev_next {
  position: relative;
  top: 80px;
}

.tempwrap {
  width: 855px;
  margin: 0 auto;
  overflow: hidden;
}
.wrap {
  width: 6000px;
  margin-left: -440px;
}
.wrap img {
  width: 195px;
  height: 293px;
  margin-right: 10px;
  margin-left: 10px;
}
.prev > img {
  position: absolute;
  left: 0;
  top: 130px;
  cursor: pointer;
}
.next > img {
  position: absolute;
  right: 0;
  top: 130px;
  cursor: pointer;
}

/* 内容部分 */
.browsing {
  float: left;
  width: 600px;
  padding-top: 12px;
}
.hot_follow {
  float: left;
  width: 255px;
  margin-left: 70px;
  padding-top: 12px;
}
.browsing_title {
  border-bottom: 1px solid #a4a4a4;
  font-family: "楷体";
  font-size: 18px;
  padding: 20px 0 5px 0;
}
.follow_title {
  border-bottom: 1px solid #a4a4a4;
  font-family: "楷体";
  font-size: 18px;
  padding: 20px 0 5px 0;
}
.browsing_label {
  color: #5f5f5f;
  display: float;
  margin: 10px 0;
}
label {
  width: 130px;
}
.browsing_label select {
  height: 42px;
  font-size: 14px;
  font-family: "Microsoft Yahei";
  color: #5f5f5f;
  width: 70px;
  border: 1px solid #ccc !important;
}
#address {
  width: 130px;
}
.browsing_label button {
  height: 43px;
  font-size: 16px;
  margin-left: 10px;
}
.browsing_detail {
  margin-top: 20px;
  font-size: 14px;
  font-family: "Microsoft Yahei";
  line-height: 35px;
  color: #e26b2f;
}
.browing_order {
  margin-top: 0px;
  text-align: right;
  font-size: 14px;
  font-family: "Microsoft Yahei";
  line-height: 35px;
  color: #5f5f5f;
  margin-bottom: 30px;
}
.browing_order span {
  margin: 0 8px;
  color: black;
}
.browing_order a:hover {
  background: #005b8c;
  color: #fff;
  font-weight: normal;
  text-decoration: none;
}
/* 图书列表 */
.bookitem {
  margin-right: 10px;
  margin-bottom: 10px;
  width: 140px;
  height: 205px;
  float: left;
}
.book_img img {
  width: 125px;
  height: 160px;
}
.book_intr {
  padding-left: 5px;
  font-size: 14px;
  font-family: "Microsoft Yahei";
  line-height: 20px;
  width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.book_intr p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 右边 */
div.content {
  float: left;
  list-style: none;
  margin-top: 20px;
}
div.nbook {
  float: left;
  width: 125px;
  padding-bottom: 30px;
  min-height: 174px;
}
div.nbook a {
  display: block;
  color: #005b8c;
  text-decoration: none;
}
.nbook a:hover {
  background: #005b8c;
  color: #fff;
  font-weight: normal;
}

div.nbook > ul {
  margin: 0;
  list-style: none;
  display: inline-block;
}
div.nbook ul > li {
  margin: 0;
  font-size: 14px;
  margin-bottom: 20px;
}
.bookimg img {
  width: 130px;
  height: 150px;
  margin: 0;
  padding: 0;
}
</style>
