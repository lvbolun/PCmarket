Vue.component("small-tabs",{
  template:` <div class="small-tabs">
  <ul class="nav">
      <li @mouseenter="change(0)" :class="(i==0)?'active':'unActive'"><a href="#">好评药店</a></li>
      <li @mouseenter="change(1)" :class="(i==1)?'active':'unActive'"><a href="#">新店开张</a></li>
  </ul>
  <ul class="store" v-if="i==0">
      <li class="lead">
          <span class="first">1</span>
          <a href="#" titile="白山市浑江区济恩堂大药房有限公司财政局店" class="g_link">白山市浑江区济恩堂大药房有限</a>
      </li>
      <li class="lead">
          <span class="second">2</span>
          <a href="#" titile="白山市浑江区济恩堂大药房有限公司财政局店" class="g_link">白山市浑江区济恩堂大药房有限</a>
      </li>
      <li class="lead">
          <span class="third">3</span>
          <a href="#" titile="白山市浑江区济恩堂大药房有限公司财政局店" class="g_link">白山市浑江区济恩堂大药房有限</a>
      </li>
      <li class="other">
          <span class="circle"></span>
          <a href="#" class="g_link" title="北京长店迎松堂医药有限责任公司朝阳第三分店">临汾经济开发区国民健康药店</a>
      </li>
      <li class="other">
          <span class="circle"></span>
          <a href="#" class="g_link" title="北京长店迎松堂医药有限责任公司朝阳第三分店">临汾经济开发区国民健康药店</a>
      </li>
      <li class="other">
          <span class="circle"></span>
          <a href="#" class="g_link" title="北京长店迎松堂医药有限责任公司朝阳第三分店">临汾经济开发区国民健康药店</a>
      </li>
      <li class="other">
          <span class="circle"></span>
          <a href="#" class="g_link" title="北京长店迎松堂医药有限责任公司朝阳第三分店">临汾经济开发区国民健康药店</a>
      </li>
      <li class="other">
          <span class="circle"></span>
          <a href="#" class="g_link" title="北京长店迎松堂医药有限责任公司朝阳第三分店">临汾经济开发区国民健康药店</a>
      </li>
      <li class="other">
          <span class="circle"></span>
          <a href="#" class="g_link" title="北京长店迎松堂医药有限责任公司朝阳第三分店">临汾经济开发区国民健康药店</a>
      </li>
      <li class="other">
          <span class="circle"></span>
          <a href="#" class="g_link" title="北京长店迎松堂医药有限责任公司朝阳第三分店">临汾经济开发区国民健康药店</a>
      </li>
  </ul>
  <ul class="store" v-else>
      <li class="lead">
          <span class="first">1</span>
          <a href="#" titile="大庆市让胡路区天盛大药房" class="g_link">大庆市让胡路区天盛大药房</a>
      </li>
      <li class="lead">
          <span class="second">2</span>
          <a href="#" titile="大庆市让胡路区天盛大药房" class="g_link">大庆市让胡路区天盛大药房</a>
      </li>
      <li class="lead">
          <span class="third">3</span>
          <a href="#" titile="吉林市吉康大药房" class="g_link">吉林市吉康大药房</a>
      </li>
      <li class="other">
          <span class="circle"></span>
          <a href="#" class="g_link" title="吉林市吉康大药房">吉林市吉康大药房</a>
      </li>
      <li class="other">
          <span class="circle"></span>
          <a href="#" class="g_link" title="武汉瀚森大药房有限公司">武汉瀚森大药房有限公司</a>
      </li>
      <li class="other">
          <span class="circle"></span>
          <a href="#" class="g_link" title="武汉瀚森大药房有限公司">武汉瀚森大药房有限公司</a>
      </li>
      <li class="other">
          <span class="circle"></span>
          <a href="#" class="g_link" title="武汉瀚森大药房有限公司">武汉瀚森大药房有限公司</a>
      </li>
      <li class="other">
          <span class="circle"></span>
          <a href="#" class="g_link" title="武汉瀚森大药房有限公司">武汉瀚森大药房有限公司</a>
      </li>
      <li class="other">
          <span class="circle"></span>
          <a href="#" class="g_link" title="武汉瀚森大药房有限公司">武汉瀚森大药房有限公司</a>
      </li>
      <li class="other">
          <span class="circle"></span>
          <a href="#" class="g_link" title="武汉瀚森大药房有限公司">武汉瀚森大药房有限公司</a>
      </li>
  </ul>
</div> `,
  data(){
    return {
      i:0,
    }
  },
  methods:{
    change(i){
  		this.i=i;
  	}
  }
})
