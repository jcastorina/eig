//import stars from './addStars'
import charMove from './charMove'
import { MeshMatcapMaterial } from 'three'

//global.starField = new stars()

let pi4 = Math.PI/4
let pi6 = Math.PI/6
camera.rotation.order = "YXZ"
camera.rotation.x = -pi6 
camera.rotation.y = -pi4

scene.add(camera)

export default function updateState() {
    
    if(lockedMouse){
        camera.rotation.order = "YXZ"
        if(me.mouse.down){
            if(camera.type === "OrthographicCamera"){
                camera.rotation.x += me.mouse.curr.y
                camera.rotation.y += me.mouse.curr.x
            } else {
          
                camera.rotation.y -= me.mouse.curr.x
                camera.rotation.x -= me.mouse.curr.y
        
            }
        
        }
        //camera.position.z += ((me.mouse.curr.x/2) + me.mouse.curr.y)/sensitivity
        //camera.position.x += ((me.mouse.curr.x/2) - me.mouse.curr.y)/sensitivity
        
        if(!hook){
            if(me.keyboard.which[87]){//W
                charMove();

                hook = true;
            }
            if(me.keyboard.which[65]){//A
                
                char.dir = ((char.dir - 1) + 4) % 4
                char.rotation.y = -(char.dir * pi2) + pi4
                
                if(camera.type === "PerspectiveCamera"){
                    camera.rotation.copy(char.rotation)
                    camera.rotation.order = "YXZ"
                    camera.rotation.y += pi4
                }

                hook = true;
            }
            if(me.keyboard.which[68]){//D
                
                char.dir = (char.dir + 1) % 4
                char.rotation.y = (char.dir * -pi2) + pi4
                
                if(camera.type === "PerspectiveCamera"){
                    camera.rotation.copy(char.rotation)
                    camera.rotation.y += pi4
                }
                hook = true;
            }
        }
        //W87
        //A65
        //S83
        //D68
        //SPACE32
    }
    lightMount.rotation.y += 0.01;
   // starField.starWhite();
   // starField.starBlue();
    me.mouse.curr.x = 0
    me.mouse.curr.y = 0
    
    camera.position.copy(char.position)
    

}
