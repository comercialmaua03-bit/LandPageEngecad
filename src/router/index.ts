import { createRouter, createWebHistory } from 'vue-router'
import Initialization from '../components/HelloWorld.vue'
import LandingPage from '../views/LandingPage.vue'


const routes = [
    { path: '/', component: Initialization },
    { path: '/landing', component: LandingPage },
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router