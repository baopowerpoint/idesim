import React, { useEffect, useRef } from "react";
import { Suspense } from "react";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";

import Model from "./Model";
import { Stage } from "@react-three/drei/core";
import Spinner from "../spinner/Spinner";
import { useProgress } from "@react-three/drei/core";
function StagePr() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [speed, setSpeed] = useState(900);

  useEffect(() => {
    setInterval(() => {
      setSpeed(3);
    }, 1000);
  }, []);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setIsLoaded(true);
    }
  }, [progress]);
  const ref = useRef(null);
  return (
    <div id="canvas-container" className="relative block w-full  h-[40vh]">
      {!isLoaded && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
          <Spinner />
        </div>
      )}
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 40 }}>
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Stage
            controls={ref}
            preset="rembrandt"
            intensity={0.5}
            environment="city"
          >
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate autoRotateSpeed={speed} />
      </Canvas>
    </div>
  );
}

export default StagePr;
