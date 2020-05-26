import GLTFLoader from 'three-gltf-loader';
export default function loadGLTF() {
    var loader = new GLTFLoader();    

    loader.load(
        'cathedral.gltf',
            function( gltf ) {
             
                global.gltf = gltf
                
                let c = gltf.scene.children
                for(let i in c){
                    
                    scene.add(c[i])
                }
            
            //scene.add( gltf.scene );
            gltf.animations;
            gltf.scenes;
            gltf.cameras;
            gltf.asset;
        },
        function ( xhr ) {
            //console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded');
            if((xhr.loaded/xhr.total) === 1){
                   }
        },
        function ( error ) {
            console.log( 'An error occurred with the loader');
        },
    );  
}