import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

interface ShapeConfig {
  geo: THREE.BufferGeometry;
  xRatio: number; // Factor (-1 to 1) relative to visible screen half-width
  y: number;
  z: number;
  colorDark: number;
  colorLight: number;
  opacityDark: number;
  opacityLight: number;
  rotSpeed: { x: number; y: number; z: number };
  floatSpeed: number;
  floatAmp: number;
}

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

    const shapesGroup = new THREE.Group();
    scene.add(shapesGroup);

    const geometriesToDispose: THREE.BufferGeometry[] = [];
    const materialsToDispose: THREE.Material[] = [];

    const createGeo = (fn: () => THREE.BufferGeometry) => {
      const g = fn();
      geometriesToDispose.push(g);
      return g;
    };

    // Palette:
    // Dark mode: Pink (#f43f5e) & Purple (#a855f7)
    // Light mode: Purple (#7c3aed) & Rose/Pink (#f43f5e)
    const PINK_DARK = 0xf43f5e;
    const PURPLE_DARK = 0xa855f7;
    const PURPLE_LIGHT = 0x7c3aed;
    const PINK_LIGHT = 0xf43f5e;

    const shapeConfigs: ShapeConfig[] = [
      // Left Upper Flank
      {
        geo: createGeo(() => new THREE.IcosahedronGeometry(3.6, 0)),
        xRatio: -0.78,
        y: 6.5,
        z: -4,
        colorDark: PINK_DARK,
        colorLight: PURPLE_LIGHT,
        opacityDark: 0.28,
        opacityLight: 0.22,
        rotSpeed: { x: 0.002, y: 0.003, z: 0.001 },
        floatSpeed: 0.7,
        floatAmp: 0.5,
      },
      // Left Mid Flank
      {
        geo: createGeo(() => new THREE.OctahedronGeometry(3.0, 0)),
        xRatio: -0.84,
        y: 0.0,
        z: -5,
        colorDark: PURPLE_DARK,
        colorLight: PINK_LIGHT,
        opacityDark: 0.24,
        opacityLight: 0.20,
        rotSpeed: { x: -0.002, y: 0.0025, z: -0.0015 },
        floatSpeed: 0.9,
        floatAmp: 0.45,
      },
      // Left Lower Flank
      {
        geo: createGeo(() => new THREE.DodecahedronGeometry(3.2, 0)),
        xRatio: -0.76,
        y: -6.8,
        z: -4,
        colorDark: PINK_DARK,
        colorLight: PURPLE_LIGHT,
        opacityDark: 0.26,
        opacityLight: 0.20,
        rotSpeed: { x: 0.0015, y: -0.003, z: 0.002 },
        floatSpeed: 0.65,
        floatAmp: 0.4,
      },

      // Right Upper Flank
      {
        geo: createGeo(() => new THREE.DodecahedronGeometry(3.4, 0)),
        xRatio: 0.78,
        y: 6.8,
        z: -4,
        colorDark: PURPLE_DARK,
        colorLight: PINK_LIGHT,
        opacityDark: 0.26,
        opacityLight: 0.20,
        rotSpeed: { x: -0.002, y: -0.0025, z: 0.0015 },
        floatSpeed: 0.8,
        floatAmp: 0.45,
      },
      // Right Mid Flank
      {
        geo: createGeo(() => new THREE.IcosahedronGeometry(3.2, 0)),
        xRatio: 0.85,
        y: -0.5,
        z: -5,
        colorDark: PINK_DARK,
        colorLight: PURPLE_LIGHT,
        opacityDark: 0.28,
        opacityLight: 0.22,
        rotSpeed: { x: 0.0025, y: 0.002, z: -0.002 },
        floatSpeed: 0.75,
        floatAmp: 0.5,
      },
      // Right Lower Flank
      {
        geo: createGeo(() => new THREE.OctahedronGeometry(2.8, 0)),
        xRatio: 0.76,
        y: -7.0,
        z: -4,
        colorDark: PURPLE_DARK,
        colorLight: PINK_LIGHT,
        opacityDark: 0.24,
        opacityLight: 0.18,
        rotSpeed: { x: 0.002, y: -0.002, z: 0.001 },
        floatSpeed: 0.85,
        floatAmp: 0.4,
      },

      // Center-Deep Subtle Ambient Shapes (pass gently in the deep background behind content)
      {
        geo: createGeo(() => new THREE.TetrahedronGeometry(2.4, 0)),
        xRatio: -0.22,
        y: 3.5,
        z: -10,
        colorDark: PINK_DARK,
        colorLight: PURPLE_LIGHT,
        opacityDark: 0.14,
        opacityLight: 0.10,
        rotSpeed: { x: 0.001, y: 0.0015, z: 0.001 },
        floatSpeed: 0.5,
        floatAmp: 0.35,
      },
      {
        geo: createGeo(() => new THREE.IcosahedronGeometry(2.6, 0)),
        xRatio: 0.25,
        y: -4.0,
        z: -11,
        colorDark: PURPLE_DARK,
        colorLight: PINK_LIGHT,
        opacityDark: 0.13,
        opacityLight: 0.09,
        rotSpeed: { x: -0.001, y: 0.001, z: -0.001 },
        floatSpeed: 0.55,
        floatAmp: 0.35,
      },
    ];

    interface LiveMesh {
      line: THREE.LineSegments;
      conf: ShapeConfig;
      initialY: number;
    }

    const liveMeshes: LiveMesh[] = [];

    shapeConfigs.forEach((conf) => {
      const wireGeo = new THREE.WireframeGeometry(conf.geo);
      geometriesToDispose.push(wireGeo);

      const color = isDark ? conf.colorDark : conf.colorLight;
      const opacity = isDark ? conf.opacityDark : conf.opacityLight;

      const mat = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
        linewidth: 1,
      });
      materialsToDispose.push(mat);

      const line = new THREE.LineSegments(wireGeo, mat);
      line.position.set(0, conf.y, conf.z);
      shapesGroup.add(line);

      liveMeshes.push({
        line,
        conf,
        initialY: conf.y,
      });
    });

    const updatePositions = () => {
      const vFov = (camera.fov * Math.PI) / 180;
      liveMeshes.forEach((item) => {
        const dist = camera.position.z - item.conf.z;
        const halfWidth = dist * Math.tan(vFov / 2) * camera.aspect;
        item.line.position.x = item.conf.xRatio * halfWidth;
      });
    };

    updatePositions();

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = ((e.clientX - window.innerWidth / 2) / window.innerWidth) * 1.5;
      targetY = -((e.clientY - window.innerHeight / 2) / window.innerHeight) * 1.5;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      updatePositions();
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      const time = (performance.now() - startTime) * 0.001;

      // Smooth gentle camera parallax
      mouseX += (targetX - mouseX) * 0.03;
      mouseY += (targetY - mouseY) * 0.03;
      camera.position.x = mouseX;
      camera.position.y = mouseY;
      camera.lookAt(0, 0, 0);

      // Rotate and float shapes gently
      liveMeshes.forEach((item, index) => {
        item.line.rotation.x += item.conf.rotSpeed.x;
        item.line.rotation.y += item.conf.rotSpeed.y;
        item.line.rotation.z += item.conf.rotSpeed.z;

        item.line.position.y =
          item.initialY + Math.sin(time * item.conf.floatSpeed + index) * item.conf.floatAmp;
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
      geometriesToDispose.forEach((g) => g.dispose());
      materialsToDispose.forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};
