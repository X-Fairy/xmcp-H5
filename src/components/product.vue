<template>
    <div class="product">
            <!-- 头部菜单 -->
        <Header></Header>
        <div class="main" style="background: #fff;">
            <img src="@/assets/images/产品.jpg" alt="">
            <div class="goods">
                <ul class="tab">
                    <li v-for="(item,index) in category" :key="index" :label="item.label" :name="item.name" :class="value==item.name? 'active' : ''" @click="tab(item.name)">{{item.label}}
                        <span ></span>
                    </li>
                </ul>
                <ul class="list">
                    <li v-for="(item,index) in goodsList" :key="index">
                        <img :src="item.pathname" alt="" style="width: 150px;height: 150px;" @click="large(item.pathname)">
                    </li>
                </ul>
                <Col class="demo-spin-col" span="8" v-show="spinShow">
                    <Spin fix>
                        <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                        <div>Loading</div>
                    </Spin>
                </Col>
                <!-- <img src="@/assets/images/product/product1.jpg" alt=""> -->
             </div>
            <!-- 分页  -->
            <div class="page">
                <Page  :total="total" :page-size="12" @on-change="changePage" :current="currentPage"></Page>
            </div>
            <div class="content">
                <img src="@/assets/images/product/product2.jpg" alt="" style="margin-top: -45px;">
                <p>熙美诚品将“物超所值”作为品牌的核心理念，将“持续给消费者创造超越期待的产品”作为企业目标，期待每件拥有自己独特触感的产品，
                    都能温柔的融入生活，简单却实用的给消费者传递快乐和惊喜，给“物超所值”一个全新的定义。一条毛巾的柔软、一顶帽子的浪漫、
                    一款耳机的细致...熙美诚品，希望每一位消费者，都能在这里得到实用、好用、看得见的好物，让他们和所想的生活不期而遇。
                </p>
            </div>
        </div>
        <Modal v-model="Modal" title="查看大图" >
            <img :src="src" alt="">
        </Modal>
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
import https from '@/http.js'
export default {
    data(){
        return {
            show:false,
            category:[
                {label:"家居百货",name:1},
                {label:"彩妆护肤",name:2},
                {label:"文体礼品",name:3},
                {label:"饰品系列",name:4},
                {label:"季节产品",name:5},
                {label:"精美包饰",name:6},
                {label:"毛绒公仔",name:7},
                {label:"数码配件",name:8},
                {label:"休闲食品",name:9}
            ],
            value:1,
            goodsList:[
                
            ],
            currentPage:1,
            total:0,
            spinShow:false,
            Modal:false,
            src:''
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
        this.getList();
    },
    methods:{
        //* 产品分类切换 */
        tab(value){
            this.spinShow=true;
            this.value=value.toString();
            this.currentPage=1;
            this.getList();
        },
        getList(){
            var params={'id':this.value,'p':this.currentPage};
            https.post('/gyanwang/index.php/Home/Index/classa',params).then((res)=>{
                this.spinShow=false;
                this.total=res.data.other.totalNumber;
                delete res.data.other;
                this.goodsList=res.data;
                for(let i in this.goodsList){
                    this.goodsList[i].pathname='http://www.xmcpcn.com/'+this.goodsList[i].pathname;
                }
            })
        },
        changePage(index){
            this.currentPage=index;
            document.scrollingElement.scrollTop=0;
            this.getList();
        },
        large(src){
            this.src=src;
            this.Modal=true;
        }
    }
}
</script>
<style type="less">
     .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>