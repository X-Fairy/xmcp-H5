<template>
    <div class="about">
        <!-- 头部 -->
        <Header tab='2'></Header>
        <div class="main">
            <div class="floor1">
                <p class="textarea">熙美诚品拥有<span>10</span>年零售百货行业加盟经验，<span>8</span>大运营中心，从业人员达到<span>8000</span>多人，<span>50</span>家直营店，是中国快时尚百货行业的开拓者和引领者！</p>
                <ul class="info">
                    <li style="width: 28%;">
                        <p class="one">我们的使命</p>
                        <P class="line"></P>
                        <p class="two">构筑成功，引领时尚</p>
                        <p class="three">Building success, leading fashion</p>
                        <img src="@/assets/images/about/1.png" alt="">
            
                    </li>
                    <li style="width: 28%;">
                        <p class="one">我们的愿景</p>
                        <P class="line"></P>
                        <p class="two">做快时尚百货第一品牌</p>
                        <p class="three">To be the top fast fashion brand</p>
                        <img src="@/assets/images/about/2.png" alt="">
                    </li>
                    <li style="width: 42%;">
                        <p class="one">核心价值观</p>
                        <P class="line"></P>
                        <p class="two">诚信、团结、创新、高效、责任、感恩、利他</p>
                        <p class="three">Integrity, Unity, Innovation, Efficiency, Responsibility, Gratidute and Altruism</p>
                        <img src="@/assets/images/about/3.png" alt="">
                    </li>
                </ul>
            </div>
            <div class="banner">
                <Carousel autoplay v-model="value" loop :autoplay-speed="5000">
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="@/assets/images/about/5.jpg" alt="" style="width: 100%">
                            <div>
                                <p>华东总部——杭州</p>
                                <h1>HANGZHOU</h1>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="@/assets/images/about/广州.png" alt="" style="width: 100%">
                            <!-- <div>
                                <p>华南总部——广州</p>
                                <h1>GUANGZHOU</h1>
                            </div> -->
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="@/assets/images/about/义乌.png" alt="" style="width: 100%">
                            <!-- <div>
                                <p>仓储总部——义乌</p>
                                <h1>YIWU</h1>
                            </div> -->
                        </div>
                    </CarouselItem>
                </Carousel>
                <div class="txt">
                    <p style="text-indent: 2em;padding: 20px 0 10px;">XIMIVOGUE熙美诚品，是集品质、价格、创意、设计、供应和销售于一体，为全球消费者传递快乐和惊喜的快时尚百货品牌。以“物超所值”为核心理念，超强整合生活百货、彩妆护肤、文体礼品、饰品系列、休闲食品、精美包饰、毛绒玩具、数码配件、季节产品等九大品类，竭尽全力为全球消费者打造超越他们预期的产品。</p>
                    <p style="text-indent: 2em;padding-bottom: 10px;">截止2019年10月，熙美诚品拥有超过5万平方的综合性产业园，1000多家优质供应商，8大运营中心，7大区督导服务，从业人员达8000多人。</p>
                    <p style="text-indent: 2em;">目前，熙美诚品全球加盟店已经突破1600家，店铺遍布全球84个国家及地区，熙美诚品通过持续开发物超所值的产品，向全球消费者传递快乐和惊喜！</p>
                </div>
            </div>
            <div class="floor2">
                <div class="infos">
                    <h4>COOPERATIVE BRANDS</h4>
                    <h1>品牌合作伙伴</h1>
                    <p class="line"></p>
                    <p class="txt" style="text-indent: 2em;">熙美诚品与小猪佩奇、哆啦A梦、大头儿子小头爸爸、熊出没、海底小纵队、迪士尼、精灵宝可梦、kakao friends、B.DUCK、奥特曼、漫威、芝麻街、小黄人等知名品牌建立正版授权合作关系，拥有1000家优质供应商，50%以上都是合作5年以上，产品货源稳定有保障，每月800款SKU更新的速度，能迅速抓住消费者注意力，保证复购率，提高门店营业额。</p>
                    <img src="@/assets/images/about/6.jpg" alt="" style="width: 100%">
                </div>
            </div>
            <div class="floor3">
                <div class="title">
                    <h4>GLOBAL OVERSEAS MARKETS</h4>
                    <h1>熙美诚品海外市场增长迅速</h1>
                    <p class="line"></p>
                    <p class="txt" style="text-align: left;text-indent: 2em;">好品牌无国界，截止目前，熙美诚品与<span>美国、加拿大、英国、印度、俄罗斯、新加坡、澳大利亚、巴西沙特阿拉伯等</span>确定了合作伙伴关系 与<span>全球84个国家和地区</span>达成战略合作关系，
                        平均每天有<span>1</span>家熙美诚品开业，特别是东南亚各国、俄罗斯、美国、摩洛哥、迪拜等地区，门店数量正在快速递增，熙美诚品，全球从业人员<span>8000</span>多，熙美诚品通过<span>6000</span>多款物超所值的产品，每天向全球消费者传递快乐和惊喜！</p>
                    <img src="@/assets/images/index/earth.jpg" alt="" style="width: 100%">
                </div>
            </div>
             <div class="floor4">
                <div class="title">
                    <h4>Corporate Culture</h4>
                    <h1>企业文化</h1>
                    <p class="line"></p>
                    <ul>
                        <li>
                            <img src="@/assets/images/about/9.jpg" alt="">
                            <p style="font-size: 18px;font-weight: 600;">军队</p>
                            <p>定义：是！保证完成任务，不找借口，只找方法， 坚决执行</p>
                            <p class="neihan">内涵：使命、纪律、忠诚、责任、荣誉</p>
                        </li>
                        <li>
                            <img src="@/assets/images/about/8.jpg" alt="">
                            <p style="font-size: 18px;font-weight: 600;">学校</p>
                            <p>定义：快乐每一天，学习榜样，调整心态， 比学赶帮超</p>
                            <p class="neihan">内涵：学习、互助、成长、分享、友谊</p>
                        </li>
                        <li>
                            <img src="@/assets/images/about/10.jpg" alt="">
                            <p style="font-size: 18px;font-weight: 600;">家庭</p>
                            <p>定义：我们都是一家人，你的事就是我的事，有爱互助，心存感恩</p>
                            <p class="neihan">内涵：责任、奉献、亲情、微笑、担当</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="floor5">
                <h4>DEVELOPMENT PATH</h4>
                <h1>发展历程</h1>
                <p class="line"></p>
                <div class="content">
                    
                    <ul class="one">
                        <li>
                            <p class="time">2009年</p>
                            <p>第一家直营店在南京开业。</p>
                        </li>
                        <li>
                            <p class="time">2012年</p>
                            <p> 设立总部于中国·义乌，正式开放加盟渠道。</p>
                        </li>
                        <li> 
                            <p class="time">2015年</p>
                            <p>饰品加盟转型，成立快时尚百货--熙美诚品,同年全国门店加盟超过300家,熙美诚品正式加入中国青少年发展基金会。</p>                            
                        </li>
                        <li>
                            <p class="time">2017年</p>
                            <p> 广州国际金融中心成立华南总部，国际事业部成立
                                    门店数量突破1000家
                                 “熙美诚品专项公益基金”正式成立。
                            </p>
                        </li>
                        <li>
                            <p class="time">2019年</p>
                            <p>熙美诚品成立10周年，捐建第10所希望小学，熙美诚品加盟店突破1600家，遍布全国84个国家及地区。</p>
                        </li>
                    </ul>
                    <img src="@/assets/images/about/12.jpg" alt="" style="width: 100%;">
                    <ul class="two">
                        <li style="width: 3%;"></li>
                        <li>  
                            <p class="time">2010年</p>
                            <p>单店数量达到 9家 开启直营管理模式。</p>
                                
                        </li>
                        <li>
                            <p class="time">2014年</p>
                            <p>加盟门店超过 1000家。</p>
                        </li>
                        
                        <li>
                            <p class="time">2016年</p>
                            <p>熙美诚品董事长受邀参加CCTV
                                    《对话中国品牌》栏目访谈
                                    仓储物流升级，迁至新的仓储基地
                                    成立熙美诚品商学院，全年度12场商学院培训。
                            </p>
                        </li>
                        <li>
                            <p class="time">2018年</p>
                            <p>杭州华城国际发展大厦成立华东总部，熙美诚品遍布全球77个国家及地区。</p>
                        </li>
                    </ul>
                </div>
                
               
                <!-- <Carousel :autoplay="false" v-model="value1" :autoplay-speed="5000" style="height: 560px;" dots="none" arrow="always" >
                    <CarouselItem>
                        <div class="demo-carousel">
                            <div class="content">
                                <div>
                                    <img src="@/assets/images/about/发展历程_06.jpg" alt="">
                                    <p>熙美诚品成立10周年，
                                    捐建第10所希望小学吗，熙美诚品加盟店突破1600家，遍布全国84个国家及地区。</p>
                                </div>
                                
                                <div>
                                    <img src="@/assets/images/about/发展历程_03.jpg" alt="">
                                    <p> 广州国际金融中心成立华南总部，国际事业部成立
                                            门店数量突破1000家
                                         “熙美诚品专项公益基金”正式成立。</p>
                                </div>
                            </div>
                            <div class="date" >
                                <span class="line"></span>
                                <div class="circle">
                                    <div>
                                        <img src="@/assets/images/about/banner/circle.jpg" alt="">
                                        <i>2019</i>
                                    </div>
                                    <div>
                                       
                                        <img src="@/assets/images/about/banner/circle.jpg" alt="">
                                        <i style="margin-top: -120px;">2018</i>
                                    </div>
                                    <div style="margin-right: 50px;">
                                        <img src="@/assets/images/about/banner/circle.jpg" alt="">
                                        <i>2017</i>
                                    </div>
                                </div>
                            </div>
                            <div style="margin-top: -70px;font-size: 14px;">
                                <p style="padding:5px 20px;margin: auto;width: 260px;text-align: left;">杭州华城国际发展大厦成立华东总部，熙美诚品遍布全球77个国家及地区。</p>
                                
                                <img src="@/assets/images/about/发展历程_13.jpg" alt="">
                                
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                           <div class="content">
                                <div>
                                    <img src="@/assets/images/about/banner/3.jpg" alt="">
                                    <p>熙美诚品董事长受邀参加CCTV
                                            《对话中国品牌》栏目访谈
                                            仓储物流升级，迁至新的仓储基地
                                            成立熙美诚品商学院，全年度12场商学院培训
                                    </p>
                                </div>
                                
                                <div>
                                    <img src="@/assets/images/about/banner/4.jpg" alt="">
                                    <p>加盟门店超过 1000家</p>
                                </div>
                            </div>
                            <div class="date" style="margin-top: 1.0%  !important;">
                                <span class="line"></span>
                                <div class="circle">
                                    <div>
                                        <img src="@/assets/images/about/banner/circle.jpg" alt="">
                                        <i>2016</i>
                                    </div>
                                    <div>
                                        <img src="@/assets/images/about/banner/circle.jpg" alt="">
                                        <i style="margin-top: -120px;">2015</i>
                                    </div>
                                    <div style="margin-right: 50px;">
                                        <img src="@/assets/images/about/banner/circle.jpg" alt="">
                                        <i>2014</i>
                                    </div>
                                </div>
                                
                            </div>
                            <div style="margin-top: -70px;">
                                <p style="width: 250px;margin: auto;padding-bottom: 10px;text-align: left;font-size: 14px;">饰品加盟转型，成立快时尚百货--熙美诚品
                                        同年全国门店加盟超过300家
                                        熙美诚品正式加入中国青少年发展基金会</p>
                                
                                <img src="@/assets/images/about/banner/1.jpg" alt="">
                                
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <div class="content">
                                <div>
                                    <img src="@/assets/images/about/banner/2.jpg" alt="">
                                    <p> 设立总部于中国·义乌，正式开放加盟渠道</p>
                                </div>
                                <div>
                                    <img src="@/assets/images/about/banner/5.jpg" alt="" style="width: 270px;">
                                    <p>第一家直营店在南京开业</p>
                                </div>
                            </div>
                            <div class="date" >
                                <span class="line"></span>
                                <div class="circle">
                                    <div>
                                        <img src="@/assets/images/about/banner/circle.jpg" alt="">
                                        <i>2012</i>
                                    </div>
                                    <div>
                                        <img src="@/assets/images/about/banner/circle.jpg" alt="">
                                        <i style="margin-top: -120px;">2010</i>
                                    </div>
                                    <div style="margin-right: 50px;">
                                        <img src="@/assets/images/about/banner/circle.jpg" alt="">
                                        <i>2009</i>
                                    </div>
                                </div>
                                
                            </div>
                            <div style="margin-top: -70px;">
                                <p style="width: 250px;margin: auto;padding-bottom: 10px;text-align: left;font-size: 14px;">单店数量达到 9家 开启直营管理模式</p>
                                <img src="@/assets/images/about/banner/6.jpg" alt="">
                                
                            </div>
                        </div>
                    </CarouselItem>
                </Carousel> -->
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
export default {
    components: {
        Header,
        Footer,
    },
    data() {
        return {
           value:0,
           value1:0,
           show:true,
        }
    },
    
    created() {
    },
    mounted(){
        document.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
    },
    computed: {
        
    },
    methods: {
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