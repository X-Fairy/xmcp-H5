<template>
    <div class="alert" v-show="showAnimate">
        <div>
            <img src="@/assets/images/alert.png" alt="" class="alert-img">
            <div class="alert-bottom">
                <a href="http://www8.53kf.com/m.php?cid=72055204" class="zixun">
                    立即咨询
                </a>
                <a class="next-one" @click="close">下次再说</a>
            </div>
            
        </div>
        
        <!-- <img src="@/assets/images/关闭.png" alt="" class="close" @click="close"> -->
    </div>
</template>
<script>
    export default{
        data(){
            return{
                showAnimate:false
            }
        },
        mounted(){
            setTimeout(()=>{
                this.showAnimate=true;
                $('.alert').addClass('animated slideInDown')
            }, 3000)
        },
        methods:{
            close(){
                this.showAnimate=false;
                setTimeout(() => {
                    this.showAnimate=true;		
                }, 15000);
            },
        }
    }
</script>
