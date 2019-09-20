import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Users from './components/Users';


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
    {
        path : '/users',
        name : 'users',
        component : Users
    },           
        
    
];



const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})