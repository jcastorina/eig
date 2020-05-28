global.THREE = require('three')
global.renderer = new THREE.WebGLRenderer({antialias: true})
document.body.appendChild( renderer.domElement )


global.scene = new THREE.Scene()

global.yAxis = new THREE.Object3D();
scene.add(yAxis)

global.vmouse = new THREE.Vector2();
global.vmouseOffset = new THREE.Vector2();
global.lockedMouse = false;
global.newLockedMouse = true;
global.SCREEN_WIDTH = window.innerWidth;
global.SCREEN_HEIGHT = window.innerHeight;
global.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

global.frustumSize = 100;
global.defaultFrustumSize = 100;

global.sensitivity = 0.66

//make/add camera
global.camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, -frustumSize, frustumSize )
global.cameraHelper = new THREE.CameraHelper( camera );


let pi4 = Math.PI/4
let pi6 = Math.PI/6
camera.rotation.order = "YXZ"
camera.rotation.x = -pi6 
camera.rotation.y = -pi4

scene.add(camera)


global.orthoScale = 15;
global.tableScale = 40;


global.pi2 = Math.PI/2
global.pi4 = Math.PI/4
global.pi6 = Math.PI/6


global.me = {
    keyboard:{
        which: [],
        down: false
    },
    mouse:{
        down: false,
        rc  : false,
        curr: {
            x : 0,
            y : 0,
        },
        past: {
            x : 0,
            y : 0,
        },
        last: {
            x : 0,
            y : 0,
        },
    },
};