import { PointLight, Object3D, SphereGeometry, MeshBasicMaterial, Mesh, Clock } from "three";



export default class DoorLight {
    constructor(scene) {
        this.scene = scene

        this.init()

        this.camera; 
        this.scene; 
        this.renderer;
		this.light1;
        this.light2; 
        this.light3;
        this.light4;

		const clock = new Clock();
    }

    init() {
        // const pointLight = new PointLight( 0x070867, 100, 500 );

        // pointLight.position.set( 50, 50, 50 );

        // this.scene.add(pointLight);

        // this.pointLight = new Mesh(geometry, material);
        
        this.object = new Object3D;

        // SPHERE

        const geometry = new SphereGeometry( 1.5, 10, 16 );

        // LIGHTS

        const wattLight = 2

        this.light1 = new PointLight( 0xff0040, wattLight, 150 );
        this.light1.add( new Mesh( geometry, new MeshBasicMaterial( { color: 0xFFFFF7 } ) ) );
        this.scene.add( this.light1 );

        this.light2 = new PointLight( 0x0040ff, wattLight, 150 );
        this.light2.add( new Mesh( geometry, new MeshBasicMaterial( { color: 0xFFFFF7 } ) ) );
        this.scene.add( this.light2 );

        this.light3 = new PointLight( 0x80ff80, wattLight, 150 );
        this.light3.add( new Mesh( geometry, new MeshBasicMaterial( { color: 0xFFFFF7 } ) ) );
        this.scene.add( this.light3 );

        this.light4 = new PointLight( 0xffaa00, wattLight, 150 );
        this.light4.add( new Mesh( geometry, new MeshBasicMaterial( { color: 0xFFFFF7 } ) ) );
        this.scene.add( this.light4 );

        // const material = new MeshBasicMaterial( { color: 0xffff00 } );
        // const sphere = new Mesh( geometry, material );
        // this.scene.add(sphere);

        // this.object.add(this.scene);

        // light1 = new PointLight( 0xff0040, 2, 50 );
        // light1.add( new Mesh( sphere, new MeshBasicMaterial( { color: 0xff0040 } ) ) );
        // scene.add( light1 );

    }



    update() {
        const time = Date.now() * 0.0005;

        this.light1.position.x = Math.sin( time * 0.7 ) * 30;
        this.light1.position.y = Math.cos( time * 0.5 ) * 40;
        this.light1.position.z = Math.cos( time * 0.3 ) * 30;

        this.light2.position.x = Math.cos( time * 0.3 ) * 30;
        this.light2.position.y = Math.sin( time * 0.5 ) * 40;
        this.light2.position.z = Math.sin( time * 0.7 ) * 30;

        this.light3.position.x = Math.sin( time * 0.7 ) * 30;
        this.light3.position.y = Math.cos( time * 0.3 ) * 40;
        this.light3.position.z = Math.sin( time * 0.5 ) * 30;

        this.light4.position.x = Math.sin( time * 0.3 ) * 30;
        this.light4.position.y = Math.cos( time * 0.7 ) * 40;
        this.light4.position.z = Math.sin( time * 0.5 ) * 30;
    }




}

