<template>
        <div class="newDetail">
            <!-- 头部菜单 -->
            <Header></Header>
            <div class="main" style="background: #fff;">
                <img src="@/assets/images/school/shadow.jpg" alt="">
                <div class="content">
                    <p class="title">{{details.title}}</p>
                    <p class="time">{{details.editeddate}}</p>
                    <div class="desc"></div>
                </div>
                <div class="next">
                    <!-- <p>上一篇：无</p>
                    <p>下一篇：越努力 越熙美|第36期《金牌加盟商》培训会之...</p> -->
                    <img class="more" src="@/assets/images/more.png" alt="" @click="$router.push({path:'/news'})">
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
                details:[],
               
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
            }, 1000);
            this.getUrlData()
        },
        methods:{
             /**
             * 得到网址的参数
             */
            getUrlData(){
                let index = decodeURI(window.location.href).indexOf('?');
                let url = decodeURI(window.location.href).substr(index+1).substr(4);
                let params={'num':url};
                https.post('/gyanwang/index.php/Home/Index/details',params).then((res)=>{
                    this.details=res.data[0];
                    $('.desc').html(this.details.content);
                    var imgs=$('.desc').find('img')
                    for(let i in imgs){
                        
                        // if(imgs[i].src.indexOf('xmcpcn') == -1){
                            imgs[i].src=imgs[i].src.replace('ceshi.xmcpcn','xmcpcn');
                        // }
                        console.log(imgs[i].src);
                        
                    }
                    
                })
                
            },
        }
    }
    </script>