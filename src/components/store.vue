<template>
    <div class="store">
        <!-- 头部 -->
        <Header tab='4'></Header>
        <div class="main">
            <div class="linear"></div>
            <div class="floor1">
                <div class="info">
                    <div class="content">
                        <h4>STORE IMAGE UPGRADE</h4>
                        <h1>全新店面升级</h1>
                        <p class="line"></p>
                        <P class="txt" style="margin-bottom: 10px;text-indent:2em;">熙美诚品全新店铺形象，以北欧风为基调，空间色彩采用马尔斯绿，视觉统一；在产品的陈列上，从颜色、质感、款式等方面匹配货柜设计，高低组合、错落有致，让每款产品出现在最合适的位置上，从细节上体现品牌对完美和高品质的追求，给顾客带来舒适的视觉感受和购物体验。</P>
                        <P class="txt" style="text-indent:2em;">在产品的陈列上，全新的货柜设计，高低组合错位，从颜色、质感、款式上让每件产品出现在最合适的位置上，
                                细节上体现品牌对完美和高品质的追求，给顾客带来视觉上的冲击以及最舒适的产品体验。</P>
                    </div>
                    <div class="banner">
                        <Carousel autoplay v-model="value" :autoplay-speed="5000">
                            <CarouselItem>
                                <div class="demo-carousel"><img src="@/assets/images/store/1.jpg" alt=""></div>
                            </CarouselItem>
                            <CarouselItem>
                                <div class="demo-carousel"><img src="@/assets/images/store/1.png" alt=""></div>
                            </CarouselItem>
                            <CarouselItem>
                                <div class="demo-carousel"><img src="@/assets/images/store/2.png" alt=""></div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <img src="@/assets/images/store/2.jpg" alt="" style="width: 100%;">
            </div>
            <div class="floor2">
                <h4>STORE DISPLAY</h4>
                <h1>店面展示</h1>
                <p class="line"></p>
                <div class="info">
                    <img src="@/assets/images/store/6.png" alt="" style="width: 100%;">
                    <div class="content">
                        <p class="title">熙美诚品步入全球市场    平均每天就有2家熙美诚品店开业</p>
                        <p class="subtitle"><Icon type="md-stats" /><span>1600家</span>千店连锁超火爆人气<Icon type="ios-map" /></p>
                    </div>
                    <img src="@/assets/images/store/7.png" alt="" style="width: 100%;">
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
    export default{
        components: {
            Header,
            Footer,
        },
        data(){
            return{
                value:0,
                show:true
            }
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
        },
        destroyed() {
            document.removeEventListener('scroll', this.handleScroll,true);   //  离开页面清除（移除）滚轮滚动事件,
        }
    }
</script>