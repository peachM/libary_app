<template>
  <div class="hotbookbox">
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
      <div class="container">
        <div class="left">
          <img class="nbmylogo" src="img/logo.png" alt>
          <span>· 馆藏浏览</span>
        </div>
        <div class="right">
          <router-link to="/Bulletin">新书通报</router-link>
          <router-link to="/HotBook">馆藏浏览</router-link>
          <router-link to="/">图书馆首页</router-link>
        </div>
      </div>
    </div>

    <!-- 图片部分-->
    <div class="xxbg" :style="'background-image:url(img/bjbg.png)'">
      <div class="container">
        <div class="book">
          <span>新书驾到</span>
        </div>
        <div class="row">
          <div class="col col-lg-8 col-md-12 col-sm-12">
            <div class="input">
              <input type="text" name="search" v-model="search" style="width:100%;height:55px">
            </div>
          </div>
          <div class="col col-lg-2 col-md-none col-sm-none">
            <div class="input">
              <select>
                <option value="book">书名</option>
                <option value="author">著者</option>
                <option value="isbn">ISBN</option>
                <option value="press">出版社</option>
              </select>
            </div>
          </div>
          <div class="col col-lg-2 col-md-12 col-sm-12">
            <div class="input">
              <button @click="bookSearch">搜索</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--内容部分-->
    <div class="mian">
      <div class="mycontainer mt-5">
        <div class="title">热门浏览排行榜</div>
        <div class="searchnav">
          <a href="#">热门浏览前100</a>
          <a href="#">中文</a>
          <a href="#">英文</a>
        </div>

        <div class="contents">
          <!-- 第一本书 -->
          <div class="content">
            <div class="nbook" v-for="item in list" :key="item.bid">
              <div class="bookImg">
                <img style="width:152px" :src="'http://127.0.0.1:3000/'+item.pic" @click="jumpdetail"
                  :data-bid="item.bid">
              </div>
              <div class="bookCont">
                <ul>
                  <li>{{item.title}}</li>
                  <li>{{item.author}}</li>
                  <li>{{item.press}}</li>
                  <li>{{item.searchid}}</li>
                  <li>ISBN：{{item.ISBN}}</li>
                  <li>浏览次数：76</li>
                  <li>
                    <button @click="borrow(item.title)">我要借阅</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="readMore" @click="getMore">加载更多...</div>
      </div>
    </div>

    <!-- 底部 -->
    <footer>
      <div class="container">
        <div class="foot">
          <img height="100px" src="img/logo.png" alt>
          <p>版权所有 &copy; 2019 - 2020 武昌工学院</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data: function() {
    return {
      pno: 0,
      pageSize: 10,
      list: [],
      search: "",
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
      value7: "",
      start: "",
      end: "",
      nowtitle:"",
      state:1
    };
  },
  created() {
    this.getMore();
    this.bookSearch();
  },
  methods: {
    jumpdetail(e) {
      var bid = e.target.dataset.bid;
      this.$router.push("/AllDetail?bid=" + bid);
    },
    borrow(title){
      this.isborrow = true;
      this.nowtitle = title;
    },
    /* 中国标准时间转 年月日 */
    parseTime(str) {
      if ((str + "").indexOf("-") != -1) {
        str = str.replace(new RegExp(/-/gm), "/");
      }
      let d = new Date(str);
      let newDateYear = d.getFullYear();
      let newDateMonth = d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
      let newDateDay = d.getDate() + "" < 10 ? "0" + d.getDate() + "" : d.getDate() + "";
      return newDateYear + "-" + newDateMonth + "-" + newDateDay;
    },
    yes() {
      this.start = this.parseTime(this.value7[0]);      
      this.end = this.parseTime(this.value7[1]);
      var uid = sessionStorage.getItem('uid');  
      var postData = qs.stringify({
        bookname: this.nowtitle,
        borrowdate: this.start,
        Ereturndate: this.end,
      });
      var url = "http://127.0.0.1:3000/Borrow?bookname="+this.nowtitle;
      url+="&borrowdate="+this.start;
      url+="&Ereturndate="+this.end;
      url+="&uid="+uid;
      this.axios.post(url,postData).then(result => {
        console.log(result.data);
        if(uid){
            alert("添加成功！");
          }else{
            alert("登录后才能借阅哦！");
          }
      });
      this.isborrow = false;
    },
    no() {
      this.isborrow = false;
    },
    bookSearch() {
      var url = "http://127.0.0.1:3000/Search?key=" + this.search;
      this.axios.get(url).then(result => {
        this.list = result.data.data;
      });
    },
/*     getHotbook(){
      var url = "http://127.0.0.1:3000/Hotbook";
      this.axios.get(url).then(result=>{
        this.list = result.data.data;
      })
    }, */
    getMore() {
      this.pno++;
      var url = "http://127.0.0.1:3000/Hotbook";
      url += "?pno=" + this.pno;
      url += "&pageSize=" + this.pageSize;
      this.axios.get(url).then(result => {
        var rows = this.list.concat(result.data.data);
        this.list = rows;
        console.log(this.list)
      });
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
.hotbookbox {
  position: relative;
}
.borrow {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;
}
.readMore {
  text-align: center;
  font-size: 25px;
  line-height: 50px;
  width: 100%;
  height: 50px;
  color: #333;
  margin-bottom: 30px;
}
body,
ul,
li {
  /*min-width: 1010px;*/
  margin: 0;
  padding: 0;
}
a,
a:hover {
  text-decoration: none;
  color: white;
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
.container > div.left > span {
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
/*div>ul>li>a:visited{*/
/*color: #ff7f38;*/
/*}*/
div.xxbg {
  height: 280px;
  background: #ff7f38;
}

div.book > span {
  display: inline-block;
  color: white;
  font-size: 28px;
  font-family: "楷体";
  margin-top: 80px;
}

div.input > select {
  display: inline-block;
  width: 145px;
  height: 53px;
  font-size: 20px;
}
div.input button {
  display: inline-block;
  width: 100px;
  height: 48px;
  color: white;
  background: skyblue;
  font-size: 18px;
}

div.bookImg,
div.bookCont { 
  margin-right: 20px;
}

div ul li:first-child{

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
  margin-left: 20px;
  font-size: 18px;
}

div.contents {
  min-height: 1200px;
  overflow: hidden;
}

div.content {
  float: left;
  list-style: none;
  margin-right: 20px;
  margin-left: 20px;
}
div.nbook {
  display: inline-flex;
  width: 50%;
  padding-bottom: 30px;
  min-height: 235px;
  padding-right: 10px;
}
div.nbook a {
  display: block;
  color: #005b8c;
  font-size: 18px;
  margin-bottom: 14px;
}
div.nbook ul {
  margin: 0;
  list-style: none;
  display: inline-block;
}
div.nbook ul > li {
  margin: 0;
  font-size: 14px;
}
div.nbook ul > li > button {
  margin-top: 3px;
  background: #ff7f38;
  height: 32px;
  border: 0;
  color: white;
}

footer {
  width: 100%;
  height: 150px;
  background: #242d3c;
  text-align: center;
}
footer p {
  color: white;
}
</style>
