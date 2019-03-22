<template>
  <div>
    <div class="top">
      <img src="img/logo.png" alt>
      <span>· 本馆简介</span>
      <span class="index" @click="jumpIndex">· 首页</span>
    </div>
    <div class="mycontainer">
      <p>发布时间：{{date | dateFilter}}</p>
      <hr>
      <div class="content">
        <p>武昌工学院图书馆于2004年10月18日开馆，2007年9月增设南区图书馆。列入学校二期开发重点项目的新图书馆于2011年10月18日落成开馆。现图书馆建筑总面积近2万余平方米，拥有阅览座位2000余席。新馆共6层，馆内设有社科图书借阅室、新书阅览室、报刊阅览室、自科图书借阅室、文学图书借阅室、教研阅览室、学生自习室、学生自主学习中心等区域。图书馆拥有纸质藏书112余万册，电子藏书285万余册，在订报刊1100余种。图书馆采用藏借阅一体的管理模式，全部资源供读者开架阅览，读者可以携带自己的图书和书包自由进出各个阅览场地学习或阅读。另外设有配备100台电脑的电子阅览室，借读者上机检索电子资源或上网，配备400余座,设施齐全的学术报告厅可供学校和图书馆开展各项学术和教育活动。图书馆1楼社科图书借阅室中的密集书架大大扩展了书库的利用空间，图书馆2楼大厅设置的电子公告屏向读者宣传报道有关图书馆服务的最新信息，计算机检索台可供读者检索图书馆馆藏资源，2楼的校史展览馆向读者介绍展示学校的发展历程和取得的成就。馆内还配备有便捷的电子存包柜，供读者临时存放物品。分布在全馆的众多阅览座位和休闲桌椅可供读者自主学习、讨论和休憩。图书馆从每天早上7：00到晚上10：00不间断开放。</p>
        <p>图书馆网站全年开通，配备有中国知网CNKI、读秀学术搜索、起点考研网、起点考试网、易瑞远程访问系统、万方学位论文数据库、网上报告厅、博看网等多种数据库资源，并可通过省高校数字化图书馆中心和CALIS中心网站为读者提供多种数据库资源和数十万种电子图书的检索和利用。学校图书馆已基本形成具有本校特色、结构较为合理、质量较高的馆藏文献资源体系。图书馆设有的“四部一室”，即读者服务部、阅读推广部、信息服务部、资源建设部和综合办公室，为读者服务和图书馆管理提供有力的保障。</p>
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
.index{
  cursor:pointer;
}
.content {
  text-indent: 2em;
  padding: 20px;
}
.content > p {
  font-size: 18px;
  line-height: 40px;
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
  height: 1000px;
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
