import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// ----------------- MODEL -----------------
const Computers = ({ isMobile, isSmallPhone, modelPosition }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // desktop unchanged; phones reduced a bit more
  const scale = isSmallPhone ? 0.46 : isMobile ? 0.5 : 0.75;

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={modelPosition}                 // <-- keep your original placement
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// ----------------- CANVAS -----------------
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);         // ≤ 500px
  const [isSmallPhone, setIsSmallPhone] = useState(false); // ≤ 380px

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 500px)");
    const mqSmall = window.matchMedia("(max-width: 380px)");
    const onChange = () => {
      setIsMobile(mq.matches);
      setIsSmallPhone(mqSmall.matches);
    };
    onChange();
    mq.addEventListener("change", onChange);
    mqSmall.addEventListener("change", onChange);
    return () => {
      mq.removeEventListener("change", onChange);
      mqSmall.removeEventListener("change", onChange);
    };
  }, []);

  // same positions you used (desktop unchanged, phones nudged back/down)
  const modelPosition = isSmallPhone
    ? [0, -3.5, -2.15]
    : isMobile
    ? [0, -3.4, -2.0]
    : [0, -3.25, -1.5];

  // tell OrbitControls to look exactly at the model -> perfectly centered
  const controlsTarget = [
    modelPosition[0],
    modelPosition[1] + 0.8,   // slight look-up like before
    modelPosition[2],
  ];

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}  // unchanged
      gl={{ preserveDrawingBuffer: true }}
      // keep vertical page scroll smooth; horizontal drag rotates
      style={{ touchAction: "pan-y" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          makeDefault
          enabled
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          target={controlsTarget}         // <-- center the model in view
          autoRotate={isMobile}           // rotation back on phones
          autoRotateSpeed={0.8}
          enableDamping
          dampingFactor={0.08}
        />
        <Computers
          isMobile={isMobile}
          isSmallPhone={isSmallPhone}
          modelPosition={modelPosition}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
