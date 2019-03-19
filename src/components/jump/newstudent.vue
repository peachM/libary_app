<template>
  <div class="newstudentbox">
    <div class="box">
      <div class="mycontainer">
        <div class="top">
          <img src="img/logo.png" alt>
          <img src="http://127.0.0.1:3000/img/newStu/xszl.png" alt="">
          <img style="width:93px;height:21px;margin-left:100px;" src="http://127.0.0.1:3000/img/newStu/gzjy.png" alt="">
        </div>
        <div class="nav">
          <img src="http://127.0.0.1:3000/img/newStu/welcome.png" alt>
        </div>
        <div class="list">
          <ul>
            <li>
              <img src="http://127.0.0.1:3000/img/newStu/nav_bggk1.png" alt>
              <p>
                <img src="http://127.0.0.1:3000/img/newStu/nav_bggk11.png" alt>
              </p>
            </li>
            <li>
              <img src="http://127.0.0.1:3000/img/newStu/nav_bggk2.png" alt>
              <p>
                <img src="http://127.0.0.1:3000/img/newStu/nav_bggk22.png" alt>
              </p>
            </li>
            <li>
              <img src="http://127.0.0.1:3000/img/newStu/nav_bggk3.png" alt>
              <p>
                <img src="http://127.0.0.1:3000/img/newStu/nav_bggk33.png" alt>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.top img:nth-child(2){
    width: 142px;
    height: 33px;
    margin-left: 50px;
}
ul{
    margin-left: 20px;
    margin-top: -230px;
}
ul,
li {
  list-style: none;
}
ul li {
  float: left;
  margin-right: 65px;
}
.box {
  width: 100%;
  height: 800px;
  background: url("http://127.0.0.1:3000/img/newStu/bgbg.jpeg") bottom
    right;
  /* background-size: 50%; */
  /* background-color: #ecedf1; */
}
.mycontainer {
  width: 1200px;
  margin: 0 auto;
}
.top img {
  height: 130px;
}
.nav img {
  margin: 80px 0 80px 750px;
}
</style>
