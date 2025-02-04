import React from "react";
import * as THREE from "three";

class ThreeCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.scale = 20;

    this.width = 600;
    this.height = 600;

    this.cols = this.width / this.scale;
    this.rows = this.height / this.scale;
  }

  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      90,
      this.width / this.height,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(this.width, this.height);
    // Use the ref as a mount point of the Three.js scene;
    this.mount.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    var geometry1 = new THREE.Geometry();
    geometry1.vertices.push(new THREE.Vector3(-1, 0, 0));
    geometry1.vertices.push(new THREE.Vector3(0, 1, 0));
    geometry1.vertices.push(new THREE.Vector3(1, 0, 0));
    var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    var line = new THREE.Line(geometry1, material);
    scene.add(line);

    camera.position.z = 5;

    var animate = function() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
    return <div ref={ref => (this.mount = ref)}></div>;
  }
}

export default ThreeCanvas;

/*var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

			var container, stats;
			var camera, scene, renderer;

			var particles, count = 0;

			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			init();
			animate();

			function init() {

				container = document.createElement( 'div' );
				document.body.appendChild( container );

				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 1000;

				scene = new THREE.Scene();

				//

				var numParticles = AMOUNTX * AMOUNTY;

				var positions = new Float32Array( numParticles * 3 );
				var scales = new Float32Array( numParticles );

				var i = 0, j = 0;

				for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

					for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

						positions[ i ] = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 ); // x
						positions[ i + 1 ] = 0; // y
						positions[ i + 2 ] = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 ); // z

						scales[ j ] = 1;

						i += 3;
						j ++;

					}

				}

				var geometry = new THREE.BufferGeometry();
				geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
				geometry.addAttribute( 'scale', new THREE.BufferAttribute( scales, 1 ) );

				var material = new THREE.ShaderMaterial( {

					uniforms: {
						color: { value: new THREE.Color( 0xffffff ) },
					},
					vertexShader: document.getElementById( 'vertexshader' ).textContent,
					fragmentShader: document.getElementById( 'fragmentshader' ).textContent

				} );

				//

				particles = new THREE.Points( geometry, material );
				scene.add( particles );

				//

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );

				stats = new Stats();
				container.appendChild( stats.dom );

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

			function onDocumentMouseMove( event ) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;

			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			//

			function animate() {

				requestAnimationFrame( animate );

				render();
				stats.update();

			}

			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * .05;
				camera.position.y += ( - mouseY - camera.position.y ) * .05;
				camera.lookAt( scene.position );

				var positions = particles.geometry.attributes.position.array;
				var scales = particles.geometry.attributes.scale.array;

				var i = 0, j = 0;

				for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

					for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

						positions[ i + 1 ] = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) +
										( Math.sin( ( iy + count ) * 0.5 ) * 50 );

						scales[ j ] = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 8 +
										( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 8;

						i += 3;
						j ++;

					}

				}

				particles.geometry.attributes.position.needsUpdate = true;
				particles.geometry.attributes.scale.needsUpdate = true;

				renderer.render( scene, camera );

				count += 0.1;

			}*/
