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
                <p class="txt" style="margin-bottom: 20px;text-indent: 2em;">
                    熙美诚品商学院成立于2015年，运用店面管理经验+店面实际操作的培训模式，服务全球加盟商，为加盟商提供店面标准化管理流程，
                    并对门店经营中遇见的疑难给出指导意见，提升加盟店的盈利能力。
                </p>
                <img src="@/assets/images/school/1.jpg" alt="">
                <p class="txt" style="text-indent: 2em;">
                    截止2019年10月，熙美诚品商学院已举办38期“金牌加盟商培训会”，小型精品培训会14期，培训人次近2000人。分别在北京、广州、南京、西安、重庆、成都等地开课，持续为加盟商后续经营保驾护航。
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
                    <div class="demo-carousel"><img src="@/assets/images/school/banner/彩妆.png" alt=""></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="@/assets/images/school/banner/门店.png" alt=""></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="@/assets/images/school/banner/文化.png" alt=""></div>
                </CarouselItem>
            </Carousel>
            <div class="f1">
                <p class="p1">Tutor Team</p>
                <p class="p2">导师团队</p>
            </div>
            <img src="@/assets/images/school/导师团队.png" alt="" style="margin-bottom: 20px;">
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
                            <p class="des">特聘导师，20多年创业经验,擅长团队管理、绩效管理、成本控制，现任熙美诚品品牌运营中心总经理。</p>
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
                                <p class="title">刘尧 产品中心健康美容产品经理</p>
                                <p class="des">熙美诚品产品中心健康美容产品经理，2012年至今担任熙美诚品健康美容类产品培训讲师，从事护肤彩妆行业十年，熙美诚品首席彩妆大师、护肤彩妆体验官。</p>
                                
                                <p class="tab"><span class="line"></span>
                                    ”
                                    <span class="line"></span>
                                </p>
                            </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="@/assets/images/swiper/4.png" alt="">
                        <div class="content">
                            <p class="tab"><span class="line"></span> “  <span class="line"></span></p>
                            <p class="title">江晓梅 运营中心华东大区总监</p>
                            <p class="des">具有5年门店实战经验，对于门店运营颇深见解，现任华东大区总监；累积下店数量达到300家，为熙美培育了一大批督导、店长服务门店。</p>
                            
                            <p class="tab"><span class="line"></span>
                                ”
                                <span class="line"></span>
                            </p>
                            
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="@/assets/images/swiper/5.png" alt="">
                        <div class="content">
                            <p class="tab">
                                <span class="line"></span> “ <span class="line"></span>
                            </p>
                            <p class="title">沈丽琪 运营中心直营部负责人</p>
                            <p class="des">熙美首席化妆师、5年督导下店实战经验、300家门店实战经验、8省门店带教经验；擅长商品陈列设计、门店销售技巧、门店彩妆快速入门。</p>
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
        <BackTop :bottom="50" :right="10">
            <div class="top"><span class="iconfont">&#xe63f;</span></div>
        </BackTop>
        <!-- 底部内容 -->
        <Footer v-show="show"></Footer>
        <Msg></Msg>
    </div>
</template>
<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import Msg from '@/components/msg.vue'
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
        Footer,
        Msg
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