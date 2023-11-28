<template>
    <div>
      <div ref="threeContainer" id="fixed-container"></div>
    </div>
  </template>
  
  <script>
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
  
  export default {
    data() {
      return {
        gltf: null,
      };
    },
    mounted() {
      this.setupScene();
      this.setupLights();
      this.load3DModel();
      this.setupAnimation();
      window.addEventListener('resize', this.handleWindowResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleWindowResize);
    },
    methods: {
      setupScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0c0c29);
  
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
  
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.$refs.threeContainer.appendChild(this.renderer.domElement);
  
        // Posiziona la camera in modo che il modello sia centrato
        this.camera.position.z = 40;
        this.camera.position.y = 10;
  
        // Aggiungi una griglia del piano per verificare la centratura
        const gridHelper = new THREE.GridHelper(100, 10);
        this.scene.add(gridHelper);
      },
      setupLights() {
        const ambientLight = new THREE.AmbientLight(0x404040);
        ambientLight.intensity = 2;
        this.scene.add(ambientLight);
  
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1).normalize();
        directionalLight.castShadow = true;
        this.scene.add(directionalLight);
  
        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 500;
      },
      load3DModel() {
        const loader = new GLTFLoader();
        loader.load('/models/brain.gltf', (gltf) => {
          this.gltf = gltf;
  
          // Scala il modello in modo che sia centrato e visibile
          gltf.scene.scale.set(6, 6, 6);
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
  
          // Ruota di 90 gradi verso sinistra
          if (gltf.scene) {
            gltf.scene.rotation.y = -Math.PI / 2;
            this.scene.add(gltf.scene);
          } else {
            console.error('Errore: La scena del modello non è definita correttamente.');
          }
  
          this.renderer.render(this.scene, this.camera);
        });
      },
      setupAnimation() {
        const animate = () => {
          requestAnimationFrame(animate);
  
          // Aggiorna la scena principale
          if (this.renderer) {
            this.renderer.render(this.scene, this.camera);
          }
        };
  
        animate();
      },
      handleWindowResize() {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
  
        this.camera.aspect = newWidth / newHeight;
        this.camera.updateProjectionMatrix();
  
        this.renderer.setSize(newWidth, newHeight);
  
        this.renderer.render(this.scene, this.camera);
      },
    },
  };
  </script>
  
  <style scoped>
  #fixed-container {
    width: 100%;
    height: 100%;
    margin: 0;
    position: fixed;
  }
  </style>
  