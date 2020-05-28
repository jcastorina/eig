let loader = new THREE.BufferGeometryLoader();
let buffmat = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide })

export default class Player {
    constructor (url,add) {
        loader.load(url,(geo)=>{
            geo.computeVertexNormals()
            this.mesh = new THREE.Mesh(geo,buffmat)
            this.mesh.name = "Test Char"
            this.mesh.position.y = 5
            this.mesh.rotation.y = -pi2 -pi4 //hehe
            this.dir = 2
            this.w = true
            this.ready = true
            this.moving = false
            this.count = 0;
            this.lightMount = new THREE.Object3D();
            if(add === 'add'){
                scene.add(this.mesh)
            }

        })
    }

    update () {
        if(this.moving){
            
            let r = this.mesh.rotation
            let iter = pi2/15
            
            if(this.way === 'right'){
                
                r.y -= iter;
                if(camera.type === "PerspectiveCamera"){
                    camera.rotation.copy(this.mesh.rotation)
                    camera.rotation.order = "YXZ"
                    camera.rotation.y += pi4
                }
            }
            
            if(this.way === 'left'){
                r.y += iter;
                if(camera.type === "PerspectiveCamera"){
                    camera.rotation.copy(this.mesh.rotation)
                    camera.rotation.order = "YXZ"
                    camera.rotation.y += pi4
                }
            }

            if(this.way === 'forward'){
                if(this.dir === 0){
                    this.mesh.position.x -= 1
                }
                if(this.dir === 1){
                    this.mesh.position.z -= 1
                }
                if(this.dir === 2){
                    this.mesh.position.x += 1
                }
                if(this.dir === 3){
                    this.mesh.position.z += 1
                }
                camera.position.copy(this.mesh.position)
            }

            if(this.way === 'backward'){
                if(this.dir === 0){
                    this.mesh.position.x += 1
                }
                if(this.dir === 1){
                    this.mesh.position.z += 1
                }
                if(this.dir === 2){
                    this.mesh.position.x -= 1
                }
                if(this.dir === 3){
                    this.mesh.position.z -= 1
                }
                camera.position.copy(this.mesh.position)
            }

            this.count++

            if(this.count > 14){
            
                this.moving = false;
                this.count = 0;

            }
        }
    }

    move (key) {
    
        if(this.moving === false){
  
            this.key = key //=== 65 ? true : false           
        
            if(key === 65){//A
                    
                this.dir = ((this.dir - 1) + 4) % 4               
                this.way = 'left'      
                this.moving = true;
            }
            
            if(key === 68){//D

                this.dir = (this.dir + 1) % 4
                this.way = 'right'              
                this.moving = true;      
            }

            if(key === 87){//W
                    this.way = 'forward'
                    this.moving = true;
            }

            if(key === 83){//S
                    this.way = 'backward'
                    this.moving = true;
            }
        }
    }

    getPos () {
        return { x: this.mesh.position.x/15, z: this.mesh.position.z/15}
    }
}
