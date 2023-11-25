<template>
    <div>
      <!-- Contenuto sovrapposto -->
      <div class="overlay-content">
        <LastProject />
        <Paragraf />
        <Slogan />
      </div>
    </div>
  </template>
  
  <script>
import LastProject from './subcomponents/LastProject.vue';
import Paragraf from './subcomponents/Paragraf.vue';
import Slogan from './subcomponents/Slogan.vue';

export default {
  components: {
    LastProject,
    Paragraf,
    Slogan,
  },
};
  </script>
  
  <style scoped>
  
  </style>
  