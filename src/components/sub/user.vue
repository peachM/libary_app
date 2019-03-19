<template>
  <div class="userbox">
    <div class="top">
      <img style="width:25px;height:25px" src="http://127.0.0.1:3000/img/manager/index.png" alt>
      <span style="color:#528CC6;padding-left:5px;">首页</span>
      <span style="padding:0 15px;">>></span>
      <span>用户列表</span>
      <input class="search" name="searchkey" v-model="searchkey" type="text" placeholder="请输入班级或者姓名">
      <span>
        <button @click="usersearch">搜索</button>
      </span>
    </div>
    <!-- 添加按钮 -->
    <div class="myadd" v-if="isadd == true">
      <div class="inner">
        <div class="head">新增用户</div>
        <form>
          <div>
            <label>* 学号</label>
            <input name="uid" v-model="uid" width="300px" type="text">
          </div>
          <div>
            <label>* 密码</label>
            <input name="upwd" v-model="upwd" width="300px" type="password">
          </div>
          <div>
            <label>* 姓名</label>
            <input name="name" v-model="name" width="300px" type="text">
          </div>
          <div>
            <label>* 性别</label>
            <input name="sex" v-model="sex" width="300px" type="text">
          </div>
          <div>
            <label>* 电话</label>
            <input name="tel" v-model="tel" width="300px" type="text">
          </div>
          <div>
            <label>* 院系</label>
            <input name="dept" v-model="dept" width="300px" type="text">
          </div>
          <div>
            <label>* 班级</label>
            <input name="uclass" v-model="uclass" width="300px" type="text">
          </div>
          <div>
            <button @click="sure">确定保存</button>
            <button @click="cansel">取消保存</button>
          </div>
        </form>
      </div>
    </div>

    <!-- 编辑按钮 -->
    <div class="myedit" v-if="isedit == true">
      <div class="inner">
        <div class="head">用户修改</div>
        <form>
          <div>
            <label>* 学号</label>
            <input name="uid" v-model="uid" width="300px" type="text" :readonly="isRead">
          </div>
          <div>
            <label>* 密码</label>
            <input name="upwd" v-model="upwd" width="300px" type="text">
          </div>
          <div>
            <label>* 姓名</label>
            <input name="name" v-model="name" width="300px" type="text">
          </div>
          <div>
            <label>* 电话</label>
            <input name="tel" v-model="tel" width="300px" type="text">
          </div>
          <div>
            <label>* 院系</label>
            <input name="dept" v-model="dept" width="300px" type="text">
          </div>
          <div>
            <label>* 班级</label>
            <input name="uclass" v-model="uclass" width="300px" type="text">
          </div>
          <div>
            <button @click="editsure">确定保存</button>
            <button @click="editcansel">取消保存</button>
          </div>
        </form>
      </div>
    </div>
    <div class="bottom">
      <button class="add" @click="addStudent">+ 新增</button>
      <table>
        <thead>
          <tr>
            <th>学号</th>
            <th>用户名</th>
            <th>密码</th>
            <th>性别</th>
            <th>电话</th>
            <th>院系</th>
            <th>班级</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) of list" :key="item.id">
            <td width="80px">{{item.uid}}</td>
            <td width="80px">{{item.name}}</td>
            <td width="100px">{{item.upwd}}</td>
            <td width="80px">{{item.sex}}</td>
            <td width="120px">{{item.tel}}</td>
            <td width="200px">{{item.dept}}</td>
            <td width="80px">{{item.uclass}}</td>
            <td>
              <button @click="myedit(item.uid)">编辑</button>
              <button @click="mydel(item.uid)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="isgetMore==true" class="readMore" @click="getMore">加载更多...</div>
    </div>
  </div>
</template>
<script>
import qs from "qs";

export default {
  data() {
    return {
      searchkey:'',
      isRead: false,
      uid: "",
      upwd: "",
      name: "",
      sex: "",
      tel: "",
      dept: "",
      uclass: "",
      pno: 0,
      upno:0,
      upageSize:50,
      pageSize: 10,
      list: [],
      isadd: true,
      isedit: false,
      isgetMore: true
    };
  },
  created() {
    this.getMore();
    this.userList();
    this.cansel();
  },
  methods: {
    /* 根据关键字搜索 */
    usersearch(){
          var url = "http://127.0.0.1:3000/userSearch?key="+this.searchkey;
          this.axios.get(url).then(result => {
              if(result.data.data[0] == undefined){
                  alert('没有人！')
              }else{
                  this.list = result.data.data;
              }     
              this.isgetMore = false;     
        //   console.log();  
      })
    },
    /* 删除用户按钮 */
    mydel(uid) {
      var url = "http://127.0.0.1:3000/delUser?uid=" + uid;
      this.axios.get(url).then(result => {
        if (result.data.code == 1) {
          //3:获取返回结果判断是否删除成功
          alert("删除成功！");
        }
      });
    },
    /* 取消编辑按钮 */
    editcansel() {
      this.isedit = false;
    },
    /* 确定按钮按钮 */
    editsure() {
        var uid = this.$route.query.uid;
      var postData = qs.stringify({
          uid: this.uid,
        upwd: this.upwd,
        name: this.name,
        tel: this.tel,
        dept: this.dept,
        uclass: this.uclass
      });
      var url = "http://127.0.0.1:3000/Edit";
      this.axios.post(url, postData).then(result => {
          console.log(result.data);
        // alert(result.data.msg);
      });
      this.isedit = false;
    },
    /* 编辑按钮 */
    myedit(uid) {
        this.isRead = true;
      this.isedit = true;
      var url = "http://127.0.0.1:3000/getUser";
      this.axios
        .get(url, {
            params: {
            uid: uid
          }
        })
        .then(result => {
          // this.list = result.data.data;
          // console.log(result)
          var data = result.data.data[0];
          this.uid = uid;
          this.upwd = data.upwd;
          this.name = data.name;
          this.tel = data.tel;
          this.dept = data.dept;
          this.uclass = data.uclass;
          // upwd,name,tel,dept,uclass
        });
    },
    /* 确定添加按钮 */
    sure() {
      var postData = qs.stringify({
        uid: this.uid,
        upwd: this.upwd,
        name: this.name,
        sex: this.sex,
        tel: this.tel,
        dept: this.dept,
        uclass: this.uclass
      });
      var url = "http://127.0.0.1:3000/Addstudent";
      this.axios.post(url, postData).then(result => {
        console.log(result.data);
        // alert(result.data.msg);
      });
      this.isadd = false;
      this.getMore();
      this.userList();
    },
    /* 取消添加按钮 */
    cansel() {
      this.isadd = false;
    },
    /* 添加按钮 */
    addStudent() {
      this.isRead = false;
      this.isadd = true;
    },
    /* 用户列表 */
    userList() {
      var url = "http://127.0.0.1:3000/User";
      this.axios.get(url).then(result => {
        this.list = result.data.data;
        // console.log(result)
      });
    },
    /* 加载更多 */
    getMore() {
      this.pno++;
      var url = "http://127.0.0.1:3000";
      url += "/User?pno=" + this.pno;
      url += "&pageSize=" + this.pageSize;
      this.axios.get(url).then(result => {
        var rows = this.list.concat(result.data.data);
        this.list = rows;
      });
    }
  }
};
</script>
<style scoped>
.add {
  border: 0;
  color: #fff;
  background: #40c040;
  border-radius: 0;
  margin: 10px 0 20px 0;
}
.readMore {
  cursor: pointer;
  text-align: center;
  font-size: 25px;
  line-height: 50px;
  width: 100%;
  height: 50px;
  color: #333;
  margin-bottom: 30px;
}
.userbox {
  background: #e9edf1;
  position: relative;
}
.myadd,
.myedit {
  width: 1000px;
  height: 700px;
  position: fixed;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;
}
.inner {
  padding: 20px;
  width: 50%;
  margin: 7% 25%;
  background: skyblue;
  opacity: 1;
  text-align: center;
}
.head {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
}
.inner input {
  margin-left: 30px;
  width: 60%;
  opacity: 1;
}
.inner button {
  margin: 10px 10px;
}
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
table {
  width: 1400;
}
table th,
td {
  text-align: center;
  height: 50px;
  line-height: 50px;
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
  background: #73b1e0;
  color: #fff;
}
td > button {
  margin-top: 10px;
  margin-right: 5px;
}
</style>
