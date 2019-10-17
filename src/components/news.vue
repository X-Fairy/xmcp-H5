<template>
    <div class="news">
        <!-- 头部菜单 -->
        <Header></Header>
        <div class="menu">
            <Menu mode="horizontal" theme="light" active-name="1" v-show="menuShow" @on-select="getType">
                <MenuItem name="1" >
                    企业动态
                </MenuItem>
                <MenuItem name="2">
                    新店开业
                </MenuItem>
            </Menu>
        </div>
        <div class="main">
            <img src="@/assets/images/school/shadow.jpg" alt="">
            <div class="f1" style="background: #fff;padding-top: 0;margin-top: -10px;">
                <p class="p1">Information</p>
                <p class="p2">{{title}}</p>
            </div>
            <!-- 新闻列表 -->
            <div>
                <div class="new" v-for="(item) in newList"  :key="item.index">
                    <img :src="item.pathname" alt="" class="newImg">
                    <div class="content">
                        <p class="title">{{item.title}}</p>
                        <p class="describe">{{item.content}}</p>
                        <div>
                            <span class="more" @click="detail(item.id)">了解更多 &gt;&gt;</span>
                            <span>{{item.editeddate}}</span>
                        </div>                                       
                    </div>
                </div>
            </div>
            
            <!-- 分页  -->
            <div class="page">
                <Page  :total="total" :page-size="pageSize" @on-change="changePage" :current="currentPage"></Page>
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
import https from '@/http.js'
export default {
    data(){
        return {
            show:false,
            newList:[],
            // 当前页
            currentPage:1,
            menuShow:false,
            value:'1',
            total:0,
            pageSize:10,
            title:'资讯动态'
        }
    },
    components: {
        Header,
        Footer
    },
    created () {
        const that = this;
        that.timer = setInterval(function () {
            if (document.readyState === 'complete') {
               that.show=true;
                window.clearInterval(that.timer)
            }
        }, 1000)
       this.getnewList();
    },
    mounted(){
        document.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
        document.addEventListener('touchmove', this.handleScroll)
    },
    methods:{
        /* 滚动显示新闻导航 */
        handleScroll(){
            var top=document.scrollingElement.scrollTop;
            if(top>=100){
                this.menuShow=true;
            }else{
                this.menuShow=false;
            }
            // let Y=$('.y')[0].y;
            // if(Y != 45){
            //     this.menuShow=true;
            // }else{
                
            // }
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
                        this.newList[i].title=this.newList[i].title.substr(0,15)+'...';
                        // if(this.newList[i].content.indexOf('<div>')!==-1){
                            this.newList[i].content=this.newList[i].content.replace(/<p (.*?)>/gi,"").replace(/<\/p>/gi,"").replace(/<div (.*?)>/gi,"").replace(/<\/div>/gi,"").replace(/<span (.*?)>/gi,"").replace(/<\/span>/gi,"");
                        // }else{
                        //     this.newList[i].content=this.newList[i].content.replace(/<p (.*?)>/gi,"").replace(/<\/p>/gi,"").replace(/<span (.*?)>/gi,"").replace(/<\/span>/gi,"").replace(/<p>&nbsp;/,'');
                        // }
                        this.newList[i].content=this.newList[i].content.replace(/&nbsp;/gi,'').replace(/<p>/gi,'').replace(/<br \/>/gi,'').replace(/<h2 (.*?)>/gi,"").replace(/<\/h2>/gi,'').replace(/<span>/gi,'').slice(0,40)+'...'
                        this.newList[i].editeddate=this.newList[i].editeddate.slice(0,10);
                }
                
            })
        },
        /* 切换菜单 */
        getType(name){
            this.value=name;
            this.currentPage=1;
            if(name==1){
                this.title='资讯动态'
            }else if(name==2){
                this.title='新店开业'
            }
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
        document.removeEventListener('touchmove', this.handleScroll,true);
    }
}
</script>