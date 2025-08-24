import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Center } from "@react-three/drei";

import CanvasLoader from "../Loader";

// ----------------- MODEL -----------------
const Computers = ({ isMobile, isSmallPhone }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  // desktop unchanged; phones reduced a bit more (as you asked earlier)
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

      {/* Center the model on PHONES only */}
      {isMobile ? (
        <Center>
          <primitive
            object={scene}
            scale={scale}
            rotation={[-0.01, -0.2, -0.1]}
          />
        </Center>
      ) : (
        // Desktop/tablet uses your original placement
        <primitive
          object={scene}
          scale={scale}
          position={[0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      )}
    </mesh>
  );
};

// ----------------- CANVAS -----------------
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);        // ≤ 500px
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

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }} // unchanged
      gl={{ preserveDrawingBuffer: true }}
      // vertical swipes scroll the page; horizontal drags rotate
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
          autoRotate={isMobile}       // gentle motion on phones
          autoRotateSpeed={0.8}
          enableDamping
          dampingFactor={0.08}
          target={[0, 0, 0]}          // look at the centered model
        />
        <Computers isMobile={isMobile} isSmallPhone={isSmallPhone} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
