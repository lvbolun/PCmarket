new Vue({
  el:"#app",
  data:{
    pno:1,
    pcount:3,
    count:10,
    products1:[
      {
        lid: 1,
        title: "复方阿胶浆 - 东阿股份",
        price: 239.80,
        spec: "20mlx48支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 15,
        md: "../img/md/ej.jpg"
      },
      {
        lid: 2,
        title: "善存 多维元素片(29)",
        price: 67.00,
        spec: "60片/瓶",
        type: "薄膜衣片剂",
        text: "../img/md/guoyaozhunzi.jpg",
        company: "惠氏制药有限公司",
        bus_num: 3,
        md: "../img/md/wss_b1.jpg"
      },
      {
        lid: 3,
        title: "复方阿胶浆 - 东阿股份",
        price: 239.80,
        spec: "20mlx48支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 15,
        md: "../img/md/ej.jpg"
      },
      {
        lid: 4,
        title: "活胃散",
        price: 239.80,
        spec: "20mlx48支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 37,
        md: "../img/md/hws.jpg"
      },
      {
        lid: 5,
        title: "维生素",
        price: 15.98,
        spec: "28mlx28支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 7,
        md: "../img/md/wss_b2.jpg"
      },
      {
        lid: 6,
        title: "维生素",
        price: 67.00,
        spec: "20mlx48支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 10,
        md: "../img/md/wss_b1.jpg"
      },
      {
        lid: 7,
        title: "复方阿胶浆 - 东阿股份",
        price: 239.80,
        spec: "28mlx28支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 15,
        md: "../img/md/wss_b2.jpg"
      },
      {
        lid: 8,
        title: "活胃散",
        price: 321.80,
        spec: "28mlx28支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 48,
        md: "../img/md/hws.jpg"
      },
      {
        lid: 9,
        title: "活胃散",
        price: 321.80,
        spec: "16mlx12支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 48,
        md: "../img/md/wss_b1.jpg"
      },
      {
        lid: 10,
        title: "复方阿胶浆 - 东阿股份",
        price: 321.80,
        spec: "28mlx28支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 48,
        md: "../img/md/ej.jpg"
      }],
    products2:[
      {
        lid: 11,
        title: "善存 多维元素片(29)",
        price: 23.00,
        spec: "20mlx48支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 25,
        md: "../img/md/hws.jpg"
      },
      {
        lid: 12,
        title: "善存 多维元素片(29)",
        price: 67.00,
        spec: "60片/瓶",
        type: "薄膜衣片剂",
        text: "../img/md/guoyaozhunzi.jpg",
        company: "惠氏制药有限公司",
        bus_num: 13,
        md: "../img/md/hws.jpg"
      },
      {
        lid: 13,
        title: "复方阿胶浆 - 东阿股份",
        price: 239.80,
        spec: "20mlx48支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 15,
        md: "../img/md/ej.jpg"
      },
      {
        lid: 14,
        title: "活胃散",
        price: 239.80,
        spec: "20mlx48支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 17,
        md: "../img/md/hws.jpg"
      },
      {
        lid: 15,
        title: "维生素",
        price: 15.98,
        spec: "28mlx28支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 27,
        md: "../img/md/wss_b2.jpg"
      },
      {
        lid: 16,
        title: "维生素",
        price: 67.00,
        spec: "20mlx48支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 10,
        md: "../img/md/wss_b1.jpg"
      },
      {
        lid: 17,
        title: "复方阿胶浆 - 东阿股份",
        price: 239.80,
        spec: "28mlx28支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 15,
        md: "../img/md/hws.jpg"
      },
      {
        lid: 18,
        title: "活胃散",
        price: 321.80,
        spec: "28mlx28支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 16,
        md: "../img/md/ej.jpg"
      },
      {
        lid: 19,
        title: "活胃散",
        price: 321.80,
        spec: "16mlx12支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 34,
        md: "../img/md/hws.jpg"
      },
      {
        lid: 20,
        title: "复方阿胶浆 - 东阿股份",
        price: 11.40,
        spec: "28mlx28支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 21,
        md: "../img/md/wss_b1.jpg"
      }],
    products3:[
      {
        lid: 21,
        title: "复方阿胶浆 - 东阿股份",
        price: 11.40,
        spec: "28mlx28支/盒",
        type: "合剂(无糖型)",
        text: "../img/guoyaozhunzi.jpg",
        company: "东阿阿胶股份有限公司",
        bus_num: 21,
        md: "../img/md/wss_b1.jpg"
      }
    ],
    prevClass:{
      hover:false,
      disabled:true
    },
    nextClass:{
      hover:false,
      disabled:false
    }
  },
  mounted(){
    // 挂载时判断按钮‘下一页’是否高亮
    if(this.pcount>1){
      this.nextClass={disabled:false,hover:true}
    }
  },
  methods:{
    change(e){
      if(e.target.nodeName=="A"){
        this.pno=e.target.dataset.p;
      }
    },
    next(){this.pno<this.pcount&&this.pno++;console.log(this.pno)},
    prev(){this.pno>1&&this.pno--;console.log(this.pno)}
  },
  watch:{
    pno(){
      // 判断左侧的禁用和启用
      if(this.pno==1){
        this.prevClass={disabled:true,hover:false}
      }else{
        this.prevClass={disabled:false,hover:true}
      }
      // 判断右侧的禁用和启用
      if(this.pno==this.pcount){
        this.nextClass={disabled:true,hover:false}
      }else{
        this.nextClass={disabled:false,hover:true}
      }
    }
  }
});

$(function(){
  // 查找点击按钮
  $(".xia").click(function(){
    $(".classify>ul:last-child>li+li").toggle();
    var $btn=$(this);
    $btn.toggleClass("shang");
  });
})