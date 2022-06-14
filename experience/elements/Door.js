import { Object3D, Mesh, MeshBasicMaterial, SphereGeometry, HemisphereLight, DirectionalLight, DirectionalLightHelper } from "three";
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class Door {
    constructor(scene) {
        this.scene = scene
        this.init()
    }
    
    init() {

        const door = new GLTFLoader();
        
        door.load('/assets/object/gltf/gothic/door.gltf', (gltf) => {
            this.scene.add(gltf.scene);
            gltf.scene.scale.set(20, 20, 20);
            gltf.scene.rotation.y = 80;
            gltf.scene.position.y = 30;
        })
    }
}