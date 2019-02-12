<template>
    <div>
        <!--导航栏部分-->
        <div class="nb_top">
            <div class="container">
                <div class="left">
                    <img class="nbmylogo" src="img/logo.png" alt="" />
                    <span> · 新书上架</span>
                </div>
                <div class="right">
                    <a href="#">新手通报</a>
                    <a href="#">热门浏览</a>
                    <a href="#">图书馆首页</a>
                </div>
            </div>
        </div>

        <!-- 图片部分-->
        <div class="xxbg" :style="'background-image:url(img/bjbg.png)'">
            <div class="container">
                <div class="book">
                    <span>新书驾到</span>
                </div>
                <div class="row">
                    <div class="col col-lg-8 col-md-12 col-sm-12">
                        <div class="input">
                            <input type="text" style="width:710px;height:55px" />
                        </div>
                    </div>
                    <div class="col col-lg-2 col-md-none col-sm-none">
                        <div class="input">
                            <select>
                                <option value="">书名</option>
                                <option value="">著者</option>
                                <option value="">ISBN</option>
                                <option value="">出版社</option>
                            </select>
                        </div>
                    </div>
                    <div class="col col-lg-2 col-md-12 col-sm-12">
                        <div class="input">
                            <button>搜索</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--内容部分-->
        <div class="mian">
            <div class="container mt-5">
                <div class="title">热门浏览排行榜</div>
                <div class="searchnav">
                    <a href="#">热门浏览前100</a>
                    <a href="#">中文</a>
                    <a href="#">英文</a>
                </div>

                <div class="contents">
                <!-- 第一本书 -->
                <div class="content">
                    <div class="nbook" v-for="item in list" :key="item.id">
                        <div class="bookImg">
                            <img :src="'http://127.0.0.1:3000/'+item.pic" />
                        </div>
                        <div class="bookCont">
                            <ul>
                                <li><router-link to="#">{{item.title}}</router-link></li>
                                <li>{{item.author}}</li>
                                <li>{{item.press}}</li>
                                <li>{{item.searchid}}</li>
                                <li>ISBN：{{item.ISBN}}</li>
                                <li>浏览次数：76</li>
                                <li><button>我要借阅</button></li> 
                            </ul>
                        </div> 
                        
                    </div>
                </div>
                
                </div>
            </div>
        </div>

        <!-- 底部 -->
        <footer>
            <div class="container">
                <div class="foot">
                    <img height="100px" src="img/logo.png" alt="" />
                    <p>版权所有 &copy; 2019 - 2020 武昌工学院</p>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
          list: []
        }
    },
    methods: {
        newbooks(){
          // 1.发送ajax请求给服务器
          var url = "http://127.0.0.1:3000/newbook";
          this.axios.get(url).then(result=>{
            this.list = result.data.data;
            // console.log(result);
          })
        },
    },
  created() {
    this.newbooks();
  },
}
</script>
<style scoped>
body,ul,li{
    /*min-width: 1010px;*/
    margin: 0;
    padding: 0;
}
a,a:hover{
    text-decoration: none;
    color: white;
}
.nb_top{
    position: relative;
    width: 100%;
    height: 80px;
    background: #242d3c;
}

div.left{
    float: left;
}
div .nbmylogo{
    position: absolute;
    top: -11px;
    height: 100px;
}
.container>div.left>span{
    display: inline-block;
    color: white;
    font-size: 23px;
    font-family: "楷体";
    margin-left: 295px;
    margin-top: 25px;
}

div.right{
    float: right;
}
div.right>a{
    float: left;
    color: white;
    list-style: none;
    margin: 35px 10px 0 20px;
}
div.right>a:hover{
    color: #ff7f38;
}
/*div>ul>li>a:visited{*/
/*color: #ff7f38;*/
/*}*/
div.xxbg{
    height: 280px;
    background:#ff7f38;
}

div.book>span{
    display: inline-block;
    color: white;
    font-size: 28px;
    font-family: "楷体";
    margin-top: 80px;
}


div.input>select{
    display: inline-block;
    width: 145px;
    height: 53px;
    font-size: 20px;
}
div.input button{
    display: inline-block;
    width: 100px;
    height: 48px;
    color: white;
    background: skyblue;
    font-size: 18px;
}
div.bookImg,div.bookCont{
    margin-right: 20px;
}

div.title{
    margin-top: 40px;
    margin-bottom: 32px;
    font-size: 26px;
    font-family: 黑体;
}
div.searchnav{
    border-bottom: 3px solid #a4a4a4;
    padding-bottom: 20px;
    margin-bottom: 30px;
}
div.searchnav>a{
    color: #005b8c;
    margin-right: 80px;
    margin-left: 20px;
    font-size: 18px;

}

div.contents{
    height: 1200px;
    overflow: hidden;
}

div.content{
    float: left;
    list-style: none;
    margin-right: 20px;
    margin-left: 20px;
}
div.nbook{
    display: inline-flex;
    width: 50%;
    padding-bottom: 30px;
    min-height: 235px;
    padding-right: 10px;
}
div.nbook a{
    display: block;
    color: #005b8c;
    font-size: 18px;
    margin-bottom: 14px;

}
div.nbook ul{
    margin: 0;
    list-style: none;
    display: inline-block;
}
div.nbook ul>li{
    margin: 0;
    font-size: 14px;
}
div.nbook ul>li>button{
    margin-top: 3px;
    background: #ff7f38;
    height: 25px;
    border: 0;
    color: white
}

footer{
    width: 100%;
    height: 150px;
    background: #242d3c;
    text-align: center;
}
footer p{
    color: white;
}
</style>
