<template>
    <div class="index">
        <!-- 头部 -->
        <Header tab='1'></Header>
        <!-- 中间内容 -->
        <div class="main">
            <!-- <h1 class="media">123</h1> -->
            <div class="banner">
                <Carousel autoplay v-model="value" loop :autoplay-speed="5000">
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="@/assets/images/banner/PC-banner1.jpg" alt="">
                            <img class="icon" src="@/assets/images/icon/5.png" alt="" @click="change">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="@/assets/images/banner/PC-banner2.jpg" alt="">
                            <img class="icon" src="@/assets/images/icon/5.png" alt="" @click="change">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="@/assets/images/banner/PC-banner3.jpg" alt="">
                            <img class="icon" src="@/assets/images/icon/5.png" alt="" @click="change">
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
            <div class="floor1">
                <div class="left">
                    <div class="info1">
                        <h3>加盟+</h3>
                        <div>
                            <p>Franchise</p>
                            <p>Investment</p>
                        </div>
                        
                    </div>
                    <ul>
                        <li :class="{'actived':index === 1}">
                            <img src="@/assets/images/icon/1.png" alt="">
                            <p>企业信息</p>
                        </li>
                        <li>
                            <a href="http://www8.53kf.com/m.php?cid=72055204" style="color: #495060;">
                                <img src="@/assets/images/icon/2.png" alt="">
                                <p>在线咨询</p>
                            </a>
                        </li>
                        <li @click="$router.push({path: '/store'})">
                            <img src="@/assets/images/icon/3.png" alt="">
                            <p>店面展示</p>
                        </li>
                        <li @click="$router.push({path: '/order'})">
                            <img src="@/assets/images/icon/4.png" alt="">
                            <p>招商加盟</p>
                        </li>
                    </ul>
                    <div class="linear"></div>
                    <div class="info2">
                        <div class="text">
                            <h1>熙美诚品快时尚百货品牌</h1>
                            <p>与我们一起向全球消费者传递快乐和惊喜</p>
                        </div>
                        <p class="line"></p>                      
                        <p>XIMIVOGUE Fast Fashion Department Store Brand</p>
                    </div>
                </div>
                <div class="right">
                        <!-- @canplay="onPlayerCanplay($event)" -->
                    <video-player style="width: 100%;height: 100%;"  id="video"  class="video-player vjs-custom-skin"   :options="playerOptions" >
                    </video-player>
                </div>
            </div>
            <div class="banner2">
                <Carousel autoplay v-model="value1" loop :autoplay-speed="5000">
                    <CarouselItem>
                        <div class="demo-carousel"><img src="@/assets/images/banner/banner2.jpg" alt=""><p class="text">北欧风格 - 简约时尚契合潮流</p></div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel"><img src="@/assets/images/banner/7.png" alt="">
                            <!-- <p class="text">北欧风格 - 简约时尚契合潮流</p> -->
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel"><img src="@/assets/images/banner/8.png" alt="">
                            <!-- <p class="text">北欧风格 - 简约时尚契合潮流</p> -->
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
            <!-- <div class="floor2">
                <div class="title">
                    <h4>GLOBAL OVERSEAS MARKET</h4>
                    <h1>熙美诚品海外市场增长迅速</h1>
                    <p class="line"></p>
                    <p>好品牌无国界，截止目前，熙美诚品与<span>美国、加拿大、英国、印度、俄罗斯、新加坡、澳大利亚、巴西沙特阿拉伯等</span>确定了合作伙伴关系 与全球84个国家和地区达成战略合作关系，
                        平局每一天有1-2家熙美诚品开业，特别是东南亚各国、俄罗斯、美国、摩洛哥、迪拜等地区，门店数量正在快速递增，熙美诚品，全球从业人员8000多，平均每天有350万元的产品通过熙美在全球的门店，
                        传递到消费者手中，每天有180万人次光顾熙美在全球的门店</p>
                    <img src="@/assets/images/index/earth.jpg" alt="" style="width: 100%;">
                </div>
            </div> -->
            <div class="floor3">
                <img src="@/assets/images/index/5.jpg" alt="" style="width: 100%;margin: auto;height:1000px">
                <div class="info">
                        <h4>WHY CHOOSE US</h4>
                        <h1>我们的优势</h1>
                        <p class="line"></p>
                </div>
                <ul class="content">
                    <li>
                        <div>
                            <p class="title">军事化管理团队</p>
                            <p class="subtitle">作风过硬、保障有力，超强 执行力团队</p>
                        </div>
                        <span class="num">01</span> 
                    </li>
                    <li>
                        <div>
                            <p class="title"><span>50000</span>平方米仓储物流中心</p>
                            <p class="subtitle">为客户提供无忧的货品供给，3.9亿库存</p>
                        </div>
                        <span class="num">02</span> 
                    </li>
                    <li>
                        <div>
                            <p class="title">二店率高达<span>38%</span></p>
                            <p class="subtitle">老加盟商开2店或多店超过400家</p>
                        </div>
                       <span class="num">03</span> 
                    </li>
                    <li>
                        <div>
                            <p class="title"><span>10</span>年行业沉淀</p>
                            <p class="subtitle">大数据基础、团队基础、供应链基础</p>
                        </div>
                        <span class="num">04</span> 
                    </li>
                    <li>
                        <div>
                            <p class="title"><span>1000</span>家优质产品供应商</p>
                            <p class="subtitle">50%合作5年以上的优质供应商，产品质量是企业的生命线</p>
                        </div>
                       <span class="num">05</span> 
                    </li>
                    <li>
                        <div>
                            <p class="title">天下武功，唯快不破</p>
                            <p class="subtitle">平均每个月800款新品的速度，同行业的标杆</p>
                        </div>
                       <span class="num">06</span> 
                    </li>
                    <li>
                        <div>
                            <p class="title"><span>7</span>个大区督导服务</p>
                            <p class="subtitle">督导下店，服务范围覆盖全国，平均每季度下店服务超过900家店</p>
                        </div>
                       <span class="num">07</span> 
                    </li>
                    <li>
                        <div>
                            <p class="title">供应链</p>
                            <p class="subtitle">6000款SKU，百分百全系列定制产品，品质有保证，首批货品 百分百调换货政策</p>
                        </div>
                       <span class="num">08</span> 
                    </li>
                    <li>
                        <div>
                            <p class="title">全年度<span>12</span>场商学院培训会</p>
                            <p class="subtitle">行业人才孵化器，七个大区巡回培训</p>
                        </div>
                        <span class="num">09</span> 
                    </li>
                    <li>
                        <div>
                            <p class="title">整店输出</p>
                            <p class="subtitle">选址、开店、货品供给、督导下店，全程持续服务，让加盟商 开店无忧</p>
                        </div>
                        <span class="num">10</span> 
                    </li>
                </ul>
                
                <div class="banner2" style="margin-top: -5px;">
                    <Carousel autoplay v-model="value2" loop :autoplay-speed="5000">
                        <CarouselItem>
                            <div class="demo-carousel"><img src="@/assets/images/banner/3.png" alt=""></div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel"><img src="@/assets/images/banner/4.png" alt=""></div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel"><img src="@/assets/images/banner/5.png" alt=""></div>
                        </CarouselItem>
                      
                    </Carousel>
                </div>
            </div>
            <div class="floor4">
                <h4>PRODUCT CATEGORIES</h4>
                <h1>9大类产品</h1>
                <p class="line"></p>
                <p style="font-size: 16px;text-align:left; text-indent: 2em;">XIMIVOGUE熙美诚品是集品质、价格、创意、设计、供应和销售于一体，为全球消费者传递快乐和惊喜的快时尚百货品牌。
                    以“物超所值”为核心理念超强整合生活百货、彩妆护肤、文体礼品、饰品系列、休闲食品、精美包饰、毛绒玩具、数码配件、季节产品等九大品类。竭尽全力为全球消费者打造超越他们预期的产品。
                </p>
                <img src="@/assets/images/index/4.jpg" alt="" style="width: 100%;margin-top: 20px;">  
            </div>
            <!-- <div class="product">
                <Carousel :autoplay="false" v-model="value3" loop :autoplay-speed="5000" dots="none"  arrow="always">
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="@/assets/images/banner/product/1.jpg" alt="">
                            <img src="@/assets/images/banner/product/2.jpg" alt="">
                            <img src="@/assets/images/banner/product/3.jpg" alt="">
                            <img src="@/assets/images/banner/product/4.jpg" alt="">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="@/assets/images/banner/product/5.jpg" alt="">
                            <img src="@/assets/images/banner/product/季节产品.png" alt="">
                            <img src="@/assets/images/banner/product/精美包饰.png" alt="">
                            <img src="@/assets/images/banner/product/生活百货.png" alt="">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="@/assets/images/banner/product/休闲食品.png" alt="">
                        </div>
                    </CarouselItem>
                </Carousel>
            </div> -->
            <div class="floor5">
                <div class="infos">
                    <h1>全面的开店支持体系</h1>
                    <p class="line"></p>
                    <p class="txt">解决经营痛点 助您开店无忧</p>
                    <ul>
                        <li><img src="@/assets/images/icon/circle.jpg" alt=""><p>免费提供店面选址服务，专业评估店面可行性</p></li>
                        <li><img src="@/assets/images/icon/circle.jpg" alt=""><p>专业空间设计团队，免费设计店铺提供装修指导</p></li>
                        <li><img src="@/assets/images/icon/circle.jpg" alt=""><p>海鼎ESHOP智能ERP收银软件，全面把控店面运营情况</p></li>
                        <li><img src="@/assets/images/icon/circle.jpg" alt=""><p>高级督导老师下店指导，查漏补缺提升店面营业额</p></li>
                        <li><img src="@/assets/images/icon/circle.jpg" alt=""><p>每月商学院培训支持，提高店铺运营管理能力</p></li>
                    </ul>
                </div>
            </div>
            <div class="floor6">
                <div class="title">
                    <h4>Public Praise & Popularity</h4>
                    <h1>口碑好店  人气爆棚</h1>
                    <p class="line"></p>
                    <img src="@/assets/images/index/3.jpg" alt="" style="width: 100%;">
                </div>
            </div>
            <div class="floor7">
                <div class="title">
                    <h4>News & information</h4>
                    <h1>行业动态  熙美资讯</h1>
                    <p class="line"></p>
                    <ul class="news">
                        <li v-for="(item,index) in newList" :key="index" @click="detail(item.id)" class="artitem">
                            <img :src="item.pathname" alt="" title="点击查看详情">
                            <p class="time">{{item.editeddate}}</p>
                            <div>
                                <p class="title">{{item.title}}</p>
                                <p class="subtitle">{{item.content}}</p>
                            </div>
                        </li>
                    </ul>
                    <p class="more" @click="$router.push({path: '/news'})">查看全部</p>
                </div>
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
import https from '@/http.js'
export default {
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            show:true,
            // 轮播图
            value:0,
            value1:0,
            value2:0,
            value3:0,
            // 点击菜单
            index:1,
            // 视频播放
            playerOptions :	{
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                    type: 'video/mp4',
                    src: "http://www.xmcpcn.com/img/%E7%86%99%E7%BE%8E%E5%8D%81%E5%91%A8%E5%B9%B4%E7%9B%9B%E5%85%B8.mp4", //url地址
                }],
                poster: "../../static/video.jpg", //你的封面地址
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                // controlBar: {
                //     timeDivider: true,
                //     durationDisplay: true,
                //     remainingTimeDisplay: false,
                //     fullscreenToggle: true  //全屏按钮
                // }
                
            },
            prolist:[
                {id:1,img:'../../images/banner/product/1.jpg'},
                {id:1,img:'../images/banner/product/2.jpg'},
                {id:1,img:'../images/banner/product/3.jpg'},
                {id:1,img:'../images/banner/product/4.jpg'},
                {id:1,img:'../images/banner/product/5.jpg'},
            ],
            // 轮播
            swiperOption: {
                // virtual: true,
                loop: true,
                autoplay:false,
                loop:true,
                slidesPerView : 3,
                slidesPerGroup : 1,
                // pagination: {
                //     el: '.swiper-pagination'
                // }
            },
            // 新闻
            newList:[],
        }
    },
    mounted(){
        document.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
    },
    created() {
        this. getnew();
        this.toFullVideo();

    },
    computed: {
        
    },
    methods: {
         /* 滚动显示新闻导航 */
         handleScroll(){
            var top=document.scrollingElement.scrollTop;
            if(top>200){
                $('.header').css({"top":"0"});
                $('.header').css({"background":"#fff"});
            }else{
                $('.header').css({"top":"20px"});
                $('.header').css({"background":"none"});
            }
            let bottom=$('.footer').offset().top-top;
            if(bottom<830){
               this.show=false;
            }else {
                this.show=true;
            }
        },
        change(){
            document.scrollingElement.scrollTop=700;
        },
        // 视频播放
        play(){
            var video =$('#video');
            if(video.paused){
              video.play();
            }else if(video.play()){
               video.pause();
             }
        },
        //在vue-video-player的onPlayerCanplay(视频可播放)这个方法中添加回调
        toFullVideo() {
            
            if ($('#video').requestFullScreen) {
                $('#video').requestFullScreen();
            } else if ($('#video').mozRequestFullScreen) {
                $('#video').mozRequestFullScreen();
            } else if ($('#video').webkitRequestFullScreen) {
                $('#video').webkitRequestFullScreen();
            } else if ($('#video').msRequestFullscreen) {
                $('#video').msRequestFullscreen();
            }
        },
        // 获取新闻
        getnew(){
            https.get('/gyanwang/index.php/Home/Index/homepage').then((data) => {
               this.newList=data.data;
            //    this.newList.forEach(ele=>{
            //        ele.editeddate.substr(10,9);
            //    })
                for(let i in this.newList){
                    this.newList[i].editeddate.substr(10,9);
                    this.newList[i].pathname='http://www.xmcpcn.com/'+this.newList[i].pathname
                    // this.newList[i].title=this.newList[i].title.substr(0,15)+'...';
                    this.newList[i].content=this.newList[i].content.replace(/<p (.*?)>/gi,"").replace(/<\/p>/gi,"").replace(/<div (.*?)>/gi,"").replace(/<\/div>/gi,"").replace(/<span (.*?)>/gi,"").replace(/<\/span>/gi,"");
                    
                    this.newList[i].content=this.newList[i].content.replace(/&nbsp;/gi,'').replace(/<p>/gi,'').replace(/<br \/>/gi,'').replace(/<h2 (.*?)>/gi,"").replace(/<\/h2>/gi,'').replace(/<span>/gi,'').slice(0,40)+'...'
                    // this.newList[i].editeddate=this.newList[i].editeddate.slice(0,10);
                }
            }).catch((err)=>{
                console.log(err)

            })
        },
        // 查看文章详情
        detail(id){
            this.$router.push({path:'/newDetail',query:{num:id}})
        }
       
    },
    destroyed() {
        document.removeEventListener('scroll', this.handleScroll,true);   //  离开页面清除（移除）滚轮滚动事件,
    }
}
</script>

<style lang="less" scoped>
    #main-content{
        background: #fff;
    }
</style>



