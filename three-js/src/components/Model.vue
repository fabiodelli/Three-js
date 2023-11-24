<template>
    <div>
      <div ref="threeContainer" id="fixed-container">
      </div>
    </div>
  </template>
  
  
<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default {
    data() {
        return {
            gltf: null,
            renderer: null, // Aggiungiamo renderer ai dati
        };
    },
    mounted() {
        this.setupScene();
        this.setupLights();
        this.load3DModel();
        this.setupAnimation();
    },
    methods: {
        setupScene() {
            this.scene = new THREE.Scene();
            this.scene.background = new THREE.Color(0x0c0c29);

            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            this.renderer = new THREE.WebGLRenderer();

            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.$refs.threeContainer.appendChild(this.renderer.domElement);

            // Centra il modello nella finestra
            this.camera.position.z = 50;
            this.camera.position.y = 0; // Regola questa posizione per centrare verticalmente il modello

            window.addEventListener('resize', this.handleWindowResize);
        },
        handleWindowResize() {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            this.camera.aspect = newWidth / newHeight;
            this.camera.updateProjectionMatrix();

            this.renderer.setSize(newWidth, newHeight);
        },
        // Restituisci la posizione della camera a quella originale quando il componente viene distrutto
        beforeDestroy() {
            window.removeEventListener('resize', this.handleWindowResize);
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
                gltf.scene.scale.set(4, 4, 4);

                gltf.scene.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });

                const rotation = new THREE.Euler(0, -Math.PI / 2, 0, 'XYZ');
                gltf.scene.setRotationFromEuler(rotation);

                this.scene.add(gltf.scene);
                this.gltf = gltf;
            });
        },
        setupAnimation() {
            const animate = () => {
                requestAnimationFrame(animate);

                // Aggiorna la scena principale
                if (this.renderer) {
                    this.renderer.render(this.scene, this.camera);
                }

                // Applica la rotazione continua all'oggetto del modello lungo l'asse Y
                this.rotateModel();
            };

            animate();
        },
        rotateModel() {
            if (this.gltf && this.gltf.scene) {
                if (this.gltf.scene.rotation) {
                    this.gltf.scene.rotation.y += 0.005;
                }
            }
        },
    },
};
</script>
  
<style scoped>
.lastProgect {
    background: white;
    width: 10%;
    position: absolute;
    right: 10%;
    bottom: 10%;
}

#fixed-container {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
}
</style>
  