<template>
    <div class="manager-box">
        <div class="box">
            <!-- 左侧功能菜单 -->
            <div class="left">
                <ul>
            
                    <li><a class="manu" href="#">功能菜单</a></li>
                    <li>
                        <a class="manu" href="#"><img style="width:30px;height:30px" src="http://127.0.0.1:3000/img/manager/index.png" alt=""> 首页</a>
                    </li>
                    <li>
                        <a class="manu" href="#"><img style="width:30px;height:30px" src="http://127.0.0.1:3000/img/manager/doc.png" alt=""> 管理员</a>
                    </li>
                    <li>
                        <router-link class="item" to="/Manager"><span>&gt;</span> 用户管理</router-link>
                    </li>
                    <li>
                        <router-link class="item" to="/Manager/book"><span>&gt;</span> 图书管理</router-link>
                    </li>
                    <li>
                        <router-link class="item" to="/Manager/borrowed"><span>&gt;</span> 借阅记录管理</router-link>
                    </li>
                    <li>
                        <router-link class="item" to="/Manager/readers"><span>&gt;</span> 读者意见列表</router-link>
                    </li>
                    <li>
                        <router-link class="item" to="/Manager/statistical"><span>&gt;</span> 统计管理</router-link>
                    </li>
                    <li>
                        <router-link class="item" to="/Manager/password"><span>&gt;</span> 密码修改</router-link>
                    </li>
                </ul>
            </div>
            <div class="right">
               <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
ul,li{
    list-style: none;
    margin: 0px;
    padding: 0px;
}
a{
    text-decoration: none;
}
.box{
    background: #e9edf1;
    width: 1400 px;
    height: 2000px;
}
.left{
    float: left;
    width: 300px;
    height: 800px;
    padding: 20px;
}
ul{
    background: #fff;
    border-radius: 2%;
    height: 600px;
}
ul li{
    height: 50px;
    /* align-items: center; */
    line-height: 50px;
    padding-left: 40px; 
    border-bottom: 1px solid #fff;
}
ul>li span{
    margin:0 10px;
}
ul>li:first-child{
    font-size: 18px;
    font-weight: bold;
    color:#9cbed1;
    padding-left: 20px;
}
.manu{
    color:  #69a0c0;
}
ul>li:nth-child(2),ul>li:nth-child(3){
    padding-left: 40px;
    border-left: 3px solid #9cbed1;
    margin-left: -3px;
    background: #eee;
}
ul>li:last-child{
    border: 0;
}
ul li .item {
    color: #4d6c88;
}
ul li:hover{
    background: #eee;
}

.right{
    float: left;
    padding: 20px;
    width: 1000px;
    height: 100%;
    /* background: #fff; */
}
.top{
    height: 60px;
    float: left;
}
</style>
