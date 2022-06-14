import { Object3D, Mesh, MeshBasicMaterial, SphereGeometry, HemisphereLight, DirectionalLight, DirectionalLightHelper } from "three";
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class Clouds {
    constructor(scene) {
        this.scene = scene
        this.init()
    }
    
    init() {

        const clouds = new GLTFLoader();
        
        clouds.load('/assets/object/gltf/clouds/clouds.gltf', (gltf) => {
            this.scene.add(gltf.scene);
            gltf.scene.scale.set(1, -1, 1.5);
            gltf.scene.rotation.y = 50;
            gltf.scene.position.y = 30;
        })
    }
}