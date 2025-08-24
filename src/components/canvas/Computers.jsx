import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Center } from "@react-three/drei";
import CanvasLoader from "../Loader";

/** Scene model that scales responsively */
function ComputerModel() {
  // Put your assets in /public/desktop_pc/scene.gltf  and load with absolute path:
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  // Access viewport (world units) and canvas size (pixels)
  const { viewport, size, invalidate } = useThree();

  // Re-render on resize (frameloop="demand" needs this)
  useEffect(() => invalidate(), [size.width, size.height, invalidate]);

  // Compute a scale that depends on viewport width (clamped)
  const scale = useMemo(() => {
    const s = viewport.width / 6;           // tune divisor to taste
    return Math.min(1.0, Math.max(0.5, s)); // clamp between 0.5 and 1.0
  }, [viewport.width]);

  // Position slightly down relative to viewport height so it stays in frame on phones
  const position = useMemo(() => {
    return [0, -viewport.height * 0.25, 0];
  }, [viewport.height]);

  return (
    <>
      <hemisphereLight intensity={0.2} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      {/* Center recenters the model’s bounding box so scaling works nicely */}
      <Center>
        <primitive object={scene} scale={scale} position={position} rotation={[-0.01, -0.2, -0.1]} />
      </Center>
    </>
  );
}

const ComputersCanvas = () => {
  // optional: give the canvas a deterministic height on very small screens
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    setIsMobile(mq.matches);
    const onChange = e => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div style={{ width: "100%", height: isMobile ? 320 : 520 }}>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            makeDefault
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ComputerModel />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;