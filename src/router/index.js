import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminListings from '../views/admin/AdminListings.vue'
import Directory from '../views/Directory.vue'
import Listing from '../views/Listing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/businesses-for-sale',
    name: 'Directory',
    component: Directory
  },
  {
    path: '/listing',
    name: 'Listing',
    component: Listing
  },
  {
    path: '/admin/listings',
    name: 'AdminListings',
    component: AdminListings
  }

]

const router = new VueRouter({
  routes
})

export default router
