<template>
    <div class="managerlogin">
       <div class="head">
        <div class="banner">
            <!-- 顶部-->
            <!-- logo-->
            <div class="logo">
                <img src="img/logo.png" alt="">
            </div>
            <!-- 右边登录框 -->
            <div class="r_aside">
                <div class="help">
                    <a href="javascript:;">
                        <p align="right">帮助中心</p>
                    </a>
                </div>
                <div class="r_center">
                    <div class="login_top">
                        <span>管理员登录</span>
                        <a @click="jumppswd"><span>密码说明</span></a>
                    </div>

                    <hr />
                    <form>
                        <input class="yym" type="text" name="workid" v-model="workid" placeholder="用户名" />
                        <input class="mm" type="password" name=" " v-model="pswd" placeholder="密码" />
                        <div class="ckbx">
                            <p> <a @click="jumpLogin" href="javascript:;"> 读者登录页</a></p>
                            <p> <a href="javascript:;"> 修改密码 </a></p>
                        </div>
                        <button class="btn btn-primary w-100 border-0 pt-2 pb-2" @click="MangerButton">登录</button>
                    </form>
                </div>
            </div>
            <!--foot-->
            <div class="foot">
                <p>
                    武昌工学院图书馆. &copy; Copyright 2000 - 2018
                </p>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  data() {
        return {
            workid:'',
            pswd:''
        }
    },
    methods:{
        jumpLogin(){
            this.$router.push('/Login');
        },
        jumppswd(){
            this.$router.push('/pswdintro');
        },
        MangerButton(){
            console.log(this.workid+'-'+this.pswd)
            var url = "http://127.0.0.1:3000/ManagerLogin?workid="+this.workid+"&pswd="+this.pswd;
            this.axios.get(url).then(result=>{ 
                if(result.data.code==1){
                    this.$router.push("/Manager/");
                    return
                }else{
                    alert("用户名或者密码错误！")
                    this.$router.push("/Managerlogin");
                    this.pswd=''
                }          
                // console.log(result.data.code);
            })
        }
    }  
}
</script>
<style scoped>
.login_top{
    margin-bottom: 15px;
}
*{
    margin:0;
    padding: 0;
}
.banner{
    position: relative;
    background: url("http://127.0.0.1:3000/img/manager/admin1.jpg") no-repeat top;
    background-size: cover;
    min-height:800px;
}
input.yym{
    background: url("http://127.0.0.1:3000/img/login/add.png") no-repeat 5% center;
    background-size: 24px;
    padding-left: 40px; 
    margin-top: 20px;
}
input.mm{
    background: url("http://127.0.0.1:3000/img/login/lock.png") no-repeat 5% center;
    background-size: 24px;
    padding-left: 40px; 
}

a:hover{
    color: skyblue;
    cursor: pointer;
}

.r_aside{
    position: absolute;
    top: 0;
    right: 0;
    width: 36%;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    background-size: cover;
    background-position: right bottom;
    /*transition: width 0.3s ease-out;*/
}
/*logo*/
.logo img{
    position: absolute;
    height: 150px;
    margin-left: 50px;
}
/* 右边登录框*/
.help a{
    position: absolute;
    left: 23%;
    top: 40px;
    width: 54%;
    font-size: 13px;
    line-height: 36px;
    color: #d2d8e7;
}
.r_center{
    position: absolute;
    top: 30%;
    left: 23%;
    width: 58%;
    background: #fff;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 4px;
    color: #aaa;
}

.r_center p{
    color: black;
    font-weight: bold;
}

input::-webkit-input-placeholder{
    color: #aaa;
}

input{
    padding: 0 0 0 30px;
    border: 0;
    outline: none;
}


.r_center>div:first-child{
    display: flex;
    justify-content: space-between;

}
.r_center>div:first-child>span,
.r_center>div:first-child>a{
    display: inline-block;
}

.r_center .ckbx{
    margin: 10px 2px 15px 2px;
    display: flex;
    justify-content: space-between;
}
.ckbx p{
    display: inline;
}

.r_center .ckbx>p a{
    color: skyblue;
    font-size: 16px;
    font-weight: normal;
}
.ckbx p a:hover{
    /* text-decoration: none; */
    cursor: pointer;
}

div.foot{
    position: absolute;
    bottom:20px;
    left: 20px;
    color: #fff;
}

</style>

