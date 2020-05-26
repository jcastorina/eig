import init from './init'
init()

import './globals'
import './listeners'

import loadSkybox from './loadSkybox'
loadSkybox(THREE,scene,camera)
//loadSkybox();

import orthoTable from './orthoTable'

orthoTable(20,20)




import csin from './customSine'


var path = new csin( 20 );
var geometry = new THREE.TubeBufferGeometry( path, 20, 1, 8, false );

var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
var path1 = new THREE.Mesh( geometry, material );
var path2 = new THREE.Mesh( geometry, material );
path1.position.x = 10
path1.position.z = -15
path2.position.x = 70
path2.position.z = -15
scene.add( path1 );
scene.add( path2 );


import addPlayer from './addPlayer'

addPlayer()

import updateState from './updateState.js'

animate()

function animate(){
    requestAnimationFrame( animate )
    if(ready){
        updateState()
    }
    renderer.render( scene, camera );
    
}

