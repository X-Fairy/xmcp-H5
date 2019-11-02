<template>
    <div class="index">
        <!-- 头部菜单 -->
        <Header></Header>
        <!-- 轮播图 -->
        <div class="banner">
            <!-- <mt-swipe :auto="4000">
                <mt-swipe-item><div><img src="@/assets/images/banner/banner1.jpg" alt=""></div></mt-swipe-item>
                <mt-swipe-item><img src="@/assets/images/banner/banner2.png" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="@/assets/images/banner/banner3.png" alt=""></mt-swipe-item>
            </mt-swipe> -->
            <!-- <Carousel v-model="value1" loop>
                <CarouselItem>
                    <div class="demo-carousel">1</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">2</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">3</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">4</div>
                </CarouselItem>
            </Carousel> -->
            <Carousel v-model="value" loop autoplay  arrow="always" dots="inside"  :autoplay-speed='speed'>
                <CarouselItem>
                    <div class="demo-carousel"><img src="@/assets/images/banner/banner1.jpg" alt=""></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="@/assets/images/banner/banner2.png" alt=""></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="@/assets/images/banner/banner3.png" alt=""></div>
                </CarouselItem>
            </Carousel>
        </div>
        <!-- 快速入口 -->
        <div class="entry">
            <div class="entry1">
                <img src="@/assets/images/企业信息.png" alt="" @click="$router.push({path: 'enterprise'})" >
                <a href="tel:4008635888"><img src="@/assets/images/电话资讯.png" alt=""></a>
            </div>
            <div class="entry2">
                <img src="@/assets/images/店面展示.png" alt="" @click="$router.push({path: 'store'})">
                <img src="@/assets/images/招商加盟.png" alt="" @click="$router.push({path: 'orders'})">
            </div>
        </div>
        <div class="main" style="top: 0;margin-bottom: 0;background: #ebebeb;">
            <!-- <img src="@/assets/images/index1.jpg" alt="" @click="$router.push({path: 'enterprise'})" > -->
            <div style="margin: auto;top: 0;text-align:center;width: 100%;">
                <video-player  id="video"  class="video-player vjs-custom-skin"   :options="playerOptions"
                    x-webkit-airplay="allow"
                    x5-video-player-type="h5"
                    x5-playsinline="true"
                    webkit-playsinline="true"
                    :playsinline="playsinline"
                    @canplay="onPlayerCanplay($event)"
                >
                </video-player>
                <!-- <video-player v-if="mobile=='iPhone'" id="video" class="video-player vjs-custom-skin"  :options="playerOptions"></video-player> -->
               <!-- <img src="@/assets/images/play.png" alt="" class="playimg" @click="play"> -->
            </div>
            <!-- <img src="@/assets/images/more.png" alt=""> -->
            <div class="company">
                <div class="f1">
                    <p class="p1">Company Profile</p>
                    <p class="p2">企业介绍</p>
                </div>
                <p class="p">熙美诚品将“物超所值”作为品牌的核心理念，将“持续给消费者创造超越期待的产品”作为企业目标，期待每件拥有自己独特触感的产品，
                都能温柔的融入生活，简单却实用的给消费者传递快乐和惊喜...</p>
                <img src="@/assets/images/more.png" alt="" class="more" @click="$router.push({path: 'enterprise'})">
            </div>
            <div>
                <div class="f1" style="background: #fff;">
                    <p class="p1">Northern Europe Style</p>
                    <p class="p2">北欧风格 简约时尚契合潮流</p>
                </div>
                <Carousel v-model="value1" loop autoplay  arrow="always" class="progress">
                    <CarouselItem>
                        <div class="demo-carousel"><img src="@/assets/images/banner1.jpg" alt=""></div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel"><img src="@/assets/images/banner2.jpg" alt=""></div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel"><img src="@/assets/images/banner3.jpg" alt=""></div>
                    </CarouselItem>
                </Carousel>
            </div>
            <div class="market">
                <div class="f1" style="background: #fff;">
                    <p class="p1">Global Overseas Market</p>
                    <p class="p2">熙美诚品海外市场增长迅猛</p>
                </div>
                <h2>熙美诚品全球<span>1600</span>多家门店</h2>
                <h2>覆盖<span>84</span>个国家及地区</h2>
                <img src="@/assets/images/market.jpg" alt="">
                <p style="padding-bottom: 20px; width: 85%;">好品牌无国界，截至目前，熙美诚品与<span>美国、英国、印度、加拿大、俄罗斯、新加坡、澳大利亚、巴西沙特阿拉伯</span>等确定了合作伙伴关系
                    ，与<span>全球84多个国家和地区</span>达成战略合作协议，平均每一天有1—2家熙美诚品开业，特别是在<span>东南亚各国、俄罗斯、美国、摩洛哥、迪拜</span>等地区，
                    门店数量正在快速递增。
                </p>
            </div>
            <div class="goodness">
                <div class="f1">
                    <p class="p1">Global Overseas Market</p>
                    <p class="p2" style="color: #fff;">10大加盟优势</p>
                </div>
                <ul>
                    <li>
                        <p style="font-size: 14px;">军事化管理团队</p>
                        <p>作风过硬，保障有力，超强执行力团队</p>
                    </li>
                    <li>
                        <p style="font-size: 14px;">5万平仓储物流中心</p>
                        <p>为客户提供无忧的货品供给，3.9亿库存</p>
                    </li>
                    <li>
                        <p style="font-size: 14px;">二店率高达38%</p>
                        <p>老加盟商选择开2店或多店超过400家</p>
                    </li>
                    <li>
                        <p style="font-size: 14px;">10年行业沉淀</p>
                        <p>大数据基础、团队基础、供应链基础</p>
                    </li>
                    <li>
                        <p style="font-size: 14px;">1千家优质产品供应商</p>
                        <p>50%合作3年以上的优质供应商，重叠度最高</p>
                    </li>
                    <li>
                        <p style="font-size: 14px;">产品快速更新</p>
                        <p>平均每个月800款新品的速度、同行业的标杆</p>
                    </li>
                    <li>
                        <p style="font-size: 14px;">7大区督导配置</p>
                        <p>7大运营中心，服务范围覆盖全国</p>
                    </li>
                    <li>
                        <p style="font-size: 14px;">成熟的供应链</p>
                        <p> 6千款时尚潮品，物超所值，深受消费者喜爱</p>
                    </li>
                    <li>
                        <p style="font-size: 14px;">全年12场大型培训会</p>
                        <p>多场精品培训会</p>
                    </li>
                    <li>
                        <p style="font-size: 14px;">整店输出 </p>
                        <p>全程持续服务，让加盟商开店全程无忧</p>
                    </li>
                </ul>
                <img src="@/assets/images/goodness.jpg" alt="" style="width: 91%;display: block;margin: auto;padding-bottom: 20px;">
            </div>
            <div class="category">
                <div class="f1" style="background: #fff;">
                    <p class="p1">Product Categories</p>
                    <p class="p2">产品分类</p>
                </div>
                <img src="@/assets/images/category.jpg" alt="" style="width: 91%;display: block;margin: auto;" @click="$router.push({path: 'product'})">
                <div class="benefit">
                    <img src="@/assets/images/benefit.jpg" alt="">
                    <h2>全面的开启支持体系</h2>
                    <ul>
                        <p>解决经营痛点，让你开店无忧</p>
                        <li>免费提供店面地址，专业评估店面可行性</li>
                        <li>免费设计店铺，提供装修指导</li>
                        <li>海鼎ESHOP收银软件，了解爆款热销产品清单</li>
                        <li>高级督导老师下店指导，提升店面营业额</li>
                        <li>每月商学院培训支持，提高店铺运营管理能力</li>
                    </ul>
                    
                </div>
                
            </div>
            <div class="store">
                <div class="f1" style="background: #fff;">
                    <p class="p1">Public Praise & Popularity</p>
                    <p class="p2">口碑好店 人气爆棚</p>
                </div>
                <ul class="storeImg" >
                        <!-- @click="large" -->
                    <li>
                        <img src="@/assets/images/index/store_03.png" alt="" style="width: 49%;height: 90px;">
                        <img src="@/assets/images/index/store_05.png" alt="" style="width: 25%;height: 90px;">
                        <img src="@/assets/images/index/store_07.png" alt="" style="width: 25%;height: 90px;">
                    </li>
                    <li >
                        <img src="@/assets/images/index/store_13.png" alt="" style="width: 30%;height: 165px;">
                        <div class="one">
                            <div class="two">
                                <img src="@/assets/images/index/store_15.png" alt="" style="width: 60%;height: 80px;">
                                <img src="@/assets/images/index/store_16.png" alt="" style="width: 39%;height: 80px;">
                            </div>
                            <div class="two" style="margin-bottom: 0;">
                                <img src="@/assets/images/index/store_19.png" alt="" style="width: 39%;height: 80px;">
                                <img src="@/assets/images/index/store_21.png" alt="" style="width: 60%;height: 80px;">
                            </div>        
                        </div>
                    </li>
                    <li>
                        <div style="width: 50%;height: 100%;display: flex;justify-content: space-between;flex-wrap: wrap;">
                            <img src="@/assets/images/index/store_25.png" alt="" style="width:50%;height: 50%;">
                            <img src="@/assets/images/index/store_26.png" alt="" style="width: 49%;height: 50%;">
                            <img src="@/assets/images/index/store_33.png" alt="" style="width: 100%;height: 48%;">
                        </div>
                        
                            <img src="@/assets/images/index/store_27.png" alt="" style="width: 24%;height: 100%">
                       
                        <div style="width: 24%;height:100%">
                            <img src="@/assets/images/index/store_29.png" alt="" style="width: 100%;height: 50%;">
                            <img src="@/assets/images/index/store_36.jpg" alt="" style="width: 100%;height: 50%;">
                        </div>
                        
                    </li>
                </ul>
                <!-- <img src="@/assets/images/index2.jpg" alt=""> -->
            </div>
            
            <div class="news">
                <div class="info">
                    <img src="@/assets/images/newBanner.jpg" alt="">
                    <div class="content" v-for="(item,index) in newList" :key="index">
                        <p class="title">{{item.title}}</p>
                        <p class="time">{{item.editeddate}}</p>
                    </div>
                    <img src="@/assets/images/more.png" alt="" class="more" @click="$router.push({path: 'news'})">
                </div>
            </div>
        </div>
        <Modal v-model="Modal" title="查看大图" >
            <img :src="src" alt="">
        </Modal>
        <BackTop :bottom="50" :right="10">
            <div class="top"><span class="iconfont">&#xe63f;</span></div>
        </BackTop>
        <!-- 底部内容 -->
        <!-- <Bottom></Bottom>
        <Alert></Alert> -->
        <Footer v-show="show"></Footer>
        <Msg></Msg>
    </div>
</template>
<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import Msg from '@/components/msg.vue'
import https from '@/http.js'

export default {
    data(){
        return{
            
            playerOptions :	{
                // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                    type: 'video/mp4',
                    src: "http://www.xmcpcn.com/img/%E7%86%99%E7%BE%8E%E5%8D%81%E5%91%A8%E5%B9%B4%E7%9B%9B%E5%85%B8.mp4", //url地址
                }],
                poster: "../../static/img/video.jpg", //你的封面地址
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                // controlBar: {
                //     timeDivider: true,
                //     durationDisplay: true,
                //     remainingTimeDisplay: false,
                //     fullscreenToggle: true  //全屏按钮
                // }
                
            },
            value:0,
            value1:0,
            show:false,
            newList:[],
            Modal:false,
            src:'',
            mobile:"",
            text:"",
            speed:5000

        }
    },
    components: {
        Header,
        Footer,
        Msg,
    },
    created () {
        this.getnew();
        const that = this
        that.timer = setInterval(function () {
            if (document.readyState === 'complete') {
               that.show=true;
                window.clearInterval(that.timer)
            }
        }, 1000);
        
    },
    computed: {
        playsinline(){
    		var ua = navigator.userAgent.toLocaleLowerCase(); //x5内核
            if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
                return false
            }else{
                //ios端
                return true				
            }
            }
    },
    methods:{       
        getnew(){
            https.get('/gyanwang/index.php/Home/Index/homepage').then((data) => {
               this.newList=data.data;
               this.newList.forEach(ele=>{
                   ele.editeddate.substr(10,9);
               })
            }).catch((err)=>{
                console.log(err)

            })
        },
        play(){
            var video =$('#video');
            
            if(video.paused){
              video.play();
            }else if(video.play()){
               video.pause();
             }
        },
       large(e){
           this.src=e.target.src;
           this.Modal=true;
       },
       //在vue-video-player的onPlayerCanplay(视频可播放)这个方法中添加回调
        onPlayerCanplay(player) {
            // console.log('player Canplay!', player)
            //解决自动全屏
            var ua = navigator.userAgent.toLocaleLowerCase();
            //x5内核
            if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
                $('body').find('video').attr('x-webkit-airplay',true).attr('x5-playsinline',true).attr('webkit-playsinline',true).attr('playsinline',true)
            }else{
                //ios端
                $('body').find('video').attr('webkit-playsinline',"true").attr('playsinline',"true") 
                
            }

        }
    }
}
</script>

    
    
    
    