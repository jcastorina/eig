export default function addPlayer(){

    let light1 = new THREE.PointLight( 0x666666, 4, 100)
    let light2 = new THREE.PointLight( 0xFF0000, 4, 100)

    let boxGeo = new THREE.BoxBufferGeometry(0.4,0.4,0.4)
    let boxMat = new THREE.MeshBasicMaterial({color: 0xFF0000 })
    let boxMesh = new THREE.Mesh(boxGeo,boxMat)
    boxMesh.position.y = -1.3
    boxMesh.position.z = 6
    boxMesh.add(light2)

    let ballGeo = new THREE.SphereBufferGeometry(0.4)
    let ballMat = new THREE.MeshBasicMaterial({color: 0xFFFFFF })
    let ballMesh = new THREE.Mesh(ballGeo,ballMat)
    ballMesh.position.y = -1
    ballMesh.position.z = -6
    ballMesh.material.transparent = true;
    ballMesh.material.opacity = 0.4
    ballMesh.add(light1)

    lightMount.add(boxMesh)
    lightMount.add(ballMesh)

    var buffmat = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide })
    var loader = new THREE.BufferGeometryLoader();
    loader.load('./src/json/new.json',(geo)=>{
        geo.computeVertexNormals()

        var mesh = new THREE.Mesh(geo,buffmat)
        
        mesh.name = "Test Char"
        global.char = mesh;
        char.position.y = 5
        
        char.rotation.y = -pi2 -pi4 //hehe
        char.dir = 2

  

        char.add(lightMount)
        
        scene.add(char)
        ready = true;
    })
}