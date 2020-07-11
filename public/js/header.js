Vue.component("my-header",{
  template:`<div class="my-header">
  <!-- 顶部导航条 -->
  <div class="top_nav">
    <div id="d1">
      <ul>
        <li><div></div></li>
        <li><a href="#">收藏药房网商城</a></li>
        <li class="xian"></li>
        <li>
          <div></div>
          <div class="icon_wx">
            <img src="img/icon_wx_big.jpg" alt="">
            <p>微信扫描二维码，查药比价更方便！</p>
          </div>
        </li>
        <li><a href="#">微信查价</a> </li>
        <li class="xian"></li>
        <li>
          <div></div>
          <div class="icon_wx">
            <img src="../img/icon_app_big.png" alt="">
            <!-- <p>药房网商城App，注册就送20元</p> -->
          </div>
        </li>
        <li> <a href="#">手机APP</a></li>
        <li class="xian"></li>
        <li>
          <div></div> 
          <div class="icon_wx">
            <img src="../img/icon_xcx_big.png" alt="">
            <!-- <p>药房网商城App，注册就送20元</p> -->
          </div>
        </li>
        <li><a href="#">小程序查价</a> </li>  
      </ul>
      <ul>
        <li>
          <a href="#">登录</a> / <a href="#">免费注册</a>
        </li>
        <li>
        </li>
        <li class="shop">
          <div class="shop_car"></div>
          <a href="#">需求单(0)</a>
          <ul class="res">
            <li>
              您的购物车目前没有任何商品，建议您<a href="#">[登录]</a>查看
            </li>
          </ul>
        </li>
        <li class="self">
          <a href="#">个人中心</a>
          <div></div>
          <ul>
            <li><a href="javascript:;">需求管理</a></li>
            <li><a href="javascript:;">地址管理</a></li>
            <li><a href="javascript:;">我的咨询</a></li>
            <!-- <li><a href="javascript:;">我的问答</a></li> -->
            <li><a href="javascript:;">最近浏览</a></li>
          </ul>
        </li>
        <li></li>
        <li class="xian"></li>
        <li><a href="#">收藏夹</a></li>
        <li class="xian"></li>
        <li><a href="#">客服中心</a> </li>
        <li class="lead">
          <a href="#">网站导航</a>
          <div></div>
          <ul>
            <li class="health">
              <div>健康咨询</div>
              <ul>
                <li><a href="javascript:;">医药资讯</a></li>
                <li><a href="javascript:;">疾病知识</a></li>
                <li><a href="javascript:;">用药指导</a></li>
                <li><a href="javascript:;">健康问答</a></li>
              </ul>
            </li>
            <li></li>
            <li class="health">
              <div>健康咨询</div>
              <ul>
                <li><a href="javascript:;">健康专题</a></li>
                <li><a href="javascript:;">医院大全</a></li>
                <li><a href="javascript:;">药房联盟</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="join"><a href="join.html">商家入驻</a></li>
      </ul>
    </div>
  </div>
  <!-- 网页标题 -->
  <div class="logo">
    <!-- logo -->
    <div>
       <a href="#">
        <img src="img/logo.jpg" alt="">
       </a> 
    </div>
    <!-- 搜索框 -->
    <div>
      <div>
        <a href="#" class="choose">
          商品
          <span></span>   
        </a>
        <input type="text" placeholder="请输入批准文号、通用名、商品名、症状" class="search">
        <a href="#" class="search_btn">搜索</a>
      </div>
      <ul>
        <li>
          <a href="#" title="补血"><span>补血</span></a> 
        </li>
        <li><a href="#" title="999">999</a></li>
        <li><a href="#" title="片仔癀">片仔癀</a></li>
        <li><a href="#" title="妈富隆">妈富隆</a></li>
        <li>
          <a href="#" title="阿胶"><span>阿胶</span></a>
        </li>
        <li><a href="#" title="金戈">金戈</a></li>
        <li><a href="#" title="汤臣倍健">汤臣倍健</a></li>
      </ul>
    </div> 
     <!--品质保障  -->
    <div>
      <a href="#"></a>
    </div>
  </div>  
  </div>`
})
