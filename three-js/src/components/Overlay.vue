<template>
  <div>
    <!-- Contenuto sovrapposto -->
    <div class="overlay-content">
      <router-link to="/subcomponent">
        <LastProject class="LastProject" />
      </router-link>
      <Paragraf class="paragraf" />
      <Slogan class="slogan" />
    </div>
  </div>
</template>
  
<script>
import LastProject from './subcomponents/LastProject.vue';
import Paragraf from './subcomponents/Paragraf.vue';
import Slogan from './subcomponents/Slogan.vue';

export default {
  data() {
    return {
      // ... altre variabili di stato ...
      loadingNextComponent: false,
    };
  },
  components: {
    LastProject,
    Paragraf,
    Slogan,
  },

  mounted() {
    window.addEventListener('wheel', this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener('wheel', this.handleScroll);
  },

  methods: {
    handleScroll(event) {
    if (this.loadingNextComponent) {
      // Se è in corso il caricamento del componente successivo, esci dalla funzione
      return;
    }

    const deltaY = event.deltaY;

    // Scrolling verso l'alto
    if (deltaY < 0) {
      console.log("Scrolling up");
      this.$router.push('/');
    }
    // Scrolling verso il basso
    else if (deltaY > 0) {
      console.log("Scrolling down");

      this.$router.push('/nocontent');

      // Imposta lo stato di caricamento
      this.loadingNextComponent = true;

      // Ritarda l'impostazione del componente successivo
      setTimeout(() => {
        // Dopo 3 secondi, imposta il componente successivo
        this.$router.push('/subcomponent');
        // Ripristina lo stato di caricamento dopo aver impostato il componente successivo
        setTimeout(() => {
          this.loadingNextComponent = false;
        }, 0);
      }, 3000);
    }
  },
  },

};
</script>
  
<style scoped>
.paragraf {
  color: white;
  position: absolute;
  left: 10%;
  bottom: 10%;
  width: 20%;
}

.slogan {
  color: white;
  position: absolute;
  left: 50%;
  bottom: 35%;
  transform: translateX(-50%);
}

.LastProject {
  color: white;
  position: absolute;
  right: 10%;
  bottom: 10%;
}

</style>
  