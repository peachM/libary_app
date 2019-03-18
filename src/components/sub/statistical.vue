<template>
    <div class="staticticalbox">
        <div id="main" style="width:500px;height:400px"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:['中文','英文','教育学','经济科学','计算机'],
            data:[]
        }
    },
   /*  created() {
        
    }, */
    mounted() {
        this.getData();
        this.drawLine();
    },
    methods: {
        getData(){
            for (var item of this.list) {
               var url = "http://127.0.0.1:3000/Classify?classify="+item;
                this.axios.get(url).then(result => {
            // this.list = result.data.data;
                this.data = result.data.data[0].count; 
                console.log(this.data);
              })
            }
            
        },
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let main = this.$echarts.init(document.getElementById('main'))
            // 绘制图表
            main.setOption({
                title: { text: '各分类图书的数量' },
                tooltip: {},
                xAxis: {
                    data: this.list
                },
                yAxis: {},
                series: [{
                    name: '总数量',
                    type: 'bar',
                    data: [18,1,2,1,3]
                }]
            });
        },

  }
}
</script>
<style scoped>

</style>
