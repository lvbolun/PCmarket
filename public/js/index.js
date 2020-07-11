// // 现在正在显示第几张图片，从0开始
// var i=0;
// // 每个li的固定宽度
// var LiWith=780;
// // 每次轮播动画持续时间
// var duration=500;
// // li的总个数
// var LiCount=5;
// // 要移动的Ul
// var ulImgs=document.querySelectorAll("[data-ride=toggle]");
// console.log(ulImgs);
// // 找到包含跑马灯的ul
// var ulNo=document.getElementsByClassName("no");
// // 小圆点的元素列表
// var lis=ulNo.children;
// // 从当前位置移动到任意一个范围内的位置
// function moveTo(to){
//   // 如果用户没有传入要跳到第几张图，就默认跳到当前图的下一张
//   if(to==undefined){
//     to=i+1;
//   }
//   if(i==0){//如果滚动时从头开始，再重新加上transition
//     ulImgs.className="transition";
//   }
//   // 先将表示第几张图片的变量i变为目标位置
//   i=to;
//   // 再用i计算ulImgs的marginLeft距离
//   ulImgs.style.marginLeft=-i*LiWith+"px";
//   // 先删除所有跑马灯的class
//   for(var li of lis){
//     li.className="";
//   }
//   if(i==LiCount){//当前图片是最后一张时
//     // 把i的值初始化为0
//     i=0;
//     // 当transition动画播放完之后，才
//     setTimeout(function(){
//       ulImgs.className="";//清掉transition属性
//       ulImgs.style.marginLeft=0;//将ulImgs拉回到位置0
//     },duration)
//   }
//   // 再给当前位置的小圆点添加class active
//   lis[i].className="active";
// }

// Vue
var vm=new Vue({
  el:"#app",
  data:{
    disease:["胃炎","胃溃疡","急性胃炎","十二指肠溃疡","胆囊炎","便秘","消化不良","消化不良"],
    classify:["肠胃用药","呼吸系统","心脑血管","风湿骨科","抗肿瘤药","皮肤科药"]
  },
  
})

// jq
$(function(){
   /*页面底部tabs*/
  // 1.查找触发事件元素
  // 用事件委托，绑定事件触发函数到分类的div.ass上
  $(".ass")
  // 2.绑定事件处理函数
  // 只允许标签为li的元素触发
  .on("mouseenter","li",function(){
    // 3.查找要修改的元素
    $(this)  //目标元素本身
    // 4.修改元素
    .addClass("hover")
    .prev()
    .css("border-bottom","0")
  })
  .on("mouseleave","li",function(){
    // 3.查找要修改的元素
    $(this)  //目标元素本身
    // 4.修改元素
    .removeClass("hover")
    .prev()
    .css("border-bottom","")
  })
  /***************************/
  /*滚动条*/
  // 1.先做滚动超过500就显示返回顶部按钮
  // 设置全局变量scrollTop
  var $scrollTop;
  // 当页面滚动时
  $(window).scroll(
    function(){
    // 首先获得页面上方滚动超出的距离
    $scrollTop=document.body.scrollTop||
        document.documentElement.scrollTop;
        
    //  找到要修改的元素
    var $toTop=$(".toTop");
    //  如果滚动距离>=500时，就显示返回顶部按钮
        if($scrollTop>=500){
          $toTop.css("display","block");
        }else{//否则如果滚动距离<500，就隐藏返回顶部按钮
          $toTop.css("display","none");
        }

    // 想修改顶部搜索框
    var $fixtop=$(".fixtop");
        if($scrollTop>=300){
          $fixtop.css("display","block");
        }else{
          $fixtop.css("display","none");
        }


    // 找到要修改的左侧
    var $elevator=$(".elevator");
    // 如果滚动距离大于750，左侧显示
      if($scrollTop>=750){
        $elevator.css("display","block");
      }
      else{//否则就隐藏
        $elevator.css("display","none");
      }
    
    // 页面滚动距离对应每个楼层的显示
    var $floor1=750;
    var $floor2=1400;
    var $floor3=1900;
    var $floor4=2500;
    var $floor5=3100;
    var $floor6=3700;
      
    if($scrollTop > $floor1){
      $(".subFloor").eq(0).delay(300).addClass("hover").siblings("li").removeClass("hover");
    }
    if($scrollTop > $floor2){
      $(".subFloor").eq(1).delay(300).addClass("hover").siblings("li").removeClass("hover");
    }
    if($scrollTop > $floor3){
      $(".subFloor").eq(2).delay(300).addClass("hover").siblings("li").removeClass("hover");
    }
    if($scrollTop > $floor4){
      $(".subFloor").eq(3).delay(300).addClass("hover").siblings("li").removeClass("hover");
    }
    if($scrollTop > $floor5){
      $(".subFloor").eq(4).delay(300).addClass("hover").siblings("li").removeClass("hover");
    }
    if($scrollTop > $floor6){
      $(".subFloor").eq(5).delay(300).addClass("hover").siblings("li").removeClass("hover");
    }

   
    
  //  $(".subFloor").on("click",function(){
  //   var n = $(this).index();
  //   $(".subFloor").eq(n).delay(300).addClass("hover").siblings("li").removeClass("hover");
  //   var $loutitop=$('.subFloor').eq($(this).index()).offset().top;
  //   // console.log(n);
  //   // console.log(`${$floor + n}`);
  //   // $("body,html").animate({scrollTop:$loutitop},50);
  //   });
   
    $(".zx").hasClass("hover")?$(".zx1").addClass("active"):$(".zx1").removeClass("active")
    $(".ys").hasClass("hover")?$(".ys2").addClass("active"):$(".ys2").removeClass("active")
    $(".yl").hasClass("hover")?$(".yl3").addClass("active"):$(".yl3").removeClass("active")
    $(".js").hasClass("hover")?$(".js4").addClass("active"):$(".js4").removeClass("active")
    $(".zy").hasClass("hover")?$(".zy5").addClass("active"):$(".zy5").removeClass("active")
    $(".mr").hasClass("hover")?$(".mr6").addClass("active"):$(".mr6").removeClass("active")


    // 2.再做点击返回顶部,就滑动返回顶部
    // 2.1查找触发事件的元素返回顶部元素
    
  })
  var $a=$(".toTop");
        $a.click(function(e){
          // 取消默认行为
          e.preventDefault();
         // 三要素：总距离 总距离 总时间
         // 总距离
         var $dist=$scrollTop;
         // 总步数
         var $steps=50;
         // 总时间
         var $dura=500;
         // 计算出：每步走多长  每步花费时间
         // 每步走多长
         var $step=$dist/$steps;
         // 每步花费时间
         var $interval=$dura/$steps;//不要小于10，因为定时器最小只能到这个值
         // 使用周期性定时器
         var $timer=setInterval(function(){
           //设置网页每次滚动回指定的一步距离
           window.scrollBy(0,-$step);
           // 每走一不，就把步数-1
           $steps--;
           // 如果步数走完，说明到头了
           if($steps==0){
             // 清除定时器，不再走了
             clearInterval($timer);
             //将记录总步数变量还原回初始值，为下一次移动做准备
             $steps=50;
           }
         },$interval)//每隔一段时间移动一次
  })      
})
