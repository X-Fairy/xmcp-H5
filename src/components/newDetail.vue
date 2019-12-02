<template>
    <div class="newDetail">
         <!-- 头部 -->
        <Header tab="5"></Header>
        <div class="main">
            <div class="linear"></div>
            <div class="content">
                <div class="back" @click="$router.push({path: 'news'})">
                    <svg  style="margin-top:23px;cursor: pointer;" t="1573804999697" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4765" width="25" height="25"><path d="M213.333333 507.733333h725.333334v42.666667H204.8l145.066667 145.066667-29.866667 29.866666L128 533.333333 320 341.333333l29.866667 29.866667L213.333333 507.733333z" fill="#444444" p-id="4766"></path></svg> 
                    新闻资讯
                </div>
                <p class="title">{{details.title}} </p>
                <p class="time">{{details.editeddate}} <span style="float: right;font-size: 14px;color: #999999;padding-right: 20px;"><Icon type="eye" style="padding-right: 10px;"></Icon>{{details.views}}</span></p>
                <div class="desc"></div>
            </div>
            <div class="next">
                <p @click="prev">上一篇</p>
                <p @click="next">下一篇</p>
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
    import Header from '@/components/header.vue'
    import Footer from '@/components/footer.vue'
    import https from '@/http.js'
    export default {
        data(){
            return {
                show:false,
                details:[],
                id:'',
                show:true,
            }
        },
        components: {
            Header,
            Footer
        },
        created () {
            this.getUrlData()
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
             /**
             * 得到网址的参数
             */
            getUrlData(){
                let index = decodeURI(window.location.href).indexOf('?');
                let url = decodeURI(window.location.href).substr(index+1).substr(4);
                this.id=url;
                this.detail();
            },
            detail(){
                let params={'num':this.id};
                https.post('/gyanwang/index.php/Home/Index/details',params).then((res)=>{
                    this.details=res.data[0];
                    $('.desc').html(this.details.content);
                    var imgs=$('.desc').find('img')
                    for(let i in imgs){
                            imgs[i].src=imgs[i].src.replace('vip.xmcpcn','xmcpcn');
                        console.log(imgs[i].src);
                    }
                    
                })
            },
            prev(){
                this.id--;
                this.$router.push({path:'/newDetail',query:{num:this.id}})
                this.detail();
            },
            next(){
                this.id++;
                this.$router.push({path:'/newDetail',query:{num:this.id}})
                this.detail();
            }
        },
        destroyed() {
            document.removeEventListener('scroll', this.handleScroll,true);   //  离开页面清除（移除）滚轮滚动事件,
        }
    }
</script>