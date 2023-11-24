<!-- All'interno di ThreeScene.vue -->
<!-- ThreeScene.vue -->
<template>
  <div>
    <Model />
    <Overlay />
  </div>
</template>

<script>
import Model from './Model.vue';
import Overlay from './Overlay.vue';

export default {
  components: {
    Model,
    Overlay,
  },
};
</script>





