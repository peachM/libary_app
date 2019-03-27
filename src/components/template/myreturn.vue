<template>
  <div :id="id" :Ereturndate="Ereturndate" :returndate="returndate">
    <button v-if="isSee==true" @click="userreturn(id)">归还图书</button>
  </div>
</template>
<script>
import qs from "qs";
export default {
  props: ["id","Ereturndate","returndate"],
  data() {
    return {
      isSee: true
    };
  },
  created() {
      this.view();
  },
  methods: {
      view(){
          if(!this.returndate){
              this.isSee = true;
          }else{
              this.isSee = false;
          }
      },
    tab(date1, date2) {
      var oDate1 = new Date(date1);
      var oDate2 = new Date(date2);
      if (oDate1.getTime() >= oDate2.getTime()) {
        return 1
      } else {
        return 0
      }
    },
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
    userreturn(id) {
      var date = this.parseTime(new Date());
      var uid = sessionStorage.getItem("uid");
      var overtime = this.tab(this.Ereturndate,date);
      var postData = qs.stringify({
        returndate: date,
        id: id
      });
      var url = "http://127.0.0.1:3000/Ureturn";
      this.axios.post(url, postData).then(result => {
        if (result.data.code == 1 && overtime == 1) {
          alert("归还成功！");
        } else {
          alert("归还成功，时间超时，请联系管理员");
        }
      });
    }
  }
};
</script>
<style scoped>
</style>
