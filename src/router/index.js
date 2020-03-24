import Vue from 'vue'

import VueRouter from 'vue-router'
import home from "@/views/home";
import rezerv from "@/views/rezerv";
import cont from "@/views/cont";
import tabl from "@/views/tableBit";


Vue.use(VueRouter);


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: home,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/rezerv',
      name: 'rezerv',
      component: rezerv,
    },
    {
      path: '/cont',
      name: 'cont',
      component: cont,
    },
    {
      path: '/tabl',
      name: 'tabl',
      component: tabl,
    },

  ],
});
