import { Object3D, Mesh, MeshBasicMaterial, SphereGeometry, HemisphereLight, DirectionalLight, DirectionalLightHelper, PointLight } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const SPEEDS = [0.05, 0.06];
const POSITIONS = [-100, 50];

export default class Clouds {
    constructor(scene) {
        this.scene = scene;
        this.mesh = null;
        this.cloudsArray = []; 
        this.init();
    }
    
    init() {

        const loader = new GLTFLoader();
        
        loader.load('/assets/object/gltf/clouds/clouds.gltf', (gltf) => {
            this.model = gltf.scene;
            
            this.generateCloud();

            this.generateCloud();
        
        })
    }

    generateCloud() {
        const cloud = this.model.clone();
        this.scene.add(cloud);
        
        cloud.scale.set(1, -1, 1.5);
        cloud.rotation.y = 50;
        cloud.position.y = 30;
        cloud.position.x = POSITIONS[this.cloudsArray.length];

        this.cloudsArray.push(cloud);
    }

    update() {
        this.cloudsArray.forEach((cloud, i) => {
            if(cloud.position.x > 200) {
                cloud.position.x = POSITIONS[i]
            }
            cloud.position.x += SPEEDS[i]
        })
    }
}

// Dès que la position X dépasse temps alors je restart l'animation.