export default function orthoTable (h,w) {
    let s = orthoScale
    
    for(let i = 0; i<h; i++){
        for(let j=0; j<w; j++){
            let e = {
                r: Math.random(),
                g: Math.random(),
                b: Math.random()
            }
            let geop = new THREE.PlaneBufferGeometry(20,20)
            let matp = new THREE.MeshLambertMaterial({color: {r:0,g:0,b:1}, side: THREE.DoubleSide})
            matp.emissive.setRGB(e.r,e.g,e.b)
            matp.transparent = true;
            matp.opacity = 0.66

            let plane = new THREE.Mesh(geop,matp)
            plane.rotation.order = "YXZ"
            plane.rotation.x = pi2
            plane.position.x = i * s
            plane.position.z = j * s

            scene.add(plane)
        }
    }
}