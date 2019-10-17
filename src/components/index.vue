<template>
    <div class="index">
         <!-- 头部菜单 -->
         <Header></Header>
        <div class="bnner">
            <mt-swipe :auto="3000">
                <mt-swipe-item>1</mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
import Header from '@/components/header.vue'
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    components: {
        Header,
    },
    data(){
        return {
           
        }
    },
    components: {
        Swipe,
        SwipeItem
    },
    methods:{
      
    }
}
</script>