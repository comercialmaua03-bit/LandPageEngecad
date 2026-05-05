import { createRouter, createWebHistory } from 'vue-router'
import Initialization from '../components/HelloWorld.vue'
import Landing from '../views/landing.vue'
import Test from '../views/test.vue'


const routes = [
    { path: '/', component: Initialization },
    { path: '/landing', component: Landing },
    { path: '/test', component: Test },
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router