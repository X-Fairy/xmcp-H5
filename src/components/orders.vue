<template>
    <div class="orders">
        <!-- 头部菜单 -->
        <Header></Header>
        <div class="main" >
            <img src="@/assets/images/school/shadow.jpg" alt="">
            <div class="info1">
                <div class="f1" style="padding-top: 0;">
                    <p class="p1">Core Strengths</p>
                    <p class="p2">核心优势</p>
                </div>
                <ul>
                    <li style="width: 48%">
                        <div>
                            <p>5万平仓储物流中心</p>
                            <span>为客户提供3.9亿库存</span>
                        </div>
                        <img src="@/assets/images/addvantage/1.jpg" alt="">
                    </li>
                    <li style="width: 48%">
                        <div>
                            <p>1000家优质的产品供应商</p>
                            <span>50%合作3年以上，重叠度最高</span>
                        </div>
                        <img src="@/assets/images/addvantage/2.jpg" alt="">
                    </li>
                    <li>
                        <div>
                            <p>10年行业沉淀</p>
                            <span>大数据基础、团队基础、供应链基础</span>
                        </div>
                        <img src="@/assets/images/addvantage/3.jpg" alt="">
                    </li>
                    <li>
                        <div>
                            <p>300+老加盟商开二店及多店</p>
                            <span>二店率高达38%</span>
                        </div>
                        <img src="@/assets/images/addvantage/4.jpg" alt="">
                    </li>
                    <li>
                        <div>
                            <p>7大区督导配置</p>
                            <span>北京、兰州、郑州、杭州、南京、广州、成都、义乌——服务覆盖全国</span>
                        </div>
                        <img src="@/assets/images/addvantage/5.jpg" alt="">
                    </li>
                    <li style="width: 48%">
                        <div>
                            <p>全年12场大型培训会</p>
                            <span>N+场精品培训会</span>
                        </div>
                        <img src="@/assets/images/addvantage/6.jpg" alt="">
                    </li>
                    <li style="width: 48%">
                        <div>
                            <p>军事化管理团队</p>
                            <span>保障有力，超强执行力团队</span>
                        </div>
                        <img src="@/assets/images/addvantage/7.jpg" alt="">
                    </li>
                </ul>
                <img src="@/assets/images/addvantage/8.jpg" alt="">
                <img src="@/assets/images/addvantage/10.jpg" alt="">
                <img src="@/assets/images/addvantage/11.jpg" alt="">
            </div>
            <div class="info2">
                <div class="f1">
                    <p class="p1">Support System</p>
                    <p class="p2">支持体系</p>
                </div>
                <p class="t">从选址到后期运营，我们一路保驾护航</p>
                <ul>
                    
                    <li>
                        <p>店面选址</p>
                        <span>商圈顾客评估优选最佳开店地址</span>
                    </li>
                    <li>
                        <p>整店VI装修</p>
                        <span>提供整体VI把控 店面图纸设计</span>
                    </li>
                    <li>
                        <p>智能ERP系统</p>
                        <span>海鼎ESHOP智能ERP收银软件</span>
                    </li>
                    <li>
                        <p>运营筹备</p>
                        <span>定期组织培训 提供系统培训支持</span>
                    </li>
                    <li>
                        <p>每月商学院</p>
                        <span>定期组织培训 提供系统培训支持</span>
                    </li>
                    <li>
                        <p>高级督导</p>
                        <span>专业运营导师 下店指导</span>
                    </li>
                    <li>
                        <p>宣传推广</p>
                        <span>定期组织培训 提供系统培训支持</span>
                    </li>
                    <li>
                        <p>日常运营</p>
                        <span>定期组织培训 提供系统培训支持</span>
                    </li>
                    <li style="background: none;"></li>
                </ul>
                <img src="@/assets/images/addvantage/12.jpg" alt="">

            </div>
            <div class="info3">
                <div class="f1">
                    <p class="p1">Return On Investment</p>
                    <p class="p2">投资回报</p>
                </div>
                <div class="ximei">
                    <img src="@/assets/images/addvantage/13.jpg" alt="">
                    <p>目前，熙美诚品平均每1天就有2家熙美诚品店开业。熙美诚品对所有门店营业额进行数据分析，得出60平方米的门店平均营业额，每天
                        5000元左右；100平方米的门店平均营业额，每天8000元左右；150平方米的门店平均营业额，每天一万元左右。
                    </p>
                </div>
                <div class="path">
                    <img src="@/assets/images/addvantage/14.jpg" alt="">
                    <div class="f1" style="padding-top: 0;">
                        <p class="p1">Join Process</p>
                        <p class="p2">加盟流程</p>
                    </div>
                    <img src="@/assets/images/addvantage/15.jpg" alt="">
                    <div style="display: flex;">
                        <img src="@/assets/images/addvantage/16.jpg" alt="" style="width: 50%;height: 50%;">
                        <img src="@/assets/images/addvantage/17.jpg" alt="" style="width: 50%;height: 50%;"> 
                    </div>
                </div>
            </div>
            <div class="info4">
                <div class="f1" style="background:#fff;">
                    <p class="p1">Open for Business</p>
                    <p class="p2">开店启动周期分布</p>
                </div>
                <img src="@/assets/images/addvantage/18.jpg" alt="">
                <ul class="item">
                    <li v-for="(item,index) in iconList" :key="index" :class="{'active':value === item.index}" @click="method(item.index)">
                        <span :class="item.icon" class="iconfont"></span>
                        <p>{{item.label}}</p>
                    </li>
                </ul>
                <ul class="item-content" v-show="value=='1'">
                    <li>
                        <span>01</span>
                        <p>合作申请、考察公司</p>
                    </li>
                    <li>
                        <span>02</span>
                        <p>根据当地商圈店面评估，人流量测试 </p>
                    </li>
                    <li>
                        <span>03</span>
                        <p>为加盟商寻找店面 </p>
                    </li>
                </ul>
                <ul class="item-content" v-show="value=='2'">
                    <!-- <p style="padding-left: 15px;">1个月内</p> -->
                    <li>
                        <span>01</span>
                        <p>签订合约</p>
                    </li>
                    <li>
                        <span>02</span>
                        <p>店面装修 </p>
                    </li>
                    <li>
                        <span>03</span>
                        <p>装修支持</p>
                    </li>
                    <li>
                        <span>04</span>
                        <p>物流配送</p>
                    </li>
                </ul>
                <ul class="item-content" v-show="value=='3'">
                    <!-- <p style="padding-left: 15px;">3-6个月</p> -->
                    <li>
                        <span>01</span>
                        <p>运营辅导</p>
                    </li>
                    <li>
                        <span>02</span>
                        <p>区域宣传推广</p>
                    </li>
                    <li>
                        <span>03</span>
                        <p>集中培训、复训</p>
                    </li>
                    <li>
                        <span>04</span>
                        <p>店面运营支持</p>
                    </li>
                </ul>
                <ul class="item-content" v-show="value=='4'">
                    <!-- <p style="padding-left: 15px;">6个月之后</p> -->
                    <li>
                        <span>01</span>
                        <p>定期强化培训支持</p>
                    </li>
                    <li>
                        <span>02</span>
                        <p>日常运营管理支持</p>
                    </li>
                    <li>
                        <span>03</span>
                        <p>统一品牌宣传推广支持 </p>
                    </li>
                </ul>
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
            iconList:[
                {index:'1',label:'筹备期' ,icon:'el-iconchoubeijieduan'},
                {index:'2',label:'开业前',icon:'el-iconchoubeijihua'},
                {index:'3',label:'发展期',icon:'el-iconfazhan'},
                {index:'4',label:'稳定器',icon:'el-iconwendingxing'},
            ],
            value:'1',
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
        }, 1000)
    },
    methods:{
        method(index){
            this.value=index;
        }
    }
}
</script>