"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";

function ComputationalField() {
  const group = useRef<Group>(null);
  const { pointer } = useThree();

  const nodes = useMemo<Array<[number, number, number]>>(
    () =>
      Array.from({ length: 26 }, (_, index) => {
        const angle = (index / 26) * Math.PI * 2;
        const radius = 1.3 + (index % 7) * 0.22;
        const x = Math.cos(angle) * radius;
        const y = (Math.sin(angle * 2.2) * 0.8) / (index % 3 === 0 ? 1.4 : 1.8);
        const z = Math.sin(angle) * radius;
        return [x, y, z];
      }),
    [],
  );

  const lines = useMemo<Array<[[number, number, number], [number, number, number]]>>(
    () =>
      Array.from({ length: 20 }, (_, i) => {
        const start = nodes[i % nodes.length];
        const end = nodes[(i + 7) % nodes.length];
        return [start, end];
      }),
    [nodes],
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = state.pointer.y * 0.25;
    group.current.position.x = pointer.x * 0.65;
    group.current.position.y = pointer.y * 0.4;
  });

  return (
    <group ref={group}>
      {nodes.map((node, index) => (
        <Float key={`node-${index}`} speed={1 + index * 0.04} rotationIntensity={0.6} floatIntensity={0.8}>
          <mesh position={node}>
            <icosahedronGeometry args={[0.07 + (index % 4) * 0.02, 1]} />
            <meshStandardMaterial
              color={index % 3 === 0 ? "#8df8ba" : "#dfeee7"}
              emissive={index % 3 === 0 ? "#67e8a1" : "#9bb6a6"}
              emissiveIntensity={index % 3 === 0 ? 0.9 : 0.5}
              metalness={0.45}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}
      {lines.map(([start, end], index) => (
        <Line
          key={`line-${index}`}
          points={[start, end]}
          color={index % 3 === 0 ? "#7ef6b3" : "#d9f9e7"}
          transparent
          opacity={0.42}
          lineWidth={0.45}
        />
      ))}

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.25, -1.2]}>
        <torusGeometry args={[2.2, 0.02, 16, 160]} />
        <meshStandardMaterial color="#7ef6b3" emissive="#7ef6b3" emissiveIntensity={0.3} />
      </mesh>
      <mesh rotation={[0.9, 0.3, 0]} position={[0.2, 0.2, -0.2]}>
        <octahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial color="#0c1814" emissive="#7ef6b3" emissiveIntensity={0.18} wireframe />
      </mesh>
      <Sparkles count={80} scale={[8, 6, 6]} size={1.8} speed={0.4} color="#8df8ba" />
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="hero-scene-wrap">
      <Canvas camera={{ position: [0, 0, 6], fov: 42 }} dpr={[1, 1.8]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 5]} intensity={1.75} color="#7ef6b3" />
        <pointLight position={[-3, -1, 2]} intensity={1.2} color="#d9f9e7" />
        <ComputationalField />
      </Canvas>
    </div>
  );
}
