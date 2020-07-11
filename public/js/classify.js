Vue.componert("classify",{
  template:`<div class="ass">
  <ul>
    <li>
      <div></div>
      <a href="#">中西药品</a>
      <div>
        <a href="#">肠胃用药</a>
        <a href="#">感冒药</a>
        <a href="#">心脑血管</a>
      </div>
      <div class="zxyp">
        <div class="left1">
          <div class="cw" v-for="(c,i) of classify" :key="i">
            <div>
              <a href="javascript:;">{{c}}</a><div class="jiantou"><div></div></div>
            </div>
            <div>
              <a href="javascript:;" v-for="(d,i) of disease" :key="i">{{d}}</a>
            </div>
          </div>
        </div>
        <div class="right1">
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
        </div>
      </div>
    </li>
    <li>
      <div></div>
      <a href="#">医疗器械</a>
      <div>
        <a href="#">血压计</a>
        <a href="#">血糖仪</a>
        <a href="#">创可贴</a>
      </div>
      <div class="zxyp">
        <div class="left1">
          <div class="cw" v-for="(c,i) of classify" :key="i">
            <div>
              <a href="javascript:;">{{c}}</a><div class="jiantou"><div></div></div>
            </div>
            <div>
              <a href="javascript:;" v-for="(d,i) of disease" :key="i">{{d}}</a>
            </div>
          </div>
        </div>
        <div class="right1">
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
        </div>
      </div>
    </li>
    <li>
      <div></div>
      <a href="#">养生保健</a>
      <div>
        <a href="#">滋补药酒</a>
        <a href="#">补钙</a>
        <a href="#">补气养血</a>
      </div>
      <div class="zxyp">
        <div class="left1">
          <div class="cw" v-for="(c,i) of classify" :key="i">
            <div>
              <a href="javascript:;">{{c}}</a><div class="jiantou"><div></div></div>
            </div>
            <div>
              <a href="javascript:;" v-for="(d,i) of disease" :key="i">{{d}}</a>
            </div>
          </div>
        </div>
        <div class="right1">
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
        </div>
      </div>
    </li>
    <li>
      <div></div>
      <a href="#">计生用品</a>
      <div>
        <a href="#">避孕套</a>
        <a href="#">避孕药</a>
        <a href="#">验孕检查</a>
      </div>
      <div class="zxyp">
        <div class="left1">
          <div class="cw" v-for="(c,i) of classify" :key="i">
            <div>
              <a href="javascript:;">{{c}}</a><div class="jiantou"><div></div></div>
            </div>
            <div>
              <a href="javascript:;" v-for="(d,i) of disease" :key="i">{{d}}</a>
            </div>
          </div>
        </div>
        <div class="right1">
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
        </div>
      </div>
    </li>
    <li>
      <div></div>
      <a href="#">中西饮片</a>
      <div>
        <a href="#">西洋参</a>
        <a href="#">三期</a>
        <a href="#">灵芝袍子粉</a>
      </div>
      <div class="zxyp">
        <div class="left1">
          <div class="cw" v-for="(c,i) of classify" :key="i">
            <div>
              <a href="javascript:;">{{c}}</a><div class="jiantou"><div></div></div>
            </div>
            <div>
              <a href="javascript:;" v-for="(d,i) of disease" :key="i">{{d}}</a>
            </div>
          </div>
        </div>
        <div class="right1">
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
        </div>
      </div>
    </li>
    <li>
      <div></div>
      <a href="#">美容护肤</a>
      <div>
        <a href="#">祛痘</a>
        <a href="#">祛斑</a>
        <a href="#">疤痕修复</a>
      </div>
      <div class="zxyp">
        <div class="left1">
          <div class="cw" v-for="(c,i) of classify" :key="i">
            <div>
              <a href="javascript:;">{{c}}</a><div class="jiantou"><div></div></div>
            </div>
            <div>
              <a href="javascript:;" v-for="(d,i) of disease" :key="i">{{d}}</a>
            </div>
          </div>
        </div>
        <div class="right1">
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
          <div><a href="javascript"><img src="img/sb.jpg"></a></div>
        </div>
      </div>
    </li>
  </ul>  
 </div>`,
 data(){
   return {i:0}
 },
 methods:{
   change(i){
     this.i=i;
   }
 }
});