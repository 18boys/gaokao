import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/index.vue'
import Select from '@/components/Select/index.vue'
import Topic from '@/components/Topic/index.vue'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/topic',
      name: 'Topic',
      component: Topic
    },
  ]
})
