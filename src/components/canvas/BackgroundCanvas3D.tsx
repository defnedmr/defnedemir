import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export const BackgroundCanvas3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Floating Wireframe Polyhedra / Crystals on the outer flanks
    const shapesGroup = new THREE.Group();
    scene.add(shapesGroup);

    interface PolyObject {
      mesh: THREE.LineSegments;
      rotationSpeed: { x: number; y: number; z: number };
      floatSpeed: number;
      initialY: number;
      initialZ: number;
      xRatio: number; // Factor (-1 to 1) relative to visible screen half-width
    }

    const polyObjects: PolyObject[] = [];

    // Distinct soft wireframe geometries for left & right flanks
    const geometries = [
      new THREE.IcosahedronGeometry(4.2, 0),
      new THREE.OctahedronGeometry(3.6, 0),
      new THREE.TetrahedronGeometry(4.0, 0),
      new THREE.IcosahedronGeometry(3.4, 1),
      new THREE.DodecahedronGeometry(3.8, 0),
      new THREE.OctahedronGeometry(3.2, 1),
    ];

    // Configured strictly on the far left and far right sides
    const configs = [
      // LEFT FLANK
      { xRatio: -0.88, y: 7.5, z: -4 },   // Upper Left
      { xRatio: -0.92, y: 0.5, z: -6 },   // Mid Left
      { xRatio: -0.87, y: -7.0, z: -5 },  // Lower Left
      // RIGHT FLANK
      { xRatio: 0.88, y: 7.0, z: -5 },    // Upper Right
      { xRatio: 0.92, y: -0.5, z: -6 },   // Mid Right
      { xRatio: 0.87, y: -7.5, z: -4 },   // Lower Right
    ];

    // Wireframe colors based on theme
    const wireColor = isDark ? 0xf43f5e : 0xf472b6;
    const wireOpacity = isDark ? 0.32 : 0.52;

    const updateObjectPositions = () => {
      const vFov = (camera.fov * Math.PI) / 180;
      polyObjects.forEach(item => {
        const dist = camera.position.z - item.initialZ;
        const halfWidth = dist * Math.tan(vFov / 2) * camera.aspect;
        item.mesh.position.x = item.xRatio * halfWidth;
      });
    };

    geometries.forEach((geo, i) => {
      const wireframeGeo = new THREE.WireframeGeometry(geo);
      const wireMat = new THREE.LineBasicMaterial({
        color: wireColor,
        transparent: true,
        opacity: wireOpacity,
        linewidth: 1,
      });

      const line = new THREE.LineSegments(wireframeGeo, wireMat);
      const conf = configs[i % configs.length];
      line.position.set(0, conf.y, conf.z);

      shapesGroup.add(line);

      polyObjects.push({
        mesh: line,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.006,
          z: (Math.random() - 0.5) * 0.004,
        },
        floatSpeed: 0.8 + Math.random() * 0.5,
        initialY: conf.y,
        initialZ: conf.z,
        xRatio: conf.xRatio,
      });
    });

    // Position objects based on current aspect ratio
    updateObjectPositions();

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = ((e.clientX - window.innerWidth / 2) / window.innerWidth) * 2;
      targetY = -((e.clientY - window.innerHeight / 2) / window.innerHeight) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      updateObjectPositions();
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      const time = (performance.now() - startTime) * 0.001;

      // Gentle camera parallax
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;
      camera.position.x = mouseX * 1.2;
      camera.position.y = mouseY * 1.2;
      camera.lookAt(0, 0, 0);

      // Rotate and float each wireframe shape
      polyObjects.forEach((item, index) => {
        item.mesh.rotation.x += item.rotationSpeed.x;
        item.mesh.rotation.y += item.rotationSpeed.y;
        item.mesh.rotation.z += item.rotationSpeed.z;

        item.mesh.position.y =
          item.initialY + Math.sin(time * item.floatSpeed + index) * 0.45;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometries.forEach(g => g.dispose());
      renderer.dispose();
    };
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
    />
  );
};
