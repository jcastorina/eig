import init from './init'
init()

import './globals'
import './listeners'

import loadSkybox from './loadSkybox'
loadSkybox(THREE,scene,camera)

import orthoTable from './orthoTable'

orthoTable(tableScale,tableScale)

import leaf from './addLeaf'

leaf(2000);

import trees from './trees'

trees(40);


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

