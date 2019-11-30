/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./bootstrap');

window.Vue = require('vue');

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('Myheader', require('./components/Myheader.vue').default);

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let Myheader = require('./components/Myheader.vue').default;
let Myfooter = require('./components/Myfooter.vue').default;


// 1. Define route components.
// These can be imported from other files
let Home = require('./components/Home.vue').default;
let About = require('./components/About.vue').default;
let Login = require('./components/Login.vue').default;
let Signup = require('./components/Register.vue').default;
let ReportIssues = require('./components/ReportIssues.vue').default;
let Documentation = require('./components/Documentation.vue').default;
let Contact = require('./components/Contact.vue').default;
let Jobs = require('./components/Jobs.vue').default;

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/reportIssues', component: ReportIssues},
    { path: '/documentation', component: Documentation},
    { path: '/contact', component: Contact},
    { path: '/jobs', component: Jobs}
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    mode : 'history',
    routes // short for `routes: routes`
  })
// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.


const app = new Vue({
    el: '#app',
    router,
    components : {Myheader, Myfooter},
});
