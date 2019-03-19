<template>
  <div>
    <div class="top">
      <img src="img/logo.png" alt>
      <span>· 密码说明（读者）</span>
      <span @click="jumpIndex">· 首页</span>
    </div>

    <div class="mycontainer">
      <p>发布时间：{{date | dateFilter}}</p>
      <hr>
      <div class="content">
        <ul>
          <li>学号：为校本部一卡通上的证号或者图书证上读者号，为个人班级学号。</li>
          <li>密码：图书馆系统中登记的原始密码：000000。如果个人修改密码以后，忘记密码请联系管理员！</li>
          <li>
            <span>*</span>注：每个读者可自行修改密码，再次修改需记得原始密码。
          </li>
        </ul>
      </div>
    </div>
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
export default {
  data() {
    return {
      date: new Date()
    };
  },
  methods: {
    jumpIndex() {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.content {
  padding: 20px;
}
.content > p {
  font-size: 18px;
  line-height: 40px;
}
.content ul li{
    font-size: 18px;
    color: #bbb;
    line-height: 35px;
}
.content ul>li>span{
    color: red;
    margin: 0 5px;
}
.top {
  height: 120px;
  background: #ff7f38;
}
.top > span {
  display: inline-block;
  color: white;
  font-size: 28px;
  font-family: "楷体";
  /* margin-left: 295px; */
  margin-top: 30px;
}
.top img {
  margin-left: 10.5rem;
  height: 120px;
}
.mycontainer {
  width: 960px;
  margin: 0 auto;
  height: 600px;
}
.mycontainer > p {
  font-size: 18px;
  margin: 40px 0 20px 0;
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
