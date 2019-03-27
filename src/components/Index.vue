<template>
        <!-- 首页头部 -->
<div class="index">
    <header>
      <div class="container">
         <div class="top">
           <h1>Libary</h1>
             <div class="rnav">
               <ul>
                  <li>
                    <router-link to="/map">
                       <img src="http://127.0.0.1:3000/img/index/pin.png">
                       <p>address</p>
                    </router-link>
                  </li>
                  <li>
                    <a href="javascript:;">
                        <img src="http://127.0.0.1:3000/img/index/telephone.png">
                        <p>contact</p>
                    </a>
                   </li>
                    <li>
                      <a @click="jump" href="javascript:;">
                        <img width="20" height="20" src="http://127.0.0.1:3000/img/index/mine.png">
                        <p class="login">
                            <a>{{msg}} </a>
                        </p>
                      </a>
                    </li>
                </ul>
                </div>

            </div>
            <div class="navbar navbar-expand-md navbg navbar-dark">
              <!-- 小屏幕最右侧的小按钮-->
              <button class="btn btn-warning border-0 navbar-toggler" data-toggle="collapse"  data-target="#content">
                  <span class="navbar-toggler-icon"></span></button>
              <!-- 导航栏中的菜单，小屏幕隐藏（垂直显示），大屏幕横向现实-->
              <div class="collapse navbar-collapse" id="content">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#">首页</a></li>
                    <li class="nav-item"><a @click="jumpHot" class="nav-link" href="#">图书列表</a></li>
                    <li class="nav-item"><a @click="jumpBorrow" class="nav-link" href="#">我的借阅</a></li>
                    <li class="nav-item"><a @click="jumpAdvise" class="nav-link" href="#">提出意见</a></li>
                    <li class="nav-item"><a @click="jumpnewStu" class="nav-link" href="#">新生须知</a></li>
                    <li class="nav-item"><a @click="jumpIntro" class="nav-link" href="#">本馆简介</a></li>
                </ul>
              </div>
            </div>
            <div class="ban_news">
              <div class="bcont">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam repellendus  adipisicing elit.
                  Nesciunt nam repellendus adipisicing elit. Nesciunt nam repellendus .
              </div>
              <button>ReadMore</button>
            </div>
        </div>
    </header>

    <!-- 首页内容 第一个版块 -->
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col col-md-6 col-sm-12">
                    <div class="left_cont">
                        <div class="one">
                            <div class="left_news">
                                <div class="news">
                                    <h2><a href="javascript:;">最新消息</a></h2>
                                </div>
                                <div class="more">
                                    <span><a href="javascript:;">更多+</a></span>
                                </div>
                            </div>
                            <div class="right_cont">
                                <ul>
                                    <li>
                                        <span>01/16</span><span class="blue">|</span>
                                        <a class="badge badge-warning badge-pill mr-1" href="#">公告</a>
                                        <a class="new" href="javascript:;">图书馆部分服务布局调整的通知</a>
                                    </li>
                                    <li>
                                        <span>01/16</span><span class="blue">|</span>
                                        <a class="badge badge-danger badge-pill mr-1" href="#">新闻</a>
                                        <a class="new" href="javascript:;">图书馆部分服务布局调整的通知</a>
                                    </li>
                                    <li>
                                        <span>01/16</span><span class="blue">|</span>
                                        <a class="badge badge-danger badge-pill mr-1" href="#">新闻</a>
                                        <a class="new" href="javascript:;">图书馆部分服务布局调整的通知</a>
                                    </li>
                                    <li>
                                        <span>01/16</span><span class="blue">|</span>
                                        <a class="badge badge-danger badge-pill mr-1" href="#">新闻</a>
                                        <a class="new" href="javascript:;">图书馆部分服务布局调整的通知</a>
                                    </li>
                                    <li>
                                        <span>01/16</span><span class="blue">|</span>
                                        <a class="badge badge-warning badge-pill mr-1" href="#">公告</a>
                                        <a class="new" href="javascript:;">图书馆部分服务布局调整的通知</a>
                                    </li>
                                    <li>
                                        <span>01/16</span><span class="blue">|</span>
                                        <a class="badge badge-warning badge-pill mr-1" href="#">公告</a>
                                        <a class="new" href="javascript:;">图书馆部分服务布局调整的通知</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- one结束 -->
                        <div class="two">
                            <div class="left_news">
                                <div class="news">
                                    <h2><a href="javascript:;">最新消息</a></h2>
                                </div>
                                <div class="more">
                                    <span><a href="javascript:;">更多+</a></span>
                                </div>
                            </div>
                            <div class="right_cont">
                                <ul>
                                    <li>
                                        <span>01/16</span><span class="blue">|</span>
                                        <a class="badge badge-primary badge-pill mr-1" href="javascript:;">购买</a>
                                        <a class="new" href="javascript:;">图书馆部分服务布局调整的通知</a>
                                    </li>
                                    <li>
                                        <span>01/16</span><span class="blue">|</span>
                                        <a class="badge badge-primary badge-pill mr-1" href="javascript:;">购买</a>
                                        <a class="new" href="javascript:;">图书馆部分服务布局调整的通知</a>
                                    </li>
                                    <li>
                                        <span>01/16</span><span class="blue">|</span>
                                        <a class="badge badge-primary badge-pill mr-1" href="javascript:;">购买</a>
                                        <a class="new" href="javascript:;">图书馆部分服务布局调整的通知</a>
                                    </li>
                                    <li>
                                        <span>01/16</span><span class="blue">|</span>
                                        <a class="badge badge-primary badge-pill mr-1" href="javascript:;">购买</a>
                                        <a class="new" href="javascript:;">图书馆部分服务布局调整的通知</a>
                                    </li>
                                    <li>
                                        <span>01/16</span><span class="blue">|</span>
                                        <a class="badge badge-primary badge-pill mr-1" href="javascript:;">购买</a>
                                        <a class="new" href="javascript:;">图书馆部分服务布局调整的通知</a>
                                    </li>
                                    <li>
                                        <span>01/16</span><span class="blue">|</span>
                                        <a class="badge badge-primary badge-pill mr-1" href="javascript:;">购买</a>
                                        <a class="new" href="javascript:;">图书馆部分服务布局调整的通知</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- two结束 -->
                    </div>
                </div>
                <div class="col col-md-6 col-sm-12">
                    <div class="imgbox">
                        <div class="ibox">
                            <img width="230px" height="230px" src="http://127.0.0.1:3000/img/index/newpic1.png" alt="">
                        </div>
                        <div class="ibox">
                            <img width="230px" height="230px" src="http://127.0.0.1:3000/img/index/newpic2.png" alt="">
                        </div>
                        <div class="ibox">
                            <img width="230px" height="230px" src="http://127.0.0.1:3000/img/index/newpic3.png" alt="">
                        </div>
                        <div class="ibox">
                            <img width="230px" height="230px" src="http://127.0.0.1:3000/img/index/newpic4.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <!-- row结束 -->
        </div>
    </div>

    <!-- 首页内容第二个版块 热门服务 -->
    <div class="serve">
        <div class="container">
            <div class="hr">
                <div class="start">
                    <span>热门服务</span>
                </div>
            </div>
            <!-- hr结束 -->
            <div class="row">
                <div class="col col-lg-8 col-md-8 col-sm-12">
                    <h3 class="stu">学生</h3>
                    <div class="student pr-3">
                        <ul class="row bg-white myborder">
                            <li class="col col-lg-3 col-md-4 col-sm-6 col-xs-6">
                                <ul>
                                    <a href="javascript:;"></a>
                                    <li class="title">空间布局</li>
                                    <li> <a href="javascript:;">馆藏分布</a></li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                </ul>
                            </li>
                            <li class="col col-lg-3 col-md-4 col-sm-6 col-xs-6">
                                <ul>
                                    <li class="title">图书借阅</li>
                                    <li> <a href="javascript:;">馆藏分布</a></li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                </ul>

                            </li>
                            <li class="col col-lg-3 col-md-4 col-sm-6 col-xs-6">
                                <ul>
                                    <li class="title">馆际互借</li>
                                    <li> <a href="javascript:;">馆藏分布</a></li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                </ul>

                            </li>
                            <li class="col col-lg-3 col-md-4 col-sm-6 col-xs-6">
                                <ul>
                                    <li class="title">阅读推广</li>
                                    <li> <a href="javascript:;">馆藏分布</a></li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                </ul>

                            </li>
                            <li class="col col-lg-3 col-md-4 col-sm-6 col-xs-6">
                                <ul>
                                    <li class="title">设备设施</li>
                                    <li> <a href="javascript:;">馆藏分布</a></li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                </ul>

                            </li>
                            <li class="col col-lg-3 col-md-4 col-sm-6 col-xs-6">
                                <ul>
                                    <li class="title">提升信息素养</li>
                                    <li> <a href="javascript:;">馆藏分布</a></li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                </ul>

                            </li>
                            <li class="col col-lg-3 col-md-4 col-sm-6 col-xs-6">
                                <ul>
                                    <li class="title">常用软件与培训</li>
                                    <li> <a href="javascript:;">馆藏分布</a></li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                </ul>

                            </li>
                            <li class="col col-lg-3 col-md-4 col-sm-6 col-xs-6">
                                <ul>
                                    <li class="title">数学加工服务</li>
                                    <li> <a href="javascript:;">馆藏分布</a></li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                </ul>

                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 左边结束 -->
                <div class="col col-lg-4 col-md-4 col-sm-12 ">
                    <h3 class="stu">教师+研究生</h3>
                    <div class="teacher pr-3">
                        <ul class="row bg-white myborder">
                            <li class="col col-lg-6 col-md-6 col-sm-6">
                                <ul>
                                    <a href="javascript:;"></a>
                                    <li class="title">学科报告</li>
                                    <li> <a href="javascript:;">学科竞争力分析报告</a></li>
                                    <li> <a href="javascript:;">座位分布</a> </li>
                                </ul>
                            </li>
                            <li class="col col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <ul>
                                    <a href="javascript:;"></a>
                                    <li class="title">专利申请</li>
                                    <li> <a href="javascript:;">专利咨询</a></li>
                                    <li> <a href="javascript:;">相关培训</a> </li>
                                    <li> <a href="javascript:;">专利数据库</a> </li>
                                </ul>
                            </li>
                            <li class="col col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <ul>
                                    <a href="javascript:;"></a>
                                    <li class="title">教学与培训</li>
                                    <li> <a href="javascript:;">一小时讲座</a></li>
                                    <li> <a href="javascript:;">定时讲座</a> </li>
                                    <li> <a href="javascript:;">信息素养课</a> </li>
                                    <li> <a href="javascript:;">信息素养能力评测</a> </li>
                                </ul>
                            </li>
                            <li class="col col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <ul>
                                    <a href="javascript:;"></a>
                                    <li class="title">写作支持</li>
                                    <li> <a href="javascript:;">如何洞悉学科热点</a></li>
                                    <li> <a href="javascript:;">如何进行文献调研</a> </li>
                                    <li> <a href="javascript:;">学术规范与论文写作</a> </li>
                                    <li> <a href="javascript:;">论文投稿指南</a> </li>
                                    <li> <a href="javascript:;">文献管理软件</a> </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 首页内容第三个版块 馆藏资源 -->
    <div class="resources">
        <div class="container">
            <div class="hr2">
                <div class="start2">
                    <span>馆藏资源</span>
                </div>
            </div>
            <!-- hr2结束 -->
            <div class="row">
                <div class="col col-lg-2 col-md-2 col-sm-12">
                    <ul class="leftul">
                        <li><a href="javascript:;">图书/期刊</a></li>
                        <li><a href="javascript:;">电子图书</a></li>
                        <li><a href="javascript:;">电子期刊</a></li>
                        <li><a href="javascript:;">数据库</a></li>
                        <li><a href="javascript:;">学位论文</a></li>
                        <li><a href="javascript:;">古籍</a></li>
                        <li><a href="javascript:;">视频/音频</a></li>
                        <li><a href="javascript:;">随书光盘</a></li>
                        <li><a href="javascript:;">报纸</a></li>
                        <li><a href="javascript:;">统计数据/研究数据</a></li>
                        <li><a href="javascript:;">档案</a></li>
                        <li><a href="javascript:;">工具与软件</a></li>
                    </ul>
                </div>
                <div class="col col-lg-10 col-md-10 col-sm-12">
                    <div class="rightpic">
                        <h3>文学图书奖系列</h3>
                        <div class="row">
                            <div class="col col-md-4 col-sm-6 gcbox">
                                <img class="stretch" src="http://127.0.0.1:3000/img/index/artic1.jpg" alt="">
                                <div class="gccont">
                                    <a href="javascript:;">艾略特奖/The T.S. Eliot Prize</a>
                                </div>
                            </div>
                            <div class="col col-md-4 col-sm-6 gcbox">
                                <img src="http://127.0.0.1:3000/img/index/artic2.jpg" alt="">
                                <div class="gccont">
                                    <a href="javascript:;">布克奖/The Man Booker Prize</a>
                                </div>
                            </div>
                            <div class="col col-md-4 col-sm-6 gcbox">
                                <img src="http://127.0.0.1:3000/img/index/artic3.jpg" alt="">
                                <div class="gccont">
                                    <a href="javascript:;">龚古尔奖/Le prixGoncourt</a>
                                </div>

                            </div>
                            <div class="col col-md-4 col-sm-6 gcbox">
                                <img src="http://127.0.0.1:3000/img/index/artic4.jpg" alt="">
                                <div class="gccont">
                                    <a href="javascript:;">美国国家图书奖/National </br> Book Awards </a>
                                </div>
                            </div>
                            <div class="col col-md-4 col-sm-6 gcbox">
                                <img src="http://127.0.0.1:3000/img/index/artic5.jpg" alt="">
                                <div class="gccont">
                                    <a href="javascript:;">普利策小说奖/Pulitzer </br>Prize for Fiction </a>
                                </div>
                            </div>
                            <div class="col col-md-4 col-sm-6 gcbox">
                                <img src="http://127.0.0.1:3000/img/index/artic.png" alt="">
                                <div class="gccont">
                                    <a href="javascript:;">了解更多+</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 首页内容第四个版块 特色资源 -->
    <div class="special">
        <div class="container">
            <div class="hr2">
                <div class="start2">
                    <span>特色资源</span>
                </div>
            </div>
            <!-- hr2结束 -->
            <p class="spmore pb-2">阅读更多 &gt;</p>
            <ul class="row spbigbox">
                <li class="col col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div class="spebox">
                        <div><img src="http://127.0.0.1:3000/img/index/special1.png" alt=""></div>
                    </div>
                </li>
                <li class="col col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div class="spebox">
                        <div><img src="http://127.0.0.1:3000/img/index/special2.png" alt=""></div>
                    </div>
                </li>
                <li class="col col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div class="spebox">
                        <div><img src="http://127.0.0.1:3000/img/index/special3.png" alt=""></div>
                    </div>
                </li>
                <li class="col col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div class="spebox">
                        <div><img src="http://127.0.0.1:3000/img/index/special4.png" alt=""></div>
                    </div>
                </li>
                <li class="col col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div class="spebox">
                        <div><img src="http://127.0.0.1:3000/img/index/special5.png" alt=""></div>
                    </div>
                </li>
                <li class="col col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div class="spebox">
                        <div><img src="http://127.0.0.1:3000/img/index/special6.png" alt=""></div>
                    </div>
                </li>
                <li class="col col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div class="spebox">
                        <div><img src="http://127.0.0.1:3000/img/index/special7.png" alt=""></div>
                    </div>
                </li>
                <li class="col col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div class="spebox">
                        <div><img src="http://127.0.0.1:3000/img/index/special8.png" alt=""></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <!-- 首页内容第五个版块 学术交流 -->
    <div class="study">
        <div class="container">
            <div class="hr2">
                <div class="start2">
                    <span>学术交流</span>
                </div>
            </div>
            <!-- hr2结束 -->
            <div class="stubigbox">
                <ul class="row">
                    <li class="col col-lg-5 col-md-5 col-sm-12 stuul">
                        <div class="stuone_top">
                            <p class="stutitle green">
                                武昌工学院机构知识库<br>
                                OPEN REPOSITORY
                            </p>
                        </div>
                        <div class="stuone_btm">
                            <p>为本校学着自助设立学术型个人主页提供便捷服务的网络平台。平台建站工具可由学者用户自行掌管，高度定制，随时更新，动态而全方位地展示在校学者的个人学术风采</p>
                            <div class="btm_cont">
                                <ul>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                </ul>
                                <img src="http://127.0.0.1:3000/img/index/jt1.png" alt="">
                            </div>

                        </div>
                    </li>
                    <li class="col col-lg-5 col-md-5 col-sm-12 stuul">
                        <div class="stutwo_top">
                            <p class="stutitle blue">
                                武昌工学院机构知识库<br>
                                OPEN REPOSITORY
                            </p>
                        </div>
                        <div class="stuone_btm">
                            <p>为本校学着自助设立学术型个人主页提供便捷服务的网络平台。平台建站工具可由学者用户自行掌管，高度定制，随时更新，动态而全方位地展示在校学者的个人学术风采</p>
                            <div class="btm_cont">
                                <ul>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                </ul>
                                <img src="http://127.0.0.1:3000/img/index/jt2.png" alt="">
                            </div>

                        </div>
                    </li>
                    <li class="col col-lg-5 col-md-5 col-sm-12 stuul">
                        <div class="stuthree_top">
                            <p class="stutitle red">
                                武昌工学院机构知识库<br>
                                OPEN REPOSITORY
                            </p>
                        </div>
                        <div class="stuone_btm">
                            <p>为本校学着自助设立学术型个人主页提供便捷服务的网络平台。平台建站工具可由学者用户自行掌管，高度定制，随时更新，动态而全方位地展示在校学者的个人学术风采</p>
                            <div class="btm_cont">
                                <ul>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                </ul>
                                <img src="http://127.0.0.1:3000/img/index/jt3.png" alt="">
                            </div>

                        </div>
                    </li>
                    <li class="col col-lg-5 col-md-5 col-sm-12 stuul">
                        <div class="stufour_top">
                            <p class="stutitle yellow">
                                武昌工学院机构知识库<br>
                                OPEN REPOSITORY
                            </p>
                        </div>
                        <div class="stuone_btm">
                            <p>为本校学着自助设立学术型个人主页提供便捷服务的网络平台。平台建站工具可由学者用户自行掌管，高度定制，随时更新，动态而全方位地展示在校学者的个人学术风采</p>
                            <div class="btm_cont">
                                <ul>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                </ul>
                                <img src="http://127.0.0.1:3000/img/index/jt4.png" alt="">
                            </div>

                        </div>
                    </li>
                    <li class="col col-lg-5 col-md-5 col-sm-12 stuul">
                        <div class="stufive_top">
                            <p class="stutitle deepblue">
                                武昌工学院机构知识库<br>
                                OPEN REPOSITORY
                            </p>
                        </div>
                        <div class="stuone_btm">
                            <p>为本校学着自助设立学术型个人主页提供便捷服务的网络平台。平台建站工具可由学者用户自行掌管，高度定制，随时更新，动态而全方位地展示在校学者的个人学术风采</p>
                            <div class="btm_cont">
                                <ul>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                </ul>
                                <img src="http://127.0.0.1:3000/img/index/jt5.png" alt="">
                            </div>

                        </div>
                    </li>
                    <li class="col col-lg-5 col-md-5 col-sm-12 stuul">
                        <div class="stusix_top">
                            <p class="stutitle deepgreen">
                                武昌工学院机构知识库<br>
                                OPEN REPOSITORY
                            </p>
                        </div>
                        <div class="stuone_btm">
                            <p>为本校学着自助设立学术型个人主页提供便捷服务的网络平台。平台建站工具可由学者用户自行掌管，高度定制，随时更新，动态而全方位地展示在校学者的个人学术风采</p>
                            <div class="btm_cont">
                                <ul>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                    <li><span>元数据</span> <span>540,692</span></li>
                                </ul>
                                <img src="http://127.0.0.1:3000/img/index/jt6.png" alt="">
                            </div>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 首页第n个版块  活动&展览&讲座 -->

    <!-- 首页第六个版块 阅读推荐and轮播图 -->
    <div class="ready_groom">
        <!-- <div class="container"> -->
        <div class="hr2 myread">
            <div class="start2">
                <span>阅读推荐</span>
            </div>
        </div>
        <!-- hr2结束 -->
        <ul class="r_g">
            <li class="ready">
                新书通报
            </li>
            <li class="groom">
                教授推荐
            </li>
        </ul>

        <div class="new_info">
            <div class="bigreadybox" :style="styleObj">
                <div class="readybox" v-for="item in list" :key="item.id">
                    <img :src="'http://127.0.0.1:3000/'+item.pic" @click="jumpdetail" :data-nid="item.nid" />
                    <div class="title">{{item.title}}</div>
                    <div class="rearch">
                        索书号：{{item.searchid}}
                    </div>
                    <div class="rearch">
                        {{item.author}} {{item.press}}
                    </div>
                </div>
            </div>

        </div>

        <div class="container btnmore">
            <div class="prev_next">
                <div class="pre">
                    <img v-if="isprev==true" @click="prevbutton" src="http://127.0.0.1:3000/img/index/prev.png" />
                </div>
                <div class="next">
                    <img v-if="isnext==true" @click="nextbutton" src="http://127.0.0.1:3000/img/index/next.png" />
                </div>
            </div>
            <div class="jumpmore" @click="jumpNewbook">
                <span>浏览更多新书</span>
                <img src="http://127.0.0.1:3000/img/index/right1.png" width="20px">
            </div>
        </div>
    </div>


    <!-- 图书馆底部 -->
    <div class="footer">
        <div class="container">
            <div class="indexfoot">
                <p class="pb-5"> ♫本周(2019.02.25-03.03)闭馆音乐曲目：River flows in you </p>
                <div class="pb-5">
                    <a href="javascript:;">武昌工学院</a> &nbsp;|&nbsp;
                    <a href="javascript:;">CALIS</a> &nbsp;|&nbsp;
                    <a href="javascript:;">CASHL</a> &nbsp;|&nbsp;
                    <a href="javascript:;">大学图书馆学报</a> &nbsp;|&nbsp;
                    <a href="javascript:;">文理中心</a> &nbsp;|&nbsp;
                    <a href="javascript:;">图书委</a> &nbsp;|&nbsp;
                    <a href="javascript:;">馆员空间</a> &nbsp;|&nbsp;
                    <a href="javascript:;">图书馆邮箱</a> &nbsp;|&nbsp;
                    <a href="javascript:;">分管流通信息</a> &nbsp;|&nbsp;
                    <a href="javascript:;">馆长信箱</a> &nbsp;|&nbsp;
                    <a href="javascript:;">常用链接</a> &nbsp;|&nbsp;
                    <a href="javascript:;">网站地图</a> &nbsp;|&nbsp;
                    <a href="javascript:;">回到旧版</a>
                </div>
                <p>版权所有 2012-2018 武昌工学院图书馆   <router-link to="/Managerlogin"> -  后台管理 </router-link>  </p>
            </div>
        </div>
    </div>
</div>

</template>
<script>
export default {
    data: function() {
        return {
          msg: '',
          list: [],   /* 新书数据 */
          styleObj:{},
          count:0,
          isprev:false,
          isnext:true
        }
    },
    methods: {
        jump(){
            if(this.msg!='请登录'){
                this.$router.push('/myinfo');
            }else{
                this.$router.push('/Login');
            }
        },
        prevbutton(){      
            this.styleObj = {'margin-right':'182px'};
            this.isnext = true;
            this.count = 0;
        },
        nextbutton(){
            this.isprev = true;            
            if(this.count<=3){
                this.count++;
                this.styleObj = {'margin-left':-190*this.count+'px'};
            }
            if(this.count>3){ 
                this.count = 0;
                this.isnext = false;                
            }
        },
        jumpnewStu(){
            this.$router.push('/newstudent')
        },
        jumpAdvise(){
            this.$router.push('/advise')
        },
        jumpIntro(){
            this.$router.push('/introduction')
        },
        jumpHot(){
            this.$router.push('/Hotbook');
        },
        jumpBorrow(){
            this.$router.push('/Borrow')
        },
        /* 跳转到NewBook组件 */
        jumpNewbook(){
            this.$router.push("/Bulletin")
        },
        newbooks(){
          // 1.发送ajax请求给服务器
          var url = "http://127.0.0.1:3000/Index";
          this.axios.get(url).then(result=>{
            this.list = result.data.data;
            // console.log(result);
          })
        },
        jumpdetail(e) {
        var nid = e.target.dataset.nid;
        this.$router.push("/BookDetail?nid=" + nid);
    },
    },
  created() {
    this.newbooks();
    if(sessionStorage.getItem('uid')){
        this.msg = sessionStorage.getItem('uid')+ "，欢迎你！";
    }else{
        this.msg = "请登录"
    }
  },
    
}

</script>
<style scoped>
.navbar-expand-md .navbar-nav .nav-link {
    padding-right: 0 !important;
    padding-left: 0 !important;
}
body {
    font-family: "PingFang SC", PingFangSC-Regular, "Microsoft YaHei", 微软雅黑, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: rgba(0, 0, 0, 0.78);
}
a,a:hover{
    color: #aaa;
    text-decoration: none !important;
}

body,
ul,
li,
p,
img {
    padding: 0;
    margin: 0;
}

ul li {
    list-style: none;
}

/* 头部 */
header {
    background: url('http://127.0.0.1:3000/img/index/books.jpg') no-repeat top center;
    background-size: cover;
    min-height: 800px;
}

/* logo */
div.top>h1 {
    padding: 18px 50px;
    font-size: 2.8em;
    color: #A0431B;
    font-family: 'Kreon', 'serif', 'mv boli';
}

div.rnav>ul {
    list-style: none;
}

div.rnav>ul li {
    float: left;
    margin: 20px 50px 0 0;
    text-align: center;
}

div.top>ul>li>p {
    font-size: 0.85em;
    color: #999;
}

div.top {
    background: white;
    height: 90px;
    display: flex;
    justify-content: space-between;
}

div.top>h1,
div.rnav>ul {
    display: inline-block;
}

/* 导航栏 */
.navbg {
    background: #ff7f38;
    padding: 0px;
}

.navbg ul {
    width: 100%;
}

.navbg ul>li {
    width: 17%;
    padding: 8px;
}

.navbg ul>li:hover {
    background: #A0431B;
}

/* banner新闻 */
div.ban_news {
    width: 40%;
    float: right;
    margin-top: 150px;
}

div.bcont {
    margin-top: 3em;
    padding: 1em;
    background: rgba(255, 255, 255, 0.51);
}

div.ban_news>button {
    background: #A0431B;
    color: white;
    width: 25%;
    height: 50px;
    border: 0px;
    padding: 0.65em 1em;
    font-size: 0.95em;
    border-bottom: 3px solid #4E2412;
    text-align: center;
}

/* 内容部分 */

div.content a {
    color: rgba(0, 0, 0, 0.78);
}

div.content {
    margin-top: 50px;
    margin-bottom: 50px;
}

div.news,
div.more {
    width: 30px;
    line-height: 24px;
    display: inline-block;
}

div.news {
    display: flex;
    justify-content: flex-end;
}

.news>h2 {
    font-weight: normal;
    font-size: 28px;
    margin-bottom: 1em;
}

div.one,
div.two {
    display: flex;
    margin-bottom: 20px;
}

.left_cont{
    margin-top:25px;
}

div.left_news,
div.right_cont {
    display: inline-block;

}

div.right_cont {
    margin: 0 10px 0 20px;
    padding: 0 0 0 20px;
    border-left: 2px solid #3aa3f9;
}

div.right_cont>ul {
    margin: 0
}

div.right_cont>ul>li {
    padding: 5px;
    list-style: none;
}

div.right_cont>ul>li>a.new {
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    line-height: 24px;
    vertical-align: middle;
}

div.right_cont>ul>li>a.badge {
    color: white
}

span.blue {
    color: #3aa3f9;
    margin: 0 10px;
}

.ibox {
    float: left;
    width: 50%;
    height: 50%;
    padding: 10px;
    overflow: hidden;
}

div.imgbox{
    margin-top: -20px;
}

div.imgbox img {
    float: left;
    width: 15rem;
    height: 15rem;
    transition: 1s
}

div.imgbox img:hover {
    transform: scale(1.08);
}


/* 第二个版块 */
.serve {
    min-height: 700px;
    background: url("http://127.0.0.1:3000/img/bjbg.png") no-repeat right bottom #00a4ff;
    padding-bottom: 48px;
    margin-bottom: 0px;
    width: 100%;
    max-height: 1600px;
}

.hr {
    position: relative;
    width: 100%;
    height: 60px;
    /* background: pink; */
    border-bottom: 2px solid white;
    margin-bottom: 50px;
}

.hr2 {
    position: relative;
    width: 100%;
    height: 60px;
    /* background: pink; */
    border-bottom: 2px solid #00a4ff;
    margin-bottom: 50px;
}

.start span {
    position: absolute;
    display: inline-block;
    /* text-align: center; */
    width: 220px;
    background: #00a4ff;
    color: white;
    font-size: 40px;
    left: 0;
    top: 45px;
    z-index: 10;
}

.start2 span {
    position: absolute;
    display: inline-block;
    /* text-align: center; */
    width: 220px;
    background: #fff;
    color: black;
    font-size: 40px;
    left: 0;
    top: 45px;
    z-index: 10;
}
.student ul,.teacher ul{
    padding-top: 8px;
    padding-left: 5px;
}

.student ul>li,
.teacher ul>li {
    margin-bottom: 10px;
    padding-left: 10px;
}

.student ul li.title,
.teacher ul li.title {
    font-size: 18px;
    color: #1353BD;
    line-height: 50px;
}

.student ul li a,
.teacher ul li a {
    color: rgba(0, 0, 0, 0.78);
    font-size: 14px;
    line-height: 26px;
}

.student ul li a:hover,
.teacher ul li a:hover {
    text-decoration: underline !important;
    color: #337ab7;
}

.myborder {
    border-radius: 1%;
}

.stu {
    color: white;
    margin-bottom: 15px;
}

/* 第三个板版块 */
.leftul li a {
    color: rgba(0, 0, 0, 0.78);
    font-size: 14px;
    line-height: 30px;
}

.rightpic {
    border-left: 1px solid #979797;
    padding-left: 40px;
}

.gcbox {
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    background: #fff;
    overflow: hidden;
}

.gcbox>img {
    transition: opacity 3s;
    opacity: 1;
}

.gcbox>img:hover {
    opacity: 0.2;
    transition-duration: 0s;
}

.gccont a {
    position: absolute;
    width: 100%;
    text-align: center;
    color: #A0431B;
    font-weight: bold;
    bottom: 42%;
    left: 5%;
    opacity: 0;
}

.gccont a:hover {
    text-decoration: underline !important;
    opacity: 1;
}

/* 第四个版块 */
.spmore {
    text-align: right
}

.spebox {
    display: inline-block;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    border-radius: 2%;
    box-shadow: 0 0 8px #888888;
}

.spbigbox li {
    margin: 10px 0 10px 0;
}

.spebox img {
    width: 100%;
    box-sizing: border-box;
    float: left;
    transition: all 0.6s;
}

.spebox img:hover {
    transform: scale(1.08)
}


/* 第五个版块 */
.stuul {
    border: 1px solid #ccc;
    padding: 0px;
    margin: 0px;
    margin: 20px 38px;
}

.stuone_top {
    border-top: 6px solid #34A853;
    border-left: 6px solid #34A853;
    padding: 15px 24px;
}

.stutwo_top {
    border-top: 6px solid #4285F4;
    border-left: 6px solid #4285F4;
    padding: 15px 24px;
}

.stuthree_top {
    border-top: 6px solid #EA4335;
    border-left: 6px solid #EA4335;
    padding: 15px 24px;
}

.stufour_top {
    border-top: 6px solid #FBBC05;
    border-left: 6px solid #FBBC05;
    padding: 15px 24px;
}

.stufive_top {
    border-top: 6px solid #05A8F3;
    border-left: 6px solid #05A8F3;
    padding: 15px 24px;
}

.stusix_top {
    border-top: 6px solid #317600;
    border-left: 6px solid #317600;
    padding: 15px 24px;
}

.stutitle {
    box-sizing: border-box;
    font-size: 24px;
    height: 70px;
    line-height: 35px;
}

.green {
    color: #34A853;
}

.blue {
    color: #4285F4;
}

.red {
    color: #EA4335;
}

.yellow {
    color: #FBBC05;
}

.deepblue {
    color: #05A8F3;
}

.deepgreen {
    color: #317600;
}

.stuone_btm {
    font-size: 14px;
    line-height: 20px;
    padding: 12px 35px;
}

.btm_cont>ul {
    margin-top: 20px;
    width: 50%;
}

.btm_cont>ul li {
    display: flex;
    justify-content: space-between;
}

.btm_cont {
    position: relative;
}

.btm_cont>img {
    position: absolute;
    width: 30px;
    right: 0;
    bottom: 25px;
}

/* 第六个版块  轮播图 */
.ready_groom {
    position: relative;
    margin-top: 50px;
    margin-left: 180px;
}

.r_g {
    position: absolute;
    right: 250px;
    top: -10px;
}

.r_g li {
    padding: 20px;
    display: inline-block;
    width: 200px;
    height: 70px;
    text-align: center;
    align-items: center;
    border: 2px solid #00a4ff;
}

.ready {
    margin-right: -2px;
}

.new_info {
    margin-top: 100px;
    width: 1200px;
    max-height: 650px;
    overflow: hidden;
}

.bigreadybox {
    width: 6000px;
    position: relative;
    margin-left: 0;
    /* -185px */
}

.readybox {
    margin: 0 25px;
    float: left;
    width: 150px;
}


.new_info img {
    width: 90%;
    transition: all 0.6s;
}

.new_info img:hover {
    transform: scale(1.2);
}

.readybox .title {
    color: #4A90E2;
    font-size: 14px;
    line-height: 20px;
    padding-top: 20px;
}

.readybox .rearch {
    color: #000000;
    font-size: 12px;
    line-height: 22px;
}

.myread {
    left: 20px;
}

.prev_next {
    position: relative;
    width: 100px;
    margin: 50px auto;
}

.prev {
    position: absolute;
    /* right: 0; */
}

.next {
    position: absolute;
    right: 0;
    bottom: 0px;

}

.jumpmore {
    text-align: right;
    font-size: 22px;
    margin-right: 80px;
    margin-bottom: 30px;
}

/* footer部分 */
.footer {
    position: relative;
    width: 100%;
    height: 150px;
    background: #242d3c;
    text-align: center;width: 100%!important;
    color: #ffffff;
    padding: 0;
    height: 288px;
    background: url("http://127.0.0.1:3000/img/index/footerbg.png") no-repeat left 16% bottom rgb(17,17,73);
}

.indexfoot{
    margin-top: 50px;
    position: absolute;
    width: 620px;
    color: white;
    right: 200px;
    text-align: right;
}
.indexfoot a{
    color: white;
}

.navbar {
    text-align: center;
    padding: 0 !important;
}

/* PC>=992 */
@media screen and (min-width:992px) {
    div.ban_news>button {
        width: 25%;
    }
}


/* pad>=768px pad<991px */
@media screen and (min-width:768px) and (max-width:991px) {
    div.ban_news>button {
        width: 35%;
    }
}

/* phone<=767 */
@media screen and (max-width: 767px) {
    div.top {
        background: white;
        height: 130px;
        display: block;
    }

    div.top>h1 {
        width: 100%;
        margin: 0px;
        padding: 0px;
        text-align: center;
    }

    div.top>h1,
    div.rnav>ul {
        display: block;
        width: 100%;
        margin-top: 20px; 
    }

    div.rnav>ul>li {
        width: 32%;
        text-align: center;
        margin: 0px;
        padding: 0px;
        /* margin:0 50px 0 50px; */
    }

    .navbg ul>li {
        width: 100%;
        text-align: center;
        padding: 3px 0;
    }

    .navbar-toggler {
        margin: 0 auto;
    }

    .navbar {
        padding: 0 !important;
    }

    div.ban_news>button {
        width: 50%;
    }

    .teacher>ul>li{
        float: left;
    }
    .leftul li a{
        /* display: inline-block; */
        float: left;
        margin-right: 20px;
    }
    .leftul{
        margin-bottom: 100px;
    }
    .stuone_btm{
        display: none;
        margin: 0 !important;
    }

}
</style>


