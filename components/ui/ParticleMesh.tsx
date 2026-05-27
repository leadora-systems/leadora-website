"use client";

import React, { useRef, useEffect } from "react";
import { Renderer, Camera, Transform, Program, Mesh, Geometry } from "ogl";

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec3 random;
  
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  
  varying float vAlpha;
  
  void main() {
    vec3 pos = position;
    
    // Complex swirling motion
    pos.x += sin(uTime * 0.2 + random.x * 10.0) * 1.5;
    pos.y += cos(uTime * 0.25 + random.y * 10.0) * 1.5;
    pos.z += sin(uTime * 0.15 + random.z * 10.0) * 2.0;
    
    // Wave distortion
    float wave = sin(pos.x * 2.0 + uTime * 0.5) * cos(pos.y * 2.0 + uTime * 0.5) * 0.5;
    pos.z += wave;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    
    // Perspective sizing for particles
    gl_PointSize = (12.0 * random.x + 4.0) * (15.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
    
    // Alpha fades based on Z depth to give volumetric feel
    vAlpha = smoothstep(-5.0, 3.0, pos.z) * 0.8;
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  
  uniform vec3 color1;
  uniform vec3 color2;
  uniform float uTime;
  
  varying float vAlpha;
  
  void main() {
    // Create soft glowing circle
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);
    
    if (dist > 0.5) discard;
    
    float glow = exp(-dist * 4.0);
    
    // Mix electric blue and cyan colors
    vec3 color = mix(color1, color2, sin(uTime * 0.5) * 0.5 + 0.5);
    
    gl_FragColor = vec4(color * glow * 1.5, vAlpha * glow);
  }
`;

export function ParticleMesh() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, dpr: 2 });
    const gl = renderer.gl;
    
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.display = 'block';
    
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 45 });
    camera.position.z = 8;
    camera.position.y = -1;
    camera.lookAt([0, 0, 0]);

    const scene = new Transform();

    // Create a dense cloud of particles
    const particleCount = 2000;
    const position = new Float32Array(particleCount * 3);
    const random = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Spread across a wide 3D space
      position[i * 3 + 0] = (Math.random() - 0.5) * 15;
      position[i * 3 + 1] = (Math.random() - 0.5) * 10;
      position[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Random factors for individual movement
      random[i * 3 + 0] = Math.random();
      random[i * 3 + 1] = Math.random();
      random[i * 3 + 2] = Math.random();
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: position },
      random: { size: 3, data: random },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        color1: { value: [0.04, 0.43, 1.0] }, // Deep Electric Blue
        color2: { value: [0.0, 0.76, 1.0] }, // Cyan Highlight
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    // We use gl.POINTS mode by instantiating Mesh with mode gl.POINTS
    const mesh = new Mesh(gl, { geometry, program, mode: gl.POINTS });
    mesh.setParent(scene);

    let animationId: number;
    let time = 0;

    const resize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: width / height });
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    // Mouse interaction for subtle parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      time += 0.01;
      program.uniforms.uTime.value = time;
      
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      
      mesh.rotation.y = targetX * 0.2;
      mesh.rotation.x = -targetY * 0.2;
      scene.rotation.y = time * 0.05;

      renderer.render({ scene, camera });
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      resizeObserver.disconnect();
      if (container && gl.canvas.parentNode) {
        container.removeChild(gl.canvas);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      style={{
        background: 'transparent',
      }}
    />
  );
}