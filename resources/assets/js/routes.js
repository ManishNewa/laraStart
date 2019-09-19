import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

Vue.use(VueRouter);

export const routes = [    
    {
        path : '/dashboard',
        name : 'dashboard',
        component : Dashboard
    },
    {
        path : '/profile',
        name : 'profile',
        component : Profile
    },           
        
    
];



const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})