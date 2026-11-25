import { Component, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import styled from "styled-components";
import * as THREE from "three";

const EnvironmentLayer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  background:
    radial-gradient(ellipse at 70% 30%, rgba(12, 72, 112, 0.18), transparent 44%),
    radial-gradient(ellipse at 20% 75%, rgba(23, 45, 114, 0.17), transparent 48%),
    #070b13;

  canvas {
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0.48;
  }
`;

const createNetwork = (count) => {
  const points = Array.from({ length: count }, () => [
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 12,
    (Math.random() - 0.5) * 9,
  ]);
  const degrees = new Array(count).fill(0);
  const edges = [];

  for (let i = 0; i < count; i += 1) {
    for (let j = i + 1; j < count; j += 1) {
      if (degrees[i] >= 4) break;
      if (degrees[j] >= 4) continue;
      const [x1, y1, z1] = points[i];
      const [x2, y2, z2] = points[j];
      if (Math.hypot(x1 - x2, y1 - y2, z1 - z2) < 2.45) {
        edges.push([i, j]);
        degrees[i] += 1;
        degrees[j] += 1;
      }
    }
  }

  const vertices = new Float32Array(edges.length * 6);
  edges.forEach(([start, end], index) => {
    vertices.set(points[start], index * 6);
    vertices.set(points[end], index * 6 + 3);
  });

  return {
    points,
    edges,
    pointPositions: new Float32Array(points.flat()),
    vertices,
  };
};

function DataPulse({ edge, index }) {
  const ref = useRef();
  const speed = 0.11 + (index % 4) * 0.025;
  const offset = (index * 0.137) % 1;

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const progress = (clock.elapsedTime * speed + offset) % 1;
    ref.current.position.set(
      THREE.MathUtils.lerp(edge[0][0], edge[1][0], progress),
      THREE.MathUtils.lerp(edge[0][1], edge[1][1], progress),
      THREE.MathUtils.lerp(edge[0][2], edge[1][2], progress),
    );
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.035, 8, 8]} />
      <meshBasicMaterial color={index % 3 === 0 ? "#9df7ff" : "#1ca6ff"} />
    </mesh>
  );
}

function ServerCluster({ position, scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      {[-1.2, 0, 1.2].map((x, index) => (
        <group key={x} position={[x, 0, 0]}>
          <mesh>
            <boxGeometry args={[0.78, 3.2 + (index % 2) * 0.5, 0.56]} />
            <meshBasicMaterial color="#0b1828" transparent opacity={0.3} />
            <Edges color="#1e6688" transparent opacity={0.26} />
          </mesh>
          {[-0.8, -0.25, 0.3, 0.85].map((y, slot) => (
            <mesh key={y} position={[0, y, 0.291]}>
              <boxGeometry args={[0.4, 0.018, 0.008]} />
              <meshBasicMaterial
                color={slot === index ? "#81f5ff" : "#1979b8"}
                transparent
                opacity={slot === index ? 0.8 : 0.34}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

function NetworkScene() {
  const { size } = useThree();
  const networkRef = useRef();
  const cursorLight = useRef();
  const pointer = useRef({ x: 0, y: 0 });
  const count = size.width < 700 ? 180 : 600;
  const network = useMemo(() => createNetwork(count), [count]);
  const pointGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(network.pointPositions, 3),
    );
    return geometry;
  }, [network]);
  const edgeGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(network.vertices, 3),
    );
    return geometry;
  }, [network]);

  useEffect(() => {
    const onPointerMove = (event) => {
      pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  useEffect(
    () => () => {
      pointGeometry.dispose();
      edgeGeometry.dispose();
    },
    [edgeGeometry, pointGeometry],
  );

  useFrame((state, delta) => {
    if (!networkRef.current) return;
    const targetX = pointer.current.y * -0.035;
    const targetY = pointer.current.x * 0.045;
    networkRef.current.rotation.x = THREE.MathUtils.damp(
      networkRef.current.rotation.x,
      targetX,
      1.2,
      delta,
    );
    networkRef.current.rotation.y = THREE.MathUtils.damp(
      networkRef.current.rotation.y,
      targetY + state.clock.elapsedTime * 0.009,
      1.2,
      delta,
    );
    if (cursorLight.current) {
      cursorLight.current.position.x = THREE.MathUtils.damp(
        cursorLight.current.position.x,
        pointer.current.x * 6,
        2,
        delta,
      );
      cursorLight.current.position.y = THREE.MathUtils.damp(
        cursorLight.current.position.y,
        pointer.current.y * -3,
        2,
        delta,
      );
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 5]} color="#18b7e5" intensity={1.6} />
      <pointLight ref={cursorLight} position={[0, 0, 4]} color="#306bff" intensity={0.7} />
      <group ref={networkRef}>
        <lineSegments geometry={edgeGeometry}>
          <lineBasicMaterial
            color="#2a8eb7"
            transparent
            opacity={0.17}
            depthWrite={false}
          />
        </lineSegments>
        <points geometry={pointGeometry}>
          <pointsMaterial
            color="#5fe4ff"
            size={0.045}
            sizeAttenuation
            transparent
            opacity={0.72}
            depthWrite={false}
          />
        </points>
        {network.edges.slice(0, 18).map(([start, end], index) => (
          <DataPulse
            key={`${start}-${end}`}
            edge={[network.points[start], network.points[end]]}
            index={index}
          />
        ))}
        <ServerCluster position={[-8.3, -0.5, -2]} scale={0.85} />
        <ServerCluster position={[8.3, -0.7, -2]} scale={0.85} />
      </group>
      <mesh position={[0, 0, -6]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshBasicMaterial color="#95f6ff" transparent opacity={0.8} />
      </mesh>
    </>
  );
}

class WebGLFallback extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return <EnvironmentLayer aria-hidden="true" />;
    }
    return this.props.children;
  }
}

export default function NetworkEnvironment() {
  const reduceMotion = useReducedMotion();

  return (
    <WebGLFallback>
      <EnvironmentLayer aria-hidden="true">
        <Canvas
          frameloop={reduceMotion ? "demand" : "always"}
          dpr={[1, 1.35]}
          camera={{ position: [0, 0, 13], fov: 48, near: 0.1, far: 60 }}
          gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        >
          <NetworkScene />
        </Canvas>
      </EnvironmentLayer>
    </WebGLFallback>
  );
}
