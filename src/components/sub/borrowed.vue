<template>
  <div class="borrowedsbox">
    <div class="top">
      <img style="width:25px;height:25px" src="http://127.0.0.1:3000/img/manager/index.png" alt>
      <span style="color:#528CC6;padding-left:5px;">首页</span>
      <span style="padding:0 15px;">>></span>
      <span>借阅记录列表</span>
      <input
        class="search"
        name="searchkey"
        v-model="searchkey"
        type="text"
        placeholder="读者学号"
      />
      <span>
        <button @click="search">搜索</button>
      </span>
    </div>
    <div class="bottom">
        <table>
            <thead>
                <tr>
                    <th>编号</th>
                    <th>书名</th>
                    <th>借阅日期</th>
                    <th>预计归还日期</th>
                    <th>归还日期</th>
                    <th>管理员信息</th>
                    <th>学号</th>
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
                    <td>{{item.uid}}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        searchkey:'',
        list:[]
    };
  },
  methods: {
      search(){
          var url = "http://127.0.0.1:3000/BorrowSearch?key="+this.searchkey;
          this.axios.get(url).then(result=>{
              this.list = result.data.data;
          })
      },
      getlist(){
          var url = "http://127.0.0.1:3000/allBorrow"
          this.axios.get(url).then(result=>{
              this.list = result.data.data;
          })
      }
  },
  created() {
      this.getlist();
  },
};
</script>
<style scoped>
.search {
  width: 25%;
  margin-left: 400px;
}
span > button {
  margin-top: 5px;
  background: #40c040;
  margin-left: -5px;
  height: 40px;
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

table tbody tr{
    text-align: center;
    line-height: 60px;
    height: 60px;;
}

table th{
    width: 960px;
    background: #73b1e0;
    height: 60px;
    line-height: 60px;
    color: white;
    font-weight: normal;
    text-align: center;
}
table tr:nth-child(even) {
  background: #f4f4f4;
}
</style>
