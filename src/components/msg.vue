<template>
    <div class="msg"  >
        <a href="http://www8.53kf.com/m.php?cid=72055204">
            <img src="@/assets/images/2.png" alt=""  width="100%">
            <img src="@/assets/images/1.png" alt="" class="rotate" style="position: relative; top: -110px; left: 5px; width: 25px; margin: 0;">
        </a>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        mounted(){
            function state1(){
                $(".rotate").removeClass("r2"); 
                $(".rotate").addClass("r1");
                setTimeout(state2,90);
            }
            function state2(){       
                $(".rotate").removeClass("r1");
                $(".rotate").addClass("r2"); 
                setTimeout(state1,90);
            }
            state1();
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
    .r1{
        transform: rotate(-3deg);
        -moz-transform:rotate(-3deg);
        -webkit-transform:rotate(-3deg);
        -o-transform:rotate(-3deg);
    }
    .r2{
        transform:rotate(2deg);
        -moz-transform:rotate(2deg);
        -webkit-transform:rotate(2deg);
        -o-transform:rotate(2deg);
    }
</style>