export default function (number) {
    
    global.leafObj = new THREE.Object3D();
    
    let buffmat = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide })
    let loader = new THREE.BufferGeometryLoader();

    loader.load('./src/json/leaf.json',(geo)=>{
        geo.computeVertexNormals()

        for(let i = 0; i < number; i++){
            let mesh = new THREE.Mesh(geo,buffmat)
      
            mesh.name = "leaf"+i
            mesh.rotation.order = "YXZ"
            mesh.position.x = Math.floor(Math.random()*tableScale*orthoScale-orthoScale/2)
            mesh.position.z = Math.floor(Math.random()*tableScale*orthoScale-orthoScale/2)
            mesh.rotation.y = Math.floor(Math.random()*Math.PI*2)
            mesh.rotation.x = pi2 + 0.1
            leafObj.add(mesh)
        }
        scene.add(leafObj)
    })
}