<template>
    <div class="alert" v-show="showAnimate">
        <a href="http://www8.53kf.com/m.php?cid=72055204">
            <img src="@/assets/images/alert.png" alt="" class="alert-img">
        </a>
        <img src="@/assets/images/关闭.png" alt="" class="close" @click="close">
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
                setInterval(() => {
                    this.showAnimate=true;		
                }, 15000);
            },
        }
    }
</script>
