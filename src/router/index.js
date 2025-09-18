import {createRouter, createWebHistory} from "vue-router";
import TodoPage from "/src/view/TodoPage.vue";
import AboutPage from "/src/view/TodoPage/AboutPage.vue";

const routes = [
    {path: '/', name: 'home', component: TodoPage},
    {path: '/todo', name: 'todo', component: TodoPage},
    {path: '/about', name: 'about', component: AboutPage},
];

export default createRouter({
    history: createWebHistory(),
    routes
})