<!-- All'interno di ThreeScene.vue -->
<template>
  <div>
    <Model />
    <router-view />
  </div>
</template>

<script>
import Model from './Model.vue';
import Overlay from './Overlay.vue';
import SecondOverlay from './SecondOverlay.vue';
import NoContent from './NoContent.vue';


export default {
  components: {
    Model,
    Overlay,
    SecondOverlay,
    NoContent,
  },
};
</script>
<style scoped>

</style>







