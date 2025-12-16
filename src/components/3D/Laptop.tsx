/* eslint-disable react-hooks/immutability */
"use client";

import React, { useEffect } from "react";
import {
  useGLTF,
  PresentationControls,
  Float,
  ContactShadows,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    mesh256948792_2: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

interface LaptopProps {
  imageUrl?: string;
}

export default function Laptop({ imageUrl }: LaptopProps) {
  const { scene, nodes } = useGLTF(
    "/models/macbook.glb"
  ) as unknown as GLTFResult;

  const texture = useTexture(
    imageUrl ||
      "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=1024"
  );
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  useEffect(() => {
    const screen = nodes.mesh256948792_2;
    if (screen) {
      screen.material = new THREE.MeshBasicMaterial({
        map: texture,
        toneMapped: false,
      });
    }
  }, [nodes, texture]);

  return (
    <PresentationControls>
      <Float rotationIntensity={0.4} floatIntensity={0.5}>
        <rectAreaLight
          width={2.5}
          height={1.65}
          intensity={65}
          color={"#a855f7"}
          rotation={[-0.1, Math.PI, 0]}
          position={[0, 0.55, -1.15]}
        />

        <group position-y={-0.4} scale={1}>
          <primitive object={scene} />
        </group>
      </Float>

      <ContactShadows position-y={-1.4} opacity={1} scale={20} blur={5} />
    </PresentationControls>
  );
}
