import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf"); // keep your original path

  // keep your original scale; only nudge the placement a bit
  const scale = isMobile ? 0.7 : 0.75;
  const x = isMobile ? 0.0 : 2.8;        // push right on desktop
  const y = isMobile ? -3.2 : -3.25;     // small drop so it clears text
  const z = isMobile ? -2.2 : -1.5;

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
        position={[x, y, z]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    setIsMobile(mq.matches);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    // *** Only change: position the canvas layer itself ***
    // - On desktop it occupies the right half
    // - On mobile it goes full width but starts lower so it won't cover the text
    // - It sits behind the text (negative z) and doesn't block taps (pointer-events-none)
    <div className="absolute inset-y-0 right-0 sm:w-1/2 w-full h-full sm:top-0 top-[220px] -z-10 pointer-events-none">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
