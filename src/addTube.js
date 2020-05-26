import csin from './customSine'


var path = new csin( 20 );
var geometry = new THREE.TubeBufferGeometry( path, 20, 1, 8, false );

var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
var path1 = new THREE.Mesh( geometry, material );
var path2 = new THREE.Mesh( geometry, material );
path1.position.x = 10
path1.position.z = -15
path2.position.x = 70
path2.position.z = -15
scene.add( path1 );
scene.add( path2 );