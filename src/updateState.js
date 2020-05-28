//import addSnow from './addSnow'

//let snow = new addSnow()

import { playerMove } from './keyboard'

export default function updateState() {
    
  //  charUpdate(charObject);
  
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
 
        playerMove();
        
        zeliot.update();

        for(let i in enemyArray){
            enemyArray[i].update();  
        }
             

    }
    
    //lightMount.rotation.y += 0.01;
    //snow.starWhite();
    //snow.starBlue();
    

    //reset mouse
    me.mouse.curr.x = 0
    me.mouse.curr.y = 0
  
}

