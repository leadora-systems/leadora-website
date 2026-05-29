"use client";

import React, { useRef, useEffect } from "react";
import { Renderer, Camera, Transform, Program, Mesh, Plane } from "ogl";

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec2 uv;
  
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Gentle slow wave across the surface to give it 3D depth
    pos.z += sin(pos.x * 2.0 + uTime * 0.5) * cos(pos.y * 2.0 + uTime * 0.4) * 0.15;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  
  uniform float uTime;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform vec3 color3;
  
  varying vec2 vUv;
  
  // 3D Simplex noise implementation for organic flow
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){ 
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

    i = mod(i, 289.0 ); 
    vec4 p = permute( permute( permute( 
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    float n_ = 1.0/7.0;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                  dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    // Map UVs to a larger space to see more contour details
    vec2 pos = vUv * 5.0;
    
    // Add sweeping motion over time
    float t = uTime * 0.1;
    
    // Generate layered noise (FBM) for an organic fluid feel
    float n = snoise(vec3(pos.x - t, pos.y + t, t * 0.5));
    n += 0.5 * snoise(vec3(pos.x * 2.0 + t, pos.y * 2.0 - t, t));
    n += 0.25 * snoise(vec3(pos.x * 4.0, pos.y * 4.0, t * 1.5));
    
    // Normalize noise roughly to 0-1
    n = n * 0.5 + 0.5;
    
    // Create contour lines / topographic effect
    // 22.0 controls how many contour lines appear
    float contourCount = 22.0;
    float lines = fract(n * contourCount);
    
    // Smooth the lines to make them crisp but anti-aliased
    float thickness = 0.12; // Controls line thickness
    float lineAlpha = smoothstep(thickness, thickness + 0.05, lines) 
                    - smoothstep(1.0 - thickness - 0.05, 1.0 - thickness, lines);
                    
    // Invert lineAlpha so lines are opaque and gaps are transparent
    lineAlpha = 1.0 - lineAlpha;

    // Create a dynamic premium color gradient
    vec3 mixedColor = mix(color1, color2, vUv.x + sin(uTime * 0.2) * 0.3);
    mixedColor = mix(mixedColor, color3, vUv.y + cos(uTime * 0.3) * 0.3);
    
    // Add subtle glow based on noise peaks to give depth
    float glow = smoothstep(0.6, 1.0, n) * 0.6;
    
    // Soft edge fade to gently blend into background
    float edgeFade = smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x) *
                     smoothstep(0.0, 0.15, vUv.y) * smoothstep(1.0, 0.85, vUv.y);
                     
    // Final output with bright, high-contrast visibility
    gl_FragColor = vec4(mixedColor + glow, lineAlpha * edgeFade * 0.95);
  }
`;

interface LineWavesProps {
  color1?: string;
  color2?: string;
  color3?: string;
}

export function LineWaves({ 
  color1 = "#0B1F3A", 
  color2 = "#1E90FF", 
  color3 = "#00C2FF" 
}: LineWavesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, dpr: 2 });
    const gl = renderer.gl;
    
    // Ensure canvas fills the container
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.display = 'block';
    
    container.appendChild(gl.canvas);

    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 45 });
    camera.position.z = 2.5;
    camera.position.y = -1.2;
    camera.lookAt([0, 0, 0]);

    const scene = new Transform();

    // Parse hex colors to normalized rgb
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255
      ] : [1, 1, 1];
    };

    const geometry = new Plane(gl, {
      width: 10,
      height: 10,
      widthSegments: 60,
      heightSegments: 60,
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        color1: { value: hexToRgb(color1) },
        color2: { value: hexToRgb(color2) },
        color3: { value: hexToRgb(color3) },
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);
    
    // Rotate to lay flat
    mesh.rotation.x = -Math.PI / 2.5;

    let animationId: number;
    let time = 0;

    const resize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: width / height });
    };

    // Use ResizeObserver for responsive canvas
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    // Mouse interaction setup
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
      
      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      
      // Apply subtle rotation based on mouse
      mesh.rotation.y = targetX * 0.2;
      mesh.position.y = targetY * 0.2;

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
  }, [color1, color2, color3]);

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
