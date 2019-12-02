<template>
    <div class="news">
        <!-- 头部 -->
        <Header tab="5"></Header>
        <div class="main">
            <div class="linear"></div>
            <div class="menu">
                <Menu mode="horizontal" theme="light" active-name="1"  @on-select="getType">
                    <MenuItem name="1" > <Icon type="ios-paper"></Icon>
                        企业动态
                    </MenuItem>
                    <MenuItem name="2"><Icon type="stats-bars"></Icon>
                        新店开业
                    </MenuItem>
                    <MenuItem name="3"><Icon type="ios-paper"></Icon>
                        学院快讯
                    </MenuItem>
                </Menu>
            </div>
            <div class="infos">
                <!-- 新闻列表 -->
                <div class="new" v-for="(item) in newList"  :key="item.index" @click="detail(item.id)">
                    <img :src="item.pathname" alt="" class="newImg">
                    <div class="content">
                        <p class="title">{{item.title}}</p>
                        <p class="time">{{item.editeddate}}</p>
                        <p class="describe">{{item.content}}</p>
                        <p class="more" >查看详情</p>       
                    </div>
                </div>
            </div>
            <!-- 分页  -->
            <div class="page">
                <Page  :total="total" :page-size="pageSize" @on-change="changePage" :current="currentPage"></Page>
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
import https from '@/http.js'
    export default{
        components: {
            Header,
            Footer,
        },
        data(){
            return{
                newList:[],
                // 当前页
                currentPage:1,
                value:'1',
                total:0,
                pageSize:10,
                show:true,
            }
        },
        created(){
            this.getnewList();
        },
        mounted(){
            document.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
        },
        methods:{
             /* 滚动显示新闻导航 */
            handleScroll(){
                var top=document.scrollingElement.scrollTop;
                let bottom=$('.footer').offset().top-top;
                if(bottom<730){
                   this.show=false;
                }else {
                    this.show=true;
                }
            },
            /* 获取新闻数据 */
            getnewList(){
                var params={'id':this.value,'p':this.currentPage.toString()};
                https.get('/gyanwang/index.php/Home/Index/index',params).then((res)=>{
                    this.total=res.data.other.totalNumber;
                    delete res.data.other;
                    this.newList=res.data;
                    for(let i in this.newList){
                        this.newList[i].pathname='http://www.xmcpcn.com/'+this.newList[i].pathname;
                            // this.newList[i].title=this.newList[i].title.substr(0,15)+'...';
                            this.newList[i].content=this.newList[i].content.replace(/<p (.*?)>/gi,"").replace(/<\/p>/gi,"").replace(/<div (.*?)>/gi,"").replace(/<\/div>/gi,"").replace(/<span (.*?)>/gi,"").replace(/<\/span>/gi,"");
                           
                            this.newList[i].content=this.newList[i].content.replace(/&nbsp;/gi,'').replace(/<p>/gi,'').replace(/<br \/>/gi,'').replace(/<h2 (.*?)>/gi,"").replace(/<\/h2>/gi,'').replace(/<span>/gi,'').slice(0,100)+'...'
                            this.newList[i].editeddate=this.newList[i].editeddate.slice(0,10);
                    }
                    
                })
            },
            /* 切换菜单 */
            getType(name){
                this.value=name;
                this.currentPage=1;
                // if(name==1){
                //     this.title='资讯动态'
                // }else if(name==2){
                //     this.title='新店开业'
                // }else if(name==3){

                // }
                this.getnewList();
            },
            /* 切换页 */
            changePage(index){
                this.currentPage=index;
                this.getnewList();
            },
            detail(num){
                num=num.toString();
                this.$router.push({path:'/newDetail',query:{num:num}})
            }

        },
        destroyed() {
            document.removeEventListener('scroll', this.handleScroll,true);   //  离开页面清除（移除）滚轮滚动事件
        }
    }
</script>