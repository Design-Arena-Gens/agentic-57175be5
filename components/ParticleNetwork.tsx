"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleSystem() {
  const particlesRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 2000;

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    return { positions, velocities };
  }, []);

  const linePositions = useMemo(() => {
    const positions = new Float32Array(particleCount * 6);
    return positions;
  }, []);

  useFrame((state) => {
    if (!particlesRef.current || !linesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
    const lines = linesRef.current.geometry.attributes.position.array as Float32Array;

    let lineIndex = 0;

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] += particles.velocities[i * 3];
      positions[i * 3 + 1] += particles.velocities[i * 3 + 1];
      positions[i * 3 + 2] += particles.velocities[i * 3 + 2];

      if (Math.abs(positions[i * 3]) > 10) particles.velocities[i * 3] *= -1;
      if (Math.abs(positions[i * 3 + 1]) > 10) particles.velocities[i * 3 + 1] *= -1;
      if (Math.abs(positions[i * 3 + 2]) > 10) particles.velocities[i * 3 + 2] *= -1;

      if (i < particleCount - 1 && lineIndex < particleCount * 6) {
        const dist = Math.sqrt(
          Math.pow(positions[i * 3] - positions[(i + 1) * 3], 2) +
          Math.pow(positions[i * 3 + 1] - positions[(i + 1) * 3 + 1], 2) +
          Math.pow(positions[i * 3 + 2] - positions[(i + 1) * 3 + 2], 2)
        );

        if (dist < 2) {
          lines[lineIndex++] = positions[i * 3];
          lines[lineIndex++] = positions[i * 3 + 1];
          lines[lineIndex++] = positions[i * 3 + 2];
          lines[lineIndex++] = positions[(i + 1) * 3];
          lines[lineIndex++] = positions[(i + 1) * 3 + 1];
          lines[lineIndex++] = positions[(i + 1) * 3 + 2];
        }
      }
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.setDrawRange(0, lineIndex / 3);

    particlesRef.current.rotation.y += 0.0005;
    linesRef.current.rotation.y += 0.0005;
  });

  return (
    <>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particles.positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#d4af37"
          sizeAttenuation
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount * 2}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#d4af37"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </>
  );
}

export default function ParticleNetwork() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <ParticleSystem />
      </Canvas>
    </div>
  );
}
