import Vue from 'vue'
import Router from 'vue-router'
import ProductsList from '@/components/ProductsList'
import ProductPage from '@/components/ProductPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'products_list',
      component: ProductsList
    },
    {
      path: '/products/:id',
      name: 'product_page',
      component: ProductPage
    }
  ]
})
