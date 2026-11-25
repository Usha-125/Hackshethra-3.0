import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function ShieldModel({ active, hovered }) {
  const group = useRef();
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-0.75, 0.72);
    shape.lineTo(0.75, 0.72);
    shape.lineTo(0.64, -0.15);
    shape.quadraticCurveTo(0.48, -0.72, 0, -1.02);
    shape.quadraticCurveTo(-0.48, -0.72, -0.64, -0.15);
    shape.closePath();
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.16,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.035,
      bevelThickness: 0.035,
    });
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * (active ? 0.52 : 0.14);
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      hovered ? -0.12 : 0,
      4,
      delta,
    );
    const targetScale = active ? 1.12 : hovered ? 1.06 : 1;
    group.current.scale.setScalar(
      THREE.MathUtils.damp(group.current.scale.x, targetScale, 4, delta),
    );
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <mesh geometry={geometry}>
        <meshStandardMaterial
          color={active ? "#8ffbff" : "#1e87aa"}
          emissive={active ? "#1cbeea" : "#075074"}
          emissiveIntensity={active ? 1.15 : 0.75}
          metalness={0.55}
          roughness={0.28}
          transparent
          opacity={active ? 0.38 : 0.24}
          side={THREE.DoubleSide}
        />
        <Edges color={active ? "#d4ffff" : "#48cce9"} transparent opacity={0.9} />
      </mesh>
      <mesh position={[0, 0, -0.25]} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.15, 0.006, 6, 96]} />
        <meshBasicMaterial
          color={active ? "#d4ffff" : "#27a9d2"}
          transparent
          opacity={active ? 0.8 : 0.4}
        />
      </mesh>
      <mesh position={[0, 0, -0.3]} rotation={[0.8, 0.35, 0.2]}>
        <torusGeometry args={[1.3, 0.004, 6, 96]} />
        <meshBasicMaterial color="#3985ff" transparent opacity={0.36} />
      </mesh>
      <mesh position={[0, 0.05, 0.12]}>
        <octahedronGeometry args={[0.15, 0]} />
        <meshBasicMaterial
          color={active ? "#f5ffff" : "#4ddfff"}
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>
    </group>
  );
}

export default function DefenseShield({ active, hovered }) {
  const reduceMotion = useReducedMotion();
  return (
    <Canvas
      frameloop={reduceMotion ? "demand" : "always"}
      dpr={[1, 1.25]}
      camera={{ position: [0, 0, 4.3], fov: 40 }}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[2, 2, 3]} color="#38dfff" intensity={2} />
      <ShieldModel active={active} hovered={hovered} />
    </Canvas>
  );
}
