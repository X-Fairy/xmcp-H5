<template>
    <div class="school">
        <!-- 头部 -->
        <Header tab='6'></Header>
        <div class="main">
            <!-- <div class="linear"></div> -->
            <div class="floor1">
                <div class="info">
                    <img src="@/assets/images/school/1.jpg" alt="">
                    <div class="content">
                        <h4>BUSINESS SCHOOL</h4>
                        <h1>商学院简介</h1>
                        <!-- <p class="line"></p> -->
                        <!-- <P class="title">解码快时尚百货盈利模式 复制十年运营成功知道</P> -->
                        <!-- 运用店面管理经验+店面实际操作的培 训模式，服务全球加盟商，为加盟商提供店面标准化管理流程，并对门店经营中遇见的疑难问题给出指导意见，提升加盟店的盈利能力。 -->
                        <P class="txt" style="margin-top:30px;">熙美诚品商学院成立于2015年，服务于全球加盟商。</P>
                        <p class="txt">截止2019年10月，熙美诚品商学院已举办38期“金牌加盟商培训会”，小型精品培训会14期，培训人次近2000人。</p>
                        <p>分别在北京、广州、南京、西安、重庆、成都等地开课，持续为加盟商后续经营保驾护航。</p>
                    </div>
                    <div class="part">
                        <ul>
                            <li >
                                <span>理念</span>
                                <p>与我们一起，向全球消费者传递快乐和惊喜。</p>
                            </li>
                            <li >
                                <span>目标</span>
                                <p>帮助加盟商实现持续盈利。</p>
                            </li>
                            <li>
                                <span>核心</span>
                                <p>人才培养，提升门店业绩及盈利能力。</p>
                            </li>
                        </ul>
                        <ul style="margin-top: 30px;" class="item">
                            <li style="width: 48%;">
                                <span>思路</span>
                                <p>向加盟商传递熙美文化及核心价值观、方法论；实现管理 流程标准化、团队复制等。</p>
                            </li>
                            <li style="width: 48%;">
                                <span>宗旨</span>
                                <p>道与术相结合，理论与实践相结合，提升消费体验，提高效率， 降低成本。</p>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
            <div class="floor2">
                <div class="banner">
                    <Carousel loop v-model="value" arrow="hover" autoplay :autoplay-speed="5000">
                        <CarouselItem>
                            <div class="demo-carousel"><img src="@/assets/images/school/彩妆.png" alt="" style="width:100%;"></div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel"><img src="@/assets/images/school/门店.png" alt="" style="width:100%;"></div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel"><img src="@/assets/images/school/文化.png" alt="" style="width:100%;"></div>
                        </CarouselItem>
                    </Carousel>
                </div>
                <div class="info">
                    <h4 style="margin-top:30px;">COURSES</h4>
                    <h1>学院课程</h1>
                    <p class="line"></p>
                    <!-- <p style="font-size: 24px;">{{text}}</p> -->
                    <!-- <p>
                        <svg @click="left" style="margin-top:23px;cursor: pointer;" t="1573804999697" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4765" width="25" height="25"><path d="M213.333333 507.733333h725.333334v42.666667H204.8l145.066667 145.066667-29.866667 29.866666L128 533.333333 320 341.333333l29.866667 29.866667L213.333333 507.733333z" fill="#444444" p-id="4766"></path></svg> 
                        <span style="font-size: 16px">{{count}}</span><span>/03</span>
                        <svg @click="right"  style="margin-top:23px;cursor: pointer;" t="1573804640781" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4524" width="25" height="25"><path d="M853.333333 507.733333H128v42.666667h733.866667l-145.066667 145.066667 29.866667 29.866666 192-192L746.666667 341.333333l-29.866667 29.866667 136.533333 136.533333z" fill="#444444" p-id="4525"></path></svg>
                    
                    </p> -->
                </div>
            </div>
            <div class="floor3">
                <h4>TUTOR TEAM</h4>
                <h1>导师团队</h1>
                <p class="line"></p>
                <div class="banner">
                    <Carousel loop v-model="value2" arrow="hover" dots="none" autoplay :autoplay-speed="5000">
                        <CarouselItem>
                            <div class="demo-carousel" style="padding: 0">
                                <img src="@/assets/images/school/3.jpg" alt="" style="width: 100%;">
                                
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">
                                <img src="@/assets/images/school/autor.jpg" alt="" >
                                <div class="content">
                                    <p class="tab"><span class="line"></span>
                                        “
                                        <span class="line"></span>
                                    </p>
                                    <p class="title">王枫 熙美诚品营销中心总经理</p>
                                    <p class="des">1998年开始创业，21年的创业经验。经营多家公司，具有多年实体零售店实战经验。 擅长团队心态管理、绩效管理、成本控制，能使企业
                                        在新零售不断变化的今天，准确、快速的做出决策，现任熙美诚品营销中心总经理。
                                    </p>
                                    <p class="tab"><span class="line"></span>
                                        ”
                                        <span class="line"></span>
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">
                                <img src="@/assets/images/school/6.png" alt="">
                                <div class="content">
                                    <p class="tab"><span class="line"></span>
                                        “
                                        <span class="line"></span>
                                    </p>
                                    <p class="title">刘尧 产品中心健康美容产品经理</p>
                                    <p class="des">熙美诚品产品中心健康美容产品经理，2012年至今担任熙美诚品健康美容类产品培训讲师，从事护肤彩妆行业十年，熙美诚品首席彩妆大师、护肤彩妆体验官。
                                    </p>
                                    <p class="tab"><span class="line"></span>
                                        ”
                                        <span class="line"></span>
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">
                                <img src="@/assets/images/school/4.png" alt="">
                                <div class="content">
                                    <p class="tab"><span class="line"></span>
                                        “
                                        <span class="line"></span>
                                    </p>
                                    <p class="title">江晓梅 运营中心华东大区总监</p>
                                    <p class="des">具有5年门店实战经验，对于门店运营颇深见解，现任华东大区总监；累积下店数量达到300家，为熙美培育了一大批督导、店长服务门店。
                                        
                                    </p>
                                    <p class="tab"><span class="line"></span>
                                        ”
                                        <span class="line"></span>
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">
                                <img src="@/assets/images/school/5.png" alt="">
                                <div class="content">
                                    <p class="tab"><span class="line"></span>
                                        “
                                        <span class="line"></span>
                                    </p>
                                    <p class="title">沈丽琪（运营中心直营部负责人）</p>
                                    <p class="des">熙美首席化妆师、5年督导下店实战经验、300家门店实战经验、8省门店带教经验；擅长商品陈列设计、门店销售技巧、门店彩妆快速入门。
                                    </p>
                                    <p class="tab"><span class="line"></span>
                                        ”
                                        <span class="line"></span>
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div>
                <!-- <div>
                    <svg @click="left2" style="margin-top:23px;cursor: pointer;" t="1573804999697" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4765" width="25" height="25"><path d="M213.333333 507.733333h725.333334v42.666667H204.8l145.066667 145.066667-29.866667 29.866666L128 533.333333 320 341.333333l29.866667 29.866667L213.333333 507.733333z" fill="#444444" p-id="4766"></path></svg> 
                    <span style="font-size: 16px">{{count2}}</span><span>/05</span>
                    <svg @click="right2"  style="margin-top:23px;cursor: pointer;" t="1573804640781" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4524" width="25" height="25"><path d="M853.333333 507.733333H128v42.666667h733.866667l-145.066667 145.066667 29.866667 29.866666 192-192L746.666667 341.333333l-29.866667 29.866667 136.533333 136.533333z" fill="#444444" p-id="4525"></path></svg>
                
                </div> -->
            </div>
            <div class="floor4">
                <h4>TRAINING MEETINGS</h4>
                <h1>培训会一览</h1>
                <p class="line"></p>
                <img src="@/assets/images/school/3.png" alt="" style="margin-bottom: 100px;width: 100%;">
            </div>
        </div>
        <BackTop :height="110" :bottom="30" v-if="show">
            <div class="top">
                <img src="@/assets/images/top.png" alt="">
            </div>
        </BackTop>
        <BackTop :height="110" :bottom="400"  style="position:absolute;" v-else>
            <div class="top">
                <img src="@/assets/images/top.png" alt="">
            </div>
        </BackTop>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from './footer.vue'
import Header from './header.vue'
    export default{
        components: {
            Header,
            Footer,
        },
        data(){
            return{
                value:0,
                text:'彩妆技巧',
                count:'01',
                value2:0,
                count2:'01',
                show:true,
            }
        },
        created(){
          
        },
        mounted(){
            document.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
        },
        methods:{
             /* 滚动显示新闻导航 */
            handleScroll(){
                var top=document.scrollingElement.scrollTop;
                let bottom=$('.footer').offset().top-top;
                if(bottom<830){
                    this.show=false;
                }else {
                    this.show=true;
                }
            },
            change(){
                if(this.value==0){
                    this.text="彩妆技巧";
                    this.count="01"
                }else  if(this.value==1){
                    this.text="门店实操"
                    this.count="02"
                }else  if(this.value==2){
                    this.text="文化复制"
                    this.count="03"
                }
            },
            left(){
                if(this.value>0){
                    this.value--;
                }else{
                    this.value=0
                }
                this.change();
            },
            right(){
                if(this.value<2){
                    this.value++;
                }else{
                    this.value=2
                }
                this.change();
            },
            left2(){
                if(this.value2>0){
                    this.value2--;
                }else{
                    this.value2=0
                }
                if(this.value2==0){
                    this.count2='01'
                }else if(this.value2==1){
                    this.count2='02'
                }else if(this.count2==2){
                    this.count2='03'
                }else if(this.count2==3){
                    this.count2='04'
                }else{
                    this.count2='05'
                }
                
            },
            right2(){
                if(this.value2<4){
                    this.value2++;
                }else{
                    this.value2=0
                }
                if(this.value2==0){
                    this.count2='01'
                }else if(this.value2==1){
                    this.count2='02'
                }else if(this.count2==2){
                    this.count2='03'
                }else if(this.count2==3){
                    this.count2='04'
                }else{
                    this.count2='05'
                }
            }
        },
         destroyed() {
            document.removeEventListener('scroll', this.handleScroll,true);   //  离开页面清除（移除）滚轮滚动事件,
        }
    }
</script>