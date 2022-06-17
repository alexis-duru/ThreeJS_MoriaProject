import { HemisphereLight, DirectionalLight, Group, SpotLight } from 'three';
import Door from '../elements/Door.js';
import Clouds from '../elements/Clouds.js';
import Stars from '../elements/Stars';
import CameraManager from '../camera/CameraManager.js';

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

        // this.setupLights();
    }

    setup() {

        this.planets = []

        this.door = new Door(this.scene) 

        this.clouds = new Clouds(this.scene)

        this.addStars();

        this.spotLight = new SpotLight(this.scene)

        this.camera.position.x = 100;

        // CREATION DU TABLEAU DE PLANETE
        this.camera.position.y = -10;

        // CAMERA MANAGER
        this.cameraManager = new CameraManager(this);


        // POSITION CAMERA
        this.isReady = true;
    }

    load() {

    }

    setupLights() {
        const hemiLight = new HemisphereLight(0xffffff, 0xffffff, 0.1);
        hemiLight.color.setHSL(0.6, 1, 0.6);
        hemiLight.groundColor.setHSL(0.095, 1, 0.75);
        hemiLight.position.set(0, 50, 0);
        this.scene.add(hemiLight);

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

    }

    addStars () {

        this.starsContainer = new Group();

        for (let i = 0; i < 3; i += 1) {
            this.starsContainer.add( new Stars());
        }

        this.starsContainer.position.y = 35
        
        this.scene.add(this.starsContainer);
    }

    update() {
        if (this.sphereMesh) {
            this.sphereMesh.position.x += 0.01;
            this.planets.forEach(planet => planet.update());
        }

        if (this.clouds) {
            this.clouds.update();
        }

        if(this.door){
            this.door.update();
            this.starsContainer.children.forEach(stars => stars.update());
        }

        if(this.stars){
        }

        if(this.cameraManager){
            this.cameraManager.update()
        }
    }


}