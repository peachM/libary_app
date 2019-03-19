<template>
  <div class="statisticalbox">
    <div class="top">
      <img style="width:25px;height:25px" src="http://127.0.0.1:3000/img/manager/index.png" alt>
      <span style="color:#528CC6;padding-left:5px;">首页</span>
      <span style="padding:0 15px;">>></span>
      <span>图书统计表</span>
    </div>
    <div class="echarts">
      <div id="main" style="width:800px;height:600px"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ["中文", "英文", "教育学", "经济科学", "计算机"],
      data: []
    };
  },
  /*  created() {
        
    }, */
  mounted() {
    this.getData();
    // this.drawLine();
  },
  methods: {
    getData() {
      for (var item of this.list) {
        var url = "http://127.0.0.1:3000/Classify?classify=" + item;
        this.axios.get(url).then(result => {
          // this.list = result.data.data;
          this.data.push(result.data.data[0].count);
          if (this.data.length == 5) {
            console.log(this.data);
            this.drawLine(this.data);
          }
        });
      }
    },
    drawLine(data) {
      // 基于准备好的dom，初始化echarts实例
      let main = this.$echarts.init(document.getElementById("main"));
      // 绘制图表
      main.setOption({
        title: { text: "各分类图书的数量" },
        tooltip: {},
        xAxis: {
          data: this.list
        },
        yAxis: {},
        series: [
          {
            name: "总数量",
            type: "bar",
            data: data
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.echarts{
    width: 1000px;
    height: 700px;
    background: #fff;
    padding: 20px 0 0 20px;
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
</style>
