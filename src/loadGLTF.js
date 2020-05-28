export function gltfMaker( gltf ) {       
                     
    let c = gltf.scene.children       
    let store = new THREE.Object3D();

    for(let i in c){
        
        store.add(c[i])
    }

    store.remove(store.children[0])
    let f = store.children[0]
    //f.material.emissive.setRGB(0.2,0.2,0)
    f.geometry.computeVertexNormals();

    f.position.y = 5
    
    scene.add(f)
                
    //scene.add( gltf.scene );
    gltf.animations;
    gltf.scenes;
    gltf.cameras;
    gltf.asset;

    return f;

}

export function xhr( xhr ) {
            //console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded');
            if((xhr.loaded/xhr.total) === 1){
                   }
        }

export function err( error ) {
            console.log( 'An error occurred with the loader');
}
