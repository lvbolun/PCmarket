Vue.component("my-tabs",{
  template:` <div id="my-tabs">
    <div>
        <div @mouseenter="change(0)" :style="{background:i==0?'#fff':''}">热门商品</div>
        <div @mouseenter="change(1)" :style="{background:i==1?'#fff':''}">友情链接</div>
        <div></div>
    </div>
    <ul v-if="i==0">
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
        <li><a href="#">白云山</a></li>
    </ul>
    <ul v-else>
        <li><a href="#">唯美乐</a></li>
        <li><a href="#">唯美乐</a></li>
        <li><a href="#">唯美乐</a></li>
        <li><a href="#">唯美乐</a></li>
        <li><a href="#">唯美乐</a></li>
        <li><a href="#">唯美乐</a></li>
        <li><a href="#">唯美乐</a></li>
        <li><a href="#">唯美乐</a></li>
        <li><a href="#">唯美乐</a></li>
        <li><a href="#">唯美乐</a></li>
        <li><a href="#">唯美乐</a></li>
        <li><a href="#">唯美乐</a></li>
        <li><a href="#">唯美乐</a></li>
        <li><a href="#">唯美乐</a></li>
        <li><a href="#">唯美乐</a></li>
        <li><a href="#">唯美乐</a></li>
        <li><a href="#">唯美乐</a></li>
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
})
