<template>
    <div>
      <!-- Contenuto sovrapposto -->
      <div class="overlay-content">
        <div class="point-a"></div>
        <div class="point-b"></div>
        <div class="point-c"></div>
      </div>
    </div>
  </template>
  
  <script>

  </script>
  
  <style scoped>
  .point-a{
    height: 50px;
    width: 50px;
    border-radius: 25px;
    background: cornflowerblue;
    position: absolute;
    top: 30%;
    left: 25%;
    z-index: 2;
  }
  .point-b{
    height: 50px;
    width: 50px;
    border-radius: 25px;
    background: cornflowerblue;
    position: absolute;
    top: 30%;
    right: 25%;
    z-index: 2;
  }
  .point-c{
    height: 50px;
    width: 50px;
    border-radius: 25px;
    background: cornflowerblue;
    position: absolute;
    top: 60%;
    left: calc(50% - 25px);
    z-index: 2;
  }

  </style>