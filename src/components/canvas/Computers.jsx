import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Center, Bounds } from "@react-three/drei";
import CanvasLoader from "../Loader";

function Computers() {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");
  return (
    // Centers the model at (0,0,0) so Bounds & OrbitControls can frame it perfectly
    <Center disableY>
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
      {/* Slight yaw so it's not perfectly flat, but not “sideways” */}
      <primitive object={scene} rotation={[0, -0.25, 0]} />
    </Center>
  );
}

export default function ComputersCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const onChange = e => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="hero-canvas">
      <Canvas
        dpr={[1, 2]}
        shadows
        // Wider FOV on phones so more fits without feeling tiny
        camera={{ fov: isMobile ? 34 : 30 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            makeDefault
            enableZoom={false}
            enableDamping
            dampingFactor={0.08}
            // Look at the center of the rig (slightly above ground)
            target={[0, 0.8, 0]}
            // Keep a gentle, locked polar angle (no flipping)
            minPolarAngle={Math.PI / 2.4}
            maxPolarAngle={Math.PI / 2.4}
          />

          {/* Auto-fit keeps the whole model in view on any viewport */}
          {/* Tweak margin: 0.95 = bigger, 1.15 = smaller */}
          <Bounds fit observe margin={isMobile ? 1.05 : 0.95}>
            <Computers />
          </Bounds>
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
}
