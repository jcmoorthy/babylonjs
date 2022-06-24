import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder, StandardMaterial, GroundMesh, Color3, Texture, SceneLoader } from "@babylonjs/core";
import "@babylonjs/loaders/glTF";

// import brainSteam from 'assets/scenes/BrainStem.gltf';
let  brainSteam  = require('./assets/scenes/BrainStem.gltf');

class App {
    // public _mesh: Mesh | undefined;

    constructor() {
        // create the canvas html element and attach it to the webpage
        var canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);

        // initialize babylon scene and engine
        var engine = new Engine(canvas, true);
        var scene = new Scene(engine);

        var camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
        camera.attachControl(canvas, true);
        var light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
        // var sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);
        // sphere.position.y = 0.5;
        

        var ground: Mesh = MeshBuilder.CreateGround('floor1', {width: 6, height: 6}, scene)
        let grassGround = new StandardMaterial('Grass Floor', scene);
        
        ground.material = grassGround;
        let GrassTexture = new Texture('assets/textures/checkerboard_basecolor_png', scene);
        // let GrassTexture = new Texture('assets/textures/checkerboard_basecolor_png', scene);
        // ground.material.diffuseTexture = GrassTexture
        // ground.material.diffuseColor = Color3.Green();
       
        // SceneLoader.ImportMesh('', '../assets/scenes/BrainStem/', 'BrainStem.gltf', scene, function(newMeshes){
        //     // newMeshes[0].scaling = new Vector3(0.1, 0.1, 0.1);
        //     scene.createDefaultCameraOrLight(true, true, true);
        //     scene.createDefaultEnvironment();
        // });

        // SceneLoader.ImportMesh("", 
        // "https://raw.githubusercontent.com/BabylonJS/MeshesLibrary/master/",
        // "PBR_Spheres.glb", scene, function(newMeshes){
        //     newMeshes[0].scaling = new Vector3(0.1, 0.1, 0.1);
        // });
        // scene.useRightHandedSystem = true;
        console.log('====================================');
        console.log(brainSteam);
        console.log('====================================');
        var _mesh ;
        SceneLoader.Append( './assets/scenes/BrainStem/' ,'BrainStem.gltf' , scene, (newMeshes) =>{
        });
       
        SceneLoader.Append( './assets/scenes/' , brainSteam.default , scene, function(newMeshes){
        // SceneLoader.ImportMesh("",  '../assets/scenes/' , 'BrainStem.gltf', scene, function(newMeshes){
        // SceneLoader.ImportMesh("",  require('./assets/scenes/BrainStem.gltf' ), '', scene, function(newMeshes){
        // SceneLoader.ImportMesh("", 'Assets.meshes.Yeti.rootUrl', 'Assets.meshes.Yeti.filename', scene, function(newMeshes){
            // this._mesh = scene.getNodeByName('BrainStem') as  Mesh
            // newMeshes[0].scaling = new Vector3(1, 1, 0.1);
        });

        // hide/show the Inspector
        window.addEventListener("keydown", (ev) => {
            // Shift+Ctrl+Alt+I
            if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
                if (scene.debugLayer.isVisible()) {
                    scene.debugLayer.hide();
                } else {
                    scene.debugLayer.show();
                }
            }
        });

        // run the main render loop
        engine.runRenderLoop(() => {
            scene.render();
        });
    }

    // public get mesh1() {
    //     console.log('====================================');
    //     console.log(this._mesh);
    //     console.log('====================================');
    //     return this._mesh;
    // }
    // public set mesh1(value) {
    //     this._mesh = value;
    // }
}
new App();