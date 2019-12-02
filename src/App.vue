<template>
  <div id="app" >
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive">
			<!-- 这里是会被缓存的视图组件 -->
			</router-view>
        </keep-alive>
        <!--  这里是不会被缓存的视图组件 -->
		<router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  	name: "App",
	provide(){
		return{
			reload: this.reload,
			
		}
	},
	data(){
		return{
			isRouterAlive: true,
			styleObject: {
                    width: '100%'
                }
		}
	},
	created() {
	},
	mounted() {
            // // 动态设置背景图的高度为浏览器可视区域高度
            // // 首先在Virtual DOM渲染数据时，设置下demo的高度．
            // this.styleObject.width = `${document.documentElement.clientWidth*0.4}px`; // 具体计算看需要
			// console.log(this.styleObject.width);
            // // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
            // const that = this;
            // window.onresize = function temp() {
            //     that.styleObject.width = `${document.documentElement.clientWidth*0.4}px`;
            // };
        },
	methods: {
		reload() {
			this.isRouterAlive = false;
			this.$nextTick(function () {
				this.isRouterAlive=true;
			})
		},
    }
};
</script>


<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        position: relative;
        background: #fff;
        font-family: 'Microsoft yahei',Arial !important;
        
    }
</style>
