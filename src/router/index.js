// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/Home.vue';
import AboutPage from '../components/About.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/about', name: 'AboutPage', component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/Personal-Website-V2/' : '/'),
  routes,
});

export default router;
