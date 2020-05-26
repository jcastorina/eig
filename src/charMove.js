export default ()=>{
    switch(char.dir){
        case(0):{
            char.position.x -= orthoScale
            break
        }
        case(1):{
            char.position.z -= orthoScale
            break
        }
        case(2):{
            char.position.x += orthoScale
            break
        }
        case(3):{
            char.position.z += orthoScale
            break
        }

    }
}