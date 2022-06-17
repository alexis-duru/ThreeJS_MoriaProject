import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const SPEEDS = [0.6, 0.7];
const POSITIONS = [-10100, -1250];
export default class Clouds {
    constructor(scene) {
        this.scene = scene;
        this.mesh = null;
        this.cloudsArray = []; 
        this.cloudsArrayTop = [];
        this.init();
    }
    
    init() {

        const loader = new GLTFLoader();
        
        loader.load('/assets/object/gltf/clouds/clouds.gltf', (gltf) => {
            this.model = gltf.scene;
            
            this.generateCloud();
            this.generateCloud();
            this.generateTopcloud();
            this.generateTopcloud();
        })
    }

    generateCloud() {

        //BOTTOM CLOUDS

        const cloud = this.model.clone();
        this.scene.add(cloud);
        cloud.scale.set(3, -1, 2);
        cloud.rotation.y = 50;
        cloud.position.y = 35;
        cloud.position.x = POSITIONS[this.cloudsArray.length];
        this.cloudsArray.push(cloud);
    }

    generateTopcloud() {
        const cloudTop = this.model.clone();
        this.scene.add(cloudTop);
        cloudTop.scale.set(5, -1, 1.5);
        cloudTop.rotation.y = 50;
        cloudTop.position.y = 300;
        cloudTop.position.x = POSITIONS[this.cloudsArrayTop.length];
        this.cloudsArrayTop.push(cloudTop);
    }

    update() {
        this.cloudsArray.forEach((cloud, i) => {
            if(cloud.position.x > 1070) {
                cloud.position.x = POSITIONS[i]
            }
            cloud.position.x += SPEEDS[i]
        });

        this.cloudsArrayTop.forEach((cloudTop, i) => {
            if(cloudTop.position.x > 1070) {
                cloudTop.position.x = POSITIONS[i]
            }
            cloudTop.position.x += SPEEDS[i]
        });
    }
}

// Dès que la position X dépasse temps alors je restart l'animation.