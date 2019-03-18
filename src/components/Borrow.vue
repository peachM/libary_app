<template>
  <div class="borrowbox">
    <header>
        <div class="top">
            <div class="mycontainer">
              <div class="navbar navbar-expand-md navbg navbar-dark">
              <!-- 小屏幕最右侧的小按钮-->
              <button class="btn btn-warning border-0 navbar-toggler" data-toggle="collapse"  data-target="#content">
                  <span class="navbar-toggler-icon"></span></button>
              <!-- 导航栏中的菜单，小屏幕隐藏（垂直显示），大屏幕横向现实-->
              <div class="collapse navbar-collapse" id="content">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#">首页</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">借阅</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">资源</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">新闻</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">新生须知</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">关于我们</a></li>
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
                        <td v-if="item"><button>归还图书</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            list:[]
        }
    },
    created() {
        this.getdate();
    },
    methods: {
        getdate(){
          var uid = sessionStorage.getItem('uid') 
          var url = "http://127.0.0.1:3000/getBorrow?uid="+uid;
          this.axios.get(url).then(result => {   
              this.list = result.data.data;                   
            // console.log(result);  
          })
        }
    },
};
</script>
<style scoped>
.navbar-toggler {
    margin: 0 auto;
}
.borrow{
    text-align: center;
    margin: 40px auto;
}
table tbody tr{
    text-align: center;
    line-height: 60px;
    height: 60px;;
}
table tbody>tr>td:last-child{
    padding: 5px 0;
    text-align: center;
}
.borrow h1{
    color: #C7551C;
}
.borrow table{
    margin-top: 30px;
    font-size: 20px;
}
.borrow table th{
    width: 960px;
    background:#ddd;
    height: 60px;
    line-height: 60px;
    color: white;
    font-weight: normal;
}
table tr:nth-child(even) {
  background: #f4f4f4;
}
header {
    background: url('http://127.0.0.1:3000/img/index/books.jpg') no-repeat top center;
    background-size: cover;
    min-height: 400px;
}
.mycontainer{
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

.navbg ul>li {
    width: 17%;
    padding: 8px;
}

.navbg ul>li:hover {
    background: #A0431B;
}
</style>
