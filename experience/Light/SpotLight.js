import { SpotLight } from "three";

export default class SpotLight {
    constructor(scene) {
        this.scene = scene
        this.camera; 
        this.scene; 
        this.renderer;

        this.init()
    }

    init() {

        const spotLight = new SpotLight( 0x11111 );
        spotLight.position.set( 50, 500, 100 );

        spotLight.castShadow = true;

        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;

        spotLight.shadow.camera.near = 500;
        spotLight.shadow.camera.far = 4000;
        spotLight.shadow.camera.fov = 30;

        scene.add( spotLight );
    }

   
    update() {
    }
        
}
