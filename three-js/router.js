// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Overlay from './src/components/Overlay.vue';
import SecondOverlay from './src/components/SecondOverlay.vue';

const routes = [
  { path: '/', component: Overlay },
  { path: '/second', component: SecondOverlay },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
