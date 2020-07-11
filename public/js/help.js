new Vue({
  el:"#app",
  
});

$(function(){
  // 1.查找触发事件的元素
  // 本例中：因为所有title都可点击，所以应该用事件委托优化，事件
  // 应该绑定在父元素上一份即可
  $(".title").click(function(){
    // console.log($(this).next());
    $(this).next().toggleClass("in");
    $(this).parent().siblings().children(".container").removeClass("in")
    $(this).children(":first-child").toggleClass("jia");

  })
})