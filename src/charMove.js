export default (dir)=>{
    switch(char.dir){
        case(0):{
            if(dir === 87){
                char.position.x -= orthoScale
                break
            } else {
                char.position.x += orthoScale
                break
            }
        }
        case(1):{
            if(dir === 87){
                char.position.z -= orthoScale
                break
            } else {
                char.position.z += orthoScale
                break
            }
        }
        case(2):{
            if(dir === 87){
                char.position.x += orthoScale
                break
            } else {
                char.position.x -= orthoScale
                break
            }
        }
        case(3):{
            if(dir === 87){
                char.position.z += orthoScale
                break
            } else {
                char.position.z -= orthoScale
                break
            }
        }

    }
}