import React, { useEffect, useRef, useCallback } from "react";
import { Suspense } from "react";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import {
  ContactShadows,
  Environment,
  SpotLight,
  SpotLightShadow,
  Stage,
} from "@react-three/drei/core";
import Spinner from "../spinner/Spinner";
import { useProgress } from "@react-three/drei/core";
import { useThree } from "@react-three/fiber";

function StagePr() {
  function Model(props) {
    const { nodes, materials } = useGLTF("/final.gltf");
    const { viewport } = useThree();

    return (
      <group {...props} dispose={null} scale={1}>
        <mesh
          castShadow
          position={[0, -1, 0]}
          receiveShadow
          geometry={nodes.final.geometry}
          material={materials.palette}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    );
  }
  useGLTF.preload("/final.gltf");
  const [isLoaded, setIsLoaded] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [isOn, setIsOn] = useState(false);
  const refContainer = useRef();
  const light = useRef();
  const ref = useRef(null);
  const ctrlRef = useRef(null);

  useEffect(() => {
    setInterval(() => {
      setSpeed(3);
    }, 1000);
    setInterval(() => {
      setIsOn(true);
    }, 3000);
  }, []);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setIsLoaded(true);
    }
  }, [progress]);

  return (
    <div
      id="canvas-container"
      ref={refContainer}
      className="relative block w-full  h-[40vh]"
    >
      {!isLoaded && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
          <Spinner />
        </div>
      )}
      <Canvas
        shadows={true}
        dpr={[1, 2]}
        camera={{ fov: 90, near: 0.1, far: 1000, position: [0, 2, 6] }}
      >
        {/* <OrthographicCamera
          ref={ref}
          makeDefault={true}
          zoom={zoom}
          top={200}
          bottom={-200}
          left={-200}
          right={200}
          near={0.01}
          far={50000}
          position={[0, 0, 200]}
        /> */}
        {/* <PerspectiveCamera
          ref={ref}
          aspect={1200 / 600}
          radius={(1200 + 600) / 4}
          fov={45}
          position={[0, 0, 10]}
          onUpdate={(self) => self.updateProjectionMatrix()}
        /> */}

        {isOn && (
          <SpotLight
            castShadow
            ref={light}
            penumbra={1}
            position={[-1.25, 2.7, 2.7]}
            distance={12}
            angle={1}
            attenuation={3}
            anglePower={1}
            intensity={10} // Diffuse-cone anglePower (default: 5)
          ></SpotLight>
        )}
        <Suspense fallback={null}>
          <Stage
            adjustCamera={false}
            intensity={1.5}
            shadows="contact"
            environment="sunset"
          >
            <Model />
          </Stage>
          <ContactShadows position={[0, 4, 0]} color="#000000" />
        </Suspense>
        <OrbitControls ref={ctrlRef} autoRotate autoRotateSpeed={speed} />
      </Canvas>
    </div>
  );
}

export default StagePr;
