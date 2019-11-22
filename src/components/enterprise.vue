<template>
    <div class="enterprise">
        <!-- 头部菜单 -->
        <Header></Header>
        
        <div class="main">
                
            <div class="floor1">
                <!-- <img src="@/assets/images/企业1.jpg" alt=""> -->
                <img src="@/assets/images/企业2.jpg" alt="">
                <p class="textarea">熙美诚品拥有10年零售百货行业加盟经验，8大运营中心，50家直营店，从业人员达到8000多 是中国快时尚百货行业的开拓者和引领者！</p>
                <!-- <div class="yuanjin">
                    <p class="one">我们的愿景</p>
                    <p class="two">做快时尚第一品牌</p>
                    
                </div>
                <div class="shiming">
                    <p class="one">我们的使命</p>
                    <p class="two">构筑成功，引领时尚</p>
                
                </div>
                <div class="hexin">
                    <p class="one" style="margin-bottom: 15.5%;">核心价值观</p>
                    <p class="two" style="letter-spacing: 0;font-size: 15px;">诚信、团结、创新、高效、责任、感恩、利他</p>
                   
                </div> -->
            </div>
            <Carousel v-model="value1" loop autoplay  arrow="never" class="progress address">
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="@/assets/images/company/banner1.jpg" alt="">
                        <div>
                            <p class="china">华东总部——杭州</p>
                            <p class="eng">HANGZHOU</p>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="@/assets/images/company/banner2.jpg" alt="">
                        <div>
                            <p class="china">仓储物流中心——义乌</p>
                            <p class="eng">YIWU</p>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="@/assets/images/company/banner3.jpg" alt="">
                        <div>
                            <p class="china">华南总部——广州</p>
                            <p class="eng">GUANGZHOU</p>
                        </div>
                    </div>
                </CarouselItem>
            </Carousel>
            <div class="floor0">
                <!-- <img src="@/assets/images/company/earth.jpg" alt=""> -->
                <p class="floor-content">熙美诚品将“物超所值”作为品牌的核心理念，将“持续给消费者创造超越期待的产品”作为企业目标，不断给消费者传递快乐和惊喜，这种质朴的品牌价值也因此赢得众多消费者的青睐，在过去三年中国 线下实体零售市场整体低迷的情况下，一举成为快时尚百货领域的领军者。
                </p>
            </div>
            <div class="floor2">
                <div class="f1" style="background: none;">
                    <p class="p1">Cooperative Brand</p>
                    <p class="p2">品牌合作伙伴</p>
                </div>
                <p style="padding: 0 25px;line-height: 25px;letter-spacing: 1px;text-indent: 2em;">熙美诚品与小猪佩奇、哆啦A梦、大头儿子小头爸爸、熊出没、海底小纵队、迪士尼、精灵宝可梦、kakao friends、B.DUCK、奥特曼、漫威、芝麻街、小黄人等知名品牌建立正版授权合作关系，拥有1000家优质供应商，50%以上都是合作5年以上，产品货源稳定有保障，每月800款SKU更新的速度，能迅速抓住消费者注意力，保证复购率，提高门店营业额。
                </p>
                <img src="@/assets/images/company/Partners.jpg" alt="" style="width: 90%;display: block;margin: auto;">
            </div>
            <div class="market">
                <div class="f1" style="background: #fff;">
                    <p class="p1">Global Overseas Market</p>
                    <p class="p2">熙美诚品海外市场增长迅猛</p>
                </div>
                <p style="padding-bottom: 20px; width: 85%;text-indent: 2em;">好品牌无国界，截至目前，熙美诚品与<span>美国、英国、印度、加拿大、俄罗斯、新加坡、澳大利亚、巴西沙特阿拉伯</span>等确定了合作伙伴关系
                    ，与<span>全球84个国家和地区</span>达成战略合作协议，平均每一天有1—2家熙美诚品开业，特别是在<span>东南亚各国、俄罗斯、美国、摩洛哥、迪拜</span>等地区，
                    门店数量正在快速递增。
                </p>
                <img src="@/assets/images/market.jpg" alt="">
                <p style="padding-bottom: 20px; width: 85%;text-indent: 2em;">熙美诚品，全球从业人员8000+，平均每天有350万元的产品通过熙美在全球的门店，传递到消费者手中，每天有180万人次光顾熙美在全球的门店。</p>
            </div>
            <div class="floor3">
                <div class="f1" style="background: none;">
                    <p class="p1">Corporate Culture</p>
                    <p class="p2">企业文化</p>
                </div>
                <ul>
                    <li>
                        <h2>军队/ARMY</h2>
                        <p>定义：是！保证完成任务，不找借口，只找方法，坚决执行</p>
                        <span>内涵：使命、纪律、忠诚、责任、荣誉</span>
                    </li>
                    <li>
                        <h2>学校/SCHOOL</h2>
                        <p>定义：快乐每一天，学习榜样，调整心态，比学赶帮超</p>
                        <span>内涵：学习、互助、成长、分享、友谊</span>
                    </li>
                    <li>
                        <h2>家庭/FAMILY</h2>
                        <p>定义：我们都是一家人，你的事就是我的事，友爱互助，心存感恩</p>
                        <span>内涵：责任、奉献、亲情、微笑、担当</span>
                    </li>
                </ul>
            </div>
        </div>
        <BackTop :bottom="50" :right="10">
                <div class="top"><span class="iconfont">&#xe63f;</span></div>
        </BackTop>
        <!-- 底部内容 -->
        <Footer v-show="show"></Footer>
        <msg></msg>
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
            value1:0
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
        }, 1000)
    },
    methods:{
        
    }
}
</script>