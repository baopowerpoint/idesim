import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/final.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        scale={[2, 7, 0.5]}
        castShadow
        receiveShadow
        geometry={nodes.final.geometry}
        material={materials.palette}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/final.gltf");
