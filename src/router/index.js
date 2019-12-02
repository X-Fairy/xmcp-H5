import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home';
import about from '@/components/about';
import order from '@/components/order';
import store from '@/components/store';
import publicGood from '@/components/publicGood';
import school from '@/components/school';
import product from '@/components/product';
import news from '@/components/news';
import newDetail from '@/components/newDetail';

Vue.use(Router)

export default new Router({
  // mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path: '/about',
      component: about,
    },
    {
      path: '/order',
      component: order,
    },
    {
      path: '/store',
      component: store,
    },
    {
      path: '/publicGood',
      component: publicGood,
    },
    {
      path: '/school',
      component: school,
    },
    {
      path: '/product',
      component: product,
    },
    {
      path: '/news',
      component: news,
    },
    {
      path: '/newDetail',
      component: newDetail,
    },
  ]
})
