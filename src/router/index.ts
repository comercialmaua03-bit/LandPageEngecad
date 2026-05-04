import { createRouter, createWebHistory } from 'vue-router'
import Initialization from '../components/HelloWorld.vue'


const routes = [
    { path: '/', component: Initialization },
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router