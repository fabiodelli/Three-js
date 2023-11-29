<template>
    <div>
      <!-- Contenuto sovrapposto -->
      <div class="overlay-content">

        <div class="pointbox-a">
          <div class="text-a">Emisfero sinistro</div>
          <div class="point-a"></div>
        </div>

        <div class="pointbox-b">
          <div class="point-b"></div>
          <div class="text-b">Emisfero destro</div>
        </div>

        <div class="pointbox-c">
          <div class="text-c">Intelligenza artificiale</div>
          <div class="point-c"></div>
        </div>
        

      </div>
    </div>
  </template>
  
  <script>

  </script>
  
  <style scoped>
  .point-a{
    color: white;
    height: 30px;
    width: 30px;
    border-radius: 25px;
    background: cornflowerblue;
    
  }
  .point-b{
    color: white;
    height: 30px;
    width: 30px;
    border-radius: 25px;
    background: cornflowerblue;
    
  }
  .point-c{
    color: white;
    height: 30px;
    width: 30px;
    border-radius: 25px;
    background: cornflowerblue;
  }

  .pointbox-a{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 40%;
    left: 25%;
    z-index: 2;
  }
  .pointbox-b{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 40%;
    right: 25%;
    z-index: 2;
  }
  .pointbox-c{
    
    position: absolute;
    top: 40%;
    left: calc(50% - 25px);
    z-index: 2;
  }
  .text-a{
    color: white;
  }
  .text-b{
    color: white;
  }
  .text-c{
    color: white;
    position: absolute;
    bottom: 150%;
    right: -100%;
  }

  </style>