<template>
  <div>
    <div class="top">
      <img src="img/logo.png" alt>
      <span>· 学校及周边</span>
      <span class="index" @click="jumpIndex">· 首页</span>
    </div>
    <div id="app">
      <div id="allmap" ref="allmap"></div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "APP",
  methods: {
    jumpIndex() {
        this.$router.push('/')
    },
    map() {
      let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
      map.centerAndZoom(new BMap.Point(114.291844, 30.48946), 14); // 初始化地图,设置中心点坐标和地图级别
      map.addControl(
        new BMap.MapTypeControl({
          //添加地图类型控件
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.setCurrentCity("武汉"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    }
  },
  mounted() {
    this.map();
  }
};
</script>
<style scoped>
.index {
  cursor: pointer;
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 5px; */
}
#allmap {
  height: 700px;
  overflow: hidden;
}
</style>
