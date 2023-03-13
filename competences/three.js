import * as THREE from 'three';
import { Vector3 } from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene(); //declare scene elements
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const loader = new GLTFLoader();
const clock = new THREE.Clock();
const clock2 = new THREE.Clock();

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
effect.domElement.style.pointerEvents = "none";

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //if mobile device font is darker
  effect.domElement.style.color = '#005500';
}

effect.render(scene, camera);

let eye;
let eyeMixer;
loader.load("../Assets/3D/eye.gltf", function (gltf) { //load eye model

  eye = gltf.scene;
  gltf.scene.position.z = -100
  scene.add(gltf.scene);

  const clips = gltf.animations;
  eyeMixer = new THREE.AnimationMixer(eye);

  const clip = THREE.AnimationClip.findByName(clips, 'EyeMov')
  const action = eyeMixer.clipAction(clip);
  action.play();

}, undefined, function (error) {

  console.error(error);

});

let eyelid;
let eyelidMixer;
loader.load("../Assets/3D/eyelid.gltf", function (gltf) { //load eyelid model

  eyelid = gltf.scene;
  gltf.scene.position.z = -100
  gltf.scene.scale.x = 0.85
  gltf.scene.scale.y = 0.80
  scene.add(gltf.scene);

  eyelidMixer = new THREE.AnimationMixer(eyelid);
  const clips = gltf.animations;

  clips.forEach(function (clip) {
    const action = eyelidMixer.clipAction(clip);
    action.play();
  });

  // const clipMov = THREE.AnimationClip.findByName(clips, 'EyelidMov')
  // const actionMov = eyelidMixer.clipAction(clipMov);
  // actionMov.play();

  // const clipOpen = THREE.AnimationClip.findByName(clips, 'KeyAction')
  // const actionOpen = eyelidMixer.clipAction(clipOpen);
  // actionOpen.play();

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

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  effect.setSize(window.innerWidth, window.innerHeight);

}



function animate() {

  if (eyeMixer) {
    eyeMixer.update(clock.getDelta())
  }

  if (eyelidMixer) {
    eyelidMixer.update(clock2.getDelta())
  }

  requestAnimationFrame(animate);

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {//if mobile

    let element = document.querySelector(".skill5")

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

    // gsap.to(camera.position,{
    //   duration: 1,
    //   z: 40

    // })

  }

  effect.render(scene, camera); //render

}

animate()
