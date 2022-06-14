import {
    Mesh,
    SphereGeometry,
    MeshStandardMaterial,
    PlaneGeometry,
    MeshBasicMaterial,
    DoubleSide,
    AdditiveBlending,
    HemisphereLight,
    DirectionalLight,
    DirectionalLightHelper,
    Audio,

} from 'three';

import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js';

import Planet from '../elements/Planet.js';
// import Door from '../elements/Door.js';

import SceneBase from './Scene/SceneBase';

export default class SceneView extends SceneBase {
    // isReady = true;
    init() {

        super.init();

        this.isReady = false;

        // HELPERS
        // this.setControls();
        this.setHelpers();


        this.setup();

        this.load();

        this.setupLights();

    }

    setup() {

        this.planets = []

        // this.door = new Door() 

        // this.scene.add(this.door);


        this.addTestSphere1();

        this.camera.position.x = 3;

        this.addTestSphere2();

        this.addTestSphere3();

        this.addTestSphere4();


        // this.addTestDoor();

        const earth = new Planet({
            distance: 10,
            speed: 0.01,
            size: 2
        });

        this.scene.add(earth.object);

        this.planets.push(earth)

        const mars = new Planet({
            distance: 50,
            speed: 0.005,
            size: 5,

        });
        
        // console.log(mars)

        this.scene.add(mars.object)

        this.planets.push(mars)



        // CREATION DU TABLEAU DE PLANETE



        // earth.object.position.y = 50



        // this.addDoorObject();

        this.camera.position.y = 1;
        // POSITION CAMERA
        this.isReady = true;
    }

    // :: REFACTO ::
    // :: REFACTO ::
    // :: REFACTO ::

    // addPlanet (planetData) {
    //     const planet = new Planet(planetData);
    //     this.scene.add(planet.object);
    //     this.planets.push(planet)
    // }

    load() {


        // LOAD DE L'OBJET PORTE //

        const loader = new GLTFLoader();
        loader.load('/assets/object/gltf/gothic/door.gltf', (gltf) => {
            // console.log(gltf)
            this.scene.add(gltf.scene);
            gltf.scene.scale.set(20, 20, 20);
            gltf.scene.rotation.y = 80;
            gltf.scene.position.y = 30;
        })

        const clouds = new GLTFLoader();
        clouds.load('/assets/object/gltf/clouds/clouds.gltf', (gltf) => {
            // console.log(gltf)
            this.scene.add(gltf.scene);
            gltf.scene.scale.set(1, -1, 1.5);
            gltf.scene.rotation.y = 50;
            gltf.scene.position.y = 30;
        })

        // const clouds2 = new GLTFLoader();
        // clouds.load('/assets/object/gltf/clouds/clouds.gltf', (gltf) => {
        //     // console.log(gltf)
        //     this.scene.add(gltf.scene);
        //     gltf.scene.scale.set(1, -0.4, 1.5);
        //     gltf.scene.rotation.y = 50;
        //     gltf.scene.position.y = 30;
        // })

        // const clouds3 = new GLTFLoader();
        // clouds.load('/assets/object/gltf/clouds/clouds.gltf', (gltf) => {
        //     // console.log(gltf)
        //     this.scene.add(gltf.scene);
        //     gltf.scene.scale.set(1, -0.4, 1.5);
        //     gltf.scene.rotation.y = 50;
        //     gltf.scene.position.y = 50;
        // })

        



    }



    // DECLARATION DE MES ELEMENTS SUR LA MAP

    addTestSphere1() {

        // L'endroit ou je load mon premier element

        const sphereGeometry = new SphereGeometry(3, 10, 40);
        const sphereMaterial = new MeshStandardMaterial({
            color: 0xffffff,

            wireframe: true
        });

        this.sphereMesh = new Mesh(sphereGeometry, sphereMaterial);

        // sphereMesh.position.x = 5;
        // sphereMesh.position.y= 5;
        // sphereMesh.position.z= 25
        this.sphereMesh.position.set(20, 30, 50)

        this.scene.add(this.sphereMesh);

    }

    addTestSphere2() {

        // L'endroit ou je load mon premier element

        const sphereGeometry = new SphereGeometry(6, 20, 60);
        const sphereMaterial = new MeshStandardMaterial({
            color: 0xffffff,

            wireframe: true
        });

        this.sphereMesh = new Mesh(sphereGeometry, sphereMaterial);

        this.sphereMesh.position.set(-50, 50, 25)

        this.scene.add(this.sphereMesh);

    }


    addTestSphere3() {

        // L'endroit ou je load mon premier element

        const sphereGeometry = new SphereGeometry(6, 20, 60);
        const sphereMaterial = new MeshStandardMaterial({
            color: 0xffffff,

            wireframe: true
        });

        this.sphereMesh = new Mesh(sphereGeometry, sphereMaterial);


        this.sphereMesh.position.set(-20, 20, -25)

        this.scene.add(this.sphereMesh);

    }

    addTestSphere4() {

        // L'endroit ou je load mon premier element

        const sphereGeometry = new SphereGeometry(6, 20, 60);
        const sphereMaterial = new MeshStandardMaterial({
            color: 0xffffff,

            wireframe: true
        });

        this.sphereMesh = new Mesh(sphereGeometry, sphereMaterial);

        this.sphereMesh.position.set(40, 20, -45)

        this.scene.add(this.sphereMesh);

    }



    addTestDoor() {
        const doorGeometry = new PlaneGeometry(20, 30);
        const doorMaterial = new MeshBasicMaterial({
            color: 0xffffff,
            side: DoubleSide,
            blending: AdditiveBlending,
            wireframe: true

        });

        this.plane = new Mesh(doorGeometry, doorMaterial);

        this.plane.position.set(5, 30, 5)


        this.scene.add(this.plane);
    }

    // window.addEventListener('click', () => {
    //     // LE CODE ICI 
    // })


    

    setupLights() {
        const hemiLight = new HemisphereLight(0xffffff, 0xffffff, 0.1);
        hemiLight.color.setHSL(0.6, 1, 0.6);
        hemiLight.groundColor.setHSL(0.095, 1, 0.75);
        hemiLight.position.set(0, 50, 0);
        this.scene.add(hemiLight);
        // const hemiLightHelper = new HemisphereLightHelper( hemiLight, 10 );
        // this.scene.add( hemiLightHelper );

        const dirLight = new DirectionalLight(0xffffff, 1);
        dirLight.color.setHSL(0.1, 1, 0.95);
        dirLight.position.set(-1, 1.75, 1);
        dirLight.position.multiplyScalar(30);
        this.scene.add(dirLight);

        dirLight.castShadow = true;

        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;

        const d = 50;

        dirLight.shadow.camera.left = -d;
        dirLight.shadow.camera.right = d;
        dirLight.shadow.camera.top = d;
        dirLight.shadow.camera.bottom = -d;

        dirLight.shadow.camera.far = 3500;
        dirLight.shadow.bias = -0.0001;

        // const dirLightHelper = new DirectionalLightHelper(dirLight, 10);
        // this.scene.add(dirLightHelper);
    }




    update() {
        if (this.sphereMesh) {
            this.sphereMesh.position.x += 0.01;
            this.planets.forEach(planet => planet.update());
        }

        
    }


}