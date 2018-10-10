import React, { Component } from 'react';

import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';

class ThreeScene extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    this.camera.position.set(5.5, 0, 0);
    this.controls = new OrbitControls(this.camera);

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#000000');
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    // Sphere
    var geometry = new THREE.SphereGeometry(5, 32, 32);
    var material = new THREE.MeshBasicMaterial({
      color: 0xf3a2b0,
      wireframe: true
    });

    this.sphere = new THREE.Mesh(geometry, material);

    this.sphere.castShadow = true;
    this.scene.add(this.sphere);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };
  render() {
    return (
      <div
        style={{ width: '100vw', height: '100vh' }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default ThreeScene;
