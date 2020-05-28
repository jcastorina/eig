import { gltfMaker, xhr, err } from './loadGLTF'
import GLTFLoader from 'three-gltf-loader';

let buffmat = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide })
var loader = new GLTFLoader();   

export default class Enemy {
    constructor(url,pos){

        loader.load(url,(gltf)=>{
            this.mesh = gltfMaker(gltf)
            this.mesh.material = buffmat
            this.mesh.geometry.computeVertexNormals();
            this.gotEem = false
            //this.startPos = { x: 15, z: 15 }
            this.moving = false
            this.count = 0
            this.dir = { way: null, sign: null }
            this.mesh.position.x = pos.x * orthoScale  //150//startPos.x * orthoScale
            this.mesh.position.z = pos.z * orthoScale //150//startPos.z * orthoScale
            },
            xhr,
            err)
    }

    getMesh () {
        return this.mesh
    }

    getPos () {
        return { x: this.mesh.position.x/15, z: this.mesh.position.z/15}
    }

    update() {
        let rate = 0.5;

        if(this.gotEem === false){
            if(this.dir.way === 'x'){
                if(this.dir.sign === 1){
                    this.mesh.position.x += 1*rate
                    this.mesh.rotation.y = -pi2
                } else {
                    this.mesh.position.x -= 1*rate
                    this.mesh.rotation.y = pi2
                }
            } else if(this.dir.way === 'z'){
                if(this.dir.sign === 1){
                    this.mesh.position.z += 1*rate
                    this.mesh.rotation.y = 0
                } else {
                    this.mesh.position.z -= 1*rate
                    this.mesh.rotation.y = -Math.PI
                }
            } else {
                if(this.dir.way === 'none'){
                    console.log('got eem')
                    this.gotEem = true
                }
            }

            this.count++

            if(this.count > 29){
                this.dir = this.chase()
                this.count = 0
            }
        }
    }

    chase () {
        let zp = zeliot.getPos()
        let ep = this.getPos()
        let abs = Math.abs
        let x = zp.x - ep.x
        let z = zp.z - ep.z
        console.log(x,z)
        if(abs(x) > abs(z)){          
            return { way: 'x', sign: Math.sign(x) }     
        } else if(x === 0 && z === 0){            
            return { way: 'none', sign: 1 }        
        } else {
            return { way: 'z', sign: Math.sign(z) }
        }
    }
}