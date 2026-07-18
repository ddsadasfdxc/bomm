import * as THREE from 'three';

export class CloudLayer {
  constructor(scene, options = {}) {
    this.scene = scene;
    this.count = options.count || 6;
    this.planes = [];
    this.createClouds();
  }

  createClouds() {
    const geometry = new THREE.PlaneGeometry(120, 40, 32, 16);
    const material = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      uniforms: {
        uColor: { value: new THREE.Color(0x5b7a76) },
        uOpacity: { value: 0.08 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;
        void main() {
          float noise = sin(vUv.x * 10.0) * sin(vUv.y * 8.0) * 0.5 + 0.5;
          float alpha = smoothstep(0.4, 0.6, noise) * uOpacity;
          gl_FragColor = vec4(uColor, alpha);
        }
      `
    });

    for (let i = 0; i < this.count; i++) {
      const plane = new THREE.Mesh(geometry, material.clone());
      plane.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30 - 10,
        -20 - i * 8
      );
      plane.rotation.x = -Math.PI / 6;
      plane.material.uniforms.uOpacity.value = 0.04 + Math.random() * 0.06;
      this.scene.add(plane);
      this.planes.push({
        mesh: plane,
        speed: 0.2 + Math.random() * 0.4
      });
    }
  }

  update(time, scrollProgress) {
    this.planes.forEach((cloud, i) => {
      cloud.mesh.position.x += Math.sin(time * 0.1 + i) * 0.01;
      cloud.mesh.position.y = cloud.mesh.position.y + scrollProgress * cloud.speed * 0.05;
    });
  }
}
