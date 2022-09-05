import Vue from 'vue'
import VueRouter from 'vue-router'

//Home components\\
import Home from '../views/Home/Home.vue'
//=================\\

//About components\\
import About from '../views/About/About';
//=================\\

//Contact components\\
import Contact from '../views/Contact/Contact';
//===================\\

//Donation components\\
import Donation from '../views/Donation/Donate';
//====================\\

//FAQ components\\
import FAQ from '../views/FAQ/FAQ';
//===============\\

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/donation',
    name: 'Donation',
    component: Donation
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
