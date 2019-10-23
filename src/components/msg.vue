<template>
    <div class="msg"  >
        <a href="http://www8.53kf.com/m.php?cid=72055204">
            <img src="@/assets/images/2.png" alt=""  width="100%">
            <img src="@/assets/images/1.png" alt="" class="rotate animated tada" style="position: relative; top: -115px; left: 5px; width: 25px; margin: 0;">
        </a>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        mounted(){
           setInterval(() => {
                $('.rotate').removeClass('animated tada')
                setTimeout(()=>{
                    $('.rotate').addClass('animated tada')
                }, 100)
            }, 100)
           
        },
        methods:{
            
            
        }
    }
</script>
<style>
    .msg{
       width: 30px;
       position: fixed;
       z-index: 100;
       top: 40%;
       right: 0;
    }
</style>