const baseScale = 5

export default function (number) {
    
    for(let t = 0; t < number; t++){
    
        var buffmat = new THREE.MeshLambertMaterial({ color: 0x0D8091, side: THREE.DoubleSide })
        var loader = new THREE.BufferGeometryLoader();

        loader.load('./src/json/trunk.json',(geo)=>{
            geo.computeVertexNormals()

            let trunk = new THREE.Mesh(geo,buffmat)
            
            trunk.name = "trunk"+t
            trunk.scale.set(baseScale,orthoScale,baseScale)
            
            
            
            loader.load('./src/json/tree.json',(geo)=>{
                geo.computeVertexNormals()
                let treeHeight = 4;
                for(let i = 0; i < treeHeight; i++){
                    let tree = new THREE.Mesh(geo,buffmat)
                    
                    tree.name = "tree"+i
                    //tree.scale.set(baseScale,orthoScale,baseScale)
                
                    tree.position.y = (i+1)
                    trunk.position.x = Math.floor(Math.random()*tableScale) * orthoScale
                    trunk.position.z = Math.floor(Math.random()*tableScale) * orthoScale
                    trunk.add(tree)
                    
        
                }
                scene.add(trunk)
            })
    
        })
    }
}