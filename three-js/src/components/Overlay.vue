<template>
    <div>
      <!-- Contenuto sovrapposto -->
      <div class="overlay-content">
        <router-link to="/subcomponent"><LastProject class="LastProject" /></router-link>
        <Paragraf class="paragraf"/>
        <Slogan class="slogan" />
        
        
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

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll(event) {
      const deltaY = event.deltaY;

      // Scrolling verso l'alto
      if (deltaY < 0) {
        console.log("Scrolling up");
        this.$router.push('/');
      }
      // Scrolling verso il basso
      else if (deltaY > 0) {
        console.log("Scrolling down");
        this.$router.push('/subcomponent');
      }
    },
  },

  mounted() {
    window.addEventListener('wheel', this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener('wheel', this.handleScroll);
  },
};
</script>
  
  <style scoped>
  .paragraf{
    color: white;
    position: absolute;
    left: 10%;
    bottom: 10%;
    width: 20%;
}
  .slogan{
    color: white;
    position: absolute;
    left: 25%;
    bottom: 35%;
}
  .LastProject{
    color: white;
    position: absolute;
    right: 10%;
    bottom: 10%;
}
p{
 
  background: red;
  position: absolute;
  left: 0;
  top: 0;
  height: 1000px;
}

.overlay-content{
   overflow-y: scroll;
}

  </style>
  