    <!-- All'interno di App.vue -->
    <template>
      <div>
        <AppHeader /> <!-- Includi il componente Header -->
        <ThreeScene />
      </div>
    </template>
    
    <script>
    import AppHeader from './components/AppHeader.vue';
    import ThreeScene from './components/ThreeScene.vue';
    
    export default {
      components: {
        ThreeScene,
        AppHeader,
      },
    };
    </script>
    
    <style scoped>
    div {
      background: #0c0c29;
    }
    </style>
    