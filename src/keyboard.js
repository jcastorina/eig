        //W87
        //A65
        //S83
        //D68
        //SPACE32

export function playerMove () {
    if(me.keyboard.which[87]){//W
        zeliot.move(87)

    }
    if(me.keyboard.which[83]){//S
        zeliot.move(83)

    }
    if(me.keyboard.which[65]){//A
        
        zeliot.move(65)

    }
    if(me.keyboard.which[68]){//D
    
        zeliot.move(68)

    }
}