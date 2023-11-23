<!-- All'interno di ThreeScene.vue -->
<template>
  <div ref="threeContainer"></div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default {
  mounted() {
  const scene = new THREE.Scene();

  // Imposta un colore solido come sfondo (ad esempio, grigio)
  scene.background = new THREE.Color(0x808080);

  // Oppure, puoi utilizzare una texture come sfondo
  // const textureLoader = new THREE.TextureLoader();
  // const texture = textureLoader.load('/path/to/your/texture.jpg');
  // scene.background = texture;

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);
  this.$refs.threeContainer.appendChild(renderer.domElement);

    // Aggiungi luce ambientale
    const ambientLight = new THREE.AmbientLight(0x404040);
    ambientLight.intensity = 2;
    scene.add(ambientLight);

    // Aggiungi luce direzionale
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Configurazione della "camera delle ombre" per la luce direzionale
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;

    // Carica il modello 3D
    const loader = new GLTFLoader();
    loader.load('/models/brain.gltf', (gltf) => {
      gltf.scene.scale.set(5, 5, 5);

      // Abilita le ombre per tutti gli oggetti nel modello
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      scene.add(gltf.scene);
    });

    camera.position.z = 50;

    // Abilita le ombre per la scena
    scene.castShadow = true;
    scene.receiveShadow = true;

    // Animazione
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  },
};
</script>

<style scoped>
/* Aggiungi stili se necessario */
</style>

