new Vue({
  el:"#app",
  data:{
    num:1,
    // 因为小图片列表左右移动核心是点击的次数，所以data中设置变量times记录点击的次数
    times:0,
    // 发送ajax请求图片信息时，为了防止数据没回来导致images数组为空就加载而报错的现象
    // 我们要设置空字符串来占位images:{md:"",lg:""}
    images:[
      {title:"善存 多维元素片(29) 包装主图",sm:"../img/sm/wss1.jpg",md:"../img/md/wss_b1.jpg",lg:"../img/lg/wss_b1.jpg"},
      {title:"善存 多维元素片(29) 包装侧面图1",sm:"../img/sm/wss2.jpg",md:"../img/md/wss_b2.jpg",lg:"../img/lg/wss_b2.jpg"},
      {title:"善存 多维元素片(29) 包装侧面图2",sm:"../img/sm/wss3.jpg",md:"../img/md/wss_b3.jpg",lg:"../img/lg/wss_b3.jpg"},
      {title:"善存 多维元素片(29) 包装主图",sm:"../img/sm/wss4.jpg",md:"../img/md/wss_b4.jpg",lg:"../img/lg/wss_b4.jpg"},
      {title:"善存 多维元素片(29) 包装侧面图3",sm:"../img/sm/hws1.jpg",md:"../img/md/hws1.jpg",lg:"../img/lg/hws1.jpg"},
      {title:"善存 多维元素片(29) 包装侧面图3",sm:"../img/sm/hws.jpg",md:"../img/md/hws.jpg",lg:"../img/lg/hws.jpg"},
    ],
    // 因为中图片和大图片具体使用哪一张图片和选中的第几张的下标有直接关系
    // 比如：鼠标进入ul下第二张小图片[1]，则中图片和大图片采用images中[1]位置的图片
    i:0,
    hide:0,
    li_hover:{
      nHover:false
    },
    left:"",
    top:""
  },
  methods:{
    // 商品数量增加
    add(){this.num++;},
    // 商品数量减少
    dec(){this.num>0&&this.num--;},
    move(e){//用e.offsetX和e.offsetY获取鼠标位置
      // 为了让mask跟随鼠标移动并让鼠标在mask的中间
      // 所以可以找到mask的top和left
      // console.log(e.offsetX,e.offsetY);
      // 判断top和left的范围
      var left=e.offsetX-88;
      var top=e.offsetY-88;
      if(left<0) left=0; else if(left>244) left=244;
      if(top<0) top=0; else if(top>230) top=230;
      this.top=top+'px';
      this.left=left+'px';
    },
    toggle(){
      this.hide=!this.hide;
    },
    moveleft(){
      (this.times<this.images.length-5)&&this.times++;
    },
    moveright(){this.times>0&&this.times--;},
    changei(e){//采用事件委托，现在触发事件的元素img上绑定自定义属性data-i
      // 用来接收每个img的在v-for时的i值。并把事件放在ul上
      // e.target代替this
      // 只允许Img元素触发事件
      if(e.target.nodeName=="IMG"){
        this.i=e.target.dataset.i;
      }
    }
  },
  mounted(){
    if(this.images.length-5>0){
      this.li_hover={nHover:true}
      console.log(this.li_hover.nHover);
    };
  },
  watch:{
    times(){
      if(this.times==this.images.length-5){
        this.li_hover.nHover=false;
      }else{
        this.li_hover.nHover=true;
      };
    }
  }
})