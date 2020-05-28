function onDocumentMouseMove(event) {
    if(lockedMouse){ 
        vmouse.x = (event.clientX / window.innerWidth) * 2 - 1 - vmouseOffset.x; 
        vmouse.y = - (event.clientY / window.innerHeight) * 2 + 1 - vmouseOffset.y;
        me.mouse.curr.x += event.movementX/200;
        me.mouse.curr.y += event.movementY/200;
   
    }
}

function onDocumentMouseDown(event){
    if(event.button === 0){
        me.mouse.past.x = me.mouse.curr.x;
        me.mouse.past.y = me.mouse.curr.y;
        me.mouse.down = true;
    }
    if(event.button === 2){
        me.mouse.past.x = me.mouse.curr.x;
        me.mouse.past.y = me.mouse.curr.y;
        me.mouse.rc = true;
    }
}

function onDocumentMouseUp(event){
    if(event.button === 0){
        me.mouse.down = false;
    }
    if(event.button === 0){
        me.mouse.rc = false;
    }
}

function onDocumentKeyDown(event){
   
    if(event.which === 27){//ESC
        document.exitPointerLock();
        lockedMouse = false;
        newLockedMouse = true;

    }

    if(event.which === 79){//O
        
        frustumSize = defaultFrustumSize
        camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, -frustumSize, frustumSize )
        camera.rotation.order = "YXZ"
        camera.rotation.x = -pi6 
        camera.rotation.y = -pi4
        camera.position.copy(zeliot.mesh.position)
    }
    if(event.which === 80){//P
        camera = new THREE.PerspectiveCamera(37,1,0.1,2000)
        
        camera.rotation.copy(zeliot.mesh.rotation)
        camera.rotation.order = "YXZ"
        camera.rotation.y += pi4
        camera.position.copy(zeliot.mesh.position)
        //camera.updateProjectionMatrix()
 
    }


    me.keyboard.which[event.which] = true;
    me.keyboard.down = true;
}

function onDocumentKeyUp(event){
    me.keyboard.which[event.which] = false;
    me.keyboard.down = false;
    //hook = false;
}

renderer.domElement.onclick = () => {
    renderer.domElement.requestPointerLock();
    if(newLockedMouse){
        vmouseOffset.x = (event.clientX / window.innerWidth) * 2 - 1;
        vmouseOffset.y = - (event.clientY / window.innerHeight) * 2 + 1;
        newLockedMouse = false;

    }
    lockedMouse = true;
}

function onWindowResize() {
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

    renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
    camera.left = - frustumSize * aspect / 2;
    camera.right = frustumSize * aspect / 2;
    camera.top = frustumSize / 2;
    camera.bottom = - frustumSize / 2;
    camera.updateProjectionMatrix();
}

function scroll (event) {

    frustumSize += event.deltaY / 15
    let newCam = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, -frustumSize, frustumSize )
    newCam.rotation.order = "YXZ"

    if(camera.type === "PerspectiveCamera"){
        newCam.rotation.x = -pi6 
        newCam.rotation.y = -pi4
        newCam.position.copy(zeliot.mesh.position)
        camera = newCam
    } else {
        newCam.rotation.copy(camera.rotation)
        newCam.position.copy(zeliot.mesh.position)
        camera = newCam
    }
    
    


}


onWindowResize()//set init window size
window.onresize = onWindowResize
window.addEventListener( 'mousemove', onDocumentMouseMove, false );
window.addEventListener( 'keydown', onDocumentKeyDown, false );
window.addEventListener( 'keyup', onDocumentKeyUp, false );
window.addEventListener( 'mousedown', onDocumentMouseDown, false );
window.addEventListener( 'mouseup', onDocumentMouseUp, false );
window.addEventListener( 'mousewheel', scroll, false )