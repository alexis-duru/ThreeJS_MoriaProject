import { Object3D, Mesh, MeshBasicMaterial, SphereGeometry } from "three";

export default class Planet {
    constructor
        ({ 
            distance, 
            speed, size = 1, 
            color 
        })
        
        {
        this.parameters = { 
            distance : distance,
            speed : speed,
            size: size,
            color: color, 
        };

        this.init()
    }

    init() {
        let geometry, material;

        this.object = new Object3D;

        geometry = new SphereGeometry(
            this.parameters.size, 50, 32, 32,
        );
        material = new MeshBasicMaterial({
            color: this.parameters.color
        });

        this.sphere = new Mesh(geometry, material);

        this.sphere.position.x = this.parameters.distance;

        this.object.add(this.sphere);
    }

    update() {
        this.object.rotation.y += this.parameters.speed 
    }
}