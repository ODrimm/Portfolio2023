import * as THREE from 'three';
import { Vector3 } from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene(); //declare scene elements
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const loader = new GLTFLoader();


const renderer = new THREE.WebGLRenderer({ //render on canvas
  canvas: document.querySelector('#canvas'),
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(0);

const effect = new AsciiEffect(renderer, ' .#', { invert: true }); //setup ascii

effect.setSize(window.innerWidth, window.innerHeight);
effect.domElement.style.color = '#00AA00';
effect.domElement.style.backgroundColor = 'black';
effect.domElement.style.position = 'fixed';
effect.domElement.style.top = '0';
effect.domElement.style.left = '0';
effect.domElement.style.zIndex = '1';
effect.domElement.style.opacity = '1';
effect.domElement.style.textShadow = '0 0 7px #00ff00';
effect.domElement.style.backgroundImage = "linear-gradient(transparent, transparent 3px, #122510)";
effect.domElement.style.backgroundSize = "4px 4px";

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //if mobile device font is darker
  effect.domElement.style.color = '#005500';
}

effect.render(scene, camera);

let eye;
loader.load("../Assets/3D/eye.gltf", function (gltf) { //load eye model

  eye = gltf.scene;
  gltf.scene.position.z = -100
  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});

let eyelid;
loader.load("../Assets/3D/eyelid.gltf", function (gltf) { //load eyelid model

  eyelid = gltf.scene;
  gltf.scene.position.z = -120
  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});


var target = new THREE.Vector3(); //declare mouse follow variables
var target2 = new THREE.Vector3();

var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

document.addEventListener('mousemove', event => { //set variables to mousepos

  mouseX = (event.clientX - windowHalfX);
  mouseY = (event.clientY - windowHalfY);

})

document.body.appendChild(effect.domElement); //create ascii in dom


function animate() {

  requestAnimationFrame(animate);

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {//if mobile

    let element = document.querySelector(".competence5")

    if (element != null) { //eye follow middle comp

      let elementToFollow = element.getBoundingClientRect()

      target.x += ((elementToFollow.left) - target.x) * .05;
      target.y += (- (elementToFollow.top - windowHalfY) - target.y) * .05;
      target.z = camera.position.z + 600;

      target2.x += ((elementToFollow.left) - target.x) * .05;
      target2.y += (- (elementToFollow.top - windowHalfY) - target.y) * .05;
      target2.z = camera.position.z + 14000;

    }

  } else { // eye follow mouse pos

    target.x += (mouseX - target.x) * .05;
    target.y += (- mouseY - target.y) * .05;
    target.z = camera.position.z + 600;

    target2.x += (mouseX - target.x) * .05;
    target2.y += (- mouseY - target.y) * .05;
    target2.z = camera.position.z + 14000;

  }

  if (eye != null && eyelid != null) {

    eye.lookAt(target);
    eyelid.lookAt(target2);

  }

  effect.render(scene, camera); //render

}

animate()
