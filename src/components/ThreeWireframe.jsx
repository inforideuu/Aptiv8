import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeWireframe({ theme }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 40;
    camera.position.y = 15;
    camera.lookAt(0, 0, 0);

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Color definitions based on mode
    const isDark = theme === 'dark';
    const wireColor = isDark ? 0x3b82f6 : 0x2563eb; // cyan/blue or deep blue
    const particleColor = isDark ? 0x60a5fa : 0x3b82f6;
    const gridColor = isDark ? 0x1e293b : 0xe2e8f0;

    // Architectural Wireframe Objects
    const group = new THREE.Group();
    scene.add(group);

    // Create 3D buildings/blocks representing a BIM grid
    const buildingGeometries = [
      new THREE.BoxGeometry(6, 18, 6),
      new THREE.BoxGeometry(8, 12, 8),
      new THREE.BoxGeometry(5, 22, 5),
      new THREE.BoxGeometry(10, 8, 10),
      new THREE.BoxGeometry(7, 15, 7),
    ];

    const structures = [];
    const positions = [
      [-15, 9, -10],
      [-5, 6, -5],
      [8, 11, -8],
      [15, 4, -12],
      [-12, 7.5, 5],
      [2, 9, 2],
      [12, 6, 8],
    ];

    positions.forEach((pos, idx) => {
      const geom = buildingGeometries[idx % buildingGeometries.length];
      const edges = new THREE.EdgesGeometry(geom);
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: wireColor, 
        transparent: true, 
        opacity: isDark ? 0.35 : 0.25 
      });
      const line = new THREE.LineSegments(edges, lineMaterial);
      line.position.set(pos[0], pos[1], pos[2]);
      group.add(line);
      structures.push(line);
    });

    // Create a ground grid
    const gridHelper = new THREE.GridHelper(80, 40, wireColor, gridColor);
    gridHelper.position.y = 0;
    // Set opacity of grid
    gridHelper.material.opacity = isDark ? 0.2 : 0.15;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // Floating particles (AI/data nodes)
    const particleCount = 150;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 60;
      particlePositions[i + 1] = Math.random() * 25;
      particlePositions[i + 2] = (Math.random() - 0.5) * 60;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: particleColor,
      size: 0.45,
      transparent: true,
      opacity: isDark ? 0.7 : 0.5,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Light source for highlighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.2 : 0.5);
    scene.add(ambientLight);

    // Mouse movement response
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = 40 * Math.sin(targetX * 0.1);
      camera.position.z = 40 * Math.cos(targetX * 0.1) + targetY * 2;
      camera.lookAt(0, 5, 0);

      // Rotate group structures slightly
      group.rotation.y = elapsedTime * 0.03;

      // Animate building heights slightly to simulate morphing/optimization
      structures.forEach((struct, idx) => {
        struct.scale.y = 1 + Math.sin(elapsedTime * 0.5 + idx) * 0.1;
      });

      // Animate particles
      const positionsArr = particles.geometry.attributes.position.array;
      for (let i = 1; i < particleCount * 3; i += 3) {
        // Move particles upwards, wrap around
        positionsArr[i] += 0.02 + Math.sin(elapsedTime + i) * 0.005;
        if (positionsArr[i] > 25) {
          positionsArr[i] = 0;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      // Dispose materials/geometries
      buildingGeometries.forEach((g) => g.dispose());
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full -z-10 overflow-hidden" />;
}
