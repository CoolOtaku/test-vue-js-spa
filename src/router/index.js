import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProductDetails from '../views/ProductDetails.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/product/:id',
        name: 'ProductDetails',
        component: ProductDetails,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
