// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Overlay from './src/components/Overlay.vue';
import SecondOverlay from './src/components/SecondOverlay.vue';
import NoContent from './src/components/NoContent.vue';

const routes = [
  { path: '/', component: Overlay },
  { path: '/subcomponent', component: SecondOverlay },
  { path: '/nocontent', component: NoContent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
