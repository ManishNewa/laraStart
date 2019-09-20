
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// Adding Vue Forms
import { Form, HasError, AlertError } from 'vform';

window.Form = Form;

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Using seperate routes file for adding routes
import {routes} from "./routes.js";

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})
  
// Adding Vue Filter to uppercase the required texts
Vue.filter('uptext',function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
});


// Adding moment filter for date conversion into human readble format
import moment from 'moment';

Vue.filter('myDate',function(created){
    return moment(created).startOf('day').fromNow(); 
});

// Vue Progress Bars
import VueProgressBar from 'vue-progressbar';

Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    router
});