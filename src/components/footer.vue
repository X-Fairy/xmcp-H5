<template>
    <div class="footer">
       <div class="footer1">
            <div class="left">
                <p>联系我们</p>
                <h2 style="margin-bottom: 20px;">Address</h2>
                <div class="address">
                    <ul>
                        <li>华东总部地址：浙江杭州华成国际发展大厦1901-1902</li>
                        <li>华南总部地址：广州国际金融中心1802-1803单元</li>
                        <li>物流仓储基地：浙江省义乌市丹溪北路728号熙美诚品</li>
                    </ul>
                    <ul>
                        <li>南京分公司地址：江苏省南京市太平南路1号新世纪广场B座2116</li>
                        <li>成都分公司地址：四川省成都市锦江区盐市口东御街19号茂业天地3809室</li>
                        <!-- <li>成都办事处地址：四川省成都市锦江区盐市口东御街19号茂业天地3809室</li> -->
                    </ul>
                </div>
                
            </div>
            <div class="right">
                <p>联系我们</p>
                <h2 style="margin-bottom: 40px;">Contact Us</h2>
                <p>免费热线：</p>
                <h2 style="color: #1d8c9f;">400-863-5888</h2>
            </div>
        </div>
        <div class="footer2">
            <div class="msg">
                <div>
                    <img src="@/assets/images/LOGO.png" alt="">
                    <p>与我们一起向全球消费者传递快乐和惊喜</p>
                </div>
                <ul @click="top">
                    <li @click="$router.push({path: '/about'})"><p>关于熙美</p></li>
                    <li @click="$router.push({path: '/order'})"><p>招商加盟</p></li>
                    <li @click="$router.push({path: '/store'})"><p>店面展示</p></li>
                    <li @click="$router.push({path: '/news'})"><p>新闻资讯</p></li>
                    <!-- <li @click="$router.push({path: '/about'})"><p>熙美公益</p></li> -->
                    <li @click="$router.push({path: '/product'})"><p>产品分类</p></li>
                    <li @click="$router.push({path: '/school'})"><p>商学院</p></li>
                </ul>
                <div>
                    <!-- <img src="@/assets/images/icon/weixin.png" alt="" style="margin-left: 200px;"> -->
                </div>
            </div>
            <div class="text">
                <p>©2019 熙美诚品 版权所有 All Rights Reserved</p>
                <p>网站所属：义乌市楚睿电子商务有限公司    浙ICP备13017989号</p>
                <p>Built By 熙美诚品 | 技术支持：XIMI</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           
        }
    },

    mounted(){
       
    },
    computed: {
       
    },
    methods: {
        top(){
            document.scrollingElement.scrollTop=0;
        }
    }
}
</script>

