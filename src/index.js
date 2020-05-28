import init from './init'
init()

import './globals'
import './listeners'

import loadSkybox from './loadSkybox'
loadSkybox(THREE,scene,camera)


import orthoTable from './orthoTable'

orthoTable(tableScale,tableScale)


import enemy from './enemy'

global.enemyArray = [new enemy('blarg.gltf',{x:15,z:15})]

for(let i = 0; i < 5; i++){
    
    global.enemyArray.push(new enemy('blarg.gltf',{x:i*3,z:i*4}))
}

import leaf from './addLeaf'

leaf(200);

import trees from './trees'

trees(40);

import player from './player'

global.zeliot = new player('./src/json/new.json','add')


//import addPlayer from './addPlayer'
//addPlayer()

import updateState from './updateState.js'

animate()

function animate(){
    requestAnimationFrame( animate )
    if(zeliot.ready){
        updateState()
    }
    renderer.render( scene, camera );
    
}

