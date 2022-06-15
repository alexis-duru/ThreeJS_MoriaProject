import { PointLight, Object3D, SphereGeometry, MeshBasicMaterial, Mesh, Clock } from "three";

export default class DoorLight {
    constructor(scene, center) {
        this.scene = scene
        this.camera; 
        this.scene; 
        this.renderer;
        this.center = center;
        this.lights = [];

        this.init()
    }

    init() {
        // LIGHTS

        this.addLight({
            color: 0x1F51FF
        });
        this.addLight({
            color: 0x1F51FF
        });
        this.addLight({
            color: 0x1F51FF
        });
        this.addLight({
            color: 0x1F51FF
        });
    }

    addLight({color = 0xffffff, intensity = 3, distance = 90}) {

        // Création de la light

        const light = new PointLight( color, intensity, distance );
        
        // Ajout d'une sphere debug pour visualiser le centre de la light

        const geometry = new SphereGeometry( .0, 10, 16 );
        light.add( new Mesh( geometry, new MeshBasicMaterial( { color } ) ) );

        this.lights.push(light);
        this.scene.add(light);
    }

    update() {
        
        const time = Date.now() * 0.0005;
     
        this.lights[0].position.x = Math.sin( time * 0.7 ) * 20;
        this.lights[0].position.y = Math.cos( time * 0.5 ) * 30;
        this.lights[0].position.z = Math.cos( time * 0.3 ) * 30;

        this.lights[1].position.x = Math.cos( time * 0.3 ) * 30;
        this.lights[1].position.y = Math.sin( time * 0.5 ) * 40;
        this.lights[1].position.z = Math.sin( time * 0.7 ) * 30;

        this.lights[2].position.x = Math.sin( time * 0.7 ) * 30;
        this.lights[2].position.y = Math.cos( time * 0.3 ) * 40;
        this.lights[2].position.z = Math.sin( time * 0.5 ) * 30;

        this.lights[3].position.x = Math.sin( time * 0.3 ) * 30;
        this.lights[3].position.y = Math.cos( time * 0.7 ) * 40;
        this.lights[3].position.z = Math.sin( time * 0.5 ) * 30;

        this.lights.forEach(light => {
            light.position.x += this.center.x;
            light.position.y += this.center.y;
            light.position.z +=  this.center.z;
        })

    }

    // getNextPosition(functionName, time, timeFactor, distance, axis) {
    //     return Math[functioName]( time * timeFactor ) * distance + this.center[axis];
    // }
}
