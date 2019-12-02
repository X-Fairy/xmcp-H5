<template>
    <div class="header">
        <div class="header-info">
            <div class="left">
                <div>
                    <img src="@/assets/images/LOGO.png" alt="">
                    <span class="line"></span>
                </div>
                <div style="margin-top: 25px;">
                    
                    <p>加盟咨询</p>
                    <h2>400-863-5888</h2>
                </div>
            </div>
            <div class="right">
                <ul>
                    <li class="list" v-for="(item,index) in tablist" :class="{'actived':tab == index+1}" @click="changetab(index+1)">{{item}}</li>
                    <li><span>|</span></li>
                    <li><span>EN</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['tab'],
    data(){
        return {
            tablist:['首页','关于熙美','招商加盟','店面展示','新闻资讯','商学院','产品分类'],
            tab:1
            
        }
    },
    created() {
      
    },
    methods: {
        changetab(index){
            this.tab=index;
            document.scrollingElement.scrollTop=0;
            switch (Number(this.tab)){
                case 1:
                    this.$router.push({path: '/'});
                break;
                case 2:
                    this.$router.push({path: '/about'});
                break;
                case 3:
                    this.$router.push({path: '/order'});
                break;
                case 4:
                    this.$router.push({path: '/store'});
                break;
                case 5:
                    this.$router.push({path: '/news'});
                break;
                case 6:
                    this.$router.push({path: '/school'});
                break;
                case 7:
                    this.$router.push({path: '/product'});;
                break;
                default:
                    // this.$router.push({path: '/product'});
                break;
            }
        },
        router(name){
            switch (Number(name)){
                case 1:
                    this.$router.push({path: '/'});
                break;
                case 2:
                    this.$router.push({path: '/about'});
                break;
                case 3:
                    this.$router.push({path: '/order'});
                break;
                case 4:
                    this.$router.push({path: '/store'});
                break;
                case 5:
                    this.$router.push({path: '/news'});
                break;
                case 6:
                    this.$router.push({path: '/school'});
                break;
                case 7:
                    this.$router.push({path: '/publicGood'});
                break;
                default:
                    this.$router.push({path: '/product'});
                break;
            }
        }
    }
}
</script>

