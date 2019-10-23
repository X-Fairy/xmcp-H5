<template>
    <div class="publicGood">
            <!-- 头部菜单 -->
        <Header></Header>
        <div class="main">
            <img src="@/assets/images/school/shadow.jpg" alt="">
            <div class="school1">
                <div class="f1" style="background:#fff;border-bottom: 1px solid #ddd;width: 82%;margin: auto;padding-left: 0;padding-top: 0;">
                    <p class="p1">Hope Pprimary School</p>
                    <p class="p2">希望小学</p>
                </div>
                <p class="txt">
                    2017年熙美诚品成立熙美基金，目前已成功助建了10所希望小学，资助1000多位贫困孩子重返校园，其中<span>梁河县大厂乡熙美诚品黄宏章
                    希望小学</span>，是最早建成并投入使用的一所学校，第二所是<span>白传强希望小学</span>，第三所是<span>孙明义希望小学</span>。
                </p>
                <div class="school-imgs">
                    <img src="@/assets/images/school/images/公益_02.png" alt="">
                    <div>
                       <img src="@/assets/images/school/images/公益_04.png" alt="">
                       <img src="@/assets/images/school/images/公益_06.png" alt="">
                    </div>
                    <img src="@/assets/images/school/images/公益_09.png" alt="">
                    <img src="@/assets/images/school/images/公益_10.png" alt="">
                    <img src="@/assets/images/school/images/公益_13.png" alt="">
                    <img src="@/assets/images/school/images/公益_17.png" alt="">
                    <img src="@/assets/images/school/images/公益_20.jpg" alt="">
                </div>
            </div>
            <!-- <img src="@/assets/images/公益.jpg" alt=""> -->
        </div>
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
export default {
    data(){
        return {
            timer: null, // 定时器
            show:false
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
        }, 1000)
    },
    methods:{
       
    }
}
</script>