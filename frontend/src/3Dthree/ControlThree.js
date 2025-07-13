import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import asteroid1 from "../3Dobject/asteroid1.glb";
import ufo from "../3Dobject/spinning_ufo.glb";
import moon from "../3Dobject/the_moon.glb";

// const asteroidData = [
//   {
//     objectItem: asteroid1,
//     zDirection: 1.9,
//     xRotation: 0.003,
//     yRotation: 0.003,
//   },
// ];
function DispalyAlienship_3D(dispalydiv) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    dispalydiv.clientWidth / dispalydiv.clientHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(dispalydiv.clientWidth, dispalydiv.clientHeight);
  renderer.setClearColor(0x000000, 0);
  // renderer.setAnimationLoop(animate);
  dispalydiv.appendChild(renderer.domElement);
  const light = new THREE.DirectionalLight(0xffffff, 5);
  light.position.set(10, 10, 100);
  scene.add(light);
  const loader = new GLTFLoader();
  camera.position.z = 1.3;
  loader.load(
    ufo,
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      function animate() {
        requestAnimationFrame(animate);
        //  model.rotation.x += 0.015;
        model.rotation.y += 0.015;
        renderer.render(scene, camera);
      }
      animate();
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
}
function DispalyAsteroid_3D(dispalydiv) {
  let model;
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    dispalydiv.clientWidth / dispalydiv.clientHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(dispalydiv.clientWidth, dispalydiv.clientHeight);
  renderer.setClearColor(0x000000, 0);
  // renderer.setAnimationLoop(animate);
  dispalydiv.appendChild(renderer.domElement);
  const light = new THREE.DirectionalLight(0xffffff, 3.5);
  light.position.set(10, 10, 100);
  scene.add(light);
  const loader = new GLTFLoader();
  camera.position.z = 1.9;

  loader.load(
    asteroid1,
    function (gltf) {
      model = gltf.scene;
      scene.add(model);
      function animate() {
      requestAnimationFrame(animate);
        model.rotation.x += 0.003;
        model.rotation.y += 0.003;
        renderer.render(scene, camera);
      }
      animate();
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
}
function DispalyEarth_3D(dispalydiv) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    dispalydiv.clientWidth / dispalydiv.clientHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(dispalydiv.clientWidth, dispalydiv.clientHeight);
  renderer.setClearColor(0x000000, 0);
  // renderer.setAnimationLoop(animate);
  dispalydiv.appendChild(renderer.domElement);
  const light = new THREE.DirectionalLight(0xffffff, 1.5);
  light.position.set(50, 0, -5);
  scene.add(light);
  const loader = new GLTFLoader();
  camera.position.z =2.2;

  loader.load(
    moon,
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);
      function animate() {
        requestAnimationFrame(animate);
        //  model.rotation.x += .0005;
        model.rotation.y += 0.0005;
        renderer.render(scene, camera);
      }
      animate();
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
}
export { DispalyAlienship_3D, DispalyAsteroid_3D, DispalyEarth_3D };
