Vue.component("my-floors",{
  template:`<div class="my-floors">
  <div class="title1">
      <div>
          <div>1</div>
          <div> F</div>
          <span>中西医药</span>     
      </div>
      <ul>
          <li @mouseenter="change(0)" :class="(i==0)?'act':''">
            <a href="#">家庭常用</a>
            <div></div>
          </li>
          <li></li>
          <li @mouseenter="change(1)" :class="(i==1)?'act':''">
            <a href="#">胃肠用药</a>
            <div></div>
          </li>
          <li></li>
          <li @mouseenter="change(2)" :class="(i==2)?'act':''">
            <a href="#">五官科药</a>
            <div></div>
          </li>
          <li></li>
          <li @mouseenter="change(3)" :class="(i==3)?'act':''">
            <a href="#">皮肤科药</a>
            <div></div>
          </li>
          <li></li>
          <li @mouseenter="change(4)" :class="(i==4)?'act':''">
            <a href="#">呼吸系统</a>
            <div></div>
          </li>
          <li></li>
          <li @mouseenter="change(5)" :class="(i==5)?'act':''">
            <a href="#">神经系统</a>
            <div></div>
          </li>
          <li></li>
          <li @mouseenter="change(6)" :class="(i==6)?'act':''">
            <a href="#">心脑血管</a>
            <div></div>
          </li>
      </ul> 
  </div>
  <div class="comm1">
      <div class="ban1">
          <div>
              <a class="left"></a>
              <a class="right"></a>
          </div>
          <div>
              <a><img src="img/ynby.png" alt=""></a><a><img src="img/ynby.png" alt=""></a>
              <a><img src="img/zxyp-logo-3.png" alt=""></a><a><img src="img/zxyp-logo-4.png" alt=""></a>
              <a><img src="img/zxyp-logo-5.png" alt=""></a><a><img src="img/zxyp-logo-6.png" alt=""></a>
          </div>
      </div>
      <div v-if="i==0">
          <ul >
              <li>
                  <a href="#"><img class="big_img" src="img/zhiyang.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/zhiyang.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/zhiyang.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/zhiyang.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/zhiyang.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/zhiyang.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/zhiyang.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/zhiyang.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
          </ul>
      </div>
      <div v-else-if="i==1">
          <ul>
              <li>
                  <a href="#"><img class="big_img" src="img/qh.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥29.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/qh.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/qh.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/qh.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/qh.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/qh.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/qh.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/qh.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
          </ul>
      </div>
      <div v-else-if="i==2">
          <ul >
              <li>
                  <a href="#"><img class="big_img" src="img/wss.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥39.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/wss.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/wss.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/wss.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/wss.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/wss.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/wss.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/wss.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
          </ul>
      </div>
      <div v-else-if="i==3">
          <ul>
              <li>
                  <a href="#"><img class="big_img" src="img/shuanghuanglian.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥49.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/shuanghuanglian.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/shuanghuanglian.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/shuanghuanglian.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/shuanghuanglian.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/shuanghuanglian.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/shuanghuanglian.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/shuanghuanglian.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
          </ul>
      </div>
      <div v-else-if="i==4">
          <ul>
              <li>
                  <a href="#"><img class="big_img" src="img/xer.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥59.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/xer.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/xer.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/xer.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/xer.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/xer.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/xer.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/xer.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
          </ul>
      </div>
      <div v-else-if="i==5">
          <ul>
              <li>
                  <a href="#"><img class="big_img" src="img/xer.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥69.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/xer.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/xer.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/xer.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/xer.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/xer.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/xer.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
              <li>
                  <a href="#"><img class="big_img" src="img/xer.jpg" alt=""></a>
                  <a href="#" class="title2">【丽珠】荆肤止痒颗粒</a>
                  <p class="detail">3g×9袋/盒</p>
                  <p class="price">￥19.80</p>
                  <div class="detail2">用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。</div>
              </li>
          </ul>
      </div>
      <div v-else-if="i==6">
          <ul>
              <li v-for="(m,i) of xnxg" :key="i">
                  <a href="#"><img class="big_img" :src="m.pic"></a>
                  <a href="#" class="title2">{{m.title}}</a>
                  <p class="detail">{{m.detail}}</p>
                  <p class="price">{{m.price}}</p>
                  <div class="detail2">{{m.details}}</div>
              </li>
          </ul>
      </div>
  </div>
</div>`,
data(){
    return {
        i:0,
        xnxg:[
            {
                "pid": 1,
                "title": "【丽珠】荆肤止痒颗粒",
                "detail": "3g×9袋/盒",
                "details": "用于治疗急、慢性支气管炎及各种刺激引起的咳嗽。",
                "pic": "img/zhiyang.jpg",
                "price": "￥19.80",
                "href": "product_details.html?lid=1",
                "seq_recommended": 1,
                "seq_new_arrival": 1,
                "seq_top_sale": 1
            },
            {
                "pid": 2,
                "title": "【丽珠】荆肤止痒颗粒",
                "details": "9g×9袋/盒",
                "pic": "img/xer.jpg",
                "price": "￥29.50",
                "href": "product_details.html?lid=1",
                "seq_recommended": 1,
                "seq_new_arrival": 1,
                "seq_top_sale": 1
            },
            {
                "pid": 1,
                "title": "【丽珠】荆肤止痒颗粒",
                "details": "3g×9袋/盒",
                "pic": "img/zhiyang.jpg",
                "price": "￥19.80",
                "href": "product_details.html?lid=1",
                "seq_recommended": 1,
                "seq_new_arrival": 1,
                "seq_top_sale": 1
            },
            {
                "pid": 1,
                "title": "【丽珠】荆肤止痒颗粒",
                "details": "3g×9袋/盒",
                "pic": "img/zhiyang.jpg",
                "price": "￥19.80",
                "href": "product_details.html?lid=1",
                "seq_recommended": 1,
                "seq_new_arrival": 1,
                "seq_top_sale": 1
            },
            {
                "pid": 1,
                "title": "【丽珠】荆肤止痒颗粒",
                "details": "3g×9袋/盒",
                "pic": "img/zhiyang.jpg",
                "price": "￥19.80",
                "href": "product_details.html?lid=1",
                "seq_recommended": 1,
                "seq_new_arrival": 1,
                "seq_top_sale": 1
            },
            {
                "pid": 1,
                "title": "【丽珠】荆肤止痒颗粒",
                "details": "3g×9袋/盒",
                "pic": "img/zhiyang.jpg",
                "price": "￥19.80",
                "href": "product_details.html?lid=1",
                "seq_recommended": 1,
                "seq_new_arrival": 1,
                "seq_top_sale": 1
            },
            {
                "pid": 1,
                "title": "【丽珠】荆肤止痒颗粒",
                "details": "3g×9袋/盒",
                "pic": "img/zhiyang.jpg",
                "price": "￥19.80",
                "href": "product_details.html?lid=1",
                "seq_recommended": 1,
                "seq_new_arrival": 1,
                "seq_top_sale": 1
            },
            {
                "pid": 1,
                "title": "【丽珠】荆肤止痒颗粒",
                "details": "3g×9袋/盒",
                "pic": "img/zhiyang.jpg",
                "price": "￥19.80",
                "href": "product_details.html?lid=1",
                "seq_recommended": 1,
                "seq_new_arrival": 1,
                "seq_top_sale": 1
            }
        ]
    }
},
methods:{
    change(i){
        this.i=i;
    }
}

})