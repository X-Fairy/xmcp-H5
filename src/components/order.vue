<template>
    <div class="order">
        <!-- 头部 -->
        <Header tab='3'></Header>
        <div class="main">
            <div class="linear"></div>
            <div class="floor1">
                <h4>CORE STRENGTHS</h4>
                <h1>十大核心竞争力</h1>
                <p class="line"></p>
                <ul>
                    <li style="width: 49%">
                        <div>
                            <p><span>50000</span>平方米仓储物流中心</p>
                            <span>为客户提供无忧的货品供给，3.9亿库存</span>
                        </div>
                        <img src="@/assets/images/addvantage/1.png" alt="">
                    </li>
                    <li style="width: 49%">
                        <div>
                            <p><span>1000</span>家优质产品供应商</p>
                            <span>50%合作5年以上的优质供应商，产品质量是企业的生命线</span>
                        </div>
                        <img src="@/assets/images/addvantage/2.png" alt="">
                    </li>
                    <li>
                        <div>
                            <p><span>10</span>年行业沉淀</p>
                            <span>大数据基础、团队基础、供应链基础</span>
                        </div>
                        <img src="@/assets/images/addvantage/3.png" alt="">
                    </li>
                    <li>
                        <div>
                            <p>二店率高达<span>38%</span></p>
                            <span>老加盟商开2店或多店超过400家</span>
                        </div>
                        <img src="@/assets/images/addvantage/4.png" alt="">
                    </li>
                    <li>
                        <div>
                            <p><span>7</span>个大区督导服务</p>
                            <span>督导下店，服务范围覆盖全国，平均每季度下店服务超过900家门店</span>
                        </div>
                        <img src="@/assets/images/addvantage/5.png" alt="">
                    </li>
                    <li style="width: 49%">
                        <div>
                            <p>全年度<span>12</span>场商学院培训会</p>
                            <span>行业人才孵化器，七个大区巡回培训</span>
                        </div>
                        <img src="@/assets/images/addvantage/6.jpg" alt="">
                    </li>
                    <li style="width: 49%">
                        <div>
                            <p>军事化管理团队</p>
                            <span>作风过硬，保障有力，超强执行力团队</span>
                        </div>
                        <img src="@/assets/images/addvantage/7.png" alt="">
                    </li>
                    <li>
                        <div>
                            <p>供应链</p>
                            <span>6000款SKU，百分百全系列定制产品，品质有保证，首批货品百分百调换货政策</span>
                        </div>
                        <img src="@/assets/images/addvantage/13.jpg" alt="">
                    </li>
                    <li style="width: 49%">
                        <div>
                            <p>整店输出</p>
                            <span>选址、开店、货品供给、督导下店，全程持续服务，让加盟商开店无忧</span>
                        </div>
                        <img src="@/assets/images/addvantage/14.jpg" alt="">
                    </li>
                    <li style="width: 49%">
                        <div>
                            <p>天下武功，唯快不破</p>
                            <span>平均每个月800款新品的速度，同行业的标杆</span>
                        </div>
                        <img src="@/assets/images/addvantage/15.jpg" alt="">
                    </li>
                </ul>
                <img src="@/assets/images/addvantage/1.jpg" alt="" style="width: 100%">
            </div>
            <div class="floor2">
                <h4>SUPPORT SYSTEM</h4>
                <h1>八大支持体系</h1>
                <p class="line"></p>
                <p>从选址到后期运营，我们一路保驾护航</p>
                <div style="position: relative;margin: 50px 0;">
                    <img src="@/assets/images/addvantage/8.jpg" alt="">
                    <ul>
                        <li>店面选址评估</li>
                        <li>整店VI装修</li>
                        <li><p>海鼎ESHOP</p><p>智能ERP</p><p>收银软件</p></li>
                        <li><p>高级督导老师</p><p>下店指导</p></li>
                        <li><p>每月商学院</p><p>支持培训</p></li>
                        <li><p>运营筹备</p><p>选货订货</p></li>
                        <li>宣传推广</li>
                        <li>日常运营</li>
                    </ul>
                </div>
                <!-- <Carousel :autoplay="false" v-model="value1" :autoplay-speed="5000" style="height: 500px;" dots="none" arrow="always" >
                        <CarouselItem>
                            <div class="demo-carousel">
                                <div class="content1">
                                    <div>
                                        <h1>01</h1>
                                        <h3>店面选址</h3>
                                        <p class="line"></p>
                                        <p>商圈顾客评估优选最佳开店地址</p>
                                    </div>
                                    <div>
                                        <h1>02</h1>
                                        <h3>整店VI装修</h3>
                                        <p class="line"></p>
                                        <p>提供整体VI把控 店面图纸设计</p>
                                    </div>
                                </div>
                                <div class="content2" style="margin-top: -40px;">
                                    <div>
                                        <h1>03</h1>
                                        <h3>智能ERP系统</h3>
                                        <p class="line"></p>
                                        <p>海鼎ESHOP 智能ERP收银软件</p>
                                    </div>
                                    <div>
                                        <h1>04</h1>
                                        <h3>运营筹备</h3>
                                        <p class="line"></p>
                                        <p>定期组织培训 提供系统培训支持</p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">
                               <div class="content1">
                                    <div>
                                        <h1>05</h1>
                                        <h3>熙美诚品</h3>
                                        <p class="line"></p>
                                        <p>成就加盟商</p>
                                    </div>
                                    <div>
                                        <h1>06</h1>
                                        <h3>每月商学院</h3>
                                        <p class="line"></p>
                                        <p>定期组织培训 提供系统培训支持</p>
                                    </div>
                                </div>
                                <div class="content2" style="margin-top: -40px;">
                                    <div>
                                        <h1>07</h1>
                                        <h3>店面选址</h3>
                                        <p class="line"></p>
                                        <p>饰商圈、顾客评估  优选最佳开店地址</p>
                                    </div>
                                    <div>
                                        <h1>08</h1>
                                        <h3>店面选址</h3>
                                        <p class="line"></p>
                                        <p>饰商圈、顾客评估  优选最佳开店地址</p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                </Carousel> -->
                <img src="@/assets/images/addvantage/2.jpg" alt="">
            </div>
            <div class="floor3">
                <!-- <h4>RETURN ON INVESTMENT</h4>
                <h1>投资回报</h1>
                <p class="line"></p>
                <div>
                    <p class="title">加入熙美，日入斗金</p>
                    <p class="txt"><span>目</span>前，熙美诚品平均每1天就有2家熙美诚品店开业。熙美诚品对所有门店营业额进行数据分析，得出60平方米的门店平均营业额，每天
                            5000元左右；100平方米的门店平均营业额，每天8000元左右；150平方米的门店平均营业额，每天一万元左右。</p>
                </div> -->
                <img src="@/assets/images/addvantage/21.jpg" alt="" style="width: 100%;">
                <p class="title">从了解到开业  一站式服务体系</p>
                <h4>FRANCHISE PROCESS</h4>
                <h1>加盟流程</h1>
                <p class="line"></p>
                <ul class="one">
                    <li>合作申请</li>
                    <li>店址审核</li>
                    <li>店铺装修设计</li>
                    <li>物流配送</li>
                    <li>
                        <p>经营指导</p>
                        <p>数据分析</p>
                    </li>
                </ul>
                <img src="@/assets/images/addvantage/22.jpg" alt="" style="width: 100%;">
                <ul class="two">
                    <li>
                        <p>考察公司、</p>
                        <p>展厅及仓库</p>
                    </li>
                    <li>签订合约</li>
                    <li>
                        <p>开业培训</p>
                        <p>监理装修指导</p>
                    </li>
                    <li>正式开业</li>
                    <li>
                        <p>后期支持</p>
                        <p>督导下店</p>
                    </li>
                </ul>
            </div>
            <div class="floor4">
                <h4>OPEN FOR BUSINESS</h4>
                <h1>开店启动周期分布</h1>
                <p class="line"></p>
                <div class="info">
                    <p class="title">店面、展柜专业设计  人流测试精准计算</p>
                    <div class="content">
                        <ul class="item">
                            <li v-for="(item,index) in iconList" :key="index" :class="{'active':value === item.index}" @click="method(item.index)">
                                <span :class="item.icon" class="iconfont"></span>
                                <p class="label">{{item.label}}</p>
                                <p class="text">{{item.text}}</p>
                            </li>
                        </ul>
                        <ul class="item-content" v-show="value=='1'">
                            <li style="width: 50%;">
                                <span>01</span>
                                <p style="margin-left: 0">店面选址</p>
                            </li>
                            <li style="width: 50%">
                                <span>02</span>
                                <p style="margin-left: 0">根据当地商圈店面评估，人流量测试 </p>
                            </li>
                            <!-- <li>
                                <span>03</span>
                                <p>为加盟商寻找店面 </p>
                            </li> -->
                        </ul>
                        <ul class="item-content" v-show="value=='2'">
                            <!-- <p style="padding-left: 15px;">1个月内</p> -->
                            <li>
                                <span>01</span>
                                <p>施工店铺工程指导</p>
                            </li>
                            <li>
                                <span>02</span>
                                <p>效果图设计</p>
                            </li>
                            <li>
                                <span>03</span>
                                <p>督导下店支持</p>
                            </li>
                            <li>
                                <span>04</span>
                                <p>宣传推广支持</p>
                            </li>
                        </ul>
                        <ul class="item-content" v-show="value=='3'">
                            <!-- <p style="padding-left: 15px;">3-6个月</p> -->
                            <li>
                                <span>01</span>
                                <p>运营指导</p>
                            </li>
                            <li>
                                <span>02</span>
                                <p>区域宣传推广</p>
                            </li>
                            <li>
                                <span>03</span>
                                <p>集中培训、复训</p>
                            </li>
                            <!-- <li>
                                <span>04</span>
                                <p>店面运营支持</p>
                            </li> -->
                        </ul>
                        <ul class="item-content" v-show="value=='4'">
                            <!-- <p style="padding-left: 15px;">6个月之后</p> -->
                            <li>
                                <span>01</span>
                                <p>日常运营管理支持</p>
                            </li>
                            <li>
                                <span>02</span>
                                <p>定期强化培训支持</p>
                            </li>
                            <li>
                                <span>03</span>
                                <p>品牌宣传推广支持 </p>
                            </li>
                        </ul>
                    </div>
                    
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
                value1:0,
                iconList:[
                    {index:'1',label:'筹备期' ,icon:'el-iconchoubeijieduan',text:''},
                    {index:'2',label:'开业前',icon:'el-iconchoubeijihua',text:'（1个月内）'},
                    {index:'3',label:'发展期',icon:'el-iconfazhan',text:'（3-6个月）'},
                    {index:'4',label:'稳定期',icon:'el-iconwendingxing',text:'（6个月之后）'},
                ],
                value:'1',
                show:true,
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
            method(index){
                this.value=index;
            }
        },
        destroyed() {
            document.removeEventListener('scroll', this.handleScroll,true);   //  离开页面清除（移除）滚轮滚动事件,
        }
    }
</script>