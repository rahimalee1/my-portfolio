import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Bounds } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");
  return (
    <group dispose={null}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ fov: 30 }}            // let Bounds place the camera
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          makeDefault
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Keeps the model fully visible on mobile & desktop */}
        <Bounds fit clip observe margin={1.2}>
          <Computers />
        </Bounds>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
