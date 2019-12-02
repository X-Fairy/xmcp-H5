<template>
    <div class="product">
        <!-- 头部 -->
        <Header tab='8'></Header>
        <div class="main">
            <img src="@/assets/images/product/1.jpg" alt="" style="width: 100%;">
            <div class="floor1">
                <div class="left">
                    <h4>PRODUCT CATEGORIES</h4>
                    <h1>产品分类</h1>
                    <p class="line"></p>
                </div>
                <div class="right">
                    <Menu mode="horizontal"  :active-name="value" @on-select="change">
                        <MenuItem name="1">家居百货</MenuItem>
                        <MenuItem name="2">彩妆护肤</MenuItem>
                        <MenuItem name="3">饰品系列</MenuItem>
                        <MenuItem name="4">办公文体</MenuItem>
                        <MenuItem name="5">季节性产品</MenuItem>
                        <MenuItem name="6">精品包饰</MenuItem>
                        <MenuItem name="7">毛绒玩具</MenuItem>
                        <MenuItem name="8">休闲食品</MenuItem>
                    </Menu>
                </div>
            </div>
            <ul class="goods">
                <li v-for="(item,index) in goodsList" :key="index">
                    <img title="点击查看大图" :src="item.pathname" alt="" style="width: 150px;height: 150px;" @click="large(item.pathname)">
                </li>
            </ul>
            <!-- 分页  -->
            <div class="page">
                <Page  :total="total" :page-size="12" @on-change="changePage" :current="currentPage"></Page>
            </div>
            <img src="@/assets/images/product/2.jpg" alt="" style="width: 100%;">
            <p style="width: 63%;margin: auto;font-size: 16px;letter-spacing: 1px;line-height: 30px;padding: 30px 0 100px;">熙美诚品将<span style="color: #1d8c9f">“物超所值”</span>作为品牌的核心理念，将<span style="color: #1d8c9f">“持续给消费者创造超越期待的产品”</span>作为企业目标，期待每件拥有自己独特触感的产品，
                    都能温柔的融入生活，简单却实用的给消费者传递快乐和惊喜，给<span style="color: #1d8c9f">“物超所值”</span>一个全新的定义。一条毛巾的柔软、一顶帽子的浪漫、
                    一款耳机的细致...熙美诚品，希望每一位消费者，都能在这里得到实用、好用、看得见的好物，让他们和所想的生活不期而遇。
                </p>
        </div>
        <Modal v-model="Modal" title="查看大图" >
           <img :src="src" alt="" style="width: 100%;">
        </Modal>
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
    export default{
        components: {
            Header,
            Footer,
        },
        data(){
            return{
                value:'1',
                goodsList:[],
                currentPage:1,
                total:0,
                Modal:false,
                src:'',
                show:true,
            }
        },
        created(){
            this.getList();
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
            change(name){
                this.currentPage=1;
                switch (Number(name)){
                    case 1:
                        this.value='1';
                    break;
                    case 2:
                        this.value='2';
                    break;
                    case 3:
                        this.value='3';
                    break;
                    case 4:
                        this.value='4';
                    break;
                    case 5:
                        this.value='5';
                    break;
                    case 6:
                        this.value='6';
                    break;
                    case 7:
                        this.value='7';
                    break;
                    default:
                        this.value='8';
                    break;
                }
                this.getList()
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
                
                document.scrollingElement.scrollTop=800+'px';
                console.log(document.scrollingElement.scrollTop);
                this.getList();
            },
            large(src){
                this.src=src;
                this.Modal=true;
            }
        },
        destroyed() {
            document.removeEventListener('scroll', this.handleScroll,true);   //  离开页面清除（移除）滚轮滚动事件,
        }
    }
</script>