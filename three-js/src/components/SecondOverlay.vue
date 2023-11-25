<template>
    <div>
      <!-- Contenuto sovrapposto -->
      <div class="overlay-content">
        <LastProject class="LastProject" />
        <Paragraf class="paragraf"/>
        <Slogan class="slogan" />
      </div>
    </div>
  </template>
  
  <script>
import LastProject from './subcomponents/LastProject.vue';
import Paragraf from './subcomponents/Paragraf.vue';
import Slogan from './subcomponents/Slogan.vue';
import SecondComponent from './subcomponents/SecondComponent.vue';

export default {
  components: {
    LastProject,
    Paragraf,
    Slogan,
    SecondComponent,
  },
};
  </script>
  
  <style scoped>
  .paragraf{
    color: red;
    position: absolute;
    left: 10%;
    bottom: 10%;
    width: 20%;
}
  .slogan{
    color: red;
    position: absolute;
    left: 25%;
    bottom: 35%;
}
  .LastProject{
    color: red;
    position: absolute;
    right: 10%;
    bottom: 10%;
}

  </style>