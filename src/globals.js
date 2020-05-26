global.THREE = require('three')
global.renderer = new THREE.WebGLRenderer({antialias: true})
document.body.appendChild( renderer.domElement )
global.vmouse = new THREE.Vector2();
global.vmouseOffset = new THREE.Vector2();
global.lockedMouse = false;
global.newLockedMouse = true;
global.SCREEN_WIDTH = window.innerWidth;
global.SCREEN_HEIGHT = window.innerHeight;
global.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

global.frustumSize = 100;

global.sensitivity = 0.66

global.camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, -frustumSize, frustumSize )
global.cameraHelper = new THREE.CameraHelper( camera );
global.scene = new THREE.Scene()

global.lightMount = new THREE.Object3D();
global.yAxis = new THREE.Object3D();
scene.add(yAxis)

global.ready = false;
global.orthoScale = 20;

global.pi2 = Math.PI/2
global.pi4 = Math.PI/4
global.pi6 = Math.PI/6

global.hook = false;

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