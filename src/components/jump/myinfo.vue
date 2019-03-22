<template>
  <div class="myinfobox">
    <div class="infotitle">
      <p>
        <span>个人中心</span>
        <span class="index" @click="jumpIndex">· 首页</span>
      </p>
    </div>
    <div class="content">
      <div>
        <label>
          <span>*</span> 学号
        </label>
        <input type="text" name="uid" v-model="uid">
      </div>
      <div>
        <label>
          <span>*</span> 姓名
        </label>
        <input type="text" name="name" v-model="name">
      </div>
      <div>
        <label>
          <span>*</span> 性别
        </label>
        <input type="text" name="sex" v-model="sex">
      </div>
      <div>
        <label>
          <span>*</span> 电话
        </label>
        <input type="text" name="tel" v-model="tel">
      </div>
      <div>
        <label>
          <span>*</span> 院系
        </label>
        <input type="text" name="dept" v-model="dept">
      </div>
      <div>
        <label>
          <span>*</span> 班级
        </label>
        <input type="text" name="uclass" v-model="uclass">
      </div>
      <label>
        <span>*</span> 备注
      </label>
      <div>
        <textarea name="remark" v-model="remark" cols="30" rows="5"></textarea>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uid: "",
      name: "",
      sex: "",
      tel: "",
      dept: "",
      uclass: "",
      remark: ""
    };
  },
  created() {
    this.myinfo();
  },
  methods: {
    jumpIndex() {
      this.$router.push("/");
    },
    myinfo() {
      var uid = sessionStorage.getItem("uid");
      var url = "http://127.0.0.1:3000/getInfo?uid=" + uid;
      this.axios.get(url).then(result => {
        var data = result.data.data[0];
        console.log(data);
        this.uid = uid;
        this.name = data.name;
        this.sex = data.sex;
        this.tel = data.tel;
        this.dept = data.dept;
        this.uclass = data.uclass;
        this.remark = data.remark;
      });
    }
  }
};
</script>
<style scoped>
.index{
    cursor: pointer;
}
.myinfobox {
  width: 960px;
  margin: 0 auto;
  border: 1px solid #ddd;
  height: 700px;
  border-radius: 3%;
}
.infotitle {
  height: 43px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background: linear-gradient(#f0c2a9, #ff7f38 50%, #f0c2a9);
  border: 1px solid #ddd;
  border-top: 0px;
  padding-left: 20px;
}
.infotitle p > span {
  display: inline-block;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  letter-spacing: 4px;
  line-height: 40px;
  text-align: center;
  border-radius: 25px;
}
.content {
  width: 80%;
  margin: 50px auto;
}
.content label {
  margin-right: 30px;
}
.content label span {
  color: red;
  margin-right: 5px;
}
.content input {
  width: 50%;
}
textarea {
  margin-left: 80px;
  width: 75%;
}
</style>
