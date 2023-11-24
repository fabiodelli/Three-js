<template>
    <div>
      <!-- Contenuto sovrapposto -->
      <div class="overlay-content">
        <span class="as">ciao</span>
        <span class="ad">ciao</span>
        <span class="bs">ciao</span>
        <span class="bd">ciao</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Aggiungi la logica del componente se necessario
  };
  </script>
  
  <style scoped>
  .as{
    position: absolute;
    top: 0;
    left: 0;
    background: red;
  }
  .ad{
    position: absolute;
    top: 0;
    right: 0;
    background: red;
  }
  .bs{
    position: absolute;
    bottom: 0;
    right: 0;
    background: red;
  }
  .bd{
    position: absolute;
    bottom: 0;
    left: 0;
    background: red;
  }
  </style>
  