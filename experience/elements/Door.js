import { Object3D, Mesh, MeshBasicMaterial, SphereGeometry, HemisphereLight, DirectionalLight, DirectionalLightHelper } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const SPEEDS = [0.01, 0.10];
const POSITIONS = [-5, 5];


export default class Door {
    constructor(scene) {
        this.scene = scene
        this.mesh = null
        this.tick = 0
        this.init()
    }
    
    init() {

        const loader = new GLTFLoader();
        
        loader.load('/assets/object/gltf/gothic/door.gltf', (gltf) => {
            
            this.model = gltf.scene

            this.movementDoor();
        });
    }
    
    movementDoor() {

        this.door = this.model
        console.log(this.door)

        this.scene.add(this.door)
        this.door.scale.set(20, 20, 20);
        this.door.rotation.y = 80.05;
        this.door.position.x =  0;
        this.door.position.y = 30;
    }


    update() {
        const door = this.door
        this.tick += 1
        const offset = 30
        const distance = 2
        door.position.y = Math.sin(this.tick / 100) * distance + offset;
    }

}