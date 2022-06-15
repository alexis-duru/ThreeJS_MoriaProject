import { Object3D, Mesh, MeshBasicMaterial, SphereGeometry, HemisphereLight, DirectionalLight, DirectionalLightHelper } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import DoorLight from '../Light/DoorLight';

const SPEEDS = [0.01, 0.10];
const POSITIONS = [-5, 5];


export default class Door {
    constructor(scene) {
        this.scene = scene

        // PERMET D'INCREMENTER DE 1 MON COSINUS / SINUS
        this.tick = 0
        this.init()
    }
    
    init() {

        const loader = new GLTFLoader();
        
        loader.load('/assets/object/gltf/gothic/door.gltf', (gltf) => {
            
            this.model = gltf.scene

            this.movementDoor();

            this.light = new DoorLight(this.scene);
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
        // Vérifier que la porte soit chargée et instancié
        if(!this.door ) {
            return
        }
        this.tick += 1
        const offset = 30
        const distance = 2
        this.door.position.y = Math.sin(this.tick / 100) * distance + offset;

        this.light.update();
    }



}