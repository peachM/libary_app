<template>
  <div :bid="bid" :state="state">
    <button :disabled="isRead" @click="Lowershelf(bid)">下架</button>
    <button :disabled="notRead" @click="Uppershelf(bid)">上架</button>
    <button>编辑</button>
  </div>
</template>
<script>
import qs from "qs";
export default {
  props: ["bid", "state"],
  data() {
    return {
      isRead: false,
      notRead: false
    };
  },
  created() {
      this.view()
  },
  methods: {
    view() {
      if (this.state == 1) {
        this.isRead = false;
        this.notRead = true;
      }else{
          this.isRead = true;
          this.notRead = false;
      }
    },
    Lowershelf(bid) {
      var postData = qs.stringify({
        bid: bid
      });
      var url = "http://127.0.0.1:3000/Lowershelf";
      this.axios.post(url, postData).then(result => {
        if (result.data.code == 1) {
          alert("下架成功！");
        } else {
          alert("下架失败！");
        }
      });
    },
    Uppershelf(bid) {
      var postData = qs.stringify({
        bid: bid
      });
      var url = "http://127.0.0.1:3000/Uppershelf";
      this.axios.post(url, postData).then(result => {
        if (result.data.code == 1) {
          alert("上架架成功！");
        } else {
          alert("上架失败！");
        }
        this.notRead = true;
        this.isRead = false;
      });
    }
  }
};
</script>