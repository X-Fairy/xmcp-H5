import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home';
import store from '@/components/store';
import product from '@/components/product';
import publicGood from '@/components/publicGood';
import enterprise from '@/components/enterprise';
import news from '@/components/news';
import school from '@/components/school';
import orders from '@/components/orders';
import newDetail from '@/components/newDetail';

Vue.use(Router)



export default new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path: '/store',
      component: store,
    },
    {
      path: '/product',
      component: product,
    },
    {
      path: '/publicGood',
      component: publicGood,
    },
    {
      path: '/enterprise',
      component: enterprise,
    },
    {
      path: '/news',
      component: news,
      // children:[
      //   {
      //     path:'/newDetail',
      //     name:'newDetail',
      //     component:newDetail,   
      //   },
      // ]
    },
    {
      path: '/school',
      component: school,
    },
    {
      path: '/orders',
      component: orders,
    },
    {
      path:'/newDetail',
      component:newDetail,   
    },
  ]
})
