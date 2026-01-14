"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import BlackOrb from "./BlackOrb";
import { Suspense } from "react";
import { AnimationProps } from "../../types";

const Scene = ({ startAnimation }: AnimationProps) => {
  return (
    <div className="w-full h-full absolute inset-0 -z-10">
      {/* Canvas: 3D Dünyasının Penceresi */}
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <fog attach="fog" args={["#09090b", 5, 15]} />
        {/* Işıklandırma */}
        <ambientLight intensity={0.5} /> {/* Genel aydınlık */}
        <directionalLight
          position={[2, 5, 2]}
          intensity={1}
          color="#a855f7"
        />{" "}
        {/* Mor ışık kaynağı */}
        {/* Suspense: Model yüklenirken React patlamasın diye */}
        <Suspense fallback={null}>
          {/* Float: Kürenin havada hafifçe süzülmesini sağlar (aşağı-yukarı) */}
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <BlackOrb startAnimation={startAnimation} />
          </Float>

          {/* Ortam Yansıması (Daha gerçekçi metalik his için) */}
          <Environment preset="dawn" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
