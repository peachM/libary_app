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
      list: [],
      data: [],
      row1: [],
      row2: []
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
      var url = "http://127.0.0.1:3000/Classify";
      this.axios.get(url).then(result => {
        var data = result.data.data;
        // console.log(data);
        for (const item of data) {
          this.row1.push(item.classify);
          this.row2.push(item.total);
        }
        if (this.row1.length == 6 && this.row2.length == 6) {
          this.drawLine(this.row1, this.row2);
        }
      });
    },
    drawLine(row1, row2) {
      // 基于准备好的dom，初始化echarts实例
      let main = this.$echarts.init(document.getElementById("main"));
      // 绘制图表
      main.setOption({
        title: { text: "各分类图书的数量" },
        tooltip: {},
        xAxis: {
          data: row1
        },
        yAxis: {},
        series: [
          {
            name: "总数量",
            type: "bar",
            data: row2
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.echarts {
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
