<template>
  <div>
    <div ref="threeContainer" id="fixed-container"></div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as TWEEN from '@tweenjs/tween.js';

export default {
  data() {
    return {
      gltf: null,
      scrollPosition: 0,
      transitionCalled: false, // Aggiunta variabile per tracciare se la transizione è stata chiamata
    };
  },
  mounted() {
    this.setupScene();
    this.setupLights();
    this.load3DModel();
    this.setupAnimation();
    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('wheel', this.transition);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('wheel', this.transition);
  },
  methods: {
    setupScene() {
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x0c0c29);

      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer();

      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.threeContainer.appendChild(this.renderer.domElement);

      this.camera.position.z = 40;
      this.camera.position.y = 10;

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

        gltf.scene.scale.set(6, 6, 6);
        gltf.scene.position.set(5, 0, 0);
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

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
        TWEEN.update();
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
    transition() {
      // Verifica se la transizione è già stata chiamata
      if (this.transitionCalled) {
        return;
      }

      this.transitionCalled = true; // Imposta la variabile a true per indicare che la transizione è stata chiamata

      this.scrollPosition = window.scrollY;
      const targetRotation = ((window.innerHeight - this.scrollPosition) / window.innerHeight) * (Math.PI * 1.01);

      const boundingBox = new THREE.Box3().setFromObject(this.gltf.scene);
      const modelCenter = new THREE.Vector3();
      boundingBox.getCenter(modelCenter);

      const originalPosition = this.gltf.scene.position.clone();

      this.gltf.scene.position.sub(modelCenter);

      new TWEEN.Tween(this.gltf.scene.rotation)
        .to({ y: targetRotation }, 3000)
        .onUpdate(() => {
          this.gltf.scene.position.copy(originalPosition);
          this.gltf.scene.position.sub(modelCenter);
          this.gltf.scene.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), targetRotation);
          this.gltf.scene.position.add(modelCenter);

          this.renderer.render(this.scene, this.camera);
        })
        .start();
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
