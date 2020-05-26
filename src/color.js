export default function color (num) {
    
    var color1 = {
        a: 0xE9B2E1,
        b: 0x09B2E1,
    }

    
    var color2 = {
        a: 0xACB6E5,
        b: 0x74ebd5
    }
    
    var color3 = {
        a: 0x880088,
        b: 0x991188,
    }

    if(num === 0){
        return color1
    }
    if(num === 1){
        return color2
    }
    if(num === 2){
        return color3
    }
}