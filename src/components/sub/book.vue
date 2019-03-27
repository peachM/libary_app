<template>
  <div class="bookbox">
    <div class="top">
      <img style="width:25px;height:25px" src="http://127.0.0.1:3000/img/manager/index.png" alt>
      <span style="color:#528CC6;padding-left:5px;">首页</span>
      <span style="padding:0 15px;">>></span>
      <span>图书分类列表</span>
      <input class="search" type="text" placeholder="请输入书名或作者"><span><button>搜索</button></span>
    </div>
    <div class="bottom">
      <button class="add">+ 新增</button>
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>书名</th>
            <th>类型</th>
            <th>图片</th>
            <th>ISBN</th>
            <th>作者</th>
            <th>出版社</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of list" :key="item.id">
            <td width="80px">{{item.bid}}</td>
            <td width="100px">{{item.title}}</td>
            <td width="80px">{{item.classify}}</td>
            <td>
              <img width="100px" :src="'http://127.0.0.1:3000/'+item.pic">
            </td>
            <td width="120px">{{item.ISBN}}</td>
            <td width="100px">{{item.author}}</td>
            <td width="100px">{{item.press}}</td>
            <td width="80px">{{item.state}}</td>
            <td>
              <component-box :bid="item.bid" :state="item.state"></component-box>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="readMore" @click="getMore">加载更多....</div>
    </div>
  </div>
</template>
<script>
import qs from "qs";
import component from "../template/component.vue"
export default {
  components:{
    "component-box":component
  },
  data() {
    return {
      list: [],
      pno:0,
      pageSize:10,
    };
  },
  created() {
    this.getMore();
    this.getbooks();
  },
  methods: {
    getMore(){
      this.pno++;
      var url = "http://127.0.0.1:3000";
      url += "/Allbookinfo?pno=" + this.pno;
      url += "&pageSize=" + this.pageSize;
      this.axios.get(url).then(result => {
        var rows = this.list.concat(result.data.data);
        this.list = rows;
      });
    },
    getbooks() {
      // 1.发送ajax请求给服务器
      var url = "http://127.0.0.1:3000/Allbookinfo";
      this.axios.get(url).then(result => {
        this.list = result.data.data;
        // console.log(result);
      });
    },
  }
};
</script>
<style scoped>
.search{
    width:25%;
    margin-left: 460px;
}
span>button{
    margin-top: 5px;
    background: #40C040;
    margin-left:-5px;
    height: 40px;
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
.bottom {
  background: #fff;
  width: 1000px;
  /* height: 1000px; */
  padding: 30px;
}
.add {
  border: 0;
  color: #fff;
  background: #40c040;
  border-radius: 0;
}
.top {
  height: 50px;
  line-height: 50px;
  background: #e9edf1;
}
span {
  color: rgb(162, 162, 196);
  font-size: 16px;
}
table{
  margin-top: 20px;
}
table th {
  height: 60px;
}
table th,
td {
  text-align: center;
}
table td {
  font-size: 15px;
}
table tr:nth-child(even) {
  background: #f4f4f4;
}
table td:nth-child(even) {
  color: #c00;
}
table th {
  background: #8fbcdf;
  color: #fff;
}
td > button {
  margin-top: 10px;
  margin-right: 5px;
}
</style>
