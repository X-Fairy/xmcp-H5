<template>
    <div class="school">
            <!-- 头部菜单 -->
        <Header></Header>
        <div class="main">
            <img src="@/assets/images/school/shadow.jpg" alt="">
            <div class="school1">
                <div class="f1" style="background:#fff;border-bottom: 1px solid #ddd;width: 82%;margin: auto;padding-left: 0;padding-top: 0;">
                    <p class="p1">Business School</p>
                    <p class="p2">商学院简介</p>
                    <h3 style="margin-top: 15px;">解码快时尚百货盈利模式</h3>
                    <h3>复制十年运营成功知道</h3>
                </div>
                <p class="txt" style="margin-bottom: 20px;">
                    熙美诚品商学院成立于2015年，运用店面管理经验+店面实际操作的培训模式，服务全球加盟商，为加盟商提供店面标准化管理流程，
                    并对门店经营中遇见的疑难给出指导意见，提升加盟店的盈利能力。
                </p>
                <img src="@/assets/images/school/1.jpg" alt="">
                <p class="txt" >
                     到目前为止，熙美商学院总开课37期，培训店长达1168位，除在义乌开课以外，依托21个分公司、办事处的支持，还在北京、广州、
                     西安、重庆、湖南等地开课，为加盟商保驾护航。
                </p>
            </div>
            <div class="school2">
                <div class="f1" style="background:#fff;">
                    <p class="p1">Business School</p>
                    <p class="p2">商学院简介</p>
                </div>
            </div>
            <!-- <img src="@/assets/images/学院.jpg" alt=""> -->
            <Carousel v-model="value1" loop autoplay  arrow="never" class="progress" style="margin-top: -20px;">
                <CarouselItem>
                    <div class="demo-carousel"><img src="@/assets/images/学院banner1.jpg" alt=""></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="@/assets/images/学院banner1.jpg" alt=""></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="@/assets/images/学院banner1.jpg" alt=""></div>
                </CarouselItem>
            </Carousel>
            <div class="f1">
                <p class="p1">Tutor Team</p>
                <p class="p2">导师团队</p>
            </div>
            <!-- 导师轮播 -->
            <Carousel v-model="value2" :loop="loop"  dots="none" arrow="always" class="people">
                <CarouselItem>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                    <div class="demo-carousel">
                        <img src="@/assets/images/swiper/autor.jpg" alt="">
                        <div class="content">
                            <p class="tab"><span class="line"></span>
                                “
                                <span class="line"></span>
                            </p>
                            <p class="title">王枫 熙美诚品营销中心总经理</p>
                            <p class="des">1998年开始创业，21年的工作经验。经营多家公司，具有多年实体零售店实战经验</p>
                            <p class="des">擅长团队心态管理、绩效管理、成本控制、能使企业在新零售不断变化的今天，准确、快速的做出决策</p>
                            <p class="des">现任熙美诚品品牌运营中心总经理</p>
                            <p class="tab"><span class="line"></span>
                                ”
                                <span class="line"></span>
                            </p>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="@/assets/images/swiper/2.jpg" alt="">
                        <div class="content">
                                <p class="tab"><span class="line"></span>
                                    “
                                    <span class="line"></span>
                                </p>
                                <p class="title">刘尧 熙美诚品采购经理</p>
                                <p class="des">熙美诚品首席彩妆师，拥有10年彩妆护理经验。</p>
                                
                                <p class="tab"><span class="line"></span>
                                    ”
                                    <span class="line"></span>
                                </p>
                            </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="@/assets/images/swiper/autor.jpg" alt="">
                        <div class="content">
                             <p class="tab"><span class="line"></span>
                                “
                                <span class="line"></span>
                            </p>
                            <p class="title">王枫 熙美诚品营销中心总经理</p>
                            <p class="des">1998年开始创业，21年的工作经验。经营多家公司，具有多年实体零售店实战经验</p>
                            <p class="des">擅长团队心态管理、绩效管理、成本控制、能使企业在新零售不断变化的今天，准确、快速的做出决策</p>
                            <p class="des">现任熙美诚品品牌运营中心</p>
                            <p class="tab"><span class="line"></span>
                                ”
                                <span class="line"></span>
                            </p>
                        </div>
                    </div>
                </CarouselItem>
            </Carousel>
            <div class="school3">
                <div class="f1">
                    <p class="p1">Training Photo</p>
                    <p class="p2">导培训会一览</p>
                </div>
                <img src="@/assets/images/school/2.jpg" alt="" style="width: 95%;display: block;margin: auto;">
            </div>
        </div>
        <BackTop :bottom="10" :right="10">
            <div class="top"><span class="iconfont">&#xe63f;</span></div>
        </BackTop>
        <!-- 底部内容 -->
        <Footer v-show="show"></Footer>
    </div>
</template>
<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
    data(){
        return {
            show:false,
            value1:0,
            value2:0,
            loop:false
        }
    },
    components: {
        Header,
        Footer
    },
    created () {
        const that = this
        that.timer = setInterval(function () {
            if (document.readyState === 'complete') {
               that.show=true;
                window.clearInterval(that.timer)
            }
        }, 1000);
    },
    methods:{
    }
}
</script>