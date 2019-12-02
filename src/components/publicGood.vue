<template>
    <div class="publicgood">
        <!-- 头部 -->
        <Header tab='7'></Header>
        <div class="main">
            <div class="linear"></div>
            <div class="floor1">
                <h4>HOPE PRIMARY SCHOOL</h4>
                <h1>希望小学</h1>
                <p class="line"></p>
                <P><span>2017</span>年熙美诚品成立熙美基金，目前已成功助建10所希望小学，资助1000多位贫困孩子重返校园 其中<span>梁河县大厂乡熙美诚品黄宏章
                    小学</span>，是最早建成并投入使用的一所小学。第二所是<span>白传强希望小学</span>，第三所是<span>孙明义希望小学</span>。
                </P>
                <img src="@/assets/images/pg/1.png" alt="">
                <img src="@/assets/images/pg/2.jpg" alt="">
                <img src="@/assets/images/pg/3.png" alt="">
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
                value:0,
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
        },
        destroyed() {
            document.removeEventListener('scroll', this.handleScroll,true);   //  离开页面清除（移除）滚轮滚动事件,
        }
    }
</script>