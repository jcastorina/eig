export default class addStars{
    constructor(){
        this.geometry = [new THREE.BufferGeometry(),
                        new THREE.BufferGeometry(),
                        new THREE.BufferGeometry(),
                        new THREE.BufferGeometry()]

        
        this.vertices = [];
        this.vertices1 = [];
        this.vertices2 = [];
        this.vertices3 = [];
        let color = 0xDDDDDD;
        let color1 = 0x555555;
        let color2 = 0x0000DD;
        let color3 = 0xDD0000;
        this.spread = 15;
        this.rate1 = 0.01;
        this.rate2 = 0.01821965226;
        this.flipx = true;
        this.flipWhite = true;
        //white
        for ( let i = 0; i < 300; i ++ ) {
        
            this.vertices.push( THREE.MathUtils.randFloatSpread( this.spread ) ); // x
            this.vertices.push( THREE.MathUtils.randFloatSpread( this.spread ) ); // y
            this.vertices.push( THREE.MathUtils.randFloatSpread( this.spread ) ); // z
        
        }
        
        //grey
        for ( let i = 0; i < 3000; i ++ ) {
        
            this.vertices1.push( THREE.MathUtils.randFloatSpread( this.spread ) ); // x
            this.vertices1.push( THREE.MathUtils.randFloatSpread( this.spread ) ); // y
            this.vertices1.push( THREE.MathUtils.randFloatSpread( this.spread ) ); // z
        
        }
        
        //blue
        for ( let i = 0; i < 300; i ++ ) {
        
            this.vertices2.push( THREE.MathUtils.randFloatSpread( this.spread ) ); // x
            this.vertices2.push( THREE.MathUtils.randFloatSpread( this.spread ) ); // y
            this.vertices2.push( THREE.MathUtils.randFloatSpread( this.spread ) ); // z
        
        }
        
        //red
        for ( let i = 0; i < 100; i ++ ) {
        
            this.vertices3.push( THREE.MathUtils.randFloatSpread( this.spread ) ); // x
            this.vertices3.push( THREE.MathUtils.randFloatSpread( this.spread ) ); // y
            this.vertices3.push( THREE.MathUtils.randFloatSpread( this.spread ) ); // z
        
        }
        
        //for( let i = 0; i < this.geometry.length; i++){
            this.geometry[0].setAttribute( 'position', new THREE.Float32BufferAttribute( this.vertices, 3 ) );
            this.geometry[1].setAttribute( 'position', new THREE.Float32BufferAttribute( this.vertices1, 3 ) );
            this.geometry[2].setAttribute( 'position', new THREE.Float32BufferAttribute( this.vertices2, 3 ) );
            this.geometry[3].setAttribute( 'position', new THREE.Float32BufferAttribute( this.vertices3, 3 ) );
       // }
        this.particles = [new THREE.Points( this.geometry[0], new THREE.PointsMaterial( { color: color } ) ),
                         new THREE.Points( this.geometry[0], new THREE.PointsMaterial( { color: color } ) ),
                         new THREE.Points( this.geometry[1], new THREE.PointsMaterial( { color: color1 } ) ),
                         new THREE.Points( this.geometry[2], new THREE.PointsMaterial( { color: color2 } ) ),
                         new THREE.Points( this.geometry[2], new THREE.PointsMaterial( { color: color2 } ) ),
                         new THREE.Points( this.geometry[3], new THREE.PointsMaterial( { color: color3 } ) )]
        
        this.particles[0].name = "whiteParticles";
        this.particles[1].name = "whiteParticlesLoop";
        this.particles[2].name = "greyParticles";
        this.particles[3].name = "blueParticles";
        this.particles[4].name = "blueParticles";
        this.particles[5].name = "redParticles";
        for(let i in this.particles.length){
            this.particles[i].position.y += 15
        }
        
        this.particles[1].position.y = this.spread + 15
        this.particles[4].position.y = this.spread + 15

        scene.add( this.particles[0] );
        scene.add( this.particles[1] );
        scene.add( this.particles[2] );
        scene.add( this.particles[3] );
        scene.add( this.particles[4] );
        scene.add( this.particles[5] );
    }
    starWhite(){
        this.particles[0].position.y -= this.rate1
        this.particles[1].position.y -= this.rate1
        
        if(this.particles[0].position.y < -this.spread){
            this.particles[0].position.y = 0;
            this.particles[1].position.y = this.spread;

        }

        if((this.particles[0].position.x < 3) && this.flipWhite){
            this.particles[0].position.x += this.rate1
            this.particles[1].position.x += this.rate1

        } else {
            this.flipWhite = false

        }
        if(!this.flipWhite){
            this.particles[0].position.x -= this.rate1
            this.particles[1].position.x -= this.rate1
            if(this.particles[0].position.x < - 3){
                this.flipWhite = true;
            }
        }

    }
    starGrey(){
    
    }
    starRed(){

    }
    starBlue(){//starBlueo Weematsu
        
        this.particles[3].position.y -= this.rate2
        this.particles[4].position.y -= this.rate2

        
        if(this.particles[3].position.y < -this.spread){
            this.particles[3].position.y = 0;
            this.particles[4].position.y = this.spread;

        }
        if((this.particles[3].position.x < 1) && this.flipx){
            this.particles[3].position.x += this.rate2
            this.particles[4].position.x += this.rate2

        } else {
            this.flipx = false

        }
        if(!this.flipx){
            this.particles[3].position.x -= this.rate2
            this.particles[4].position.x -= this.rate2
            if(this.particles[3].position.x < - 1){
                this.flipx = true;
            }
        }



    }
}